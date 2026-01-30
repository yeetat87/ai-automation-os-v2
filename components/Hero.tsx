'use client'

export function Hero() {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = 'https://buy.stripe.com/00w6oG9io6sRgircoQ5Rm01'
  }

  return (
    <section className="hero">
      <div className="hero-badge">
        🚀 1,050+ Automation Blueprints
      </div>

      <h1>The Complete <span>AI Automation</span> System</h1>

      <p className="hero-text">
        <strong>1,050+ done-for-you blueprints</strong> to automate your business.
      </p>
      <p className="hero-tagline">Work less. Earn more.</p>

      <div className="cta-wrapper">
        <a href="#pricing" className="cta-button" onClick={handleCtaClick}>
          Join Us Now <span className="arrow">→</span>
        </a>
        <div className="cta-subtitle">
          <span><span className="check-icon">✓</span> One-time payment</span>
          <span><span className="check-icon">✓</span> Lifetime access</span>
          <span><span className="check-icon">✓</span> 30-day guarantee</span>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat stagger-1">
          <div className="hero-stat-number">1,050+</div>
          <div className="hero-stat-label">Automations</div>
        </div>
        <div className="hero-stat stagger-2">
          <div className="hero-stat-number">5,000+</div>
          <div className="hero-stat-label">AI Prompts</div>
        </div>
        <div className="hero-stat stagger-3">
          <div className="hero-stat-number">50+</div>
          <div className="hero-stat-label">Categories</div>
        </div>
        <div className="hero-stat stagger-4">
          <div className="hero-stat-number">50+</div>
          <div className="hero-stat-label">Tools Covered</div>
        </div>
      </div>
    </section>
  )
}
