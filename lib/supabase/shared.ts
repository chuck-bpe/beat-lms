const serverSupabaseUrl = process.env.SUPABASE_URL;
const serverSupabasePublishableKey = process.env.SUPABASE_ANON_KEY;
const publicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publicSupabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getServerSupabaseEnv() {
  if (!serverSupabaseUrl || !serverSupabasePublishableKey) {
    throw new Error(
      "Missing Supabase environment variables. Add SUPABASE_URL and SUPABASE_ANON_KEY to .env.local."
    );
  }

  return {
    url: serverSupabaseUrl,
    key: serverSupabasePublishableKey
  };
}

export function getBrowserSupabaseEnv() {
  if (!publicSupabaseUrl || !publicSupabasePublishableKey) {
    throw new Error(
      "Missing browser Supabase environment variables. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local."
    );
  }

  return {
    url: publicSupabaseUrl,
    key: publicSupabasePublishableKey
  };
}
