# BEAT V2 Full Lesson Content

## Weeks 1-2

This document contains the first fully authored lesson content for BEAT Version 2.

It is written for a small team that needs modern AI and coding-agent fluency without turning the curriculum into a part-time job.

## Teaching Intent

Weeks 1 and 2 are not about making everyone an engineer.

They are about making everyone:

- comfortable in the terminal
- unafraid of coding tools
- capable of using modern AI coding systems with judgment

If these two weeks work, the rest of the curriculum gets dramatically easier.

## Week 1 Lesson

### Title

Terminal fluency for non-engineers

### Objective

Help every learner stop seeing the terminal as a high-risk environment and start seeing it as a readable, controllable interface for work.

### Key message

The terminal is not a hacker cave.
It is just a more direct way to interact with your computer, and modern AI coding tools expect users to be at least minimally comfortable there.

### Opening framing

Most people avoid the terminal because it feels opaque, fragile, and easy to mess up.
That reaction is normal.

The goal this week is not mastery.
The goal is simple confidence:

- I can open it
- I can move around
- I can read what I am seeing
- I can run a few safe commands
- I can stop a process if I need to

That level of comfort is enough to start getting real value from Codex and Claude Code.

### Core concepts

#### What the terminal is

The terminal is a text-based interface for interacting with your computer.
Instead of clicking through folders and apps, you type instructions directly.

That sounds more technical than it is.
At the level we care about, the terminal mainly helps you do four things:

- locate things
- inspect things
- run things
- stop things

#### Why it matters now

Modern AI coding tools are not just answering questions.
They are reading files, searching projects, editing code, running commands, and checking outputs.

If you cannot recognize what a command is doing, you will either:

- avoid these tools entirely
- or trust them blindly

Neither is acceptable.

#### The right mental model

You do not need to memorize every command.
You need to recognize categories:

- where am I
- what is here
- how do I move
- how do I inspect
- how do I run something
- how do I stop something

That is enough to be operational.

### Vocabulary to teach

- directory: a folder
- file: a document or code file
- path: the location of a file or folder
- process: a running program
- command: an instruction typed into the terminal
- output: what the computer prints back

### Demo script

Open the BEAT project and narrate every step.

#### Command 1: `pwd`

Explain:

- this tells me where I am right now
- if I feel lost, this is how I reorient

#### Command 2: `ls`

Explain:

- this shows what is in the current folder
- I use this to confirm what files or folders I have access to

#### Command 3: `cd`

Explain:

- this changes directories
- it is how I move between folders without using Finder

#### Command 4: `cat`

Explain:

- this prints the contents of a file into the terminal
- it is useful when I want a quick look at a small file

#### Command 5: `rg`

Explain:

- this searches across files quickly
- this is one of the most useful commands in a codebase
- if I want to find "Slack" or "auth", this is how I do it

#### Command 6: `npm run dev`

Explain:

- this starts the local app
- some projects use different commands, but the pattern is the same: a command starts a process

#### Command 7: `Control + C`

Explain:

- this stops the running process
- learners should know this early because it lowers anxiety immediately

#### Command 8: `git status`

Explain:

- this tells me what has changed in the project
- it is one of the safest and most useful git commands

#### Command 9: `clear`

Explain:

- this cleans up a cluttered screen
- it helps people regain visual control

#### Command 10: `open .`

Explain:

- this opens the current folder in Finder
- it helps bridge terminal work with normal computer workflows

### Instructor notes

- narrate calmly
- show that not every terminal line matters
- explicitly point out harmless noise vs meaningful output
- demonstrate one small mistake and recovery so the learner sees that nothing catastrophic happens

### Assignment instructions

#### Assignment title

Run the repo without fear

#### Submission steps

Each learner should:

1. Open Terminal.
2. Navigate into the BEAT repo.
3. Run at least six commands from the demo.
4. Start the local app.
5. Stop the local app.
6. Submit:
   - the commands they ran
   - one screenshot
   - a short reflection

#### Reflection prompt

Answer in 4-6 sentences:

- Which command felt most intuitive?
- Which command felt least intuitive?
- What output looked noisy but was actually okay?
- What feels less intimidating now than before?

### Quiz questions

1. Which command tells you where you are right now?
2. Which command shows the contents of the current folder?
3. Which command is best for searching a project for a phrase?
4. How do you stop a running dev server?
5. What does `git status` help you understand?
6. What is the difference between a file and a directory?
7. What is a process?
8. Why is terminal comfort important for AI coding tools?

### Grading standard

Pass if the learner can:

- navigate successfully
- inspect files
- search with `rg`
- start and stop the app
- explain most commands in plain English

## Week 2 Lesson

### Title

Codex, Claude Code, ChatGPT, and Claude: what each one is for

### Objective

Help learners choose the right AI interface for the job instead of reaching for whatever tool feels most familiar.

### Key message

Not all AI tools are the same.

A normal chat tool is useful for:

- brainstorming
- summarizing
- rewriting
- planning

A coding agent is useful for:

- inspecting a codebase
- reading multiple files
- making changes
- running commands
- reporting what actually happened

That difference matters.

### Opening framing

One of the biggest reasons teams stay mediocre with AI is that they use every tool the same way.

If someone uses a normal chat window for a codebase-dependent task, they often get:

- generic output
- fake confidence
- missing context
- advice that sounds plausible but is not grounded in the actual project

If someone uses a coding agent correctly, they get:

