# Estructura web — Vulcan (v3)

Documento de trabajo para construir el sitio con Claude Code. La estructura sale de la página "How it's made" de Cloud Factory (https://www.cloudfactory.jewelry/). Los textos y las fotos son propios.

**Marca:** Vulcan (por Vulcano, el dios romano del fuego y la forja).
**Premisa:** "Hacemos lo que imaginaste." Joyería a medida, del boceto a la pieza en la mano.
**Tono:** cercano y canchero, voseo rioplatense, frases cortas. Directo, sin humo.
**Dónde:** CABA, Buenos Aires.
**Tipo de ruta:** marketing, Home / landing. Su trabajo es explicar el proceso y convertir en un mensaje de WhatsApp.

---

## Qué cambió respecto de la v2 y por qué

| Cambio | Motivo |
|---|---|
| Se corrigió el proceso: no se funde la resina | Vulcan no usa resina calcinable. El modelo maestro en resina de alto detalle se usa para hacer un molde y la cera inyectada es lo que se funde. Todo el texto técnico se reescribió (secciones 3.4 y 3.8). |
| FDM pasa a ser ABS (prototipo) y PLA perdido (fundición directa) | Son los materiales reales. El PLA perdido lo ofrece el fundidor y funciona. |
| "DLP" sale del contenido | Se habla de "impresión en resina de alto detalle", sin nombrar la tecnología de la impresora. |
| Se agregó la sección **Servicios** | Hay tres públicos más además del cliente final: joyeros (modelado), gremio (impresión) y marcas (producción). |
| Se agregó la sección **Metales hoy** | El fundidor cobra según la cotización del día. Mostrarla es honesto y explica por qué no hay precio cerrado. |
| Precios: todo es "Consultanos" | El precio depende demasiado de lo que imagina el cliente (piedras, tamaño, metal). La FAQ explica cómo se arma, sin montos. |
| El hero pasa de video a **secuencia de 4 fotos** | No hay video todavía. Las 4 etapas de una misma pieza cuentan la misma historia. El video entra más adelante. |
| Paleta definida y verificada | A partir de `#1D0605` y `#BF9B74`, con contraste medido (sección 2). |
| Datos estructurados: `JewelryStore` en vez de `Organization` | Hay dirección (CABA), así que conviene la señal de negocio local. |
| Colección propia → fase 2 | Se suma con la estrategia del "modelo del mes" (sección 11). |

---

## 1. Arquitectura de la página

Para el lanzamiento, esta página es la **Home** y el menú navega por anclas:

| Menú | Ancla |
|---|---|
| Cómo lo hacemos | `#proceso` |
| Trabajos | `#trabajos` |
| Servicios | `#servicios` |
| Preguntas | `#preguntas` |
| Botón: Contanos tu idea | WhatsApp |

"Metales hoy" (`#metales`) no va en el menú: se llega desde la FAQ de precios y desde el footer.

**Orden de las secciones:**

1. Navbar
2. Hero (secuencia de 4 etapas)
3. Tres pasos (idea → fabricación → entrega)
4. Cinta
5. Trabajos (prueba)
6. Cómo lo hacemos (tecnología)
7. Servicios (joyeros, gremio, marcas)
8. Metales hoy
9. Preguntas frecuentes
10. CTA final
11. Footer

Historia: promesa → proceso → prueba → detalle técnico → otros públicos → transparencia de precios → objeciones → convertir.

**Jerarquía de ofertas:** la página le habla primero al cliente final (joya a medida), que es lo que Vulcan ya vende y tiene con qué mostrar. Joyeros, gremio y marcas tienen su bloque, pero no compiten con el hero.

---

## 2. Dirección visual

**Lo memorable (se gasta la audacia en un solo lugar):** la tira del hero con las 4 etapas de **la misma pieza**: boceto → modelo 3D → resina → metal. Todo lo demás es sobrio.

**Concepto:** taller de fundición. Por un lado, la inscripción romana (Vulcano, el metal, lo que perdura); por el otro, la precisión técnica (CAD, impresión, gramos, cotizaciones). Las dos voces tipográficas representan esas dos mitades.

### Color

Base oscura sacada de la forja. **Un solo acento: Bronce.** Contrastes medidos con la fórmula WCAG.

| Token | Nombre | Hex | Uso | Contraste |
|---|---|---|---|---|
| `--color-bg` | Forja | `#1D0605` | Fondo principal (60 %) | — |
| `--color-surface` | Fragua | `#2A100C` | Tarjetas, navbar, bloques (30 %) | — |
| `--color-surface-2` | Escoria | `#361812` | Superficie elevada: acordeón abierto, hover | — |
| `--color-accent` | Bronce | `#BF9B74` | Botones, links, foco, cinta (10 %) | 7,55 sobre Forja |
| `--color-accent-hover` | Bronce claro | `#D3B48F` | Hover del botón principal | 9,90 con texto Forja |
| `--color-text` | Cera | `#F2E9DF` | Texto principal sobre oscuro | 16,19 sobre Forja |
| `--color-text-muted` | Ceniza | `#B8A595` | Texto secundario, meta | 8,19 sobre Forja |
| `--color-accent-on-light` | Bronce profundo | `#6B4A2C` | Links y acento sobre fondo Cera | 6,62 sobre Cera |
| `--color-up` | Salvia | `#8FAE7E` | Metales: sube (siempre con ▲) | 7,89 sobre Forja |
| `--color-down` | Cobre | `#D9826A` | Metales: baja (siempre con ▼) | 6,80 sobre Forja |

**Reglas de color**
- **Bronce nunca sobre Cera** (2,15: ilegible). En la sección clara el acento pasa a Bronce profundo y el botón principal va en Forja con texto Cera.
- Botón principal: fondo Bronce, texto Forja. Color sólido, sin degradés.
- Bordes de superficies: Cera al 10 % de opacidad, 1 px. Sin sombras en oscuro.
- Suba y baja nunca se comunican solo con color: llevan ▲▼ y texto.
- **Fondo alternativo** (sección "Cómo lo hacemos"): Cera `#F2E9DF` con texto Forja.
- **Textura de piedra** sobre todo el fondo oscuro: `imagenes/textura/marmol.avif` en luz fuerte (hard light) al 12 % sobre Forja. Se hornea con `scripts/hornear-textura.mjs` (no se mezcla en el navegador): se vuelve continua (seamless), se arma una baldosa de 2 copias (1480 px, sin estirar) y va en mosaico, cada baldosa al ancho de la web, repitiéndose hacia abajo y **moviéndose con el scroll** (no fija). Las secciones oscuras son transparentes; la clara, las tarjetas y el navbar la tapan.

### Tipografía (placeholder, a confirmar)

| Rol | Familia | Pesos | Por qué |
|---|---|---|---|
| Display | **Marcellus** (Google Fonts) | 400 (único) | Romana con remates abiertos, como letra grabada en piedra. Habla de Vulcano sin caer en Cinzel o Trajan, que son el cliché "romano". Se usa con moderación: logo, H1, H2. |
| Cuerpo | **IBM Plex Sans** | 400 / 500 / 600 | Grotesca con espíritu de ingeniería: el lado CAD de la marca. Muy legible en párrafos. |
| Datos | **IBM Plex Mono** | 400 / 500 | Cotizaciones, gramos y las etiquetas de las etapas del hero. Solo donde hay datos. |

- **Logo placeholder:** "VULCAN" en Marcellus, mayúsculas, interletrado `0.18em`, en Cera (o Forja sobre claro). Se reemplaza por el logo real sin tocar el layout (contenedor de alto fijo).
- Cuerpo 16 px, secundario 14 px, meta 12 px. Nada por debajo de 12 px.
- Interlineado: títulos 1,1–1,25 y cuerpo 1,5–1,6. Líneas de 65–75 caracteres como máximo.
- Ningún peso por encima de 600.
- Evitar: resaltar una palabra del título en otro color o en cursiva, etiquetas en MAYÚSCULAS sobre cada título (el logo es la única excepción) y flechas `→` en los botones.

### Forma y espaciado

- **Un solo radio para toda la página: 4 px.**
- Escala de espaciado: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px.
- Solo `main` tiene `max-width: 1280px`.

### Numeración

Los 3 pasos y las 4 etapas del hero son secuencias reales: pueden llevar número. El resto del contenido no se numera.

### Anti-relleno

- Sin degradés en botones. Sin vidrio esmerilado (`backdrop-filter`).
- Sin ilustraciones de personajes. Todo es fotografía real (o render real del CAD).
- Sin íconos decorativos dentro de campos ni "pastillas" alrededor de texto que no es un filtro.
- Sin chispas de cuatro puntas, llamas ni martillos de clip-art como decoración.

### Movimiento

- **Dos momentos orquestados:** la carga del hero y el recorrido fijado de "Cómo lo hacemos, por dentro" (3.8), que va atado al scroll y no se reproduce solo.
- Carga del hero: Las 4 etapas aparecen de izquierda a derecha (opacity + translateY de 8 px, 300 ms cada una, escalonadas cada 100 ms, ease-out).
- Nada de entradas "fade + slide" en cada sección ni efectos de hover en todas las tarjetas.
- Duraciones: 100, 150, 200 o 300 ms. Entrada ease-out, salida ease-in.
- Solo `transform` y `opacity`. Sin rebotes.
- Se resuelve con CSS. No hace falta una librería de animación.

---

## 3. Secciones

### 3.1 Navbar (fijo)

- Izquierda: logo.
- Centro: `Cómo lo hacemos · Trabajos · Servicios · Preguntas`.
- Derecha: botón **"Contanos tu idea"** (ref: `web-menu`).
- Mobile: logo + botón + menú hamburguesa de 44×44 px con las mismas anclas.

### 3.2 Hero

- **Layout desktop:** H1, bajada y acciones arriba a la izquierda. Debajo, a todo el ancho de `main`, la **tira de 4 fotos 3:4** de la misma pieza.
- **Layout mobile:** texto arriba; la tira pasa a una grilla de 2×2.
- **Etapas** (etiqueta en Plex Mono debajo de cada foto, numerada porque es una secuencia):
  1. Boceto
  2. Modelo 3D
  3. Resina
  4. Plata 925 *(o el metal real de esa pieza)*
- **H1:** "Hacemos lo que imaginaste: joyas a medida con impresión 3D"
- **Bajada:** "Traenos un boceto o una idea. Lo diseñamos en 3D, imprimimos el modelo, lo pasamos a metal y lo terminamos a mano."
- **Acciones:**
  - Primaria: "Contanos tu idea" (ref: `web-hero`).
  - Secundaria: "Ver cómo lo hacemos" (ancla `#proceso`).
- Las fotos no se mueven en loop, así que no necesitan control de pausa. Cuando haya video, vuelve el control de pausa/play de 44×44 px.
- **Texto en HTML.** Las etiquetas de etapa también.

### 3.3 Paso 1 — "Todo empieza con tu idea"

- **Layout:** imagen vertical a la izquierda (~40 %), texto a la derecha (~60 %). En mobile, imagen arriba.
- **Párrafo:** "Traenos un boceto, una foto de referencia o una frase. Lo bajamos a un modelo 3D que se pueda fabricar de verdad y lo ajustamos con vos hasta que sea lo que tenías en la cabeza."
- **Bullets:**
  - Alcanza con un dibujo o una idea
  - Formas que la joyería tradicional no puede hacer
  - Ajustamos el diseño con vos hasta que te convenza

### 3.4 Paso 2 — "Después, la fabricación" (layout espejado)

- **Párrafo:** "Primero imprimimos un prototipo para que veas la forma y el tamaño reales. Con tu OK, imprimimos el modelo final en resina de alto detalle, hacemos el molde y lo pasamos a metal."
- **Bullets:**
  - Prototipo en ABS para probar forma y tamaño
  - Modelo maestro en resina de alto detalle
  - Molde, cera y fundición a la cera perdida
  - Engarce de piedras, si lleva, y terminación a mano

> **Ojo técnico (para que el contenido sea correcto):** la resina de alto detalle **no se funde**. Es el modelo maestro: es resistente, se puede lijar y pulir, y con él se hace un molde de silicona. En el molde se inyecta cera, y esa cera es la que se funde a la cera perdida. Ventaja que hay que contar: **el molde permite repetir la pieza**. La fundición y el engarce son tercerizados: en el texto se dice "fundimos" en sentido de proceso, pero en Servicios se dice "coordinamos la fundición".

### 3.5 Paso 3 — "Y te la entregamos"

- **Párrafo:** "Tu pieza llega lista para usar o para regalar, con packaging si lo necesitás."
- **Bullets** (dejar solo los que sean verdad):
  - Packaging *[confirmar si es personalizado]*
  - Pieza única: se hace una sola, la tuya
  - Retiro en CABA y envíos *[confirmar alcance]*
- Al final del bloque, repetir el CTA primario: "Contanos tu idea" (ref: `web-pasos`).

### 3.6 Cinta

- Banda inclinada ~−2°, fondo Bronce, texto Forja grande en loop.
- **Frases (alternan):** "Diseño a medida" · "Del boceto al metal"
- **Separador:** ícono de **gota de metal fundido** (lo que sale del crisol). Hace referencia a la fundición sin caer en el martillo o la llama. SVG simple, monolínea o sólido.
- **Reglas:**
  - El contenedor lleva `overflow: clip` para que la inclinación no genere scroll horizontal.
  - Se pausa al pasar el mouse o al enfocar con teclado, y tiene un botón de pausa de 44×44 px (se mueve más de 5 s).
  - Con `prefers-reduced-motion`, queda quieta, con la frase una sola vez.
  - Es decorativa: el texto en loop va con `aria-hidden` y la frase se lee una sola vez para lectores de pantalla.
- **Decisión consciente:** es un loop decorativo infinito. Se mantiene porque es parte de la estructura de la referencia. Si molesta, se saca sin romper nada.

### 3.7 Trabajos (prueba)

- **Opción B:** grilla de 4 casos con foto, nombre y una línea de contexto. Si después algún cliente da una frase, se pasa a la opción A (collage + cita).
- **H2:** "Lo que ya hicimos"
- Incluir la pieza con piedra que ya está hecha.
- **Reglas:** no inventar clientes ni frases. Sin autorización del cliente, va como "Encargo a medida" o con iniciales. Cada caso cuenta qué se pidió y qué se hizo, sin cifras inventadas.
- **CTA:** "Contanos tu idea" (ref: `web-trabajos`).
- **Assets:** 4 fotos verticales 3:4, mínimo 900×1200 px.

### 3.8 Cómo lo hacemos, por dentro (fondo alternativo, Cera)

- **Recorrido fijado (pedido de Rodrigo):** la sección queda fija en pantalla mientras se scrollea por las 5 etapas (~70 % de pantalla de scroll por etapa). La etapa activa gana peso (texto pleno, ícono relleno en Bronce profundo) y la foto **se funde gradualmente** con la de la etapa siguiente (se queda quieta al principio y al final de cada tramo y se funde en el medio).
- **Desktop:** lista completa a la izquierda con línea vertical que se rellena con el avance; foto 4:5 a la derecha.
- **Mobile:** título, foto, barra de avance de 5 tramos y solo la etapa activa.
- **Reduced motion:** el recorrido se mantiene, pero las fotos cambian de golpe, sin fundido.
- **Íconos:** Iconify, Phosphor Light, insertados como SVG al compilar.
- **Etapas** (las negritas van en el texto):
  1. **Diseño** (`pen-nib-light`): "Partimos de tu **boceto, foto o idea** y definimos la pieza **con vos**." Foto: boceto.
  2. **Modelado 3D** (`cube-transparent-light`): "La dibujamos en **CAD**, pensada para fabricarse: **espesores, engarces y contracción del metal**." Foto: render CAD.
  3. **Impresión 3D** (`stack-light`, capas): "**Prototipo en ABS** para probar el tamaño. **Modelo maestro en resina de alto detalle** para el molde." Foto: pieza impresa.
  4. **Fundición** (`fire-light`): "**Molde de silicona**, cera y **cera perdida** en **plata, oro, alpaca o bronce**. El molde queda: **se puede repetir**." Foto: pieza fundida en bruto.
  5. **Terminación** (`diamond-light`): "**Engarce de piedras**, si lleva, y **pulido a mano** hasta el brillo final." Foto: pieza terminada.
- **Assets:** 5 fotos 4:5 de **la misma pieza**, mismo encuadre y fondo, para que el fundido se lea como una transformación.

### 3.9 Servicios (`#servicios`)

- **H2:** "También trabajamos para joyeros y marcas"
- **Bajada:** "Si ya tenés taller o una marca, podés sumar solo la parte que te falta."
- **Tres tarjetas** (misma estructura: título, 2–3 líneas, lista corta, CTA "Contanos tu idea"):

| Tarjeta | Texto | Bullets | Ref |
|---|---|---|---|
| **Modelado 3D** | "Pasamos tu diseño a un archivo listo para imprimir y fundir." | Desde boceto o referencia · Espesores y engarces pensados para fundición · Archivo para tu impresora o la nuestra *[confirmar formatos: STL / 3MF / etc.]* | `web-modelado` |
| **Impresión 3D** | "Imprimimos tus modelos para el taller." | Resina de alto detalle, resistente, se puede lijar: ideal para modelos maestros y moldes · ABS para prototipos · PLA para fundir directo (PLA perdido) | `web-impresion` |
| **Producción para marcas** | "Producimos la línea de joyería de tu marca." | Diseño, modelado y molde propio · Fundición en plata, oro, alpaca o bronce · Desde *[definir mínimo]* unidades | `web-marcas` |

- Línea al pie: "Coordinamos la fundición y el engarce con nuestros proveedores, así no tenés que buscar a nadie más."
- **Sin logos ni casos de marcas** hasta tener el primero real.

### 3.10 Metales hoy (`#metales`)

- **H2:** "Precio de los metales hoy"
- **Bajada:** "La fundición se cobra con la cotización del día. Por eso no damos precios cerrados: te mostramos cómo está el metal hoy."
- **Tabla** (números en Plex Mono):

| Metal | Precio por gramo (ARS) | Variación vs. día anterior |
|---|---|---|
| Plata 925 | $X | ▲ / ▼ % |
| Oro 18k | $X | ▲ / ▼ % |
| Dólar BNA (venta) | $X | ▲ / ▼ % |

- **Pie:** "Referencia del metal según la cotización internacional, ajustada a la ley (925 y 18k). No es el precio de una pieza. Actualizado el `dd/mm/aaaa`."
- **Alpaca y bronce:** no se muestran (no tienen una cotización pública útil). Línea: "Alpaca y bronce: consultanos."
- **CTA:** "Contanos tu idea" (ref: `web-metales`).

**Cómo funciona por dentro**
- Una vez por día se ejecuta un proceso que trae (a) dólar Banco Nación venta y (b) precio internacional de la plata y el oro en USD por onza troy.
- Cálculo: `USD/oz ÷ 31,1035 = USD/g fino` → `× ley (0,925 o 0,75)` → `× dólar BNA venta` = ARS por gramo.
- El resultado se guarda en un JSON y **el sitio se reconstruye**: los precios quedan escritos en el HTML (los lee Google y no dependen de que una API responda en el navegador).
- Si una fuente falla, se mantiene el último valor con **su fecha real**. Nunca se muestra un número viejo como si fuera de hoy.
- **Fuentes a verificar en la implementación:** API pública del dólar oficial BNA (por ejemplo, dolarapi.com, chequeando que sea BNA venta) y una API de metales con plan gratuito diario. Elegirlas al construir, sin claves expuestas en el navegador.

### 3.11 Preguntas frecuentes (acordeón)

Una sola pregunta abierta a la vez. El contenido está en el HTML aunque esté cerrado. Cada respuesta abre con la respuesta directa en 1–3 frases.

1. **¿Tengo que tener el modelo 3D?** No. Lo hacemos nosotros a partir de tu idea. Si ya tenés uno, lo revisamos y lo adaptamos para fundir.
2. **¿Cómo se cotiza una pieza?** Depende de lo que imagines: el diseño, el tamaño, el metal y si lleva piedras. Mandanos tu idea y te pasamos el presupuesto. El precio se arma así:
   > **Tu pieza =** diseño y modelado (según la complejidad) **+** metal (gramos × precio del día) **+** fundición y terminación **+** piedras y engarce, si lleva.

   Link: "Mirá el precio de los metales hoy" → `#metales`.
3. **¿En qué metales trabajan?** Plata 925, oro 18k, alpaca y bronce. Si buscás otro metal, consultanos y lo conseguimos.
4. **¿Trabajan con piedras?** Sí. Diseñamos el engarce desde el modelo 3D y la piedra se elige con vos.
5. **¿Cuánto tarda una pieza?** *[Plazos reales por etapa: diseño, prototipo, fundición, terminación.]*
6. **¿Se puede hacer una sola unidad?** Sí. Cada encargo a medida es una pieza única. Para marcas, la producción arranca desde *[definir mínimo]*.
7. **¿Se nota que es impresa en 3D?** No. La impresión 3D se usa para el modelo; la joya final es metal fundido y pulido a mano. Lo que cambia es el diseño: formas y texturas que a mano casi no se pueden lograr.
8. **¿Hacen envíos?** *[Retiro en CABA / alcance de envíos.]*
9. **Soy joyero, ¿me imprimen un modelo que ya tengo?** Sí. Mandanos el archivo *[formatos]* y te decimos qué material conviene: resina para el modelo maestro o PLA para fundir directo.
10. **¿Para quién es?** Para quien quiere una joya única, para joyeros que necesitan modelado o impresión y para marcas que quieren producir su propia línea.

### 3.12 CTA final

- **H2:** "Ahora contanos qué imaginaste"
- **Línea:** "Mandanos tu idea, aunque sea un garabato. Te respondemos con cómo hacerla realidad."
- **Botón:** "Contanos tu idea" (ref: `web-final`).
- Collage de 3–4 fotos (se pueden reutilizar de Trabajos y del hero).

### 3.13 Footer

- Logo, menú (las mismas anclas + "Metales hoy"), Instagram *[usuario]* y WhatsApp.
- "CABA, Buenos Aires".
- Línea inferior: © año Vulcan · Política de privacidad.
- No lleva un tercer pitch comercial.

---

## 4. Contrato de pantallas

- **Tres anchos de referencia:** 375 px, 768 px y 1280 px.
- **Sin scroll horizontal** a 375 ni a 1280 (`scrollWidth <= clientWidth`). Sospechosos: la cinta y la tira del hero.
- Solo `main` tiene `max-width: 1280px` y va centrado. Header, footer y fondos ocupan el 100 %.
- **Áreas táctiles mínimas de 44×44 px:** hamburguesa, pausa de la cinta, filas del acordeón, íconos de redes, botones.
- Nada depende solo del hover.
- Grillas en una columna en mobile (excepción: la tira del hero en 2×2).
- La tabla de metales no genera scroll horizontal a 375 px.

---

## 5. Accesibilidad y teclado

- Link "Saltar al contenido" como primer elemento enfocable.
- Anillo de foco visible (`:focus-visible`, 2 px en Bronce con separación de 2 px; en la sección clara, Bronce profundo). Nunca `outline: none` sin reemplazo.
- Acordeón: `button` con `aria-expanded`, que se abre con Enter y Espacio.
- Menú mobile: se cierra con Esc, mantiene el foco adentro mientras está abierto y devuelve el foco al botón al cerrarse.
- `prefers-reduced-motion: reduce`: el hero aparece sin animación, la cinta queda quieta y el acordeón abre sin animar.
- Todo lo que se mueve más de 5 segundos tiene control de pausa (cinta).
- Contraste AA como mínimo (todos los pares de la paleta están verificados en la sección 2).
- La variación de los metales se comunica con ▲▼ y texto, no solo con color.
- Botones con verbo primero, en minúscula salvo la inicial: "Contanos tu idea", "Ver cómo lo hacemos".

---

## 6. SEO y visibilidad en buscadores de IA

> Las palabras clave son hipótesis. Validar volúmenes con Google Keyword Planner o Search Console.

| Intención | Ejemplos |
|---|---|
| Transaccional (Home) | "joyas a medida CABA", "joyería personalizada Buenos Aires", "anillos a medida" |
| Comercial | "joyas impresas en 3D", "joyería con impresión 3D" |
| Gremio | "impresión 3D resina joyería", "modelado 3D joyería", "modelos para fundición" |
| Marcas | "producción de joyería para marcas" |
| Informativa (futuro) | "fundición a la cera perdida", "cómo se hace una joya con impresión 3D", "PLA perdido" |

**On-page**

| Elemento | Valor |
|---|---|
| Title (56 caracteres) | `Joyas a medida con impresión 3D en Buenos Aires \| Vulcan` |
| Meta description (146 caracteres) | "Joyas a medida en CABA: diseñamos tu pieza en 3D, la imprimimos, la fundimos en plata u oro y la terminamos a mano. Contanos tu idea por WhatsApp." |
| H1 | Uno solo, el del hero |
| H2 | Uno por sección; los de la FAQ, redactados como preguntas |
| Imágenes | Nombre de archivo descriptivo y `alt` que describe la pieza ("Anillo a medida en plata 925, pulido a mano") |

**Datos estructurados:** `JewelryStore` (nombre, logo, `areaServed`/dirección en CABA, teléfono, `sameAs` con Instagram) y `FAQPage`. Cuando haya video: `VideoObject`.

**Renderizado:** todo el texto importante (H1, bajada, pasos, servicios, metales, FAQ) está en el HTML que envía el servidor.

**IA (AEO/GEO):** respuestas directas al comienzo de cada bloque, preguntas como encabezados y nombre, ciudad y WhatsApp iguales en la web, Instagram y Google Business Profile (crearlo). Revisar cada 3 meses cómo aparece Vulcan en las respuestas de buscadores de IA.

---

## 7. Lista de assets

**Fotos**

| # | Dónde | Contenido | Formato |
|---|---|---|---|
| 1–4 | Hero | **La misma pieza** en 4 etapas: boceto, render/CAD, resina impresa, metal terminado | 3:4, mín. 900×1200 px, mismo encuadre y fondo si es posible |
| 5–7 | Pasos | Boceto/CAD en pantalla · prototipo ABS o resina · pieza terminada en mano o en packaging | Vertical, mín. 1000×1120 px |
| 8–11 | Trabajos | 4 piezas terminadas (incluida la de piedra) | 3:4, mín. 900×1200 px |
| 12–16 | Cómo lo hacemos | La misma pieza en 5 momentos: boceto, render CAD, impresa, fundida en bruto, terminada | 4:5, mín. 1000×1250 px, mismo encuadre |
| 13–15 | Servicios | Pantalla de CAD · modelo en resina · pieza para marca (o placeholder) | 4:3 |
| — | CTA final | 3–4 fotos reutilizadas | — |

**Gráficos**
- Logo (SVG, versión clara y oscura). Mientras tanto: placeholder tipográfico.
- Open Graph 1200×630 px y favicon.
- Íconos SVG: gota de metal (cinta), Instagram, WhatsApp, chevron del acordeón.

**Video (fase 2):** el proceso con la pieza que se está haciendo ahora. Reemplaza la foto sticky de "Cómo lo hacemos" y, si queda bien, entra al hero.

Mientras no estén las fotos, se usan placeholders con las proporciones exactas.

---

## 8. Datos y medición

- **WhatsApp:** `https://wa.me/5491131002597?text=<mensaje codificado>`. El número vive en un solo lugar del archivo de contenido.
- **Origen dentro del mensaje** (WhatsApp ignora parámetros extra):

| Público | Mensaje prellenado |
|---|---|
| Cliente final | "Hola Vulcan, vengo de la web (ref: web-hero). Quiero hacer una joya: " |
| Modelado | "Hola Vulcan, vengo de la web (ref: web-modelado). Necesito modelar: " |
| Impresión | "Hola Vulcan, vengo de la web (ref: web-impresion). Necesito imprimir: " |
| Marcas | "Hola Vulcan, vengo de la web (ref: web-marcas). Tengo una marca y quiero producir: " |

- **Códigos:** `web-menu`, `web-hero`, `web-pasos`, `web-trabajos`, `web-modelado`, `web-impresion`, `web-marcas`, `web-metales`, `web-faq`, `web-final`.
- Registrar cada clic en un CTA como evento de analytics con el mismo código.
- Verificar con datos reales qué porcentaje viene de celular.

---

## 9. Qué cambia respecto de la referencia

1. CTA en el hero y al cierre de los pasos.
2. FAQ de cotización con la fórmula y sin montos.
3. Sin "Sustentabilidad" ni claims ambientales.
4. Menú con anclas.
5. Trabajos (casos) en lugar de testimonio.
6. Un solo acento de color.
7. Hero con secuencia de fotos en vez de video.
8. Secciones nuevas: Servicios y Metales hoy.

---

## 10. Plan de trabajo con Claude Code

**Tecnología:** Astro (sitio estático), contenido en `src/content.ts`, CSS con variables (sin framework de UI). Alojamiento: Cloudflare Pages o Netlify. Reconstrucción diaria para "Metales hoy" con una tarea programada (GitHub Actions o el cron del hosting).

1. **Plan:** pasar este documento a tareas chicas.
2. **Tokens:** color, tipografía, espaciado, radio y movimiento en variables CSS.
3. **Contenido separado:** textos, WhatsApp y códigos en `content.ts`.
4. **Componentes:** uno por sección, sin textos adentro.
5. **Metales:** script que trae las cotizaciones, calcula y guarda el JSON, con fallback.
6. **Armado** con placeholders de proporciones correctas.
7. **Revisión:** diseño, accesibilidad y SEO on-page.
8. **Verificación:** nada se da por terminado sin correr los chequeos de abajo.

**Criterios de aceptación (con evidencia):**

- [ ] A 375 px y a 1280 px no hay scroll horizontal.
- [ ] Todo se usa solo con teclado (Tab, Enter, Espacio, Esc) y el foco siempre se ve.
- [ ] Con `prefers-reduced-motion: reduce` no se mueve nada.
- [ ] Áreas táctiles de 44×44 px verificadas.
- [ ] En el código fuente: H1, bajada, pasos, servicios, metales y FAQ están en el HTML.
- [ ] Un solo H1; títulos sin saltos de nivel; imágenes con `alt`.
- [ ] Title ≤60 y meta ≤160 caracteres.
- [ ] Todo CTA primario dice exactamente "Contanos tu idea"; el secundario, "Ver cómo lo hacemos".
- [ ] Cada CTA lleva su código `web-*` en el mensaje.
- [ ] Metales: muestra fecha y fuente; si falla la fuente, se ve el último valor con su fecha real.
- [ ] Imágenes en WebP/AVIF; Lighthouse en mobile sin errores graves.

---

## 11. Futuro

- **Colección propia — "modelo del mes":** cada mes se presenta un anillo nuevo en digital (render o impresión en resina). El primero que lo compra paga el costo del molde y recién ahí se habilita la venta. Sirve para no producir stock sin demanda y para generar contenido para redes. En la web: sección "Diseños" con `piezas[]` con `tipo: "caso" | "diseño"` y `estado: "digital" | "disponible"`, con el botón "Pedir este anillo". Arranca con los 5 modelos que ya tienen molde, una vez fotografiados.
- **Video del proceso** (pieza en curso): hero y "Cómo lo hacemos".
- **Separar en URLs:** `/trabajos`, `/disenos`, `/servicios` (gremio) cuando haya contenido. Una sola URL no posiciona para tantas intenciones distintas.
- **Artículos:** "Cómo se hace una joya con impresión 3D", "Qué es la cera perdida", "PLA perdido: cuándo conviene".

---

## 12. Pendientes de Rodrigo

- [ ] Logo final (hasta entonces, placeholder tipográfico).
- [ ] Confirmar tipografías (placeholder: Marcellus + IBM Plex Sans/Mono).
- [ ] Fotos: elegir la pieza del hero con sus 4 etapas y los 4 trabajos.
- [ ] Plazos reales por etapa.
- [ ] Retiro y alcance de envíos.
- [ ] Packaging: ¿personalizado?
- [ ] Mínimo de unidades para marcas.
- [ ] Formatos de archivo que aceptás del gremio.
- [ ] Usuario de Instagram.
- [ ] Cuenta de GitHub y hosting (para la reconstrucción diaria).
- [ ] Analytics (recomendado GA4, por los eventos por CTA) y texto de la política de privacidad.
