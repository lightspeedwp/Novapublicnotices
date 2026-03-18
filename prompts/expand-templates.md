# Expand Templates — Template Pattern Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand templates`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Analyze codebase for repeated page patterns, identify opportunities for reusable page templates, and recommend template abstractions that reduce duplication while maintaining flexibility.

---

## Scope

This prompt analyzes:
- Repeated page layouts
- Similar component compositions
- Shared content structures
- Common data patterns
- WordPress template hierarchy alignment

---

## Analysis Process

### Phase 1: Identify Page Patterns

**Scan for repeated structures:**

1. **Hero + Content + CTA Pattern**
   - Pages with similar hero sections
   - Standard content layout
   - Bottom CTA section
   - Example: About, Contact, Sales, Help pages

2. **Archive/Listing Pattern**
   - Grid or list of items
   - Filter sidebar
   - Pagination
   - Example: Category archives, Search results

3. **Detail/Single Pattern**
   - Header with metadata
   - Main content area
   - Sidebar with related content
   - Example: Notice detail, Article detail

4. **Dashboard Pattern**
   - Navigation sidebar
   - Main content area with widgets/cards
   - Summary statistics
   - Example: My Account, Admin Dashboard, Moderation Queue

5. **Form Wizard Pattern**
   - Multi-step forms
   - Progress indicator
   - Back/Next navigation
   - Example: Submit Notice, Registration, Checkout

6. **Landing Page Pattern**
   - Hero section
   - Feature blocks
   - Testimonials
   - FAQ
   - CTA
   - Example: Homepage, Sales pages, Marketing pages

---

## Template Recommendation Format

```markdown
## Recommended Template: {Template Name}

**Template Type:** {Archive/Single/Dashboard/Form/Landing/etc.}  
**Pattern Detected:** {Description}  
**Pages Using Pattern:** {number}

**Current Implementation:**
- {Page 1} — {Similarity percentage}
- {Page 2} — {Similarity percentage}
- {Page 3} — {Similarity percentage}

**Shared Structure:**

1. **Common Sections:**
   ```
   <PageTemplate>
     <Hero />
     <MainContent>
       {children}
     </MainContent>
     <Sidebar />
     <RelatedContent />
   </PageTemplate>
   ```

2. **Variable Sections:**
   - Hero variant: {Options}
   - Sidebar content: {Options}
   - Footer CTA: {Options}

**Proposed Template Component:**

```typescript
// /src/app/components/templates/ArchiveTemplate.tsx

interface ArchiveTemplateProps {
  hero?: HeroData;
  filters?: FilterConfig;
  items: any[];
  itemComponent: React.ComponentType<{ item: any }>;
  pagination?: PaginationConfig;
  sidebar?: React.ReactNode;
}

export function ArchiveTemplate({
  hero,
  filters,
  items,
  itemComponent: ItemComponent,
  pagination,
  sidebar
}: ArchiveTemplateProps) {
  return (
    <>
      {hero && <Hero {...hero} />}
      <div className="wp-layout-constrained">
        <div className="wp-layout-flex">
          {filters && <FilterSidebar config={filters} />}
          <main>
            <div className="wp-grid-archive">
              {items.map(item => (
                <ItemComponent key={item.id} item={item} />
              ))}
            </div>
            {pagination && <Pagination {...pagination} />}
          </main>
          {sidebar && <aside>{sidebar}</aside>}
        </div>
      </div>
    </>
  );
}
```

**Data Structure:**

```typescript
// /src/app/data/templates/archive-template.ts

export interface ArchiveTemplateData {
  hero: HeroData;
  filters: FilterConfig;
  sidebar: SidebarData;
  pagination: PaginationConfig;
}
```

**Benefits:**
- Reduces duplication by {percentage}%
- Ensures consistent layout
- Easier to maintain shared patterns
- Aligns with WordPress template hierarchy

**Migration Effort:** {Low/Medium/High}

**Pages to Migrate:**
1. `/category/:slug` — {Complexity}
2. `/search` — {Complexity}
3. `/browse` — {Complexity}

**Acceptance Criteria:**
- [ ] Template component created
- [ ] All identified pages migrated
- [ ] No visual regressions
- [ ] Bilingual support maintained
- [ ] Data-driven content preserved
```

