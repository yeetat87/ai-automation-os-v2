import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'ManaNova Automation System - 1,050+ Ready-to-Implement Blueprints',
  description: 'The Complete AI Automation System. 1,050+ done-for-you blueprints to automate your business. Work less. Earn more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
