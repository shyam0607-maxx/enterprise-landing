# Accredited Enterprise

An original enterprise-training landing page built with Next.js (App Router) — landing page, nav + footer, and an API-backed lead capture form persisted to a real Postgres database.

- **Live deployment (Vercel):** https://enterprise-landing-ecru.vercel.app
- **GitHub repository:** https://github.com/shyam0607-maxx/enterprise-landing

## Setup instructions

Requires Node 20+.

```bash
git clone https://github.com/shyam0607-maxx/enterprise-landing.git
cd enterprise-landing
npm install
```

The lead capture API needs a Postgres connection string. Create `.env.local` in the project root:

```bash
POSTGRES_URL="postgres://user:password@host:port/database?sslmode=require"
```

Any Postgres instance works (Supabase, Neon, Vercel Postgres, local). The `leads` table is created automatically on first API call — no migration step needed.

```bash
npm run dev      # starts http://localhost:3000
npm run build    # production build
npm run lint     # eslint
npm run start    # serve the production build
```

Without `POSTGRES_URL` set, everything except the lead form's submit action still works (`/api/programs` doesn't need a database).

## Approach taken

- **Structure**: `src/app` holds only routes and API handlers (`page.tsx`, `layout.tsx`, `api/*/route.ts`). `src/components` has one component per landing-page section plus a `ui/` folder for cross-cutting primitives (`Section`, `Button`). `src/lib` holds all copy/content as typed data, kept separate from markup so content edits never touch component logic.
- **Reusability**: `Section` (eyebrow/title/description/tone wrapper) is used by 12 of the page's sections; `Button` (primary/secondary/ghost, renders as `<a>` or `<button>`) is shared across the nav, hero, lead form, and every section CTA. `ProgramCard`/`TestimonialCard` separate card presentation from the arrays they render.
- **Design**: custom light/dark theme via CSS custom properties (`globals.css`), switching with `prefers-color-scheme`. Original inline-SVG illustrations instead of stock photos, so there's nothing to license or misattribute. The "Approach" section uses a hand-built CSS 3D carousel (`perspective` + `rotateY`/`rotateX`, hover-to-pause, `prefers-reduced-motion`-aware) rather than a flat card grid.
- **Responsiveness**: nav collapses to a hamburger menu with scroll-lock below the `lg` breakpoint; every grid section drops to 1–2 columns on mobile; the 3D carousel falls back to a static stacked list below `md`, since a rotating ring isn't usable on touch.
- **API + persistence**: `/api/programs` (GET) and `/api/leads` (GET/POST) are Next.js Route Handlers. Lead submissions are validated server-side (required fields + email format) and written to a real Postgres `leads` table via a connection pool (`src/lib/db.ts`), with the schema created lazily on first query — no separate migration step.
- **Content boundaries**: this is an original build inspired by the enterprise-training category, not a clone. Requests to use a real company's name, branding, contact details, or client roster were declined in favor of original placeholder equivalents throughout.
- **Quality gates**: `npm run lint` passes with zero errors; `npm run build` compiles cleanly with no TypeScript errors; every change was verified with a real build and a live deploy before being called done, including a manual round-trip test against the production database (POST a lead, confirm it via GET, then clean up the test row).

## AI usage explanation

Built end-to-end with Claude Code, used for:

- Component and section scaffolding, Tailwind styling, and the design system (theme tokens, typography choices)
- The CSS 3D carousel implementation, including debugging a real cascade bug where an inline `style` animation was silently overriding a Tailwind `hover:` rule (inline styles always win over stylesheet rules regardless of specificity)
- Diagnosing and fixing an SSL handshake failure against Supabase's pooled Postgres endpoint (`pg` treating `sslmode=require` as `verify-full` and rejecting the cert chain)
- Git/GitHub/Vercel operations — repo creation, commits, and production deploys after every change
- Every AI-made change was verified before being reported as done: real `npm run build`/`npm run lint` runs, and for the database work, an actual POST/GET round-trip against the live production API rather than trusting the code to work unverified

## Improvements I would make with more time

- **Rate limit and spam-protect the lead form** — currently anyone can POST to `/api/leads` with no throttling or CAPTCHA.
- **Admin view for leads** — there's a `GET /api/leads`, but no authenticated UI to browse/export submissions; right now that requires a direct database query.
- **Automated tests** — no unit/integration tests exist yet (e.g. Playwright for the lead form flow, Vitest for the API route validation logic).
- **Accessibility pass** — the 3D carousel is readable to screen readers (content is in the DOM, not duplicated), but a full audit (focus order, ARIA on the mobile menu, color contrast in dark mode) hasn't been done.
- **Performance audit** — no Lighthouse/Core Web Vitals pass has been run; the hero SVG and font loading strategy could likely be tightened.
- **Content management** — program/testimonial/FAQ copy lives in typed TS files under `src/lib`; for a real product this would move to a lightweight CMS so non-engineers could edit copy without a deploy.
- **Connection pooling at scale** — the `pg` Pool is fine for this traffic level, but a higher-traffic deployment should route through Supabase's transaction pooler more deliberately or use an edge-friendly driver.
