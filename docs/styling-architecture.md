# Styling Architecture — Nova Public Notices

## Overview

Nova Public Notices uses a **100% CSS variable-based design system** with BEM methodology and zero hardcoded values.

## Core Principles

1. **All styling uses CSS variables** from `/src/styles/theme-variables.css`
2. **BEM methodology** for all component classes
3. **No inline styles** for visual properties
4. **No hardcoded values** in TSX/JSX
5. **Shared design tokens** across all components

---

## CSS Architecture

### Import Hierarchy

```
/src/styles/index.css (entry point)
├── fonts.css                   ← Font imports (Lexend)
├── tailwind.css                ← Tailwind v4 setup
├── theme.css                   ← Theme orchestration
│   ├── theme-variables.css     ← CSS custom properties (design tokens)
│   ├── utility-classes.css     ← Page-level utilities
│   └── global.css              ← Base elements, headings
├── layout-utilities.css        ← Layout patterns
├── forms.css                   ← Form controls
├── auth-pages.css              ← Auth page styles
├── submit-pages.css            ← Submission flow styles
└── search-results.css          ← Search/results styles
```

### Component-Specific Styles

Each page/component can import its own BEM-based stylesheet:

```typescript
// In component file
import "../../styles/category-archive.css";
import "../../styles/components.css";
```

---

## Design Token System

### Token Categories

All design tokens live in `/src/styles/theme-variables.css`:

#### 1. Brand Colors

```css
--nova-primary: #09082f;
--nova-primary-hover: #1a1849;
--nova-accent: #d70025;
--nova-accent-hover: #b5001f;
--nova-blue: #549CBE;
```

#### 2. Semantic Colors

```css
--background: rgba(255, 255, 255, 1.00);
--foreground: rgba(9, 9, 9, 1.00);
--card: rgba(255, 255, 255, 1.00);
--card-foreground: rgba(9, 9, 9, 1.00);
--primary: rgba(30, 106, 255, 1.00);
--primary-foreground: rgba(255, 255, 255, 1.00);
--muted: rgba(238, 238, 238, 1.00);
--muted-foreground: rgba(117, 117, 117, 1.00);
--border: rgba(220, 220, 220, 1.00);
--destructive: rgba(204, 0, 0, 1.00);
```

#### 3. Spacing Scale

```css
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
```

#### 4. Typography Scale

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-md: 17px;
--text-lg: 24px;
--text-xl: 32px;
--text-2xl: 40px;
--text-3xl: 48px;
--text-4xl: 60px;
```

#### 5. Font Weights

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 600;
--font-weight-extrabold: 700;
```

#### 6. Line Heights

```css
--line-height-tight: 1.15;
--line-height-snug: 1.3;
--line-height-normal: 1.5;
--line-height-relaxed: 1.7;
```

#### 7. Font Families

```css
--font-family-lexend: 'Lexend', sans-serif;
--font-family-heading: var(--font-family-lexend);
--font-family-body: var(--font-family-lexend);
--font-family-meta: var(--font-family-lexend);
```

#### 8. Heading Presets

```css
/* H1 - Page Title / Hero */
--heading-h1-size: var(--text-4xl);        /* 60px */
--heading-h1-weight: var(--font-weight-semibold);  /* 600 */
--heading-h1-line-height: var(--line-height-tight);

/* H2 - Section Title */
--heading-h2-size: var(--text-3xl);        /* 48px */
--heading-h2-weight: var(--font-weight-semibold);  /* 600 */
--heading-h2-line-height: var(--line-height-snug);

/* H3 - Subsection Title */
--heading-h3-size: var(--text-2xl);        /* 40px */
--heading-h3-weight: var(--font-weight-semibold);  /* 600 */
--heading-h3-line-height: var(--line-height-snug);
```

#### 9. Border Radius

```css
--radius: 4px;
--radius-button: 4px;
--radius-card: 8px;
--radius-xs: 2px;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-pill: 999px;
```

#### 10. Shadows

