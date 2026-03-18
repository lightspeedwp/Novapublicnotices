# Page Headers — BEM Component Guide

**Component:** `.wpn-page-header`  
**Purpose:** Standardized hero sections for top-level pages  
**Updated:** March 16, 2026

---

## Overview

The `.wpn-page-header` component provides a modern, visually appealing hero section for pages like Contact, About, Help, Sitemap, etc. All styling uses CSS custom properties from `/src/styles/theme-variables.css`.

---

## Design Features

### Modern Visual Elements

1. **Gradient Background** — 135deg diagonal gradient from primary to primary-hover
2. **Subtle Pattern Overlay** — Radial gradients create depth without distraction
3. **Text Shadow** — Subtle shadow for better readability on gradient
4. **Responsive Sizing** — Title scales up 15% on desktop
5. **Generous Padding** — `var(--space-20)` vertical padding for impact

---

## Basic Usage

```tsx
<section className="wpn-page-header">
  <div className="wpn-page-header__container">
    <h1 className="wpn-page-header__title">
      Contact Us
    </h1>
    <p className="wpn-page-header__subtitle">
      Get in touch with our team for assistance
    </p>
  </div>
</section>
```

**Result:**
- Dark gradient background (primary → primary-hover)
- White heading with subtle shadow
- Centered text
- Maximum width container
- 80px top/bottom padding

---

## Component Structure

### BEM Elements

#### `.wpn-page-header` (Block)
The outer container with background and padding.

```css
.wpn-page-header {
  background: linear-gradient(
    135deg,
    var(--nova-primary) 0%,
    var(--nova-primary-hover) 100%
  );
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: var(--space-20) 0;      /* 80px */
  margin-bottom: var(--space-16);  /* 64px */
}
```

#### `.wpn-page-header__container` (Element)
Inner container with max-width constraint.

```css
.wpn-page-header__container {
  max-width: var(--container-max-width);  /* 1440px */
  margin: 0 auto;
  padding: 0 var(--space-4);  /* 16px horizontal padding */
  position: relative;
  z-index: 1;  /* Above ::before pattern */
}
```

#### `.wpn-page-header__title` (Element)
Main heading using heading preset variables.

```css
.wpn-page-header__title {
  font-family: var(--font-family-heading);  /* Lexend */
  font-size: var(--heading-h1-size);        /* 60px */
  font-weight: var(--heading-h1-weight);    /* 600 */
  line-height: var(--heading-h1-line-height);
  color: white;
  margin-bottom: var(--space-6);  /* 24px */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .wpn-page-header__title {
    font-size: calc(var(--heading-h1-size) * 1.15);  /* 69px */
  }
}
```

#### `.wpn-page-header__subtitle` (Element)
Supporting text below the title.

```css
.wpn-page-header__subtitle {
  font-family: var(--font-family-body);  /* Inter */
  font-size: var(--text-xl);             /* 20px */
  color: rgba(255, 255, 255, 0.9);
  max-width: 48rem;  /* 768px */
  margin: 0 auto;
  line-height: var(--line-height-relaxed);
}
```

#### `.wpn-page-header__description` (Element)
Optional tertiary text (rarely used).

```css
.wpn-page-header__description {
  font-family: var(--font-family-body);
  font-size: var(--text-base);  /* 16px */
  color: rgba(255, 255, 255, 0.75);
  max-width: 42rem;  /* 672px */
  margin: var(--space-4) auto 0;
  line-height: var(--line-height-relaxed);
}
```

---

## Modifier Classes

### Size Modifiers

#### `--compact`
Reduced padding for less prominent pages.

```tsx
<section className="wpn-page-header wpn-page-header--compact">
  {/* ... */}
</section>
```

```css
.wpn-page-header--compact {
  padding: var(--space-12) 0;      /* 48px (instead of 80px) */
  margin-bottom: var(--space-12);  /* 48px (instead of 64px) */
}
```

**Use for:** Privacy Policy, Terms, Cookie Policy

---

#### `--extra-large`
Increased padding for landing pages.

```tsx
<section className="wpn-page-header wpn-page-header--extra-large">
  {/* ... */}
</section>
```

```css
.wpn-page-header--extra-large {
  padding: var(--space-24) 0;      /* 96px */
  margin-bottom: var(--space-20);  /* 80px */
}
```

