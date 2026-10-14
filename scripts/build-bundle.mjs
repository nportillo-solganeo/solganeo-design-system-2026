// Transpile components/src/components.jsx en un seul script classique : components/bundle.js
// Il lit window.React et expose window.Solganeo. Usage : node scripts/build-bundle.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { transformSync } from 'esbuild';

const src = readFileSync(new URL('../components/src/components.jsx', import.meta.url), 'utf8');
const { code } = transformSync(`(function(){var React=globalThis.React;\n${src}\n})();`, {
  loader: 'jsx', jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment', target: 'es2018', minify: true,
});
const names = ['Button', 'Tag', 'Input', 'SectionHeader', 'ServiceCard', 'NavBar', 'Hero', 'Footer', 'Icon'];
const header = `/* @ds-bundle: ${JSON.stringify({ format: 4, namespace: 'Solganeo', components: names.map((name) => ({ name })) })} */\n`;
writeFileSync(new URL('../components/bundle.js', import.meta.url), header + code);
console.log('components/bundle.js écrit');
