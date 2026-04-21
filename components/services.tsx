import { Briefcase, HeartHandshake, Shield, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const primaryServices = [
  {
    id: "area-laboral",
    icon: Briefcase,
    title: "Derecho Laboral",
    description:
      "Si sufriste un despido, diferencias salariales o maltrato laboral, te acompañamos con firmeza para reclamar lo que te corresponde.",
  },
  {
    id: "area-art",
    icon: Shield,
    title: "ART",
    description:
      "Frente a accidentes o enfermedades laborales, actuamos rápido para que recibas atención, prestaciones e indemnización sin demoras injustas.",
  },
  {
    id: "area-transito",
    icon: HeartHandshake,
    title: "Accidentes de Tránsito",
    description:
      "Si tuviste un choque o lesión, te damos un plan claro desde el primer día para defender tu salud y tu compensación económica.",
  },
]

const secondaryService = {
  id: "area-familia",
  icon: Users,
  title: "Derecho de Familia (Divorcios)",
  description:
    "En procesos de divorcio priorizamos acuerdos viables y protección real de tus derechos, con contención profesional en cada paso.",
}

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24 lg:py-36">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Áreas de práctica prioritarias
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nos enfocamos en conflictos urgentes donde el tiempo y la claridad
            hacen la diferencia.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
          {primaryServices.map((service) => (
            <Card 
              key={service.id}
              id={service.id}
              className="group border-border bg-card transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
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

        <div className="mx-auto mt-14 max-w-3xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Sección secundaria
          </p>
          <Card
            id={secondaryService.id}
            className="group border-border bg-card transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
          >
            <CardContent className="p-6 lg:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 transition-colors group-hover:border-accent/40 group-hover:bg-accent/20">
                <secondaryService.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {secondaryService.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {secondaryService.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
