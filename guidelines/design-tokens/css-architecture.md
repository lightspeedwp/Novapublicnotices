# CSS Architecture — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

This guideline defines the CSS architecture and styling principles for the Nova Public Notices prototype, ensuring consistency, maintainability, and WordPress alignment.

---

## First Principles

- Use the existing token layer in `src/styles/theme.css` as the foundation
- Extend tokens in CSS, not in TSX
- Do not use inline styles for visual presentation
- Do not use arbitrary hex colours in TSX
- Do not use Tailwind utility sprawl for final custom styling
- Use BEM naming for all custom CSS
- Prefer separate CSS files for pages and major components
- Use semantic helper classes and WordPress-aligned naming where useful

---

## Required Styling Architecture

Keep or move styling into this shape:

- `src/styles/theme.css` — global tokens and semantic helper classes
- `src/styles/base.css` — reset and global base rules
- `src/app/components/<component>/<component>.css` — component CSS using BEM
- `src/app/pages/<page>/<page>.css` — page CSS using BEM

---

## Token Rules

Use these token families consistently:

### Brand colours

- `--nova-primary`
- `--nova-primary-hover`
- `--nova-accent`
- `--nova-accent-hover`
- `--nova-blue`

### Semantic colours

- `--background`
- `--foreground`
- `--card`
- `--card-foreground`
- `--muted`
- `--muted-foreground`
- `--border`
- `--input-background`
- `--ring`

### Typography

- `--font-family-heading`
- `--font-family-body`
- `--text-xs`
- `--text-sm`
- `--text-base`
- `--text-lg`
- `--text-xl`
- `--text-2xl`
- `--text-3xl`

### Spacing

- `--space-1`
- `--space-2`
- `--space-3`
- `--space-4`
- `--space-5`
- `--space-6`
- `--space-8`
- `--space-12`
- `--space-16`

### Radius

- `--radius-sm`
- `--radius-md`
- `--radius-lg`
- `--radius-pill`

### Shadows

- `--shadow-sm`
- `--shadow-md`
- `--shadow-lg`

### Buttons

- `--button-height-sm`
- `--button-height-md`
- `--button-height-lg`
- `--button-padding-sm`
- `--button-padding-md`
- `--button-padding-lg`

---

## Required Classes

Create or use semantic classes such as:

- `.has-nova-primary-color`
- `.has-nova-accent-color`
- `.has-nova-primary-background-color`
- `.has-nova-accent-background-color`
- `.has-heading-font-family`
- `.has-body-font-family`
- `.wpn-button`
- `.wpn-button--primary`
- `.wpn-button--accent`
- `.wpn-button--outline`
- `.wpn-button--sm`
- `.wpn-button--md`
- `.wpn-button--lg`

---

## Page Styling Rules

Refactor page styling so custom components use BEM classes instead of arbitrary utility strings.

Examples:
- `home-hero`, `home-hero__title`, `home-hero__actions`
- `search-results`, `search-results__grid`, `search-results__sidebar`
- `notice-card`, `notice-card__meta`, `notice-card__title`
- `notice-single`, `notice-single__body`, `notice-single__sidebar`
- `filter-bar`, `filter-bar__row`, `filter-bar__actions`
- `site-header`, `site-header__link`, `site-header__locale-switch`

---

## Buttons

Increase button padding and use preset sizes.
Primary CTA buttons should feel more generous than the current implementation.
Do not restyle buttons per page using arbitrary colour classes.

---

## Search and Legal-Content Priority

The site is content-heavy and compliance-sensitive.
Styles must favour:
- strong readability
- calm surfaces
- clear metadata hierarchy
- clear filters and search controls
- stable notice card structure
- restrained motion

---

## Language Rules

English and Afrikaans share the same visual system.
Do not create separate visual token systems for each language.
Only content and route mappings change.

---

## BEM Naming Convention

### Block

The standalone component:

```css
.notice-card { }
```

### Element

A part of the block:

```css
.notice-card__title { }
.notice-card__meta { }
.notice-card__footer { }
```

### Modifier

A variation of the block or element:

```css
.notice-card--featured { }
.notice-card--archived { }
.notice-card__title--large { }
```

### State

Temporary state (use `is-` or `has-` prefix):

```css
.notice-card--is-active { }
.notice-card--has-error { }
```

---

## CSS File Organization

### Component CSS Structure

```css
/* Component: Notice Card */
/* /src/app/components/notice-card/notice-card.css */

/* Block */
.notice-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
  background: var(--card);
  border: 1px solid var(--border-color-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

/* Elements */
.notice-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-3);
}

.notice-card__title {
  font-family: var(--font-family-heading);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--nova-primary);
}

.notice-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
}

/* Modifiers */
.notice-card--featured {
  border-width: 2px;
  border-color: var(--nova-accent);
}

/* States */
.notice-card--is-active {
  border-color: var(--nova-primary);
}

/* Hover states */
.notice-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(var(--hover-translate-y-sm));
}

/* Responsive */
@media (max-width: 768px) {
  .notice-card {
    padding: var(--space-4);
  }
}
```

---

## Import Order

```css
/* theme.css */
@import './base.css';
@import '../app/components/button/button.css';
@import '../app/components/notice-card/notice-card.css';
/* ... more component styles */
```

---

## Anti-Patterns

❌ **Do not:**
- Use inline styles: `style={{ color: '#09082f' }}`
- Use Tailwind arbitrary values: `bg-[#d70025]`
- Hard-code spacing: `padding: 24px`
- Create global utility classes that don't follow BEM or WordPress conventions
- Mix component styles with page styles in the same file

✅ **Do:**
- Use CSS custom properties from theme.css
- Create BEM-structured component CSS files
- Use semantic helper classes
- Keep styles modular and reusable
- Follow the established token system

---

## WordPress Alignment

The prototype should use class names and structures that align with WordPress patterns:

- `.has-*-color` for color utilities
- `.has-*-background-color` for background utilities
- `.has-*-font-family` for typography utilities
- `.wp-*` prefix for WordPress-like components
- `.wpn-*` prefix for "WordPress Public Notices" components

---

## Related Documentation

- `/guidelines/design-tokens/colors.md` — Color tokens
- `/guidelines/design-tokens/typography.md` — Typography tokens
- `/guidelines/design-tokens/spacing.md` — Spacing tokens
- `/guidelines/design-tokens/buttons.md` — Button styling
- `/guidelines/Guidelines.md` — Main project guidelines
