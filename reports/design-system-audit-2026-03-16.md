# Design System Compliance Audit Report

**Date:** 2026-03-16  
**Auditor:** AI Assistant  
**Scope:** Complete codebase audit for CSS variable usage, typography, and design system compliance

---

## Executive Summary

**Status:** ⚠️ **MAJOR VIOLATIONS FOUND**

**Findings:**
- ❌ **169+ hard-coded color values** across 16 TSX files
- ❌ **114+ hard-coded category badge colors** in CSS
- ❌ **50+ instances of `font-raleway`** (font not loaded in project)
- ❌ **Multiple inline styles** in components
- ✅ **3 recently created pages** (Profile, MyNotices, AccountSidebar) are 100% compliant

**Impact:** Medium-High  
**Risk:** Design system changes will not propagate; visual inconsistency

---

## Violation Categories

### 🔴 CRITICAL: Hard-Coded Colors in TSX Files

#### **Pattern 1: Brand Colors in Tailwind Classes**

**Total Violations:** 100+

**Files Affected:**
1. `/src/app/pages/Home.tsx` (30+ violations)
2. `/src/app/pages/HomeAF.tsx` (30+ violations)
3. `/src/app/pages/Sales.tsx` (20+ violations)
4. `/src/app/pages/SalesAF.tsx` (10+ violations)
5. `/src/app/pages/Contact.tsx` (10+ violations)
6. `/src/app/components/PageStub.tsx` (2 violations)
7. `/src/app/components/Logo.tsx` (4 violations)
8. Auth pages (8 violations)

**Examples:**

```tsx
// ❌ WRONG - Hard-coded hex colors
<h1 className="text-[#09082f]">Title</h1>
<Button className="bg-[#d70025] hover:bg-[#b5001f]">Submit</Button>
<section className="bg-gradient-to-br from-[#09082f] to-[#1a1849]">

// ✅ CORRECT - Use CSS variables
<h1 className="wp-text-primary">Title</h1>
<Button className="wpn-button wpn-button--accent">Submit</Button>
<section className="wpn-hero">
```

**Specific Violations:**

**Home.tsx & HomeAF.tsx:**
- Line 37: `from-[#09082f] to-[#1a1849]` (hero gradient)
- Line 50: `bg-[#d70025] hover:bg-[#b5001f]` (CTA button)
- Line 61: `text-[#09082f]` (button text)
- Line 84: `text-[#09082f]` (heading)
- Line 94: `hover:border-[#09082f]` (category card)
- Line 97: `bg-[#09082f]` (icon background)
- Line 119: `text-[#09082f]` (heading)
- Line 152: `text-[#09082f]` (heading)
- Line 162, 173, 184: `bg-[#09082f]` (step icons)
- Line 197, 206, 215: `text-[#d70025]` (feature icons)
- Line 227: `bg-[#09082f]` (CTA section)
- Line 239: `bg-[#d70025] hover:bg-[#b5001f]` (button)

**Sales.tsx:**
- Line 49: `text-[#09082f]` (heading)
- Line 99: `text-[#09082f]` (heading)
- Line 110, 197, 272: `text-[#09082f]` (step headings)
- Line 352: `text-[#09082f]` (heading)
- Line 361, 401, 438: `text-[#09082f]` (plan headings)
- Line 360, 400, 437: `text-[#d70025]` (plan icons)
- Line 479: `text-[#09082f]` (heading)
- Line 524: `text-[#09082f]` (heading)

**Contact.tsx:**
- Line 37: `text-[#d70025]` (Facebook icon)
- Line 87, 96: `text-[#d70025]` (contact icons)
- Line 90, 99, 120, 141: `text-[#d70025]` (links)
- Line 226: `bg-[#d70025] hover:bg-[#b5001f]` (submit button)

**Logo.tsx:**
- Lines 10-13: Hard-coded hex colors for SVG paths
```tsx
const textColor = variant === "dark" ? "#FFFFFF" : "#09082F";
const accentColor = "#D3000D";
const iconColor = variant === "dark" ? "#FFFFFF" : "#09082F";
const blueAccent = "#549CBE";
```

