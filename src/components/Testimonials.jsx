/**
 * Testimonials.jsx — Sección de Trayectoria y Obras Reales
 *
 * Muestra los sectores y obras que respaldan la experiencia técnica del taller:
 * 1. Condominios y Conjuntos Campestres (Ej. La Acuarela)
 * 2. Sedes Institucionales y Corporativas (Ej. Ejército Nacional — Conquistadores)
 * 3. Comercio y Espacios Públicos en Cali (Ej. Bienvenidos/U y Monumentos barriales)
 *
 * Reemplaza reseñas ficticias por evidencia tangible de obras ejecutadas.
 * Identificador de sección: id="trayectoria"
 */

import { Home, Shield, MapPin, Check, ArrowRight } from 'lucide-react';
import { sectorsTrajectory, buildWhatsAppUrl } from '../data/businessData';

// Mapeo dinámico de iconos
const iconMap = {
  Home,
  Shield,
  MapPin,
};

export default function Testimonials() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola Helena Metalmadera, vi su trayectoria en obras institucionales y comerciales y quiero cotizar para mi proyecto.'
  );

  return (
    <section
      id="trayectoria"
      className="bg-zinc-950 py-16 md:py-24 scroll-mt-24 border-t border-zinc-900/50"
      aria-label="Obras y sectores que confían en nosotros"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado de trayectoria */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wide">
              Trayectoria Comprobada
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Obras y Espacios que <span className="text-amber-400">Confían en Nosotros</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
            Respaldamos cada propuesta con experiencia técnica en obras de gran escala,
            cumpliendo especificaciones exigentes en materiales, solidez e intemperie.
          </p>
        </div>

        {/* Grid de 3 sectores reales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectorsTrajectory.map((sector) => {
            const IconComponent = iconMap[sector.icon] || Shield;

            return (
              <article
                key={sector.id}
                className="group bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-amber-400" />
                    </div>
                    <span className="text-zinc-500 font-mono text-xs font-semibold">
                      Sector 0{sector.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-amber-400/90 text-xs font-medium mb-4">
                    {sector.subtitle}
                  </p>

                  <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3.5 mb-5">
                    <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold mb-1">
                      Obra ejecutada:
                    </p>
                    <p className="text-white text-sm font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      {sector.featuredProject}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-zinc-800/80">
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold mb-3">
                    Estándares aplicados:
                  </p>
                  <ul className="space-y-2">
                    {sector.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner de asesoría técnica */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl px-6 py-4 max-w-2xl mx-auto">
            <div className="text-left flex-1">
              <p className="text-white text-sm font-bold">
                ¿Requieres visita técnica o muestra de materiales en obra?
              </p>
              <p className="text-zinc-400 text-xs">
                Coordinamos asesoría presencial en Cali y municipios aledaños.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-amber-500 text-zinc-200 hover:text-zinc-950 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all duration-200 flex-shrink-0 cursor-pointer"
            >
              <span>Solicitar asesoría</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
