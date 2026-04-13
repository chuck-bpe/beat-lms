"use client";

import { createBrowserClient } from "@supabase/ssr";
import { getBrowserSupabaseEnv } from "@/lib/supabase/shared";

export function createClient() {
  const { url, key } = getBrowserSupabaseEnv();

  return createBrowserClient(url, key);
}
