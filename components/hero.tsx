import { Phone, MessageCircle, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

// ============================================
// CONFIGURACIÓN - Personaliza estos valores
// ============================================
const CONFIG = {
  // Números de teléfono (sin guiones para los enlaces)
  phone1: "46330869",
  phone2: "56178837",
  // Números formateados para mostrar
  phone1Display: "4633-0869",
  phone2Display: "5617-8837",
  // Mensaje prellenado para WhatsApp
  whatsappMessage: "Hola, necesito asistencia urgente. ¿Están disponibles?",
}

function getWhatsAppUrl(phone: string) {
  return `https://wa.me/502${phone}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`
}

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-foreground text-background overflow-hidden">
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-12 text-center">
        {/* Badge de disponibilidad */}
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary-foreground px-4 py-2 rounded-full mb-6 animate-pulse">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Disponible 24/7</span>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance">
          <span className="text-primary">Asis</span>24/7
        </h1>
        
        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-2">
          Asistencia Vial • Cerrajería • Mecánica
        </p>
        
        <p className="text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto">
          Carros y motos. Respuesta inmediata cuando más lo necesitas.
        </p>

        {/* Botones de contacto principales - DUPLICADOS para máxima conversión */}
        <div className="flex flex-col gap-4 max-w-md mx-auto mb-8">
          {/* Botón de llamada principal */}
          <a href={`tel:${CONFIG.phone1}`} className="w-full">
            <Button size="lg" className="w-full h-16 text-lg font-bold gap-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
              <Phone className="w-6 h-6" />
              Llamar Ahora: {CONFIG.phone1Display}
            </Button>
          </a>
          
          {/* Botón de WhatsApp principal */}
          <a href={getWhatsAppUrl(CONFIG.phone1)} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button size="lg" className="w-full h-16 text-lg font-bold gap-3 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground shadow-lg shadow-whatsapp/25">
              <MessageCircle className="w-6 h-6" />
              WhatsApp: {CONFIG.phone1Display}
            </Button>
          </a>
        </div>

        {/* Línea secundaria con segundo número */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm text-muted-foreground">
          <span>Línea alternativa:</span>
          <div className="flex gap-3">
            <a 
              href={`tel:${CONFIG.phone2}`} 
              className="flex items-center gap-1.5 hover:text-primary transition-colors underline underline-offset-2"
            >
              <Phone className="w-4 h-4" />
              {CONFIG.phone2Display}
            </a>
            <span className="text-muted-foreground/50">|</span>
            <a 
              href={getWhatsAppUrl(CONFIG.phone2)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-whatsapp transition-colors underline underline-offset-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Indicador de confianza */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground/70">
          <Shield className="w-4 h-4" />
          <span>Servicio profesional y confiable</span>
        </div>
      </div>
    </section>
  )
}
