/**
 * Services.jsx — Catálogo de Especialidades y Servicios
 *
 * Muestra las 6 especialidades reales con portadas estéticas y terminadas:
 * 1. Avisos Publicitarios 3D       (/images/proyecto-la-acuarela-noche.webp)
 * 2. Letras en Acero Inoxidable    (/images/hero-bg.webp)
 * 3. Avisos Iluminados LED         (/images/proyecto-bienvenidos-led.webp)
 * 4. Señalética y Fachadas         (/images/proyecto-la-castilla.webp)
 * 5. Corte Láser y Personalizados  (/images/proyecto-conquistadores.webp)
 * 6. Mobiliario Industrial         (/images/proyecto-mobiliario-estanteria.webp)
 */

import {
  Box, Layers, Zap, MapPin, Wrench, Home, ArrowRight
} from 'lucide-react';
import { services, business, buildWhatsAppUrl } from '../data/businessData';

// Mapeo dinámico de componentes de iconos de Lucide
const iconMap = {
  Box,
  Layers,
  Zap,
  MapPin,
  Wrench,
  Home,
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-zinc-950 py-16 md:py-24 scroll-mt-24"
      aria-label="Catálogo de servicios y especialidades"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado de sección con redacción verídica */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wide">
              Especialidades de Fabricación
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Lo que <span className="text-amber-400">fabricamos</span> a tu medida
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
            Cada pieza se diseña, cala, suelda y ensambla con atención y fabricación directa para Cali y alrededores.
            Sin intermediarios, con materiales de primera y acabados profesionales.
          </p>
        </div>

        {/* Grid de 6 especialidades con portadas estéticas terminadas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Box;

            const whatsappUrl = buildWhatsAppUrl(service.whatsappMessage);

            return (
              <article
                key={service.id}
                className="group bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-1 flex flex-col"
              >
                {/* Portada estética */}
                <div className="relative h-52 overflow-hidden bg-zinc-800">
                  <img
                    src={service.image}
                    alt={`${service.title} — Helena Metalmadera Cali`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/hero-bg.webp';
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                  <div className="absolute top-4 left-4 bg-amber-500 p-2.5 rounded-xl shadow-lg shadow-amber-950/40">
                    <IconComponent className="w-5 h-5 text-zinc-950" />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                    {service.shortDesc}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-all duration-200 shadow-md shadow-amber-950/30 hover:shadow-lg hover:shadow-amber-950/50 hover:-translate-y-0.5 active:scale-[0.98] group/btn"
                  >
                    <span>Cotizar esta especialidad</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner inferior con texto verídico — sin referencias a software externo */}
        <div className="text-center mt-12 sm:mt-16 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">
            ¿Tienes una idea o proyecto especial?
          </h3>
          <p className="text-zinc-400 mb-6 text-sm sm:text-base">
            Envíanos una foto del espacio, las medidas aproximadas o tu referencia y te asesoramos a medida.
          </p>
          <a
            href={buildWhatsAppUrl(
              'Hola Helena Metalmadera, tengo un proyecto especial para cotizar y me gustaria recibir asesoria personalizada.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-zinc-950 font-bold px-6 py-3 rounded-xl transition-all duration-200 active:scale-[0.98]"
          >
            <span>Consultar proyecto personalizado</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
