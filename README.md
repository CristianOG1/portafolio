# Portafolio de evidencias — Cristian Olmos González

Portafolio web y currículum de **Cristian Olmos González**, Ingeniero en Desarrollo y Gestión de Software. Construido con React, Vite, Tailwind CSS, Framer Motion y Lucide.

## Características

- Diseño editorial monocromático, responsivo y con navegación fija.
- Animaciones de entrada, aparición al hacer scroll y micro-interacciones con Framer Motion.
- Contenido centralizado en un solo archivo de datos.
- Fotografía con fallback de iniciales si `public/foto-perfil.jpg` no existe.
- Estilos de impresión para guardar el currículum en PDF en blanco y negro.
- Soporte para `prefers-reduced-motion` y navegación por teclado.

## Requisitos

- Node.js 20 o superior
- pnpm

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Compilación

```bash
pnpm build
pnpm preview
```

## Editar el contenido

Todo el contenido vive en `src/data/portfolioData.js`:

- Datos personales y de contacto.
- Formación académica y proyecto integrador.
- Habilidades técnicas.
- Proyectos, roles, stacks y enlaces.
- Textos del footer.

Antes de publicar, reemplaza el correo, teléfono y LinkedIn de ejemplo por tus datos reales.

## Agregar la fotografía

Coloca la fotografía profesional en:

```text
public/foto-perfil.jpg
```

Si el archivo no existe o no puede cargarse, el componente muestra un fallback elegante con las iniciales `CO`.

## Imprimir o guardar como PDF

Usa el botón **Imprimir CV** de la navbar o del hero. El navegador abrirá el diálogo de impresión; elige **Guardar como PDF**. La vista de impresión oculta la navegación y los elementos decorativos, y convierte el sitio a blanco y negro.

## Estructura

```text
src/
├── components/
│   ├── BrandIcons.jsx
│   ├── Education.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProjectArtwork.jsx
│   ├── ProjectPreviewModal.jsx
│   ├── Projects.jsx
│   ├── Reveal.jsx
│   ├── SectionHeading.jsx
│   └── Skills.jsx
├── data/
│   └── portfolioData.js
├── lib/
│   └── motion.js
├── App.jsx
├── index.css
└── main.jsx
```

## Enlaces pendientes

Los proyectos con `href: '#'` muestran sus botones deshabilitados. Sustituye ese valor por la URL real del repositorio o demo en `src/data/portfolioData.js`.
