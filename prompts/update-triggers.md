# Update Triggers — Nova Public Notices Portal

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `update triggers`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Update `/prompts/prompt-triggers.md` with all new prompts, verify trigger words are properly registered, check for circular references, and maintain an accurate trigger word registry.

**When to Use:** After creating new prompts, after archiving prompts, or monthly maintenance.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Section 17 (Reporting, tasks, docs, and prompts)

---

## Workflow Steps

### Step 1: Scan All Prompts

Read all prompt files in `/prompts/`:

```bash
read: /prompts/
```

For each `.md` file:
1. Extract file name
2. Extract trigger word from metadata (if exists)
3. Extract purpose/objective
4. Extract type (Audit / Maintenance / Utility)
5. Extract status (Active / Deprecated)
6. Note related prompts referenced

### Step 2: Check for Missing Trigger Words

**Identify prompts without trigger words:**

For each prompt file:
- Does it have `**Trigger Word:**` in metadata?
- If no, should it have one?
- If general/reusable, it needs a trigger word
- If archived/specific, it may not need one

**Prompts that should have triggers:**
- All audit prompts (audit-*)
- All archive prompts (archive-*)
- All utility prompts (cleanup, status, etc.)
- All maintenance prompts

**Prompts that may not need triggers:**
- One-time specific prompts
- Archived prompts (unless kept for reference)
- Internal/helper prompts

### Step 3: Verify No Duplicate Trigger Words

Check for duplicate triggers:

```typescript
const triggers = [
  { word: 'audit', file: 'orchestrator.md' },
  { word: 'audit locale', file: 'audit-locale.md' },
  ...
];

// Find duplicates
const duplicates = triggers.filter((t, i) => 
  triggers.findIndex(x => x.word === t.word) !== i
);
```

**If duplicates found:**
- Choose canonical trigger
- Update other prompt
- Or create distinct trigger words

### Step 4: Check for Circular References

**CRITICAL: Prevent circular references**

A circular reference occurs when:
- Prompt A references Prompt B for execution
- Prompt B references Prompt A for execution

**Example of circular reference (FORBIDDEN):**
```markdown
❌ BAD:
# audit-styling.md
Related: Run `audit-tokens` to check token usage

# audit-tokens.md
Related: Run `audit-styling` to check style compliance
```

**Allowed references:**
- Prompts can reference guidelines ✅
- Prompts can link to related prompts for documentation ✅
- Prompts cannot call other prompts for execution ❌
- Only orchestrator should orchestrate other prompts ✅

**Check for violations:**
```bash
file_search: "Run `" in /prompts/
file_search: "Execute:" in /prompts/
file_search: "Then run:" in /prompts/
```

Look for prompts instructing to run other prompts.

**Orchestrator exception:**
The `orchestrator.md` is the ONLY prompt allowed to call other prompts.

### Step 5: Categorize Prompts

Sort prompts into categories:

**Master Orchestrator:**
- `orchestrator.md` → `audit`

**Audit Prompts — Architecture:**
- `audit-locale.md` → `audit locale`
- `audit-routing.md` → `audit routing`
- `audit-data.md` → `audit data`

**Audit Prompts — Styling & Design:**
- `audit-styling.md` → `audit styling`
- `audit-css.md` → `audit css`
- `audit-tokens.md` → `audit tokens`
- `audit-phosphor.md` → `audit phosphor`

**Audit Prompts — Template Parts:**
- `audit-header.md` → `audit header`
- `audit-footer.md` → `audit footer`
- `audit-hero.md` → `audit hero`

**Audit Prompts — Accessibility:**
- `audit-accessibility.md` → `audit accessibility`
- `audit-a11y.md` → `audit a11y`

**Audit Prompts — Performance:**
- `audit-performance.md` → `audit performance`

**Archive Prompts:**
- `archive-prompts.md` → `archive prompts`
- `archive-reports.md` → `archive reports`
- `archive-tasks.md` → `archive tasks`
- `archive-guidelines.md` → `archive guidelines`

**Maintenance Prompts:**
- `migrate-icons.md` → `migrate icons`
- `cleanup.md` → `cleanup`
- `update-triggers.md` → `update triggers`

**Utility Prompts:**
- `process-reports.md` → `process reports`
- `status.md` → `status`
- `continue.md` → `continue`
- `data-expansion.md` → `data expansion`

### Step 6: Update prompt-triggers.md

Update `/prompts/prompt-triggers.md` with complete trigger registry:

**Structure:**
1. Master Orchestrator section
2. Audit Prompts (by category)
3. Archive Prompts
4. Maintenance Prompts
5. Utility Prompts
6. Nova-Specific Triggers
7. Related Documentation
8. Version History

**For each prompt, add:**
```markdown
| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `trigger word` | `/prompts/file.md` | Brief description |
```

### Step 7: Update Orchestrator

Check if `orchestrator.md` knows about new audit prompts:

**Add new audits to orchestrator execution order:**
```markdown
## Sub-Audit Prompts

