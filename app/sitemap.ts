import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { originFromHeaders, publicRoutes } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = originFromHeaders(await headers())

  return publicRoutes.map((path) => ({
    url: `${origin}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
