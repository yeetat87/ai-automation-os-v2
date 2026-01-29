import './globals.css'

export const metadata = {
  title: 'ManaNova Automation System - 1,050+ Ready-to-Implement Blueprints',
  description: 'The Complete AI Automation System with 1,050+ ready-to-implement blueprints',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />
        <script
          async
          data-uid="d82197c142"
          src="https://aicapitol.kit.com/d82197c142/index.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
