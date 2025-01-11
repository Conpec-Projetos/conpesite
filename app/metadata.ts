// Note that the metadata is shallowly merged, thus objects such as `openGraph` should be added
// separately at each page.

// em páginas individuais, importante configurar:
// ```
// export const metadata: Metadata = {
//   title: "TITLE",
//   description: "DESCRIPTION",
//   openGraph: {
//     title: "TITLE",
//     description: "DESCRIPTION",
//     url: "/page",
//     ...openGraph
//   }
// }
// ```

import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import type { Metadata } from 'next'

const title = 'Conpec — Empresa Júnior da Unicamp'
const description = 'A Empresa Júnior de Computação da Unicamp'

export const openGraph: OpenGraph = {
  title,
  description,
  url: '/',
  type: 'website',
  locale: 'pt_BR',
  siteName: 'Conpec',
}

export const defaultMetadata: Metadata = {
  title: {
    default: title,
    template: '%s | Conpec',
  },
  description,
  referrer: 'no-referrer-when-downgrade',
  // a Vercel já configura o `metadataBase` automaticamente
  // metadataBase: new URL('https://conpec.com.br'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph,
  twitter: { card: 'summary' },
}

export function getWebMetadata({ title, description, url }: { title: string, description?: string, url?: string }): Metadata {
  return {
    title,
    description,
    openGraph: {
      ...openGraph,
      title,
      description,
      url,
    },
  }
}
