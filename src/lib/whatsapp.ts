import { mensajes, sitio, type TipoMensaje } from '../content';

// El origen va dentro del mensaje: wa.me descarta parámetros que no conoce.
export const enlaceWhatsApp = (ref: string, tipo: TipoMensaje = 'cliente') =>
  `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensajes[tipo].replace('{ref}', ref))}`;
