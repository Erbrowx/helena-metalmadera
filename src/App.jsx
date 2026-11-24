/**
 * App.jsx — Componente raíz de la aplicación
 *
 * Ensambla todos los componentes en el orden correcto de la página.
 * El flujo narrativo está diseñado para maximizar la conversión:
 *
 * 1. Navbar     → Siempre visible, orienta al usuario
 * 2. Hero       → Captura atención, propuesta de valor inmediata
 * 3. Services   → Qué ofrecemos (servicios concretos)
 * 4. Gallery    → PRUEBA: trabajos reales que generan confianza
 * 5. ProcessAndBenefits → Por qué elegirnos + cómo funciona
 * 6. Testimonials → Validación social de otros clientes
 * 7. ContactSection → CTA final + información de contacto
 * 8. Footer     → Links útiles + copyright
 *
 * WhatsappFloat siempre flota encima de todo el contenido.
 *
 * Para agregar una nueva sección:
 * 1. Crea el componente en src/components/
 * 2. Importalo aquí
 * 3. Colócalo en el JSX en el orden deseado
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ProcessAndBenefits from './components/ProcessAndBenefits';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  return (
    // Fondo oscuro base continuo para toda la aplicación (sin franjas ni separaciones claras)
    <div className="min-h-screen w-full bg-zinc-950 text-white">

      {/* Barra de navegación fija (z-40) */}
      <Navbar />

      {/* Contenido principal de la página sobre fondo oscuro uniforme */}
      <main className="w-full bg-zinc-950">
        {/* 1. Hero — portada con H1 SEO y CTAs primarios */}
        <Hero />

        {/* 2. Servicios — catálogo de 6 especialidades */}
        <Services />

        {/* 3. Galería — proyectos reales (sección protagonista visual) */}
        <Gallery />

        {/* 4. Proceso y beneficios — confianza y transparencia */}
        <ProcessAndBenefits />

        {/* 5. Testimonios — prueba social */}
        <Testimonials />

        {/* 6. Contacto — CTA final y datos de contacto */}
        <ContactSection />
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón flotante de WhatsApp — siempre visible (z-50) */}
      {/* Este componente siempre está encima de todo gracias a z-50 */}
      <WhatsappFloat />
    </div>
  );
}
