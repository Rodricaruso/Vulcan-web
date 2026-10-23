// El símbolo de Vulcan sale de imagenes/logo.svg: al reemplazar ese archivo cambia en toda la web.
import logo from '../../imagenes/logo.svg?raw';

export const simboloPath = logo.match(/<path[^>]*\sd="([^"]+)"/)![1];
// Recorte justo del dibujo dentro del archivo original (377 × 318 con márgenes).
export const simboloViewBox = '31 17 307 265';
