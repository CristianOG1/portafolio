// ============================================================================
// Portafolio de Cristian Olmos González
// ----------------------------------------------------------------------------
// Todo el contenido del sitio vive en este archivo. Para actualizar textos,
// enlaces, habilidades o proyectos, edita únicamente este documento.
// ============================================================================

export const enlacesNavegacion = [
  { etiqueta: 'Inicio', href: '#inicio' },
  { etiqueta: 'Estudios', href: '#estudios' },
  { etiqueta: 'Habilidades', href: '#habilidades' },
  { etiqueta: 'Proyectos', href: '#proyectos' },
  { etiqueta: 'Contacto', href: '#contacto' },
]

export const sitio = {
  edicion: 'Portafolio de evidencias · 2026',
  leyendaPresentacion: 'Ingeniería de software aplicada a productos reales.',
  notaPie:
    'Disponible para colaborar en equipos de producto, desarrollo web y proyectos independientes.',
  etiquetas: {
    saltarContenido: 'Saltar al contenido',
    imprimirCurriculum: 'Imprimir CV',
    guardarPdf: 'Guardar como PDF',
    verProyectos: 'Ver proyectos',
    verProyecto: 'Ver proyecto',
    masEnGithub: 'Más proyectos en GitHub',
    destacado: 'Proyecto destacado',
    rol: 'Rol',
    contacto: 'Contacto',
    correo: 'Correo',
    telefono: 'Teléfono',
    ubicacion: 'Ubicación',
    linkedin: 'LinkedIn',
    volverInicio: 'Volver al inicio',
    enlaceProximo: 'Enlace disponible próximamente',
    enlaceProximoSufijo: ', disponible próximamente',
  },
  secciones: {
    estudios: {
      indice: '01',
      titulo: 'Estudios',
      descripcion:
        'Formación académica orientada al desarrollo de software, la arquitectura de sistemas y la gestión de proyectos tecnológicos.',
    },
    habilidades: {
      indice: '02',
      titulo: 'Habilidades',
      descripcion:
        'Tecnologías y herramientas que uso para construir productos de principio a fin, desde la interfaz hasta la base de datos y el despliegue.',
      apartado: '4 áreas técnicas',
    },
    proyectos: {
      indice: '03',
      titulo: 'Proyectos',
      descripcion:
        'Evidencias de trabajo en aplicaciones web, comercio electrónico, videojuegos y aplicaciones móviles. Cada proyecto documenta el contexto, el stack y mi participación.',
    },
  },
}

export const perfil = {
  nombre: 'Cristian Olmos González',
  nombreCorto: 'Cristian Olmos',
  apellido: 'Olmos González',
  logo: 'CristianOG',
  iniciales: 'CO',
  codigoPais: 'MX',
  rol: 'Ingeniero en Desarrollo y Gestión de Software',
  resumen:
    'Desarrollador enfocado en aplicaciones web, móviles y videojuegos 2D, con experiencia en arquitectura cliente-servidor, bases de datos relacionales con seguridad RLS y despliegue en la nube.',
  foto: '/foto-perfil.jpeg',
  disponibilidad: 'Disponible para nuevos proyectos',
  ubicacion: 'Estado de México, México',
  contacto: {
    correo: 'cris98tv@outlook.com',
    telefono: '+52 55 0000 0000',
    telefonoHref: '+525500000000',
    ubicacion: 'Estado de México, México',
    linkedin: '#',
    github: 'https://github.com/CristianOG1',
  },
  datos: [
    { etiqueta: 'Enfoque', valor: 'Web, móvil y videojuegos 2D' },
    { etiqueta: 'Base', valor: 'Estado de México, México' },
    { etiqueta: 'Disponibilidad', valor: 'Abierto a oportunidades' },
  ],
}

