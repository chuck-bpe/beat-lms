import Link from "next/link";
import { Header } from "@/components/header";
import { WeekCard } from "@/components/week-card";
import { productPrinciples, promptLibrary, weeks as fallbackWeeks } from "@/lib/beat-data";
import { getPublishedWeeks } from "@/lib/beat-db";

export default async function HomePage() {
  const weeks = await getPublishedWeeks().catch(() => fallbackWeeks);
  const featuredWeeks = weeks.slice(0, 3);

  return (
    <main className="page-shell">
      <Header />

      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Internal Recruiting Bootcamp</p>
          <h2>Build real AI confidence across the team in 12 practical weeks.</h2>
          <p>
            BEAT is a calm, recruiting-first learning system designed to help your
            team use Claude, ChatGPT, internal tools, and simple agents without
            intimidation or drift.
          </p>
          <div className="cta-row">
            <Link className="button primary" href="/auth">
              Sign in to BEAT
            </Link>
            <Link className="button secondary" href="/admin">
              Open admin view
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="metric-grid">
            <div className="metric-tile">
              <span>Program length</span>
              <strong>12 weeks</strong>
            </div>
            <div className="metric-tile">
              <span>Weekly load</span>
              <strong>2 hours</strong>
            </div>
            <div className="metric-tile">
              <span>Audience</span>
              <strong>5 teammates</strong>
            </div>
            <div className="metric-tile">
              <span>Core tools</span>
              <strong>Claude + ChatGPT</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Product Principles</p>
          <h3>What this MVP is optimizing for</h3>
          <ul className="clean-list">
            {productPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <p className="eyebrow">v1 Scope</p>
          <h3>Fast MVP with room to grow</h3>
          <ul className="clean-list">
            <li>Invite-only access with future magic-link auth integration</li>
            <li>Shared curriculum for all learners</li>
            <li>Admin progress dashboard and Slack nudge flow</li>
            <li>Prompt library and agent/workflow gallery</li>
            <li>Seeded lessons for the full 12-week journey</li>
          </ul>
        </article>
      </section>

      <section className="section-heading">
        <div>
          <p className="eyebrow">Curriculum Preview</p>
          <h3>The opening stretch of the bootcamp</h3>
        </div>
      </section>
      <section className="stack">
        {featuredWeeks.map((week) => (
          <WeekCard key={week.week} week={week} />
        ))}
      </section>

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Practice Modes</p>
          <h3>How learners will build skill</h3>
          <ul className="clean-list">
            <li>Prompt playground with structured recruiting exercises</li>
            <li>ChatGPT vs Claude side-by-side demos in modules</li>
            <li>Assignments with screenshot, text, and output submissions</li>
            <li>AI-guided feedback for clarity, rigor, and reuse potential</li>
          </ul>
        </article>
        <article className="card">
          <p className="eyebrow">Shared Assets</p>
          <h3>What the team contributes over time</h3>
          <div className="asset-list">
            {promptLibrary.map((asset) => (
              <div className="asset-row" key={asset.title}>
                <span className="pill">{asset.type}</span>
                <div>
                  <strong>{asset.title}</strong>
                  <p>{asset.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