### Required Sub-Audits

1. **Locale Architecture** → `/prompts/audit-locale.md`
2. **Data Model** → `/prompts/audit-data.md`
3. **Styling System** → `/prompts/audit-styling.md`
4. **CSS Architecture** → `/prompts/audit-css.md`
5. **CSS Tokens** → `/prompts/audit-tokens.md`
6. **Header Template Part** → `/prompts/audit-header.md`
7. **Footer Template Part** → `/prompts/audit-footer.md`
8. **Hero Template Part** → `/prompts/audit-hero.md`
9. **Phosphor Icons** → `/prompts/audit-phosphor.md`
10. **Accessibility** → `/prompts/audit-accessibility.md`
11. **Performance** → `/prompts/audit-performance.md`
12. **Routing** → `/prompts/audit-routing.md`
```

### Step 8: Check Guideline References

For each prompt, verify it references correct guidelines:

**Audit prompts should reference:**
- `/guidelines/Guidelines.md` (always)
- Specific guideline for audit topic
- Related guidelines if applicable

**Example:**
```markdown
# audit-styling.md
**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Sections 4.1, 4.2, 13
- `/guidelines/design-tokens/css-architecture.md` — BEM standards
- `/guidelines/design-tokens/colors.md` — Color system
```

**Check references are valid:**
- File path exists
- Section numbers are correct
- No broken links

### Step 9: Update Version Number

Update version in prompt-triggers.md:

```markdown
**Version:** 2.X.0  
**Last Updated:** YYYY-MM-DD  
**Status:** Active

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 2.3.0 | 2026-03-18 | Added 7 new prompts: archive-prompts, archive-reports, archive-tasks, archive-guidelines, audit-header, audit-footer, audit-hero, audit-phosphor, update-triggers |
| 2.2.0 | 2026-03-17 | Added ... |
| 2.1.0 | 2026-03-16 | Added migrate-icons |
| 2.0.0 | 2026-03-16 | Major expansion with 6 new prompts |
| 1.0.0 | 2026-03-16 | Initial trigger reference |
```

### Step 10: Generate Update Report

Save report to `/reports/YYYY-MM-DD-trigger-update.md`:

```markdown
# Trigger Registry Update Report

**Date:** YYYY-MM-DD  
**Operation:** update triggers  
**Status:** Complete

---

## Executive Summary

Updated prompt trigger registry. Added {N} new triggers, removed {N} deprecated triggers, fixed {N} circular references.

---

## New Triggers Added

| Trigger Word | Prompt File | Category |
|--------------|-------------|----------|
| `archive prompts` | `/prompts/archive-prompts.md` | Archive |
| `archive reports` | `/prompts/archive-reports.md` | Archive |
| `archive tasks` | `/prompts/archive-tasks.md` | Archive |
| `archive guidelines` | `/prompts/archive-guidelines.md` | Archive |
| `audit header` | `/prompts/audit-header.md` | Audit (Template Parts) |
| `audit footer` | `/prompts/audit-footer.md` | Audit (Template Parts) |
| `audit hero` | `/prompts/audit-hero.md` | Audit (Template Parts) |
| `audit phosphor` | `/prompts/audit-phosphor.md` | Audit (Icons) |
| `update triggers` | `/prompts/update-triggers.md` | Maintenance |

