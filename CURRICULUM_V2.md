# BEAT Curriculum V2

## What This Version Fixes

The current BEAT curriculum is a solid recruiter-AI enablement scaffold, but it is not yet the curriculum you described most recently.

Your stated goal is not primarily:

- generic AI literacy
- broad prompting for recruiters
- adoption of one internal platform

Your stated goal is primarily:

- terminal fluency
- comfort using Codex
- comfort using Claude Code
- ability to supervise and build agents
- modern workflows around tools, MCP, skills, subagents, evals, and automation
- practical recruiting use cases, not theory

This Version 2 outline is designed around that goal.

## Research Basis

This curriculum is intentionally aligned to the current official product direction from OpenAI and Anthropic:

- OpenAI currently positions Codex as an agentic coding system that can read, edit, and run code; work in the background; and support parallel workflows, skills, automation, and cloud environments.
- OpenAI's current developer stack around coding and agents also emphasizes tools, MCP/connectors, shell use, structured workflows, guardrails, and agent evaluation.
- Anthropic currently positions Claude Code as a terminal-first coding tool that edits files, runs commands, supports subagents, skills, MCP, memory, and tool-driven workflows.
- Anthropic also explicitly treats MCP, subagents, and terminal operation as core parts of the working model, not optional extras.

So the right 2026-current curriculum is not "learn prompting, then maybe agents later." It is "learn to operate in an AI-native coding environment safely and productively."

## Core Design Principles

### 1. Terminal First

The team should stop treating the terminal as a scary engineer-only interface.

Baseline expectation:

- navigate folders
- inspect files
- run installs
- run dev servers
- read logs
- understand basic git flow

### 2. Tool Fluency Over Tool Hype

The goal is not "which model is smartest?"

The goal is:

- when to use Codex
- when to use Claude Code
- when to use ChatGPT or Claude chat
- when to stay manual

### 3. Real Builds Every Week

Every module should produce something concrete:

- a script
- a working prompt
- a code change
- a reusable skill
- a small automation
- a lightweight agent

### 4. Recruiting Is The Use Case, Not The Subject

The team is not learning recruiting from AI.
The team is learning modern AI workflows through recruiting work.

### 5. Human Review Is Mandatory

The team should learn:

- what to trust
- what to verify
- how to inspect diffs
- how to spot bad assumptions
- how to run quick eval loops

## Recommended 12-Week Structure

Each week assumes about 2 hours of company time.

Each module includes:

- lesson
- demo
- lab or assignment
- lightweight check

## Week 1: Terminal Confidence Bootcamp

- Theme: Stop being intimidated by the interface
- Outcome: Every learner can open a terminal, move around a repo, inspect files, and run a few safe commands without freezing.
- Focus:
  - terminal basics
  - filesystem navigation
  - reading logs
  - command confidence
- Lesson:
  - how terminal workflows actually work
- Demo:
  - `pwd`, `ls`, `cd`, `open`, `cat`, `rg`, `npm run dev`
- Assignment:
  - navigate a real repo, find key files, start the app locally, and document what each command did
- Check:
  - short command recognition quiz

## Week 2: Working With AI Coding Agents

- Theme: What Codex and Claude Code actually are
- Outcome: Learners understand the difference between chat AI and coding agents.
- Focus:
  - agentic coding
  - codebase context
  - file edits
  - command execution
- Lesson:
  - Codex vs Claude Code vs ChatGPT vs Claude chat
- Demo:
  - same task solved in Codex and Claude Code
- Assignment:
  - use one tool to explain an unfamiliar part of a repo and summarize what it found
- Check:
  - pick-the-right-tool scenarios

## Week 3: Prompting For Code And Action

- Theme: Ask for work, not essays
- Outcome: Learners can write prompts that produce usable code or structured output instead of vague prose.
- Focus:
  - task framing
  - constraints
  - file references
  - acceptance criteria
- Lesson:
  - prompts for coding agents vs prompts for chat tools
- Demo:
  - weak prompt to strong prompt progression
- Assignment:
  - write three high-quality prompts for recurring recruiting tasks
- Check:
  - prompt surgery exercise

## Week 4: Reading And Reviewing AI Output

- Theme: Never accept the first answer blindly
- Outcome: Learners can inspect diffs, spot risky changes, and ask better follow-up questions.
- Focus:
  - reading patches
  - checking assumptions
  - spotting hallucinations
  - defining done
- Lesson:
  - how to review AI-generated code and workflows
- Demo:
  - review a change set and identify what is unsafe or incomplete
- Assignment:
  - review an AI-generated script or prompt workflow and produce a better revision
- Check:
  - diff review scenarios

## Week 5: Codex In Practice

- Theme: Real workflow with Codex
- Outcome: Learners can use Codex to investigate, change, and improve a real working project.
- Focus:
  - local Codex workflow
  - cloud delegation awareness
  - skills
  - worktrees and parallelism
- Lesson:
  - how modern Codex workflows actually scale work
- Demo:
  - ask, code, review, and iterate loop in Codex
- Assignment:
  - complete one real repo improvement using Codex with a written review of what it did well and poorly
- Check:
  - workflow judgment check

## Week 6: Claude Code In Practice

