import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { originFromHeaders } from '@/lib/site'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const origin = originFromHeaders(await headers())

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${origin}/sitemap.xml`,
  }
}
