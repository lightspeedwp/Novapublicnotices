# Typography Tokens — Nova Public Notices

## Purpose

Typography must support bilingual English and Afrikaans content, dense legal metadata, and long-form notice reading.

## Font Strategy

The repo already uses Lexend. Keep one primary typeface unless a second approved face is intentionally introduced.

```css
:root {
  --font-family-heading: var(--font-family-lexend);
  --font-family-body: var(--font-family-lexend);
  --font-family-meta: var(--font-family-lexend);
}
```

## Type Scale

Use this adjusted scale for production styling. It aligns more cleanly with the current token base but improves readability over the current mixed usage.

```css
:root {
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-md: 1.0625rem;    /* 17px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.375rem;     /* 22px */
  --text-2xl: 1.75rem;     /* 28px */
  --text-3xl: 2.25rem;     /* 36px */
  --text-4xl: 3rem;        /* 48px */
}
```

## Weight Tokens

```css
:root {
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

## Line Heights

```css
:root {
  --line-height-tight: 1.15;
  --line-height-snug: 1.3;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.7;
}
```

## Usage Rules

### Headings
```css
.page-header__title,
.notice-single__title,
.hero__title {
  font-family: var(--font-family-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-tight);
  color: var(--nova-primary);
}
```

### Body Copy
```css
.notice-single__body,
.page-content__body,
.form__help {
  font-family: var(--font-family-body);
  font-size: var(--text-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
}
```

### Metadata
```css
.notice-card__meta,
.notice-single__meta,
.filter-bar__summary {
  font-family: var(--font-family-meta);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
}
```

## Do Not

- do not use `font-raleway`, `text-4xl`, `font-bold` directly in TSX
- do not style headings with arbitrary responsive utilities in page files
- do not use different font stacks between English and Afrikaans
