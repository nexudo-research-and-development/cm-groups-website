import type { Metadata } from 'next'
import { ArrowUpRight, Music2, Sparkles, Zap } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Our Vibe',
  description: 'Teamwork, creativity, random requests, and a little bit of Chilli Milli madness.',
}

export default function OurVibePage() {
  return (
    <main className="cm-site inner-page">
      <SiteHeader />
      <section className="inner-hero shell">
        <p className="section-number">01 / OUR VIBE</p>
        <h1>
          We take tasks seriously.
          <br />
          <em>Ourselves? Not so much.</em>
        </h1>
        <p>Teamwork, creativity, random requests and a little bit of Chilli Milli madness — that is the operating system.</p>
      </section>
      <section className="vibe inner-vibe">
        <div className="shell">
          <div className="principles">
            <div className="principle">
              <span>
                <Zap />
              </span>
              <h2>Always Ready</h2>
            </div>
            <div className="principle">
              <span>
                <Sparkles />
              </span>
              <h2>Creativity Unlimited</h2>
            </div>
            <div className="principle">
              <span>
                <Music2 />
              </span>
              <h2>Fun Is Mandatory</h2>
            </div>
          </div>
          <p className="vibe-copy">
            We believe the best work happens when people stay curious, communicate clearly and leave room for a good song. Every request gets attention, personality and a little extra effort.
          </p>
        </div>
      </section>
      <section className="contact">
        <div className="shell contact-inner">
          <h2>
            Bring us your
            <br />
            <em>next weird idea.</em>
          </h2>
          <a className="button button-light" href="/#contact">
            Give us a task <ArrowUpRight />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
