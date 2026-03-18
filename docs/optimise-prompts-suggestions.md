# Optimise Prompts — Additional Recommendations

**Category:** Documentation  
**Version:** 1.0.0  
**Date:** 2026-03-18  
**Status:** Recommendations

---

## Overview

Suggested additional `optimise` prompts to create for comprehensive codebase optimization coverage.

**Already Created:**
- ✅ `optimise` — Master orchestrator
- ✅ `optimise memory` — File size & memory optimization

**To Create:** 15 additional prompts

---

## High Priority Optimizations

### 1. Optimise Performance
**Trigger:** `optimise performance`

**Purpose:** Improve runtime performance and reduce Time to Interactive

**Focus Areas:**
- Code splitting and lazy loading
- React component memoization
- Expensive computation optimization
- Re-render reduction
- Virtual scrolling for long lists
- Debouncing and throttling
- Web Vitals optimization (LCP, FID, CLS)

**Audit Actions:**
- Profile component render times
- Identify unnecessary re-renders
- Find expensive computations
- Analyze bundle size
- Check for render-blocking resources

**Deliverables:**
- Performance metrics report
- Lazy loading implementation plan
- Memoization opportunities
- Bundle size reduction plan

---

### 2. Optimise Assets
**Trigger:** `optimise assets`

**Purpose:** Reduce static asset sizes and improve loading performance

**Focus Areas:**
- Image compression and optimization
- Modern image format adoption (WebP, AVIF)
- SVG optimization
- Font subsetting
- Asset lazy loading
- CDN strategy
- Cache headers

**Audit Actions:**
- Scan for uncompressed images
- Check image format usage
- Identify oversized SVGs
- Find unused font glyphs
- Analyze cache strategy

**Deliverables:**
- Asset optimization report
- Image compression plan
- Format conversion recommendations
- Lazy loading strategy

---

### 3. Optimise CSS
**Trigger:** `optimise css`

**Purpose:** Reduce CSS file sizes and improve stylesheet efficiency

**Focus Areas:**
- Remove unused CSS selectors
- Consolidate duplicate rules
- Reduce specificity wars
- Optimize import chains
- Critical CSS extraction
- CSS minification
- Remove !important usage

**Audit Actions:**
- Scan for unused selectors (PurgeCSS style)
- Find duplicate rules
- Identify high specificity
- Map CSS import dependencies
- Check for inline styles that should be CSS

**Deliverables:**
- CSS optimization report
- Unused selector list
- Consolidation opportunities
- Import chain diagram

---

### 4. Optimise Components
**Trigger:** `optimise components`

**Purpose:** Reduce component count and improve reusability

**Focus Areas:**
- Consolidate similar components
- Extract repeated JSX patterns
- Reduce component variants
- Improve prop interfaces
- Create shared base components
- Implement compound components
- Reduce prop drilling

**Audit Actions:**
- Find similar components
- Identify repeated JSX patterns
- Count component variants
- Analyze prop complexity
- Check component hierarchy depth

**Deliverables:**
- Component consolidation plan
- Repeated pattern catalog
- Variant reduction opportunities
- Shared component recommendations

---

### 5. Optimise Data
**Trigger:** `optimise data`

**Purpose:** Improve data structure and reduce data file sizes

**Focus Areas:**
- Normalize data structures
- Remove duplicate data
- Implement data caching
- Optimize data loading
- Split large data files
- Create data indexes
- Use data compression

**Audit Actions:**
- Find duplicate data entries
- Identify denormalized data
- Check data file sizes
- Analyze data access patterns
- Find unused data exports

**Deliverables:**
- Data optimization report
- Normalization plan
- Caching strategy
- Data splitting recommendations

---

## Medium Priority Optimizations

### 6. Optimise Accessibility (A11y)
**Trigger:** `optimise accessibility` or `optimise a11y`

**Purpose:** Improve accessibility compliance and user experience

**Focus Areas:**
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast
- Touch target sizes
- Form accessibility

**Audit Actions:**
- Run automated accessibility tests
- Check ARIA implementation
- Test keyboard navigation
- Verify focus indicators
- Check color contrast ratios
- Measure touch targets

**Deliverables:**
- Accessibility audit report
- WCAG 2.1 AA compliance checklist
- Keyboard navigation improvements
- Screen reader optimization plan

---

### 7. Optimise SEO
**Trigger:** `optimise seo`

**Purpose:** Improve search engine optimization and discoverability

**Focus Areas:**
- Meta tags (title, description)
- Open Graph tags
- Schema markup (JSON-LD)
- Internal linking
- Sitemap generation
- Robots.txt
- Canonical URLs
- Bilingual SEO (hreflang)

**Audit Actions:**
- Check meta tag coverage
- Verify Open Graph implementation
- Identify missing schema markup
- Analyze internal linking
- Generate sitemap
- Check bilingual SEO setup

