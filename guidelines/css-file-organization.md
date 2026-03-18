# CSS File Organization Standards

**Last Updated:** 2026-03-16  
**Status:** REQUIRED  
**Scope:** All CSS files in `/src/styles/` and component CSS files

---

## Purpose

This document defines mandatory standards for CSS file organization, size limits, and structure to maintain a clean, efficient, and scalable design system.

---

## File Size Limits

### Hard Limits

| File Type | Soft Limit | Hard Limit | Action Required |
|-----------|------------|------------|-----------------|
| **CSS Variables File** | 400 lines | 600 lines | Split into logical modules |
| **Utility Classes File** | 500 lines | 800 lines | Split by category |
| **Component CSS** | 200 lines | 400 lines | Break into sub-components |
| **Theme/Config Files** | 300 lines | 500 lines | Refactor into modules |

### Why These Limits?

**Maintainability:**
- Files under 400 lines are easy to scan and understand
- Reduces cognitive load when debugging
- Faster file search and navigation

**Performance:**
- Smaller files parse faster
- Better browser caching
- Easier to optimize and tree-shake

**Collaboration:**
- Reduces merge conflicts
- Clear separation of concerns
- Easier code reviews

---

## File Structure

### Required Directory Structure

```
/src/styles/
├── index.css              ← Main entry point (imports only, < 50 lines)
├── fonts.css              ← Font declarations (< 100 lines)
├── tailwind.css           ← Tailwind config (< 50 lines)
│
├── theme/                 ← Theme configuration
│   ├── variables.css      ← CSS custom properties (< 600 lines)
│   ├── dark-mode.css      ← Dark mode overrides (< 200 lines)
│   └── typography.css     ← Typography base styles (< 300 lines)
│
├── utilities/             ← Utility classes
│   ├── layout.css         ← Layout utilities (< 400 lines)
│   ├── components.css     ← Component utilities (< 500 lines)
│   └── helpers.css        ← Helper classes (< 300 lines)
│
└── base/                  ← Base/reset styles
    ├── reset.css          ← CSS reset (< 200 lines)
    └── global.css         ← Global styles (< 300 lines)
```

---

## File Naming Conventions

### CSS Files

**Pattern:** `kebab-case.css`

**Examples:**
- ✅ `theme-variables.css`
- ✅ `utility-classes.css`
- ✅ `component-patterns.css`
- ❌ `themeVariables.css` (camelCase not allowed)
- ❌ `THEME_VARS.css` (uppercase not allowed)

### Module Organization

**Single Responsibility:**
Each CSS file should have ONE clear purpose.

**Good Examples:**
```
theme-variables.css      ← ONLY CSS custom properties
utility-layout.css       ← ONLY layout utility classes
button-system.css        ← ONLY button-related styles
```

**Bad Examples:**
```
styles.css               ← Too generic, unclear purpose
helpers.css              ← Too broad, needs splitting
misc.css                 ← Catch-all files prohibited
```

---

## Variable Organization

### CSS Custom Properties Structure

**Group Related Variables Together:**

```css
:root {
  /* =================================================================
     Brand Colors
     ================================================================= */
  --nova-primary: #09082f;
  --nova-primary-hover: #1a1849;
  --nova-accent: #d70025;
  --nova-accent-hover: #b5001f;
  
  /* =================================================================
     Spacing Scale
     ================================================================= */
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  /* ... */
  
  /* =================================================================
     Typography
     ================================================================= */
  --font-family-body: "Lexend", system-ui, sans-serif;
  --font-family-heading: "Lexend", system-ui, sans-serif;
  /* ... */
}
```

**Rules:**
1. Use section headers (80 chars wide)
2. Group by logical category
3. Alphabetize within groups
4. Leave 1 blank line between groups
5. Max 50 variables per section

---

## Utility Class Organization

### Pattern: Category-Based Files

**Split by Functionality:**

```
utility-layout.css       ← Grid, flex, container classes
utility-spacing.css      ← Margin, padding utilities
utility-typography.css   ← Text, font utilities
utility-color.css        ← Color, background utilities
utility-interactive.css  ← Hover, focus, active states
```

### Within Each File

