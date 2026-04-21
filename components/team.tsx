import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

const EMAIL_SUBJECT = "Consulta Legal - Estudio Jurídico Dres. Federico"

const getGmailComposeLink = (email: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(EMAIL_SUBJECT)}`

const team = [
  {
    name: "Dr. Gustavo Federico",
    role: "Socio Fundador",
    specialty: "Derecho Civil y Mercantil",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    whatsapp:
      "https://wa.me/5491153299406?text=Hola%20Dr.%20Gustavo%20Federico%2C%20quisiera%20hacer%20una%20consulta%20legal.",
    email: "federicogustavo@live.com.ar",
  },
  {
    name: "Dra. Brenda Federico",
    role: "Socia Directora",
    specialty: "Derecho Penal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    whatsapp:
      "https://wa.me/5491173635910?text=Hola%20Dra.%20Brenda%20Federico%2C%20quisiera%20hacer%20una%20consulta%20legal.",
    email: "brenfederico88@gmail.com",
  },
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
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={`WhatsApp de ${member.name}`}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a 
                    href={getGmailComposeLink(member.email)}
                    target="_blank"
                    rel="noopener noreferrer"
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
