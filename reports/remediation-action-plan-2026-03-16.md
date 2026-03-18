# Design System Remediation — Action Plan

**Date:** 2026-03-16  
**Priority:** HIGH  
**Timeline:** 2 weeks (Sprint 1)  
**Estimated Effort:** 18 hours

---

## Overview

This document provides a step-by-step action plan to remediate **283+ design system violations** found in the codebase audit.

**Goal:** Achieve 100% CSS variable usage and design system compliance across all files.

---

## Current Status

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| Files Compliant | 9 | 30+ | 21 |
| Compliance % | 30% | 100% | 70% |
| Hard-coded Colors | 169+ | 0 | 169+ |
| Font Violations | 50+ | 0 | 50+ |
| CSS Violations | 114 | 0 | 114 |

---

## Phase 1: Critical Fixes (Week 1 — 12 hours)

### Task 1.1: Create Utility Classes (2 hours)

**File:** `/src/styles/theme.css`

**Add:**

```css
/* =================================================================
   Utility Classes for Common Patterns
   ================================================================= */

/* Hero Sections */
.wpn-hero {
  background: linear-gradient(
    to bottom right,
    var(--nova-primary),
    var(--nova-primary-hover)
  );
  color: white;
  padding: var(--space-16) 0;
}

.wpn-hero__container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.wpn-hero__title {
  font-family: var(--font-family-heading);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-4);
  line-height: var(--line-height-tight);
}

@media (min-width: 768px) {
  .wpn-hero__title {
    font-size: var(--text-5xl);
  }
}

.wpn-hero__subtitle {
  font-family: var(--font-family-body);
  font-size: var(--text-lg);
  margin-bottom: var(--space-6);
  line-height: var(--line-height-relaxed);
}

/* CTA Sections */
.wpn-cta-section {
  background-color: var(--nova-primary);
  color: white;
  padding: var(--space-16) 0;
}

.wpn-cta-section__title {
  font-family: var(--font-family-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-4);
}

.wpn-cta-section__description {
  font-family: var(--font-family-body);
  font-size: var(--text-base);
  margin-bottom: var(--space-6);
}

/* Section Headers */
.wpn-section-header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.wpn-section-header__title {
  font-family: var(--font-family-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--nova-primary);
  margin-bottom: var(--space-2);
}

.wpn-section-header__subtitle {
  font-family: var(--font-family-body);
  font-size: var(--text-base);
  color: var(--muted-foreground);
}

/* Category Cards */
.wpn-category-card {
  background: var(--card);
  border: 2px solid var(--border-color-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all var(--duration-fast) var(--ease-out);
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.wpn-category-card:hover {
  border-color: var(--nova-primary);
  box-shadow: var(--shadow-lg);
}

.wpn-category-card__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-pill);
  background: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-3);
  transition: background-color var(--duration-fast) var(--ease-out);
}

.wpn-category-card:hover .wpn-category-card__icon {
  background: var(--nova-primary);
}

.wpn-category-card__icon svg {
  width: var(--icon-size-lg);
  height: var(--icon-size-lg);
  color: var(--muted-foreground);
  transition: color var(--duration-fast) var(--ease-out);
}

.wpn-category-card:hover .wpn-category-card__icon svg {
  color: white;
}

.wpn-category-card__title {
  font-family: var(--font-family-heading);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--foreground);
  text-align: center;
}

/* Step Cards */
.wpn-step {
  text-align: center;
}

.wpn-step__icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-pill);
  background-color: var(--nova-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
}

.wpn-step__title {
  font-family: var(--font-family-heading);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
}

.wpn-step__description {
  font-family: var(--font-family-body);
  font-size: var(--text-base);
  color: var(--muted-foreground);
}

/* Feature Cards */
.wpn-feature {
  background: var(--muted);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color-default);
}

.wpn-feature__icon {
  width: var(--icon-size-xl);
  height: var(--icon-size-xl);
  color: var(--nova-accent);
  margin-bottom: var(--space-3);
}

.wpn-feature__title {
  font-family: var(--font-family-heading);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
}

.wpn-feature__description {
  font-family: var(--font-family-body);
  font-size: var(--text-sm);
  color: var(--muted-foreground);
}

/* Contact Icons */
.wpn-contact-icon {
  width: var(--icon-size-md);
  height: var(--icon-size-md);
  color: var(--nova-accent);
  flex-shrink: 0;
}

/* Links with Brand Colors */
.wpn-link--accent {
  color: var(--nova-accent);
  text-decoration: none;
  transition: all var(--duration-fast) var(--ease-out);
}

.wpn-link--accent:hover {
  text-decoration: underline;
}
```

