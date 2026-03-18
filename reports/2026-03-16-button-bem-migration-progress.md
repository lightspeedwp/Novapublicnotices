# Button BEM Migration Progress Report

**Date:** 2026-03-16  
**Task:** Standardize all buttons to use BEM CSS classes and design system variables  
**Total Buttons:** 52 across 33 files

---

## ✅ Completed Tasks

### 1. **CSS Button System Created**

Added comprehensive button BEM classes to `/src/styles/utility-classes.css`:

```css
/* Base Button Class */
.wpn-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-family-body);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  transition: all var(--duration-fast) var(--ease-out);
  cursor: pointer;
  border: var(--border-width-1) solid transparent;
  white-space: nowrap;
}

/* Button Variants */
.wpn-button--primary   /* Nova primary color */
.wpn-button--accent    /* Nova accent/red color */
.wpn-button--outline   /* Transparent with border */
.wpn-button--white     /* White background for dark sections */
.wpn-button--destructive  /* Red for delete/danger actions */
.wpn-button--ghost     /* Transparent, no border */

/* Button Sizes */
.wpn-button--sm   /* Small */
.wpn-button--md   /* Medium (default) */
.wpn-button--lg   /* Large */

/* Special Variants */
.wpn-button--outline-inverse  /* White outline for dark backgrounds */
```

**All colors, spacing, borders, and typography use CSS variables from `/src/styles/theme-variables.css`**

---

### 2. **Files Fixed (8/33 complete)**

| File | Buttons Fixed | Status |
|------|---------------|--------|
| Home.tsx | 1 | ✅ Complete |
| HomeAF.tsx | 1 | ✅ Complete |
| SingleNotice.tsx | 2 | ✅ Complete |
| SingleNoticeAF.tsx | 2 | ✅ Complete |
| CategoryArchive.tsx | 1 | ✅ Complete |
| CategoryArchiveAF.tsx | 1 | ✅ Complete |
| Dashboard.tsx | 3 | ✅ Complete |

**Total: 11/52 buttons fixed (21% complete)**

---

## 🔧 Remaining Work

### **Priority 1: Account Pages** (15 buttons)

1. **DashboardAF.tsx** (5 buttons)
   - Lines 19, 28, 37, 46, 71
   - Pattern: `variant="outline"` → add `className="wpn-button wpn-button--outline"`

2. **MyNotices.tsx** (4 buttons)
   - Lines 129, 172, 179, 185
   - Pattern: Add `wpn-button` + variant classes

3. **Profile.tsx / ProfileAF.tsx** (4 buttons total)
   - Lines 111, 114, 164, 207 (each file has 2)
   - Pattern: Mix of accent and outline

4. **SavedSearches.tsx / SavedSearchesAF.tsx** (4 buttons total)
   - Lines 115, 303 (each file)
   - **CRITICAL:** Missing base class - `className="wpn-button--accent"` → `className="wpn-button wpn-button--accent"`

5. **Settings.tsx / SettingsAF.tsx** (6 buttons total)
   - Lines 387, 403, 415, 437, 451 (each file)
   - Lines 437 & 451: **Destructive buttons** - replace `border-red-300 text-red-700 hover:bg-red-100` with `wpn-button wpn-button--destructive`

---

### **Priority 2: Sales & Submit Pages** (12 buttons)

6. **Sales.tsx** (7 buttons)
   - Lines 173, 176, 389, 466, 581, 584, 606
   - Mix of outline and accent variants
   - Line 606: Remove inline `bg-white wpn-text--primary hover:bg-muted` - use BEM only

7. **SalesAF.tsx** (5 buttons)
   - Lines 66, 97, 114, 117
   - Similar patterns to Sales.tsx

8. **Entry.tsx / EntryAF.tsx** (8 buttons total)
   - Lines 156, 162, 247, 253 (each file)
   - Mix of variants including outline-inverse for dark backgrounds

