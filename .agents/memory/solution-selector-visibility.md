---
name: Solution selector visibility
description: User requirement for synchronizing the horizontal solution selector with the large preview card.
---

The horizontal solution selector must automatically keep the option matching the large preview card visible, including during autoplay and arrow navigation. Preserve manual scrolling, dragging, and click selection.

**Why:** The user repeatedly clarified that the matching small option was offscreen; changing the large card on drag alone did not meet their request.

**How to apply:** Treat keeping the active option visible as part of carousel synchronization, not just applying its selected styling. Preserve top clearance for the raised active tile and respect reduced-motion preferences.
