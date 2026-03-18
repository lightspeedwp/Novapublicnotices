# Archive Prompts — Nova Public Notices Portal

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `archive prompts`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Review all prompt files in `/prompts/`, determine which are specific vs general, update general prompts to be generic and reusable with trigger words, and archive specific/completed prompts.

**When to Use:** After completing major features, at end of sprint, or when `/prompts/` directory becomes cluttered with single-use prompts.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Section 5 (Required root-level folders)
- `/guidelines/Guidelines.md` — Section 17 (Reporting, tasks, docs, and prompts)

---

## Workflow Steps

### Step 1: Scan All Prompts

Read all files in `/prompts/` directory:

1. List all `.md` files in `/prompts/`
2. For each file, extract:
   - File name
   - Trigger word (if exists)
   - Status (Active / Deprecated / One-time)
   - Purpose/objective
   - Whether it references specific pages/components or is general

### Step 2: Categorize Prompts

Sort prompts into categories:

**Category A: General & Reusable**
- Prompts that can be used repeatedly across different contexts
- Examples: `audit-locale.md`, `audit-styling.md`, `cleanup.md`
- Should have trigger words in `/prompts/prompt-triggers.md`
- Should be kept and maintained

**Category B: Specific & Completed**
- Prompts created for one-time tasks
- Examples: "migrate-specific-page.md", "fix-single-component.md"
- Should be archived after completion
- Should NOT clutter main `/prompts/` directory

**Category C: Specific & In Progress**
- Prompts for ongoing specific work
- Keep until work completes
- Then move to archive

**Category D: Deprecated**
- Outdated prompts that have been superseded
- Archive immediately
- Note superseding prompt in archive

### Step 3: Review General Prompts for Improvements

For each **Category A** prompt:

1. **Check if it has a trigger word:**
   - If no trigger word, add one
   - Update `/prompts/prompt-triggers.md`

2. **Check if it's generic enough:**
   - Remove hardcoded page names → use placeholders
   - Remove hardcoded component names → use examples
   - Remove hardcoded dates → use YYYY-MM-DD
   - Remove project-specific details that should be in guidelines

3. **Check guideline references:**
   - Ensure it references correct guidelines
   - Check for circular references
   - Verify guideline links work

4. **Check for duplicates:**
   - Compare with other prompts for overlap
   - Consolidate if necessary
   - Cross-reference related prompts

5. **Check format compliance:**
   - Has metadata header (Type, Version, Created, Status, Trigger Word)
   - Has Purpose section
   - Has Workflow Steps
   - Has Success Criteria
   - Has Related Documentation
   - Has Version History

### Step 4: Archive Specific Prompts

For each **Category B** and **Category D** prompt:

1. **Create archive directory if needed:**
   ```
   /prompts/archive/YYYY-MM/
   ```

2. **Move file to archive:**
   ```
   /prompts/archive/2026-03/specific-prompt.md
   ```

3. **Add archive metadata to file:**
   ```markdown
   **Archived:** YYYY-MM-DD  
   **Reason:** Completed / Superseded by {prompt} / One-time use  
   **Original Location:** `/prompts/specific-prompt.md`
   ```

4. **Update archive index:**
   Create or update `/prompts/archive/README.md`:
   ```markdown
   ## 2026-03 Archive
   
   - **specific-prompt.md** — Archived YYYY-MM-DD — Reason: Completed
   ```

### Step 5: Update Prompt Triggers Registry

Update `/prompts/prompt-triggers.md`:

1. **Add new trigger words** for general prompts that didn't have them
2. **Remove trigger words** for archived prompts
3. **Update prompt file paths** if any were renamed
4. **Add to appropriate category** (Audit / Utility / Archive / etc.)
5. **Update version number** in prompt-triggers.md

### Step 6: Generate Archive Report

Save report to `/reports/YYYY-MM-DD-prompt-archive.md`:

