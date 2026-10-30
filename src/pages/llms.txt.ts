// llms.txt (llmstxt.org): resumen del sitio en markdown para ChatGPT, Perplexity, Gemini y Claude.
// Se arma desde content.ts y productos.ts, así se actualiza solo. Lo que tiene [pendientes] no sale.
import type { APIRoute } from 'astro';
import { sitio, proceso, servicios, paginasServicio, preguntas, casos, catalogo, taller } from '../content';
import { productos, tipos } from '../data/productos';

const sinPendientes = (texto: string) => !texto.includes('[');

export const GET: APIRoute = ({ site }) => {
  const url = (ruta: string) => new URL(ruta, site).href;
  const faq = preguntas.items.filter((p) => p.respuesta.every(sinPendientes));

  const texto = [
    `# ${sitio.nombre}`,
    '',
    `> Taller de joyería a medida en Belgrano, Ciudad Autónoma de Buenos Aires, fuera de la zona de joyerías del centro. Hace anillos sello y joyas por encargo, una sola o iguales para una familia o un grupo, con modelado 3D, impresión en resina y fundición a la cera perdida. Los pedidos se hacen por WhatsApp; no es un local a la calle y las visitas se coordinan antes.`,
    '',
    `Contacto: WhatsApp ${sitio.telefonoVisible} (https://wa.me/${sitio.whatsapp}). Instagram: ${sitio.instagram}. Formas de pago: ${sitio.formasDePago.toLowerCase()}.`,
    '',
    `## ${proceso.titulo}`,
    '',
    proceso.bajada,
    '',
    ...proceso.etapas.map((e) => `- ${e.titulo}: ${e.texto.replaceAll('**', '')}`),
    '',
    `## ${servicios.titulo}`,
    '',
    ...servicios.tarjetas.map((t) => `- ${t.titulo}: ${t.texto} ${t.items.filter(sinPendientes).join('. ')}.`),
    '',
    `## ${preguntas.titulo}`,
    '',
    ...faq.map((p) => `- ${p.pregunta} ${p.respuesta.join(' ')}${p.formula ? ` ${p.formula.join('; ')}.` : ''}`),
    '',
    '## Páginas',
    '',
    `- [Inicio](${url('/')}): ${sitio.description}`,
    `- [El taller](${url('/taller')}): ${taller.meta.description}`,
    `- [${catalogo.titulo}](${url('/catalogo')}): ${catalogo.meta.description}`,
    '',
    '## Servicios para joyeros y marcas',
    '',
    ...paginasServicio.map((s) => `- [${s.titulo}](${url(`/servicios/${s.slug}`)}): ${s.meta.description}`),
    '',
    '## Casos',
    '',
    ...casos.map((c) => `- [${c.nombre}](${url(`/casos/${c.slug}`)}): ${c.meta.description}`),
    '',
    '## Piezas del catálogo',
    '',
    ...productos.map((p) => `- [${tipos[p.tipo].singular} ${p.nombre}](${url(`/catalogo/${p.id}`)}): ${p.descripcion} ${p.metal}, ${p.terminacion.toLowerCase()}.`),
    '',
    '## Optional',
    '',
    `- [Política de privacidad](${url('/privacidad')})`,
    '',
  ].join('\n');

  return new Response(texto, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
