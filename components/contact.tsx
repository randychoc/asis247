import { Phone, MessageCircle, MapPin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

// ============================================
// CONFIGURACIÓN - Personaliza estos valores
// ============================================
const CONFIG = {
  phone1: "46330869",
  phone2: "56178837",
  phone1Display: "4633-0869",
  phone2Display: "5617-8837",
  whatsappMessage: "Hola, necesito asistencia. ¿Están disponibles?",
  // Enlace de Facebook
  facebookUrl: "https://www.facebook.com/tallerAsis247",
  // Ubicación/cobertura
  coverage: "Ciudad de Guatemala y alrededores",
}

function getWhatsAppUrl(phone: string) {
  return `https://wa.me/502${phone}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`
}

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contáctanos Ahora
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos listos para ayudarte. Elige tu método preferido.
          </p>
        </div>

        {/* Grid de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Teléfono 1 */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Línea Principal
            </h3>
            <div className="space-y-3">
              <a href={`tel:${CONFIG.phone1}`} className="block">
                <Button variant="outline" className="w-full justify-start gap-3 h-12 text-base bg-transparent">
                  <Phone className="w-5 h-5 text-primary" />
                  Llamar: {CONFIG.phone1Display}
                </Button>
              </a>
              <a href={getWhatsAppUrl(CONFIG.phone1)} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full justify-start gap-3 h-12 text-base border-whatsapp/30 hover:bg-whatsapp/10 bg-transparent">
                  <MessageCircle className="w-5 h-5 text-whatsapp" />
                  WhatsApp: {CONFIG.phone1Display}
                </Button>
              </a>
            </div>
          </div>

          {/* Teléfono 2 */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Línea Alternativa
            </h3>
            <div className="space-y-3">
              <a href={`tel:${CONFIG.phone2}`} className="block">
                <Button variant="outline" className="w-full justify-start gap-3 h-12 text-base bg-transparent">
                  <Phone className="w-5 h-5 text-primary" />
                  Llamar: {CONFIG.phone2Display}
                </Button>
              </a>
              <a href={getWhatsAppUrl(CONFIG.phone2)} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full justify-start gap-3 h-12 text-base border-whatsapp/30 hover:bg-whatsapp/10 bg-transparent">
                  <MessageCircle className="w-5 h-5 text-whatsapp" />
                  WhatsApp: {CONFIG.phone2Display}
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>{CONFIG.coverage}</span>
          </div>
          <a 
            href={CONFIG.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Asis24/7 en Facebook</span>
          </a>
        </div>
      </div>
    </section>
  )
}