---

## Triggers Removed

| Trigger Word | Reason | Status |
|--------------|--------|--------|
| {trigger} | Archived | Moved to /prompts/archive/ |
| {trigger} | Deprecated | Superseded by {new-trigger} |

---

## Duplicate Triggers Fixed

| Trigger Word | Conflict | Resolution |
|--------------|----------|------------|
| {trigger} | Used by 2 prompts | Renamed to {new-trigger} |

---

## Circular References Check

**Status:** ✅ No circular references detected

**Method:**
1. Scanned all prompts for "Run `" and "Execute:" commands
2. Verified only orchestrator calls other prompts
3. Confirmed prompts only reference guidelines for standards

**Prompts checked:** {N}  
**Circular references found:** 0

---

## Orchestrator Updated

**New audits added to orchestrator.md:**
- audit-header.md
- audit-footer.md
- audit-hero.md
- audit-phosphor.md

**Execution order:** Updated to include template part audits after styling audits

---

## Guideline References Verified

**Prompts with guideline references:** {N}  
**Valid references:** {N}  
**Broken references:** {N}

**Broken references fixed:**
- {prompt} — Updated Guidelines.md section reference
- {prompt} — Added missing guideline reference

---

## Trigger Registry Statistics

**Total prompts:** {N}  
**Prompts with triggers:** {N}  
**Active triggers:** {N}  
**Archived triggers:** {N}

**By Category:**
- Master Orchestrator: 1
- Architecture Audits: {N}
- Styling Audits: {N}
- Template Part Audits: 3
- Accessibility Audits: {N}
- Performance Audits: {N}
- Archive Prompts: 4
- Maintenance Prompts: {N}
- Utility Prompts: {N}

---

## Files Modified

- `/prompts/prompt-triggers.md` — Updated with 9 new triggers
- `/prompts/orchestrator.md` — Added template part audits
- `/reports/YYYY-MM-DD-trigger-update.md` — This report

---

## Next Actions

1. Test new triggers work correctly
2. Update any prompts with broken guideline references
3. Archive any deprecated prompts
4. Next update: After next prompt creation or monthly maintenance

---

## Related Documentation

- **[prompt-triggers.md](../prompts/prompt-triggers.md)** — Updated trigger registry
- **[orchestrator.md](../prompts/orchestrator.md)** — Master orchestrator
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 17 (Prompts)

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | YYYY-MM-DD | Initial trigger registry update operation |
```

---

## Success Criteria

- [ ] All prompts in `/prompts/` scanned
- [ ] Missing trigger words identified
- [ ] Duplicate trigger words resolved
- [ ] Circular references checked (must be 0)
- [ ] Prompts categorized correctly
- [ ] `prompt-triggers.md` updated with all triggers
- [ ] `orchestrator.md` updated with new audits
- [ ] Guideline references verified
- [ ] Version number incremented
- [ ] Update report generated
- [ ] No broken links in documentation

---

## Circular Reference Rules

**✅ ALLOWED:**
```markdown
# audit-styling.md
**Related Documentation:**
- **[audit-tokens.md](./audit-tokens.md)** — Related token audit
```

**❌ FORBIDDEN:**
```markdown
# audit-styling.md
After this audit completes, run `audit tokens` to check token usage.
```

**✅ ALLOWED (orchestrator only):**
```markdown
# orchestrator.md
Execute in order:
1. Run audit-locale
2. Run audit-styling
3. Run audit-tokens
```

---

## Related Documentation

- **[prompt-triggers.md](./prompt-triggers.md)** — Trigger registry (will be updated)
- **[orchestrator.md](./orchestrator.md)** — Master orchestrator
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 17 (Prompts structure)
- **[archive-prompts.md](./archive-prompts.md)** — Archive prompts

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial update triggers prompt for Nova Public Notices Portal |
