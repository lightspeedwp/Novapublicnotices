# Audit Tokens — Design Token Compliance Audit

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `audit tokens`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Verify that ALL Nova Public Notices Portal UI uses CSS variables from `/src/styles/` for colors, spacing, typography, borders, and radius. Identify and fix any hard-coded values. Enforce font face compliance.

**When to Use:** After building new components/templates, or periodically to verify 100% design system compliance.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` (Sections 4.1, 4.2, 13.4 - Tokens)
- `/src/styles/theme.css` — Nova design tokens
- `/src/styles/global.css` — Global variable definitions

---

## Workflow Steps

### Step 1: Read Nova Token Definitions

1. **Read `/src/styles/theme.css`** for Nova brand tokens:
   ```css
   :root {
     /* Nova Brand Colors */
     --nova-primary: #09082f;
     --nova-accent: #d70025;
     
     /* Spacing System */
     --spacing-*: ...;
     
     /* Typography */
     --font-primary: ...;
     --font-secondary: ...;
     --text-*: ...;
     
     /* Borders & Radius */
     --radius*: ...;
     --border: ...;
   }
   ```

2. **Read `/src/styles/global.css`** for additional tokens

3. **Document all available tokens:**
   - Color variables
   - Spacing tokens
   - Font variables
   - Text size tokens
   - Border radius tokens
   - Border tokens

### Step 2: Scan for Hard-Coded Colors

**Nova Brand Color Violations:**

Search all `.tsx` files in `/src/app/` for:

1. **Nova primary color hard-coded:**
   ```bash
   grep -r "#09082f" src/app/
   grep -r "rgb(9, 8, 47)" src/app/
   ```

2. **Nova accent color hard-coded:**
   ```bash
   grep -r "#d70025" src/app/
   grep -r "rgb(215, 0, 37)" src/app/
   ```

3. **Any hex/rgb/hsl colors:**
   ```bash
   grep -r "style={{.*color:.*#" src/app/
   grep -r "style={{.*background:.*#" src/app/
   grep -r "className=.*bg-\[#" src/app/
   ```

**Should be:**
```tsx
// ❌ Wrong
<div style={{ color: '#09082f', background: '#d70025' }}>

// ✅ Correct
<div className="wp-text-primary wp-bg-accent">
// or
<div style={{ color: 'var(--nova-primary)', background: 'var(--nova-accent)' }}>
```

### Step 3: Scan for Hard-Coded Spacing

Search for raw pixel/rem values in style props:

```bash
# Padding violations
grep -r "style={{.*padding:.*px" src/app/
grep -r "style={{.*padding:.*rem" src/app/

# Margin violations
grep -r "style={{.*margin:.*px" src/app/

# Gap violations
grep -r "style={{.*gap:.*px" src/app/
```

**Should be:**
```tsx
// ❌ Wrong
<div style={{ padding: '16px', gap: '24px' }}>

// ✅ Correct
<div style={{ padding: 'var(--spacing-4)', gap: 'var(--spacing-6)' }}>
```

### Step 4: Scan for Hard-Coded Fonts

**Critical for Nova (per system context):**

Typography ONLY uses font faces defined in `/src/styles/fonts.css`

1. **Read fonts.css** to get defined font faces

2. **Search for font-family in style props:**
   ```bash
   grep -r "style={{.*fontFamily:" src/app/
   grep -r "font-\[" src/app/
   ```

3. **Violations:**
   ```tsx
   // ❌ Wrong
   <h1 style={{ fontFamily: 'Inter' }}>
   <h2 style={{ fontFamily: 'Lexend' }}>
   
   // ✅ Correct
   <h1 style={{ fontFamily: 'var(--font-primary)' }}>
   <h2 style={{ fontFamily: 'var(--font-secondary)' }}>
   ```

### Step 5: Scan for Hard-Coded Font Sizes

```bash
grep -r "style={{.*fontSize:.*px" src/app/
grep -r "style={{.*fontSize:.*rem" src/app/
grep -r "text-\[[0-9]" src/app/
```

**Should be:**
```tsx
// ❌ Wrong
<p style={{ fontSize: '16px' }}>
<h1 style={{ fontSize: '48px' }}>

// ✅ Correct
<p style={{ fontSize: 'var(--text-base)' }}>
<h1 style={{ fontSize: 'var(--text-4xl)' }}>
```

### Step 6: Scan for Hard-Coded Radius

```bash
grep -r "style={{.*borderRadius:.*px" src/app/
grep -r "rounded-\[" src/app/
```

**Should be:**
```tsx
// ❌ Wrong
<div style={{ borderRadius: '8px' }}>

