# Imágenes de Vulcan

Soltá cada foto en su carpeta con **el nombre exacto** de esta lista. La extensión puede ser `.jpg`, `.png`, `.webp` o `.avif`.
Al compilar (`npm run build`) el sitio la encuentra sola, la recorta a la proporción y la convierte a WebP en varios tamaños.
Mientras falte una foto, en su lugar se ve un placeholder que indica qué archivo va ahí.

Subí las fotos en buena calidad (lado largo de 1500 px o más). No hace falta achicarlas.

## hero/ — la misma pieza en 4 etapas (3:4, vertical)

| Archivo | Qué va |
|---|---|
| `1-boceto` | Boceto a mano |
| `2-modelo-3d` | Render o captura del CAD |
| `3-resina` | La pieza impresa en resina |
| `4-metal` | La pieza terminada en metal |

Mismo encuadre y mismo fondo en las cuatro, así se lee como una transformación.

## proceso/ — la misma pieza en 5 etapas (4:5, vertical)

Se funden una con otra al scrollear: **mismo encuadre y fondo** es lo más importante.

| Archivo | Qué va |
|---|---|
| `1-diseno` | Boceto |
| `2-modelado-3d` | Render CAD |
| `3-impresion-3d` | Pieza impresa en resina |
| `4-fundicion` | Pieza recién fundida, en bruto |
| `5-terminacion` | Pieza terminada y pulida |

## pasos/ — una foto por paso (5:6, vertical)

| Archivo | Qué va |
|---|---|
| `1-idea` | Boceto o diseño en pantalla |
| `2-fabricacion` | Prototipo o pieza en resina |
| `3-entrega` | Pieza en mano o en su packaging |

## trabajos/ — 4 piezas terminadas (3:4, vertical)

`trabajo-1` (anillo sello), `aros-plata`, `aros-dorados`, `solitario`.
Los nombres, el texto y qué archivo usa cada uno se cambian en `src/content.ts`.

## cta-final/ — collage del cierre (3:4, vertical)

`1`, `aros-plata-banco`, `aros-dorados`, `solitario`. Pueden repetirse fotos de otras secciones.

## Fotos crudas

Las fotos originales bajadas de Drive están en `fotos-drive/` (fuera de esta carpeta y fuera de git).
Las elegidas se copian acá enderezadas y con el lado largo a 2000 px.

## catalogo/ — una foto por pieza (4:5, vertical)

Con el `id` de la pieza en `src/data/productos.ts`: `faro`, `fragua`, `corteza`, `ceniza`, `golpe`, `rocio`, `umbral`, `umbral-dorado`. Égida usa `trabajos/trabajo-1`.

## textura/

`marmol.avif`: la textura de fondo. Si la cambiás, corré `npm run textura` (o `npm run build`) para volver a generarla mezclada con el color de fondo.
