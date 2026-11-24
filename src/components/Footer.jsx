/**
 * Footer.jsx — Pie de página profesional
 *
 * Incluye:
 * - Insignia oficial del taller con botón accesible de retorno al inicio
 * - Enlaces rápidos de navegación sincronizados (#servicios, #proyectos, #proceso, #trayectoria, #contacto)
 * - Catálogo de especialidades vinculadas a la sección de servicios
 * - Redes sociales oficiales (Facebook condicional para evitar enlaces rotos)
 * - CTA directo a WhatsApp oficial
 * - Año dinámico automático
 */

import { ArrowRight, Phone } from 'lucide-react';
import { business, services, isValidUrl, buildWhatsAppUrl } from '../data/businessData';

// Icono de Instagram (SVG inline)
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

// Links de navegación rápida consistentes con Navbar
const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso de trabajo', href: '#proceso' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = buildWhatsAppUrl();

  const hasValidFacebook = isValidUrl(business.facebook);

  // Retorno al inicio limpiando el hash
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pb-20 sm:pb-0" aria-label="Pie de página">

      {/* ── FRANJA CTA SUPERIOR ── */}
      <div className="bg-zinc-900/50 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-1">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-zinc-400">
                "{business.subtagline}". Escríbenos ahora y recibe asesoría directa de taller.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-md shadow-green-950/40"
              >
                <Phone className="w-5 h-5" />
                <span>Cotizar por WhatsApp</span>
              </a>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Ver Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── CUERPO DEL FOOTER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Columna 1: Logo con insignia y descripción */}
          <div className="lg:col-span-1">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 -ml-1 mb-4"
              aria-label="Volver al inicio"
            >
              <div className="w-10 h-10 rounded-full bg-white p-1 object-contain shadow-md ring-2 ring-amber-500/50 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={business.logoImage}
                  alt="Logo Helena Metalmadera"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/logo.webp';
                  }}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
                Helena<span className="text-amber-500">Metal</span>madera
              </span>
            </button>

            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              {business.description}
            </p>

            {/* Redes sociales en footer */}
            <div className="flex items-center gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram oficial Helena Metalmadera"
                className="w-9 h-9 bg-zinc-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-zinc-700 hover:border-transparent rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {hasValidFacebook && (
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook oficial Helena Metalmadera"
                  className="w-9 h-9 bg-zinc-800 hover:bg-blue-700 border border-zinc-700 hover:border-blue-600 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp oficial Helena Metalmadera"
                className="w-9 h-9 bg-zinc-800 hover:bg-green-600 border border-zinc-700 hover:border-green-500 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación rápida */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-amber-400 text-sm flex items-center gap-1.5 group transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Especialidades del taller */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">
              Especialidades
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicios"
                    className="text-zinc-400 hover:text-amber-400 text-sm flex items-center gap-1.5 group transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Información de contacto */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">
              Contacto
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">Horarios</p>
                <p className="text-zinc-300 text-sm">{business.schedule.weekdays}</p>
                <p className="text-zinc-300 text-sm">{business.schedule.saturday}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">Ubicación</p>
                <p className="text-zinc-300 text-sm">{business.address}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">WhatsApp Oficial</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors"
                >
                  {business.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BARRA INFERIOR DE DERECHOS ── */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-sm">
            <p>© {currentYear} Helena Metalmadera. Todos los derechos reservados.</p>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Taller de fabricación para Cali, Valle del Cauca y Colombia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
