# Hero Fixes Sprint — Progress Report

**Date:** 2026-03-18  
**Sprint:** Hero Fixes & Design System Compliance  
**Status:** 🟡 In Progress (7 of 22 tasks complete)

---

## Executive Summary

Successfully created all 6 missing hero data entries and fixed 1 of 16 pages with hardcoded heroes. Following design system standards with CSS variables and defined font faces throughout all implementations.

**Completed:**
- ✅ Added 3 missing hero entries to `heroes.en.ts`
- ✅ Added 3 missing hero entries to `heroes.af.ts`
- ✅ Fixed HomeAF.tsx (replaced hardcoded hero with Hero component)

**Remaining:**
- 🔲 15 pages still need hero component integration
- 🔲 Design system compliance verification needed

---

## Completed Tasks (7/22)

### ✅ Hero Data Creation (6/6 Complete)

**English Hero Data (`heroes.en.ts`):**
1. ✅ `submitNoticeEntry` — Submit notice landing page hero
2. ✅ `savedSearches` — Saved searches and alerts hero  
3. ✅ `settings` — Account settings hero

**Afrikaans Hero Data (`heroes.af.ts`):**
4. ✅ `submitNoticeEntry` — Dien kennisgewing in landing blad
5. ✅ `savedSearches` — Gestoorde soektogte en kennisgewings
6. ✅ `settings` — Rekening instellings

**All hero data entries include:**
- Phosphor Icons integration
- Breadcrumbs
- Button CTAs where appropriate
- BEM-compliant structure
- CSS variable usage

---

### ✅ Page Fixes (1/16 Complete)

**1. HomeAF.tsx** ✅ **FIXED**

**File:** `/src/app/pages/HomeAF.tsx`  
**Status:** ✅ Complete  
**Changes:**
- Added Hero component import
- Added useHero hook import
- Replaced hardcoded hero section (lines 37-72)
- Now uses: `{heroData && <Hero data={heroData} lang="af" />}`
- Removed hardcoded title, subtitle, and buttons
- All styling via CSS variables
- BEM classes applied

**Design System Compliance:**
- ✅ Uses CSS variables
- ✅ Uses defined font faces
- ✅ No inline styles
- ✅ BEM architecture
- ✅ Responsive design

---

## Remaining Tasks (15/16 Pages)

### 🔲 High Priority Pages (5 remaining)

**2. ContactAF.tsx** 🔲 Pending
- File: `/src/app/pages/ContactAF.tsx`
- Task: Replace hardcoded page header
- Hero data: `heroes.af.ts` → `contact`

**3. Sales.tsx** 🔲 Pending
- File: `/src/app/pages/Sales.tsx`
- Task: Replace hardcoded page header
- Hero data: `heroes.en.ts` → `sales`

**4. SalesAF.tsx** 🔲 Pending
- File: `/src/app/pages/SalesAF.tsx`
- Task: Replace hardcoded page header
- Hero data: `heroes.af.ts` → `sales`

**5. submit/Entry.tsx** 🔲 Pending
- File: `/src/app/pages/submit/Entry.tsx`
- Task: Replace hardcoded hero section
- Hero data: `heroes.en.ts` → `submitNoticeEntry` ✅ (created)

**6. submit/EntryAF.tsx** 🔲 Pending
- File: `/src/app/pages/submit/EntryAF.tsx`
- Task: Replace hardcoded hero section
- Hero data: `heroes.af.ts` → `submitNoticeEntry` ✅ (created)

---

### 🔲 Account Pages (10 remaining)

**English Account Pages (5 pages):**

**7. account/Dashboard.tsx** 🔲 Pending
- Hero data: `heroes.en.ts` → `account`

**8. account/MyNotices.tsx** 🔲 Pending
- Hero data: `heroes.en.ts` → `myNotices`

**9. account/Orders.tsx** 🔲 Pending
- Hero data: `heroes.en.ts` → `myOrders`

**10. account/Profile.tsx** 🔲 Pending
- Hero data: `heroes.en.ts` → `profile`

**11. account/SavedSearches.tsx** 🔲 Pending
- Hero data: `heroes.en.ts` → `savedSearches` ✅ (created)

**Afrikaans Account Pages (5 pages):**

**12. account/DashboardAF.tsx** 🔲 Pending
- Hero data: `heroes.af.ts` → `account`

**13. account/MyNoticesAF.tsx** 🔲 Pending (stub page)
- Needs full implementation with Hero component

**14. account/OrdersAF.tsx** 🔲 Pending (stub page)
- Needs full implementation with Hero component

**15. account/ProfileAF.tsx** 🔲 Pending
- Hero data: `heroes.af.ts` → `profile`

**16. account/SavedSearchesAF.tsx** 🔲 Pending (stub page)
- Hero data: `heroes.af.ts` → `savedSearches` ✅ (created)
- Needs full implementation with Hero component

---

## Missing Hero Data: Settings Pages

**Note:** Settings pages (EN/AF) need hero integration but the data already exists:

**17. account/Settings.tsx** 🔲 Pending
- Hero data: `heroes.en.ts` → `settings` ✅ (created)

**18. account/SettingsAF.tsx** 🔲 Pending
- Hero data: `heroes.af.ts` → `settings` ✅ (created)

---

## Implementation Pattern

**Standard Hero Fix Pattern:**

```typescript
// 1. Add imports
import Hero from "../../components/Hero";
import { useHero } from "../../hooks/useHero";

// 2. Add hook call in component
const heroData = useHero('heroKey', 'en'); // or 'af'

// 3. Replace hardcoded hero section with:
{heroData && <Hero data={heroData} lang="en" />}
```

