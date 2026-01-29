"use client";

import React, { useEffect } from "react";

export default function Home() {
  const [status, setStatus] = React.useState("idle");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");

  useEffect(() => {
    // Scroll Progress Indicator
    const scrollProgress = document.getElementById("scrollProgress");
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (scrollProgress) scrollProgress.style.width = scrollPercent + "%";
    };
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    // Scroll Animation Observer
    const observerOptions = {
      threshold: [0, 0.1, 0.2, 0.3],
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(
        ".animate-on-scroll, .animate-pop, .categories-grid, .testimonial-masonry"
      )
      .forEach((el) => {
        observer.observe(el);
      });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (target) {
          const offset = 80;
          const targetPosition =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });

    // FAQ Accordion
    document.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", () => {
        const item = question.parentElement;
        const answer = item.querySelector(".faq-answer");
        const wasActive = item.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach((i) => {
          i.classList.remove("active");
          i.querySelector(".faq-answer").style.maxHeight = "0";
        });

        if (!wasActive) {
          item.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });

    // Set first FAQ item as active
    const firstFaq = document.querySelector(".faq-item.active");
    if (firstFaq) {
      const answer = firstFaq.querySelector(".faq-answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scrollToTop");
    const handleScroll = () => {
      if (window.scrollY > 500) {
        scrollToTopBtn?.classList.add("visible");
      } else {
        scrollToTopBtn?.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateScrollProgress);
      observer.disconnect();
    };
  }, []);

  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/00w6oG9io6sRgircoQ5Rm01";

  const handleCheckout = (e) => {
    e.preventDefault();
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("email_address", email);

      const response = await fetch(
        "https://app.convertkit.com/forms/9009438/subscriptions",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        setMessage("Success! Check your email to confirm.");
        setEmail("");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div className="scroll-progress" id="scrollProgress"></div>

      {/* ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        🚀 Launch Special: Get <strong>20% OFF</strong> — Limited Time Offer!
      </div>

      {/* NAVIGATION */}
      <nav className="nav">
        <a href="#" className="logo">
          <svg
            className="logo-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="40"
            height="40"
          >
            <circle cx="25" cy="25" r="22" fill="#1a4a8a" />
            <ellipse
              cx="25"
              cy="25"
              rx="27"
              ry="8"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              transform="rotate(-35 25 25)"
            />
            <ellipse
              cx="25"
              cy="25"
              rx="25"
              ry="7"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              transform="rotate(40 25 25)"
            />
            <path
              d="M20,11 L21,17.5 L20,24 L22,19 L28,20 L22,19 L23,13 L21,17.5 Z"
              fill="white"
            />
          </svg>
          <span className="logo-text">ManaNova</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#categories">Categories</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#pricing" className="nav-cta" onClick={handleCheckout}>
              Buy Now
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="hero-badge">🚀 1,050+ Automation Blueprints</div>
        <h1>
          The Complete <span>AI Automation</span> System
        </h1>
        <p className="hero-text">
          <strong>1,050+ done-for-you blueprints</strong> to automate your
          business.
        </p>
        <p className="hero-tagline">Work less. Earn more.</p>
        <div className="cta-wrapper">
          <a href="#pricing" className="cta-button" onClick={handleCheckout}>
            Join Us Now <span className="arrow">→</span>
          </a>
          <div className="cta-subtitle">
            <span>
              <span className="check-icon">✓</span> One-time payment
            </span>
            <span>
              <span className="check-icon">✓</span> Lifetime access
            </span>
            <span>
              <span className="check-icon">✓</span> 30-day guarantee
            </span>
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

      {/* DARK SECTION */}
      <section className="dark-section">
        <div className="dark-section-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
        <div className="dark-section-grid"></div>
        <div className="dark-section-content">
          <h2 className="animate-on-scroll">
            Save Time. Scale Faster.
            <br />
            Work Smarter.
          </h2>
          <p className="animate-on-scroll">
            Join thousands of entrepreneurs who have transformed their
            operations with proven automation blueprints.
          </p>
          <div className="cta-wrapper animate-on-scroll">
            <a href="#pricing" className="cta-button" onClick={handleCheckout}>
              Join Us Now <span className="arrow">→</span>
            </a>
            <div className="cta-subtitle">
              <span>
                <span className="check-icon">✓</span> One-time payment
              </span>
              <span>
                <span className="check-icon">✓</span> Lifetime access
              </span>
            </div>
          </div>
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

      {/* CATEGORIES */}
      <section className="categories-section" id="categories">
        <div className="categories-header animate-on-scroll">
          <span className="section-label">50+ CATEGORIES</span>
          <h2>Automate every part of your business</h2>
          <p>
            From generating leads to closing deals — blueprints for every
            workflow you need.
          </p>
        </div>
        <div className="categories-grid animate-on-scroll">
          {[
            {
              icon: "🎯",
              title: "Lead Generation",
              pain: "Leads slip through cracks",
              solve: "Capture on autopilot",
              color: "red",
            },
            {
              icon: "💰",
              title: "Sales & Follow-Up",
              pain: "Hot leads go cold",
              solve: "AI sequences that close",
              color: "green",
            },
            {
              icon: "📧",
              title: "Email Marketing",
              pain: "Emails get ignored",
              solve: "Personalized at scale",
              color: "blue",
            },
            {
              icon: "✍️",
              title: "Content Creation",
              pain: "Takes forever to create",
              solve: "Month of content in 1hr",
              color: "yellow",
            },
            {
              icon: "🏥",
              title: "Customer Support",
              pain: "Slow response times",
              solve: "Instant AI replies",
              color: "pink",
            },
            {
              icon: "📱",
              title: "Social Media",
              pain: "Posting is a grind",
              solve: "Schedule weeks ahead",
              color: "purple",
            },
            {
              icon: "📞",
              title: "Call Scheduling",
              pain: "Endless back-and-forth",
              solve: "One-click booking",
              color: "teal",
            },
            {
              icon: "📊",
              title: "Reporting",
              pain: "Manual data entry",
              solve: "Real-time dashboards",
              color: "orange",
            },
          ].map((cat, i) => (
            <div className="category-card" key={i}>
              <div className="card-header">
                <div className={`icon icon-${cat.color}`}>{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="card-transformation">
                <div className="transform-row">
                  <div className="transform-content">
                    <div className="transform-tag pain">USE CASE</div>
                    <div className="category-pain">{cat.pain}</div>
                    <div className="transform-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                    <div className="transform-tag solve">SOLUTION</div>
                    <div className="category-solve">{cat.solve}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="feature-showcase">
          <div className="feature-showcase-inner animate-on-scroll">
            <div className="feature-content">
              <span className="section-label">WHAT YOU GET</span>
              <h2>Everything you need to automate your business</h2>
              <p>
                Our comprehensive system includes ready-to-use blueprints,
                step-by-step guides, and ongoing support to help you implement
                AI automation successfully.
              </p>
              <ul className="feature-list">
                <li>1,050+ Automation Blueprints</li>
                <li>5,000+ AI Prompts Library</li>
                <li>50+ Business Categories</li>
                <li>Step-by-Step Implementation Guides</li>
                <li>Lifetime Updates</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="notion-mockup">
                <div className="notion-header">
                  <div className="notion-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="notion-title">ManaNova Automation System</div>
                </div>
                <div className="notion-content">
                  <div className="notion-sidebar">
                    <div className="sidebar-item active">📁 All Blueprints</div>
                    <div className="sidebar-item">🎯 Lead Gen</div>
                    <div className="sidebar-item">💰 Sales</div>
                    <div className="sidebar-item">📧 Email</div>
                    <div className="sidebar-item">✍️ Content</div>
                  </div>
                  <div className="notion-main">
                    <h4>🚀 Quick Start Guide</h4>
                    <p>Welcome to ManaNova! Get started in 3 simple steps...</p>
                    <div className="notion-cards">
                      <div className="notion-card">
                        📋 Step 1: Choose Category
                      </div>
                      <div className="notion-card">
                        ⚙️ Step 2: Copy Blueprint
                      </div>
                      <div className="notion-card">🚀 Step 3: Implement</div>
                    </div>
                  </div>
                </div>
                <div className="float-element top-right">
                  ⚡ 120+ Blueprints
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials">
        <div className="section-header animate-on-scroll">
          <span className="section-label">TESTIMONIALS</span>
          <h2>Loved by entrepreneurs worldwide</h2>
          <p>See what our customers are saying about ManaNova</p>
        </div>
        <div className="testimonial-masonry animate-on-scroll">
          {[
            {
              name: "Sarah M.",
              role: "Agency Owner",
              text: "The automations have saved me 20+ hours per week and helped me scale without hiring more people.",
              rating: 5,
            },
            {
              name: "James K.",
              role: "SaaS Founder",
              text: "Best investment I've made for my business. The ROI was immediate.",
              rating: 5,
            },
            {
              name: "Emily R.",
              role: "Content Creator",
              text: "The content repurposing automations have 10x'd my output without increasing workload. My audience has grown 300%.",
              rating: 5,
            },
            {
              name: "David L.",
              role: "E-commerce Owner",
              text: "Customer support automation alone saved us $3,000/month in support costs.",
              rating: 5,
            },
            {
              name: "Lisa T.",
              role: "Marketing Consultant",
              text: "My clients are blown away by the results. This system pays for itself many times over.",
              rating: 5,
            },
            {
              name: "Michael P.",
              role: "Startup Founder",
              text: "We went from chaos to complete automation in just 2 weeks. Game changer.",
              rating: 5,
            },
          ].map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-rating">{"⭐".repeat(t.rating)}</div>
              <p>{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.name.charAt(0)}</div>
                <div className="author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="section-header animate-on-scroll">
          <span className="section-label">PRICING</span>
          <h2>One-time payment. Lifetime access.</h2>
          <p>No subscriptions. No hidden fees. Just pure value.</p>
        </div>
        <div className="pricing-card animate-on-scroll animate-scale">
          <h3>ManaNova Automation System</h3>
          <p className="tagline">1,050+ ready-to-implement blueprints</p>
          <div className="price-row">
            <span className="price-original">$149 USD</span>
            <span className="price-display">$99 USD</span>
          </div>
          <p style={{ opacity: 0.5, fontSize: "14px" }}>
            One-time payment · Lifetime access
          </p>
          <ul className="pricing-features">
            <li>1,050+ Automation Blueprints</li>
            <li>5,000+ AI Prompts Library</li>
            <li>50+ Business Categories</li>
            <li>50+ Tool Integrations</li>
            <li>Step-by-Step Implementation Guides</li>
            <li>Quick Start Guide</li>
            <li>ROI Calculator</li>
            <li>Tool Setup Guides</li>
            <li>Lifetime Updates</li>
          </ul>
          <button
            id="checkout-button"
            className="pricing-cta"
            onClick={handleCheckout}
          >
            Join Us Now →
          </button>
          <p className="pricing-guarantee">🔒 30-day money-back guarantee</p>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
        <section className="community-section" id="community">
          <div className="community-content animate-on-scroll">
            <div className="community-icon">🚀</div>
            <h2>Join the AI Automation Community</h2>
            <p>
          Get exclusive tips, new blueprint releases, and automation
          strategies delivered to your inbox.
            </p>
            <form
          id="email-signup-form"
          className="signup-form"
          onSubmit={handleEmailSubmit}
            >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Submitting..." : "Join Free"}
          </button>
            </form>
            {message && <p className={`signup-message ${status}`}>{message}</p>}
            <p className="signup-note">No spam. Unsubscribe anytime.</p>
          </div>
        </section>

        {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="section-header animate-on-scroll">
          <span className="section-label">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list animate-on-scroll">
          {[
            {
              q: "What exactly do I get?",
              a: "You get instant access to 1,050+ automation blueprints, 5,000+ AI prompts, step-by-step implementation guides, and lifetime updates. Everything is organized in Notion for easy access.",
            },
            {
              q: "Do I need technical skills?",
              a: "No! Every blueprint includes step-by-step instructions. If you can copy and paste, you can implement these automations.",
            },
            {
              q: "What tools are covered?",
              a: "We cover 50+ tools including Make, Zapier, n8n, ChatGPT, Claude, Notion, Airtable, Slack, and many more.",
            },
            {
              q: "Is there a refund policy?",
              a: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied, just email us for a full refund.",
            },
            {
              q: "How often is it updated?",
              a: "We add new blueprints and update existing ones regularly. You get lifetime access to all updates at no extra cost.",
            },
          ].map((faq, i) => (
            <div className={`faq-item ${i === 0 ? "active" : ""}`} key={i}>
              <div className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="float-dot float-dot-1"></div>
        <div className="float-dot float-dot-2"></div>
        <div className="float-dot float-dot-3"></div>
        <div className="float-dot float-dot-4"></div>
        <div className="final-cta-content">
          <h2 className="animate-on-scroll">
            Ready to automate your business?
          </h2>
          <p className="final-cta-tagline animate-on-scroll">
            Join thousands of entrepreneurs who have transformed their
            operations with proven automation blueprints.
          </p>
          <div className="cta-wrapper animate-on-scroll">
            <a href="#pricing" className="cta-button" onClick={handleCheckout}>
              Join Us Now <span className="arrow">→</span>
            </a>
            <div className="cta-subtitle">
              <span>
                <span className="check-icon">✓</span> One-time payment
              </span>
              <span>
                <span className="check-icon">✓</span> Lifetime access
              </span>
              <span>
                <span className="check-icon">✓</span> 30-day guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL TO TOP */}
      <button
        className="scroll-to-top"
        id="scrollToTop"
        aria-label="Scroll to top"
        onClick={handleScrollToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 4l-8 8h5v8h6v-8h5z" />
        </svg>
      </button>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="32"
                height="32"
              >
                <circle cx="25" cy="25" r="22" fill="#1a4a8a" />
                <ellipse
                  cx="25"
                  cy="25"
                  rx="27"
                  ry="8"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.8"
                  transform="rotate(-35 25 25)"
                />
                <ellipse
                  cx="25"
                  cy="25"
                  rx="25"
                  ry="7"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.8"
                  transform="rotate(40 25 25)"
                />
                <path
                  d="M20,11 L21,17.5 L20,24 L22,19 L28,20 L22,19 L23,13 L21,17.5 Z"
                  fill="white"
                />
              </svg>
              <strong>ManaNova</strong>
            </div>
            <p>The Complete AI Automation System</p>
          </div>
          <div className="footer-column">
            <h4>Sitemap</h4>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 The AI Capitol. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