```markdown
# Prompt Archive Report

**Date:** YYYY-MM-DD  
**Archived By:** archive prompts trigger  
**Status:** Complete

---

## Executive Summary

Reviewed {N} prompts. Kept {N} general reusable prompts, archived {N} specific/completed prompts, updated {N} prompts for better reusability.

---

## Prompts Kept (General & Reusable)

| Prompt File | Trigger Word | Status | Notes |
|-------------|--------------|--------|-------|
| `audit-locale.md` | `audit locale` | Active | Updated guideline refs |
| `cleanup.md` | `cleanup` | Active | No changes needed |
| ... | ... | ... | ... |

---

## Prompts Archived

| Prompt File | Archived To | Reason |
|-------------|-------------|--------|
| `fix-contact-page.md` | `/prompts/archive/2026-03/` | Completed one-time fix |
| `migrate-old-icons.md` | `/prompts/archive/2026-03/` | Superseded by `migrate-icons.md` |
| ... | ... | ... |

---

## Prompts Updated

| Prompt File | Changes Made |
|-------------|--------------|
| `audit-data.md` | Added trigger word, made examples generic |
| `status.md` | Removed hardcoded project name, added placeholder |
| ... | ... |

---

## New Trigger Words Added

- `archive prompts` → `/prompts/archive-prompts.md`
- `archive reports` → `/prompts/archive-reports.md`
- `audit hero` → `/prompts/audit-hero.md`

---

## Circular Reference Check

**Status:** ✅ No circular references detected

All prompts reference guidelines only. No prompt references another prompt for execution (only for related documentation).

---

## Recommendations

### Immediate
1. {Action based on findings}

### Next Sprint
1. Review archived prompts quarterly
2. Consider creating additional general prompts for common tasks

---

## Files Modified

- `/prompts/prompt-triggers.md` — Updated trigger registry
- `/prompts/archive/README.md` — Created/updated archive index
- {List each updated prompt}

---

## Metrics

- Total prompts reviewed: {N}
- General prompts kept: {N}
- Specific prompts archived: {N}
- Prompts updated: {N}
- New trigger words added: {N}
- Circular references: {N} (should be 0)

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 17 (Prompts structure)
- **[prompt-triggers.md](./prompt-triggers.md)** — Trigger word registry

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | YYYY-MM-DD | Initial prompt archive operation |
```

---

## Archive Directory Structure

Create this structure in `/prompts/`:

```
/prompts/
  archive/
    README.md           # Archive index
    2026-01/           # January 2026 archive
      prompt-1.md
      prompt-2.md
    2026-02/           # February 2026 archive
      prompt-3.md
    2026-03/           # March 2026 archive
      prompt-4.md
```

---

## Prompt Evaluation Criteria

### Keep if:
- ✅ Can be used more than once
- ✅ Applies to multiple pages/components
- ✅ Defines a repeatable process
- ✅ Checks compliance with guidelines
- ✅ Has a clear trigger word
- ✅ Is actively maintained

### Archive if:
- ❌ Created for single page/component only
- ❌ Task is completed and won't repeat
- ❌ Has been superseded by another prompt
- ❌ Contains hardcoded specifics that can't be generalized
- ❌ Is deprecated or no longer relevant

---

## Making Prompts Generic — Examples

### Before (Too Specific):
```markdown
## Objective
Fix the Contact page styling to use CSS variables instead of inline styles.

## Steps
1. Open /src/app/pages/Contact.tsx
2. Replace style={{ color: '#09082f' }}
3. Add className="has-primary-color"
```

### After (Generic & Reusable):
```markdown
## Objective
Convert any page from inline styles to CSS variables and semantic classes.

## Steps
1. Identify target file: `/src/app/pages/{PageName}.tsx`
2. Scan for inline styles: `style={{ ... }}`
3. Replace with semantic classes from design system
4. Example: `style={{ color: '#09082f' }}` → `className="has-primary-color"`
```

---

## Success Criteria

- [ ] All prompts in `/prompts/` reviewed
- [ ] General prompts updated and improved
- [ ] Specific prompts archived to `/prompts/archive/YYYY-MM/`
- [ ] Trigger words added for all general prompts
- [ ] `/prompts/prompt-triggers.md` updated
- [ ] Archive report generated
- [ ] No circular references between prompts
- [ ] Archive index created/updated
- [ ] All kept prompts have trigger words
- [ ] All archived prompts have archive metadata

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards
- **[prompt-triggers.md](./prompt-triggers.md)** — Trigger word registry
- **[archive-reports.md](./archive-reports.md)** — Archive reports prompt
- **[archive-tasks.md](./archive-tasks.md)** — Archive tasks prompt

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial archive prompts for Nova Public Notices Portal |
