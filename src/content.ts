// Todo el texto y los datos del sitio viven acá. Los componentes no llevan textos propios.
// Los valores entre [corchetes] son pendientes de Rodrigo (ver sección 12 del MD).

export type Foto = {
  archivo: string; // ruta dentro de /imagenes, sin extensión. Si no está, se ve un placeholder.
  alt: string;
  etiqueta: string; // qué foto va ahí, se muestra en el placeholder
};

export type TipoMensaje = 'cliente' | 'modelado' | 'impresion' | 'marcas' | 'gremio';

export const sitio = {
  nombre: 'Vulcan',
  ciudad: 'Belgrano, CABA',
  // El barrio va al schema: el taller está en Belgrano, lejos de las joyerías del centro.
  barrio: 'Belgrano',
  responsable: 'Rodrigo Caruso', // figura en la política de privacidad
  whatsapp: '5491131002597',
  telefonoVisible: '+54 11 3100-2597',
  instagram: 'https://www.instagram.com/vulcanjoyas/',
  // Ficha de Google (link fijo por su CID). Va al schema como hasMap y sameAs.
  mapa: 'https://maps.google.com/?cid=487930550770398641',
  // Otros perfiles del negocio (Facebook…). Van al schema como sameAs.
  redes: [] as string[],
  formasDePago: 'Efectivo, transferencia',
  // No hay horario de atención: las visitas se coordinan por WhatsApp. Si algún día lo hay,
  // va al schema. Ej.: [{ dias: ['Monday', 'Friday'], abre: '10:00', cierra: '18:00' }]
  horario: [] as { dias: string[]; abre: string; cierra: string }[],
  // ID de medición de Google Analytics 4 ('G-XXXXXXXXXX'). Vacío: no se carga y la
  // política de privacidad no menciona estadísticas.
  googleAnalytics: '',
  // Código de verificación de Google Search Console (solo el content de la meta, no la etiqueta entera).
  // Hace falta solo si se verifica por etiqueta HTML; con el registro TXT en Vercel, queda vacío.
  googleVerificacion: '',
  title: 'Joyas a medida y anillos sello en CABA | Vulcan',
  description:
    'Joyas a medida y anillos sello en CABA, para vos o iguales para una familia o un grupo. Partimos de tu foto, dibujo o idea y la hacemos en plata u oro.',
};

export const mensajes: Record<TipoMensaje, string> = {
  cliente: 'Hola Vulcan, vengo de la web (ref: {ref}). Quiero hacer una joya: ',
  modelado: 'Hola Vulcan, vengo de la web (ref: {ref}). Necesito modelar: ',
  impresion: 'Hola Vulcan, vengo de la web (ref: {ref}). Necesito imprimir: ',
  marcas: 'Hola Vulcan, vengo de la web (ref: {ref}). Tengo una marca y quiero producir: ',
  gremio: 'Hola Vulcan, vengo de la web (ref: {ref}). Tengo un taller o una marca y necesito: ',
};

export const acciones = {
  principal: 'Contanos tu idea',
  secundaria: 'Trabajos que hicimos',
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
  titulo: 'Joyas a medida y anillos sello',
  bajada: 'Las hacemos en nuestro taller de CABA, de a una o iguales para toda una familia o un grupo.',
  // Inscripción del canto de la moneda: los cuatro estados, en latín de inscripción.
  inscripcion: 'IDEA · FORMA · CERA · METALLVM · IDEA · FORMA · CERA · METALLVM ·',
  etapas: [
    { nombre: 'Boceto', detalle: 'Lo que traigas', foto: { archivo: 'hero/1-boceto', alt: 'Boceto a mano del escudo para un anillo sello', etiqueta: 'Boceto' } },
    { nombre: 'Modelo 3D', detalle: 'En pantalla, al milímetro', foto: { archivo: 'hero/2-modelo-3d', alt: 'Modelo 3D del anillo sello con escudo en el programa de diseño', etiqueta: 'Modelo 3D' } },
    { nombre: 'Resina', detalle: 'La primera que podés tocar', foto: { archivo: 'hero/3-resina', alt: 'El anillo sello impreso en resina de alto detalle, sostenido en la mano', etiqueta: 'Resina' } },
    { nombre: 'Metal', detalle: 'Plata, oro, alpaca o bronce', foto: { archivo: 'hero/4-metal', alt: 'El anillo sello terminado en metal, sostenido en la mano', etiqueta: 'Metal' } },
  ] satisfies { nombre: string; detalle: string; foto: Foto }[],
};

export const frases = [
  // Tres pasos, de la referencia a la pertenencia. Cortas: se leen al pasar.
  'Traé tu imagen de referencia. Con ella iniciamos.',
  'Lo modelamos en 3D y lo ajustamos con vos.',
  'Tu molde queda en el taller, por si alguien se suma a los tuyos.',
];

