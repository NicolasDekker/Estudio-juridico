import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AppToaster } from '@/components/app-toaster'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Dres. Federico | Estudio Jurídico Especialista',
  description:
    'Estudio Jurídico Dres. Federico. Derecho Laboral, ART, Accidentes de Tránsito y Familia con atención directa, claridad total y respuesta rápida por WhatsApp.',
  icons: {
    icon: [{ url: '/icon-dark.png', type: 'image/png' }],
    apple: '/icon-dark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <AppToaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
