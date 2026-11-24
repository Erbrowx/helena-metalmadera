/**
 * main.jsx — Punto de entrada de la aplicación React
 *
 * Este es el primer archivo que ejecuta el navegador.
 * Renderiza el componente App dentro del elemento #root del index.html.
 *
 * StrictMode de React activa advertencias adicionales en desarrollo
 * para detectar problemas potenciales (efectos secundarios, APIs obsoletas).
 * Se desactiva automáticamente en producción (npm run build).
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Monta la aplicación React en el elemento con id="root" del index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