- file-aware answers
- better follow-up investigation
- grounded suggestions
- a real working loop

### Core concepts

#### Chat tools

Chat tools are great for:

- ideation
- strategic thinking
- drafting
- quick comparison
- general explanation

They are weaker when the task requires:

- reading an actual repo
- understanding file structure
- checking what code really does
- running commands

#### Coding agents

Coding agents are designed for:

- reading code
- editing files
- running commands
- investigating real project behavior
- operating in a terminal or codebase context

#### Codex

Teach Codex as:

- strong for real coding tasks
- strong for agentic work and delegation
- strong when the task is: investigate, edit, review, or parallelize work

#### Claude Code

Teach Claude Code as:

- terminal-native
- strong for project-aware coding work
- strong for tool use, files, commands, MCP, subagents, and memory

#### Why tool selection matters

The wrong tool can still produce an answer.
That is what makes this tricky.

The question is not:

- did it answer something?

The question is:

- did it answer the real task with the right context?

### Demo script

#### Demo task

Ask both tools a real repo question, such as:

- How does login work in BEAT?
- Which files control learner progress?

#### What to point out

- Did the tool reference actual files?
- Did it explain uncertainty clearly?
- Did it suggest follow-up investigation?
- Did it overstate confidence?
- Did the second prompt improve the quality meaningfully?

#### Follow-up demo prompts

- Which exact files did you rely on?
- What parts are you uncertain about?
- If I wanted to change this behavior, where would you start?
- Summarize this in plain English for a non-engineer

### Assignment instructions

#### Assignment title

Investigate a real repo question with one coding agent

#### Submission steps

Each learner should:

1. Choose one real project question.
2. Use either Codex or Claude Code.
3. Ask an initial question.
4. Ask at least one follow-up.
5. Submit:
   - the original prompt
   - the follow-up prompt
   - the resulting answer
   - a short quality judgment

#### Reflection prompt

Answer in 4-6 sentences:

- Why did you choose that tool?
- Did the first answer actually solve the question?
- What improved after the follow-up?
- What was still missing or uncertain?

### Suggested repo questions

- How does auth work?
- Where are Slack messages sent from?
- Which file should I edit to change the curriculum?
- How is learner progress calculated?
- Where does assignment submission live?

### Quiz questions

1. When is a general chat tool the better choice?
2. When is a coding agent the better choice?
3. Why does repo context matter?
4. What is one sign that an answer is not well grounded?
5. What should a good follow-up prompt do?
6. Why is confident wording not the same as correctness?
7. Which tool is better for "find the files that control login"?
8. Which tool is better for "help me brainstorm names for a new lesson"?

### Grading standard

Pass if the learner can:

- choose a reasonable tool
- ask a clear question
- ask at least one follow-up
- judge the usefulness of the answer instead of just accepting it

## Week 3 Lesson

### Title

Prompts that produce action, not fluff

### Objective

Teach learners to write prompts that generate usable work instead of generic prose.

### Key message

A strong prompt is not "more words."
It is better task design.

The best prompts are clear about:

- what should happen
- what context matters
- what constraints apply
- what a good answer looks like

### Opening framing

Most weak prompting problems come from one of two things:

- the ask is too vague
- the success condition is never defined

That leads to outputs that sound polished but are hard to use.

The goal this week is not to become a prompt artist.
The goal is to become a better task writer.

That matters across everything in this curriculum:

- Codex prompts
- Claude Code prompts
- ChatGPT prompts
- Claude prompts
- recruiting workflows
- automation requests

### Core concepts

#### Prompting is task specification

The model cannot guess which parts of the problem matter most.
If the task is underspecified, the output often becomes generic, bloated, or misaligned.

#### The five-part prompt structure

For most tasks in this program, a strong prompt should include:

- task
- context
- constraints
- definition of done
- output format

#### Task

What exactly do you want done?

Bad:

- help me improve this

Better:

- review this sourcing workflow and identify the two biggest bottlenecks

#### Context

What background does the tool need?

Examples:

- who the user is
- what the workflow is for
- what files matter
- what business constraint matters

#### Constraints

What should the model avoid or stay inside?

Examples:

- keep this under 30 minutes
- do not change the visual design
- assume the user is not technical
- do not invent candidate details

#### Definition of done

What would make the output actually useful?

Examples:

- give me a 5-step workflow
- identify exactly 3 risks
- return a revised prompt and a rationale

#### Output format

How should the answer come back?

Examples:

- bullets
- numbered checklist
- table
- JSON
- short summary plus next steps

### What changes by tool

#### Chat tool prompts

Best for:

- thinking
- framing
- summaries
- comparison
- drafting

Prompts can be slightly broader, but still need a clear ask.

#### Coding agent prompts

Best for:

- repo investigation
- code changes
- file-aware reasoning
- command execution

Prompts should be more explicit about:

- files
- constraints
- intended action
- review expectations

### Demo script

#### Demo title

Prompt surgery

#### Demo setup

Take three weak prompts and improve them live.

#### Example 1

Weak:

- help me improve sourcing

Better:

- review this candidate sourcing workflow, identify the two biggest bottlenecks, and rewrite it as a 5-step process optimized for AI assistance; keep it realistic for a recruiter spending less than 30 minutes per search

Point out:

- the task is now specific
- the time constraint is explicit
- the output shape is defined

#### Example 2

Weak:

- explain this app

Better:

- explain how learner progress is calculated in the BEAT app; reference the main files involved, summarize the logic in plain English, and call out anything you are unsure about

