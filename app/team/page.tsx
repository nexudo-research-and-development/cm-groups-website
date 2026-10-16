import type { Metadata } from 'next'
import { ArrowUpRight, Heart, Lightbulb, Users } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Team',
  description: 'A small, curious team that believes every task deserves energy, clarity, and a little personality.',
}

export default function TeamPage() {
  return (
    <main className="cm-site inner-page">
      <SiteHeader />
      <section className="inner-hero shell">
        <p className="section-number">THE PEOPLE BEHIND THE CHILLI</p>
        <h1>
          One founder.
          <br />
          <em>Many moving parts.</em>
        </h1>
        <p>We are a small, curious team that believes every task deserves energy, clarity and a little personality.</p>
      </section>
      <section className="section shell team-grid">
        <article className="team-card">
          <span>
            <Users />
          </span>
          <h2>Built together</h2>
          <p>Ideas get better when they are shared. We work openly, help quickly and celebrate the small wins.</p>
        </article>
        <article className="team-card">
          <span>
            <Lightbulb />
          </span>
          <h2>Curious by default</h2>
          <p>We ask better questions, learn as we go and never pretend a boring answer is the only answer.</p>
        </article>
        <article className="team-card">
          <span>
            <Heart />
          </span>
          <h2>Human at heart</h2>
          <p>Good work is useful, thoughtful and made for real people. That is our north star.</p>
        </article>
      </section>
      <section className="contact">
        <div className="shell contact-inner">
          <h2>
            Want to join
            <br />
            <em>the madness?</em>
          </h2>
          <a className="button button-light" href="/careers">
            See careers <ArrowUpRight />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
