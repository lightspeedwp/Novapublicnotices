# CSS Variables Reference — Design System Enforcement

**Category:** Design Tokens  
**Version:** 1.0.0  
**Date:** 2026-03-18  
**Status:** Active  
**Parent:** Guidelines.md

---

## Critical Requirements

> **IMPORTANT:** All UI generation must use CSS variables from `/styles/global.css` and `/styles/theme.css`. This ensures the design system is respected and users can update styling by modifying CSS files only.

> **TYPOGRAPHY CRITICAL:** For typography, ONLY use the font faces defined in the CSS. Do not use any other fonts or hardcode font-family values.

---

## Purpose

This guide documents all available CSS variables in the Nova Public Notices Portal design system and enforces their usage across all components.

**Core Principle:** Never hardcode visual values. Always use CSS variables.

---

## CSS Variable Sources

Design system variables are defined in:
- `/src/styles/global.css` — Colors, spacing, borders, radius, typography
- `/src/styles/theme.css` — Component-specific variables and WordPress-aligned classes
- `/src/styles/theme-variables.css` — Additional theme tokens

---

## Colors

### Brand Colors

**Available Variables:**
```css
--nova-primary: #09082f;     /* Navy blue - primary brand color */
--nova-accent: #d70025;      /* Red - accent/CTA color */
--nova-base: #ffffff;        /* White - base background */
--nova-muted: #f5f5f5;       /* Light gray - muted backgrounds */
```

**Usage:**
```css
/* ✅ CORRECT */
.wpn-button--primary {
  background-color: var(--nova-primary);
  color: white;
}

.wpn-button--accent {
  background-color: var(--nova-accent);
  color: white;
}

/* ❌ WRONG - Never hardcode */
.wpn-button {
  background-color: #09082f;  /* ❌ Don't do this */
  color: rgb(9, 8, 47);        /* ❌ Don't do this */
}
```

### Semantic Colors

**Available Variables:**
```css
--color-success: #10b981;    /* Success states */
--color-warning: #f59e0b;    /* Warning states */
--color-error: #ef4444;      /* Error states */
--color-info: #3b82f6;       /* Info states */
```

### Text Colors

**Available Variables:**
```css
--color-text-primary: #09082f;     /* Primary text color */
--color-text-secondary: #6b7280;   /* Secondary/muted text */
--color-text-disabled: #9ca3af;    /* Disabled text */
--color-text-inverse: #ffffff;     /* Text on dark backgrounds */
```

### Border Colors

**Available Variables:**
```css
--color-border: #e5e7eb;          /* Default border color */
--color-border-hover: #d1d5db;    /* Border hover state */
--color-border-focus: #3b82f6;    /* Border focus state */
```

---

## Spacing

### Spacing Scale

**Available Variables:**
```css
--space-0: 0;
--space-1: 4px;      /* 0.25rem */
--space-2: 8px;      /* 0.5rem */
--space-3: 12px;     /* 0.75rem */
--space-4: 16px;     /* 1rem */
--space-5: 20px;     /* 1.25rem */
--space-6: 24px;     /* 1.5rem */
--space-7: 28px;     /* 1.75rem */
--space-8: 32px;     /* 2rem */
--space-10: 40px;    /* 2.5rem */
--space-12: 48px;    /* 3rem */
--space-16: 64px;    /* 4rem */
--space-20: 80px;    /* 5rem */
--space-24: 96px;    /* 6rem */
--space-32: 128px;   /* 8rem */
```

**Usage:**
```css
/* ✅ CORRECT */
.wpn-card {
  padding: var(--space-6);
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.wpn-section {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

/* ❌ WRONG - Never hardcode */
.wpn-card {
  padding: 24px;      /* ❌ Don't do this */
  gap: 16px;          /* ❌ Don't do this */
  margin-bottom: 2rem; /* ❌ Don't do this */
}
```

### Responsive Spacing

**Pattern:**
```css
/* Use CSS variables with media queries */
.wpn-hero {
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}

@media (min-width: 768px) {
  .wpn-hero {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }
}
```

---

## Typography

### Font Families

**CRITICAL: Only use these font faces defined in CSS**

**Available Variables:**
```css
--font-heading: 'Lexend', sans-serif;   /* Headings (h1-h6) */
--font-body: 'Inter', sans-serif;       /* Body text, UI */
--font-mono: 'Courier New', monospace;  /* Code, monospace */
```

