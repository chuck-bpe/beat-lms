"use client";

import { useActionState } from "react";
import { sendSlackDigest, type SlackDigestState } from "./actions";

const initialState: SlackDigestState = {
  status: "idle",
  message: ""
};

export function SlackDigestForm() {
  const [state, formAction, pending] = useActionState(sendSlackDigest, initialState);

  return (
    <form action={formAction} className="slack-form">
      <button className="button primary" type="submit" disabled={pending}>
        {pending ? "Sending digest..." : "Send Slack digest"}
      </button>
      {state.message ? (
        <p className={state.status === "error" ? "error-text" : "success-text"}>{state.message}</p>
      ) : null}
    </form>
  );
}
