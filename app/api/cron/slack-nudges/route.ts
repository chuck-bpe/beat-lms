import { NextResponse } from "next/server";
import { getAdminProgressSummary } from "@/lib/progress-db";
import { buildSlackNudgesText, getDefaultSlackChannel, sendSlackMessage } from "@/lib/slack";

function isAuthorized(request: Request) {
  const expected = process.env.CRON_SECRET;
  const provided = request.headers.get("authorization");

  return expected && provided === `Bearer ${expected}`;
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const progressSummary = await getAdminProgressSummary();
  const atRiskLearners = progressSummary.learners.filter((learner) => learner.needsNudge);
  const currentModule = progressSummary.learners.length
    ? Math.max(1, Math.min(...progressSummary.learners.map((learner) => learner.currentWeek)))
    : 1;

  await sendSlackMessage({
    channel: getDefaultSlackChannel(),
    text: buildSlackNudgesText({
      atRiskLearnerNames: atRiskLearners.map((learner) => learner.name),
      currentModule
    })
  });

  return NextResponse.json({ ok: true });
}
