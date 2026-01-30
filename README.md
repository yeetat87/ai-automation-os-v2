# ManaNova Automation System - Next.js

A modern Next.js 14 landing page for the ManaNova AI Automation System.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **React 18** with Server and Client Components
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Scroll-triggered animations with IntersectionObserver
- **Interactive Components** - FAQ accordion, scroll-to-top, progress bar
- **Stripe Integration** - Ready for payment processing

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mananova-nextjs/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Main landing page
├── components/
│   ├── AnnouncementBar.tsx
│   ├── Navigation.tsx
│   ├── Logo.tsx
│   ├── Hero.tsx
│   ├── DarkSection.tsx
│   ├── Categories.tsx
│   ├── Pricing.tsx
│   ├── Community.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── ScrollToTop.tsx
│   └── ScrollProgress.tsx
├── hooks/
│   └── useScrollAnimation.ts
├── styles/
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json
├── tsconfig.json
└── next.config.js
```

## Components

### Core Components

- **AnnouncementBar** - Top banner for promotions
- **Navigation** - Sticky navigation with logo and links
- **Hero** - Main hero section with CTA
- **DarkSection** - Feature highlight section with stats
- **Categories** - Grid of automation categories
- **Pricing** - Pricing card with features
- **Community** - Email signup form
- **FAQ** - Accordion-style FAQ section
- **FinalCTA** - Bottom call-to-action section
- **Footer** - Site footer with links

### Utility Components

- **ScrollProgress** - Reading progress indicator
- **ScrollToTop** - Scroll to top button

## Customization

### Stripe Payment Link

Update the Stripe payment link in the following components:
- `components/Navigation.tsx`
- `components/Hero.tsx`
- `components/DarkSection.tsx`
- `components/Pricing.tsx`
- `components/FinalCTA.tsx`

### Colors

The color scheme uses CSS custom properties defined in `styles/globals.css`:

```css
:root {
  --blue: #2563EB;
  --blue-dark: #1D4ED8;
  --purple: #7C3AED;
  --green: #10B981;
  --orange: #F59E0B;
  --pink: #EC4899;
  /* ... */
}
```

## Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## License

All rights reserved. © 2026 The AI Capitol.