Point out:

- the target concept is narrowed
- repo grounding is requested
- uncertainty is invited rather than hidden

#### Example 3

Weak:

- write a better outreach message

Better:

- rewrite this outreach message for a retained-search recruiter; keep it under 120 words, preserve a calm professional tone, and return 2 variants: one warmer and one more direct

Point out:

- role context matters
- tone is constrained
- output shape is explicit

### Assignment instructions

#### Assignment title

Write three prompts worth reusing

#### Submission steps

Each learner should create:

1. one prompt for a chat tool
2. one prompt for Codex or Claude Code
3. one prompt for a recruiting workflow they do every week

For each prompt, submit:

- the prompt itself
- what tool it is for
- what output is expected
- why this version is better than a vague version

#### Optional testing upgrade

If time allows, the learner should also:

- run the prompt once
- revise it one time
- include a before/after note

### Suggested prompt categories

- repo explanation
- recruiting workflow redesign
- candidate summary
- sourcing research
- outreach rewrite
- assignment review

### Reflection prompt

Answer in 4-6 sentences:

- Which of your prompts became most useful after revision?
- Which one was hardest to constrain?
- What did you realize you usually leave unsaid?
- Which tool needed the most specific instruction?

### Quiz questions

1. What is the difference between a task and context?
2. Why are constraints important?
3. What does a definition of done do?
4. Why does output format matter?
5. Which is better for a coding agent: "fix this" or a file-aware, scoped request?
6. What is a sign that a prompt is still too vague?
7. When should you include a time or scope constraint?
8. Why is "better" usually a weak instruction by itself?

### Grading standard

Pass if the learner can produce three prompts where each includes:

- a clear task
- enough context
- at least one real constraint
- a visible expected output shape

### Common failure modes

- prompts that ask for "better" without defining better
- prompts that combine too many jobs at once
- prompts that omit the actual user or use case
- prompts that invite essays when action is needed

## Week 4 Lesson

### Title

How to review AI work without becoming paranoid

### Objective

Teach learners how to inspect AI-generated work critically so they can improve output without losing speed.

### Key message

AI output should not be trusted blindly.
It also should not be treated as useless by default.

The right posture is:

- inspect
- evaluate
- revise
- decide

### Opening framing

The biggest trap in AI-assisted work is not bad output by itself.
It is polished bad output.

That is dangerous because it:

- sounds complete
- feels efficient
- lowers the urge to check it

This week teaches learners to become reviewers, not passengers.

### Core concepts

#### Good review is not cynicism

You do not need to assume every answer is wrong.
You do need to ask whether it is:

- grounded
- complete enough
- aligned to the task
- safe to use

#### The five-question review checklist

For any AI-generated output, ask:

1. Did it answer the real question?
2. Did it invent facts or assumptions?
3. Did it ignore constraints?
4. Is it actually usable?
5. What would break if we shipped this as-is?

#### Surface polish vs structural quality

Some outputs fail in obvious ways.
Others fail in subtle ways:

- wrong assumptions
- missing edge cases
- generic recommendations
- fake confidence
- no grounding in the source material

#### Revision is a core skill

Review is not just criticism.
The reviewer should be able to write the next prompt that makes the result better.

### Demo script

#### Demo title

Reviewing a bad output and making it good

#### Demo setup

Generate one output that looks reasonable but contains meaningful flaws.

Use something like:

- a candidate summary with invented assumptions
- a repo explanation with weak grounding
- an outreach rewrite that ignored tone constraints

#### Demo flow

Step 1:

Show the original output and ask: would someone accept this too quickly?

Step 2:

Run the checklist.

Step 3:

Mark at least three issues:

- one factual or grounding issue
- one constraint issue
- one usability issue

Step 4:

Write a better follow-up prompt that directly targets those weaknesses.

Step 5:

Compare the revised output and explain what improved and what still needs judgment.

### Assignment instructions

#### Assignment title

Critique and revise one AI-generated output

#### Submission steps

Each learner should:

1. Generate one output using any approved AI tool.
2. Review it with the checklist.
3. Identify at least three meaningful issues.
4. Write one revision prompt.
5. Run the revision prompt.
6. Submit:
   - original output
   - three issues found
   - revision prompt
   - revised output
   - short explanation of why the revised version is better

### Acceptable output types

- sourcing plan
- outreach draft
- candidate summary
- repo explanation
- workflow redesign
- prompt artifact

### Reflection prompt

Answer in 4-6 sentences:

- Which issue was hardest to notice?
- Did the first version look more trustworthy than it deserved?
- What changed most after revision?
- What still required human judgment?

### Quiz questions

1. Why is polished output sometimes more dangerous than obviously bad output?
2. What is one sign that an answer may not be grounded?
3. What does it mean for output to be usable?
4. Why should a reviewer check constraints explicitly?
5. What makes a strong revision prompt?
6. Why is "looks smart" not a quality standard?
7. What is the difference between cosmetic and structural issues?
8. Why is review a core AI skill instead of an optional extra?

### Grading standard

Pass if the learner can:

- identify three meaningful issues
- write a revision prompt that addresses those issues
- show that the revised output improved materially
- explain what still requires human review

### Common failure modes

- only commenting on tone instead of substance
- missing invented assumptions
- rewriting manually instead of learning to direct the model better
- assuming the revised version is automatically correct

## Facilitator Guidance For Weeks 3-4

### Coach for precision

