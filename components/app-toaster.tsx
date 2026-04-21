"use client"

import { Toaster } from "sonner"

export function AppToaster() {
  return (
    <Toaster
      position="top-center"
      richColors={false}
      theme="dark"
      closeButton
      duration={6500}
      toastOptions={{
        classNames: {
          toast:
            "group border border-accent/30 bg-brand-carbon/95 font-sans text-foreground shadow-[0_12px_48px_rgba(0,0,0,0.45)] backdrop-blur-md",
          title:
            "font-serif text-[1.05rem] font-semibold tracking-tight text-foreground",
          description: "font-sans text-sm leading-relaxed text-muted-foreground",
          success: "border-accent/45",
          error: "border-red-500/35",
          closeButton:
            "border-white/10 bg-white/5 text-foreground hover:bg-white/10",
        },
      }}
    />
  )
}
