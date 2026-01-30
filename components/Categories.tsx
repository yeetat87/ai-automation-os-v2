'use client'

const categories = [
  {
    icon: '🎯',
    iconClass: 'icon-red',
    title: 'Lead Generation',
    pain: 'Leads slip through cracks',
    solution: 'Capture on autopilot'
  },
  {
    icon: '💰',
    iconClass: 'icon-green',
    title: 'Sales & Follow-Up',
    pain: 'Hot leads go cold',
    solution: 'AI sequences that close'
  },
  {
    icon: '📧',
    iconClass: 'icon-blue',
    title: 'Email Marketing',
    pain: 'Emails get ignored',
    solution: 'Personalized at scale'
  },
  {
    icon: '✍️',
    iconClass: 'icon-yellow',
    title: 'Content Creation',
    pain: 'Takes forever to create',
    solution: 'Month of content in 1hr'
  },
  {
    icon: '🏥',
    iconClass: 'icon-pink',
    title: 'Customer Support',
    pain: 'Slow response times',
    solution: 'Instant AI replies'
  },
  {
    icon: '📱',
    iconClass: 'icon-purple',
    title: 'Social Media',
    pain: 'Posting is a grind',
    solution: 'Schedule weeks ahead'
  },
  {
    icon: '📞',
    iconClass: 'icon-teal',
    title: 'Call Scheduling',
    pain: 'Endless back-and-forth',
    solution: 'One-click booking'
  },
  {
    icon: '📊',
    iconClass: 'icon-orange',
    title: 'Reporting',
    pain: 'Manual data entry',
    solution: 'Real-time dashboards'
  }
]

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

export function Categories() {
  return (
    <section className="categories-section" id="categories">
      <div className="categories-header animate-on-scroll">
        <span className="section-label">50+ CATEGORIES</span>
        <h2>Automate every part of your business</h2>
        <p>From generating leads to closing deals — blueprints for every workflow you need.</p>
      </div>

      <div className="categories-grid animate-on-scroll">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="card-header">
              <div className={`icon ${category.iconClass}`}>{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <div className="card-transformation">
              <div className="transform-row">
                <div className="transform-label">
                  <div className="transform-icon pain">✕</div>
                  <div className="transform-line"></div>
                  <div className="transform-icon solve">✓</div>
                </div>
                <div className="transform-content">
                  <div className="transform-tag pain">USE CASE</div>
                  <div className="category-pain">{category.pain}</div>
                  <div className="transform-arrow"><ArrowIcon /></div>
                  <div className="transform-tag solve">SOLUTION</div>
                  <div className="category-solve">{category.solution}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
