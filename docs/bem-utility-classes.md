# BEM Utility Classes Reference

**Last Updated:** 2026-03-16  
**Status:** Active  
**Location:** `/src/styles/utility-classes.css`

---

## Overview

All utility classes in the Nova Public Notices project follow **BEM (Block Element Modifier)** naming conventions with a consistent `wpn-` prefix for new components and `wp-` prefix for legacy WordPress-aligned utilities.

---

## Naming Convention

### Pattern
```
.wpn-block__element--modifier
```

### Breakdown
- **Block:** `.wpn-category-card` — Standalone component
- **Element:** `.wpn-category-card__icon` — Part of the block
- **Modifier:** `.wpn-button--accent` — Variation of the block

---

## Border Utilities

### BEM Classes (Recommended)
```css
.wpn-border--primary      /* Nova primary color border */
.wpn-border--accent       /* Nova accent color border */
.wpn-border--default      /* Default gray border */
.wpn-border--light        /* Light gray border (#e5e7eb) */
.wpn-border--subtle       /* Very light gray border (#f3f4f6) */
```

### Card Border Modifiers
```css
.wpn-card--bordered       /* Standard card border with hover */
```

### Usage Example
```jsx
{/* Using modifier on an element */}
<div className="wpn-border--light">...</div>

{/* Card with standard border preset */}
<div className="wpn-card--bordered">...</div>
```

---

## Shadow Utilities

### BEM Classes (Recommended)
```css
.wpn-shadow--sm          /* Small shadow (elevation-sm) */
.wpn-shadow--md          /* Medium shadow (elevation-md) */
.wpn-shadow--lg          /* Large shadow (elevation-lg) */
.wpn-shadow--xl          /* Extra large shadow (elevation-xl) */
.wpn-shadow--hover       /* Hover state shadow */
```

### Card Shadow Modifiers
```css
.wpn-card--elevated      /* Border + small shadow with hover effect */
```

### Usage Example
```jsx
{/* Apply shadow modifier */}
<div className="wpn-shadow--md">...</div>

{/* Elevated card preset */}
<div className="wpn-card--elevated">...</div>
```

---

## Typography Utilities

### BEM Classes (Recommended)
```css
.wpn-text--primary       /* Nova primary color text */
.wpn-text--accent        /* Nova accent color text */
.wpn-text--muted         /* Muted foreground text */
.wpn-text--foreground    /* Standard foreground text */
```

### Usage Example
```jsx
<p className="wpn-text--primary">Important text</p>
<span className="wpn-text--muted">Helper text</span>
```

---

## Background Utilities

### BEM Classes (Recommended)
```css
.wpn-bg--primary         /* Nova primary background */
.wpn-bg--accent          /* Nova accent background */
.wpn-bg--card            /* Card background */
.wpn-bg--muted           /* Muted background */
```

### Usage Example
```jsx
<div className="wpn-bg--primary">...</div>
<section className="wpn-bg--muted">...</section>
```

---

## Button System

### Block
```css
.wpn-button              /* Base button block */
```

### Size Modifiers
```css
.wpn-button--sm          /* Small button */
.wpn-button--md          /* Medium button (default) */
.wpn-button--lg          /* Large button */
```

### Variant Modifiers
```css
.wpn-button--primary     /* Primary button (dark blue) */
.wpn-button--accent      /* Accent button (red) */
.wpn-button--outline     /* Outlined button */
.wpn-button--ghost       /* Ghost button (transparent) */
.wpn-button--white       /* White button */
```

### State Modifiers
```css
.wpn-button--disabled    /* Disabled state */
```

### Usage Example
```jsx
{/* Large accent button */}
<button className="wpn-button wpn-button--lg wpn-button--accent">
  Submit Notice
</button>

{/* Small outline button */}
<button className="wpn-button wpn-button--sm wpn-button--outline">
  Cancel
</button>
```

---

## Component Classes

### Category Card
```css
.wpn-category-card                  /* Block */
.wpn-category-card__icon            /* Element: Icon container */
.wpn-category-card__title           /* Element: Title text */
.wpn-category-card__count           /* Element: Notice count */
```

### Hero Section
```css
.wpn-hero                           /* Block */
.wpn-hero__container                /* Element: Container */
.wpn-hero__title                    /* Element: Title */
.wpn-hero__subtitle                 /* Element: Subtitle */
.wpn-hero__actions                  /* Element: Action buttons */
```

