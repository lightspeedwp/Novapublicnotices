# Navigation Tokens — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

Navigation must support bilingual route switching, deep archives, and search-first behaviour.

---

## Nav Tokens

```css
:root {
  --nav-height-desktop: 80px;
  --nav-height-mobile: 64px;
  --nav-surface: var(--card);
  --nav-surface-inverse: var(--nova-primary);
  --nav-link-color: var(--foreground);
  --nav-link-hover: var(--nova-primary);
  --nav-link-active: var(--nova-accent);
  --nav-border: var(--border-color-default);
}
```

---

## Header Rules

- top utility bar may use `--nova-primary`
- main nav should usually sit on `--card`
- active states should prefer accent underline or accent text, not both everywhere
- language switcher must be visually consistent with nav actions

---

## BEM Examples

```css
.site-header {
  background: var(--nav-surface);
  border-bottom: 1px solid var(--nav-border);
  min-height: var(--nav-height-desktop);
}

.site-header__link {
  color: var(--nav-link-color);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.site-header__link:hover {
  color: var(--nav-link-hover);
}

.site-header__link--is-active {
  color: var(--nav-link-active);
  position: relative;
}

.site-header__link--is-active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--nova-accent);
}

.site-header__link--locale {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

---

## Mobile Navigation

```css
@media (max-width: 768px) {
  .site-header {
    min-height: var(--nav-height-mobile);
  }
  
  .site-header__nav {
    /* Mobile menu drawer or hamburger implementation */
  }
}
```

---

## Top Utility Bar (Optional)

If a utility bar is used above main navigation:

```css
.site-header__utility-bar {
  background: var(--nav-surface-inverse);
  color: var(--primary-foreground);
  min-height: 40px;
  font-size: var(--text-sm);
}

.site-header__utility-link {
  color: var(--primary-foreground);
  opacity: 0.9;
}

.site-header__utility-link:hover {
  opacity: 1;
}
```

---

## Language Switcher

```css
.site-header__locale-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  min-height: 44px;
  padding: 0 var(--space-3);
  border: 1px solid var(--border-color-default);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--nav-link-color);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}

.site-header__locale-switch:hover {
  border-color: var(--nav-link-hover);
  color: var(--nav-link-hover);
}

.site-header__locale-switch--active {
  background: var(--nova-primary);
  color: var(--primary-foreground);
  border-color: var(--nova-primary);
}
```

---

## Sticky Navigation

```css
.site-header--sticky {
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-md);
}
```

---

## Breadcrumbs

```css
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) 0;
  font-size: var(--text-sm);
  color: var(--muted-foreground);
}

.breadcrumbs__link {
  color: var(--muted-foreground);
  text-decoration: none;
}

.breadcrumbs__link:hover {
  color: var(--nav-link-hover);
  text-decoration: underline;
}

.breadcrumbs__separator {
  color: var(--muted-foreground);
  user-select: none;
}

.breadcrumbs__current {
  color: var(--foreground);
  font-weight: var(--font-weight-medium);
}
```

---

## Sitemap Rules

- sitemap pages must stay language-pure
- do not place English and Afrikaans route sections on the same public page
- each language version should have its own sitemap page
- `/sitemap` (English) and `/sitemap?lang=af` or `/af/sitemap` (Afrikaans)

---

## Accessibility Requirements

- All navigation links must have `min-height: 44px` and `min-width: 44px`
- Language switcher must have accessible label
- Active page must be indicated with `aria-current="page"`
- Mobile menu must be keyboard accessible
- Focus states must be clearly visible

```css
.site-header__link:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

---

## Navigation Structure

### Desktop Layout

```
┌─────────────────────────────────────────┐
│  [Top Utility Bar - Optional]           │ 40px
├─────────────────────────────────────────┤
│  Logo  |  Nav Links  |  Search  |  Lang │ 80px
└─────────────────────────────────────────┘
```

### Mobile Layout

```
┌─────────────────────────┐
│  Logo  |  Search  |  ☰  │ 64px
└─────────────────────────┘
```

---

## Anti-Patterns

❌ **Do not:**
- Use different visual systems for EN vs AF navigation
- Make active states hard to distinguish
- Use tiny touch targets on mobile
- Hide language switcher completely on mobile
- Use low-contrast nav links

✅ **Do:**
- Keep navigation clean and predictable
- Make active page clearly indicated
- Ensure 44px minimum touch targets
- Make language switcher always accessible
- Use consistent hover and active states

---

## Related Documentation

- `/guidelines/design-tokens/colors.md` — Color tokens
- `/guidelines/design-tokens/typography.md` — Typography tokens
- `/guidelines/design-tokens/spacing.md` — Spacing tokens
- `/guidelines/locale-architecture.md` — Bilingual routing
