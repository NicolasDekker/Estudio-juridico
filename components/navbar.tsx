"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const PRACTICE_AREAS = [
  { label: "Derecho Laboral", href: "#area-laboral" },
  { label: "ART", href: "#area-art" },
  { label: "Accidentes de Tránsito", href: "#area-transito" },
  { label: "Derecho de Familia", href: "#area-familia" },
] as const

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-brand-deep/90 backdrop-blur-md supports-[backdrop-filter]:bg-brand-deep/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-22 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep"
        >
          <Image
            src="/logo-estudio-3.png"
            alt="Logo Estudio Jurídico Dres. Federico"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-contain object-center p-1 lg:h-18 lg:w-18"
          />
          <span className="font-serif text-lg font-medium tracking-tight text-foreground sm:text-xl">
            Estudio Jurídico Dres. Federico
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Inicio
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground data-[state=open]:text-foreground">
                Áreas de Práctica
                <ChevronDown className="size-4 opacity-70" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-[14rem] border-white/10 bg-brand-carbon text-foreground shadow-xl"
              >
                {PRACTICE_AREAS.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="cursor-pointer text-sm focus:bg-white/5 focus:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link
                    href="#servicios"
                    className="cursor-pointer text-xs text-muted-foreground focus:bg-white/5"
                  >
                    Ver todas las áreas
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="#trayectoria"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="#equipo"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Nuestro Equipo
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="rounded-sm p-2 text-foreground transition-colors hover:bg-white/5"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/[0.06] bg-brand-deep/98 px-4 py-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <Link
              href="#"
              className="rounded-sm px-3 py-3 text-sm font-medium text-foreground hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-sm px-3 py-3 text-left text-sm font-medium text-foreground hover:bg-white/5"
              onClick={() => setMobilePracticeOpen((o) => !o)}
              aria-expanded={mobilePracticeOpen}
            >
              Áreas de Práctica
              <ChevronDown
                className={`size-4 transition-transform ${mobilePracticeOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobilePracticeOpen && (
              <div className="ml-2 flex flex-col border-l border-white/10 py-1 pl-3">
                {PRACTICE_AREAS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-sm py-2.5 text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#servicios"
                  className="rounded-sm py-2.5 text-sm text-accent hover:text-accent/90"
                  onClick={() => setIsOpen(false)}
                >
                  Ver todas las áreas
                </Link>
              </div>
            )}
            <Link
              href="#trayectoria"
              className="rounded-sm px-3 py-3 text-sm font-medium text-foreground hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              href="#equipo"
              className="rounded-sm px-3 py-3 text-sm font-medium text-foreground hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Nuestro Equipo
            </Link>
            <Link
              href="#contacto"
              className="rounded-sm px-3 py-3 text-sm font-medium text-foreground hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
