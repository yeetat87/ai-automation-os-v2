import { LogoFooter } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <LogoFooter />
            <strong>ManaNova</strong>
          </div>
          <p>The Complete AI Automation System</p>
        </div>

        <div className="footer-column">
          <h4>Sitemap</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 The AI Capitol. All rights reserved.</p>
      </div>
    </footer>
  )
}