export const estudios = {
  titulo: 'Ingeniería en Desarrollo y Gestión de Software',
  institucion: 'Universidad Tecnológica Fidel Velázquez',
  estado: 'Egresado',
  ubicacion: 'Estado de México, México',
  descripcion:
    'Formación enfocada en el ciclo completo del software: análisis de requerimientos, arquitectura cliente-servidor, modelado de datos, desarrollo de aplicaciones y gestión de proyectos tecnológicos.',
  areas: [
    'Arquitectura cliente-servidor',
    'Bases de datos relacionales',
    'Desarrollo web y móvil',
    'Gestión de proyectos de software',
  ],
  proyectoIntegrador: {
    etiqueta: 'Proyecto integrador',
    codigo: 'DGS-1002',
    nombre: 'BarberWeb',
    descripcion:
      'Plataforma web multi-tenant para barberías, desarrollada como evidencia integradora de la carrera.',
    destacados: [
      'Catálogo y agenda de citas en 3 pasos',
      'Portal de cliente y paneles de administración',
      '23 políticas RLS y Edge Functions en Supabase',
    ],
    enlace: '#proyectos',
  },
}

export const gruposHabilidades = [
  {
    id: 'lenguajes',
    titulo: 'Lenguajes de Programación',
    icono: 'codigo',
    elementos: ['JavaScript', 'TypeScript', 'C#', 'Dart', 'SQL'],
  },
  {
    id: 'marcos',
    titulo: 'Frameworks y Librerías',
    icono: 'capas',
    elementos: [
      'React 19',
      'Next.js',
      'React Native',
      'Flutter',
      'Tailwind CSS',
      'Vite',
      'Strapi v5',
    ],
  },
  {
    id: 'bases-datos',
    titulo: 'Bases de Datos',
    icono: 'baseDatos',
    elementos: ['PostgreSQL (Supabase)', 'SQLite'],
  },
  {
    id: 'plataformas',
    titulo: 'Plataformas, Motores y Herramientas',
    icono: 'herramientas',
    elementos: [
      'Supabase (Auth, Storage, Edge Functions con Deno, RLS)',
      'Unity 6 (URP 2D)',
      'Cloudflare',
      'Vercel',
      'Git',
      'GitHub',
      'Node.js',
      'pnpm',
    ],
  },
]

