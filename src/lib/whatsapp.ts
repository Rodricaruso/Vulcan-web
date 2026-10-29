import { mensajes, sitio, type TipoMensaje } from '../content';
import { tipos, type Producto } from '../data/productos';

// El origen va dentro del mensaje: wa.me descarta parámetros que no conoce.
export const enlaceWhatsApp = (ref: string, tipo: TipoMensaje = 'cliente') =>
  `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensajes[tipo].replace('{ref}', ref))}`;

// Consulta por una pieza puntual: la nombra en el mensaje.
export const consultaPieza = (pieza: Producto, ref: string) => {
  const tipo = tipos[pieza.tipo].singular.toLowerCase();
  const mensaje = `Hola Vulcan, vengo de la web (ref: ${ref}). Me interesa ${tipo === 'aros' ? 'los aros' : `el ${tipo}`} ${pieza.nombre}. `;
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
};
