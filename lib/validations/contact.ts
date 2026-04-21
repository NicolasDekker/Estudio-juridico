import { z } from "zod"

/** Campos del formulario público (sin honeypot). */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingrese su nombre completo")
    .max(120, "Nombre demasiado largo"),
  phone: z
    .string()
    .trim()
    .min(6, "Ingrese un teléfono de contacto")
    .max(40, "Teléfono demasiado largo"),
  email: z
    .string()
    .trim()
    .min(1, "El correo es obligatorio")
    .email("Formato de correo no válido")
    .max(254),
  subject: z
    .string()
    .trim()
    .min(2, "Indique el asunto")
    .max(200, "Asunto demasiado largo"),
  message: z
    .string()
    .trim()
    .min(10, "Describa su consulta (mínimo 10 caracteres)")
    .max(8000, "Mensaje demasiado largo"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
