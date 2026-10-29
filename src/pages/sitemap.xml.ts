// Mapa del sitio para buscadores. Solo páginas indexables.
import type { APIRoute } from 'astro';
import { casos } from '../content';

const rutas = ['/', '/catalogo', '/taller', '/privacidad', ...casos.map((c) => `/casos/${c.slug}`)];

export const GET: APIRoute = ({ site }) => {
  const urls = rutas.map((ruta) => `  <url><loc>${new URL(ruta, site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
