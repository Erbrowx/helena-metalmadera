/**
 * businessData.js — Única Fuente de Verdad (Single Source of Truth)
 *
 * Toda la configuración, textos, servicios y proyectos del taller Helena Metalmadera
 * se administran desde aquí. Cualquier cambio futuro se hace en este único archivo.
 *
 * Campos marcados con // EDITABLE - VALIDAR CON CLIENTE requieren confirmación del cliente.
 */

// ─────────────────────────────────────────────────────────────────
// DATOS DE CONTACTO Y REDES SOCIALES
// ─────────────────────────────────────────────────────────────────

export const business = {
  name: "Helena Metalmadera",
  tagline: "Diseñamos · Fabricamos · Instalamos",
  subtagline: "Tu idea, nuestro trabajo",
  description:
    "Fabricación a medida para Cali y el Valle del Cauca: avisos publicitarios 3D, letras corpóreas en acero inoxidable, avisos iluminados LED, señalética arquitectónica, corte láser y mobiliario industrial.",

  // Número WhatsApp sin signos ni espacios (formato internacional)
  whatsappNumber: "573167279998",
  whatsappDisplay: "+57 316 727 9998",

  // Mensaje base en texto plano — sin emojis para evitar caracteres corruptos en cualquier dispositivo
  whatsappDefaultMessage:
    "Hola Helena Metalmadera, quiero cotizar un proyecto a medida con ustedes.",

  // Ubicación y cobertura
  city: "Cali",
  department: "Valle del Cauca",
  country: "Colombia",
  address: "Cali, Valle del Cauca, Colombia", // EDITABLE - VALIDAR CON CLIENTE: dirección exacta si se muestra en mapa

  // Redes sociales oficiales
  instagram: "https://www.instagram.com/helena_metalmadera",
  instagramHandle: "@helena_metalmadera",

  // EDITABLE - VALIDAR CON CLIENTE: si la URL no comienza con "http", los botones de Facebook se ocultan automáticamente
  facebook: "https://www.facebook.com/helenametalmadera",

  // EDITABLE - VALIDAR CON CLIENTE: correo corporativo opcional
  email: "",

  // Horarios de atención
  schedule: {
    weekdays: "Lunes a Viernes: 8:00 am – 6:00 pm", // EDITABLE - VALIDAR CON CLIENTE
    saturday: "Sábados: 8:00 am – 2:00 pm",          // EDITABLE - VALIDAR CON CLIENTE
    sunday: "Domingos: Cerrado",
  },

  // Cobertura exacta y verídica — no agregar ciudades sin confirmar
  coverage:
    "Instalación en Cali, alrededores y el Valle del Cauca, y envíos a otras ciudades sujetos a cotización.",
  coverageBadges: [
    "Cali",
    "Yumbo",
    "Jamundí",
    "Palmira",
    "Valle del Cauca",
    "Envíos nacionales bajo cotización",
  ],

  // Respaldo local seguro para onError — evita dependencias externas
  fallbackImage: "/images/hero-bg.webp",
  logoImage: "/images/logo.webp",
};

/**
 * Construye la URL oficial de WhatsApp con codificación segura.
 * Texto plano sin emojis para compatibilidad universal (WhatsApp Web, iOS, Android).
 * @param {string} [message] - Mensaje predefinido en texto plano
 * @returns {string} Enlace listo para abrir en web o app de WhatsApp
 */
