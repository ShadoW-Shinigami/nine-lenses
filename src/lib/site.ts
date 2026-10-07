import { getCollection, type CollectionEntry } from 'astro:content';

export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Build an internal URL from a site path such as "cases/bobo-doll/". */
export const url = (path = '') => BASE + path.replace(/^\//, '');

export type PageEntry = CollectionEntry<'pages'>;
export type CaseEntry = CollectionEntry<'cases'>;

export const caseIdOf = (page: PageEntry) => page.id.split('/')[0];
export const pageUrl = (page: PageEntry) => url(`cases/${page.id}/`);

export async function getCasePages(caseId: string) {
  const all = await getCollection('pages', (p) => caseIdOf(p) === caseId);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export function readingMinutes(body = '') {
  const words = body
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(2, Math.round(words / 190));
}

/** Pages that sit under a hub page (lens pages, stakeholder pages). */
export const isSubPage = (page: PageEntry) => page.id.split('/').length > 2;
export const parentId = (page: PageEntry) => page.id.split('/').slice(0, 2).join('/');
