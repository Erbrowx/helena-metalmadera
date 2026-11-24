/**
 * Navbar.jsx — Barra de navegación principal y fija
 *
 * Características:
 * - IntersectionObserver que detecta la sección activa y la resalta en el menú
 * - Subrayado animado en color ámbar para enlace hover, focus y sección activa
 * - Área táctil mínima cómoda en móvil (min-h-[44px]) y cierre con Escape
 * - Insignia circular oficial con logo del taller
 * - Botón de Facebook condicional para evitar enlaces rotos
 * - Enlace de WhatsApp sin emojis para evitar caracteres corruptos
 */

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { business, isValidUrl, buildWhatsAppUrl } from '../data/businessData';

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

// Icono oficial simplificado de Helena Metalmadera: Engranaje + Soplete de corte en blanco
function HelenaLogoIcon({ className = "w-10 h-10 sm:w-11 sm:h-11" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Dientes exteriores del engranaje mecánico */}
      <rect x="44" y="6" width="12" height="10" rx="2" />
      <rect x="68" y="15" width="12" height="10" rx="2" transform="rotate(35 74 20)" />
      <rect x="73" y="68" width="12" height="10" rx="2" transform="rotate(-40 79 73)" />
      <rect x="44" y="84" width="12" height="10" rx="2" />
      <rect x="18" y="74" width="12" height="10" rx="2" transform="rotate(40 24 79)" />
      <rect x="6" y="44" width="10" height="12" rx="2" />
      <rect x="18" y="16" width="12" height="10" rx="2" transform="rotate(-40 24 21)" />

      {/* Anillo del engranaje con apertura lateral en la zona de corte */}
      <path d="M 76 34 A 38 38 0 1 0 81 56 L 68 53 A 26 26 0 1 1 65 39 Z" />

      {/* Soplete de corte y soldadura */}
      {/* Mango estriado en diagonal */}
      <path d="M 21 68 L 31 58 C 32 57, 34 57, 35 58 L 38 61 C 39 62, 39 64, 38 65 L 28 75 C 27 76, 25 76, 24 75 Z" />
      {/* Válvulas reguladoras de gas */}
      <circle cx="31" cy="54" r="2.5" />
      <circle cx="36" cy="59" r="2.5" />
      {/* Cañas gemelas del soplete */}
      <path d="M 33 56 L 53 36 L 56 39 L 36 59 Z" />
      {/* Cabeza acodada */}
      <path d="M 52 37 L 62 27 C 63 26, 65 26, 66 27 L 70 31 C 71 32, 71 34, 70 35 L 60 45 Z" />
      {/* Boquilla de inyección */}
      <path d="M 64 25 L 73 20 L 75 23 L 67 28 Z" />

      {/* Flama y chispas de corte */}
      <polygon points="76,21 81,14 79,20 86,17 80,23 87,25 80,26 84,33 78,28 77,35 75,27 70,30 73,24 67,22 74,22" />
      <circle cx="89" cy="18" r="1.5" />
      <circle cx="88" cy="30" r="1.5" />
      <circle cx="80" cy="10" r="1.5" />
      <circle cx="80" cy="38" r="1.5" />
    </svg>
  );
}

// IDs de las secciones para el IntersectionObserver
const NAV_SECTIONS = ['servicios', 'proyectos', 'proceso', 'trayectoria', 'contacto'];

const navLinks = [
  { label: 'Servicios',   href: '#servicios'   },
  { label: 'Proyectos',   href: '#proyectos'   },
  { label: 'Proceso',     href: '#proceso'     },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Contacto',    href: '#contacto'    },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]   = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // ── Detecta scroll para el fondo de la barra ──────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── IntersectionObserver: sección activa para subrayado ───────
  useEffect(() => {
    const targets = NAV_SECTIONS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Toma la sección más visible actualmente
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Preferimos la que tiene mayor intersectionRatio
          const best = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveSection(best.target.id);
        }
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75] }
    );

    targets.forEach((el) => observer.observe(el));
    // Limpieza garantizada — sin listeners huérfanos
    return () => observer.disconnect();
  }, []);

  // ── Cierre de menú móvil con tecla Escape ─────────────────────
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEsc = (e) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  // Scroll suave al inicio con limpieza de hash
  const handleScrollToTop = (e) => {
    e.preventDefault();
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setActiveSection('');
  };

  const whatsappUrl = buildWhatsAppUrl(
    'Hola Helena Metalmadera, me gustaria solicitar informacion sobre sus servicios de fabricacion.'
  );

  const hasValidFacebook = isValidUrl(business.facebook);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-black/50 border-zinc-900/60'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo oficial — Icono blanco minimalista + identidad de marca y lema del taller */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 -ml-1 transition-transform"
            aria-label="Volver al inicio de Helena Metalmadera"
          >
            {/* Icono vectorial blanco puro (sin contenedor circular de fondo) */}
            <div className="flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <HelenaLogoIcon className="w-10 h-10 sm:w-11 sm:h-11 text-white group-hover:text-amber-400 transition-colors" />
            </div>

            {/* Texto de marca y subtítulo oficial */}
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
                Helena<span className="text-amber-500">Metal</span>madera
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 font-medium tracking-wide">
                {business.tagline}
              </span>
            </div>
          </button>

          {/* ── Navegación desktop con sección activa ── */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium py-1 transition-colors duration-200 group
                    ${isActive ? 'text-amber-400' : 'text-zinc-300 hover:text-amber-400'}
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {/* Subrayado animado — crece al hover y permanece activo en la sección visible */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300
                      ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
                    `}
                  />
                </a>
              );
            })}

            <div className="w-px h-5 bg-zinc-800" />

            <div className="flex items-center gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram oficial de Helena Metalmadera"
                className="text-zinc-400 hover:text-pink-400 transition-colors p-1.5 rounded-lg hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {hasValidFacebook && (
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook oficial de Helena Metalmadera"
                  className="text-zinc-400 hover:text-blue-400 transition-colors p-1.5 rounded-lg hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Botón menú móvil — área táctil mínima cómoda */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-zinc-300 hover:text-white p-2 rounded-lg hover:bg-zinc-900 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ── Desplegable móvil con transición suave ── */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[32rem] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-2 pb-4 border-t border-zinc-900/80 flex flex-col gap-1 bg-zinc-950/98 backdrop-blur-xl rounded-b-2xl px-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`font-medium min-h-[44px] flex items-center px-4 rounded-xl transition-colors text-base ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10'
                      : 'text-zinc-300 hover:text-amber-400 hover:bg-zinc-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 flex-shrink-0" />
                  )}
                  {link.label}
                </a>
              );
            })}

            <div className="flex items-center gap-3 px-4 py-3 border-t border-zinc-900/80 mt-2">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 text-zinc-400 hover:text-pink-400 transition-colors text-sm font-medium min-h-[44px]"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              {hasValidFacebook && (
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors text-sm font-medium ml-4 min-h-[44px]"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              )}
            </div>

            <div className="px-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 min-h-[44px] rounded-xl transition-colors shadow-lg shadow-green-950/40 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
