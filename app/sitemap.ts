import type { MetadataRoute } from 'next'
import { getSiteUrl, publicRoutes } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  return publicRoutes.map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
