'use client'

import { useState, FormEvent } from 'react'

export function Community() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const formData = new FormData()
      formData.append('email_address', email)

      const response = await fetch(
        'https://app.convertkit.com/forms/9009438/subscriptions',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (response.ok) {
        setStatus('success')
        setMessage('Success! Check your email to confirm.')
        setEmail('')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="community-section" id="community">
      <div className="community-content animate-on-scroll">
        <div className="community-icon">🚀</div>
        <h2>Join the AI Automation Community</h2>
        <p>Get free automation tips, templates, and exclusive updates delivered to your inbox</p>
        <form className="signup-form" onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            style={status === 'success' ? { background: '#10B981' } : {}}
            disabled={status === 'loading'}
          >
            {status === 'success' ? '✓ Joined!' : status === 'loading' ? 'Joining...' : 'Join Free →'}
          </button>
        </form>
        {message && <span className="signup-message">{message}</span>}
        <span className="signup-note">Join 5,000+ entrepreneurs. No spam, unsubscribe anytime.</span>
      </div>
    </section>
  )
}
