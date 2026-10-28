---
name: Reference mobile clipping
description: A confirmed mobile visual quirk in the original ScaleVAI homepage.
---

The supplied HTML's Intro clips paragraph and tile content horizontally at a 390px viewport. This was confirmed by rendering the original reference at the same viewport as the Next.js page.

**Why:** The user requires an identical copy and explicitly prohibits unapproved improvements. The clipping is in the reference, not a new porting defect.

**How to apply:** Do not silently change the Intro's grid sizing to remove this clipping during exact-copy phases. If the user asks for a responsive correction, change it then and update this note. Explicit requested behavior still takes priority over reference implementation quirks.
