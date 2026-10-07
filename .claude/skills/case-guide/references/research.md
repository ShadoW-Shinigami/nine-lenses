# Research plan

Hock orients; original papers decide. Launch three background research agents at the start of a case, in one message, with `run_in_background: true`. Replace `<...>` placeholders. Each writes its dossier to `_private/research/<slug>/`.

The session has a shared web-search allowance (about 200 searches). Agents that spawn their own sub-agents use it up fast. Ask agents not to spawn sub-agents, and tell them to fetch known URLs directly (WebFetch, or `curl` into `_private/research/<slug>/` for full text) rather than searching repeatedly. If the allowance runs out, finish verification yourself with direct fetches.

## Before launching

1. `grep -n -i "<keyword>" _private/sources/hock.txt` and copy the chapter to `_private/research/<slug>/hock-chapter.txt`.
2. Fetch the original paper yourself if a free full text exists (Classics in the History of Psychology at psychclassics.yorku.ca has many; also PubMed Central, author pages, ERIC). Save the text and any table images into the research folder. Read the tables: they hold the numbers.

## R1: original paper and direct follow-ups

> You are a research assistant verifying facts for a study guide for MSc psychology students on <full APA citation>. Accuracy matters more than speed. Do not spawn sub-agents. Use WebFetch or curl; search sparingly. Hock's account is at `_private/research/<slug>/hock-chapter.txt` (orientation only; it contains errors). The original paper text is at `<path or URL>`.
> 1. Record precisely: participants (numbers, ages, setting, what is not reported), group formation, procedure step by step with timings, materials, measures, who scored and whether blind, reliability, statistical tests and why, every result with test statistics, all tables in full, quoted participant remarks, the discussion's arguments and the theorists it argues with.
> 2. Compare Hock with the original line by line and list every error, swap, misquote, misleading simplification and omission.
> 3. Verify the direct follow-up studies <list>, giving design and actual results, and state access level.
> 4. Collect documented criticisms with sources (method, ecological validity, demand characteristics, ethics by current BPS/APA standards, sample). Trace famous anecdotes to their origin or mark them unverified.
> 5. Biography of the authors relevant to "who is speaking".
> Write `R1-original-and-followups.md`. Every claim gets a full reference, URL and access level (full text / abstract / secondary / bibliographic only). Mark unverified items. Never invent references. Return a summary under 600 words.

## R2: impact and later research

> ...on <citation>. Research and verify: (1) theory that grew from the study, with exact references; (2) influence on practice (therapy, education, policy, media), including any Indian applications; (3) the later evidence on the study's main claim, including replications, meta-analyses, critiques, reversals, and current professional statements; (4) how textbooks describe the study and whether they get it right. Write `R2-impact-and-later-research.md` with the same citation rules. Flag corrections to popular accounts.

## R3: lenses, culture and India

> ...on <citation>, for a course that analyses each study through nine perspectives (behavioural, cognitive, psychoanalytic, biological, humanistic, social, cultural, critical, decolonial) and writes an Indian / Global South reflection and a power-and-representation reflection. For each perspective, find verified, citable material on how that school would interpret, criticise and redesign this kind of study (named scholars, concepts, studies, quotations with pages). For India: empirical evidence relevant to the study's claim in India or South Asia, official data (NFHS, MWCD, NCPCR, Census), cultural practices relevant to the study, Indian replications if any, and Indian scholarship (indigenous and decolonial psychology). Report honestly where evidence is thin. Write `R3-lenses-culture-india.md` with the same citation rules.

## While agents run

Plan pages, draft the background pages from well-established knowledge, and generate illustrations whose details you have already confirmed from the original paper. Do not write numbers into pages until R1 or your own reading of the paper confirms them.

## After agents report

Read each dossier's summary and correction list. Grep the dossiers for details you need rather than reading them whole. Fix any draft text the dossiers contradict, and add a SourceCheck for each Hock error that a student would otherwise copy.