---

## Template Categories

### 1. Archive Templates

**Pattern:**
- Listing of items (notices, articles, etc.)
- Filtering/sorting
- Pagination
- Sidebar with filters or related content

**Pages that could use this:**
- Category archives
- Search results
- Location-based listings
- Date-based archives
- Tag/keyword archives

### 2. Single/Detail Templates

**Pattern:**
- Header with metadata
- Main content area
- Sidebar with related items
- Footer with actions

**Pages that could use this:**
- Notice detail
- Help article detail
- Case study detail
- Team member detail

### 3. Dashboard Templates

**Pattern:**
- Sidebar navigation
- Header with user info
- Main content area with cards/widgets
- Quick actions

**Pages that could use this:**
- My Account dashboard
- Admin dashboard
- Moderation queue
- Analytics overview

### 4. Form Templates

**Pattern:**
- Progress indicator (multi-step)
- Form fields
- Validation feedback
- Back/Next/Submit actions
- Help text/tooltips

**Pages that could use this:**
- Submit notice
- Registration
- Checkout
- Profile editing

### 5. Landing Page Templates

**Pattern:**
- Hero section
- Feature blocks (3-column or 2-column)
- Social proof (testimonials, logos)
- FAQ accordion
- Bottom CTA

**Pages that could use this:**
- Homepage
- Sales landing pages
- Marketing pages (For Businesses, For Legal Professionals)
- Product pages

### 6. Legal/Documentation Templates

**Pattern:**
- TOC sidebar
- Long-form content
- Section anchors
- Last updated date
- Print-friendly option

**Pages that could use this:**
- Terms of service
- Privacy policy
- Help documentation
- Legal compliance pages

---

## WordPress Template Hierarchy Alignment

**Standard WordPress templates to consider:**

```
archive.php      → ArchiveTemplate.tsx
single.php       → SingleTemplate.tsx
page.php         → PageTemplate.tsx
front-page.php   → HomeTemplate.tsx
search.php       → SearchTemplate.tsx
404.php          → ErrorTemplate.tsx
```

**Specialized templates:**

```
archive-{category}.php     → CategoryArchiveTemplate.tsx
single-{post-type}.php     → NoticeDetailTemplate.tsx
page-{template}.php        → LandingPageTemplate.tsx
```

---

## Template Props Pattern

**Standard props for all templates:**

```typescript
interface BaseTemplateProps {
  locale: 'en' | 'af';
  meta?: PageMeta;
  hero?: HeroData;
  breadcrumbs?: BreadcrumbData[];
  sidebar?: SidebarData;
  footer?: FooterData;
  children?: React.ReactNode;
}
```

**Template-specific props:**

```typescript
// Archive Template
interface ArchiveTemplateProps extends BaseTemplateProps {
  items: any[];
  filters?: FilterConfig;
  pagination?: PaginationConfig;
  itemComponent: React.ComponentType<any>;
}

// Single Template
interface SingleTemplateProps extends BaseTemplateProps {
  content: any;
  relatedItems?: any[];
  shareOptions?: ShareConfig;
  printable?: boolean;
}

// Dashboard Template
interface DashboardTemplateProps extends BaseTemplateProps {
  navigation: NavItem[];
  widgets: WidgetConfig[];
  quickActions?: ActionConfig[];
}
```

---

## Report Format

Generate: `/reports/YYYY-MM-DD-template-recommendations.md`

