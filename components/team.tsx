import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Dr. Gustavo Federico",
    role: "Socio Fundador",
    specialty: "Derecho Civil y Mercantil",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Dra. Brenda Federico",
    role: "Socia Directora",
    specialty: "Derecho Penal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  }
]

export function Team() {
  return (
    <section id="equipo" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Nuestro Equipo
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Abogados comprometidos con la justicia
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Contamos con un equipo de profesionales altamente capacitados 
            y con amplia experiencia en diversas ramas del derecho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {member.specialty}
                </p>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
