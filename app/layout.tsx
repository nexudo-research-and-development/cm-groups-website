import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { originFromHeaders } from '@/lib/site'
import './globals.css'

const description = 'Welcome to CM Groups of Companies (Chilli Milli), where assignments, personal tasks and entertainment come together. Tell us your next mission!'
const shareTitle = 'CM Groups of Companies | Chilli Milli'
const shareDescription = 'Tasks, tunes and total Chilli Milli. Tell us your next mission!'

export async function generateMetadata(): Promise<Metadata> {
  const origin = originFromHeaders(await headers())

  return {
    metadataBase: new URL(origin),
    title: {
      default: 'CM Groups of Companies | Chilli Milli — Tasks, Tunes & Total Fun',
      template: '%s | CM Groups of Companies',
    },
    description,
    applicationName: 'CM Groups of Companies',
    openGraph: {
      title: shareTitle,
      description: shareDescription,
      type: 'website',
      siteName: 'CM Groups of Companies',
      locale: 'en_IN',
      images: [
        {
          url: `${origin}/og/16x9.jpg`,
          width: 1200,
          height: 675,
          alt: 'CM Groups of Companies — Chilli Milli',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: shareDescription,
      images: [
        {
          url: `${origin}/og/16x9.jpg`,
          width: 1200,
          height: 675,
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
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#f52222',
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