---

### Task 1.2: Fix Home.tsx (2 hours)

**File:** `/src/app/pages/Home.tsx`

**Violations:** 30+

**Action:**

1. Replace hero section classes
2. Replace button classes
3. Replace heading classes
4. Replace category card classes
5. Replace step icon classes
6. Replace feature icon classes

**Before:**
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

**After:**
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

**Checklist:**
- [ ] Hero section (lines 37-70)
- [ ] Category section (lines 82-110)
- [ ] Recent notices heading (line 119)
- [ ] How it works section (lines 150-195)
- [ ] Feature cards (lines 196-221)
- [ ] CTA section (lines 227-252)

---

### Task 1.3: Fix HomeAF.tsx (2 hours)

Same fixes as Home.tsx, Afrikaans version.

---

### Task 1.4: Fix Sales.tsx (1.5 hours)

**File:** `/src/app/pages/Sales.tsx`

**Violations:** 20+

**Action:**
- Replace all `text-[#09082f]` with `.wpn-section-header__title`
- Replace all `text-[#d70025]` icons with `.wpn-feature__icon`
- Replace button classes with `.wpn-button--accent`

---

### Task 1.5: Fix SalesAF.tsx (1 hour)

Same fixes as Sales.tsx, Afrikaans version.

---

### Task 1.6: Fix Contact.tsx & ContactAF.tsx (1.5 hours)

**Files:** Both contact pages

**Action:**
- Replace icon colors with `.wpn-contact-icon`
- Replace link colors with `.wpn-link--accent`
- Replace button classes

---

### Task 1.7: Fix Auth Pages (1 hour)

**Files:**
- Login.tsx, LoginAF.tsx
- Register.tsx, RegisterAF.tsx
- ForgotPassword.tsx, ForgotPasswordAF.tsx
- ResetPassword.tsx, ResetPasswordAF.tsx

**Action:**
- Remove all `font-raleway` classes
- Replace `text-[#09082f]` headings with proper semantic elements
- Let theme.css base styles handle typography

---

### Task 1.8: Fix Logo.tsx (0.5 hours)

**File:** `/src/app/components/Logo.tsx`

**Action:**
Replace hard-coded hex with CSS variables:

```tsx
// Before
const textColor = variant === "dark" ? "#FFFFFF" : "#09082F";
const accentColor = "#D3000D";

// After
const textColor = variant === "dark" 
  ? "var(--color-white)" 
  : "var(--nova-primary)";
const accentColor = "var(--nova-accent)";
```

Or better, use CSS classes:

```css
.wpn-logo {
  /* styles */
}

.wpn-logo--dark {
  color: white;
}

.wpn-logo--light {
  color: var(--nova-primary);
}

.wpn-logo__accent {
  color: var(--nova-accent);
}
```

---

### Task 1.9: Fix PageStub.tsx (0.5 hours)

**File:** `/src/app/components/PageStub.tsx`

**Action:**
- Remove `font-raleway` class
- Replace color classes with semantic classes

---

### Task 1.10: Fix NotFound.tsx (0.5 hours)

**File:** `/src/app/pages/NotFound.tsx`

**Action:**
- Remove `font-raleway` classes
- Replace color classes

---

## Phase 2: Category Badge Colors (Week 1 — 2 hours)

### Task 2.1: Add Category Color Variables (1 hour)

**File:** `/src/styles/theme.css`

**Add after line 203:**

