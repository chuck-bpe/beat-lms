"use server";

import { requireUser } from "@/lib/auth";
import { getCurriculumContent } from "@/lib/curriculum-content";
import { createClient } from "@/lib/supabase/server";

export type QuizResponse = {
  id: string;
  user_id: string;
  week_number: number;
  score: number;
  total: number;
  answers: Record<string, number>;
  created_at: string;
};

export async function saveQuizResponse(
  weekNumber: number,
  answers: Record<number, number>
): Promise<{ score: number; total: number }> {
  const profile = await requireUser();
  const curriculum = getCurriculumContent(weekNumber);

  if (!curriculum) {
    throw new Error(`No curriculum found for week ${weekNumber}`);
  }

  const questions = curriculum.quizQuestions;
  const total = questions.length;
  const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0), 0);

  const supabase = await createClient();
  const { error } = await supabase.from("quiz_responses").upsert(
    {
      user_id: profile.id,
      week_number: weekNumber,
      score,
      total,
      answers
    },
    { onConflict: "user_id,week_number" }
  );

  if (error) {
    throw error;
  }

  return { score, total };
}

export async function getQuizResponse(
  userId: string,
  weekNumber: number
): Promise<{ score: number; total: number; answers: Record<number, number> } | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("quiz_responses")
    .select("score, total, answers")
    .eq("user_id", userId)
    .eq("week_number", weekNumber)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  return {
    score: data.score,
    total: data.total,
    answers: data.answers as Record<number, number>
  };
}

export async function getAllQuizScores(): Promise<
  Array<{
    userId: string;
    weekNumber: number;
    score: number;
    total: number;
    createdAt: string;
    userEmail?: string;
    userName?: string;
  }>
> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("quiz_responses")
    .select("user_id, week_number, score, total, created_at, users(email, full_name)")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []).map((row: any) => ({
    userId: row.user_id,
    weekNumber: row.week_number,
    score: row.score,
    total: row.total,
    createdAt: row.created_at,
    userEmail: row.users?.email,
    userName: row.users?.full_name
  }));
}