```css
--elevation-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--elevation-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--elevation-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--elevation-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

#### 11. Animation

```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;

--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

#### 12. Category Colors

```css
/* Tenders */
--category-tenders-bg: #dbeafe;
--category-tenders-fg: #1e40af;
--category-tenders-border: #93c5fd;

/* Estates */
--category-estates-bg: #f3e8ff;
--category-estates-fg: #6b21a8;
--category-estates-border: #d8b4fe;

/* 23 more categories... */
```

---

## BEM Methodology

### Naming Convention

```
.wpn-{block}[__{element}][--{modifier}]
```

**Prefix:** `wpn-` (WordPress Notices)

### Examples

```css
/* Block */
.wpn-notice-grid { }

/* Element */
.wpn-notice-grid__item { }
.wpn-notice-grid__title { }

/* Modifier */
.wpn-notice-grid--3-columns { }
.wpn-notice-grid__item--featured { }
```

### Real-World Example

```css
/* Hero Component */
.wpn-hero { }
.wpn-hero__container { }
.wpn-hero__breadcrumbs { }
.wpn-hero__content { }
.wpn-hero__title { }
.wpn-hero__description { }
.wpn-hero__actions { }

/* Hero Modifiers */
.wpn-hero--centered { }
.wpn-hero--minimal { }
.wpn-hero--with-stats { }
.wpn-hero--large { }
```

---

## Usage Rules

### ❌ NEVER Do This

```typescript
// DON'T: Hardcoded colors
<div style={{ color: '#09082f', backgroundColor: '#d70025' }}>

// DON'T: Hardcoded spacing
<div style={{ padding: '24px', gap: '16px' }}>

// DON'T: Hardcoded fonts
<h1 style={{ fontFamily: 'Lexend', fontSize: '60px' }}>

// DON'T: Hardcoded shadows
<div style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
```

### ✅ ALWAYS Do This

```css
/* DO: Use CSS variables in stylesheets */
.wpn-hero {
  color: var(--foreground);
  background-color: var(--background);
  padding: var(--space-6);
  gap: var(--space-4);
  font-family: var(--font-family-heading);
  font-size: var(--heading-h1-size);
  box-shadow: var(--elevation-md);
}
```

```typescript
// DO: Use BEM classes in components
<div className="wpn-hero wpn-hero--centered">
  <h1 className="wpn-hero__title">Title</h1>
</div>
```

---

## Typography System

### Heading Classes

```css
/* Predefined heading classes in global.css */
.wpn-heading-h1,
h1.wpn-heading {
  font-family: var(--font-family-heading);
  font-size: var(--heading-h1-size);
  font-weight: var(--heading-h1-weight);
  line-height: var(--heading-h1-line-height);
  color: var(--foreground);
}

.wpn-heading-h2,
h2.wpn-heading { /* ... */ }

.wpn-heading-h3,
h3.wpn-heading { /* ... */ }
```

### Heading Modifiers

```css
.wpn-heading--primary { color: var(--nova-primary); }
.wpn-heading--accent { color: var(--nova-accent); }
.wpn-heading--white { color: white; }
.wpn-heading--center { text-align: center; }
```

### Usage in Components

```tsx
<h1 className="wpn-heading-h1 wpn-heading--primary">
  Page Title
</h1>

<h2 className="wpn-heading-h2 wpn-heading--center">
  Section Title
</h2>
```

---

## Layout Patterns

### Gap-First Spacing

```css
/* ❌ NEVER use margin for layout */
.bad-layout {
  margin-bottom: 24px;
}

/* ✅ ALWAYS use gap or padding */
.good-layout {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
```

### Flexbox Grid System

```css
/* Responsive grid using flexbox */
.wpn-notice-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
}

.wpn-notice-grid__item {
  flex: 1 1 calc(33.333% - var(--space-6));
  min-width: 300px;
}
```

**NO CSS Grid** — use flexbox only (per guidelines).

---

## Component Styling Example

### Component File: NoticeCard.tsx

