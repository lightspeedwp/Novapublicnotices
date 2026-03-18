# Audit CSS — CSS Architecture & Design System Compliance

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `audit css`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Audit CSS file organization, imports, and compliance with Nova design system. Find broken imports, orphaned files, oversized files, duplicate rules, verify CSS variables usage, and ensure no Tailwind utility classes.

**When to Use:** After CSS refactoring, adding new styles, or periodically to verify architecture integrity.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` (Sections 4.1, 4.2, 13 - Styling rules)
- `/src/styles/theme.css` — Design tokens
- `/src/styles/global.css` — Global styles

---

## Workflow Steps

### Step 1: CSS Variable Inventory

**Read Nova Design System Variables:**

1. Read `/src/styles/theme.css` for defined CSS variables
2. Read `/src/styles/global.css` for additional tokens
3. Document all available:
   - Colors: `--nova-primary`, `--nova-accent`, etc.
   - Spacing: `--spacing-*`
   - Typography: `--font-*`, `--text-*`
   - Borders: `--border`, `--radius*`

### Step 2: Import Chain Verification

1. **Read main entrypoint:** `/src/styles/global.css` or `/src/main.tsx`
2. **Follow import chain:** Verify every `@import` resolves to existing file
3. **Check imports:**
   ```css
   @import './theme.css';
   @import './fonts.css';
   @import './components.css';
   ```
4. List all broken imports

### Step 3: Orphaned CSS Files

1. List all `.css` files in `/src/styles/`
2. For each file, verify it's imported by main CSS or another imported file
3. **Protected files (never orphaned):**
   - `theme.css` — Design tokens
   - `global.css` — Global styles
   - `fonts.css` — Font faces
4. Flag files with zero importers as orphaned

### Step 4: File Size Check

Per Guidelines.md Section 16:

1. Check all CSS files against 400-line limit
2. **Flag oversized files:**
   - `theme.css` if > 400 lines
   - `global.css` if > 400 lines
   - Any component CSS file > 400 lines

3. **Suggest splits:**
   - Split theme.css into:
     - `theme-colors.css`
     - `theme-typography.css`
     - `theme-spacing.css`
   - Split component styles by feature area

### Step 5: WordPress Class Convention Check

**Nova-Specific Rules:**

1. **Search for `.wp-*` classes:**
   - All custom utility classes must use `.wp-` prefix
   - Examples: `.wp-btn-accent`, `.wp-text-primary`, `.wp-bg-primary`

2. **Identify non-compliant classes:**
   ```css
   /* ❌ Wrong */
   .btn-accent { ... }
   .text-primary { ... }
   
   /* ✅ Correct */
   .wp-btn-accent { ... }
   .wp-text-primary { ... }
   ```

### Step 6: Tailwind Utility Class Detection

**Critical Check:**

Search all `.tsx` files for prohibited Tailwind classes:

```bash
# Search for common Tailwind utilities
grep -r "className=.*flex " src/app/
grep -r "className=.*gap-[0-9]" src/app/
grep -r "className=.*text-center" src/app/
grep -r "className=.*bg-" src/app/
```

**Per Guidelines.md Section 13.2:**
- Tailwind utilities are FORBIDDEN
- Use semantic CSS classes instead
- Layout may use structural classes, but should prefer CSS

### Step 7: Hard-Coded Value Detection

Search CSS files for values that should use CSS variables:

1. **Colors:**
   ```css
   /* ❌ Wrong */
   color: #09082f;
   background: #d70025;
   
   /* ✅ Correct */
   color: var(--nova-primary);
   background: var(--nova-accent);
   ```

2. **Spacing:**
   ```css
   /* ❌ Wrong */
   padding: 16px;
   gap: 24px;
   
   /* ✅ Correct */
   padding: var(--spacing-4);
   gap: var(--spacing-6);
   ```

3. **Typography:**
   ```css
   /* ❌ Wrong */
   font-family: 'Inter', sans-serif;
   font-size: 18px;
   
   /* ✅ Correct */
   font-family: var(--font-body);
   font-size: var(--text-lg);
   ```

### Step 8: Duplicate Rule Detection

1. **Check for duplicate selectors:**
   - Same selector defined in multiple files
   - Conflicting rules for same element

2. **Notice-specific checks:**
   - `.notice-card` styles duplicated across files
   - Button styles redefined instead of using base classes
   - Category badge styles duplicated

3. **Consolidation opportunities:**
   - Move duplicate rules to base file
   - Create shared component classes

### Step 9: Font Face Verification

**Critical for Nova:**

1. Read `/src/styles/fonts.css` for defined font faces
2. **Verify ONLY defined fonts are referenced in CSS:**
   - Check what fonts are defined in @font-face declarations
   - Ensure no CSS references fonts not defined
   - All font-family uses `var(--font-*)` variables

3. **Per system context:** Typography ONLY uses font faces defined in CSS

### Step 10: Fix and Report

1. **Auto-fix where safe:**
   - Fix broken imports
   - Delete confirmed orphaned files (not protected)
   - Replace hard-coded values with CSS variables
   - Add `.wp-` prefix to non-compliant classes

2. **Save report** to `/reports/YYYY-MM-DD-css-audit.md`:

```markdown
# CSS Architecture Audit — Nova Public Notices Portal

**Date:** YYYY-MM-DD

---

## Executive Summary
{Overall CSS health}

## CSS Variable Compliance
- Total CSS variables defined: {N}
- Hard-coded colors found: {N}
- Hard-coded spacing found: {N}
- Hard-coded fonts found: {N}

## Import Chain
- Total CSS files: {N}
- Broken imports: {N}
- Orphaned files: {N}

## File Sizes
- Files over 400 lines: {N}
- Largest file: {filename} ({N} lines)

## WordPress Classes
- Total custom classes: {N}
- Non-.wp-* classes: {N}
- Compliance: {%}

## Tailwind Detection
- .tsx files scanned: {N}
- Tailwind utilities found: {N}
- Files with violations: {list}

## Font Face Compliance
- Defined font faces: {list}
- Undefined fonts referenced: {N}

## Duplicate Rules
- Duplicate selectors: {N}
- Consolidation opportunities: {N}

## Fixes Applied
- [ ] Fixed broken imports
- [ ] Deleted orphaned files
- [ ] Replaced hard-coded values
- [ ] Added .wp- prefixes
- [ ] Removed Tailwind utilities

## Remaining Issues
### P1 (Blocking)
{Critical CSS issues}

### P2 (Important)
{Should fix soon}

### P3 (Optimization)
{Nice to have}
```

---

## Success Criteria

- [ ] Zero broken CSS imports
- [ ] Zero orphaned CSS files (or justified exceptions)
- [ ] All CSS files under 400 lines
- [ ] Zero Tailwind utility classes in `.tsx` files
- [ ] All custom classes use `.wp-*` prefix
- [ ] All colors use CSS variables
- [ ] All spacing uses CSS tokens
- [ ] All fonts use defined font faces only
- [ ] Report saved to `/reports/`

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Sections 4, 13 (Styling rules)
- **[audit-styling.md](./audit-styling.md)** — Related styling audit
- **[audit-tokens.md](./audit-tokens.md)** — CSS variable compliance
- **[orchestrator.md](./orchestrator.md)** — Parent audit

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial CSS audit for Nova Public Notices Portal with design system compliance |
