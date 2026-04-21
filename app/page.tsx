import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Trayectoria } from "@/components/trayectoria"
import { Confianza } from "@/components/confianza"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Trayectoria />
      <Confianza />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
