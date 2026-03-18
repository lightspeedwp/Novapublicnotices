# Expand Data — Data Structure Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand data`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Scan templates for repeated content patterns that could benefit from shared data structures (e.g., stats blocks, testimonials, feature lists) and recommend new reusable data interfaces.

---

## Scope

Identifies:
- Repeated data structures across pages
- Opportunities for shared data types
- Data normalization opportunities
- Reusable content models

---

## Analysis Areas

### 1. Content Block Data

**Repeated structures:**
- Feature blocks (icon + title + description)
- Stats blocks (number + label + description)
- Testimonials (quote + author + role + image)
- FAQ items (question + answer)
- Step lists (number + title + description)

### 2. Metadata Patterns

**Common metadata:**
- SEO metadata (title, description, image, keywords)
- Bilingual content pairs
- Publication dates
- Author information
- Category/tag associations

### 3. Navigation Data

**Menu structures:**
- Primary navigation
- Footer navigation
- Breadcrumbs
- Sidebar menus
- Mobile menus

---

## Report Format

Generate: `/reports/YYYY-MM-DD-data-recommendations.md`

```markdown
# Data Structure Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Pages Analyzed:** {number}  
**Repeated Patterns:** {number}  
**Shared Interfaces Recommended:** {number}

---

## Executive Summary

Identified {N} repeated data patterns across pages. Recommending {N} shared TypeScript interfaces for reusability.

---

## Recommended Shared Interfaces

### Interface: FeatureBlock

**Used In:** Homepage, Sales page, About page, For Businesses page

**Current (Duplicated):**
```tsx
// homepage data
features: [
  { icon: 'search', title: 'Find notices', description: '...' },
  { icon: 'upload', title: 'Submit notices', description: '...' }
]

// sales page data (duplicate structure)
services: [
  { icon: 'print', title: 'Print services', description: '...' }
]
```

**Recommended Shared Interface:**
```tsx
// /src/app/data/types/content-blocks.ts

export interface FeatureBlock {
  icon: string;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
  image?: string;
}

export interface FeatureBlockSection {
  heading?: string;
  subheading?: string;
  features: FeatureBlock[];
  columns?: 2 | 3 | 4;
  variant?: 'icon-top' | 'icon-left' | 'icon-inline';
}
```

**Usage:**
```tsx
// /src/app/data/home/home.en.ts
import { FeatureBlockSection } from '../types/content-blocks';

export const homeData = {
  features: {
    heading: 'What we offer',
    features: [
      { icon: 'search', title: 'Find notices', description: '...' }
    ],
    columns: 3
  } as FeatureBlockSection
};
```

**Benefits:**
- Type safety across pages
- Consistent structure
- Easy to add new properties
- Reusable components align with data

**Pages to Update:** 4

---

### Interface: StatsBlock

**Used In:** Homepage, Sales page, About page

**Recommended:**
```tsx
export interface Stat {
  value: string | number;
  label: string;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: string;
}

export interface StatsBlockSection {
  heading?: string;
  stats: Stat[];
  variant?: 'horizontal' | 'grid' | 'inline';
}
```

---

{Additional interface recommendations...}

---

## Shared Data Types Library

### Recommended Structure:

```
/src/app/data/types/
  content-blocks.ts     # FeatureBlock, StatsBlock, TestimonialBlock
  navigation.ts         # NavItem, MenuSection, Breadcrumb
  seo.ts               # PageMeta, SocialMeta, StructuredData
  forms.ts             # FormField, ValidationRule, FormSection
  notices.ts           # Notice, Category, Filter, Status
```

---

## Implementation Roadmap

### Phase 1: Core Content Blocks
1. Create `/src/app/data/types/content-blocks.ts`
2. Define FeatureBlock, StatsBlock, TestimonialBlock
3. Migrate homepage data
4. Migrate sales page data

### Phase 2: Navigation Types
1. Create `/src/app/data/types/navigation.ts`
2. Standardize nav data across pages
3. Update Header/Footer components

---

## Next Steps

1. Create shared type files
2. Migrate existing data to use shared types
3. Update components to use typed data
4. Document data structure patterns

---

## Related Documentation

- **[data-model.md](../guidelines/data-model.md)** — Data architecture
- **[expand-patterns.md](./expand-patterns.md)** — Block patterns
```

---

## Success Criteria

✅ Repeated data patterns identified  
✅ Shared TypeScript interfaces proposed  
✅ Migration plan created  
✅ Benefits quantified  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[data-model.md](../guidelines/data-model.md)** — Data architecture
- **[audit-data.md](./audit-data.md)** — Data architecture audit

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial data expansion analysis prompt |
