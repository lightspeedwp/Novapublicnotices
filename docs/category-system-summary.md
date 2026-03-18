# Category System Summary

## Architecture Overview

Nova Public Notices uses a **single dynamic template** for all 25 notice categories.

```
ONE Template → ANY Category → Dynamic Data → Shared Components
```

## Key Files

### Templates (2 files total)
- `/src/app/pages/CategoryArchive.tsx` — English category template
- `/src/app/pages/CategoryArchiveAF.tsx` — Afrikaans category template

### Data (1 config file)
- `/src/app/data/categories.ts` — All 25 category configurations

### Shared Components (6 components)
- `Layout` — Page wrapper with header/footer
- `Hero` — Hero section (5 layout variants)
- `StatsBlock` — Category statistics
- `NoticeGrid` — Notice card grid
- `AdSlot` — Advertisement slots
- `Button` — UI buttons

### Styling (100% CSS Variables)
- `/src/styles/theme-variables.css` — Design system tokens
- `/src/styles/category-archive.css` — Category page styles
- All colors, spacing, typography use `var(--token-name)`

## How It Works

```typescript
// 1. Route captures slug
/category/tenders → slug = "tenders"

// 2. Get category config
const category = getCategoryBySlug("tenders");
// Returns: { slug: "tenders", name: { en: "Tenders", af: "Tenders" }, ... }

// 3. Filter notices
const notices = getNoticesByCategory("tenders", "en");

// 4. Build dynamic hero
const heroData = {
  title: `${category.name.en} notices`,
  description: category.heroDescription?.en || defaultDescription,
  layout: category.heroLayout || 'default',
  size: category.heroSize || 'md',
};

// 5. Render with shared components
<Hero data={heroData} />
<StatsBlock stats={categoryStats} />
<NoticeGrid notices={paginatedNotices} />
```

## Adding New Categories

### Step 1: Add to categories.ts

```typescript
{
  slug: "new-category",
  name: {
    en: "New Category",
    af: "Nuwe Kategorie",
  },
  description: {
    en: "Description of this category",
    af: "Beskrywing van hierdie kategorie",
  },
  // Optional customization:
  heroLayout: 'default', // or 'split', 'centered', 'minimal', 'with-stats'
  heroSize: 'md', // or 'sm', 'lg'
  heroDescription: {
    en: "Custom hero description",
    af: "Aangepaste held beskrywing",
  },
}
```

### Step 2: Add category colors (optional)

```css
/* In /src/styles/theme-variables.css */
--category-new-category-bg: #dbeafe;
--category-new-category-fg: #1e40af;
--category-new-category-border: #93c5fd;
```

### Step 3: Add notice data

Create `/src/app/data/notices/new-category.en.ts` and `.af.ts` with sample notices.

### Step 4: Done!

The category automatically works at `/category/new-category` with:
- ✅ Dynamic hero section
- ✅ Category stats
- ✅ Filtered notices
- ✅ Pagination
- ✅ Breadcrumbs
- ✅ Bilingual support

**No new template files needed!**

## Current Categories (25 Total)

All using the same template:

1. Tenders
2. Estates
3. Liquor Licences
4. Town Planning
5. Town Establishment
6. Business Licences
7. Court Orders
8. Environmental (OIS)
9. General Notices
10. Lost Documents
11. Sale in Execution
12. Public Auctions
13. Sale of Business
14. Adoptions
15. Curatorship
16. Demolition
17. Divorce/Antenuptial
18. Insolvent Estates
19. Pension Funds
20. Re-registrations
21. Surrender of Estate
22. Insolvency
23. Name Changes
24. Company Notices
25. Municipal Notices

## Design System Integration

### Typography
```typescript
// ❌ Never hardcode
fontSize: '24px'
fontFamily: 'Lexend'

// ✅ Always use CSS variables
var(--text-lg)
var(--font-family-heading)
```

### Spacing
```typescript
// ❌ Never hardcode
gap: '24px'
padding: '16px'

// ✅ Always use CSS variables
var(--space-6)
var(--space-4)
```

### Colors
```typescript
// ❌ Never hardcode
color: '#09082f'
backgroundColor: '#d70025'

// ✅ Always use CSS variables
var(--nova-primary)
var(--nova-accent)
```

## Customization Points

### Per-Category Customization (in categories.ts)

```typescript
interface Category {
  slug: string;
  name: { en: string; af: string };
  description: { en: string; af: string };
  
  // Optional customization:
  heroLayout?: 'default' | 'split' | 'centered' | 'minimal' | 'with-stats';
  heroSize?: 'sm' | 'md' | 'lg';
  heroDescription?: { en?: string; af?: string };
}
```

### Hero Layout Variants

1. **default** — Standard left-aligned hero with breadcrumbs
2. **split** — Two-column hero with content and image/visual
3. **centered** — Center-aligned hero for impact
4. **minimal** — Compact hero for content-heavy pages
5. **with-stats** — Hero with integrated stats blocks

### When to Customize

Use custom hero settings when a category:
- Has unique marketing messaging needs
- Requires different visual hierarchy
- Benefits from showing stats in hero
- Needs more or less visual prominence

## Benefits

### Maintainability
- Update 1 template, not 25
- Consistent UX across categories
- Centralized bug fixes

### Scalability
- Add categories without code changes
- Data-driven configuration
- Easy to extend

### WordPress Alignment
- Matches WP category archive pattern
- Easy to port to WordPress
- Semantic HTML/CSS

### Performance
- Shared component tree
- Efficient re-renders
- Smaller bundle size

## Related Documentation

- [Dynamic Category Architecture](/docs/dynamic-category-architecture.md) — Full technical guide
- [Design Tokens](/guidelines/design-tokens/) — CSS variable system
- [Data Model](/guidelines/data-model.md) — Notice data structure
- [Locale Architecture](/guidelines/locale-architecture.md) — Bilingual standards

---

**Last Updated:** 2026-03-17  
**Pattern:** Single Dynamic Template  
**Categories:** 25  
**Templates:** 2 (EN + AF)
