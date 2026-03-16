# Spacing Tokens

Design tokens for Nova Public Notices spacing system.

## Core Principle

**Use `gap` and `padding`, avoid `margin`.**

Margin-based layouts create unpredictable spacing and cascade issues. This project uses gap and padding for all spacing needs.

---

## Spacing Scale

```css
--space-0: 0;
--space-px: 1px;
--space-0-5: 0.125rem;  /* 2px */
--space-1: 0.25rem;     /* 4px */
--space-1-5: 0.375rem;  /* 6px */
--space-2: 0.5rem;      /* 8px */
--space-2-5: 0.625rem;  /* 10px */
--space-3: 0.75rem;     /* 12px */
--space-3-5: 0.875rem;  /* 14px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-7: 1.75rem;     /* 28px */
--space-8: 2rem;        /* 32px */
--space-10: 2.5rem;     /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
--space-32: 8rem;       /* 128px */
```

---

## Usage Guidelines

### Component Internal Spacing (Padding)
Use padding to create space inside components:

```css
/* Card padding */
.card {
  padding: var(--space-6); /* 24px */
}

.card-compact {
  padding: var(--space-4); /* 16px */
}

.card-spacious {
  padding: var(--space-8); /* 32px */
}

/* Button padding */
.btn {
  padding: var(--space-2-5) var(--space-4); /* 10px 16px */
}

.btn-sm {
  padding: var(--space-2) var(--space-3); /* 8px 12px */
}

.btn-lg {
  padding: var(--space-3) var(--space-6); /* 12px 24px */
}
```

### Component Spacing (Gap)
Use gap to create space between elements:

```css
/* Stack (vertical gap) */
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4); /* 16px */
}

.stack-tight {
  gap: var(--space-2); /* 8px */
}

.stack-loose {
  gap: var(--space-6); /* 24px */
}

/* Cluster (horizontal gap) */
.cluster {
  display: flex;
  gap: var(--space-3); /* 12px */
}

/* Grid gap */
.grid {
  display: grid;
  gap: var(--space-6); /* 24px */
}
```

### Section Spacing
Use padding for section spacing:

```css
/* Page sections */
.section {
  padding-top: var(--space-12);    /* 48px */
  padding-bottom: var(--space-12);  /* 48px */
}

.section-compact {
  padding-top: var(--space-8);     /* 32px */
  padding-bottom: var(--space-8);   /* 32px */
}

.section-spacious {
  padding-top: var(--space-20);    /* 80px */
  padding-bottom: var(--space-20);  /* 80px */
}
```

### Container Spacing
```css
/* Container horizontal padding */
.container {
  padding-left: var(--space-4);   /* 16px */
  padding-right: var(--space-4);  /* 16px */
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--space-6);   /* 24px */
    padding-right: var(--space-6);  /* 24px */
  }
}
```

---

## Semantic Spacing Classes

### WordPress-Aligned Layout Classes

```css
/* Constrained layout */
.is-layout-constrained {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

/* Flex layout with gap */
.is-layout-flex {
  display: flex;
  gap: var(--space-4);
}

/* Flow layout (vertical stack) */
.is-layout-flow > * + * {
  margin-top: var(--space-4);
}
```

---

## Component Spacing Standards

### Cards
```css
.wp-notices-card {
  padding: var(--space-6);
  gap: var(--space-4);
}

.wp-notices-card-header {
  padding-bottom: var(--space-4);
}

.wp-notices-card-body {
  gap: var(--space-3);
}

.wp-notices-card-footer {
  padding-top: var(--space-4);
}
```

### Forms
```css
.form-group {
  gap: var(--space-2); /* Label to input */
}

.form-stack {
  gap: var(--space-6); /* Between form groups */
}

.form-actions {
  gap: var(--space-3);
  padding-top: var(--space-6);
}
```

### Navigation
```css
.nav {
  gap: var(--space-6);
}

.nav-item {
  padding: var(--space-2) var(--space-4);
}

.nav-dropdown {
  padding: var(--space-2);
}
```

### Lists
```css
.list-stack {
  gap: var(--space-3);
}

.list-item {
  padding: var(--space-3);
}

.list-item-compact {
  padding: var(--space-2);
}
```

---

## Spacing by Context

### Micro Spacing (0-8px)
**Use for:**
- Icon to text gaps
- Badge padding
- Checkbox to label
- Button icon spacing
- Tight inline elements

