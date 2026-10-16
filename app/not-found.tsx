import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'That page is not part of CM Groups of Companies.',
}

export default function NotFound() {
  return (
    <main className="cm-site inner-page">
      <SiteHeader />
      <section className="inner-hero shell">
        <p className="section-number">404</p>
        <h1>
          This page
          <br />
          <em>wandered off.</em>
        </h1>
        <p>The link might be old, or the task never existed.</p>
        <a className="button button-red" href="/">
          Back home
        </a>
      </section>
      <SiteFooter />
    </main>
  )
}
