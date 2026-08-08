This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About this build

An original enterprise-training landing page (App Router, TypeScript, Tailwind CSS v4), built as a scoped exercise: full landing page, nav + footer, mock API-backed lead capture, and deployment on Vercel. Live at https://enterprise-landing-ecru.vercel.app.

### Execution & UI quality

- 14 landing-page sections (hero, domain expertise, programs, segmentation, audience, process, approach, partners, testimonials, FAQ, lead form) plus nav and footer, all responsive from mobile to desktop.
- Fully responsive nav: link set at `lg`, collapsing to a hamburger menu with scroll-lock below it.
- Custom light/dark theme via CSS custom properties (`globals.css`), switching automatically with `prefers-color-scheme`.
- Original inline-SVG illustrations (hero graphic, program icons) instead of stock imagery, so there's nothing to license or misattribute.
- The "Approach" section uses a hand-built CSS 3D carousel (`perspective` + `rotateY`/`rotateX`) with a hover-to-pause interaction and a static list fallback below `md`, rather than a flat card grid.

### Code structure & readability

- `src/app` — routes and API handlers only (App Router `page.tsx`, `layout.tsx`, `api/*/route.ts`).
- `src/components` — one component per section, plus a `ui/` folder for cross-cutting primitives.
- `src/lib` — all copy/content as typed data (`Program`, `Testimonial`, `SegmentDimension`, etc.), kept separate from markup so content changes don't touch component logic.
- `npm run lint` passes with zero errors; `npm run build` compiles cleanly with no TypeScript errors.

### Component reusability

- `Section` (tone/eyebrow/title/description wrapper) is used by 12 of the page's sections — adding a new section is a matter of writing content + one component, not new layout code.
- `Button` (primary/secondary/ghost, renders as `<a>` or `<button>`) is shared across the nav, hero, lead form, and section CTAs.
- `ProgramCard`/`TestimonialCard` separate card presentation from the data arrays they render, so both are driven entirely by `src/lib`.

### Thought process & improvements

- Built section-by-section against the stated scope, then iterated based on feedback (mobile nav overflow, an inline-style/`:hover` cascade bug on the 3D carousel, alternating section tone/rhythm after new sections were inserted).
- Lead capture (`src/app/api/leads/route.ts`) validates server-side (required fields + email format) and stores submissions in memory — enough to satisfy the bonus API-storage requirement, but noted here as a known limitation: it resets on server restart/redeploy. A real deployment would swap the in-memory array for a database call without touching the form component.
- Deliberately did not reproduce a real company's name, branding, contact details, or client roster — those requests were declined in favor of original placeholder equivalents, since the brief asked for an inspired build, not a clone.

### Effective use of AI tools

- Built end-to-end with Claude Code: component scaffolding, Tailwind styling, the CSS 3D carousel, responsive nav fixes, and git/GitHub/Vercel operations were all done through iterative AI-assisted prompts and verified with real builds (`npm run build`, `npm run lint`) and live deploys after every change, rather than accepted unverified.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