```markdown
# Template Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Pages Analyzed:** {number}  
**Patterns Identified:** {number}  
**Templates Recommended:** {number}

---

## Executive Summary

Analyzed {N} pages and identified {N} distinct layout patterns. Recommending {N} reusable templates that would reduce code duplication by approximately {percentage}% and improve maintainability.

**Top Template Opportunities:**
1. Archive Template — {N} pages could use this
2. Dashboard Template — {N} pages could use this
3. Landing Page Template — {N} pages could use this

---

## Pattern Analysis

### Pattern 1: Archive/Listing Pages

**Pages with this pattern:**
- `/category/:slug` (11 categories) — 90% similar
- `/search` — 85% similar
- `/browse` — 95% similar

**Shared elements:**
- Hero section with title/description
- Filter sidebar (left or top)
- Grid of notice cards
- Pagination (bottom)

**Variations:**
- Filter configuration differs by page
- Grid columns (2, 3, or 4)
- Card content emphasis

**Recommended Template:** ArchiveTemplate

[Full template details]

---

## Template Recommendations

### 1. ArchiveTemplate

[Full recommendation]

**Priority:** High  
**Migration Effort:** Medium  
**Pages Affected:** 15  
**Code Reduction:** ~45%

### 2. DashboardTemplate

[Full recommendation]

**Priority:** Medium  
**Migration Effort:** Low  
**Pages Affected:** 6  
**Code Reduction:** ~60%

---

## Migration Roadmap

### Phase 1: High-Impact Templates
1. **ArchiveTemplate** (Week 1)
   - Create template component
   - Migrate search page (test)
   - Migrate category archives
   - Migrate browse pages

2. **SingleTemplate** (Week 2)
   - Create template component
   - Migrate notice detail
   - Migrate help articles

### Phase 2: Medium-Impact Templates
3. **DashboardTemplate** (Week 3)
   - Create template component
   - Migrate my account
   - Migrate moderation queue

4. **LandingPageTemplate** (Week 4)
   - Create template component
   - Migrate homepage
   - Migrate sales pages

---

## Code Examples

### Before (Duplicated Code)

**CategoryArchive.tsx:**
```tsx
export function CategoryArchive() {
  return (
    <>
      <Hero title={data.title} description={data.description} />
      <div className="container">
        <FilterSidebar />
        <div className="grid">
          {notices.map(notice => <NoticeCard {...notice} />)}
        </div>
        <Pagination />
      </div>
    </>
  );
}
```

**SearchResults.tsx:**
```tsx
export function SearchResults() {
  return (
    <>
      <Hero title={data.title} description={data.description} />
      <div className="container">
        <FilterSidebar />
        <div className="grid">
          {results.map(notice => <NoticeCard {...notice} />)}
        </div>
        <Pagination />
      </div>
    </>
  );
}
```

### After (Using Template)

**CategoryArchive.tsx:**
```tsx
import { ArchiveTemplate } from '../templates/ArchiveTemplate';

export function CategoryArchive() {
  return (
    <ArchiveTemplate
      hero={data.hero}
      filters={categoryFilters}
      items={notices}
      itemComponent={NoticeCard}
      pagination={paginationConfig}
    />
  );
}
```

**SearchResults.tsx:**
```tsx
import { ArchiveTemplate } from '../templates/ArchiveTemplate';

export function SearchResults() {
  return (
    <ArchiveTemplate
      hero={data.hero}
      filters={searchFilters}
      items={results}
      itemComponent={NoticeCard}
      pagination={paginationConfig}
    />
  );
}
```

---

## Benefits Summary

| Template | Pages Affected | Code Reduced | Maintenance Improved |
|----------|----------------|--------------|----------------------|
| ArchiveTemplate | 15 | 45% | High |
| SingleTemplate | 8 | 40% | High |
| DashboardTemplate | 6 | 60% | Medium |
| LandingPageTemplate | 5 | 35% | Medium |
| FormTemplate | 4 | 50% | High |
| **Total** | **38** | **~46%** | **High** |

---

## Next Steps

1. Review template recommendations
2. Prioritize based on code duplication impact
3. Create template components
4. Migrate pages in phases
5. Test for regressions
6. Update documentation

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[expand-patterns.md](./expand-patterns.md)** — Component pattern analysis
- **[Guidelines.md](../guidelines/Guidelines.md)** — Template standards
```

---

## Success Criteria

✅ All pages analyzed for patterns  
✅ Repeated structures identified  
✅ Template abstractions proposed  
✅ WordPress alignment considered  
✅ Migration effort estimated  
✅ Code reduction calculated  
✅ Roadmap created  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[expand-patterns.md](./expand-patterns.md)** — Component patterns
- **[expand-components.md](./expand-components.md)** — Component recommendations
- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial template expansion analysis prompt |
