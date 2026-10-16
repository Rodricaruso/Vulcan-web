import datos from '../data/metales.json';

type Registro = {
  fecha: string;
  actualizado: string;
  dolarVenta: number;
  plata925: number;
  oro18k: number;
};

export type FilaMetal = {
  nombre: string;
  unidad: string;
  valor: number;
  variacion: number | null;
};

const historial = (datos.historial ?? []) as Registro[];
const hoy = historial.at(-1);
const ayer = historial.at(-2);

const variacion = (actual: number, previo?: number) =>
  previo ? ((actual - previo) / previo) * 100 : null;

export const hayDatos = Boolean(hoy);

export const filas: FilaMetal[] = hoy
  ? [
      { nombre: 'Plata 925', unidad: 'por gramo', valor: hoy.plata925, variacion: variacion(hoy.plata925, ayer?.plata925) },
      { nombre: 'Oro 18k', unidad: 'por gramo', valor: hoy.oro18k, variacion: variacion(hoy.oro18k, ayer?.oro18k) },
      { nombre: 'Dólar BNA', unidad: 'venta', valor: hoy.dolarVenta, variacion: variacion(hoy.dolarVenta, ayer?.dolarVenta) },
    ]
  : [];

export const fechaActualizacion = hoy
  ? new Intl.DateTimeFormat('es-AR', {
      timeZone: 'America/Argentina/Buenos_Aires',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(hoy.actualizado))
  : null;

export const fuentes = (datos as { fuentes?: { dolar: string; metales: string } }).fuentes;

export const pesos = (n: number) =>
  new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n);

export const porcentaje = (n: number) =>
  `${new Intl.NumberFormat('es-AR', { maximumFractionDigits: 1, minimumFractionDigits: 1 }).format(Math.abs(n))} %`;