These weeks are about sharper thinking, not prettier wording.
Reward learners who become more precise about:

- what they are asking for
- what they are checking for
- what would make an output useful

### Keep output review practical

Do not let this become abstract prompt philosophy.
Everything should stay connected to:

- a real task
- a real output
- a real improvement

### Protect the time budget

If people start going too deep:

- keep the first output small
- keep revision cycles to one meaningful pass
- prioritize quality of judgment over quantity of experiments

## Next Recommended Authoring Step

The next modules to author at this same depth should be:

1. Week 5: Codex In Practice
2. Week 6: Claude Code In Practice

That would complete the highest-leverage foundation of the entire program.

## Week 5 Lesson

### Title

How modern Codex workflows actually scale work

### Objective

Teach learners how to use Codex as a real working system for investigating, changing, and reviewing code rather than as a fancier chat box.

### Key message

Codex is not just useful because it can write code.
It is useful because it can operate on real tasks with context, structure, review, and delegation.

This week is where learners should start to feel:

- I can hand off meaningful work
- I still need to review what comes back
- I know what a good Codex task looks like

### Opening framing

Most teams underuse Codex in one of two ways:

- they ask it shallow questions and never let it do real work
- or they give it too much freedom and review too little

The right pattern is:

- scope the task clearly
- let Codex investigate or implement
- inspect what it did
- decide what to keep, change, or reject

This is the first week where BEAT becomes visibly different from a normal AI adoption program.

### Core concepts

#### Codex is a workflow, not just a model

Teach learners that Codex can participate in:

- repo investigation
- code changes
- review loops
- background tasks
- structured follow-ups

The value is not just "better answers."
The value is better execution.

#### Ask mode vs code mode mindset

Even if the exact interface differs by surface, learners should understand two modes of use:

- investigate and explain
- change and propose

They should know when each is appropriate.

#### Good Codex tasks are scoped

Bad Codex tasks are:

- too broad
- underconstrained
- unclear on success

Good Codex tasks are:

- bounded
- reviewable
- tied to a real artifact

#### Review is part of the workflow

Learners should expect to review:

- what files changed
- what assumptions were made
- what was not addressed
- what still needs manual judgment

### Demo script

#### Demo title

Ask, code, review, and iterate in Codex

#### Demo task

Use a real repo task such as:

- improve one piece of instructional copy
- identify and fix a small UI inconsistency
- trace where a learner action is handled
- add a tiny content or validation improvement

#### Demo flow

Step 1:

Frame the task well.

Show the difference between:

- "fix this page"

and

- "review the learner page and improve the assignment submission helper copy without changing layout or data flow; keep the tone calm and concise; summarize what files you touched and any assumptions you made"

Step 2:

Let Codex investigate or change.

Step 3:

Inspect the result:

- what files were touched
- what did it say it changed
- what seems right
- what needs follow-up

Step 4:

Ask one review-focused follow-up:

- what assumptions did you make?
- what edge cases are still unhandled?
- what should I verify manually before shipping this?

### Assignment instructions

#### Assignment title

Complete one real repo improvement using Codex

#### Submission steps

Each learner should:

1. Choose one small, real repo task.
2. Use Codex to investigate or implement it.
3. Review the output.
4. Submit:
   - the original task prompt
   - a summary of what Codex did
   - what files or areas were involved
   - one thing Codex did well
   - one thing Codex did poorly or ambiguously
   - one thing they would still verify manually

#### Suitable task examples

- trace a feature
- improve copy
- suggest a refactor
- propose a bug fix
- explain a data flow

The point is not difficulty.
The point is disciplined use of Codex.

### Reflection prompt

Answer in 4-6 sentences:

- Did Codex feel more useful for investigation or implementation?
- What part of the output felt most trustworthy?
- What part felt most in need of review?
- What did you learn about how to scope the task better next time?

### Quiz questions

1. What makes a Codex task well scoped?
2. Why is review part of the Codex workflow instead of an optional extra?
3. What is a sign that a task is too broad?
4. What should you inspect after Codex completes a task?
5. Why is "what assumptions did you make?" a valuable follow-up?
6. When should you avoid handing a task fully to Codex?
7. What is the difference between asking Codex to investigate versus asking it to change something?
8. Why is bounded work more valuable than vague ambitious work?

### Grading standard

Pass if the learner can:

- choose a task that is appropriately scoped
- use Codex for real work, not just commentary
- identify at least one strength and one weakness in the result
- name what still requires human verification

### Common failure modes

- choosing a task that is too big
- evaluating the tone of the answer instead of the substance
- treating Codex output as complete without inspection
- confusing "it changed files" with "it solved the problem well"

## Week 6 Lesson

### Title

What Claude Code is especially good at

### Objective

Teach learners how to operate Claude Code as a terminal-native coding workflow and understand where it is especially strong relative to other tools.

### Key message

Claude Code is powerful because it works where real project work happens:

- in a terminal
- in a codebase
- across files
- with commands
- with memory, tools, and connected workflows

This week should make learners feel:

- I can operate Claude Code inside a project
- I know what kinds of tasks fit it well
- I can compare its workflow to Codex without turning this into a model popularity contest

### Opening framing

If Codex often feels like an agentic execution environment, Claude Code often feels like an especially strong terminal-native partner.

That distinction matters because your team does not need a religious preference.
Your team needs fluency.

The right question is:

- when does Claude Code fit the task, the context, and the operator best?

### Core concepts

#### Terminal-native interaction