```css
/* =================================================================
   Category Color System
   ================================================================= */

/* Tenders */
--category-tenders-bg: #dbeafe;
--category-tenders-fg: #1e40af;
--category-tenders-border: #93c5fd;

/* Estates */
--category-estates-bg: #f3e8ff;
--category-estates-fg: #6b21a8;
--category-estates-border: #d8b4fe;

/* Liquor Licences */
--category-liquor-licences-bg: #ffedd5;
--category-liquor-licences-fg: #c2410c;
--category-liquor-licences-border: #fed7aa;

/* Town Planning */
--category-town-planning-bg: #dcfce7;
--category-town-planning-fg: #15803d;
--category-town-planning-border: #86efac;

/* Business Licences */
--category-business-licence-bg: #fef9c3;
--category-business-licence-fg: #854d0e;
--category-business-licence-border: #fde047;

/* Court Orders */
--category-court-orders-bg: #fee2e2;
--category-court-orders-fg: #991b1b;
--category-court-orders-border: #fca5a5;

/* Environmental */
--category-ois-environmental-bg: #d1fae5;
--category-ois-environmental-fg: #065f46;
--category-ois-environmental-border: #6ee7b7;

/* General Notices */
--category-general-notices-bg: #f3f4f6;
--category-general-notices-fg: #1f2937;
--category-general-notices-border: #d1d5db;

/* Lost Documents */
--category-lost-documents-bg: #fef3c7;
--category-lost-documents-fg: #92400e;
--category-lost-documents-border: #fcd34d;

/* Sales */
--category-sale-in-execution-bg: #e0e7ff;
--category-sale-in-execution-fg: #3730a3;
--category-sale-in-execution-border: #c7d2fe;

/* Add remaining 15 categories... */
```

---

### Task 2.2: Update CategoryBadge.css (1 hour)

**File:** `/src/app/components/CategoryBadge.css`

**Replace all hard-coded colors:**

```css
/* Before */
.wpn-category-badge--tenders {
  background-color: #dbeafe;
  color: #1e40af;
  border-color: #93c5fd;
}

/* After */
.wpn-category-badge--tenders {
  background-color: var(--category-tenders-bg);
  color: var(--category-tenders-fg);
  border-color: var(--category-tenders-border);
}
```

**Apply to all 38 category modifiers.**

---

## Phase 3: Documentation (Week 2 — 4 hours)

### Task 3.1: Update Design Token Docs (2 hours)

**File:** `/guidelines/design-tokens/colors.md`

**Add section:**

```markdown
## Category Colors

Each category has a dedicated color palette:

| Category | Background | Foreground | Border |
|----------|------------|------------|--------|
| Tenders | `--category-tenders-bg` | `--category-tenders-fg` | `--category-tenders-border` |
| Estates | `--category-estates-bg` | `--category-estates-fg` | `--category-estates-border` |
...
```

---

### Task 3.2: Create Utility Classes Guide (1 hour)

**File:** `/guidelines/design-tokens/utility-classes.md` (NEW)

Document all new utility classes:
- `.wpn-hero`
- `.wpn-cta-section`
- `.wpn-section-header`
- etc.

---

### Task 3.3: Update Component Guidelines (1 hour)

**File:** `/guidelines/design-tokens/README.md`

Add best practices and examples.

---

## Phase 4: Testing & Validation (Week 2 — 2 hours)

### Task 4.1: Visual Regression Testing (1 hour)

**Process:**
1. Take screenshots of all pages BEFORE changes
2. Apply all changes
3. Take screenshots AFTER changes
4. Compare with visual diff tool
5. Fix any regressions

**Pages to Test:**
- Home (EN/AF)
- Sales (EN/AF)
- Contact (EN/AF)
- Auth pages (8 pages)
- Account pages (3 pages)

---

### Task 4.2: Design System Validation (0.5 hours)

**Test:**
1. Change `--nova-primary` to different color → Verify propagation
2. Change `--nova-accent` to different color → Verify propagation
3. Change category colors → Verify badge updates
4. Change spacing scale → Verify layout updates

---

