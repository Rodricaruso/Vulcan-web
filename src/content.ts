// Todo el texto y los datos del sitio viven acá. Los componentes no llevan textos propios.
// Los valores entre [corchetes] son pendientes de Rodrigo (ver sección 12 del MD).

export type Foto = {
  archivo: string; // ruta dentro de /imagenes, sin extensión. Si no está, se ve un placeholder.
  alt: string;
  etiqueta: string; // qué foto va ahí, se muestra en el placeholder
};

export type TipoMensaje = 'cliente' | 'modelado' | 'impresion' | 'marcas';

export const sitio = {
  nombre: 'Vulcan',
  ciudad: 'CABA, Buenos Aires',
  // Número de prueba (no existe): las bases del hackathon no permiten datos reales.
  whatsapp: '5491100000000',
  telefonoVisible: '+54 11 0000-0000',
  instagram: '', // TODO: 'https://instagram.com/usuario'
  title: 'Joyas a medida con impresión 3D en Buenos Aires | Vulcan',
  description:
    'Joyas a medida en CABA: diseñamos tu pieza en 3D, la imprimimos, la fundimos en plata u oro y la terminamos a mano. Contanos tu idea por WhatsApp.',
};

export const mensajes: Record<TipoMensaje, string> = {
  cliente: 'Hola Vulcan, vengo de la web (ref: {ref}). Quiero hacer una joya: ',
  modelado: 'Hola Vulcan, vengo de la web (ref: {ref}). Necesito modelar: ',
  impresion: 'Hola Vulcan, vengo de la web (ref: {ref}). Necesito imprimir: ',
  marcas: 'Hola Vulcan, vengo de la web (ref: {ref}). Tengo una marca y quiero producir: ',
};

export const acciones = {
  principal: 'Contanos tu idea',
  secundaria: 'Ver cómo lo hacemos',
};

export const menu = [
  { texto: 'Proceso', href: '/#proceso' },
  { texto: 'Catálogo', href: '/catalogo' },
  { texto: 'Trabajos', href: '/#trabajos' },
  { texto: 'El taller', href: '/taller' },
];

// ---------------------------------------------------------------- home --
// La home cuenta una sola pieza (el anillo sello) de la idea al metal.
// Las etapas usan las fotos de hero/.

export const transformacion = {
  titulo: 'Tu idea, forjada a medida',
  bajada: 'La diseñamos con vos en 3D, la pasamos a metal y la terminamos a mano en nuestro taller de CABA.',
  // Inscripción del canto de la moneda: los cuatro estados, en latín de inscripción.
  inscripcion: 'IDEA · FORMA · CERA · METALLVM · IDEA · FORMA · CERA · METALLVM ·',
  etapas: [
    { nombre: 'Boceto', detalle: 'Tu idea, en papel', foto: { archivo: 'hero/1-boceto', alt: 'Boceto a mano del escudo para un anillo sello', etiqueta: 'Boceto' } },
    { nombre: 'Modelo 3D', detalle: 'Cada medida, decidida con vos', foto: { archivo: 'hero/2-modelo-3d', alt: 'Modelo 3D del anillo sello con escudo en el programa de diseño', etiqueta: 'Modelo 3D' } },
    { nombre: 'Resina', detalle: 'Impresa en alto detalle', foto: { archivo: 'hero/3-resina', alt: 'El anillo sello impreso en resina de alto detalle, sostenido en la mano', etiqueta: 'Resina' } },
    { nombre: 'Metal', detalle: 'Fundida y pulida a mano', foto: { archivo: 'hero/4-metal', alt: 'El anillo sello terminado en metal, sostenido en la mano', etiqueta: 'Metal' } },
  ] satisfies { nombre: string; detalle: string; foto: Foto }[],
};

export const frases = [
  'Cada pieza empieza en una conversación.',
  'La diseñamos con vos, decisión por decisión: forma, metal, terminación.',
  'La impresora pone la precisión. Lo demás lo hacen las manos.',
];

