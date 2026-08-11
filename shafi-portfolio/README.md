# Shafi Portfolio — Next.js

Full-stack developer portfolio for Muhammed Shafi KT, built with Next.js 14 (App Router) + TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

Deploy straight to Vercel — `vercel` or push to a GitHub repo and import it in the Vercel dashboard.

## Before you go live

Open `lib/data.ts` and fill in:

- `profile.github` — your real GitHub profile URL
- `profile.linkedin` — your real LinkedIn profile URL

These currently point to `#` because the source resume only listed "GitHub" / "LinkedIn" as link labels — the underlying URLs weren't available.

## Editing content

Everything on the page — profile info, capability groups, project case studies, timeline — lives in `lib/data.ts`. Add a new project by pushing another object onto the `projects` array; the layout, gallery, and lightbox all work off that array automatically.

## Structure

```
app/            Next.js App Router entry (layout, page, global CSS)
components/     One component per section, mostly presentational
lib/data.ts     All portfolio content — the single source of truth
lib/hooks.ts    Shared scroll-reveal / reduced-motion hooks
public/assets/  Screenshots, portrait, resume PDF
```
