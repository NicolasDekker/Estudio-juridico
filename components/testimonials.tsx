import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "El equipo de García & Asociados manejó mi caso de divorcio con gran profesionalismo y sensibilidad. Siempre me mantuvieron informado y lograron un resultado favorable para mi familia.",
    author: "Roberto Méndez",
    role: "Cliente - Derecho de Familia",
  },
  {
    quote: "Después de un accidente laboral, no sabía qué hacer. Los abogados del bufete lucharon por mis derechos y conseguí la indemnización que merecía. Eternamente agradecido.",
    author: "Ana Patricia Flores",
    role: "Cliente - Derecho Laboral",
  },
  {
    quote: "Contraté sus servicios para constituir mi empresa y el proceso fue impecable. Su conocimiento en derecho mercantil es excepcional. Los recomiendo ampliamente.",
    author: "Ing. Miguel Torres",
    role: "Cliente - Derecho Mercantil",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mayor recompensa 
            y el mejor indicador de nuestro compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <CardContent className="p-6 lg:p-8">
                <Quote className="h-8 w-8 text-accent/50 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="border-t border-accent/20 pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
