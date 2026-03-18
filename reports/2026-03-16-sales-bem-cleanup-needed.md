# Sales.tsx BEM Cleanup Required — Report

**Date:** 2026-03-16  
**File:** `/src/app/pages/Sales.tsx`  
**Status:** ⚠️ **REQUIRES CLEANUP**  
**Violations Found:** 62+ hard-coded color/font values

---

## Summary

Sales.tsx contains 62+ hard-coded CSS violations that must be replaced with BEM classes and CSS variables to comply with the design system.

---

## Hard-Coded Violations

### Font Family Violations (15+)
**Pattern:** `font-raleway`  
**Should Be:** Use heading preset classes

**Examples:**
```tsx
❌ <h2 className="font-raleway text-3xl font-bold text-[#09082f]">
✅ <h2 className="wpn-heading-h2 wpn-heading--primary">

❌ <h3 className="font-raleway text-2xl font-bold text-[#09082f]">
✅ <h3 className="wpn-heading-h3 wpn-heading--primary">

❌ <h3 className="font-raleway text-xl font-bold text-[#09082f]">
✅ <h3 className="wpn-heading-h4 wpn-heading--primary">
```

**Locations:**
- Line 99: Section heading "How It Works"
- Line 110: Step 1 heading
- Line 197: Step 2 heading
- Line 272: Step 3 heading
- Line 352: "Publication Options" heading
- Line 361: "Digital Only" heading
- Line 401: "Digital + Print" heading
- Line 438: "Premium" heading
- Line 479: "Why Choose" heading
- Line 524: "FAQ" heading

---

### Primary Color Text Violations (20+)
**Pattern:** `text-[#09082f]`  
**Should Be:** `wpn-text--primary`

**Examples:**
```tsx
❌ <h2 className="text-3xl font-bold text-[#09082f]">
✅ <h2 className="wpn-heading-h2 wpn-heading--primary">

❌ <h4 className="font-semibold text-[#09082f]">
✅ <h4 className="wpn-heading-h5 wpn-heading--primary">

❌ <h5 className="font-semibold text-sm text-[#09082f]">
✅ <h5 className="wpn-heading-h6 wpn-heading--primary">
```

**Locations:**
- Line 99, 110, 120, 149, 197, 272, 324, 332, 352, 361, 401, 438, 479, 524

---

### Accent Color Text Violations (35+)
**Pattern:** `text-[#d70025]`  
**Should Be:** `wpn-text--accent`

**Examples:**
```tsx
❌ <Check className="size-4 text-[#d70025]" />
✅ <Check className="size-4 wpn-text--accent" />

❌ <Zap className="size-12 text-[#d70025]" />
✅ <Zap className="size-12 wpn-text--accent" />

❌ <div className="text-3xl font-bold text-[#d70025]">
✅ <div className="text-3xl font-bold wpn-text--accent">
```

**Locations:**
- Line 123, 127, 131, 135, 139 (Step 1 checkmarks)
- Line 208, 220, 232, 244 (Step 2 icons)
- Line 360, 364, 369, 373, 377, 381, 385 (Digital Only card)
- Line 400, 404, 409, 413, 417, 421, 425 (Digital + Print card)
- Line 437, 441, 446, 450, 454, 458, 462 (Premium card)
- Line 485, 493, 501, 509 (Feature icons)
- Line 531 (FAQ icon)

---

### Accent Background Violations (5+)
**Pattern:** `bg-[#d70025]`  
**Should Be:** `wpn-bg--accent`

**Examples:**
```tsx
❌ <div className="bg-[#d70025] rounded-full">
✅ <div className="wpn-bg--accent rounded-full">

❌ <Button className="bg-[#d70025] hover:bg-[#b5001f]">
✅ <Button className="wpn-button wpn-button--accent">
```

**Locations:**
- Line 106: Step 1 badge
- Line 193: Step 2 badge
- Line 268: Step 3 badge
- Line 143: "Submit Online" button
- Line 396: "MOST POPULAR" badge
- Line 429: "View Details" button (Print card)

---

### Accent Border Violations (5+)
**Pattern:** `border-[#d70025]`  
**Should Be:** `wpn-border--accent`

**Examples:**
```tsx
❌ <div className="border-l-4 border-[#d70025]">
✅ <div className="border-l-4 wpn-border--accent">

❌ <Card className="border-2 border-[#d70025]">
✅ <Card className="border-2 wpn-border--accent">

❌ <Card className="hover:border-[#d70025]">
✅ <Card className="hover:wpn-border--accent">
```

