/**
 * ProcessAndBenefits.jsx — Garantías de Confianza, Bloque Nuestra Empresa y Proceso en 4 Pasos
 *
 * Estructura:
 * 1. Garantías comerciales (precio directo, diseño a medida, tarjeta, instalación técnica)
 * 2. Bloque oficial "Nuestra Empresa" con texto de identidad de marca y 4 pilares de calidad
 * 3. Proceso en 4 pasos: desde cotización hasta instalación final
 *
 * Veracidad: sin especificaciones técnicas no confirmadas; usa "instalación" en lugar de términos obsoletos.
 */

import {
  Factory, Ruler, CreditCard, Truck, Shield, Clock,
  MessageCircle, PenTool, Settings, CheckCircle,
  ArrowRight
} from 'lucide-react';
import { benefits, processSteps, trustPillars, brandIdentity, buildWhatsAppUrl } from '../data/businessData';
import { WhatsAppIcon } from './SocialIcons';

// Mapeo dinámico de componentes de iconos
const iconMap = {
  Factory,
  Ruler,
  CreditCard,
  Truck,
  Shield,
  Clock,
  MessageCircle,
  PenTool,
  Settings,
  CheckCircle,
};

export default function ProcessAndBenefits() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola Helena Metalmadera, quiero iniciar el proceso para cotizar un trabajo.'
  );

  return (
    <section
      id="proceso"
      className="bg-zinc-950 py-16 md:py-24 scroll-mt-24 border-t border-zinc-900/50"
      aria-label="Garantías, pilares y proceso de fabricación"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════════════════
            PARTE 1: GARANTÍAS DE CONFIANZA
        ══════════════════════════════════════════════════ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wide">
                Respaldo y Compromiso
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Tu tranquilidad es nuestra <span className="text-amber-400">garantía</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
              Fabricación a medida para Cali y el Valle del Cauca, ofreciendo solidez estructural, acabados finos y precios directos sin intermediarios.
            </p>
          </div>

          {/* Grid de beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon] || Shield;
              return (
                <div
                  key={benefit.id}
                  className="group flex gap-4 bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            PARTE 2: BLOQUE OFICIAL "NUESTRA EMPRESA" Y PILARES
        ══════════════════════════════════════════════════ */}
        <div className="mb-20 bg-zinc-900/50 border border-zinc-800/80 rounded-3xl p-6 sm:p-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wide">
              Nuestra Empresa
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-2 mb-4">
              Pasión por el detalle y calidad estructural
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed italic">
              "{brandIdentity.aboutText}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pilar, index) => (
              <div key={pilar.id} className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-amber-400 font-mono text-xs font-bold block mb-2">0{index + 1}</span>
                  <h4 className="text-white font-bold text-lg mb-2">{pilar.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{pilar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            PARTE 3: PROCESO EN 4 PASOS
        ══════════════════════════════════════════════════ */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Así de ágil es <span className="text-amber-400">trabajar con nosotros</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
              Desde el primer mensaje hasta la instalación en tu muro o fachada. Proceso transparente y sin complicaciones.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => {
                const IconComponent = iconMap[step.icon] || CheckCircle;
                return (
                  <div key={step.step} className="relative text-center group bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
                    <div className="relative mx-auto w-16 h-16 mb-5">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-2xl group-hover:bg-amber-500/30 transition-colors rotate-3" />
                      <div className="relative w-full h-full bg-zinc-900 border border-amber-500/60 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-amber-400" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 text-zinc-950 text-xs font-black rounded-full flex items-center justify-center shadow">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors text-lg">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
              <span>Iniciar cotización ahora</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
