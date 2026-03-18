# Dynamic Category Architecture

## Overview

This document explains Nova Public Notices' **one-template category system** — a maintainable, DRY architecture where **all 25 notice categories** use the same dynamic template that adapts based on data.

## Core Principle

❌ **DON'T** create separate template files for each category:
- ~~TendersPage.tsx~~
- ~~EstatesPage.tsx~~
- ~~LiquorLicencesPage.tsx~~
- etc. (25 separate files)

✅ **DO** use one dynamic template that pulls from category-specific data:
- `CategoryArchive.tsx` (EN)
- `CategoryArchiveAF.tsx` (AF)

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Route Layer                      │
│  /category/:slug  →  CategoryArchive.tsx            │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│                   Data Layer                        │
│  getCategoryBySlug(slug) → Category config          │
│  getNoticesByCategory(slug, lang) → Filtered data   │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│               Shared Components                     │
│  Hero, StatsBlock, NoticeGrid, Breadcrumbs, etc.    │
└─────────────────────────────────────────────────────┘
```

## How It Works

### 1. Route captures category slug

```typescript
// User visits: /category/tenders
const { slug } = useParams(); // → "tenders"
```

### 2. Template fetches category configuration

```typescript
const category = getCategoryBySlug(slug); // From /src/app/data/categories.ts
const categoryName = category?.name[lang]; // "Tenders" (EN) or "Tenders" (AF)
```

### 3. Template builds dynamic hero data

```typescript
const heroData: HeroData = {
  title: `${categoryName} notices`,
  // Use custom description if defined, otherwise use default pattern
  description: category?.heroDescription?.[lang] || 
               `Browse all ${categoryName.toLowerCase()} public notices...`,
  // Optional per-category overrides
  size: category?.heroSize || 'md',
  layout: category?.heroLayout || 'default',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/search' },
    { label: categoryName },
  ],
};
```

### 4. Template filters notices dynamically

```typescript
const categoryNotices = getNoticesByCategory(slug, lang);
// Returns all notices matching this category slug
```

### 5. Shared components render the page

```tsx
<Layout lang={lang} showAds={true}>
  <Hero data={heroData} lang={lang} />
  <StatsBlock stats={categoryStats} showIcons={true} />
  <NoticeGrid notices={paginatedNotices} lang={lang} />
  {/* Pagination, sidebar ads, etc. */}
</Layout>
```

## Category Data Structure

### Base Configuration (Required)

```typescript
{
  slug: "tenders",
  name: {
    en: "Tenders",
    af: "Tenders",
  },
  description: {
    en: "Government and municipal tenders and requests for proposals",
    af: "Regering en munisipale tenders en versoeke vir voorstelle",
  },
}
```

### Optional Customization

```typescript
{
  // ... base config above
  
  /** Optional: Override hero layout for this category */
  heroLayout?: 'default' | 'split' | 'centered' | 'minimal' | 'with-stats',
  
  /** Optional: Override hero size */
  heroSize?: 'sm' | 'md' | 'lg',
  
  /** Optional: Custom hero description (replaces default pattern) */
  heroDescription?: {
    en?: "Custom description for tenders category",
    af?: "Aangepaste beskrywing vir tenders kategorie",
  },
}
```

## Customization Strategy

### When to customize per category

Use optional fields in `categories.ts` when a category needs:
- Different hero layout (e.g., 'with-stats' for high-volume categories)
- Custom marketing copy in hero
- Different visual hierarchy

### Example: Tenders with custom hero

```typescript
{
  slug: "tenders",
  name: { en: "Tenders", af: "Tenders" },
  description: {
    en: "Government and municipal tenders and requests for proposals",
    af: "Regering en munisipale tenders en versoeke vir voorstelle",
  },
  heroLayout: 'with-stats', // Show stats in hero
  heroSize: 'lg', // Larger hero
  heroDescription: {
    en: "Access thousands of government tenders. Updated daily from municipalities, provinces, and national departments across South Africa.",
    af: "Toegang tot duisende regeringstenders. Daagliks bygewerk vanaf munisipaliteite, provinsies, en nasionale departemente regoor Suid-Afrika.",
  },
}
```

## Adding a New Category

To add a new category (e.g., "Mining Licences"):

### 1. Add category configuration

**File:** `/src/app/data/categories.ts`

```typescript
{
  slug: "mining-licences",
  name: {
    en: "Mining Licences",
    af: "Mynlisensies",
  },
  description: {
    en: "Mining licence applications and renewals",
    af: "Mynlisensie aansoeke en hernuwings",
  },
  // Optional customization:
  // heroLayout: 'default',
  // heroSize: 'md',
}
```

### 2. Add category color variables (optional)

**File:** `/src/styles/theme-variables.css`

```css
/* Mining Licences */
--category-mining-licences-bg: #fef3c7;
--category-mining-licences-fg: #92400e;
--category-mining-licences-border: #fde68a;
```

### 3. Create sample notices

**File:** `/src/app/data/notices/mining-licences.en.ts`

```typescript
import type { Notice } from '../sampleNotices';

