import Link from "next/link";
import { Header } from "@/components/header";
import { requireUser } from "@/lib/auth";

export default async function PrerequisitesPage() {
  await requireUser();

  return (
    <main className="page-shell">
      <Header />

      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Before You Start</p>
          <h2>Your Week 1 Setup Checklist</h2>
          <p>
            Five things to have in place before you begin. Each one takes 2–10 minutes. Once all five are done, you are
            ready for Week 1.
          </p>
          <div className="cta-row">
            <Link className="button secondary" href="/learner">
              Back to dashboard
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="metric-grid">
            <div className="metric-tile">
              <span>Steps</span>
              <strong>5 items</strong>
            </div>
            <div className="metric-tile">
              <span>Time</span>
              <strong>~20 min total</strong>
            </div>
            <div className="metric-tile">
              <span>Cost</span>
              <strong>Mostly free</strong>
            </div>
            <div className="metric-tile">
              <span>Required for</span>
              <strong>Week 1 onward</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stack">
        <article className="card">
          <p className="eyebrow">Step 1</p>
          <h3>Terminal (text command window)</h3>
          <div className="curriculum-detail-grid">
            <div className="curriculum-block">
              <strong>Mac</strong>
              <p>
                Press Cmd + Space to open Spotlight, type <code>Terminal</code>, and press Enter. A black or white
                window appears. That is your terminal.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Windows</strong>
              <p>
                Download Git Bash at gitforwindows.org (free). Install it with default settings. Open it from the Start
                menu — it looks like a terminal window.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Verify it works</strong>
              <p>
                Type <code>echo hello</code> and press Enter. You should see <code>hello</code> printed back. If that
                works, your terminal is ready.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Why you need this</strong>
              <p>
                Codex, Claude Code, and Git all run from the terminal. You will use it every week starting with Week 1.
              </p>
            </div>
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Step 2</p>
          <h3>GitHub account</h3>
          <div className="curriculum-detail-grid">
            <div className="curriculum-block">
              <strong>Create your account</strong>
              <p>
                Go to github.com and click Sign up. Choose a free plan. Use a personal email you will always have access
                to — not a work email. Verify your email address when GitHub sends the confirmation.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Verify it works</strong>
              <p>
                Sign in and confirm you can see your profile page at github.com/[your-username]. That is all you need
                for now.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Why you need this</strong>
              <p>
                Your recruiting-workspace repo lives on GitHub. It is the portable toolkit you build throughout the
                program — prompts, playbooks, and skill files that travel with you regardless of what ATS your company
                uses.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Cost</strong>
              <p>Free. You do not need a paid GitHub plan for anything in this program.</p>
            </div>
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Step 3</p>
          <h3>Node.js</h3>
          <div className="curriculum-detail-grid">
            <div className="curriculum-block">
              <strong>Install it</strong>
              <p>
                Go to nodejs.org. Click the LTS (Long Term Support) download button — this is the stable version. Run
                the installer with all default settings.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Verify it works</strong>
              <p>
                Open your terminal and type <code>node -v</code> and press Enter. You should see a version number like{" "}
                <code>v20.11.0</code>. Also try <code>npm -v</code> — it should also print a version. Both need to work.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Why you need this</strong>
              <p>
                Node.js powers the <code>npm</code> and <code>npx</code> commands used to install Claude Code in Week 6
                and the GitHub MCP server in Week 8. Installing Node.js also installs npm automatically.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Cost</strong>
              <p>Free and open source.</p>
            </div>
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Step 4</p>
          <h3>VS Code (code editor)</h3>
          <div className="curriculum-detail-grid">
            <div className="curriculum-block">
              <strong>Install it</strong>
              <p>
                Go to code.visualstudio.com. Download the version for your operating system. Run the installer with
                default settings. On Mac, drag it to your Applications folder.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Verify it works</strong>
              <p>
                Open your terminal and type <code>code --version</code>. If it prints a version number, VS Code is
                installed correctly and connected to your terminal.
              </p>
              <p>
                If <code>code --version</code> says command not found on Mac: open VS Code, press Cmd + Shift + P, type{" "}
                <code>Shell Command: Install</code>, and select the option. Then retry in a new terminal window.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Why you need this</strong>
              <p>
                You will use <code>code .</code> from your terminal throughout the program to open folders visually and
                edit files like CLAUDE.md and your playbooks.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Cost</strong>
              <p>Free and open source.</p>
            </div>
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Step 5</p>
          <h3>API keys for Codex and Claude Code</h3>
          <div className="curriculum-detail-grid">
            <div className="curriculum-block">
              <strong>OpenAI / Codex (needed Week 2)</strong>
              <p>
                Go to platform.openai.com. Create a free account if you do not have one. You will use Codex starting in
                Week 2. Usage is metered — most people spend $2–10/month at program usage levels.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>Anthropic / Claude Code (needed Week 6)</strong>
              <p>
                Go to console.anthropic.com. Create a free account. You will need an API key for Claude Code starting in
                Week 6. Usage is metered at roughly $5–20/month depending on how much you use it.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>You do not need these immediately</strong>
              <p>
                You can complete Weeks 1 through 5 without API keys. Set up your accounts now so you are not blocked
                when you get there. You will not be charged until you start making API calls.
              </p>
            </div>
            <div className="curriculum-block">
              <strong>These are the only paid tools in the program</strong>
              <p>
                Claude.ai and Codex (which you already have access to) are the only other tools with costs. Everything
                else — GitHub, Node.js, VS Code, Git Bash — is free.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="card">
        <p className="eyebrow">You are ready</p>
        <h3>All five steps done? Start Week 1.</h3>
        <p>
          Once you have a working terminal, a GitHub account, Node.js, VS Code, and your API accounts created, you have
          everything you need to start. Week 1 walks you through creating your first Git repository and pushing it to
          GitHub.
        </p>
        <div className="cta-row">
          <Link className="button primary" href="/curriculum/week/1/lesson/1">
            Start Week 1, Lesson 1
          </Link>
          <Link className="button secondary" href="/learner">
            Back to dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
