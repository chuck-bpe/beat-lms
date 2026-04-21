import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { QuizForm } from "@/components/quiz-form";
import { requireUser } from "@/lib/auth";
import { weeks as fallbackWeeks } from "@/lib/beat-data";
import { getPublishedWeeksDetailed, type PublishedWeek } from "@/lib/beat-db";
import { getCurriculumContent } from "@/lib/curriculum-content";
import { getQuizResponse } from "@/lib/quiz-db";

type LessonPageProps = {
  params: Promise<{
    week: string;
    lesson: string;
  }>;
};

export default async function LessonPage({ params }: LessonPageProps) {
  const profile = await requireUser();
  const { week: weekParam, lesson: lessonParam } = await params;
  const weekNumber = Number(weekParam);
  const lessonNumber = Number(lessonParam);

  if (!Number.isInteger(weekNumber) || !Number.isInteger(lessonNumber)) {
    notFound();
  }

  const weeks: PublishedWeek[] = await getPublishedWeeksDetailed().catch(() =>
    fallbackWeeks.map((week) => ({
      id: String(week.week),
      ...week,
      lessons: week.lessons.map((lesson, index) => ({ id: `${week.week}-${index}`, ...lesson }))
    }))
  );

  const week = weeks.find((candidate) => candidate.week === weekNumber);
  const lesson = week?.lessons[lessonNumber - 1];
  const curriculum = getCurriculumContent(weekNumber);

  if (!week || !lesson || !curriculum) {
    notFound();
  }

  const previousLesson = lessonNumber > 1 ? lessonNumber - 1 : null;
  const nextLesson = lessonNumber < week.lessons.length ? lessonNumber + 1 : null;
  const nextWeekIndex = weeks.findIndex((w) => w.week === weekNumber) + 1;
  const nextWeek = nextLesson === null && nextWeekIndex < weeks.length ? weeks[nextWeekIndex] : null;

  const existingQuizResponse =
    lesson.format === "quiz"
      ? await getQuizResponse(profile.id, weekNumber).catch(() => null)
      : null;

  return (
    <main className="page-shell">
      <Header />

      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Week {week.week} Lesson {lessonNumber}</p>
          <h2>{lesson.title}</h2>
          <p>{lesson.description}</p>
          <div className="cta-row">
            <Link className="button secondary" href="/curriculum">
              Back to full curriculum
            </Link>
            <Link className="button secondary" href="/learner">
              Back to learner mode
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="metric-grid">
            <div className="metric-tile">
              <span>Format</span>
              <strong>{lesson.format}</strong>
            </div>
            <div className="metric-tile">
              <span>Time</span>
              <strong>{lesson.duration}</strong>
            </div>
            <div className="metric-tile">
              <span>Week</span>
              <strong>{week.title}</strong>
            </div>
            <div className="metric-tile">
              <span>Badge</span>
              <strong>{week.badge}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="card beginner-brief">
        <p className="eyebrow">Start Here</p>
        <h3>Before you begin this lesson</h3>
        <div className="curriculum-detail-grid">
          <div className="curriculum-block">
            <strong>What is this?</strong>
            <p>{curriculum.whatThisIs}</p>
          </div>
          <div className="curriculum-block">
            <strong>Why are we starting here?</strong>
            <p>{curriculum.whyThisComesNow}</p>
          </div>
          <div className="curriculum-block">
            <strong>How does this relate to AI?</strong>
            <p>{curriculum.howThisConnectsToAI}</p>
          </div>
          <div className="curriculum-block">
            <strong>What will you be asked to do next?</strong>
            <ol className="ordered-list">
              {curriculum.whatYouWillDoNext.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Learning Objectives</p>
          <h3>What you should be able to do</h3>
          <ul className="clean-list tight-list">
            {curriculum.learningObjectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <p className="eyebrow">Teaching</p>
          <h3>The idea behind this lesson</h3>
          <div className="curriculum-stack">
            {curriculum.teachingOverview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Learn By Example</p>
          <h3>What good looks like</h3>
          <p>{curriculum.workedExample}</p>
        </article>

        <article className="card">
          <p className="eyebrow">Key Takeaways</p>
          <h3>What to remember</h3>
          <ul className="clean-list tight-list">
            {curriculum.lessonTakeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Guided Practice</p>
          <h3>Do this before the main assignment</h3>
          <ol className="ordered-list">
            {curriculum.guidedPractice.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="card">
          <p className="eyebrow">Demo Flow</p>
          <h3>How the concept is demonstrated</h3>
          <ol className="ordered-list">
            {curriculum.demoSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </section>

      {lesson.format === "assignment" ? (
        <section className="card">
          <p className="eyebrow">Assignment</p>
          <h3>{curriculum.assignmentDeliverable}</h3>
          <ol className="ordered-list">
            {curriculum.assignmentSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="muted lesson-action-note">
            Submit this work from learner mode so it is saved to your BEAT progress.
          </p>
          <Link className="button primary" href="/learner">
            Submit in learner mode
          </Link>
        </section>
      ) : null}

      {lesson.format === "quiz" ? (
        <section className="card">
          <p className="eyebrow">Check Yourself</p>
          <h3>Use these questions to confirm the lesson landed</h3>
          <QuizForm
            userId={profile.id}
            weekNumber={weekNumber}
            questions={curriculum.quizQuestions}
            existingResponse={existingQuizResponse}
          />
        </section>
      ) : null}

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Common Mistakes</p>
          <h3>What to avoid</h3>
          <ul className="clean-list tight-list">
            {curriculum.commonMistakes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <p className="eyebrow">Done Standard</p>
          <h3>What counts as complete</h3>
          <ul className="clean-list tight-list">
            {curriculum.gradingStandard.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="split-grid">
        <article className="card">
          <p className="eyebrow">Plain English Vocabulary</p>
          <h3>Terms you should know</h3>
          <ul className="clean-list tight-list">
            {curriculum.plainEnglishVocabulary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <p className="eyebrow">Optional Resources</p>
          <h3>If you want more context</h3>
          <div className="asset-list">
            {curriculum.recommendedResources.map((resource) => (
              <a className="asset-row resource-link" href={resource.url} key={resource.url} rel="noreferrer" target="_blank">
                <span className="pill">Resource</span>
                <div>
                  <strong>{resource.label}</strong>
                  <p>{resource.url}</p>
                </div>
              </a>
            ))}
          </div>
        </article>
      </section>

      {profile.role === "admin" ? (
        <section className="card">
          <p className="eyebrow">Facilitator Notes</p>
          <h3>How to teach or coach this lesson</h3>
          <ul className="clean-list tight-list">
            {curriculum.facilitatorNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="card lesson-navigation">
        <div>
          <p className="eyebrow">Lesson Navigation</p>
          <h3>Keep moving through Week {week.week}</h3>
        </div>
        <div className="cta-row">
          {previousLesson ? (
            <Link className="button secondary" href={`/curriculum/week/${week.week}/lesson/${previousLesson}`}>
              Previous lesson
            </Link>
          ) : null}
          {nextLesson ? (
            <Link className="button primary" href={`/curriculum/week/${week.week}/lesson/${nextLesson}`}>
              Next lesson
            </Link>
          ) : nextWeek ? (
            <Link className="button primary" href={`/curriculum/week/${nextWeek.week}/lesson/1`}>
              Start Week {nextWeek.week}
            </Link>
          ) : (
            <Link className="button primary" href="/learner">
              Complete week in learner mode
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
