// Exporta los tokens de src/styles/tokens.css a marca/tokens.json, para usarlos fuera de la web
// (Figma, Canva, plantillas de Instagram). La fuente de verdad sigue siendo el CSS.
// Formato: Design Tokens (W3C), que importan plugins como Tokens Studio.
// Uso: npm run tokens
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');

// Primer bloque :root = primitivos; el segundo = semánticos (solo el :root, sin media queries).
const bloques = [...css.matchAll(/(?:^|\n):root\s*\{([\s\S]*?)\n\}/g)].map((m) => m[1]);
const leer = (bloque) =>
  [...bloque.matchAll(/--([\w-]+):\s*([^;]+);[ \t]*(?:\/\*\s*(.*?)\s*\*\/)?/g)].map(([, nombre, valor, nota]) => ({
    nombre,
    valor: valor.trim(),
    nota,
  }));

const primitivos = leer(bloques[0]);
const semanticos = leer(bloques[1]);
const todos = Object.fromEntries([...primitivos, ...semanticos].map((t) => [t.nombre, t.valor]));
const resolver = (v, n = 0) => (n < 10 && /^var\(--([\w-]+)\)$/.test(v) ? resolver(todos[v.slice(6, -1)] ?? v, n + 1) : v);
const ficha = (t, tipo) => ({ $type: tipo, $value: resolver(t.valor), ...(t.nota ? { $description: t.nota } : {}) });

const salida = { marca: {}, metales: {}, grabado: {}, piedra: {}, uso: {}, tipografia: {}, espaciado: {} };
for (const t of primitivos) {
  const grupo = /^(plata|oro|alpaca|bronce)-(pulido|mate)-/.test(t.nombre)
    ? 'metales'
    : /^(sepia|papel|marfil)$/.test(t.nombre)
      ? 'grabado'
      : /^esmeralda/.test(t.nombre)
        ? 'piedra'
        : 'marca';
  salida[grupo][t.nombre] = ficha(t, 'color');
}
for (const t of semanticos) {
  if (t.nombre.startsWith('color-')) salida.uso[t.nombre.slice(6)] = ficha(t, 'color');
  else if (t.nombre.startsWith('font-')) salida.tipografia[t.nombre.slice(5)] = ficha(t, 'fontFamily');
  else if (t.nombre.startsWith('text-')) salida.tipografia[t.nombre] = ficha(t, 'dimension');
  else if (t.nombre.startsWith('space-')) salida.espaciado[t.nombre] = ficha(t, 'dimension');
}

mkdirSync(new URL('../marca/', import.meta.url), { recursive: true });
writeFileSync(new URL('../marca/tokens.json', import.meta.url), JSON.stringify(salida, null, 2) + '\n');
console.log(`tokens: ${primitivos.length} primitivos, ${semanticos.length} semánticos → marca/tokens.json`);
