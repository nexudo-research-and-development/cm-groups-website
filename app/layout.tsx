import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { siteUrl } from '@/lib/site'
import './globals.css'

const description = 'Welcome to CM Groups of Companies (Chilli Milli), where assignments, personal tasks and entertainment come together. Tell us your next mission!'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CM Groups of Companies | Chilli Milli — Tasks, Tunes & Total Fun',
    template: '%s | CM Groups of Companies',
  },
  description,
  applicationName: 'CM Groups of Companies',
  openGraph: {
    title: 'CM Groups of Companies | Chilli Milli',
    description: 'Tasks, tunes and total Chilli Milli. Tell us your next mission!',
    url: siteUrl,
    type: 'website',
    siteName: 'CM Groups of Companies',
    locale: 'en_IN',
    images: [
      {
        url: '/og/16x9.png',
        width: 1672,
        height: 941,
        alt: 'CM Groups of Companies — Chilli Milli',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'CM Groups of Companies | Chilli Milli',
    description: 'Tasks, tunes and total Chilli Milli. Tell us your next mission!',
    images: [
      {
        url: '/og/1x1.png',
        width: 1254,
        height: 1254,
        alt: 'CM Groups of Companies — Chilli Milli',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      {
        url: '/favicon/favicon-96x96.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/favicon-96x96.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08090c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
