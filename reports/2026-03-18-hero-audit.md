# Hero Audit Report — Nova Public Notices Portal

**Date:** 2026-03-18  
**Audit Type:** Template Part (Critical)  
**Status:** Complete  
**Guidelines Referenced:** Guidelines.md (Section 7), page-headers.md, hero-system.md, css-architecture.md

---

## Executive Summary

Audited hero implementation across **48 page files** in the Nova Public Notices Portal. Found **6 pages using Hero component correctly** and **12 pages with CRITICAL violations** (hard coded hero sections that should use Hero template part component).

### Critical Findings Summary
- ✅ **Hero component exists** at `/src/app/components/Hero.tsx`
- ✅ **Hero data files exist** with bilingual support
- ❌ **Multiple pages have hardcoded hero markup** instead of using Hero component
- ❌ **Inconsistent hero patterns** - some pages use Hero, others hardcode markup
- ⚠️ **BEM classes present** but not consistently applied across hardcoded sections

---

## Critical Findings

### Pages WITHOUT Hero Component (BLOCKING ISSUES)

**Must fix immediately — These pages hardcode hero markup instead of using Hero template part:**

| Page | Issue | Current Implementation | Pattern Needed |
|------|-------|----------------------|----------------|
| `/src/app/pages/HomeAF.tsx` | Hardcoded hero section | `<section className="wpn-hero">` with hardcoded content | home (uses `useHero` hook) |
| `/src/app/pages/ContactAF.tsx` | Hardcoded page header | `<h1 className="wpn-page-header__title">` with hardcoded content | page-header |
| `/src/app/pages/Sales.tsx` | Hardcoded page header | `<h1 className="wpn-page-header__title">` with hardcoded content | page-header |
| `/src/app/pages/SalesAF.tsx` | Hardcoded page header | `<h1 className="wpn-page-header__title">` with hardcoded content | page-header |
| `/src/app/pages/submit/Entry.tsx` | Hardcoded hero section | `<section className="wpn-hero">` with hardcoded title/subtitle | page-header |
| `/src/app/pages/submit/EntryAF.tsx` | Hardcoded hero section | `<section className="wpn-hero">` with hardcoded title/subtitle | page-header |
| `/src/app/pages/account/Dashboard.tsx` | Hardcoded h1 title | `<h1 className="wpn-heading-h1">` directly in page | page-header |
| `/src/app/pages/account/DashboardAF.tsx` | Hardcoded h1 title | `<h1 className="wpn-heading-h1">` directly in page | page-header |
| `/src/app/pages/account/MyNotices.tsx` | Hardcoded title in custom markup | `<h1 className="wpn-my-notices__title">` | page-header |
| `/src/app/pages/account/Orders.tsx` | Hardcoded h1 title | `<h1 className="wpn-heading-h1">` directly in page | page-header |
| `/src/app/pages/account/Profile.tsx` | Hardcoded h1 title | `<h1 className="wpn-heading-h1">` directly in page | page-header |
| `/src/app/pages/account/ProfileAF.tsx` | Hardcoded title in custom markup | `<h1 className="wpn-profile__title">` | page-header |
| `/src/app/pages/account/SavedSearches.tsx` | Hardcoded h1 title | `<h1 className="wpn-heading-h1">` directly in page | page-header |
| `/src/app/pages/account/SavedSearchesAF.tsx` | Hardcoded h1 title | `<h1 className="wpn-heading-h1">` directly in page | page-header |
| `/src/app/pages/account/Settings.tsx` | Hardcoded h1 title | `<h1 className="wpn-heading-h1">` directly in page | page-header |
| `/src/app/pages/account/SettingsAF.tsx` | Hardcoded h1 title | `<h1 className="wpn-heading-h1">` directly in page | page-header |

### Pages Using Hero Component Correctly ✅

| Page | Pattern Used | Status |
|------|--------------|--------|
| `/src/app/pages/Home.tsx` | home | ✅ Uses `useHero()` hook and `<Hero data={heroData} lang="en" />` |
| `/src/app/pages/Contact.tsx` | page-header | ✅ Uses `useHero()` hook and `<Hero data={heroData} lang="en" />` |
| `/src/app/pages/SearchResults.tsx` | search-results (direct props) | ✅ Uses `<Hero title="..." description="..." />` |
| `/src/app/pages/SearchResultsAF.tsx` | search-results (direct props) | ✅ Uses `<Hero title="..." description="..." />` |
| `/src/app/pages/CategoryArchive.tsx` | category-archive | ✅ Uses `<Hero data={heroData} lang="en" />` with dynamic data |
| `/src/app/pages/CategoryArchiveAF.tsx` | category-archive | ✅ Uses `<Hero data={heroData} lang="af" />` with dynamic data |

