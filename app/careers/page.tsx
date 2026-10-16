import type { Metadata } from 'next'
import { ArrowUpRight, Check } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { careersEmail } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Curious people, good collaborators, and folks who like getting things done.',
}

export default function CareersPage() {
  return (
    <main className="cm-site inner-page">
      <SiteHeader />
      <section className="inner-hero shell">
        <p className="section-number">JOIN THE CM CREW</p>
        <h1>
          Bring your
          <br />
          <em>best weird ideas.</em>
        </h1>
        <p>There is no perfect candidate here. There are curious people, good collaborators and folks who like getting things done.</p>
      </section>
      <section className="section shell career-layout">
        <div>
          <p className="section-number">WHAT WE LOOK FOR</p>
          <h2>
            Useful energy.
            <br />
            <em>Kind ambition.</em>
          </h2>
        </div>
        <div className="career-list">
          <p>
            <Check /> You communicate clearly and care about the details.
          </p>
          <p>
            <Check /> You can turn an ambiguous brief into a first step.
          </p>
          <p>
            <Check /> You bring warmth, wit and a willingness to learn.
          </p>
          {careersEmail ? (
            <a className="button button-red" href={`mailto:${careersEmail}`}>
              Send your introduction <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </section>
      <section className="contact">
        <div className="shell contact-inner">
          <h2>
            No role listed?
            <br />
            <em>Make your own.</em>
          </h2>
          {careersEmail ? (
            <a className="button button-light" href={`mailto:${careersEmail}`}>
              Say hello <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