export const recorrido = {
  titulo: 'Del 3D al metal',
  bajada: 'Es lo que más nos preguntan: cómo un archivo en la compu termina siendo un anillo de plata.',
  pasos: [
    { titulo: 'Diseño', texto: 'Con tu referencia definimos el talle y el metal, y recién ahí dibujamos.', dibujo: 'lapiz' },
    { titulo: 'Modelo 3D', texto: 'La pieza se dibuja en la compu, pensando desde el principio en cómo se va a fabricar.', dibujo: 'malla' },
    { titulo: 'Impresión', texto: 'Te imprimimos un prototipo para que lo pruebes. Con tu visto bueno, imprimimos el modelo definitivo en resina.', dibujo: 'capas' },
    { titulo: 'Molde', texto: 'Del modelo sale un molde de silicona, y del molde, copias exactas en cera.', dibujo: 'molde' },
    { titulo: 'Fundición', texto: 'La cera va dentro de un yeso. Al quemarla deja el hueco exacto y ahí se cuela el metal. Es la cera perdida, una técnica de hace miles de años.', dibujo: 'crisol' },
    { titulo: 'A mano', texto: 'Limado, engarce de piedras si lleva, y pulido en el banco.', dibujo: 'lima' },
  ] as { titulo: string; texto: string; dibujo: 'lapiz' | 'malla' | 'capas' | 'molde' | 'crisol' | 'lima' }[],
  enlace: { texto: 'Ver el proceso completo', href: '/taller' },
};

// La pieza terminada, entre las frases y los casos.
export const factum = {
  fotoFinal: {
    archivo: 'proceso/5-terminacion',
    alt: 'Dos anillos sello con escudo terminados y pulidos a mano',
    etiqueta: 'Pieza terminada',
  } satisfies Foto,
  pieFoto: 'Recién salida del banco.',
  // Latín de inscripción: "hecho a mano". Se talla letra por letra sobre la foto final.
  inscripcion: 'FACTVM · MANV',
  selloTexto: 'VULCAN · TALLER · CABA · HECHO A MANO ·',
};

export const vitrina = {
  titulo: 'Piezas de la casa',
  bajada: 'Todas se hacen por encargo: elegís talle, metal y terminación.',
  enlace: { texto: 'Ver el catálogo completo', href: '/catalogo' },
};

export const obra = {
  titulo: 'Lo que ya hicimos',
  bajada: 'Tres encargos y cómo los resolvimos.',
  enlace: 'Conocer el caso',
};

// ---------------------------------------------------------------- casos --
// Cada caso tiene su página en /casos/<slug>. Solo hechos que contó Rodrigo: no inventar.
// Las fotos que faltan se ven como placeholder con el nombre del archivo que va ahí.

export type Caso = {
  slug: string;
  nombre: string;
  resumen: string; // la tarjeta de la home
  estado: string;
  portada: Foto;
  // Para fotos con fondo transparente (renders): la pieza va entera sobre un degradé.
  portadaFondo?: boolean;
  // object-position de la portada, si la pieza no está centrada en la foto.
  portadaEncuadre?: string;
  // Aclaración debajo de la portada, si la imagen no es una foto de la pieza terminada.
  portadaNota?: string;
  ficha: [string, string][];
  meta: { title: string; description: string };
  fecha: string; // YYYY-MM-DD, datePublished del schema. Vacío: no se publica.
  intro: string;
  historia: { texto: string; foto: Foto; proporcion?: string }[]; // proporción: si la foto no es vertical 4:5
  cierre: string;
};

