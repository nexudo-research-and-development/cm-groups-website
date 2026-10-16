import type { Metadata } from 'next'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { contactEmail } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'What CM Groups of Companies is, and what the team can actually help with.',
}

const faqs = [
  ['What exactly is CM Groups of Companies?', 'CM stands for Chilli Milli — a fun, task-loving brand where assignments, personal tasks and entertainment meet.'],
  ['Can I request help with assignments?', 'Yes! Get help with research, brainstorming, explanations, presentations and draft preparation.'],
  ['Can I request a song?', 'Of course! Choose a mood, suggest a song or request a singing style.'],
  ['Is every request guaranteed?', 'Not every mission is possible. Share your request and we will let you know what can be done!'],
]

export default function FAQPage() {
  return (
    <main className="cm-site inner-page">
      <SiteHeader />
      <section className="inner-hero shell">
        <p className="section-number">01 / FREQUENTLY ASKED</p>
        <h1>
          But boss,
          <br />
          <em>what is CM?</em>
        </h1>
        <p>Valid questions. Chaotic answers.</p>
      </section>
      <section className="section shell faq">
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>
                <span>{question}</span>
                <ChevronDown />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="contact">
        <div className="shell contact-inner">
          <h2>
            Still curious?
            <br />
            <em>Ask away.</em>
          </h2>
          {contactEmail ? (
            <a className="button button-light" href={`mailto:${contactEmail}`}>
              Talk to CM <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
