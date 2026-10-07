# Writing rules

The readers are MSc psychology students in India. Many read English as a second language, and many meet each study for the first time through the guide. Write so that a careful reader never has to re-read a sentence to understand it.

## Plain English

- One idea per sentence. Split any sentence that needs a second reading.
- Use the plain word: use, help, many, because, if. Not utilise, facilitate, numerous, due to the fact that.
- Active voice, with the actor named: "The experimenter took the toys away", not "The toys were removed".
- Whole sentences with articles and verbs. No arrows or symbol shorthand in prose.
- Sentence-case headings. Straight quotes. No em dashes anywhere (`npm run check` fails on them). Avoid parenthetical asides; parentheses are fine for citations, page numbers and short glosses.
- No AI vocabulary: delve, crucial, pivotal, tapestry, testament, underscore, showcase, foster, landscape, intricate, interplay, vibrant, garner, enhance, "serves as", "stands as", "not just X but Y". No filler such as "it is important to note". No closing summaries that repeat the page.
- Bold sparingly: lead-in labels for list points and hypothesis names. Not every key word.

## Teaching

- Define each technical term at first use with `<Term>term</Term>` and a plain definition in the same or the next sentence. Repeat the definition briefly if the term reappears on a different page that may be read first.
- Explain before critiquing. Section A describes; criticism belongs in Sections C to F, except where a design fact must be flagged (scorer not blind) or a Hock error corrected.
- Every reported finding says what happened and what it means in ordinary words. Numbers go in charts and tables; the prose explains the pattern.
- Statistical detail (test names, test statistics, p-values, reliability coefficients, effect sizes) goes in `<Note>` side notes, placed after the paragraph they qualify. The paragraph must make sense without the note.
- Name the paper's own words when they matter, with page numbers. Keep quotations short and exact.
- Say what the paper does not report (for example class or ethnicity of participants) rather than guessing.
- Separate evidence from interpretation from invention. Label invented people and scenes "(an invented example)". Never present an invented number as data.
- Use Indian examples and contexts where they genuinely fit, with sources. Do not treat India as one culture.

## Practice questions (`<Try>`)

- The scenario describes a specific situation: who, where, what happened, what was observed.
- The question asks for reasoning, not recall: explain, compare, predict, judge.
- The answer shows the reasoning in full sentences and names the concept it uses. Two short paragraphs is typical.
- No question that can be answered without psychology. No duplicates between pages. The practice page uses new situations only.

## Tables

- The first column names the row. On phones each row becomes a card titled by that first cell, with the other cells labelled by their column headings.
- Never refer to a column by position ("the third column"). Refer to it by its heading.
- Keep cells short. If a cell needs a paragraph, it should be prose instead.

## Source checks

Use `<SourceCheck>` whenever Hock (or another common textbook) differs from the original paper. State what Hock says, what the paper says, and why it matters. List every correction again, briefly, on the sources page with a link back.

## Final pass

Before review, read every page once for these rules alone. Then run `npm run check` for em dashes and curly quotes.
