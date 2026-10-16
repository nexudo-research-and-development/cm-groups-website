import { navItems } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <a href="/" aria-label="CM Groups of Companies home">
            <img className="footer-logo" src="/cm-logo.png" alt="CM Groups of Companies — Chilli Milli" />
          </a>
          <p>Tasks, Tunes & Total Chilli Milli.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} CM Groups of Companies</span>
        <span>Built with teamwork, random tasks & konjam Chilli Milli.</span>
      </div>
    </footer>
  )
}
