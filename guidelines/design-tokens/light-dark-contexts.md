# Light & Dark Context Design Tokens

**Last Updated:** March 16, 2026  
**Purpose:** Define accessible color usage for light and dark backgrounds

---

## 🎯 Core Principle

**Text on dark backgrounds MUST be light. Text on light backgrounds MUST be dark.**

This is a **non-negotiable accessibility requirement** for WCAG AA compliance.

---

## 🎨 Semantic Color Contexts

### Light Backgrounds (Default)
Use these tokens for content on white/light backgrounds:

```css
/* Light Background Contexts */
--background: #ffffff;
--foreground: #090909;         /* Dark text on light background */
--card: #ffffff;
--card-foreground: #090909;    /* Dark text on light cards */
```

**Usage:**
- Body text
- Headings on white/light backgrounds
- Card content
- Form labels
- Default UI elements

---

### Dark Backgrounds (Inverse)
Use these tokens for content on dark/colored backgrounds:

```css
/* Dark Background Contexts — ALWAYS USE WHITE TEXT */
--nova-primary: #09082f;       /* Dark navy background */
--nova-accent: #d70025;        /* Red background */
--nav-surface-inverse: var(--nova-primary);

/* Text colors for dark backgrounds */
/* ALWAYS use white (#ffffff) or rgba(255,255,255,0.7-1.0) */
```

**Usage:**
- Top bar navigation
- Page headers with `.wpn-bg--primary`
- Footer
- Dark hero sections
- Accent-colored sections
- Mobile menu overlay

---

## 📋 BEM Class Rules

### Heading Color Modifiers

```css
/* DEFAULT — For light backgrounds */
.wpn-heading-h1,
.wpn-heading-h2,
.wpn-heading-h3,
.wpn-heading-h4,
.wpn-heading-h5,
.wpn-heading-h6 {
  color: var(--foreground);  /* Dark text — default for light backgrounds */
}

/* PRIMARY — Primary brand color (dark navy) */
.wpn-heading--primary {
  color: var(--nova-primary);  /* Use on light backgrounds only */
}

/* ACCENT — Accent brand color (red) */
.wpn-heading--accent {
  color: var(--nova-accent);  /* Use on light backgrounds only */
}

/* WHITE — For dark backgrounds */
.wpn-heading--white {
  color: #ffffff;  /* REQUIRED for all dark backgrounds */
}
```

### Background Color Classes

```css
/* Dark Backgrounds — MUST use --white modifier on all text */
.wpn-bg--primary {
  background-color: var(--nova-primary);  /* Dark navy */
  /* ALL text inside MUST be white */
}

.wpn-bg--accent {
  background-color: var(--nova-accent);  /* Red */
  /* ALL text inside MUST be white */
}

/* Light Backgrounds — Use default dark text */
.wpn-bg--light {
  background-color: var(--background);
}
```

---

## ✅ Correct Usage Examples

### Page Header on Dark Background ✅

```tsx
<div className="wpn-page-header wpn-bg--primary">
  <div className="container mx-auto px-4">
    <h1 className="wpn-page-header__title wpn-heading--white">
      Page Title
    </h1>
    <p className="text-xl text-white/80">
      Subtitle text
    </p>
  </div>
</div>
```

**Rule:** When `.wpn-page-header` has dark background, ALL headings inside MUST use `.wpn-heading--white`

---

### Hero Section on Dark Background ✅

```tsx
<section className="wpn-hero wpn-bg--primary">
  <h1 className="wpn-hero__title wpn-heading--white">
    Hero Title
  </h1>
  <p className="wpn-hero__subtitle text-white/70">
    Hero subtitle
  </p>
</section>
```

**Rule:** `.wpn-hero` with dark background requires white text modifiers

---

### Footer (Always Dark) ✅

```tsx
<footer className="wpn-footer wpn-bg--primary">
  <h4 className="wpn-heading-h4 wpn-heading--white">
    Footer Heading
  </h4>
  <p className="text-white/70">
    Footer text content
  </p>
</footer>
```

**Rule:** Footer always has dark background, so always use white text

---

### Mobile Menu Overlay ✅

```tsx
<div className="fixed inset-0 z-50 bg-white md:hidden">
  {/* Light background — use dark text (default) */}
  <h2 className="wpn-heading-h2 wpn-heading--primary">
    Menu
  </h2>
  <nav>
    <Link className="text-foreground">
      Navigation Link
    </Link>
  </nav>
</div>
```

