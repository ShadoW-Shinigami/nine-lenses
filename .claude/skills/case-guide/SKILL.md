---
name: case-guide
description: Build, review and publish one case-study guide for the Nine Lenses site (MSc Paradigms and Perspectives in Psychology). Use when the user names a study to add (for example a chapter from Hock's Forty Studies that Changed Psychology), asks to redo or improve a case guide, or asks to continue the case series.
---

# Case guide

One run of this skill produces one complete, reviewed, published case guide on the Nine Lenses site. Do one case at a time. The Bobo doll guide (`src/content/cases/bobo-doll/`) is the benchmark: match its structure, depth, tone and component use unless the user has changed the standard since.

Publication is pre-authorised for this project. Do not ask for approval before committing or deploying a finished, reviewed case. Do ask before deleting or renaming a published case.

## Inputs and private material

- The school's outline: `_private/sources/Journal Outline.pdf` (Sections A to G).
- Hock's book: `_private/sources/Hock - Forty Studies that Changed Psychology (Global Ed).pdf`, with extracted text in `_private/sources/hock.txt`. Find the chapter with `grep -n` and copy it to `_private/research/<slug>/hock-chapter.txt`.
- Everything under `_private/` is gitignored. Never copy book text, PDFs or long quotations into `src/` or `public/`. Short quotations from original papers, with page numbers, are fine.

## Workflow

1. **Orient with Hock.** Read the chapter. List the claims the guide will rely on: participants, design, procedure, numbers, follow-up studies, applications. Hock is for orientation only. It contains errors (the Bobo chapter swaps the control-group sexes, calls sums "averages" and misreports the 1963 film study). Treat every Hock number as unverified.
2. **Research in parallel.** Launch three background research agents with the prompts in [references/research.md](references/research.md): R1 original paper and direct follow-ups, R2 impact and later research, R3 lenses, culture and India. Each writes a dossier to `_private/research/<slug>/`. While they run, plan pages and visuals, and generate illustrations whose content does not depend on unverified details.
3. **Plan the pages.** Use the page plan in [references/page-plan.md](references/page-plan.md). Scaffold with `node .claude/skills/case-guide/scripts/new-case.mjs <slug>` and fill `src/data/cases.json`.
4. **Write.** Follow [references/writing.md](references/writing.md) for every page, caption, note and question. Teach a reader with no prior knowledge first. Give the nine lenses and seven stakeholders full, specific treatment. Leave Section G to the student.
5. **Visuals.** Follow [references/visuals.md](references/visuals.md). Generate scene illustrations with Codex imagegen (`scripts/imagegen.sh`) and inspect every image for accuracy before use. Draw results, designs and relationships in code (Astro SVG components) from verified numbers.
6. **Independent review by Fable.** Spawn an Agent with `model: "fable"` using the review prompt in [references/review-and-publish.md](references/review-and-publish.md). It checks accuracy against the dossiers and original sources, beginner comprehension, and the quality of all lens and stakeholder analyses. Fix every confirmed finding. Record what changed in `_private/research/<slug>/review.md`.
7. **Proportionate checks.** `npm run build`, `npm run check`, then look at the hub, one Section A page, one lens page, the findings page and one stakeholder page at 390 px and 1280 px. Fix what is broken. Do not run exhaustive screenshot audits unless something suggests a systemic problem.
8. **Commit and publish.** Set the case `status` to `ready`, commit on `main`, push. GitHub Actions deploys to GitHub Pages. Confirm the live URL loads the new case, then tell the user the link and a short account of what was reviewed and fixed.

## Standards that do not change between cases

- Sections A to F of the outline are covered, in that order. Section C covers all nine lenses. Section F covers all seven stakeholders.
- A reader with no psychology background can follow Section A without outside help.
- Every number in the guide comes from the original paper or a named later source, never from Hock alone.
- Statistical detail goes in `<Note>` side notes beside the plain explanation.
- Practice questions describe specific situations. Answers explain the reasoning.
- Invented examples are labelled as invented, in the text and on images (`tag="invented"`).
- Tables make sense when stacked on a phone: the first column names the row, and no prose refers to "the left column" or "the third column".