export const recorrido = {
  titulo: 'Del 3D al metal',
  bajada: 'Es lo que más nos preguntan. Así pasa una pieza de la pantalla a tu mano.',
  pasos: [
    { titulo: 'Diseño', texto: 'Partimos de tu boceto, una foto o una frase. Definimos la pieza con vos.', dibujo: 'lapiz' },
    { titulo: 'Modelo 3D', texto: 'La dibujamos en CAD pensando en cómo se fabrica: espesores, engarces y la contracción del metal.', dibujo: 'malla' },
    { titulo: 'Impresión', texto: 'Un prototipo para probar tamaño y forma. Con tu OK, el modelo maestro en resina de alto detalle.', dibujo: 'capas' },
    { titulo: 'Molde', texto: 'Del modelo maestro sale un molde de silicona. En el molde se inyecta cera: una copia exacta.', dibujo: 'molde' },
    { titulo: 'Fundición', texto: 'La cera se reemplaza por metal fundido: es la cera perdida, la técnica de siempre.', dibujo: 'crisol' },
    { titulo: 'A mano', texto: 'Limado, engarce de piedras si lleva, y pulido en el banco hasta el brillo final.', dibujo: 'lima' },
  ] as { titulo: string; texto: string; dibujo: 'lapiz' | 'malla' | 'capas' | 'molde' | 'crisol' | 'lima' }[],
  fotoFinal: {
    archivo: 'proceso/5-terminacion',
    alt: 'Dos anillos sello con escudo terminados y pulidos a mano',
    etiqueta: 'Pieza terminada',
  } satisfies Foto,
  pieFoto: 'La pieza terminada en el banco, a mano.',
  // Latín de inscripción: "hecho a mano". Se talla letra por letra sobre la foto final.
  inscripcion: 'FACTVM · MANV',
  selloTexto: 'VULCAN · TALLER · CABA · HECHO A MANO ·',
  enlace: { texto: 'Ver el proceso completo', href: '/taller' },
};

export const vitrina = {
  titulo: 'Piezas de la casa',
  bajada: 'Todas se hacen por encargo: elegís talle, metal y terminación.',
  enlace: { texto: 'Ver el catálogo completo', href: '/catalogo' },
};

export const obra = {
  titulo: 'Lo que ya hicimos',
  bajada: 'Encargos reales, de la idea a la mano de quien lo pidió.',
};

export const taller = {
  meta: {
    title: 'El taller: cómo hacemos joyas con impresión 3D | Vulcan',
    description: 'Del modelo 3D al metal: impresión en resina, molde, cera perdida y terminación a mano. Servicios para joyeros y marcas, y el precio de los metales hoy.',
  },
  titulo: 'El taller, por dentro',
  bajada: 'Todo lo que pasa entre tu idea y la pieza en tu mano, con el detalle técnico.',
};

export const catalogo = {
  meta: {
    title: 'Catálogo de joyas a medida: anillos, dijes y aros | Vulcan',
    description: 'Anillos, dijes y aros de Vulcan. Cada pieza se hace por encargo en plata u oro, con tu talle y la terminación que elijas. Guía de talles incluida.',
  },
  titulo: 'Catálogo',
  bajada: 'Piezas de la casa. Todas se hacen por encargo: elegís talle, metal y terminación, y si querés la cambiamos a tu medida.',
  filtroTodas: 'Todas',
  talles: {
    titulo: 'Guía de talles',
    bajada: 'Para anillos, lo que importa es el diámetro interior. Medilo de una de estas dos formas:',
    metodos: [
      { titulo: 'Con un anillo que te quede bien', texto: 'Apoyalo sobre una regla y medí el diámetro interior, de borde a borde por dentro, en milímetros.' },
      { titulo: 'Con una tira de papel', texto: 'Rodeá la base del dedo con una tira finita, marcá donde se cruza y medí el largo: es la circunferencia.' },
    ],
    columnas: { diametro: 'Diámetro interior', circunferencia: 'Circunferencia' },
    nota: 'Medí a última hora del día, con el dedo templado: es cuando está más grande. Si estás entre dos medidas, elegí la más grande. Ante la duda, consultanos.',
    cadenasTitulo: 'Largo de cadena para dijes',
    aros: 'Para aros, las medidas de cada modelo están en su ficha.',
  },
};