**Deliverables:**
- SEO audit report
- Meta tag implementation plan
- Schema markup recommendations
- Internal linking strategy

---

### 8. Optimise Fonts
**Trigger:** `optimise fonts`

**Purpose:** Reduce font loading impact and improve typography performance

**Focus Areas:**
- Font subsetting (remove unused glyphs)
- Font format optimization (WOFF2)
- Font loading strategy (swap, optional)
- Font preloading
- Variable font usage
- System font fallbacks
- Font display optimization

**Audit Actions:**
- Identify font usage
- Check font file sizes
- Analyze font loading strategy
- Find unused font weights/styles
- Check for font-display property

**Deliverables:**
- Font optimization report
- Subsetting plan
- Loading strategy recommendations
- Variable font opportunities

---

### 9. Optimise Images
**Trigger:** `optimise images`

**Purpose:** Reduce image file sizes and improve image loading

**Focus Areas:**
- Image compression
- Responsive images (srcset)
- Modern formats (WebP, AVIF)
- Lazy loading
- Image dimensions
- Placeholder strategies (blur, LQIP)
- Art direction

**Audit Actions:**
- Scan for uncompressed images
- Check for missing responsive images
- Identify format optimization opportunities
- Verify lazy loading implementation
- Check for missing width/height

**Deliverables:**
- Image optimization report
- Compression recommendations
- Format conversion plan
- Responsive image strategy

---

### 10. Optimise Bundle
**Trigger:** `optimise bundle`

**Purpose:** Reduce JavaScript bundle size and improve loading performance

**Focus Areas:**
- Code splitting
- Tree shaking
- Dynamic imports
- Bundle analysis
- Dependency audit
- Package size analysis
- Remove unused dependencies

**Audit Actions:**
- Generate bundle analysis report
- Identify large dependencies
- Find unused imports
- Check for duplicate dependencies
- Analyze code splitting opportunities

**Deliverables:**
- Bundle analysis report
- Code splitting plan
- Dependency optimization recommendations
- Tree shaking improvements

---

## Low Priority / Specialized Optimizations

### 11. Optimise Forms
**Trigger:** `optimise forms`

**Purpose:** Improve form performance and user experience

**Focus Areas:**
- Form validation optimization
- Debounced input handling
- Progressive enhancement
- Form state management
- Error handling
- Auto-save functionality
- Form accessibility

**Audit Actions:**
- Identify form validation bottlenecks
- Check debouncing implementation
- Verify error handling
- Test form accessibility
- Analyze form state complexity

**Deliverables:**
- Form optimization report
- Validation performance improvements
- User experience enhancements
- Accessibility fixes

---

### 12. Optimise Routing
**Trigger:** `optimise routing`

**Purpose:** Improve routing performance and code organization

**Focus Areas:**
- Route-based code splitting
- Lazy loading routes
- Route prefetching
- Route organization
- Nested route optimization
- Route parameter handling

**Audit Actions:**
- Check route bundle sizes
- Identify lazy loading opportunities
- Analyze route organization
- Check for route duplication
- Verify bilingual route pairs

**Deliverables:**
- Routing optimization report
- Code splitting strategy
- Route organization improvements
- Lazy loading implementation

---

### 13. Optimise Animation
**Trigger:** `optimise animation`

**Purpose:** Improve animation performance and reduce jank

**Focus Areas:**
- CSS animation vs JavaScript
- Transform and opacity optimization
- Will-change usage
- requestAnimationFrame
- Reduced motion support
- Animation performance profiling

**Audit Actions:**
- Identify expensive animations
- Check for layout thrashing
- Verify reduced motion support
- Profile animation performance
- Check GPU acceleration

**Deliverables:**
- Animation optimization report
- Performance improvements
- Reduced motion implementation
- GPU acceleration recommendations

---

### 14. Optimise State
**Trigger:** `optimise state`

**Purpose:** Improve state management and reduce complexity

**Focus Areas:**
- State normalization
- Context optimization
- Prop drilling reduction
- State colocation
- Derived state elimination
- State persistence
- State debugging

**Audit Actions:**
- Identify state complexity
- Find prop drilling patterns
- Check context performance
- Analyze derived state
- Verify state organization

**Deliverables:**
- State optimization report
- State normalization plan
- Context optimization recommendations
- Prop drilling solutions

---

### 15. Optimise Caching
**Trigger:** `optimise caching`

**Purpose:** Improve caching strategies and reduce network requests

**Focus Areas:**
- HTTP cache headers
- Service worker caching
- Data caching (SWR, React Query)
- Asset caching
- API response caching
- localStorage usage
- Cache invalidation

**Audit Actions:**
- Check cache header configuration
- Identify caching opportunities
- Analyze network requests
- Verify cache invalidation
- Check stale-while-revalidate

**Deliverables:**
- Caching strategy report
- Cache header recommendations
- Service worker implementation
- Data caching strategy

---