**Design System Compliance Checklist:**
- ✅ Import Hero component
- ✅ Use `useHero` hook
- ✅ Remove hardcoded titles/descriptions
- ✅ Remove inline styles
- ✅ Use CSS variables via BEM classes
- ✅ Use defined font faces (Inter, Lexend, Raleway)
- ✅ Ensure responsive design
- ✅ Test rendering

---

## Design System Standards Applied

**All fixes follow these standards:**

### CSS Variables (from /styles/global.css)
- Colors: `var(--nova-primary)`, `var(--nova-accent)`, etc.
- Spacing: `var(--space-*)` fluid clamp values
- Typography: `var(--text-*)` fluid clamp values
- Borders: `var(--border-*)` 
- Radius: `var(--radius-*)`

### Font Faces (defined in CSS)
- **Headings:** Lexend (via `--font-heading`)
- **Body:** Inter (via `--font-body`)
- **Display:** Raleway (via `--font-display`)

### BEM Architecture
- Block: `wpn-hero`
- Elements: `wpn-hero__title`, `wpn-hero__subtitle`, etc.
- Modifiers: `wpn-hero--lg`, `wpn-hero--center`, etc.

### Phosphor Icons
- All icons from `@phosphor-icons/react`
- Consistent sizing via CSS variables
- Accessible icon implementation

---

## Progress Metrics

| Metric | Value | Status |
|--------|-------|--------|
| **Hero Data Entries** |||
| Created (EN) | 3/3 | ✅ 100% |
| Created (AF) | 3/3 | ✅ 100% |
| **Page Fixes** |||
| Completed | 1/16 | 🟡 6.25% |
| Remaining | 15/16 | 🔲 93.75% |
| **Overall Sprint** |||
| Tasks completed | 7/22 | 🟡 31.8% |
| Tasks remaining | 15/22 | 🔲 68.2% |

---

## Next Steps

### Immediate (Next Session)

**Batch 1: High Priority Pages (5 pages)**
1. Fix ContactAF.tsx
2. Fix Sales.tsx
3. Fix SalesAF.tsx
4. Fix submit/Entry.tsx
5. Fix submit/EntryAF.tsx

**Estimated Time:** 1-2 hours

---

### Batch 2: Account Pages English (5 pages)
6. Fix account/Dashboard.tsx
7. Fix account/MyNotices.tsx
8. Fix account/Orders.tsx
9. Fix account/Profile.tsx
10. Fix account/SavedSearches.tsx

**Estimated Time:** 1-2 hours

---

### Batch 3: Account Pages Afrikaans (5 pages)
11. Fix account/DashboardAF.tsx
12. Implement account/MyNoticesAF.tsx (full page + hero)
13. Implement account/OrdersAF.tsx (full page + hero)
14. Fix account/ProfileAF.tsx
15. Implement account/SavedSearchesAF.tsx (full page + hero)

**Estimated Time:** 2-3 hours (3 stub pages need full implementation)

---

### Batch 4: Settings Pages (2 pages)
16. Fix account/Settings.tsx
17. Fix account/SettingsAF.tsx

**Estimated Time:** 30 minutes

---

## Design System Compliance Status

**Current Compliance:** ✅ **100%** for completed work

**Verified:**
- ✅ All CSS variables from `/styles/global.css` used
- ✅ All font faces defined in CSS
- ✅ No inline styles (except dynamic values)
- ✅ BEM naming conventions
- ✅ Phosphor Icons integration
- ✅ Responsive design (320px-1440px)
- ✅ Bilingual data structure
- ✅ Accessibility baseline

---

## Files Modified This Session

**Hero Data:**
```
✅ /src/app/data/heroes/heroes.en.ts (added 3 entries)
✅ /src/app/data/heroes/heroes.af.ts (added 3 entries)
```

**Pages:**
```
✅ /src/app/pages/HomeAF.tsx (hero component integrated)
```

**Reports:**
```
✅ /reports/2026-03-18-hero-fixes-progress.md (this file)
✅ /reports/2026-03-18-archive-ready.md (archive documentation)
✅ /tasks/archive/README.md (task archive index)
```

---

## Success Criteria

**Sprint Complete When:**
- [ ] All 6 missing hero data entries created ✅ DONE
- [ ] All 16 pages use Hero component (1/16 done)
- [ ] All pages use CSS variables (1/16 verified)
- [ ] All pages use defined font faces (1/16 verified)
- [ ] All pages tested and rendering correctly
- [ ] Design system compliance at 100%
- [ ] Documentation updated

**Current Status:** 🟡 **31.8% Complete** (7/22 tasks)

---

## Related Documentation

**Task List:**
- [/tasks/2026-03-18-hero-fixes.md](../tasks/2026-03-18-hero-fixes.md)

**Guidelines:**
- [/guidelines/Guidelines.md](../guidelines/Guidelines.md) — Project standards
- [/guidelines/design-tokens/](../guidelines/design-tokens/) — Design system

**Hero System:**
- [/src/app/data/heroes/heroes.en.ts](../src/app/data/heroes/heroes.en.ts)
- [/src/app/data/heroes/heroes.af.ts](../src/app/data/heroes/heroes.af.ts)
- [/src/app/components/Hero.tsx](../src/app/components/Hero.tsx)

---

## Conclusion

Successfully completed 31.8% of the hero fixes sprint. All 6 missing hero data entries created with full bilingual support and design system compliance. First page (HomeAF.tsx) fixed and verified to use CSS variables and defined font faces.

**15 pages remaining** to reach 100% hero component integration and design system compliance. Work is proceeding systematically with clear patterns established.

**Archive operations ready to execute** with 87 reports and 2 task lists ready to move.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-18 | Initial progress report: 7/22 tasks complete (31.8%) |
