# Nine Lenses

Case-study guides for the MSc course *Paradigms and Perspectives in Psychology*. Each guide explains a classic study from the beginning, then reads it through nine perspectives: behavioural, cognitive, psychoanalytic, biological, humanistic, social, cultural, critical and decolonial.

Live site: https://shadow-shinigami.github.io/nine-lenses/

## Development

```
npm install
npm run build
npm run check
npx astro preview
```

Content lives in `src/content/cases/<case>/`, one MDX file per page. Case-level facts are in `src/data/cases.json`. Pushing to `main` deploys through GitHub Actions.

The guides are study aids. They are not a substitute for reading the original papers, which each guide lists on its sources page.
