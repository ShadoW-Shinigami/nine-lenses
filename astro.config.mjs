// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeStackTables from './src/plugins/rehype-stack-tables.mjs';
import rehypeBaseLinks from './src/plugins/rehype-base-links.mjs';

// GitHub Pages project site. Change BASE if the repository is renamed.
const BASE = '/nine-lenses';

export default defineConfig({
  site: 'https://shadow-shinigami.github.io',
  base: BASE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx()],
  markdown: {
    // Straight quotes only (house style).
    smartypants: false,
    rehypePlugins: [rehypeStackTables, [rehypeBaseLinks, { base: BASE }]],
  },
});
