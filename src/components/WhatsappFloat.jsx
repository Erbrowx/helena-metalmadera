/**
 * WhatsappFloat.jsx — Botón flotante de WhatsApp
 *
 * - En móvil: compacto (w-12 h-12) sin etiqueta de texto para no tapar contenido
 * - En tablet/desktop: más grande (sm:w-14 sm:h-14) con etiqueta descriptiva visible
 * - Animación de pulso sutil para llamar la atención sin molestar
 * - Margen inferior calculado para nunca cubrir el copyright del Footer en móvil
 */

import { buildWhatsAppUrl, business } from '../data/businessData';
import { WhatsAppIcon } from './SocialIcons';

export default function WhatsappFloat() {
  const whatsappUrl = buildWhatsAppUrl(business.whatsappDefaultMessage);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 select-none">
      {/* Etiqueta flotante oscura elegante — solo visible en md+ para no tapar contenido en celular */}
      <div className="hidden md:block bg-zinc-900 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-zinc-700/80 tracking-wide">
        Cotizar por WhatsApp
      </div>

      {/* Botón circular con pulso sutil */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp con Helena Metalmadera"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
      >
        {/* Efecto de pulso para atraer la atención del usuario */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping" />

        <WhatsAppIcon className="relative w-6 h-6 sm:w-8 sm:h-8 fill-white" />
      </a>
    </div>
  );
}