**Usage:**
```css
/* ✅ CORRECT */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

body, p, span, div {
  font-family: var(--font-body);
}

code, pre {
  font-family: var(--font-mono);
}

/* ❌ WRONG - Never hardcode font families */
h1 {
  font-family: 'Lexend', sans-serif;  /* ❌ Use variable instead */
}

p {
  font-family: Inter;  /* ❌ Use variable instead */
}
```

### Font Sizes

**Available Variables:**
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
```

**Usage:**
```css
/* ✅ CORRECT */
.wpn-text--sm {
  font-size: var(--text-sm);
}

.wpn-heading-h1 {
  font-size: var(--text-4xl);
}

/* ❌ WRONG */
p {
  font-size: 16px;  /* ❌ Use var(--text-base) */
}

h1 {
  font-size: 2.25rem;  /* ❌ Use var(--text-4xl) */
}
```

### Font Weights

**Available Variables:**
```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Line Heights

**Available Variables:**
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

---

## Borders

### Border Widths

**Available Variables:**
```css
--border-width: 1px;
--border-width-2: 2px;
--border-width-4: 4px;
--border-width-8: 8px;
```

**Usage:**
```css
/* ✅ CORRECT */
.wpn-card {
  border: var(--border-width) solid var(--color-border);
}

.wpn-button:focus {
  outline: var(--border-width-2) solid var(--color-border-focus);
}

/* ❌ WRONG */
.wpn-card {
  border: 1px solid #e5e7eb;  /* ❌ Use variables */
}
```

### Border Radius

**Available Variables:**
```css
--radius-none: 0;
--radius-sm: 4px;      /* 0.25rem */
--radius-md: 8px;      /* 0.5rem */
--radius-lg: 12px;     /* 0.75rem */
--radius-xl: 16px;     /* 1rem */
--radius-2xl: 20px;    /* 1.25rem */
--radius-3xl: 24px;    /* 1.5rem */
--radius-full: 9999px; /* Fully rounded */
```

**Usage:**
```css
/* ✅ CORRECT */
.wpn-button {
  border-radius: var(--radius-md);
}

.wpn-card {
  border-radius: var(--radius-lg);
}

.wpn-avatar {
  border-radius: var(--radius-full);
}

/* ❌ WRONG */
.wpn-button {
  border-radius: 8px;  /* ❌ Use var(--radius-md) */
}
```

---

## Shadows

**Available Variables:**
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

**Usage:**
```css
/* ✅ CORRECT */
.wpn-card {
  box-shadow: var(--shadow-md);
}

.wpn-dropdown {
  box-shadow: var(--shadow-lg);
}

/* ❌ WRONG */
.wpn-card {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);  /* ❌ Use variable */
}
```

---

## Layout

### Container

**Available Variables:**
```css
--container-max-width: 1440px;  /* Maximum content width */
```

**Usage:**
```css
/* ✅ CORRECT */
.wpn-container {
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
}

/* ❌ WRONG */
.wpn-container {
  max-width: 1440px;  /* ❌ Use variable */
}
```

### Breakpoints

