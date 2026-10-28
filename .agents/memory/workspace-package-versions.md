---
name: Workspace package versions
description: Unversioned pnpm additions can select the workspace's preferred existing major rather than the newest API.
---

Check the version actually resolved by pnpm before using major-specific package APIs; an unversioned addition can reuse the workspace's preferred existing version.

**Why:** Adding the contact validator resolved the existing Zod major, not the newer major whose validation-option syntax was initially assumed. The type check caught the mismatch.

**How to apply:** Inspect the consuming package and resolved types after installation. Use that version's API rather than upgrading unrelated workspace packages merely to match an assumption.
