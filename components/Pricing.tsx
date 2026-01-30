'use client'

const features = [
  '1,050+ Automation Blueprints',
  '5,000+ AI Prompts Library',
  '50+ Business Categories',
  '50+ Tool Integrations',
  'Step-by-Step Implementation Guides',
  'Quick Start Guide',
  'ROI Calculator',
  'Tool Setup Guides',
  'Lifetime Updates'
]

export function Pricing() {
  const handleCheckout = () => {
    window.location.href = 'https://buy.stripe.com/00w6oG9io6sRgircoQ5Rm01'
  }

  return (
    <section className="pricing-section" id="pricing">
      <h2 className="animate-on-scroll">Pay once, use forever</h2>
      <p className="animate-on-scroll">Lifetime access, all future updates included.</p>

      <div className="pricing-card animate-on-scroll animate-scale">
        <div className="pricing-badge">20% OFF — Limited Time</div>
        <h3>ManaNova Automation System</h3>
        <p className="tagline">1,050+ ready-to-implement blueprints</p>
        <div className="price-row">
          <span className="price-original">$149 USD</span>
          <span className="price-display">$99 USD</span>
        </div>
        <p style={{ opacity: 0.5, fontSize: '14px' }}>One-time payment · Lifetime access</p>

        <ul className="pricing-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <button id="checkout-button" className="pricing-cta" onClick={handleCheckout}>
          Join Us Now →
        </button>
        <p className="pricing-guarantee">🔒 30-day money-back guarantee</p>
      </div>
    </section>
  )
}
