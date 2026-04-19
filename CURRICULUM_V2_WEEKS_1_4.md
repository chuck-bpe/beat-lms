# BEAT V2 Detailed Modules

## Weeks 1-4

This document turns the first four weeks of BEAT Version 2 into a practical, low-overhead, high-standard curriculum block.

Design constraints:

- about 2 hours per week
- self-paced
- practical, not academic
- each week produces one real artifact
- each week has one clear minimum standard
- stretch work is optional, not required

## What Makes These Weeks Top 1%-Ready

These modules are designed around five standards:

1. They teach only one or two durable skills per week.
2. They end in a real output, not a vague reflection.
3. They define what good work looks like.
4. They separate required work from stretch work.
5. They build confidence without lowering the bar.

## Week 1: Terminal Confidence Bootcamp

### Purpose

Make the terminal feel normal.

The goal is not technical mastery.
The goal is to remove fear and create basic operating comfort.

### End-Of-Week Capability

By the end of Week 1, each learner should be able to:

- open Terminal
- move between folders
- inspect files
- search text in a project
- start a local app or command process
- explain in plain English what each command did

### Time Budget

- Lesson: 20 minutes
- Demo: 20 minutes
- Lab: 60 minutes
- Check: 15 minutes

Total: about 1 hour 55 minutes

### Lesson

#### Title

Terminal fluency for non-engineers

#### Lesson goals

- understand what a shell is
- understand why coding agents use terminal workflows
- stop treating commands like magic spells
- learn the difference between files, folders, and processes

#### Teaching points

- the terminal is just a direct interface to your computer
- AI coding tools operate best when the user is comfortable reading and running commands
- most terminal tasks at this stage are inspect-and-run, not advanced scripting
- you do not need to memorize everything; you need to recognize patterns

### Demo

#### Title

Your first 10 useful commands

#### Demo commands

- `pwd`
- `ls`
- `cd`
- `open .`
- `cat`
- `rg`
- `npm run dev`
- `Control + C`
- `git status`
- `clear`

#### Demo script

Show a repo and narrate:

- where am I
- what files are here
- how do I move
- how do I inspect a file
- how do I search for a string
- how do I start and stop an app
- how do I check whether files changed

### Assignment

#### Title

Run the repo without fear

#### Required task

Each learner must:

1. Open the BEAT repo locally.
2. Navigate to the project folder in Terminal.
3. Run at least six commands from the demo list.
4. Start the local app successfully.
5. Write a short submission that explains:
   - which commands they ran
   - what each command did
   - which part felt most confusing
   - what now feels less intimidating

#### Required artifact

One submission with:

- pasted command list
- one screenshot of terminal
- one short reflection

#### Must-pass standard

The learner can successfully:

- navigate into the project
- inspect at least one file
- search the codebase with `rg`
- start and stop the app without help

#### Stretch task

- use `git status` before and after making a tiny harmless file edit and explain the result

### Lightweight Check

#### Format

8 quick scenarios

Examples:

- Which command tells you where you are?
- Which command searches for a phrase across files?
- How do you stop a running dev server?
- What does `git status` tell you?

### Rubric

#### Excellent

- commands are accurate
- learner explains what happened in plain English
- learner shows calm command of the basics

#### Good enough

- learner completed the steps successfully
- learner understands what most commands did
- learner can repeat the basic flow

#### Not yet

- learner copied commands without understanding
- learner could not start the app
- learner cannot explain the difference between navigating, inspecting, and running

### Failure modes to coach against

- panic when terminal output looks noisy
- treating every warning as a disaster
- copy-pasting commands without understanding what they do

## Week 2: Working With AI Coding Agents

### Purpose

Teach the difference between chat AI and coding agents.

This is where the team learns that Codex and Claude Code are not just "smarter chat windows." They are tools that can inspect codebases, edit files, run commands, and work across a real project.

### End-Of-Week Capability

By the end of Week 2, each learner should be able to:

- explain the difference between chat AI and coding agents
- choose between Codex, Claude Code, and general chat tools for a task
- ask one coding agent to investigate a real project question
- evaluate whether the response is actually useful

### Time Budget

