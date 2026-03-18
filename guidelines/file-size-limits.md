# File Size Limits & Optimization Guidelines

**Category:** Architecture  
**Version:** 1.0.0  
**Date:** 2026-03-18  
**Status:** Active  
**Parent:** Guidelines.md

---

## Purpose

Define maximum file size thresholds and optimization rules for TypeScript, TSX, and CSS files in the Nova Public Notices Portal to maintain code quality, readability, and IDE performance.

**Related Prompts:**
- `/prompts/optimise.md` — Master optimization orchestrator
- `/prompts/optimise-memory.md` — File size and memory optimization

---

## File Size Thresholds

### Critical Rules

**Files exceeding these limits MUST be split immediately:**

| File Type | Critical (Split Now) | High (Review) | Ideal (Target) |
|-----------|---------------------|---------------|----------------|
| **TSX (Pages)** | > 800 lines | 500-800 lines | < 400 lines |
| **TSX (Components)** | > 600 lines | 400-600 lines | < 300 lines |
| **TS (Data)** | > 1,000 lines | 600-1,000 lines | < 500 lines |
| **TS (Utils)** | > 500 lines | 300-500 lines | < 200 lines |
| **CSS (Templates)** | > 800 lines | 500-800 lines | < 400 lines |
| **CSS (Patterns)** | > 600 lines | 400-600 lines | < 300 lines |
| **CSS (Blocks)** | > 400 lines | 250-400 lines | < 200 lines |
| **CSS (Utilities)** | > 500 lines | 300-500 lines | < 250 lines |

### Rationale

**Why these limits?**
- **IDE Performance:** Files > 800 lines can cause lag in syntax highlighting and autocomplete
- **Readability:** Humans struggle to mentally model files > 500 lines
- **Git Diffs:** Smaller files = cleaner merge conflicts
- **Code Review:** Easier to review < 300 line changes
- **Reusability:** Smaller files encourage DRY principles
- **Testing:** Smaller units = easier to test

---

## Component File Structure

### DRY Architecture Requirement

**All pages and templates MUST use the component hierarchy:**

```
/components/
  ├─ blocks/        ← Atomic UI (Button, Card, Input, Badge)
  ├─ patterns/      ← Composed sections (Hero, FeatureGrid, CTABanner)
  ├─ parts/         ← Template parts (Header, Footer, Sidebar)
  └─ templates/     ← Page layouts (ArticleTemplate, ArchiveTemplate)

/pages/
  ├─ Home.tsx       ← Composes templates, patterns, parts
  └─ About.tsx      ← Composes templates, patterns, parts
```

**Anti-Pattern (Forbidden):**
```tsx
// ❌ DON'T DO THIS — Hardcoded page structure
export function Home() {
  return (
    <div>
      <header>
        <nav>{/* 200 lines of hardcoded nav */}</nav>
      </header>
      <main>
        <section>{/* 300 lines of hardcoded hero */}</section>
        <section>{/* 400 lines of hardcoded features */}</section>
      </main>
      <footer>{/* 150 lines of hardcoded footer */}</footer>
    </div>
  );
}
```

**Correct Pattern (Required):**
```tsx
// ✅ DO THIS — Compose from shared components
import { Header } from '@/components/parts/Header';
import { Footer } from '@/components/parts/Footer';
import { Hero } from '@/components/patterns/Hero';
import { FeatureGrid } from '@/components/patterns/FeatureGrid';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero {...heroData} />
        <FeatureGrid {...featuresData} />
      </main>
      <Footer />
    </>
  );
}
```

---

## TypeScript/TSX File Rules

### Page Files (`/src/app/pages/`)

**Maximum Size:** 400 lines (strict)

**Structure:**
```tsx
// 1. Imports (max 30 lines)
import { Header } from '@/components/parts/Header';
import { heroData } from '@/data/heroes/heroes.en';

// 2. Component (max 350 lines)
export function PageName() {
  // Minimal logic
  // Compose from patterns/parts
  return (...)
}

// 3. Exports (max 20 lines)
export default PageName;
```

**If > 400 lines:**
1. Extract hardcoded sections into pattern components
2. Extract local helper functions into `/lib/`
3. Extract large data objects into `/data/`
4. Split into multiple page sections with shared template

### Component Files (`/src/app/components/`)

**Maximum Size:** 300 lines (strict for blocks), 600 lines (patterns/templates)

**Blocks** (atomic components):
- Should be < 200 lines
- Single responsibility
- No business logic
- Pure presentational

**Patterns** (composed sections):
- Should be < 400 lines
- Can compose multiple blocks
- Minimal logic
- Data from props

**Templates** (page layouts):
- Should be < 600 lines
- Compose patterns and parts
- Define layout structure
- Accept data via props

