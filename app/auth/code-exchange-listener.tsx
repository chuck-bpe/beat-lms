"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function CodeExchangeListener() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function handleCodeExchange() {
      const code = searchParams.get("code");

      if (!code) {
        return;
      }

      setMessage("Confirming your sign-in...");

      try {
        const supabase = createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          throw error;
        }

        if (!cancelled) {
          setMessage("Sign-in confirmed. Redirecting...");
          window.location.href = "/admin";
        }
      } catch (error) {
        if (!cancelled) {
          setMessage(error instanceof Error ? error.message : "Unable to confirm sign-in.");
        }
      }
    }

    handleCodeExchange();

    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  if (!message) {
    return null;
  }

  return (
    <section className="card auth-exchange-banner">
      <p className="eyebrow">Signing In</p>
      <p>{message}</p>
    </section>
  );
}
