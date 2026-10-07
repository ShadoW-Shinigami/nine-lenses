import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// One MDX file per page of a case guide: src/content/cases/<case>/<page>.mdx
const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    nav: z.string(),
    section: z.enum(['A', 'B', 'C', 'D', 'E', 'F', 'X']),
    order: z.number(),
    summary: z.string(),
    lens: z.string().optional(),
    stakeholder: z.string().optional(),
  }),
});

// Case-level facts shown on the library and case hub pages.
const cases = defineCollection({
  loader: file('./src/data/cases.json'),
  schema: z.object({
    title: z.string(),
    question: z.string(),
    year: z.number(),
    authors: z.string(),
    citation: z.string(),
    doi: z.string().optional(),
    hock: z.string(),
    theme: z.string(),
    order: z.number(),
    status: z.enum(['ready', 'draft', 'planned']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    intro: z.array(z.string()),
    facts: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
});

export const collections = { pages, cases };
