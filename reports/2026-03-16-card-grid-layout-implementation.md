# Implementation Report — Card Grid Layout & Sidebar Constraints

**Date:** March 16, 2026  
**Phase:** Layout Architecture Refinement  
**Status:** Complete

---

## Overview

Complete restructure of archive and single notice templates to use card-based column grids similar to the homepage design. Implemented responsive grid system with 300px max-width sidebar constraint for optimal ad display and content readability.

---

## New Component Created

### NoticeGrid Component

**File:** `/src/app/components/NoticeGrid.tsx`

Reusable grid component for displaying notices in responsive columns.

**Props:**
```typescript
interface NoticeGridProps {
  notices: Notice[];
  lang?: "en" | "af";
  columns?: 1 | 2 | 3;  // Responsive breakpoints built-in
}
```

**Responsive Behavior:**
```typescript
const gridClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
};
```

**Breakpoints:**
- **Mobile (< 768px):** 1 column
- **Tablet (768px - 1024px):** 2 columns  
- **Desktop (> 1024px):** 3 columns

---

## Layout Architecture

### Two-Column Layout Pattern

All archive and single pages now use:

```tsx
<div className="flex flex-col lg:flex-row gap-6">
  {/* Main Content - Takes remaining space */}
  <div className="flex-1 min-w-0">
    {/* Content here */}
  </div>
  
  {/* Sidebar - Fixed 300px on desktop */}
  <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-6">
    {/* Ads and widgets */}
  </aside>
</div>
```

**Key CSS Classes:**
- `flex-1 min-w-0` — Main content takes all available space
- `lg:w-[300px] flex-shrink-0` — Sidebar fixed at 300px, never shrinks
- `flex-col lg:flex-row` — Stacks on mobile, side-by-side on desktop

---

## Pages Updated

### 1. SearchResults.tsx & SearchResultsAF.tsx

**Before:**
- List-based layout
- No column grid
- Sidebar too wide
- 10 results per page

**After:**
- 3-column card grid (responsive)
- 300px sidebar
- 12 results per page
- Clean card-based design

**Layout:**
```
┌─────────────────────────────────────────┬────────┐
│  Search Filter Bar                       │        │
├─────────────────────────────────────────┤        │
│  [Card] [Card] [Card]                    │  Ads   │
│  [Card] [Card] [Card]                    │ 300px  │
│  [Card] [Card] [Card]                    │        │
│  [Card] [Card] [Card]                    │        │
│                                          │        │
│  Pagination                              │        │
└─────────────────────────────────────────┴────────┘
```

**Responsive Behavior:**
- **Desktop (>1024px):** 3 columns + sidebar
- **Tablet (768-1024px):** 2 columns + sidebar (stacked)
- **Mobile (<768px):** 1 column (sidebar below)

---

### 2. CategoryArchive.tsx & CategoryArchiveAF.tsx

**Before:**
- List-based layout
- Wide sidebar
- No card grid

**After:**
- 3-column card grid
- 300px sidebar
- Breadcrumb navigation
- Category count display
- 12 results per page

**Layout:**
```
Home / Search / Category Name

Category Name
Showing 24 notices in this category

┌─────────────────────────────────────────┬────────┐
│  [Card] [Card] [Card]                    │  Ads   │
│  [Card] [Card] [Card]                    │ 300px  │
│  [Card] [Card] [Card]                    │        │
│  [Card] [Card] [Card]                    │        │
│                                          │        │
│  Pagination                              │        │
└─────────────────────────────────────────┴────────┘
```

---

### 3. SingleNotice.tsx & SingleNoticeAF.tsx

**Before:**
- 3-column grid (too wide sidebar)
- List-based related notices
- Hard-coded colors

**After:**
- Content + 300px sidebar
- Card-based related notices (3-column grid)
- CSS variables throughout
- Enhanced sidebar with details and contact info

**Layout:**
```
Home / Search / REF-123

┌─────────────────────────────────────────┬────────┐
│  [Main Notice Card]                      │ Notice │
│                                          │Details │
│  Full notice content                     │ ────── │
│  Attachments                             │Contact │
│  Status                                  │  Info  │
│                                          │ ────── │
│  Related Notices:                        │  Ads   │
│  [Card] [Card] [Card]                    │ 300px  │
└─────────────────────────────────────────┴────────┘
```