**Use for:** Main landing pages, campaign pages

---

### Alignment Modifiers

#### `--left`
Left-aligned text instead of centered.

```tsx
<section className="wpn-page-header wpn-page-header--left">
  {/* ... */}
</section>
```

```css
.wpn-page-header--left {
  text-align: left;
}

.wpn-page-header--left .wpn-page-header__subtitle,
.wpn-page-header--left .wpn-page-header__description {
  margin-left: 0;
  margin-right: 0;
}
```

**Use for:** Dashboard pages, profile pages

---

### Color Modifiers

#### `--light`
Light background for pages needing softer presentation.

```tsx
<section className="wpn-page-header wpn-page-header--light">
  {/* ... */}
</section>
```

```css
.wpn-page-header--light {
  background: linear-gradient(
    to bottom,
    var(--background) 0%,
    rgba(var(--nova-primary-rgb), 0.02) 100%
  );
}

.wpn-page-header--light::before {
  display: none;  /* No pattern on light bg */
}

.wpn-page-header--light .wpn-page-header__title {
  color: var(--nova-primary);  /* Dark text */
  text-shadow: none;
}

.wpn-page-header--light .wpn-page-header__subtitle {
  color: var(--foreground);
  opacity: 0.8;
}
```

**Use for:** Contact (if preferred), About Us, Advertise

---

#### `--accent`
Accent color gradient instead of primary.

```tsx
<section className="wpn-page-header wpn-page-header--accent">
  {/* ... */}
</section>
```

```css
.wpn-page-header--accent {
  background: linear-gradient(
    135deg,
    var(--nova-accent) 0%,
    var(--nova-accent-hover) 100%
  );
}
```

**Use for:** Promotional pages, special campaigns

---

#### `--two-tone`
Split background for unique visual impact.

```tsx
<section className="wpn-page-header wpn-page-header--two-tone">
  {/* ... */}
</section>
```

```css
.wpn-page-header--two-tone {
  background: linear-gradient(
    to right,
    var(--nova-primary) 0%,
    var(--nova-primary) 50%,
    var(--nova-accent) 50%,
    var(--nova-accent) 100%
  );
}
```

**Use for:** Comparison pages, partnership pages

---

## CSS Variables Used

All visual properties come from CSS custom properties:

### Colors
```css
var(--nova-primary)          /* #09082f - Primary brand color */
var(--nova-primary-hover)    /* Lighter variant for gradients */
var(--nova-accent)           /* #d70025 - Accent brand color */
var(--nova-accent-hover)     /* Lighter variant for gradients */
var(--background)            /* Light background color */
var(--foreground)            /* Default text color */
var(--muted-foreground)      /* Muted text color */
```

### Typography
```css
var(--font-family-heading)   /* Lexend - Heading font */
var(--font-family-body)      /* Inter - Body font */
var(--heading-h1-size)       /* 60px - H1 size */
var(--heading-h1-weight)     /* 600 - Semibold */
var(--heading-h1-line-height)
var(--text-xl)               /* 20px */
var(--text-base)             /* 16px */
var(--line-height-relaxed)
```

### Spacing
```css
var(--space-4)   /* 16px */
var(--space-6)   /* 24px */
var(--space-12)  /* 48px */
var(--space-16)  /* 64px */
var(--space-20)  /* 80px */
var(--space-24)  /* 96px */
```

### Layout
```css
var(--container-max-width)  /* 1440px */
```

---

## Pattern Overlay Explained

The subtle pattern is created with a `::before` pseudo-element:

```css
.wpn-page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
  pointer-events: none;
}
```

**Purpose:**
- Adds subtle depth and visual interest
- Uses 3% opacity white circles
- Positioned at strategic points (20%/50% and 80%/80%)
- `pointer-events: none` ensures clicks pass through
- Disabled on `--light` variant

---

## Responsive Behavior

### Mobile (< 768px)
- Title: `var(--heading-h1-size)` = 60px
- Subtitle: `var(--text-xl)` = 20px
- Padding: 80px vertical (maintains impact)
- Horizontal padding: 16px

### Desktop (≥ 768px)
- Title: `calc(var(--heading-h1-size) * 1.15)` = 69px
- Subtitle: `var(--text-xl)` = 20px (unchanged)
- Padding: 80px vertical (same)
- Horizontal padding: 16px (container handles max-width)