export const casos: Caso[] = [
  {
    slug: 'sello-familiar',
    nombre: 'El sello de la familia',
    resumen: 'Un escudo que estaba en una carta antigua, en un anillo para cada hija.',
    estado: 'Entregado',
    portada: { archivo: 'trabajos/trabajo-1', alt: 'Dos anillos sello con el escudo del águila, terminados, sobre una mesa de madera', etiqueta: 'Portada · 4:5' },
    ficha: [
      ['Pieza', 'Anillo sello'],
      ['Metal', 'Plata 925 y bronce enchapado en oro'],
      ['Técnica', 'Modelado 3D, molde y fundición'],
    ],
    meta: {
      title: 'Caso: el sello de una familia, para cada hija | Vulcan',
      description: 'Un escudo familiar dibujado en una carta antigua, convertido en un anillo sello con molde propio para cada integrante. Plata 925 y bronce enchapado en oro.',
    },
    fecha: '', // opcional: fecha de entrega (YYYY-MM-DD); Google la muestra como fecha del caso
    intro: 'El padre les había regalado a sus hijas un anillo con el escudo de la familia. Con los años, algunos se perdieron y otros estaban golpeados. Decidimos hacer uno nuevo, con molde propio, para que cada uno pueda tener el suyo.',
    historia: [
      {
        texto: 'El escudo estaba dibujado en una carta antigua de la familia. Partimos de una foto de esa carta.',
        foto: { archivo: 'hero/1-boceto', alt: 'El escudo de la familia, dibujado en tinta en una carta antigua', etiqueta: 'La carta · 4:5' },
      },
      {
        texto: 'Lo redibujamos en 3D para que cada detalle del escudo se pudiera fundir.',
        foto: { archivo: 'hero/2-modelo-3d', alt: 'Modelo 3D del anillo sello con el escudo del águila', etiqueta: 'Modelo 3D · 4:5' },
      },
      {
        texto: 'Antes de hacer el molde, lo imprimimos en resina para probarlo.',
        foto: { archivo: 'hero/3-resina', alt: 'El anillo sello impreso en resina, sostenido en la mano', etiqueta: 'Resina · 4:5' },
      },
      {
        texto: 'Tomamos la medida de cada integrante, y eran todas distintas. Con un solo molde salieron todos los talles. Después, cada anillo se ajustó y se pulió.',
        foto: { archivo: 'hero/4-metal', alt: 'El anillo sello terminado en metal, sostenido en la mano', etiqueta: 'Metal · 4:5' },
      },
    ],
    cierre: 'Los hicimos en plata y, para quienes los querían dorados, en bronce enchapado en oro. El molde queda en el taller: cuando una nieta o un nieto quiera el suyo, sale igual.',
  },
  {
    slug: 'escuela-de-arqueria',
    nombre: 'El anillo de la escuela de arquería',
    resumen: 'El logo de una escuela, simplificado para poder fundirlo, con piedras de color.',
    estado: 'En producción',
    // Render del diseño final (fondo transparente). Cuando esté fundido, va la foto real.
    portada: { archivo: 'casos/arqueria-portada', alt: 'Render del anillo sello de plata con el logo del arquero sobre un inlay de piedra marrón', etiqueta: 'Portada · 4:5' },
    portadaFondo: true,
    portadaNota: 'Render del diseño final',
    ficha: [
      ['Pieza', 'Anillo sello'],
      ['Detalle', 'Grabado personal adentro e inlay de piedras de color'],
      ['Técnica', 'Modelado 3D, impresión, molde y fundición'],
    ],
    meta: {
      title: 'Caso: el anillo de una escuela de arquería | Vulcan',
      description: 'El logo de una escuela de arquería llevado a un anillo sello, con grabado personal adentro e inlay de piedras de color. Un anillo y después diez más para sus mejores alumnos.',
    },
    fecha: '', // opcional: fecha de entrega (YYYY-MM-DD); Google la muestra como fecha del caso
    intro: 'Una escuela de arquería nos trajo su logo para hacer un anillo. Después de ese primero, encargó diez más para sus mejores alumnos.',
    historia: [
      {
        texto: 'El logo original, a la derecha, tenía manchas y trazos muy finos. Lo simplificamos, a la izquierda, para que se pudiera imprimir y fundir sin perder lo que lo hace reconocible.',
        foto: { archivo: 'casos/arqueria-1-logo', alt: 'El logo de la escuela de arquería: a la izquierda simplificado para el anillo, a la derecha el original', etiqueta: 'El logo' }, proporcion: '2 / 1',
      },
      {
        texto: 'Antes de modelar, armamos con IA una imagen de cómo podía quedar, para acordar el diseño con la escuela.',
        foto: { archivo: 'casos/arqueria-2-propuesta', alt: 'Propuesta del anillo hecha con IA: un sello de plata con el logo del arquero', etiqueta: 'Propuesta' },
      },
      {
        texto: 'Lo modelamos en 3D, con el logo en relieve dentro del óvalo del sello.',
        foto: { archivo: 'casos/arqueria-3-modelo', alt: 'Modelo 3D del anillo sello con el logo del arquero en relieve', etiqueta: 'Modelo 3D' }, proporcion: '7 / 5',
      },
      {
        texto: 'Lo imprimimos en resina para probar la medida y, con eso, hicimos el molde. Todos los anillos salen iguales: adentro, cada uno lleva un grabado distinto, y por fuera un inlay de piedras de color hace resaltar el logo.',
        foto: { archivo: 'casos/arqueria-4-impresion', alt: 'El anillo impreso en resina transparente, sostenido entre los dedos, con un calibre atrás', etiqueta: 'Impresión en resina' },
      },
    ],
    cierre: 'Cada alumno se lleva el sello de su escuela, con su propio grabado por dentro.',
  },
  {
    slug: 'medalla-de-casamiento',
    nombre: 'La medalla del casamiento',
    resumen: 'Un escudo con las iniciales de los novios y sus perros, grabado en bronce para una boda en Italia.',
    estado: 'Entregada',
    // La moneda está un poco a la izquierda: el encuadre la sigue para que no se corte.
    // (casos/medalla-recorte es la misma moneda recortada en círculo, por si se necesita.)
    portada: { archivo: 'casos/medalla-portada-mesa', alt: 'Medalla de bronce con un escudo coronado, las iniciales J y L y dos huellas de perro, apoyada sobre una mesa de madera', etiqueta: 'Portada · 4:5' },
    portadaEncuadre: '40% 50%',
    ficha: [
      ['Pieza', 'Medalla de 6 cm'],
      ['Metal', 'Bronce'],
      ['Técnica', 'Modelado 3D, prueba impresa, grabado láser y pulido'],
    ],
    meta: {
      title: 'Caso: una medalla para un casamiento en Italia | Vulcan',
      description: 'Un escudo con las iniciales de los novios y sus perros, grabado con láser sobre una medalla de bronce de 6 cm, para un casamiento en un castillo de Italia.',
    },
    fecha: '', // opcional: fecha de entrega (YYYY-MM-DD); Google la muestra como fecha del caso
    intro: 'Para un casamiento en un castillo de Italia, nos pidieron un regalo para los novios: un escudo propio.',
    historia: [
      {
        texto: 'Partimos de la imagen que nos mandaron: un escudo coronado con las iniciales de los novios. Le sumamos las huellas de sus dos perros, cada una con su inicial.',
        foto: { archivo: 'casos/medalla-1-referencia', alt: 'La imagen de referencia: escudo con corona y las iniciales J y L, con las huellas marcadas en azul', etiqueta: 'Referencia' }, proporcion: '1 / 1',
      },
      {
        texto: 'Lo modelamos en 3D: la corona, el escudo, las ramas de laurel y las huellas.',
        foto: { archivo: 'casos/medalla-2-modelo', alt: 'Modelo 3D de la medalla con el escudo, la corona, las ramas y las huellas', etiqueta: 'Modelo 3D' }, proporcion: '7 / 5',
      },
      {
        texto: 'Imprimimos una prueba en tamaño real, 6 centímetros, para ver el relieve y las proporciones en la mano.',
        foto: { archivo: 'casos/medalla-3-prueba', alt: 'La prueba impresa de la medalla, blanca, sostenida en la mano junto a un calibre', etiqueta: 'Prueba impresa' },
      },
      {
        texto: 'Con la prueba aprobada, la medalla se grabó con láser sobre bronce y después se pulió.',
        foto: { archivo: 'casos/medalla-4-medalla', alt: 'La medalla de bronce terminada, con el escudo grabado, en un estuche de terciopelo bordó', etiqueta: 'Medalla' }, proporcion: '1 / 1',
      },
    ],
    cierre: 'Después viajó a Italia, para el casamiento.',
  },
];

