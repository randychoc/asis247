import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { FloatingCTA } from "@/components/floating-cta"
import { Footer } from "@/components/footer"

/**
 * Página principal de Asis24/7
 * 
 * Estructura optimizada para conversión rápida:
 * 1. Hero con CTAs prominentes (llamada + WhatsApp)
 * 2. Servicios (para quienes quieren ver qué ofrecemos)
 * 3. Contacto con todas las opciones
 * 4. FloatingCTA siempre visible en móvil
 * 
 * PERSONALIZACIÓN:
 * - Números de teléfono: Editar en cada componente (hero.tsx, contact.tsx, floating-cta.tsx, footer.tsx)
 * - Colores: Editar en app/globals.css (variables CSS)
 * - Servicios: Editar array SERVICES en components/services.tsx
 * - Textos: Editar directamente en cada componente
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - Sección principal con CTAs */}
      <Hero />
      
      {/* Servicios - Grid de servicios ofrecidos */}
      <Services />
      
      {/* Contacto - Todas las formas de contacto */}
      <Contact />
      
      {/* Footer */}
      <Footer />
      
      {/* Barra flotante de contacto (siempre visible en móvil) */}
      <FloatingCTA />
    </main>
  )
}
