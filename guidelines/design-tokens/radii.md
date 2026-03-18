# Radius Tokens — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

Nova Public Notices should feel modern and trustworthy, not overly soft. Radii must stay restrained.

---

## Radius Scale

The repo already exposes `--radius`, `--radius-button`, and `--radius-card`. Standardise usage as follows:

```css
:root {
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-pill: 999px;
}
```

---

## Recommended Mapping

- buttons: `--radius-md`
- inputs: `--radius-md`
- cards: `--radius-lg`
- modals and dropdowns: `--radius-lg`
- badges and chips: `--radius-pill` or `--radius-sm`

---

## Usage

```css
.wpn-button { border-radius: var(--radius-md); }
.notice-card { border-radius: var(--radius-lg); }
.filter-chip { border-radius: var(--radius-pill); }
```

---

## Rules

- do not exceed `12px` for standard UI surfaces
- do not hard-code radius values in TSX
- do not mix wildly different radius styles on the same page

---

## Related Documentation

- `/guidelines/design-tokens/buttons.md` — Button radius
- `/guidelines/design-tokens/borders.md` — Border with radius
- `/guidelines/design-tokens/forms.md` — Form field radius
