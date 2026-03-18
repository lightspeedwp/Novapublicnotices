# Color Tokens — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

These colour rules adapt the existing repo token layer to Nova News brand usage and legal-notice readability.

---

## Design Intent

The product is content-heavy and trust-sensitive. Colours must prioritise:

- strong readability for long-form notice text
- clear metadata hierarchy
- strong CTA contrast
- restrained use of brand red
- print-like neutrality for legal content areas

---

## Required Colour Hierarchy

### Brand

```css
:root {
  --nova-primary: #09082f;
  --nova-primary-hover: #1a1849;
  --nova-accent: #d70025;
  --nova-accent-hover: #b5001f;
  --nova-blue: #549cbe;
}
```

### Semantic Application

```css
:root {
  --primary: var(--nova-primary);
  --primary-foreground: #ffffff;
  --accent: var(--nova-accent);
  --accent-foreground: #ffffff;
  --link: var(--nova-accent);
  --link-hover: var(--nova-accent-hover);
  --notice-meta: #666666;
  --notice-divider: #d9d9d9;
}
```

---

## Usage Rules

### Use `--nova-primary` for

- site header and footer surfaces
- primary navigation emphasis
- page headings and major section titles
- primary outline and hover states where dark authority is needed

### Use `--nova-accent` for

- key CTAs
- active pagination states
- important interactive links
- selected filters and badges
- urgent UI emphasis only

### Do not use `--nova-accent` for

- large body text blocks
- default metadata
- whole-page backgrounds
- every button on the same screen

### Use neutral surfaces for

- notice cards
- search filters
- metadata sidebars
- form backgrounds
- archive listings

---

## Content Readability Rules

Legal notice body copy should normally render with:

```css
.notice-single__body {
  color: var(--foreground);
  background: var(--card);
}

.notice-single__meta,
.notice-card__meta,
.search-results__count {
  color: var(--muted-foreground);
}
```

---

## Status Colours

```css
:root {
  --status-published-bg: #eaf6ef;
  --status-published-fg: #1f6d3d;
  --status-pending-bg: #fff4e5;
  --status-pending-fg: #9c5b00;
  --status-draft-bg: #eef2f7;
  --status-draft-fg: #46566b;
  --status-archived-bg: #f2f2f2;
  --status-archived-fg: #5f5f5f;
}
```

---

## Required Helper Classes

```css
.has-nova-primary-color { color: var(--nova-primary); }
.has-nova-accent-color { color: var(--nova-accent); }
.has-muted-color { color: var(--muted-foreground); }
.has-nova-primary-background-color { background-color: var(--nova-primary); }
.has-nova-accent-background-color { background-color: var(--nova-accent); }
.has-card-background-color { background-color: var(--card); }
```

---

## Anti-Patterns

- no hex values in TSX
- no `text-red-600`, `bg-blue-500`, `from-[#09082f]` in page code
- no contrast-light grey body text on white for legal copy

---

## Related Documentation

- `/guidelines/design-tokens/light-dark-mode.md` — Dark mode colors
- `/guidelines/design-tokens/typography.md` — Text color usage
- `/guidelines/Guidelines.md` — Brand and design rules
