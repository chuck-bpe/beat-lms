import { Header } from "@/components/header";
import Link from "next/link";
import { requireRole } from "@/lib/auth";
import { learners, weeks as fallbackWeeks } from "@/lib/beat-data";
import { getPublishedWeeks, getAllWeeksForAdmin } from "@/lib/beat-db";
import { getAdminProgressSummary, getRecentSubmissions } from "@/lib/progress-db";
import { SlackDigestForm } from "./slack-digest-form";
import { SlackNudgesForm } from "./slack-nudges-form";
import { updateSubmissionReviewStatus, toggleModulePublished } from "./actions";

export default async function AdminPage() {
  await requireRole("admin");
  const weeks = await getPublishedWeeks().catch(() => fallbackWeeks);
  const allWeeks = await getAllWeeksForAdmin().catch(() => []);
  const progressSummary = await getAdminProgressSummary().catch(() => ({
    learners,
    averageCompletion: 63.5,
    nudgeCount: learners.filter((learner) => learner.needsNudge).length
  }));
  const atRiskLearners = progressSummary.learners.filter((learner) => learner.needsNudge);
  const currentModule = progressSummary.learners.length
    ? Math.max(1, Math.min(...progressSummary.learners.map((learner) => learner.currentWeek)))
    : 1;
  const submissions = await getRecentSubmissions().catch(() => []);

  return (
    <main className="page-shell">
      <Header />

      <section className="dashboard-grid">
        <article className="card highlight">
          <p className="eyebrow">Admin Overview</p>
          <h2>Team momentum at a glance</h2>
          <div className="metric-grid">
            <div className="metric-tile">
              <span>Active learners</span>
              <strong>{progressSummary.learners.length} / {progressSummary.learners.length}</strong>
            </div>
            <div className="metric-tile">
              <span>Average completion</span>
              <strong>{progressSummary.averageCompletion}%</strong>
            </div>
            <div className="metric-tile">
              <span>Slack nudges due</span>
              <strong>{progressSummary.nudgeCount}</strong>
            </div>
            <div className="metric-tile">
              <span>Current module</span>
              <strong>Week {currentModule}</strong>
            </div>
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Slack Automation Preview</p>
          <h3>Suggested nudges for this week</h3>
          <SlackDigestForm />
          <SlackNudgesForm />
          <div className="slack-preview">
            {atRiskLearners.map((learner) => (
              <div className="notice" key={learner.name}>
                <strong>@{learner.name}</strong>
                <p>
                  You are a bit behind in BEAT. This week’s goal is still very
                  doable in under 2 hours. Complete your current module checklist
                  and keep momentum moving this week.
                </p>
              </div>
            ))}
            <div className="notice admin">
              <strong>Admin digest</strong>
              <p>
                {atRiskLearners.length > 0
                  ? `${atRiskLearners.map((learner) => learner.name).join(", ")} ${
                      atRiskLearners.length === 1 ? "is" : "are"
                    } behind pace. Recommend sending a personal nudge and asking for one blocker each.`
                  : "No learners are behind pace right now. Team momentum looks healthy."}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Learner Mode</p>
          <h3>Experience BEAT as a learner</h3>
          <p>
            You can open the learner experience with your admin account and complete the weekly work yourself. Your admin
            access stays intact while your own progress and submissions are tracked on the learner side.
          </p>
          <div className="cta-row">
            <Link className="button primary" href="/learner">
              Open learner mode
            </Link>
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Learner Progress</p>
          <h3>Week-over-week visibility</h3>
          <div className="table">
            <div className="table-row table-head">
              <span>Name</span>
              <span>Role</span>
              <span>Week</span>
              <span>Completion</span>
              <span>Quiz avg (coming soon)</span>
            </div>
            {progressSummary.learners.map((learner) => (
              <div className="table-row" key={learner.name}>
                <span>{learner.name}</span>
                <span>{learner.role}</span>
                <span>{learner.currentWeek}</span>
                <span>{learner.completionRate}%</span>
                <span>—</span>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Recent Assignment Work</p>
          <h3>What has been submitted recently</h3>
          {submissions.length ? (
            <div className="asset-list">
              {submissions.map((submission) => (
                <div className="asset-row" key={submission.id}>
                  <span className={`pill review-${submission.reviewStatus}`}>{submission.reviewStatus.replace("_", " ")}</span>
                  <div>
                    <strong>
                      {submission.learnerName} • {submission.moduleTitle}
                    </strong>
                    <p className="muted">
                      {submission.lessonTitle} • {new Date(submission.created_at).toLocaleString()}
                    </p>
                    <p>{submission.content}</p>
                    <form action={updateSubmissionReviewStatus} className="review-actions">
                      <input type="hidden" name="submissionId" value={submission.id} />
                      <button className="button secondary small-button" type="submit" name="reviewStatus" value="reviewed">
                        Mark reviewed
                      </button>
                      <button
                        className="button secondary small-button"
                        type="submit"
                        name="reviewStatus"
                        value="needs_revision"
                      >
                        Needs revision
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="muted">No assignment submissions yet. Once learners start turning work in, it will appear here.</p>
          )}
        </article>
      </section>

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Content Rollout</p>
          <h3>Drip schedule and admin control</h3>
          <ul className="clean-list">
            <li>Modules release weekly by default</li>
            <li>Admin can unlock future modules early</li>
            <li>Each week includes lesson, demo, assignment, and quiz</li>
            <li>Weeks 1-6 build terminal, Codex, and Claude Code fluency</li>
            <li>Weeks 7-12 shift into skills, MCP, delegation, evals, and capstone operating habits</li>
          </ul>
          <div className="mini-timeline">
            {allWeeks.map((week) => (
              <div key={week.week} className={`timeline-row${week.isPublished ? "" : " muted"}`}>
                <span>Week {week.week}</span>
                <strong>{week.title}{week.isPublished ? "" : " (unpublished)"}</strong>
                <form action={toggleModulePublished} className="inline-form">
                  <input type="hidden" name="moduleId" value={week.id} />
                  <button className="button secondary small-button" type="submit">
                    {week.isPublished ? "Unpublish" : "Publish"}
                  </button>
                </form>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
