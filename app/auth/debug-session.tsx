"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type DebugState = {
  browserUserId: string | null;
  browserEmail: string | null;
  error: string | null;
};

export function DebugSession() {
  const [state, setState] = useState<DebugState>({
    browserUserId: null,
    browserEmail: null,
    error: null
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const supabase = createClient();
        const {
          data: { user },
          error
        } = await supabase.auth.getUser();

        if (cancelled) {
          return;
        }

        if (error) {
          setState({
            browserUserId: null,
            browserEmail: null,
            error: error.message
          });
          return;
        }

        setState({
          browserUserId: user?.id ?? null,
          browserEmail: user?.email ?? null,
          error: null
        });
      } catch (error) {
        if (!cancelled) {
          setState({
            browserUserId: null,
            browserEmail: null,
            error: error instanceof Error ? error.message : "Unknown auth debug error"
          });
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="card inset-card debug-card">
      <p className="eyebrow">Auth Debug</p>
      <p>Browser user id: {state.browserUserId ?? "none"}</p>
      <p>Browser email: {state.browserEmail ?? "none"}</p>
      <p>Browser error: {state.error ?? "none"}</p>
    </div>
  );
}