// La orden de trabajo del cierre: el visitante elige y el mensaje sale escrito.
export const orden = {
  titulo: 'Ahora, tu pieza',
  bajada: 'Elegí lo que ya sepas. Lo que no, lo definimos juntos.',
  ficha: 'Orden de trabajo',
  campos: [
    // pregunta: lo que se lee en celular, donde la orden se completa de a un paso.
    { id: 'pieza', etiqueta: 'Pieza', pregunta: '¿Qué pieza querés?', opciones: ['Anillo', 'Dije', 'Aros', 'Otra'] },
    { id: 'metal', etiqueta: 'Metal', pregunta: '¿En qué metal?', opciones: ['Plata 925', 'Oro 18k', 'Alpaca', 'Bronce', 'No sé'] },
    { id: 'terminacion', etiqueta: 'Terminación', pregunta: '¿Qué terminación?', opciones: ['Pulido', 'Esmerilado', 'No sé'] },
    { id: 'piedra', etiqueta: 'Piedra', pregunta: '¿Lleva piedra?', opciones: ['Sí', 'No', 'No sé'] },
  ],
  idea: { etiqueta: 'Tu idea', pregunta: 'Último paso: tu idea', ayuda: 'Una frase alcanza. Las fotos o el boceto los mandás por WhatsApp.' },
  sellado: 'Sellada',
  enviar: 'Contanos tu idea',
  pie: 'Se abre WhatsApp con tu orden escrita. No se envía nada hasta que lo mandes vos.',
};

export const hero = {
  titulo: 'Hacemos lo que imaginaste: joyas a medida con impresión 3D',
  bajada:
    'Traenos un boceto o una idea. Lo diseñamos en 3D, imprimimos el modelo, lo pasamos a metal y lo terminamos a mano.',
  etapasTitulo: 'Una misma pieza, de la idea al metal',
  etapas: [
    { nombre: 'Boceto', foto: { archivo: 'hero/1-boceto', alt: 'Boceto a mano del escudo para un anillo sello', etiqueta: 'Boceto · 3:4' } },
    { nombre: 'Modelo 3D', foto: { archivo: 'hero/2-modelo-3d', alt: 'Modelo 3D de dos anillos sello con escudo en el programa de diseño', etiqueta: 'Render CAD · 3:4' } },
    { nombre: 'Resina', foto: { archivo: 'hero/3-resina', alt: 'Anillo sello impreso en resina de alto detalle, sostenido en la mano', etiqueta: 'Resina impresa · 3:4' } },
    { nombre: 'Metal', foto: { archivo: 'hero/4-metal', alt: 'Anillo sello con escudo terminado en metal, sostenido en la mano', etiqueta: 'Pieza terminada · 3:4' } },
  ] satisfies { nombre: string; foto: Foto }[],
};

