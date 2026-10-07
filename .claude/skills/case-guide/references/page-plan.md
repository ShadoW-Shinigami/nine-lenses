# Page plan for one case guide

Every case lives in `src/content/cases/<slug>/`, one MDX file per page. The order number drives previous/next links and the contents menu. Keep the slugs and order bands below so every case has the same shape. The Bobo doll guide is the worked example of every page type.

## Frontmatter (all pages)

```yaml
---
title: Full page title, sentence case
nav: Short label for menus (2 to 4 words)
section: A | B | C | D | E | F | X      # X = study tools
order: 1                                # see bands below
summary: One sentence, shown on the hub and in search results.
lens: behavioural                       # lens pages only
stakeholder: parent                     # stakeholder pages only
---
```

## Pages, slugs and order bands

| Order | Slug | Section | What it must do |
|---|---|---|---|
| 1 | `start-here` | A | Background for a reader with no psychology: who did it, what the field believed then, the puzzle the study answers, key terms defined in place. Ends with one Try. |
| 2 | `question` | A | Research question in one blockquote; each hypothesis in plain words with the authors' stated reason; the theory; a variables table (IV, DV, participant variables). Source check if Hock misstates a hypothesis. |
| 3 | `method` | A | Participants (exact numbers, ages, what the paper does not say), how groups were formed, an allocation diagram if useful, a Sequence of stages, one illustrated Figure per stage, a measures table, scoring and reliability in a Note. |
| 4 | `findings` | A | "How to read the numbers" first. One section per finding, plain words first, charts from the paper's tables, statistics in Notes, a hypothesis results table, Source checks for every Hock error. |
| 5 | `importance` | A | Contribution, theory (Timeline), practice, then what later research did to the claims, including disputes. Include an Indian example where one exists. |
| 6 | `paradigm` | B | Main perspective with a reasoned answer and an evidence table; the five assumptions (human nature, knowledge, truth, change, behaviour), each tied to specific features of the study. |
| 10 | `lenses` | C | Hub: how the pages work, `<SubpageGrid caseId="<slug>" parent="lenses" />`, a nine-row comparison table, "how the lenses connect", one Try about choosing lenses. |
| 11-19 | `lenses/<lens>` | C | All nine, in outline order: behavioural, cognitive, psychoanalytic, biological, humanistic, social, cultural, critical, decolonial. |
| 20 | `india` | D | The five outline questions as headings: Western assumptions, missing experiences, would it hold in India, cultural factors (table), supporting and challenging examples. Indian data with sources. One invented illustration if it helps, tagged invented. |
| 21 | `power` | D | Who is speaking, who is studied, whose voices are absent (table), why it matters for the claims. |
| 30 | `design` | E | The design in one Callout sentence, then why it is that design, part by part; a "what the design can and cannot show" table. |
| 31 | `strengths-limitations` | E | At least five strengths and five limitations, each with its reason and evidence; a Note on how they connect. |
| 40 | `stakeholders` | F | Hub: SubpageGrid, a seven-row comparison table, advice on choosing two that disagree, one Try about a conflict between stakeholders. |
| 41-47 | `stakeholders/<role>` | F | All seven: participant, parent, teacher, clinician, researcher, policymaker, community-leader. |
| 50 | `practice` | X | Six to ten new situations not used elsewhere, covering several sections. |
| 51 | `sources` | X | How the guide was checked, the list of Hock corrections with links, full references grouped (original, follow-ups, later research, Indian data and policy). |

Section G is never written. The hub and contents menu already tell students it is theirs.

## Lens page template

Headings, in this order:

1. **The lens in brief.** What the school believes, two or three key terms defined, named founders. Say how close the school is to the study's own perspective.
2. **How this lens reads the study.** Three to five bolded points, each tied to a specific detail of the procedure or results. Not generic statements about the school.
3. **What this lens values in the study.**
4. **What it would question.** Bullets.
5. **Evidence from this tradition.** Real studies with authors and years, described accurately, including evidence against the lens where it exists.
6. **A study this lens would design.** Numbered, concrete steps and the prediction.
7. **Try.** A specific situation that only this lens explains well. Label invented people as invented.

## Stakeholder page template

1. **What you care about** (second person, concrete).
2. **What worries you about the original study** (bullets, each tied to a fact from the paper).
3. **Your redesign** (numbered, concrete changes).
4. **Why** (evidence, ethics codes, Indian context where relevant).
5. **What your redesign gives up** (honest trade-offs).

## Case data (`src/data/cases.json`)

`title`, `question` (the study's question in plain words), `year`, `authors`, `citation` (APA), `doi`, `hock` (reading number), `theme`, `order`, `status` (`draft` until published, then `ready`), `image` (hero, a Room/scene reconstruction), `imageAlt`, `intro` (three short paragraphs: what happened, what was found, why it is a good case), `facts` (Authors, Published, Where, Participants, Design, In Hock).
