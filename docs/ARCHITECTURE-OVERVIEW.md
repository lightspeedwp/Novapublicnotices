# Architecture Overview — Nova Public Notices Portal

## System Architecture Summary

Nova Public Notices uses a **data-driven, component-based architecture** with a unified design system.

---

## Core Architecture Principles

### 1. One Template Per Page Type

**Category Pages:**
- ✅ ONE template: `CategoryArchive.tsx` (EN) + `CategoryArchiveAF.tsx` (AF)
- ✅ Handles all 25 categories dynamically
- ✅ Data-driven configuration via `categories.ts`

**No category-specific templates needed!**

### 2. Shared Component Library

All pages use the same reusable components:
- `Layout` — Header, footer, page wrapper
- `Hero` — Hero section (5 layout variants)
- `StatsBlock` — Statistics display
- `NoticeGrid` — Notice card grid
- `AdSlot` — Advertisement placeholders
- `Button` — UI buttons
- `Breadcrumbs` — Navigation breadcrumbs

### 3. 100% CSS Variable Design System

**Zero hardcoded values in components:**
- All colors from `--nova-*` and semantic tokens
- All spacing from `--space-*` scale
- All typography from `--text-*` and `--heading-*` tokens
- All shadows from `--elevation-*` tokens

### 4. BEM Methodology

**All CSS uses BEM naming:**
```css
.wpn-{block}__{element}--{modifier}
```

Examples:
- `.wpn-notice-card`
- `.wpn-notice-card__title`
- `.wpn-notice-card--featured`

### 5. Bilingual Architecture

**Every user-facing string exists in both languages:**
- EN routes: `/category/:slug`
- AF routes: `/af/categorie/:slug`
- Data files: `*.en.ts` and `*.af.ts`
- Category names: `{ en: "Tenders", af: "Tenders" }`

---

## File Structure

```
/
├── src/
│   ├── app/
│   │   ├── pages/                      ← Page components
│   │   │   ├── CategoryArchive.tsx     ← ONE category template (EN)
│   │   │   ├── CategoryArchiveAF.tsx   ← ONE category template (AF)
│   │   │   ├── Home.tsx / HomeAF.tsx
│   │   │   ├── SearchResults.tsx / SearchResultsAF.tsx
│   │   │   └── ...
│   │   ├── components/                 ← Shared components
│   │   │   ├── Layout.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── StatsBlock.tsx
│   │   │   ├── NoticeGrid.tsx
│   │   │   ├── AdSlot.tsx
│   │   │   └── ui/
│   │   │       └── button.tsx
│   │   ├── data/                       ← Data layer
│   │   │   ├── categories.ts           ← All 25 category configs
│   │   │   ├── navigation.ts
│   │   │   ├── notices/
│   │   │   │   ├── tenders.en.ts
│   │   │   │   ├── tenders.af.ts
│   │   │   │   └── ...
│   │   │   └── heroes/
│   │   │       └── types.ts
│   │   └── lib/                        ← Helper functions
│   │       ├── search.ts
│   │       └── noticeHelpers.ts
│   └── styles/                         ← Design system
│       ├── index.css                   ← Entry point
│       ├── fonts.css                   ← Lexend import
│       ├── theme.css                   ← Theme orchestration
│       ├── theme-variables.css         ← CSS custom properties ⭐
│       ├── global.css                  ← Base elements
│       ├── components.css              ← Shared component styles
│       ├── category-archive.css        ← Category page styles
│       └── ...
├── docs/                               ← Documentation
│   ├── ARCHITECTURE-OVERVIEW.md        ← This file
│   ├── dynamic-category-architecture.md
│   ├── category-system-summary.md
│   ├── quick-reference-category-system.md
│   └── styling-architecture.md
├── guidelines/                         ← Project standards
│   ├── Guidelines.md                   ← Main governance doc
│   ├── locale-architecture.md
│   ├── data-model.md
│   └── design-tokens/
│       ├── README.md
│       ├── css-architecture.md
│       ├── colors.md
│       ├── typography.md
│       ├── spacing.md
│       └── ...
└── README.md
```

---

## Data Flow

### Category Page Request

```
1. User visits /category/tenders
         ↓
2. CategoryArchive.tsx receives slug="tenders"
         ↓
3. getCategoryBySlug("tenders") → Category config
         ↓
4. getNoticesByCategory("tenders", "en") → Filtered notices
         ↓
5. generateCategoryStatsData("tenders", "en") → Stats
         ↓
6. Build hero data with optional category overrides
         ↓
7. Render shared components:
   - Layout (header, footer)
   - Hero (with custom layout/size if configured)
   - StatsBlock (category statistics)
   - NoticeGrid (filtered, paginated notices)
   - AdSlot (sidebar ads)
```

