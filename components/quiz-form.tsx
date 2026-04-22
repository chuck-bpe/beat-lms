"use client";

import { useState } from "react";
import { saveQuizResponse } from "@/lib/quiz-db";

export type MCQQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

type QuizFormProps = {
  weekNumber: number;
  questions: MCQQuestion[];
  existingResponse?: {
    score: number;
    total: number;
    answers: Record<number, number>;
  } | null;
};

export function QuizForm({ weekNumber, questions, existingResponse }: QuizFormProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>(
    existingResponse?.answers ?? {}
  );
  const [submitted, setSubmitted] = useState(!!existingResponse);
  const [score, setScore] = useState<number | null>(existingResponse?.score ?? null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = questions.length;

  function handleSelect(questionIndex: number, optionIndex: number) {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  }

  async function handleSubmit() {
    if (Object.keys(selectedAnswers).length < questions.length) {
      setError("Please answer all questions before submitting.");
      return;
    }

    setSaving(true);
    setError(null);

    try {
      const { score: serverScore } = await saveQuizResponse(weekNumber, selectedAnswers);
      setScore(serverScore);
      setSubmitted(true);
    } catch {
      setError("Failed to save your quiz. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="quiz-form">
      {submitted && score !== null ? (
        <div className="quiz-score-banner">
          <strong>
            Score: {score} / {total}
          </strong>
          <span className="muted">
            {score === total
              ? " — Perfect score!"
              : score >= total * 0.8
                ? " — Strong work."
                : " — Review the questions below and revisit the lesson content."}
          </span>
        </div>
      ) : null}

      <ol className="quiz-question-list">
        {questions.map((q, qi) => {
          const selected = selectedAnswers[qi];
          const isCorrect = submitted && selected === q.correctIndex;
          const isWrong = submitted && selected !== undefined && selected !== q.correctIndex;

          return (
            <li key={qi} className={`quiz-question ${submitted ? (isCorrect ? "correct" : isWrong ? "wrong" : "") : ""}`}>
              <p className="quiz-question-text">{q.question}</p>
              <ul className="quiz-options">
                {q.options.map((option, oi) => {
                  const isSelected = selected === oi;
                  const isCorrectOption = q.correctIndex === oi;
                  let optionClass = "quiz-option";
                  if (submitted && isCorrectOption) optionClass += " option-correct";
                  else if (submitted && isSelected && !isCorrectOption) optionClass += " option-wrong";
                  else if (!submitted && isSelected) optionClass += " option-selected";

                  return (
                    <li key={oi} className={optionClass}>
                      <label>
                        <input
                          type="radio"
                          name={`q${qi}`}
                          value={oi}
                          checked={isSelected}
                          disabled={submitted}
                          onChange={() => handleSelect(qi, oi)}
                        />
                        {option}
                        {submitted && isCorrectOption ? " ✓" : ""}
                        {submitted && isSelected && !isCorrectOption ? " ✗" : ""}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>

      {!submitted ? (
        <div className="cta-row">
          {error ? <p className="error-text">{error}</p> : null}
          <button className="button primary" onClick={handleSubmit} disabled={saving}>
            {saving ? "Saving…" : "Submit quiz"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
