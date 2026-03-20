# Hero Component Implementation Tasks

**Generated From:** `/reports/2026-03-18-hero-audit.md`  
**Date:** 2026-03-18  
**Status:** Active  
**Priority:** Critical

---

## Critical (P1) — Must Fix Immediately

### Pages Without Hero Component (12 pages)

These pages hardcode hero markup instead of using the Hero template part component. Must be migrated to use Hero component for consistency and maintainability.

- [ ] **Fix HomeAF.tsx hardcoded hero**
  - File: `/src/app/pages/HomeAF.tsx`
  - Issue: Uses `<section className="wpn-hero">` with hardcoded content
  - Pattern: home (should use `useHero` hook)
  - Report: Section "Critical Findings"

- [ ] **Fix ContactAF.tsx hardcoded page header**
  - File: `/src/app/pages/ContactAF.tsx`
  - Issue: Uses `<h1 className="wpn-page-header__title">` with hardcoded content
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix Sales.tsx hardcoded page header**
  - File: `/src/app/pages/Sales.tsx`
  - Issue: Uses `<h1 className="wpn-page-header__title">` with hardcoded content
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix SalesAF.tsx hardcoded page header**
  - File: `/src/app/pages/SalesAF.tsx`
  - Issue: Uses `<h1 className="wpn-page-header__title">` with hardcoded content
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix submit/Entry.tsx hardcoded hero**
  - File: `/src/app/pages/submit/Entry.tsx`
  - Issue: Uses `<section className="wpn-hero">` with hardcoded title/subtitle
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix submit/EntryAF.tsx hardcoded hero**
  - File: `/src/app/pages/submit/EntryAF.tsx`
  - Issue: Uses `<section className="wpn-hero">` with hardcoded title/subtitle
  - Pattern: page-header
  - Report: Section "Critical Findings"

### Account Pages Without Hero Component (10 pages)

- [ ] **Fix account/Dashboard.tsx**
  - File: `/src/app/pages/account/Dashboard.tsx`
  - Issue: Uses `<h1 className="wpn-heading-h1">` directly in page
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix account/DashboardAF.tsx**
  - File: `/src/app/pages/account/DashboardAF.tsx`
  - Issue: Uses `<h1 className="wpn-heading-h1">` directly in page
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix account/MyNotices.tsx**
  - File: `/src/app/pages/account/MyNotices.tsx`
  - Issue: Uses `<h1 className="wpn-my-notices__title">` in custom markup
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix account/Orders.tsx**
  - File: `/src/app/pages/account/Orders.tsx`
  - Issue: Uses `<h1 className="wpn-heading-h1">` directly in page
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix account/Profile.tsx**
  - File: `/src/app/pages/account/Profile.tsx`
  - Issue: Uses `<h1 className="wpn-heading-h1">` directly in page
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix account/ProfileAF.tsx**
  - File: `/src/app/pages/account/ProfileAF.tsx`
  - Issue: Uses `<h1 className="wpn-profile__title">` in custom markup
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix account/SavedSearches.tsx**
  - File: `/src/app/pages/account/SavedSearches.tsx`
  - Issue: Uses `<h1 className="wpn-heading-h1">` directly in page
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix account/SavedSearchesAF.tsx**
  - File: `/src/app/pages/account/SavedSearchesAF.tsx`
  - Issue: Uses `<h1 className="wpn-heading-h1">` directly in page
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix account/Settings.tsx**
  - File: `/src/app/pages/account/Settings.tsx`
  - Issue: Uses `<h1 className="wpn-heading-h1">` directly in page
  - Pattern: page-header
  - Report: Section "Critical Findings"

- [ ] **Fix account/SettingsAF.tsx**
  - File: `/src/app/pages/account/SettingsAF.tsx`
  - Issue: Uses `<h1 className="wpn-heading-h1">` directly in page
  - Pattern: page-header
  - Report: Section "Critical Findings"

---

## High Priority (P2) — Should Fix Soon

- [ ] **Review Auth Pages for Hero Pattern**
  - Files: Login.tsx, Register.tsx, ForgotPassword.tsx, ResetPassword.tsx (EN + AF versions)
  - Issue: Use different pattern with centered cards
  - Decision Needed: Should auth pages use minimal hero pattern or keep auth-specific design?
  - Report: Section "Auth Pages (Different Pattern)"

- [ ] **Document Hero Pattern Usage**
  - Create decision tree for when to use Hero vs page-header vs custom markup
  - Document in `/guidelines/design-tokens/hero-patterns.md`
  - Include examples for each pattern type

---

## Low Priority (P3) — Future Improvements

- [ ] **Consider Hero Pattern Components**
  - Current: Single Hero component with conditional rendering
  - Future: Separate pattern components (HeroHome, HeroPageHeader, etc.)
  - Reference: `/src/app/components/patterns/heroes/` structure mentioned in audit
  - Benefit: Better code splitting, easier to maintain pattern-specific logic
  - Report: Section "Hero Patterns"

---

## Progress Tracking

**Total Tasks:** 25  
**Critical (P1):** 22 tasks  
**High Priority (P2):** 2 tasks  
**Low Priority (P3):** 1 task

**Completion Status:** 0/25 (0%)

---

## Related Files

- **Component:** `/src/app/components/Hero.tsx`
- **CSS:** `/src/app/components/Hero.css`
- **Guidelines:** `/guidelines/Guidelines.md` (Section 7), `/guidelines/page-headers.md`, `/guidelines/hero-system.md`
- **Data:** `/src/app/data/heroes/` (hero data files)

---

## Success Criteria

- [ ] All pages use Hero component or documented alternative pattern
- [ ] Zero hardcoded hero markup in page files
- [ ] Consistent hero implementation across English and Afrikaans pages
- [ ] Hero pattern usage documented in guidelines
