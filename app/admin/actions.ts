"use server";

import { revalidatePath } from "next/cache";
import { requireRole } from "@/lib/auth";
import { getAdminProgressSummary, getRecentSubmissions } from "@/lib/progress-db";
import {
  buildSlackDigestText,
  buildSlackNudgesText,
  getDefaultSlackChannel,
  sendSlackMessage
} from "@/lib/slack";
import { createClient } from "@/lib/supabase/server";

export async function updateSubmissionReviewStatus(formData: FormData) {
  await requireRole("admin");
  const submissionId = String(formData.get("submissionId") || "");
  const reviewStatus = String(formData.get("reviewStatus") || "");

  const allowedStatuses = ["reviewed", "needs_revision"];
  if (!submissionId || !allowedStatuses.includes(reviewStatus)) {
    return;
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("submissions")
    .update({ review_status: reviewStatus })
    .eq("id", submissionId);

  if (error) {
    throw error;
  }

  revalidatePath("/admin");
  revalidatePath("/learner");
}

export async function toggleModulePublished(formData: FormData) {
  await requireRole("admin");
  const moduleId = String(formData.get("moduleId") || "");

  if (!moduleId) {
    return;
  }

  const supabase = await createClient();
  const { data, error: fetchError } = await supabase
    .from("modules")
    .select("is_published")
    .eq("id", moduleId)
    .single();

  if (fetchError || !data) {
    throw fetchError ?? new Error("Module not found");
  }

  const { error } = await supabase
    .from("modules")
    .update({ is_published: !data.is_published })
    .eq("id", moduleId);

  if (error) {
    throw error;
  }

  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath("/curriculum");
}

export type SlackDigestState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendSlackDigest(
  _previousState: SlackDigestState,
  _formData: FormData
): Promise<SlackDigestState> {
  try {
    await requireRole("admin");
    const [progressSummary, submissions] = await Promise.all([
      getAdminProgressSummary(),
      getRecentSubmissions()
    ]);

    const channel = getDefaultSlackChannel();
    const atRiskLearners = progressSummary.learners.filter((learner) => learner.needsNudge);
    const topSubmissions = submissions.slice(0, 3);

    await sendSlackMessage({
      channel,
      text: buildSlackDigestText({
        averageCompletion: progressSummary.averageCompletion,
        atRiskLearnerNames: atRiskLearners.map((learner) => learner.name),
        recentSubmissionLabels: topSubmissions.map(
          (submission) => `${submission.learnerName} (${submission.moduleTitle})`
        )
      })
    });

    return {
      status: "success",
      message: `Slack digest sent to ${channel}.`
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : "Unable to send Slack digest."
    };
  }
}

export async function sendSlackNudges(
  _previousState: SlackDigestState,
  _formData: FormData
): Promise<SlackDigestState> {
  try {
    await requireRole("admin");
    const progressSummary = await getAdminProgressSummary();
    const channel = getDefaultSlackChannel();
    const atRiskLearners = progressSummary.learners.filter((learner) => learner.needsNudge);
    const currentModule = progressSummary.learners.length
      ? Math.max(1, Math.min(...progressSummary.learners.map((learner) => learner.currentWeek)))
      : 1;

    await sendSlackMessage({
      channel,
      text: buildSlackNudgesText({
        atRiskLearnerNames: atRiskLearners.map((learner) => learner.name),
        currentModule
      })
    });

    return {
      status: "success",
      message: `Slack nudges sent to ${channel}.`
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : "Unable to send Slack nudges."
    };
  }
}
