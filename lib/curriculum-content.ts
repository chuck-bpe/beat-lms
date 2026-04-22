type BaseWeekCurriculumContent = {
  summary: string;
  teachingOverview: string[];
  lessonTakeaways: string[];
  demoSteps: string[];
  assignmentDeliverable: string;
  assignmentSteps: string[];
  reflectionPrompts: string[];
  quizQuestions: Array<{
    question: string;
    options: string[];
    correctIndex: number;
  }>;
  gradingStandard: string[];
};

type WeekCurriculumEnhancement = {
  whatThisIs: string;
  whyThisComesNow: string;
  howThisConnectsToAI: string;
  whatYouWillDoNext: string[];
  plainEnglishVocabulary: string[];
  recommendedResources: {
    label: string;
    url: string;
  }[];
  learningObjectives: string[];
  workedExample: string;
  guidedPractice: string[];
  commonMistakes: string[];
  facilitatorNotes: string[];
};

export type WeekCurriculumContent = BaseWeekCurriculumContent & WeekCurriculumEnhancement;

const baseCurriculumContentByWeek: Record<number, BaseWeekCurriculumContent> = {
  1: {
    summary:
      "Week 1 removes fear from the terminal. The bar is not technical mastery; the bar is basic control: navigate, inspect, run, stop, and explain what happened.",
    teachingOverview: [
      "Most people avoid the terminal because it feels opaque, fragile, and easy to mess up. This week reframes it as a direct, readable interface for doing work. You do not need to become an engineer; you need enough comfort to know where you are, what you are running, and how to stop when something feels uncertain.",
      "The core mental model is locate, inspect, run, and stop. If you can open the project, search for a term, inspect a file, start a process, stop it, and explain what happened in plain English, you have crossed the threshold that makes Codex and Claude Code much less intimidating."
    ],
    lessonTakeaways: [
      "The terminal is a direct interface to your computer, not an engineer-only zone.",
      "Most early terminal work falls into four categories: locate, inspect, run, and stop.",
      "You do not need to memorize commands; you need to recognize patterns and stay calm around output.",
      "Terminal fluency matters because coding agents rely on files, commands, and process output."
    ],
    demoSteps: [
      "Create the workspace: `mkdir ~/recruiting-workspace && cd ~/recruiting-workspace`.",
      "Initialize Git: `git init`, then confirm with `git status`.",
      "Create a file: `touch README.md`, then confirm with `ls`.",
      "Stage and commit: `git add README.md` then `git commit -m 'first commit'`.",
      "Review the history: `git log --oneline`.",
      "Open in VS Code: `code .` — show how files appear visually.",
      "Go to github.com → New repository → name it `recruiting-workspace` → copy the URL.",
      "Push to GitHub: `git remote add origin [url]` then `git push -u origin main`.",
      "Confirm: open the GitHub URL in a browser and see the repo live."
    ],
    assignmentDeliverable:
      "A submission with the commands you ran, one terminal screenshot showing `git log`, and a short reflection on what feels less intimidating now.",
    assignmentSteps: [
      "Open Terminal and create a folder called `recruiting-workspace`.",
      "Run `git init` inside it, create `README.md`, stage and commit it.",
      "Run `git log --oneline` and take a screenshot showing your commit.",
      "Open the folder in VS Code with `code .` and confirm you can see the README.",
      "Create a new GitHub repo named `recruiting-workspace` and push your local repo to it.",
      "Paste the live GitHub URL in your submission and write 4–6 sentences explaining what each command did."
    ],
    reflectionPrompts: [
      "Which command felt most intuitive?",
      "Which command felt least intuitive?",
      "What output looked noisy but was actually okay?",
      "What now feels less intimidating than before?"
    ],
    quizQuestions: [
      {
        question: "You run `ls` inside your recruiting-workspace folder and see nothing. You know a README.md file should be there. What is the most likely explanation?",
        options: [
          "The `ls` command only shows hidden files",
          "You are probably in a different folder than you think — run `pwd` to confirm your location",
          "The file was automatically deleted by git init",
          "You need administrator privileges to list files"
        ],
        correctIndex: 1
      },
      {
        question: "You run `git commit -m 'first commit'` and then `git log` shows no commits at all. What most likely went wrong?",
        options: [
          "The commit message was too short",
          "You forgot to run `git add` first — git only commits files that have been staged",
          "You need to push before git log shows anything",
          "git log only shows commits after the second commit"
        ],
        correctIndex: 1
      },
      {
        question: "After running `git init`, you create README.md and immediately run `git status`. What will the output show?",
        options: [
          "README.md listed as a committed file",
          "README.md listed as staged and ready to commit",
          "README.md listed as an untracked file — not yet staged or committed",
          "No output — git status only shows errors"
        ],
        correctIndex: 2
      },
      {
        question: "Why does git require `git add` before `git commit`?",
        options: [
          "It compresses the file before saving to save disk space",
          "It is a GitHub policy that cannot be changed",
          "It lets you choose exactly which changes to include in a commit rather than saving everything at once",
          "It uploads the file to GitHub before committing"
        ],
        correctIndex: 2
      },
      {
        question: "A command in your terminal has been running for two minutes with no output and no sign of finishing. What is the correct action?",
        options: [
          "Wait — terminal commands always finish eventually",
          "Close and reopen the terminal window",
          "Press Ctrl+C to stop the running process",
          "Press Ctrl+Z to save your progress and exit"
        ],
        correctIndex: 2
      }
    ],
    gradingStandard: [
      "Can create a new folder and navigate into it.",
      "Can initialize a Git repo and create a file.",
      "Can stage and commit a file, then confirm with `git log`.",
      "Can explain most commands in plain English."
    ]
  },
  2: {
    summary:
      "Week 2 is about tool selection. You will learn the difference between general chat AI and coding agents, then use one coding agent to investigate a real repo question.",
    teachingOverview: [
      "This week separates normal chat AI from coding-agent work. ChatGPT and Claude are excellent for drafting, comparing, summarizing, and thinking. Codex and Claude Code become more valuable when the work depends on files, commands, repo context, or changes that need review.",
      "Your goal is not to pick a favorite tool. It is to develop judgment. By the end of this week you should be able to say why a task belongs in chat, Codex, or Claude Code, and test whether an answer is grounded in actual project files rather than just sounding confident."
    ],
    lessonTakeaways: [
      "Chat tools are best for brainstorming, drafting, summarizing, and comparison.",
      "Coding agents are best for file-aware, repo-grounded, command-aware work.",
      "Codex and Claude Code should be judged by task fit, not by model fandom.",
      "A strong operator evaluates whether the answer was grounded, not just whether it sounded smart."
    ],
    demoSteps: [
      "Open your recruiting-workspace repo on github.com — this is the project Codex will investigate.",
      "Ask Codex: 'What files exist in this repo and what does the README contain?'",
      "Compare: ask Claude chat the same question without the repo — notice the difference in grounding.",
      "Ask a follow-up in Codex: 'What would make this README more useful for a recruiting team?'",
      "Discuss what each tool did well and where review is still needed."
    ],
    assignmentDeliverable:
      "A repo-investigation submission: the original Codex prompt, the answer it gave, a follow-up prompt, and a short judgment on whether the result was grounded in your actual repo.",
    assignmentSteps: [
      "Open your recruiting-workspace repo in Codex on platform.openai.com.",
      "Ask one question about what the repo contains or how it could be improved.",
      "Ask at least one follow-up that pushes for more specificity.",
      "Submit both prompts, the answers, and a short note on whether the result was complete, incomplete, or misleading."
    ],
    reflectionPrompts: [
      "Why did you choose that tool?",
      "Did the first answer actually solve the question?",
      "What improved after the follow-up?",
      "What was still missing or uncertain?"
    ],
    quizQuestions: [
      {
        question: "A hiring manager asks: 'Which files in our recruiting-workspace repo define our sourcing process?' Which tool gives the most reliable answer?",
        options: [
          "ChatGPT with a written description of your repo",
          "A coding agent like Codex connected directly to the repo — it reads actual files",
          "Claude in general chat without any repo access",
          "Any tool equally — AI always gives the same quality answer regardless of file access"
        ],
        correctIndex: 1
      },
      {
        question: "You are brainstorming 10 creative sourcing strategies for a niche fintech compliance role. No repo files are involved. Which tool fits best?",
        options: [
          "Codex — it has the most powerful reasoning model",
          "Claude Code — it is better at creative brainstorming",
          "General chat AI — this is a drafting and reasoning task with no file dependency",
          "Neither — AI cannot help with sourcing strategy"
        ],
        correctIndex: 2
      },
      {
        question: "Codex returns: 'Your repo contains a well-structured hiring process with clear ownership.' Your repo only has a blank README. What is happening?",
        options: [
          "Codex correctly inferred the process from the README filename",
          "Codex is reading a cached version of a similar repo it has seen before",
          "The answer is not grounded — Codex produced a confident-sounding response without reading actual file content",
          "Codex summarized what a typical recruiting repo usually contains"
        ],
        correctIndex: 2
      },
      {
        question: "A Codex answer is 'grounded' when it:",
        options: [
          "Uses formal, professional language and well-structured paragraphs",
          "Was generated quickly without errors",
          "Cites specific file names, file contents, or direct evidence from the actual project",
          "Matches what you expected to see before asking"
        ],
        correctIndex: 2
      },
      {
        question: "When is a follow-up prompt most valuable?",
        options: [
          "When the first answer was perfect and you want written confirmation",
          "When the first answer was vague, missed specifics you need, or made claims you cannot trace to evidence",
          "When you want a shorter version of the same answer",
          "When you want to switch to a different AI tool entirely"
        ],
        correctIndex: 1
      }
    ],
    gradingStandard: [
      "Chooses a reasonable tool for the task.",
      "Asks a clear initial question and at least one follow-up.",
      "Can judge whether the answer was actually useful.",
      "Does not accept confident output blindly."
    ]
  },
  3: {
    summary:
      "Week 3 upgrades prompting from vague conversation to task design. The focus is clear asks, real constraints, and output shapes that lead to action.",
    teachingOverview: [
      "This week teaches that prompting is really task design. A good prompt does not just ask for help; it defines the task, gives context, states constraints, describes what done means, and specifies the output shape. That is what turns AI output from commentary into usable work.",
      "This week you practice prompt surgery: taking vague asks and making them operational. The point is not to write fancy prompts. The point is to create prompts that another teammate could reuse and that a coding agent or chat tool can act on without guessing what you meant."
    ],
    lessonTakeaways: [
      "Strong prompts are built from task, context, constraints, definition of done, and output format.",
      "Weak prompts usually fail because the ask is vague or the success condition is undefined.",
      "Chat prompts and coding-agent prompts need different kinds of specificity.",
      "Good prompts reduce ambiguity and create reusable patterns."
    ],
    demoSteps: [
      "Take three weak prompts and diagnose why they fail.",
      "Rewrite each into a structured prompt with constraints and output format.",
      "Compare a chat-style prompt and a coding-agent prompt for the same basic problem.",
      "Explain which missing detail most changed the quality of the result."
    ],
    assignmentDeliverable:
      "Three reusable prompts: one for chat, one for Codex or Claude Code, and one for a recurring recruiting workflow.",
    assignmentSteps: [
      "Write one prompt for a general chat tool.",
      "Write one prompt for Codex or Claude Code.",
      "Write one prompt for a weekly recruiting workflow.",
      "For each, explain expected output and why it is better than the vague version."
    ],
    reflectionPrompts: [
      "Which prompt became most useful after revision?",
      "Which was hardest to constrain?",
      "What did you realize you usually leave unsaid?",
      "Which tool needed the most specific instruction?"
    ],
    quizQuestions: [
      {
        question: "A recruiter writes: 'Help me with outreach.' What is the single most important element missing from this prompt?",
        options: [
          "A polite opening phrase to set the right tone",
          "A clear task — what kind of outreach, for what role, sent to whom, in what format, and with what tone",
          "The candidate's LinkedIn URL so the AI can research them",
          "A request to generate multiple versions to choose from"
        ],
        correctIndex: 1
      },
      {
        question: "Which of these prompts will produce the most immediately usable result?",
        options: [
          "Write outreach for a VP Sales candidate",
          "Make my recruiting message better and more professional",
          "Write a 3-sentence LinkedIn message to a VP Sales candidate currently at a Salesforce competitor, referencing their current title. Tone: warm and direct, not salesy. Do not mention compensation. Return the message only.",
          "Create professional recruiting outreach for my open VP Sales role"
        ],
        correctIndex: 2
      },
      {
        question: "What does a constraint do in a prompt?",
        options: [
          "It replaces the task description and tells the AI what to focus on",
          "It makes the prompt shorter and easier to read",
          "It prevents the AI from taking approaches or returning output you explicitly do not want",
          "It speeds up the response by narrowing the model's search space"
        ],
        correctIndex: 2
      },
      {
        question: "In the prompt 'Return your answer as a table with columns: Name, Match Score, Evidence,' what part of prompt structure does 'table with columns' represent?",
        options: [
          "Task — it describes what you want done",
          "Context — it gives background for the answer",
          "Constraint — it limits what the AI can include",
          "Output format — it defines the shape of the result"
        ],
        correctIndex: 3
      },
      {
        question: "After writing a prompt, the most reliable internal test is to ask yourself:",
        options: [
          "Is this prompt long enough to cover all the details?",
          "Does this prompt sound professional and well-written?",
          "What would the AI have to guess or invent if it only had this prompt and nothing else?",
          "Have I included all five standard prompt elements?"
        ],
        correctIndex: 2
      }
    ],
    gradingStandard: [
      "Each prompt contains a clear task.",
      "Each prompt includes enough context to be usable.",
      "Each prompt includes at least one real constraint.",
      "Each prompt defines the expected output shape."
    ]
  },
  4: {
    summary:
      "Week 4 teaches review discipline. You will learn to inspect AI outputs for grounding, usefulness, constraints, and risk instead of rewarding polish alone.",
    teachingOverview: [
      "This week builds the habit that separates strong operators from passive AI users: review. Polished output can still be wrong, incomplete, ungrounded, or unsafe. You need a simple way to inspect work without becoming slow or paranoid.",
      "The core practice is a lightweight review loop: check grounding, check completeness, check constraints, check usability, and check risk. Then write a targeted revision prompt. By the end of this week you should know that review and revision are part of the workflow — not a sign that the tool failed, but a sign that you are operating it correctly."
    ],
    lessonTakeaways: [
      "Polished bad output is more dangerous than obviously bad output because it passes a quick scan.",
      "The five-question checklist: grounded? complete? constraints followed? usable? what is the risk?",
      "These five questions take under two minutes to run and catch the majority of real problems.",
      "Revision is a core skill: a targeted revision prompt fixes specific weaknesses, not everything at once."
    ],
    demoSteps: [
      "Generate an output that looks polished but contains real flaws.",
      "Run the five-question checklist against it.",
      "Identify at least three meaningful issues.",
      "Write one targeted revision prompt and compare the improved version."
    ],
    assignmentDeliverable:
      "A critique pack with the original output, three issues found, one revision prompt, the revised result, and a short explanation of what improved.",
    assignmentSteps: [
      "Generate one output using any approved AI tool.",
      "Review it using the five-question checklist.",
      "Identify at least three meaningful problems.",
      "Write and run one revision prompt.",
      "Explain why the revised version is better and what still needs human judgment."
    ],
    reflectionPrompts: [
      "Which issue was hardest to notice?",
      "Did the first version look more trustworthy than it deserved?",
      "What changed most after revision?",
      "What still required human judgment?"
    ],
    quizQuestions: [
      {
        question: "A polished AI output is potentially more dangerous than an obviously bad one because:",
        options: [
          "It uses more tokens and takes longer to generate",
          "Polished formatting can cause a reviewer to skip the grounding and accuracy check that a messy output would trigger",
          "It always contains more factual errors per paragraph",
          "It is harder to edit once you have accepted it"
        ],
        correctIndex: 1
      },
      {
        question: "A candidate summary says: 'Sarah has 8 years of SaaS sales experience.' Her resume shows 5 years in SaaS and 3 years in on-premise software. Which review question catches this flaw?",
        options: [
          "Is it complete — does it cover all the scorecard criteria?",
          "Did it follow constraints — did it honor the format you specified?",
          "Is it grounded — are the specific claims traceable to actual evidence in the source material?",
          "Is it usable — can you act on this without rework?"
        ],
        correctIndex: 2
      },
      {
        question: "An AI output follows your formatting instructions perfectly but leaves out three of the five scorecard criteria you care about. Which review question catches this?",
        options: [
          "Is it grounded — does it cite evidence?",
          "Is it complete — does it actually answer everything that was asked?",
          "Did it follow constraints — did it honor your rules?",
          "What is the risk — what could go wrong?"
        ],
        correctIndex: 1
      },
      {
        question: "You receive an AI-generated outreach message. It is well-written but could apply to any candidate with a sales background — no mention of the specific person's company, title, or background. This fails on:",
        options: [
          "Output format — it was not returned in the right structure",
          "Length — it is too short to be convincing",
          "Grounding — it is not personalized to real evidence about this specific candidate",
          "Completeness — it is missing required sections"
        ],
        correctIndex: 2
      },
      {
        question: "A strong revision prompt does which of the following?",
        options: [
          "Repeats the original question with 'please' added for politeness",
          "Asks the AI to 'improve it' or 'make it better' without specifying how",
          "Names the specific weakness and asks for a targeted fix — for example, 'rewrite using only facts from the resume, in bullet format, labeling anything unconfirmed as [UNKNOWN]'",
          "Switches to a different AI tool for a fresh perspective"
        ],
        correctIndex: 2
      }
    ],
    gradingStandard: [
      "Identifies three meaningful issues, not just cosmetic ones.",
      "Writes a revision prompt that addresses those issues.",
      "Shows material improvement in the revised result.",
      "Explains what still requires human review."
    ]
  },
  5: {
    summary:
      "Week 5 is your first real Codex operator week. You will scope a real task, use Codex on it, and review what came back like an owner rather than a spectator.",
    teachingOverview: [
      "This week moves from concept to real Codex usage. You will scope one small task, let Codex investigate or change something, and then inspect the result. The main lesson is that Codex is not a magic button; it is a workflow for asking, reviewing, iterating, and deciding.",
      "The standard is ownership. By the end of this week you should know what you asked Codex to do, what files or behavior were involved, what changed, what remains uncertain, and what you would verify before trusting the result."
    ],
    lessonTakeaways: [
      "Codex is most valuable as a workflow for investigation, change, review, and delegation.",
      "Well-scoped tasks are bounded, reviewable, and tied to a real artifact.",
      "Review is built into the Codex workflow, not added after the fact.",
      "The goal is better execution, not just better answers."
    ],
    demoSteps: [
      "Choose a small real repo task and scope it well.",
      "Show the difference between a vague ask and a bounded Codex task.",
      "Let Codex investigate or change the project.",
      "Inspect what files changed, what assumptions were made, and what still needs verification."
    ],
    assignmentDeliverable:
      "A Codex task review with the original prompt, summary of what Codex did, strengths, weaknesses, and one thing that still requires manual verification.",
    assignmentSteps: [
      "Choose one small real repo task.",
      "Use Codex to investigate or implement it.",
      "Review the output with an operator mindset.",
      "Submit the task prompt, summary of results, one strength, one weakness, and one review item."
    ],
    reflectionPrompts: [
      "Did Codex feel more useful for investigation or implementation?",
      "What part of the output felt most trustworthy?",
      "What part felt most in need of review?",
      "How would you scope the task better next time?"
    ],
    quizQuestions: [
      {
        question: "What makes a Codex task 'well scoped'?",
        options: [
          "It references as many files as possible to give Codex full context",
          "It is bounded, tied to a specific artifact or question, and produces output you can review in one pass",
          "It produces the longest possible output so you have more to work with",
          "It uses a numbered multi-step prompt format"
        ],
        correctIndex: 1
      },
      {
        question: "You ask Codex: 'Improve our entire recruiting process.' What is the main problem with this task?",
        options: [
          "The prompt is too polite and needs to be more direct",
          "Codex cannot understand recruiting workflows",
          "The scope is too broad — any answer will require guesswork, and you cannot review or verify it in one pass",
          "There are no project files for Codex to reference"
        ],
        correctIndex: 2
      },
      {
        question: "Codex returns a 15-step proposal for restructuring your interview process. Before doing anything with it, the most important first step is:",
        options: [
          "Share it immediately with your team for feedback",
          "Ask Codex to implement the steps automatically before anyone forgets",
          "Check whether each step is grounded in how your actual process works and flag explicitly what Codex assumed versus what it confirmed",
          "Accept the first five steps since Codex is usually more accurate early in a list"
        ],
        correctIndex: 2
      },
      {
        question: "After Codex investigates a recruiting workflow, asking 'What assumptions did you make?' is valuable because:",
        options: [
          "It makes Codex produce more text, giving you more material to review",
          "It reveals hidden decisions Codex made that could make the output wrong for your specific situation",
          "It is a polite way to signal you are satisfied with the answer",
          "It generates a shareable summary you can send to your manager"
        ],
        correctIndex: 1
      },
      {
        question: "Codex returns a list of steps for a recruiting workflow. The right next action is:",
        options: [
          "Implement all the steps immediately before the context is lost",
          "Share the list with your manager before reviewing it yourself",
          "Verify each step against your actual process — mark what is accurate, what is assumed, and what needs human confirmation before acting",
          "Ask Codex to implement the steps automatically and review afterward"
        ],
        correctIndex: 2
      }
    ],
    gradingStandard: [
      "Chooses a task that is appropriately scoped.",
      "Uses Codex for real work, not just commentary.",
      "Identifies at least one strength and one weakness in the result.",
      "Names what still requires human verification."
    ]
  },
  6: {
    summary:
      "Week 6 makes Claude Code concrete as a terminal-native operating environment. You will use it on a real task and compare the fit honestly against Codex.",
    teachingOverview: [
      "This week introduces Claude Code as a terminal-native way to work inside a project. The goal is for you to experience firsthand how file context, command output, and project structure change the quality of AI help.",
      "Compare tools by fit, not by hype. Claude Code tends to feel strongest when terminal context and project navigation matter. Codex may feel stronger for other agentic workflows. The durable skill is knowing how to choose, supervise, and review the tool for the task at hand."
    ],
    lessonTakeaways: [
      "Claude Code is strongest when actual project files, commands, and context matter.",
      "Terminal-native context changes trust because the tool is grounded in the project itself.",
      "Memory, MCP, and tool-connected workflows make more sense after terminal fluency is in place.",
      "Tool selection should be based on operational fit, not brand preference."
    ],
    demoSteps: [
      "Open a real project task in a terminal-first flow.",
      "Show how Claude Code uses files and commands as part of its reasoning.",
      "Inspect the result and identify what still needs review.",
      "Ask how the same task might differ if run in Codex instead."
    ],
    assignmentDeliverable:
      "A Claude Code task submission with the prompt, result, what repo context mattered, what Claude Code handled especially well, and where comparison or review is still needed.",
    assignmentSteps: [
      "Choose one real project task.",
      "Use Claude Code to investigate or complete it.",
      "Describe what files, commands, or repo context mattered.",
      "Add one short compare note about whether Codex would have been better, worse, or similar."
    ],
    reflectionPrompts: [
      "What felt different about using Claude Code inside the project?",
      "Did terminal context make the work easier to trust?",
      "What part of the workflow felt most natural?",
      "What kind of task would you now choose Claude Code for first?"
    ],
    quizQuestions: [
      {
        question: "What makes Claude Code 'terminal-native'?",
        options: [
          "It runs faster than browser-based AI tools because it skips the web layer",
          "It works inside your actual project directory and uses your real files and terminal commands as part of its reasoning",
          "It was designed exclusively for software engineers writing production code",
          "It does not require an internet connection to operate"
        ],
        correctIndex: 1
      },
      {
        question: "You are inside your recruiting-workspace repo in Claude Code. Which question will it answer most reliably?",
        options: [
          "What is the best sourcing strategy for VP Sales roles in 2025?",
          "What files exist in this repo and what does each one contain?",
          "What will the recruiting job market look like in two years?",
          "How do I write better cold outreach in general?"
        ],
        correctIndex: 1
      },
      {
        question: "What does CLAUDE.md do?",
        options: [
          "It stores your Anthropic API key in a secure location",
          "It runs a set of commands automatically every time you open Claude Code",
          "It gives Claude Code persistent context about your project, role, and preferences that it reads before every session",
          "It automatically backs up your repo to the cloud"
        ],
        correctIndex: 2
      },
      {
        question: "A colleague says: 'Just use Claude in the browser — it is the same as Claude Code.' What is the key difference they are missing?",
        options: [
          "The browser version uses a newer, more capable model",
          "The browser version is free; Claude Code costs money per session",
          "Claude Code has access to your actual project files, terminal output, and command history; the browser version only works with what you paste into it",
          "Claude Code only works on Mac and the browser version works everywhere"
        ],
        correctIndex: 2
      },
      {
        question: "When should you update CLAUDE.md?",
        options: [
          "Once, during initial setup — it should not change after that",
          "Only when Claude Code makes a mistake and needs correction",
          "Whenever your project, role, or operating standards change — it is a living document that shapes every Claude Code session going forward",
          "Once per week on a fixed maintenance schedule"
        ],
        correctIndex: 2
      }
    ],
    gradingStandard: [
      "Uses Claude Code on one real project task.",
      "Explains what repo context or commands mattered.",
      "Identifies what Claude Code handled well.",
      "Identifies what still required judgment or comparison."
    ]
  },
  7: {
    summary:
      "Week 7 is about compounding. You will learn how to convert repeated work into reusable prompts, checklists, skills, or operating playbooks instead of starting fresh every time.",
    teachingOverview: [
      "This week shifts you from one-off AI wins to reusable operating assets. If you write the same prompt three times, explain the same process repeatedly, or use the same review checklist often, that pattern should become a shared asset.",
      "This week you practice deciding whether something should be a prompt, checklist, skill, or playbook. The best assets are narrow, named, clear about inputs and outputs, and easy for a teammate to use without extra explanation from you."
    ],
    lessonTakeaways: [
      "Reusable assets reduce ambiguity, inconsistency, and wasted time.",
      "Prompts, checklists, skills, and playbooks solve different levels of repeated work.",
      "The best reusable assets are narrow, clear, and easy for someone else to use.",
      "This is where the team starts building systems rather than isolated wins."
    ],
    demoSteps: [
      "Take one repeated workflow and show it as a one-off prompt.",
      "Ask whether it should stay a prompt or become a reusable asset.",
      "Turn it into a named skill or playbook with clear inputs and outputs.",
      "Explain what quality standard and review boundary make it actually reusable."
    ],
    assignmentDeliverable:
      "One reusable operating asset with a name, use case, input expectations, output expectations, and a clear choice of prompt, checklist, skill, or playbook.",
    assignmentSteps: [
      "Choose one repeated workflow worth standardizing.",
      "Decide whether it should become a prompt, checklist, skill, or playbook.",
      "Define its inputs, outputs, and what good quality looks like.",
      "Explain what problem this asset removes for the team."
    ],
    reflectionPrompts: [
      "Why did this workflow deserve to become reusable?",
      "Why did you choose prompt, checklist, skill, or playbook?",
      "What inconsistency does this remove?",
      "What would you still want a human to review?"
    ],
    quizQuestions: [
      {
        question: "You write the same sourcing intake prompt three times a week, adjusting it slightly each time for different roles. The most useful improvement is:",
        options: [
          "Memorize the prompt so you type it faster without copy-pasting",
          "Save it in a notes app and copy-paste it each time",
          "Turn it into a named Claude Code skill file so you invoke it with one slash command and typed inputs — no copy-pasting needed",
          "Ask your manager to standardize it as an official team document"
        ],
        correctIndex: 2
      },
      {
        question: "A playbook is different from a prompt because:",
        options: [
          "Playbooks are always longer than prompts and require more effort to create",
          "A playbook guides a person or team through a multi-step recurring process; a prompt is a single AI instruction for one specific task",
          "Prompts use AI and playbooks do not use AI at all",
          "Playbooks only work inside Claude Code and not in chat tools"
        ],
        correctIndex: 1
      },
      {
        question: "Why are narrow reusable assets more valuable than broad ones?",
        options: [
          "They are faster to write and require less effort",
          "Narrow assets are easier to trust, test, share, and improve — broad assets try to handle too many cases and end up handling none of them well",
          "They use fewer AI tokens per invocation",
          "Broad assets are not allowed by most company policies"
        ],
        correctIndex: 1
      },
      {
        question: "Your `/candidate-brief` skill produces the same generic output regardless of which candidate you specify. The most likely cause is:",
        options: [
          "The underlying Claude model was updated and changed its behavior",
          "The skill file is saved in the wrong folder and Claude Code is reading an old version",
          "The skill file does not include `$ARGUMENTS` — there is no placeholder to receive the specific candidate input you type after the command",
          "Claude Code requires a restart to load new input on each invocation"
        ],
        correctIndex: 2
      },
      {
        question: "Before sharing a skill file with a teammate, the minimum it needs is:",
        options: [
          "A version number, changelog, and author attribution",
          "A full user manual with step-by-step screenshots",
          "A one-sentence description of what it does, a clear `$ARGUMENTS` spec showing what to type, and a description of what it returns — enough to use without asking the author",
          "Written approval from a team lead or manager"
        ],
        correctIndex: 2
      }
    ],
    gradingStandard: [
      "Addresses a real repeated workflow.",
      "Is clearly classified as the right kind of asset.",
      "Explains inputs and outputs clearly.",
      "Defines what good quality means for reuse."
    ]
  },
  8: {
    summary:
      "Week 8 moves from MCP theory to actual installation. You will install the GitHub MCP server, connect it to Claude Code, and run a real recruiting task through it. By the end of this week you have a live connected workflow, not a diagram.",
    teachingOverview: [
      "This week draws a hard line between describing MCP and using it. You will install the GitHub MCP server — a free, open-source tool that lets Claude Code read and search your GitHub repos directly. No copy-pasting. No switching tabs. The AI reads your actual repo and answers based on real content.",
      "The practical lesson is that connected workflows are not harder than copy-paste — they are easier once set up. The risk conversation is equally important: when AI can read a system, it is grounded. When it can write, the stakes rise. This week is read-only, which is the right place to start."
    ],
    lessonTakeaways: [
      "MCP servers are installed in minutes with a single terminal command — no coding required.",
      "The GitHub MCP lets Claude Code search and read your repos without you copying anything.",
      "Read-only connections improve grounding. Write-capable connections require tighter review.",
      "Once you have one MCP server running, adding others follows the exact same pattern."
    ],
    demoSteps: [
      "Get a GitHub Personal Access Token: github.com → Settings → Developer Settings → Personal Access Tokens → Tokens (classic) → Generate new token → check 'repo' scope → copy the token.",
      "Install the GitHub MCP in Claude Code: run `claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=[your-token] -- npx -y @modelcontextprotocol/server-github`",
      "Verify: run `claude mcp list` and confirm `github` appears.",
      "Launch Claude Code from inside your recruiting-workspace repo and ask: 'List all files in this repo and summarize what each one contains.'",
      "Ask a follow-up: 'Based on what you see in this repo, what would make it more useful as a recruiting workspace?'",
      "Notice: Claude Code is reading your actual GitHub repo, not guessing."
    ],
    assignmentDeliverable:
      "A screenshot of `claude mcp list` showing the GitHub MCP connected, plus a screenshot of Claude Code answering a question that required reading your actual repo, plus a one-paragraph reflection on what changed when AI had real access.",
    assignmentSteps: [
      "Generate a GitHub Personal Access Token with 'repo' scope at github.com/settings/tokens.",
      "Run the install command: `claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=[your-token] -- npx -y @modelcontextprotocol/server-github`",
      "Run `claude mcp list` and take a screenshot confirming the connection.",
      "Launch Claude Code inside your recruiting-workspace repo and ask it a question that requires reading your files.",
      "Take a screenshot of the grounded answer.",
      "Write a one-paragraph reflection: what was different about the answer compared to a chat tool with no repo access?"
    ],
    reflectionPrompts: [
      "What was different about the answer when Claude Code had real access to your repo?",
      "What would you want to connect next — and would it be read-only or write-capable?",
      "What review step would you want before any write-capable MCP goes live?",
      "What other MCP servers do you think would be most useful for your recruiting work?"
    ],
    quizQuestions: [
      {
        question: "What problem does the GitHub MCP server primarily solve?",
        options: [
          "It increases the token limit so Claude Code can handle larger files",
          "It eliminates the need to manually copy repo information into AI prompts — Claude Code reads your actual GitHub repos directly",
          "It allows Claude Code to write and push code without any human review",
          "It automatically backs up your repositories on a schedule"
        ],
        correctIndex: 1
      },
      {
        question: "You install the GitHub MCP and ask Claude Code: 'What files are in my recruiting-workspace repo?' It names three specific files that actually exist there. What does this confirm?",
        options: [
          "Claude Code guessed correctly based on common patterns it learned in training",
          "The MCP connection is working — Claude Code read your actual GitHub repo content, not a prediction",
          "Claude Code remembered your repo from a previous session where you pasted the contents",
          "GitHub repos always contain those standard files by default"
        ],
        correctIndex: 1
      },
      {
        question: "Before giving Claude Code write access to any external system — ATS, Slack, or calendar — the most important question to answer first is:",
        options: [
          "Is the MCP server free or does it cost money?",
          "Is the connection fast enough to be worth using?",
          "What human review step exists before any AI-generated change affects real candidate records or real people?",
          "Does the vendor officially support MCP in their documentation?"
        ],
        correctIndex: 2
      },
      {
        question: "Why is read-only MCP access safer as a starting point than write-capable access?",
        options: [
          "Read-only connections are always significantly faster to set up and run",
          "Write-capable errors can change or damage real records in ways that are hard to reverse; read-only errors only affect what you see, not what actually exists",
          "Read-only access is free and write-capable access has a monthly cost",
          "The distinction is mostly cosmetic for practical AI tool use"
        ],
        correctIndex: 1
      },
      {
        question: "You run the MCP install command correctly and then `claude mcp list` shows nothing. The most likely causes are:",
        options: [
          "MCP is not supported on your version of Claude Code and needs an upgrade",
          "You need to restart your entire computer before changes take effect",
          "The Personal Access Token was entered incorrectly, or you ran the command outside the correct directory",
          "GitHub changed its API recently and the MCP server no longer works"
        ],
        correctIndex: 2
      }
    ],
    gradingStandard: [
      "Describes one workflow clearly.",
      "Identifies where tool connection adds value.",
      "Identifies at least two real risks.",
      "Defines a sensible review checkpoint."
    ]
  },
  9: {
    summary:
      "Week 9 is about delegation and parallel work. You will learn to break bigger workflows into sensible agent tasks with clear inputs, outputs, and review boundaries.",
    teachingOverview: [
      "This week you learn how to stop overloading a single prompt or agent with an entire messy workflow. Strong delegation starts by breaking work into pieces that are small enough to execute, review, and combine.",
      "You will practice identifying which steps can run in parallel and which must remain sequential. Your job as the operator is context control: define the task, specify inputs and outputs, preserve review boundaries, and synthesize the final result yourself."
    ],
    lessonTakeaways: [
      "Bad delegation usually fails because the work was badly scoped, not because agents are useless.",
      "Large workflows should be decomposed into reviewable tasks with clear outputs.",
      "Some work can run in parallel while other steps must remain sequential.",
      "A strong operator coordinates context and review, not just prompts harder."
    ],
    demoSteps: [
      "Take a messy multi-step workflow and show the overloaded version.",
      "Break it into distinct research, synthesis, drafting, and review tasks.",
      "Identify what can run in parallel and what must run in sequence.",
      "Show where the final human reviewer still owns the decision."
    ],
    assignmentDeliverable:
      "A screenshot of Claude Code running at least two parallel subagent tasks in your recruiting-workspace repo, plus a one-paragraph reflection on what each agent found and what still required your human review.",
    assignmentSteps: [
      "Open Claude Code in your recruiting-workspace repo.",
      "Type a prompt asking Claude Code to run two tasks in parallel — for example: 'Use the Task tool to run these two tasks in parallel: Task 1 — summarize every file in this repo. Task 2 — review my CLAUDE.md and suggest three improvements. Report both results together.'",
      "Take a screenshot of the combined subagent output.",
      "Write a one-paragraph reflection: what did each task find, and what would you still need to verify or decide yourself before acting on either result?"
    ],
    reflectionPrompts: [
      "Where did the original workflow feel overloaded?",
      "Which step was easiest to isolate?",
      "Which step still needed the most human judgment?",
      "What would make this delegation cleaner next time?"
    ],
    quizQuestions: [
      {
        question: "You have three tasks: (1) research a target company, (2) draft outreach based on that research, (3) summarize a different candidate's LinkedIn profile. Which can run in parallel?",
        options: [
          "Tasks 1 and 2 — they are both about the same company so they share context",
          "All three — parallel is always faster so you should run everything at once",
          "Tasks 1 and 3 — they are independent; task 2 must wait for task 1's output before it can start",
          "None of them — all recruiting tasks must be done sequentially to be safe"
        ],
        correctIndex: 2
      },
      {
        question: "You delegate 'improve our recruiting workflow' to a subagent and the output is impossible to evaluate. What most likely went wrong?",
        options: [
          "The subagent model is not powerful enough for this type of task",
          "The task is too vague — 'improve' has no definition of done, no constraints, and no clear output format to judge against",
          "Recruiting workflows are too complex for AI delegation",
          "The subagent ran out of available context window"
        ],
        correctIndex: 1
      },
      {
        question: "A subagent returns output. Before using it or passing it to the next step, you should:",
        options: [
          "Use it immediately — subagents are specifically designed to be reliable without human review",
          "Have the subagent review its own output for errors before you see it",
          "Review it yourself — delegated tasks can contain errors that propagate and compound if they go unchecked at the handoff point",
          "Save it and do a batch review at the end of all tasks"
        ],
        correctIndex: 2
      },
      {
        question: "Context control means giving each delegated task:",
        options: [
          "The full conversation history so it has maximum possible information to work with",
          "Only the information it needs to complete its specific job — not every piece of context you have",
          "A longer prompt to reduce any chance of ambiguity",
          "Access to all files in your repository regardless of relevance"
        ],
        correctIndex: 1
      },
      {
        question: "You run three parallel research tasks and one returns empty results. The best response is:",
        options: [
          "Accept the empty result and note it in your summary output",
          "Redo all three tasks from the beginning to ensure consistency",
          "Investigate: check the task scope and inputs for that specific task, then retry with better-defined constraints",
          "Accept the other two results and permanently discard the one that failed"
        ],
        correctIndex: 2
      }
    ],
    gradingStandard: [
      "Screenshot shows Claude Code running at least two tasks using the Task tool.",
      "Reflection accurately describes what each subagent returned.",
      "Identifies at least one thing that still required human judgment.",
      "Distinguishes what the agents did from what you verified."
    ]
  },
  10: {
    summary:
      "Week 10 introduces evals and guardrails as practical quality systems. You will learn to measure workflows with something stronger than intuition.",
    teachingOverview: [
      "This week teaches that reliable AI work needs a quality system. If you cannot evaluate a workflow, you cannot improve it reliably. Evals do not need to be complicated; they need to be repeatable enough to reveal whether the output is good.",
      "You will build a mini rubric and guardrails for one workflow. The aim is to make your judgment visible and consistent: what counts as correct, useful, constrained, clear, and reviewable. That makes future automation safer and easier to improve."
    ],
    lessonTakeaways: [
      "If a workflow cannot be evaluated, it cannot be improved reliably.",
      "Evals do not need to be fancy; they need to be repeatable.",
      "Guardrails reduce predictable failure before it becomes expensive.",
      "The team should judge workflows by correctness, usefulness, constraints, clarity, and reviewability."
    ],
    demoSteps: [
      "Choose one real workflow and define what a good result looks like.",
      "Turn that into four or five simple evaluation criteria.",
      "Add one or two guardrails that reduce known failure modes.",
      "Explain how this creates a real improvement loop over time."
    ],
    assignmentDeliverable:
      "A mini eval pack with 4-5 criteria, at least 2 guardrails, and a short explanation of how a reviewer would apply them.",
    assignmentSteps: [
      "Choose one repeated workflow.",
      "Define four or five evaluation criteria.",
      "Define at least two guardrails.",
      "Explain how someone would use the rubric in practice."
    ],
    reflectionPrompts: [
      "What makes this workflow easy or hard to evaluate?",
      "Which criterion matters most?",
      "Which guardrail feels most necessary?",
      "How would this make the workflow stronger over time?"
    ],
    quizQuestions: [
      {
        question: "You are building an eval for AI-generated candidate outreach. Which criterion is most useful?",
        options: [
          "'The message sounds professional' — Yes or No",
          "'The message was generated in under 10 seconds'",
          "'The message references the candidate's specific current role or company — Pass: yes, with a direct quote. Fail: generic opener with no personalization'",
          "'The message is under 200 words'"
        ],
        correctIndex: 2
      },
      {
        question: "A guardrail differs from an eval criterion because:",
        options: [
          "Guardrails are longer and more formal documents requiring team sign-off",
          "A guardrail prevents a known failure before it happens; an eval criterion judges quality after output is already produced",
          "Guardrails are optional and eval criteria are required by the workflow",
          "Eval criteria only apply to text output; guardrails apply to code and automation"
        ],
        correctIndex: 1
      },
      {
        question: "Your rubric asks: 'Is this message personalized? Yes or No.' Two reviewers disagree on 40% of messages. The problem is:",
        options: [
          "One reviewer is wrong and needs to be retrained or replaced",
          "'Personalized' is not defined specifically enough — a useful criterion tells reviewers exactly what evidence to look for so any two people reach the same answer",
          "The rubric has too few questions and needs more criteria to resolve the disagreement",
          "You need a third reviewer to break ties when two reviewers disagree"
        ],
        correctIndex: 1
      },
      {
        question: "A 'reject condition' in an eval means:",
        options: [
          "The output scores below average on all evaluation criteria",
          "A specific failure — such as invented facts or missing required fields — that means the output cannot be used at all regardless of how it scores elsewhere",
          "The AI refused to complete the task and returned an error message",
          "The output was generated too slowly to be useful in your workflow"
        ],
        correctIndex: 1
      },
      {
        question: "A team that runs an AI outreach workflow without any eval rubric will typically experience:",
        options: [
          "Consistently improving output quality as the AI learns from usage",
          "Inconsistent quality — good results sometimes, poor results other times — with no reliable way to identify why or improve it systematically",
          "Better results because intuition and feel are faster and more flexible than formal rubrics",
          "No quality issues as long as they are using the most capable available model"
        ],
        correctIndex: 1
      }
    ],
    gradingStandard: [
      "Defines usable evaluation criteria.",
      "Defines real guardrails that reduce risk.",
      "Explains how someone would apply them in practice.",
      "Keeps the eval focused on usefulness rather than bureaucracy."
    ]
  },
  11: {
    summary:
      "Week 11 is your first real build week. You will design a small, bounded, reviewable, and visibly useful recruiting micro-agent.",
    teachingOverview: [
      "This week turns your previous skills into a small practical build. The best first micro-agent is not the most impressive one; it is the one that solves a real recurring problem with clear inputs, outputs, review, and value.",
      "Keep your scope tight. A useful sourcing helper, research summarizer, outreach prep workflow, or note synthesis assistant is better than a sprawling agent nobody trusts. The standard is usefulness, reviewability, and adoption."
    ],
    lessonTakeaways: [
      "The best first agent is small, reviewable, and tied to a real workflow.",
      "Useful beats impressive in early agent design.",
      "Value should be visible in time saved, quality improved, or friction removed.",
      "Review cannot disappear just because the workflow is automated."
    ],
    demoSteps: [
      "Choose one narrow recruiting problem worth automating.",
      "Define the inputs, outputs, review step, and value measure.",
      "Show how keeping the scope small makes the build safer and more useful.",
      "Explain what version two would improve once the first version works."
    ],
    assignmentDeliverable:
      "A working Claude Code skill file committed to your recruiting-workspace repo, with a screenshot showing it running successfully inside Claude Code.",
    assignmentSteps: [
      "Identify one small recurring recruiting workflow you want to automate (sourcing intake, candidate brief, outreach review, etc.).",
      "Write a skill file as a Markdown file with: a one-sentence description, what input it needs ($ARGUMENTS), and what it should return.",
      "Save it to `~/.claude/commands/[your-skill-name].md`.",
      "Test it by running `/[your-skill-name]` inside Claude Code with a real example and take a screenshot.",
      "Copy it into your recruiting-workspace repo: `cp ~/.claude/commands/[name].md ~/recruiting-workspace/playbooks/[name].md`.",
      "Commit it: `git add playbooks/[name].md && git commit -m 'add [name] skill'`.",
      "Submit the skill file contents, the screenshot of it running, and one sentence about the recruiting problem it solves."
    ],
    reflectionPrompts: [
      "Why did you keep the scope this size?",
      "What is the clearest source of value?",
      "What still needs human review?",
      "What would you improve in version two?"
    ],
    quizQuestions: [
      {
        question: "You are designing your first Claude Code skill for recruiting. Which scope is most appropriate?",
        options: [
          "Automate the entire recruiting lifecycle from job requisition through offer letter",
          "Generate a structured sourcing intake brief when I paste a job title and 2–3 context sentences",
          "Replace all manual candidate research across every open role on the team",
          "Handle all outreach drafting, scheduling, and follow-up for all open roles simultaneously"
        ],
        correctIndex: 1
      },
      {
        question: "Your skill file is saved, the slash command runs without errors, but the output is identical regardless of what you type after the command. The most likely cause is:",
        options: [
          "The Claude model version changed and broke the skill's behavior",
          "The skill file is saved in the wrong folder and Claude Code is reading an outdated version",
          "The skill file does not include `$ARGUMENTS` — there is no placeholder to receive the specific input you type",
          "You need to reload Claude Code after each new input for the skill to pick it up"
        ],
        correctIndex: 2
      },
      {
        question: "The first real sign that a micro-agent is useful — not just technically working — is:",
        options: [
          "It produces longer, more detailed output than doing the task manually",
          "It receives positive comments in a team meeting or review session",
          "You or a teammate saves measurable time or improves output quality on a task you previously did manually",
          "It runs without any errors three times in a row during testing"
        ],
        correctIndex: 2
      },
      {
        question: "Before sharing a skill file with a teammate, the minimum documentation it needs is:",
        options: [
          "A full user manual with annotated screenshots and a FAQ section",
          "A version number and a running changelog of all changes made",
          "A one-sentence description, a clear `$ARGUMENTS` spec showing what to paste or type, and a description of what it returns — enough to use confidently without asking the author",
          "Written approval from a team lead confirming the skill is ready for team use"
        ],
        correctIndex: 2
      },
      {
        question: "You built a skill that works correctly in every test but nobody on the team uses it after two weeks. The most likely explanation is:",
        options: [
          "The AI quality is not yet good enough for the team to trust it",
          "The skill solves a problem that is not painful enough to change habits around, or using it is harder than just doing the task manually",
          "The team did not have enough time to learn a new tool",
          "The skill file format is incompatible with some teammates' operating system setup"
        ],
        correctIndex: 1
      }
    ],
    gradingStandard: [
      "A working skill file is committed to the recruiting-workspace repo.",
      "Screenshot shows the skill running successfully inside Claude Code.",
      "The skill file includes what input it takes and what it returns.",
      "The submitted reflection names the recruiting problem it solves."
    ]
  },
  12: {
    summary:
      "Week 12 turns the program into an operating rhythm. You will present one real build and identify what habit or system you will actually carry forward.",
    teachingOverview: [
      "This week closes the program by turning learning into operating behavior. You will present one real build or workflow, explain why it matters, show how it should be reviewed, and identify what you will continue doing after the program ends.",
      "The final standard is not spectacle. A strong capstone is useful, bounded, explainable, reusable, and honest about its limitations. The difference between trying AI for 12 weeks and actually changing how you work comes down to one thing: did you take one real workflow and make it part of how you operate every day? A capstone that sits in a slide deck and never gets used again is worth nothing. A capstone that saves 20 minutes per req, every week, for the next year is worth everything.",
      "The best outcome is a team that keeps shipping small, reviewed, AI-enabled improvements after the formal curriculum ends — not because they were told to, but because they have seen what works and built the habits to keep doing it."
    ],
    lessonTakeaways: [
      "A capstone should be useful, bounded, explainable, and reusable.",
      "The strongest finish is one real build plus one real workflow improvement.",
      "Adoptability matters more than spectacle.",
      "The program ends well only if the work becomes part of the team’s operating system."
    ],
    demoSteps: [
      "Review two or three example capstones against usefulness, scope, reviewability, repeatability, and value.",
      "Show why the most impressive project is not always the most adoptable one.",
      "Model how to present value and limitations honestly.",
      "Connect the capstone back to a durable team habit."
    ],
    assignmentDeliverable:
      "A capstone presentation covering the build, the problem it solves, inputs and outputs, review boundary, value created, and the next version to pursue.",
    assignmentSteps: [
      "Your capstone deliverable is your Week 11 skill file plus a short written explanation covering four things: the recruiting problem it solves, the value it creates (time saved, quality improved, or friction removed), its current limits (what it cannot do or gets wrong), and what you would improve in the next version.",
      "Choose one real build or workflow from the program.",
      "Prepare a clear explanation of what it does and why it matters.",
      "Explain what still requires review and what the next version would improve.",
      "Commit to one operating habit the team should carry forward."
    ],
    reflectionPrompts: [
      "What changed most in how you work?",
      "What are you now much less intimidated by?",
      "What is one workflow you will keep using?",
      "What is one standard you now think the team should hold?"
    ],
    quizQuestions: [
      {
        question: "What makes a capstone presentation credible rather than impressive-looking?",
        options: [
          "Using the most advanced and recent AI tools available",
          "Showing a concrete before/after improvement, naming limitations honestly, and having a clear next version planned",
          "Having the longest demo with the most workflow steps",
          "Referencing as many weeks of the curriculum as possible in the presentation"
        ],
        correctIndex: 1
      },
      {
        question: "An 'operating habit' is different from a one-time experiment because:",
        options: [
          "Experiments are inherently riskier and harder to recover from when they fail",
          "An operating habit runs every time a specific trigger happens — it becomes part of the default workflow, not a special occasion",
          "Habits are always simpler and faster to execute than one-time experiments",
          "Experiments require more tools and setup before they can be run"
        ],
        correctIndex: 1
      },
      {
        question: "Your capstone skill file works correctly but only you know how to invoke it. What is missing?",
        options: [
          "Better underlying code that makes the output more reliable",
          "Manager approval confirming the skill is ready for team use",
          "Documentation explaining what to paste, what to expect, and where to apply human judgment — enough for a teammate to use it confidently without asking you",
          "A more complex and sophisticated prompt that handles more edge cases"
        ],
        correctIndex: 2
      },
      {
        question: "Naming the limitations of your capstone workflow honestly does what?",
        options: [
          "Makes the presentation look weaker and less impressive to the audience",
          "Builds team trust and helps people know exactly where to apply human judgment — preventing misuse and failed adoption",
          "Is required by company policy for all AI tools before deployment",
          "Reduces the scope of what you appear to have delivered in the program"
        ],
        correctIndex: 1
      },
      {
        question: "The most valuable outcome of completing this program is:",
        options: [
          "A polished slide deck summarizing everything you learned over 12 weeks",
          "Having tried and used every tool introduced in the curriculum at least once",
          "One useful workflow or skill the team will actually keep using after the program ends — adoptable, reviewed, and maintained",
          "Completing all 12 weekly assignments and receiving the final badge"
        ],
        correctIndex: 2
      }
    ],
    gradingStandard: [
      "Presents a real build or workflow clearly.",
      "Explains value in plain language.",
      "Explains limitations honestly.",
      "Identifies a real next step and operating habit."
    ]
  }
};

