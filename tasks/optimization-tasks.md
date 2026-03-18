# Optimization Tasks — Design System Compliance

**Generated From:** `/reports/2026-03-18-comprehensive-audit-optimization.md`  
**Date:** 2026-03-18  
**Status:** Active  
**Total Tasks:** 12  
**Estimated Time:** 18.5 hours

---

## Critical (P0) — Must Fix Immediately

**Priority:** Blocking production  
**Total Time:** 6 hours

### Task 1: CategoryCard.tsx — Remove Hardcoded Colors

**Status:** 🟢 IN PROGRESS (Phase 1 Complete)  
**Priority:** P0  
**Estimated Time:** 3 hours  
**Remaining:** 2 hours

**Files:**
- `/src/app/components/CategoryCard.tsx`
- `/src/styles/category-card.css`
- `/src/styles/theme-variables.css` ✅ Done

**Progress:**
- [x] Add 75 category color CSS variables to theme-variables.css
- [ ] Create 25 category modifier classes in CategoryCard.css
- [ ] Remove inline styles from CategoryCard.tsx
- [ ] Test all 25 categories

**Implementation:**

```css
/* Add to CategoryCard.css */
.wpn-category-card--estates {
  --category-bg: var(--color-category-estates-bg);
  --category-fg: var(--color-category-estates-fg);
  --category-border: var(--color-category-estates-border);
}

/* Repeat for all 25 categories */
```

```tsx
// Update CategoryCard.tsx
<Link
  className={`wpn-category-card wpn-category-card--${category.slug}`}
>
  {/* Remove all style props */}
</Link>
```

**Report:** Section 1 (Critical Finding)  
**Impact:** High — Fixes major design system violation

---

### Task 2: Ad.tsx — Remove Hardcoded backgroundColor

**Status:** ⏳ PENDING  
**Priority:** P0  
**Estimated Time:** 1 hour

**Files:**
- `/src/app/components/Ad.tsx`
- `/src/app/components/Ad.css`
- `/src/styles/theme-variables.css`

**Steps:**
- [ ] Add ad background CSS variables to theme-variables.css
- [ ] Create ad container modifier classes in Ad.css
- [ ] Remove hardcoded backgroundColor from Ad.tsx
- [ ] Test all ad slot types (leaderboard, MPU, sidebar)

**Implementation:**

```css
/* Add to theme-variables.css */
:root {
  --ad-background-leaderboard: #f5f5f5;
  --ad-background-mpu: #eeeeee;
  --ad-background-sidebar: #fafafa;
  --ad-background-inline: #f9f9f9;
}

/* Add to Ad.css */
.wpn-ad__container--leaderboard {
  background-color: var(--ad-background-leaderboard);
}

.wpn-ad__container--mpu {
  background-color: var(--ad-background-mpu);
}
```

**Report:** Section 2 (Critical Finding)  
**Impact:** Medium — Improves design system compliance

---

### Task 3: About.tsx — Create CSS Classes

**Status:** ⏳ PENDING  
**Priority:** P0  
**Estimated Time:** 2 hours

**Files:**
- `/src/app/pages/About.tsx`
- NEW: `/src/styles/about.css`

**Steps:**
- [ ] Create about.css with semantic classes
- [ ] Add classes for mission section
- [ ] Add classes for stats section
- [ ] Add classes for values section
- [ ] Add classes for services section
- [ ] Remove 10+ inline styles from About.tsx
- [ ] Test responsive behavior

**Implementation:**

```css
/* Create /src/styles/about.css */
.wpn-about__mission {
  text-align: center;
}

.wpn-about__mission-icon {
  margin: 0 auto var(--space-6);
}

.wpn-about__mission-text {
  font-size: var(--text-lg);
  color: var(--muted-foreground);
  line-height: var(--line-height-relaxed);
}

.wpn-about__stat-container {
  text-align: center;
}

.wpn-about__stat-number {
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--nova-accent);
  margin-bottom: var(--space-2);
}

.wpn-about__value-title,
.wpn-about__service-title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  color: var(--foreground);
  margin-bottom: var(--space-4);
}
```

**Report:** Section 3 (Critical Finding)  
**Impact:** Medium — Cleans up major page

---

## High Priority (P1) — This Sprint

**Priority:** Should fix soon  
**Total Time:** 5 hours

### Task 4: SingleNoticeAF.tsx — Add CSS Class for Container

**Status:** ⏳ PENDING  
**Priority:** P1  
**Estimated Time:** 30 minutes

**Files:**
- `/src/app/pages/SingleNoticeAF.tsx`
- `/src/styles/single-notice.css`

**Steps:**
- [ ] Create `.wpn-notice-container` class in single-notice.css
- [ ] Remove inline style from SingleNoticeAF.tsx line 102
- [ ] Apply class to container div

**Implementation:**

