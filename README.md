# Vulcan — sitio web

Joyería a medida con impresión 3D, CABA. Sitio estático en [Astro](https://astro.build).

- **Textos, WhatsApp y datos:** `src/content.ts`
- **Fotos:** `imagenes/` (ver `imagenes/LEEME.md` para los nombres)
- **Documento de diseño:** `estructura-web-vulcan-v3.md`

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias (una vez) |
| `npm run dev` | Sitio local en http://localhost:4321 con recarga automática |
| `npm run build` | Actualiza metales y textura, y genera el sitio en `dist/` |
| `npm run preview` | Muestra el sitio generado |
| `npm run metales` | Solo actualiza la cotización del día |
| `npm run textura` | Solo regenera la textura de fondo |

## Metales del día

`.github/workflows/metales.yml` actualiza `src/data/metales.json` de lunes a viernes a las 16:30 (Buenos Aires) y lo sube al repo. Si el hosting (Cloudflare Pages o Netlify) está conectado, cada subida vuelve a publicar el sitio.