**Tokens:** `--space-0-5`, `--space-1`, `--space-2`

### Small Spacing (8-16px)
**Use for:**
- Form input padding
- Small card padding
- List item gaps
- Button padding
- Inline element clusters

**Tokens:** `--space-2`, `--space-3`, `--space-4`

### Medium Spacing (16-32px)
**Use for:**
- Card padding
- Section internal spacing
- Component gaps
- Form field groups
- Content blocks

**Tokens:** `--space-4`, `--space-6`, `--space-8`

### Large Spacing (32-64px)
**Use for:**
- Section padding
- Page section gaps
- Hero padding
- Major layout divisions

**Tokens:** `--space-8`, `--space-12`, `--space-16`

### Extra Large Spacing (64px+)
**Use for:**
- Page top/bottom padding
- Hero sections
- Landing page sections
- Major visual breaks

**Tokens:** `--space-16`, `--space-20`, `--space-24`, `--space-32`

---

## Responsive Spacing

### Mobile (< 640px)
Use smaller spacing values:
```css
.section {
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}

.container {
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}
```

### Tablet (640px - 1024px)
Use medium spacing values:
```css
.section {
  padding-top: var(--space-12);
  padding-bottom: var(--space-12);
}

.container {
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}
```

### Desktop (> 1024px)
Use full spacing values:
```css
.section {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

.container {
  padding-left: var(--space-8);
  padding-right: var(--space-8);
}
```

---

## The Margin Exception

Margin is allowed **only** in these specific cases:

### 1. Centering Block Elements
```css
.centered-block {
  margin-left: auto;
  margin-right: auto;
}
```

### 2. Typography Flow (documented exception)
```css
/* For prose content only */
.prose > * + * {
  margin-top: var(--space-4);
}
```

**Document why margin is needed:**
```tsx
// Margin used here because prose content has variable
// element types and gap cannot be applied
<div className="prose">
  {/* content */}
</div>
```

---

## Spacing Rules

### DO
✅ Use `gap` for spacing between elements
✅ Use `padding` for spacing inside elements
✅ Use CSS custom properties for spacing values
✅ Use flex/grid with gap for layouts
✅ Use consistent spacing scale
✅ Test responsive spacing

### DON'T
❌ Use `margin` for element spacing (except documented cases)
❌ Hard-code pixel values
❌ Mix spacing systems
❌ Use inline spacing styles
❌ Create arbitrary spacing values
❌ Forget to test on mobile

---

## Common Patterns

### Stack Layout (Vertical)
```tsx
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Cluster Layout (Horizontal)
```tsx
<div className="flex gap-3">
  <button>Action 1</button>
  <button>Action 2</button>
</div>
```

### Grid Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>
```

### Card Layout
```tsx
<div className="p-6 gap-4">
  <header className="pb-4">Header</header>
  <main className="gap-3">Content</main>
  <footer className="pt-4">Footer</footer>
</div>
```

---

## Examples

### Notice Card
```css
.notice-card {
  padding: var(--space-6);
}

.notice-card-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-default);
}

.notice-card-body {
  padding-top: var(--space-4);
  padding-bottom: var(--space-4);
}

.notice-card-footer {
  display: flex;
  gap: var(--space-3);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border-default);
}
```

### Form Layout
```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-actions {
  display: flex;
  gap: var(--space-3);
  padding-top: var(--space-6);
}
```

### Page Section
```css
.page-section {
  padding-top: var(--space-12);
  padding-bottom: var(--space-12);
}

.page-section-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}
```

---

## Migration Guide

**Before:**
```tsx
<div style={{ marginTop: '24px', marginBottom: '16px' }}>
```

**After:**
```tsx
<div className="flex flex-col gap-6">
  {/* Use parent gap instead of child margins */}
</div>
```

**Before:**
```tsx
<button style={{ padding: '12px 24px' }}>
```

**After:**
```tsx
<button className="px-6 py-3">
  {/* Or use semantic .btn class */}
</button>
```

---

## Accessibility

### Touch Targets
Minimum touch target: **44x44px**

```css
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: var(--space-2-5) var(--space-4);
}
```

### Focus States
Adequate spacing for focus outlines:
```css
.focusable {
  outline-offset: 2px; /* Space between element and focus ring */
}
```

---

## Reference

All spacing tokens are defined in `/src/styles/theme.css`.

Update this document when adding new spacing tokens.
