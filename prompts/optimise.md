# Optimise — Master Optimization Orchestrator

**Category:** Orchestrator  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `optimise` or `optimize`  
**Status:** Active

---

## Purpose

Master orchestrator that runs all optimization sub-prompts in sequence to improve codebase performance, memory usage, bundle size, render speed, and maintainability.

**Reference Guidelines:**
- `/guidelines/file-size-limits.md` — File size thresholds
- `/guidelines/wordpress-component-architecture.md` — DRY component structure
- `/guidelines/design-tokens/css-variables-reference.md` — Design system enforcement

---

## Overview

This orchestrator coordinates multiple optimization prompts across different dimensions:
- Memory & file size
- Performance & speed
- Bundle size & assets
- Accessibility
- SEO
- Code quality

---

## Sub-Prompts Executed

### 1. Optimise Memory
**File:** `/prompts/optimise-memory.md`  
**Trigger:** `optimise memory`

Reduces codebase memory footprint by:
- Splitting oversized files (> 800 lines)
- Consolidating duplicate data
- Removing orphaned CSS
- Flattening component nesting
- Enforcing DRY architecture

**Output:** `/reports/YYYY-MM-DD-memory-optimization.md`

### 2. Optimise Performance
**File:** `/prompts/optimise-performance.md`  
**Trigger:** `optimise performance`

Improves runtime performance by:
- Lazy loading components
- Code splitting routes
- Optimizing re-renders
- Memoizing expensive computations
- Reducing bundle size

**Output:** `/reports/YYYY-MM-DD-performance-optimization.md`

### 3. Optimise Assets
**File:** `/prompts/optimise-assets.md`  
**Trigger:** `optimise assets`

Optimizes static assets by:
- Compressing images
- Optimizing SVGs
- Minifying CSS/JS
- Implementing caching strategies
- Using modern image formats (WebP, AVIF)

**Output:** `/reports/YYYY-MM-DD-asset-optimization.md`

### 4. Optimise Accessibility
**File:** `/prompts/optimise-accessibility.md`  
**Trigger:** `optimise accessibility` or `optimise a11y`

Improves accessibility by:
- Fixing ARIA labels
- Improving keyboard navigation
- Enhancing focus management
- Optimizing screen reader support
- Ensuring WCAG 2.1 AA compliance

**Output:** `/reports/YYYY-MM-DD-accessibility-optimization.md`

### 5. Optimise SEO
**File:** `/prompts/optimise-seo.md`  
**Trigger:** `optimise seo`

Improves search engine optimization by:
- Adding meta tags
- Implementing schema markup
- Improving internal linking
- Optimizing page titles and descriptions
- Generating sitemap

**Output:** `/reports/YYYY-MM-DD-seo-optimization.md`

### 6. Optimise Components
**File:** `/prompts/optimise-components.md`  
**Trigger:** `optimise components`

Refactors components for better reusability by:
- Consolidating similar components
- Extracting repeated patterns
- Reducing component variants
- Improving prop interfaces
- Enforcing DRY principles

**Output:** `/reports/YYYY-MM-DD-component-optimization.md`

### 7. Optimise CSS
**File:** `/prompts/optimise-css.md`  
**Trigger:** `optimise css`

Optimizes CSS architecture by:
- Removing unused selectors
- Consolidating duplicate rules
- Improving specificity
- Reducing file sizes
- Optimizing import chains

**Output:** `/reports/YYYY-MM-DD-css-optimization.md`

### 8. Optimise Data
**File:** `/prompts/optimise-data.md`  
**Trigger:** `optimise data`

Optimizes data architecture by:
- Normalizing data structures
- Removing duplicates
- Improving data loading
- Implementing caching
- Reducing data file sizes

**Output:** `/reports/YYYY-MM-DD-data-optimization.md`

---

## Execution Workflow

### Phase 1: Analysis

**Run all analysis prompts in parallel:**

1. Analyze file sizes (`optimise memory` — analysis phase)
2. Analyze performance metrics (`optimise performance` — analysis phase)
3. Analyze asset sizes (`optimise assets` — analysis phase)
4. Analyze accessibility (`optimise a11y` — analysis phase)
5. Analyze SEO (`optimise seo` — analysis phase)

**Output:** 5 analysis reports identifying issues and opportunities

### Phase 2: Prioritization

**Review analysis reports and create master priority list:**

1. **P0 (Critical):**
   - Files > 1,000 lines
   - Duplicate CSS pairs
   - Critical accessibility issues
   - Performance blockers

2. **P1 (High):**
   - Files 800-1,000 lines
   - Component consolidation opportunities
   - High-impact performance improvements
   - Major SEO gaps

3. **P2 (Medium):**
   - Files 600-800 lines
   - Asset optimization opportunities
   - Minor accessibility improvements
   - CSS cleanup

4. **P3 (Low):**
   - Code quality improvements
   - Documentation updates
   - Nice-to-have optimizations

### Phase 3: Execution

**Execute optimizations in priority order:**

