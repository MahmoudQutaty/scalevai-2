---
name: Next.js preview origins
description: Origin matching for Next.js development connections behind Replit's proxy.
---

Check development connections using the user's actual preview origin, not just localhost. Next.js origin wildcards match a single DNS label: a wildcard for replit.dev does not cover a hostname nested under a cluster subdomain.

**Why:** The page and local screenshots worked while the user's live preview hot reload was rejected, because their preview hostname had an extra cluster label.

**How to apply:** When configuring or investigating Next.js preview access, allow the current development hostname explicitly and verify its WebSocket handshake through the shared proxy. Do not mistake a successful localhost screenshot for proof that the live preview's development connection works.
