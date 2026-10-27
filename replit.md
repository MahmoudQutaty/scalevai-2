# ScaleVAI

Imported web project running as a React + Vite app in a pnpm workspace.

## Run & Operate

- Start the managed workflow `artifacts/scalevai: web` to view the app at `/`.
- `pnpm --filter @workspace/scalevai run typecheck` checks the web package.
- `pnpm run typecheck` checks the workspace.
- Vite builds require the managed workflow's `PORT` and `BASE_PATH` variables.
- No secrets, database, or API server are required by the imported frontend.

## Source and scope

- `artifacts/scalevai/src/app/page.tsx` preserves the imported homepage.
- `artifacts/scalevai/src/app/globals.css` preserves its Tailwind theme.
- `artifacts/scalevai/public/` contains the original public assets and favicon.
- `.migration-backup/` retains the original Next.js source and reference documents.
- The imported running app is the standard Next.js starter page. The ScaleVAI HTML in `.migration-backup/reference/` is reference material, not an implemented route. Migration preserves the running source rather than building that separate design.
- The API server, shared libraries, and mockup sandbox are pre-existing workspace scaffolding, not features of the imported app.

## Migration conventions

- Preserve the original page, links, metadata, and system-selected dark mode.
- Use standard images and Vite base-prefixed asset paths instead of Next.js image components.
- Load Geist and Geist Mono through Google Fonts instead of `next/font`.
- Use artifact-managed workflows; do not run a root-level `pnpm dev`.
