# Helena Metalmadera — Landing Page Comercial

Sitio web comercial *responsive* desarrollado para **Helena Metalmadera**, enfocado en la presentación de especialidades, catálogo visual de trabajos y conversión directa vía WhatsApp para clientes en **Cali, alrededores y el Valle del Cauca**.

## Características Principales

- **Arquitectura Single Source of Truth (`src/data/businessData.js`):** Centraliza información comercial, horarios, cobertura, especialidades, proyectos y generación segura de enlaces de WhatsApp mediante `buildWhatsAppUrl()`.
- **Portafolio Interactivo y Lightbox Táctil (`Gallery.jsx`):** Filtros dinámicos por categoría, vistas múltiples por proyecto y visor modal con soporte para teclado (`Escape`, `ArrowLeft`, `ArrowRight`) y gestos táctiles (*swipe*).
- **Navegación Inteligente (`Navbar.jsx`):** Detección automática de sección activa mediante `IntersectionObserver`, menú adaptable para dispositivos móviles y desplazamiento suave.
- **Optimización de Activos y SEO Técnico:** Imágenes locales estandarizadas en formato `.webp` con respaldo `onError`, metadatos Open Graph, datos estructurados JSON-LD (`HomeAndConstructionBusiness`), `robots.txt` y `sitemap.xml`.

## Stack Tecnológico

- **Frontend:** React + Vite
- **Estilos:** Tailwind CSS
- **Iconografía:** Lucide React
- **Despliegue:** GitHub + Vercel

## Estructura del Proyecto

```text
helena-metalmadera/
├── public/
│   ├── images/          # Activos visuales en formato .webp
│   ├── favicon.svg      # Icono del navegador
│   ├── robots.txt       # Directivas para rastreadores
│   └── sitemap.xml      # Mapa del sitio para buscadores
├── src/
│   ├── components/      # Componentes modulares de interfaz
│   ├── data/            # Fuente única de verdad (businessData.js)
│   └── utils/           # Utilidades compartidas
└── index.html           # Metadatos SEO y estructura base
