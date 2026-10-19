// Piezas del catálogo. Se usan en /catalogo (grilla) y en la Vitrina de la home.
// Son piezas reales del taller (fotos de Rodrigo). PROVISORIO: nombres, textos, metal y
// terminación están supuestos a partir de las fotos; peso y medidas quedan "A confirmar"
// hasta tener los reales (en joyería el peso es parte del precio).
// Si una pieza no tiene `foto`, se muestra su dibujo técnico de línea (según el tipo).

import type { Foto } from '../content';

export type TipoPieza = 'anillo' | 'dije' | 'aros';

export type Producto = {
  id: string; // va en la ref del mensaje de WhatsApp
  nombre: string;
  tipo: TipoPieza;
  descripcion: string;
  metal: string;
  terminacion: 'Pulido' | 'Esmerilado' | 'Pulido y esmerilado' | 'Martillado' | 'Martillado y oxidado' | 'Texturado';
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

const aConfirmar = 'A confirmar';

export const productos: Producto[] = [
  {
    id: 'egida',
    nombre: 'Égida',
    tipo: 'anillo',
    descripcion: 'Anillo sello con escudo en relieve. Se diseña con tu escudo, inicial o símbolo.',
    metal: 'Plata 925',
    terminacion: 'Pulido y esmerilado',
    piedra: 'Sin piedra',
    peso: aConfirmar,
    medidas: aConfirmar,
    foto: { archivo: 'trabajos/trabajo-1', alt: 'Dos anillos sello Égida con escudo en relieve, sobre una mesa de madera', etiqueta: 'Égida' },
  },
  {
    id: 'faro',
    nombre: 'Faro',
    tipo: 'anillo',
    descripcion: 'Solitario de aro fino con una circonia cúbica cuadrada, tomada por cuatro garras.',
    metal: 'Plata 925',
    terminacion: 'Pulido',
    piedra: 'Circonia cúbica cuadrada',
    peso: aConfirmar,
    medidas: aConfirmar,
    foto: { archivo: 'catalogo/faro', alt: 'Anillo solitario con circonia cuadrada, apoyado en el taco del banco de joyero', etiqueta: 'Faro' },
  },
  {
    id: 'escoria',
    nombre: 'Escoria',
    tipo: 'anillo',
    descripcion: 'Alianza martillada a mano y oxidada: el negro queda en los golpes y el borde brilla.',
    metal: 'Plata 925',
    terminacion: 'Martillado y oxidado',
    piedra: 'Sin piedra',
    peso: aConfirmar,
    medidas: aConfirmar,
    foto: { archivo: 'catalogo/escoria', alt: 'Alianza de plata martillada y oxidada sobre madera', etiqueta: 'Escoria' },
  },
  {
    id: 'corteza',
    nombre: 'Corteza',
    tipo: 'anillo',
    descripcion: 'Par de alianzas con textura de corteza, rayada a mano a lo largo de la banda.',
    metal: 'Alpaca',
    terminacion: 'Texturado',
    piedra: 'Sin piedra',
    peso: aConfirmar,
    medidas: aConfirmar,
    foto: { archivo: 'catalogo/corteza', alt: 'Par de alianzas con textura de corteza, apoyadas en el borde de un taco de madera', etiqueta: 'Corteza' },
  },
  {
    id: 'ceniza',
    nombre: 'Ceniza',
    tipo: 'anillo',
    descripcion: 'Par de alianzas que hacen juego: una oxidada y una brillante, las dos trabajadas a mano.',
    metal: 'Plata 925',
    terminacion: 'Martillado y oxidado',
    piedra: 'Sin piedra',
    peso: aConfirmar,
    medidas: aConfirmar,
    foto: { archivo: 'catalogo/ceniza', alt: 'Par de alianzas, una oxidada y una brillante, sobre madera', etiqueta: 'Ceniza' },
  },
  {
    id: 'golpe',
    nombre: 'Golpe',
    tipo: 'anillo',
    descripcion: 'Banda ancha martillada y pulida: cada golpe queda como una faceta que agarra la luz.',
    metal: 'Alpaca',
    terminacion: 'Martillado',
    piedra: 'Sin piedra',
    peso: aConfirmar,
    medidas: aConfirmar,
    foto: { archivo: 'catalogo/golpe', alt: 'Anillo de banda ancha martillada y pulida, sostenido entre los dedos', etiqueta: 'Golpe' },
  },
  {
    id: 'rocio',
    nombre: 'Rocío',
    tipo: 'anillo',
    descripcion: 'Par de alianzas finas, martilladas suave para que brillen de a puntos.',
    metal: 'Plata 925',
    terminacion: 'Martillado',
    piedra: 'Sin piedra',
    peso: aConfirmar,
    medidas: aConfirmar,
    foto: { archivo: 'catalogo/rocio', alt: 'Par de alianzas finas martilladas, sobre el borde de un taco de madera', etiqueta: 'Rocío' },
  },
  {
    id: 'umbral',
    nombre: 'Umbral',
    tipo: 'aros',
    descripcion: 'Aros rectangulares de chapa plegada y soldada a mano. Líneas rectas, cantos vivos.',
    metal: 'Plata 925',
    terminacion: 'Pulido',
    piedra: 'Sin piedra',
    peso: aConfirmar,
    medidas: aConfirmar,
    foto: { archivo: 'catalogo/umbral', alt: 'Par de aros rectangulares de plata pulida, parados sobre una base de madera', etiqueta: 'Umbral' },
  },
  {
    id: 'umbral-dorado',
    nombre: 'Umbral dorado',
    tipo: 'aros',
    descripcion: 'El mismo aro rectangular, con enchapado de oro.',
    metal: 'Enchapado en oro',
    terminacion: 'Pulido',
    piedra: 'Sin piedra',
    peso: aConfirmar,
    medidas: aConfirmar,
    foto: { archivo: 'catalogo/umbral-dorado', alt: 'Par de aros rectangulares enchapados en oro, sobre papel de seda', etiqueta: 'Umbral dorado' },
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
