// Génère tokens/tokens.css à partir de tokens/tokens.json.
// Usage : node scripts/build-tokens.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const t = JSON.parse(readFileSync(new URL('../tokens/tokens.json', import.meta.url), 'utf8'));
const themes = t.color.themes.map((x) => x.id);
const first = themes[0];
const val = (v, th) => (typeof v === 'string' ? v : v[th] ?? v[first]);
const css = (v) => String(v).replace(/^\{(.+)\}$/, 'var(--$1)');

const lines = ['/* Généré par scripts/build-tokens.mjs à partir de tokens/tokens.json. Ne pas modifier à la main. */', ''];

for (const f of t.type.fonts) {
  lines.push(`@font-face { font-family: '${f.family}'; src: url('../${f.file}') format('truetype'); font-weight: ${f.weight}; font-style: ${f.style || 'normal'}; font-stretch: 75% 100%; font-display: swap; }`);
}
lines.push('');

const themeBlock = (th, selector) => {
  const out = [`${selector} {`];
  for (const c of t.color.tokens) out.push(`  --${c.name}: ${css(val(c.value, th))};`);
  for (const s of t.shadow?.tokens ?? []) out.push(`  --${s.name}: ${val(s.value, th)};`);
  out.push('}');
  return out.join('\n');
};
lines.push(themeBlock(first, `:root, [data-theme="${first}"]`));
for (const th of themes.slice(1)) {
  lines.push('');
  lines.push(themeBlock(th, `[data-theme="${th}"]`));
  lines.push(`@media (prefers-color-scheme: ${th}) {\n${themeBlock(th, ':root:not([data-theme])').replace(/^/gm, '  ')}\n}`);
}
lines.push('');

const root = [':root {'];
for (const fam of ['spacing', 'radius', 'layout']) for (const x of t[fam]?.tokens ?? []) root.push(`  --${x.name}: ${x.value};`);
for (const [k, v] of Object.entries(t.type.families)) root.push(`  --font-${k}: ${v};`);
root.push('}');
lines.push(root.join('\n'), '');

const px = (v) => (typeof v === 'number' ? `${v}px` : v);
for (const g of t.type.groups) {
  for (const s of g.styles) {
    const decl = [`font-family: var(--font-${s.family || g.family})`, `font-size: ${px(s.fontSize)}`];
    if (s.lineHeight != null) decl.push(`line-height: ${s.lineHeight}`);
    if (s.fontWeight != null) decl.push(`font-weight: ${s.fontWeight}`);
    if (s.letterSpacing) decl.push(`letter-spacing: ${s.letterSpacing}`);
    if (s.opticalSize) decl.push(`font-variation-settings: 'opsz' ${s.opticalSize}`);
    if (s.name === 'overline') decl.push('text-transform: uppercase');
    lines.push(`.${s.name} { ${decl.join('; ')}; }`);
  }
}

writeFileSync(new URL('../tokens/tokens.css', import.meta.url), lines.join('\n') + '\n');
console.log('tokens/tokens.css écrit');
