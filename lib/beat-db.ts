import { createClient } from "@/lib/supabase/server";
import { weeks as canonicalWeeks, type Lesson, type Week } from "@/lib/beat-data";

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

  return moduleRows.map((module) => {
    const canonicalWeek = canonicalWeeks.find((week) => week.week === module.week_number);
    const moduleLessons = lessonRows
      .filter((lesson) => lesson.module_id === module.id)
      .sort((a, b) => a.position - b.position)
      .map((lesson, index) => {
        const canonicalLesson = canonicalWeek?.lessons[index];

        return {
          id: lesson.id,
          title: canonicalLesson?.title ?? lesson.title,
          duration: canonicalLesson?.duration ?? lesson.duration,
          format: canonicalLesson?.format ?? lesson.format,
          description: canonicalLesson?.description ?? lesson.description
        };
      });

    return {
      id: module.id,
      week: module.week_number,
      title: canonicalWeek?.title ?? module.title,
      theme: canonicalWeek?.theme ?? module.theme,
      outcome: canonicalWeek?.outcome ?? module.outcome,
      badge: canonicalWeek?.badge ?? module.badge,
      focus: canonicalWeek?.focus ?? [],
      lessons: moduleLessons
    };
  });
}