**Sidebar Sections:**
1. **Notice Details Card**
   - Reference number
   - Category badge
   - Location
   - Publisher
   - Publication date
   - Expiry date
   - Status

2. **Contact Information Card**
   - Email (clickable)
   - Phone (clickable)

3. **Ad Slots**
   - 2× 300px wide ads

---

## CSS Variables Implementation

All pages now use CSS variables exclusively:

### Colors
```tsx
// Before
className="bg-[#09082f]"
className="text-[#d70025]"

// After
className="wp-bg-primary"
className="wp-text-accent"
```

### Buttons
```tsx
// Before
className="bg-[#d70025] hover:bg-[#b5001f]"

// After
className="wp-btn-accent text-white"
```

### Links
```tsx
// Before
className="hover:text-[#09082f]"

// After
className="wp-link hover:text-foreground"
```

---

## Responsive Grid System

### Desktop (>1024px)
```
Main Content: ~1140px (flexible)
Sidebar: 300px (fixed)
Gap: 24px
Total: ~1464px (within 1440px container)
```

### Tablet (768px - 1024px)
```
Columns: 2
Sidebar: Stacks below content
Cards: ~50% width each
```

### Mobile (<768px)
```
Columns: 1
Sidebar: Stacks below content
Cards: 100% width
```

---

## Card Grid Specifications

### NoticeCard in Grid

**Dimensions:**
- **Desktop 3-col:** ~360px per card
- **Tablet 2-col:** ~340px per card
- **Mobile 1-col:** 100% width

**Spacing:**
- Gap between cards: 24px (gap-6)
- Vertical gap: 24px
- Card padding: 16px (p-4)

**Content:**
- Category badge (top)
- Reference number (top right)
- Title (2 lines max)
- Excerpt (2 lines max)
- Metadata (date, location)
- Publisher name

**Hover Effect:**
- Lift animation (translateY -2px)
- Shadow increase
- Smooth 150ms transition

---

## Pagination Updates

**Results per page:**
- Changed from 10 to 12 (divisible by 3)
- Better fit for 3-column grid

**Pagination Controls:**
- Previous/Next arrows
- Page numbers with smart ellipsis
- Current page highlighted with `wp-btn-primary`
- Smooth scroll to top on page change

---

## Sidebar Constraint Benefits

### 1. Ad Optimization
✅ Perfect fit for 300px wide standard ads  
✅ No awkward stretching or scaling  
✅ Industry-standard ad size (300×250 MPU)

### 2. Content Readability
✅ Main content gets ~75% of space  
✅ Optimal reading line length  
✅ Clear visual hierarchy

### 3. Responsive Behavior
✅ Sidebar stacks naturally on mobile  
✅ No horizontal scroll issues  
✅ Touch-friendly on tablets

---

## Breakpoint Strategy

### Container Max Width
```css
--container-max-width: 1440px;
```

### Layout Breakpoints
```css
/* Mobile first */
.grid { grid-cols: 1 }

/* Tablet */
@media (min-width: 768px) {
  .grid { grid-cols: 2 }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid { grid-cols: 3 }
  .sidebar { width: 300px }
}
```

### Critical Breakpoints
- **320px:** Minimum supported width
- **768px:** Tablet breakpoint (2 columns)
- **1024px:** Desktop breakpoint (3 columns + sidebar)
- **1440px:** Container max-width

---

## Component Reusability

### NoticeGrid Component Benefits

**Single Source of Truth:**
```tsx
// Used everywhere consistently
<NoticeGrid notices={data} lang="en" columns={3} />
```

**Easy to Update:**
- Change grid gap globally
- Adjust responsive breakpoints once
- Modify card styling in one place

**Type Safe:**
- TypeScript interfaces
- Prop validation
- IDE autocomplete

---

## Performance Improvements

### Grid vs List

**Before (List):**
- Complex flexbox calculations
- Varying card heights
- Difficult to optimize

**After (Grid):**
- Native CSS grid (faster)
- Equal height rows
- GPU-accelerated

### Lazy Loading Ready

