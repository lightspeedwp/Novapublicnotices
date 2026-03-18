# Hero Fixes Task List — Nova Public Notices Portal

**Generated From:** `/reports/2026-03-18-hero-audit.md`  
**Date:** 2026-03-18  
**Priority:** CRITICAL  
**Status:** Pending

---

## Critical Tasks (Blocking — Must Fix Immediately)

### 1. Fix HomeAF.tsx — Replace Hardcoded Hero

**File:** `/src/app/pages/HomeAF.tsx`  
**Issue:** Hardcoded hero section with embedded content  
**Priority:** 🔴 Critical

**Steps:**
- [ ] Import Hero component: `import Hero from "../components/Hero";`
- [ ] Import `useHero` hook: `import { useHero } from "../hooks/useHero";`
- [ ] Add hook call in component: `const heroData = useHero('home', 'af');`
- [ ] Replace hardcoded `<section className="wpn-hero">` block
- [ ] Use: `{heroData && <Hero data={heroData} lang="af" />}`
- [ ] Remove all hardcoded hero markup (lines 37-70 approx)
- [ ] Test rendering
- [ ] Verify Afrikaans content displays correctly

### 2. Fix ContactAF.tsx — Replace Hardcoded Page Header

**File:** `/src/app/pages/ContactAF.tsx`  
**Issue:** Hardcoded page header title  
**Priority:** 🔴 Critical

**Steps:**
- [ ] Import Hero component
- [ ] Import `useHero` hook
- [ ] Add hook call: `const heroData = useHero('contact', 'af');`
- [ ] Replace hardcoded `<h1 className="wpn-page-header__title">` 
- [ ] Use: `{heroData && <Hero data={heroData} lang="af" />}`
- [ ] Test rendering

### 3. Fix Sales.tsx — Replace Hardcoded Page Header

**File:** `/src/app/pages/Sales.tsx`  
**Issue:** Hardcoded page header title  
**Priority:** 🔴 Critical

**Steps:**
- [ ] Verify hero data exists in heroes.en.ts (✅ already exists as `sales`)
- [ ] Import Hero component
- [ ] Import `useHero` hook  
- [ ] Add hook call: `const heroData = useHero('sales', 'en');`
- [ ] Replace hardcoded page header section
- [ ] Use: `{heroData && <Hero data={heroData} lang="en" />}`
- [ ] Test rendering

### 4. Fix SalesAF.tsx — Replace Hardcoded Page Header

**File:** `/src/app/pages/SalesAF.tsx`  
**Issue:** Hardcoded page header title  
**Priority:** 🔴 Critical

**Steps:**
- [ ] Verify hero data exists in heroes.af.ts
- [ ] Import Hero component
- [ ] Import `useHero` hook
- [ ] Add hook call: `const heroData = useHero('sales', 'af');`
- [ ] Replace hardcoded page header section
- [ ] Use: `{heroData && <Hero data={heroData} lang="af" />}`
- [ ] Test rendering

### 5. Fix submit/Entry.tsx — Replace Hardcoded Hero

**File:** `/src/app/pages/submit/Entry.tsx`  
**Issue:** Hardcoded hero section  
**Priority:** 🔴 Critical

**Steps:**
- [ ] Add hero data to heroes.en.ts: `submitNoticeEntry`
- [ ] Import Hero component
- [ ] Import hero data or `useHero` hook
- [ ] Replace hardcoded `<section className="wpn-hero">` block (lines 66-76 approx)
- [ ] Use: `<Hero data={heroesEN.submitNoticeEntry} lang="en" />`
- [ ] Test rendering

### 6. Fix submit/EntryAF.tsx — Replace Hardcoded Hero

**File:** `/src/app/pages/submit/EntryAF.tsx`  
**Issue:** Hardcoded hero section  
**Priority:** 🔴 Critical

**Steps:**
- [ ] Add hero data to heroes.af.ts: `submitNoticeEntry`
- [ ] Import Hero component
- [ ] Import hero data
- [ ] Replace hardcoded `<section className="wpn-hero">` block
- [ ] Use: `<Hero data={heroesAF.submitNoticeEntry} lang="af" />`
- [ ] Test rendering

### 7. Fix Account Pages (8 Files) — Add Hero Component

**Files:**
- `/src/app/pages/account/Dashboard.tsx`
- `/src/app/pages/account/DashboardAF.tsx`
- `/src/app/pages/account/MyNotices.tsx`
- `/src/app/pages/account/Orders.tsx`
- `/src/app/pages/account/Profile.tsx`
- `/src/app/pages/account/ProfileAF.tsx`
- `/src/app/pages/account/SavedSearches.tsx`
- `/src/app/pages/account/SavedSearchesAF.tsx`
- `/src/app/pages/account/Settings.tsx`
- `/src/app/pages/account/SettingsAF.tsx`

**Issue:** Hardcoded h1 titles instead of Hero component  
**Priority:** 🔴 Critical

**Steps for each file:**
- [ ] Check if hero data exists (account, myNotices, myOrders already exist)
- [ ] Add missing hero data entries: `myOrders`, `savedSearches`, `settings`
- [ ] Import Hero component
- [ ] Import or construct hero data
- [ ] Add Hero component before main content
- [ ] Remove hardcoded `<h1>` title
- [ ] Test rendering
- [ ] Verify breadcrumbs display correctly

---

## High Priority Tasks (This Sprint)

