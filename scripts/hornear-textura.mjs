// Arma la baldosa de fondo a partir de la textura:
// 1. La vuelve continua (seamless): los bordes se mezclan con una copia desplazada
//    media imagen, así una baldosa empalma con la siguiente sin costura.
// 2. Pone dos copias lado a lado: la baldosa ocupa el ancho de la web sin estirarse.
// 3. La mezcla con Forja en "luz fuerte" (hard light) al 12 %, igual que en el diseño,
//    para que el navegador no tenga que mezclar capas.
//
// Uso: npm run textura   (también corre sola antes de cada build)

import { existsSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';

const ORIGEN = 'imagenes/textura/marmol.avif';
const DESTINO = 'public/texturas/forja.webp';
const FONDO = [0x1d, 0x06, 0x05]; // Forja
const OPACIDAD = 0.12;
const BORDE_MEZCLA = 0.25; // fracción del lado que se usa para fundir la costura
const COPIAS_A_LO_ANCHO = 2;

if (!existsSync(ORIGEN)) {
  console.warn(`[textura] No está ${ORIGEN}, se deja el fondo liso.`);
  process.exit(0);
}

const { data, info } = await sharp(ORIGEN).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

// 1. Continua: en el centro manda la imagen original; cerca de los bordes, la copia
//    desplazada (cuyos bordes son el centro del original, y por eso empalman).
const rampa = (d, lado) => {
  const t = Math.min(d / (lado * BORDE_MEZCLA), 1);
  return t * t * (3 - 2 * t);
};
//    Se hace en dos pasadas (primero a lo ancho, después a lo alto) para que la costura
//    de la copia desplazada quede siempre tapada por el original.
const pasada = (fuente, canales, horizontal) => {
  const salida = Buffer.alloc(W * H * 3);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const m = horizontal ? rampa(Math.min(x, W - 1 - x), W) : rampa(Math.min(y, H - 1 - y), H);
      const xs = horizontal ? (x + W / 2) % W | 0 : x;
      const ys = horizontal ? y : (y + H / 2) % H | 0;
      for (let c = 0; c < 3; c++) {
        const a = fuente[(y * W + x) * canales + c];
        const b = fuente[(ys * W + xs) * canales + c];
        salida[(y * W + x) * 3 + c] = Math.round(m * a + (1 - m) * b);
      }
    }
  }
  return salida;
};
const continua = pasada(pasada(data, C, true), 3, false);

// 2 y 3. Baldosa de varias copias, mezclada con Forja en luz fuerte.
const luzFuerte = (base, capa) => (capa <= 0.5 ? base * 2 * capa : 1 - (1 - base) * (1 - (2 * capa - 1)));
const ancho = W * COPIAS_A_LO_ANCHO;
const baldosa = Buffer.alloc(ancho * H * 3);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < ancho; x++) {
    const origen = (y * W + (x % W)) * 3;
    for (let c = 0; c < 3; c++) {
      const base = FONDO[c] / 255;
      const mezcla = luzFuerte(base, continua[origen + c] / 255);
      baldosa[(y * ancho + x) * 3 + c] = Math.round((base + OPACIDAD * (mezcla - base)) * 255);
    }
  }
}

mkdirSync('public/texturas', { recursive: true });
await sharp(baldosa, { raw: { width: ancho, height: H, channels: 3 } })
  .webp({ quality: 90 })
  .toFile(DESTINO);

console.log(`[textura] ${DESTINO} (${ancho}×${H}, continua, luz fuerte ${OPACIDAD * 100} %)`);
