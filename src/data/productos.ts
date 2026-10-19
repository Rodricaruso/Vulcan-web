// Piezas del catálogo. Se usan en /catalogo (grilla) y en la Vitrina de la home.
// PROVISORIO: los pesos son inventados para maquetar. Reemplazarlos por los reales
// antes de publicar (en joyería el peso es parte del precio).
// Si una pieza no tiene `foto`, se muestra su dibujo técnico de línea (según el tipo).

import type { Foto } from '../content';

export type TipoPieza = 'anillo' | 'dije' | 'aros';

export type Producto = {
  id: string; // va en la ref del mensaje de WhatsApp
  nombre: string;
  tipo: TipoPieza;
  descripcion: string;
  metal: string;
  terminacion: 'Pulido' | 'Esmerilado' | 'Pulido y esmerilado';
  piedra: string; // 'Sin piedra' si no lleva
  peso: string; // PROVISORIO
  medidas: string;
  foto?: Foto;
};

export const tipos: Record<TipoPieza, { singular: string; plural: string }> = {
  anillo: { singular: 'Anillo', plural: 'Anillos' },
  dije: { singular: 'Dije', plural: 'Dijes' },
  aros: { singular: 'Aros', plural: 'Aros' },
};

export const productos: Producto[] = [
  {
    id: 'egida',
    nombre: 'Égida',
    tipo: 'anillo',
    descripcion: 'Anillo sello con escudo en relieve. Se diseña con tu escudo, inicial o símbolo.',
    metal: 'Plata 925',
    terminacion: 'Pulido y esmerilado',
    piedra: 'Sin piedra',
    peso: '14,2 g',
    medidas: 'Frente 16 × 18 mm',
    foto: { archivo: 'trabajos/trabajo-1', alt: 'Dos anillos sello Égida con escudo en relieve, sobre una mesa de madera', etiqueta: 'Égida' },
  },
  {
    id: 'yunque',
    nombre: 'Yunque',
    tipo: 'anillo',
    descripcion: 'Sello de frente plano y cantos rectos, listo para grabar.',
    metal: 'Plata 925',
    terminacion: 'Esmerilado',
    piedra: 'Sin piedra',
    peso: '11,8 g',
    medidas: 'Frente 12 × 14 mm',
  },
  {
    id: 'brasa',
    nombre: 'Brasa',
    tipo: 'anillo',
    descripcion: 'Solitario de aro fino con la piedra tomada por cuatro garras.',
    metal: 'Oro 18k',
    terminacion: 'Pulido',
    piedra: 'Granate, 5 mm',
    peso: '3,4 g',
    medidas: 'Aro de 2 mm',
  },
  {
    id: 'colada',
    nombre: 'Colada',
    tipo: 'anillo',
    descripcion: 'Banda ancha con textura de metal fundido, irregular a propósito.',
    metal: 'Plata 925',
    terminacion: 'Esmerilado',
    piedra: 'Sin piedra',
    peso: '7,6 g',
    medidas: 'Banda de 7 mm',
  },
  {
    id: 'denario',
    nombre: 'Denario',
    tipo: 'dije',
    descripcion: 'Medalla redonda con grabado en bajorrelieve, como una moneda acuñada.',
    metal: 'Plata 925',
    terminacion: 'Esmerilado',
    piedra: 'Sin piedra',
    peso: '5,1 g',
    medidas: 'Ø 20 mm',
  },
  {
    id: 'chispa',
    nombre: 'Chispa',
    tipo: 'dije',
    descripcion: 'Gota facetada con una piedra engarzada en el centro.',
    metal: 'Oro 18k',
    terminacion: 'Pulido',
    piedra: 'Circonia blanca, 3 mm',
    peso: '1,9 g',
    medidas: '9 × 14 mm',
  },
  {
    id: 'escoria',
    nombre: 'Escoria',
    tipo: 'aros',
    descripcion: 'Argollas con superficie martillada a mano.',
    metal: 'Plata 925',
    terminacion: 'Esmerilado',
    piedra: 'Sin piedra',
    peso: '3,8 g el par',
    medidas: 'Ø 14 mm',
  },
  {
    id: 'crisol',
    nombre: 'Crisol',
    tipo: 'aros',
    descripcion: 'Gotas cortas que caen del lóbulo, con un punto de brillo.',
    metal: 'Oro 18k',
    terminacion: 'Pulido',
    piedra: 'Circonia blanca, 2 mm',
    peso: '2,6 g el par',
    medidas: 'Largo 12 mm',
  },
];

// Guía de talles. Las medidas en milímetros son exactas (circunferencia = π × diámetro).
// TODO: sumar la columna con la numeración que usa el taller, si es distinta a la de diámetro.
export const talles = Array.from({ length: 13 }, (_, i) => {
  const diametro = 15 + i * 0.5;
  return {
    diametro: diametro.toFixed(1).replace('.', ','),
    circunferencia: (Math.PI * diametro).toFixed(1).replace('.', ','),
  };
});

export const cadenas = [
  { largo: '40 cm', donde: 'Al ras del cuello, tipo gargantilla' },
  { largo: '45 cm', donde: 'Sobre la clavícula. El más elegido para dijes' },
  { largo: '50 cm', donde: 'Debajo de la clavícula' },
  { largo: '60 cm', donde: 'A la altura del pecho, para usar sobre ropa' },
];
