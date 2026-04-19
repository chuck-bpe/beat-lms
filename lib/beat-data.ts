export type Lesson = {
  title: string;
  duration: string;
  format: "lesson" | "demo" | "assignment" | "quiz" | "template";
  description: string;
};

export type Week = {
  week: number;
  title: string;
  theme: string;
  outcome: string;
  focus: string[];
  lessons: Lesson[];
  badge: string;
};

export type Learner = {
  name: string;
  role: string;
  streak: number;
  completionRate: number;
  currentWeek: number;
  confidence: number;
  needsNudge: boolean;
};

export const learners: Learner[] = [
  {
    name: "Maggie",
    role: "Recruiter",
    streak: 5,
    completionRate: 76,
    currentWeek: 4,
    confidence: 78,
    needsNudge: false
  },
  {
    name: "Jordan",
    role: "Recruiter",
    streak: 3,
    completionRate: 59,
    currentWeek: 3,
    confidence: 66,
    needsNudge: true
  },
  {
    name: "Sam",
    role: "Business Partner",
    streak: 4,
    completionRate: 68,
    currentWeek: 4,
    confidence: 72,
    needsNudge: false
  },
  {
    name: "Priya",
    role: "Business Partner",
    streak: 2,
    completionRate: 51,
    currentWeek: 3,
    confidence: 61,
    needsNudge: true
  }
];

