---
name: Mobile Intro sizing
description: The user's explicit correction to the reference's mobile Intro clipping.
---

The reference's mobile horizontal clipping is a bug, not a requirement. On phones every rotating Intro phrase, including "BUILD CUSTOM SOFTWARE", must fit on one line from 320px wide upward. Desktop must stay as is.

**Why:** The user explicitly corrected the earlier decision to preserve the clipping.

**How to apply:** Use phone-only responsive font sizing and grid containment. Do not wrap, remove, or truncate phrases, and do not change desktop typography to solve a phone-width issue.