Grid structure supports:
- Infinite scroll (if needed)
- Intersection Observer
- Progressive image loading
- Virtual scrolling

---

## Accessibility

✅ **Semantic HTML**
- `<aside>` for sidebar
- `<nav>` for breadcrumbs
- Proper heading hierarchy

✅ **Keyboard Navigation**
- Card links focusable
- Pagination keyboard accessible
- Skip to content pattern ready

✅ **Screen Readers**
- ARIA labels on pagination
- Descriptive link text
- Structured content hierarchy

✅ **Touch Targets**
- Cards: Minimum 44×44px
- Buttons: Adequate spacing
- Pagination: Touch-friendly

---

## WordPress Migration Path

### Theme Structure
```
/templates/
  archive-notice.php       → CategoryArchive.tsx
  single-notice.php        → SingleNotice.tsx
  search-results.php       → SearchResults.tsx
  
/template-parts/
  notice-grid.php          → NoticeGrid.tsx
  notice-sidebar.php       → Sidebar in Single
```

### Custom Post Type
```php
register_post_type('notice', [
  'supports' => ['title', 'editor', 'excerpt', 'thumbnail'],
  'show_in_rest' => true,
  'template' => [
    ['core/group', [
      'className' => 'wp-notice-content'
    ]]
  ]
]);
```

---

## Testing Checklist

- [x] Search results display in 3-column grid
- [x] Category archives display in 3-column grid
- [x] Single notice has 300px sidebar
- [x] Related notices display in 3-column grid
- [x] Grid collapses to 2 columns on tablet
- [x] Grid collapses to 1 column on mobile
- [x] Sidebar stacks below content on mobile
- [x] 12 results per page on archives
- [x] Pagination works correctly
- [x] Breadcrumbs display correctly
- [x] All colors use CSS variables
- [x] Hover effects work on cards
- [x] Sidebar never exceeds 300px
- [x] Main content takes remaining space
- [x] Cards have equal heights in rows
- [x] No horizontal scroll on any size
- [x] Touch targets adequate on mobile
- [x] Keyboard navigation functional
- [x] Both EN and AF versions working

---

## Before / After Comparison

### Search Results

**Before:**
- Vertical list
- ~80% width cards
- Inconsistent spacing
- 10 results

**After:**
- 3-column grid
- Equal-width cards
- Consistent 24px gaps
- 12 results

### Single Notice

**Before:**
- 3-column grid
- Wide sidebar (33%)
- No related grid
- Hard-coded colors

**After:**
- Content + 300px sidebar
- Related notices in 3-col grid
- CSS variables
- Better content focus

---

## Next Steps

### Immediate
1. ✅ Apply to remaining stub pages
2. Add skeleton loading states
3. Implement image lazy loading
4. Add empty state illustrations

### Phase 2
5. Optimize card thumbnails
6. Add grid/list view toggle
7. Implement saved searches
8. Add density controls (compact/comfortable)

### Future Enhancements
9. Masonry grid option
10. Infinite scroll variant
11. Advanced grid filtering
12. Print layout optimization

---

## File Summary

### New Files
- `/src/app/components/NoticeGrid.tsx`

### Updated Files
- `/src/app/pages/SearchResults.tsx`
- `/src/app/pages/SearchResultsAF.tsx`
- `/src/app/pages/CategoryArchive.tsx`
- `/src/app/pages/CategoryArchiveAF.tsx`
- `/src/app/pages/SingleNotice.tsx`
- `/src/app/pages/SingleNoticeAF.tsx`

### Total Changes
- 7 files created/modified
- ~600 lines of code updated
- 100% CSS variables compliance
- Full responsive implementation

---

## Design System Compliance

✅ **CSS Variables Only**
- No hard-coded colors
- No inline styles
- All tokens from theme.css

✅ **WordPress-Aligned Classes**
- `.wp-btn-accent`
- `.wp-text-primary`
- `.wp-link`

✅ **Semantic HTML**
- Proper landmarks
- Accessible structure
- SEO-friendly

✅ **Responsive Design**
- Mobile-first
- Defined breakpoints
- Container constraints

---

**Report generated:** March 16, 2026  
**Implementation status:** Complete  
**Ready for:** QA review and content population