### Category Configuration Example

```typescript
// In /src/app/data/categories.ts
{
  slug: "tenders",
  name: { en: "Tenders", af: "Tenders" },
  description: {
    en: "Government and municipal tenders",
    af: "Regering en munisipale tenders",
  },
  // Optional customization:
  heroLayout: 'with-stats',  // Override default 'default'
  heroSize: 'lg',            // Override default 'md'
  heroDescription: {
    en: "Custom hero description for tenders",
    af: "Aangepaste held beskrywing vir tenders",
  },
}
```

**Result:** Tenders category gets custom hero while still using the same template as all other categories!

---

## Design System Layers

### 1. CSS Custom Properties (Design Tokens)

**Location:** `/src/styles/theme-variables.css`

All visual values stored as CSS variables:

```css
:root {
  /* Brand */
  --nova-primary: #09082f;
  --nova-accent: #d70025;
  
  /* Spacing */
  --space-4: 1rem;
  --space-6: 1.5rem;
  
  /* Typography */
  --text-lg: 24px;
  --heading-h1-size: 60px;
  --font-family-heading: 'Lexend', sans-serif;
  
  /* Category Colors */
  --category-tenders-bg: #dbeafe;
  --category-tenders-fg: #1e40af;
}
```

### 2. BEM Component Classes

**Location:** Component-specific CSS files

```css
/* Hero Component */
.wpn-hero {
  padding: var(--space-8);
  background-color: var(--background);
}

.wpn-hero__title {
  font-size: var(--heading-h1-size);
  color: var(--foreground);
}

.wpn-hero--centered {
  text-align: center;
}
```

### 3. Component Implementation

**Location:** TSX component files

```tsx
<section className="wpn-hero wpn-hero--centered">
  <h1 className="wpn-hero__title">
    {title}
  </h1>
</section>
```

**All styling via CSS classes — zero inline styles!**

---

## Component Patterns

### Hero Component (5 Variants)

```typescript
interface HeroData {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  size?: 'sm' | 'md' | 'lg';
  alignment?: 'left' | 'center';
  layout?: 'default' | 'split' | 'centered' | 'minimal' | 'with-stats';
}
```

**Usage:**
```tsx
<Hero 
  data={{
    title: "Tenders notices",
    description: "Browse all tenders...",
    layout: 'with-stats',  // Can be configured per category
    size: 'lg',
  }} 
  lang="en" 
/>
```

### NoticeGrid Component

```tsx
<NoticeGrid 
  notices={paginatedNotices}
  lang="en"
  columns={3}  // Responsive: 1 on mobile, 2 on tablet, 3 on desktop
/>
```

### StatsBlock Component

```tsx
<StatsBlock 
  stats={categoryStats}
  showIcons={true}
/>
```

---

## Adding a New Category

### Step-by-Step

**1. Add category configuration**

File: `/src/app/data/categories.ts`

```typescript
{
  slug: "new-category",
  name: { en: "New Category", af: "Nuwe Kategorie" },
  description: {
    en: "Description",
    af: "Beskrywing",
  },
}
```

**2. Add category colors (optional)**

File: `/src/styles/theme-variables.css`

```css
--category-new-category-bg: #dbeafe;
--category-new-category-fg: #1e40af;
--category-new-category-border: #93c5fd;
```

**3. Add sample notices**

Create:
- `/src/app/data/notices/new-category.en.ts`
- `/src/app/data/notices/new-category.af.ts`

**4. That's it!**

The category page automatically works at `/category/new-category`.

**No template files needed!**

---

## Styling Rules

### ❌ Never Do

```typescript
// Hardcoded colors
<div style={{ color: '#09082f' }}>

// Hardcoded spacing
<div style={{ padding: '24px' }}>

// Hardcoded fonts
<h1 style={{ fontFamily: 'Lexend', fontSize: '60px' }}>

// Tailwind utility classes for brand styling
<div className="text-blue-600 p-6">
```

### ✅ Always Do

```css
/* Use CSS variables in stylesheets */
.component {
  color: var(--nova-primary);
  padding: var(--space-6);
  font-family: var(--font-family-heading);
  font-size: var(--heading-h1-size);
}
```

```tsx
// Use BEM classes in components
<div className="wpn-component">
  <h1 className="wpn-component__title">
```

---

## Bilingual Implementation

### Route Structure

