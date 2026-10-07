import { visit } from 'unist-util-visit';

// Lets content authors write site links as /cases/... ; the plugin adds the
// deployment base path so the same content works locally and on GitHub Pages.
export default function rehypeBaseLinks({ base = '' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    visit(tree, 'element', (node) => {
      for (const attr of ['href', 'src']) {
        const v = node.properties?.[attr];
        if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && !v.startsWith(prefix + '/')) {
          node.properties[attr] = prefix + v;
        }
      }
      if (node.tagName === 'a' && typeof node.properties?.href === 'string' && /^https?:/.test(node.properties.href)) {
        node.properties.rel = 'noopener';
      }
    });
  };
}