- Lesson: 25 minutes
- Demo: 20 minutes
- Lab: 55 minutes
- Check: 15 minutes

Total: about 1 hour 55 minutes

### Lesson

#### Title

Codex, Claude Code, ChatGPT, and Claude: what each one is for

#### Lesson goals

- stop using the wrong tool for the wrong job
- understand what "agentic coding" means
- understand why repo context and tool access change the quality of output

#### Teaching points

- chat tools are best for brainstorming, summarizing, drafting, and quick reasoning
- coding agents are best when the task needs repo context, file edits, diffs, or terminal actions
- Codex is especially oriented toward agentic software work, parallel tasks, skills, and automation
- Claude Code is especially strong as a terminal-first coding workflow with files, commands, MCP, subagents, and project memory

### Demo

#### Title

One task, two coding agents

#### Demo task

Ask both tools something like:

- explain how this app handles auth
- identify which files drive learner progress

#### Demo goals

- show how each tool explores a codebase
- compare what the outputs look like
- show how follow-up questions improve results

### Assignment

#### Title

Investigate a real repo question with one coding agent

#### Required task

Each learner must:

1. Pick one real question about the BEAT app or another approved repo.
2. Use either Codex or Claude Code to investigate it.
3. Ask at least one follow-up question.
4. Submit:
   - the original prompt
   - the follow-up prompt
   - the answer they found
   - a short judgment of whether the result was actually useful

#### Suggested questions

- How does login work?
- Which files control learner progress?
- Where are Slack messages triggered?
- Which file would I change to edit the curriculum?

#### Must-pass standard

The learner can:

- choose a reasonable tool
- ask a clear question
- use at least one follow-up prompt
- describe whether the answer was complete, incomplete, or misleading

#### Stretch task

- run the same question in the other tool and compare the difference

### Lightweight Check

#### Format

Scenario-based selection

Examples:

- You want help brainstorming a lesson title. Which tool?
- You want to find which file sends Slack notifications. Which tool?
- You want to refactor a real code path. Which tool?

### Rubric

#### Excellent

- prompt is clear and scoped
- learner chooses the right tool
- learner critiques the output thoughtfully

#### Good enough

- learner gets a useful answer
- learner shows some judgment about quality

#### Not yet

- learner uses a generic chat workflow for a repo-dependent task
- learner accepts output without checking whether it actually answered the question

### Failure modes to coach against

- asking vague prompts like "how does this work?"
- confusing interface familiarity with output quality
- treating any confident answer as correct

## Week 3: Prompting For Code And Action

### Purpose

Teach learners how to ask for executable work instead of essays.

This is the week that upgrades the team from "prompting as conversation" to "prompting as task design."

### End-Of-Week Capability

By the end of Week 3, each learner should be able to:

- write prompts with task, context, constraints, and output format
- reference files, tools, or acceptance criteria clearly
- improve a weak prompt into a strong one

### Time Budget

- Lesson: 20 minutes
- Demo: 20 minutes
- Lab: 60 minutes
- Check: 15 minutes

Total: about 1 hour 55 minutes

### Lesson

#### Title

Prompts that produce action, not fluff

#### Lesson goals

- understand the parts of a strong task prompt
- learn how to reduce ambiguity
- learn when to specify output format

#### Strong prompt framework

Every strong prompt should usually contain:

- task
- context
- constraints
- definition of done
- output format

#### Example upgrade

Weak:

- help me improve sourcing

Better:

- review this candidate sourcing workflow, identify the two biggest bottlenecks, and rewrite it as a 5-step process optimized for AI assistance; keep it realistic for a recruiter spending less than 30 minutes per search

### Demo

#### Title

Prompt surgery

#### Demo goals

- take 3 weak prompts
- show why they fail
- rewrite them into usable prompts for chat tools and coding agents

### Assignment

#### Title

Write three prompts worth reusing

#### Required task

Each learner must create three prompts:

1. one prompt for a chat tool
2. one prompt for Codex or Claude Code
3. one prompt for a recruiting workflow they do every week

For each prompt, they must submit:

- the prompt
- what tool it is for
- what output they expect
- why the prompt is better than a vague version

#### Must-pass standard

Each prompt must contain:

