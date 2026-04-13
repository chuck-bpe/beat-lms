# Blueprint Expansion AI Training (BEAT)

BEAT is a web-based internal LMS for a recruiting team learning to use AI more effectively over 12 practical weeks.

## MVP direction

- One admin and invite-only learners
- Self-paced curriculum with shared baseline for everyone
- Practical recruiting-first lessons with Claude and ChatGPT comparisons
- Progress dashboards, lightweight accountability, and Slack nudges
- Prompt library, workflow gallery, and capstone delivery

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
