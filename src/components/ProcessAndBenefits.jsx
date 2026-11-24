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
import { benefits, processSteps, trustPillars, brandIdentity, business, buildWhatsAppUrl } from '../data/businessData';

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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Iniciar cotización ahora</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
