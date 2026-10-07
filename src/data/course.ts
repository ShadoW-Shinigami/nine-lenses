// Shared course structure. These follow the school's Reflective Learning
// Journey outline (Sections A to G) and the nine perspectives it lists.

export type SectionId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'X';

export const SECTIONS: Record<SectionId, { title: string; short: string; outline: string }> = {
  A: { title: 'Understanding the study', short: 'The study', outline: 'Citation, the study (summary, participants, method, findings) and its importance.' },
  B: { title: 'Paradigm analysis', short: 'Paradigm', outline: 'The main perspective and the assumptions behind the research.' },
  C: { title: 'Looking through other lenses', short: 'Other lenses', outline: 'How each of the nine perspectives would read the study.' },
  D: { title: 'Cultural and decolonial reflection', short: 'Culture and power', outline: 'A Global South and Indian reading, and questions of power and representation.' },
  E: { title: 'Research design critique', short: 'Design critique', outline: 'The research design, its strengths and its limitations.' },
  F: { title: 'Stakeholder redesign', short: 'Redesign', outline: 'How different people would redesign the study, and why.' },
  G: { title: 'Learning journey reflection', short: 'Your reflection', outline: 'What challenged you, what changed, what questions remain. You write this part.' },
  X: { title: 'Study tools', short: 'Tools', outline: 'Practice questions and sources.' },
};

export type LensId =
  | 'behavioural' | 'cognitive' | 'psychoanalytic' | 'biological' | 'humanistic'
  | 'social' | 'cultural' | 'critical' | 'decolonial';

export interface Lens {
  id: LensId;
  name: string;
  color: string;   // text-safe colour on white
  tint: string;    // light background tint
  question: string; // the question this school always asks
  focus: string;    // one-sentence core idea for beginners
}

export const LENSES: Lens[] = [
  { id: 'behavioural', name: 'Behavioural', color: '#1F5FA8', tint: '#E3EDF8',
    question: 'What in the environment produced this behaviour?',
    focus: 'Behaviour is learned from the environment, through rewards, punishments and associations. Study what people do, not what they think.' },
  { id: 'cognitive', name: 'Cognitive', color: '#5B44A6', tint: '#ECE8F7',
    question: 'What is happening in the mind between input and action?',
    focus: 'People take in information, store it, interpret it and use it. Mental processes such as attention, memory and expectation explain behaviour.' },
  { id: 'psychoanalytic', name: 'Psychoanalytic', color: '#9A2F6C', tint: '#F6E6EF',
    question: 'What unconscious wishes and conflicts lie underneath?',
    focus: 'Much of mental life is unconscious. Early relationships, inner conflicts and defences shape feelings and actions.' },
  { id: 'biological', name: 'Biological', color: '#23784B', tint: '#E2F1E8',
    question: 'What do the brain, hormones and genes contribute?',
    focus: 'Behaviour depends on the body: brain systems, hormones, genes and evolutionary history.' },
  { id: 'humanistic', name: 'Humanistic', color: '#94500C', tint: '#F8EBDD',
    question: 'How does the person experience this, and what helps them grow?',
    focus: 'People are whole persons with free will and a drive to grow. Their own experience and meaning matter most.' },
  { id: 'social', name: 'Social', color: '#B23A34', tint: '#F7E4E2',
    question: 'How do other people and the situation shape what we do?',
    focus: 'Behaviour depends strongly on other people: their presence, their example, group norms and roles.' },
  { id: 'cultural', name: 'Cultural', color: '#7A5E00', tint: '#F5EED6',
    question: 'Would this look the same in another culture?',
    focus: 'Culture shapes what people learn, value and consider normal. Findings from one culture may not travel.' },
  { id: 'critical', name: 'Critical', color: '#46525F', tint: '#E7EAEE',
    question: 'Whose interests does this knowledge serve?',
    focus: 'Psychology is shaped by power and society. It can hide social problems by treating them as problems inside individuals.' },
  { id: 'decolonial', name: 'Decolonial', color: '#0B7675', tint: '#DDF0EF',
    question: 'Whose knowledge counts, and who decided?',
    focus: 'Mainstream psychology grew from Western, colonial power. Other knowledge systems, including Indian ones, deserve equal standing.' },
];