export const casoPagina = {
  volver: 'Volver a los casos',
  otros: 'Otros casos',
  numero: 'Caso',
};

export const taller = {
  meta: {
    title: 'El taller: cómo hacemos joyas con impresión 3D | Vulcan',
    description: 'Del modelo 3D al metal: impresión en resina, molde, cera perdida y terminación a mano. También para joyeros y marcas. Y el precio de los metales hoy.',
  },
  titulo: 'Cómo se hace un anillo',
  bajada: 'El detalle técnico de cada etapa y cómo se arma el precio.',
  // Arriba se ve la pieza terminada; donde pasa el mouse (o el dedo) aparece el modelo 3D.
  revelado: {
    arriba: { archivo: 'taller/anillo-plata-nuevo', alt: 'Anillo sello de plata con escudo de sol y laterales calados', etiqueta: 'Anillo terminado · 16:9' },
    abajo: { archivo: 'taller/anillo-3d-bronce', alt: 'El mismo anillo sello como modelo 3D en malla', etiqueta: 'Modelo 3D · 16:9' },
    pista: { mouse: 'Pasá el mouse por el anillo', tactil: 'Deslizá el dedo o tocá el anillo' },
  },
  // El mismo anillo en tres etapas, fotografiado en el taller (sobre la plancha de corte).
  etapas: {
    titulo: 'El mismo anillo, en tres momentos',
    foto: { archivo: 'taller/tres-etapas-real', alt: 'El mismo anillo sello en tres etapas: impreso en resina, inyectado en cera y terminado en plata', etiqueta: 'Tres etapas · 2:1' },
    rotulos: ['Impresión en resina', 'Inyección en cera', 'Plata pulida'],
  },
};