**If > limits:**
1. Extract repeated JSX into sub-components
2. Extract complex logic into custom hooks
3. Split variant renderings into separate components
4. Extract styled wrappers into pattern components

### Data Files (`/src/app/data/`)

**Maximum Size:** 500 lines (strict)

**Structure:**
```ts
// 1. Imports (types, helpers)
import type { Notice } from './types';

// 2. Type definitions (if needed)
export interface NoticeData {
  // ...
}

// 3. Data exports (max 450 lines)
export const notices: Notice[] = [
  // ...
];

// 4. Helper exports (max 50 lines)
export const getNoticeById = (id: string) => {
  // ...
};
```

**If > 500 lines:**
1. **Split by category:** `notices/estates.ts`, `notices/tenders.ts`
2. **Split by language:** `notices.en.ts`, `notices.af.ts`
3. **Split by page context:** `faqs/homepage.ts`, `faqs/services.ts`
4. **Create barrel file:** `notices/index.ts` that exports all sub-files

### Utility Files (`/src/app/lib/` or `/src/app/utils/`)

**Maximum Size:** 200 lines (strict)

**Structure:**
```ts
// 1. Imports
import { format } from 'date-fns';

// 2. Type definitions
export type DateFormat = 'short' | 'long';

// 3. Utility functions (max 150 lines)
export function formatDate(date: Date, format: DateFormat) {
  // ...
}

// 4. Exports
export { formatDate };
```

**If > 200 lines:**
1. **Split by domain:** `date-utils.ts`, `string-utils.ts`, `validation-utils.ts`
2. **Create barrel file:** `lib/index.ts` that re-exports all utilities
3. **Extract complex functions** into dedicated files

---

## CSS File Rules

### Template CSS (`/src/styles/templates/`)

**Maximum Size:** 400 lines (strict)

**Structure:**
```css
/* =================================================================
   Template Name — Page Description
   ================================================================= */

/* 1. Base Layout (max 100 lines) */
.wpn-template-name {
  /* Container styles */
}

/* 2. Section Variants (max 150 lines) */
.wpn-template-name__section {
  /* Section styles */
}

/* 3. Element Styles (max 100 lines) */
.wpn-template-name__element {
  /* Element styles */
}

/* 4. Responsive (max 50 lines) */
@media (min-width: 768px) {
  /* Responsive adjustments */
}
```

**If > 400 lines:**
1. **Extract shared hero styles** to `patterns/hero.css`
2. **Extract shared form styles** to `patterns/form.css`
3. **Extract responsive queries** to separate file: `template-name-responsive.css`
4. **Split by section:** `template-name-hero.css`, `template-name-content.css`, `template-name-sidebar.css`

### Pattern CSS (`/src/styles/patterns/`)

**Maximum Size:** 300 lines (strict)

**Structure:**
```css
/* =================================================================
   Pattern Name — Component Description
   ================================================================= */

/* 1. Base Pattern (max 100 lines) */
.wpn-pattern-name {
  /* Base styles */
}

/* 2. Modifiers (max 100 lines) */
.wpn-pattern-name--variant {
  /* Variant styles */
}

/* 3. Elements (max 80 lines) */
.wpn-pattern-name__element {
  /* Element styles */
}

/* 4. States (max 20 lines) */
.wpn-pattern-name:hover {
  /* State styles */
}
```

**If > 300 lines:**
1. **Split by variant:** `hero-simple.css`, `hero-complex.css`, `hero-fullscreen.css`
2. **Extract shared base:** `hero-base.css` imported by all variants
3. **Reduce modifier complexity:** Convert CSS variants to data-driven inline styles with CSS variables

### Block CSS (`/src/styles/blocks/`)

**Maximum Size:** 200 lines (strict)

**Blocks should be small and focused:**
```css
/* =================================================================
   Block Name — Atomic Component
   ================================================================= */

/* 1. Base Block (max 80 lines) */
.wpn-block-name {
  /* Base styles */
}

/* 2. Variants (max 60 lines) */
.wpn-block-name--primary {
  /* Variant styles */
}

/* 3. States (max 40 lines) */
.wpn-block-name:hover,
.wpn-block-name:focus {
  /* State styles */
}

/* 4. Responsive (max 20 lines) */
@media (min-width: 768px) {
  /* Minimal responsive adjustments */
}
```

**If > 200 lines:**
1. Block is too complex — split into multiple blocks
2. Extract common base styles to parent pattern
3. Reduce number of variants (use props instead)

### Utility CSS (`/src/styles/utilities/`)

**Maximum Size:** 250 lines per category

**Split utilities by category:**
```
/utilities/
  ├─ spacing.css       ← Margin, padding utilities
  ├─ typography.css    ← Text size, weight, alignment
  ├─ layout.css        ← Display, flex, grid utilities
  ├─ colors.css        ← Color utilities
  └─ index.css         ← Imports all utilities
```

