import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // páginas estáticas
    {
      url: 'https://conpec.com.br',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://conpec.com.br/sobre',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://conpec.com.br/servicos',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://conpec.com.br/servicos/consultoria',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://conpec.com.br/servicos/proto',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://conpec.com.br/servicos/dev',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://conpec.com.br/portfolio',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://conpec.com.br/contato',
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ]
}