export const catalogo = {
  meta: {
    title: 'Catálogo de joyas a medida: anillos, dijes y aros | Vulcan',
    description: 'Anillos, dijes y aros de Vulcan. Cada pieza se hace por encargo en plata u oro, con tu talle y la terminación que elijas. Guía de talles incluida.',
  },
  titulo: 'Catálogo',
  // Página de cada pieza (/catalogo/<id>).
  pieza: {
    volver: 'Volver al catálogo',
    encargo: 'Se hace por encargo en nuestro taller de Belgrano, CABA.',
  },
  bajada: 'Todas se hacen por encargo, con tu talle y el metal que elijas. Si querés cambiarle algo, se cambia.',
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
  enviar: 'Mandar la orden por WhatsApp',
  pie: 'Se abre WhatsApp con tu orden escrita. No se envía nada hasta que la mandes vos.',
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
      'Envío por mensajería en moto o retiro coordinado en Belgrano',
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
    { nombre: 'Anillo sello con escudo', contexto: 'Plata 925, con el escudo en relieve.', foto: { archivo: 'trabajos/trabajo-1', alt: 'Dos anillos sello con escudo terminados, sobre una mesa de madera', etiqueta: 'Trabajo 1 · 3:4' } },
    { nombre: 'Aros rectangulares de plata', contexto: 'Plata 925. Hechos a mano en el banco: chapa cortada, plegada y soldada.', foto: { archivo: 'trabajos/aros-plata', alt: 'Par de aros rectangulares de plata pulida, parados sobre una base de madera', etiqueta: 'Trabajo 2 · 3:4' } },
    { nombre: 'Aros rectangulares dorados', contexto: 'El mismo diseño, en plata 925 enchapada en oro.', foto: { archivo: 'trabajos/aros-dorados', alt: 'Par de aros rectangulares enchapados en oro, sobre papel de seda', etiqueta: 'Trabajo 3 · 3:4' } },
    { nombre: 'Solitario', contexto: 'Plata 925 con una circonia cúbica cuadrada, engarzada a garras en el banco.', foto: { archivo: 'trabajos/solitario', alt: 'Anillo solitario de plata con una circonia cuadrada engarzada, sostenido en la mano sobre el banco de joyero', etiqueta: 'Trabajo 4 · 3:4' } },
  ] satisfies { nombre: string; contexto: string; foto: Foto }[],
};

// Los **dobles asteriscos** marcan lo que va en negrita.
// Cada etapa tiene su foto: idealmente la misma pieza en los 5 momentos.
export const proceso = {
  titulo: 'Nuestros servicios',
  bajada: 'Podés encargarnos la pieza entera o solo la etapa que te falta.',
  etapas: [
    {
      titulo: 'Diseño',
      icono: 'pen-nib-light',
      texto: 'Con tu referencia armamos el diseño y lo ajustamos hasta que lo **apruebes**.',
      foto: { archivo: 'proceso/1-diseno', alt: 'Boceto a mano del escudo para un anillo sello', etiqueta: 'Boceto · 4:5' },
    },
    {
      titulo: 'Modelado 3D',
      icono: 'cube-transparent-light',
      texto: 'Archivo en **CAD** con los espesores mínimos, el lugar de cada piedra y lo que se achica el metal al enfriarse.',
      foto: { archivo: 'proceso/2-modelado-3d', alt: 'Modelo 3D de dos anillos sello con escudo', etiqueta: 'Render CAD · 4:5' },
    },
    {
      titulo: 'Impresión 3D',
      icono: 'stack-light',
      texto: 'Un **prototipo en ABS** para probar el tamaño en la mano. Después, el modelo maestro en resina, que es el que va al molde.',
      foto: { archivo: 'proceso/3-impresion-3d', alt: 'Anillo sello impreso en resina de alto detalle', etiqueta: 'Pieza impresa en resina · 4:5' },
    },
    {
      titulo: 'Fundición',
      icono: 'fire-light',
      texto: '**Molde de silicona**, cera inyectada y cera perdida, en plata, oro, alpaca o bronce. El molde se guarda.',
      foto: { archivo: 'proceso/4-fundicion', alt: 'Anillo sello en metal claro después de la fundición', etiqueta: 'Pieza fundida en bruto · 4:5' },
    },
    {
      titulo: 'Terminación',
      icono: 'diamond-light',
      texto: 'Engarce de piedras, si lleva, y **pulido a mano**.',
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
        'Archivo en STL, OBJ, 3DM o STEP, para tu impresora o la nuestra',
      ],
      tipo: 'modelado',
      ref: 'web-modelado',
      pagina: '/servicios/modelado-3d-joyeria',
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
      pagina: '/servicios/impresion-3d-resina-joyeria',
    },
    {
      titulo: 'Producción para marcas',
      texto: 'Producimos la línea de joyería de tu marca.',
      items: [
        'Diseño, modelado y molde propio',
        'Fundición en plata, oro, alpaca o bronce',
        'Sin mínimo de unidades, con descuento por cantidad',
      ],
      tipo: 'marcas',
      ref: 'web-marcas',
      pagina: '/servicios/fundicion-para-joyeros',
    },
  ] satisfies { titulo: string; texto: string; items: string[]; tipo: TipoMensaje; ref: string; pagina: string }[],
  pie: 'Coordinamos la fundición y el engarce con nuestros proveedores, así no tenés que buscar a nadie más.',
};

