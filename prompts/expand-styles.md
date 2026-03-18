# Expand Styles — Style Architecture Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand styles`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Analyze CSS/style architecture for compliance with WordPress-aligned structure, BEM methodology, and design system adherence. Recommend refactoring to align with `/styles/blocks/`, `/styles/patterns/`, `/styles/parts/`, `/styles/templates/` organization.

**Reference:** `/guidelines/wordpress-component-architecture.md`, `/guidelines/design-tokens/css-architecture.md`

---

## Scope

Analyzes:
- CSS file organization and structure
- BEM class name compliance
- CSS variable usage vs hardcoded values
- Inline style violations
- Style file locations (should match component structure)
- CSS import strategy
- Duplicate styles across files

---

## Analysis Areas

### 1. File Organization

**Check current structure:**
```
/src/styles/
  ├─ global.css         ← Global styles, should stay
  ├─ theme.css          ← Theme tokens, should stay
  ├─ *.css              ← Standalone CSS files, should be organized
  ├─ blocks/            ← Should exist for block styles
  ├─ patterns/          ← Should exist for pattern styles
  ├─ parts/             ← Should exist for template part styles
  └─ templates/         ← Should exist for template styles
```

**Expected structure:**
```
/src/styles/
  blocks/
    button.css
    card.css
    badge.css
    input.css
    ...
  patterns/
    heroes/
      hero-home.css
      hero-page-header.css
    cards/
      feature-card.css
      notice-card.css
    ...
  parts/
    header.css
    footer.css
    sidebar.css
    breadcrumbs.css
    ...
  templates/
    page-template.css
    archive-template.css
    single-template.css
    ...
  global.css
  theme.css
  theme-variables.css
```

### 2. BEM Class Name Compliance

**Scan all CSS files for:**
- ✅ Correct BEM: `.wpn-block__element--modifier`
- ❌ Non-BEM classes: `.myComponent`, `.someStyle`
- ❌ Utility classes for visual styling: `.text-red`, `.mt-4`
- ❌ Non-namespaced classes: `.button`, `.card`

**Expected patterns:**
```css
/* ✅ Correct BEM */
.wpn-button { }
.wpn-button__icon { }
.wpn-button--primary { }

/* ❌ Wrong - not BEM */
.button { }
.btn-primary { }
.buttonIcon { }

/* ❌ Wrong - utility classes for visual styling */
.text-red { }
.bg-blue { }
.mt-4 { }

/* ✅ Utility classes for layout OK */
.wpn-container { }
.wpn-grid { }
.wpn-flex { }
```

### 3. CSS Variable Usage

**Scan for hardcoded values:**

**Colors:**
```css
/* ❌ Hardcoded */
color: #09082f;
background-color: rgb(9, 8, 47);
border-color: #d70025;

/* ✅ Correct */
color: var(--nova-primary);
background-color: var(--nova-primary);
border-color: var(--nova-accent);
```

**Spacing:**
```css
/* ❌ Hardcoded */
padding: 16px;
margin: 24px;
gap: 8px;

/* ✅ Correct */
padding: var(--space-4);
margin: var(--space-6);
gap: var(--space-2);
```

**Typography:**
```css
/* ❌ Hardcoded */
font-family: 'Inter', sans-serif;
font-size: 16px;
line-height: 1.5;

/* ✅ Correct */
font-family: var(--font-body);
font-size: var(--text-base);
line-height: var(--leading-normal);
```

**Borders:**
```css
/* ❌ Hardcoded */
border-radius: 8px;
border-width: 1px;

/* ✅ Correct */
border-radius: var(--radius-md);
border-width: var(--border-width);
```

### 4. Inline Style Violations

**Scan React components for:**

```tsx
/* ❌ Inline styles for visual styling */
<div style={{ color: '#09082f' }}>
<button style={{ padding: '16px', backgroundColor: 'blue' }}>
<span style={{ fontSize: '18px' }}>

/* ✅ Allowed - truly dynamic values */
<div style={{ width: `${progress}%` }}>
<img style={{ aspectRatio: `${width}/${height}` }}>
```

**Generate list of files with violations:**
- File path
- Line number
- Inline style found
- Recommended fix

### 5. Style File Location Compliance

**Check that styles match component location:**

```
Component: /components/blocks/Button.tsx
Style:     /styles/blocks/button.css  ← ✅ Correct

Component: /components/patterns/heroes/HeroHome.tsx
Style:     /styles/patterns/heroes/hero-home.css  ← ✅ Correct

Component: /components/parts/Header.tsx
Style:     /styles/parts/header.css  ← ✅ Correct

Component: /components/Hero.tsx (should be in parts/)
Style:     /styles/Hero.css  ← ❌ Wrong location
```

