# Color Tokens

Design tokens for Nova Public Notices color system.

## Brand Colors

### Primary
```css
--color-primary: #09082f;
--color-primary-light: #1a1849;
--color-primary-dark: #050419;
```

**Usage:**
- Main headings
- Navigation backgrounds
- Primary brand elements
- Hero sections

**WordPress Classes:**
- `.has-primary-color` — text color
- `.has-primary-background-color` — background color

### Accent
```css
--color-accent: #d70025;
--color-accent-hover: #b5001f;
--color-accent-light: #ff0033;
```

**Usage:**
- Call-to-action buttons
- Links
- Important highlights
- Badge accents
- Error states (when contextual)

**WordPress Classes:**
- `.has-accent-color` — text color
- `.has-accent-background-color` — background color

## Neutral Colors

### Base Grays
```css
--color-gray-50: #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;
```

**Usage:**
- Body text: `--color-gray-700` or `--color-gray-800`
- Secondary text: `--color-gray-600`
- Borders: `--color-gray-200` or `--color-gray-300`
- Backgrounds: `--color-gray-50` or `--color-gray-100`
- Disabled states: `--color-gray-400`

**WordPress Classes:**
- `.has-base-color` — base text color
- `.has-base-background-color` — base background color

## Semantic Colors

### Success
```css
--color-success: #10b981;
--color-success-light: #d1fae5;
--color-success-dark: #047857;
```

**Usage:**
- Success messages
- Approved status badges
- Confirmation states
- Positive indicators

### Warning
```css
--color-warning: #f59e0b;
--color-warning-light: #fef3c7;
--color-warning-dark: #d97706;
```

**Usage:**
- Warning messages
- Pending status badges
- Caution indicators
- Review required states

### Error
```css
--color-error: #ef4444;
--color-error-light: #fee2e2;
--color-error-dark: #dc2626;
```

**Usage:**
- Error messages
- Form validation errors
- Rejected status badges
- Critical alerts

### Info
```css
--color-info: #3b82f6;
--color-info-light: #dbeafe;
--color-info-dark: #2563eb;
```

**Usage:**
- Informational messages
- Help text
- General notices
- Neutral status indicators

## Background Colors

### Page Backgrounds
```css
--bg-page: #ffffff;
--bg-page-alt: #f9fafb;
--bg-section: #f3f4f6;
```

### Component Backgrounds
```css
--bg-card: #ffffff;
--bg-input: #ffffff;
--bg-disabled: #f3f4f6;
--bg-hover: #f9fafb;
--bg-selected: #e5e7eb;
```

## Text Colors

### Primary Text
```css
--text-primary: #111827;
--text-secondary: #6b7280;
--text-tertiary: #9ca3af;
--text-disabled: #d1d5db;
```

### Inverted (on dark backgrounds)
```css
--text-inverted-primary: #ffffff;
--text-inverted-secondary: #e5e7eb;
```

## Border Colors

```css
--border-default: #e5e7eb;
--border-light: #f3f4f6;
--border-dark: #d1d5db;
--border-focus: #d70025;
```

## Shadow Colors

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

## Color Usage Rules

### DO
✅ Use CSS custom properties from `theme.css`
✅ Use semantic class names (`.has-primary-color`)
✅ Reference colors by token name
✅ Use semantic colors for status indicators
✅ Maintain WCAG AA contrast ratios (4.5:1 for text)

### DON'T
❌ Hard-code hex values in components
❌ Use arbitrary Tailwind color classes (e.g., `text-blue-500`)
❌ Create one-off color values
❌ Use inline styles for colors
❌ Mix color systems

## Status Badge Colors

```css
/* Published */
--status-published-bg: var(--color-success-light);
--status-published-text: var(--color-success-dark);

/* Pending */
--status-pending-bg: var(--color-warning-light);
--status-pending-text: var(--color-warning-dark);

/* Draft */
--status-draft-bg: var(--color-gray-100);
--status-draft-text: var(--color-gray-700);

/* Rejected */
--status-rejected-bg: var(--color-error-light);
--status-rejected-text: var(--color-error-dark);

/* Archived */
--status-archived-bg: var(--color-gray-200);
--status-archived-text: var(--color-gray-600);
```

## Category Badge Colors

Use a predefined palette for category differentiation:

```css
--category-estates-color: #8b5cf6;
--category-tenders-color: #0ea5e9;
--category-liquor-color: #f59e0b;
--category-planning-color: #10b981;
--category-environment-color: #14b8a6;
--category-court-color: #ef4444;
--category-business-color: #6366f1;
--category-general-color: #6b7280;
```

## Accessibility Requirements

### Contrast Ratios
- Normal text (14-18px): **4.5:1** minimum
- Large text (18px+ or 14px+ bold): **3:1** minimum
- UI components: **3:1** minimum

### Testing
Test all color combinations against WCAG AA standards:
- Primary text on white background
- Accent color on white background
- White text on primary background
- Status badge text on status background

### Tools
- WebAIM Contrast Checker
- Chrome DevTools Contrast Checker
- Figma Contrast Plugin

## Dark Mode Considerations

While not currently implemented, color tokens should support future dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-page: #0a0a0a;
    --bg-card: #1a1a1a;
    --text-primary: #ffffff;
    /* etc. */
  }
}
```

## Examples

### Button Variants
```css
/* Primary button */
.btn-primary {
  background-color: var(--color-accent);
  color: var(--text-inverted-primary);
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
}

/* Secondary button */
.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--border-default);
}

/* Disabled button */
.btn:disabled {
  background-color: var(--bg-disabled);
  color: var(--text-disabled);
}
```

### Status Indicators
```css
.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-badge-published {
  background-color: var(--status-published-bg);
  color: var(--status-published-text);
}

.status-badge-pending {
  background-color: var(--status-pending-bg);
  color: var(--status-pending-text);
}
```

### Links
```css
a {
  color: var(--color-accent);
  text-decoration: underline;
}

a:hover {
  color: var(--color-accent-hover);
}

a:visited {
  color: var(--color-accent-hover);
}

a:focus {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}
```

## Migration Guide

When converting existing code:

**Before:**
```tsx
<div style={{ color: '#d70025', backgroundColor: '#09082f' }}>
```

**After:**
```tsx
<div className="has-accent-color has-primary-background-color">
```

**Before:**
```tsx
<button className="text-red-600 bg-blue-900">
```

**After:**
```tsx
<button className="btn-primary">
```

## Reference

All color tokens are defined in `/src/styles/theme.css`.

Update this document when adding new color tokens.