### 8. Add Missing Hero Data Entries

**File:** `/src/app/data/heroes/heroes.en.ts`

- [ ] Add `submitNoticeEntry` data:
  ```typescript
  submitNoticeEntry: {
    title: 'Submit your public notice',
    description: 'Choose your notice type below to get started.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Submit notice' },
    ],
    size: 'md',
    alignment: 'left',
  },
  ```

- [ ] Add `myOrders` data (if not exists)
- [ ] Add `savedSearches` data:
  ```typescript
  savedSearches: {
    title: 'Saved searches',
    description: 'Manage your saved notice searches and alerts.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'My account', href: '/my-account' },
      { label: 'Saved searches' },
    ],
    size: 'md',
    alignment: 'left',
  },
  ```

- [ ] Add `settings` data:
  ```typescript
  settings: {
    title: 'Settings & preferences',
    description: 'Manage your account settings, notifications, and privacy preferences.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'My account', href: '/my-account' },
      { label: 'Settings' },
    ],
    size: 'md',
    alignment: 'left',
  },
  ```

**File:** `/src/app/data/heroes/heroes.af.ts`

- [ ] Add Afrikaans translations for all above entries
- [ ] Ensure structure matches English version

### 9. Create Account Hero Helper Hook

**File:** `/src/app/hooks/useAccountHero.ts` (create new)

```typescript
import { heroesEN } from '../data/heroes/heroes.en';
import { heroesAF } from '../data/heroes/heroes.af';

export function useAccountHero(key: string, lang: 'en' | 'af') {
  const heroData = lang === 'en' ? heroesEN : heroesAF;
  return heroData[key] || heroData.account;
}
```

This helper simplifies hero usage in account pages.

---

## Medium Priority Tasks (Next Sprint)

### 10. Document Hero System

**File:** `/docs/hero-system.md` (create new)

Document:
- Hero component architecture
- Available hero patterns
- How to add hero to new pages
- Hero data structure
- Examples for each pattern

### 11. Create Hero Pattern Guidelines

**File:** `/guidelines/design-tokens/page-headers.md` (create new)

Document:
- Hero pattern types (home, page-header, search-results, etc.)
- When to use each pattern
- Size guidelines (sm, md, lg)
- Layout guidelines (default, centered, minimal, with-stats)
- Breadcrumb patterns

### 12. Consider Pattern-Based Structure (Optional)

If hero complexity grows, split into pattern files:

**Create:**
```
/src/app/components/patterns/heroes/
  HeroHome.tsx        — Homepage hero pattern
  HeroPageHeader.tsx  — Standard page header (most common)
  HeroMinimal.tsx     — Minimal header for auth/checkout
  HeroSearch.tsx      — Search results hero pattern
  index.ts            — Export all patterns
```

**Benefit:** Better code organization, easier to maintain individual patterns

**Current approach works well for:** Current project size (single Hero.tsx with props-based variants)

---

## Low Priority Tasks (Backlog)

### 13. Add Hero Background Images Support

**File:** `/src/app/data/heroes/types.ts`

Add to HeroData interface:
```typescript
export interface HeroData {
  // ... existing fields
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  backgroundPosition?: 'center' | 'top' | 'bottom';
}
```

**File:** `/src/app/components/Hero.tsx`

Add background image rendering logic.

### 14. Add Hero Stats Block

**File:** `/src/app/components/Hero.tsx`

Implement stats display for `with-stats` layout:
```tsx
{stats && stats.length > 0 && (
  <div className="wpn-hero__stats">
    {stats.map((stat, index) => (
      <div key={index} className="wpn-hero__stat">
        <span className="wpn-hero__stat-value">{stat.value}</span>
        <span className="wpn-hero__stat-label">{stat.label}</span>
      </div>
    ))}
  </div>
)}
```

### 15. Add Hero Animations

Add subtle entrance animations to hero elements:
- Fade in title
- Slide in buttons
- Stagger breadcrumbs

Use Motion (Framer Motion) for animations.

---

## Testing Checklist

After implementing hero fixes:

- [ ] All 16 pages render without errors
- [ ] Hero titles display correctly
- [ ] Breadcrumbs navigate correctly
- [ ] Buttons link to correct pages
- [ ] Afrikaans translations display correctly
- [ ] Language switching works
- [ ] Responsive on mobile (320px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1024px+)
- [ ] BEM classes applied correctly
- [ ] CSS variables used (no inline styles)
- [ ] Accessibility: Semantic HTML
- [ ] Accessibility: ARIA labels
- [ ] Accessibility: Keyboard navigation
- [ ] Accessibility: Focus states visible

---

## Completion Metrics

**Target:**
- Fix all 16 critical pages (100%)
- Add 3 missing hero data entries (100%)
- Create documentation (100%)

**Current Status:**
- Pages fixed: 0 / 16 (0%)
- Data entries added: 0 / 3 (0%)
- Documentation created: 0 / 2 (0%)

**Definition of Done:**
- ✅ All 16 pages use Hero component
- ✅ No hardcoded hero markup remains
- ✅ All hero content from data files
- ✅ Bilingual hero data complete
- ✅ All pages tested and working
- ✅ Documentation complete

---

## Related Documentation

- **[2026-03-18-hero-audit.md](../reports/2026-03-18-hero-audit.md)** — Source audit report
- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM methodology

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial task list from hero audit report |