const curriculumEnhancementsByWeek: Record<number, WeekCurriculumEnhancement> = {
  1: {
    whatThisIs:
      "The terminal is a text-based way to control your computer. Instead of clicking through folders and apps, you type short commands. In this program, you use it for safe basics: finding where they are, seeing what files exist, creating a Git repository, and pushing it to GitHub.\n\nWhat you will need before starting this program: (1) A Mac or PC — Mac Terminal is built in; Windows users install Git Bash free at gitforwindows.org. (2) A free GitHub account at github.com. (3) Node.js installed — free at nodejs.org (this also installs npm, which you need for Claude Code). (4) VS Code installed — free at code.visualstudio.com. (5) An Anthropic API key from console.anthropic.com — you will need this in Week 6 for Claude Code; it costs roughly $5–20/month based on usage, not a flat subscription. The only paid tools in this program are Claude.ai and Codex, which you already have.",
    whyThisComesNow:
      "We start here because Codex, Claude Code, and most serious AI coding workflows live around files, commands, and project output. If the terminal feels mysterious, every later week feels harder than it needs to. This week gives you basic control before asking you to supervise AI.",
    howThisConnectsToAI:
      "AI coding agents do not just chat. They inspect files, run commands, read errors, and propose changes. You need enough terminal fluency to understand what the agent is doing and avoid either freezing up or trusting it blindly. Your recruiting-workspace repo is also your portable toolkit. Every prompt, playbook, and skill file you build in this program lives here — separate from any ATS or tool your company uses. When your company changes ATS, your repo comes with you.",
    whatYouWillDoNext: [
      "Confirm your setup: Node.js installed (`node -v`), VS Code installed (`code --version`), GitHub account created.",
      "Open Terminal, create a folder called `recruiting-workspace`, and move into it.",
      "Run: `git init`, `touch README.md`, `git add README.md`, `git commit -m 'first commit'`, `git log --oneline`.",
      "Open the folder in VS Code with `code .` — this is how you'll view files visually throughout the course.",
      "Create a new repo on github.com named `recruiting-workspace`, then push: `git remote add origin [your-url]` and `git push -u origin main`.",
      "Confirm your repo is live at github.com/[your-username]/recruiting-workspace."
    ],
    plainEnglishVocabulary: [
      "Terminal: the text box where you type commands.",
      "Command: an instruction you type, like `ls` or `git status`.",
      "Directory: another word for folder.",
      "Path: the location of a file or folder.",
      "Process: a program currently running, like a local web app.",
      "Output: what the computer prints back after a command."
    ],
    recommendedResources: [
      {
        label: "GitHub Docs: About Git",
        url: "https://docs.github.com/en/get-started/using-git/about-git"
      }
    ],
    learningObjectives: [
      "Explain what the terminal is and why coding agents use it.",
      "Run at least eight safe terminal commands and explain each one in plain English.",
      "Create a new Git repository, make a first commit, and confirm with `git log`.",
      "Push your recruiting-workspace repo to GitHub so it is live and ready for Codex in Week 2."
    ],
    workedExample:
      "Full session: `mkdir ~/recruiting-workspace` creates the folder; `cd ~/recruiting-workspace` enters it; `git init` activates version control; `touch README.md` creates a file; `ls` confirms it exists; `git add README.md` stages it; `git commit -m 'first commit'` saves a snapshot; `git log --oneline` shows the history; `code .` opens VS Code; on github.com create a new repo named `recruiting-workspace`, copy the URL, then run `git remote add origin [url]` and `git push -u origin main`. Open the URL in a browser — your repo is now live. This is the repo you will build on for the entire 12-week program.",
    guidedPractice: [
      "Run `pwd` and `ls` in your new folder; write one sentence explaining each output.",
      "Run `git init` then `git status`; describe what changed in the output.",
      "Create a file, commit it, and confirm it appears in `git log`.",
      "Run `code .` and confirm VS Code opens showing your folder.",
      "Push to GitHub and confirm the repo is visible at your profile URL."
    ],
    commonMistakes: [
      "Thinking every line of terminal output is an error.",
      "Copying commands without checking which folder they are in.",
      "Forgetting that `Control + C` is the normal way to stop a running process."
    ],
    facilitatorNotes: [
      "Do not over-teach shell theory; confidence matters more than coverage.",
      "Normalize messy output by narrating what can safely be ignored.",
      "Ask learners to explain commands aloud in plain English."
    ]
  },
  2: {
    whatThisIs:
      "This week is about choosing the right AI tool for the job. ChatGPT and Claude are conversational tools. Codex and Claude Code are coding agents that can work with actual project files, commands, and codebase context.",
    whyThisComesNow:
      "After you understand the terminal at a basic level, you can understand why coding agents are different from ordinary chat. This prevents the common mistake of using one AI tool for every task.",
    howThisConnectsToAI:
      "Modern AI work is increasingly tool-specific. The skill is not just asking AI a question; it is deciding whether the task needs general reasoning, file awareness, command execution, or code changes.",
    whatYouWillDoNext: [
      "Set up Codex: go to platform.openai.com, create or sign in to your account, add API access, and navigate to the Codex section.",
      "Type your first Codex prompt about a project question and observe how it differs from a chat answer.",
      "Compare a chat-style task with a coding-agent task on the same question.",
      "Ask a follow-up that forces the answer to become more grounded.",
      "Submit a short judgment on whether the answer was useful, incomplete, or misleading."
    ],
    plainEnglishVocabulary: [
      "Chat tool: an AI conversation tool for drafting, explaining, summarizing, or brainstorming.",
      "Coding agent: an AI tool that can inspect files, run commands, and help change code.",
      "Repo: short for repository, the folder/project where code lives.",
      "Grounded answer: an answer based on real project evidence instead of generic guessing.",
      "Follow-up prompt: a second instruction that improves or narrows the first answer."
    ],
    recommendedResources: [
      {
        label: "OpenAI Codex cloud docs",
        url: "https://platform.openai.com/docs/codex"
      },
      {
        label: "Claude Code overview",
        url: "https://docs.anthropic.com/en/docs/claude-code/overview"
      }
    ],
    learningObjectives: [
      "Distinguish chat AI tasks from coding-agent tasks.",
      "Use Codex or Claude Code to answer one real codebase question.",
      "Evaluate whether an agent answer is grounded in actual project evidence."
    ],
    workedExample:
      "Scenario: you just created your recruiting-workspace repo and want to understand it. Weak prompt sent to chat AI (no repo): 'What is in my recruiting repo?' Weak answer: 'A typical recruiting repo contains job descriptions, candidate tracking spreadsheets, and process documents.' That could apply to any recruiter anywhere — it is not about your repo. Strong prompt sent to Codex (with repo connected): 'Read the files in this repo and tell me exactly what exists, what is missing, and what I should add to make this useful for sourcing and outreach work.' Strong answer: 'Your repo contains one file: README.md with no content. There are no playbooks, prompts, or workflow files yet. Based on what a recruiting workspace usually needs, I would suggest adding: a /prompts folder for reusable AI prompts, a /playbooks folder for step-by-step workflows, and a CLAUDE.md file for Claude Code context.' That is grounded — it reports what actually exists, not what typically exists.",
    guidedPractice: [
      "Open platform.openai.com, connect your recruiting-workspace repo in Codex, and confirm it can see your files.",
      "Write one question you could answer with ChatGPT chat (no repo needed).",
      "Write one question that only Codex can answer well because it requires reading your actual repo.",
      "Before moving on, ask yourself: Does this answer mention specific files in your repo? Could the exact same answer apply to any repo? Did it answer what you actually asked?",
      "Ask Codex that repo question and require it to quote or reference specific file contents."
    ],
    commonMistakes: [
      "Using a general chat tool when the answer depends on repository files.",
      "Trusting a confident answer that does not cite project evidence.",
      "Choosing tools by preference instead of task fit."
    ],
    facilitatorNotes: [
      "Keep the comparison grounded in actual tasks, not model debate.",
      "Reward learners for identifying uncertainty.",
      "Push for file references whenever a claim depends on the repo."
    ]
  },
  3: {
    whatThisIs:
      "Prompting is the practice of giving AI a clear task. In this course, prompting is not about clever wording. It is about defining the work well enough that the AI can produce something usable.",
    whyThisComesNow:
      "Once you know which tool to use, the next skill is giving that tool a good task. Weak prompts create vague outputs. Strong prompts make the expected work, context, constraints, and output format clear.",
    howThisConnectsToAI:
      "AI tools are powerful but literal in the wrong ways. If you leave out the audience, constraints, source material, definition of done, or output format, the model fills those gaps with assumptions.",
    whatYouWillDoNext: [
      "Look at weak prompts and identify what is missing.",
      "Rewrite prompts with task, context, constraints, definition of done, and output format.",
      "Create prompts for chat, coding-agent, and recruiting workflows.",
      "Submit prompts that another teammate could reuse."
    ],
    plainEnglishVocabulary: [
      "Task: what you want the AI to do.",
      "Context: background the AI needs to do the task well.",
      "Constraint: a rule or boundary the AI must follow.",
      "Definition of done: how you know the answer is complete.",
      "Output format: the shape of the answer, such as bullets, table, checklist, or JSON."
    ],
    recommendedResources: [
      {
        label: "OpenAI prompt engineering guide",
        url: "https://platform.openai.com/docs/guides/prompt-engineering"
      },
      {
        label: "Anthropic prompt engineering overview",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"
      }
    ],
    learningObjectives: [
      "Write prompts with task, context, constraints, definition of done, and output format.",
      "Rewrite vague prompts into operational prompts.",
      "Create prompts that can be reused by teammates."
    ],
    workedExample:
      "Weak prompt: 'Write outreach for this candidate.' It fails because: task is undefined (what kind of outreach — email, LinkedIn, InMail?), context is missing (what role, what company, what stage?), there are no constraints (what to avoid? what tone?), no definition of done (how long? how many versions?), and the output shape is unclear. Strong prompt: 'Write a 3-sentence LinkedIn message to [Name], currently a Senior Account Executive at Salesforce, for a VP of Sales role at a Series B SaaS company. Tone: warm and direct, not salesy. Reference their current title specifically. Do not mention compensation. Return the message only — no explanation, no subject line, no alternatives.' The second prompt is usable the moment it comes back. The first requires three follow-up exchanges to reach the same place — and even then the result is worse because the AI guessed at the context.",
    guidedPractice: [
      "Take this vague prompt: 'Find me good VP Sales candidates.' Using the 5-element checklist, identify which elements are missing: task, context, constraints, definition of done, output format. Write one sentence for each element that is missing.",
      "Rewrite the prompt with all five elements. Your rewrite must specify: the seniority level and role, the company type and stage, at least one constraint (something to exclude or limit), what 'good' means (your definition of done), and the exact output format — table, ranked list, bullet points, or something else.",
      "Add one constraint that blocks a predictable bad result — for example, excluding candidates from a specific type of company, capping the number of results at a specific number, or requiring a specific evidence type before a candidate qualifies.",
      "Test it mentally: with your rewritten prompt, what would the AI still have to guess or assume? Name at least one remaining assumption. Add a prompt element that resolves it.",
      "Compare your final version to the original. List two specific ways the rewritten prompt will produce a more useful result — not just 'it's clearer' but what will actually be different in the output."
    ],
    commonMistakes: [
      "Asking for quality without defining what quality means.",
      "Forgetting to specify the audience or context.",
      "Using long prompts that still lack a clear deliverable."
    ],
    facilitatorNotes: [
      "Use before/after examples heavily.",
      "Treat prompt writing as operational design, not wordsmithing.",
      "Ask learners what the AI would have to guess."
    ]
  },
  4: {
    whatThisIs:
      "This week is about reviewing AI output using a five-question checklist you will keep and use for the rest of the program. The five questions are: (1) Is it grounded — does the answer cite real evidence or files, or is it guessing? (2) Is it complete — does it actually answer what was asked, or does it stop short? (3) Does it follow constraints — did the AI honor the rules you gave it, or did it quietly ignore them? (4) Is it usable — can you act on this without major rework? (5) What is the risk — what could go wrong if this answer is wrong or incomplete? Run these five questions on every significant AI output before you use it.",
    whyThisComesNow:
      "After you can ask better questions, you need to know how to judge the answers. AI often sounds confident even when it is wrong or incomplete. Review discipline prevents speed from turning into sloppy work.",
    howThisConnectsToAI:
      "The most valuable AI users are not the ones who accept answers fastest. They are the ones who can quickly spot weak assumptions, missing evidence, hallucinations, and risky recommendations.",
    whatYouWillDoNext: [
      "Generate one AI output.",
      "Review it using a simple quality checklist.",
      "Identify at least three meaningful issues.",
      "Write a revision prompt and compare the improved result."
    ],
    plainEnglishVocabulary: [
      "Grounding: whether the answer is based on real evidence.",
      "Hallucination: when AI invents or states something unsupported.",
      "Constraint check: confirming the answer followed the rules you gave it.",
      "Revision prompt: an instruction that asks the AI to improve a specific weakness.",
      "Human judgment: the decision-making responsibility that stays with the person."
    ],
    recommendedResources: [
      {
        label: "OpenAI text generation guide",
        url: "https://platform.openai.com/docs/guides/text"
      }
    ],
    learningObjectives: [
      "Apply a review checklist to AI-generated output.",
      "Identify grounding, completeness, constraint, usability, and risk issues.",
      "Write a revision prompt that improves a flawed output."
    ],
    workedExample:
      "Apply the checklist to a candidate summary that sounds polished: (1) Grounded? No — it invents seniority that isn't in the resume. (2) Complete? No — it omits three scorecard criteria entirely. (3) Constraints followed? No — you asked for evidence-backed bullets and got prose. (4) Usable? No — you cannot send this to a hiring manager as-is. (5) Risk? High — a hiring manager could make a decision on invented information. Revision prompt: 'Rewrite this using only facts from the resume. Use bullet format. Label anything you cannot confirm as unknown.' That is a targeted fix — not 'make this better.'",
    guidedPractice: [
      "Using any chat AI, generate an outreach message for a fictional VP Sales candidate named Jordan Lee, currently a Senior AE at Oracle, applying for a VP of Sales role at your company. Do not give the AI specific constraints — let it produce whatever it wants.",
      "Run the 5-question checklist on the result: (1) Grounded — does it reference Jordan's actual role and company, or is it generic? (2) Complete — does it include all the elements of good outreach? (3) Constraints followed — you gave none, so check for obvious violations of good practice. (4) Usable — could you send this as-is without changes? (5) Risk — what is the worst case if this message goes to Jordan or to the hiring manager?",
      "Identify at least three specific flaws. For each one, name the evidence precisely — not 'it's generic' but 'it says your impressive background without naming any specific detail about Jordan's actual role at Oracle.'",
      "Classify each flaw as grounding, completeness, constraint, usability, or risk — using the 5-question checklist categories.",
      "Write one revision prompt that targets the most serious flaw directly. Run it. Check whether the revised output fixes the problem without introducing new problems."
    ],
    commonMistakes: [
      "Mistaking polished tone for correctness.",
      "Only fixing grammar instead of substance.",
      "Failing to preserve human judgment on risky decisions."
    ],
    facilitatorNotes: [
      "Show at least one deceptively good bad answer.",
      "Make learners name the evidence behind their critique.",
      "Keep review lightweight enough to become a habit."
    ]
  },
  5: {
    whatThisIs:
      "This week introduces Codex as a coding-agent workflow. Codex can help investigate code, explain behavior, propose changes, and support real project work when the task is scoped clearly.",
    whyThisComesNow:
      "You first needed terminal confidence, tool selection, prompting, and review discipline. Now you are ready to ask Codex to do real project work without treating it like magic.",
    howThisConnectsToAI:
      "Codex represents the shift from AI as a writing assistant to AI as a supervised worker. Your job is to define the task, inspect the work, and decide what is safe to accept.",
    whatYouWillDoNext: [
      "Choose one small project task.",
      "Ask Codex to investigate or improve it.",
      "Review what Codex did and what it assumed.",
      "Submit the prompt, result, strengths, weaknesses, and one verification step."
    ],
    plainEnglishVocabulary: [
      "Task scope: the boundary of what Codex should do.",
      "Diff: the set of file changes proposed or made.",
      "Verification: checking whether the result actually works.",
      "Assumption: something the agent treated as true without full proof.",
      "Review item: something a human should inspect before trusting the output."
    ],
    recommendedResources: [
      {
        label: "OpenAI Codex cloud docs",
        url: "https://platform.openai.com/docs/codex"
      },
      {
        label: "OpenAI Codex announcement",
        url: "https://openai.com/index/introducing-codex/"
      }
    ],
    learningObjectives: [
      "Scope a Codex task small enough to review.",
      "Use Codex for investigation or implementation on a real repo task.",
      "Inspect changed files, assumptions, and verification needs."
    ],
    workedExample:
      "Ask Codex: 'Walk me through how a new job req moves from approval to posting in our typical process — what steps, who owns each, and where do things usually get stuck?' That is a scoped investigation task. Codex reads your project files and traces the workflow rather than guessing.",
    guidedPractice: [
      "Write a one-sentence bounded Codex task using this format: [action verb] + [specific target] + [without doing X]. For example: 'Explain the steps in our job approval process using only files in this repo — do not suggest changes or add anything new.' The 'without doing X' part prevents Codex from taking actions you did not ask for.",
      "Before sending the task, write down your predictions: what files would Codex need to answer this well? What would a complete answer include? These become your verification checklist.",
      "Send the task. Review the output against your predictions. For each claim Codex makes, mark it: is this based on actual file content, or is it a reasonable-sounding assumption about how things usually work?",
      "Ask Codex: 'What assumptions did you make in that answer?' Note which assumptions were accurate for your actual situation and which were not — these are your verification items.",
      "Write one follow-up prompt that resolves the most important unverified assumption. Compare the new output to the original. Write one sentence describing what changed and why it matters."
    ],
    commonMistakes: [
      "Giving Codex a task too broad to review.",
      "Skipping the investigation step.",
      "Accepting changes without checking the diff or test output."
    ],
    facilitatorNotes: [
      "Force small scopes this week.",
      "Ask learners to separate what Codex did from what they verified.",
      "Make review behavior the graded skill, not just task completion."
    ]
  },
  6: {
    whatThisIs:
      "This week introduces Claude Code as a terminal-native coding agent. It works inside a project and can use files, commands, context, memory, and tool connections to help complete coding tasks.",
    whyThisComesNow:
      "Claude Code makes more sense now that you understand terminal basics and Codex-style agent supervision. This week gives you a second serious coding-agent workflow and teaches comparison by task fit.",
    howThisConnectsToAI:
      "Claude Code shows how AI becomes more useful when it is close to the working environment. Instead of pasting snippets into chat, you can ask for help inside the project context.",
    whatYouWillDoNext: [
      "Install Claude Code: run `npm install -g @anthropic-ai/claude-code` in your terminal.",
      "Launch with `claude` and authenticate using your Anthropic API key from console.anthropic.com.",
      "Navigate into your recruiting-workspace repo and ask Claude Code one question about it.",
      "Create a CLAUDE.md file in your repo root — this gives Claude Code persistent context about your work and preferences.",
      "Add at least three lines to CLAUDE.md: what this repo is for, your role, and one rule you always want followed.",
      "Compare whether Codex or Claude Code felt better suited and submit a short task-fit judgment."
    ],
    plainEnglishVocabulary: [
      "Terminal-native: designed to work from the command line.",
      "Project context: the files, commands, and structure around the task.",
      "CLAUDE.md: a plain text file in your repo root that Claude Code reads before every session — your persistent instructions, context, and rules.",
      "Slash command: a command inside Claude Code that controls or triggers a workflow.",
      "Task fit: whether a tool is well suited to a specific job."
    ],
    recommendedResources: [
      {
        label: "Claude Code overview",
        url: "https://docs.anthropic.com/en/docs/claude-code/overview"
      },
      {
        label: "Claude Code slash commands",
        url: "https://docs.anthropic.com/en/docs/claude-code/slash-commands"
      }
    ],
    learningObjectives: [
      "Describe what makes Claude Code terminal-native.",
      "Use Claude Code on one project task with file and command context.",
      "Compare Claude Code and Codex by task fit."
    ],
    workedExample:
      "Installation walkthrough: run `npm install -g @anthropic-ai/claude-code`, then `claude` to launch. On first run it asks for your Anthropic API key — get one at console.anthropic.com. Navigate to your recruiting-workspace repo with `cd ~/recruiting-workspace` then run `claude`. Ask: 'What is in this repo and how is it structured?' Now create a CLAUDE.md in the repo root. A good CLAUDE.md for a recruiter might read: '# Recruiting Workspace\\n\\nThis is a personal AI productivity repo for a senior GTM recruiter. I use this to store prompts, playbooks, and automation scripts.\\n\\nRules:\\n- Always write prompts in plain English, not code\\n- Label any uncertain output as [UNVERIFIED]\\n- Prefer bullet points over paragraphs in all outputs'. Now ask Claude Code the same question — it reads CLAUDE.md first and shapes every response around your context.",
    guidedPractice: [
      "Run `npm install -g @anthropic-ai/claude-code` and confirm with `claude --version`.",
      "Launch `claude`, authenticate with your Anthropic API key, and confirm you can send a message.",
      "Navigate into your recruiting-workspace repo and ask Claude Code to describe what it sees.",
      "Create a CLAUDE.md file: run `touch CLAUDE.md`, open it in VS Code with `code .`, and write three lines: what the repo is for, your role, and one rule.",
      "Ask the same question again and notice how Claude Code's response changes with CLAUDE.md in place."
    ],
    commonMistakes: [
      "Treating Claude Code like ordinary chat.",
      "Ignoring terminal output that should affect the answer.",
      "Comparing tools by vibes instead of task fit."
    ],
    facilitatorNotes: [
      "Emphasize terminal context as the differentiator.",
      "Ask for concrete examples of files or commands that mattered.",
      "Keep the comparison practical and non-tribal."
    ]
  },
  7: {
    whatThisIs:
      "This week is about turning repeated AI work into reusable team assets. A reusable asset might be a prompt, checklist, skill, playbook, or standard operating pattern. Your `/playbooks` folder in the repo becomes your portable recruiting toolkit: intake templates, sourcing checklists, outreach review prompts, candidate brief skills. Unlike prompts saved inside a chat tool or ATS, these travel with you regardless of what platform your company uses.",
    whyThisComesNow:
      "After you can use AI for individual tasks, the next step is making good work repeatable. This prevents you from reinventing the same prompt or process every time.",
    howThisConnectsToAI:
      "AI quality improves when instructions, examples, and standards are reusable. Skills and playbooks help the team get more consistent outputs with less repeated explanation.",
    whatYouWillDoNext: [
      "Identify one recruiting workflow you repeat at least weekly.",
      "Decide whether it should be a prompt, checklist, skill, or playbook.",
      "Create the asset as a Markdown file in your recruiting-workspace repo under a `/playbooks` or `/.claude/commands` folder.",
      "For a Claude Code skill specifically: create a `.md` file in `~/.claude/commands/` — Claude Code will expose it as a slash command you can invoke with `/filename`.",
      "Commit the file to your repo and test invoking it."
    ],
    plainEnglishVocabulary: [
      "Reusable asset: a prompt, checklist, or playbook the team can use again.",
      "Skill: a packaged instruction set for a repeated type of work.",
      "Playbook: a step-by-step operating guide.",
      "Input: what the workflow needs before it starts.",
      "Output: what the workflow should produce."
    ],
    recommendedResources: [
      {
        label: "Claude Code slash commands and custom commands",
        url: "https://docs.anthropic.com/en/docs/claude-code/slash-commands"
      }
    ],
    learningObjectives: [
      "Identify repeated work that deserves a reusable asset.",
      "Choose between prompt, checklist, skill, and playbook.",
      "Define inputs, outputs, and quality standards for reuse."
    ],
    workedExample:
      "Example Claude Code skill — create a file at `~/.claude/commands/candidate-brief.md` with this content: '# Candidate Research Brief\\n\\nGiven: $ARGUMENTS (paste a LinkedIn URL or candidate name and role)\\n\\nResearch this candidate and return:\\n- Evidence-backed strengths (cite sources)\\n- Potential risks or gaps\\n- 3 interview questions based on their background\\n- Anything you cannot confirm labeled as [UNKNOWN]\\n\\nDo not invent information. If you are unsure, say so.' Save the file. Now in Claude Code, type `/candidate-brief Sarah Chen, Senior AE at Salesforce, applying for VP Sales` and it runs the full brief. That is a working skill — not a concept, a real invokable command.",
    guidedPractice: [
      "List one workflow you repeat at least weekly in your recruiting work. A skill file looks like this:\n\n# [Skill Name]\n\nGiven: $ARGUMENTS ([description of what to paste or type])\n\nReturn:\n- [what it should output, item by item]\n\nDo not invent information. If unclear, ask one clarifying question.\n\nUse this as your starting template.",
      "Classify it: is it a prompt (one-time ask), a checklist (steps to follow), a skill (invokable command), or a playbook (multi-step guide)?",
      "Write it as a Markdown file and save it to your recruiting-workspace repo under `/playbooks/`.",
      "If you want it as a Claude Code slash command: save it to `~/.claude/commands/[name].md` and invoke it with `/name` inside Claude Code."
    ],
    commonMistakes: [
      "Making the asset too broad to reuse.",
      "Skipping input expectations.",
      "Creating a prompt when the workflow really needs a checklist or playbook."
    ],
    facilitatorNotes: [
      "Favor narrow reusable assets over ambitious ones.",
      "Ask whether another teammate could use it without explanation.",
      "Tie reuse to consistency, not just speed."
    ]
  },
  8: {
    whatThisIs:
      "MCP stands for Model Context Protocol — a standard way to connect AI tools like Claude Code to external systems like GitHub, Slack, Notion, or your ATS. An MCP server is a small program that runs in the background and gives Claude Code live access to a real system. This week you install one for the first time. This week has the single most technical step in the program — one terminal command. Take it slowly. If it works, you will have a live AI connection to your GitHub repo in under 5 minutes.",
    whyThisComesNow:
      "You now know terminal basics, tool selection, prompting, review, Codex, Claude Code, and reusable skills. MCP is the next layer: instead of manually pasting information into AI, the AI reads it directly. This is only safe to introduce now that you have review habits in place.",
    howThisConnectsToAI:
      "Every AI answer is only as good as its context. MCP removes the bottleneck of copy-pasting by giving the AI a live connection to the real information it needs. GitHub MCP means Claude Code can read your repos. A Slack MCP would mean it could read channel history. A Notion MCP would mean it could read your notes.",
    whatYouWillDoNext: [
      "Get a GitHub Personal Access Token: go to github.com → click your profile photo (top right) → Settings → Developer settings (bottom of left sidebar) → Personal access tokens → Tokens (classic) → Generate new token (classic) → name it 'claude-code' → check only the 'repo' checkbox → click Generate token → copy the token immediately (you only see it once).",
      "Install the GitHub MCP server with one terminal command using `claude mcp add`.",
      "Run `claude mcp list` to confirm the connection.",
      "Ask Claude Code a question that requires reading your actual GitHub repo and verify the answer is grounded."
    ],
    plainEnglishVocabulary: [
      "MCP: Model Context Protocol, a standard way to connect AI tools to external systems.",
      "Connected workflow: an AI workflow that can access a tool or data source.",
      "Read-only: the AI can view information but not change it.",
      "Write-capable: the AI can create or change something.",
      "Review checkpoint: the point where a human approves or rejects the output."
    ],
    recommendedResources: [
      {
        label: "Claude Code MCP docs",
        url: "https://docs.anthropic.com/en/docs/claude-code/mcp"
      }
    ],
    learningObjectives: [
      "Install the GitHub MCP server using a single terminal command.",
      "Verify the connection with `claude mcp list` and confirm Claude Code can read your repo.",
      "Describe the difference between read-only and write-capable MCP access."
    ],
    workedExample:
      "Full MCP installation: Go to github.com/settings/tokens → Generate new token (classic) → check the 'repo' scope → copy the token. Then run: `claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=[your-token] -- npx -y @modelcontextprotocol/server-github`. Verify: run `claude mcp list` and confirm 'github' appears. Now open Claude Code inside your recruiting-workspace repo and ask: 'List all files in this repo and summarize what each one is for.' The answer is grounded in your actual files — not generic advice. That is the difference between chat AI and connected AI.",
    guidedPractice: [
      "Go to github.com/settings/tokens → Generate new token (classic) → check 'repo' scope → copy the token. A Personal Access Token is like a secure password you create just for Claude Code — the 'repo' scope means it will only be able to read and search your GitHub repositories, not your account settings or billing.",
      "Run the MCP install command. It has four parts: `claude mcp add github` names the connection; `-e GITHUB_PERSONAL_ACCESS_TOKEN=[your-token]` passes your token securely; `--` separates Claude Code options from the server command; `npx -y @modelcontextprotocol/server-github` downloads and runs the MCP server. Copy the whole command, replace [your-token] with your actual token (no brackets), and run it. If you see 'command not found' for npx, Node.js is not installed — go to nodejs.org, install it, then retry.",
      "Run `claude mcp list` and confirm `github` appears in the list.",
      "Launch Claude Code inside your recruiting-workspace repo and ask it to list and describe all your files.",
      "Compare this grounded answer to what a chat tool would say with no repo access."
    ],
    commonMistakes: [
      "Assuming connected means automatically safe.",
      "Forgetting that write access changes risk.",
      "Connecting tools before defining review boundaries."
    ],
    facilitatorNotes: [
      "Confirm every learner runs the install command — this is hands-on, not just conceptual.",
      "Use read-only versus write-capable as the main safety distinction.",
      "Ask learners to describe what was different about the answer when Claude Code had real repo access."
    ]
  },
  9: {
    whatThisIs:
      "This week is about running multiple AI tasks at once. Instead of loading one prompt with everything, you split the work into two smaller jobs and ask Claude Code to handle both at the same time. You review both results and decide what to do next. Developers call this 'parallel subagents' — think of it as giving Claude Code two clear jobs with separate outputs.",
    whyThisComesNow:
      "Once you understand tools and connected workflows, you can start coordinating work across steps. Delegation is the bridge from using one AI tool to designing an AI-enabled workflow.",
    howThisConnectsToAI:
      "Modern AI work often involves parallel research, drafting, checking, and synthesis. The human operator coordinates context, assigns tasks, and owns final judgment.",
    whatYouWillDoNext: [
      "Open Claude Code in your recruiting-workspace repo.",
      "Run a parallel subagent prompt: 'Use the Task tool to run these two tasks in parallel: Task 1 — summarize all files in this repo. Task 2 — review my CLAUDE.md and suggest three improvements. Report both results together.'",
      "Review the combined output and identify what each subagent found.",
      "Submit a screenshot of the output and a short reflection on what still required your judgment."
    ],
    plainEnglishVocabulary: [
      "Delegation: assigning a defined piece of work to a person or agent.",
      "Parallel work: tasks that can happen at the same time.",
      "Sequential work: tasks that must happen in order.",
      "Context boundary: the information a task needs and the information it does not need.",
      "Synthesis: combining multiple outputs into one final answer."
    ],
    recommendedResources: [
      {
        label: "Claude Code subagents",
        url: "https://docs.anthropic.com/en/docs/claude-code/sub-agents"
      }
    ],
    learningObjectives: [
      "Run two tasks at the same time in Claude Code and review the combined output.",
      "Identify which tasks can run simultaneously and which must happen in order.",
      "Know what still requires your own judgment after Claude Code reports back."
    ],
    workedExample:
      "Actual subagent execution: Open Claude Code in your recruiting-workspace repo and type: 'Use the Task tool to run these two tasks in parallel: Task 1 — read every file in this repo and list what each one contains. Task 2 — review the CLAUDE.md file and suggest three improvements. Report both results together.' Claude Code spawns two subagents simultaneously. Within seconds it reports back: a file inventory from Task 1 and improvement suggestions from Task 2. You defined the tasks, reviewed the output, and decided what to act on. That is delegation in practice — not a design document. Some tasks must go in order: research the company first, then draft outreach based on that research — these cannot run in parallel because step 2 depends on step 1.",
    guidedPractice: [
      "Warm-up: before running two tasks at once, send one single-task prompt first. Ask Claude Code inside your repo: 'What files are in this repo and what does each one do?' Read the response. This is what one focused task looks like — now you will run two at the same time.",
      "Open Claude Code in your recruiting-workspace repo.",
      "Write a parallel task prompt using 'Task 1' and 'Task 2' format and send it.",
      "Review the combined output — identify which task's answer you trust most and why.",
      "Write one sentence describing what a human must still verify before acting on the output."
    ],
    commonMistakes: [
      "Delegating an entire workflow as one vague task.",
      "Letting agents share too much irrelevant context.",
      "Forgetting to define who reviews the final output."
    ],
    facilitatorNotes: [
      "Teach decomposition before tool mechanics.",
      "Ask learners to name inputs and outputs for every delegated step.",
      "Reward clean coordination over complexity."
    ]
  },
  10: {
    whatThisIs:
      "This week introduces evals and guardrails. An eval is a repeatable way to judge output quality. A guardrail is a rule that prevents predictable failure.",
    whyThisComesNow:
      "Before you design more serious automations, you need a way to measure whether outputs are good. Without evals, you rely on vibes, speed, or confidence.",
    howThisConnectsToAI:
      "AI workflows improve when the team can test them against clear standards. Evals and guardrails make the difference between experimenting and operating reliably.",
    whatYouWillDoNext: [
      "Choose one recurring AI output.",
      "Define four or five criteria for a good result.",
      "Add two guardrails and one reject condition.",
      "Submit a mini eval pack."
    ],
    plainEnglishVocabulary: [
      "Eval: a repeatable test or rubric for judging output.",
      "Guardrail: a rule that prevents a known failure.",
      "Criterion: one quality standard in a rubric.",
      "Reject condition: a failure that means the output should not be used.",
      "Reliability: whether the workflow produces acceptable output consistently."
    ],
    recommendedResources: [
      {
        label: "OpenAI agent evals guide",
        url: "https://platform.openai.com/docs/guides/agent-evals"
      }
    ],
    learningObjectives: [
      "Create simple evaluation criteria for an AI workflow.",
      "Define guardrails that prevent predictable failure modes.",
      "Use a rubric to judge whether output is ready, needs revision, or should be rejected."
    ],
    workedExample:
      "Example eval: Outreach draft criteria include role relevance, evidence-backed personalization, clear ask, concise length, and no invented facts. Guardrails include no unsupported claims and no personal data beyond approved sources. Here is exactly how to write one criterion — Role relevance: Does the draft specifically reference the candidate's current role or company? Pass = yes, with quote. Fail = generic opener with no personalization.",
    guidedPractice: [
      "Choose one recurring AI output your team relies on — outreach draft, candidate summary, sourcing brief, or intake. Write down in plain English what 'terrible' looks like and what 'excellent' looks like. This is your raw material for the rubric.",
      "Turn your 'excellent' description into 4 criteria. Write each one as a binary question with explicit pass and fail definitions. Use this exact format: '[Criterion name]: [Question]. Pass = [specific evidence]. Fail = [specific evidence].' The criterion passes only when a reviewer can point to something specific.",
      "Test your criteria against two real examples: apply them to one output you would send and one you would not send. Do your criteria catch the difference clearly? If two reviewers would still disagree on a criterion, it is too vague — rewrite it until the answer is obvious from the evidence.",
      "Write two guardrails: rules that prevent predictable failures before the output is even generated. A guardrail lives in your prompt or your process, not the rubric. Example: 'Never include information about a candidate that is not from the approved source documents.'",
      "Define one reject condition: a specific failure that means the output cannot be used at all, regardless of how it scores on everything else. Name it precisely — 'if the message contains any fact about the candidate that is not verifiable from approved sources, reject regardless of score.'"
    ],
    commonMistakes: [
      "Using vague criteria like `good` or `professional`.",
      "Measuring speed while ignoring correctness.",
      "Writing guardrails that are too broad to apply."
    ],
    facilitatorNotes: [
      "Keep evals lightweight and reusable.",
      "Ask learners to test their rubric against one bad example.",
      "Make reject conditions explicit."
    ]
  },
  11: {
    whatThisIs:
      "This week is about designing a small recruiting micro-agent or automation. A micro-agent is a narrow helper that improves one repeated workflow without pretending to replace human judgment.",
    whyThisComesNow:
      "You now have enough foundation: terminal comfort, tool selection, prompting, review, reusable assets, connected workflows, delegation, and evals. That is the minimum base for building something useful safely.",
    howThisConnectsToAI:
      "AI becomes operational when it is embedded into a real workflow with clear inputs, outputs, review, and value. The best first build is small enough to trust and improve.",
    whatYouWillDoNext: [
      "Identify one small recurring workflow you want to automate (sourcing intake, candidate brief, outreach review, etc.).",
      "Write a skill file as a Markdown file with: a one-sentence description, what input it needs, and what it should return.",
      "Save it to `~/.claude/commands/[your-skill-name].md` and test it with `/[your-skill-name]` inside Claude Code.",
      "Copy it into your recruiting-workspace repo under `/playbooks/` and commit it.",
      "Submit the skill file, a screenshot of it running, and one sentence about what recruiting problem it solves."
    ],
    plainEnglishVocabulary: [
      "Micro-agent: a small AI helper for a narrow workflow.",
      "Automation boundary: what the workflow does and does not do.",
      "Value measure: how you know the workflow helped.",
      "Review boundary: where a human must inspect or approve.",
      "Version two: the next improvement after the first version works."
    ],
    recommendedResources: [
      {
        label: "OpenAI Agents guide",
        url: "https://platform.openai.com/docs/guides/agents"
      }
    ],
    learningObjectives: [
      "Design a small recruiting micro-agent or automation.",
      "Define inputs, outputs, review steps, value, and risk.",
      "Keep scope small enough for real adoption."
    ],
    workedExample:
      "Working skill file — save this to `~/.claude/commands/intake.md`:\n\n# Intake Brief\n\nGiven: $ARGUMENTS (paste the job title, hiring manager, and 2-3 sentences about the role)\n\nReturn:\n- Target job titles (3-5 variations)\n- Company archetypes to source from\n- Must-have and nice-to-have criteria\n- Exclusion criteria\n- 3 initial Boolean search strings\n\nDo not invent criteria. If the brief is unclear, ask one clarifying question before outputting.\n\nRun it: inside Claude Code type `/intake VP of Sales, SaaS startup, Series B, must have closed $500k+ enterprise deals`. Claude Code reads the skill file and executes it. Then commit it: `cp ~/.claude/commands/intake.md ~/recruiting-workspace/playbooks/intake.md && git add playbooks/intake.md && git commit -m 'add intake skill'`. That is a working, committed, reusable skill — not a design.",
    guidedPractice: [
      "Write your skill file: start with a one-sentence description, then list what input it takes and what it returns. $ARGUMENTS is replaced with whatever you type after the slash command — `/intake VP Sales at Acme` means $ARGUMENTS = 'VP Sales at Acme'.",
      "Save it to `~/.claude/commands/[your-skill-name].md`.",
      "Run it inside Claude Code with `/[your-skill-name]` and a real recruiting example.",
      "Copy it into your recruiting-workspace repo and commit it with `git add` and `git commit`."
    ],
    commonMistakes: [
      "Trying to build an end-to-end recruiter replacement.",
      "Skipping the human review step.",
      "Claiming value without a measurable time or quality improvement."
    ],
    facilitatorNotes: [
      "Push learners toward micro, not mega.",
      "Require honest risk language.",
      "Prioritize adoption over impressiveness."
    ]
  },
  12: {
    whatThisIs:
      "This week is the capstone. Learners present one useful workflow, build, playbook, prompt set, or micro-agent and explain how it should become part of the team’s operating rhythm. An operating habit is something you actually do every time — not a best practice on a slide. Three examples: running your /intake slash command every time a new req opens instead of starting from scratch, checking AI output with the 5-question checklist before forwarding it to a hiring manager, and updating CLAUDE.md with new rules whenever the team agrees on a new standard. The goal of the capstone is to commit to one habit like these that survives after the program ends.",
    whyThisComesNow:
      "The final week turns learning into adoption. The point is not to show off. The point is to prove that you can use AI responsibly to improve real work.",
    howThisConnectsToAI:
      "AI capability only matters if it changes how the team works. The capstone connects tools, judgment, review, and workflow design into one practical artifact.",
    whatYouWillDoNext: [
      "Choose one real workflow or build from the program.",
      "Prepare a short explanation of the problem, solution, value, and limits.",
      "Define what the team can reuse.",
      "Commit to one operating habit going forward."
    ],
    plainEnglishVocabulary: [
      "Capstone: the final practical project.",
      "Operating rhythm: the repeatable way the team works after training.",
      "Adoption: whether people actually use the workflow.",
      "Limitation: what the workflow does not solve yet.",
      "Reusable artifact: something another teammate can use without starting over."
    ],
    recommendedResources: [
      {
        label: "OpenAI Codex cloud docs",
        url: "https://platform.openai.com/docs/codex"
      },
      {
        label: "Claude Code overview",
        url: "https://docs.anthropic.com/en/docs/claude-code/overview"
      }
    ],
    learningObjectives: [
      "Present one useful AI-enabled workflow or build.",
      "Explain value, limitations, review boundaries, and next version.",
      "Commit to one durable operating habit after the program."
    ],
    workedExample:
      "Strong capstone example — skill file: `/intake [job title, hiring manager name, 2–3 context sentences]` returns target job titles, company archetypes to source from, must-have criteria, exclusion criteria, and 3 Boolean search strings. Written explanation: Problem — building a sourcing strategy from scratch takes 30–45 minutes per req, and the quality varies depending on who does it. Value — /intake cuts initial sourcing setup to under 5 minutes per req and produces more consistent coverage of title variations. Limits — it cannot verify that criteria are legally defensible, it does not know your ATS or existing pipeline, and it will hallucinate if you give it a vague brief. Next version — add a step that reads the CLAUDE.md for approved sources before generating Boolean strings. Operating habit: 'Every time a new req opens and I get the intake call notes, I run /intake before I write a single search string.' That is a real capstone — concrete problem, specific value, honest limits, clear next version, and one habit that changes how the work gets done.",
    guidedPractice: [
      "Write your written explanation covering exactly four things: (a) Problem — what recruiting task does this skill help with, and how often does it come up? (2–3 sentences) (b) Value — what specifically improved — time saved, quality improved, or friction removed? Be specific enough to be checkable. (c) Limits — what can this skill not do, and where would you still want a human? Name at least two. (d) Next version — if you had one more week, what one change would make it significantly better?",
      "Write one operating habit using this exact format: 'Every time [specific trigger], I will [specific action].' Example: 'Every time a new req opens and I receive the intake call notes, I will run /intake before I write a single search string.'",
      "Practice explaining your capstone out loud in under 2 minutes: what it does, why it matters, where it fails, and what comes next. Time yourself. If it takes longer than 2 minutes, cut until it fits.",
      "Identify one other workflow, habit, or standard from any week of the program — not just week 11 — that the team should keep using after the program ends. Write one sentence explaining why it deserves to be permanent."
    ],
    commonMistakes: [
      "Presenting a flashy demo without a real workflow.",
      "Ignoring adoption and maintenance.",
      "Hiding limitations instead of building trust."
    ],
    facilitatorNotes: [
      "Grade clarity and usefulness over sophistication.",
      "Ask each learner what the team can reuse.",
      "End with operating habits, not applause."
    ]
  }
};

export const curriculumContentByWeek = Object.fromEntries(
  Object.entries(baseCurriculumContentByWeek).map(([week, content]) => [
    Number(week),
    {
      ...content,
      ...curriculumEnhancementsByWeek[Number(week)]
    }
  ])
) as Record<number, WeekCurriculumContent>;

export function getCurriculumContent(week: number) {
  return curriculumContentByWeek[week] ?? null;
}
