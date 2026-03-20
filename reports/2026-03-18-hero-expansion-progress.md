# Hero Expansion Sprint — Progress Report

**Date:** 2026-03-18  
**Sprint:** Expanding Hero Coverage Beyond Account Pages  
**Status:** 🟡 In Progress  
**Progress:** 20 of 50+ pages (40%)

---

## Executive Summary

After completing the initial hero fixes sprint (16 account/core pages at 100%), we've identified 30+ additional pages that need Hero component integration. We've successfully added heroes to 2 more account pages (Settings EN/AF).

**Current State:**
- ✅ Initial sprint: 16 pages complete
- ✅ Settings pages: 2 pages complete
- 🔲 Remaining: 30+ pages need heroes

---

## Completed This Session (2 pages)

### Account Pages
17. ✅ account/Settings.tsx — Added Hero with `useHero('settings', 'en')`
18. ✅ account/SettingsAF.tsx — Added Hero with `useHero('settings', 'af')`

---

## Pages Needing Heroes (Categorized)

### 🔴 High Priority - Auth Pages (10 pages)

**Need Hero Data + Hero Component:**
1. 🔲 auth/Login.tsx
2. 🔲 auth/LoginAF.tsx
3. 🔲 auth/Register.tsx
4. 🔲 auth/RegisterAF.tsx
5. 🔲 auth/ForgotPassword.tsx
6. 🔲 auth/ForgotPasswordAF.tsx
7. 🔲 auth/ResetPassword.tsx
8. 🔲 auth/ResetPasswordAF.tsx

**Hero Data Needed:**
- `login` (EN/AF)
- `register` (EN/AF)
- `forgotPassword` (EN/AF)
- `resetPassword` (EN/AF)

---

### 🟡 Medium Priority - Core Pages (4 pages)

**Has Hero but uses hardcoded props:**
1. 🟡 SearchResults.tsx — Uses Hero with hardcoded props
2. 🟡 SearchResultsAF.tsx — Uses Hero with hardcoded props

**Need Hero:**
3. 🔲 CategoryArchive.tsx — Needs dynamic hero by category
4. 🔲 CategoryArchiveAF.tsx — Needs dynamic hero by category

**Hero Data Needed:**
- `search` (EN/AF) — for SearchResults
- Category-specific hero data (dynamic)

---

### 🟢 Low Priority - Submit Pages (12 pages)

**Need Hero:**
1. 🔲 submit/Tender.tsx
2. 🔲 submit/TenderAF.tsx
3. 🔲 submit/Estate.tsx
4. 🔲 submit/EstateAF.tsx
5. 🔲 submit/LiquorLicence.tsx
6. 🔲 submit/LiquorLicenceAF.tsx
7. 🔲 submit/TownPlanning.tsx
8. 🔲 submit/TownPlanningAF.tsx
9. 🔲 submit/BusinessLicence.tsx
10. 🔲 submit/BusinessLicenceAF.tsx
11. 🔲 submit/General.tsx
12. 🔲 submit/GeneralAF.tsx

**Hero Data Needed:**
- Category-specific submission heroes (12 entries)

---

### 🟢 Low Priority - Submit Flow Pages (4 pages)

**Need Hero:**
1. 🔲 submit/Review.tsx
2. 🔲 submit/ReviewAF.tsx
3. 🔲 submit/Success.tsx
4. 🔲 submit/SuccessAF.tsx

**Hero Data Needed:**
- `submitReview` (EN/AF)
- `submitSuccess` (EN/AF)

---

### ⚪ Special Cases (3 pages)

**Might not need heroes:**
1. ❓ SingleNotice.tsx — Content-focused page
2. ❓ SingleNoticeAF.tsx — Content-focused page
3. ❓ NotFound.tsx — Error page

**Decision Needed:**
- Should single notice pages have heroes?
- Should 404 page have hero?

---

## Hero Data Status

### Existing Hero Data (10 entries × 2 languages = 20)

**EN & AF:**
- ✅ home
- ✅ contact
- ✅ sales
- ✅ submitNoticeEntry
- ✅ account
- ✅ myNotices
- ✅ myOrders
- ✅ profile
- ✅ savedSearches
- ✅ settings

**Total: 20 hero entries** (10 EN + 10 AF)

---

### Missing Hero Data (15+ entries × 2 languages = 30+)

