// Post-build checks. Run after `npm run build`.
// 1. Every internal link and image in dist/ points to a file that exists.
// 2. No private material (PDFs, _private paths) is in the build.
// 3. Authored content follows the house style: no em dashes, no curly quotes.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, extname } from 'node:path';

const DIST = 'dist';
const BASE = '/nine-lenses/';
const problems = [];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error('dist/ not found. Run npm run build first.');
  process.exit(1);
}

const files = walk(DIST);
for (const f of files) {
  if (/\.pdf$/i.test(f) || f.includes('_private')) problems.push(`Private-looking file in build: ${f}`);
}

const htmlFiles = files.filter((f) => extname(f) === '.html');
const attr = /(?:href|src)="([^"#?]+)(?:[#?][^"]*)?"/g;
for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(attr)) {
    const target = m[1];
    if (!target.startsWith(BASE)) {
      if (target.startsWith('/') && !target.startsWith('//')) problems.push(`${relative(DIST, f)}: link without base path: ${target}`);
      continue;
    }
    let p = join(DIST, decodeURI(target.slice(BASE.length)));
    if (target.endsWith('/')) p = join(p, 'index.html');
    if (!existsSync(p)) problems.push(`${relative(DIST, f)}: broken link ${target}`);
  }
}

// House style in authored content.
const contentFiles = walk('src/content').filter((f) => f.endsWith('.mdx'));
for (const f of [...contentFiles, 'src/data/cases.json', 'src/data/course.ts']) {
  const lines = readFileSync(f, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (line.includes('—')) problems.push(`${f}:${i + 1}: em dash`);
    if (/[‘’“”]/.test(line)) problems.push(`${f}:${i + 1}: curly quote`);
  });
}

// Published cases must not contain scaffold placeholders.
const cases = JSON.parse(readFileSync('src/data/cases.json', 'utf8'));
for (const c of cases.filter((x) => x.status === 'ready')) {
  for (const f of contentFiles.filter((x) => x.split(/[\/]/).includes(c.id))) {
    if (/\bTODO\b/.test(readFileSync(f, 'utf8'))) problems.push(`${f}: TODO left in a published case`);
  }
  if (JSON.stringify(c).includes('TODO')) problems.push(`cases.json: TODO left in published case ${c.id}`);
}

if (problems.length) {
  console.error(`${problems.length} problem(s):\n` + problems.join('\n'));
  process.exit(1);
}
console.log(`OK: ${htmlFiles.length} pages, ${files.length} files checked.`);
