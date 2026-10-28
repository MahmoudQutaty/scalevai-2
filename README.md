# ScaleVAI

Next.js App Router, strict TypeScript, Outfit via `next/font`, and CSS Modules.
The homepage follows the supplied ScaleVAI HTML reference. No Vite, Tailwind,
React Router, or separate API service is used by this product.

## Run

Use pnpm from the workspace root:

```sh
pnpm install
pnpm --filter @workspace/scalevai run dev
```

On Replit, use the existing **artifacts/scalevai: web** workflow. It supplies
`PORT`; Next binds to `0.0.0.0`, with 5000 as the fallback outside that workflow.
The app is mounted at `/`. Keep the preview-origin configuration in
`artifacts/scalevai/next.config.ts`.

```sh
pnpm --filter @workspace/scalevai run lint
pnpm --filter @workspace/scalevai run typecheck
pnpm --filter @workspace/scalevai run build
pnpm --filter @workspace/scalevai run start
```

Production runs `next start`, not a static export or SPA rewrite.

## Structure

```text
artifacts/scalevai/
  app/
    layout.tsx                 Shared Navbar, Footer, floating controls, skip link
    page.tsx                   Homepage section order
    {services,industries,about,partners,contact,careers}/page.tsx
    not-found.tsx              Shared-look 404
    api/contact/route.ts       POST-only validated demo endpoint
    icon.svg, manifest.ts      Brand icon and web manifest
  components/
    layout/                    Navigation, mega menus, drawer, footer, route shell
    sections/home/             Homepage sections and their CSS Modules
    ui/                        Button, SectionHeading, Slider, Tabs, Accordion,
                               BlueZone, Reveal, CountUp
  data/                        Approved marketing copy and typed data arrays
  hooks/                       Shared reduced-motion preference
  lib/                         Zod contact schema, metadata, slider calculations
  public/hero.mp4              Owner-supplied video; scene fallback if unavailable
  styles/                      tokens.css and small global/accessibility styles
.migration-backup/reference/   Original HTML and approved Word document
```

Other registered workspace artifacts are separate from ScaleVAI. This app
imports neither the API-server scaffold nor the canvas preview server.
Reference archives are retained for comparison, not used as application code.
Unused Next.js starter artwork has been removed. The remaining visible graphics
are inline SVG, CSS scenes, and the owner's video; there are no `<img>` elements.
Use `next/image` if adding raster images.

## Adding a section or data item

1. Put approved text in an appropriate typed `data/` file. Do not invent claims.
2. Add a focused component and adjacent CSS Module under `components/sections/home/`.
   Prefer Server Components; add `"use client"` only for browser state or events.
3. Reuse `SectionHeading`, `Button`, `Reveal`, and the shared `Slider` rather than
   duplicating them. Use `next/link` for internal navigation.
4. Insert the section in `app/page.tsx`. Blue-zone sections belong inside
   `BlueZone`; do not duplicate that background gradient.
5. Services and industries already drive their menus, footer lists, and
   homepage components from shared arrays. Add an item to those arrays using
   the existing type; the sliders derive their counts from the array.
6. Keep the reference's CSS values and reduced-motion handling. Check keyboard
   focus, phone widths, and lint/typecheck/build before delivery.

## Contact API and demo behavior

`POST /api/contact` accepts JSON:

```json
{
  "name": "Example User",
  "company": "Example Company",
  "email": "example@example.com",
  "phone": "",
  "interest": "A service",
  "message": "Please discuss this enquiry."
}
```

Name, email, interest, and message are required. Company and phone may be omitted
or blank. Interest must be exactly `A service`, `An industry`, or `Partnering`.
The shared Zod schema trims strings and limits lengths; invalid JSON or values
return HTTP 400 with `{ ok: false, error, fieldErrors? }`.
Request bodies over 32 KiB are rejected.

A valid request returns exactly:

```json
{ "ok": true, "delivered": false }
```

**Nothing is emailed, saved, or logged.** The user-approved success wording is
“Thanks, we have recorded your enquiry (demo).” It is a demo acknowledgement,
not confirmation of persistence or delivery. Fields remain in the current page
after submitting and after errors, but are not saved across reloads.

The form disables its fields while submitting, displays inline server errors,
retains data on a failed request, and times out after 15 seconds. The partner
button uses React state and refs to select `Partnering`, scroll to the form, and
focus the select.

Real delivery is deliberately a TODO in `app/api/contact/route.ts`. Before
enabling it, choose a provider, configure its integration/secrets, add spam and
rate-limit protection, handle provider failures, and only show delivered
wording after confirmed delivery. Do not silently turn this demo into storage.

## Environment variables

No user-supplied secrets or database are required for this demo.

| Variable | Current use |
| --- | --- |
| `PORT` | Supplied by the workflow; dev/start fallback is 5000 |
| `NODE_ENV` | Set by Next.js / production runner |
| `REPLIT_DEV_DOMAIN`, `REPLIT_DOMAINS` | Optional Replit-managed preview-origin allowlist inputs |
| `BASE_PATH` | Artifact routing metadata; this app is registered at `/` |

For future real email delivery, **not currently read or required**:

| Choice | Variables |
| --- | --- |
| Resend | `RESEND_API_KEY` |
| SMTP alternative | `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD` |
| Either option | `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` |

Never put credential values in this README or the repository. Canonical URLs,
`metadataBase`, and absolute social image URLs should be added only after the
actual published URL is known; no development hostname is used as a canonical.

## Reference differences and review

Intentional differences approved during the phased build:

- Phone Intro phrases fit one line from 320px instead of reproducing reference clipping.
- At 600px and below, Services cards are stacked: 56px bars and a 220px active card.
  Desktop and tablet keep their original horizontal presentation.
- IndustryTiles and Why cards use the requested one-column phone layout.
- “Challenges we hear every week” cards also use one column at 600px and below.
- OutcomeBanner has the same 26px rounding on all four corners instead of a
  diagonal cut. Phone industry showcase cards use compact spacing and smaller
  graphics to keep the full card easier to view without removing copy.
- The Outcome orb has an explicit width so it is visible; the original grid
  sizing could collapse it.
- Both carousels use one Slider with the requested 0.9-second transition,
  transparent edge mask, reduced-motion behavior, and consistent controls.
- Foundations grid sizing contains mobile content and keeps its next arrow visible.
- Functional accessibility and demo API behavior differ from the original
  static form: focus rings, skip link, semantic headings, keyboard controls,
  validation/errors/loading, and honest success text.
- Secondary routes are intentionally simple, not invented full content pages.

The original bright blue palette is preserved. A contrast check does not imply
WCAG conformance: white text against the brightest blue-zone stop can fall below
AA, particularly smaller text and translucent cards. Changing those approved
colors/backgrounds requires a separate visual decision; this is a known
reference limitation, not a claim that all contrast ratios pass.

Measured white-text ratios against opaque reference colors (before translucent
fills/text opacity, which can reduce them further):

| Background | Ratio | AA normal text |
| --- | --- | --- |
| `#030b1c` | 19.65:1 | Pass |
| `#0a3a9a` | 10.07:1 | Pass |
| `#2f78e0` | 4.30:1 | Below 4.5:1 |
| `#5b9bef` | 2.85:1 | Below 4.5:1 |
| `#0f62e8` | 5.34:1 | Pass |
| `#2a82ff` | 3.66:1 | Below 4.5:1 |