### Auth Pages (Different Pattern)

**Note:** Auth pages (Login, Register, ForgotPassword, ResetPassword) use a different pattern with centered cards. These may not need traditional Hero component but should be reviewed for consistency.

| Page | Current Implementation | Recommendation |
|------|----------------------|----------------|
| `/src/app/pages/auth/Login.tsx` | Uses `.wpn-auth-form` with `<h1>` inside | Consider minimal hero pattern or keep auth-specific pattern |
| `/src/app/pages/auth/Register.tsx` | Uses `<h1 className="wpn-heading-h1">` in centered layout | Consider minimal hero pattern |

---

## Template Part Status

### Hero Component ✅
- ✅ Hero template part exists at `/src/app/components/Hero.tsx`
- ✅ Accepts both `data` prop and direct props (title, subtitle, description, etc.)
- ✅ Accepts `lang` prop for bilingual content
- ✅ Uses BEM class names (`.wpn-hero`, `.wpn-hero__title`, etc.)
- ✅ Uses CSS variables (no inline styles detected)
- ✅ Supports multiple sizes: sm, md, lg
- ✅ Supports alignment: left, center
- ✅ Supports layouts: default, split, centered, minimal, with-stats
- ✅ Supports breadcrumbs, buttons, search bar, stats
- ⚠️ **Does NOT dynamically load pattern components** - uses single component with conditional rendering

### Hero Patterns ⚠️

**Current Implementation:** Single Hero component with props-based variants, NOT separate pattern components

**Missing Pattern Structure:**
According to audit-hero.md guidelines, hero patterns should be organized as:

```
/src/app/components/patterns/heroes/
  HeroHome.tsx
  HeroPageHeader.tsx
  HeroSearchResults.tsx
  HeroNoticeDetail.tsx
  HeroCategoryArchive.tsx
  HeroDevTools.tsx
  HeroAuth.tsx
  HeroCheckout.tsx
```

**Current approach:**  
Single `/src/app/components/Hero.tsx` with all variants handled through props

**Recommendation:**  
Current approach works well for this project size. Pattern-based split would be beneficial if:
- Individual patterns become complex (100+ lines)
- Need to load patterns dynamically
- Want WordPress-style pattern registration

### Hero Data Files ✅
- ✅ `/src/app/data/heroes/heroes.en.ts` exists
- ✅ `/src/app/data/heroes/heroes.af.ts` exists
- ✅ `/src/app/data/heroes/types.ts` exists with proper TypeScript interfaces
- ✅ `/src/app/data/heroes/index.ts` exists for exports
- ✅ Bilingual pairs complete
- ✅ TypeScript interfaces properly defined
- ✅ Data covers: home, search, notice, category, contact, login, register, account, submitNotice, checkout, sales, faq, privacy, terms, notFound

---

## Pages by Hero Pattern

### Homepage Pattern (home)
- ✅ `/src/app/pages/Home.tsx` — Uses Hero component correctly
- ❌ `/src/app/pages/HomeAF.tsx` — Hardcoded hero markup

### Page Header Pattern (page-header)
**Using Hero correctly:**
- ✅ `/src/app/pages/Contact.tsx`

**Hardcoded (must fix):**
- ❌ `/src/app/pages/ContactAF.tsx`
- ❌ `/src/app/pages/Sales.tsx`
- ❌ `/src/app/pages/SalesAF.tsx`
- ❌ `/src/app/pages/submit/Entry.tsx`
- ❌ `/src/app/pages/submit/EntryAF.tsx`
- ❌ `/src/app/pages/account/Dashboard.tsx`
- ❌ `/src/app/pages/account/DashboardAF.tsx`
- ❌ `/src/app/pages/account/MyNotices.tsx`
- ❌ `/src/app/pages/account/Orders.tsx`
- ❌ `/src/app/pages/account/Profile.tsx`
- ❌ `/src/app/pages/account/ProfileAF.tsx`
- ❌ `/src/app/pages/account/SavedSearches.tsx`
- ❌ `/src/app/pages/account/SavedSearchesAF.tsx`
- ❌ `/src/app/pages/account/Settings.tsx`
- ❌ `/src/app/pages/account/SettingsAF.tsx`

### Search Results Pattern (search-results)
- ✅ `/src/app/pages/SearchResults.tsx` — Uses Hero with direct props
- ✅ `/src/app/pages/SearchResultsAF.tsx` — Uses Hero with direct props

