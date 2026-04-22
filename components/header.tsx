import Link from "next/link";
import { SignOutButton } from "@/components/sign-out-button";

export function Header() {
  return (
    <header className="shell-header">
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://blueprintexpansion.com/wp-content/uploads/2021/07/Blueprint-Logo-LORES-300.png"
          alt="Blueprint"
          height={36}
          style={{ height: "36px", width: "auto" }}
        />
        <div>
          <p className="eyebrow" style={{ marginBottom: 0 }}>AI Training</p>
          <h1 style={{ fontSize: "1.1rem" }}>BEAT</h1>
        </div>
      </div>
      <nav className="top-nav" aria-label="Primary">
        <Link href="/">Overview</Link>
        <Link href="/auth">Sign in</Link>
        <Link href="/curriculum">Curriculum</Link>
        <Link href="/learner">Learner</Link>
        <Link href="/admin">Admin</Link>
        <SignOutButton />
      </nav>
    </header>
  );
}