export const miningLicencesNoticesEN: Notice[] = [
  {
    id: 'mining-001',
    title: 'Mining Licence Application - Mpumalanga',
    slug: 'mining-licence-mpumalanga-001',
    category: 'mining-licences',
    // ... rest of notice fields
  },
  // ... more notices
];
```

### 4. That's it!

The template automatically:
- ✅ Renders the new category page at `/category/mining-licences`
- ✅ Filters and displays mining licence notices
- ✅ Generates category stats
- ✅ Shows proper breadcrumbs and navigation
- ✅ Uses correct bilingual labels

**No new template files needed!**

## Shared Components

All category pages use these reusable components:

| Component | Purpose | File |
|-----------|---------|------|
| `Layout` | Page wrapper with header/footer | `/src/app/components/Layout.tsx` |
| `Hero` | Page hero section (5 variants) | `/src/app/components/Hero.tsx` |
| `StatsBlock` | Category statistics display | `/src/app/components/StatsBlock.tsx` |
| `NoticeGrid` | Notice card grid layout | `/src/app/components/NoticeGrid.tsx` |
| `AdSlot` | Advertisement placeholders | `/src/app/components/AdSlot.tsx` |
| `Button` | UI button component | `/src/app/components/ui/button.tsx` |

## Styling System

All styling uses **CSS variables** from `/src/styles/theme-variables.css`:

```css
/* Example: Category colors */
var(--category-tenders-bg)
var(--category-tenders-fg)
var(--category-tenders-border)

/* Example: Spacing */
var(--space-4)
var(--space-6)
var(--space-8)

/* Example: Typography */
var(--heading-h1-size)
var(--font-family-heading)
var(--text-base)
```

**Never hardcode:**
- ❌ Colors: `#09082f`, `rgb(215, 0, 37)`
- ❌ Spacing: `24px`, `2rem`
- ❌ Fonts: `'Lexend'`, `'Inter'`

**Always use variables:**
- ✅ `var(--nova-primary)`
- ✅ `var(--space-6)`
- ✅ `var(--font-family-heading)`

## BEM Class Naming

All components use BEM methodology:

```css
/* Block */
.wpn-notice-grid { }

/* Element */
.wpn-notice-grid__item { }

/* Modifier */
.wpn-notice-grid--3-columns { }
```

See `/guidelines/design-tokens/css-architecture.md` for full BEM standards.

## Benefits of This Architecture

### Maintainability
- ✅ One template to update (not 25)
- ✅ Consistent UX across all categories
- ✅ Centralized bug fixes

### Scalability
- ✅ Add new categories without new template files
- ✅ Easy to add optional customization
- ✅ Data-driven configuration

### DRY Principle
- ✅ No duplicated pagination logic
- ✅ No duplicated filtering logic
- ✅ Shared component library

### WordPress Alignment
- ✅ Matches WordPress category archive pattern
- ✅ Easy to port to WordPress category templates
- ✅ Uses semantic CSS classes

## File Locations

```
/src/app/
├── pages/
│   ├── CategoryArchive.tsx        ← ONE template for all categories (EN)
│   └── CategoryArchiveAF.tsx      ← ONE template for all categories (AF)
├── data/
│   ├── categories.ts              ← Category configurations (all 25)
│   └── notices/                   ← Notice data files by category
├── components/
│   ├── Hero.tsx                   ← Shared hero component
│   ├── StatsBlock.tsx             ← Shared stats component
│   ├── NoticeGrid.tsx             ← Shared grid component
│   └── Layout.tsx                 ← Shared layout wrapper
└── lib/
    ├── search.ts                  ← getNoticesByCategory() helper
    └── noticeHelpers.ts           ← generateCategoryStatsData() helper

/src/styles/
├── theme-variables.css            ← Design system variables
├── category-archive.css           ← Category page-specific styles
└── components.css                 ← Shared component styles
```

## Migration Notes

If you previously had category-specific templates:

1. **Delete** individual category template files
2. **Consolidate** any custom logic into `CategoryArchive.tsx`
3. **Move** category-specific data to `categories.ts` optional fields
4. **Update** routes to use single dynamic route pattern

## Related Documentation

- [Locale Architecture](/guidelines/locale-architecture.md) — Bilingual EN/AF standards
- [Data Model](/guidelines/data-model.md) — Notice data structure
- [Design Tokens](/guidelines/design-tokens/) — CSS variables and design system
- [CSS Architecture](/guidelines/design-tokens/css-architecture.md) — BEM methodology

## Questions?

- **Q: What if a category needs completely different layout?**
  - A: Use the `heroLayout` option first. If truly unique, consider a variant prop on shared components rather than a separate template.

- **Q: Can I add category-specific sections?**
  - A: Yes! Use conditional rendering based on `category.slug` within the single template. Keep it minimal.

- **Q: How do I test a new category?**
  - A: Add the category config, create sample notices, and visit `/category/your-slug`. It just works.

---

**Last Updated:** 2026-03-17  
**Architecture:** Dynamic Category Template System  
**Status:** ✅ Production Ready
