# Runners Circle Branding & Marketing

> **[runnerscirclebranding.com](https://runnerscirclebranding.com)**

A premium, cinematic agency site built with **Next.js 14 (App Router)**, **Tailwind CSS v4**, and **TypeScript**. Veteran-owned. Texas-built.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v4 + custom brand tokens |
| Language | TypeScript 5.4 |
| Email | Nodemailer (Microsoft 365 SMTP) |
| Hosting | Vercel |

## Project Structure

```
runners-circle/
├── app/
│   ├── layout.tsx                # Root layout — fonts, metadata, OG defaults
│   ├── page.tsx                  # Homepage (splash + 9 sections)
│   ├── about/
│   │   ├── page.tsx              # Server component — metadata + wrapper
│   │   └── AboutContent.tsx      # Client component — page UI
│   ├── services/
│   │   ├── page.tsx
│   │   └── ServicesContent.tsx
│   ├── ai/
│   │   ├── page.tsx
│   │   └── AIContent.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── ContactContent.tsx
│   ├── api/
│   │   └── concierge/route.ts    # Lead submission API (email + validation)
│   ├── robots.ts                 # Dynamic robots.txt
│   └── sitemap.ts                # Dynamic sitemap.xml
├── components/
│   ├── Header.tsx                # Sticky glass-blur nav
│   ├── Footer.tsx                # Footer with links & veteran badge
│   ├── SplashIntro.tsx           # Cinematic logo splash (session-gated)
│   ├── ConciergeChat.tsx         # Lead qualification chat (state machine)
│   ├── ui/
│   │   ├── primitives.tsx        # Button, Card, Container, SectionHeading
│   │   └── motion.tsx            # FadeRise, StaggerReveal, ProgressiveReveal
│   └── sections/                 # Homepage section components (9 total)
├── lib/
│   ├── leadTypes.ts              # LeadData schema, validation helpers
│   └── emailTemplate.ts          # Branded HTML + plain-text email templates
├── public/
│   └── logo.PNG
├── styles/
│   └── globals.css               # Tailwind v4 theme, brand tokens, utilities
├── .env.example
├── next.config.js
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Copy env template and fill in your values
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

All env vars are configured in **Vercel → Settings → Environment Variables** for production. Locally, copy `.env.example` to `.env.local`:

| Variable | Required | Description |
|----------|----------|-------------|
| `M365_SMTP_HOST` | Yes* | SMTP server (default: `smtp.office365.com`) |
| `M365_SMTP_PORT` | Yes* | SMTP port (default: `587`) |
| `M365_SMTP_USER` | Yes* | SMTP username / sender email |
| `M365_SMTP_PASS` | Yes* | SMTP app password |
| `LEAD_RECEIVER_EMAIL` | Yes* | Email address to receive lead notifications |
| `NEXT_PUBLIC_SITE_URL` | No | Production URL (default: `https://runnerscirclebranding.com`) |

> \* Without SMTP vars, the concierge chat still accepts leads — they are logged to the server console instead of emailed.

## Deploy to Vercel (Seamless Setup)

### Pre-deploy checklist

Before importing to Vercel, confirm:

- The project builds locally: `npm run build`
- `.env.local` values match the keys in `.env.example`
- Required production env vars are ready (especially SMTP + lead receiver email)
- `NEXT_PUBLIC_SITE_URL` is set to your production domain

### First deploy (recommended flow)

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Confirm framework preset is **Next.js** (auto-detected).
4. In the import screen, add all production environment variables.
5. Click **Deploy**.
6. After deploy, open **Project → Settings → Environment Variables** and verify values are present for `Production`, `Preview`, and `Development` as needed.
7. Trigger a redeploy if you added or changed env vars after the first build.

### Subsequent deploys

- Every push to `main` triggers an automatic production deploy.
- Every pull request branch gets a Preview deployment URL.

### Build settings (auto-detected)

| Setting | Value |
|---------|-------|
| Build Command | `next build` |
| Output Directory | `.next` |
| Install Command | `npm install` |
| Node.js Version | 18.x+ |

### Recommended Vercel project settings

- **Root Directory:** `./` (repo root)
- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node.js:** `18.x` or newer

### Environment variable quick mapping

Add these in **Vercel → Project Settings → Environment Variables**:

- `M365_SMTP_HOST`
- `M365_SMTP_PORT`
- `M365_SMTP_USER`
- `M365_SMTP_PASS`
- `LEAD_RECEIVER_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

Tip: If email notifications are not configured yet, lead submissions still work and are logged server-side.

### Common deployment issues

1. **Build passes locally but fails on Vercel**
   - Ensure Node version is `18.x+`.
   - Re-check env var names for exact spelling.
2. **Contact/concierge submits but no emails arrive**
   - Validate Microsoft 365 SMTP credentials and mailbox permissions.
   - Confirm `LEAD_RECEIVER_EMAIL` is set.
3. **Wrong canonical/metadata URLs**
   - Set `NEXT_PUBLIC_SITE_URL` to the production domain and redeploy.
4. **Environment variable updates not reflected**
   - Redeploy after saving env var changes.

### Custom domain

1. Go to **Settings → Domains** in the Vercel dashboard
2. Add `runnerscirclebranding.com`
3. Point DNS `A` / `CNAME` records per Vercel instructions
4. SSL is provisioned automatically

## Routes

| Path | Description |
|------|-------------|
| `/` | Homepage — splash intro + 9 cinematic sections |
| `/about` | Origin story, values, timeline |
| `/services` | Full-spectrum service offerings |
| `/ai` | AI solutions & automation services |
| `/contact` | Contact form + info |
| `/api/concierge` | Lead submission endpoint (POST) |
| `/robots.txt` | Auto-generated robots file |
| `/sitemap.xml` | Auto-generated sitemap |

## SEO

- Per-route `metadata` exports (title, description, OpenGraph, Twitter cards)
- Dynamic `robots.txt` and `sitemap.xml` via App Router conventions
- Title template: `%s | Runners Circle`
- OpenGraph defaults set in root layout

## Features

- **Cinematic Splash Intro** — logo animation on first visit (session-gated, Shift+R to replay)
- **9-Section Homepage** — Hero, Trust Bar, About, Services, AI, Process, Veteran Authority, Portfolio, Final CTA
- **4 Content Pages** — About, Services, AI Solutions, Contact — each with per-route SEO metadata
- **Concierge Chat** — floating lead qualification system with multi-step conversation state machine
- **Lead Email Notifications** — branded HTML emails via Microsoft 365 SMTP with env validation
- **SEO Baseline** — per-route metadata, OpenGraph, Twitter cards, robots.txt, sitemap.xml
- **Responsive** — mobile-first, glass-blur nav, premium card layouts
- **Performance** — CSS keyframe animations, `prefers-reduced-motion` support, zero external animation libraries
- **Accessibility** — semantic HTML, focus-visible rings, aria labels
- **Design System** — centralized primitives (Button, Card, Container, SectionHeading) with consistent brand styling

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
