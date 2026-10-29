// @id estables del schema: los casos y las piezas apuntan al negocio con este mismo id.
export const idNegocio = (site?: URL) => `${site?.href}#negocio`;
export const idWeb = (site?: URL) => `${site?.href}#web`;
