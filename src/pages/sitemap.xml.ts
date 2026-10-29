// Mapa del sitio para buscadores, con la fecha de último cambio y las fotos de casos y piezas.
// Privacidad queda afuera (no aporta a búsquedas), aunque sigue siendo indexable.
import type { APIRoute } from 'astro';
import { execFileSync } from 'node:child_process';
import { casos } from '../content';
import { productos } from '../data/productos';
import { imagenAbsoluta } from '../lib/imagenes';

// Fecha del último commit que tocó alguno de los archivos de la página. Sin git, la del build.
const ultimoCambio = (archivos: string[]) => {
  try {
    const fecha = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...archivos], { encoding: 'utf8' }).trim();
    if (fecha) return fecha;
  } catch {}
  return new Date().toISOString();
};

type Entrada = { ruta: string; archivos: string[]; fotos?: string[] };

const entradas: Entrada[] = [
  { ruta: '/', archivos: ['src/pages/index.astro', 'src/components/home', 'src/content.ts'] },
  { ruta: '/catalogo', archivos: ['src/pages/catalogo.astro', 'src/data/productos.ts'] },
  { ruta: '/taller', archivos: ['src/pages/taller.astro', 'src/content.ts'] },
  ...casos.map((c) => ({
    ruta: `/casos/${c.slug}`,
    archivos: ['src/pages/casos/[slug].astro', 'src/content.ts'],
    fotos: [c.portada, ...c.historia.map((e) => e.foto)].map((f) => f.archivo),
  })),
  ...productos.map((p) => ({
    ruta: `/catalogo/${p.id}`,
    archivos: ['src/pages/catalogo/[id].astro', 'src/data/productos.ts'],
    fotos: p.foto ? [p.foto.archivo] : [],
  })),
];

export const GET: APIRoute = async ({ site }) => {
  const urls = await Promise.all(
    entradas.map(async ({ ruta, archivos, fotos = [] }) => {
      const imagenes = (await Promise.all(fotos.map((f) => imagenAbsoluta(f, site)))).filter(Boolean);
      return [
        '  <url>',
        `    <loc>${new URL(ruta, site).href}</loc>`,
        `    <lastmod>${ultimoCambio(archivos)}</lastmod>`,
        ...imagenes.map((src) => `    <image:image><image:loc>${src}</image:loc></image:image>`),
        '  </url>',
      ].join('\n');
    }),
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
