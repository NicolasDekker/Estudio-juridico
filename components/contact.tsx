"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+54 11-7363-5910", "+54 11-5329-9406"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["brenfederico88@gmail.com", "federicogustavo@live.com.ar"]
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lunes a Viernes: 9:00 - 18:00"]
  }
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Contáctenos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Hablemos sobre su caso
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofrecemos una consulta inicial gratuita para evaluar su situación 
            y explicarle las opciones legales disponibles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Envíenos un mensaje
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input 
                      id="name"
                      type="text" 
                      placeholder="Juan Pérez"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input 
                      id="phone"
                      type="tel" 
                      placeholder="+52 (55) 1234-5678"
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="correo@ejemplo.com"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Asunto
                  </label>
                  <Input 
                    id="subject"
                    type="text" 
                    placeholder="Consulta sobre derecho laboral"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Describa brevemente su caso o consulta..."
                    rows={4}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg shadow-accent/20"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center shrink-0">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
