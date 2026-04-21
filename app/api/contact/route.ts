import { NextResponse, type NextRequest } from "next/server"
import nodemailer from "nodemailer"
import { Resend } from "resend"
import { contactFormSchema } from "@/lib/validations/contact"

/** Correo que recibe los mensajes del formulario (único destinatario vía Resend). */
const NOTIFICATION_EMAIL = "brenfederico88@gmail.com"

/** Remitente por defecto sin dominio verificado en Resend (sandbox). */
const RESEND_FROM_DEFAULT = "onboarding@resend.dev"

/** Nombre exacto que busca este endpoint (coincide con Resend y Vercel). */
const ENV_RESEND_KEY = "RESEND_API_KEY" as const

export const runtime = "nodejs"

/**
 * Lee la API key de Resend. Next.js inyecta `process.env.RESEND_API_KEY`
 * desde `.env.local` (solo en máquina local), `.env`, o variables del hosting (p. ej. Vercel).
 */
function readResendApiKey(): string {
  const raw = process.env.RESEND_API_KEY
  if (raw === undefined || raw === null) {
    return ""
  }
  return typeof raw === "string" ? raw.trim() : ""
}

/** Diagnóstico en servidor (terminal / logs Vercel). No imprime el valor secreto. */
function logMissingMailProviders(): void {
  console.error("Error: No se detectó la API Key en el entorno")

  const raw = process.env.RESEND_API_KEY
  let keyState: string
  if (raw === undefined) {
    keyState = `${ENV_RESEND_KEY} está undefined — Node no recibió la variable (.env.local ausente o mal ubicado, servidor sin reiniciar tras editar env, o variable sin definir en el hosting)`
  } else if (typeof raw !== "string") {
    keyState = `${ENV_RESEND_KEY} no es un string (${typeof raw})`
  } else if (raw.trim().length === 0) {
    keyState = `${ENV_RESEND_KEY} existe pero está vacío o solo espacios`
  } else {
    keyState = `${ENV_RESEND_KEY} tiene valor pero no se usó Resend — revisar flujo SMTP`
  }

  const smtpOk = Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim(),
  )

  console.error(
    [
      "[contact] No hay proveedor de correo configurado.",
      `  → Variable buscada (exacto): process.env.${ENV_RESEND_KEY}`,
      `  → Estado: ${keyState}`,
      `  → SMTP alternativo (SMTP_HOST+SMTP_USER+SMTP_PASS): ${smtpOk ? "configurado" : "no configurado"}`,
      "  → Local: cree .env.local en la MISMA carpeta que package.json (no .env.local.txt). Una línea:",
      `      ${ENV_RESEND_KEY}=re_xxxxxxxx`,
      "  → Tras guardar .env.local: detenga el servidor (Ctrl+C) y ejecute de nuevo: npm run dev",
      "  → Producción Vercel: Settings → Environment Variables → Name RESEND_API_KEY → redeploy",
    ].join("\n"),
  )
}