```css
/* Add to single-notice.css */
.wpn-notice-container {
  background-color: var(--color-background-muted);
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}
```

**Report:** Section 4 (Major Finding)  
**Impact:** Low — Quick win

---

### Task 5: Checkout Pages — Replace Inline Margin with CSS

**Status:** ⏳ PENDING  
**Priority:** P1  
**Estimated Time:** 1 hour

**Files:**
- `/src/app/pages/Checkout.tsx`
- `/src/app/pages/CheckoutAF.tsx`
- `/src/styles/forms.css`

**Steps:**
- [ ] Create form spacing classes in forms.css
- [ ] Remove inline styles from Checkout.tsx (lines 120, 133)
- [ ] Remove inline styles from CheckoutAF.tsx (lines 120, 133)
- [ ] Test form layout

**Implementation:**

```css
/* Add to forms.css */
.wpn-form__group + .wpn-form__group {
  margin-top: var(--space-4);
}

.wpn-form__grid {
  gap: var(--space-4);
}
```

**Report:** Section 5 (Major Finding)  
**Impact:** Medium — Improves spacing system

---

### Task 6: OrderConfirmation Pages — Add Spacing Classes

**Status:** ⏳ PENDING  
**Priority:** P1  
**Estimated Time:** 1 hour

**Files:**
- `/src/app/pages/OrderConfirmation.tsx`
- `/src/app/pages/OrderConfirmationAF.tsx`
- `/src/styles/order-confirmation.css`

**Steps:**
- [ ] Create spacing classes in order-confirmation.css
- [ ] Remove inline marginTop from OrderConfirmation.tsx
- [ ] Remove inline marginTop from OrderConfirmationAF.tsx
- [ ] Test confirmation page layout

**Implementation:**

```css
/* Add to order-confirmation.css */
.wpn-confirmation-items {
  margin-top: var(--space-6);
}

.wpn-confirmation-card__text + .wpn-confirmation-card__text {
  margin-top: var(--space-3);
}

.wpn-confirmation-actions {
  margin-top: var(--space-4);
}
```

**Report:** Section 6 (Major Finding)  
**Impact:** Low — Cleanup task

---

### Task 7: Register.tsx — Add Checkbox Styling

**Status:** ⏳ PENDING  
**Priority:** P1  
**Estimated Time:** 15 minutes

**Files:**
- `/src/app/pages/auth/Register.tsx`
- `/src/styles/forms.css`

**Steps:**
- [ ] Add checkbox CSS class to forms.css
- [ ] Remove inline accentColor from Register.tsx (lines 150, 283)
- [ ] Test checkbox appearance

**Implementation:**

```css
/* Add to forms.css */
.wpn-form__checkbox {
  accent-color: var(--nova-accent);
}
```

**Report:** Section 7 (Major Finding)  
**Impact:** Low — Quick win

---

### Task 8: Complete Category Color System Documentation

**Status:** 🟢 PARTIAL (Variables Added)  
**Priority:** P1  
**Estimated Time:** 2 hours

**Files:**
- `/docs/category-color-system.md` (NEW)
- `/src/styles/theme-variables.css` ✅
- `/guidelines/design-tokens/colors.md`

**Steps:**
- [x] Add all 25 category colors to theme-variables.css
- [ ] Create category color documentation
- [ ] Update colors.md guideline
- [ ] Create category color usage examples

**Report:** Section 8 (Recommendation)  
**Impact:** Medium — Improves documentation

---

## Medium Priority (P2) — Next Sprint

**Priority:** Nice to have  
**Total Time:** 6 hours

### Task 9: Audit Remaining Pages for Inline Styles

**Status:** ⏳ PENDING  
**Priority:** P2  
**Estimated Time:** 4 hours

**Files to Audit:**
- `/src/app/pages/Sales.tsx`
- `/src/app/pages/SalesAF.tsx`
- `/src/app/pages/Contact.tsx`
- `/src/app/pages/ContactAF.tsx`
- `/src/app/pages/FAQ.tsx`
- `/src/app/pages/FAQAF.tsx`

**Steps:**
- [ ] Audit each page for inline styles
- [ ] Create CSS classes where needed
- [ ] Remove inline styles
- [ ] Test each page

**Report:** Section 9 (Recommendation)  
**Impact:** Medium — Comprehensive cleanup

---

### Task 10: Create Utility Classes for Common Patterns

**Status:** ⏳ PENDING  
**Priority:** P2  
**Estimated Time:** 2 hours

**Files:**
- `/src/styles/utility-classes.css`

**Steps:**
- [ ] Create text alignment utilities (if not already exists)
- [ ] Create spacing utilities (gap-based)
- [ ] Document utility class usage
- [ ] Apply utilities where appropriate

**Implementation:**