```typescript
import './notice-card.css';

export function NoticeCard({ notice }) {
  return (
    <article className="wpn-notice-card">
      <div className="wpn-notice-card__header">
        <span className="wpn-notice-card__category">
          {notice.category}
        </span>
        <span className="wpn-notice-card__date">
          {notice.date}
        </span>
      </div>
      <h3 className="wpn-notice-card__title">
        {notice.title}
      </h3>
      <p className="wpn-notice-card__excerpt">
        {notice.excerpt}
      </p>
    </article>
  );
}
```

### Stylesheet: notice-card.css

```css
.wpn-notice-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
  background-color: var(--card);
  border: 1px solid var(--border-color-light);
  border-radius: var(--radius-card);
  transition: all var(--duration-normal) var(--ease-out);
}

.wpn-notice-card:hover {
  border-color: var(--nova-primary);
  box-shadow: var(--elevation-md);
}

.wpn-notice-card__header {
  display: flex;
  justify-content: space-between;
  gap: var(--space-2);
}

.wpn-notice-card__category {
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--nova-accent);
  text-transform: uppercase;
}

.wpn-notice-card__date {
  font-size: var(--text-xs);
  color: var(--muted-foreground);
}

.wpn-notice-card__title {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--foreground);
}

.wpn-notice-card__excerpt {
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--muted-foreground);
}
```

**Notice:**
- ✅ All values use CSS variables
- ✅ BEM naming throughout
- ✅ No hardcoded values
- ✅ Semantic token names

---

## Responsive Design

### Breakpoints

```css
/* Mobile-first approach */

/* Base styles (320px+) */
.wpn-hero { padding: var(--space-6); }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .wpn-hero { padding: var(--space-8); }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .wpn-hero { padding: var(--space-12); }
}

/* Large Desktop (1440px+) */
@media (min-width: 1440px) {
  .wpn-hero { padding: var(--space-16); }
}
```

---

## Dark Mode Support

### Variable Overrides

```css
/* In theme-variables.css */

:root {
  --background: rgba(255, 255, 255, 1.00);
  --foreground: rgba(9, 9, 9, 1.00);
}

.dark {
  --background: rgba(9, 9, 9, 1.00);
  --foreground: rgba(255, 255, 255, 1.00);
}
```

Components automatically adapt when `.dark` class is applied to `<html>` or `<body>`.

---

## WordPress Alignment

### WordPress-Style Classes

```css
/* Layout */
.is-layout-constrained { }
.is-layout-flex { }

/* Colors */
.has-primary-color { }
.has-accent-background-color { }

/* Typography */
.has-small-font-size { }
.has-large-font-size { }
```

These match WordPress block editor conventions for easier migration.

---

## Adding New Design Tokens

### 1. Add to theme-variables.css

```css
:root {
  --new-token-name: value;
}
```

### 2. Document in Guidelines

Update `/guidelines/design-tokens/` documentation.

### 3. Use in Components

```css
.component {
  property: var(--new-token-name);
}
```

---

## Validation Checklist

Before committing component styles:

- [ ] All colors use CSS variables
- [ ] All spacing uses `--space-*` tokens
- [ ] All typography uses font/size/weight variables
- [ ] BEM naming convention followed
- [ ] No hardcoded pixel values
- [ ] No inline styles for visual properties
- [ ] Responsive breakpoints use media queries
- [ ] Gap/padding used instead of margin
- [ ] Component stylesheet created if needed

---

## Related Documentation

- [Design Tokens — Colors](/guidelines/design-tokens/colors.md)
- [Design Tokens — Typography](/guidelines/design-tokens/typography.md)
- [Design Tokens — Spacing](/guidelines/design-tokens/spacing.md)
- [CSS Architecture](/guidelines/design-tokens/css-architecture.md)
- [Quick Reference](/docs/quick-reference-category-system.md)

---

**Last Updated:** 2026-03-17  
**Design System:** CSS Variables + BEM  
**Font:** Lexend (single family)  
**Approach:** Mobile-first, gap-based, semantic
