import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AppRole = "admin" | "learner";

export async function getCurrentUserProfile() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile, error } = await supabase
    .from("users")
    .select("id, email, full_name, role")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return profile;
}

export type UserProfile = NonNullable<Awaited<ReturnType<typeof getCurrentUserProfile>>>;

export async function requireUser() {
  const profile = await getCurrentUserProfile();

  if (!profile) {
    redirect("/auth");
  }

  return profile;
}

export async function requireRole(role: AppRole) {
  const profile = await requireUser();

  if (profile.role !== role) {
    redirect(role === "admin" ? "/learner" : "/admin");
  }

  return profile;
}