**Available Variables:**
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1440px;
```

**Usage:**
```css
/* Use in media queries */
@media (min-width: 768px) {  /* Use --breakpoint-md value */
  .wpn-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {  /* Use --breakpoint-lg value */
  .wpn-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Z-Index Scale

**Available Variables:**
```css
--z-index-dropdown: 1000;
--z-index-sticky: 1100;
--z-index-fixed: 1200;
--z-index-modal-backdrop: 1300;
--z-index-modal: 1400;
--z-index-popover: 1500;
--z-index-tooltip: 1600;
```

**Usage:**
```css
/* ✅ CORRECT */
.wpn-modal {
  z-index: var(--z-index-modal);
}

.wpn-modal-backdrop {
  z-index: var(--z-index-modal-backdrop);
}

/* ❌ WRONG */
.wpn-modal {
  z-index: 1400;  /* ❌ Use variable */
}
```

---

## Transitions

**Available Variables:**
```css
--transition-fast: 150ms;
--transition-base: 250ms;
--transition-slow: 350ms;
--transition-slower: 500ms;

--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

**Usage:**
```css
/* ✅ CORRECT */
.wpn-button {
  transition: background-color var(--transition-base) var(--ease-in-out);
}

.wpn-dropdown {
  transition: opacity var(--transition-fast) var(--ease-out);
}

/* ❌ WRONG */
.wpn-button {
  transition: background-color 250ms ease-in-out;  /* ❌ Use variables */
}
```

---

## Enforcement Rules

### 🚫 FORBIDDEN

**Never use these:**
```css
/* ❌ Hardcoded colors */
color: #09082f;
background: rgb(9, 8, 47);
border-color: hsl(240, 72%, 10%);

/* ❌ Hardcoded spacing */
padding: 16px;
margin: 24px;
gap: 8px;

/* ❌ Hardcoded typography */
font-family: 'Inter', sans-serif;
font-family: Inter;
font-size: 16px;

/* ❌ Hardcoded borders */
border-radius: 8px;
border-width: 1px;

/* ❌ Hardcoded shadows */
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
```

### ✅ REQUIRED

**Always use these:**
```css
/* ✅ CSS variables for colors */
color: var(--nova-primary);
background: var(--nova-accent);
border-color: var(--color-border);

/* ✅ CSS variables for spacing */
padding: var(--space-4);
margin: var(--space-6);
gap: var(--space-2);

/* ✅ CSS variables for typography */
font-family: var(--font-heading);
font-family: var(--font-body);
font-size: var(--text-base);

/* ✅ CSS variables for borders */
border-radius: var(--radius-md);
border-width: var(--border-width);

/* ✅ CSS variables for shadows */
box-shadow: var(--shadow-md);
```

---

## Inline Styles Exception

**Only allowed for truly dynamic values:**

```tsx
/* ✅ ALLOWED - Dynamic values based on data */
<div style={{ width: `${progress}%` }} />
<img style={{ aspectRatio: `${width}/${height}` }} />
<div style={{ transform: `translateX(${offset}px)` }} />

/* ❌ NOT ALLOWED - Static visual styling */
<div style={{ color: '#09082f' }} />
<div style={{ padding: '16px' }} />
<div style={{ fontFamily: 'Inter' }} />
```

**If the value doesn't change based on props/state, use CSS classes.**

---

## Component Example

### ❌ WRONG Implementation

```tsx
// DON'T DO THIS
export function BadButton({ children }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: '#d70025',
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
      }}
    >
      {children}
    </button>
  );
}
```

```css
/* DON'T DO THIS */
.bad-button {
  background-color: #d70025;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}
```

### ✅ CORRECT Implementation

```tsx
// DO THIS
import './Button.css';

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`wpn-button wpn-button--${variant}`}>
      {children}
    </button>
  );
}
```

```css
/* DO THIS */
.wpn-button {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  transition: background-color var(--transition-base) var(--ease-in-out);
}

.wpn-button--primary {
  background-color: var(--nova-primary);
  color: white;
}

.wpn-button--accent {
  background-color: var(--nova-accent);
  color: white;
}
```

---

## Checking Compliance

### Automated Checks

Run `expand styles` to audit CSS variable compliance:
```
expand styles
```

This will generate a report showing:
- Hardcoded color violations
- Hardcoded spacing violations
- Hardcoded typography violations
- Inline style violations

### Manual Checks

**Search for violations:**
```bash
# Colors
grep -r "color: #" src/
grep -r "rgb(" src/
grep -r "hsl(" src/

# Spacing
grep -r "padding: [0-9]" src/
grep -r "margin: [0-9]" src/

# Typography
grep -r "font-family: '" src/
grep -r "font-family: [A-Z]" src/

# Inline styles
grep -r 'style={{' src/
```

---

## Benefits of CSS Variables

1. **Single Source of Truth** — Update design system in one place
2. **Theming Support** — Easy to add dark mode or alternate themes
3. **Consistency** — All components use same values
4. **Maintainability** — Change values without touching components
5. **WordPress Alignment** — Matches WordPress customizer patterns
6. **User Control** — Users can customize by editing CSS only

---

## Related Documentation

- **[colors.md](./colors.md)** — Color system details
- **[spacing.md](./spacing.md)** — Spacing scale details
- **[typography.md](./typography.md)** — Typography system details
- **[css-architecture.md](./css-architecture.md)** — BEM methodology
- **[wordpress-component-architecture.md](../wordpress-component-architecture.md)** — Component structure

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial CSS variables reference and enforcement guide |
