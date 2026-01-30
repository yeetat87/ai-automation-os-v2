'use client'

import { useEffect } from 'react'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { DarkSection } from '@/components/DarkSection'
import { Categories } from '@/components/Categories'
import { Pricing } from '@/components/Pricing'
import { Community } from '@/components/Community'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ScrollProgress } from '@/components/ScrollProgress'
import { useScrollAnimation, useSmoothScroll, useParallax } from '@/hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation()
  useSmoothScroll()
  useParallax()

  useEffect(() => {
    // Add loaded class for initial animations
    document.body.classList.add('loaded')

    // Hero stats animation
    document.querySelectorAll('.hero-stat').forEach((stat, index) => {
      const el = stat as HTMLElement
      el.style.animationDelay = `${0.6 + (index * 0.15)}s`
      el.style.animation = 'fadeInUp 0.8s ease forwards'
    })

    // Category cards hover effect
    document.querySelectorAll('.category-card').forEach(card => {
      const el = card as HTMLElement
      card.addEventListener('mouseenter', () => {
        el.style.zIndex = '10'
      })
      card.addEventListener('mouseleave', () => {
        setTimeout(() => {
          el.style.zIndex = '1'
        }, 300)
      })
    })

    // Mouse move parallax for hero section
    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.querySelector('.hero')
      if (!hero) return

      const rect = hero.getBoundingClientRect()
      if (rect.bottom < 0) return

      const x = (e.clientX - window.innerWidth / 2) / 50
      const y = (e.clientY - window.innerHeight / 2) / 50

      const badge = hero.querySelector('.hero-badge') as HTMLElement
      if (badge) {
        badge.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <DarkSection />
      <Categories />
      <Pricing />
      <Community />
      <FAQ />
      <FinalCTA />
      <ScrollToTop />
      <Footer />
    </>
  )
}
