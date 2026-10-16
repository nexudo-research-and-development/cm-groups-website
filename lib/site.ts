export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Our Vibe', href: '/our-vibe' },
  { label: 'FAQ', href: '/faq' },
] as const

export const publicRoutes = ['/', '/what-we-do', '/our-vibe', '/faq', '/team', '/careers'] as const

export const contactEmail = ''
export const careersEmail = ''

export function originFromHeaders(headerList: { get(name: string): string | null }) {
  const rawHost = headerList.get('x-forwarded-host') ?? headerList.get('host') ?? 'localhost:3000'
  const host = rawHost.split(',')[0]?.trim() ?? 'localhost:3000'
  const safeHost = /^[a-z0-9.-]+(?::\d+)?$/i.test(host) ? host : 'localhost:3000'
  const rawProto = headerList.get('x-forwarded-proto')?.split(',')[0]?.trim()
  const proto = rawProto === 'http' || rawProto === 'https' ? rawProto : safeHost.startsWith('localhost') ? 'http' : 'https'
  return `${proto}://${safeHost}`
}
