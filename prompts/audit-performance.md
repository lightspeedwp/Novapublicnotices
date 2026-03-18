# Audit Performance — Render Performance & Asset Optimization

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `audit performance`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Audit the Nova Public Notices Portal codebase for performance bottlenecks — identify slow renders, heavy images, large assets, costly CSS effects, excessive re-renders, and bundle size issues. Propose concrete optimizations.

**When to Use:** After adding images to notice cards, building archive pages, implementing filters, or periodically as a quality gate before releases.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` (Section 16 - Performance rules)
- `/guidelines/performance-optimization.md`
- `/src/styles/theme.css` (Design tokens)

---

## Workflow Steps

### Step 1: Component Render Analysis

Scan all `.tsx` files in `/src/app/` for render performance issues:

1. **Inline object/array creation:** Find `style={{}}`, `className={[].join()}`, or object literals passed as props inside JSX — these create new references every render.
2. **Missing memoization:** Notice cards, search results, and archive grids that re-render frequently should use `React.memo`.
3. **Expensive computations in render:** Find `filter()`, `map()`, `sort()`, `reduce()` operations in search/filter logic not wrapped in `useMemo`.
4. **State management scope:** Filter state updates triggering unnecessary notice card re-renders.
5. **Event handler creation:** `onClick={() => ...}` in notice card loops without `useCallback`.

**Priority Files:**
- `/src/app/pages/SearchResults.tsx`
- `/src/app/pages/CategoryArchive.tsx`
- `/src/app/components/NoticeGrid.tsx`
- `/src/app/components/NoticeCard.tsx`
- `/src/app/components/SearchFilterBar.tsx`

### Step 2: Image & Asset Optimization

1. **Image dimensions:** Find `<img>` and `ImageWithFallback` elements without explicit `width`/`height` attributes — these cause layout shift (CLS).
2. **Image format:** Identify PNG images that could be WebP. Identify images > 100KB on notice cards.
3. **Lazy loading:** Notice card images and images below fold should use `loading="lazy"`.
4. **Category badge icons:** SVG icons should be optimized and < 5KB each.
5. **Ad placeholder images:** Verify ad placeholders don't use actual image files.
6. **Duplicate assets:** Find identical images imported in multiple locations.

**Note:** This project uses Unsplash for notice images. Check for:
- Appropriate image sizes requested from Unsplash
- Image URLs cached/memoized
- No oversized hero images

### Step 3: CSS Performance

1. **File sizes:** CSS files in `/src/styles/` should be modular — flag files > 400 lines.
2. **Selector complexity:** Find deeply nested selectors (> 4 levels) that slow CSS matching.
3. **Unused CSS:** Identify CSS classes defined but never referenced in any `.tsx` file.
4. **Import chain depth:** Trace `@import` chains — flag any that go > 3 levels deep.
5. **CSS variable usage:** Verify all colors/spacing use CSS variables (good for performance).

**Files to Check:**
- `/src/styles/theme.css`
- `/src/styles/global.css`
- Any component-specific CSS files

### Step 4: Search & Filter Performance

**Notice Search Optimization:**

1. **Search function complexity:** Check `/src/lib/search.ts` for inefficient loops.
2. **Filter memoization:** Verify filter results are memoized with `useMemo`.
3. **Debouncing:** Search input should debounce user input (300ms recommended).
4. **Result pagination:** Verify paginated results load incrementally, not all at once.
5. **Locale filtering:** Ensure locale-specific search doesn't search both languages.

**Data File Size:**

1. **Sample notices:** Check size of `/src/app/data/sampleNotices.ts` — flag if > 50 items.
2. **Expanded notices:** Check `/src/app/data/expandedNotices.ts` size.
3. **Category data:** Verify category definitions are appropriately sized.

### Step 5: Bundle & Import Analysis

1. **Large imports:** Find components that import heavy libraries — suggest code splitting.
2. **Lucide icons:** Verify Lucide React icons use named imports, not barrel imports.
   - ✅ `import { Search, Calendar } from "lucide-react"`
   - ❌ `import * as Icons from "lucide-react"`
3. **React Router:** Verify using `react-router` not `react-router-dom` (per project standards).
4. **Duplicate dependencies:** Check for libraries that provide overlapping functionality.

### Step 6: Notice-Specific Performance

**Archive Pages:**

1. **Grid rendering:** Verify `NoticeGrid` component efficiently renders 12 cards.
2. **Card virtualization:** For archives with > 50 notices, consider virtual scrolling.
3. **Category badges:** Badge rendering should be optimized (consider sprite sheets).
4. **Metadata rendering:** Date formatting should be memoized.

**Single Notice:**

1. **Related notices:** Related notices query should be memoized.
2. **Attachment previews:** PDF attachments shouldn't auto-load preview images.
3. **Sidebar rendering:** Metadata sidebar should only render visible sections.

### Step 7: Report

Save report to `/reports/YYYY-MM-DD-performance-audit.md` with:

```markdown
# Performance Audit — Nova Public Notices Portal

**Date:** YYYY-MM-DD  
**Status:** Complete

---

## Executive Summary
{Overall performance health}

## Component Render Issues
### NoticeCard Component
- Issue: Inline object creation in map loop
- File: `/src/app/components/NoticeCard.tsx`
- Fix: Extract handler to useCallback

### SearchResults Page
- Issue: Filter results not memoized
- File: `/src/app/pages/SearchResults.tsx`
- Fix: Wrap in useMemo with dependencies

## Image Optimization
- Notice cards: 24 images without dimensions
- Total size reduction opportunity: ~500KB
- Lazy loading missing: 18 images

## Bundle Analysis
- Total bundle size: {size}KB
- Largest imports: {list}
- Optimization opportunities: {list}

## Search & Filter Performance
- Search function: {status}
- Filter memoization: {status}
- Debouncing: {status}

## Fixes Applied
- [ ] Added memoization to notice filters
- [ ] Extracted event handlers
- [ ] Added lazy loading to images
- [ ] Optimized SVG icons

## Remaining Issues
### P1 (Visible Performance Impact)
- {issue}

### P2 (Measurable Impact)
- {issue}

### P3 (Optimization Opportunity)
- {issue}

## Metrics
- Components audited: {number}
- Images audited: {number}
- Performance wins: {number}
```

---

## Success Criteria

- [ ] No inline object/array creation in NoticeCard render
- [ ] All notice images have width/height attributes
- [ ] All below-fold images use `loading="lazy"`
- [ ] Search results memoized with useMemo
- [ ] Filter operations debounced
- [ ] Bundle size documented and reasonable
- [ ] No duplicate image imports
- [ ] Report saved to `/reports/`

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 16 (Performance)
- **[performance-optimization.md](../guidelines/performance-optimization.md)** — Full performance standards
- **[orchestrator.md](./orchestrator.md)** — Parent audit workflow

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial performance audit customized for Nova Public Notices Portal |