### Section Header
```css
.wpn-section-header                 /* Block */
.wpn-section-header__title          /* Element: Title */
.wpn-section-header__subtitle       /* Element: Subtitle */
```

### Feature Card
```css
.wpn-feature                        /* Block */
.wpn-feature__icon                  /* Element: Icon */
.wpn-feature__title                 /* Element: Title */
.wpn-feature__description           /* Element: Description */
```

### Step Card
```css
.wpn-step                           /* Block */
.wpn-step__icon                     /* Element: Icon circle */
.wpn-step__title                    /* Element: Step title */
.wpn-step__description              /* Element: Step description */
```

### CTA Section
```css
.wpn-cta-section                    /* Block */
.wpn-cta-section__container         /* Element: Container */
.wpn-cta-section__title             /* Element: Title */
.wpn-cta-section__description       /* Element: Description */
.wpn-cta-section__actions           /* Element: Action buttons */
```

---

## Link Utilities

### Modifiers
```css
.wpn-link--accent                   /* Accent colored link */
.wpn-link--primary                  /* Primary colored link */
```

### Usage Example
```jsx
<a href="/contact" className="wpn-link--accent">
  Contact Us
</a>
```

---

## Legacy WordPress Classes

These classes maintain backwards compatibility with existing WordPress patterns but should be avoided in new code. Use BEM classes instead.

### Typography
```css
.wp-text-primary        → Use: .wpn-text--primary
.wp-text-accent         → Use: .wpn-text--accent
.wp-text-muted          → Use: .wpn-text--muted
```

### Backgrounds
```css
.wp-bg-primary          → Use: .wpn-bg--primary
.wp-bg-accent           → Use: .wpn-bg--accent
.wp-bg-card             → Use: .wpn-bg--card
.wp-bg-muted            → Use: .wpn-bg--muted
```

### Buttons
```css
.wp-btn                 → Use: .wpn-button
.wp-btn-accent          → Use: .wpn-button--accent
.wp-btn-primary         → Use: .wpn-button--primary
```

---

## Combining Utilities

You can combine multiple utility classes for complex styling:

```jsx
{/* Card with custom border and shadow */}
<div className="wpn-card--bordered wpn-shadow--md wpn-bg--card">
  <h3 className="wpn-text--primary">Title</h3>
  <p className="wpn-text--muted">Description</p>
</div>

{/* Button with size and variant modifiers */}
<button className="wpn-button wpn-button--lg wpn-button--accent">
  Get Started
</button>
```

---

## CSS Variables Reference

All utilities use CSS custom properties from `theme-variables.css`:

### Border Variables
```css
--card-border-width: 1px
--card-border-color: var(--border-color-light)
--card-border-color-hover: var(--nova-primary)
--border-color-light: #e5e7eb
--border-color-subtle: #f3f4f6
```

### Shadow Variables
```css
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1)...
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)...
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)...
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)...
```

---

## Best Practices

### ✅ DO
- Use BEM naming with `wpn-` prefix for new components
- Follow the Block__Element--Modifier pattern
- Use CSS variables from `theme-variables.css`
- Combine utilities for complex styling
- Keep modifiers semantic (`--primary`, `--accent`, `--light`)

### ❌ DON'T
- Create new `wp-` prefixed classes (legacy only)
- Use inline styles for visual properties
- Hard-code colors, spacing, or shadows
- Mix BEM and non-BEM naming in the same component
- Create arbitrary utility names without modifiers

---

## Migration Path

When updating existing components:

1. **Identify** legacy classes (`.wp-*`)
2. **Replace** with BEM equivalents (`.wpn-*`)
3. **Test** visual consistency
4. **Document** any component-specific patterns

Example migration:
```jsx
{/* Before */}
<div className="wp-bg-primary">
  <h2 className="wp-text-accent">Title</h2>
</div>

{/* After */}
<div className="wpn-bg--primary">
  <h2 className="wpn-text--accent">Title</h2>
</div>
```

---

## Questions & Support

For questions about BEM naming or utility classes:
- Reference: `/guidelines/design-tokens/css-architecture.md`
- Variables: `/src/styles/theme-variables.css`
- Implementation: `/src/styles/utility-classes.css`