export const pasos = [
  {
    titulo: 'Todo empieza con tu idea',
    texto:
      'Traenos un boceto, una foto de referencia o una frase. Lo bajamos a un modelo 3D que se pueda fabricar de verdad y lo ajustamos con vos hasta que sea lo que tenías en la cabeza.',
    items: [
      'Alcanza con un dibujo o una idea',
      'Formas que la joyería tradicional no puede hacer',
      'Ajustamos el diseño con vos hasta que te convenza',
    ],
    foto: { archivo: 'pasos/1-idea', alt: 'Boceto a mano del escudo para un anillo sello', etiqueta: 'Boceto o CAD en pantalla · vertical' },
  },
  {
    titulo: 'Después, la fabricación',
    texto:
      'Primero imprimimos un prototipo para que veas la forma y el tamaño reales. Con tu OK, imprimimos el modelo final en resina de alto detalle, hacemos el molde y lo pasamos a metal.',
    items: [
      'Prototipo en ABS para probar forma y tamaño',
      'Modelo maestro en resina de alto detalle',
      'Molde, cera y fundición a la cera perdida',
      'Engarce de piedras, si lleva, y terminación a mano',
    ],
    foto: { archivo: 'pasos/2-fabricacion', alt: 'Anillo sello impreso en resina de alto detalle', etiqueta: 'Prototipo ABS o resina · vertical' },
  },
  {
    titulo: 'Y te la entregamos',
    texto: 'Tu pieza llega lista para usar o para regalar, con packaging si lo necesitás.',
    items: [
      'Packaging [confirmar si es personalizado]',
      'Pieza única: se hace una sola, la tuya',
      'Retiro en CABA y envíos [confirmar alcance]',
    ],
    foto: { archivo: 'pasos/3-entrega', alt: 'Anillo sello con escudo terminado, puesto en la mano', etiqueta: 'Pieza en mano o packaging · vertical' },
    cta: true,
  },
] satisfies { titulo: string; texto: string; items: string[]; foto: Foto; cta?: boolean }[];

export const cinta = {
  frases: ['Diseño a medida', 'Del boceto al metal'],
  pausar: 'Pausar la cinta',
  reanudar: 'Reanudar la cinta',
};

export const trabajos = {
  titulo: 'Lo que ya hicimos',
  // TODO: reemplazar por los 4 casos reales. No inventar clientes ni frases.
  casos: [
    { nombre: 'Anillo sello con escudo', contexto: 'Plata 925. Del boceto a mano al anillo en metal, con el escudo en relieve.', foto: { archivo: 'trabajos/trabajo-1', alt: 'Dos anillos sello con escudo terminados, sobre una mesa de madera', etiqueta: 'Trabajo 1 · 3:4' } },
    { nombre: 'Aros rectangulares de plata', contexto: 'Plata 925. Hechos a mano en el banco: chapa cortada, plegada y soldada.', foto: { archivo: 'trabajos/aros-plata', alt: 'Par de aros rectangulares de plata pulida, parados sobre una base de madera', etiqueta: 'Trabajo 2 · 3:4' } },
    { nombre: 'Aros rectangulares dorados', contexto: 'El mismo diseño, con enchapado de oro.', foto: { archivo: 'trabajos/aros-dorados', alt: 'Par de aros rectangulares enchapados en oro, sobre papel de seda', etiqueta: 'Trabajo 3 · 3:4' } },
    { nombre: 'Solitario', contexto: 'Plata 925 con una circonia cúbica cuadrada, engarzada a garras en el banco.', foto: { archivo: 'trabajos/solitario', alt: 'Anillo solitario de plata con una circonia cuadrada engarzada, sostenido en la mano sobre el banco de joyero', etiqueta: 'Trabajo 4 · 3:4' } },
  ] satisfies { nombre: string; contexto: string; foto: Foto }[],
};

