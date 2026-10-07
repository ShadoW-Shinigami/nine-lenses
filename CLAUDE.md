# Nine Lenses: case guides for Paradigms and Perspectives in Psychology

Astro static site of MSc case-study guides, one guide per classic study, following the school's Reflective Learning Journey outline (Sections A to F; G is left to students). Published to GitHub Pages from `main`.

- To add or rework a case, use the `case-guide` skill in `.claude/skills/case-guide/`. The Bobo doll guide (`src/content/cases/bobo-doll/`) is the benchmark for structure, depth and tone.
- Writing rules: `.claude/skills/case-guide/references/writing.md`. Plain English for second-language readers, no em dashes, straight quotes, sentence-case headings, terms defined at first use, statistics in `<Note>` side notes.
- Private material lives in `_private/` (gitignored): supplied books, source PDFs, research dossiers, image-generation working files. Never move it into `src/` or `public/`.
- Commands: `npm run build`, `npm run check` (links, private files, punctuation, TODOs in published cases), `npx astro preview --port 4321 --host 127.0.0.1`.
- Checks should be proportionate: build, check script, and a look at a handful of pages at 390 px and 1440 px. The user dislikes exhaustive repeated QA.
- Publication of finished, reviewed cases is pre-authorised.
