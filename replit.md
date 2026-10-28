# ScaleVAI

ScaleVAI's website uses Next.js App Router and strict TypeScript. Keep Next.js; do not migrate to Vite, React Router, or another framework.

## Run

- The app is in `artifacts/scalevai/`, served at `/`.
- Start the managed workflow `artifacts/scalevai: web`. It runs Next.js on `0.0.0.0` with the workflow's `PORT` (5000 fallback).
- `pnpm --filter @workspace/scalevai run lint`
- `pnpm --filter @workspace/scalevai run build`
- `pnpm --filter @workspace/scalevai run typecheck`
- Next.js is this product's only runtime. The shared API server and mockup sandbox are unused scaffold packages; leave their files intact and their workflows stopped.
- Production uses `next start`, not static Vite output or SPA rewrites.

## References

- `.migration-backup/reference/scalevai-home.html`: exact visual and interaction specification.
- `.migration-backup/reference/ScaleVAI Website Content.docx`: approved copy.
- The original imported Next.js source remains intact in `.migration-backup/`.
- `public/hero.mp4` is the user's own video; use the reference's animated scene fallback if unavailable.

## Required conventions

- Match the reference identically: layout, spacing, colors, Outfit via `next/font`, CSS values, breakpoints, timing, hover behavior, and interactions. Do not redesign, simplify, or invent copy, numbers, or claims.
- CSS Modules per component, shared `styles/tokens.css`, and a small `styles/globals.css`. No Tailwind.
- Use `next/link` for internal links and per-route metadata.
- Strict TypeScript; no `any`. Run lint and build after each phase.
- Respect reduced motion in CSS and JavaScript.
- One shared Slider for both carousels; one Button; one SectionHeading.
- Contact uses the Next.js POST `/api/contact` demo endpoint with Zod validation. It returns `{ ok: true, delivered: false }` and sends/stores/logs no enquiry data. Use the approved feedback “Thanks, we have recorded your enquiry (demo).” Never claim an email was sent.

## Approved phase boundaries

Build one phase at a time and stop for the user's visual check after each:
1. Tokens, fonts, layout shell, and Next.js runtime.
2. Navbar and Footer.
3. Hero.
4. Intro and stats.
5. Carousels.
6. Remaining sections.
7. Routes and polish.

Future folders: `components/layout`, `components/sections/home`, `components/ui`, `data`, `hooks`, `lib`, `types`. Do not build later phases before approval.