// Los **dobles asteriscos** marcan lo que va en negrita.
// Cada etapa tiene su foto: idealmente la misma pieza en los 5 momentos.
export const proceso = {
  titulo: 'Cómo lo hacemos, por dentro',
  etapas: [
    {
      titulo: 'Diseño',
      icono: 'pen-nib-light',
      texto: 'Partimos de tu **boceto, foto o idea** y definimos la pieza **con vos**.',
      foto: { archivo: 'proceso/1-diseno', alt: 'Boceto a mano del escudo para un anillo sello', etiqueta: 'Boceto · 4:5' },
    },
    {
      titulo: 'Modelado 3D',
      icono: 'cube-transparent-light',
      texto: 'La dibujamos en **CAD**, pensada para fabricarse: **espesores, engarces y contracción del metal**.',
      foto: { archivo: 'proceso/2-modelado-3d', alt: 'Modelo 3D de dos anillos sello con escudo', etiqueta: 'Render CAD · 4:5' },
    },
    {
      titulo: 'Impresión 3D',
      icono: 'stack-light',
      texto: '**Prototipo en ABS** para probar el tamaño. **Modelo maestro en resina de alto detalle** para el molde.',
      foto: { archivo: 'proceso/3-impresion-3d', alt: 'Anillo sello impreso en resina de alto detalle', etiqueta: 'Pieza impresa en resina · 4:5' },
    },
    {
      titulo: 'Fundición',
      icono: 'fire-light',
      texto: '**Molde de silicona**, cera y **cera perdida** en **plata, oro, alpaca o bronce**. El molde queda: **se puede repetir**.',
      foto: { archivo: 'proceso/4-fundicion', alt: 'Anillo sello en metal claro después de la fundición', etiqueta: 'Pieza fundida en bruto · 4:5' },
    },
    {
      titulo: 'Terminación',
      icono: 'diamond-light',
      texto: '**Engarce de piedras**, si lleva, y **pulido a mano** hasta el brillo final.',
      foto: { archivo: 'proceso/5-terminacion', alt: 'Dos anillos sello con escudo terminados y pulidos', etiqueta: 'Pieza terminada · 4:5' },
    },
  ] satisfies { titulo: string; icono: string; texto: string; foto: Foto }[],
};

export const servicios = {
  titulo: 'También trabajamos para joyeros y marcas',
  bajada: 'Si ya tenés taller o una marca, podés sumar solo la parte que te falta.',
  tarjetas: [
    {
      titulo: 'Modelado 3D',
      texto: 'Pasamos tu diseño a un archivo listo para imprimir y fundir.',
      items: [
        'Desde boceto o referencia',
        'Espesores y engarces pensados para fundición',
        'Archivo para tu impresora o la nuestra [formatos]',
      ],
      tipo: 'modelado',
      ref: 'web-modelado',
    },
    {
      titulo: 'Impresión 3D',
      texto: 'Imprimimos tus modelos para el taller.',
      items: [
        'Resina de alto detalle, resistente, se puede lijar: ideal para modelos maestros y moldes',
        'ABS para prototipos',
        'PLA para fundir directo (PLA perdido)',
      ],
      tipo: 'impresion',
      ref: 'web-impresion',
    },
    {
      titulo: 'Producción para marcas',
      texto: 'Producimos la línea de joyería de tu marca.',
      items: [
        'Diseño, modelado y molde propio',
        'Fundición en plata, oro, alpaca o bronce',
        'Desde [definir mínimo] unidades',
      ],
      tipo: 'marcas',
      ref: 'web-marcas',
    },
  ] satisfies { titulo: string; texto: string; items: string[]; tipo: TipoMensaje; ref: string }[],
  pie: 'Coordinamos la fundición y el engarce con nuestros proveedores, así no tenés que buscar a nadie más.',
};

export const metales = {
  titulo: 'Precio de los metales hoy',
  bajada:
    'La fundición se cobra con la cotización del día. Por eso no damos precios cerrados: te mostramos cómo está el metal hoy.',
  columnas: { metal: 'Metal', valor: 'Precio en pesos', variacion: 'Vs. día anterior' },
  aclaracion:
    'Referencia del metal según la cotización internacional, ajustada a la ley (925 y 18k). No es el precio de una pieza.',
  otros: 'Alpaca y bronce: consultanos.',
  sinDatos: 'La cotización de hoy no está disponible. Consultanos el precio del día por WhatsApp.',
  sube: 'Sube',
  baja: 'Baja',
  igual: 'Sin cambios',
  sinComparacion: 'Sin dato previo',
};

export type Pregunta = {
  pregunta: string;
  respuesta: string[];
  formula?: string[];
  link?: { texto: string; href: string };
};

