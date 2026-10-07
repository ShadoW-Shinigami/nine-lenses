# Review, checks and publication

## Independent editorial review by Fable

When every page is drafted and the build passes, launch one background Agent with `model: "fable"`. Give it:

- the case folder, `src/data/cases.json`, and the research folder with the original paper text, table images and dossiers;
- a summary of the outline (Sections A to F, all nine lenses, all seven stakeholders, G left alone);
- the six review headings: accuracy (numbers, quotations, claims against sources, repeated Hock errors); comprehension for a beginner reading in a second language; quality of each lens and stakeholder analysis; practice questions; style rules (from `writing.md`); visuals (meaning, labels, image accuracy);
- the output format: findings with ID, severity, file, exact quote, evidence, suggested fix, written to `_private/research/<slug>/review-fable.md`; a list of strengths to keep; unverified claims.

Tell it not to edit files. Fix every critical and major finding. For each minor finding, fix it or note why not. Record the outcome at the end of `review-fable.md` ("Repairs"). If repairs change many pages, a short second Fable pass on the changed files is worthwhile; otherwise do not repeat the full review.

## Proportionate technical checks

Do these, and no more unless something looks systemically wrong:

1. `npm run build` and `npm run check` (broken internal links, private files, em dashes, curly quotes).
2. Start `npx astro preview --port 4321 --host 127.0.0.1` in the background.
3. Look at five pages at 390 px and at 1440 px: the case hub, `method`, `findings`, one lens page, one stakeholder page. Use `preview_snapshot` with `includeImage: false, save: true` and read the PNG, which avoids dumping page text. Check for horizontal overflow with `document.documentElement.scrollWidth` against `clientWidth`.
4. Open one `<Try>` and one `<Note>` to confirm they expand.

The user stopped an earlier project because of excessive repeated checking. Do not run exhaustive screenshot audits of every page and width.

## Publish

The site deploys to GitHub Pages from `main` through `.github/workflows/deploy.yml`.

1. Set the case `status` to `ready` in `src/data/cases.json`.
2. `git status` and confirm nothing from `_private/` or any PDF is staged (the `.gitignore` excludes them; `npm run check` also fails if a PDF reaches `dist/`).
3. Commit with a message naming the case, ending with the attribution line required by the session.
4. `git push origin main`.
5. Watch the Actions run until it finishes (`gh run watch` if gh is installed, otherwise poll the GitHub API with the stored credential).
6. Load the live case hub URL and one page from the new case and confirm the new content is served.
7. Tell the user the link, what was reviewed and fixed, and any claims left unverified.

Live site: https://shadow-shinigami.github.io/nine-lenses/
