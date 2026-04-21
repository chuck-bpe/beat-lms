type BaseWeekCurriculumContent = {
  summary: string;
  teachingOverview: string[];
  lessonTakeaways: string[];
  demoSteps: string[];
  assignmentDeliverable: string;
  assignmentSteps: string[];
  reflectionPrompts: string[];
  quizQuestions: string[];
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
      "Most people avoid the terminal because it feels opaque, fragile, and easy to mess up. This week reframes it as a direct, readable interface for doing work. Learners do not need to become engineers; they need enough comfort to know where they are, what they are running, and how to stop when something feels uncertain.",
      "The core mental model is locate, inspect, run, and stop. If a learner can open the project, search for a term, inspect a file, start the app, stop the app, and explain what happened in plain English, they have crossed the threshold that makes Codex and Claude Code much less intimidating."
    ],
    lessonTakeaways: [
      "The terminal is a direct interface to your computer, not an engineer-only zone.",
      "Most early terminal work falls into four categories: locate, inspect, run, and stop.",
      "You do not need to memorize commands; you need to recognize patterns and stay calm around output.",
      "Terminal fluency matters because coding agents rely on files, commands, and process output."
    ],
    demoSteps: [
      "Open the BEAT project and use `pwd` and `ls` to orient yourself.",
      "Move between directories with `cd` and inspect one file with `cat`.",
      "Search the repo with `rg` for a term like `auth` or `Slack`.",
      "Start the app with `npm run dev` and stop it with `Control + C`.",
      "Use `git status`, `clear`, and `open .` to connect terminal work back to normal project flow."
    ],
    assignmentDeliverable:
      "A submission with the command list you ran, one terminal screenshot, and a short reflection on what feels less intimidating now.",
    assignmentSteps: [
      "Open Terminal and navigate into the BEAT repo.",
      "Run at least six useful commands from the demo.",
      "Start the app successfully, then stop it cleanly.",
      "Write 4-6 sentences explaining what the commands did and what output felt noisy but harmless."
    ],
    reflectionPrompts: [
      "Which command felt most intuitive?",
      "Which command felt least intuitive?",
      "What output looked noisy but was actually okay?",
      "What now feels less intimidating than before?"
    ],
    quizQuestions: [
      "Which command tells you where you are right now?",
      "Which command shows the contents of the current folder?",
      "Which command is best for searching a project for a phrase?",
      "How do you stop a running dev server?",
      "What does `git status` help you understand?"
    ],
    gradingStandard: [
      "Can navigate into the project successfully.",
      "Can inspect at least one file and search with `rg`.",
      "Can start and stop the app without help.",
      "Can explain most commands in plain English."
    ]
  },
  2: {
    summary:
      "Week 2 teaches tool selection. Learners should understand the difference between general chat AI and coding agents, then use one coding agent to investigate a real repo question.",
    teachingOverview: [
      "This week separates normal chat AI from coding-agent work. ChatGPT and Claude are excellent for drafting, comparing, summarizing, and thinking. Codex and Claude Code become more valuable when the work depends on files, commands, repo context, or changes that need review.",
      "The teaching goal is not to pick a favorite tool. It is to develop judgment. Learners should be able to say why a task belongs in chat, Codex, or Claude Code, then test whether the answer was grounded in the actual project rather than just sounding confident."
    ],
    lessonTakeaways: [
      "Chat tools are best for brainstorming, drafting, summarizing, and comparison.",
      "Coding agents are best for file-aware, repo-grounded, command-aware work.",
      "Codex and Claude Code should be judged by task fit, not by model fandom.",
      "A strong operator evaluates whether the answer was grounded, not just whether it sounded smart."
    ],
    demoSteps: [
      "Ask both Codex and Claude Code a real BEAT repo question.",
      "Compare whether each tool references real files and handles uncertainty honestly.",
      "Ask one follow-up that improves grounding or usefulness.",
      "Discuss what each tool did well and where review is still needed."
    ],
    assignmentDeliverable:
      "A repo-investigation submission with the original prompt, a follow-up prompt, the answer, and a short quality judgment.",
    assignmentSteps: [
      "Choose one real project question about the app.",
      "Use either Codex or Claude Code to investigate it.",
      "Ask at least one follow-up prompt.",
      "Submit the prompts, the answer, and a short note on whether the result was complete, incomplete, or misleading."
    ],
    reflectionPrompts: [
      "Why did you choose that tool?",
      "Did the first answer actually solve the question?",
      "What improved after the follow-up?",
      "What was still missing or uncertain?"
    ],
    quizQuestions: [
      "When is a general chat tool the better choice?",
      "When is a coding agent the better choice?",
      "Why does repo context matter?",
      "What is one sign that an answer is not well grounded?",
      "What should a good follow-up prompt do?"
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
      "Learners practice prompt surgery: taking vague asks and making them operational. The point is not to write fancy prompts. The point is to create prompts that another teammate could reuse and that a coding agent or chat tool can act on without guessing the missing standards."
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
      "What is the difference between task and context?",
      "Why are constraints important?",
      "What does a definition of done do?",
      "Why does output format matter?",
      "Why is `better` usually a weak instruction by itself?"
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
      "Week 4 teaches review discipline. The team learns to inspect AI outputs for grounding, usefulness, constraints, and risk instead of rewarding polish alone.",
    teachingOverview: [
      "This week builds the habit that separates strong operators from passive AI users: review. Polished output can still be wrong, incomplete, ungrounded, or unsafe. Learners need a simple way to inspect work without becoming slow or paranoid.",
      "The core practice is a lightweight review loop: check grounding, check completeness, check constraints, check usability, and check risk. Then write a targeted revision prompt. The learner should leave knowing that review and revision are part of the workflow, not a sign that the tool failed."
    ],
    lessonTakeaways: [
      "Polished bad output is more dangerous than obviously bad output.",
      "A strong reviewer checks grounding, completeness, usability, and risk.",
      "The five-question checklist creates consistent review habits.",
      "Revision is a core skill: reviewers should know how to ask for a better next pass."
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
      "Why is polished output sometimes more dangerous than obviously bad output?",
      "What is one sign that an answer may not be grounded?",
      "What does it mean for output to be usable?",
      "Why should a reviewer check constraints explicitly?",
      "What makes a strong revision prompt?"
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
      "Week 5 is the first true Codex operator week. Learners scope a real task, use Codex on it, and review what came back like an owner rather than a spectator.",
    teachingOverview: [
      "This week moves from concept to real Codex usage. Learners scope one small task, let Codex investigate or change something, and then inspect the result. The main lesson is that Codex is not a magic button; it is a workflow for asking, reviewing, iterating, and deciding.",
      "The teaching standard is ownership. A learner should know what they asked Codex to do, what files or behavior were involved, what changed, what remains uncertain, and what they would verify before trusting the result."
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
      "What makes a Codex task well scoped?",
      "Why is review part of the Codex workflow?",
      "What is a sign that a task is too broad?",
      "What should you inspect after Codex completes a task?",
      "Why is `what assumptions did you make?` a useful follow-up?"
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
      "Week 6 makes Claude Code concrete as a terminal-native operating environment. Learners use it on a real task and compare the fit honestly against Codex.",
    teachingOverview: [
      "This week introduces Claude Code as a terminal-native way to work inside a project. The goal is for learners to experience how file context, command output, and project structure change the quality of AI help.",
      "Learners should compare tools by fit, not by hype. Claude Code may feel strongest when terminal context and project navigation matter. Codex may feel stronger for other agentic workflows. The durable skill is knowing how to choose, supervise, and review the tool for the task."
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
      "Why does terminal-native context matter?",
      "What kinds of tasks fit Claude Code well?",
      "What is one sign that a task should use a coding agent rather than a chat tool?",
      "Why is actual project context more valuable than generic explanation?",
      "Why should the team compare tools by task fit rather than brand preference?"
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
      "Week 7 is about compounding. The team learns how to convert repeated work into reusable prompts, checklists, skills, or operating playbooks instead of starting fresh every time.",
    teachingOverview: [
      "This week shifts the team from one-off AI wins to reusable operating assets. If someone writes the same prompt three times, explains the same process repeatedly, or uses the same review checklist often, that pattern should probably become a shared asset.",
      "Learners practice deciding whether something should be a prompt, checklist, skill, or playbook. The best assets are narrow, named, clear about inputs and outputs, and easy for another teammate to use without extra explanation."
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
      "When should something remain a prompt instead of becoming a skill?",
      "What is a sign that a process needs a playbook?",
      "Why are narrow reusable assets better than giant ones?",
      "What is the value of naming a reusable workflow?",
      "What makes an asset useful to someone besides the author?"
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
      "Week 8 introduces MCP and connected workflows in plain English. The goal is not protocol mastery; it is understanding value, risk, and review boundaries when AI touches real systems.",
    teachingOverview: [
      "This week explains connected workflows without turning the program into a protocol class. Learners need to understand why AI becomes more useful when it can access real tools and data, and why that also raises the stakes.",
      "The practical distinction is copy-paste versus connected work. Connected workflows can reduce friction and improve grounding, but they require clear boundaries, read/write awareness, and human review points. The goal is confident caution, not fear."
    ],
    lessonTakeaways: [
      "Connected workflows reduce copy-paste and improve grounding.",
      "MCP matters because it connects AI systems to tools and services in structured ways.",
      "When AI can read or write external systems, the risk profile changes.",
      "Review checkpoints become more important, not less."
    ],
    demoSteps: [
      "Describe a manual copy-paste workflow and its limitations.",
      "Describe the connected version of the same workflow.",
      "Show what gets better when the tool can access real context.",
      "Identify where the main risks and review boundaries appear."
    ],
    assignmentDeliverable:
      "A mapped workflow showing the current manual version, where connection would help, what systems or data would be involved, and what review step must remain.",
    assignmentSteps: [
      "Choose one repeated workflow.",
      "Describe its current manual version.",
      "Describe where connected tools would improve it.",
      "Identify the main risks and the required human review checkpoint."
    ],
    reflectionPrompts: [
      "What part of the workflow feels most worth connecting?",
      "What risk worries you most?",
      "What should remain human-controlled?",
      "What would make you trust a connected workflow more?"
    ],
    quizQuestions: [
      "What problem does MCP help solve?",
      "Why are connected workflows more powerful than copy-paste workflows?",
      "Why are they also riskier?",
      "Why should learners care whether a system is read-only or write-capable?",
      "What does grounded mean in a connected workflow?"
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
      "Week 9 teaches delegation and parallel work. Learners learn to break bigger workflows into sensible agent tasks with clear inputs, outputs, and review boundaries.",
    teachingOverview: [
      "This week teaches learners how to stop overloading a single prompt or agent with an entire messy workflow. Strong delegation starts by breaking work into pieces that are small enough to execute, review, and combine.",
      "Learners practice identifying which steps can run in parallel and which must remain sequential. The operator's job becomes context control: define the task, specify inputs and outputs, preserve review boundaries, and synthesize the final result."
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
      "A multi-step recruiting automation design with at least three steps, each defined by task, input, output, sequencing, and review owner.",
    assignmentSteps: [
      "Choose a bigger workflow worth decomposing.",
      "Define at least three steps with clear roles.",
      "Specify inputs and outputs for each step.",
      "Label each as parallel or sequential and define who reviews it."
    ],
    reflectionPrompts: [
      "Where did the original workflow feel overloaded?",
      "Which step was easiest to isolate?",
      "Which step still needed the most human judgment?",
      "What would make this delegation cleaner next time?"
    ],
    quizQuestions: [
      "Why does bad scoping break delegated work?",
      "What makes a delegated task reviewable?",
      "What is the difference between parallel and sequential work?",
      "Why is context control important?",
      "What should always be true of a delegated output?"
    ],
    gradingStandard: [
      "Decomposes a workflow into sensible steps.",
      "Defines inputs and outputs clearly.",
      "Identifies review boundaries.",
      "Distinguishes parallel from sequential work."
    ]
  },
  10: {
    summary:
      "Week 10 introduces evals and guardrails as practical quality systems. The team learns to measure workflows with something stronger than intuition.",
    teachingOverview: [
      "This week teaches that reliable AI work needs a quality system. If a team cannot evaluate a workflow, it cannot improve it reliably. Evals do not need to be complicated; they need to be repeatable enough to reveal whether the output is good.",
      "Learners build a mini rubric and guardrails for one workflow. The aim is to make judgment visible: what counts as correct, useful, constrained, clear, and reviewable. That makes future automation safer and easier to improve."
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
      "Why is speed alone not a sufficient measure?",
      "What is the purpose of an eval?",
      "What is the purpose of a guardrail?",
      "What makes a criterion useful instead of vague?",
      "What happens when teams rely only on intuition?"
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
      "Week 11 is the first true build week for recruiting micro-agents. Learners design something small, bounded, reviewable, and visibly useful.",
    teachingOverview: [
      "This week turns the previous skills into a small practical build. The best first micro-agent is not the most impressive one; it is the one that solves a real recurring problem with clear inputs, outputs, review, and value.",
      "Learners should keep scope tight. A useful sourcing helper, research summarizer, outreach prep workflow, or note synthesis assistant is better than a sprawling agent nobody trusts. The standard is usefulness, reviewability, and adoption."
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
      "A recruiting micro-agent design with the problem, inputs, outputs, review step, value created, and remaining risks clearly described.",
    assignmentSteps: [
      "Choose one small recurring recruiting problem.",
      "Define what the automation or micro-agent will do.",
      "Specify the inputs, outputs, and review point.",
      "Explain the value and the biggest remaining risk."
    ],
    reflectionPrompts: [
      "Why did you keep the scope this size?",
      "What is the clearest source of value?",
      "What still needs human review?",
      "What would you improve in version two?"
    ],
    quizQuestions: [
      "Why are small agents often better first builds?",
      "What makes a micro-agent useful instead of just clever?",
      "Why must value be measurable?",
      "Why should review stay in the loop?",
      "What is one sign a micro-agent is over-scoped?"
    ],
    gradingStandard: [
      "Defines a small useful scope.",
      "Specifies inputs and outputs clearly.",
      "Defines a review step.",
      "Explains value and risk honestly."
    ]
  },
  12: {
    summary:
      "Week 12 turns the program into an operating rhythm. Learners present one real build and identify what habit or system they will actually carry forward.",
    teachingOverview: [
      "This week closes the program by turning learning into operating behavior. Learners present one real build or workflow, explain why it matters, show how it should be reviewed, and identify what should continue after the bootcamp.",
      "The final standard is not spectacle. A strong capstone is useful, bounded, explainable, reusable, and honest about limitations. The best outcome is a team that keeps shipping small, reviewed, AI-enabled improvements after the formal curriculum ends."
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
      "What makes a capstone real rather than decorative?",
      "Why is adoptability important?",
      "Why should value be visible?",
      "Why is reviewability still important at the end?",
      "Why is one durable habit more valuable than ten fragile experiments?"
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
      "The terminal is a text-based way to control your computer. Instead of clicking through folders and apps, you type short commands. In this program, learners use it only for safe basics: finding where they are, seeing what files exist, searching a project, starting a local app, and stopping it.",
    whyThisComesNow:
      "We start here because Codex, Claude Code, and most serious AI coding workflows live around files, commands, and project output. If the terminal feels mysterious, every later week feels harder than it needs to. Week 1 gives learners basic control before asking them to supervise AI.",
    howThisConnectsToAI:
      "AI coding agents do not just chat. They inspect files, run commands, read errors, and propose changes. Learners need enough terminal fluency to understand what the agent is doing and avoid either freezing or trusting it blindly.",
    whatYouWillDoNext: [
      "Open Terminal and get oriented in a project folder.",
      "Run safe commands like `pwd`, `ls`, `cd`, `cat`, `rg`, `npm run dev`, and `git status`.",
      "Start and stop the BEAT app locally.",
      "Submit a short reflection explaining what each command did in plain English."
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
      "Run at least six safe terminal commands and explain each one in plain English.",
      "Start and stop the BEAT app locally without panic."
    ],
    workedExample:
      "Example session: `pwd` shows `/Users/charlesbrotman/Codex/recruiting-ai-lms`; `ls` confirms files like `app`, `lib`, and `package.json`; `rg Slack` finds Slack-related code; `npm run dev` starts the app; `Control + C` stops it. A strong learner explanation says what each command did, not just that they copied it.",
    guidedPractice: [
      "Run `pwd`, `ls`, and `git status`; write one sentence explaining each output.",
      "Use `rg` to find the word `auth`; name one file it appears in.",
      "Start the app and stop it cleanly, then describe what changed in the terminal."
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
      "After learners understand the terminal at a basic level, they can understand why coding agents are different from ordinary chat. This prevents the common mistake of using one AI tool for every task.",
    howThisConnectsToAI:
      "Modern AI work is increasingly tool-specific. The skill is not just asking AI a question; it is deciding whether the task needs general reasoning, file awareness, command execution, or code changes.",
    whatYouWillDoNext: [
      "Compare a chat-style task with a coding-agent task.",
      "Use Codex or Claude Code to investigate one real project question.",
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
      "Example question: `Where does BEAT send Slack messages?` A weak answer gives a generic Slack explanation. A strong agent answer points to `lib/slack.ts`, explains `chat.postMessage`, and names the admin action that calls it.",
    guidedPractice: [
      "Write one question that belongs in ChatGPT or Claude chat.",
      "Write one question that requires Codex or Claude Code because it needs repo context.",
      "Ask a coding agent one repo question and require it to cite files or commands it used."
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
      "Once learners know which tool to use, the next skill is giving that tool a good task. Weak prompts create vague outputs. Strong prompts make the expected work, context, constraints, and output format clear.",
    howThisConnectsToAI:
      "AI tools are powerful but literal in the wrong ways. If learners leave out the audience, constraints, source material, definition of done, or output format, the model fills gaps with assumptions.",
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
      "Weak prompt: `Make this better.` Strong prompt: `Review this assignment prompt for a non-technical recruiting teammate. Keep it under 2 hours, identify unclear instructions, rewrite it in learner-friendly language, and return: issues, revised prompt, and grading checklist.`",
    guidedPractice: [
      "Take one vague prompt and label what is missing.",
      "Rewrite it with a clear output format.",
      "Add one constraint that prevents a predictable bad answer."
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
      "This week is about reviewing AI output. Review means checking whether the answer is grounded, complete, useful, safe, and aligned with the task before you use it.",
    whyThisComesNow:
      "After learners can ask better questions, they need to know how to judge the answers. AI often sounds confident even when it is wrong or incomplete. Review discipline prevents speed from turning into sloppy work.",
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
      "Example review: An AI-generated candidate summary sounds polished but invents seniority, omits evidence, and ignores the scorecard. A good reviewer marks those issues, asks for evidence-backed bullets only, and requires unknowns to be labeled explicitly.",
    guidedPractice: [
      "Review one AI output and mark three flaws.",
      "Classify each flaw as grounding, completeness, constraint, usability, or risk.",
      "Write one revision prompt that targets those flaws directly."
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
      "Learners first needed terminal confidence, tool selection, prompting, and review discipline. Now they are ready to ask Codex to do real project work without treating it like magic.",
    howThisConnectsToAI:
      "Codex represents the shift from AI as a writing assistant to AI as a supervised worker. The learner's job is to define the task, inspect the work, and decide what is safe to accept.",
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
      "Example Codex task: `Find where assignment submissions are created and explain the data flow without editing files.` A strong result names the learner action, server action, `submissions` table insert, and revalidation path.",
    guidedPractice: [
      "Convert a broad task into a one-sentence bounded Codex task.",
      "Ask Codex to investigate before making changes.",
      "Review its answer for files touched, assumptions, and next verification step."
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
      "Claude Code makes more sense after learners understand terminal basics and Codex-style agent supervision. This week gives them a second serious coding-agent workflow and teaches comparison by task fit.",
    howThisConnectsToAI:
      "Claude Code shows how AI becomes more useful when it is close to the working environment. Instead of pasting snippets into chat, learners can ask for help inside the project context.",
    whatYouWillDoNext: [
      "Use Claude Code on one real project question or task.",
      "Notice which files, commands, or context mattered.",
      "Compare whether Codex or Claude Code felt better suited.",
      "Submit a short task-fit judgment."
    ],
    plainEnglishVocabulary: [
      "Terminal-native: designed to work from the command line.",
      "Project context: the files, commands, and structure around the task.",
      "Memory: persistent instructions or notes a tool can use later.",
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
      "Example Claude Code task: `Inspect the learner page and explain how progress is calculated. Do not edit files.` A good answer uses actual files, explains the data path, and identifies what would need testing before changing it.",
    guidedPractice: [
      "Choose a repo question that needs file context.",
      "Ask Claude Code to investigate it inside the project.",
      "Write a compare note explaining whether Codex would have been similar, better, or worse."
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
      "This week is about turning repeated AI work into reusable team assets. A reusable asset might be a prompt, checklist, skill, playbook, or standard operating pattern.",
    whyThisComesNow:
      "After learners can use AI for individual tasks, the next step is making good work repeatable. This prevents every teammate from reinventing the same prompt or process.",
    howThisConnectsToAI:
      "AI quality improves when instructions, examples, and standards are reusable. Skills and playbooks help the team get more consistent outputs with less repeated explanation.",
    whatYouWillDoNext: [
      "Identify one repeated workflow.",
      "Decide whether it should become a prompt, checklist, skill, or playbook.",
      "Define inputs, outputs, quality standard, and review boundary.",
      "Submit one reusable operating asset."
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
      "Example reusable asset: A `candidate-research-brief` playbook that takes a LinkedIn profile, role context, and company notes, then returns evidence-backed strengths, risks, questions, and unknowns. It includes a rule to label uncertainty instead of guessing.",
    guidedPractice: [
      "List one repeated workflow from your week.",
      "Classify it as a prompt, checklist, skill, or playbook.",
      "Write its input requirements and output format."
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
      "This week explains MCP and connected workflows. MCP is a way for AI tools to connect to external tools, services, or data sources in a structured way.",
    whyThisComesNow:
      "Learners first need to understand AI tasks, review, and reusable workflows. Only then does it make sense to discuss connecting AI to real systems, because connected tools increase both usefulness and risk.",
    howThisConnectsToAI:
      "Connected workflows let AI work with real context instead of copy-pasted fragments. That can improve quality, but it also requires permission boundaries, data awareness, and human review.",
    whatYouWillDoNext: [
      "Choose one manual copy-paste workflow.",
      "Map where a connected tool would help.",
      "Identify what data or systems would be involved.",
      "Define what must remain human-reviewed."
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
      "Explain MCP and connected workflows in plain English.",
      "Identify when connected context improves AI work.",
      "Define risk boundaries and review checkpoints for tool-connected workflows."
    ],
    workedExample:
      "Example workflow: Instead of copying candidate notes into chat, a connected workflow retrieves approved notes from a source system, drafts a summary, and requires human review before anything is written back.",
    guidedPractice: [
      "Pick one copy-paste workflow.",
      "Map which system or data source would make it more grounded.",
      "Mark whether the AI should be read-only or allowed to write."
    ],
    commonMistakes: [
      "Assuming connected means automatically safe.",
      "Forgetting that write access changes risk.",
      "Connecting tools before defining review boundaries."
    ],
    facilitatorNotes: [
      "Keep MCP conceptual unless learners are ready for implementation.",
      "Use read-only versus write-capable as the main safety distinction.",
      "Make prompt injection and data boundaries concrete."
    ]
  },
  9: {
    whatThisIs:
      "This week is about delegation: breaking bigger workflows into smaller AI-assisted tasks. Instead of asking one agent to do everything, learners define smaller jobs with clear inputs and outputs.",
    whyThisComesNow:
      "Once learners understand tools and connected workflows, they can start coordinating work across steps. Delegation is the bridge from using one AI tool to designing an AI-enabled workflow.",
    howThisConnectsToAI:
      "Modern AI work often involves parallel research, drafting, checking, and synthesis. The human operator coordinates context, assigns tasks, and owns final judgment.",
    whatYouWillDoNext: [
      "Choose a messy workflow.",
      "Break it into at least three smaller tasks.",
      "Mark which tasks can run in parallel and which must happen in order.",
      "Define who reviews each output."
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
      "Break a large workflow into smaller delegated tasks.",
      "Decide which tasks can run in parallel and which must be sequential.",
      "Define review ownership for each delegated output."
    ],
    workedExample:
      "Example decomposition: For a market-mapping workflow, one agent researches target companies, one drafts outreach angles, one checks quality against criteria, and the human owner approves the final strategy.",
    guidedPractice: [
      "Choose a messy workflow and list every step.",
      "Group steps into three reviewable tasks.",
      "Label each task as parallel or sequential and assign a reviewer."
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
      "Before learners design more serious automations, they need a way to measure whether outputs are good. Without evals, teams rely on vibes, speed, or confidence.",
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
      "Example eval: Outreach draft criteria include role relevance, evidence-backed personalization, clear ask, concise length, and no invented facts. Guardrails include no unsupported claims and no personal data beyond approved sources.",
    guidedPractice: [
      "Choose one recurring AI output.",
      "Write four criteria for a good result.",
      "Add two guardrails and one reject condition."
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
      "Learners now have enough foundation: terminal comfort, tool selection, prompting, review, reusable assets, connected workflows, delegation, and evals. That is the minimum base for building something useful safely.",
    howThisConnectsToAI:
      "AI becomes operational when it is embedded into a real workflow with clear inputs, outputs, review, and value. The best first build is small enough to trust and improve.",
    whatYouWillDoNext: [
      "Choose one repeated recruiting problem.",
      "Design a small helper workflow or micro-agent.",
      "Define inputs, outputs, review boundary, and value measure.",
      "Submit the design and explain the risk."
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
      "Example micro-agent: A sourcing-intake assistant that turns a role brief into target titles, company archetypes, exclusion criteria, and first-pass search strings, then asks a human to approve before sourcing begins.",
    guidedPractice: [
      "Name one recurring recruiting problem.",
      "Define the smallest useful automation for it.",
      "Write the review step and value measure before describing implementation."
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
      "This week is the capstone. Learners present one useful workflow, build, playbook, prompt set, or micro-agent and explain how it should become part of the team’s operating rhythm.",
    whyThisComesNow:
      "The final week turns learning into adoption. The point is not to show off. The point is to prove that each learner can use AI responsibly to improve real work.",
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
      "Example capstone: A candidate-screening prep workflow that takes approved resume notes, generates evidence-backed questions, flags unknowns, and includes a reviewer checklist. The learner presents time saved, risks, and what version two should improve.",
    guidedPractice: [
      "Write a one-paragraph capstone summary.",
      "List the input, output, review boundary, and value measure.",
      "Practice explaining one limitation honestly."
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
