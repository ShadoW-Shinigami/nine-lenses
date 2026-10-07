import { visit } from 'unist-util-visit';

// Gives every table cell a data-label taken from its column header, and wraps
// the table so CSS can turn each row into a stack of labelled fields on phones.
function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

export default function rehypeStackTables() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'table' || !parent) return;
      if (parent.properties?.className?.includes?.('stack-table')) return;
      const thead = node.children.find((c) => c.tagName === 'thead');
      const tbody = node.children.find((c) => c.tagName === 'tbody');
      if (!thead || !tbody) return;
      const headRow = thead.children.find((c) => c.tagName === 'tr');
      const labels = headRow.children.filter((c) => c.tagName === 'th').map((th) => textOf(th).trim());
      for (const row of tbody.children.filter((c) => c.tagName === 'tr')) {
        let i = 0;
        for (const cell of row.children.filter((c) => c.tagName === 'td' || c.tagName === 'th')) {
          cell.properties = cell.properties || {};
          cell.properties.dataLabel = labels[i] || '';
          i += 1;
        }
      }
      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['stack-table'] },
        children: [node],
      };
    });
  };
}
