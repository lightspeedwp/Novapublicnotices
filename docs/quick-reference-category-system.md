# Category System Quick Reference

## TL;DR

✅ **ONE template** handles all 25 categories  
✅ **Data-driven** configuration in `categories.ts`  
✅ **100% CSS variables** from design system  
✅ **Add categories** without creating new templates

---

## File Structure

```
/src/app/
├── pages/
│   ├── CategoryArchive.tsx      ← ONE template (EN)
│   └── CategoryArchiveAF.tsx    ← ONE template (AF)
├── data/
│   └── categories.ts            ← All category configs
└── components/
    ├── Hero.tsx                 ← Shared hero (5 variants)
    ├── StatsBlock.tsx           ← Shared stats
    └── NoticeGrid.tsx           ← Shared grid
```

---

## Template Flow

```
Route (/category/:slug)
    ↓
Get category config (getCategoryBySlug)
    ↓
Filter notices (getNoticesByCategory)
    ↓
Build hero data (with optional overrides)
    ↓
Render shared components
```

---

## Add a New Category

### 1. Add config to `/src/app/data/categories.ts`

```typescript
{
  slug: "new-category",
  name: { en: "New Category", af: "Nuwe Kategorie" },
  description: {
    en: "Category description",
    af: "Kategorie beskrywing",
  },
  // Optional:
  heroLayout: 'default', // or 'split', 'centered', 'minimal', 'with-stats'
  heroSize: 'md',        // or 'sm', 'lg'
  heroDescription: {
    en: "Custom hero text",
    af: "Aangepaste held teks",
  },
}
```

### 2. Add colors to `/src/styles/theme-variables.css`

```css
--category-new-category-bg: #dbeafe;
--category-new-category-fg: #1e40af;
--category-new-category-border: #93c5fd;
```

### 3. Add sample notices

Create `/src/app/data/notices/new-category.en.ts`

### 4. Done! 🎉

Visit `/category/new-category` — it works automatically.

---

## Hero Layout Variants

| Layout | Use Case |
|--------|----------|
| `default` | Standard left-aligned hero |
| `split` | Two-column with visual |
| `centered` | Impact-focused hero |
| `minimal` | Compact for content pages |
| `with-stats` | Hero with stats integration |

---

## Design System Rules

### ❌ Never Use

```typescript
// Hardcoded values
fontSize: '24px'
color: '#09082f'
gap: '16px'
fontFamily: 'Lexend'
```

### ✅ Always Use

```typescript
// CSS variables
var(--text-lg)
var(--nova-primary)
var(--space-4)
var(--font-family-heading)
```

---

## CSS Variable Categories

```css
/* Colors */
var(--nova-primary)
var(--nova-accent)
var(--background)
var(--foreground)

/* Spacing */
var(--space-2)   /* 8px */
var(--space-4)   /* 16px */
var(--space-6)   /* 24px */
var(--space-8)   /* 32px */

/* Typography */
var(--text-xs)   /* 12px */
var(--text-sm)   /* 14px */
var(--text-base) /* 16px */
var(--text-lg)   /* 24px */
var(--text-xl)   /* 32px */

/* Headings */
var(--heading-h1-size)
var(--heading-h2-size)
var(--heading-h3-size)

/* Category Colors */
var(--category-tenders-bg)
var(--category-estates-fg)
var(--category-liquor-licences-border)
```

---

## Example: Custom Tenders Category

```typescript
{
  slug: "tenders",
  name: { en: "Tenders", af: "Tenders" },
  description: {
    en: "Government and municipal tenders and requests for proposals",
    af: "Regering en munisipale tenders en versoeke vir voorstelle",
  },
  heroLayout: 'with-stats',  // Show stats in hero
  heroSize: 'lg',            // Larger hero
  heroDescription: {
    en: "Access thousands of government tenders from across South Africa.",
    af: "Toegang tot duisende regeringstenders van regoor Suid-Afrika.",
  },
}
```

Result: Tenders category gets custom hero while using the same template as all other categories!

---

## BEM Class Naming

```css
/* Block */
.wpn-notice-grid { }

/* Element */
.wpn-notice-grid__item { }

/* Modifier */
.wpn-notice-grid--3-columns { }
```

**Prefix:** `wpn-` (WordPress Notices)

---

## Shared Components

| Component | Purpose |
|-----------|---------|
| `Layout` | Header, footer, wrapper |
| `Hero` | Page hero (5 variants) |
| `StatsBlock` | Category statistics |
| `NoticeGrid` | Notice card grid |
| `AdSlot` | Ad placeholders |
| `Button` | UI buttons |

All components use **CSS variables only**.

---

## Testing Checklist

When adding/updating a category:

- [ ] Category config added to `categories.ts`
- [ ] Category colors in `theme-variables.css`
- [ ] Sample notices created
- [ ] Visit `/category/slug` in browser
- [ ] Check hero displays correctly
- [ ] Verify stats show
- [ ] Check notice grid renders
- [ ] Test pagination
- [ ] Verify breadcrumbs
- [ ] Test both EN and AF routes

---

## Common Issues

### Hero not showing custom description
- Check `heroDescription` is set in category config
- Ensure both `en` and `af` keys exist

### Stats not showing
- Run `generateCategoryStatsData(slug, lang)`
- Check notices exist for this category

### Wrong category colors
- Verify CSS variable naming: `--category-{slug}-bg`
- Check slug matches exactly (use hyphens, not underscores)

---

## Full Documentation

- [Dynamic Category Architecture](/docs/dynamic-category-architecture.md)
- [Category System Summary](/docs/category-system-summary.md)
- [Design Tokens](/guidelines/design-tokens/)

---

**Last Updated:** 2026-03-17