export const lensById = (id: string) => LENSES.find((l) => l.id === id);

// Course-wide primer facts for the lens overview page.
export const LENS_PRIMER: Record<LensId, { people: string; methods: string; watch: string }> = {
  behavioural: {
    people: 'Ivan Pavlov, John B. Watson, B. F. Skinner',
    methods: 'Controlled experiments that change the environment and count observable behaviour, often with animals.',
    watch: 'It can ignore thoughts and feelings, because they cannot be observed directly.',
  },
  cognitive: {
    people: 'Ulric Neisser, George Miller, Aaron Beck; Albert Bandura in his later work',
    methods: 'Experiments that measure memory, attention and reaction time; models of information processing.',
    watch: 'It can treat the mind like a computer and leave out emotion, the body and culture.',
  },
  psychoanalytic: {
    people: 'Sigmund Freud, Anna Freud, Melanie Klein, Erik Erikson',
    methods: 'Clinical case studies, free association, interpretation of dreams and of the therapy relationship.',
    watch: 'Many of its claims are hard to test or to prove wrong.',
  },
  biological: {
    people: 'Charles Darwin, Donald Hebb, Roger Sperry',
    methods: 'Brain imaging, hormone measures, twin and adoption studies, studies of brain injury, animal research.',
    watch: 'It can slide into "biology is destiny" and forget that experience also changes the body.',
  },
  humanistic: {
    people: 'Abraham Maslow, Carl Rogers, Rollo May',
    methods: 'Interviews, personal accounts and other qualitative methods that stay close to lived experience.',
    watch: 'Its key ideas, such as self-actualisation, are hard to measure.',
  },
  social: {
    people: 'Kurt Lewin, Solomon Asch, Muzafer Sherif, Stanley Milgram',
    methods: 'Laboratory and field experiments that change the social situation; surveys.',
    watch: 'Short laboratory situations may not match real social life.',
  },
  cultural: {
    people: 'Richard Shweder, Hazel Markus and Shinobu Kitayama, Barbara Rogoff',
    methods: 'Cross-cultural comparison, ethnography (long-term observation inside a community), cultural studies of child-rearing.',
    watch: 'Comparing whole nations can turn culture into a stereotype.',
  },
  critical: {
    people: 'Ian Parker, Isaac Prilleltensky and Dennis Fox, Ignacio Martín-Baró, feminist psychologists',
    methods: 'Analysis of language and power, history of the discipline, participatory action research.',
    watch: 'It is better at questioning research than at producing new evidence of its own.',
  },
  decolonial: {
    people: 'Frantz Fanon, Durganand Sinha, Ashis Nandy, Sunil Bhatia, Linda Tuhiwai Smith',
    methods: 'Indigenous and community-led research, local concepts and languages, histories of how psychology spread.',
    watch: 'It can romanticise "tradition" or treat a whole region as one culture.',
  },
};

export type StakeholderId =
  | 'participant' | 'parent' | 'teacher' | 'clinician' | 'researcher' | 'policymaker' | 'community-leader';

export const STAKEHOLDERS: { id: StakeholderId; name: string; cares: string }[] = [
  { id: 'participant', name: 'Participant', cares: 'Being safe, respected and listened to.' },
  { id: 'parent', name: 'Parent', cares: 'My child\'s wellbeing, and what I should do at home.' },
  { id: 'teacher', name: 'Teacher', cares: 'What happens in my classroom and playground.' },
  { id: 'clinician', name: 'Clinician', cares: 'Helping a particular child or family who is struggling.' },
  { id: 'researcher', name: 'Researcher', cares: 'Getting a clear, trustworthy answer.' },
  { id: 'policymaker', name: 'Policymaker', cares: 'Rules that work for a whole population.' },
  { id: 'community-leader', name: 'Community leader', cares: 'Whether the knowledge fits and serves my community.' },
];