**PageStub.tsx:**
- Line 18: `text-[#d70025]` (icon)
- Line 19: `text-[#09082f]` (heading)

**Auth Pages (Login, Register, ForgotPassword):**
- Multiple instances of `text-[#09082f]` in headings

---

### 🟡 HIGH: Font Family Violations

#### **Pattern 2: font-raleway Class Usage**

**Total Violations:** 50+

**Problem:** `font-raleway` is used throughout but **Raleway is not loaded** in the project. Only Lexend is available via `/src/styles/fonts.css`.

**Files Affected:**
- Home.tsx (9 instances)
- HomeAF.tsx (9 instances)
- Sales.tsx (12 instances)
- SalesAF.tsx (6 instances)
- Auth pages (6 instances)
- NotFound.tsx (2 instances)
- PageStub.tsx (1 instance)

**Examples:**

```tsx
// ❌ WRONG - Font not loaded
<h1 className="font-raleway text-4xl font-bold">

// ✅ CORRECT - Use design system
<h1 className="wpn-heading wpn-heading--1">
// Or rely on theme.css base styles (already uses Lexend)
```

**Current Font System:**
```css
/* /src/styles/fonts.css - ONLY Lexend is loaded */
@font-face {
  font-family: 'Lexend';
  src: url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap');
}
```

**Impact:** Browser falls back to default sans-serif, causing visual inconsistency.

---

### 🟠 MEDIUM: Hard-Coded Category Badge Colors

#### **Pattern 3: CategoryBadge.css Hard-Coded Colors**

**File:** `/src/app/components/CategoryBadge.css`  
**Total Violations:** 114 hard-coded hex values (38 categories × 3 colors each)

**Problem:** Category colors are hard-coded instead of using CSS variables.

**Current Implementation:**
```css
/* ❌ WRONG - Hard-coded */
.wpn-category-badge--tenders {
  background-color: #dbeafe;
  color: #1e40af;
  border-color: #93c5fd;
}

.wpn-category-badge--estates {
  background-color: #f3e8ff;
  color: #6b21a8;
  border-color: #d8b4fe;
}
```

**Recommended Fix:**
```css
/* ✅ CORRECT - Use CSS variables */
:root {
  --category-tenders-bg: #dbeafe;
  --category-tenders-fg: #1e40af;
  --category-tenders-border: #93c5fd;
  
  --category-estates-bg: #f3e8ff;
  --category-estates-fg: #6b21a8;
  --category-estates-border: #d8b4fe;
}

.wpn-category-badge--tenders {
  background-color: var(--category-tenders-bg);
  color: var(--category-tenders-fg);
  border-color: var(--category-tenders-border);
}
```

---

### 🟢 LOW: Acceptable Inline Styles

#### **Pattern 4: Dynamic Inline Styles (Approved)**

Some inline styles are acceptable when values are truly dynamic:

**Approved Examples:**

```tsx
// ✅ Chart colors (library-specific)
<div style={{ backgroundColor: item.color }} />

// ✅ Dynamic transforms
<div style={{ transform: `translateX(-${100 - value}%)` }} />

// ✅ Ad slot dimensions (prop-based)
<div style={{ minHeight: `${height}px`, width: `${width}px` }} />
```

**Total Approved:** 3 files (chart.tsx, progress.tsx, AdSlot.tsx)

---

## ✅ Compliant Components

### **Perfect Compliance (100%)**

These files use ONLY CSS variables and semantic classes:

1. **AccountSidebar.tsx + .css** (59 + 50 lines)
2. **Profile.tsx + ProfileAF.tsx + .css** (446 + 145 lines)
3. **MyNotices.tsx + .css** (170 + 280 lines)
4. **Layout.tsx + .css** (385 lines CSS)
5. **CategoryBadge.tsx** (component logic - 84 lines)
6. **NoticeCard.tsx + .css**
7. **SearchFilterBar.tsx + .css**
8. **AdSlot.tsx + .css**
9. **NoticeGrid.tsx + .css**

**Total Compliant Code:** ~1,700 lines

---

## Detailed Violation Inventory

### By File Type

