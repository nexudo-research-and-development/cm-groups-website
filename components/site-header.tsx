'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="CM Groups of Companies home">
        <img className="brand-logo" src="/cm-logo.png" alt="CM Groups of Companies — Chilli Milli" />
      </a>
      <nav className={`desktop-nav${open ? ' mobile-visible' : ''}`} aria-label="Main navigation">
        {navItems.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
          return (
            <a
              key={item.href}
              href={item.href}
              className={active ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          )
        })}
        <a className="nav-cta" href="/#contact" onClick={() => setOpen(false)}>
          Give Us a Task <ArrowUpRight data-icon="inline-end" />
        </a>
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}