**Use BEM Naming:**

```css
/* utility-layout.css */

/* =================================================================
   Container System
   ================================================================= */
.wpn-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

/* =================================================================
   Hero Patterns
   ================================================================= */
.wpn-hero {
  background: linear-gradient(/*...*/);
  color: white;
  padding: var(--space-16) 0;
}

.wpn-hero__container {
  /* ... */
}

.wpn-hero__title {
  /* ... */
}
```

**Rules:**
1. Group related classes with section headers
2. BEM elements follow parent immediately
3. BEM modifiers after all elements
4. Document complex patterns with comments

---

## Component CSS Organization

### BEM Structure

**Pattern:** One file per component

**Example:** `AccountSidebar.css`

```css
/**
 * AccountSidebar Component — BEM CSS
 * Sidebar navigation for user account pages
 */

/* Block */
.wpn-account-sidebar {
  /* Base component styles */
}

/* Elements */
.wpn-account-sidebar__header {
  /* ... */
}

.wpn-account-sidebar__nav {
  /* ... */
}

.wpn-account-sidebar__link {
  /* ... */
}

.wpn-account-sidebar__icon {
  /* ... */
}

/* Modifiers */
.wpn-account-sidebar--collapsed {
  /* ... */
}

.wpn-account-sidebar__link--active {
  /* ... */
}

/* State Classes */
.wpn-account-sidebar.is-loading {
  /* ... */
}
```

**Rules:**
1. Block → Elements → Modifiers → State
2. Max 200 lines per component CSS file
3. If > 200 lines, split into sub-components
4. Use BEM consistently

---

## Import Order

### Main Entry Point (`index.css`)

**Strict Order:**

```css
/**
 * Nova Public Notices — Main Stylesheet Entry Point
 * Import order is critical — DO NOT REORDER
 */

/* 1. Third-party CSS */
@import "tailwindcss";

/* 2. Font Declarations */
@import "./fonts.css";

/* 3. Theme Variables */
@import "./theme/variables.css";
@import "./theme/dark-mode.css";
@import "./theme/typography.css";

/* 4. Base/Reset Styles */
@import "./base/reset.css";
@import "./base/global.css";

/* 5. Utility Classes */
@import "./utilities/layout.css";
@import "./utilities/components.css";
@import "./utilities/helpers.css";

/* 6. Component-specific imports happen in component files */
```

**Rules:**
1. Never import in wrong order
2. Document why order matters
3. Keep index.css under 50 lines
4. Only imports, no styles

---

## When to Split a File

### Trigger Points

**Automatic Split Required When:**

1. ✅ File exceeds hard limit (see table above)
2. ✅ File has 3+ distinct responsibilities
3. ✅ File has 5+ major section headers
4. ✅ Scrolling to find code takes > 5 seconds
5. ✅ Multiple team members editing same file

### How to Split

**Step 1: Identify Natural Boundaries**

Look for major section headers:

```css
/* ================================================================= */
```

These usually indicate split points.

**Step 2: Create New Files**

```
theme.css (1200 lines) →
  theme/variables.css (400 lines)
  theme/dark-mode.css (150 lines)
  utilities/layout.css (350 lines)
  utilities/components.css (300 lines)
```

**Step 3: Update Imports**

Update `index.css` to import new files in correct order.

**Step 4: Test**

Verify no visual regressions.

---

## Commenting Standards

### File Header

**Required for all CSS files:**

```css
/**
 * [File Name] — [Purpose]
 * 
 * [Brief description of what this file contains]
 * 
 * Dependencies:
 * - [List CSS variables or files this depends on]
 * 
 * Usage:
 * - [Brief usage notes if needed]
 * 
 * Last Updated: YYYY-MM-DD
 */
```

### Section Headers

**Major Sections (every 50-100 lines):**

```css
/* =================================================================
   Section Name
   ================================================================= */
```

**Minor Sections (every 10-20 lines):**

```css
/* Subsection Name */
```

### Inline Comments

**When to Comment:**

1. ✅ Complex calculations
2. ✅ Non-obvious browser fixes
3. ✅ Design system exceptions
4. ✅ Future refactoring notes

**Example:**

