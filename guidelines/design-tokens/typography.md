# Typography Tokens

Design tokens for Nova Public Notices typography system.

## Font Families

### Primary Fonts
```css
--font-heading: "Raleway", system-ui, sans-serif;
--font-body: "Inter", system-ui, sans-serif;
--font-accent: "Lexend", system-ui, sans-serif;
```

**Usage:**
- **Raleway:** Main headings (h1, h2, h3), hero text, important titles
- **Inter:** Body text, paragraphs, form labels, buttons, general UI
- **Lexend:** Subheadings, card titles, special emphasis text

**WordPress Classes:**
- `.has-heading-font-family` — Raleway
- `.has-body-font-family` — Inter
- `.has-accent-font-family` — Lexend

### System Font Stack
```css
--font-system: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--font-mono: ui-monospace, "Courier New", monospace;
```

## Font Sizes

### Scale
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

**WordPress Classes:**
- `.has-small-font-size` — 14px
- `.has-medium-font-size` — 16px (default)
- `.has-large-font-size` — 18px
- `.has-x-large-font-size` — 24px

### Usage Guidelines

#### Extra Small (12px)
- Helper text
- Captions
- Metadata labels
- Timestamps

#### Small (14px)
- Secondary text
- Form helper text
- Table data
- Sidebar content
- Footer text

#### Base (16px)
- Body text (default)
- Form inputs
- Navigation items
- Card descriptions

#### Large (18px)
- Subheadings in content
- Large body text
- Prominent links
- Feature descriptions

#### Extra Large (20px+)
- Section headings
- Page titles
- Hero text
- Call-to-action text

## Line Heights

```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

**Usage:**
- Headings: `--leading-tight` (1.25)
- Body text: `--leading-relaxed` (1.625)
- Legal text: `--leading-loose` (2)
- UI elements: `--leading-normal` (1.5)

## Font Weights

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

**Usage:**
- Body text: `--font-normal` (400)
- Emphasis: `--font-medium` (500)
- Subheadings: `--font-semibold` (600)
- Headings: `--font-bold` (700)
- Hero text: `--font-extrabold` (800)

## Letter Spacing

```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

**Usage:**
- Large headings: `--tracking-tight`
- Body text: `--tracking-normal`
- Uppercase text: `--tracking-wide`
- All-caps labels: `--tracking-wider`

## Heading Styles

### H1
```css
.h1, h1 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-primary);
}

@media (min-width: 768px) {
  .h1, h1 {
    font-size: var(--text-5xl);
  }
}
```

### H2
```css
.h2, h2 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-primary);
}
```

### H3
```css
.h3, h3 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--color-primary);
}
```

### H4
```css
.h4, h4 {
  font-family: var(--font-accent);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
  color: var(--color-primary);
}
```

### H5 & H6
```css
.h5, h5, .h6, h6 {
  font-family: var(--font-accent);
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  color: var(--color-gray-900);
}
```

## Body Text

### Paragraph
```css
p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--text-primary);
}
```

### Legal Text
```css
.legal-text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  line-height: var(--leading-loose);
  color: var(--text-secondary);
}
```

### Lead Paragraph
```css
.lead {
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--text-primary);
}
```

## UI Typography

### Buttons
```css
.btn {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-normal);
}

.btn-sm {
  font-size: var(--text-sm);
}

.btn-lg {
  font-size: var(--text-lg);
}
```

### Form Labels
```css
label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  color: var(--text-primary);
}
```

### Form Inputs
```css
input, textarea, select {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--text-primary);
}
```

### Placeholder Text
```css
::placeholder {
  color: var(--text-tertiary);
  font-weight: var(--font-normal);
}
```

### Navigation
```css
.nav-link {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
}
```

## Special Text Styles

### Metadata
```css
.metadata {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-normal);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}
```

### Badge
```css
.badge {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: var(--leading-none);
  letter-spacing: var(--tracking-normal);
}
```

### Reference Number
```css
.reference-number {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-wide);
}
```

### Notice Title
```css
.notice-title {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-primary);
}
```

## Typography Usage Rules

### DO
✅ Use semantic HTML elements (h1, h2, p, etc.)
✅ Use CSS custom properties from `theme.css`
✅ Use WordPress-aligned class names
✅ Maintain proper heading hierarchy
✅ Use line-height tokens for consistency
✅ Test with both English and Afrikaans text

### DON'T
❌ Hard-code font sizes in components
❌ Use arbitrary font weights
❌ Skip heading levels (h1 → h3)
❌ Use inline font styling
❌ Mix different font stacks arbitrarily
❌ Use font sizes smaller than 12px for body text

## Responsive Typography

### Mobile (< 640px)
- Reduce heading sizes by 1 step
- Maintain body text at 16px minimum
- Increase line-height for readability

### Tablet (640px - 1024px)
- Use base scale
- Optimize line length (45-75 characters)

### Desktop (> 1024px)
- Use full scale
- Can increase heading sizes
- Optimize line length (65-85 characters)

## Bilingual Considerations

### Afrikaans
- Longer words may require more space
- Maintain same font sizes
- May need slightly wider containers
- Test all layouts with Afrikaans content

### Special Characters
Ensure fonts support:
- Accented characters (é, ê, ë, etc.)
- Special punctuation
- Currency symbols (R for Rands)

## Accessibility

### Requirements
- Minimum 16px for body text
- Minimum 14px for UI elements
- Minimum 12px for metadata/captions
- Line-height at least 1.5 for body text
- Allow text resize up to 200%
- Don't use text as images

### WCAG Guidelines
- **Level A:** Text can be resized
- **Level AA:** 4.5:1 contrast for normal text
- **Level AAA:** 7:1 contrast for normal text

## Examples

### Page Title
```html
<h1 className="font-raleway text-4xl md:text-5xl font-bold text-primary">
  Public Notices Portal
</h1>
```

### Section Heading
```html
<h2 className="font-raleway text-3xl font-bold text-primary mb-6">
  Recent Notices
</h2>
```

### Card Title
```html
<h3 className="font-lexend text-xl font-semibold text-primary">
  Estate Notice
</h3>
```

### Body Text
```html
<p className="text-base leading-relaxed text-gray-700">
  Notice content goes here...
</p>
```

### Metadata
```html
<span className="text-xs uppercase tracking-wide text-gray-600">
  Published: March 16, 2026
</span>
```

## Migration Guide

**Before:**
```tsx
<h1 style={{ fontFamily: 'Raleway', fontSize: '48px', fontWeight: 700 }}>
```

**After:**
```tsx
<h1 className="font-raleway text-5xl font-bold">
```

**Before:**
```tsx
<p style={{ fontSize: '14px', lineHeight: '1.5' }}>
```

**After:**
```tsx
<p className="text-sm leading-normal">
```

## Font Loading

### Import Location
All font imports must be in `/src/styles/fonts.css` only.

### Example
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&display=swap');
```

### Performance
- Use `font-display: swap` to prevent FOIT
- Preload critical fonts if needed
- Consider variable fonts for weight ranges

## Reference

All typography tokens are defined in `/src/styles/theme.css`.

Update this document when adding new typography tokens.
