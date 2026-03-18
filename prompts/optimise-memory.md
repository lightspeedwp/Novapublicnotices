# Optimise Memory — File Size & Memory Optimization

**Category:** Optimization  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `optimise memory` or `optimize memory`  
**Status:** Active  
**Parent:** optimise.md

---

## Purpose

Reduce codebase memory footprint by splitting oversized files, consolidating duplicate data, removing orphaned CSS, flattening component nesting, and enforcing DRY architecture across templates, patterns, data, and CSS.

**Adapted from:** LSX Design memory optimization prompts  
**Reference:** `/guidelines/file-size-limits.md`

---

## Audit Scope (6 Pillars)

### 1. Break Up Large Files

**Thresholds (from guidelines):**
- **Critical:** > 800 lines (split immediately)
- **High:** 600-800 lines (split or refactor)
- **Medium:** 400-600 lines (evaluate for extraction)

**File Categories to Audit:**

| Category | Location | Action |
|----------|----------|--------|
| **Pages (TSX)** | `/src/app/pages/` | Split if > 400 lines |
| **Components (TSX)** | `/src/app/components/` | Split if > 600 lines |
| **Data Files (TS)** | `/src/app/data/` | Split if > 500 lines |
| **Routes** | `/src/app/routes.tsx` | Split if > 500 lines |
| **Utilities (TS)** | `/src/app/lib/` | Split if > 200 lines |
| **Template CSS** | `/src/styles/templates/` | Split if > 400 lines |
| **Pattern CSS** | `/src/styles/patterns/` | Split if > 300 lines |
| **Block CSS** | `/src/styles/blocks/` | Split if > 200 lines |
| **Utility CSS** | `/src/styles/utilities/` | Split if > 250 lines |

**Splitting Strategies:**

#### Routes File
```tsx
// BEFORE: routes.tsx (> 500 lines)
export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  // ... 100+ more routes
]);

// AFTER: Split into route groups
// routes.tsx (< 100 lines)
import { homeRoutes } from './routes/home';
import { noticeRoutes } from './routes/notices';
import { accountRoutes } from './routes/account';
import { authRoutes } from './routes/auth';

export const router = createBrowserRouter([
  ...homeRoutes,
  ...noticeRoutes,
  ...accountRoutes,
  ...authRoutes,
]);
```

#### Data Files
```ts
// BEFORE: notices.ts (> 500 lines)
export const notices = [
  // 200 estates
  // 150 tenders
  // 100 liquor
  // 50 court orders
];

// AFTER: Split by category
// notices/estates.ts (200 lines)
export const estatesNotices = [ /* ... */ ];

// notices/tenders.ts (150 lines)
export const tendersNotices = [ /* ... */ ];

// notices/index.ts (barrel file)
export * from './estates';
export * from './tenders';
export * from './liquor';
export * from './court-orders';

export const allNotices = [
  ...estatesNotices,
  ...tendersNotices,
  ...liquorNotices,
  ...courtOrdersNotices,
];
```

#### CSS Files
```css
/* BEFORE: page-home.css (> 800 lines) */
.wpn-home { /* 200 lines */ }
.wpn-home__hero { /* 300 lines */ }
.wpn-home__features { /* 300 lines */ }

/* AFTER: Split by section */
/* page-home.css (< 100 lines - base only) */
@import "./home-hero.css";
@import "./home-features.css";

.wpn-home {
  /* Base container styles */
}
```

### 2. Remove Duplicate and Orphaned CSS (DRY)

**Critical Finding: Double Imports**

**Problem:** CSS files imported in BOTH component-level AND globally

**Example:**
```tsx
// Component (❌ DON'T)
import '@/styles/templates/home.css';

export function Home() { ... }
```

```css
/* index.css (❌ DON'T) */
@import "./templates/home.css";
```

**Result:** CSS loads twice, doubles file size

**Solution:**
```tsx
// Component (✅ DO)
// NO CSS import here

export function Home() { ... }
```

```css
/* templates/index.css (✅ DO) */
@import "./home.css";
```

**Audit Steps:**

1. **Find component-level CSS imports:**
   ```bash
   grep -r "import.*\.css" src/app --include="*.tsx"
   ```

2. **Find global CSS imports:**
   ```bash
   grep -r "@import" src/styles --include="*.css"
   ```

3. **Identify duplicates:**
   - Same CSS file imported in both places
   - Mark for removal from component

4. **Remove component imports:**
   - Delete `import '@/styles/...'` from TSX files
   - Keep only global imports in CSS

**Data File Consolidation:**

**Example duplicates to find:**
```
testimonials.ts + testimonials-extended.ts → Merge into one
faqs.ts + faqs-extended.ts → Merge or split by page
pages.ts + site-pages.ts → Clarify canonical source
hosting.ts + hosting-page.ts → Merge into one
```

