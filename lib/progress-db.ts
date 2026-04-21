import type { Learner } from "@/lib/beat-data";
import { createClient } from "@/lib/supabase/server";
import { getPublishedWeeksDetailed, type PublishedWeek } from "@/lib/beat-db";

type ProgressRow = {
  user_id: string;
  lesson_id: string | null;
  status: "not_started" | "in_progress" | "completed";
};

type UserRow = {
  id: string;
  full_name: string | null;
  email: string;
  role: "admin" | "learner";
};

type SubmissionRow = {
  id: string;
  user_id: string;
  module_id: string;
  lesson_id: string | null;
  content: string;
  created_at: string;
  review_status?: "submitted" | "reviewed" | "needs_revision" | null;
};

type SubmissionView = SubmissionRow & {
  learnerName: string;
  learnerEmail: string;
  moduleTitle: string;
  lessonTitle: string;
  reviewStatus: "submitted" | "reviewed" | "needs_revision";
};

function durationToMinutes(duration: string) {
  const minutes = Number.parseInt(duration, 10);
  return Number.isFinite(minutes) ? minutes : 0;
}

export async function getLearnerProgressSummary(userId: string) {
  const [weeks, supabase] = await Promise.all([getPublishedWeeksDetailed(), createClient()]);
  const { data, error } = await supabase
    .from("progress")
    .select("user_id, lesson_id, status")
    .eq("user_id", userId);

  if (error) {
    throw error;
  }

  const progressRows = (data ?? []) as ProgressRow[];
  const completedLessonIds = new Set(
    progressRows.filter((row) => row.status === "completed" && row.lesson_id).map((row) => row.lesson_id as string)
  );

  const currentWeek =
    weeks.find((week) => week.lessons.some((lesson) => !completedLessonIds.has(lesson.id))) ?? weeks[0];

  const completedInCurrentWeek = currentWeek?.lessons.filter((lesson) => completedLessonIds.has(lesson.id)).length ?? 0;
  const totalLessons = currentWeek?.lessons.length || 1;
  const progressPercent = Math.round((completedInCurrentWeek / totalLessons) * 100);
  const remainingMinutes =
    currentWeek?.lessons.reduce((sum, lesson) => {
      return completedLessonIds.has(lesson.id) ? sum : sum + durationToMinutes(lesson.duration);
    }, 0) ?? 0;

  return {
    weeks,
    currentWeekNumber: currentWeek?.week ?? 1,
    progressPercent,
    remainingMinutes,
    completedLessonTitles: new Set(
      currentWeek?.lessons.filter((lesson) => completedLessonIds.has(lesson.id)).map((lesson) => lesson.title) ?? []
    )
  };
}

export async function getAdminProgressSummary(): Promise<{
  learners: Learner[];
  averageCompletion: number;
  nudgeCount: number;
}> {
  const [weeks, supabase] = await Promise.all([getPublishedWeeksDetailed(), createClient()]);
  const { data: users, error: usersError } = await supabase
    .from("users")
    .select("id, full_name, email, role")
    .eq("role", "learner")
    .order("full_name", { ascending: true });

  if (usersError) {
    throw usersError;
  }

  const learnerRows = (users ?? []) as UserRow[];
  const { data: progressRows, error: progressError } = await supabase
    .from("progress")
    .select("user_id, lesson_id, status");

  if (progressError) {
    throw progressError;
  }

  const progress = (progressRows ?? []) as ProgressRow[];
  const totalLessons = weeks.reduce((sum, week) => sum + week.lessons.length, 0) || 1;

  const learners = learnerRows.map((user) => {
    const completed = progress.filter(
      (row) => row.user_id === user.id && row.status === "completed" && row.lesson_id
    ).length;
    const completionRate = Math.round((completed / totalLessons) * 100);
    const currentWeek = Math.min(weeks.length, Math.floor(completed / 4) + 1);

    return {
      name: user.full_name || user.email,
      role: "Learner",
      streak: 0,
      completionRate,
      currentWeek,
      confidence: 0,
      needsNudge: completed < (currentWeek - 1) * 3
    };
  });

  const averageCompletion =
    learners.length > 0
      ? Number(
          (learners.reduce((sum, learner) => sum + learner.completionRate, 0) / learners.length).toFixed(1)
        )
      : 0;

  return {
    learners,
    averageCompletion,
    nudgeCount: learners.filter((learner) => learner.needsNudge).length
  };
}

export async function getLearnerSubmissions(userId: string) {
  const [weeks, supabase] = await Promise.all([getPublishedWeeksDetailed(), createClient()]);
  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return ((data ?? []) as SubmissionRow[]).map((submission) => {
    const module = weeks.find((week) => week.id === submission.module_id);
    const lesson = module?.lessons.find((item) => item.id === submission.lesson_id);

    return {
      ...submission,
      learnerName: "",
      learnerEmail: "",
      moduleTitle: module?.title ?? "Unknown module",
      lessonTitle: lesson?.title ?? "Unknown lesson",
      reviewStatus: submission.review_status ?? "submitted"
    };
  });
}

export async function getRecentSubmissions() {
  const [weeks, supabase] = await Promise.all([getPublishedWeeksDetailed(), createClient()]);
  const { data: users, error: usersError } = await supabase
    .from("users")
    .select("id, full_name, email");

  if (usersError) {
    throw usersError;
  }

  const userRows = (users ?? []) as Array<{ id: string; full_name: string | null; email: string }>;
  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    throw error;
  }

  return ((data ?? []) as SubmissionRow[]).map((submission) => {
    const user = userRows.find((item) => item.id === submission.user_id);
    const module = weeks.find((week) => week.id === submission.module_id);
    const lesson = module?.lessons.find((item) => item.id === submission.lesson_id);

    return {
      ...submission,
      learnerName: user?.full_name || user?.email || "Unknown learner",
      learnerEmail: user?.email || "",
      moduleTitle: module?.title ?? "Unknown module",
      lessonTitle: lesson?.title ?? "Unknown lesson",
      reviewStatus: submission.review_status ?? "submitted"
    } satisfies SubmissionView;
  });
}
