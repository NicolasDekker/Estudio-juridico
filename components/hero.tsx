import { Button } from "@/components/ui/button"

const WHATSAPP =
  "https://wa.me/5491173635910?text=Hola%2C%20necesito%20asesoramiento%20legal%20y%20me%20gustar%C3%ADa%20comentarte%20brevemente%20mi%20situaci%C3%B3n"
const EMAIL_CTA =
  "https://mail.google.com/mail/?view=cm&fs=1&to=brenfederico88@gmail.com&su=Consulta%20Legal%20-%20Estudio%20Jur%C3%ADdico%20Dres.%20Federico"

const textShadowStrong =
  "0 2px 28px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.85)"
const textShadowSoft =
  "0 2px 20px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.7)"

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-brand-deep">
      <div className="absolute inset-0 z-0 bg-brand-deep" aria-hidden>
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/videos/portada-estudio-juridico.mp4" type="video/mp4" />
        </video>
        {/* Lectura en zona de copy; derecha y centro más despejados para mármol, concreto y luz ámbar del video */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-deep/58 via-brand-deep/22 via-50% to-brand-deep/5"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-deep/22 via-transparent to-brand-deep/8"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 pb-28 pt-28 sm:px-6 sm:pt-32 md:px-8 md:pb-32 md:pt-36 lg:pb-36 lg:pt-40">
        <div className="max-w-4xl">
          <p
            className="mb-10 font-sans text-xs font-medium uppercase tracking-[0.38em] text-accent sm:mb-12 sm:text-sm"
            style={{ textShadow: textShadowSoft }}
          >
            Arquitectura de la justicia
          </p>

          <div className="mb-12 border-l-2 border-accent pl-6 sm:mb-16 sm:pl-10 md:pl-14">
            <h1
              className="font-serif text-[2.85rem] font-medium leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{ textShadow: textShadowStrong }}
            >
              Justicia rápida.
              <span
                className="mt-3 block text-accent sm:mt-4"
                style={{ textShadow: textShadowStrong }}
              >
                Claridad total.
              </span>
              <span className="mt-3 block sm:mt-4">Resultados reales.</span>
            </h1>
          </div>

          <p
            className="max-w-xl font-sans text-base leading-relaxed text-white/90 sm:text-lg md:text-xl md:leading-relaxed"
            style={{ textShadow: textShadowSoft }}
          >
            Más de 20 años de experiencia técnica para proteger tus derechos.
            Sin vueltas, sin lenguaje complicado y con contacto directo.
          </p>

          <div className="mt-16 flex flex-col gap-5 sm:mt-20 sm:flex-row sm:items-center sm:gap-8">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-sm bg-accent px-8 font-semibold tracking-wide text-accent-foreground shadow-none hover:bg-accent/90"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Consulta Urgente por WhatsApp
              </a>
            </Button>
            <a
              href={EMAIL_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-medium text-white/70 underline-offset-8 transition-colors hover:text-white sm:text-left"
              style={{ textShadow: textShadowSoft }}
            >
              Contactar por Email
            </a>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/20 pt-2">
          <div className="h-2 w-0.5 animate-pulse rounded-full bg-accent/80" />
        </div>
      </div>
    </section>
  )
}