export const weeks: Week[] = [
  {
    week: 1,
    title: "Terminal Confidence Bootcamp",
    theme: "Stop being intimidated by the interface",
    outcome: "Every learner can open a terminal, move around a repo, inspect files, and run a few safe commands without freezing.",
    focus: ["Terminal basics", "Filesystem navigation", "Reading logs", "Command confidence"],
    badge: "Momentum",
    lessons: [
      {
        title: "Terminal fluency for non-engineers",
        duration: "20 min",
        format: "lesson",
        description: "Explain what a shell is, why coding agents rely on terminal workflows, and how to remove fear from basic command use."
      },
      {
        title: "Your first 10 useful commands",
        duration: "20 min",
        format: "demo",
        description: "Walk through pwd, ls, cd, cat, rg, npm run dev, git status, and stopping a running process."
      },
      {
        title: "Run the repo without fear",
        duration: "60 min",
        format: "assignment",
        description: "Navigate the BEAT repo, run key commands, start the app locally, and explain what each command did."
      },
      {
        title: "Terminal command check",
        duration: "15 min",
        format: "quiz",
        description: "Quick scenarios that confirm the learner can recognize the purpose of basic terminal commands."
      }
    ]
  },
  {
    week: 2,
    title: "Working With AI Coding Agents",
    theme: "What Codex and Claude Code actually are",
    outcome: "Learners understand the difference between chat AI and coding agents and can use one coding agent to investigate a real project question.",
    focus: ["Agentic coding", "Codebase context", "File edits", "Command execution"],
    badge: "Precision",
    lessons: [
      {
        title: "Codex, Claude Code, ChatGPT, and Claude: what each one is for",
        duration: "25 min",
        format: "lesson",
        description: "Teach when to use chat tools versus coding agents and how repo context changes the quality of output."
      },
      {
        title: "One task, two coding agents",
        duration: "20 min",
        format: "demo",
        description: "Compare how Codex and Claude Code inspect a real codebase question and improve with follow-up prompts."
      },
      {
        title: "Investigate a real repo question with one coding agent",
        duration: "55 min",
        format: "assignment",
        description: "Use Codex or Claude Code to answer a real project question, ask a follow-up, and judge whether the output was actually useful."
      },
      {
        title: "Pick-the-right-tool scenarios",
        duration: "15 min",
        format: "quiz",
        description: "Short scenarios that force the learner to choose between Codex, Claude Code, or general chat tools."
      }
    ]
  },
  {
    week: 3,
    title: "Prompting For Code And Action",
    theme: "Ask for work, not essays",
    outcome: "Learners can write prompts that produce usable code or structured output instead of vague prose.",
    focus: ["Task framing", "Constraints", "File references", "Acceptance criteria"],
    badge: "Discovery",
    lessons: [
      {
        title: "Prompts that produce action, not fluff",
        duration: "20 min",
        format: "lesson",
        description: "Introduce a strong task prompt framework built around task, context, constraints, definition of done, and output format."
      },
      {
        title: "Prompt surgery",
        duration: "20 min",
        format: "demo",
        description: "Take weak prompts and rewrite them into usable prompts for chat tools and coding agents."
      },
      {
        title: "Write three prompts worth reusing",
        duration: "60 min",
        format: "assignment",
        description: "Create one chat prompt, one coding-agent prompt, and one recruiting workflow prompt with clear structure and expected outputs."
      },
      {
        title: "Prompt repair check",
        duration: "15 min",
        format: "quiz",
        description: "Improve weak prompts by adding the missing task, context, constraints, and output format."
      }
    ]
  },
  {
    week: 4,
    title: "Reading And Reviewing AI Output",
    theme: "Never accept the first answer blindly",
    outcome: "Learners can inspect AI-generated output, spot risky changes, and ask for better revisions.",
    focus: ["Reading patches", "Checking assumptions", "Spotting hallucinations", "Defining done"],
    badge: "Voice",
    lessons: [
      {
        title: "How to review AI work without becoming paranoid",
        duration: "25 min",
        format: "lesson",
        description: "Teach a lightweight review checklist for deciding whether AI output is correct, usable, and safe."
      },
      {
        title: "Reviewing a bad output and making it good",
        duration: "20 min",
        format: "demo",
        description: "Walk through an output that looks polished but is wrong or incomplete, then improve it with one better follow-up prompt."
      },
      {
        title: "Critique and revise one AI-generated output",
        duration: "55 min",
        format: "assignment",
        description: "Generate one output, identify at least three issues, write a revision prompt, and compare the improved result."
      },
      {
        title: "Quality triage check",
        duration: "15 min",
        format: "quiz",
        description: "Rank outputs by safety and usefulness, then identify the one follow-up that would improve each."
      }
    ]
  },
  {
    week: 5,
    title: "Codex In Practice",
    theme: "Real workflow with Codex",
    outcome: "Learners can use Codex to investigate, change, and improve a real working project.",
    focus: ["Local Codex workflow", "Cloud delegation awareness", "Skills", "Worktrees and parallelism"],
    badge: "Signal",
    lessons: [
      {
        title: "How modern Codex workflows actually scale work",
        duration: "25 min",
        format: "lesson",
        description: "Frame Codex as an agentic coding system for investigation, changes, review, and parallel task execution."
      },
      {
        title: "Ask, code, review, and iterate in Codex",
        duration: "20 min",
        format: "demo",
        description: "Show a real task loop in Codex from investigation through change proposal and review."
      },
      {
        title: "Complete one real repo improvement using Codex",
        duration: "55 min",
        format: "assignment",
        description: "Use Codex on a real improvement, then submit a short review of what it did well, poorly, and ambiguously."
      },
      {
        title: "Codex workflow judgment check",
        duration: "10 min",
        format: "quiz",
        description: "Scenario-based questions on when Codex is the right tool and what should be reviewed carefully."
      }
    ]
  },
  {
    week: 6,
    title: "Claude Code In Practice",
    theme: "Terminal-native development with Claude Code",
    outcome: "Learners can install, run, and use Claude Code productively inside a project.",
    focus: ["Installation", "Project context", "Command execution", "Memory and configuration"],
    badge: "Systems",
    lessons: [
      {
        title: "What Claude Code is especially good at",
        duration: "25 min",
        format: "lesson",
        description: "Explain how Claude Code works as a terminal-first coding workflow with files, commands, memory, and connected tools."
      },
      {
        title: "Terminal-first task execution in Claude Code",
        duration: "20 min",
        format: "demo",
        description: "Run a real project task in Claude Code and show how repo context and terminal actions shape the output."
      },
      {
        title: "Complete one repo task in Claude Code",
        duration: "55 min",
        format: "assignment",
        description: "Use Claude Code on one real task, then compare the experience and output quality with Codex."
      },
      {
        title: "Compare-and-choose check",
        duration: "10 min",
        format: "quiz",
        description: "Decide which tasks belong in Claude Code, Codex, or a normal chat workflow."
      }
    ]
  },
  {
    week: 7,
    title: "Skills, Reusable Playbooks, And Team Standards",
    theme: "Turn repeated prompts into reusable assets",
    outcome: "Learners can define and use structured skills or standardized playbooks instead of repeating themselves.",
    focus: ["Skills", "Reusable instructions", "Shared conventions", "Team operating standards"],
    badge: "Standards",
    lessons: [
      {
        title: "What should become a skill vs a prompt vs a checklist",
        duration: "20 min",
        format: "lesson",
        description: "Teach the difference between one-off prompting and reusable operating assets for team workflows."
      },
      {
        title: "Create a simple recruiting-oriented skill",
        duration: "20 min",
        format: "demo",
        description: "Walk through a small reusable skill or playbook that standardizes a recurring workflow."
      },
      {
        title: "Write one reusable skill or operating playbook",
        duration: "50 min",
        format: "assignment",
        description: "Create a reusable artifact the team could use again without needing a fresh explanation every time."
      },
      {
        title: "Artifact classification check",
        duration: "10 min",
        format: "quiz",
        description: "Classify examples correctly as prompts, skills, checklists, or operating playbooks."
      }
    ]
  },
  {
    week: 8,
    title: "MCP And Tool-Connected Workflows",
    theme: "Connect AI to real systems",
    outcome: "Learners understand what MCP is, why it matters, and where tool-connected workflows become much more useful.",
    focus: ["MCP basics", "Remote vs local tools", "Risk management", "Prompt injection awareness"],
    badge: "Connected",
    lessons: [
      {
        title: "MCP in plain English",
        duration: "25 min",
        format: "lesson",
        description: "Explain how connected tools change what AI systems can do and what risks that introduces."
      },
      {
        title: "Inspect a simple MCP-backed workflow",
        duration: "20 min",
        format: "demo",
        description: "Show how a connected workflow can pull information or actions from external systems."
      },
      {
        title: "Map one recruiting workflow for tool connection",
        duration: "50 min",
        format: "assignment",
        description: "Choose one recruiting workflow that should use connected tools instead of copy-paste and define its safe boundaries."
      },
      {
        title: "MCP safety check",
        duration: "10 min",
        format: "quiz",
        description: "Identify safe versus unsafe MCP usage scenarios and describe the main risks."
      }
    ]
  },
  {
    week: 9,
    title: "Subagents, Delegation, And Parallel Work",
    theme: "Stop thinking one-thread-at-a-time",
    outcome: "Learners understand how to break work into independent tasks and delegate effectively.",
    focus: ["Subagents", "Parallel work", "Task scoping", "Context control"],
    badge: "Execution",
    lessons: [
      {
        title: "What good delegation looks like",
        duration: "20 min",
        format: "lesson",
        description: "Teach how to break larger work into isolated tasks with clear ownership, scope, and expected outputs."
      },
      {
        title: "Split a larger problem into agent tasks",
        duration: "20 min",
        format: "demo",
        description: "Show how multi-step work can be decomposed into parallel or staged agent tasks."
      },
      {
        title: "Design a multi-step recruiting automation",
        duration: "55 min",
        format: "assignment",
        description: "Design a workflow where different agents handle research, drafting, and review without stepping on each other."
      },
      {
        title: "Delegation quality check",
        duration: "10 min",
        format: "quiz",
        description: "Spot the difference between good task decomposition and sloppy delegation."
      }
    ]
  },
  {
    week: 10,
    title: "Evals, Guardrails, And Reliable Output",
    theme: "Build trust through measurement",
    outcome: "Learners can define simple evaluation criteria and guardrails for recurring AI workflows.",
    focus: ["Evals", "Reproducibility", "Guardrails", "Review loops"],
    badge: "Judgment",
    lessons: [
      {
        title: "How to know whether an AI workflow is actually good",
        duration: "20 min",
        format: "lesson",
        description: "Introduce lightweight eval criteria, guardrails, and repeatable review loops for recurring team workflows."
      },
      {
        title: "Create a simple eval rubric",
        duration: "20 min",
        format: "demo",
        description: "Build a compact eval for a sourcing, outreach, or summarization workflow and show how it improves quality."
      },
      {
        title: "Build a mini eval for one real workflow",
        duration: "50 min",
        format: "assignment",
        description: "Create a practical evaluation rubric and guardrail set for one recurring team workflow."
      },
      {
        title: "Eval design check",
        duration: "10 min",
        format: "quiz",
        description: "Identify weak evaluation designs and missing guardrails in short practical scenarios."
      }
    ]
  },
  {
    week: 11,
    title: "Recruiting Automations And Micro-Agents",
    theme: "Build something small that actually saves time",
    outcome: "Learners can design and implement a lightweight recruiting automation or agent with clear boundaries.",
    focus: ["Recruiting-specific implementation", "Automation boundaries", "Review checkpoints", "Value measurement"],
    badge: "Contribution",
    lessons: [
      {
        title: "What a useful recruiting micro-agent actually looks like",
        duration: "20 min",
        format: "lesson",
        description: "Show how a small, well-bounded recruiting automation creates value without becoming a distraction."
      },
      {
        title: "Build a lightweight recruiting workflow",
        duration: "20 min",
        format: "demo",
        description: "Walk through a small automation around sourcing, research, outreach prep, or note synthesis."
      },
      {
        title: "Ship one usable recruiting micro-agent",
        duration: "45 min",
        format: "assignment",
        description: "Design and deliver one lightweight recruiting automation or micro-agent with clear review points and value measurement."
      },
      {
        title: "Value and safety review",
        duration: "10 min",
        format: "quiz",
        description: "Assess whether a proposed micro-agent is useful, safe, and realistic for day-to-day team use."
      }
    ]
  },
  {
    week: 12,
    title: "Capstone And Operating Rhythm",
    theme: "From experimentation to team operating system",
    outcome: "Each learner delivers a real AI-enabled workflow and explains how they will keep improving it.",
    focus: ["Capstone delivery", "Measurable gains", "Team adoption", "Next-step plan"],
    badge: "Operator",
    lessons: [
      {
        title: "What a strong operating habit looks like after the bootcamp",
        duration: "20 min",
        format: "lesson",
        description: "Define what sustained, high-standard AI work should look like after the curriculum ends."
      },
      {
        title: "Capstone examples and critique",
        duration: "20 min",
        format: "demo",
        description: "Review practical builds and explain why some become team habits while others stay one-off experiments."
      },
      {
        title: "Present one real build",
        duration: "60 min",
        format: "assignment",
        description: "Deliver a script, skill, automation, connected workflow, or recruiting agent and explain the value clearly."
      },
      {
        title: "Reflection and next-step commitment",
        duration: "10 min",
        format: "quiz",
        description: "Commit to one concrete operating habit or workflow improvement the learner will carry forward."
      }
    ]
  }
];

export const productPrinciples = [
  "Keep the tone practical, calm, and motivating.",
  "Teach terminal and coding-agent fluency before abstract AI theory.",
  "Build comfort with Codex, Claude Code, and modern tool-connected workflows.",
  "Use lightweight accountability through progress, nudges, and milestones.",
  "Turn team learning into reusable prompts, skills, workflows, and systems."
];

export const promptLibrary = [
  {
    title: "Repo Investigation Prompt",
    type: "Prompt",
    summary: "Ask a coding agent to explain a code path, find the relevant files, and summarize what actually controls the behavior."
  },
  {
    title: "Terminal Confidence Checklist",
    type: "Workflow",
    summary: "A repeatable sequence for navigating a repo, searching files, starting the app, and confirming what changed."
  },
  {
    title: "Prompt Surgery Pack",
    type: "Prompt Pack",
    summary: "Examples of weak prompts upgraded into clear task prompts with context, constraints, and expected output formats."
  },
  {
    title: "Recruiting Research Subagent",
    type: "Agent Concept",
    summary: "A small delegated worker that gathers candidate or market research, then returns only the high-signal summary."
  }
];
