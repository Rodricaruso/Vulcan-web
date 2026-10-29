// Busca una foto de /imagenes por su nombre (sin extensión). La usan Foto.astro, RevelarAnillo y el schema.
// Carga diferida: solo se importan las fotos que alguna página pide.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Toda foto que entra en este patrón se publica en dist/ aunque ninguna página la use, así que
// quedan afuera los originales y las versiones viejas (PNG de hasta 2,8 MB). Si alguna vuelve a
// usarse, sacala de esta lista. foto compartir wpp ya está convertida en public/compartir.jpg.
const archivos = import.meta.glob<{ default: ImageMetadata }>([
  '/imagenes/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  '!/imagenes/originales/**',
  '!/imagenes/foto compartir wpp.jpg',
  '!/imagenes/taller/{anillo-3d,anillo-3d-nuevo,anillo-plata,tres-etapas}.png',
  '!/imagenes/taller/untitled.*',
  '!/imagenes/taller/WhatsApp*',
]);

export const buscarImagen = async (archivo: string) => {
  const cargar = Object.entries(archivos).find(([ruta]) => ruta.replace(/\.[^.]+$/, '') === `/imagenes/${archivo}`)?.[1];
  return cargar ? (await cargar()).default : undefined;
};

// Versión de hasta 1200×630 para compartir en WhatsApp y redes. Las fotos se recortan siguiendo
// su encuadre; los renders con fondo transparente van enteros sobre el color de la marca.
// El optimizador no agranda ni rellena: devuelve la medida real para declararla en og:image.
export const imagenParaCompartir = async (archivo: string, site: URL | undefined, opciones: { encuadre?: string; render?: boolean } = {}) => {
  const src = await buscarImagen(archivo);
  if (!src) return undefined;
  const img = await getImage({
    src,
    width: 1200,
    height: 630,
    format: 'jpg',
    quality: 82,
    fit: opciones.render ? 'contain' : 'cover',
    // El optimizador acepta palabras (top, left…), no porcentajes de object-position.
    position: opciones.encuadre && !opciones.encuadre.includes('%') ? opciones.encuadre : 'center',
    background: '#1d0605',
  });
  // Misma cuenta que hace sharp sin agrandar: 'inside' escala entero, 'cover' recorta hasta el tamaño pedido.
  const k = Math.min(1200 / src.width, 630 / src.height, 1);
  const [ancho, alto] = opciones.render ? [Math.round(src.width * k), Math.round(src.height * k)] : [Math.min(1200, src.width), Math.min(630, src.height)];
  return { url: new URL(img.src, site).href, ancho, alto };
};

export type ImagenCompartir = NonNullable<Awaited<ReturnType<typeof imagenParaCompartir>>>;

// Versión web de una foto, con URL absoluta: para el schema.
export const imagenAbsoluta = async (archivo: string, site: URL | undefined) => {
  const src = await buscarImagen(archivo);
  if (!src) return undefined;
  const img = await getImage({ src, width: 1200, format: 'webp', quality: 80 });
  return new URL(img.src, site).href;
};
