# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Static export to /out (for GitHub Pages)
npm run lint     # Run ESLint
```

> `next build` uses `output: 'export'` — produces a static site in `/out/`, not a Node.js server. `next start` is unused.

## Deployment

The site deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. The build output goes to `/out/`. `images.unoptimized: true` is required for static export.

## Architecture

Single-page landing site in Spanish for Asis24/7 (24/7 roadside assistance). One route: `/` (`app/page.tsx`) that composes section components in order: Hero → Services → Contact → FloatingCTA → Footer.

**Stack**: Next.js 16 App Router · TypeScript · Tailwind CSS v4 · shadcn/ui (style: `new-york`, base: `neutral`) · Radix UI primitives

**Key files**:
- `app/globals.css` — CSS custom properties for colors/theme (primary blue: `#0a7dbc`)
- `components/ui/` — shadcn/ui components (add more with `npx shadcn@latest add <component>`)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `components.json` — shadcn/ui config

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |

Set in `.env.local` locally; in GitHub Actions via `secrets.GA_MEASUREMENT_ID`.

## Content Locations

Phone numbers appear in: `hero.tsx`, `contact.tsx`, `floating-cta.tsx`, `footer.tsx`.
Services data is in `components/services.tsx`.
Theme colors are CSS variables in `app/globals.css`.
