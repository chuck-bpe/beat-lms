import { createClient } from "@/lib/supabase/server";
import type { Lesson, Week } from "@/lib/beat-data";

type ModuleRow = {
  id: string;
  week_number: number;
  title: string;
  theme: string;
  outcome: string;
  badge: string;
  is_published: boolean;
};

type LessonRow = {
  id: string;
  module_id: string;
  title: string;
  format: "lesson" | "demo" | "assignment" | "quiz" | "template";
  duration: string;
  description: string;
  position: number;
};

export type PublishedLesson = Lesson & {
  id: string;
};

export type PublishedWeek = Omit<Week, "lessons"> & {
  id: string;
  lessons: PublishedLesson[];
};

export async function getPublishedWeeks(): Promise<Week[]> {
  const weeks = await getPublishedWeeksDetailed();
  return weeks.map(({ id: _id, ...week }) => week);
}

export async function getPublishedWeeksDetailed(): Promise<PublishedWeek[]> {
  const supabase = await createClient();
  const { data: modules, error: modulesError } = await supabase
    .from("modules")
    .select("id, week_number, title, theme, outcome, badge, is_published")
    .eq("is_published", true)
    .order("week_number", { ascending: true });

  if (modulesError) {
    throw modulesError;
  }

  const moduleRows = (modules ?? []) as ModuleRow[];

  if (moduleRows.length === 0) {
    return [];
  }

  const { data: lessons, error: lessonsError } = await supabase
    .from("lessons")
    .select("id, module_id, title, format, duration, description, position")
    .in(
      "module_id",
      moduleRows.map((module) => module.id)
    )
    .order("position", { ascending: true });

  if (lessonsError) {
    throw lessonsError;
  }

  const lessonRows = (lessons ?? []) as LessonRow[];

  return moduleRows.map((module) => ({
    id: module.id,
    week: module.week_number,
    title: module.title,
    theme: module.theme,
    outcome: module.outcome,
    badge: module.badge,
    focus: [],
    lessons: lessonRows
      .filter((lesson) => lesson.module_id === module.id)
      .sort((a, b) => a.position - b.position)
      .map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        duration: lesson.duration,
        format: lesson.format,
        description: lesson.description
      }))
  }));
}
