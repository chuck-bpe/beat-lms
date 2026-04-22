# Blueprint Expansion AI Training (BEAT)

BEAT is a web-based internal LMS for a recruiting team learning to use AI more effectively over 12 practical weeks.

## MVP direction

- One admin and invite-only learners
- Self-paced, 12-week curriculum: terminal basics → Codex → Claude Code → prompting → review → reusable skills → MCP → delegation → evals → micro-agents → capstone
- Hands-on every week: real terminal commands, committed repos, skill files, and assignments
- Progress dashboards, lightweight accountability, and Slack nudges
- Prompt library, workflow gallery, and capstone operating habit delivery

## Required Supabase setup

Run `/supabase/migrations/20240101000000_quiz_responses.sql` in the Supabase SQL editor before the quiz feature will work.

## Recommended production stack

- Next.js on Vercel
- Supabase for Postgres and magic link auth
- Slack integration for reminders and admin digests

## Local setup

1. Install dependencies with `npm install`
2. Copy `.env.example` to `.env.local`
3. Run `npm run dev`

## Suggested phase sequence

1. Static seeded MVP interface
2. Supabase auth and persistent data models
3. Slack integration and reminder automation
4. Admin authoring and richer in-app practice features

## Automation notes

- `SLACK_BOT_TOKEN` should be a Slack bot token with `chat:write`
- `SLACK_DEFAULT_CHANNEL` should be the Slack channel or channel ID for BEAT digests
- `CRON_SECRET` protects the cron routes used for automated digests and nudges
- `vercel.json` defines the production cron schedule
- Current schedule:
- Monday at 16:00 UTC sends the admin digest
- Wednesday at 17:00 UTC sends overdue learner nudges
