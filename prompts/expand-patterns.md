# Expand Patterns — Block Pattern Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand patterns`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Analyze templates for repeated UI sections that could be extracted into reusable block patterns (WordPress-aligned content blocks that can be composed into pages).

---

## Scope

Identifies:
- Repeated UI sections across pages
- Common content structures
- Reusable block patterns
- WordPress block alignment opportunities

---

## Block Pattern Categories

### 1. Hero Patterns
- Hero with centered content
- Hero with image background
- Hero with video background
- Hero with breadcrumbs
- Hero with search bar
- Hero with category pills

### 2. Feature Block Patterns
- 3-column features
- 2-column features
- Icon + text blocks
- Image + text alternating
- Stats blocks
- Testimonial grids

### 3. Call-to-Action Patterns
- Full-width CTA
- Inline CTA
- Card-based CTA
- Bottom page CTA
- Sticky CTA
- Multi-CTA options

### 4. Content Section Patterns
- Text + sidebar
- Two-column layout
- Image gallery
- Video embed
- Accordion FAQ
- Tabs interface

### 5. Navigation Patterns
- Breadcrumbs
- Pagination
- Filter sidebar
- Sort dropdown
- Tag cloud
- Category grid

---

## Report Format

Generate: `/reports/YYYY-MM-DD-pattern-recommendations.md`

```markdown
# Block Pattern Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Templates Analyzed:** {number}  
**Patterns Identified:** {number}  
**Reusable Blocks Recommended:** {number}

---

## Executive Summary

Analyzed page templates and identified {N} repeated UI sections that could be extracted into reusable block patterns, reducing duplication by {percentage}%.

---

## Pattern Recommendations

### Pattern: Three-Column Feature Block

**Detected In:**
- Homepage (3 occurrences)
- Sales page (2 occurrences)
- About page (1 occurrence)

**Current Implementation (Duplicated):**
```tsx
<div className="wp-features-grid">
  <div className="wp-feature-card">
    <Icon />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  {/* Repeated 2 more times */}
</div>
```

**Recommended Block Component:**
```tsx
// /src/app/components/blocks/FeaturesBlock.tsx

interface Feature {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

interface FeaturesBlockProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: 'icon-top' | 'icon-left' | 'icon-inline';
}

export function FeaturesBlock({
  features,
  columns = 3,
  variant = 'icon-top'
}: FeaturesBlockProps) {
  return (
    <div className={`wp-features-grid wp-features-grid--${columns}col`}>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} variant={variant} />
      ))}
    </div>
  );
}
```

**Usage:**
```tsx
<FeaturesBlock
  features={pageData.features}
  columns={3}
  variant="icon-top"
/>
```

**Benefits:**
- Single source of truth for feature blocks
- Consistent styling
- Easy to add new variants
- Data-driven content

**Migration Effort:** Low  
**Impact:** High (used on 6 pages)

---

{Repeat for each pattern...}

---

## WordPress Block Alignment

| Pattern | WordPress Equivalent | Our Component |
|---------|----------------------|---------------|
| Three-column features | `core/columns` + `core/media-text` | `FeaturesBlock` |
| Hero with CTA | `core/cover` | `HeroBlock` |
| Stats grid | `core/group` | `StatsBlock` |
| Testimonials | Custom block | `TestimonialsBlock` |
| FAQ accordion | `core/details` | `AccordionBlock` |

---

## Implementation Roadmap

### Phase 1: High-Use Patterns
1. FeaturesBlock (6 pages)
2. CTABlock (8 pages)
3. StatsBlock (5 pages)

### Phase 2: Medium-Use Patterns
4. TestimonialsBlock (3 pages)
5. AccordionBlock (4 pages)

---

## Next Steps

1. Create block components in `/src/app/components/blocks/`
2. Extract data structures
3. Migrate pages to use blocks
4. Create block composition examples

---

## Related Documentation

- **[expand-templates.md](./expand-templates.md)** — Page template analysis
- **[expand-components.md](./expand-components.md)** — Component recommendations
```

---

## Success Criteria

✅ Repeated UI sections identified  
✅ Block patterns proposed  
✅ WordPress alignment considered  
✅ Migration plan created  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[expand-templates.md](./expand-templates.md)** — Template analysis
- **[expand-components.md](./expand-components.md)** — Component analysis

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial pattern expansion analysis prompt |