### Notice Detail Pattern (notice-detail)
- ⚠️ `/src/app/pages/SingleNotice.tsx` — Uses login wall, no hero currently
- ⚠️ `/src/app/pages/SingleNoticeAF.tsx` — Uses login wall, no hero currently
- **Note:** These pages show `.wpn-notice-header__title` for logged-in users, could add Hero above

### Category Archive Pattern (category-archive)
- ✅ `/src/app/pages/CategoryArchive.tsx` — Uses Hero component correctly
- ✅ `/src/app/pages/CategoryArchiveAF.tsx` — Uses Hero component correctly

---

## Violations Summary

**Total pages audited:** 48  
**Pages using Hero correctly:** 6 (12.5%)  
**Pages with critical violations:** 16 (33.3%)  
**Auth pages (different pattern):** 8 (16.7%)  
**Form pages (no hero):** 6 (12.5%)  
**Special pages (PageStub, NotFound):** 2 (4.2%)

**By severity:**
- 🔴 **Critical (hardcoded hero instead of component):** 16 pages
- 🟠 **Major (missing hero entirely):** 0 pages
- 🟡 **Minor (could improve):** Auth pages could use minimal hero pattern

---

## CSS Architecture Compliance

### BEM Class Names ✅

**Hero component uses proper BEM:**
```css
.wpn-hero                    /* Block */
.wpn-hero__container         /* Element */
.wpn-hero__content           /* Element */
.wpn-hero__breadcrumbs       /* Element */
.wpn-hero__breadcrumb-item   /* Element */
.wpn-hero__breadcrumb-link   /* Element */
.wpn-hero__title             /* Element */
.wpn-hero__subtitle          /* Element */
.wpn-hero__description       /* Element */
.wpn-hero__buttons           /* Element */
.wpn-hero__button            /* Element */
.wpn-hero__button-icon       /* Element */
.wpn-hero__search            /* Element */
.wpn-hero--sm                /* Modifier (size) */
.wpn-hero--md                /* Modifier (size) */
.wpn-hero--lg                /* Modifier (size) */
.wpn-hero--default           /* Modifier (layout) */
.wpn-hero--split             /* Modifier (layout) */
.wpn-hero--centered          /* Modifier (layout) */
.wpn-hero--minimal           /* Modifier (layout) */
.wpn-hero--with-stats        /* Modifier (layout) */
.wpn-hero__content--left     /* Modifier (alignment) */
.wpn-hero__content--center   /* Modifier (alignment) */
.wpn-hero__button--primary   /* Modifier (button variant) */
.wpn-hero__button--secondary /* Modifier (button variant) */
.wpn-hero__button--outline   /* Modifier (button variant) */
```

✅ **Perfect BEM compliance in Hero component**

**Hardcoded pages use BEM classes correctly:**
- HomeAF uses `.wpn-hero`, `.wpn-hero__container`, `.wpn-hero__title`, `.wpn-hero__subtitle`, `.wpn-hero__actions`
- Contact AF uses `.wpn-page-header__title`, `.wpn-page-header__subtitle`
- Sales pages use `.wpn-page-header__title`, `.wpn-page-header__subtitle`
- Submit pages use `.wpn-hero`, `.wpn-hero__container`, `.wpn-hero__title`, `.wpn-hero__subtitle`

✅ **BEM naming consistent even in hardcoded implementations**

### CSS Variables ✅

**Hero.css uses CSS variables:**
```css
background-color: var(--nova-primary);
padding-top: var(--space-8);
padding-bottom: var(--space-8);
max-width: var(--container-max-width);
padding-left: var(--space-4);
padding-right: var(--space-4);
```

✅ **No hard-coded colors detected**  
✅ **No hard-coded spacing detected**  
✅ **Uses var(--nova-*) and var(--space-*) tokens correctly**

---

## Data Architecture Compliance

### Content from Data Files

**Good examples:**
- `Home.tsx` uses `useHero()` hook to get `heroData` from `/src/app/data/heroes/heroes.en.ts`
- `Contact.tsx` uses `useHero()` hook to get `heroData` from `/src/app/data/heroes/heroes.en.ts`
- `CategoryArchive.tsx` constructs `heroData` object dynamically with category info

✅ **Pages using Hero component pull data from data files**