**Consolidation Strategy:**

1. **Identify duplicates:**
   ```bash
   find src/app/data -name "*-extended.ts"
   find src/app/data -name "*-enhanced.ts"
   find src/app/data -name "*-page.ts"
   ```

2. **Compare content:**
   - Are they identical? → Delete one
   - Are they overlapping? → Merge unique entries
   - Are they superseded? → Keep latest, delete old

3. **Update imports:**
   - Find all files importing duplicates
   - Update to use consolidated version

### 3. CSS File Review & Reduction

**Files > Critical Threshold (split candidates):**

**Audit Command:**
```bash
find src/styles -name "*.css" -exec wc -l {} \; | awk '$1 > 400 {print $2 " has " $1 " lines (CRITICAL)"}'
find src/styles -name "*.css" -exec wc -l {} \; | awk '$1 > 300 && $1 <= 400 {print $2 " has " $1 " lines (HIGH)"}'
```

**Splitting Strategies by File Type:**

#### Template CSS (> 400 lines)
```css
/* SPLIT STRATEGY */
/* base.css - Container & layout (< 100 lines) */
/* hero.css - Hero section (< 150 lines) */
/* content.css - Content sections (< 150 lines) */
/* responsive.css - Media queries (< 100 lines) */
```

#### Pattern CSS (> 300 lines)
```css
/* SPLIT STRATEGY */
/* base.css - Base pattern (< 100 lines) */
/* variants.css - Variant modifiers (< 100 lines) */
/* states.css - Hover, focus, active (< 50 lines) */
/* responsive.css - Breakpoint adjustments (< 50 lines) */
```

#### Block CSS (> 200 lines)
**If block > 200 lines, it's too complex:**
- Split into multiple blocks
- Extract shared styles to pattern
- Reduce variants (use props instead)

### 4. Clean Up Layers & Components

**Hidden/Unused Layer Detection:**

#### Audit Steps:

**1. Find commented-out code (> 10 lines):**
```bash
# Find TSX comments
grep -r "{/\*" src/app --include="*.tsx" -A 10

# Find CSS comments
grep -r "^/\*" src/styles --include="*.css" -A 10
```

**2. Find unused imports:**
```bash
# TypeScript unused imports (requires tsc or eslint)
npx eslint src/ --ext .ts,.tsx --rule 'no-unused-vars: error'
```

**3. Find orphaned CSS files:**
```bash
# CSS files not imported anywhere
find src/styles -name "*.css" | while read cssfile; do
  basename=$(basename "$cssfile")
  if ! grep -rl "$basename" src/styles --include="*.css" > /dev/null 2>&1; then
    if ! grep -rl "$basename" src/app --include="*.tsx" > /dev/null 2>&1; then
      echo "ORPHANED: $cssfile"
    fi
  fi
done
```

**4. Find orphaned data exports:**
```bash
# Find exported data never imported
grep -r "export const" src/app/data --include="*.ts" | cut -d: -f2 | sed 's/export const //' | sed 's/ =.*//' | while read export; do
  if ! grep -r "import.*$export" src/app > /dev/null 2>&1; then
    echo "ORPHANED EXPORT: $export"
  fi
done
```

**Nested Layer Reduction:**

**Find excessive nesting:**
```bash
# Find components with deep JSX nesting
grep -r "<div" src/app/pages --include="*.tsx" | awk -F: '{print $1}' | sort | uniq -c | sort -rn | head -20
```

**Flattening Strategy:**
```tsx
// BEFORE: Excessive nesting (❌)
<div className="wrapper">
  <div className="container">
    <div className="inner">
      <div className="content">
        <div className="section">
          <h2>Title</h2>
        </div>
      </div>
    </div>
  </div>
</div>

// AFTER: Flattened with semantic HTML (✅)
<section className="wpn-section">
  <div className="wpn-container">
    <h2 className="wpn-heading-h2">Title</h2>
  </div>
</section>
```

### 5. Enforce DRY Architecture

**DRY Requirement:** All pages MUST use component hierarchy

**Component Structure (WordPress-aligned):**
```
/components/
  ├─ blocks/        ← Atomic UI (Button, Card, Badge)
  ├─ patterns/      ← Composed sections (Hero, FeatureGrid)
  ├─ parts/         ← Template parts (Header, Footer)
  └─ templates/     ← Page layouts (ArticleTemplate)

/pages/
  ├─ Home.tsx       ← Composes components (< 400 lines)
  └─ About.tsx      ← Composes components (< 400 lines)
```

**Anti-Pattern Detection:**

