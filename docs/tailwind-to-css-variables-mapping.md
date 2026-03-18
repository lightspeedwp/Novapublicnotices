# Tailwind Generic Colors to CSS Variables Mapping

**Purpose:** Replace all generic Tailwind color classes with semantic CSS variables from the design system.

**Date:** March 16, 2026  
**Status:** In Progress

---

## 🎯 Why This Matters

### Problem
- Generic Tailwind colors (`text-gray-700`, `bg-gray-50`, etc.) are hardcoded
- Cannot be customized through design system CSS variables
- Breaks theme switching, dark mode, and brand customization
- Not aligned with WordPress theme.json patterns

### Solution
- Map all generic colors to semantic CSS variables
- Use Tailwind's utility classes that reference CSS variables
- Enable easy customization through single source of truth

---

## 📋 Color Mapping Reference

### Background Colors

| ❌ Avoid (Tailwind) | ✅ Use Instead | CSS Variable | Purpose |
|---------------------|---------------|--------------|---------|
| `bg-gray-50` | `bg-muted` | `--muted` | Light background sections |
| `bg-gray-100` | `bg-muted` | `--muted` | Card backgrounds, alternate rows |
| `bg-gray-200` | `bg-secondary` | `--secondary` | Secondary UI elements |
| `bg-gray-300` | `bg-border` | `--border` | Dividers, separators |
| `bg-white` | `bg-background` or `bg-card` | `--background` / `--card` | Main backgrounds, cards |

### Text Colors

| ❌ Avoid (Tailwind) | ✅ Use Instead | CSS Variable | Purpose |
|---------------------|---------------|--------------|---------|
| `text-gray-300` | `text-muted-foreground/70` | `--muted-foreground` + opacity | Light text on dark backgrounds |
| `text-gray-400` | `text-muted-foreground/80` | `--muted-foreground` + opacity | Subdued text |
| `text-gray-500` | `text-muted-foreground` | `--muted-foreground` | Helper text, captions |
| `text-gray-600` | `text-muted-foreground` | `--muted-foreground` | Secondary text |
| `text-gray-700` | `text-foreground` or `text-secondary-foreground` | `--foreground` / `--secondary-foreground` | Primary body text |
| `text-gray-800` | `text-foreground` | `--foreground` | Emphasized text |
| `text-gray-900` | `text-foreground` | `--foreground` | Headings, strong emphasis |
| `text-black` | `text-foreground` | `--foreground` | Maximum contrast text |

### Border Colors

| ❌ Avoid (Tailwind) | ✅ Use Instead | CSS Variable | Purpose |
|---------------------|---------------|--------------|---------|
| `border-gray-200` | `border-border` | `--border` | Default borders |
| `border-gray-300` | `border-border` | `--border` | Card borders |
| `border-gray-400` | `border-muted-foreground` | `--muted-foreground` | Emphasized borders |
| `border-gray-500` | `border-muted-foreground` | `--muted-foreground` | Strong borders |

---

## 🔄 Specific Replacements

### Homepage & Content Sections

```tsx
// ❌ BEFORE
<section className="py-8 bg-gray-50">
<p className="text-gray-700 mb-4">

// ✅ AFTER
<section className="py-8 bg-muted">
<p className="text-foreground mb-4">
```

### Sales Page & Marketing Content

```tsx
// ❌ BEFORE
<p className="text-xl text-gray-300">  // Light text on dark background
<p className="text-gray-700 mb-4">     // Body text
<p className="text-sm text-gray-600">  // Helper text

// ✅ AFTER
<p className="text-xl text-muted-foreground/70">  // Light text with opacity
<p className="text-foreground mb-4">               // Body text
<p className="text-sm text-muted-foreground">     // Helper text
```

### Borders & Dividers

```tsx
// ❌ BEFORE
<div className="border-l-4 border-gray-400">

// ✅ AFTER
<div className="border-l-4 border-muted-foreground">
```

### Icon Colors

```tsx
// ❌ BEFORE
<Phone className="size-4 text-gray-600" />

// ✅ AFTER
<Phone className="size-4 text-muted-foreground" />
```

---

## 📝 Implementation Checklist

