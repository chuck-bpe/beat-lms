import Link from "next/link";
import { Header } from "@/components/header";
import { requireUser } from "@/lib/auth";
import { WeekCard } from "@/components/week-card";
import { promptLibrary, weeks as fallbackWeeks } from "@/lib/beat-data";
import { getCurriculumContent } from "@/lib/curriculum-content";
import { getPublishedWeeksDetailed, type PublishedWeek } from "@/lib/beat-db";
import { getLearnerProgressSummary, getLearnerSubmissions } from "@/lib/progress-db";
import { markLessonComplete } from "./actions";

export default async function LearnerPage() {
  const profile = await requireUser();
  const fallbackDetailedWeeks: PublishedWeek[] = await getPublishedWeeksDetailed().catch(() =>
    fallbackWeeks.map((week) => ({
      id: String(week.week),
      ...week,
      lessons: week.lessons.map((lesson, index) => ({ id: `${week.week}-${index}`, ...lesson }))
    }))
  );
  const progressSummary: {
    weeks: PublishedWeek[];
    currentWeekNumber: number;
    progressPercent: number;
    remainingMinutes: number;
    completedLessonTitles: Set<string>;
  } = await getLearnerProgressSummary(profile.id).catch(() => ({
    weeks: fallbackDetailedWeeks,
    currentWeekNumber: fallbackDetailedWeeks[0]?.week ?? 1,
    progressPercent: 0,
    remainingMinutes:
      fallbackDetailedWeeks[0]?.lessons.reduce((sum, lesson) => sum + Number.parseInt(lesson.duration, 10), 0) ?? 0,
    completedLessonTitles: new Set<string>()
  }));
  const currentWeek =
    progressSummary.weeks.find((week) => week.week === progressSummary.currentWeekNumber) ?? progressSummary.weeks[0];
  const upcomingWeeks = progressSummary.weeks.filter((week) => week.week > currentWeek.week).slice(0, 3);
  const submissions = await getLearnerSubmissions(profile.id).catch(() => []);
  const curriculum = getCurriculumContent(currentWeek.week);

  return (
    <main className="page-shell">
      <Header />

      {profile.role === "admin" ? (
        <section className="card admin-learning-banner">
          <p className="eyebrow">Admin In Learner Mode</p>
          <h3>You can complete BEAT here too</h3>
          <p>
            Your progress and assignment submissions on this page are saved to your own admin account so you can experience
            the program exactly like a learner while still keeping admin access.
          </p>
        </section>
      ) : null}

      <section className="dashboard-grid">
        <article className="card highlight">
          <p className="eyebrow">Current focus</p>
          <h2>Week {currentWeek.week}: {currentWeek.title}</h2>
          <p>{currentWeek.outcome}</p>
          <div className="progress-bar" aria-hidden="true">
            <span style={{ width: `${progressSummary.progressPercent}%` }} />
          </div>
          <div className="stat-row">
            <div>
              <span>Progress</span>
              <strong>{progressSummary.progressPercent}%</strong>
            </div>
            <div>
              <span>Estimated time left</span>
              <strong>{progressSummary.remainingMinutes} min</strong>
            </div>
            <div>
              <span>Next unlock</span>
              <strong>{currentWeek.badge} badge</strong>
            </div>
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">This week’s checklist</p>
          <h3>Simple, practical, and trackable</h3>
          <ul className="check-list">
            {currentWeek.lessons.map((lesson, index) => (
              <li key={lesson.title}>
                <span
                  className={`check-circle ${
                    progressSummary.completedLessonTitles.has(lesson.title) ? "complete" : ""
                  }`}
                />
                <div>
                  <Link className="lesson-link" href={`/curriculum/week/${currentWeek.week}/lesson/${index + 1}`}>
                    {lesson.title}
                  </Link>
                  <p>
                    {lesson.format} • {lesson.duration}
                  </p>
                </div>
                {progressSummary.completedLessonTitles.has(lesson.title) ? (
                  <span className="status-pill done">Done</span>
                ) : (
                  <form action={markLessonComplete} className="inline-form">
                    <input type="hidden" name="lessonId" value={lesson.id} />
                    <input type="hidden" name="moduleId" value={currentWeek.id} />
                    <button className="button secondary small-button" type="submit">
                      Mark complete
                    </button>
                  </form>
                )}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Week Guide</p>
          <h3>What this module is actually teaching</h3>
          {curriculum ? (
            <p>{curriculum.summary}</p>
          ) : (
            <p className="muted">Detailed curriculum notes for this week are not loaded yet.</p>
          )}
        </article>

        <article className="card">
          <p className="eyebrow">Recent Submissions</p>
          <h3>Your latest work</h3>
          {submissions.length ? (
            <div className="asset-list">
              {submissions.slice(0, 4).map((submission) => (
                <div className="asset-row" key={submission.id}>
                  <span className={`pill review-${submission.reviewStatus}`}>{submission.reviewStatus.replace("_", " ")}</span>
                  <div>
                    <strong>
                      {submission.moduleTitle} • {submission.lessonTitle}
                    </strong>
                    <p className="muted">{new Date(submission.created_at).toLocaleString()}</p>
                    <p>{submission.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="muted">No submissions yet. Your first assignment will show up here after you turn it in.</p>
          )}
        </article>
      </section>

      <section className="card">
        <p className="eyebrow">Shared Library</p>
        <h3>Borrow what already works</h3>
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
      </section>

      <section className="section-heading">
        <div>
          <p className="eyebrow">Upcoming Modules</p>
          <h3>What’s coming next</h3>
        </div>
      </section>
      <section className="stack">
        {upcomingWeeks.map((week) => (
          <WeekCard key={week.week} week={week} compact />
        ))}
      </section>
    </main>
  );
}