**If utility file > 250 lines:**
1. Split by subcategory (spacing-margin.css, spacing-padding.css)
2. Reduce utility classes (rely more on design tokens)
3. Consider if utilities should be component styles instead

---

## CSS Import Organization

### Critical Rule: Proper Import Chain

**All CSS must flow through a clear import hierarchy:**

```css
/* /src/styles/index.css (ENTRY POINT) */
@import "./theme-variables.css";  /* 1. Variables first */
@import "./theme.css";             /* 2. Base theme */
@import "./global.css";            /* 3. Global styles */
@import "./utilities.css";         /* 4. Utilities */

/* Blocks */
@import "./blocks/index.css";      /* 5. Atomic components */

/* Patterns */
@import "./patterns/index.css";    /* 6. Composed sections */

/* Parts */
@import "./parts/index.css";       /* 7. Template parts */

/* Templates */
@import "./templates/index.css";   /* 8. Page templates */
```

**Each category has a barrel import:**

```css
/* /src/styles/blocks/index.css */
@import "./button.css";
@import "./card.css";
@import "./input.css";
@import "./badge.css";
/* ... */
```

### Anti-Pattern: Double Imports

**❌ FORBIDDEN — Importing CSS in both component and globally:**

```tsx
// Component file (DON'T DO THIS)
import '@/styles/templates/home.css';  // ❌ Component import

export function Home() { ... }
```

```css
/* /src/styles/index.css (DON'T DO THIS) */
@import "./templates/home.css";  /* ❌ Global import */
```

**Result:** CSS loads twice, doubles file size

**✅ CORRECT — Import once at global level:**

```tsx
// Component file (DO THIS)
// NO CSS import here

export function Home() { ... }
```

```css
/* /src/styles/templates/index.css (DO THIS) */
@import "./home.css";  /* ✅ Only global import */
```

---

## Routes File Special Rule

### routes.tsx Maximum: 500 lines

**Current issue:** Monolithic routes file becomes unmaintainable

**Solution:** Split into route groups

**Before (❌):**
```tsx
// /src/app/routes.tsx (1,147 lines — TOO LARGE)
export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  // ... 200+ more routes
]);
```

**After (✅):**
```tsx
// /src/app/routes.tsx (< 100 lines)
import { homeRoutes } from './routes/home';
import { aboutRoutes } from './routes/about';
import { noticeRoutes } from './routes/notices';
import { accountRoutes } from './routes/account';
import { authRoutes } from './routes/auth';

export const router = createBrowserRouter([
  ...homeRoutes,
  ...aboutRoutes,
  ...noticeRoutes,
  ...accountRoutes,
  ...authRoutes,
]);
```

```tsx
// /src/app/routes/notices.ts (< 150 lines)
import { SearchResults } from '@/pages/SearchResults';
import { CategoryArchive } from '@/pages/CategoryArchive';
import { SingleNotice } from '@/pages/SingleNotice';

export const noticeRoutes = [
  {
    path: "/search",
    Component: SearchResults,
  },
  {
    path: "/category/:slug",
    Component: CategoryArchive,
  },
  {
    path: "/notice/:slug",
    Component: SingleNotice,
  },
  // Afrikaans equivalents
  // ...
];
```

---

## Splitting Strategies

### When to Split a File

**Triggers:**
1. File exceeds threshold for its type
2. Multiple developers report confusion about file contents
3. Git blame shows multiple unrelated concerns
4. Linter or IDE performance degrades
5. Code review takes > 30 minutes per file
6. File contains multiple domains/concerns

### How to Split by File Type

#### TSX Pages: Extract Patterns

**Before:**
```tsx
// Home.tsx (850 lines)
export function Home() {
  return (
    <div>
      <header>{/* 150 lines */}</header>
      <section>{/* 300 lines of hero */}</section>
      <section>{/* 250 lines of features */}</section>
      <section>{/* 150 lines of CTA */}</section>
    </div>
  );
}
```

**After:**
```tsx
// Home.tsx (80 lines)
import { Header } from '@/components/parts/Header';
import { Hero } from '@/components/patterns/Hero';
import { FeatureGrid } from '@/components/patterns/FeatureGrid';
import { CTABanner } from '@/components/patterns/CTABanner';

export function Home() {
  return (
    <>
      <Header />
      <Hero {...heroData} />
      <FeatureGrid {...featuresData} />
      <CTABanner {...ctaData} />
    </>
  );
}
```

#### TS Data: Split by Category

**Before:**
```ts
// notices.ts (1,200 lines)
export const notices = [
  // 600 estates notices
  // 400 tenders notices
  // 200 liquor notices
];
```

