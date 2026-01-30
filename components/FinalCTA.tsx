'use client'

export function FinalCTA() {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = 'https://buy.stripe.com/00w6oG9io6sRgircoQ5Rm01'
  }

  return (
    <section className="final-cta">
      {/* Floating decorative dots */}
      <div className="float-dot float-dot-1"></div>
      <div className="float-dot float-dot-2"></div>
      <div className="float-dot float-dot-3"></div>
      <div className="float-dot float-dot-4"></div>

      <div className="final-cta-content">
        <h2 className="animate-on-scroll">Ready to automate your business?</h2>
        <p className="final-cta-tagline animate-on-scroll">Join thousands of entrepreneurs who have transformed their operations with proven automation blueprints.</p>
        <div className="cta-wrapper animate-on-scroll">
          <a href="#pricing" className="cta-button" onClick={handleCtaClick}>
            Join Us Now <span className="arrow">→</span>
          </a>
          <div className="cta-subtitle">
            <span><span className="check-icon">✓</span> One-time payment</span>
            <span><span className="check-icon">✓</span> Lifetime access</span>
            <span><span className="check-icon">✓</span> 30-day guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
