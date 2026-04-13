import Link from "next/link";
import { redirect } from "next/navigation";
import { Header } from "@/components/header";
import { getCurrentUserProfile } from "@/lib/auth";
import { SignInForm } from "./sign-in-form";

export default async function AuthPage() {
  const profile = await getCurrentUserProfile();

  if (profile?.role === "admin") {
    redirect("/admin");
  }

  if (profile?.role === "learner") {
    redirect("/learner");
  }

  return (
    <main className="page-shell">
      <Header />
      <section className="auth-shell card">
        <div>
          <p className="eyebrow">Invite-only access</p>
          <h2>Sign in to Blueprint Expansion AI Training</h2>
          <p>
            Use your approved work email to receive a magic link. Once you are in,
            BEAT will route you to the admin or learner dashboard automatically.
          </p>
          <ul className="clean-list">
            <li>Magic link sign-in only</li>
            <li>Invite-only learner access</li>
            <li>Progress tracking, submissions, and Slack support are built in</li>
          </ul>
        </div>
        <div className="card inset-card">
          <p className="eyebrow">Sign in</p>
          <h3>Use your team email</h3>
          <SignInForm />
          <p className="muted">
            Use one of the approved BEAT team emails. Admins will route to the dashboard
            automatically after sign-in.
          </p>
          <Link className="text-link" href="/">
            Back to overview
          </Link>
        </div>
      </section>
    </main>
  );
}
