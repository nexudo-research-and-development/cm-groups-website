import type { Metadata } from 'next'
import { ArrowUpRight, ClipboardCheck, FileText, Mic2 } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { contactEmail } from '@/lib/site'

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'Assignments, personal tasks, and song requests. Job description flexible. Fun guaranteed.',
}

const services = [
  ['01', 'Assignment Irukum!', 'Research, organizing ideas, presentations and permitted academic support — CM team is ready to help.', FileText],
  ['02', 'Personal Works?', 'To-do lists, planning, reminders and random ideas. Tell us what needs doing and we will find the fun in it.', ClipboardCheck],
  ['03', 'Song Paadanuma?', 'From a serious meeting to a sudden song request, entertainment is always on the brief.', Mic2],
] as const

export default function WhatWeDoPage() {
  return (
    <main className="cm-site inner-page">
      <SiteHeader />
      <section className="inner-hero shell">
        <p className="section-number">01 / THE TASK DEPARTMENT</p>
        <h1>
          Enna venum?
          <br />
          <em>Sollunga!</em>
        </h1>
        <p>Job description flexible. Founder instructions mandatory. Fun guaranteed.</p>
      </section>
      <section className="section shell">
        <div className="service-grid">
          {services.map(([number, title, copy, Icon]) => (
            <article className="service-card card-red" key={number}>
              <div className="card-top">
                <span>{number}</span>
                <span className="card-icon">
                  <Icon />
                </span>
              </div>
              <h2>{title}</h2>
              <p>{copy}</p>
              <a className="text-link" href="/#contact">
                Tell us more <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="contact">
        <div className="shell contact-inner">
          <div>
            <p className="section-number">OVER TO YOU</p>
            <h2>
              Ready when
              <br />
              <em>you are, boss.</em>
            </h2>
          </div>
          {contactEmail ? (
            <a className="button button-light" href={`mailto:${contactEmail}`}>
              Start a task <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
