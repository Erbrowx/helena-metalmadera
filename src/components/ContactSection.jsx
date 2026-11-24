/**
 * ContactSection.jsx — Sección de Contacto y Guía de Cotización
 *
 * Características:
 * - Horarios y área de cobertura exacta para Cali y el Valle del Cauca
 * - Badges de cobertura limpios y confirmados
 * - Pasos claros de qué información enviar para cotizar
 * - Botón oficial de WhatsApp sin emojis ni caracteres corruptos
 * - Redes sociales oficiales con validación segura de URL
 * - Scroll margin (scroll-mt-24)
 */

import { Clock, MapPin } from 'lucide-react';
import { business, quoteSectionTexts, isValidUrl, buildWhatsAppUrl } from '../data/businessData';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

export default function ContactSection() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola Helena Metalmadera, quiero iniciar una cotizacion para un proyecto. Tengo los siguientes datos...'
  );

  const hasValidFacebook = isValidUrl(business.facebook);

  return (
    <section
      id="contacto"
      className="bg-zinc-950 py-16 md:py-24 scroll-mt-24 border-t border-zinc-900/50"
      aria-label="Información de contacto y cotización"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wide">
              {quoteSectionTexts.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {quoteSectionTexts.title}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
            {quoteSectionTexts.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Columna izquierda: Información y cobertura exacta */}
          <div className="space-y-6">

            {/* Horarios */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-lg">Horarios de atención</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-zinc-300">{business.schedule.weekdays}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span className="text-zinc-300">{business.schedule.saturday}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-zinc-600 rounded-full" />
                  <span className="text-zinc-500">{business.schedule.sunday}</span>
                </div>
              </div>
            </div>

            {/* Cobertura exacta y confirmada */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-lg">Área de cobertura</h3>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {business.coverage}
              </p>
              <div className="flex flex-wrap gap-2">
                {business.coverageBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4 text-lg">Canales directos</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-900/40 to-pink-900/40 hover:from-purple-800/50 hover:to-pink-800/50 border border-purple-700/50 hover:border-pink-500/70 text-white font-semibold px-4 py-3 rounded-xl transition-all duration-200"
                >
                  <InstagramIcon className="w-5 h-5 text-pink-400" />
                  <span className="text-sm">{business.instagramHandle}</span>
                </a>

                {hasValidFacebook && (
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2.5 bg-blue-900/30 hover:bg-blue-800/40 border border-blue-700/50 hover:border-blue-500/70 text-white font-semibold px-4 py-3 rounded-xl transition-all duration-200"
                  >
                    <FacebookIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Facebook Oficial</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Columna derecha: Guía paso a paso para cotizar */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black text-white mb-2">
                {quoteSectionTexts.guideTitle}
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                {quoteSectionTexts.guideDescription}
              </p>

              <div className="space-y-4 mb-8">
                {quoteSectionTexts.steps.map((step) => (
                  <div key={step.emoji} className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 text-amber-400 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                      0{step.emoji}
                    </span>
                    <div>
                      <p className="font-semibold text-white text-sm">{step.title}</p>
                      <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                <p className="text-zinc-300">
                  Tiempo de respuesta estimado:{' '}
                  <span className="text-green-400 font-bold">{quoteSectionTexts.responseTime}</span>
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-6 h-6 fill-white" />
                <span>{quoteSectionTexts.ctaButtonText}</span>
              </a>

              <p className="text-zinc-500 text-xs text-center mt-3">
                {quoteSectionTexts.trustNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
