---
name: design-first-ui
description: Use when building a storytelling website with Next.js (App Router), Tailwind CSS, and shadcn/ui. This skill enforces a strict focus on avoiding generic AI-looking interfaces, ensuring UI feels bespoke, editorial, and intentionally designed. Do not use for generic SaaS apps or basic admin dashboards.
---

# Design-First UI Skill

## Skill Objective
Generate UI that feels bespoke, editorial, and intentionally designed—not template-like, not "default shadcn," and not generic SaaS styling.

The skill must:
- Use shadcn/ui as a base, but customize it (tokens, variants, composition).
- Create custom components when shadcn doesn't provide a needed pattern.
- Establish a unique typography system (no default/generic fonts).
- Apply design thinking steps before implementing UI.
- Include motion guidelines (subtle, purposeful, consistent).
- Enforce accessibility and performance.

## Non-Negotiables (Anti-Generic Rules)

### 1) No "stock shadcn look"
- Do not ship default component styling unchanged.
- Override component variants and tokens to match the site's visual language.
- Prefer composition (wrappers) over editing vendor primitives directly unless required.

### 2) No generic typography
- Do not use default system fonts or "random modern sans" choices.
- Pick an intentional font pairing (display + body), e.g.:
  - Literary/editorial serif for body + modern grotesk for UI, OR the reverse.
- Use `next/font` and define a typographic scale with:
  - font sizes, line heights, tracking, paragraph spacing, and heading rhythm.
- Ensure long-form readability: measure, leading, hyphenation strategy (optional), emphasis styles.

### 3) No generic layout blocks
- Avoid "hero + 3 cards + CTA" patterns unless the directive explicitly asks.
- Prefer editorial layout logic:
  - rhythm, grid, whitespace, hierarchy, content density choices.

### 4) No "AI filler motion"
- Motion must communicate structure and state, not decoration.
- Animations must be subtle, short, and consistent.

## Design Thinking Process (Required Output Before Code)
Before writing UI code, you must output a short design plan containing:

### A) Intent & Differentiators
- One sentence: what this page/component is trying to *feel* like.
- 3 differentiators that make it distinct from generic web UI
  - Example: "typography-led hierarchy," "quiet surfaces," "narrative pacing via spacing."

### B) Visual Language Decisions
- Type pairing + roles (display/body/ui)
- Color strategy (restrained palette + accent rules)
- Spacing rhythm (base spacing unit + section cadence)
- Shape language (radius, borders, line weights)
- Texture rules (when to use dividers, noise, subtle gradients—if at all)

### C) Layout System
- Grid definition (columns, gaps, breakpoints)
- Reading width rules (max width for prose, margins)
- Component density rules (how compact vs airy)

### D) Motion Rules
- 2–3 animation patterns only (e.g. fade+translate on enter, hover micro-shift)
- Duration + easing guidelines
- Respect reduced motion

### E) UX/A11y Checks
- Keyboard navigation
- Focus styles that match brand
- Contrast targets
- Tap targets and responsive behavior

Only after this design plan is written should implementation begin.

## Implementation Rules (Next.js + Tailwind + shadcn)
- Next.js App Router + TypeScript.
- Tailwind tokens must be customized (use `src/app/globals.css` for color updates and theme variables):
  - Define design tokens in CSS variables (color, radius, shadow, border) directly in `src/app/globals.css`.
  - Adjust shadcn theme variables in `globals.css` so components inherit the bespoke brand system.
- Use shadcn/ui components as primitives:
  - Button, Dialog, Dropdown, Tabs, etc.
- Build custom components when needed:
  - Example: StoryCard, ChapterTOC, ReadingProgress, PullQuote, AsideNote, InlineCallout, FootnotePopover.
- Create a component API that feels like a design system:
  - Variants and sizes, consistent naming, no one-off styling.

## Typography Requirements (Editorial)
- Use `next/font` with selected fonts.
- Define a `prose` system (Tailwind Typography plugin optional, but customize it heavily).
- Establish:
  - H1/H2/H3 scale
  - paragraph spacing
  - list styles
  - blockquote / pullquote styling
  - inline emphasis (strong/em) and link styles
- Add "reading comfort" defaults:
  - max width for prose
  - line height
  - paragraph rhythm
  - optional drop caps only if tasteful and consistent

## Motion Guidelines (Subtle + Purposeful)
- Use either:
  - CSS transitions only (preferred), or
  - Framer Motion only if directive requests complex motion.
- Default motion patterns:
  1) Page enter: opacity 0→1 + translateY 6–12px
  2) Hover: translateY -1–2px or underline reveal
  3) Expand/collapse: height + opacity with reduced motion support
- Use consistent timing:
  - 150–250ms for micro interactions
  - 250–400ms for page/section transitions
- Always support `prefers-reduced-motion`.

## Deliverables from the Skill
When invoked, you must produce in order:
1) The design plan (Intent → Visual language → Layout → Motion → A11y).
2) A component map (what is shadcn, what is custom).
3) Token + typography decisions (fonts, scale, colors).
4) Implementation notes (file structure, where tokens live).
5) Then code in small PR-sized steps.

## "Quality Gate" Checklist (Must Pass)
- Does this look like a template? If yes, revise.
- Are fonts intentional and implemented via `next/font`? If no, fix.
- Are shadcn components visibly customized? If no, fix tokens/variants/wrappers.
- Does spacing feel editorial and paced? If no, adjust rhythm/grid.
- Is motion subtle and consistent? If no, reduce and standardize.
- Is it accessible (focus, contrast, keyboard)? If no, correct.

## Output Style Constraints
- Be decisive. Do not provide five design directions.
- Provide one strong direction with optional small variations.
- Avoid buzzwords. Explain choices with clear rationale.
- Keep the design "quiet but distinctive."
