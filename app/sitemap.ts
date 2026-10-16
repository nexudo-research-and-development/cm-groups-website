import type { MetadataRoute } from 'next'
import { publicRoutes, siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {

  return publicRoutes.map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