export const preguntas: { titulo: string; items: Pregunta[] } = {
  titulo: 'Preguntas frecuentes',
  items: [
    {
      pregunta: '¿Tengo que tener el modelo 3D?',
      respuesta: ['No. Lo hacemos nosotros a partir de tu idea. Si ya tenés uno, lo revisamos y lo adaptamos para fundir.'],
    },
    {
      pregunta: '¿Cómo se cotiza una pieza?',
      respuesta: [
        'Depende de lo que imagines: el diseño, el tamaño, el metal y si lleva piedras. Mandanos tu idea y te pasamos el presupuesto. El precio se arma así:',
      ],
      formula: [
        'Diseño y modelado, según la complejidad',
        'Metal: gramos × precio del día',
        'Fundición y terminación',
        'Piedras y engarce, si lleva',
      ],
      link: { texto: 'Mirá el precio de los metales hoy', href: '#metales' },
    },
    {
      pregunta: '¿En qué metales trabajan?',
      respuesta: ['Plata 925, oro 18k, alpaca y bronce. Si buscás otro metal, consultanos y lo conseguimos.'],
    },
    {
      pregunta: '¿Trabajan con piedras?',
      respuesta: ['Sí. Diseñamos el engarce desde el modelo 3D y la piedra se elige con vos.'],
    },
    {
      pregunta: '¿Cuánto tarda una pieza?',
      respuesta: ['[Plazos reales por etapa: diseño, prototipo, fundición y terminación.]'],
    },
    {
      pregunta: '¿Se puede hacer una sola unidad?',
      respuesta: [
        'Sí. Cada encargo a medida es una pieza única. Para marcas, la producción arranca desde [definir mínimo] unidades.',
      ],
    },
    {
      pregunta: '¿Se nota que es impresa en 3D?',
      respuesta: [
        'No. La impresión 3D se usa para el modelo; la joya final es metal fundido y pulido a mano. Lo que cambia es el diseño: formas y texturas que a mano casi no se pueden lograr.',
      ],
    },
    {
      pregunta: '¿Hacen envíos?',
      respuesta: ['[Retiro en CABA y alcance de los envíos.]'],
    },
    {
      pregunta: 'Soy joyero, ¿me imprimen un modelo que ya tengo?',
      respuesta: [
        'Sí. Mandanos el archivo [formatos] y te decimos qué material conviene: resina para el modelo maestro o PLA para fundir directo.',
      ],
    },
    {
      pregunta: '¿Para quién es?',
      respuesta: [
        'Para quien quiere una joya única, para joyeros que necesitan modelado o impresión y para marcas que quieren producir su propia línea.',
      ],
    },
  ],
};

export const ctaFinal = {
  titulo: 'Ahora contanos qué imaginaste',
  texto: 'Mandanos tu idea, aunque sea un garabato. Te respondemos con cómo hacerla realidad.',
  fotos: [
    { archivo: 'cta-final/1', alt: 'Dos anillos sello con escudo terminados', etiqueta: 'Collage 1 · 3:4' },
    { archivo: 'cta-final/aros-plata-banco', alt: 'Aro rectangular de plata sobre el taco de madera del banco', etiqueta: 'Collage 2 · 3:4' },
    { archivo: 'cta-final/aros-dorados', alt: 'Par de aros rectangulares dorados sobre papel de seda', etiqueta: 'Collage 3 · 3:4' },
    { archivo: 'cta-final/solitario', alt: 'Anillo solitario con piedra blanca, sostenido en la mano', etiqueta: 'Collage 4 · 3:4' },
  ] satisfies Foto[],
};

export const pie = {
  menuExtra: { texto: 'Metales hoy', href: '/taller#metales' },
  privacidad: { texto: 'Política de privacidad', href: '/privacidad' },
};

export const textosUI = {
  saltar: 'Saltar al contenido',
  abrirMenu: 'Abrir menú',
  cerrarMenu: 'Cerrar menú',
  paso: 'Paso',
};
