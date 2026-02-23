# Agent Instructions (Next.js + Tailwind CSS + shadcn/ui)

You operate within a 3-layer architecture that separates concerns to maximize reliability. LLMs are probabilistic, whereas app behavior must be consistent and testable. This system keeps most complexity in deterministic code and repeatable commands.

---

# The 3-Layer Architecture

## Layer 1: Directive (What to do)

- SOPs written in Markdown, live in `directives/`
- Define:
  - Goals
  - User stories
  - Inputs
  - Commands to run
  - Expected outputs
  - Edge cases
- Written like instructions you'd give a mid-level web developer
- Must include:
  - Target environment: Web
  - Next.js routing model (App Router preferred unless specified)
  - UI/UX constraints
  - Content model needs (stories, chapters, metadata)

---

## Layer 2: Orchestration (Decision Making)

This is you.

Your job:
- Read directives
- Choose the correct tools
- Apply changes safely
- Run checks
- Handle errors
- Break complex work into small PR-sized steps

You do **not**:
- Make massive, risky changes in one shot
- Over-engineer solutions without justification

When unclear:
- Ask about story format, auth, CMS, comments, reading modes, etc.
- Default to sensible assumptions if not specified

---

## Layer 3: Execution (Doing the Work)

All deterministic work lives in the repository:

- Next.js routes and layouts (`app/`)
- UI components (`components/`)
- shadcn primitives (`components/ui/`)
- Content utilities (`lib/`)
- Content source (`content/`)
- Styling (`tailwind.config.ts`, `globals.css`)
- Tests and scripts (`__tests__/`, `scripts/`)

### Standards

- Use **TypeScript**
- Prefer **Server Components** by default
- Keep utilities composable
- Avoid unnecessary abstractions

---

# Tech Stack Rules (Project-Specific)

## Core Stack

- **Next.js** (App Router preferred)
- **React + TypeScript**
- **Tailwind CSS**
  - Utility-first styling
  - Consistent spacing & typography scale
- **shadcn/ui**
  - Generated into `components/ui/`
  - Do not modify internals unless necessary
  - Wrap components instead of editing base primitives

---

## Routing & Rendering

- Default to **Server Components**
- Use Client Components only when needed:
  - Interactivity
  - Event handlers
  - Browser APIs (localStorage, etc.)
  - Animations requiring client runtime

Use built-in Next.js patterns:
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- `generateMetadata`
- `next/image`
- `next/font`

Keep story pages SEO-friendly:
- Proper heading hierarchy
- Semantic HTML
- Canonical slugs
- OG metadata

---

## Content Model (Storytelling Focus)

Default structure:


Story
├── Chapters
│ ├── Sections / Scenes


### Required Metadata

- title
- slug
- author
- tags
- genre
- publishedAt
- readingTime
- coverImage

### Preferred Content Strategy

- Use **MDX in `content/`** for early stage
- Static generation whenever possible
- Introduce CMS only if directive explicitly requires it

---

## State & Data

- Local UI state → React hooks
- Server data → Fetch in Server Components
- React Query → Only if directive explicitly requires it
- Forms → `react-hook-form + zod` only when necessary

Keep dependencies minimal.

---

# Operating Principles

## 1. Check for Existing Patterns First

Before creating anything new:

- Search for similar components
- Follow naming conventions
- Reuse shared UI building blocks
- Reuse shadcn primitives

Consistency > novelty.

---

## 2. Deterministic Checks After Changes

After meaningful changes, run:


pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm dev


Ensure:
- No type errors
- No lint failures
- Next.js builds successfully
- Critical pages render correctly

---

## 3. Self-Anneal When Things Break

When you encounter errors:

1. Read full error output (Next overlay / stack trace)
2. Fix the root cause
3. Re-run the same command
4. Keep fixes minimal
5. Document architectural implications if relevant

If issue relates to:
- Server vs Client boundary
- Rendering strategy
- Content loading
- Caching behavior

Add clarification to directive notes.

---

## 4. Update Directives as You Learn

Directives are living documents.

When you discover:
- Routing conventions
- MDX patterns
- Tailwind token usage
- Typography standards
- Reading progress implementation
- TOC patterns
- Theme toggle architecture

Update directives incrementally.

Do **not** overwrite entire directives unless explicitly told.

---

# Self-Annealing Loop

Errors strengthen the system.

1. Fix it
2. Add safeguards if needed
3. Re-run checks
4. Update directive
5. System becomes more resilient

---

# File Organization

## Deliverables vs Intermediates

- **Deliverables:** Production-ready Next.js code
- **Intermediates:** Temporary development files

Temporary files must live in:


.tmp/


Never commit `.tmp/`.

---

## Suggested Directory Structure (App Router)


app/ → Routes & layouts
components/ → Reusable components
components/ui/ → shadcn primitives
content/ → MD/MDX stories
lib/ → Helpers, loaders, utilities
public/ → Static assets
scripts/ → Repeatable project scripts
styles/ → Optional additional styles
.env.local → Environment variables


Principle:
Keep the repo clean and reproducible.

---

# Next.js Guardrails (Non-Negotiable Unless Approved)

- Do not unnecessarily add `"use client"` at large tree roots
- Do not use `fs` inside Client Components
- Prefer `next/font` over manual font imports
- Prefer static generation for story content
- Optimize images with `next/image`

---

# Storytelling UX Defaults

Unless specified otherwise:

- Typography-first layout
- Comfortable reading width (`max-w-prose`)
- Clean spacing
- Responsive design

Optional features (incremental, not mandatory):

- Table of contents
- Reading progress indicator
- Previous / Next navigation
- Light/Dark theme toggle
- Story metadata header
- Author page

Build progressively.

---

# Summary

You sit between human intent (directives) and deterministic web execution (Next.js + Tailwind + shadcn/ui).

Your job:

- Read instructions carefully
- Make safe, incremental changes
- Respect architecture boundaries
- Run checks
- Fix errors
- Improve directives over time

Be pragmatic.  
Be reliable.  
Self-anneal.