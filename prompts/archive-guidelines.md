# Archive Guidelines — Nova Public Notices Portal

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `archive guidelines`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Review all guideline files in `/guidelines/`, identify deprecated or superseded guidelines, consolidate overlapping content, and maintain an organized guidelines directory.

**When to Use:** Quarterly maintenance, after major guideline updates, or when guidelines directory becomes difficult to navigate.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Section 5 (Required root-level folders)
- `/guidelines/Guidelines.md` — Section 19 (Protected files and folders)

---

## Important Notes

⚠️ **Guidelines.md is protected** — Do not archive the main `/guidelines/Guidelines.md` file. This is the master governance document.

⚠️ **Careful with design-tokens/** — Design token guidelines are actively used. Only archive if truly deprecated.

---

## Workflow Steps

### Step 1: Scan All Guidelines

Read all files in `/guidelines/` directory:

1. List all `.md` files in `/guidelines/` and subdirectories
2. For each guideline, extract:
   - File name
   - Category (Architecture / Data / Design / Content / Process)
   - Status (Active / Deprecated / Superseded / Draft)
   - Parent guideline reference
   - Last updated date
   - Whether it's referenced by any prompts

### Step 2: Check Guideline References

Before archiving any guideline, check if it's referenced by:

1. **Other guidelines:**
   ```bash
   file_search: "{guideline-name}.md" in /guidelines/
   ```

2. **Prompt files:**
   ```bash
   file_search: "{guideline-name}.md" in /prompts/
   ```

3. **Documentation:**
   ```bash
   file_search: "{guideline-name}.md" in /docs/
   ```

**Rule:** Do not archive if actively referenced unless updating all references.

### Step 3: Categorize Guidelines

Sort guidelines into categories:

**Category A: Core & Active**
- Guidelines.md (master - never archive)
- Actively referenced guidelines
- Recently updated (< 90 days)
- Keep in main `/guidelines/` directory

**Category B: Deprecated**
- Outdated standards
- Superseded by newer guidelines
- No longer relevant to project
- Move to archive

**Category C: Superseded**
- Replaced by newer/consolidated guidelines
- Still valuable for historical reference
- Move to archive with superseded note

**Category D: Duplicates**
- Content covered in other guidelines
- Consolidate into primary guideline
- Archive duplicate

**Category E: Design Tokens**
- Special handling (see below)
- Generally keep unless truly deprecated
- Design token guidelines are foundational

### Step 4: Check for Overlap and Consolidation

Review guidelines for overlapping content:

1. **Identify similar topics:**
   - Multiple guidelines covering spacing
   - Multiple guidelines covering colors
   - Multiple guidelines covering forms

2. **Consolidate if appropriate:**
   - Merge related content into one guideline
   - Update cross-references
   - Archive superseded files

3. **Update parent Guidelines.md:**
   - Remove links to archived guidelines
   - Add links to consolidated guidelines

### Step 5: Create Archive Structure

Create archive directories:

```
/guidelines/
  archive/
    README.md              # Archive index
    2026/
      Q1/                 # January - March
        deprecated-guideline-1.md
        superseded-guideline-2.md
      Q2/                 # April - June
```

### Step 6: Archive Deprecated Guidelines

For each **Category B**, **Category C**, and **Category D** guideline:

1. **Add archive metadata to top of file:**
   ```markdown
   ---
   **ARCHIVED:** YYYY-MM-DD  
   **Status:** Deprecated / Superseded / Consolidated  
   **Reason:** {Brief explanation}  
   **Superseded By:** `/guidelines/{new-guideline}.md` (if applicable)  
   **Original Location:** `/guidelines/{filename}.md`
   ---
   ```

2. **Check all references:**
   - Search for links to this guideline
   - Update references to point to new guideline or archive location
   - Document in archive report

3. **Move to archive:**
   ```
   /guidelines/archive/{YYYY}/Q{N}/{filename}.md
   ```

4. **Update parent Guidelines.md:**
   - Remove from active guideline list
   - Add note about consolidation if applicable

### Step 7: Update Guidelines Index

Update main `/guidelines/Guidelines.md` Section 21:

```markdown
## 21) Guidelines and Prompts Structure

### Active Guidelines

* **[locale-architecture.md](./locale-architecture.md)** — Bilingual architecture standards
* **[data-model.md](./data-model.md)** — Notice data structure
* **[notice-fields-schema.md](./notice-fields-schema.md)** — Universal field schema
* **[design-tokens/](./design-tokens/)** — Complete design token system

### Archived Guidelines

* **[old-guideline.md](./archive/2026/Q1/old-guideline.md)** — Deprecated YYYY-MM-DD — Superseded by {new-guideline}
```

### Step 8: Update Archive Index

Create or update `/guidelines/archive/README.md`:

```markdown
# Guidelines Archive — Nova Public Notices Portal

Last Updated: YYYY-MM-DD

---

## Archive Purpose

Deprecated and superseded guidelines organized by year and quarter. Archive maintains historical standards for reference while keeping active guidelines directory manageable.

---

## 2026 Guideline Archives

### Q1 (January - March)

| Guideline | Archived Date | Reason | Superseded By |
|-----------|---------------|--------|---------------|
| old-spacing.md | 2026-03-18 | Consolidated | design-tokens/spacing.md |
| draft-forms.md | 2026-03-18 | Deprecated | design-tokens/forms.md |

**Quarter Notes:**
- Consolidated spacing guidelines into design tokens
- Merged form standards into unified guideline

### Q2 (April - June)

{Future quarters}

---

## Finding Archived Guidelines

**By Topic:**
- Design system → `design-`, `styling-`, `tokens-`
- Architecture → `architecture-`, `structure-`
- Content → `content-`, `copy-`, `bilingual-`
- Data → `data-`, `model-`, `schema-`

**By Status:**
- Deprecated → Guidelines that are no longer valid
- Superseded → Guidelines replaced by newer versions
- Consolidated → Guidelines merged into larger documents

---

## Active Guidelines

For current guidelines, see:
- **[Guidelines.md](../Guidelines.md)** — Master governance document
- **[design-tokens/](../design-tokens/)** — Design system standards
- **[locale-architecture.md](../locale-architecture.md)** — Bilingual architecture
- **[data-model.md](../data-model.md)** — Data structure

---

## Related Documentation

- **[Guidelines.md](../Guidelines.md)** — Master guideline
- **[/prompts/archive-guidelines.md](../../prompts/archive-guidelines.md)** — This prompt
```

### Step 9: Update All References

For each archived guideline:

1. **Search all prompts:**
   - Update references to point to new guideline or note deprecation
   - Remove references if no longer applicable

2. **Search all documentation:**
   - Update `/docs/` files that reference archived guidelines

3. **Update Guidelines.md:**
   - Remove from active list
   - Add to archived list with note

### Step 10: Generate Archive Report

Save report to `/reports/YYYY-MM-DD-guideline-archive.md`:

```markdown
# Guideline Archive Operation

**Date:** YYYY-MM-DD  
**Operation:** archive guidelines  
**Status:** Complete

---

## Executive Summary

Reviewed {N} guidelines. Kept {N} active guidelines, archived {N} deprecated/superseded guidelines, consolidated {N} overlapping guidelines.

---

## Guidelines Kept (Active)

| Guideline | Category | Last Updated | References |
|-----------|----------|--------------|------------|
| Guidelines.md | Master | YYYY-MM-DD | Protected |
| locale-architecture.md | Architecture | YYYY-MM-DD | 5 prompts |
| data-model.md | Data | YYYY-MM-DD | 3 prompts |
| design-tokens/spacing.md | Design | YYYY-MM-DD | 2 prompts |
| ... | ... | ... | ... |

---

## Guidelines Archived

| Guideline | Reason | Archived To | Superseded By |
|-----------|--------|-------------|---------------|
| old-spacing.md | Consolidated | /guidelines/archive/2026/Q1/ | design-tokens/spacing.md |
| draft-forms.md | Deprecated | /guidelines/archive/2026/Q1/ | design-tokens/forms.md |
| ... | ... | ... | ... |

---

## Guidelines Consolidated

**Spacing Guidelines:**
- Merged: `old-spacing.md` + `layout-spacing.md`
- Result: `design-tokens/spacing.md`
- Archived: Both originals

**Form Guidelines:**
- Merged: `draft-forms.md` + `input-standards.md`
- Result: `design-tokens/forms.md`
- Archived: Both originals

---

## References Updated

**Prompts Updated:**
- `/prompts/audit-styling.md` — Updated to reference new spacing guideline
- `/prompts/cleanup.md` — Updated form guideline reference
- ... 

**Documentation Updated:**
- `/docs/styling-architecture.md` — Updated guideline links
- ...

**Guidelines.md Updated:**
- Section 21 — Removed archived guidelines, added archive references

---

## Archive Statistics

- Guidelines reviewed: {N}
- Active guidelines: {N}
- Archived guidelines: {N}
- Consolidated guidelines: {N}
- References updated: {N}

---

## Active Guidelines Structure

```
/guidelines/
  Guidelines.md (master)
  locale-architecture.md
  data-model.md
  notice-fields-schema.md
  css-file-organization.md
  design-tokens/
    README.md
    animations.md
    borders.md
    buttons.md
    colors.md
    content-style.md
    css-architecture.md
    forms.md
    iconography.md
    light-dark-contexts.md
    light-dark-mode.md
    navigation.md
    page-headers.md
    radii.md
    responsive.md
    shadows.md
    spacing.md
    typography.md
  archive/
    README.md
    2026/Q1/...
```

---

## Archive Index Updated

- ✅ `/guidelines/archive/README.md` created/updated
- ✅ All archived guidelines have metadata
- ✅ Archive organized by YYYY/Q{N}
- ✅ Superseded guidelines linked to replacements

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Master guideline
- **[archive-prompts.md](./archive-prompts.md)** — Archive prompts

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | YYYY-MM-DD | Initial guideline archive operation |
```

---

## Archive Criteria

### Archive if:
- ✅ Guideline is deprecated
- ✅ Superseded by newer guideline
- ✅ Content consolidated into another guideline
- ✅ No longer referenced by prompts
- ✅ Standards changed significantly

### Keep if:
- ❌ Is Guidelines.md (protected)
- ❌ Actively referenced by prompts
- ❌ Updated within last 90 days
- ❌ Part of core design system (design-tokens/)
- ❌ Defines active project standards

### Consolidate if:
- ⚠️ Significant overlap with another guideline
- ⚠️ Can be merged without losing information
- ⚠️ Would simplify navigation
- ⚠️ Same topic, different perspectives

---

## Special Handling: Design Tokens Directory

**Default: Keep all design token guidelines**

The `/guidelines/design-tokens/` directory is foundational. Only archive design token guidelines if:

1. **Truly deprecated** (standard completely changed)
2. **Consolidated** (merged into another design token guideline)
3. **Superseded** (replaced by newer version)

**Do not archive just because:**
- Not recently updated (design tokens are stable)
- Few references (they're referenced by design system)
- Seems "minor" (all design tokens are important)

---

## Success Criteria

- [ ] All guidelines in `/guidelines/` reviewed
- [ ] Protected Guidelines.md not archived
- [ ] Deprecated guidelines archived to `/guidelines/archive/YYYY/Q{N}/`
- [ ] Archive index created/updated
- [ ] All references to archived guidelines updated
- [ ] Parent Guidelines.md updated
- [ ] Consolidated guidelines merged properly
- [ ] Archive operation report generated
- [ ] No broken links to archived guidelines

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Master governance (protected)
- **[archive-prompts.md](./archive-prompts.md)** — Archive prompts
- **[archive-reports.md](./archive-reports.md)** — Archive reports
- **[archive-tasks.md](./archive-tasks.md)** — Archive tasks

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial archive guidelines for Nova Public Notices Portal |
