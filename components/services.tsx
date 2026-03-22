import { 
  Car, 
  Key, 
  Wrench, 
  Bike, 
  Truck, 
  Home, 
  Check 
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const SERVICES = [
  {
    icon: Truck,
    title: "Asistencia Vial",
    items: [
      "Paso de corriente",
      "Suministro de combustible",
      "Cambio de llanta",
      "Mecánica ligera",
    ],
  },
  {
    icon: Wrench,
    title: "Mecánica Automotriz",
    items: [
      "Scanner",
      "Cambio de líquidos",
      "Reparación de motores",
      "Electrónica",
      "Aire acondicionado",
      "Tren delantero",
      "Mantenimiento y corrección de frenos",
      "Chequeo antes de compra",
      "Mantenimiento general",
    ],
  },
  {
    icon: Bike,
    title: "Mecánica para Motos",
    items: [
      "Mantenimiento general",
      "Electrónica",
      "Cambio de líquidos",
      "Reparación de motor",
      "Scanner",
    ],
  },
  {
    icon: Car,
    title: "Mecánica para Camiones",
    items: [
      "Mantenimiento",
      "Cambio de líquidos",
      "Electrónica",
      "Programación",
    ],
  },
  {
    icon: Home,
    title: "Servicio Hogar",
    items: [
      "Plomería",
      "Vidriería",
      "Electricidad",
    ],
  },
  {
    icon: Truck,
    title: "Grúa",
    items: [
      "Transporte pesado",
      "Carro",
      "Moto",
    ],
  },
  {
    icon: Key,
    title: "Cerrajería",
    items: [
      "Apertura de casa",
      "Apertura de vehículos",
      "Duplicado de llaves",
      "Programación",
    ],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atención profesional, rápida y confiable para vehículos, hogar y emergencias.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              className="group border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 rounded-2xl"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                
                {/* Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>

                {/* Lista */}
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}