Claude Code is especially important in this curriculum because it reinforces the operating environment your team needs to get comfortable with.

It helps normalize:

- file inspection
- command execution
- project-aware reasoning
- tool-connected workflows

#### Context over convenience

Claude Code becomes more valuable when the task depends on:

- the actual project
- the actual files
- the actual output of commands

That is the difference between grounded help and generic help.

#### Memory, tools, and MCP

Learners do not need to master all of these this week.
But they should understand that Claude Code is built to operate inside a system that can include:

- project memory
- MCP servers
- subagents
- repeatable workflows

#### Comparison without ideology

Codex and Claude Code do not need to be treated as rivals in class.

The team should learn:

- what Claude Code does especially well
- what Codex does especially well
- how to choose based on task and environment

### Demo script

#### Demo title

Terminal-first task execution in Claude Code

#### Demo task

Use a real project task such as:

- explain one feature path
- inspect a bug surface
- update a small piece of content
- propose how to split a crowded file or workflow

#### Demo flow

Step 1:

Open the project in a terminal-native flow and explain that the tool is working with the real project, not a detached chat transcript.

Step 2:

Ask a clear, grounded task.

Step 3:

Show how the tool uses files and commands as part of the reasoning process.

Step 4:

Ask a comparison follow-up:

- if we did this in Codex instead, what might be different?

This teaches tool fluency rather than brand loyalty.

### Assignment instructions

#### Assignment title

Complete one repo task in Claude Code

#### Submission steps

Each learner should:

1. Choose one real project task.
2. Use Claude Code to complete or investigate it.
3. Submit:
   - the initial prompt
   - the result
   - what commands, files, or repo context mattered
   - what Claude Code handled especially well
   - where they would still want review or comparison

4. Add one short compare note:
   - would this have been better in Codex, worse in Codex, or about the same?

### Suitable task examples

- explain a code path
- inspect learner progress logic
- improve a small piece of copy or UX text
- identify where a feature should be changed
- summarize a multi-file behavior in plain English

### Reflection prompt

Answer in 4-6 sentences:

- What felt different about using Claude Code inside the project?
- Did terminal context make the work easier to trust?
- What part of the workflow felt most natural?
- What kind of task would you now choose Claude Code for first?

### Quiz questions

1. Why does terminal-native context matter?
2. What kinds of tasks fit Claude Code well?
3. What is one sign that a task should use a coding agent rather than a chat tool?
4. Why is actual project context more valuable than generic explanation?
5. What is one reason Claude Code can produce more grounded output than a detached chat interface?
6. Why should the team compare tools by task fit rather than brand preference?
7. What is one thing you should still review even after a strong Claude Code result?
8. Why does this week matter before MCP and subagent modules later in the course?

### Grading standard

Pass if the learner can:

- use Claude Code on one real project task
- explain what repo context or commands mattered
- identify what it did well
- identify what still required judgment or comparison

### Common failure modes

- using Claude Code exactly like a normal chat box
- ignoring the value of repo context
- comparing tools emotionally instead of operationally
- failing to describe what still needed review

## Facilitator Guidance For Weeks 5-6

### Emphasize operator mindset

These weeks are not about impressing the team with AI.
They are about making the team more capable operators of AI-enabled workflows.

Reward learners who:

- scope better
- review better
- compare tools more honestly
- stay grounded in actual tasks

### Keep difficulty modest

Do not make these assignments hard for the sake of status.
The quality bar is:

- real work
- good judgment
- repeatable workflow

Small, well-reviewed tasks beat ambitious sloppy ones.

### Protect the emotional arc

By Week 6, learners should feel more capable than they did in Week 1.
Do not overload them with advanced theory just because the tools are more powerful.

## Week 7 Lesson

### Title

What should become a skill vs a prompt vs a checklist

### Objective

Teach learners how to turn repeated work into reusable operating assets instead of solving the same problem from scratch every time.

### Key message

A mature AI workflow is not just better prompting.
It is reusable prompting.

When a team repeats the same task over and over, the question should become:

- should this stay a one-off prompt?
- should this become a checklist?
- should this become a reusable skill or playbook?

### Opening framing

One of the main differences between casual AI users and strong AI operators is compounding.

Weak users:

- solve the same problem fresh every time

Strong users:

- identify repeated patterns
- standardize them
- improve them
- share them

This week is where your team starts building assets instead of just getting answers.

### Core concepts

#### Prompt vs checklist vs skill vs playbook

Teach the distinctions clearly.

##### Prompt

Best when:

- the task is specific
- variation is acceptable
- it does not need long-term reuse yet

##### Checklist

Best when:

- a human still leads the process
- consistency matters
- the task has a few repeated review steps

##### Skill

Best when:

- the instructions should be reusable
- the workflow repeats often
- the team benefits from a standard way of doing it

##### Operating playbook

Best when:

- the workflow is bigger than a single prompt
- multiple people should follow the same standard
- the process includes inputs, outputs, review, and escalation decisions

#### Reusability is a force multiplier

Every reusable asset should reduce one of these:

- ambiguity
- inconsistency
- wasted time
- dependence on memory

#### Good reusable assets are narrow

The first reusable asset should not try to encode the entire business.

It should solve one repeated, useful thing well.

### Demo script

#### Demo title

Create a simple recruiting-oriented skill

#### Demo task

Take one repeated activity such as:

- candidate summary generation
- role brief clarification
- repo investigation summary
- outreach critique

