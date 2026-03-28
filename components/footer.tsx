import { Phone, MessageCircle, Facebook } from "lucide-react";

// ============================================
// CONFIGURACIÓN
// ============================================
const CONFIG = {
  phone1: "46330869",
  phone2: "56178837",
  phone1Display: "4633-0869",
  phone2Display: "5617-8837",
  facebookUrl: "https://www.facebook.com/tallerAsis247",
  whatsappMessage: "Hola, necesito información sobre sus servicios.",
};

function getWhatsAppUrl(phone: string) {
  return `https://wa.me/502${phone}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 pb-28 md:pb-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-primary">Asis</span>24/7
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Servicio profesional de asistencia vial, cerrajería y mecánica.
              Disponible las 24 horas, los 7 días de la semana.
            </p>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">
              Contacto Rápido
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${CONFIG.phone1}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {CONFIG.phone1Display}
              </a>
              <a
                href={`tel:${CONFIG.phone2}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {CONFIG.phone2Display}
              </a>
              <a
                href={getWhatsAppUrl(CONFIG.phone1)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-whatsapp transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Síguenos</h4>
            <a
              href={CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Facebook className="w-5 h-5" />
              Asis24/7 en Facebook
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border/20 text-center text-sm text-muted-foreground">
          <p>
            {" "}
            © {currentYear} Asis24/7. Todos los derechos reservados. ·
            Desarrollado por{" "}
            <a
              href="https://renoa.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              RENOA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