**Find pages with hardcoded structures:**
```bash
# Pages with > 400 lines (likely hardcoded)
find src/app/pages -name "*.tsx" -exec wc -l {} \; | awk '$1 > 400 {print $2 " has " $1 " lines"}'

# Pages with many <div> tags (likely not using components)
grep -c "<div" src/app/pages/*.tsx | awk -F: '$2 > 20 {print $1 " has " $2 " divs"}'
```

**Refactoring Strategy:**

```tsx
// BEFORE: Hardcoded page (850 lines)
export function Home() {
  return (
    <div className="home">
      <header>{/* 150 lines of nav */}</header>
      <section>{/* 300 lines of hero */}</section>
      <section>{/* 250 lines of features */}</section>
      <section>{/* 150 lines of CTA */}</section>
    </div>
  );
}

// AFTER: DRY composition (80 lines)
import { Header } from '@/components/parts/Header';
import { Hero } from '@/components/patterns/Hero';
import { FeatureGrid } from '@/components/patterns/FeatureGrid';
import { CTABanner } from '@/components/patterns/CTABanner';
import { homeHero, homeFeatures, homeCTA } from '@/data/home/home.en';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero {...homeHero} />
        <FeatureGrid items={homeFeatures} />
        <CTABanner {...homeCTA} />
      </main>
    </>
  );
}
```

**Extract Pattern Steps:**

1. **Identify repeated sections** (hero, features, CTA, etc.)
2. **Create pattern component** in `/components/patterns/`
3. **Create pattern CSS** in `/styles/patterns/`
4. **Move data to data files** in `/data/`
5. **Replace hardcoded JSX** with component import
6. **Test functionality** (ensure props work correctly)

### 6. Trim Component Variants

**Variant Analysis Targets:**

**Find component variants:**
```bash
# Find files with similar names (likely variants)
find src/app/components -name "*.tsx" | sed 's/.*\///' | sort | uniq -c | awk '$1 > 1 {print}'
```

**Consolidation Strategy:**

**BEFORE: Multiple components**
```tsx
// TestimonialCard.tsx (200 lines)
// TestimonialGrid.tsx (180 lines)
// TestimonialSlider.tsx (220 lines)
// TestimonialInline.tsx (150 lines)
// FeaturedTestimonial.tsx (180 lines)
// = 930 lines across 5 components
```

**AFTER: One component with variants**
```tsx
// Testimonial.tsx (300 lines)
interface TestimonialProps {
  layout: 'card' | 'grid' | 'slider' | 'inline' | 'featured';
  // ... other props
}

export function Testimonial({ layout, ...props }: TestimonialProps) {
  // Shared logic (50 lines)
  
  // Conditional rendering based on layout (250 lines)
  if (layout === 'card') return <TestimonialCardView {...props} />;
  if (layout === 'grid') return <TestimonialGridView {...props} />;
  // ...
}

// = 300 lines in 1 component (savings: 630 lines)
```

**Property Conversion Rules:**

| Difference | Solution |
|------------|----------|
| Only color differs | Add `color` prop |
| Only size differs | Add `size` prop |
| Only layout differs | Add `layout` prop |
| Only style differs | Add `variant` prop |

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Files > 800 lines | 0 | `find src -exec wc -l {} \; \| awk '$1 > 800'` |
| Files > 600 lines | < 5 | `find src -exec wc -l {} \; \| awk '$1 > 600'` |
| Duplicate CSS pairs | 0 | Manual audit + grep |
| Average TSX page size | < 300 lines | `find src/app/pages -name "*.tsx" -exec wc -l {} \; \| awk '{sum+=$1; count++} END {print sum/count}'` |
| Average CSS file size | < 300 lines | `find src/styles -name "*.css" -exec wc -l {} \; \| awk '{sum+=$1; count++} END {print sum/count}'` |
| Component variants | Reduce by 30% | Count before/after |
| Orphaned files | 0 | Manual audit |

---

## Execution Order

### Phase 1: Quick Wins (Immediate)

1. **Resolve duplicate CSS pairs** (find and remove double imports)
2. **Consolidate duplicate data files** (merge extended/enhanced versions)
3. **Remove orphaned files** (CSS, data exports never imported)
4. **Delete commented-out code** (> 10 lines)

**Estimated Savings:** 20-30% of total codebase

### Phase 2: File Splitting (This Sprint)

1. **Split routes.tsx** (if > 500 lines)
2. **Split CSS files > 800 lines** (critical threshold)
3. **Split data files > 500 lines** (by category or language)
4. **Split page files > 400 lines** (extract patterns)

**Estimated Savings:** Improves maintainability, reduces parse time

### Phase 3: DRY Enforcement (Next Sprint)

