import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import CookieConsent from '@/components/CookieConsent'
import ScrollHandler from '@/components/ScrollHandler'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fidelis & Cota - Advocacia e Consultoria | Direito de Família e Trabalhista',
  description: 'Especializados em Direito de Família e Direito Trabalhista. Advocacia comprometida com a excelência, ética e inovação. Atendimento humanizado em Belo Horizonte.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
        <ScrollHandler />
      </body>
    </html>
  )
}

