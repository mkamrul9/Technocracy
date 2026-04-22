# Technocracy 2026 Website

One-page event website for Technocracy 2026 (ECE, RUET) built with Next.js App Router.

## Features

- Vibrant poster-inspired UI based on Technocracy branding
- Event sections for Code Kachal and HackSpark
- Registration links and rulebook links
- Timeline, venue, participant benefits, and FAQ
- Scroll reveal animation with reduced-motion support
- SEO-ready metadata, sitemap, robots, and social card image

## Tech Stack

- Next.js 16
- React 19
- App Router (src/app)
- CSS (custom tokens and components)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

### Vercel (recommended)

1. Import this repository into Vercel.
2. Framework preset: Next.js (auto-detected).
3. Deploy.

## SEO Notes

- Update `metadataBase` in src/app/layout.js to your final production domain.
- `sitemap.xml` and `robots.txt` are generated from:
	- src/app/sitemap.js
	- src/app/robots.js
- Social preview image is generated at src/app/opengraph-image.js

## Project Structure

- src/app/page.js: Main one-page content
- src/app/globals.css: Global styles and animation system
- src/components/ScrollReveal.jsx: IntersectionObserver reveal helper
