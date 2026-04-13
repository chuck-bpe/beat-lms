import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { getServerSupabaseEnv } from "@/lib/supabase/shared";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const next = searchParams.get("next") ?? "/learner";
  const { url, key } = getServerSupabaseEnv();
  let response = NextResponse.redirect(`${origin}${next}`);

  if (code) {
    const supabase = createServerClient(url, key, {
      cookies: {
        getAll() {
          return request.headers.get("cookie")
            ?.split(";")
            .map((cookie) => {
              const [name, ...rest] = cookie.trim().split("=");
              return { name, value: rest.join("=") };
            }) ?? [];
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        }
      }
    });
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return response;
    }
  }

  if (token_hash && type) {
    const supabase = createServerClient(url, key, {
      cookies: {
        getAll() {
          return request.headers.get("cookie")
            ?.split(";")
            .map((cookie) => {
              const [name, ...rest] = cookie.trim().split("=");
              return { name, value: rest.join("=") };
            }) ?? [];
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        }
      }
    });
    const { error } = await supabase.auth.verifyOtp({
      type: type as
        | "signup"
        | "invite"
        | "magiclink"
        | "recovery"
        | "email_change"
        | "email",
      token_hash
    });

    if (!error) {
      return response;
    }
  }

  return NextResponse.redirect(`${origin}/auth?error=unable_to_confirm`);
}