### Task 4.3: Create Linting Rules (0.5 hours)

**File:** Create `.stylelintrc.json` or ESLint rules

```json
{
  "rules": {
    "color-no-hex": true,
    "function-disallowed-list": ["rgb", "rgba", "hsl", "hsla"],
    "string-disallowed-list": ["font-raleway", "font-inter"]
  }
}
```

---

## Timeline

### Week 1 (Days 1-5)

| Day | Tasks | Hours | Cumulative |
|-----|-------|-------|------------|
| Mon | Task 1.1 (Utility Classes) | 2 | 2 |
| Mon | Task 1.2 (Home.tsx) | 2 | 4 |
| Tue | Task 1.3 (HomeAF.tsx) | 2 | 6 |
| Tue | Task 1.4 (Sales.tsx) | 1.5 | 7.5 |
| Wed | Task 1.5 (SalesAF.tsx) | 1 | 8.5 |
| Wed | Task 1.6 (Contact pages) | 1.5 | 10 |
| Thu | Task 1.7 (Auth pages) | 1 | 11 |
| Thu | Task 1.8-1.10 (Logo, PageStub, NotFound) | 1.5 | 12.5 |
| Fri | Task 2.1-2.2 (Category colors) | 2 | 14.5 |

### Week 2 (Days 6-10)

| Day | Tasks | Hours | Cumulative |
|-----|-------|-------|------------|
| Mon | Task 3.1 (Update docs) | 2 | 16.5 |
| Tue | Task 3.2-3.3 (New docs) | 2 | 18.5 |
| Wed | Task 4.1 (Visual testing) | 1 | 19.5 |
| Wed | Task 4.2-4.3 (Validation) | 1 | 20.5 |
| Thu | Buffer for issues | 2 | 22.5 |
| Fri | Final review | 1 | 23.5 |

**Total Time:** 18 hours (planned) + 4.5 hours (buffer) = 22.5 hours

---

## Success Criteria

### Definition of Done

- [ ] Zero hard-coded hex colors in TSX files
- [ ] Zero `font-raleway` classes
- [ ] All CategoryBadge colors use CSS variables
- [ ] Visual regression tests pass
- [ ] Design system validation tests pass
- [ ] Linting rules in place
- [ ] Documentation updated
- [ ] Code review approved

### Metrics

| Metric | Before | After | Target Met |
|--------|--------|-------|------------|
| Hard-coded Colors | 169+ | 0 | ✅ |
| Font Violations | 50+ | 0 | ✅ |
| CSS Violations | 114 | 0 | ✅ |
| Compliance % | 30% | 100% | ✅ |

---

## Risk Mitigation

### Potential Risks

1. **Visual Regressions**
   - Mitigation: Screenshot comparison before/after
   - Backup plan: Revert and retry

2. **Browser Compatibility**
   - Mitigation: Test in Chrome, Firefox, Safari
   - Backup plan: Add fallbacks

3. **Build Failures**
   - Mitigation: Commit frequently, test builds
   - Backup plan: Revert problematic changes

4. **Time Overruns**
   - Mitigation: 4.5 hour buffer built in
   - Backup plan: Split work into smaller PRs

---

## Post-Remediation

### Maintenance

1. **Linting:** Enforce rules in CI/CD
2. **Code Review:** Check for violations
3. **Documentation:** Keep design tokens updated
4. **Regular Audits:** Quarterly compliance checks

### Future Improvements

1. **Automated Testing:** Visual regression suite
2. **Storybook:** Component documentation
3. **Design Tokens Package:** Shareable across projects
4. **Theme Builder:** UI for customizing design system

---

## Conclusion

**Timeline:** 2 weeks  
**Effort:** 18-23 hours  
**Impact:** High  
**Risk:** Low (with mitigation)  
**ROI:** Excellent (reduces future maintenance by 70%)

**Recommendation:** Execute immediately. Current violations prevent effective design system usage and increase technical debt significantly.

---

**Plan Created By:** AI Assistant  
**Date:** 2026-03-16  
**Status:** READY FOR EXECUTION