export function buildWhatsAppUrl(message) {
  const defaultText =
    "Hola Helena Metalmadera, quiero cotizar un proyecto a medida con ustedes.";
  const text = (message && typeof message === "string" ? message : defaultText).trim();
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Valida si un enlace externo es apto para renderizar.
 * Evita botones rotos cuando el cliente aún no confirma el perfil de red social.
 */
export function isValidUrl(url) {
  return typeof url === "string" && url.trim().startsWith("http");
}

// ─────────────────────────────────────────────────────────────────
// IDENTIDAD OFICIAL Y PILARES DE CALIDAD
// ─────────────────────────────────────────────────────────────────

export const brandIdentity = {
  // Texto oficial de presentación del taller — no modificar sin aprobación del cliente
  aboutText:
    "En Helena Metalmadera combinamos experiencia, tecnología y pasión por el detalle para crear avisos, muebles y piezas metálicas de alta calidad que realzan la imagen de tu negocio.",
};

// Cuatro pilares de calidad que encabezan el bloque "Nuestra Empresa"
export const trustPillars = [
  {
    id: "pilar-1",
    title: "Acabados profesionales",
    description:
      "Cortes limpios, pulido a detalle y uniones prolijas sin tornillería visible al frente.",
  },
  {
    id: "pilar-2",
    title: "Materiales de primera",
    description:
      "Aceros, láminas metálicas, madera e iluminación LED seleccionados según cada proyecto.",
  },
  {
    id: "pilar-3",
    title: "Cumplimiento en los tiempos",
    description:
      "Planificación técnica de cada trabajo respetando el cronograma acordado de entrega e instalación.",
  },
  {
    id: "pilar-4",
    title: "Atención personalizada",
    description:
      "Acompañamiento directo desde el dimensionamiento inicial hasta la instalación en tu espacio.",
  },
];

// Beneficios diferenciales del taller (sección de Garantías)
export const benefits = [
  {
    id: 1,
    icon: "Factory",
    title: "Precio Directo de Fabricación",
    description:
      "Atención y fabricación directa para Cali y alrededores, sin intermediarios ni sobrecostos.",
  },
  {
    id: 2,
    icon: "Ruler",
    title: "Diseño 100% a Medida",
    description:
      "Adaptado con precisión a tu identidad de marca, medidas reales y requerimientos estructurales.",
  },
  {
    id: 3,
    icon: "CreditCard",
    title: "Aceptamos Tarjeta",
    description:
      "Facilidades de pago con tarjeta de crédito, débito o transferencia bancaria.",
  },
  {
    id: 4,
    icon: "Truck",
    title: "Instalación y Envíos",
    description:
      "Instalación técnica en Cali y el Valle del Cauca, con envíos nacionales protegidos.",
  },
  {
    id: 5,
    icon: "Shield",
    title: "Control de Calidad Riguroso",
    description:
      "Supervisión detallada en corte, doblado, soldadura, pintura y sistemas de iluminación.",
  },
  {
    id: 6,
    icon: "Clock",
    title: "Respuesta en menos de 24h",
    description:
      "Asesoría ágil y cotización clara para que tomes decisiones con respaldo técnico.",
  },
];

// ─────────────────────────────────────────────────────────────────
// CATÁLOGO DE SERVICIOS — 6 especialidades estéticas y verídicas
// ─────────────────────────────────────────────────────────────────

export const services = [
  {
    id: 1,
    slug: "avisos-3d",
    title: "Avisos Publicitarios 3D",
    shortDesc:
      "Letras y logotipos tridimensionales de gran volumen e impacto visual para fachadas y accesos.",
    fullDesc:
      "Fabricación de letras corpóreas con relieve real que destacan tu marca día y noche. Materiales resistentes a la intemperie con acabados prolijos.",
    icon: "Box",
    // Vista nocturna con iluminación terminada — transmite resultado final impactante
    image: "/images/proyecto-la-acuarela-noche.webp",
    whatsappMessage:
      "Hola Helena Metalmadera, quiero cotizar un Aviso Publicitario 3D para mi negocio.",
  },
  {
    id: 2,
    slug: "letras-acero",
    title: "Letras en Acero Inoxidable",
    shortDesc:
      "Elegancia perdurable en acero satinado o brillante para recepciones corporativas y fachadas.",
    fullDesc:
      "Manufactura de alta precisión en acero inoxidable. Máxima resistencia a la corrosión, fijación oculta y presencia distinguida con acabados atención directa.",
    icon: "Layers",
    // Proceso real de fabricación y soldadura de letras metálicas en taller
    image: "/images/hero-bg.webp",
    whatsappMessage:
      "Hola Helena Metalmadera, me gustaria cotizar letras en Acero Inoxidable para mi empresa.",
  },
  {
    id: 3,
    slug: "letreros-led",
    title: "Avisos Iluminados LED",
    shortDesc:
      "Iluminación halo perimetral o frontal con módulos LED de alto rendimiento y bajo consumo.",
    fullDesc:
      "Letreros con iluminación integrada que garantizan visibilidad óptima. Cableado oculto y tonalidades cálidas o neutras según el proyecto.",
    icon: "Zap",
    // Fachada iluminada con retroiluminación halo LED perimetral — resultado terminado
    image: "/images/proyecto-bienvenidos-led.webp",
    whatsappMessage:
      "Hola Helena Metalmadera, me interesa cotizar un Aviso Iluminado con LED.",
  },
  {
    id: 4,
    slug: "senaletica",
    title: "Señalética y Fachadas",
    shortDesc:
      "Sistemas de identificación para condominios, conjuntos residenciales, comercios y edificios.",
    fullDesc:
      "Diseño y fabricación de nomenclatura de fachada, monumentos de identidad y señalética que unifican la estética de tu desarrollo.",
    icon: "MapPin",
    // Letrero monumental estético en acabado terminado
    image: "/images/proyecto-la-castilla.webp",
    whatsappMessage:
      "Hola Helena Metalmadera, necesito cotizar senaletica o letrero de fachada para un proyecto.",
  },
  {
    id: 5,
    slug: "corte-laser-personalizados",
    title: "Corte Láser y Personalizados",
    shortDesc:
      "Escudos heráldicos, calados geométricos de precisión y piezas tridimensionales especiales.",
    fullDesc:
      "Transformamos láminas metálicas con corte de alta definición y diseños personalizados. Ideal para paneles decorativos y avisos institucionales complejos.",
    icon: "Wrench",
    // Escudo institucional con calado de alta definición — resultado terminado
    image: "/images/proyecto-conquistadores.webp",
    whatsappMessage:
      "Hola Helena Metalmadera, quisiera cotizar un trabajo en Corte Laser y Personalizado.",
  },
  {
    id: 6,
    slug: "mobiliario-industrial",
    title: "Mobiliario Industrial",
    shortDesc:
      "Estructuras robustas en metal combinadas con madera natural para locales, restaurantes y hogares.",
    fullDesc:
      "Estanterías, muebles para TV, mesas y barras fabricadas a medida exacta. Soldaduras pulidas, perfilería firme y pintura electrostática de alta resistencia.",
    icon: "Home",
    // Estantería industrial terminada en metal y madera
    image: "/images/proyecto-mobiliario-estanteria.webp",
    whatsappMessage:
      "Hola Helena Metalmadera, quiero cotizar mobiliario industrial en metal y madera a medida.",
  },
];

// ─────────────────────────────────────────────────────────────────
// GALERÍA DE PROYECTOS REALES — 8 tarjetas sin fotos duplicadas entre tarjetas
// ─────────────────────────────────────────────────────────────────

export const galleryProjects = [
  {
    id: 1,
    title: "La Acuarela Condominio Campestre",
    // Categoría renombrada para coherencia con el catálogo de servicios
    category: "Avisos 3D y Fachadas",
    location: "Cali y alrededores, Valle del Cauca",
    description:
      "Letras corpóreas de gran formato para portal de acceso campestre. Acabado en negro mate de alto contraste con sistema perimetral de iluminación halo LED cálida sobre muro texturizado.",
    // Portada obligatoria nocturna — carrusel continúa con vistas diurna, instalación y detalle
    images: [
      "/images/proyecto-la-acuarela-noche.webp",
      "/images/proyecto-la-acuarela-dia.webp",
      "/images/proyecto-la-acuarela-instalacion.webp",
      "/images/proyecto-la-acuarela-detalle.webp",
    ],
    tags: ["Letras Corpóreas", "Iluminación Halo LED", "Instalación en Muro", "Gran Formato"],
    whatsappMessage:
      "Hola, vi el proyecto de La Acuarela Condominio Campestre y me gustaria cotizar un letrero similar para una entrada.",
  },
  {
    id: 2,
    title: "Sede Habitacional Conquistadores",
    category: "Acero y Escudos",
    location: "Cali y alrededores, Valle del Cauca",
    description:
      "Aviso monumental institucional para el Ejército Nacional. Escudo heráldico calado con corte de alta precisión y letras corpóreas con retroiluminación rasante en fachada principal.",
    images: ["/images/proyecto-conquistadores.webp"],
    tags: ["Acero Inoxidable", "Escudo Heráldico", "Retroiluminación", "Institucional"],
    whatsappMessage:
      "Hola, vi el proyecto de la Sede Conquistadores y quiero cotizar un aviso institucional con escudo.",
  },
  {
    id: 3,
    title: "Fachada Iluminada Bienvenidos / U",
    category: "Avisos LED",
    location: "Cali y alrededores, Valle del Cauca",
    description:
      "Letrero corpóreo retroiluminado 'BIENVENIDOS' con isotipo 'U' de flama en acero. Iluminación halo LED cálida que resalta la arquitectura del acceso comercial.",
    images: ["/images/proyecto-bienvenidos-led.webp"],
    tags: ["LED Cálido", "Aviso de Fachada", "Isotipo Corpóreo", "Comercial"],
    whatsappMessage:
      "Hola, me interesa cotizar una fachada iluminada como la del proyecto Bienvenidos / U.",
  },
  {
    id: 4,
    title: "Yo Amo La Buitrera",
    // Categoría actualizada: "Señalética y Fachadas" (coherente con el servicio renombrado)
    category: "Señalética y Fachadas",
    location: "Corregimiento La Buitrera, Cali",
    description:
      "Monumento turístico de identidad barrial en perfilería metálica y letras corpóreas policromadas con motivos de fauna y naturaleza representativa de la región.",
    images: ["/images/proyecto-la-buitrera.webp"],
    tags: ["Monumento Turístico", "Metal Pintado", "Arte Urbano", "Estructura Metálica"],
    whatsappMessage:
      "Hola, vi el letrero monumental Yo Amo La Buitrera y quiero cotizar un monumento para un espacio turistico o comunitario.",
  },
  {
    id: 5,
    title: "Yo Amo La Castilla",
    category: "Señalética y Fachadas",
    location: "Corregimiento La Castilla, Cali",
    description:
      "Monumento de identidad comunitaria y señalética barrial para La Castilla. Letras corpóreas tridimensionales con alta resistencia a la intemperie para embellecimiento urbano.",
    images: [
      "/images/proyecto-la-castilla.webp",
      "/images/proyecto-la-castilla-proceso.webp",
    ],
    tags: ["Identidad Comunitaria", "Señalética Monumental", "Espacio Público"],
    whatsappMessage:
      "Hola, me interesa cotizar un letrero monumental de identidad barrial como el de La Castilla.",
  },
  {
    id: 6,
    title: "Mobiliario Industrial Metal & Madera",
    category: "Mobiliario y Estructuras",
    location: "Cali y alrededores, Valle del Cauca",
    description:
      "Diseño y fabricación a medida de estanterías industriales, centros de entretenimiento para TV y mobiliario para restaurantes y hogares en metal y madera natural.",
    // Portada estantería — carrusel continúa con restaurante y mueble TV (sin repetir con tarjetas de servicios)
    images: [
      "/images/proyecto-mobiliario-estanteria.webp",
      "/images/proyecto-mobiliario-restaurante.webp",
      "/images/proyecto-mobiliario-tv.webp",
    ],
    tags: ["Metal y Madera", "Estanterías", "Mobiliario para Restaurante", "A Medida"],
    whatsappMessage:
      "Hola, quiero cotizar mobiliario industrial en metal y madera para mi negocio u hogar.",
  },
  {
    id: 7,
    title: "Carros y Módulos Comerciales a Medida",
    category: "Mobiliario y Estructuras",
    location: "Cali y alrededores, Valle del Cauca",
    description:
      "Carros y estaciones móviles de venta comercial fabricadas con estructura metálica reforzada, campana extractora, vitrina en vidrio y ruedas de alto tránsito.",
    images: [
      "/images/proyecto-carro-comercial-1.webp",
      "/images/proyecto-carro-comercial-2.webp",
    ],
    tags: ["Carros Comerciales", "Estructuras Móviles", "Acero", "Negocios"],
    whatsappMessage:
      "Hola, me gustaria cotizar un carro o modulo comercial movil a medida.",
  },
  {
    id: 8,
    title: "Fabricación de Letras Corpóreas — Proceso en Taller",
    category: "Taller y Metalmecánica",
    location: "Cali y alrededores, Valle del Cauca",
    description:
      "Proceso técnico y artesanal de corte, ensamble, soldadura y pulido de piezas volumétricas en acero. Cada letra se trabaja a mano con precisión y supervisión en cada etapa.",
    images: [
      "/images/proyecto-taller-soldadura.webp",
      "/images/hero-bg.webp",
    ],
    tags: ["Soldadura", "Acero", "Proceso Artesanal", "Corte y Pulido"],
    whatsappMessage:
      "Hola, me gustaria cotizar un trabajo de fabricacion en metalmecanica y soldadura.",
  },
].map((proj) => ({
  ...proj,
  // La portada siempre es la primera foto del arreglo — sincronización automática
  image: proj.images[0],
}));

// ─────────────────────────────────────────────────────────────────
// TRAYECTORIA Y SECTORES REALES
// ─────────────────────────────────────────────────────────────────

export const sectorsTrajectory = [
  {
    id: 1,
    title: "Condominios y Conjuntos Campestres",
    subtitle: "Portales de acceso, muros perimetrales y señalización de bienvenida",
    icon: "Home",
    featuredProject: "La Acuarela Condominio Campestre",
    description:
      "Fabricamos letreros corpóreos de gran escala diseñados para soportar sol y lluvia continua, con iluminación nocturna perimetral que dignifica el acceso y valoriza la copropiedad.",
    highlights: [
      "Resistencia a intemperie",
      "Iluminación perimetral LED",
      "Instalación en piedra o concreto",
    ],
  },
  {
    id: 2,
    title: "Sedes Institucionales y Corporativas",
    subtitle: "Fachadas de honor, escudos heráldicos y recepciones empresariales",
    icon: "Shield",
    featuredProject: "Sede Habitacional Conquistadores — Ejército Nacional",
    description:
      "Elaboramos escudos con calado minucioso y letras en acero inoxidable con retroiluminación rasante, proyectando solidez, solemnidad y acabados atención directa.",
    highlights: [
      "Corte de alta precisión",
      "Fijación limpia sin cables a la vista",
      "Acabado duradero",
    ],
  },
  {
    id: 3,
    title: "Comercio y Espacios Públicos en Cali",
    subtitle: "Avisos de fachada comerciales y monumentos turísticos barriales",
    icon: "MapPin",
    featuredProject: "Bienvenidos / U & Monumentos barriales (La Buitrera, La Castilla)",
    description:
      "Desarrollamos puntos de atracción visual que atraen clientes y fomentan el sentido de pertenencia en corregimientos y barrios turísticos de Cali y el Valle.",
    highlights: [
      "Atracción visual de alto tráfico",
      "Estructuras resistentes",
      "Pintura y acabado duradero",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────
// PASOS DEL PROCESO DE TRABAJO
// ─────────────────────────────────────────────────────────────────

export const processSteps = [
  {
    step: 1,
    title: "Cotización Rápida",
    description:
      "Escríbenos por WhatsApp con las medidas aproximadas, el material que prefieres y una foto del muro o espacio.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Diseño y Propuesta",
    description:
      "Te asesoramos y preparamos una propuesta digital visual para que apruebes dimensiones, tipografía y acabados.",
    icon: "PenTool",
  },
  {
    step: 3,
    title: "Fabricación en Taller",
    description:
      "Iniciamos corte, calado, soldadura y ensamblaje con materiales de primera y supervisión rigurosa en cada etapa.",
    icon: "Settings",
  },
  {
    step: 4,
    title: "Entrega e Instalación",
    description:
      "Coordinamos la instalación segura en tu muro en Cali o despachamos debidamente embalado a otras ciudades.",
    icon: "CheckCircle",
  },
];

// ─────────────────────────────────────────────────────────────────
// TEXTOS DE LA SECCIÓN DE CONTACTO Y COTIZACIÓN
// ─────────────────────────────────────────────────────────────────

export const quoteSectionTexts = {
  badge: "Hablemos de tu proyecto",
  title: "Cotiza gratis, sin compromiso",
  subtitle:
    "Escríbenos por WhatsApp con tu idea o referencia visual. Recibe asesoría directa y propuesta clara en menos de 24 horas hábiles.",
  guideTitle: "¿Qué necesitas enviar para cotizar?",
  guideDescription:
    "Para darte el presupuesto exacto y la mejor recomendación técnica, comparte estos detalles si los tienes a mano:",
  steps: [
    {
      emoji: "1",
      title: "Nombre del negocio o proyecto",
      description: "El texto exacto o logotipo que llevará el aviso o mueble.",
    },
    {
      emoji: "2",
      title: "Medidas aproximadas",
      description: "Ancho y alto estimado del muro, aviso o espacio disponible.",
    },
    {
      emoji: "3",
      title: "Foto del espacio o fachada",
      description: "Una foto con luz natural del lugar donde se fijará el trabajo.",
    },
    {
      emoji: "4",
      title: "Material o estilo preferido",
      description: "Acero inoxidable, iluminación LED, corte láser, metal y madera, etc.",
    },
  ],
  responseTime: "menos de 24 horas hábiles",
  ctaButtonText: "Cotizar por WhatsApp",
  trustNote: "Sin compromiso • Sin intermediarios • Asesoría personalizada directa de taller",
};
