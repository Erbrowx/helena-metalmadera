/**
 * tailwind.config.js — Configuración personalizada de Tailwind CSS
 *
 * Define la paleta de colores industrial premium para Helena Metalmadera:
 * - Fondos oscuros: zinc-950 / zinc-900 (aspecto serio e industrial)
 * - Acento cálido: amber-500 / copper (calidez artesanal)
 * - Contrastes WCAG AA: todos los textos sobre fondos oscuros cumplen ratio mínimo 4.5:1
 *
 * Incluye animaciones personalizadas para el botón flotante de WhatsApp.
 */

/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind escanea estos archivos para purgar clases no usadas en producción
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── PALETA DE COLORES PERSONALIZADA ──
      colors: {
        // Color cobre/ámbar para acentos industriales
        copper: {
          300: '#e8c99a',
          400: '#d4a96a',
          500: '#c08840', // Color cobre principal
          600: '#a06930',
        },
        // Brand colors específicos
        brand: {
          dark: '#09090b',    // zinc-950 — fondo principal
          surface: '#18181b', // zinc-900 — tarjetas y secciones
          accent: '#f59e0b',  // amber-500 — color acento principal
          'accent-dark': '#b45309', // amber-700 — acento oscuro
        },
      },

      // ── FUENTES ──
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      // ── ANIMACIONES PERSONALIZADAS ──
      animation: {
        // Animación de pulso sutil para el botón flotante de WhatsApp
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        // Bounce lento para la etiqueta del botón flotante
        'bounce-slow': 'bounce 3s infinite',
        // Fade in para elementos que aparecen
        'fade-in': 'fadeIn 0.5s ease-in-out',
        // Slide up para cards
        'slide-up': 'slideUp 0.4s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // ── GRADIENTES Y SOMBRAS PERSONALIZADOS ──
      backgroundImage: {
        'metal-gradient': 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
        'amber-glow': 'radial-gradient(ellipse at center, rgba(245,158,11,0.15) 0%, transparent 70%)',
      },

      boxShadow: {
        'amber': '0 0 20px rgba(245, 158, 11, 0.3)',
        'green': '0 0 20px rgba(34, 197, 94, 0.3)',
      },
    },
  },
  plugins: [],
};
