# Shadow Tokens — Nova Public Notices

## Purpose

Shadows should create clear elevation without making the site feel glossy or decorative. This is a news/legal product, not a lifestyle interface.

## Elevation Scale

The repo already exposes `--elevation-sm` through `--elevation-xl`. Standardise usage with semantic aliases:

```css
:root {
  --shadow-sm: var(--elevation-sm);
  --shadow-md: var(--elevation-md);
  --shadow-lg: var(--elevation-lg);
  --shadow-xl: var(--elevation-xl);
  --shadow-hover: var(--elevation-md);
}
```

## Usage Rules

- cards: `--shadow-sm`
- sticky filter bars and dropdowns: `--shadow-md`
- modals and elevated overlays: `--shadow-lg`
- never use large shadows on body text containers unless needed for overlay contrast

## BEM Example

```css
.notice-card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--duration-fast) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
}

.notice-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(var(--hover-translate-y-sm));
}
```

## Rules

- animate `transform` more than shadow where possible
- do not add multi-colour glow effects
- do not use decorative neon shadows from the source project guidelines