1. **Extract hardcoded page sections** to patterns
2. **Consolidate component variants** (reduce count by 30%)
3. **Create shared base CSS** for similar templates
4. **Flatten excessive nesting** (replace divs with semantic HTML)

**Estimated Savings:** 15-25% code reduction

### Phase 4: Layer Cleanup (Future)

1. **Remove unused imports** (ESLint auto-fix)
2. **Delete orphaned CSS selectors** (never used in JSX)
3. **Optimize component hierarchies** (reduce wrapper components)
4. **Document architecture** (prevent future bloat)

**Estimated Savings:** 10-15% code reduction

---

## Audit Commands

### File Size Analysis

```bash
# Find all files by size threshold
echo "=== CRITICAL (> 800 lines) ==="
find src -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs wc -l | awk '$1 > 800 {print $2 " : " $1 " lines"}' | sort -t: -k2 -rn

echo "=== HIGH (600-800 lines) ==="
find src -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs wc -l | awk '$1 > 600 && $1 <= 800 {print $2 " : " $1 " lines"}' | sort -t: -k2 -rn

echo "=== MEDIUM (400-600 lines) ==="
find src -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs wc -l | awk '$1 > 400 && $1 <= 600 {print $2 " : " $1 " lines"}' | sort -t: -k2 -rn
```

### Duplicate Detection

```bash
# Find potential duplicate files
find src/app/data -name "*-extended.ts" -o -name "*-enhanced.ts" -o -name "*-page.ts"

# Find double CSS imports
echo "=== CSS files imported in components ==="
grep -r "import.*\.css" src/app --include="*.tsx" | cut -d: -f2 | sort | uniq

echo "=== CSS files imported globally ==="
grep -r "@import" src/styles --include="*.css" | grep -v "^/\*" | sort | uniq
```

### Orphaned File Detection

```bash
# Find CSS files not imported
find src/styles -name "*.css" | while read f; do
  basename=$(basename "$f")
  if ! grep -rl "@import.*$basename" src/styles --include="*.css" > /dev/null 2>&1; then
    if ! grep -rl "import.*$basename" src/app --include="*.tsx" > /dev/null 2>&1; then
      echo "ORPHANED CSS: $f"
    fi
  fi
done
```

### Component Nesting Analysis

```bash
# Count JSX nesting depth
find src/app/pages -name "*.tsx" -exec sh -c 'echo "{}: $(grep -o "<div" {} | wc -l) divs"' \;
```

---

## Design System Compliance (Non-Negotiable)

All changes MUST maintain:

### CSS Variables ✅
```css
/* ✅ CORRECT */
color: var(--nova-primary);
background: var(--nova-accent);
padding: var(--space-4);
font-family: var(--font-family-heading);

/* ❌ FORBIDDEN */
color: #09082f;
background: #d70025;
padding: 16px;
font-family: 'Lexend';
```

### Font-Face Compliance ✅
```css
/* ✅ ONLY these fonts allowed */
--font-family-lexend: 'Lexend', sans-serif;
--font-family-heading: var(--font-family-lexend);
--font-family-body: var(--font-family-lexend);
```

### BEM Class Naming ✅
```css
/* ✅ CORRECT */
.wpn-hero { }
.wpn-hero__title { }
.wpn-hero--large { }

/* ❌ FORBIDDEN */
.hero { }
.heroTitle { }
.hero-lg { }
```

### User Control ✅
- Users can update entire site by editing CSS variables
- No inline hardcoded values
- No component-specific styling that bypasses CSS

---

## Deliverables

### 1. Audit Report
**File:** `/reports/YYYY-MM-DD-memory-optimization.md`

**Contents:**
- Current file size statistics
- Files exceeding thresholds (list with line counts)
- Duplicate CSS pairs identified
- Duplicate data files identified
- Orphaned files identified
- Estimated savings per action
- Prioritized task list

### 2. Task List
**File:** `/tasks/memory-optimization-tasks.md`

**Contents:**
- P0 tasks (critical files > 800 lines)
- P1 tasks (high priority 600-800 lines)
- P2 tasks (medium priority 400-600 lines)
- P3 tasks (cleanup and optimization)
- Estimated effort per task
- Dependencies between tasks

### 3. Updated Master Task List
**File:** `/tasks/master-task-list.md`

**Add memory optimization tasks** to existing sprint planning

---

## Related Documentation

- **[file-size-limits.md](../guidelines/file-size-limits.md)** — File size thresholds
- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — DRY structure
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — CSS organization
- **[css-variables-reference.md](../guidelines/design-tokens/css-variables-reference.md)** — Design tokens
- **[optimise.md](./optimise.md)** — Master orchestrator

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial memory optimization prompt (adapted from LSX Design) |