- a clear task
- enough context
- at least one meaningful constraint
- a visible definition of the expected output

#### Stretch task

- test each prompt, revise once, and show before/after

### Lightweight Check

#### Format

Prompt repair exercise

Give learners weak prompts and ask them to improve them.

### Rubric

#### Excellent

- prompts are crisp, constrained, and realistic
- learner understands different prompt shapes for different tools
- outputs are reusable by someone else

#### Good enough

- prompts are materially better than vague originals
- prompts contain real structure

#### Not yet

- prompts are still generic
- learner asks for "better" without specifying what better means
- prompts produce essay output when action is needed

### Failure modes to coach against

- overprompting with unnecessary detail
- underprompting with no constraints
- using one prompt style for all tools

## Week 4: Reading And Reviewing AI Output

### Purpose

Teach the team how to review AI work like operators, not spectators.

This is where trust gets built properly.

### End-Of-Week Capability

By the end of Week 4, each learner should be able to:

- inspect an AI-generated change or output
- identify missing assumptions
- spot at least three common quality failures
- request a better revision

### Time Budget

- Lesson: 25 minutes
- Demo: 20 minutes
- Lab: 55 minutes
- Check: 15 minutes

Total: about 1 hour 55 minutes

### Lesson

#### Title

How to review AI work without becoming paranoid

#### Lesson goals

- understand common AI failure modes
- learn what a useful review checklist looks like
- learn how to ask for a correction instead of starting over

#### Review checklist

For any AI-generated output, check:

- did it answer the real question?
- did it invent facts or assumptions?
- did it ignore constraints?
- is it actually usable?
- what would break if we shipped this as-is?

### Demo

#### Title

Reviewing a bad output and making it good

#### Demo goals

- show an AI output that looks polished but is wrong or incomplete
- mark the failure points
- write one better follow-up prompt
- show how quality improves with review

### Assignment

#### Title

Critique and revise one AI-generated output

#### Required task

Each learner must:

1. generate one output with an AI tool
2. review it using the checklist
3. identify at least three problems or risks
4. write one revision prompt
5. submit:
   - original output
   - three issues found
   - revision prompt
   - revised result

#### Acceptable output types

- sourcing plan
- candidate summary
- outreach sequence
- repo explanation
- simple code change or prompt artifact

#### Must-pass standard

The learner must show they can:

- identify meaningful flaws, not just cosmetic issues
- improve the result through review
- explain why the second version is better

#### Stretch task

- review a diff or code change instead of plain text output

### Lightweight Check

#### Format

Quality triage

Give three outputs and ask:

- which one is safest
- which one is most misleading
- what one follow-up would improve each

### Rubric

#### Excellent

- learner catches subtle issues
- feedback is specific
- revision prompt directly addresses the real weaknesses

#### Good enough

- learner finds obvious problems and improves the output meaningfully

#### Not yet

- learner focuses only on tone or wording
- learner cannot identify structural issues
- learner assumes the revised version is correct without inspection

### Failure modes to coach against

- confusing polish with correctness
- thinking review means rewriting everything manually
- accepting output because it "sounds smart"

## Program-Level Guidance For Weeks 1-4

### Must-Learn Outcomes

By the end of Week 4, every learner should be able to:

- operate basic terminal workflows without fear
- distinguish coding agents from chat tools
- write structured prompts for action
- review AI outputs critically

If they cannot do those four things, they are not ready for the higher-value later modules.

### Stretch Outcomes

These are nice but not mandatory by Week 4:

- compare Codex and Claude Code deeply
- review real diffs confidently
- write reusable skills
- start small automations

### What To Avoid

Do not overload early weeks with:

- too much AI history
- too many model comparisons
- too much architecture theory
- advanced git workflows
- coding jargon without action

### Why This Fits The 2-Hour Constraint

This sequence stays inside the time limit because:

- it teaches one real skill at a time
- stretch work is optional
- assignments are small but real
- each module has a strict "must-pass" definition

## My Assessment

If BEAT adopts this level of specificity for all 12 weeks, it has a realistic path to being top 1% for a small business team learning modern AI workflows without wasting time.

The next best step is to author Weeks 5-8 at this same quality bar, then update the app data model to reflect the new sequence.
