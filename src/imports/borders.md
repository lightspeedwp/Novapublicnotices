# Border Tokens — Nova Public Notices

## Purpose

Borders help separate dense legal content, filter controls, and metadata panels. They should be subtle and systematic.

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

## BEM Examples

```css
.notice-card--is-active {
  border-color: var(--border-color-brand);
}

.filter-chip--is-selected {
  border-color: var(--border-color-accent);
}
```

## Do Not

- no `border-2 border-gray-200` in TSX for custom components
- no `border: 2px solid #09082f` inline or in JSX strings
