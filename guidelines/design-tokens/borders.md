# Border Tokens — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

Borders help separate dense legal content, filter controls, and metadata panels. They should be subtle and systematic.

---

## Border Tokens

```css
:root {
  --border-width-1: 1px;
  --border-width-2: 2px;
  --border-color-default: var(--border);
  --border-color-strong: #bdbdbd;
  --border-color-brand: var(--nova-primary);
  --border-color-accent: var(--nova-accent);
}
```

---

## Usage Rules

### Default UI borders

```css
.notice-card,
.form__input,
.filter-bar,
.notice-single__sidebar {
  border: var(--border-width-1) solid var(--border-color-default);
}
```

### Strong separators

Use `--border-color-strong` for:
- sticky headers
- major card boundaries
- table-like metadata grouping

### Accent borders

Use sparingly for:
- active chips
- selected category cards
- important moderation states

---

## BEM Examples

```css
.notice-card--is-active {
  border-color: var(--border-color-brand);
}

.filter-chip--is-selected {
  border-color: var(--border-color-accent);
}
```

---

## Do Not

- no `border-2 border-gray-200` in TSX for custom components
- no `border: 2px solid #09082f` inline or in JSX strings

---

## Component Border Patterns

### Cards

```css
.notice-card {
  border: var(--border-width-1) solid var(--border-color-default);
  border-radius: var(--radius-lg);
}

.notice-card--featured {
  border-width: var(--border-width-2);
  border-color: var(--border-color-brand);
}
```

### Form Fields

```css
.form__input {
  border: var(--border-width-1) solid var(--border-color-default);
}

.form__input:focus-visible {
  border-color: var(--nova-primary);
}

.form__input--error {
  border-color: var(--border-color-accent);
}
```

### Tables

```css
.data-table {
  border: var(--border-width-1) solid var(--border-color-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.data-table__row {
  border-bottom: var(--border-width-1) solid var(--border-color-default);
}

.data-table__row:last-child {
  border-bottom: none;
}

.data-table__header {
  border-bottom: var(--border-width-2) solid var(--border-color-strong);
}
```

### Dividers

```css
.divider {
  height: var(--border-width-1);
  background-color: var(--border-color-default);
}

.divider--strong {
  height: var(--border-width-2);
  background-color: var(--border-color-strong);
}

.divider--vertical {
  width: var(--border-width-1);
  height: auto;
}
```

---

## Status-Based Borders

```css
.notice-card--published {
  border-left: 4px solid var(--status-published-fg);
}

.notice-card--pending {
  border-left: 4px solid var(--status-pending-fg);
}

.notice-card--draft {
  border-left: 4px solid var(--status-draft-fg);
}

.notice-card--archived {
  border-left: 4px solid var(--status-archived-fg);
}
```

---

## Interactive Borders

### Hover States

```css
.notice-card {
  border-color: var(--border-color-default);
  transition: border-color var(--duration-fast) var(--ease-out);
}

.notice-card:hover {
  border-color: var(--border-color-brand);
}
```

### Selected States

```css
.category-card--is-selected {
  border-width: var(--border-width-2);
  border-color: var(--border-color-accent);
}
```

---

## Border Utilities

```css
/* Border positions */
.has-border-top {
  border-top: var(--border-width-1) solid var(--border-color-default);
}

.has-border-bottom {
  border-bottom: var(--border-width-1) solid var(--border-color-default);
}

.has-border-left {
  border-left: var(--border-width-1) solid var(--border-color-default);
}

.has-border-right {
  border-right: var(--border-width-1) solid var(--border-color-default);
}

/* Border styles */
.has-border-dashed {
  border-style: dashed;
}

.has-border-dotted {
  border-style: dotted;
}
```

---

## Dark Mode Adjustments

```css
.dark {
  --border-color-default: #3a3a3a;
  --border-color-strong: #4a4a4a;
  /* Brand borders remain unchanged */
}
```

---

## Anti-Patterns

❌ **Do not:**
- Mix border widths randomly across similar components
- Use bright colored borders everywhere
- Hard-code hex values in component styles
- Use Tailwind arbitrary values: `border-[#09082f]`
- Create inconsistent border radius across similar elements

✅ **Do:**
- Use token-based border colors consistently
- Reserve accent borders for important states
- Keep border widths consistent within component types
- Use subtle default borders for most UI
- Match border radius to component size/importance

---

## Accessibility

- Borders should not be the only indicator of state
- Ensure sufficient contrast for border colors
- Active/selected states should use additional indicators beyond border color
- Focus states should use outline, not just border

```css
.focusable-element:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
  /* Border remains as-is, outline added */
}
```

---

## Related Documentation

- `/guidelines/design-tokens/colors.md` — Border color tokens
- `/guidelines/design-tokens/radii.md` — Border radius tokens
- `/guidelines/design-tokens/forms.md` — Form field borders
