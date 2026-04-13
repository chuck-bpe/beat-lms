import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

type SlackMessageArgs = {
  channel: string;
  text: string;
};

function readLocalEnvValue(key: string) {
  const envPath = path.join(process.cwd(), ".env.local");

  if (!existsSync(envPath)) {
    return "";
  }

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  const line = lines.find((entry) => entry.startsWith(`${key}=`));

  return line ? line.slice(key.length + 1).trim() : "";
}

function getSlackEnv() {
  const token = process.env.SLACK_BOT_TOKEN || readLocalEnvValue("SLACK_BOT_TOKEN");
  const defaultChannel =
    process.env.SLACK_DEFAULT_CHANNEL || readLocalEnvValue("SLACK_DEFAULT_CHANNEL");

  if (!token || !defaultChannel) {
    throw new Error(
      "Missing Slack configuration. Add SLACK_BOT_TOKEN and SLACK_DEFAULT_CHANNEL to .env.local."
    );
  }

  return { token, defaultChannel };
}

export async function sendSlackMessage({ channel, text }: SlackMessageArgs) {
  const { token } = getSlackEnv();

  const response = await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      channel,
      text
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Slack request failed with status ${response.status}.`);
  }

  const payload = (await response.json()) as { ok: boolean; error?: string };

  if (!payload.ok) {
    throw new Error(payload.error || "Slack API returned an unknown error.");
  }
}

export function getDefaultSlackChannel() {
  return getSlackEnv().defaultChannel;
}

export function buildSlackDigestText(args: {
  averageCompletion: number;
  atRiskLearnerNames: string[];
  recentSubmissionLabels: string[];
}) {
  const { averageCompletion, atRiskLearnerNames, recentSubmissionLabels } = args;

  return [
    "*BEAT Digest*",
    `Average completion: ${averageCompletion}%`,
    `Learners behind pace: ${atRiskLearnerNames.length}`,
    atRiskLearnerNames.length
      ? `Behind pace: ${atRiskLearnerNames.join(", ")}`
      : "Behind pace: none",
    recentSubmissionLabels.length
      ? `Recent submissions: ${recentSubmissionLabels.join(", ")}`
      : "Recent submissions: none yet"
  ].join("\n");
}

export function buildSlackNudgesText(args: {
  atRiskLearnerNames: string[];
  currentModule: number;
}) {
  const { atRiskLearnerNames, currentModule } = args;

  if (!atRiskLearnerNames.length) {
    return "*BEAT Nudges*\nNo learners are currently behind pace.";
  }

  return [
    "*BEAT Nudges*",
    `Current focus: Week ${currentModule}`,
    "Learners who need a nudge:",
    ...atRiskLearnerNames.map(
      (name) =>
        `- ${name}: You are a bit behind in BEAT. Complete your current module checklist and keep momentum moving this week.`
    )
  ].join("\n");
}