- Theme: Terminal-native development with Claude Code
- Outcome: Learners can install, run, and use Claude Code productively inside a project.
- Focus:
  - installation
  - project context
  - command execution
  - memory and configuration
- Lesson:
  - what Claude Code is especially good at
- Demo:
  - terminal-first task execution in Claude Code
- Assignment:
  - complete one repo task in Claude Code and compare the experience with Codex
- Check:
  - compare-and-choose scenarios

## Week 7: Skills, Reusable Playbooks, And Team Standards

- Theme: Turn repeated prompts into reusable assets
- Outcome: Learners can define and use structured skills or standardized playbooks instead of repeating themselves.
- Focus:
  - skills
  - reusable instructions
  - shared conventions
  - team operating standards
- Lesson:
  - what should become a skill vs a prompt vs a checklist
- Demo:
  - create a simple recruiting-oriented skill
- Assignment:
  - write one reusable skill or operating playbook for a recurring workflow
- Check:
  - classify artifacts correctly

## Week 8: MCP And Tool-Connected Workflows

- Theme: Connect AI to real systems
- Outcome: Learners understand what MCP is, why it matters, and where tool-connected workflows become much more useful.
- Focus:
  - MCP basics
  - remote vs local tools
  - risk management
  - prompt injection awareness
- Lesson:
  - MCP in plain English
- Demo:
  - connect or inspect a simple MCP-backed workflow
- Assignment:
  - map one recruiting workflow that should use connected tools instead of copy-paste
- Check:
  - safe vs unsafe MCP usage scenarios

## Week 9: Subagents, Delegation, And Parallel Work

- Theme: Stop thinking one-thread-at-a-time
- Outcome: Learners understand how to break work into independent tasks and delegate effectively.
- Focus:
  - subagents
  - parallel work
  - task scoping
  - context control
- Lesson:
  - what good delegation looks like
- Demo:
  - split a larger problem into separate agent tasks
- Assignment:
  - design a multi-step recruiting automation where different agents handle research, drafting, and review
- Check:
  - delegation quality assessment

## Week 10: Evals, Guardrails, And Reliable Output

- Theme: Build trust through measurement
- Outcome: Learners can define simple evaluation criteria and guardrails for recurring AI workflows.
- Focus:
  - evals
  - reproducibility
  - guardrails
  - review loops
- Lesson:
  - how to know whether an AI workflow is actually good
- Demo:
  - create a simple eval rubric for a sourcing or outreach workflow
- Assignment:
  - build a mini eval for one real team workflow
- Check:
  - identify weak evaluation designs

## Week 11: Recruiting Automations And Micro-Agents

- Theme: Build something small that actually saves time
- Outcome: Learners can design and implement a lightweight recruiting automation or agent with clear boundaries.
- Focus:
  - recruiting-specific implementation
  - automation boundaries
  - review checkpoints
  - value measurement
- Lesson:
  - what a useful recruiting micro-agent actually looks like
- Demo:
  - build a lightweight workflow around sourcing, research, outreach prep, or note synthesis
- Assignment:
  - ship one usable recruiting micro-agent or automation
- Check:
  - value and safety review

## Week 12: Capstone And Operating Rhythm

- Theme: From experimentation to team operating system
- Outcome: Each learner delivers a real AI-enabled workflow and explains how they will keep improving it.
- Focus:
  - capstone delivery
  - measurable gains
  - team adoption
  - next-step plan
- Lesson:
  - what a strong operating habit looks like after the bootcamp
- Demo:
  - capstone examples and critique
- Assignment:
  - present one real build: script, skill, automation, connected workflow, or recruiting agent
- Check:
  - reflection and next-step commitment

## Required Competencies By The End

By the end of this program, every learner should be able to:

- work comfortably in a terminal
- use Codex for investigation, edits, and structured delegation
- use Claude Code from the terminal on a real project
- distinguish chat use from agentic coding use
- review diffs and AI output critically
- create reusable prompts or skills
- understand MCP well enough to use it safely
- design small agents or automations
- define simple eval criteria for recurring AI work
- apply these skills to real recruiting workflows

## What I Would Remove From The Old Version

If we adopt this Version 2, I would reduce or remove:

- generic AI literacy as a major early focus
- recruiter-only prompting as the center of gravity
- a standalone week centered on one internal tool
- broad conceptual treatment of agents before terminal/tool fluency

## What I Would Keep From The Old Version

- self-paced structure
- 2 hours per week
- lesson + demo + assignment + lightweight check
- practical tone
- recruiting-specific implementation examples

## Recommended Next Build Step

Do not immediately rewrite every lesson in the app.

First:

1. approve the new 12-week spine
2. decide which 3 weeks should be authored first
3. rewrite the app curriculum around this new sequence
4. then fill in detailed lessons, demos, assignments, and checks

## My Recommendation

If you want the most modern and valuable version of BEAT, this should become the new spine.

The right first authored modules would be:

1. Week 1: Terminal Confidence Bootcamp
2. Week 2: Working With AI Coding Agents
3. Week 5 or 6: Codex In Practice / Claude Code In Practice

That gets your team out of theory quickly and into the tools that matter most.