### 16. Optimise Testing
**Trigger:** `optimise testing`

**Purpose:** Improve test suite performance and coverage

**Focus Areas:**
- Test execution speed
- Test organization
- Mock optimization
- Test coverage gaps
- Flaky test identification
- Parallel test execution

**Audit Actions:**
- Profile test execution times
- Identify slow tests
- Check test coverage
- Find flaky tests
- Analyze test organization

**Deliverables:**
- Test optimization report
- Slow test improvements
- Coverage improvement plan
- Test organization recommendations

---

## Prompt Creation Priority

### Sprint 1 (Create These First)
1. ✅ `optimise` — Master orchestrator (DONE)
2. ✅ `optimise memory` — File size optimization (DONE)
3. `optimise performance` — Runtime performance
4. `optimise assets` — Static asset optimization
5. `optimise css` — CSS optimization
6. `optimise components` — Component consolidation

### Sprint 2 (High Value)
7. `optimise accessibility` — A11y improvements
8. `optimise seo` — SEO optimization
9. `optimise data` — Data structure optimization
10. `optimise bundle` — Bundle size reduction

### Sprint 3 (Specialized)
11. `optimise fonts` — Font optimization
12. `optimise images` — Image optimization
13. `optimise routing` — Route optimization
14. `optimise forms` — Form optimization

### Sprint 4 (Advanced)
15. `optimise animation` — Animation performance
16. `optimise state` — State management
17. `optimise caching` — Caching strategy
18. `optimise testing` — Test suite optimization

---

## Trigger Word Patterns

### Single Word Triggers (Recommended)
```
optimise           → Run master orchestrator
optimize           → Alias for optimise
```

### Two Word Triggers (Specific)
```
optimise memory     → File size optimization
optimise performance → Runtime performance
optimise assets     → Static assets
optimise css        → CSS optimization
optimise components → Component consolidation
optimise data       → Data structures
optimise a11y       → Accessibility
optimise seo        → Search optimization
optimise fonts      → Font optimization
optimise images     → Image optimization
optimise bundle     → Bundle size
optimise forms      → Form optimization
optimise routing    → Route optimization
optimise animation  → Animation performance
optimise state      → State management
optimise caching    → Cache strategy
optimise testing    → Test suite
```

### Aliases (British/American)
```
optimise → optimize
optimise a11y → optimize a11y
optimise accessibility → optimize accessibility
```

---

## Orchestrator Integration

### Master Orchestrator Execution Order

**When running `optimise` (master):**

1. **Analysis Phase** (parallel):
   - optimise memory (analysis)
   - optimise performance (analysis)
   - optimise assets (analysis)
   - optimise css (analysis)
   - optimise components (analysis)

2. **Prioritization Phase**:
   - Combine all analysis reports
   - Create priority matrix (P0-P3)
   - Generate master optimization plan

3. **Execution Phase** (sequential by priority):
   - Execute P0 optimizations
   - Execute P1 optimizations
   - Execute P2 optimizations
   - Execute P3 optimizations

4. **Verification Phase**:
   - Run automated tests
   - Verify performance improvements
   - Check bundle size reduction
   - Confirm functionality intact

---

## Success Metrics Template

### Every Optimise Prompt Should Track:

**Before/After Metrics:**
- File sizes (bytes)
- Line counts
- Performance scores
- Bundle sizes
- Network requests
- Load times

**Improvement Targets:**
- 20-30% reduction (aggressive)
- 10-20% reduction (standard)
- 5-10% reduction (conservative)

**Quality Gates:**
- No functionality broken
- No accessibility regressions
- Design system compliance maintained
- Tests passing

---

## Design System Compliance

### All Optimise Prompts MUST Enforce:

✅ **CSS Variables**
- All colors via `var(--nova-primary)`, etc.
- All spacing via `var(--space-*)`, etc.
- All typography via `var(--font-family-*)`, etc.

✅ **Font-Face Compliance**
- ONLY use fonts defined in CSS
- No hardcoded font families

✅ **BEM Class Naming**
- `.wpn-block`, `.wpn-block__element`, `.wpn-block--modifier`

✅ **User Control**
- Users can update styling via CSS files
- No inline hardcoded values

✅ **Accessibility**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support

---

## Related Documentation

- **[optimise.md](../prompts/optimise.md)** — Master orchestrator
- **[optimise-memory.md](../prompts/optimise-memory.md)** — Memory optimization
- **[file-size-limits.md](../guidelines/file-size-limits.md)** — File size guidelines
- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — Component structure
- **[prompt-triggers.md](../prompts/prompt-triggers.md)** — Trigger registry

---

## Next Steps

1. Review and prioritize prompt creation
2. Create Sprint 1 prompts (performance, assets, css, components)
3. Update trigger registry with new optimise prompts
4. Test master orchestrator workflow
5. Document optimization best practices

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial optimise prompt recommendations |
