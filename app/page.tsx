'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Leaf,
  Mic2,
  Music2,
  Shuffle,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { contactEmail } from '@/lib/site'

const tasks = [
  'Assignment pending. Brain loading... 12% 😂',
  'Boss-ku coffee venum. Priority: Maximum ☕',
  'Oru paatu paadu nu order vandhuruchu! 🎤',
  'Personal work detected. CM team activated! 🫡',
  "Today's mission: Make the impossible look easy.",
  'Chilli Milli mode activated. Let\'s go! 🌶️',
  'Task list perusa irukku. Aana namma ready!',
  'Meeting mudinjiduchu. Ippo oru song aagattuma?',
]

const faqs = [
  ['What exactly is CM Groups of Companies?', 'CM stands for Chilli Milli — a fun, task-loving brand where assignments, personal tasks and entertainment meet.'],
  ['Can I get help with assignments?', 'Yes! Research, brainstorming, explanations, presentations and draft preparation support are part of CM.'],
  ['What about music and entertainment?', 'From mood suggestions to fun team tracks, entertainment is always part of the Chilli Milli culture.'],
  ['What kind of personal tasks do you handle?', "Organizing to-do lists, planning, reminders, and creative ideas."],
  ['How does CM work?', "Reach out with what you have in mind, and we'll take it from there!"],
]

