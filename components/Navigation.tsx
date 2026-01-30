'use client'

import { Logo } from './Logo'

export function Navigation() {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = 'https://buy.stripe.com/00w6oG9io6sRgircoQ5Rm01'
  }

  return (
    <nav className="nav">
      <a href="#" className="logo">
        <Logo className="logo-icon" />
        <span className="logo-text">ManaNova</span>
      </a>
      <ul className="nav-links">
        <li><a href="#categories">Categories</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#pricing" className="nav-cta" onClick={handleCtaClick}>Buy Now</a></li>
      </ul>
    </nav>
  )
}