function buildTextBody(
  data: {
    name: string
    phone: string
    email: string
    subject: string
    message: string
  },
  request: NextRequest,
) {
  const ip =
    request.headers.get("x-forwarded-for") ??
    request.headers.get("x-real-ip") ??
    "desconocida"

  return [
    "Nuevo mensaje desde el formulario web — Estudio Jurídico Dres. Federico",
    "",
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Email del cliente: ${data.email}`,
    `Asunto: ${data.subject}`,
    "",
    "Mensaje:",
    data.message,
    "",
    "---",
    `IP: ${ip}`,
  ].join("\n")
}

/** Remitente: dominio propio si está en env; si no, sandbox Resend. */
function resolveResendFrom(): string {
  const configured = process.env.RESEND_FROM_EMAIL?.trim()
  if (configured?.length) {
    return configured
  }
  return RESEND_FROM_DEFAULT
}

async function sendViaResend(
  apiKey: string,
  params: {
    from: string
    replyTo: string
    subject: string
    text: string
  },
): Promise<{ ok: true } | { ok: false }> {
  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: params.from,
      to: [NOTIFICATION_EMAIL],
      replyTo: params.replyTo,
      subject: params.subject,
      text: params.text,
      headers: {
        "X-Entity-Ref-ID": `contact-${Date.now()}`,
      },
    })

    if (error) {
      console.error("[contact] Resend API:", error)
      return { ok: false }
    }
    return { ok: true }
  } catch (e) {
    console.error("[contact] Resend exception:", e)
    return { ok: false }
  }
}

async function sendViaSmtp(params: {
  to: string
  from: string
  replyTo: string
  subject: string
  text: string
}): Promise<{ ok: true } | { ok: false }> {
  const host = process.env.SMTP_HOST?.trim()
  const user = process.env.SMTP_USER?.trim()
  const pass = process.env.SMTP_PASS?.trim()

  if (!host || !user || !pass) {
    return { ok: false }
  }

  const port = Number(process.env.SMTP_PORT ?? "587")
  const secure = process.env.SMTP_SECURE === "true"

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: params.from,
      to: params.to,
      replyTo: params.replyTo,
      subject: params.subject,
      text: params.text,
    })
    return { ok: true }
  } catch (e) {
    console.error("[contact] SMTP:", e)
    return { ok: false }
  }
}

export async function POST(request: NextRequest) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false as const, message: "No se pudo leer el formulario." },
      { status: 400 },
    )
  }

  if (!json || typeof json !== "object") {
    return NextResponse.json(
      { ok: false as const, message: "Datos no válidos." },
      { status: 400 },
    )
  }

  const body = json as Record<string, unknown>

  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true as const })
  }
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true as const })
  }

  const { company: _unusedCompany, website: _unusedWebsite, ...rest } = body

  const parsed = contactFormSchema.safeParse(rest)
  if (!parsed.success) {
    const flat = parsed.error.flatten()
    return NextResponse.json(
      {
        ok: false as const,
        message: "Revise los campos marcados.",
        fieldErrors: flat.fieldErrors,
      },
      { status: 400 },
    )
  }

  const { name, phone, email, subject, message } = parsed.data

  const to = NOTIFICATION_EMAIL
  const textBody = buildTextBody(
    { name, phone, email, subject, message },
    request,
  )

  const mailSubject = `[Consulta web] ${subject}`

  const resendKey = readResendApiKey()

  if (resendKey.length > 0) {
    const from = resolveResendFrom()

    const result = await sendViaResend(resendKey, {
      from,
      replyTo: email,
      subject: mailSubject,
      text: textBody,
    })

    if (result.ok) {
      return NextResponse.json({ ok: true as const })
    }

    return NextResponse.json(
      {
        ok: false as const,
        message:
          "El servicio de correo no pudo completar el envío. Verifique la API key y el remitente en Resend, o intente más tarde.",
      },
      { status: 502 },
    )
  }

  const smtpFrom =
    process.env.SMTP_FROM?.trim() ??
    `"Estudio Jurídico Dres. Federico" <${process.env.SMTP_USER}>`

  if (
    process.env.SMTP_HOST?.trim() &&
    process.env.SMTP_USER?.trim() &&
    process.env.SMTP_PASS?.trim()
  ) {
    const smtpResult = await sendViaSmtp({
      to,
      from: smtpFrom,
      replyTo: email,
      subject: mailSubject,
      text: textBody,
    })

    if (smtpResult.ok) {
      return NextResponse.json({ ok: true as const })
    }

    return NextResponse.json(
      {
        ok: false as const,
        message:
          "No pudimos enviar el mensaje. Revise la configuración SMTP o intente más tarde.",
      },
      { status: 502 },
    )
  }

  logMissingMailProviders()

  return NextResponse.json(
    {
      ok: false as const,
      message:
        "El envío no está configurado en el servidor o no se cargó la variable de entorno. Confirme que el archivo .env.local está en la carpeta del proyecto (junto a package.json), que el nombre de la variable es RESEND_API_KEY y reinicie npm run dev.",
    },
    { status: 503 },
  )
}
