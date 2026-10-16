'use client'

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="cm-site inner-page">
      <section className="inner-hero shell">
        <p className="section-number">SOMETHING BROKE</p>
        <h1>
          That did not
          <br />
          <em>go as planned.</em>
        </h1>
        <p>Give it another try, or head back home.</p>
        <div className="hero-actions">
          <button className="button button-red" type="button" onClick={reset}>
            Try again
          </button>
          <a className="button button-ghost" href="/">
            Back home
          </a>
        </div>
      </section>
    </main>
  )
}