```
English:
/                        → Home
/category/:slug          → Category archive
/notice/:slug            → Single notice
/search                  → Search results

Afrikaans:
/af                      → Tuis
/af/categorie/:slug      → Kategorie argief
/af/kennisgewing/:slug   → Enkele kennisgewing
/af/soek                 → Soek resultate
```

### Data Files

```
/src/app/data/
  categories.ts          → Bilingual: { en: "...", af: "..." }
  navigation.ts          → Separate EN/AF navigation
  notices/
    tenders.en.ts        → English notices
    tenders.af.ts        → Afrikaans notices
```

### Component Props

```typescript
// All components accept lang prop
<Layout lang="en">
  <Hero data={heroData} lang="en" />
  <NoticeGrid notices={notices} lang="en" />
</Layout>
```

---

## Performance Optimizations

### Code Splitting

- Route-based splitting via React Router
- Component lazy loading where appropriate
- Modular CSS imports

### Asset Optimization

- Font preloading (Lexend)
- Image lazy loading
- SVG optimization

### Rendering

- Pagination (12 notices per page)
- Memoized category stats
- Efficient notice filtering

---

## WordPress Migration Path

### Design System Alignment

All CSS classes and variables are designed to map cleanly to WordPress:

```
Current → WordPress
.wpn-hero → .wp-block-hero
var(--nova-primary) → CSS custom property
BEM classes → Block editor classes
```

### Template Mapping

```
CategoryArchive.tsx → category.php
SingleNotice.tsx → single-notice.php
SearchResults.tsx → search.php
```

### Data Mapping

```
categories.ts → WordPress categories
notices/*.ts → WordPress custom post type
```

---

## Key Benefits

### Maintainability
- ✅ One template per page type (not 25 separate files)
- ✅ Shared component library
- ✅ Centralized design tokens
- ✅ Consistent patterns

### Scalability
- ✅ Add categories without new templates
- ✅ Data-driven configuration
- ✅ Easy to extend and customize

### DRY Principle
- ✅ No duplicated code
- ✅ Reusable components
- ✅ Shared design system

### Developer Experience
- ✅ Clear file organization
- ✅ TypeScript type safety
- ✅ BEM naming convention
- ✅ Comprehensive documentation

### WordPress Alignment
- ✅ Semantic HTML
- ✅ WordPress-style classes
- ✅ Easy to port to WordPress
- ✅ Matches WP patterns

---

## Documentation Index

### Quick Start
- [Quick Reference](/docs/quick-reference-category-system.md) — Fast lookup guide
- [Category System Summary](/docs/category-system-summary.md) — Overview

### Technical Deep Dives
- [Dynamic Category Architecture](/docs/dynamic-category-architecture.md) — Full system details
- [Styling Architecture](/docs/styling-architecture.md) — Design system guide

### Standards & Guidelines
- [Guidelines.md](/guidelines/Guidelines.md) — Main governance document
- [Design Tokens](/guidelines/design-tokens/) — Complete token system
- [CSS Architecture](/guidelines/design-tokens/css-architecture.md) — BEM standards

### Data & Content
- [Data Model](/guidelines/data-model.md) — Notice data structure
- [Locale Architecture](/guidelines/locale-architecture.md) — Bilingual patterns

---

## Getting Started

### For New Developers

1. Read [Guidelines.md](/guidelines/Guidelines.md) first
2. Review [Quick Reference](/docs/quick-reference-category-system.md)
3. Explore `/src/styles/theme-variables.css` for design tokens
4. Check `/src/app/pages/CategoryArchive.tsx` to see the dynamic template
5. Look at `/src/app/components/` for shared components

### Adding a Feature

1. Check if a shared component exists
2. Use CSS variables from `theme-variables.css`
3. Follow BEM naming convention
4. Create bilingual data files if needed
5. Update relevant documentation

### Customizing a Category

1. Open `/src/app/data/categories.ts`
2. Add optional fields: `heroLayout`, `heroSize`, `heroDescription`
3. Optionally add category colors to `theme-variables.css`
4. The template automatically uses your customization

---

## Questions & Support

- **Q: Do I need a separate template for each category?**
  - A: No! Use the single dynamic `CategoryArchive.tsx` template.

- **Q: Can I hardcode colors or spacing?**
  - A: No! Always use CSS variables from `theme-variables.css`.

- **Q: How do I add a new category?**
  - A: Add config to `categories.ts` + optional colors + sample notices. Done!

- **Q: What if a category needs a completely different layout?**
  - A: Use the `heroLayout` option first. If truly unique, add a variant to the shared component rather than creating a separate template.

---

**Last Updated:** 2026-03-17  
**Version:** 1.0  
**Architecture:** Data-Driven, Component-Based  
**Status:** ✅ Production Ready