export const proyectos = [
  {
    id: 'barberweb',
    indice: '01',
    titulo: 'BarberWeb',
    subtitulo: 'Sistema Web Multi-Tenant para Barberías',
    descripcion:
      'Plataforma web para la gestión integral de barberías: catálogo de servicios, agenda de citas en tres pasos, portal de cliente, panel de administración y panel superadmin. La seguridad de los datos se resuelve con 23 políticas RLS y Edge Functions en Supabase.',
    rol: 'Desarrollo Front-end y Coordinación Técnica',
    tecnologias: [
      'React 19',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'RLS',
      'Edge Functions',
      'Cloudflare',
      'Vercel',
    ],
    enlaces: [
      { etiqueta: 'Repositorio', href: 'https://github.com/CristianOG1/reservas-barberia', tipo: 'repositorio' },
      { etiqueta: 'Demo', href: 'https://kromatik.gools.com.mx', tipo: 'demostracion' },
    ],
    destacado: true,
    ilustracion: 'barberia',
    etiquetaIlustracion: 'Sistema multi-tenant',
    icono: 'tijeras',
    destacados: [
      'Arquitectura multi-tenant',
      'Agenda de citas en 3 pasos',
      '23 políticas RLS',
      'Despliegue en Cloudflare y Vercel',
    ],
    tipoDispositivo: 'escritorio',
    imagenPrevia: '/barberweb.png',
    urlRepositorio: 'https://github.com/CristianOG1/reservas-barberia',
    urlEnVivo: 'https://kromatik.gools.com.mx',
    soportaIframe: true,
  },
  {
    id: 'tienda',
    indice: '02',
    titulo: 'Tienda Web',
    subtitulo: 'E-Commerce Full-Stack',
    descripcion:
      'Tienda en línea con arquitectura desacoplada y un panel de administración para gestionar productos, categorías e imágenes alojadas en la nube.',
    rol: 'Desarrollo Full-Stack',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Strapi v5', 'SQLite'],
    enlaces: [
      {
        etiqueta: 'Repositorio',
        href: 'https://github.com/CristianOG1/gestion-proyecto-tienda',
        tipo: 'repositorio',
        externo: true,
      },
    ],
    ilustracion: 'tienda',
    icono: 'tienda',
    tipoDispositivo: 'escritorio',
    imagenPrevia: '/tienda.png',
    urlRepositorio: 'https://github.com/CristianOG1/gestion-proyecto-tienda',
    urlEnVivo: 'https://gestion-proyecto-tienda.vercel.app/',
    soportaIframe: true,
  },
  {
    id: 'corcelio',
    indice: '03',
    titulo: 'Corcelio',
    subtitulo: 'Videojuego 2D Endless Runner',
    descripcion:
      'Videojuego multiplataforma para Android y Windows con tres niveles, dificultad progresiva, enemigos con patrones lineales y senoidales, sistema de vidas y puntos, y modal de Términos y Condiciones.',
    rol: 'Diseño y Desarrollo de Videojuego',
    tecnologias: ['Unity 6', 'C#', 'URP 2D', 'Input System'],
    enlaces: [
      { etiqueta: 'Repositorio', href: 'https://github.com/CristianOG1/Corcelio', tipo: 'repositorio' },
      { etiqueta: 'Demo', href: '#', tipo: 'demostracion' },
    ],
    ilustracion: 'corredor',
    icono: 'mando',
    tipoDispositivo: 'movil',
    imagenPrevia: '/corcelio.png',
    urlRepositorio: 'https://github.com/CristianOG1/Corcelio',
    urlEnVivo: '#',
    soportaIframe: false,
  },
  {
    id: 'delivery',
    indice: '04',
    titulo: 'Delivery App',
    subtitulo: 'Aplicación Móvil para Android',
    descripcion:
      'Aplicación móvil enfocada en la gestión y el seguimiento de entregas a domicilio, con una interfaz pensada para consultar pedidos y su estado.',
    rol: 'Desarrollo Móvil',
    tecnologias: ['Flutter', 'Dart'],
    enlaces: [{ etiqueta: 'Demo', href: '#', tipo: 'demostracion' }],
    ilustracion: 'entrega',
    icono: 'telefono',
    tipoDispositivo: 'movil',
    imagenPrevia: '/delivery.png',
    urlRepositorio: '#',
    urlEnVivo: 'https://github.com/CristianOG1/delivery-app',
    soportaIframe: false,
  },
  {
    id: 'mi-bolsillo',
    indice: '05',
    titulo: 'Mi Bolsillo',
    subtitulo: 'App de Gestión de Gastos (PWA)',
    descripcion:
      'Aplicación web progresiva para el control de finanzas personales y el registro de gastos, con una experiencia instalable y ligera.',
    rol: 'Desarrollo de Aplicación',
    tecnologias: ['React Native', 'PWA'],
    enlaces: [{ etiqueta: 'Demo', href: 'https://github.com/lesliedenise401/app-gastos', tipo: 'demostracion' }],
    ilustracion: 'cartera',
    icono: 'cartera',
    tipoDispositivo: 'movil',
    imagenPrevia: '/mi-bolsillo.jpeg',
    urlRepositorio: 'https://mi-bolsillo-brown.vercel.app/',
    urlEnVivo: 'https://github.com/lesliedenise401/app-gastos',
    soportaIframe: true,
  },
]

export const piePagina = {
  titulo: 'Hablemos de tu próximo proyecto.',
  subtitulo:
    'Estoy abierto a oportunidades en desarrollo web, aplicaciones móviles y videojuegos. Si quieres revisar el código de algún proyecto, escríbeme y con gusto comparto el repositorio.',
  cta: {
    etiqueta: 'Escríbeme',
    href: `mailto:${perfil.contacto.correo}`,
  },
  derechos: `© ${new Date().getFullYear()} Cristian Olmos González. Todos los derechos reservados.`,
  credito: 'Diseñado y desarrollado con React, Tailwind CSS y Framer Motion.',
}