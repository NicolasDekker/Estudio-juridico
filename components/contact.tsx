"use client"

import { Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { cn } from "@/lib/utils"

const EMAIL_CTA =
  "https://mail.google.com/mail/?view=cm&fs=1&to="
const EMAIL_SUBJECT = "Consulta Legal - Estudio Jurídico Dres. Federico"

const glassPanel =
  "rounded-sm border border-white/[0.08] border-accent/15 bg-white/[0.03] backdrop-blur-xl shadow-[0_12px_48px_rgba(0,0,0,0.35)]"

type ContactLine =
  | { type: "tel"; label: string; href: string }
  | { type: "mailto"; label: string; href: string }
  | { type: "text"; label: string }

const contactChannels: {
  icon: typeof Phone
  title: string
  lines: ContactLine[]
}[] = [
  {
    icon: Phone,
    title: "Teléfono",
    lines: [
      { type: "tel", label: "+54 11-7363-5910", href: "tel:+541173635910" },
      { type: "tel", label: "+54 11-5329-9406", href: "tel:+541153299406" },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      {
        type: "mailto",
        label: "brenfederico88@gmail.com",
        href: `${EMAIL_CTA}${encodeURIComponent("brenfederico88@gmail.com")}&su=${encodeURIComponent(EMAIL_SUBJECT)}`,
      },
      {
        type: "mailto",
        label: "federicogustavo@live.com.ar",
        href: `${EMAIL_CTA}${encodeURIComponent("federicogustavo@live.com.ar")}&su=${encodeURIComponent(EMAIL_SUBJECT)}`,
      },
    ],
  },
  {
    icon: Clock,
    title: "Horario",
    lines: [{ type: "text", label: "Lunes a Viernes: 9:00 – 18:00" }],
  },
]

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24 lg:py-36"
    >
      {/* Fondo: carbón + gradiente hacia azul noche + textura sutil */}
      <div className="absolute inset-0 bg-[#2F2F2F]" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#2F2F2F] via-[#2a2838]/90 to-brand-deep"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[420px] w-[70%] rounded-full bg-brand-deep/50 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[380px] w-[60%] rounded-full bg-accent/[0.06] blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <header className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Contáctenos
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem] text-balance">
            Inicie su Defensa con Expertos del Sistema.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            Contamos con la experiencia de 12 años dentro del Poder Judicial.
            Sabemos cómo funciona el sistema desde adentro para proteger sus
            intereses.
          </p>
          <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground/90">
            Ofrecemos una consulta inicial gratuita para evaluar su situación y
            exponerle las opciones legales disponibles.
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:items-start">
          {/* Formulario */}
          <div className={cn(glassPanel, "relative p-8 md:p-10 lg:p-12")}>
            <h3 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
              Envíenos un mensaje
            </h3>

            <ContactForm />
          </div>

          {/* Canales — columna única integrada */}
          <div className={cn(glassPanel, "p-8 md:p-10 lg:p-12")}>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-accent">
              Canales directos
            </p>
            <h3 className="mt-4 font-serif text-xl font-semibold text-foreground md:text-2xl">
              Estudio Dres. Federico
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
              Comuníquese por los medios oficiales; priorizamos claridad y
              respuesta ordenada.
            </p>

            <ul className="mt-10 divide-y divide-white/[0.08]">
              {contactChannels.map((block) => (
                <li
                  key={block.title}
                  className="flex gap-5 py-8 first:pt-0 last:pb-0"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-accent/25 bg-accent/[0.07]"
                    aria-hidden
                  >
                    <block.icon
                      className="h-5 w-5 text-accent"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {block.title}
                    </p>
                    <div className="mt-3 space-y-2.5 font-sans text-sm text-foreground/95">
                      {block.lines.map((line, i) => {
                        if (line.type === "tel") {
                          return (
                            <a
                              key={i}
                              href={line.href}
                              className="block w-fit border-b border-transparent pb-0.5 text-[0.95rem] transition-colors hover:border-accent/60 hover:text-accent"
                            >
                              {line.label}
                            </a>
                          )
                        }
                        if (line.type === "mailto") {
                          return (
                            <a
                              key={i}
                              href={line.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block break-all border-b border-transparent pb-0.5 text-[0.95rem] transition-colors hover:border-accent/60 hover:text-accent"
                            >
                              {line.label}
                            </a>
                          )
                        }
                        return (
                          <p key={i} className="text-[0.95rem] leading-relaxed">
                            {line.label}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
