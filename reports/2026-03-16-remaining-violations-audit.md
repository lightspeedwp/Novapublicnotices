# Remaining BEM Violations Audit — 2026-03-16

**Date:** 2026-03-16  
**Audit Scope:** Entire codebase  
**Status:** ⚠️ **115+ violations found**

---

## Summary

Found **115+ hard-coded CSS violations** across **13 additional pages** that need BEM cleanup.

---

## Violations by Page

| Page | Violations | Priority |
|------|------------|----------|
| SalesAF.tsx | 15+ | HIGH |
| NotFound.tsx | 3 | MEDIUM |
| Login.tsx | 4 | HIGH |
| LoginAF.tsx | 4 | HIGH |
| Register.tsx | 8 | HIGH |
| RegisterAF.tsx | 6 | HIGH |
| ForgotPassword.tsx | 3 | MEDIUM |
| ForgotPasswordAF.tsx | 3 | MEDIUM |
| ResetPassword.tsx | 2 | MEDIUM |
| ResetPasswordAF.tsx | 2 | MEDIUM |
| Dashboard.tsx | 23+ | HIGH |
| DashboardAF.tsx | 11+ | HIGH |
| Advertise.tsx | 31+ | MEDIUM |

**Total:** 115+ violations across 13 pages

---

## Breakdown by Violation Type

### Font Family (`font-raleway`)
**Count:** ~35 instances  
**Pages:** All 13 pages  
**Fix:** Replace with BEM heading classes

### Primary Color Text (`text-[#09082f]`)
**Count:** ~30 instances  
**Pages:** All pages  
**Fix:** Replace with `.wpn-text--primary` or `.wpn-heading--primary`

### Accent Color Text (`text-[#d70025]`)
**Count:** ~35 instances  
**Pages:** Most pages  
**Fix:** Replace with `.wpn-text--accent` or `.wpn-link--accent`

### Accent Backgrounds (`bg-[#d70025]`)
**Count:** ~12 instances  
**Pages:** Auth pages, dashboard  
**Fix:** Replace with `.wpn-bg--accent`

### Primary Backgrounds (`bg-[#09082f]`)
**Count:** ~3 instances  
**Pages:** SalesAF, Dashboard  
**Fix:** Replace with `.wpn-bg--primary`

### Borders (`border-[#...]`)
**Count:** ~5 instances  
**Pages:** Multiple  
**Fix:** Replace with `.wpn-border--accent` or `.wpn-border--primary`

---

## Priority 1: Auth Pages (HIGH)

### Login.tsx (4 violations)
- H1: `font-raleway text-3xl font-bold text-[#09082f]`
- Links: `text-[#d70025] hover:underline`
- Button: `bg-[#d70025] hover:bg-[#b5001f]`

### LoginAF.tsx (4 violations)
- H1: `font-raleway text-3xl font-bold text-[#09082f]`
- Links: `text-[#d70025] hover:underline`
- Button: `bg-[#d70025] hover:bg-[#b5001f]`

### Register.tsx (8 violations)
- H1: `font-raleway text-4xl font-bold text-[#09082f]`
- H2 (2x): `font-raleway text-2xl font-bold text-[#09082f]`
- Links (3x): `text-[#d70025] hover:underline`
- Border hover: `hover:border-[#d70025]`
- Button: `bg-[#d70025] hover:bg-[#b5001f]`

### RegisterAF.tsx (6 violations)
- H1: `font-raleway text-3xl font-bold text-[#09082f]`
- Links (4x): `text-[#d70025] hover:underline`
- Buttons (2x): `bg-[#d70025] hover:bg-[#b5001f]`

### ForgotPassword.tsx (3 violations)
- H1: `font-raleway text-3xl font-bold text-[#09082f]`
- Link: `text-[#d70025] hover:underline`
- Button: `bg-[#d70025] hover:bg-[#b5001f]`

### ForgotPasswordAF.tsx (3 violations)
- H1: `font-raleway text-3xl font-bold text-[#09082f]`
- Link: `text-[#d70025] hover:underline`
- Button: `bg-[#d70025] hover:bg-[#b5001f]`

### ResetPassword.tsx (2 violations)
- H1: `font-raleway text-3xl font-bold text-[#09082f]`
- Button: `bg-[#d70025] hover:bg-[#b5001f]`

### ResetPasswordAF.tsx (2 violations)
- H1: `font-raleway text-3xl font-bold text-[#09082f]`
- Button: `bg-[#d70025] hover:bg-[#b5001f]`

**Total Auth Pages:** 32 violations

---

## Priority 2: Account Pages (HIGH)

### Dashboard.tsx (23+ violations)
- H1: `font-raleway text-3xl font-bold text-[#09082f]`
- H2 (2x): `font-raleway text-xl font-bold text-[#09082f]`
- H3 (3x): `text-3xl font-bold text-[#09082f]`
- Links (8x): `text-[#d70025] hover:underline`
- Borders: `border-[#d70025]`
- Backgrounds (3x): `bg-[#d70025]/10`
- Icons (3x): `text-[#d70025]`
- Buttons: `bg-[#d70025] hover:bg-[#b5001f]`

### DashboardAF.tsx (11+ violations)
- H1: `font-raleway text-3xl font-bold text-[#09082f]`
- H3 (2x): `font-raleway font-bold text-lg`
- Icons (4x): `text-[#d70025]`
- Button: `bg-[#d70025] hover:bg-[#b5001f]`

