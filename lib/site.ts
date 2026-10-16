export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Our Vibe', href: '/our-vibe' },
  { label: 'FAQ', href: '/faq' },
] as const

export const publicRoutes = ['/', '/what-we-do', '/our-vibe', '/faq', '/team', '/careers'] as const

export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? ''
export const careersEmail = process.env.NEXT_PUBLIC_CAREERS_EMAIL?.trim() || contactEmail

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')

  if (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

  return 'http://localhost:3000'
}
