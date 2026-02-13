# Runners Circle Branding & Marketing

A premium, cinematic agency site built with **Next.js 14 (App Router)**, **Tailwind CSS v4**, and **TypeScript**. Veteran-owned. Texas-built.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4 with custom brand tokens
- **Language:** TypeScript
- **Email:** Nodemailer (Microsoft 365 SMTP-ready)
- **Deploy:** Vercel

## Project Structure

```
runners-circle/
├── app/
│   ├── layout.tsx              # Root layout (fonts, header, footer, chat)
│   ├── page.tsx                # Homepage (splash + 9 sections)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── ai/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       └── concierge/route.ts  # Lead submission API (email + validation)
├── components/
│   ├── Header.tsx              # Sticky glass-blur nav
│   ├── Footer.tsx              # Footer with links & veteran badge
│   ├── SplashIntro.tsx         # Cinematic logo splash (session-gated)
│   ├── ConciergeChat.tsx       # Lead qualification chat (state machine)
│   ├── ui/
│   │   ├── primitives.tsx      # Button, Card, Container, SectionHeading
│   │   └── motion.tsx          # FadeRise, StaggerReveal, ProgressiveReveal
│   └── sections/
│       ├── Hero.tsx
│       ├── TrustBar.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── FeaturedAI.tsx
│       ├── Process.tsx
│       ├── VeteranAuthority.tsx
│       ├── Portfolio.tsx
│       └── FinalCTA.tsx
├── lib/
│   ├── leadTypes.ts            # LeadData schema, validation, persistence stub
│   └── emailTemplate.ts        # Branded HTML + plain-text email templates
├── public/
│   └── logo.PNG
├── styles/
│   └── globals.css             # Tailwind config, brand tokens, utilities
├── .env.example                # Required environment variables
├── .gitignore
├── postcss.config.mjs
├── next.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
# Microsoft 365 SMTP
M365_SMTP_HOST=smtp.office365.com
M365_SMTP_PORT=587
M365_SMTP_USER=you@yourdomain.com
M365_SMTP_PASS=your-app-password

# Lead notification recipient
LEAD_RECEIVER_EMAIL=leads@yourdomain.com
```

> **Without SMTP configured**, the concierge chat still works — leads are logged to the server console.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import into [Vercel](https://vercel.com)
3. Add environment variables in **Settings → Environment Variables**
4. Deploy — no additional build config needed

## Features

- **Cinematic Splash Intro** — logo animation on first visit (session-gated, Shift+R to replay)
- **9-Section Homepage** — Hero, Trust Bar, About, Services, AI, Process, Veteran Authority, Portfolio, Final CTA
- **Concierge Chat** — floating lead qualification system with conversation state machine
- **Lead Email Notifications** — branded HTML emails via Microsoft 365 SMTP
- **Responsive** — mobile-first, glass-blur nav, premium card layouts
- **Performance** — CSS keyframe animations, prefers-reduced-motion support, no external animation libraries
- **Accessibility** — semantic HTML, focus-visible rings, aria labels

## Brand Palette

| Token | Hex |
|-------|-----|
| ember | `#F24C1A` |
| emberDark | `#C63E14` |
| black | `#0D0D0F` |
| teal | `#0F2E2F` |
| sand | `#E6D2C2` |
| gray | `#2B2B2E` |

## License

All rights reserved. &copy; Runners Circle Branding & Marketing LLC.