| File Type | Total Violations | Critical | High | Medium |
|-----------|-----------------|----------|------|--------|
| .tsx files | 169+ | 100+ colors | 50+ fonts | 19+ inline styles |
| .css files | 114 | 0 | 0 | 114 category colors |
| **TOTAL** | **283+** | **100+** | **50+** | **133+** |

### By File

| File | Colors | Fonts | Inline Styles |
|------|--------|-------|---------------|
| Home.tsx | 30+ | 9 | 0 |
| HomeAF.tsx | 30+ | 9 | 0 |
| Sales.tsx | 20+ | 12 | 0 |
| SalesAF.tsx | 10+ | 6 | 0 |
| Contact.tsx | 10+ | 0 | 0 |
| ContactAF.tsx | 8+ | 0 | 0 |
| Logo.tsx | 4 | 0 | 4 |
| PageStub.tsx | 2 | 1 | 0 |
| Auth pages | 8+ | 6 | 0 |
| NotFound.tsx | 2 | 2 | 0 |
| CategoryBadge.css | 114 | 0 | 0 |

---

## Impact Analysis

### **Current State**

**Design System Changes:**
- ❌ Updating `--nova-primary` in theme.css → **No effect** on 100+ hard-coded instances
- ❌ Updating `--nova-accent` in theme.css → **No effect** on 50+ hard-coded instances
- ❌ Changing font to Raleway → **Impossible** (font not loaded)
- ❌ Category color updates → Requires 114 manual edits

**Maintenance:**
- ❌ High technical debt
- ❌ Difficult to maintain visual consistency
- ❌ Risky brand updates
- ❌ Poor scalability

### **After Remediation**

**Design System Changes:**
- ✅ Update `--nova-primary` → Affects all primary color usage
- ✅ Update `--nova-accent` → Affects all accent color usage
- ✅ Category colors centralized in theme.css
- ✅ Font system enforced consistently

**Maintenance:**
- ✅ Low technical debt
- ✅ Easy visual consistency
- ✅ Safe brand updates
- ✅ Excellent scalability

---

## Recommended Actions

### **Priority 1: CRITICAL (This Sprint)**

1. **Replace all hard-coded colors** with CSS variables
   - Est. Time: 8 hours
   - Files: 12 TSX files
   - Impact: High

2. **Remove all `font-raleway` references**
   - Est. Time: 2 hours
   - Files: 8 TSX files
   - Impact: Medium

3. **Migrate CategoryBadge colors to CSS variables**
   - Est. Time: 2 hours
   - Files: 1 CSS file, 1 theme.css update
   - Impact: Medium

**Total Priority 1:** 12 hours

### **Priority 2: HIGH (Next Sprint)**

4. **Create utility classes for common patterns**
   - `wpn-hero`, `wpn-cta-section`, etc.
   - Est. Time: 4 hours

5. **Document design system usage**
   - Update `/guidelines/design-tokens/`
   - Est. Time: 2 hours

**Total Priority 2:** 6 hours

### **Priority 3: MEDIUM (Future)**

6. **Audit all remaining components**
7. **Create automated linting rules**
8. **Add design system tests**

---

## Remediation Plan

### **Phase 1: Color System (Week 1)**

**Step 1:** Add utility classes to theme.css
```css
/* Add to theme.css */
.wpn-hero {
  background: linear-gradient(to bottom right, var(--nova-primary), var(--nova-primary-hover));
}

.wpn-cta-section {
  background-color: var(--nova-primary);
  color: white;
}

.wp-text-primary {
  color: var(--nova-primary);
}

.wp-text-accent {
  color: var(--nova-accent);
}
```

**Step 2:** Replace hard-coded colors systematically
- Home.tsx & HomeAF.tsx (4 hours)
- Sales.tsx & SalesAF.tsx (2 hours)
- Contact.tsx & ContactAF.tsx (1 hour)
- Auth pages (1 hour)

### **Phase 2: Typography (Week 1)**

**Step 1:** Remove all `font-raleway` classes
**Step 2:** Ensure theme.css base styles are applied
**Step 3:** Create heading utility classes if needed

### **Phase 3: Category Colors (Week 2)**

**Step 1:** Add category color variables to theme.css
**Step 2:** Update CategoryBadge.css to use variables
**Step 3:** Document category color system

---

## Code Examples

