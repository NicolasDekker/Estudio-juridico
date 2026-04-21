import { Landmark, Award, Headphones } from "lucide-react"

const items = [
  {
    icon: Landmark,
    title: "12 Años en el Poder Judicial",
    subtitle: "Visión técnica e interna.",
  },
  {
    icon: Award,
    title: "+20 Años de Trayectoria",
    subtitle: "Experiencia comprobada.",
  },
  {
    icon: Headphones,
    title: "Atención Directa y Personal",
    subtitle: "Sin intermediarios.",
  },
] as const

export function CifrasConfianza() {
  return (
    <section
      aria-label="Cifras de confianza"
      className="relative border-t border-white/[0.07] bg-brand-deep"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" aria-hidden />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-[#FFBF00]/35 bg-[#FFBF00]/12"
                  aria-hidden
                >
                  <Icon
                    className="h-6 w-6 text-[#FFBF00]"
                    strokeWidth={1.65}
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground md:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                  {item.subtitle}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
