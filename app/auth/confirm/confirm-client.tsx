"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function ConfirmClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("Confirming your sign-in...");

  useEffect(() => {
    let cancelled = false;

    async function confirm() {
      const code = searchParams.get("code");
      const tokenHash = searchParams.get("token_hash");
      const type = searchParams.get("type");
      const next = searchParams.get("next") ?? "/auth";
      const supabase = createClient();

      try {
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);

          if (error) {
            throw error;
          }
        } else if (tokenHash && type) {
          const { error } = await supabase.auth.verifyOtp({
            type: type as
              | "signup"
              | "invite"
              | "magiclink"
              | "recovery"
              | "email_change"
              | "email",
            token_hash: tokenHash
          });

          if (error) {
            throw error;
          }
        } else {
          throw new Error("Missing login confirmation parameters.");
        }

        if (!cancelled) {
          setMessage("Sign-in confirmed. Redirecting...");
          router.replace(next);
        }
      } catch (error) {
        if (!cancelled) {
          setMessage(error instanceof Error ? error.message : "Unable to confirm sign-in.");
        }
      }
    }

    confirm();

    return () => {
      cancelled = true;
    };
  }, [router, searchParams]);

  return (
    <section className="auth-shell card">
      <div>
        <p className="eyebrow">Confirming access</p>
        <h2>Signing you into BEAT</h2>
        <p>{message}</p>
        <Link className="text-link" href="/auth">
          Back to sign in
        </Link>
      </div>
    </section>
  );
}
