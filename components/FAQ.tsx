'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Do I need technical skills to use this?',
    answer: "Not at all! Each blueprint is designed for non-technical users. You'll get step-by-step implementation logic, copy-paste AI prompts, and clear tool recommendations. If you can follow instructions and click buttons, you can implement these automations. Many of our customers have zero coding experience."
  },
  {
    question: 'What exactly is included in the package?',
    answer: "You get access to 1,050+ automation blueprints across 50+ business categories, 5,000+ ready-to-use AI prompts, a Quick Start Guide to help you get going immediately, an ROI Calculator to track your time savings, Tool Setup Guides for 50+ popular tools, and lifetime access to all future updates at no extra cost. Everything is organized in a beautiful Notion workspace."
  },
  {
    question: 'What tools do I need to get started?',
    answer: "The blueprints work with 50+ popular tools including Zapier, Make (Integromat), ChatGPT, Claude, HubSpot, Notion, Slack, Airtable, and many more. Each automation includes recommended tool stacks for different budgets - from free options to enterprise solutions. You don't need all the tools; just pick the ones that fit your workflow."
  },
  {
    question: 'How much time will I actually save?',
    answer: "On average, each automation saves 3-5 hours per week. Most customers implement 5-10 automations in their first month, saving 15-50 hours weekly. That's like adding an extra team member without the salary! Our ROI Calculator helps you track exactly how much time and money you're saving."
  },
  {
    question: 'How do I access the content after purchase?',
    answer: "Immediately after purchase, you'll receive an email with a link to duplicate the entire Notion workspace to your own account. It takes about 2 minutes to set up, and then you have full access to everything. You can access it from any device - desktop, tablet, or mobile."
  },
  {
    question: 'What is the 30-Day Money-Back Guarantee?',
    answer: "We offer a risk-free 30-day money-back guarantee. If you're not completely satisfied with the ManaNova Automation System for any reason, simply email us within 30 days of purchase and we'll refund 100% of your money - no questions asked, no hoops to jump through. We're confident you'll love it, but we want you to feel completely safe trying it out."
  },
  {
    question: 'Will I get future updates?',
    answer: "Yes! Your one-time payment includes lifetime access to all future updates at no extra cost. We regularly add new automations, prompts, and features based on customer feedback and emerging AI tools. Once you're in, you're in for life."
  },
  {
    question: 'Can I use this for my agency or team?',
    answer: "The standard license is for personal/individual use. If you want to use the automations for client work or share with your team, you're welcome to implement them - you just can't resell or redistribute the blueprints themselves. For agency or enterprise licenses with multiple seats, please contact us."
  },
  {
    question: 'How are the automations organized?',
    answer: "All 1,050+ automations are organized into 10 main categories: Lead Generation, Sales & Follow-Up, Email Marketing, Content Creation, Customer Support, CRM & Pipeline, Proposals & Invoicing, Reporting & Analytics, Hiring & Onboarding, and Operations. Each category has subcategories, and you can search, filter, and favorite automations for quick access."
  },
  {
    question: 'What if I get stuck or need help?',
    answer: "Each blueprint includes detailed implementation guides, but if you need additional help, you can reach out to our support team via email. We typically respond within 24 hours. Plus, the Quick Start Guide walks you through everything step-by-step so you can hit the ground running."
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="section-header">
        <span className="section-label animate-on-scroll">FAQs</span>
        <h2 className="animate-on-scroll">Frequently asked questions</h2>
        <p className="animate-on-scroll">Everything you need to know about the ManaNova Automation System</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item animate-on-scroll ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-icon">+</span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
                display: 'block'
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
