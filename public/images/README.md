# 📸 Inventario Oficial de Activos Visuales — Helena Metalmadera

Este directorio contiene las 18 imágenes reales y optimizadas del taller en formato moderno `.webp`.
Todas las rutas y nombres de archivo en el repositorio están estandarizados estrictamente en minúsculas, con guiones (`kebab-case`), sin espacios ni caracteres especiales, asegurando compatibilidad del 100% en entornos sensibles a mayúsculas y minúsculas como Linux, Vercel, Netlify o servidores VPS.

---

## 1. Identidad de Marca y Portada

| Archivo | Resolución | Descripción y Ubicación en la Web |
| :--- | :--- | :--- |
| `logo.webp` | 400 × 400 | Logotipo oficial de Helena Metalmadera (antorcha, engranaje y chispas). Empleado en favicon de `index.html`, insignia circular con relieve en `Navbar.jsx` y bloque corporativo de `Footer.jsx`. |
| `hero-bg.webp` | 1600 × 1200 | Fotografía real de soldadura y conformado de letra corpórea gigante "M" con chispas en taller. Fondo principal del Hero con carga inmediata (`fetchpriority="high"`, `loading="eager"`), metaetiquetas Open Graph / Twitter Card e imagen de respaldo segura en controladores `onError`. También ilustra el servicio *Letras en Acero Inoxidable*. |

---

## 2. Especialidades y Servicios (`Services.jsx`)

Cada servicio cuenta con una fotografía real vinculada directamente a su especialidad de fabricación:

| Servicio | Archivo Conectado | Resolución | Detalle Visual |
| :--- | :--- | :--- | :--- |
| **Avisos Publicitarios 3D** | `proyecto-la-acuarela-noche.webp` | 1200 × 867 | Letras corpóreas de gran escala con iluminación perimetral nocturna en condominio. |
| **Letras en Acero Inoxidable** | `hero-bg.webp` | 1600 × 1200 | Fabricación y soldadura especializada de letras corpóreas metálicas en taller. |
| **Avisos Iluminados LED** | `proyecto-bienvenidos-led.webp` | 1200 × 675 | Aviso comercial corpóreo de fachada con retroiluminación halo LED de alto impacto. |
| **Corte Láser y Personalizados** | `proyecto-primaventto.webp` | 1080 × 605 | Aviso corporativo de precisión milimétrica para edificio empresarial. |
| **Señalética Arquitectónica** | `proyecto-conquistadores.webp` | 1200 × 573 | Letrero monumental institucional con escudo heráldico calado e iluminación LED. |
| **Mobiliario Industrial** | `proyecto-mobiliario-estanteria.webp` | 1005 × 1005 | Estantería industrial a medida combinando estructura metálica y madera natural. |

---

## 3. Catálogo de Obras y Proyectos (`Gallery.jsx`)

Galería con 9 tarjetas independientes de proyectos reales. Cada tarjeta posee una foto de portada principal única y un carrusel Lightbox interactivo sin duplicación entre tarjetas:

| Proyecto | Portada Principal | Vistas Adicionales en Carrusel | Descripción del Trabajo |
| :--- | :--- | :--- | :--- |
| **La Acuarela Condominio Campestre** | `proyecto-la-acuarela-dia.webp` (1200×2134) | `proyecto-la-acuarela-noche.webp`<br>`proyecto-la-acuarela-instalacion.webp`<br>`proyecto-la-acuarela-detalle.webp` | Letras corpóreas monumentales en fachada campestre. Proceso completo de alineación, instalación diurna y vista nocturna con halo LED. |
| **Fachada Comercial Bienvenidos / U** | `proyecto-bienvenidos-led.webp` (1200×675) | — | Letrero corpóreo de acceso con retroiluminación perimetral LED sobre panel arquitectónico. |
| **Sede Habitacional Conquistadores** | `proyecto-conquistadores.webp` (1200×573) | — | Letrero institucional monumental para el Ejército Nacional con escudo heráldico calado. |
| **Aviso Primaventto Edificio** | `proyecto-primaventto.webp` (1080×605) | — | Aviso corpóreo en corte láser y acabado en pintura electrostática para fachada comercial. |
| **Letrero Turístico Yo Amo La Castilla** | `proyecto-la-castilla.webp` (1200×675) | `proyecto-la-castilla-proceso.webp` | Letrero monumental turístico con estructura reforzada para intemperie y corazón volumétrico. |
| **Aviso Monumental Yo Amo La Buitrera** | `proyecto-la-buitrera.webp` (1200×675) | — | Letras monumentales de bienvenida turística y barrial en lámina de acero y pintura automotriz. |
| **Fabricación y Soldadura en Taller** | `proyecto-taller-soldadura.webp` (1600×900) | — | Conformado, pulido y soldadura TIG/MIG de letras y avisos tridimensionales en taller. |
| **Mobiliario Comercial y Gastronómico** | `proyecto-mobiliario-restaurante.webp` (1080×1080) | `proyecto-mobiliario-estanteria.webp`<br>`proyecto-mobiliario-tv.webp` | Mesas, barras y estanterías en perfilería de acero al carbono y tapas en madera maciza. |
| **Carros Comerciales y Food Trucks** | `proyecto-carro-comercial-1.webp` (1080×1080) | `proyecto-carro-comercial-2.webp` | Fabricación a medida de estaciones móviles comerciales en estructura metálica y acabados en madera. |

---

## 4. Política de Confiabilidad y Respaldo Visual

1. **Cero Dependencias Externas:** No se emplean servicios ni CDNs de terceros (como Unsplash). Todas las imágenes residen de manera local en `public/images/`.
2. **Protección contra Bucles Infinitos:** Todas las etiquetas `<img>` implementan controladores `onError` protegidos:
   ```jsx
   onError={(e) => {
     e.currentTarget.onerror = null;
     e.currentTarget.src = '/images/hero-bg.webp'; // o '/images/logo.webp'
   }}
   ```
3. **Carga Prioritaria y Diferida:**
   - `hero-bg.webp` y `logo.webp`: Carga prioritaria inmediata (`fetchpriority="high"`, `loading="eager"`).
   - Portadas y miniaturas de galería: Carga diferida (`loading="lazy"`).
