'use client'

export function DarkSection() {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = 'https://buy.stripe.com/00w6oG9io6sRgircoQ5Rm01'
  }

  return (
    <section className="dark-section">
      {/* Animated floating shapes */}
      <div className="dark-section-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>

      {/* Grid pattern */}
      <div className="dark-section-grid"></div>

      {/* Content */}
      <div className="dark-section-content">
        <h2 className="animate-on-scroll">Save Time. Scale Faster.<br/>Work Smarter.</h2>
        <p className="animate-on-scroll">Join thousands of entrepreneurs who have transformed their operations with proven automation blueprints.</p>

        <div className="cta-wrapper animate-on-scroll">
          <a href="#pricing" className="cta-button" onClick={handleCtaClick}>
            Join Us Now <span className="arrow">→</span>
          </a>
          <div className="cta-subtitle">
            <span><span className="check-icon">✓</span> One-time payment</span>
            <span><span className="check-icon">✓</span> Lifetime access</span>
          </div>
        </div>

        {/* Stats */}
        <div className="dark-stats animate-on-scroll">
          <div className="dark-stat">
            <div className="dark-stat-number">20+</div>
            <div className="dark-stat-label">Hours Saved/Week</div>
          </div>
          <div className="dark-stat">
            <div className="dark-stat-number">10x</div>
            <div className="dark-stat-label">Productivity Boost</div>
          </div>
          <div className="dark-stat">
            <div className="dark-stat-number">$0</div>
            <div className="dark-stat-label">Monthly Fees</div>
          </div>
        </div>
      </div>
    </section>
  )
}
