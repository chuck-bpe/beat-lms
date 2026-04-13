"use client";

import { useActionState } from "react";
import { sendSlackNudges, type SlackDigestState } from "./actions";

const initialState: SlackDigestState = {
  status: "idle",
  message: ""
};

export function SlackNudgesForm() {
  const [state, formAction, pending] = useActionState(sendSlackNudges, initialState);

  return (
    <form action={formAction} className="slack-form">
      <button className="button secondary" type="submit" disabled={pending}>
        {pending ? "Sending nudges..." : "Send overdue nudges"}
      </button>
      {state.message ? (
        <p className={state.status === "error" ? "error-text" : "success-text"}>{state.message}</p>
      ) : null}
    </form>
  );
}
