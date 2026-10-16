// Trae dólar BNA venta y precio internacional de plata y oro, calcula ARS por gramo
// según la ley y guarda el resultado en src/data/metales.json.
// Si una fuente falla, conserva el último valor con su fecha real. Nunca rompe el build.

import { readFile, writeFile } from 'node:fs/promises';

const ARCHIVO = new URL('../src/data/metales.json', import.meta.url);
const GRAMOS_POR_ONZA_TROY = 31.1035;
const DIAS_DE_HISTORIAL = 10;

const FUENTES = {
  dolar: 'https://dolarapi.com/v1/dolares/oficial',
  oro: 'https://api.gold-api.com/price/XAU',
  plata: 'https://api.gold-api.com/price/XAG',
};

const LEYES = { plata925: 0.925, oro18k: 0.75 };

// Fecha del día en Buenos Aires (YYYY-MM-DD), para comparar contra el día anterior.
const hoyAR = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Argentina/Buenos_Aires' }).format(new Date());

async function traer(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`${url} respondió ${res.status}`);
  return res.json();
}

async function leerAnterior() {
  try {
    return JSON.parse(await readFile(ARCHIVO, 'utf8'));
  } catch {
    return { historial: [] };
  }
}

const redondear = (n) => Math.round(n * 100) / 100;

async function main() {
  const anterior = await leerAnterior();
  const ultimo = anterior.historial?.at(-1);

  const [dolar, oro, plata] = await Promise.allSettled([
    traer(FUENTES.dolar),
    traer(FUENTES.oro),
    traer(FUENTES.plata),
  ]);

  const falla = [dolar, oro, plata].find((r) => r.status === 'rejected');
  if (falla) {
    console.warn(`[metales] Falló una fuente, se mantiene el último valor: ${falla.reason?.message}`);
    if (!ultimo) await writeFile(ARCHIVO, JSON.stringify({ historial: [] }, null, 2) + '\n');
    return;
  }

  const dolarVenta = Number(dolar.value.venta);
  const usdOro = Number(oro.value.price);
  const usdPlata = Number(plata.value.price);
  if (![dolarVenta, usdOro, usdPlata].every((n) => Number.isFinite(n) && n > 0)) {
    console.warn('[metales] Valores inválidos, se mantiene el último valor.');
    return;
  }

  const porGramo = (usdOnza, ley) => (usdOnza / GRAMOS_POR_ONZA_TROY) * ley * dolarVenta;

  const registro = {
    fecha: hoyAR(),
    actualizado: new Date().toISOString(),
    dolarVenta: redondear(dolarVenta),
    plata925: redondear(porGramo(usdPlata, LEYES.plata925)),
    oro18k: redondear(porGramo(usdOro, LEYES.oro18k)),
    usdOnza: { plata: usdPlata, oro: usdOro },
  };

  // Un registro por día: si ya hay uno de hoy, se reemplaza.
  const historial = (anterior.historial ?? []).filter((r) => r.fecha !== registro.fecha);
  historial.push(registro);

  const salida = {
    fuentes: {
      dolar: 'Dólar oficial Banco Nación, venta (dolarapi.com)',
      metales: 'Precio internacional spot (gold-api.com)',
    },
    historial: historial.slice(-DIAS_DE_HISTORIAL),
  };

  await writeFile(ARCHIVO, JSON.stringify(salida, null, 2) + '\n');
  console.log(`[metales] ${registro.fecha}: dólar ${registro.dolarVenta}, plata 925 ${registro.plata925}/g, oro 18k ${registro.oro18k}/g`);
}

main().catch((err) => {
  console.warn(`[metales] Error inesperado, se mantiene el último valor: ${err.message}`);
});