```css
/* Utility classes (use sparingly) */
.wpn-text-center {
  text-align: center;
}

.wpn-text-left {
  text-align: left;
}

.wpn-text-right {
  text-align: right;
}

/* Gap utilities (prefer over margin) */
.wpn-gap-sm {
  gap: var(--space-2);
}

.wpn-gap-md {
  gap: var(--space-4);
}

.wpn-gap-lg {
  gap: var(--space-6);
}
```

**Report:** Section 10 (Recommendation)  
**Impact:** Low — Developer experience

---

## Low Priority (P3) — Backlog

**Priority:** Future enhancement  
**Total Time:** 3 hours

### Task 11: Performance Optimization

**Status:** ⏳ PENDING  
**Priority:** P3  
**Estimated Time:** 3 hours

**Areas:**
- [ ] Lazy load hero icons (@phosphor-icons/react)
- [ ] Split large CSS files (if > 1000 lines)
- [ ] Optimize bundle size (code splitting)
- [ ] Optimize image loading

**Report:** Section 11 (Recommendation)  
**Impact:** Medium — Performance gains

---

### Task 12: Create Comprehensive Style Guide

**Status:** 🟢 PARTIAL (Styleguide Page Exists)  
**Priority:** P3  
**Estimated Time:** 8 hours (not included in total)

**Files:**
- `/src/app/pages/Styleguide.tsx` ✅ Exists
- `/docs/component-library.md` (NEW)
- `/docs/css-class-reference.md` (NEW)

**Steps:**
- [ ] Document all CSS classes
- [ ] Document all CSS variables
- [ ] Create component examples
- [ ] Create usage guidelines

**Report:** Section 12 (Recommendation)  
**Impact:** High — Developer documentation

---

## Task Summary

### By Priority

| Priority | Count | Total Time | Status |
|----------|-------|------------|--------|
| P0 (Critical) | 3 | 6 hours | 1 in progress |
| P1 (High) | 5 | 5 hours | All pending |
| P2 (Medium) | 2 | 6 hours | All pending |
| P3 (Low) | 2 | 3+ hours | 1 partial |
| **Total** | **12** | **20+ hours** | **16% complete** |

### By File Type

| Type | Count | Files |
|------|-------|-------|
| Component (TSX) | 6 | CategoryCard, Ad, About, SingleNoticeAF, Checkout, OrderConfirmation, Register |
| Stylesheet (CSS) | 6 | category-card.css, about.css, forms.css, order-confirmation.css, single-notice.css |
| Variables | 2 | theme-variables.css |
| Documentation | 2 | category-color-system.md, component-library.md |

### Completion Status

- 🟢 **In Progress:** 1 task (CategoryCard color system)
- ⏳ **Pending:** 9 tasks
- 🟡 **Partial:** 2 tasks (Category colors added, Styleguide exists)
- ✅ **Complete:** 0 tasks

---

## Implementation Order (Recommended)

### Week 1: Critical Fixes

1. **Day 1-2:** Complete CategoryCard.tsx (remaining 2 hours)
2. **Day 3:** Ad.tsx cleanup (1 hour)
3. **Day 4-5:** About.tsx CSS classes (2 hours)

### Week 2: High Priority

4. **Day 6:** Quick wins (SingleNoticeAF, Register) (45 min)
5. **Day 7-8:** Form spacing (Checkout, OrderConfirmation) (2 hours)
6. **Day 9-10:** Category color documentation (2 hours)

### Week 3: Medium Priority (Optional)

7. **Day 11-13:** Remaining page audits (4 hours)
8. **Day 14-15:** Utility classes (2 hours)

---

## Success Criteria

### Phase 1 Complete When:

- [x] Category colors in CSS variables (75 variables)
- [ ] CategoryCard has no inline styles
- [ ] Ad component has no hardcoded colors
- [ ] About page has no inline styles
- [ ] All P0 tasks complete

### Phase 2 Complete When:

- [ ] All form spacing uses CSS classes
- [ ] All checkout/confirmation pages clean
- [ ] Register page has no inline styles
- [ ] Category color system documented
- [ ] All P1 tasks complete

### Overall Success Criteria:

- [ ] Inline styles reduced to <10 (from 59)
- [ ] Critical violations: 0 (from 3)
- [ ] Major violations: 0 (from 8)
- [ ] CSS Variable compliance: 95%+ (from 90%)
- [ ] User control: 95%+ (from 85%)
- [ ] Overall compliance: 90%+ (from 75%)

---

## Related Documentation

- **[2026-03-18-comprehensive-audit-optimization.md](../reports/2026-03-18-comprehensive-audit-optimization.md)** — Full audit report
- **[2026-03-18-optimization-summary.md](../reports/2026-03-18-optimization-summary.md)** — Phase 1 summary
- **[Guidelines.md](../guidelines/Guidelines.md)** — Sections 4.1, 4.2, 13
- **[design-tokens/colors.md](../guidelines/design-tokens/colors.md)** — Color system

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial task list from comprehensive audit report |