1. **Critical optimizations** (P0)
   - Split oversized files
   - Remove duplicate CSS
   - Fix critical accessibility
   - Fix performance blockers

2. **High-priority optimizations** (P1)
   - Consolidate components
   - Optimize assets
   - Improve SEO
   - Performance enhancements

3. **Medium-priority optimizations** (P2)
   - CSS cleanup
   - Code quality improvements
   - Documentation updates

4. **Low-priority optimizations** (P3)
   - Nice-to-have improvements
   - Future enhancements

### Phase 4: Verification

**Verify optimizations:**

1. Run automated tests
2. Check bundle size reduction
3. Verify performance improvements
4. Confirm accessibility compliance
5. Test SEO improvements
6. Validate design system compliance

---

## Success Metrics

### File Size Targets

| Metric | Before | Target | After |
|--------|--------|--------|-------|
| Files > 1,000 lines | TBD | 0 | TBD |
| Files > 800 lines | TBD | < 5 | TBD |
| Files > 600 lines | TBD | < 10 | TBD |
| Average TSX file size | TBD | < 300 lines | TBD |
| Average CSS file size | TBD | < 300 lines | TBD |

### Performance Targets

| Metric | Before | Target | After |
|--------|--------|--------|-------|
| Bundle size (JS) | TBD | < 300 KB | TBD |
| Bundle size (CSS) | TBD | < 100 KB | TBD |
| First Contentful Paint | TBD | < 1.5s | TBD |
| Largest Contentful Paint | TBD | < 2.5s | TBD |
| Time to Interactive | TBD | < 3.5s | TBD |

### Quality Targets

| Metric | Before | Target | After |
|--------|--------|--------|-------|
| Accessibility score | TBD | 95+ | TBD |
| SEO score | TBD | 90+ | TBD |
| Best practices score | TBD | 90+ | TBD |
| Performance score | TBD | 85+ | TBD |

---

## Constraints

### Design System Compliance (Non-Negotiable)

All optimizations MUST maintain:

✅ **CSS Variables**
- All colors via `var(--nova-primary)`, etc.
- All spacing via `var(--space-*)`, etc.
- All typography via `var(--font-family-*)`, etc.

✅ **Font-Face Compliance**
- ONLY use fonts defined in CSS
- No hardcoded font families

✅ **BEM Class Naming**
- `.wpn-block`
- `.wpn-block__element`
- `.wpn-block--modifier`

✅ **WordPress-Aligned**
- Utility classes follow WordPress patterns
- Component structure aligns with WordPress

✅ **User Control**
- Users can update styling via CSS files
- No inline hardcoded values

### Functional Integrity

❌ **NEVER:**
- Delete service template files
- Remove functionality
- Break existing features
- Ignore accessibility
- Bypass design system

✅ **ALWAYS:**
- Test after changes
- Update imports
- Maintain functionality
- Preserve accessibility
- Follow design system

---

## Usage Examples

### Run All Optimizations

```
optimise
```

This runs all optimization sub-prompts in sequence.

### Run Specific Optimization

```
optimise memory
```

This runs only the memory optimization.

### Check Optimization Status

```
status optimise
```

This shows current optimization metrics and progress.

---

## Deliverables

### Reports Generated

**Analysis Reports:**
- `/reports/YYYY-MM-DD-memory-optimization.md`
- `/reports/YYYY-MM-DD-performance-optimization.md`
- `/reports/YYYY-MM-DD-asset-optimization.md`
- `/reports/YYYY-MM-DD-accessibility-optimization.md`
- `/reports/YYYY-MM-DD-seo-optimization.md`
- `/reports/YYYY-MM-DD-component-optimization.md`
- `/reports/YYYY-MM-DD-css-optimization.md`
- `/reports/YYYY-MM-DD-data-optimization.md`

**Summary Report:**
- `/reports/YYYY-MM-DD-optimization-summary.md`

### Task Lists Generated

- `/tasks/optimization-tasks.md` — Master optimization task list
- Updates to `/tasks/master-task-list.md`

### Metrics Dashboard

- `/docs/optimization-metrics.md` — Before/after metrics tracking

---

## Prompt Dependencies

**Required Guidelines:**
- `/guidelines/file-size-limits.md` ← File size thresholds
- `/guidelines/wordpress-component-architecture.md` ← Component structure
- `/guidelines/design-tokens/css-variables-reference.md` ← Design system

**Required Prompts (will be created if missing):**
- `optimise-memory.md`
- `optimise-performance.md`
- `optimise-assets.md`
- `optimise-accessibility.md`
- `optimise-seo.md`
- `optimise-components.md`
- `optimise-css.md`
- `optimise-data.md`

---

## Related Documentation

- **[file-size-limits.md](../guidelines/file-size-limits.md)** — File size guidelines
- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — DRY structure
- **[audit-performance.md](./audit-performance.md)** — Performance audit
- **[audit-accessibility.md](./audit-accessibility.md)** — Accessibility audit
- **[expand-components.md](./expand-components.md)** — Component analysis

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial master optimization orchestrator |