**Locations:**
- Line 119: Step 1 left border
- Line 358: Digital Only card hover
- Line 395: Digital + Print card border
- Line 435: Premium card hover

---

### Button Hover Violations (4+)
**Pattern:** `hover:bg-[#b5001f]`  
**Should Be:** Use `wpn-button--accent` (handles hover automatically)

**Examples:**
```tsx
❌ <Button className="bg-[#d70025] hover:bg-[#b5001f]">
✅ <Button className="wpn-button wpn-button--accent">
```

**Locations:**
- Line 143: "Submit Online"
- Line 429: "View Details" (Print)
- Line 598: "Contact Us"
- Line 621: "Submit Notice Online"

---

## Required BEM Classes

### Create New Utility Classes

#### Step Badge (Number Circle)
```css
/* In utility-classes.css */
.wpn-step-badge {
  width: var(--space-16);
  height: var(--space-16);
  background-color: var(--nova-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}
```

**Usage:**
```tsx
❌ <div className="size-16 bg-[#d70025] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
✅ <div className="wpn-step-badge">
```

#### Icon Badge (Small Circle)
```css
.wpn-icon-badge {
  width: var(--space-8);
  height: var(--space-8);
  background-color: var(--gray-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.wpn-icon-badge__icon {
  width: var(--space-4);
  height: var(--space-4);
  color: var(--nova-accent);
}
```

**Usage:**
```tsx
❌ <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
     <FileText className="size-4 text-[#d70025]" />
   </div>

✅ <div className="wpn-icon-badge">
     <FileText className="wpn-icon-badge__icon" />
   </div>
```

#### Accent Left Border
```css
.wpn-border-left--accent {
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: var(--nova-accent);
}
```

**Usage:**
```tsx
❌ <div className="border-l-4 border-[#d70025] pl-4">
✅ <div className="wpn-border-left--accent pl-4">
```

---

## Systematic Replacement Guide

### 1. Section Headings (H2)
```tsx
// Pattern
❌ <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-12 text-center">
✅ <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center mb-12">
```

### 2. Step Headings (H3)
```tsx
// Pattern
❌ <h3 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">
✅ <h3 className="wpn-heading-h3 wpn-heading--primary mb-4">
```

### 3. Card Headings (H3)
```tsx
// Pattern
❌ <h3 className="font-raleway text-xl font-bold text-[#09082f] mb-2">
✅ <h3 className="wpn-heading-h4 wpn-heading--primary mb-2">
```

### 4. Subheadings (H4/H5)
```tsx
// Pattern
❌ <h4 className="font-semibold text-[#09082f] mb-2">
✅ <h4 className="wpn-heading-h5 wpn-heading--primary mb-2">

❌ <h5 className="font-semibold text-sm text-[#09082f] mb-2">
✅ <h5 className="wpn-heading-h6 wpn-heading--primary mb-2">
```

### 5. Checkmarks
```tsx
// Pattern
❌ <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
✅ <Check className="size-4 wpn-text--accent shrink-0 mt-0.5" />
```

### 6. Icons (Large)
```tsx
// Pattern
❌ <Zap className="size-12 text-[#d70025] mx-auto mb-3" />
✅ <Zap className="size-12 wpn-text--accent mx-auto mb-3" />

❌ <Users className="size-10 text-[#d70025] mb-4" />
✅ <Users className="size-10 wpn-text--accent mb-4" />
```

### 7. Price Display
```tsx
// Pattern
❌ <div className="text-3xl font-bold text-[#d70025]">From R500</div>
✅ <div className="text-3xl font-bold wpn-text--accent">From R500</div>
```

### 8. Buttons
```tsx
// Pattern
❌ <Button className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
✅ <Button className="wpn-button wpn-button--accent" asChild>
```

### 9. Card Borders
```tsx
// Pattern
❌ <Card className="border-2 border-[#d70025]">
✅ <Card className="border-2 wpn-border--accent">

❌ <Card className="hover:border-[#d70025]">
✅ <Card className="hover:wpn-border--accent">
```

### 10. Step Badges
```tsx
// Pattern
❌ <div className="size-16 bg-[#d70025] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
     1
   </div>
✅ <div className="wpn-step-badge">
     1
   </div>
```

