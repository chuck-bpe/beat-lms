import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { getServerSupabaseEnv } from "@/lib/supabase/shared";

export async function createClient() {
  const cookieStore = await cookies();
  const { url, key } = getServerSupabaseEnv();

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options);
        });
      }
    }
  });
}
