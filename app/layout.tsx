import { Poppins, Lato, DM_Serif_Text } from 'next/font/google'

import './global.css'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '600', '700'],
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${lato.variable} ${dm_serif.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