**After:**
```ts
// notices/estates.ts (600 lines)
export const estatesNotices = [ /* ... */ ];

// notices/tenders.ts (400 lines)
export const tendersNotices = [ /* ... */ ];

// notices/liquor.ts (200 lines)
export const liquorNotices = [ /* ... */ ];

// notices/index.ts (20 lines)
export { estatesNotices } from './estates';
export { tendersNotices } from './tenders';
export { liquorNotices } from './liquor';

export const notices = [
  ...estatesNotices,
  ...tendersNotices,
  ...liquorNotices,
];
```

#### CSS: Split by Concern

**Before:**
```css
/* page-home.css (920 lines) */
.wpn-home { /* 200 lines */ }
.wpn-home__hero { /* 300 lines */ }
.wpn-home__features { /* 250 lines */ }
.wpn-home__testimonials { /* 170 lines */ }
```

**After:**
```css
/* page-home.css (100 lines - base layout only) */
@import "./home-hero.css";
@import "./home-features.css";
@import "./home-testimonials.css";

.wpn-home {
  /* Base container styles only */
}

/* home-hero.css (300 lines) */
.wpn-home__hero { /* ... */ }

/* home-features.css (250 lines) */
.wpn-home__features { /* ... */ }

/* home-testimonials.css (170 lines) */
.wpn-home__testimonials { /* ... */ }
```

---

## Audit Compliance

### Automated Checks

**Run these commands to find violations:**

```bash
# Find TSX files > 400 lines
find src/app/pages -name "*.tsx" -exec wc -l {} \; | awk '$1 > 400 {print $2 " has " $1 " lines"}'

# Find component files > 600 lines
find src/app/components -name "*.tsx" -exec wc -l {} \; | awk '$1 > 600 {print $2 " has " $1 " lines"}'

# Find data files > 500 lines
find src/app/data -name "*.ts" -exec wc -l {} \; | awk '$1 > 500 {print $2 " has " $1 " lines"}'

# Find CSS files > 400 lines
find src/styles -name "*.css" -exec wc -l {} \; | awk '$1 > 400 {print $2 " has " $1 " lines"}'
```

### Manual Review Checklist

**Before committing large files, check:**

- [ ] File is under threshold for its type
- [ ] File has single responsibility / domain
- [ ] Repeated code has been extracted to reusable components
- [ ] Data is separated from logic/presentation
- [ ] CSS uses design tokens (no hardcoded values)
- [ ] Imports are organized and necessary
- [ ] No commented-out code > 10 lines
- [ ] File can be understood in < 5 minutes

---

## Exceptions

### When Thresholds Don't Apply

**Acceptable exceptions:**
1. **Generated files** — TypeScript types from API schemas
2. **Third-party libraries** — Imported packages
3. **Migration files** — Temporary files during refactor (must be resolved)
4. **Data fixtures** — Test data files (separate from production data)

**These files must be documented with comments explaining why they exceed limits.**

---

## Design System Compliance

### Non-Negotiable

All file splitting and optimization MUST maintain:

✅ **100% CSS variable usage**
- All colors via `var(--nova-primary)`, `var(--nova-accent)`, etc.
- All spacing via `var(--space-4)`, `var(--space-6)`, etc.
- All typography via `var(--font-family-heading)`, `var(--font-family-body)`

✅ **Font-face compliance**
- ONLY use fonts defined in CSS
- No hardcoded font families

✅ **BEM class naming**
- `.wpn-block`
- `.wpn-block__element`
- `.wpn-block--modifier`

✅ **WordPress-aligned utilities**
- Utility classes follow WordPress patterns
- No Tailwind arbitrary values

✅ **User control via CSS**
- Users can update entire site by editing CSS files
- No inline hardcoded values

---

## Success Metrics

### Project-Level Targets

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Average TSX page size | TBD | < 300 lines | 🔲 |
| Average component size | TBD | < 250 lines | 🔲 |
| Average data file size | TBD | < 400 lines | 🔲 |
| Average CSS file size | TBD | < 300 lines | 🔲 |
| Files > 800 lines | TBD | 0 | 🔲 |
| Files > 600 lines | TBD | < 5 | 🔲 |
| CSS double-imports | TBD | 0 | 🔲 |

**Run `optimise memory` to measure current status and generate improvement plan.**

---

## Related Documentation

- **[wordpress-component-architecture.md](./wordpress-component-architecture.md)** — Component hierarchy
- **[css-architecture.md](./design-tokens/css-architecture.md)** — CSS organization
- **[css-variables-reference.md](./design-tokens/css-variables-reference.md)** — Design tokens
- **[optimise.md](../prompts/optimise.md)** — Master optimization orchestrator
- **[optimise-memory.md](../prompts/optimise-memory.md)** — Memory optimization prompt

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial file size limits and optimization guidelines |