---

### **Priority 3: Marketing Pages** (16 buttons)

9. **About.tsx** (2 buttons)
   - Lines 186, 191
   
10. **FAQ.tsx** (4 buttons)
    - Lines 196, 202, 226, 231

11. **Pricing.tsx / PricingAF.tsx** (4 buttons total)
    - Lines 362, 383, 389 (each file)

12. **Advertise.tsx / AdvertiseAF.tsx** (6 buttons total)
    - Lines 21, 24, 116, 145, 198, 201 (each file has 3)

---

## 📋 **Migration Patterns**

### Pattern 1: Simple Outline Button
```tsx
// ❌ BEFORE
<Button variant="outline" asChild>
  <Link to="/search">Browse</Link>
</Button>

// ✅ AFTER
<Button variant="outline" className="wpn-button wpn-button--outline" asChild>
  <Link to="/search">Browse</Link>
</Button>
```

### Pattern 2: Small Outline Button
```tsx
// ❌ BEFORE
<Button variant="outline" size="sm">
  <Download className="size-4 mr-2" />
  Download
</Button>

// ✅ AFTER
<Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--outline">
  <Download className="size-4 mr-2" />
  Download
</Button>
```

### Pattern 3: Missing Base Class
```tsx
// ❌ BEFORE
<Button className="wpn-button--accent gap-2">
  Create Alert
</Button>

// ✅ AFTER
<Button className="wpn-button wpn-button--accent gap-2">
  Create Alert
</Button>
```

### Pattern 4: Destructive Button
```tsx
// ❌ BEFORE
<Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
  Delete Account
</Button>

// ✅ AFTER
<Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--destructive">
  Delete Account
</Button>
```

### Pattern 5: Dark Background Outline
```tsx
// ❌ BEFORE
<Button size="lg" variant="outline" className="bg-white wpn-text--primary hover:bg-muted" asChild>
  <Link to="/pricing">View Pricing</Link>
</Button>

// ✅ AFTER
<Button size="lg" variant="outline" className="wpn-button wpn-button--lg wpn-button--outline-inverse" asChild>
  <Link to="/pricing">View Pricing</Link>
</Button>
```

---

## 🎯 **Benefits of Migration**

### Before Migration:
- ❌ 52 buttons using mixed Shadcn variants + inline Tailwind
- ❌ Inconsistent styling across portal
- ❌ Hard to maintain - changes require editing 33 files
- ❌ Not aligned with CSS design system

### After Migration:
- ✅ All buttons controlled by centralized BEM classes
- ✅ Consistent styling portal-wide
- ✅ Changes made via CSS variable updates only
- ✅ Full design system compliance
- ✅ All styling uses theme variables:
  - Colors: `var(--nova-primary)`, `var(--nova-accent)`
  - Spacing: `var(--space-2)`, `var(--space-4)`
  - Typography: `var(--font-family-body)`, `var(--text-sm)`
  - Borders: `var(--border-width-1)`, `var(--border-color-default)`
  - Radii: `var(--radius-md)`
  - Transitions: `var(--duration-fast)`, `var(--ease-out)`

---

## 📊 **Progress Summary**

| Category | Fixed | Remaining | Total |
|----------|-------|-----------|-------|
| High Priority Pages | 8 | 0 | 8 |
| Account Pages | 3 | 12 | 15 |
| Sales Pages | 0 | 12 | 12 |
| Marketing Pages | 0 | 16 | 16 |
| Auth Pages | 0 | 1 | 1 |
| **TOTAL** | **11** | **41** | **52** |

**Overall: 21% Complete**

---

## 🚀 **Next Steps**

1. Fix remaining account pages (DashboardAF, MyNotices, Profile, SavedSearches, Settings)
2. Fix sales and submit pages
3. Fix marketing pages  
4. Final QA pass
5. Update reports

---

**Status:** In Progress — CSS system complete, 8/33 files migrated
