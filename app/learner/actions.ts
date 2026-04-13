"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";

export async function markLessonComplete(formData: FormData) {
  const profile = await requireUser();
  const lessonId = String(formData.get("lessonId") || "");
  const moduleId = String(formData.get("moduleId") || "");

  if (!lessonId || !moduleId) {
    return;
  }

  const supabase = await createClient();
  const { error } = await supabase.from("progress").upsert(
    {
      user_id: profile.id,
      module_id: moduleId,
      lesson_id: lessonId,
      status: "completed",
      completed_at: new Date().toISOString()
    },
    {
      onConflict: "user_id,lesson_id"
    }
  );

  if (error) {
    throw error;
  }

  revalidatePath("/learner");
  revalidatePath("/admin");
}

export async function submitAssignment(formData: FormData) {
  const profile = await requireUser();
  const lessonId = String(formData.get("lessonId") || "");
  const moduleId = String(formData.get("moduleId") || "");
  const content = String(formData.get("content") || "").trim();

  if (!lessonId || !moduleId || !content) {
    return;
  }

  const supabase = await createClient();
  const { error } = await supabase.from("submissions").insert({
    user_id: profile.id,
    module_id: moduleId,
    lesson_id: lessonId,
    submission_type: "text",
    content
  });

  if (error) {
    throw error;
  }

  revalidatePath("/learner");
  revalidatePath("/admin");
}