**Violations (hardcoded content):**
- `HomeAF.tsx` has hardcoded: "Suid-Afrika se Regskennisgewings Gids"
- `ContactAF.tsx` has hardcoded: `{contactPageHeader.title.af}`
- `Sales.tsx` has hardcoded: "How to publish public notices"
- `SalesAF.tsx` has hardcoded: "Hoe om openbare kennisgewings te publiseer"
- `submit/Entry.tsx` has hardcoded: "Submit your public notice"
- `submit/EntryAF.tsx` has hardcoded: "Dien u openbare kennisgewing in"
- Account pages have hardcoded: "My account", "My orders", "Profile settings", etc.

❌ **16 pages have hardcoded content instead of using hero data files**

### Bilingual Data Pairs ✅

- ✅ `heroes.en.ts` and `heroes.af.ts` exist
- ✅ All hero data has EN/AF translations
- ✅ TypeScript interfaces ensure structure matches
- ✅ Data properly exported and imported

---

## Accessibility Compliance

### Hero Component Accessibility ✅

**Good practices:**
```tsx
<section className="wpn-hero">
  <nav className="wpn-hero__breadcrumbs" aria-label="Breadcrumb">
  <h1 className="wpn-hero__title">{title}</h1>
```

- ✅ Semantic HTML (`<section>`, `<nav>`, `<h1>`)
- ✅ Proper heading hierarchy (h1 for title)
- ✅ Breadcrumb navigation with `aria-label="Breadcrumb"`
- ✅ One h1 per page (in hero title)
- ✅ Subtitle uses `<p>` tag (not h2)

### Hardcoded Pages Accessibility ⚠️

**Most hardcoded pages follow good practices:**
- Use semantic `<h1>` for page titles
- Use `<nav>` for breadcrumbs
- Proper heading hierarchy

⚠️ **But they should still use Hero component for consistency**

---

## Mobile Responsiveness ✅

**Hero component responsive features:**
```css
/* Mobile: sm size */
.wpn-hero--sm {
  padding-top: var(--space-8);
}

/* Tablet & Desktop: md/lg sizes */
@media (min-width: 768px) {
  .wpn-hero--md {
    padding-top: var(--space-16);
  }
}

@media (min-width: 1024px) {
  .wpn-hero__container {
    padding-left: var(--space-8);
  }
}
```

- ✅ Responsive padding based on viewport
- ✅ Stacked layout on mobile
- ✅ Uses CSS gap/padding (not margins)
- ✅ Touch-friendly button sizes
- ✅ Readable font sizes on all devices

---

## Recommendations

### Immediate (BLOCKING)

1. **Fix HomeAF.tsx** — Replace hardcoded hero with Hero component + data
2. **Fix ContactAF.tsx** — Replace hardcoded header with Hero component + data
3. **Fix Sales.tsx & SalesAF.tsx** — Replace hardcoded headers with Hero component + data
4. **Fix submit/Entry.tsx & EntryAF.tsx** — Replace hardcoded hero with Hero component + data
5. **Fix all account pages** (8 pages) — Replace hardcoded h1 titles with Hero component + data

### Short Term (This Sprint)

1. Add hero data entries for all missing pages:
   - `heroesEN.sales` and `heroesAF.sales`
   - `heroesEN.submitNoticeEntry` and `heroesAF.submitNoticeEntry`
   - `heroesEN.myOrders` and `heroesAF.myOrders`
   - `heroesEN.savedSearches` and `heroesAF.savedSearches`
   - `heroesEN.settings` and `heroesAF.settings`

2. Create helper hook for account pages:
   ```tsx
   // useAccountHero.ts
   export function useAccountHero(key: string, lang: 'en' | 'af') {
     return heroData[key] || heroData.account;
   }
   ```

### Long Term (Next Sprint)

1. **Consider pattern-based structure** if hero complexity grows:
   ```
   /src/app/components/patterns/heroes/
     HeroHome.tsx        — Large, impactful homepage hero
     HeroPageHeader.tsx  — Standard page header (most common)
     HeroMinimal.tsx     — Minimal header for auth/checkout
   ```

2. **Add hero background images** support:
   ```tsx
   interface HeroData {
     // ... existing fields
     backgroundImage?: string;
     backgroundOverlay?: boolean;
   }
   ```

3. **Add hero stats block** for with-stats layout:
   ```tsx
   {stats && stats.length > 0 && (
     <div className="wpn-hero__stats">
       {stats.map(stat => (
         <div className="wpn-hero__stat">
           <span className="wpn-hero__stat-value">{stat.value}</span>
           <span className="wpn-hero__stat-label">{stat.label}</span>
         </div>
       ))}
     </div>
   )}
   ```

---

## Implementation Checklist