#### Demo flow

Step 1:

Show a one-off prompt.

Step 2:

Ask: do we do this often enough that it should be reusable?

Step 3:

Turn it into:

- a named asset
- clear use case
- input expectations
- output expectations
- quality standard

Step 4:

Explain why this should be a skill or playbook rather than another loose prompt.

### Assignment instructions

#### Assignment title

Write one reusable skill or operating playbook

#### Submission steps

Each learner should create one reusable asset for a repeated workflow.

The submission should include:

- name of the asset
- when to use it
- what inputs it expects
- what output it should produce
- what good quality looks like
- whether it is better framed as a prompt, checklist, skill, or playbook

### Suggested asset ideas

- sourcing brief clarifier
- candidate summary standardizer
- outreach critique routine
- repo question investigation template
- assignment review checklist

### Reflection prompt

Answer in 4-6 sentences:

- Why did this workflow deserve to become reusable?
- Why did you choose prompt, checklist, skill, or playbook?
- What inconsistency does this remove?
- What would you still want a human to review?

### Quiz questions

1. When should something remain a prompt instead of becoming a skill?
2. What is a sign that a process needs a playbook?
3. Why are narrow reusable assets better than giant ones?
4. What is the value of naming a reusable workflow?
5. Why is "we do this often" not the only criterion?
6. What makes an asset useful to someone besides the author?
7. Why should reusable assets include expected inputs and outputs?
8. What still requires human oversight even in a strong reusable workflow?

### Grading standard

Pass if the learner can create one asset that:

- addresses a real repeated workflow
- is clearly classified
- explains inputs and outputs
- defines what good quality means

### Common failure modes

- turning everything into a giant skill
- documenting vague aspirations instead of reusable steps
- writing something only the author can understand
- failing to define what the output should look like

## Week 8 Lesson

### Title

MCP in plain English

### Objective

Teach learners what MCP is, why connected tools matter, and where the risks increase when AI can reach beyond a chat box or repo.

### Key message

MCP matters because it connects AI systems to real tools and data.

That makes workflows much more powerful.
It also makes them riskier.

This week is about understanding:

- what connected workflows enable
- when they are worth using
- what new review and safety habits are required

### Opening framing

Without connected tools, many AI workflows still rely on copy-paste.

With connected tools, AI can sometimes:

- pull information from real systems
- act across services
- update or retrieve live context

That is where simple prompting starts becoming operational automation.

It is also where bad judgment becomes more expensive.

### Core concepts

#### What MCP is

Explain it simply:

MCP is a way for AI tools to connect to external systems, tools, or services in a structured way.

The learner does not need protocol-level details.
They need workflow-level understanding.

#### Why it matters

Connected workflows can reduce:

- manual copy-paste
- context loss
- repeated re-entry of the same information

They can also make AI outputs more grounded because the system can access the actual tool or data source.

#### Why risk increases

When AI can connect to tools, risks go up too:

- prompt injection
- wrong actions on live systems
- trust in low-quality external content
- over-automation without oversight

#### The safety mindset

Teach learners to ask:

- what system is this touching?
- what can it read?
- what can it write?
- what review step is required before action?

### Demo script

#### Demo title

Inspect a simple MCP-backed workflow

#### Demo task

Show one example of a connected workflow in plain English, such as:

- pulling task context from one tool
- drafting output based on a connected source
- retrieving information from a system instead of pasting it manually

The demo does not need to be technically elaborate.
It needs to make the connection model real.

#### Demo flow

Step 1:

Describe the old workflow:

- manual copy-paste
- switching tabs
- context drift

Step 2:

Describe the connected workflow:

- tool-connected context
- lower manual effort
- stronger grounding

Step 3:

Point out the risks:

- what if the source is wrong?
- what if the tool can write, not just read?
- what must a human still review?

### Assignment instructions

#### Assignment title

Map one recruiting workflow for tool connection

#### Submission steps

Each learner should choose one repeated workflow and describe:

1. the current manual version
2. where connected tools would improve it
3. what data or systems would be involved
4. what the main risks would be
5. what human review step must remain

### Suggested workflow ideas

- candidate research
- outreach prep
- note synthesis
- interview debrief organization
- project handoff summaries

### Reflection prompt

Answer in 4-6 sentences:

- What part of the workflow feels most worth connecting?
- What risk worries you most?
- What should remain human-controlled?
- What would make you trust a connected workflow more?

### Quiz questions

1. What problem does MCP help solve?
2. Why are connected workflows more powerful than copy-paste workflows?
3. Why are they also riskier?
4. What is one example of prompt injection risk?
5. What is one sign that a workflow needs a review checkpoint?
6. Why should learners care whether a system is read-only or write-capable?
7. What does "grounded" mean in a connected workflow?
8. Why is this topic important before building richer agents?

### Grading standard

Pass if the learner can:

- describe one workflow clearly
- identify where tool connection adds value
- identify at least two real risks
- define a sensible review checkpoint

### Common failure modes

- treating connection as automatically good
- ignoring write risk
- focusing on technical novelty instead of workflow value
- failing to define human oversight

## Week 9 Lesson

### Title

What good delegation looks like

### Objective

Teach learners how to break larger work into well-scoped agent tasks and understand what makes parallel or delegated work effective.

### Key message

Delegation is not just handing work away.
It is defining work so another system can perform it cleanly.

The better the scope, boundaries, and success criteria, the better the delegated result.

### Opening framing

