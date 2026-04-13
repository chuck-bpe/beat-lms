import Link from "next/link";
import { SignOutButton } from "@/components/sign-out-button";

export function Header() {
  return (
    <header className="shell-header">
      <div>
        <p className="eyebrow">Blueprint Expansion AI Training</p>
        <h1>BEAT</h1>
      </div>
      <nav className="top-nav" aria-label="Primary">
        <Link href="/">Overview</Link>
        <Link href="/auth">Sign in</Link>
        <Link href="/learner">Learner</Link>
        <Link href="/admin">Admin</Link>
        <SignOutButton />
      </nav>
    </header>
  );
}