---

## Examples

### Example 1: Default Dark Header (Contact Page)

```tsx
<section className="wpn-page-header">
  <div className="wpn-page-header__container">
    <h1 className="wpn-page-header__title">
      Contact Nova News
    </h1>
    <p className="wpn-page-header__subtitle">
      Get in touch with our team for assistance with public notices
    </p>
  </div>
</section>
```

**Visual Result:**
- Dark blue gradient background (#09082f → lighter)
- White "Contact Nova News" heading (69px on desktop, 60px mobile)
- Light white subtitle (90% opacity)
- Subtle radial pattern overlay
- Centered text
- 80px top/bottom padding

---

### Example 2: Light Header (Sitemap)

```tsx
<section className="wpn-page-header wpn-page-header--light">
  <div className="wpn-page-header__container">
    <h1 className="wpn-page-header__title">
      Sitemap
    </h1>
    <p className="wpn-page-header__subtitle">
      Navigate all pages on the Nova Public Notices Portal
    </p>
  </div>
</section>
```

**Visual Result:**
- Light gradient background (white → subtle primary tint)
- Dark blue "Sitemap" heading (#09082f)
- Dark subtitle text (80% opacity)
- No pattern overlay
- Centered text
- 80px top/bottom padding

---

### Example 3: Compact Header (Privacy Policy)

```tsx
<section className="wpn-page-header wpn-page-header--compact">
  <div className="wpn-page-header__container">
    <h1 className="wpn-page-header__title">
      Privacy Policy
    </h1>
    <p className="wpn-page-header__subtitle">
      Last updated: March 16, 2026
    </p>
  </div>
</section>
```

**Visual Result:**
- Dark gradient background
- White heading
- White subtitle
- Pattern overlay
- Centered text
- **48px top/bottom padding** (reduced from 80px)

---

### Example 4: Left-Aligned Header (Dashboard)

```tsx
<section className="wpn-page-header wpn-page-header--left">
  <div className="wpn-page-header__container">
    <h1 className="wpn-page-header__title">
      My Account Dashboard
    </h1>
    <p className="wpn-page-header__subtitle">
      Manage your notices, orders, and account settings
    </p>
  </div>
</section>
```

**Visual Result:**
- Dark gradient background
- White heading (left-aligned)
- White subtitle (left-aligned, no auto margins)
- Pattern overlay
- **Left-aligned text**
- 80px top/bottom padding

---

### Example 5: With Description (Three Text Levels)

```tsx
<section className="wpn-page-header">
  <div className="wpn-page-header__container">
    <h1 className="wpn-page-header__title">
      Help & FAQ Center
    </h1>
    <p className="wpn-page-header__subtitle">
      Find answers to common questions about public notices
    </p>
    <p className="wpn-page-header__description">
      Browse by category or search for specific topics
    </p>
  </div>
</section>
```

**Visual Result:**
- Dark gradient background
- White "Help & FAQ Center" heading (69px on desktop)
- White subtitle (20px, 90% opacity)
- White description (16px, 75% opacity)
- All centered
- 80px top/bottom padding

---

## Heading Preset Variables

The page header title uses heading preset variables from `/src/styles/theme-variables.css`:

```css
/* In theme-variables.css */
--heading-h1-size: var(--text-4xl);        /* 60px */
--heading-h1-weight: var(--font-weight-semibold);  /* 600 */
--heading-h1-line-height: var(--line-height-tight);
```

**Applied in component:**
```css
.wpn-page-header__title {
  font-family: var(--font-family-heading);
  font-size: var(--heading-h1-size);
  font-weight: var(--heading-h1-weight);
  line-height: var(--heading-h1-line-height);
  /* ... */
}
```

**ALL headings (h1-h6) have preset variables:**
- `--heading-h1-size`, `--heading-h1-weight`, `--heading-h1-line-height`
- `--heading-h2-size`, `--heading-h2-weight`, `--heading-h2-line-height`
- `--heading-h3-size`, `--heading-h3-weight`, `--heading-h3-line-height`
- `--heading-h4-size`, `--heading-h4-weight`, `--heading-h4-line-height`
- `--heading-h5-size`, `--heading-h5-weight`, `--heading-h5-line-height`
- `--heading-h6-size`, `--heading-h6-weight`, `--heading-h6-line-height`

These are automatically applied to semantic HTML headings in `/src/styles/global.css`.

---

## Accessibility

### Screen Readers
- Semantic `<h1>` ensures proper document outline
- `<p>` for subtitle provides context
- Container maintains reading order

### Keyboard Navigation
- No interactive elements in header (no tab stops)
- Scroll behavior unaffected

### Color Contrast
- **Default (Dark):** White text on #09082f = 16.8:1 contrast ratio ✅ WCAG AAA
- **Light variant:** #09082f text on white = 16.8:1 contrast ratio ✅ WCAG AAA

### Motion
- No animations (pattern is static)
- No parallax or motion effects
- Safe for vestibular disorders

---

## Migration from Old Style

### Before (Old Style)
```tsx
<section className="wpn-page-header wpn-page-header--light">
  <div className="wpn-page-header__container">
    <h1 className="wpn-page-header__title">Contact</h1>
    <p className="wpn-page-header__subtitle">Get in touch</p>
  </div>
</section>
```

**Issues:**
- Basic solid background
- No visual depth
- Generic appearance

### After (Modern Style)
```tsx
<section className="wpn-page-header">
  <div className="wpn-page-header__container">
    <h1 className="wpn-page-header__title">Contact</h1>
    <p className="wpn-page-header__subtitle">Get in touch</p>
  </div>
</section>
```

**Improvements:**
- ✅ Modern gradient background
- ✅ Subtle pattern overlay for depth
- ✅ Text shadow for readability
- ✅ Responsive title scaling
- ✅ Generous padding for impact
- ✅ All styling via CSS variables

**Result:** Modern, professional appearance with zero hard-coded values!

---

## WordPress Migration

The BEM class structure maps cleanly to WordPress block patterns:

```html
<!-- WordPress block markup -->
<div class="wp-block-cover wpn-page-header">
  <div class="wp-block-cover__inner-container wpn-page-header__container">
    <h1 class="wp-block-heading wpn-page-header__title">Contact Us</h1>
    <p class="wpn-page-header__subtitle">Get in touch...</p>
  </div>
</div>
```

**CSS remains identical** — just add WordPress classes alongside BEM classes.

---

## Best Practices

### ✅ DO

- Use default dark header for most pages
- Use `--light` modifier sparingly (Contact, Sitemap only)
- Keep subtitle concise (1-2 sentences)
- Use description element only when truly needed
- Combine modifiers: `wpn-page-header wpn-page-header--compact wpn-page-header--left`

### ❌ DON'T

- Don't use inline styles for colors/fonts
- Don't bypass CSS variables
- Don't add custom backgrounds
- Don't override padding unless using modifiers
- Don't use too many text levels (title + subtitle usually sufficient)

---

## Testing Checklist

Before deploying pages with `.wpn-page-header`:

- [ ] Title uses semantic `<h1>` tag
- [ ] Subtitle uses `<p>` tag (not `<h2>`)
- [ ] No hard-coded colors in JSX
- [ ] No hard-coded fonts in JSX
- [ ] Responsive on mobile (320px width)
- [ ] Responsive on tablet (768px width)
- [ ] Responsive on desktop (1440px width)
- [ ] Contrast ratio passes WCAG AA
- [ ] Pattern overlay visible but subtle
- [ ] Text readable on gradient background

---

## Summary

**Component:** `.wpn-page-header`  
**Elements:** `__container`, `__title`, `__subtitle`, `__description`  
**Modifiers:** `--compact`, `--extra-large`, `--left`, `--light`, `--accent`, `--two-tone`

**All styling via CSS variables:**
- Colors: `var(--nova-primary)`, `var(--nova-accent)`, etc.
- Typography: `var(--font-family-heading)`, `var(--heading-h1-size)`, etc.
- Spacing: `var(--space-*)` scale
- Layout: `var(--container-max-width)`

**Result:** Modern, consistent, maintainable page headers across all 78 pages! 🎨

---

**Last Updated:** March 16, 2026  
**File:** `/guidelines/design-tokens/page-headers.md`  
**Component Location:** `/src/styles/utility-classes.css`  
**CSS Variables:** `/src/styles/theme-variables.css`
