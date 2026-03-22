"use client"

import { Phone, MessageCircle } from "lucide-react"

// ============================================
// CONFIGURACIÓN - Personaliza estos valores
// ============================================
const CONFIG = {
  phone1: "46330869",
  whatsappMessage: "Hola, necesito asistencia urgente. ¿Están disponibles?",
}

function getWhatsAppUrl(phone: string) {
  return `https://wa.me/502${phone}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`
}

/**
 * Barra flotante fija en la parte inferior de la pantalla
 * Permite contacto instantáneo con un solo toque
 * Optimizado para usuarios móviles bajo estrés
 */
export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-inset-bottom">
      {/* Barra de acción fija */}
      <div className="bg-foreground/95 backdrop-blur-sm border-t border-border/20 px-4 py-3">
        <div className="max-w-lg mx-auto flex gap-3 pb-2">
          {/* Botón de llamada */}
          <a 
            href={`tel:${CONFIG.phone1}`}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-4 rounded-xl active:scale-[0.98] transition-transform shadow-lg"
            aria-label="Llamar ahora"
          >
            <Phone className="w-5 h-5" />
            <span>Llamar</span>
          </a>
          
          {/* Botón de WhatsApp */}
          <a 
            href={getWhatsAppUrl(CONFIG.phone1)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground font-bold py-4 rounded-xl active:scale-[0.98] transition-transform shadow-lg"
            aria-label="Enviar WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