### 6. Duplicate Styles

**Scan for:**
- Same class defined in multiple files
- Similar rulesets that could be extracted
- Repeated CSS patterns
- Unused CSS classes

---

## Report Format

Generate: `/reports/YYYY-MM-DD-style-recommendations.md`

```markdown
# Style Architecture Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**CSS Files Analyzed:** {number}  
**Components Analyzed:** {number}  
**Violations Found:** {number}  
**Refactoring Recommendations:** {number}

---

## Executive Summary

Analyzed style architecture and found {N} files needing reorganization, {N} BEM violations, {N} hardcoded value violations, and {N} inline style violations.

**Critical Issues:**
1. {N} CSS files in wrong location
2. {N} components use hardcoded colors instead of CSS variables
3. {N} components have inline styles
4. {N} classes don't follow BEM

**Top Priorities:**
1. Reorganize styles into blocks/, patterns/, parts/, templates/
2. Replace hardcoded colors with CSS variables
3. Remove inline styles
4. Apply BEM to non-compliant classes

---

## File Organization Issues

### Current Structure
```
/src/styles/
  hero.css            ← Should be in /styles/parts/hero.css
  notice-card.css     ← Should be in /styles/patterns/cards/notice-card.css
  category-card.css   ← Should be in /styles/patterns/cards/category-card.css
  home.css            ← Can stay (page-specific)
  global.css          ← OK
  theme.css           ← OK
```

### Recommended Structure
```
/src/styles/
  blocks/
    button.css
    card.css
    badge.css
  patterns/
    heroes/
      hero-home.css
      hero-page-header.css
    cards/
      notice-card.css
      category-card.css
  parts/
    header.css
    footer.css
    hero.css           ← Move here
  templates/
    page-template.css
    archive-template.css
  pages/
    home.css           ← Keep page-specific
  global.css
  theme.css
  theme-variables.css
```

### Migration Tasks

**Move files:**
- [ ] Move `/styles/hero.css` → `/styles/parts/hero.css`
- [ ] Move `/styles/notice-card.css` → `/styles/patterns/cards/notice-card.css`
- [ ] Move `/styles/category-card.css` → `/styles/patterns/cards/category-card.css`
- {List all files to move}

**Update imports:**
- [ ] Update component imports after file moves
- [ ] Update any CSS @import statements

---

## BEM Compliance Issues

### Non-BEM Classes Found

**File: `/styles/components.css`**
```css
/* ❌ Line 45 - Not BEM */
.button {
  /* ... */
}

/* Should be: */
.wpn-button {
  /* ... */
}
```

**File: `/styles/home.css`**
```css
/* ❌ Line 78 - Not BEM */
.feature {
  /* ... */
}

/* Should be: */
.wpn-feature-card {
  /* ... */
}
```

### Refactoring Tasks

- [ ] Rename `.button` to `.wpn-button` (affects {N} files)
- [ ] Rename `.card` to `.wpn-card` (affects {N} files)
- [ ] Add `.wpn-` namespace to all classes
- [ ] Convert camelCase to kebab-case
- [ ] Separate elements with `__`
- [ ] Separate modifiers with `--`

---

## CSS Variable Violations

### Hardcoded Colors

**Critical violations:**

**File: `/styles/notice-card.css`**
```css
/* ❌ Line 23 - Hardcoded color */
.notice-card {
  background-color: #09082f;
  color: #ffffff;
}

/* ✅ Should be: */
.wpn-notice-card {
  background-color: var(--nova-primary);
  color: white;
}
```

**File: `/styles/button.css`**
```css
/* ❌ Line 15 - Hardcoded colors */
.button-primary {
  background: #d70025;
  border-color: #d70025;
}

/* ✅ Should be: */
.wpn-button--primary {
  background: var(--nova-accent);
  border-color: var(--nova-accent);
}
```

**Total color violations:** {N}

### Hardcoded Spacing

**File: `/styles/components.css`**
```css
/* ❌ Line 56 - Hardcoded spacing */
.container {
  padding: 16px;
  gap: 24px;
}

/* ✅ Should be: */
.wpn-container {
  padding: var(--space-4);
  gap: var(--space-6);
}
```

**Total spacing violations:** {N}

### Hardcoded Typography

**File: `/styles/global.css`**
```css
/* ❌ Line 102 - Hardcoded font */
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}

/* ✅ Should be: */
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
}
```

**Total typography violations:** {N}

---

## Inline Style Violations

### Critical Inline Styles

**File: `/components/Hero.tsx`**
```tsx
/* ❌ Line 45 - Inline visual styles */
<div style={{ color: '#09082f', padding: '24px' }}>

