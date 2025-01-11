import { Analytics } from '@vercel/analytics/react'
import { Poppins, Lato, DM_Serif_Text } from 'next/font/google'

import './global.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { defaultMetadata } from './metadata'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['400', '700'],
})

const dm_serif = DM_Serif_Text({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
  weight: ['400'],
})

export const metadata = defaultMetadata

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${lato.variable} ${dm_serif.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