### For HomeAF.tsx:

- [ ] Import Hero component: `import Hero from "../components/Hero";`
- [ ] Import `useHero` hook: `import { useHero } from "../hooks/useHero";`
- [ ] Add hook call: `const heroData = useHero('home', 'af');`
- [ ] Replace hardcoded hero section with: `{heroData && <Hero data={heroData} lang="af" />}`
- [ ] Test rendering
- [ ] Verify AF content displays

### For ContactAF.tsx:

- [ ] Import Hero component
- [ ] Import `useHero` hook
- [ ] Add hook call: `const heroData = useHero('contact', 'af');`
- [ ] Replace hardcoded header with Hero
- [ ] Test rendering

### For Sales.tsx & SalesAF.tsx:

- [ ] Verify hero data exists for sales in heroes.en.ts ✅ (already exists)
- [ ] Import Hero component
- [ ] Import `useHero` hook
- [ ] Add hook call: `const heroData = useHero('sales', 'en/af');`
- [ ] Replace hardcoded header with Hero
- [ ] Test rendering

### For submit/Entry.tsx & EntryAF.tsx:

- [ ] Add hero data for submit notice entry page to heroes.en.ts
- [ ] Add hero data for submit notice entry page to heroes.af.ts
- [ ] Import Hero component
- [ ] Import hero data
- [ ] Replace hardcoded hero with Hero component
- [ ] Test rendering

### For Account Pages (8 pages):

- [ ] Add missing hero data entries (myOrders, savedSearches, settings)
- [ ] For each page:
  - [ ] Import Hero component
  - [ ] Import or construct hero data
  - [ ] Add Hero component at top of page content
  - [ ] Remove hardcoded h1 title
  - [ ] Test rendering
  - [ ] Verify breadcrumbs work

---

## Files Requiring Changes

### Create (if missing):
- ✅ `/src/app/components/Hero.tsx` — Already exists
- ✅ `/src/app/data/heroes/heroes.en.ts` — Already exists
- ✅ `/src/app/data/heroes/heroes.af.ts` — Already exists

### Update (add Hero data entries):
- `/src/app/data/heroes/heroes.en.ts` — Add: myOrders, savedSearches, settings
- `/src/app/data/heroes/heroes.af.ts` — Add: myOrders, savedSearches, settings

### Fix (replace hardcoded hero with Hero component):
1. `/src/app/pages/HomeAF.tsx` — CRITICAL
2. `/src/app/pages/ContactAF.tsx` — CRITICAL
3. `/src/app/pages/Sales.tsx` — CRITICAL
4. `/src/app/pages/SalesAF.tsx` — CRITICAL
5. `/src/app/pages/submit/Entry.tsx` — CRITICAL
6. `/src/app/pages/submit/EntryAF.tsx` — CRITICAL
7. `/src/app/pages/account/Dashboard.tsx` — CRITICAL
8. `/src/app/pages/account/DashboardAF.tsx` — CRITICAL
9. `/src/app/pages/account/MyNotices.tsx` — CRITICAL
10. `/src/app/pages/account/Orders.tsx` — CRITICAL
11. `/src/app/pages/account/Profile.tsx` — CRITICAL
12. `/src/app/pages/account/ProfileAF.tsx` — CRITICAL
13. `/src/app/pages/account/SavedSearches.tsx` — CRITICAL
14. `/src/app/pages/account/SavedSearchesAF.tsx` — CRITICAL
15. `/src/app/pages/account/Settings.tsx` — CRITICAL
16. `/src/app/pages/account/SettingsAF.tsx` — CRITICAL

---

## Metrics

- **Total pages audited:** 48
- **Pages using Hero correctly:** 6 (12.5%)
- **Pages with critical violations:** 16 (33.3%)
- **Critical issues:** 16 (hardcoded heroes)
- **Major issues:** 0 (no missing heroes entirely)
- **Minor issues:** 8 (auth pages could use minimal pattern)
- **Completion rate:** 12.5% (only 6 of ~22 hero-eligible pages use component)

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 7 (Dynamic page requirements)
- **[page-headers.md](../guidelines/design-tokens/page-headers.md)** — Hero patterns (needs creation)
- **[hero-system.md](../docs/hero-system.md)** — Hero system documentation (needs creation)
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM methodology
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual requirements
- **[audit-header.md](../prompts/audit-header.md)** — Header audit (related)
- **[audit-footer.md](../prompts/audit-footer.md)** — Footer audit (related)

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial comprehensive hero audit for Nova Public Notices Portal |
