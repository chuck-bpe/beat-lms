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
    title: "AI Foundations For Recruiters",
    theme: "Confidence before complexity",
    outcome: "Build a shared baseline on what AI can do in recruiting and how to work with it safely.",
    focus: ["AI literacy", "Prompt anatomy", "Recruiting use cases", "Mindset reset"],
    badge: "Momentum",
    lessons: [
      {
        title: "Why AI matters in modern recruiting",
        duration: "20 min",
        format: "lesson",
        description: "Ground the team in practical wins rather than hype."
      },
      {
        title: "Claude vs ChatGPT quickstart",
        duration: "20 min",
        format: "demo",
        description: "Show how the same recruiting task behaves in each tool."
      },
      {
        title: "Rewrite one sourcing workflow with AI support",
        duration: "45 min",
        format: "assignment",
        description: "Document the before, after, and time saved."
      },
      {
        title: "Confidence check",
        duration: "10 min",
        format: "quiz",
        description: "A lightweight pulse check on concepts and comfort."
      }
    ]
  },
  {
    week: 2,
    title: "Prompting That Produces Useful Work",
    theme: "From vague asks to structured outputs",
    outcome: "Use repeatable prompt patterns that create higher-signal recruiting outputs.",
    focus: ["Prompt templates", "Role framing", "Constraints", "Output formatting"],
    badge: "Precision",
    lessons: [
      {
        title: "The recruiter prompt framework",
        duration: "25 min",
        format: "lesson",
        description: "A practical formula for sourcing, outreach, and summaries."
      },
      {
        title: "Prompt upgrade lab",
        duration: "20 min",
        format: "demo",
        description: "Improve weak prompts into reusable team assets."
      },
      {
        title: "Create 3 prompts for the BEAT prompt library",
        duration: "45 min",
        format: "assignment",
        description: "Contribute prompts the team can reuse immediately."
      },
      {
        title: "Prompt pattern check",
        duration: "10 min",
        format: "quiz",
        description: "Reinforce the mechanics of good prompting."
      }
    ]
  },
  {
    week: 3,
    title: "AI-Powered Sourcing",
    theme: "Faster pipelines without lower quality",
    outcome: "Use AI to sharpen search strategy, research targets, and uncover better candidate angles.",
    focus: ["Search planning", "Profile interpretation", "Boolean support", "Research synthesis"],
    badge: "Discovery",
    lessons: [
      {
        title: "Source smarter, not wider",
        duration: "25 min",
        format: "lesson",
        description: "Use AI to structure searches before opening LinkedIn."
      },
      {
        title: "Live sourcing workflow teardown",
        duration: "20 min",
        format: "demo",
        description: "Move from role brief to target list with AI help."
      },
      {
        title: "Run one real sourcing sprint",
        duration: "50 min",
        format: "assignment",
        description: "Use BEAT templates and compare results against your usual method."
      },
      {
        title: "Sourcing decisions check",
        duration: "10 min",
        format: "quiz",
        description: "Keep the quiz short and confidence-building."
      }
    ]
  },
  {
    week: 4,
    title: "Outreach That Sounds Human",
    theme: "Quality over generic personalization",
    outcome: "Create stronger outreach drafts that preserve judgment and voice.",
    focus: ["Personalization", "Message quality", "Variation", "Call-to-action discipline"],
    badge: "Voice",
    lessons: [
      {
        title: "What great AI-assisted outreach looks like",
        duration: "20 min",
        format: "lesson",
        description: "Avoid robotic messaging while still moving faster."
      },
      {
        title: "ChatGPT vs Claude outreach comparison",
        duration: "20 min",
        format: "demo",
        description: "Compare tools on tone, structure, and editability."
      },
      {
        title: "Draft a 3-message outreach sequence",
        duration: "50 min",
        format: "assignment",
        description: "Produce a reusable outreach pack for one live search."
      },
      {
        title: "Outreach quality check",
        duration: "10 min",
        format: "quiz",
        description: "Confirm the team can spot weak vs strong AI output."
      }
    ]
  },
  {
    week: 5,
    title: "Candidate Evaluation And Signal Extraction",
    theme: "Use AI to see signal faster",
    outcome: "Summarize candidate backgrounds, identify questions, and improve screening consistency.",
    focus: ["Resume analysis", "Pattern spotting", "Interview preparation", "Risk flags"],
    badge: "Signal",
    lessons: [
      {
        title: "AI as an evaluation copilot",
        duration: "25 min",
        format: "lesson",
        description: "Focus on signal extraction without outsourcing judgment."
      },
      {
        title: "Scorecard drafting walkthrough",
        duration: "20 min",
        format: "demo",
        description: "Turn resumes and notes into focused interview prep."
      },
      {
        title: "Create an AI-assisted screening template",
        duration: "45 min",
        format: "assignment",
        description: "Standardize one part of your evaluation process."
      },
      {
        title: "Signal recognition quiz",
        duration: "10 min",
        format: "quiz",
        description: "Short scenarios with practical choices."
      }
    ]
  },
  {
    week: 6,
    title: "Recruiting Workflow Design",
    theme: "From isolated prompts to systems",
    outcome: "Map repeatable recruiting work and identify where AI meaningfully reduces effort.",
    focus: ["Workflow mapping", "Bottlenecks", "Decision points", "Automation boundaries"],
    badge: "Systems",
    lessons: [
      {
        title: "What makes a workflow AI-ready",
        duration: "20 min",
        format: "lesson",
        description: "Learn where automation helps and where it hurts."
      },
      {
        title: "Workflow redesign session",
        duration: "25 min",
        format: "demo",
        description: "Refactor a recruiting process into clear reusable steps."
      },
      {
        title: "Redesign one repeatable workflow",
        duration: "50 min",
        format: "assignment",
        description: "Choose a workflow that matters to current team output."
      },
      {
        title: "Workflow map check",
        duration: "10 min",
        format: "quiz",
        description: "Validate the logic behind strong workflow design."
      }
    ]
  },
  {
    week: 7,
    title: "Using The Lovable Recruiting Dashboard",
    theme: "Adoption of the tools already built",
    outcome: "Make the Lovable recruiting dashboard part of the team’s normal operating rhythm.",
    focus: ["Tool adoption", "Operating rhythms", "Best practices", "Contribution mindset"],
    badge: "Adoption",
    lessons: [
      {
        title: "How the dashboard fits the recruiting motion",
        duration: "20 min",
        format: "lesson",
        description: "Connect the internal tool to daily team decisions."
      },
      {
        title: "Dashboard walkthrough",
        duration: "20 min",
        format: "demo",
        description: "Show the most useful workflows and expected team behaviors."
      },
      {
        title: "Use the dashboard in one live recruiting cycle",
        duration: "50 min",
        format: "assignment",
        description: "Capture what worked, what was confusing, and what should improve."
      },
      {
        title: "Dashboard usage pulse",
        duration: "10 min",
        format: "quiz",
        description: "Keep the check-in supportive and fast."
      }
    ]
  },
  {
    week: 8,
    title: "Intro To Agents",
    theme: "Demystify agent thinking",
    outcome: "Understand what an agent is, where agents help, and how to design one around a real task.",
    focus: ["Agent concepts", "Tasks vs workflows", "Inputs and outputs", "Guardrails"],
    badge: "Builder",
    lessons: [
      {
        title: "Agents without the intimidation",
        duration: "25 min",
        format: "lesson",
        description: "Translate agent ideas into recruiting language."
      },
      {
        title: "Breaking an agent into steps",
        duration: "20 min",
        format: "demo",
        description: "Turn a recruiting task into a practical agent design."
      },
      {
        title: "Design your first recruiting agent",
        duration: "50 min",
        format: "assignment",
        description: "Define purpose, inputs, outputs, review points, and expected value."
      },
      {
        title: "Agent basics check",
        duration: "10 min",
        format: "quiz",
        description: "Short and encouraging concept review."
      }
    ]
  },
  {
    week: 9,
    title: "Building Simple Agents",
    theme: "From design into execution",
    outcome: "Create a lightweight recruiting agent or structured automation that solves a real team problem.",
    focus: ["Agent prompts", "Step chaining", "Review loops", "Practical implementation"],
    badge: "Execution",
    lessons: [
      {
        title: "Minimum viable agent design",
        duration: "20 min",
        format: "lesson",
        description: "Keep scope tight and useful."
      },
      {
        title: "Real recruiting agent examples",
        duration: "20 min",
        format: "demo",
        description: "Explore simple use cases that save meaningful time."
      },
      {
        title: "Build a usable micro-agent",
        duration: "55 min",
        format: "assignment",
        description: "Ship a small workflow that you would actually use."
      },
      {
        title: "Execution readiness check",
        duration: "10 min",
        format: "quiz",
        description: "A fast confidence checkpoint."
      }
    ]
  },
  {
    week: 10,
    title: "Quality Control And AI Judgment",
    theme: "Trust but verify",
    outcome: "Recognize weak outputs, hallucinations, and overreach while keeping speed gains.",
    focus: ["Verification", "Risk spotting", "Editing discipline", "Human oversight"],
    badge: "Judgment",
    lessons: [
      {
        title: "The recruiter’s quality bar",
        duration: "20 min",
        format: "lesson",
        description: "Use AI confidently without surrendering standards."
      },
      {
        title: "Bad output teardown",
        duration: "20 min",
        format: "demo",
        description: "Practice catching subtle quality failures."
      },
      {
        title: "Audit one AI-assisted workflow",
        duration: "50 min",
        format: "assignment",
        description: "Review an end-to-end process and tighten the weak spots."
      },
      {
        title: "Quality control check",
        duration: "10 min",
        format: "quiz",
        description: "Short practical scenarios."
      }
    ]
  },
  {
    week: 11,
    title: "Sharing What Works",
    theme: "Turn individual learning into team leverage",
    outcome: "Contribute repeatable prompts, workflows, and agent ideas to the whole team.",
    focus: ["Knowledge sharing", "Template quality", "Internal contribution", "Operational habits"],
    badge: "Contribution",
    lessons: [
      {
        title: "How strong teams compound AI wins",
        duration: "20 min",
        format: "lesson",
        description: "Make good work reusable instead of isolated."
      },
      {
        title: "Prompt and workflow library review",
        duration: "20 min",
        format: "demo",
        description: "See how reusable assets should be documented."
      },
      {
        title: "Submit one prompt and one workflow to the gallery",
        duration: "45 min",
        format: "assignment",
        description: "Package your best work so others can adopt it easily."
      },
      {
        title: "Contribution check",
        duration: "10 min",
        format: "quiz",
        description: "Reinforce what makes shared assets useful."
      }
    ]
  },
  {
    week: 12,
    title: "Capstone: Build A Recruiting AI System",
    theme: "Confidence through practical delivery",
    outcome: "Present one real recruiting workflow, prompt pack, or micro-agent that saves time and improves output.",
    focus: ["Capstone build", "Presentation", "Reflection", "Next-step plan"],
    badge: "Operator",
    lessons: [
      {
        title: "What a strong capstone looks like",
        duration: "20 min",
        format: "lesson",
        description: "Set the bar for something useful, realistic, and adopted."
      },
      {
        title: "Capstone examples",
        duration: "20 min",
        format: "demo",
        description: "Review practical recruiting AI builds from the course lens."
      },
      {
        title: "Deliver your capstone",
        duration: "60 min",
        format: "assignment",
        description: "Show the workflow, explain value, and share what the team can reuse."
      },
      {
        title: "Program reflection",
        duration: "10 min",
        format: "quiz",
        description: "Close with reflection and next-step commitments."
      }
    ]
  }
];

export const productPrinciples = [
  "Keep the tone practical, calm, and motivating.",
  "Teach with real recruiting workflows before abstract theory.",
  "Lower intimidation while still building true agent capability.",
  "Use lightweight accountability through progress, nudges, and milestones.",
  "Turn team learning into reusable prompts, workflows, and systems."
];

export const promptLibrary = [
  {
    title: "Role Intake Clarifier",
    type: "Prompt",
    summary: "Turn a hiring brief into a sourcing strategy and candidate hypotheses."
  },
  {
    title: "Candidate Snapshot Builder",
    type: "Workflow",
    summary: "Convert raw profile notes into a concise high-signal summary."
  },
  {
    title: "Outreach Sequence Generator",
    type: "Prompt Pack",
    summary: "Produce a three-touch outreach sequence with tone variants."
  },
  {
    title: "Search Sprint Agent",
    type: "Agent Concept",
    summary: "Plan sourcing inputs, generate targets, and surface open questions."
  }
];
