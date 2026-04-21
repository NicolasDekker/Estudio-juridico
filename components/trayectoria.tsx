import { Gavel, Landmark, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Landmark,
    title: "12 años en el Poder Judicial",
    description:
      "Conocemos el sistema desde adentro y anticipamos tiempos, criterios y puntos clave para impulsar tu caso con estrategia.",
  },
  {
    icon: Gavel,
    title: "Más de 20 años de experiencia combinada",
    description:
      "La sinergia entre ambos profesionales nos permite dar respuestas técnicas sólidas y decisiones rápidas en cada etapa.",
  },
  {
    icon: Users,
    title: "Atención directa de los profesionales",
    description:
      "Tu caso no pasa por administrativos: hablás con quienes diseñan y ejecutan la estrategia legal.",
  },
]

export function Trayectoria() {
  return (
    <section id="trayectoria" className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
            Sobre Nosotros
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
            Trayectoria técnica con enfoque humano
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            En Estudio Jurídico Dres. Federico combinamos experiencia judicial,
            criterio práctico y trato cercano para resolver con claridad.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="border-border bg-card">
              <CardContent className="p-6 lg:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
