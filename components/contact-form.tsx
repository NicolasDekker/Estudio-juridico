"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact"
import { z } from "zod"
import { cn } from "@/lib/utils"

const contactClientSchema = contactFormSchema.extend({
  company: z.string().optional(),
})

type FormFields = z.infer<typeof contactClientSchema>

const contactFieldClass = cn(
  "h-auto rounded-none border-0 border-b border-white/[0.12] bg-transparent px-0 py-3 text-base shadow-none",
  "placeholder:text-muted-foreground/65",
  "focus-visible:border-accent focus-visible:ring-0 focus-visible:ring-offset-0",
  "focus-visible:shadow-[0_1px_0_0_var(--brand-amber)]",
)

type ApiErrorPayload = {
  ok: false
  message?: string
  fieldErrors?: Partial<Record<keyof ContactFormValues, string[]>>
}

export function ContactForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(contactClientSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      company: "",
    },
  })

  async function onSubmit(data: FormFields) {
    let res: Response
    try {
      res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
    } catch {
      toast.error("Sin conexión", {
        description:
          "Compruebe su internet e intente de nuevo, o escríbanos por WhatsApp.",
      })
      return
    }

    let payload: { ok: true } | ApiErrorPayload
    try {
      payload = (await res.json()) as { ok: true } | ApiErrorPayload
    } catch {
      toast.error("Respuesta inválida del servidor", {
        description: "Intente nuevamente en unos minutos.",
      })
      return
    }

    if (res.ok && "ok" in payload && payload.ok) {
      toast.success(
        "¡Mensaje enviado con éxito! Nos pondremos en contacto a la brevedad.",
      )
      reset()
      return
    }

    const err = payload as ApiErrorPayload
    if (err.fieldErrors) {
      const fe = err.fieldErrors
      ;(
        [
          "name",
          "phone",
          "email",
          "subject",
          "message",
        ] as const
      ).forEach((key) => {
        const msg = fe[key]?.[0]
        if (msg) setError(key, { message: msg })
      })
    }

    toast.error("No se pudo enviar el mensaje", {
      description:
        err.message ??
        "Revise los datos o intente más tarde. También puede escribirnos por WhatsApp.",
    })
  }

  return (
    <form
      className={cn("mt-8 space-y-9 md:mt-10", className)}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* Honeypot anti-spam: no eliminar; debe permanecer vacío */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute left-0 top-0 h-0 w-0 opacity-0"
        aria-hidden
        {...register("company")}
      />

      <div className="grid gap-9 sm:grid-cols-2 sm:gap-x-10">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Nombre completo <span className="text-accent">*</span>
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Juan Pérez"
            autoComplete="name"
            disabled={isSubmitting}
            className={contactFieldClass}
            aria-invalid={errors.name ? true : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p className="font-sans text-xs text-red-400/90" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Teléfono <span className="text-accent">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+54 11 …"
            autoComplete="tel"
            disabled={isSubmitting}
            className={contactFieldClass}
            aria-invalid={errors.phone ? true : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="font-sans text-xs text-red-400/90" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Correo electrónico <span className="text-accent">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="correo@ejemplo.com"
          autoComplete="email"
          disabled={isSubmitting}
          className={contactFieldClass}
          aria-invalid={errors.email ? true : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p className="font-sans text-xs text-red-400/90" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Asunto <span className="text-accent">*</span>
        </label>
        <Input
          id="subject"
          type="text"
          placeholder="Ej. Consulta laboral"
          disabled={isSubmitting}
          className={contactFieldClass}
          aria-invalid={errors.subject ? true : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="font-sans text-xs text-red-400/90" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Mensaje <span className="text-accent">*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Describa brevemente su consulta…"
          rows={5}
          disabled={isSubmitting}
          className={cn(contactFieldClass, "min-h-[140px] resize-none py-3")}
          aria-invalid={errors.message ? true : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p className="font-sans text-xs text-red-400/90" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "group relative h-12 w-full overflow-hidden rounded-sm border-0",
          "bg-accent font-sans text-base font-bold tracking-wide text-accent-foreground shadow-lg shadow-accent/25",
          "transition-[box-shadow,transform] duration-300 hover:shadow-[0_0_28px_rgba(255,191,0,0.35)]",
          "hover:bg-[#e6ac00] active:scale-[0.99]",
          "disabled:pointer-events-none disabled:opacity-65",
        )}
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <Spinner className="size-5" aria-hidden />
              Enviando…
            </>
          ) : (
            "Enviar Mensaje"
          )}
        </span>
        {!isSubmitting && (
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            aria-hidden
          />
        )}
      </Button>
    </form>
  )
}