Many people think AI agents fail because models are weak.
Often they fail because the task was badly scoped:

- too much at once
- unclear output
- hidden assumptions
- no review boundary

This week teaches learners to think like coordinators.

### Core concepts

#### Decomposition

Large work should be broken into smaller jobs with:

- distinct purpose
- clear inputs
- clear outputs
- clear ownership

#### Parallelism

Some tasks can run at the same time.
Others must happen in sequence.

Learners should start noticing the difference.

#### Context control

A delegated task should not carry everything.
It should carry what that worker needs, not the whole universe.

#### Review boundary

Delegated tasks should return something inspectable:

- summary
- draft
- recommendation
- patch
- structured output

### Demo script

#### Demo title

Split a larger problem into agent tasks

#### Demo task

Use a realistic multi-step workflow, such as:

- market research
- candidate research
- outreach draft preparation
- final human review

#### Demo flow

Step 1:

Show the messy "do everything" version.

Step 2:

Break it into separate tasks:

- research
- summarize
- draft
- review

Step 3:

Explain what could run in parallel and what should remain sequential.

Step 4:

Explain what the final reviewer still owns.

### Assignment instructions

#### Assignment title

Design a multi-step recruiting automation

#### Submission steps

Each learner should design a workflow with at least three parts:

- one information-gathering task
- one synthesis or drafting task
- one review step

For each step, define:

- the task
- the input
- the output
- whether it should run in parallel or sequence
- who or what reviews it

### Reflection prompt

Answer in 4-6 sentences:

- Where did the original workflow feel overloaded?
- Which step was easiest to isolate?
- Which step still needed the most human judgment?
- What would make this delegation cleaner next time?

### Quiz questions

1. Why does bad scoping break delegated work?
2. What makes a delegated task reviewable?
3. What is one sign that a task should be split into smaller parts?
4. What is the difference between parallel and sequential work?
5. Why is context control important?
6. What should always be true of a delegated output?
7. Why is human review still part of strong delegation?
8. What is one sign a workflow is too tangled?

### Grading standard

Pass if the learner can:

- decompose a workflow into sensible steps
- define inputs and outputs clearly
- identify review boundaries
- distinguish parallel from sequential work

### Common failure modes

- keeping the workflow too fuzzy
- delegating review itself without inspection
- failing to define outputs
- confusing "more agents" with "better workflow"

## Week 10 Lesson

### Title

How to know whether an AI workflow is actually good

### Objective

Teach learners to create simple evals and guardrails so they can assess workflow quality with something more reliable than vibes.

### Key message

If the team cannot evaluate a workflow, the team cannot improve it.

The point of evals is not complexity.
It is consistency.

### Opening framing

Many teams say a workflow is "good" because:

- it feels fast
- it sounds smart
- people liked the demo

That is not enough.

A useful workflow should be judged by:

- quality
- reliability
- safety
- repeatability

### Core concepts

#### What an eval is

An eval is a repeatable way to judge whether a workflow is producing acceptable results.

At this stage, the team does not need formal benchmark systems.
They need practical rubrics.

#### What a guardrail is

A guardrail is a limit or review condition that reduces predictable failure.

Examples:

- must cite source files
- must stay under word count
- must not invent candidate details
- must require human approval before sending

#### Practical eval dimensions

Teach learners to score workflows on:

- correctness
- usefulness
- compliance with constraints
- clarity
- reviewability

### Demo script

#### Demo title

Create a simple eval rubric

#### Demo task

Choose one workflow such as:

- candidate summary
- outreach rewrite
- sourcing research summary

#### Demo flow

Step 1:

Define what a good result looks like.

Step 2:

Turn that into 4-5 criteria.

Step 3:

Add 1-2 guardrails.

Step 4:

Explain how this helps the team improve the workflow over time.

### Assignment instructions

#### Assignment title

Build a mini eval for one real workflow

#### Submission steps

Each learner should:

1. Choose one repeated workflow.
2. Define 4-5 evaluation criteria.
3. Define at least 2 guardrails.
4. Explain how a reviewer would apply them.

### Reflection prompt

Answer in 4-6 sentences:

- What makes this workflow easy or hard to evaluate?
- Which criterion matters most?
- Which guardrail feels most necessary?
- How would this make the workflow stronger over time?

### Quiz questions

1. Why is speed alone not a sufficient measure?
2. What is the purpose of an eval?
3. What is the purpose of a guardrail?
4. What makes a criterion useful instead of vague?
5. Why should workflows be reviewable?
6. What is one example of a good guardrail?
7. Why is repeatability important?
8. What happens when teams rely only on intuition?

### Grading standard

Pass if the learner can:

- define usable evaluation criteria
- define real guardrails
- explain how someone would apply them in practice

### Common failure modes

- criteria that are too vague
- guardrails that do not meaningfully reduce risk
- evaluating style instead of usefulness
- treating evals like bureaucracy instead of quality control

## Week 11 Lesson

### Title

What a useful recruiting micro-agent actually looks like

### Objective

Teach learners how to design a small, bounded recruiting automation or agent that produces real value without becoming distracting or risky.

### Key message

The best first agent is not the most impressive one.
It is the one that:

- solves one real problem
- fits the team’s workflow
- stays inside clear boundaries
- saves measurable time or improves quality

### Opening framing

This week is where many teams overreach.

They try to build something too broad, too autonomous, or too flashy.

The right first build is smaller:

- clear task
- clear boundary
- clear review step
- clear value

### Core concepts

