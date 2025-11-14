import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AETERNUM - Haute Horlogerie Suisse',
  description: 'Découvrez l\'excellence de l\'horlogerie suisse avec AETERNUM. Collections exclusives de montres de luxe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="bg-cosmic-darker text-white font-cormorant antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