### 11. Icon Badges
```tsx
// Pattern
❌ <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
     <FileText className="size-4 text-[#d70025]" />
   </div>
✅ <div className="wpn-icon-badge">
     <FileText className="wpn-icon-badge__icon" />
   </div>
```

### 12. Left Borders
```tsx
// Pattern
❌ <div className="border-l-4 border-[#d70025] pl-4">
✅ <div className="wpn-border-left--accent pl-4">
```

---

## Sections Requiring Updates

### ✅ Hero Section
- Already uses `wpn-hero__title` ✅
- Already uses `wpn-button` classes ✅

### ⚠️ "How It Works" Section
**Lines 96-346**
- Section heading (line 99)
- Step 1-3 badges (lines 106, 193, 268)
- Step headings (lines 110, 197, 272)
- Subheadings (lines 120, 149, 324, 332)
- Checkmarks (lines 123, 127, 131, 135, 139)
- Icons (lines 208, 220, 232, 244)
- Buttons (line 143)
- Borders (line 119)

### ⚠️ "Publication Options" Section
**Lines 349-473**
- Section heading (line 352)
- Card titles (lines 361, 401, 438)
- Price displays (lines 364, 404, 441)
- Icons (lines 360, 400, 437)
- Checkmarks (35+ instances)
- Buttons (line 429)
- Card borders (lines 358, 395, 435)
- Badge (line 396)

### ⚠️ "Why Choose" Section
**Lines 476-518**
- Section heading (line 479)
- Icons (lines 485, 493, 501, 509)

### ⚠️ "FAQ" Section
**Lines 521-606**
- Section heading (line 524)
- Icons (line 531+)
- Buttons (line 598)

### ⚠️ "CTA" Section
**Lines 609-640**
- Buttons (line 621)

---

## Estimated Effort

**Total Violations:** 62+  
**Estimated Time:** 60-90 minutes for manual replacement  
**Complexity:** Medium (repetitive patterns)

---

## Recommended Approach

### Option 1: Manual Replacement (Most Accurate)
1. Create new BEM utility classes first
2. Work through each section systematically
3. Use find/replace for repetitive patterns
4. Test after each major section

### Option 2: Search & Replace Script
```bash
# Example patterns (test carefully!)
sed -i 's/font-raleway text-3xl font-bold text-\[#09082f\]/wpn-heading-h2 wpn-heading--primary/g' Sales.tsx
sed -i 's/text-\[#d70025\]/wpn-text--accent/g' Sales.tsx
sed -i 's/bg-\[#d70025\]/wpn-bg--accent/g' Sales.tsx
```

**⚠️ Warning:** Test regex replacements carefully to avoid breaking markup!

---

## Testing Checklist

After cleanup:
- [ ] All headings use BEM heading classes
- [ ] All colors use CSS variables
- [ ] No `font-raleway` instances remain
- [ ] No `text-[#09082f]` instances remain
- [ ] No `text-[#d70025]` instances remain
- [ ] No `bg-[#d70025]` instances remain
- [ ] No `border-[#d70025]` instances remain
- [ ] No `hover:bg-[#b5001f]` instances remain
- [ ] Page renders correctly
- [ ] All interactive elements work
- [ ] Design system compliance verified

---

## Dependencies

Before starting cleanup, ensure these exist:

**Required CSS Classes:**
- [x] `.wpn-heading-h2` through `.wpn-heading-h6`
- [x] `.wpn-heading--primary`
- [x] `.wpn-text--accent`
- [x] `.wpn-text--primary`
- [x] `.wpn-bg--accent`
- [x] `.wpn-button--accent`
- [ ] `.wpn-border--accent` (needs creation)
- [ ] `.wpn-border-left--accent` (needs creation)
- [ ] `.wpn-step-badge` (needs creation)
- [ ] `.wpn-icon-badge` (needs creation)

**Required CSS Variables:**
- [x] `--nova-primary`
- [x] `--nova-accent`
- [x] `--font-family-heading`
- [x] `--heading-h2-size`, etc.

---

## Priority

**Priority:** HIGH  
**Reason:** Sales.tsx is a key marketing page with 62+ violations

---

## Next Steps

1. ✅ Create missing BEM utility classes (borders, badges)
2. ⚠️ Systematically replace all 62+ violations
3. ⚠️ Test thoroughly
4. ✅ Mark as complete

---

**Report Generated:** 2026-03-16  
**Violations:** 62+  
**Status:** ⚠️ **REQUIRES CLEANUP**  
**Estimated Time:** 60-90 minutes
