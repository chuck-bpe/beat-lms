import { Suspense } from "react";
import { ConfirmClient } from "./confirm-client";

export default function AuthConfirmPage() {
  return (
    <main className="page-shell">
      <Suspense fallback={<section className="auth-shell card"><p>Confirming your sign-in...</p></section>}>
        <ConfirmClient />
      </Suspense>
    </main>
  );
}
