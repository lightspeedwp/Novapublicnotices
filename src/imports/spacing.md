# Spacing Tokens — Nova Public Notices

## Purpose

Spacing must support a structured editorial layout and the project's strict no-margin-first approach.

## Spacing Scale

```css
:root {
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
}
```

## Core Rule

Prefer:
- `gap`
- `padding`
- grid / flex layout spacing

Avoid:
- layout built from margin chains
- `mb-8`, `mt-4`, `mx-auto` utility sprawl in TSX for component styling

## Usage Patterns

```css
.notice-grid {
  display: grid;
  gap: var(--space-6);
}

.filter-bar {
  display: grid;
  gap: var(--space-4);
  padding: var(--space-6);
}

.notice-single__layout {
  display: grid;
  gap: var(--space-8);
}
```

## Page Rhythm

- hero section vertical padding: `var(--space-16)` to `var(--space-20)`
- major section padding: `var(--space-12)`
- card padding: `var(--space-6)`
- form field group spacing: `var(--space-4)`
- metadata row spacing: `var(--space-2)`

## Exception Rule

Margin is only allowed when:
- third-party markup forces it
- text-flow spacing is more appropriate than layout spacing
- the reason is documented in CSS comments