**Total Account Pages:** 34+ violations

---

## Priority 3: Marketing Pages (HIGH/MEDIUM)

### SalesAF.tsx (15+ violations)
- H1: `font-raleway text-4xl md:text-5xl font-bold`
- H2 (2x): `font-raleway text-3xl font-bold text-[#09082f]`
- H3 (3x): `font-raleway text-xl font-semibold text-[#09082f]`
- Prices (2x): `text-3xl font-bold text-[#d70025]`
- Buttons (3x): `bg-[#d70025] hover:bg-[#b5001f]`, `bg-[#09082f]`
- Borders: `border-[#09082f]`
- Backgrounds: `bg-[#09082f]`

### Advertise.tsx (31+ violations)
- H1: `font-raleway text-4xl md:text-5xl font-bold`
- H2 (2x): `font-raleway text-3xl font-bold text-[#09082f]`
- H3 (2x): `font-raleway text-2xl font-bold text-[#09082f]`
- Icons (7x): `text-[#d70025]`
- Bullets (5+): `text-[#d70025]`
- Buttons (2x): `bg-[#d70025] hover:bg-[#b5001f]`
- Text: `text-[#09082f]`

**Total Marketing Pages:** 46+ violations

---

## Priority 4: Error Pages (MEDIUM)

### NotFound.tsx (3 violations)
- H1: `font-raleway text-6xl font-bold text-[#09082f]`
- H2: `font-raleway text-2xl font-semibold`
- Button: `bg-[#d70025] hover:bg-[#b5001f]`

**Total Error Pages:** 3 violations

---

## Recommended Fixes

### Pattern 1: Page Headings (H1)
```tsx
❌ <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-2">
✅ <h1 className="wpn-heading-h1 wpn-heading--primary mb-2">
```

### Pattern 2: Section Headings (H2)
```tsx
❌ <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">
✅ <h2 className="wpn-heading-h4 wpn-heading--primary mb-4">
```

### Pattern 3: Links
```tsx
❌ <Link to="/..." className="text-[#d70025] hover:underline font-medium">
✅ <Link to="/..." className="wpn-link--accent font-medium">
```

### Pattern 4: Buttons
```tsx
❌ <Button className="bg-[#d70025] hover:bg-[#b5001f]">
✅ <Button className="wpn-button wpn-button--accent">
```

### Pattern 5: Icon Badges
```tsx
❌ <div className="size-16 bg-[#d70025]/10 rounded-full flex items-center justify-center">
     <Icon className="size-8 text-[#d70025]" />
   </div>
✅ <div className="wpn-icon-badge wpn-icon-badge--lg">
     <Icon className="wpn-icon-badge__icon wpn-icon-badge__icon--lg" />
   </div>
```

---

## Execution Plan

### Phase 1: Auth Pages (Day 1)
**Priority:** HIGH  
**Violations:** 32  
**Time:** 2-3 hours

1. Login.tsx
2. LoginAF.tsx
3. Register.tsx
4. RegisterAF.tsx
5. ForgotPassword.tsx
6. ForgotPasswordAF.tsx
7. ResetPassword.tsx
8. ResetPasswordAF.tsx

### Phase 2: Account Pages (Day 1-2)
**Priority:** HIGH  
**Violations:** 34+  
**Time:** 2-3 hours

1. Dashboard.tsx
2. DashboardAF.tsx

### Phase 3: Marketing Pages (Day 2)
**Priority:** MEDIUM  
**Violations:** 46+  
**Time:** 2-3 hours

1. SalesAF.tsx
2. Advertise.tsx

### Phase 4: Error Pages (Day 2)
**Priority:** LOW  
**Violations:** 3  
**Time:** 15 minutes

1. NotFound.tsx

---

## Required New BEM Classes

### Large Icon Badge
```css
.wpn-icon-badge--lg {
  width: var(--space-16);
  height: var(--space-16);
  background-color: rgba(215, 0, 37, 0.1); /* accent/10 */
}

.wpn-icon-badge__icon--lg {
  width: var(--space-8);
  height: var(--space-8);
}
```

### Primary Button
```css
.wpn-button--primary {
  background-color: var(--nova-primary);
  color: #ffffff;
}

.wpn-button--primary:hover:not(:disabled) {
  background-color: var(--nova-primary-hover);
}
```

### Primary Border
```css
.wpn-border--primary {
  border-color: var(--nova-primary);
}
```

---

## Testing Checklist

After cleanup:
- [ ] All auth pages render correctly
- [ ] All account pages render correctly
- [ ] All marketing pages render correctly
- [ ] Error pages render correctly
- [ ] All buttons work with correct hover states
- [ ] All links have correct colors
- [ ] All headings use correct fonts
- [ ] No console errors
- [ ] Design system compliance verified

---

## Success Metrics

**Current State:**
- Pages with violations: 13
- Total violations: 115+
- BEM compliance: 61% (completed pages only)

**Target State:**
- Pages with violations: 0
- Total violations: 0
- BEM compliance: 100%

---

**Report Generated:** 2026-03-16  
**Violations Found:** 115+  
**Pages Affected:** 13  
**Status:** ⚠️ **REQUIRES CLEANUP**  
**Estimated Total Time:** 7-9 hours