### **Before & After: Home Hero**

#### ❌ BEFORE (Violations)
```tsx
<section className="bg-gradient-to-br from-[#09082f] to-[#1a1849] text-white py-16">
  <h1 className="font-raleway text-4xl font-bold">
    South Africa's Public Notices Directory
  </h1>
  <Button className="bg-[#d70025] hover:bg-[#b5001f]">
    Submit Notice
  </Button>
</section>
```

**Violations:**
- Hard-coded gradient colors
- Hard-coded button colors
- Font not loaded
- No semantic classes

#### ✅ AFTER (Compliant)
```tsx
<section className="wpn-hero">
  <div className="wpn-hero__container">
    <h1 className="wpn-hero__title">
      South Africa's Public Notices Directory
    </h1>
    <Button className="wpn-button wpn-button--accent">
      Submit Notice
    </Button>
  </div>
</section>
```

**CSS:**
```css
.wpn-hero {
  background: linear-gradient(to bottom right, 
    var(--nova-primary), 
    var(--nova-primary-hover));
  color: white;
  padding: var(--space-16) 0;
}

.wpn-hero__title {
  font-family: var(--font-family-heading);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
}
```

---

### **Before & After: Category Badge**

#### ❌ BEFORE (Hard-coded)
```css
.wpn-category-badge--tenders {
  background-color: #dbeafe;
  color: #1e40af;
  border-color: #93c5fd;
}
```

#### ✅ AFTER (CSS Variables)
```css
/* theme.css */
:root {
  --category-tenders-bg: #dbeafe;
  --category-tenders-fg: #1e40af;
  --category-tenders-border: #93c5fd;
}

/* CategoryBadge.css */
.wpn-category-badge--tenders {
  background-color: var(--category-tenders-bg);
  color: var(--category-tenders-fg);
  border-color: var(--category-tenders-border);
}
```

---

## Compliance Checklist

### ✅ **Compliant Files (9)**
- [x] AccountSidebar.tsx/.css
- [x] Profile.tsx/ProfileAF.tsx/.css
- [x] MyNotices.tsx/.css
- [x] Layout.tsx/.css
- [x] CategoryBadge.tsx (logic only)
- [x] NoticeCard.tsx/.css
- [x] SearchFilterBar.tsx/.css
- [x] AdSlot.tsx/.css
- [x] NoticeGrid.tsx/.css

### ❌ **Non-Compliant Files (12+)**
- [ ] Home.tsx (30+ violations)
- [ ] HomeAF.tsx (30+ violations)
- [ ] Sales.tsx (20+ violations)
- [ ] SalesAF.tsx (10+ violations)
- [ ] Contact.tsx (10+ violations)
- [ ] ContactAF.tsx (8+ violations)
- [ ] Logo.tsx (8 violations)
- [ ] PageStub.tsx (3 violations)
- [ ] Login.tsx/LoginAF.tsx (4 violations)
- [ ] Register.tsx/RegisterAF.tsx (4 violations)
- [ ] NotFound.tsx (4 violations)
- [ ] CategoryBadge.css (114 violations)

---

## Testing Strategy

### **After Remediation:**

1. **Visual Regression Tests**
   - Compare before/after screenshots
   - Verify no visual changes

2. **Design System Tests**
   - Change `--nova-primary` → Verify propagation
   - Change `--nova-accent` → Verify propagation
   - Add category color → Verify badge updates

3. **Font Loading Tests**
   - Verify Lexend loads correctly
   - Verify fallback behavior

4. **Linting Rules**
   - Block `text-[#...]` patterns
   - Block `bg-[#...]` patterns
   - Block `font-raleway` class
   - Require `var(--...)` in CSS

---

## Conclusion

**Current Compliance:** ~30% (9/30 files)  
**Target Compliance:** 100%  
**Effort Required:** 18 hours (Priority 1 + 2)  
**Risk Level:** Medium-High  
**Business Impact:** Brand consistency, maintenance cost

**Recommendation:** Prioritize remediation immediately. Current violations prevent effective design system usage and increase technical debt.

---

**Report Prepared By:** AI Assistant  
**Date:** 2026-03-16  
**Next Audit:** After remediation (estimated 2 weeks)