```css
.wpn-hero__title {
  /* Using calc to maintain 16:9 aspect ratio responsively */
  font-size: calc(var(--text-4xl) * 1.25);
  
  /* Safari flexbox fix - prevents text overflow */
  min-width: 0;
}
```

---

## Performance Guidelines

### CSS File Loading

**Critical CSS:**
- Inline in `<head>` if < 14KB
- Load async if > 14KB

**Non-Critical CSS:**
- Load after paint
- Use `media="print"` trick if needed

### Optimization

**Before Commit:**

1. ✅ Remove unused CSS
2. ✅ Combine duplicate selectors
3. ✅ Remove unnecessary nesting
4. ✅ Use shorthand properties where possible

**Example:**

```css
/* ❌ BAD - Verbose */
.wpn-button {
  padding-top: var(--space-2);
  padding-right: var(--space-4);
  padding-bottom: var(--space-2);
  padding-left: var(--space-4);
}

/* ✅ GOOD - Shorthand */
.wpn-button {
  padding: var(--space-2) var(--space-4);
}
```

---

## Linting Rules

### Automated Checks

**Required Linters:**

1. **Stylelint** — CSS syntax and best practices
2. **CSScomb** — Property ordering
3. **PurgeCSS** — Remove unused styles (production)

**Stylelint Config:**

```json
{
  "rules": {
    "max-nesting-depth": 3,
    "selector-max-id": 0,
    "declaration-no-important": true,
    "color-no-hex": true,
    "color-named": "never",
    "function-url-no-scheme-relative": true,
    "max-line-length": 120
  }
}
```

---

## Migration Strategy

### Converting Large Files

**Existing `theme.css` (980 lines) → Split Into:**

```
/src/styles/
├── theme.css                    ← Import hub (50 lines)
├── theme-variables.css          ← CSS custom properties (450 lines)
└── utility-classes.css          ← Utility patterns (530 lines)
```

**Steps:**

1. ✅ Create new empty files
2. ✅ Copy relevant sections from theme.css
3. ✅ Update imports in theme.css
4. ✅ Test thoroughly
5. ✅ Delete old content from theme.css
6. ✅ Commit with descriptive message

---

## Enforcement

### Code Review Checklist

**Before Approving PR:**

- [ ] No CSS file exceeds hard limit
- [ ] All files have clear single purpose
- [ ] Import order is correct
- [ ] Section headers present
- [ ] BEM naming followed (components)
- [ ] No hard-coded values (use variables)
- [ ] Comments present for complex code
- [ ] Stylelint passes

### Automated Checks

**CI/CD Pipeline Should:**

1. Run Stylelint
2. Check file sizes
3. Verify no hard-coded colors/values
4. Check import order
5. Fail build if violations found

---

## Examples

### Good File Organization

**Before (One Large File):**

```
theme.css (1500 lines) ❌
  - Variables (600 lines)
  - Dark mode (200 lines)
  - Utilities (500 lines)
  - Components (200 lines)
```

**After (Modular):**

```
index.css (45 lines) ✅
theme-variables.css (400 lines) ✅
theme-dark-mode.css (180 lines) ✅
utility-layout.css (350 lines) ✅
utility-components.css (280 lines) ✅
```

### Bad File Organization

```
❌ styles.css (2000 lines)
❌ misc.css (800 lines)
❌ helpers.css (600 lines)
❌ utils.css (450 lines)
```

**Problems:**
- Generic names
- Files too large
- Unclear purpose
- Hard to maintain

---

## Conclusion

**Key Principles:**

1. **Small Files** — Stay under 600 lines
2. **Single Responsibility** — One purpose per file
3. **Clear Naming** — No generic names
4. **Logical Organization** — Group related code
5. **Proper Imports** — Maintain correct order
6. **BEM Consistency** — Follow naming conventions
7. **Document Everything** — Headers and comments

**Benefits:**

- ✅ Easier maintenance
- ✅ Faster development
- ✅ Better performance
- ✅ Fewer conflicts
- ✅ Clearer purpose
- ✅ Scalable architecture

---

**Document Owner:** Design System Team  
**Review Frequency:** Quarterly  
**Next Review:** 2026-06-16
