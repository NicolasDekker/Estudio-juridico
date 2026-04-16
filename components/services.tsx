import { Scale, Briefcase, Users, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Scale,
    title: "Derecho Civil",
    description: "Contratos, herencias, propiedad, familia y responsabilidad civil. Protegemos sus intereses en cada disputa."
  },
  {
    icon: Shield,
    title: "Derecho Penal",
    description: "Defensa en procesos penales, asesoría en denuncias y representación ante tribunales."
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral y ART",
    description: "Despidos, indemnizaciones, contratos laborales y conflictos entre empleadores y trabajadores."
  },
  {
    icon: Users,
    title: "Derecho de Familia",
    description: "Divorcios, custodia, pensiones alimenticias y adopciones con sensibilidad y profesionalismo."
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Áreas de práctica legal
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofrecemos asesoría integral en diversas áreas del derecho, 
            adaptándonos a las necesidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