### High Priority Files (Most Violations)
- [ ] `/src/app/pages/Sales.tsx` — ~30+ gray class instances
- [ ] `/src/app/pages/SalesAF.tsx` — ~30+ gray class instances
- [ ] `/src/app/pages/Home.tsx` — 2-4 gray class instances
- [ ] `/src/app/pages/HomeAF.tsx` — 2-4 gray class instances
- [ ] `/src/app/pages/NotFound.tsx` — 1-2 gray class instances
- [ ] `/src/app/pages/auth/Login.tsx` — Check for gray classes
- [ ] `/src/app/pages/auth/Register.tsx` — Check for gray classes

### Medium Priority Files
- [ ] All account pages (`/src/app/pages/account/*.tsx`)
- [ ] All submit pages (`/src/app/pages/submit/*.tsx`)
- [ ] All moderation pages (`/src/app/pages/moderation/*.tsx`)

### Low Priority Files (Documentation/Examples)
- [ ] `/src/app/pages/Styleguide.tsx` — May keep hex values for documentation

---

## ✅ Benefits After Migration

1. **Single Source of Truth**
   - Change `--muted` in one place = update all light backgrounds
   - Change `--foreground` in one place = update all text colors

2. **Dark Mode Ready**
   ```css
   :root.dark {
     --background: #09082f;
     --foreground: #ffffff;
     --muted: #1a1849;
     --muted-foreground: #a0a0a0;
   }
   ```

3. **Theme Switching**
   ```css
   :root[data-theme="blue"] {
     --muted: #e3f2fd;
     --foreground: #1565c0;
   }
   ```

4. **WordPress Migration**
   - CSS variables map directly to theme.json
   - Semantic naming matches WordPress patterns
   - Easy to implement custom color schemes

---

## 🎨 Color Palette Overview

### Current CSS Variables Available

```css
/* Brand Colors */
--nova-primary: #09082f;
--nova-accent: #d70025;
--nova-blue: #549CBE;

/* Semantic Colors */
--background: rgba(255, 255, 255, 1.00);      /* White */
--foreground: rgba(9, 9, 9, 1.00);            /* Near black */
--card: rgba(255, 255, 255, 1.00);            /* White */
--card-foreground: rgba(9, 9, 9, 1.00);       /* Near black */
--muted: rgba(238, 238, 238, 1.00);           /* Light gray */
--muted-foreground: rgba(117, 117, 117, 1.00); /* Mid gray */
--border: rgba(117, 117, 117, 1.00);          /* Mid gray */
--input-border: rgba(84, 156, 190, 0.4);      /* Light blue */
```

---

## 🚨 Important Notes

### When to Keep Tailwind Gray Classes
- **Never** — Always use semantic CSS variables
- **Exception:** Component library code that hasn't been customized yet
- **Exception:** Third-party components where we can't control the markup

### Opacity Usage
When you need lighter variations:
```tsx
// ✅ CORRECT: Use opacity utilities
<p className="text-muted-foreground/50">  // 50% opacity
<p className="text-muted-foreground/70">  // 70% opacity
<p className="text-muted-foreground/80">  // 80% opacity

// ❌ AVOID: Using lighter gray shades
<p className="text-gray-300">
<p className="text-gray-400">
```

---

## 📊 Progress Tracking

**Total Files to Update:** ~47 instances across 3 main files  
**Files Completed:** 0  
**Files In Progress:** 0  
**Files Remaining:** 3  
**Estimated Time:** 30 minutes  

---

## 🔍 Search Commands for Auditing

```bash
# Find all gray color usage
grep -r "gray-" src/app/pages --include="*.tsx"

# Count instances per file
grep -c "gray-" src/app/pages/*.tsx

# Find specific color
grep -r "text-gray-700" src/app/pages --include="*.tsx"
```

---

## 📚 Related Documentation

- `/src/styles/theme-variables.css` — All CSS variable definitions
- `/guidelines/design-tokens/colors.md` — Color system guidelines
- `/guidelines/Guidelines.md` — Section 13 (Design System Rules)

---

**Last Updated:** March 16, 2026  
**Maintained By:** AI Assistant  
**Status:** 🟡 In Progress
