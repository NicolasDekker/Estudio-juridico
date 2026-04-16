const stats = [
  { number: "25+", label: "Años de experiencia" },
  { number: "3,500+", label: "Casos ganados" },
  { number: "98%", label: "Clientes satisfechos" },
  { number: "15", label: "Abogados expertos" },
]

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-secondary border-y border-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
