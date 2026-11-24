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
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

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
                <WhatsAppIcon className="w-4 h-4 fill-current" />
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
            <p>© {CURRENT_YEAR} Helena Metalmadera. Todos los derechos reservados.</p>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Taller de fabricación para Cali, Valle del Cauca y Colombia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
