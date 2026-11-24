/**
 * src/utils/whatsapp.js — Re-export centralizado
 *
 * Mantiene compatibilidad hacia atrás re-exportando buildWhatsAppUrl
 * directamente desde el Single Source of Truth en `src/data/businessData.js`.
 */

export { buildWhatsAppUrl } from '../data/businessData';
