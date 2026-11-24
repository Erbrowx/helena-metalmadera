/**
 * Hero.jsx — Sección principal de portada y conversión
 *
 * Características:
 * - H1 único en la página optimizado para SEO local en Cali y el Valle
 * - Fondo real del taller con carga prioritaria loading="eager"
 * - Redacción verídica y prudente de fabricación para Cali y alrededores
 * - Doble CTA estratégico con WhatsApp en texto plano limpio
 * - Protección contra bucles infinitos en onError
 */

import { ArrowRight, ChevronDown } from 'lucide-react';
import { business, trustPillars, buildWhatsAppUrl } from '../data/businessData';

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola Helena Metalmadera, vi su portafolio y me gustaria cotizar un proyecto a medida.'
  );

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-zinc-950 scroll-mt-24"
      aria-label="Portada principal — Helena Metalmadera"
    >
      {/* Imagen real de taller */}
      <img
        src="/images/hero-bg.webp"
        alt="Fabricacion de letras corporeas y soldadura en taller — Helena Metalmadera Cali"
        loading="eager"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/images/hero-bg.webp';
        }}
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
      />

      {/* Capas oscuras con gradiente para garantizar contraste WCAG AAA */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/80 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.12)_0%,_transparent_65%)]" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pb-16 flex flex-col justify-center">

        {/* Badge superior de identidad */}
        <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 w-fit shadow-sm">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-amber-400 text-xs sm:text-sm font-bold tracking-wide uppercase">
            {business.tagline} • Cali y Valle del Cauca
          </span>
        </div>

        {/* H1 SEO único */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight max-w-4xl mb-5 tracking-tight">
          Avisos 3D, Letras en{' '}
          <span className="text-amber-400">Acero</span> y{' '}
          <span className="relative inline-block">
            Corte Láser
            <span className="absolute bottom-1 left-0 right-0 h-1 bg-amber-500/70 rounded-full" />
          </span>{' '}
          a tu Medida
        </h1>

        {/* Propuesta de valor verídica y prudente */}
        <p className="text-lg sm:text-2xl text-zinc-300 max-w-2xl mb-4 leading-relaxed font-normal">
          <strong className="text-white font-semibold">"{business.subtagline}"</strong>.
          Fabricación a medida para Cali y el Valle del Cauca con precio directo y atención sin intermediarios.
        </p>

        {/* Pilares rápidos de confianza */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 text-xs sm:text-sm text-zinc-300">
          {trustPillars.map((pilar) => (
            <span
              key={pilar.id}
              className="inline-flex items-center gap-1.5 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/80 px-3 py-1.5 rounded-full"
            >
              <span className="text-amber-400 font-bold">✓</span>
              {pilar.title}
            </span>
          ))}
        </div>

        {/* Doble CTA estratégico */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6 fill-white transition-transform group-hover:scale-110"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Cotizar por WhatsApp</span>
          </a>

          <a
            href="#proyectos"
            className="group flex items-center justify-center gap-2 border-2 border-amber-500/80 text-amber-400 hover:bg-amber-500 hover:text-zinc-950 font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Ver proyectos reales</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="mt-12 sm:mt-16 flex justify-start">
          <a
            href="#servicios"
            aria-label="Ir a servicios"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors text-xs uppercase tracking-widest font-semibold"
          >
            <span>Explorar especialidades</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
