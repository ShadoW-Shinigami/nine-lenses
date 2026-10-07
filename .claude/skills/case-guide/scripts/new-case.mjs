// Scaffold the standard set of pages for a new case guide.
// Usage: node .claude/skills/case-guide/scripts/new-case.mjs <slug>
// Creates src/content/cases/<slug>/ with every page from references/page-plan.md,
// each with frontmatter and the required headings, and adds a draft entry to src/data/cases.json.
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: node new-case.mjs <slug>   (lower-case letters, digits and hyphens)');
  process.exit(1);
}
const dir = join('src', 'content', 'cases', slug);
if (existsSync(dir)) {
  console.error(`${dir} already exists.`);
  process.exit(1);
}

const lenses = ['behavioural', 'cognitive', 'psychoanalytic', 'biological', 'humanistic', 'social', 'cultural', 'critical', 'decolonial'];
const lensNames = ['Behavioural', 'Cognitive', 'Psychoanalytic', 'Biological', 'Humanistic', 'Social', 'Cultural', 'Critical', 'Decolonial'];
const roles = ['participant', 'parent', 'teacher', 'clinician', 'researcher', 'policymaker', 'community-leader'];
const roleNames = ['Participant', 'Parent', 'Teacher', 'Clinician', 'Researcher', 'Policymaker', 'Community leader'];

const page = (fm, body) => `---\n${Object.entries(fm).map(([k, v]) => `${k}: ${v}`).join('\n')}\n---\n\n${body.trim()}\n`;
const todo = (headings) => headings.map((h) => `## ${h}\n\nTODO\n`).join('\n');

const lensHeadings = ['The lens in brief', 'How this lens reads the study', 'What this lens values in the study', 'What it would question', 'Evidence from this tradition', 'A study this lens would design'];
const roleHeadings = ['What you care about', 'What worries you about the original study', 'Your redesign', 'Why', 'What your redesign gives up'];

const pages = [
  ['start-here', { title: 'Before the study', nav: 'Before the study', section: 'A', order: 1 }, todo(['The people who did it', 'What psychologists believed at the time', 'The puzzle this study addresses'])],
  ['question', { title: 'The question, the predictions and the theory', nav: 'Question and hypotheses', section: 'A', order: 2 }, todo(['The research question', 'The hypotheses', 'The theory behind the predictions', 'The variables'])],
  ['method', { title: 'Who took part and what happened', nav: 'Participants and method', section: 'A', order: 3 }, todo(['The participants', 'How the groups were formed', 'The procedure', 'What was measured'])],
  ['findings', { title: 'What happened', nav: 'Findings', section: 'A', order: 4 }, todo(['How to read the numbers', 'Finding 1', 'The hypotheses: what happened'])],
  ['importance', { title: 'Why the study matters', nav: 'Why it matters', section: 'A', order: 5 }, todo(['Contribution to psychology', 'Influence on theory', 'Influence on practice', 'What later research did to the claims'])],
  ['paradigm', { title: 'Which perspective, and what it assumes', nav: 'Perspective and assumptions', section: 'B', order: 6 }, todo(['Which perspective does the study mainly represent?', 'What the research assumes'])],
  ['lenses', { title: 'One study, nine lenses', nav: 'The nine lenses', section: 'C', order: 10 }, `<SubpageGrid caseId="${slug}" parent="lenses" />\n\n${todo(['The nine readings side by side', 'How the lenses connect'])}`],
  ...lenses.map((l, i) => [`lenses/${l}`, { title: `The ${l} lens`, nav: lensNames[i], section: 'C', order: 11 + i, lens: l }, todo(lensHeadings)]),
  ['india', { title: 'Would the findings hold in India?', nav: 'A Global South and Indian reading', section: 'D', order: 20 }, todo(['What assumptions seem Western?', 'What experiences may be missing?', 'Would the findings hold in India?', 'What cultural factors matter?', 'What examples support or challenge the findings?'])],
  ['power', { title: 'Who speaks, who is studied, who is missing', nav: 'Power and representation', section: 'D', order: 21 }, todo(['Who is speaking?', 'Who is being studied?', 'Whose voices are absent?', "Why this matters for the study's claims"])],
  ['design', { title: 'The research design', nav: 'Research design', section: 'E', order: 30 }, todo(['The design in one sentence', 'What the design can and cannot show'])],
  ['strengths-limitations', { title: 'Strengths and limitations', nav: 'Strengths and limitations', section: 'E', order: 31 }, todo(['Strengths', 'Limitations'])],
  ['stakeholders', { title: 'Seven people redesign the study', nav: 'Stakeholder redesign', section: 'F', order: 40 }, `<SubpageGrid caseId="${slug}" parent="stakeholders" />\n\n${todo(['The seven redesigns side by side', 'Choosing your two'])}`],
  ...roles.map((r, i) => [`stakeholders/${r}`, { title: `If you were a ${roleNames[i].toLowerCase()}`, nav: roleNames[i], section: 'F', order: 41 + i, stakeholder: r }, todo(roleHeadings)]),
  ['practice', { title: 'Practice with real situations', nav: 'Practice questions', section: 'X', order: 50 }, 'TODO'],
  ['sources', { title: 'Sources and source checks', nav: 'Sources', section: 'X', order: 51 }, todo(['How this guide was checked', "Corrections to Hock's account", 'The original study', 'Later research'])],
];

for (const [path, fm, body] of pages) {
  const file = join(dir, `${path}.mdx`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page({ ...fm, summary: 'TODO one-sentence summary.' }, body));
}

const casesFile = join('src', 'data', 'cases.json');
const cases = JSON.parse(readFileSync(casesFile, 'utf8'));
cases.push({
  id: slug,
  title: 'TODO',
  question: 'TODO',
  year: 0,
  authors: 'TODO',
  citation: 'TODO',
  doi: '',
  hock: 'Reading TODO',
  theme: 'TODO',
  order: cases.length + 1,
  status: 'draft',
  image: `images/cases/${slug}/hero.webp`,
  imageAlt: 'TODO',
  intro: ['TODO'],
  facts: [{ label: 'Authors', value: 'TODO' }],
});
writeFileSync(casesFile, `${JSON.stringify(cases, null, 2)}\n`);
console.log(`Created ${pages.length} pages in ${dir} and a draft entry in ${casesFile}.`);
