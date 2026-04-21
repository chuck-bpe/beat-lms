import Link from "next/link";
import { Header } from "@/components/header";
import { requireUser } from "@/lib/auth";
import { weeks as fallbackWeeks } from "@/lib/beat-data";
import { getPublishedWeeksDetailed, type PublishedWeek } from "@/lib/beat-db";
import { getCurriculumContent } from "@/lib/curriculum-content";

export default async function CurriculumPage() {
  const profile = await requireUser();

  const weeks: PublishedWeek[] = await getPublishedWeeksDetailed().catch(() =>
    fallbackWeeks.map((week) => ({
      id: String(week.week),
      ...week,
      lessons: week.lessons.map((lesson, index) => ({ id: `${week.week}-${index}`, ...lesson }))
    }))
  );

  return (
    <main className="page-shell">
      <Header />

      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Full Curriculum</p>
          <h2>Review the complete 12-week BEAT program.</h2>
          <p>
            This is the authored curriculum view for admins and learners. Use it to review each week’s goals, lesson
            checklist, assignment expectations, reflection prompts, quiz questions, and completion standard.
          </p>
        </div>
        <div className="hero-panel">
          <div className="metric-grid">
            <div className="metric-tile">
              <span>Program length</span>
              <strong>{weeks.length} weeks</strong>
            </div>
            <div className="metric-tile">
              <span>Weekly target</span>
              <strong>2 hours</strong>
            </div>
            <div className="metric-tile">
              <span>Primary mode</span>
              <strong>Hands-on</strong>
            </div>
            <div className="metric-tile">
              <span>Standard</span>
              <strong>Useful work</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="curriculum-review-stack">
        {weeks.map((week) => {
          const curriculum = getCurriculumContent(week.week);

          return (
            <article className="card curriculum-review-card" key={week.week}>
              <div className="week-heading">
                <div>
                  <p className="eyebrow">Week {week.week}</p>
                  <h3>{week.title}</h3>
                  <p className="muted">{week.theme}</p>
                </div>
                <span className="badge">{week.badge}</span>
              </div>

              <p className="curriculum-outcome">{week.outcome}</p>

              <div className="chip-row">
                {week.focus.map((focus, index) => (
                  <Link
                    className="chip"
                    href={`/curriculum/week/${week.week}/lesson/${Math.min(index + 1, week.lessons.length)}`}
                    key={focus}
                  >
                    {focus}
                  </Link>
                ))}
              </div>

              <div className="curriculum-section-grid">
                <section>
                  <strong>Lesson checklist</strong>
                  <div className="lesson-list">
                    {week.lessons.map((lesson, index) => (
                      <div className="lesson-row" key={lesson.title}>
                        <span className="pill">{lesson.format}</span>
                        <div>
                          <Link className="lesson-link" href={`/curriculum/week/${week.week}/lesson/${index + 1}`}>
                            {lesson.title}
                          </Link>
                          <p className="muted">{lesson.duration}</p>
                          <p>{lesson.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {curriculum ? (
                  <section className="curriculum-stack">
                    <div className="curriculum-block">
                      <strong>Week guide</strong>
                      <p>{curriculum.summary}</p>
                    </div>
                    <div className="curriculum-block">
                      <strong>Start here</strong>
                      <p>
                        <strong>What this is:</strong> {curriculum.whatThisIs}
                      </p>
                      <p>
                        <strong>Why now:</strong> {curriculum.whyThisComesNow}
                      </p>
                      <p>
                        <strong>AI connection:</strong> {curriculum.howThisConnectsToAI}
                      </p>
                    </div>
                    <div className="curriculum-block">
                      <strong>Learning objectives</strong>
                      <ul className="clean-list tight-list">
                        {curriculum.learningObjectives.map((objective) => (
                          <li key={objective}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="curriculum-block">
                      <strong>Teaching overview</strong>
                      {curriculum.teachingOverview.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="curriculum-block">
                      <strong>Key takeaways</strong>
                      <ul className="clean-list tight-list">
                        {curriculum.lessonTakeaways.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </section>
                ) : null}
              </div>

              {curriculum ? (
                <div className="curriculum-detail-grid">
                  <section className="curriculum-block">
                    <strong>Demo flow</strong>
                    <ol className="ordered-list">
                      {curriculum.demoSteps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </section>

                  <section className="curriculum-block">
                    <strong>Learn by example</strong>
                    <p>{curriculum.workedExample}</p>
                  </section>

                  <section className="curriculum-block">
                    <strong>Assignment deliverable</strong>
                    <p>{curriculum.assignmentDeliverable}</p>
                    <ol className="ordered-list">
                      {curriculum.assignmentSteps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </section>

                  <section className="curriculum-block">
                    <strong>Guided practice</strong>
                    <ol className="ordered-list">
                      {curriculum.guidedPractice.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </section>

                  <section className="curriculum-block">
                    <strong>What learners will do next</strong>
                    <ol className="ordered-list">
                      {curriculum.whatYouWillDoNext.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </section>

                  <section className="curriculum-block">
                    <strong>Reflection prompts</strong>
                    <ul className="clean-list tight-list">
                      {curriculum.reflectionPrompts.map((prompt) => (
                        <li key={prompt}>{prompt}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="curriculum-block">
                    <strong>Check yourself</strong>
                    <ol className="ordered-list">
                      {curriculum.quizQuestions.map((q) => (
                        <li key={q.question}>{q.question}</li>
                      ))}
                    </ol>
                  </section>

                  <section className="curriculum-block full-span">
                    <strong>What counts as done</strong>
                    <ul className="clean-list tight-list">
                      {curriculum.gradingStandard.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="curriculum-block">
                    <strong>Common mistakes to avoid</strong>
                    <ul className="clean-list tight-list">
                      {curriculum.commonMistakes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {profile.role === "admin" ? (
                    <section className="curriculum-block">
                      <strong>Facilitator notes</strong>
                      <ul className="clean-list tight-list">
                        {curriculum.facilitatorNotes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  ) : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </section>
    </main>
  );
}
