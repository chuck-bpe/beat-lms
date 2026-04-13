import { Header } from "@/components/header";
import { requireUser } from "@/lib/auth";
import { WeekCard } from "@/components/week-card";
import { promptLibrary, weeks as fallbackWeeks } from "@/lib/beat-data";
import { getPublishedWeeksDetailed, type PublishedWeek } from "@/lib/beat-db";
import { getLearnerProgressSummary, getLearnerSubmissions } from "@/lib/progress-db";
import { markLessonComplete, submitAssignment } from "./actions";

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
  const currentAssignment = currentWeek.lessons.find((lesson) => lesson.format === "assignment");

  return (
    <main className="page-shell">
      <Header />

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
            {currentWeek.lessons.map((lesson) => (
              <li key={lesson.title}>
                <span
                  className={`check-circle ${
                    progressSummary.completedLessonTitles.has(lesson.title) ? "complete" : ""
                  }`}
                />
                <div>
                  <strong>{lesson.title}</strong>
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
          <p className="eyebrow">Assignment Submission</p>
          <h3>Turn in the work for this week</h3>
          {currentAssignment ? (
            <form action={submitAssignment} className="playground-box">
              <label htmlFor="assignment">
                {currentAssignment.title}
              </label>
              <input type="hidden" name="lessonId" value={currentAssignment.id} />
              <input type="hidden" name="moduleId" value={currentWeek.id} />
              <textarea
                id="assignment"
                name="content"
                placeholder="Paste your sourcing notes, outreach draft, workflow redesign, or reflection here."
              />
              <div className="cta-row">
                <button className="button primary" type="submit">
                  Submit assignment
                </button>
              </div>
            </form>
          ) : (
            <p>No assignment is available for this module yet.</p>
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

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Prompt Playground</p>
          <h3>Train on real recruiting work</h3>
          <div className="playground-box">
            <label htmlFor="exercise">Practice prompt</label>
            <textarea
              id="exercise"
              defaultValue="You are helping me plan a sourcing sprint for a VP of Product search. Build a target company list, likely candidate backgrounds, and 5 calibration questions."
            />
            <div className="cta-row">
              <button className="button primary" type="button">
                Run practice
              </button>
              <button className="button secondary" type="button">
                Compare in Claude vs ChatGPT
              </button>
            </div>
          </div>
        </article>

        <article className="card">
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
        </article>
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