// ✅ Correct
<div style={{ borderRadius: 'var(--radius-md)' }}>
```

### Step 7: Notice-Specific Token Usage

**Check Notice Components:**

1. **Notice Cards:**
   - `/src/app/components/NoticeCard.tsx`
   - Must use CSS variables for all styling
   - Category badges use token-based colors

2. **Category Badges:**
   - Different categories may need different colors
   - Colors must come from CSS variables, not hard-coded

3. **Search Filters:**
   - Filter buttons use token spacing
   - Active states use token colors

4. **Notice Grid:**
   - Grid gaps use spacing tokens
   - Card spacing uses tokens

### Step 8: Fix Violations

For each violation:

1. **Identify nearest matching CSS variable:**
   - Color: Find closest color token
   - Spacing: Map to spacing scale
   - Font: Use primary/secondary font variable
   - Size: Match to text size scale

2. **Replace hard-coded value:**
   - Update inline styles to use `var(--token-name)`
   - Or replace with semantic CSS class

3. **If no matching variable exists:**
   - Flag for review (do NOT create new tokens)
   - Document in report
   - May need to add to design system

### Step 9: Verify Font Face Compliance

**Per system context requirement:**

1. List all font-family references in codebase
2. Cross-reference with font faces defined in fonts.css
3. **Flag any fonts referenced but not defined**
4. **Flag any components not using CSS variables for fonts**

### Step 10: Report

Save report to `/reports/YYYY-MM-DD-token-compliance-audit.md`:

```markdown
# Token Compliance Audit — Nova Public Notices Portal

**Date:** YYYY-MM-DD  
**Design System:** Nova News Brand

---

## Executive Summary
{Compliance percentage and critical findings}

## CSS Variables Available
### Colors
- --nova-primary (#09082f)
- --nova-accent (#d70025)
- {list all color tokens}

### Spacing
- --spacing-*: {list scale}

### Typography
- --font-primary: {value}
- --font-secondary: {value}
- --text-*: {list scale}

### Borders & Radius
- --radius*: {list}
- --border: {list}

## Violations Found

### Hard-Coded Colors
- Total violations: {N}
- Files affected: {N}
- Most violations: {filename} ({N} instances)

#### Examples:
- `/src/app/pages/Home.tsx:45` — `color: '#09082f'` → should use `var(--nova-primary)`
- `/src/app/components/NoticeCard.tsx:78` — `background: '#d70025'` → should use `var(--nova-accent)`

### Hard-Coded Spacing
- Total violations: {N}
- Padding: {N}
- Margin: {N}
- Gap: {N}

### Hard-Coded Fonts
- Total violations: {N}
- Font family: {N}
- Font size: {N}

### Hard-Coded Radius
- Total violations: {N}

## Font Face Compliance
- Defined font faces: {list from fonts.css}
- Fonts referenced: {list from code}
- Undefined fonts used: {N}

## Component-Specific Issues

### Notice Components
- NoticeCard: {status}
- NoticeGrid: {status}
- SearchFilterBar: {status}
- CategoryBadge: {status}

## Fixes Applied
- [ ] Replaced {N} color violations
- [ ] Replaced {N} spacing violations
- [ ] Replaced {N} font violations
- [ ] Replaced {N} radius violations

## Remaining Issues
### Needs Design System Update
{Violations where no matching token exists}

### Manual Review Required
{Complex cases needing human decision}

## Compliance Score
- Before: {%}
- After: {%}
- Target: 100%
```

---

## Success Criteria

- [ ] Zero hard-coded hex/rgb/hsl color values
- [ ] Zero hard-coded px/rem spacing values
- [ ] Zero hard-coded font family names
- [ ] Zero hard-coded font sizes
- [ ] Zero hard-coded border radius values
- [ ] 100% font face compliance (only defined fonts used)
- [ ] All Notice components use CSS variables
- [ ] Report saved to `/reports/`

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Sections 4, 13.4
- **[audit-css.md](./audit-css.md)** — CSS architecture audit
- **[audit-styling.md](./audit-styling.md)** — Comprehensive styling audit
- **[orchestrator.md](./orchestrator.md)** — Parent audit

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial token compliance audit for Nova with font face enforcement |
