/**
 * Gallery.jsx — Galería de Proyectos Reales con Filtros Dinámicos y Lightbox Carrusel
 *
 * Características del Lightbox:
 * - object-contain en modal (cero recortes en fotos verticales u horizontales)
 * - Swipe táctil natural izquierda/derecha (onTouchStart / onTouchEnd) para celular
 * - Navegación por flechas, teclado (ArrowLeft, ArrowRight, Escape) y bullets
 * - Contador de fotografías (ej. 1 / 4)
 * - Bloqueo y restauración garantizada de scroll del body (cleanup en useEffect)
 * - Reseteo de índice a 0 al abrir cualquier proyecto nuevo
 * - Clic en el backdrop (fuera de la imagen) cierra el modal
 * - Protección contra bucles infinitos en onError
 *
 * Características de la Grilla:
 * - object-cover en tarjetas para cuadrícula uniforme y visual impactante
 * - Estados táctiles premium: active:scale-[0.98] en tarjetas interactivas
 * - Filtros dinámicos 100% generados desde businessData.js (sin hardcodear categorías)
 */

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { X, ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';
import { galleryProjects, business, isValidUrl, buildWhatsAppUrl } from '../data/businessData';

// Icono de Instagram (SVG inline — lucide-react no exporta Instagram)
function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

// Icono de Facebook (SVG inline)
function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

// ── COMPONENTE MODAL / LIGHTBOX CON CARRUSEL ──────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Refs para el swipe táctil — no provoca re-renders innecesarios
  const touchStartX = useRef(null);

  // Lista de imágenes del proyecto sin duplicados
  const imageList = useMemo(() => {
    if (!project) return [];
    if (Array.isArray(project.images) && project.images.length > 0) return project.images;
    return [project.image];
  }, [project]);

  const hasMultipleImages = imageList.length > 1;

  // Reiniciar índice a 0 cada vez que se abre un proyecto diferente
  useEffect(() => { setCurrentImageIndex(0); }, [project]);

  const handlePrev = useCallback(() => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  }, [hasMultipleImages, imageList.length]);

  const handleNext = useCallback(() => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  }, [hasMultipleImages, imageList.length]);

  // Teclado (Escape, flechas) + bloqueo de scroll del body con restauración garantizada
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape')      onClose();
      else if (e.key === 'ArrowLeft')  handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restauración garantizada — el scroll siempre vuelve al estado original
      document.body.style.overflow = originalOverflow || '';
    };
  }, [project, onClose, handlePrev, handleNext]);

  // ── Swipe táctil izquierda/derecha ──
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    // Umbral mínimo de 40px para diferenciar swipe de un toque simple
    if (delta > 40)       handleNext();
    else if (delta < -40) handlePrev();
    touchStartX.current = null;
  };

  if (!project) return null;

  const currentImageUrl = imageList[currentImageIndex] || project.image;
  const whatsappUrl = buildWhatsAppUrl(project.whatsappMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-zinc-950/90 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle del proyecto: ${project.title}`}
    >
      <div className="relative bg-zinc-900 border border-zinc-700/80 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white p-2.5 rounded-full border border-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Área de imagen con object-contain — sin recortes en cualquier orientación */}
        <div
          className="relative w-full h-72 sm:h-96 md:h-[28rem] bg-zinc-950 flex items-center justify-center overflow-hidden rounded-t-2xl select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={currentImageUrl}
            src={currentImageUrl}
            alt={`${project.title} - Vista ${currentImageIndex + 1} de ${imageList.length}`}
            loading="eager"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/hero-bg.webp';
            }}
            className="max-h-full max-w-full object-contain transition-opacity duration-300"
          />

          {/* Flecha anterior */}
          {hasMultipleImages && (
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-zinc-900/85 hover:bg-amber-500 hover:text-zinc-950 text-white p-2.5 sm:p-3 rounded-full border border-zinc-700/80 transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Flecha siguiente */}
          {hasMultipleImages && (
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-zinc-900/85 hover:bg-amber-500 hover:text-zinc-950 text-white p-2.5 sm:p-3 rounded-full border border-zinc-700/80 transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Categoría y contador de fotos */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
              {project.category}
            </span>
            {hasMultipleImages && (
              <span className="bg-zinc-900/85 backdrop-blur-md text-zinc-300 border border-zinc-700/80 text-xs font-mono font-medium px-2.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                {currentImageIndex + 1} / {imageList.length}
              </span>
            )}
          </div>

          {/* Bullets de navegación */}
          {hasMultipleImages && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-4">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-200 focus:outline-none cursor-pointer ${
                    idx === currentImageIndex
                      ? 'w-6 bg-amber-500'
                      : 'w-2 bg-zinc-600 hover:bg-zinc-400'
                  }`}
                  aria-label={`Ver foto ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Contenido descriptivo del proyecto */}
        <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-2xl font-black text-white mb-1.5 tracking-tight">{project.title}</h3>
            <p className="text-zinc-400 text-sm mb-4 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{project.location}</span>
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6 text-sm sm:text-base">{project.description}</p>

            {/* Tags técnicos del proyecto */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700/80 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA WhatsApp sin emojis */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-900/40 active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Cotizar un trabajo similar</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ── COMPONENTE PRINCIPAL: GALERÍA DE PROYECTOS ──────────────────────────────
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  // Categorías generadas dinámicamente desde los proyectos — sin hardcodear
  const dynamicCategories = useMemo(() => {
    return ['Todos', ...new Set(galleryProjects.map((p) => p.category))];
  }, []);

  // Proyectos filtrados por categoría activa
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return galleryProjects;
    return galleryProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const hasValidFacebook = isValidUrl(business.facebook);

  return (
    <>
      <ProjectModal project={selectedProject} onClose={closeModal} />

      <section
        id="proyectos"
        className="bg-zinc-950 py-16 md:py-24 scroll-mt-24 border-t border-zinc-900/50"
        aria-label="Galería de proyectos reales y fabricación en taller"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Encabezado */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wide">
                Portafolio Real
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Obras y Fabricación <span className="text-amber-400">en Taller</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
              Cada aviso, letra y pieza metálica fue diseñada, fabricada e instalada por nuestro equipo.
              Haz clic en cualquier proyecto para ver todas sus vistas y cotizar.
            </p>
          </div>

          {/* Filtros dinámicos — botones con estado táctil */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {dynamicCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-[0.96] ${
                  activeFilter === category
                    ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-900/30'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                }`}
                aria-pressed={activeFilter === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grilla de tarjetas con fondo y bordes oscuros uniformes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const photoCount = Array.isArray(project.images) ? project.images.length : 1;

              return (
                <article
                  key={project.id}
                  className="group relative cursor-pointer bg-zinc-900 border border-zinc-800 hover:border-amber-500/70 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/20 hover:-translate-y-1 active:scale-[0.98] flex flex-col"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                  aria-label={`Ver proyecto: ${project.title}`}
                >
                  <div className="relative h-64 overflow-hidden bg-zinc-950">
                    {/* Portada en object-cover para cuadrícula uniforme */}
                    <img
                      src={project.image}
                      alt={`${project.title} — trabajo ejecutado en ${project.location}`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/hero-bg.webp';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-amber-500 text-zinc-950 font-bold text-xs sm:text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                        <ExternalLink className="w-4 h-4" />
                        <span>Ver fotos y detalles</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="bg-zinc-900/90 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/40">
                        {project.category}
                      </span>
                    </div>

                    {photoCount > 1 && (
                      <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md text-zinc-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-zinc-700 flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-amber-400" />
                        <span>{photoCount} fotos</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors text-lg mb-1">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-xs flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{project.location}</span>
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bloque de redes sociales */}
          <div className="mt-14 text-center">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-2">
                ¿Quieres ver más trabajos y procesos en taller?
              </h3>
              <p className="text-zinc-400 mb-6 text-sm">
                Publicamos instalaciones semanales y fotografías del proceso de fabricación en nuestras redes oficiales.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md shadow-pink-950/30 active:scale-[0.98]"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span>Instagram Oficial</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {hasValidFacebook && (
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md shadow-blue-950/30 active:scale-[0.98]"
                  >
                    <FacebookIcon className="w-5 h-5" />
                    <span>Facebook Oficial</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