**Rule:** Mobile menu with `bg-white` uses default dark text colors

---

## ❌ Incorrect Usage (Accessibility Violations)

### ❌ WRONG: Dark text on dark background

```tsx
<!-- ACCESSIBILITY VIOLATION -->
<div className="wpn-page-header wpn-bg--primary">
  <h1 className="wpn-page-header__title wpn-heading--primary">
    Page Title  <!-- BLACK TEXT ON DARK NAVY = INVISIBLE -->
  </h1>
</div>
```

**Problem:** Black text (#09082f) on dark navy background (#09082f) = invisible text

---

### ❌ WRONG: Default heading color on dark background

```tsx
<!-- ACCESSIBILITY VIOLATION -->
<div className="wpn-bg--accent p-8">
  <h2 className="wpn-heading-h2">
    Heading  <!-- DARK TEXT ON RED BACKGROUND = POOR CONTRAST -->
  </h2>
</div>
```

**Problem:** Dark foreground text on red background = fails WCAG contrast

---

### ❌ WRONG: Transparent mobile menu

```tsx
<!-- UNUSABLE UI -->
<div className="fixed inset-0 z-50 bg-transparent md:hidden">
  {/* Content not visible over other page elements */}
</div>
```

**Problem:** Transparent background makes menu unusable

---

## 🎨 Complete Dark Background Checklist

When adding ANY dark background, follow this checklist:

### CSS Classes to Add:

1. **Headings:** Add `.wpn-heading--white` modifier
   ```tsx
   <h1 className="wpn-heading-h1 wpn-heading--white">Title</h1>
   ```

2. **Body Text:** Use `text-white` or `text-white/70` (Tailwind)
   ```tsx
   <p className="text-white/80">Body text with 80% opacity</p>
   ```

3. **Links:** Use white link styles
   ```tsx
   <Link className="text-white hover:text-white/80">Link</Link>
   ```

4. **Icons:** Use white color
   ```tsx
   <Icon className="text-white" />
   ```

---

## 🎯 Semantic Design Token Usage

### Backgrounds

```css
/* Light Contexts */
--background           /* White - use for main page background */
--card                 /* White - use for card backgrounds */
--muted                /* Light gray - use for subtle backgrounds */

/* Dark Contexts */
--nova-primary         /* Dark navy - primary brand background */
--nova-accent          /* Red - accent background */
--nav-surface-inverse  /* Dark background for navigation */
```

### Foregrounds (Text)

```css
/* On Light Backgrounds */
--foreground           /* Dark text - default for body */
--card-foreground      /* Dark text - for card content */
--muted-foreground     /* Gray text - for secondary content */

/* On Dark Backgrounds */
/* Use literal white: #ffffff or rgba(255,255,255,0.7-1.0) */
/* DO NOT use --foreground on dark backgrounds */
```

---

## 📊 WCAG Contrast Requirements

### Minimum Contrast Ratios (WCAG AA)
- **Normal text:** 4.5:1
- **Large text (18pt+):** 3:1
- **Headings:** 4.5:1

### Our Combinations (All Pass WCAG AA)

✅ **Dark navy (#09082f) on White (#ffffff):** 16.8:1 (Excellent)  
✅ **White (#ffffff) on Dark navy (#09082f):** 16.8:1 (Excellent)  
✅ **Red (#d70025) on White (#ffffff):** 7.2:1 (Good)  
✅ **White (#ffffff) on Red (#d70025):** 7.2:1 (Good)  

❌ **Dark navy (#09082f) on Dark navy (#09082f):** 1:1 (Fail)  
❌ **Dark navy (#09082f) on Red (#d70025):** 2.1:1 (Fail)  

---

## 🛠️ Implementation Checklist

### When Creating a New Page:

1. **Identify background color**
   - Light background? Use default text colors
   - Dark background? Use `.wpn-heading--white` + white text

2. **Check all headings**
   - On light: `.wpn-heading--primary` or `.wpn-heading--accent` OK
   - On dark: `.wpn-heading--white` REQUIRED

3. **Check all body text**
   - On light: `text-foreground` or `text-gray-600` OK
   - On dark: `text-white` or `text-white/70` REQUIRED

4. **Check all links**
   - On light: `.wpn-link--accent` OK
   - On dark: `text-white hover:text-white/80` REQUIRED

5. **Test contrast**
   - Use browser DevTools color picker
   - Check WCAG compliance
   - Test with simulated vision deficiencies

---

## 📚 Reference Examples

### Complete Page Header (Dark Background)

```tsx
<div className="wpn-page-header wpn-bg--primary">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="wpn-page-header__title wpn-heading--white">
        Compare Public Notices
      </h1>
      <p className="text-xl text-gray-200 mb-0">
        Select up to 3 notices to compare side-by-side
      </p>
    </div>
  </div>
</div>
```

### Complete Mobile Menu (Light Background)

```tsx
<div className="fixed inset-0 z-50 bg-white md:hidden overflow-y-auto">
  <div className="container mx-auto px-4 py-4">
    {/* Light background — use dark text */}
    <div className="flex items-center justify-between mb-8">
      <Link to="/">
        <Logo variant="light" className="h-10 w-auto" />
      </Link>
      <Button variant="ghost" size="icon">
        <X className="size-6" />
      </Button>
    </div>
    
    <nav className="space-y-1">
      <Link className="block py-3 px-4 text-foreground/70 hover:text-foreground">
        Navigation Link
      </Link>
    </nav>
  </div>
</div>
```

### Complete Hero Section (Dark Background)

```tsx
<section className="wpn-hero wpn-bg--primary py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="wpn-hero__title wpn-heading--white mb-6">
        South Africa's Public Notices Directory
      </h1>
      <p className="wpn-hero__subtitle text-white/80 mb-8">
        Search and discover legally required public notices
      </p>
      <Button className="wpn-button wpn-button--accent">
        Get Started
      </Button>
    </div>
  </div>
</section>
```

---

## 🚨 Common Mistakes to Avoid

### 1. Forgetting --white modifier on dark backgrounds
```tsx
<!-- WRONG -->
<div className="wpn-bg--primary p-8">
  <h2 className="wpn-heading-h2">Title</h2>  <!-- Dark text = invisible -->
</div>

<!-- CORRECT -->
<div className="wpn-bg--primary p-8">
  <h2 className="wpn-heading-h2 wpn-heading--white">Title</h2>
</div>
```

### 2. Using --primary modifier on dark backgrounds
```tsx
<!-- WRONG -->
<div className="wpn-bg--primary p-8">
  <h2 className="wpn-heading-h2 wpn-heading--primary">Title</h2>  <!-- Same color as background -->
</div>

<!-- CORRECT -->
<div className="wpn-bg--primary p-8">
  <h2 className="wpn-heading-h2 wpn-heading--white">Title</h2>
</div>
```

### 3. Transparent backgrounds on overlays
```tsx
<!-- WRONG -->
<div className="fixed inset-0 z-50 bg-transparent">
  <nav>Menu</nav>  <!-- Not visible over page content -->
</div>

<!-- CORRECT -->
<div className="fixed inset-0 z-50 bg-white">
  <nav>Menu</nav>  <!-- Solid white background -->
</div>
```

---

## ✅ Automated Testing

### Tools to Use:
1. **Chrome DevTools:** Color picker shows contrast ratio
2. **axe DevTools:** Automated accessibility testing
3. **WAVE:** Web accessibility evaluation tool
4. **Contrast Checker:** WebAIM contrast checker

### Manual Testing:
1. Zoom to 200% — text still readable?
2. High contrast mode — text visible?
3. Grayscale mode — sufficient contrast?
4. Color blindness simulation — distinguishable?

---

## 📋 Quick Reference

| Background | Heading Class | Text Class | Link Class |
|-----------|---------------|------------|------------|
| Light/White | `.wpn-heading--primary` | `text-foreground` | `.wpn-link--accent` |
| Dark navy | `.wpn-heading--white` | `text-white` | `text-white` |
| Red | `.wpn-heading--white` | `text-white` | `text-white` |
| Transparent | Context-dependent | Context-dependent | Context-dependent |

---

## 🎯 Summary

1. **Light backgrounds = dark text (default)**
2. **Dark backgrounds = white text (add .wpn-heading--white)**
3. **Test all color combinations for WCAG AA compliance**
4. **Mobile menus need solid backgrounds (bg-white or bg-primary)**
5. **Never use --primary or --accent modifiers on dark backgrounds**

---

**Remember:** Accessibility is not optional. Text must be readable on all backgrounds!