export default function Page() {
  const [task, setTask] = useState(tasks[0])
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  const randomTask = () => setTask(tasks[Math.floor(Math.random() * tasks.length)])

  return (
    <main className="cm-site" id="home">
      <SiteHeader />

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> Currently accepting random assignments <span>✦</span></div>
          <p className="kicker">CM GROUPS OF COMPANIES / EST. SOMEWHERE BETWEEN A TASK & A TUNE</p>
          <h1>Welcome to the<br /><em>Chilli Milli</em> universe.</h1>
          <p className="hero-lede">Assignment ah? Personal work ah? Illa song paadanuma? Sollunga boss, paathukalam!</p>
          <p className="hero-desc">One founder. Endless tasks. Zero boring moments. Welcome to CM Groups of Companies — where the to-do list never ends, and neither does the entertainment.</p>
          <div className="hero-actions">
            <a className="button button-red" href="#contact">Give Us a Task <ArrowUpRight /></a>
            <a className="button button-ghost" href="#work">Explore Our Madness <ArrowDown /></a>
          </div>
          <p className="disclaimer">Terms & conditions apply. Founder oda mood-ku according ah! 😂</p>
        </div>
        <div className="hero-art" aria-label="CM Chilli Milli brand mark">
          <div className="orb-glow" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="logo-tile">
            <img
              src="/cm-logo.png"
              alt="CM Groups of Companies — Chilli Milli Logo"
              className="hero-logo-img"
            />
          </div>
          <span className="float-tag tag-one"><ClipboardCheck /> task accepted</span>
          <span className="float-tag tag-two"><Leaf /> konjam green</span>
          <span className="float-star star-one"><Star fill="currentColor" /></span><span className="float-star star-two">✦</span>
          <span className="chilli">🌶️</span>
        </div>
      </section>

      <section className="ticker" aria-label="CM highlights"><div>ASSIGNMENTS <span>✦</span> PERSONAL WORKS <span>✦</span> SONG REQUESTS <span>✦</span> TOTAL CHILLI MILLI <span>✦</span> ASSIGNMENTS <span>✦</span> PERSONAL WORKS <span>✦</span> SONG REQUESTS <span>✦</span></div></section>

      <section className="section shell" id="work">
        <div className="section-heading"><div><p className="section-number">01 / THE TASK DEPARTMENT</p><h2>Enna venum?<br /><em>Sollunga!</em></h2></div><p>Job description flexible.<br />Founder instructions mandatory.<br /><strong>Fun guaranteed.</strong></p></div>
        <div className="service-grid">
          <ServiceCard icon={<FileText />} number="01" title="Assignment Irukum!" accent="silver" copy="Deadline nerungiducha? Research, organizing ideas, presentations and permitted academic support — CM team is ready to help." joke="Last-minute panic-ku konjam support! 😭" action="Handle My Assignment" href="#contact" />
          <ServiceCard icon={<ClipboardCheck />} number="02" title="Personal Works?" accent="red" copy="Founder enna sonnalum seiyanum! Organizing to-do lists, planning, reminders and random ideas — we're here to help." joke="Personal assistant ah? Konjam extra than! 😂" action="Give Me a Task" href="#contact" />
          <ServiceCard icon={<Mic2 />} number="03" title="Song Paadanuma?" accent="green" copy="Serious meeting ah irundhaalum, sudden-ah song request vandhaalum, entertainment-ku CM ready!" joke="Request vandha paadanum. Adhu dhaan rule! 🎶" action="Explore Our Vibe" href="/our-vibe" />
        </div>
      </section>

      <section className="generator-wrap"><div className="generator shell"><div><p className="section-number">02 / FOUNDER SAID SO</p><h2>Founder sonna,<br /><em>CM seiyum!</em> 🫡</h2><p>Daily task enna nu engalukke theriyadhu. But something interesting is definitely coming.</p></div><div className="task-machine"><div className="machine-label"><span className="live-dot" /> LIVE TASK FEED <Shuffle /></div><div className="task-message">{task}</div><button className="button button-red" onClick={randomTask}>Enna task kudukalam? <Shuffle /></button><span className="machine-code">CM_TASK_GENERATOR / 001</span></div></div></section>

      <section className="section shell process"><div className="section-heading"><div><p className="section-number">03 / THE CM METHOD</p><h2>Simple steps.<br /><em>Maximum drama.</em></h2></div><p>From "oru chinna help" to<br />"boss, mission complete."</p></div><div className="steps">{[['01','Sollunga','Enna venum nu sollunga. Assignment ah, personal work ah, song ah?'],['02','CM Mode ON','Task details understand panni, available support-ku prepare aaguvom.'],['03','Mission Complete','Work mudinja happy. Song mudinja happier. Founder happy na ellarum happy! 😂']].map(([num,title,copy], i) => <div className="step" key={num}><span className="step-num">{num}</span><div><h3>{title}</h3><p>{copy}</p></div>{i < 2 && <span className="step-line" />}</div>)}</div></section>

      <section className="vibe" id="vibe"><div className="shell vibe-inner"><p className="section-number">04 / OUR VIBE</p><h2>We take tasks seriously.<br /><em>Ourselves? Not so much.</em></h2><p className="vibe-copy">CM Groups of Companies is built around teamwork, creativity, random requests and a little bit of Chilli Milli madness. We make everyday tasks more entertaining.</p><div className="principles"><Principle icon={<Zap />} title="Always Ready" /><Principle icon={<Sparkles />} title="Creativity Unlimited" /><Principle icon={<Music2 />} title="Fun Is Mandatory" /></div></div></section>

      <section className="section shell faq" id="faq"><div className="section-heading"><div><p className="section-number">05 / FREQUENTLY ASKED</p><h2>But boss,<br /><em>what is CM?</em></h2></div><p>Valid questions.<br />Chaotic answers.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>{question}</span><ChevronDown /></button>{activeFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section className="contact" id="contact"><div className="shell contact-inner"><div><p className="section-number">06 / OVER TO YOU</p><h2>Seri boss,<br /><em>next task enna?</em></h2><p>Assignment ah? Personal work ah? Song ah? Don't keep it in your head. Tell CM!</p></div><div className="contact-actions">{contactEmail ? <><a className="button button-light" href={`mailto:${contactEmail}`}>Let's Talk <ArrowUpRight /></a><small>Reach us directly via email.</small></> : null}</div></div></section>

      <SiteFooter />
    </main>
  )
}

function ServiceCard({ icon, number, title, copy, joke, action, accent, href = "#contact" }: { icon: React.ReactNode; number: string; title: string; copy: string; joke: string; action: string; accent: string; href?: string }) {
  return <article className={`service-card card-${accent}`}><div className="card-top"><span>{number}</span><span className="card-icon">{icon}</span></div><h3>{title}</h3><p>{copy}</p><div className="card-footer"><span>{joke}</span><a href={href}>{action} <ArrowUpRight /></a></div></article>
}
function Principle({ icon, title }: { icon: React.ReactNode; title: string }) { return <div className="principle"><span>{icon}</span><h3>{title}</h3></div> }