// Una página por servicio para joyeros y marcas (/servicios/<slug>). Las viñetas son las de
// la tarjeta de `servicios` que comparte el tipo; las preguntas van como subtítulos y al schema.
export type PaginaServicio = {
  slug: string;
  nombre: string; // migas y enlaces entre servicios
  tarjeta: TipoMensaje; // la tarjeta de servicios.tarjetas de la que salen las viñetas
  tipo: TipoMensaje; // mensaje de WhatsApp
  meta: { title: string; description: string };
  titulo: string;
  bajada: string;
  foto: Foto;
  proporcion: string;
  preguntas: { pregunta: string; respuesta: string[]; link?: { texto: string; href: string } }[];
};

export const paginasServicio: PaginaServicio[] = [
  {
    slug: 'modelado-3d-joyeria',
    nombre: 'Modelado 3D',
    tarjeta: 'modelado',
    tipo: 'modelado',
    meta: {
      title: 'Modelado 3D de joyería para joyeros y marcas | Vulcan',
      description: 'Pasamos tu boceto, foto o pieza a un modelo 3D listo para imprimir y fundir, con espesores y engarces pensados para fundición. En STL, OBJ, 3DM o STEP.',
    },
    titulo: 'Modelado 3D de joyas, listo para fundir',
    bajada: 'Pasamos tu diseño a un archivo CAD con los espesores mínimos, el lugar de cada piedra y lo que se achica el metal al enfriarse.',
    foto: { archivo: 'casos/arqueria-3-modelo', alt: 'Modelo 3D de un anillo sello con el logo de un arquero, en el programa de diseño', etiqueta: 'Modelo 3D' },
    proporcion: '7 / 5',
    preguntas: [
      {
        pregunta: '¿Qué tengo que mandar para modelar una pieza?',
        respuesta: ['Un boceto, una foto de referencia o un modelo que ya tengas. Si es un anillo, sumá el talle. Si lleva piedras, pasanos sus medidas.'],
      },
      {
        pregunta: '¿En qué formato me entregan el archivo?',
        respuesta: ['En STL, OBJ, 3DM o STEP, el que lea tu impresora o tu programa.'],
      },
      {
        pregunta: '¿También lo imprimen y lo funden?',
        respuesta: ['Si querés, sí: lo imprimimos en resina y coordinamos la fundición. Si tenés taller, te llevás el archivo y seguís vos.'],
        link: { texto: 'Impresión 3D para joyería', href: '/servicios/impresion-3d-resina-joyeria' },
      },
      {
        pregunta: '¿Cómo se cotiza el modelado?',
        respuesta: ['Según lo compleja que sea la pieza. Mandanos la referencia por WhatsApp y te pasamos el presupuesto.'],
      },
    ],
  },
  {
    slug: 'impresion-3d-resina-joyeria',
    nombre: 'Impresión 3D',
    tarjeta: 'impresion',
    tipo: 'impresion',
    meta: {
      title: 'Impresión 3D en resina para joyería en CABA | Vulcan',
      description: 'Imprimimos tus modelos de joyería en resina de alto detalle para modelos maestros y moldes, en ABS para prototipos y en PLA para fundir directo. Belgrano, CABA.',
    },
    titulo: 'Impresión 3D de modelos para joyería',
    bajada: 'Mandanos el archivo y lo imprimimos en el material que necesita tu taller.',
    foto: { archivo: 'casos/arqueria-4-impresion', alt: 'Un anillo impreso en resina transparente, sostenido entre los dedos, con un calibre atrás', etiqueta: 'Impresión en resina' },
    proporcion: '3 / 4',
    preguntas: [
      {
        pregunta: '¿Qué archivo necesito para imprimir?',
        respuesta: ['Un STL, OBJ, 3DM o STEP. Si todavía no tenés el modelo, lo hacemos nosotros.'],
        link: { texto: 'Modelado 3D de joyería', href: '/servicios/modelado-3d-joyeria' },
      },
      {
        pregunta: '¿Resina, ABS o PLA?',
        respuesta: [
          'Resina de alto detalle para el modelo maestro y el molde. Es resistente y se puede lijar.',
          'ABS para un prototipo, cuando querés probar la forma y el tamaño en la mano.',
          'PLA para fundir directo, sin molde: es el PLA perdido.',
        ],
      },
      {
        pregunta: '¿Se puede fundir directo?',
        respuesta: ['Sí, con el modelo en PLA, que se quema dentro del yeso igual que la cera. Si vas a hacer varias piezas iguales, te conviene el modelo en resina y un molde de silicona.'],
      },
    ],
  },
  {
    slug: 'fundicion-para-joyeros',
    nombre: 'Fundición y producción',
    tarjeta: 'marcas',
    tipo: 'gremio',
    meta: {
      title: 'Fundición a la cera perdida para joyeros y marcas | Vulcan',
      description: 'Molde de silicona, cera inyectada y fundición a la cera perdida en plata 925, oro 18k, alpaca o bronce. Sin mínimo de unidades, con descuento por cantidad.',
    },
    titulo: 'Fundición y producción para tu taller o tu marca',
    bajada: 'Del modelo en resina sacamos el molde, y del molde, las ceras que van a fundición, en el metal que elijas.',
    foto: { archivo: 'proceso/4-fundicion', alt: 'Un anillo sello recién fundido en metal claro, sostenido en la mano', etiqueta: 'Pieza fundida' },
    proporcion: '3 / 4',
    preguntas: [
      {
        pregunta: '¿Qué metales funden?',
        respuesta: ['Plata 925, oro 18k, alpaca y bronce. El metal se cobra con la cotización del día.'],
        link: { texto: 'Mirá el precio de los metales hoy', href: '/taller#metales' },
      },
      {
        pregunta: '¿Hacen el molde de silicona?',
        respuesta: ['Sí. Lo sacamos del modelo maestro en resina, y con el molde inyectamos las ceras.'],
      },
      {
        pregunta: '¿Se guarda el molde?',
        respuesta: ['Sí, queda en el taller. Si después necesitás más piezas, salen del mismo molde.'],
      },
      {
        pregunta: '¿Cuál es el mínimo de piezas?',
        respuesta: ['No hay mínimo. Con cantidad hay descuento: consultanos, depende de la pieza.'],
      },
      {
        pregunta: '¿Cuánto tarda la fundición?',
        respuesta: ['Depende de la pieza y de los tiempos del fundidor. Si estás apurado, hay fundición exprés: en dos semanas está fundida.'],
      },
    ],
  },
];