#### Small beats ambitious

The best early micro-agents often do one thing like:

- organize research
- draft a first pass
- summarize inputs
- surface open questions

#### Value must be visible

The learner should be able to say:

- what time it saves
- what quality it improves
- what human work remains

#### Review cannot disappear

Useful does not mean autonomous.
The stronger first pattern is:

- generate
- inspect
- decide

### Demo script

#### Demo title

Build a lightweight recruiting workflow

#### Demo task

Choose one small use case such as:

- candidate research summary
- sourcing-target research pack
- outreach prep assistant
- interview note synthesis

#### Demo flow

Step 1:

Define the narrow problem.

Step 2:

Define the inputs.

Step 3:

Define the output.

Step 4:

Define the review point.

Step 5:

Define how value will be measured.

### Assignment instructions

#### Assignment title

Ship one usable recruiting micro-agent

#### Submission steps

Each learner should design one lightweight automation or agent and submit:

- what problem it solves
- what inputs it uses
- what output it produces
- what the review step is
- what value it creates
- what risk it still carries

### Reflection prompt

Answer in 4-6 sentences:

- Why did you keep the scope this size?
- What is the clearest source of value?
- What still needs human review?
- What would you improve in version two?

### Quiz questions

1. Why are small agents often better first builds?
2. What makes a micro-agent useful instead of just clever?
3. Why must value be measurable?
4. Why should review stay in the loop?
5. What is one sign a micro-agent is over-scoped?
6. Why is clear input/output definition important?
7. What does autonomy risk look like?
8. Why is fit to workflow more important than novelty?

### Grading standard

Pass if the learner can:

- define a small useful scope
- specify inputs and outputs
- define a review step
- explain value and risk clearly

### Common failure modes

- over-automation
- unclear value
- no review step
- trying to solve too much at once

## Week 12 Lesson

### Title

What a strong operating habit looks like after the bootcamp

### Objective

Turn what learners built over twelve weeks into a repeatable operating rhythm rather than a one-time burst of experimentation.

### Key message

The goal of BEAT is not to finish twelve weeks and stop.
The goal is to leave with a stronger default way of working.

### Opening framing

Programs like this fail at the end when they become:

- a nice memory
- a collection of one-off experiments
- a few interesting prompts no one uses again

The strongest finish is different:

- one real build
- one real workflow improvement
- one real next habit

### Core concepts

#### A capstone should be real

A strong capstone can be:

- a script
- a skill
- a micro-agent
- a connected workflow
- a practical operating playbook

What matters is that it is:

- useful
- bounded
- explainable
- reusable

#### Reflection is operational, not emotional

The key reflection questions are:

- what now works better?
- what did we learn to trust?
- what still needs process?
- what do we keep doing?

#### The team operating system

By the end, the team should have:

- stronger terminal comfort
- better tool selection
- better prompting
- better review habits
- reusable assets
- clearer standards

### Demo script

#### Demo title

Capstone examples and critique

#### Demo flow

Show two or three example capstones and evaluate them against:

- usefulness
- clarity of scope
- reviewability
- repeatability
- measurable value

Show that "most impressive" is not the same as "most adoptable."

### Assignment instructions

#### Assignment title

Present one real build

#### Submission steps

Each learner should submit and present:

- what they built
- what problem it solves
- what inputs and outputs it uses
- what still requires review
- what value it creates
- what the next version would improve

### Reflection prompt

Answer in 4-6 sentences:

- What changed most in how you work?
- What are you now much less intimidated by?
- What is one workflow you will keep using?
- What is one standard you now think the team should hold?

### Quiz questions

1. What makes a capstone real rather than decorative?
2. Why is adoptability important?
3. Why should value be visible?
4. Why is reviewability still important at the end?
5. What is one sign a workflow deserves to become part of the operating system?
6. Why is one durable habit more valuable than ten fragile experiments?
7. What makes a build reusable by the team?
8. Why is the end of the program really the beginning of the operating rhythm?

### Grading standard

Pass if the learner can:

- present a real build or workflow
- explain value clearly
- explain limitations honestly
- identify a real next step

### Common failure modes

- capstones that are vague
- no clear value
- no defined review boundary
- treating the program as finished instead of operationalized

## Facilitator Guidance For Weeks 7-12

### Keep the program practical

As the topics get more advanced, resist the temptation to make them more abstract.
The program should still feel like:

- real work
- small wins
- visible progress

### Maintain the 2-hour constraint

When a week risks getting too large:

- reduce optional exploration
- preserve the must-pass outcome
- keep the artifact small and real

### Reward clarity over ambition

The best submissions in the second half are not the most technically elaborate.
They are the ones with:

- clear scope
- clear review
- clear value
- clear reuse

## Final Program Standard

If the team completes this curriculum well, each learner should be able to:

- work calmly in a terminal
- choose between chat tools and coding agents intelligently
- use Codex productively
- use Claude Code productively
- write structured prompts for action
- review outputs critically
- create reusable operating assets
- reason about MCP safely
- decompose and delegate work
- define simple evals and guardrails
- design a useful recruiting micro-agent
- carry one real AI-enabled operating habit forward

## Final Recommendation

The next product step is no longer more curriculum writing.

The next step is to convert this authored curriculum into the live BEAT experience:

1. update the live Supabase curriculum
2. add these lesson bodies and prompts to the app
3. add quiz questions and assignment instructions into the learner experience
4. polish the admin side so you can review against these rubrics
