import Link from "next/link";
import { Week } from "@/lib/beat-data";

type WeekCardProps = {
  week: Week;
  compact?: boolean;
};

export function WeekCard({ week, compact = false }: WeekCardProps) {
  return (
    <article className={`card week-card ${compact ? "compact" : ""}`}>
      <div className="week-heading">
        <div>
          <p className="eyebrow">Week {week.week}</p>
          <h3>{week.title}</h3>
        </div>
        <span className="badge">{week.badge}</span>
      </div>
      <p className="muted">{week.theme}</p>
      <p>{week.outcome}</p>
      {week.focus.length ? (
        <div className="chip-row">
          {week.focus.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      ) : null}
      <div className="lesson-list">
        {week.lessons.map((lesson, index) => (
          <div className="lesson-row" key={lesson.title}>
            <div>
              <Link className="lesson-link" href={`/curriculum/week/${week.week}/lesson/${index + 1}`}>
                {lesson.title}
              </Link>
              <p className="muted">
                {lesson.format} • {lesson.duration}
              </p>
            </div>
            {!compact ? <p>{lesson.description}</p> : null}
          </div>
        ))}
      </div>
    </article>
  );
}
