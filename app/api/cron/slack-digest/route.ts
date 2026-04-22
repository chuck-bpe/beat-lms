import { NextResponse } from "next/server";
import { getAdminProgressSummary, getRecentSubmissions } from "@/lib/progress-db";
import { buildSlackDigestText, getDefaultSlackChannel, sendSlackMessage } from "@/lib/slack";

function isAuthorized(request: Request) {
  const expected = process.env.CRON_SECRET;
  const provided = request.headers.get("authorization");

  return expected && provided === `Bearer ${expected}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const [progressSummary, submissions] = await Promise.all([
    getAdminProgressSummary(),
    getRecentSubmissions()
  ]);
  const atRiskLearners = progressSummary.learners.filter((learner) => learner.needsNudge);
  const topSubmissions = submissions.slice(0, 3);

  await sendSlackMessage({
    channel: getDefaultSlackChannel(),
    text: buildSlackDigestText({
      averageCompletion: progressSummary.averageCompletion,
      atRiskLearnerNames: atRiskLearners.map((learner) => learner.name),
      recentSubmissionLabels: topSubmissions.map(
        (submission) => `${submission.learnerName} (${submission.moduleTitle})`
      )
    })
  });

  return NextResponse.json({ ok: true });
}

export const POST = GET;
