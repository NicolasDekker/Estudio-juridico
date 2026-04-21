import { Card, CardContent } from "@/components/ui/card"

const trustPoints = [
  {
    title: "Seguimiento constante",
    description: "Sabrás siempre el estado de tu caso.",
  },
  {
    title: "Sin sorpresas",
    description: "Hablamos claro, sin tecnicismos innecesarios.",
  },
  {
    title: "Agilidad procesal",
    description: "Enfoque total en acelerar los tiempos legales.",
  },
]

export function Confianza() {
  return (
    <section id="confianza" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
            Bloque de Confianza
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Lo que más te preocupa, lo resolvemos de frente
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {trustPoints.map((point) => (
            <Card key={point.title} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
