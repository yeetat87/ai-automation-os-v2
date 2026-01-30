'use client'

import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.1, 0.2, 0.3],
      rootMargin: '0px 0px -80px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          entry.target.classList.add('visible')

          if (entry.target.classList.contains('animate-pop')) {
            ;(entry.target as HTMLElement).style.animation = 'popIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
          }
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.animate-on-scroll, .animate-pop, .categories-grid, .testimonial-masonry')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')
        if (targetId === '#') return

        const targetElement = document.querySelector(targetId!)
        if (targetElement) {
          const offset = 80
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}

export function useParallax() {
  useEffect(() => {
    let ticking = false
    const heroSection = document.querySelector('.hero') as HTMLElement | null

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY

          if (heroSection && scrollY < 1200) {
            heroSection.style.transform = `translateY(${scrollY * 0.08}px)`
            const fadeStart = 200
            const fadeEnd = 1500
            let opacity = 1
            if (scrollY > fadeStart) {
              opacity = 1 - ((scrollY - fadeStart) / (fadeEnd - fadeStart))
              opacity = Math.max(0, Math.min(1, opacity))
            }
            heroSection.style.opacity = String(opacity)
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