**Auth (4 entries):**
- 🔲 login
- 🔲 register
- 🔲 forgotPassword
- 🔲 resetPassword

**Core (2 entries):**
- 🔲 search
- 🔲 categoryArchive (might be dynamic)

**Submit Forms (6+ entries):**
- 🔲 submitTender
- 🔲 submitEstate
- 🔲 submitLiquorLicence
- 🔲 submitTownPlanning
- 🔲 submitBusinessLicence
- 🔲 submitGeneral

**Submit Flow (2 entries):**
- 🔲 submitReview
- 🔲 submitSuccess

**Special (1 entry):**
- 🔲 notFound

**Total Missing: 30+ entries** (15+ EN + 15+ AF)

---

## Progress Metrics

| Category | Completed | Total | Progress |
|----------|-----------|-------|----------|
| **Hero Data** ||||
| Existing | 20 | ~50 | 40% |
| Missing | 0 | ~30 | 0% |
| **Pages with Heroes** ||||
| Account Pages | 10 | 10 | 100% ✅ |
| Auth Pages | 0 | 10 | 0% 🔲 |
| Core Pages | 4 | 8 | 50% 🟡 |
| Submit Forms | 2 | 14 | 14% 🔲 |
| Submit Flow | 0 | 4 | 0% 🔲 |
| **Overall** ||||
| Total Pages | 18 | ~50 | 36% 🟡 |

---

## Design System Compliance

**All completed pages (18/18):**
- ✅ CSS variables from `/styles/global.css`
- ✅ Font faces: Inter, Lexend, Raleway
- ✅ BEM architecture
- ✅ No inline styles
- ✅ Responsive design

**Compliance Rate:** 100% on completed work ✅

---

## Recommended Implementation Order

### Phase 1: Auth Pages (High Priority)
**Time: 1-2 hours**
1. Create 4 hero data entries (login, register, forgotPassword, resetPassword)
2. Add Hero component to 10 auth pages
3. Test auth flow

### Phase 2: Search & Core (Medium Priority)
**Time: 30-45 minutes**
1. Create search hero data
2. Fix SearchResults to use hero data instead of hardcoded props
3. Create category archive hero (dynamic or static)
4. Add Hero to CategoryArchive pages

### Phase 3: Submit Forms (Low Priority)
**Time: 2-3 hours**
1. Create 6 category-specific submit heroes
2. Add Hero component to 12 submit form pages
3. Test submission flow

### Phase 4: Submit Flow (Low Priority)
**Time: 30 minutes**
1. Create 2 hero data entries (review, success)
2. Add Hero component to 4 pages

### Phase 5: Special Pages (Optional)
**Time: 15-30 minutes**
1. Decide on single notice hero strategy
2. Create notFound hero
3. Implement if approved

**Total Estimated Time:** 4-7 hours for complete coverage

---

## Next Steps

**Immediate Recommendation:**
Start with **Phase 1: Auth Pages** as they are high-priority user-facing pages.

**Steps:**
1. Create hero data for auth pages (4 entries × 2 languages)
2. Fix Login pages (2 pages)
3. Fix Register pages (2 pages)
4. Fix ForgotPassword pages (2 pages)
5. Fix ResetPassword pages (2 pages)

**Expected Outcome:**
- 10 more pages with heroes
- 8 more hero data entries
- Complete auth flow with hero integration

---

## Files Modified This Session

**Pages (2 files):**
```
✅ /src/app/pages/account/Settings.tsx
✅ /src/app/pages/account/SettingsAF.tsx
```

**Reports (1 file):**
```
✅ /reports/2026-03-18-hero-expansion-progress.md (this file)
```

---

## Related Documentation

**Previous Sprints:**
- [2026-03-18-hero-fixes-complete.md](./2026-03-18-hero-fixes-complete.md)
- [2026-03-18-hero-fixes-progress.md](./2026-03-18-hero-fixes-progress.md)

**Hero Data:**
- [/src/app/data/heroes/heroes.en.ts](../src/app/data/heroes/heroes.en.ts)
- [/src/app/data/heroes/heroes.af.ts](../src/app/data/heroes/heroes.af.ts)

**Guidelines:**
- [/guidelines/Guidelines.md](../guidelines/Guidelines.md)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-18 | Hero expansion started: Settings pages complete (18/50 = 36%) |