export const servicioPagina = {
  otros: 'Otros servicios',
  proceso: { texto: 'Ver el proceso completo', href: '/taller' },
};

export const metales = {
  titulo: 'Precio de los metales hoy',
  rotulo: 'Metales hoy',
  pausar: 'Pausar las cotizaciones',
  reanudar: 'Reanudar las cotizaciones',
  bajada:
    'La fundición se cobra con la cotización del día. Por eso no damos precios cerrados: te mostramos cómo está el metal hoy.',
  columnas: { metal: 'Metal', valor: 'Precio en pesos', variacion: 'Frente a ayer' },
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

export const preguntas: { titulo: string; otra: { texto: string; enlace: string }; items: Pregunta[] } = {
  titulo: 'Preguntas frecuentes',
  otra: { texto: '¿No está tu pregunta?', enlace: 'Escribinos por WhatsApp' },
  items: [
    {
      pregunta: '¿Tengo que tener el modelo 3D?',
      respuesta: ['No. Lo hacemos nosotros a partir de tu idea. Si ya tenés uno, lo revisamos y lo adaptamos para fundir.'],
    },
    {
      pregunta: '¿Cómo se cotiza una pieza?',
      respuesta: [
        'Mandanos tu idea y te pasamos el presupuesto. Se arma así:',
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
      respuesta: ['Plata 925, oro 18k, alpaca y bronce. Si buscás otro metal, consultanos.'],
    },
    {
      pregunta: '¿Trabajan con piedras?',
      respuesta: ['Sí. Diseñamos el engarce desde el modelo 3D y la piedra se elige con vos.'],
    },
    {
      pregunta: '¿Cuánto tarda una pieza?',
      respuesta: [
        'En general, unos dos meses desde el primer mensaje hasta la pieza terminada. Depende de lo compleja que sea la pieza, en diseño y en modelado, y de los tiempos del fundidor.',
        'Si la necesitás antes, hay fundición exprés: en dos semanas está fundida. Te confirmamos el plazo junto con el presupuesto.',
      ],
    },
    {
      pregunta: '¿Se puede hacer una sola unidad?',
      respuesta: [
        'Sí. Y si después querés más iguales, el molde ya está hecho.',
        'Si tenés una marca, no hay mínimo de producción. Con cantidad hay descuento: consultanos, depende de la pieza.',
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
      respuesta: ['Sí, con mensajería privada en moto. Si preferís retirarla, lo coordinamos por WhatsApp.'],
    },
    {
      pregunta: '¿Dónde están? ¿Puedo ir al taller?',
      respuesta: [
        'Estamos en Belgrano, CABA, lejos de la zona de joyerías de la calle Libertad: no hace falta ir al centro.',
        'No es un local a la calle. Si querés venir, escribinos por WhatsApp y coordinamos la visita.',
      ],
    },
    {
      pregunta: 'Soy joyero, ¿me imprimen un modelo que ya tengo?',
      respuesta: [
        'Sí. Mandanos el archivo en STL, OBJ, 3DM o STEP y te decimos qué material conviene: resina para el modelo maestro o PLA para fundir directo.',
      ],
    },
    {
      pregunta: '¿Para quién es?',
      respuesta: [
        'Para quien quiere una joya propia o un sello para su familia o su grupo. También trabajamos para joyeros que necesitan modelado o impresión, y para marcas que quieren producir su línea.',
      ],
    },
  ],
};

export const ctaFinal = {
  titulo: 'Mandanos lo que tengas',
  texto: 'Alcanza con un garabato o una foto. Te respondemos cómo la haríamos, en qué metal y cuánto costaría.',
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

// Página de error: 404 en números romanos, como los estados de la moneda.
export const error404 = {
  title: 'Página no encontrada | Vulcan',
  description: 'Esta dirección no existe en el sitio de Vulcan.',
  numeral: 'CDIV',
  titulo: '¡Upss! Error 404',
  bajada: 'La dirección que abriste no existe.',
  accion: 'Volver al inicio',
  inscripcion: 'NIHIL · HIC · EST · NIHIL · HIC · EST · NIHIL · HIC · EST ·',
};

// Política de privacidad (Ley 25.326). Cada bloque es un título y sus párrafos.
export const privacidad = {
  title: 'Política de privacidad | Vulcan',
  description: 'Qué datos recibe Vulcan, para qué los usa, cuánto tiempo los guarda y cómo pedir que se borren.',
  titulo: 'Política de privacidad',
  actualizada: 'Actualizada el 29 de octubre de 2026.',
  bloques: [
    {
      titulo: 'Quién es el responsable',
      parrafos: [
        'Este sitio es de Vulcan, el taller de joyería de {responsable} en la Ciudad Autónoma de Buenos Aires. Para cualquier consulta sobre tus datos, escribinos por WhatsApp al {telefono}.',
      ],
    },
    {
      titulo: 'Qué datos recibimos',
      parrafos: [
        'El sitio no tiene formularios que guarden datos. Cuando armás tu orden o tocás un botón de contacto, se abre WhatsApp con un mensaje ya escrito, y no se envía nada hasta que lo mandás vos.',
        'Por WhatsApp nos llegan tu nombre, tu número y lo que quieras contarnos de la pieza: fotos, bocetos, talles, iniciales o escudos.',
      ],
    },
    {
      titulo: 'Para qué los usamos',
      parrafos: ['Para presupuestar y hacer tu pieza, y para hablar con vos sobre el encargo. No los vendemos ni los compartimos con nadie.'],
    },
    {
      titulo: 'Cuánto tiempo los guardamos',
      parrafos: ['Las fotos y los bocetos que nos mandás quedan en una carpeta con tu nombre mientras dura el trabajo. Cuando lo terminamos, los borramos.'],
    },
    {
      titulo: 'Fotos de tu pieza',
      parrafos: ['Si queremos mostrar tu pieza en este sitio o en Instagram, te lo preguntamos antes. Si no querés, no se publica.'],
    },
    {
      titulo: 'Estadísticas de visitas',
      soloConAnalytics: true,
      parrafos: [
        'Usamos Google Analytics para saber cuántas personas entran al sitio y qué páginas miran. Google guarda cookies en tu navegador y recibe datos como el tipo de dispositivo, la ciudad aproximada y las páginas que visitaste, sin tu nombre ni tu número.',
        'Podés borrar o bloquear esas cookies desde tu navegador, o instalar el complemento de Google para desactivar Analytics.',
      ],
      enlace: { texto: 'Complemento para desactivar Google Analytics', href: 'https://tools.google.com/dlpage/gaoptout' },
    },
    {
      titulo: 'Tus derechos',
      parrafos: [
        'Podés pedirnos ver, corregir o borrar tus datos cuando quieras, escribiéndonos por WhatsApp.',
        'El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley N° 25.326. La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.',
      ],
    },
  ] as { titulo: string; parrafos: string[]; soloConAnalytics?: boolean; enlace?: { texto: string; href: string } }[],
};