/* ✅ Should be: */
<div className="wpn-hero__content">
```

**File: `/components/NoticeCard.tsx`**
```tsx
/* ❌ Line 78 - Inline visual styles */
<span style={{ backgroundColor: '#f0f0f0', padding: '4px 8px' }}>

/* ✅ Should be: */
<span className="wpn-badge wpn-badge--default">
```

**Total inline style violations:** {N}

---

## Duplicate Styles

### Duplicated Rulesets

**Found in multiple files:**

```css
/* Appears in 3 files: home.css, category.css, search.css */
.card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Recommendation:** Extract to `/styles/blocks/card.css` as `.wpn-card`

**Total duplicate patterns:** {N}

---

## Style Import Strategy

### Current Approach

**Component-level imports:**
```tsx
// /components/Hero.tsx
import './Hero.css';
```

**Global imports:**
```tsx
// /App.tsx
import '../styles/global.css';
import '../styles/components.css';
```

### Recommended Approach

**Option 1: Component-level imports (Recommended)**
```tsx
// /components/blocks/Button.tsx
import '../../styles/blocks/button.css';

export function Button(props) {
  // ...
}
```

**Benefit:** Better code splitting, lazy loading, clear dependencies

**Option 2: Centralized imports**
```css
/* /styles/blocks.css */
@import './blocks/button.css';
@import './blocks/card.css';
@import './blocks/badge.css';
```

```tsx
// /App.tsx
import '../styles/blocks.css';
import '../styles/patterns.css';
import '../styles/parts.css';
```

**Benefit:** Single import point, easier to manage load order

**Recommendation:** Use Option 1 for better code splitting

---

## Refactoring Roadmap

### Phase 1: File Organization (Week 1)
- [ ] Create `/styles/blocks/` directory
- [ ] Create `/styles/patterns/` directory
- [ ] Create `/styles/parts/` directory
- [ ] Create `/styles/templates/` directory
- [ ] Move style files to correct locations
- [ ] Update all imports

### Phase 2: BEM Refactoring (Week 2)
- [ ] Audit all class names
- [ ] Add `.wpn-` namespace to all classes
- [ ] Convert to BEM structure (block__element--modifier)
- [ ] Update all component className props
- [ ] Test for visual regressions

### Phase 3: CSS Variable Migration (Week 3)
- [ ] Replace all hardcoded colors with CSS variables
- [ ] Replace all hardcoded spacing with CSS variables
- [ ] Replace all hardcoded typography with CSS variables
- [ ] Replace all hardcoded borders/radii with CSS variables
- [ ] Test for visual regressions

### Phase 4: Inline Style Removal (Week 4)
- [ ] Identify all inline styles
- [ ] Create BEM classes for each pattern
- [ ] Replace inline styles with className
- [ ] Keep only truly dynamic inline styles (width based on data, etc.)
- [ ] Test for visual regressions

### Phase 5: Duplicate Style Elimination (Week 5)
- [ ] Identify all duplicate patterns
- [ ] Extract to reusable block/pattern classes
- [ ] Remove duplicates
- [ ] Update components to use shared classes

---

## CSS Variable Reference

### Available Design System Variables

**Colors:**
```css
--nova-primary: #09082f;
--nova-accent: #d70025;
--nova-base: #ffffff;
--nova-muted: #f5f5f5;
```

**Spacing:**
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
```

**Typography:**
```css
--font-heading: 'Lexend', sans-serif;
--font-body: 'Inter', sans-serif;
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
```

**Borders:**
```css
--border-width: 1px;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
```

---

## Next Steps

1. Review style recommendations
2. Create style directory structure
3. Begin file reorganization
4. Apply BEM refactoring
5. Migrate to CSS variables
6. Remove inline styles
7. Eliminate duplicates
8. Test visual consistency

---

## Related Documentation

- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — Component & style architecture
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM methodology
- **[colors.md](../guidelines/design-tokens/colors.md)** — Color system
- **[spacing.md](../guidelines/design-tokens/spacing.md)** — Spacing system
- **[typography.md](../guidelines/design-tokens/typography.md)** — Typography system
```

---

## Success Criteria

✅ All CSS files inventoried  
✅ File organization issues identified  
✅ BEM violations documented  
✅ CSS variable violations found  
✅ Inline style violations found  
✅ Duplicate styles identified  
✅ Refactoring roadmap created  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — Architecture guide
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM methodology
- **[expand-blocks.md](./expand-blocks.md)** — Block recommendations

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial style architecture expansion analysis prompt |
