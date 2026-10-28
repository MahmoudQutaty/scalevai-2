---
name: Settled visual verification
description: Preview screenshots can capture Reveal transitions and smooth anchor scrolling before they finish.
---

Do not treat blurred sections, apparently missing delayed cards, or an offset fixed navbar in a fresh anchor screenshot as proof of a product defect. Verify the settled layout before changing the application.

**Why:** Direct screenshots repeatedly captured the homepage during its one-second Reveal entrance and smooth fragment scroll. A temporary motionless inspection of the same page showed the complete cards and correct layout.

**How to apply:** Inspect the animation and scroll code first. If static layout remains unclear, use a temporary verification harness that disables entrance transitions and scrolls instantly to the target; remove it before delivery. Keep the actual application's reference animations unchanged.
