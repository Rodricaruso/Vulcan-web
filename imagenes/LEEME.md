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

## casos/ — una carpeta para las tres páginas de casos

Cada caso tiene una portada y una foto por paso de la historia (`src/content.ts`, `casos`). Las portadas son 4:5; las de los pasos pueden tener otra proporción (se indica en `content.ts`).

| Archivo | Qué va |
|---|---|
| `arqueria-portada` | El anillo de la escuela. Hoy es un render con fondo transparente, sobre degradé |
| `arqueria-1-logo` … `arqueria-4-impresion` | Logo (simplificado y original), propuesta con IA, modelo 3D, impresión en resina |
| `medalla-portada-mesa` | La medalla del casamiento, sobre la mesa de madera |
| `medalla-1-referencia` … `medalla-4-medalla` | Imagen del cliente, modelo 3D, prueba impresa, medalla |
| `medalla-recorte` | La medalla recortada en círculo, con fondo transparente (de reserva, no se usa) |

El sello familiar usa las fotos de `hero/` y `trabajos/trabajo-1`.

## originales/

Las fotos tal como llegaron, antes de renombrarlas o recortarlas. La web no las usa; quedan de archivo. Las de los casos están en `originales/casos/`.
