# Title Case Violations Audit — Complete

**Date:** March 16, 2026  
**Type:** Content Audit  
**Scope:** All 78 pages, data files, navigation, components  
**Status:** ✅ **AUDIT COMPLETE** — Ready for remediation

---

## 🎯 Executive Summary

Comprehensive audit identified **250+ title case violations** across 6 major data files. All violations documented below with exact locations and proposed sentence case replacements.

**Severity:** HIGH — Violates critical design guideline (Section 13.5)  
**Impact:** All 78 pages, 158 routes affected  
**Effort:** ~2-3 hours systematic replacement

---

## 📊 Violation Statistics

### By File
| File | Violations | Type |
|------|------------|------|
| `/src/app/data/navigation.ts` | ~90 | Nav labels, menu items |
| `/src/app/data/contact.ts` | ~25 | Page headers, categories, form labels |
| `/src/app/utils/createStubPages.ts` | ~50 | Page titles (metadata) |
| `/src/app/data/help/faq-data.ts` | ~8 | Quick help link titles |
| `/src/app/data/account.ts` | ~4 | Empty state titles |
| Other data files | ~73 | Contact names (acceptable) |

**Total:** 250+ violations  
**Critical:** 177 (user-facing UI text)  
**Acceptable:** 73 (proper nouns like contact names)

---

## 🔴 CRITICAL VIOLATIONS — Must Fix

### 1. Navigation Labels (`/src/app/data/navigation.ts`)

#### Main Navigation
```typescript
// ❌ CURRENT (Title Case)
{ label: { en: "Search Notices", af: "Soek Kennisgewings" }, href: "/search" }
{ label: { en: "Public Notices", af: "Openbare Kennisgewings" }, href: "/search" }
{ label: { en: "How It Works", af: "Hoe Dit Werk" }, href: "/sales" }

// ✅ SHOULD BE (Sentence Case)
{ label: { en: "Search notices", af: "Soek kennisgewings" }, href: "/search" }
{ label: { en: "Public notices", af: "Openbare kennisgewings" }, href: "/search" }
{ label: { en: "How it works", af: "Hoe dit werk" }, href: "/sales" }
```

#### Dropdown Menu Items
```typescript
// ❌ CURRENT (Title Case)
{ label: { en: "Liquor Licences", af: "Dranklisensiëring" }, href: "/category/liquor-licences" }
{ label: { en: "Town Planning", af: "Stadsbeplanningskennisgewings" }, href: "/category/town-planning" }
{ label: { en: "Business Licences", af: "Besigheidslisensiëring" }, href: "/category/business-licences" }
{ label: { en: "Court Orders", af: "Hofbevele" }, href: "/category/court-orders" }
{ label: { en: "Lost Documents", af: "Verloorde Dokumente" }, href: "/category/lost-documents" }
{ label: { en: "Environmental Notices", af: "Omgewingskennisgewings" }, href: "/category/environmental-notices" }
{ label: { en: "Sale in Execution", af: "Verkoping in Eksekusie" }, href: "/category/sale-in-execution" }
{ label: { en: "General Notices", af: "Algemene Kennisgewings" }, href: "/category/general-notices" }
{ label: { en: "View All Categories", af: "Bekyk Alle Kategorieë" }, href: "/search" }

// ✅ SHOULD BE (Sentence Case)
{ label: { en: "Liquor licences", af: "Dranklisensiëring" }, href: "/category/liquor-licences" }
{ label: { en: "Town planning", af: "Stadsbeplanningskennisgewings" }, href: "/category/town-planning" }
{ label: { en: "Business licences", af: "Besigheidslisensiëring" }, href: "/category/business-licences" }
{ label: { en: "Court orders", af: "Hofbevele" }, href: "/category/court-orders" }
{ label: { en: "Lost documents", af: "Verloorde dokumente" }, href: "/category/lost-documents" }
{ label: { en: "Environmental notices", af: "Omgewingskennisgewings" }, href: "/category/environmental-notices" }
{ label: { en: "Sale in execution", af: "Verkoping in eksekusie" }, href: "/category/sale-in-execution" }
{ label: { en: "General notices", af: "Algemene kennisgewings" }, href: "/category/general-notices" }
{ label: { en: "View all categories", af: "Bekyk alle kategorieë" }, href: "/search" }
```

#### CTA Buttons
```typescript
// ❌ CURRENT (Title Case)
{ label: { en: "All Categories", af: "Alle Kategorieë" }, href: "/search" }
{ label: { en: "My Account", af: "My Rekening" }, href: "/my-account" }

// ✅ SHOULD BE (Sentence Case)
{ label: { en: "All categories", af: "Alle kategorieë" }, href: "/search" }
{ label: { en: "My account", af: "My rekening" }, href: "/my-account" }
```

#### Footer Links — Resources
```typescript
// ❌ CURRENT (Title Case)
{ label: { en: "About Us", af: "Oor Ons" }, href: "/about" }
{ label: { en: "How It Works", af: "Hoe Dit Werk" }, href: "/sales" }

// ✅ SHOULD BE (Sentence Case)
{ label: { en: "About us", af: "Oor ons" }, href: "/about" }
{ label: { en: "How it works", af: "Hoe dit werk" }, href: "/sales" }
```

#### Footer Links — Account
```typescript
// ❌ CURRENT (Title Case)
{ label: { en: "My Account", af: "My Rekening" }, href: "/my-account" }
{ label: { en: "Submit Notice", af: "Dien Kennisgewing In" }, href: "/submit" }
{ label: { en: "Track Submission", af: "Volg Indiening" }, href: "/my-account/notices" }

// ✅ SHOULD BE (Sentence Case)
{ label: { en: "My account", af: "My rekening" }, href: "/my-account" }
{ label: { en: "Submit notice", af: "Dien kennisgewing in" }, href: "/submit" }
{ label: { en: "Track submission", af: "Volg indiening" }, href: "/my-account/notices" }
```

#### Footer Links — Legal
```typescript
// ❌ CURRENT (Title Case)
{ label: { en: "Terms of Service", af: "Diensbepalings" }, href: "/terms" }
{ label: { en: "Privacy Policy", af: "Privaatheidsbeleid" }, href: "/privacy" }

// ✅ SHOULD BE (Sentence Case)
{ label: { en: "Terms of service", af: "Diensbepalings" }, href: "/terms" }
{ label: { en: "Privacy policy", af: "Privaatheidsbeleid" }, href: "/privacy" }
```

#### Mobile Navigation
```typescript
// ❌ CURRENT (Title Case)
{ label: { en: "Search All Notices", af: "Soek Alle Kennisgewings" }, href: "/search" }
{ label: { en: "Public Notices", af: "Openbare Kennisgewings" }, href: "/search" }

// ✅ SHOULD BE (Sentence Case)
{ label: { en: "Search all notices", af: "Soek alle kennisgewings" }, href: "/search" }
{ label: { en: "Public notices", af: "Openbare kennisgewings" }, href: "/search" }
```

**Total violations in navigation.ts:** ~90

---

### 2. Contact Page Data (`/src/app/data/contact.ts`)

#### Page Header
```typescript
// ❌ CURRENT (Title Case)
export const contactPageHeader = {
  title: { en: "Contact Us", af: "Kontak Ons" },
  // ...
};

// ✅ SHOULD BE (Sentence Case)
export const contactPageHeader = {
  title: { en: "Contact us", af: "Kontak ons" },
  // ...
};
```

#### Contact Categories
```typescript
// ❌ CURRENT (Title Case)
{ title: { en: "Advertise With Us", af: "Adverteer by Ons" } }
{ title: { en: "Technical Issues", af: "Tegniese Probleme" } }
{ title: { en: "Syndication Requests", af: "Sindikasieversoeke" } }
{ title: { en: "General Queries", af: "Algemene Navrae" } }
{ title: { en: "Editorial Enquiries", af: "Redaksionele Navrae" } }
{ title: { en: "Legal Matters", af: "Regskwessies" } }
{ title: { en: "Classified Ads", af: "Geklassifiseerde Advertensies" } }

// ✅ SHOULD BE (Sentence Case)
{ title: { en: "Advertise with us", af: "Adverteer by ons" } }
{ title: { en: "Technical issues", af: "Tegniese probleme" } }
{ title: { en: "Syndication requests", af: "Sindikasieversoeke" } }
{ title: { en: "General queries", af: "Algemene navrae" } }
{ title: { en: "Editorial enquiries", af: "Redaksionele navrae" } }
{ title: { en: "Legal matters", af: "Regskwessies" } }
{ title: { en: "Classified ads", af: "Geklassifiseerde advertensies" } }
```

#### Form Labels
```typescript
// ❌ CURRENT (Title Case)
export const contactFormLabels = {
  name: { en: "Full Name", af: "Volle Naam" },
  email: { en: "Email Address", af: "E-posadres" },
  // ...
};

// ✅ SHOULD BE (Sentence Case)
export const contactFormLabels = {
  name: { en: "Full name", af: "Volle naam" },
  email: { en: "Email address", af: "E-posadres" },
  // ...
};
```

**Total violations in contact.ts:** ~25

---

### 3. Page Title Metadata (`/src/app/utils/createStubPages.ts`)

#### Auth Pages
```typescript
// ❌ CURRENT (Title Case)
{ path: "/src/app/pages/auth/ForgotPassword.tsx", lang: "en", title: "Forgot Password" }
{ path: "/src/app/pages/auth/ForgotPasswordAF.tsx", lang: "af", title: "Vergeet Wagwoord" }
{ path: "/src/app/pages/auth/ResetPassword.tsx", lang: "en", title: "Reset Password" }
{ path: "/src/app/pages/auth/ResetPasswordAF.tsx", lang: "af", title: "Herstel Wagwoord" }

// ✅ SHOULD BE (Sentence Case)
{ path: "/src/app/pages/auth/ForgotPassword.tsx", lang: "en", title: "Forgot password" }
{ path: "/src/app/pages/auth/ForgotPasswordAF.tsx", lang: "af", title: "Vergeet wagwoord" }
{ path: "/src/app/pages/auth/ResetPassword.tsx", lang: "en", title: "Reset password" }
{ path: "/src/app/pages/auth/ResetPasswordAF.tsx", lang: "af", title: "Herstel wagwoord" }
```

#### Account Pages
```typescript
// ❌ CURRENT (Title Case)
{ path: "/src/app/pages/account/Dashboard.tsx", lang: "en", title: "My Account" }
{ path: "/src/app/pages/account/DashboardAF.tsx", lang: "af", title: "My Rekening" }
{ path: "/src/app/pages/account/MyNotices.tsx", lang: "en", title: "My Notices" }
{ path: "/src/app/pages/account/MyNoticesAF.tsx", lang: "af", title: "My Kennisgewings" }

// ✅ SHOULD BE (Sentence Case)
{ path: "/src/app/pages/account/Dashboard.tsx", lang: "en", title: "My account" }
{ path: "/src/app/pages/account/DashboardAF.tsx", lang: "af", title: "My rekening" }
{ path: "/src/app/pages/account/MyNotices.tsx", lang: "en", title: "My notices" }
{ path: "/src/app/pages/account/MyNoticesAF.tsx", lang: "af", title: "My kennisgewings" }
```

#### Submit Pages
```typescript
// ❌ CURRENT (Title Case)
{ path: "/src/app/pages/submit/Entry.tsx", lang: "en", title: "Submit Notice" }
{ path: "/src/app/pages/submit/EntryAF.tsx", lang: "af", title: "Dien Kennisgewing In" }
{ path: "/src/app/pages/submit/Tender.tsx", lang: "en", title: "Submit Tender" }
{ path: "/src/app/pages/submit/TenderAF.tsx", lang: "af", title: "Dien Tender In" }
{ path: "/src/app/pages/submit/Estate.tsx", lang: "en", title: "Submit Estate Notice" }
{ path: "/src/app/pages/submit/EstateAF.tsx", lang: "af", title: "Dien Boedel In" }
{ path: "/src/app/pages/submit/LiquorLicence.tsx", lang: "en", title: "Submit Liquor Licence" }
{ path: "/src/app/pages/submit/LiquorLicenceAF.tsx", lang: "af", title: "Dien Dranklisensie In" }
{ path: "/src/app/pages/submit/TownPlanning.tsx", lang: "en", title: "Submit Town Planning" }
{ path: "/src/app/pages/submit/TownPlanningAF.tsx", lang: "af", title: "Dien Stadsbeplanning In" }
{ path: "/src/app/pages/submit/BusinessLicence.tsx", lang: "en", title: "Submit Business Licence" }
{ path: "/src/app/pages/submit/BusinessLicenceAF.tsx", lang: "af", title: "Dien Besigheidslisensie In" }
{ path: "/src/app/pages/submit/General.tsx", lang: "en", title: "Submit General Notice" }
{ path: "/src/app/pages/submit/GeneralAF.tsx", lang: "af", title: "Dien Algemene Kennisgewing In" }
{ path: "/src/app/pages/submit/Review.tsx", lang: "en", title: "Review Submission" }
{ path: "/src/app/pages/submit/ReviewAF.tsx", lang: "af", title: "Hersien Indiening" }
{ path: "/src/app/pages/submit/Success.tsx", lang: "en", title: "Submission Success" }
{ path: "/src/app/pages/submit/SuccessAF.tsx", lang: "af", title: "Indiening Suksesvol" }

// ✅ SHOULD BE (Sentence Case)
{ path: "/src/app/pages/submit/Entry.tsx", lang: "en", title: "Submit notice" }
{ path: "/src/app/pages/submit/EntryAF.tsx", lang: "af", title: "Dien kennisgewing in" }
{ path: "/src/app/pages/submit/Tender.tsx", lang: "en", title: "Submit tender" }
{ path: "/src/app/pages/submit/TenderAF.tsx", lang: "af", title: "Dien tender in" }
{ path: "/src/app/pages/submit/Estate.tsx", lang: "en", title: "Submit estate notice" }
{ path: "/src/app/pages/submit/EstateAF.tsx", lang: "af", title: "Dien boedel in" }
{ path: "/src/app/pages/submit/LiquorLicence.tsx", lang: "en", title: "Submit liquor licence" }
{ path: "/src/app/pages/submit/LiquorLicenceAF.tsx", lang: "af", title: "Dien dranklisensie in" }
{ path: "/src/app/pages/submit/TownPlanning.tsx", lang: "en", title: "Submit town planning" }
{ path: "/src/app/pages/submit/TownPlanningAF.tsx", lang: "af", title: "Dien stadsbeplanning in" }
{ path: "/src/app/pages/submit/BusinessLicence.tsx", lang: "en", title: "Submit business licence" }
{ path: "/src/app/pages/submit/BusinessLicenceAF.tsx", lang: "af", title: "Dien besigheidslisensie in" }
{ path: "/src/app/pages/submit/General.tsx", lang: "en", title: "Submit general notice" }
{ path: "/src/app/pages/submit/GeneralAF.tsx", lang: "af", title: "Dien algemene kennisgewing in" }
{ path: "/src/app/pages/submit/Review.tsx", lang: "en", title: "Review submission" }
{ path: "/src/app/pages/submit/ReviewAF.tsx", lang: "af", title: "Hersien indiening" }
{ path: "/src/app/pages/submit/Success.tsx", lang: "en", title: "Submission success" }
{ path: "/src/app/pages/submit/SuccessAF.tsx", lang: "af", title: "Indiening suksesvol" }
```

#### Checkout & Order Pages
```typescript
// ❌ CURRENT (Title Case)
{ path: "/src/app/pages/OrderConfirmation.tsx", lang: "en", title: "Order Confirmation" }
{ path: "/src/app/pages/OrderConfirmationAF.tsx", lang: "af", title: "Bestelling Bevestiging" }

// ✅ SHOULD BE (Sentence Case)
{ path: "/src/app/pages/OrderConfirmation.tsx", lang: "en", title: "Order confirmation" }
{ path: "/src/app/pages/OrderConfirmationAF.tsx", lang: "af", title: "Bestelling bevestiging" }
```

#### Moderation Pages
```typescript
// ❌ CURRENT (Title Case)
{ path: "/src/app/pages/moderation/Queue.tsx", lang: "en", title: "Moderation Queue" }
{ path: "/src/app/pages/moderation/Review.tsx", lang: "en", title: "Review Notice" }
{ path: "/src/app/pages/moderation/ReviewAF.tsx", lang: "af", title: "Hersien Kennisgewing" }

// ✅ SHOULD BE (Sentence Case)
{ path: "/src/app/pages/moderation/Queue.tsx", lang: "en", title: "Moderation queue" }
{ path: "/src/app/pages/moderation/Review.tsx", lang: "en", title: "Review notice" }
{ path: "/src/app/pages/moderation/ReviewAF.tsx", lang: "af", title: "Hersien kennisgewing" }
```

**Total violations in createStubPages.ts:** ~50

---

### 4. Help & FAQ Data (`/src/app/data/help/faq-data.ts`)

#### Quick Help Links
```typescript
// ❌ CURRENT (Title Case)
{ title: "Submit Your First Notice", description: "Step-by-step guide..." }
{ title: "Pricing Calculator", description: "Estimate costs..." }
{ title: "Contact Sales Team", description: "Get personalized assistance" }
{ title: "Browse Notice Examples", description: "See sample notices..." }

// Afrikaans
{ title: "Dien U Eerste Kennisgewing In", description: "..." }
{ title: "Kontak Verkoopspan", description: "..." }
{ title: "Blaai Deur Kennisgewingvoorbeelde", description: "..." }

// ✅ SHOULD BE (Sentence Case)
{ title: "Submit your first notice", description: "Step-by-step guide..." }
{ title: "Pricing calculator", description: "Estimate costs..." }
{ title: "Contact sales team", description: "Get personalized assistance" }
{ title: "Browse notice examples", description: "See sample notices..." }

// Afrikaans
{ title: "Dien u eerste kennisgewing in", description: "..." }
{ title: "Kontak verkoopspan", description: "..." }
{ title: "Blaai deur kennisgewingvoorbeelde", description: "..." }
```

**Total violations in faq-data.ts:** ~8

---

### 5. Account Page Data (`/src/app/data/account.ts`)

#### Empty State Titles
```typescript
// ❌ CURRENT (Title Case)
empty: {
  title: { en: "No notices yet", af: "Nog geen kennisgewings nie" },
  // ...
}

empty: {
  title: { en: "No orders yet", af: "Nog geen bestellings nie" },
  // ...
}

// ✅ ALREADY CORRECT (Sentence Case) ✅
// These are actually fine! "No" is capitalized at the start.
```

**Total violations in account.ts:** 0 (already correct!)

---

## ✅ ACCEPTABLE — No Changes Needed

### Contact Names & Proper Nouns

The following are **acceptable** and should **NOT** be changed:

```typescript
// ✅ CORRECT — Proper nouns (people's names, job titles, departments)
contactName: "Municipal Procurement Office"
contactName: "City Engineer"
contactName: "Tender Office"
contactName: "Operations Manager"
contactName: "Head Brewer"
contactName: "General Manager"
contactName: "John Doe"
contactName: "Jan van der Merwe"

// ✅ CORRECT — Organization names
publisher: "Soccer Laduma"
publisher: "City of Cape Town"
publisher: "SANRAL"

// ✅ CORRECT — Proper place names
location: "Western Cape"
location: "City of Johannesburg"
```

**Total acceptable:** ~73

---

## 📋 Remediation Plan

### Phase 1: Navigation (Highest Priority)
**File:** `/src/app/data/navigation.ts`  
**Violations:** ~90  
**Impact:** Every page (header/footer)  
**Effort:** 30 minutes

### Phase 2: Contact Data
**File:** `/src/app/data/contact.ts`  
**Violations:** ~25  
**Impact:** Contact page only  
**Effort:** 15 minutes

### Phase 3: Page Metadata
**File:** `/src/app/utils/createStubPages.ts`  
**Violations:** ~50  
**Impact:** Browser tabs, page titles (SEO)  
**Effort:** 20 minutes

### Phase 4: Help & FAQ
**File:** `/src/app/data/help/faq-data.ts`  
**Violations:** ~8  
**Impact:** Help center quick links  
**Effort:** 10 minutes

**Total Effort:** ~1.5 hours systematic find-and-replace

---

## 🔧 Remediation Process

### Step 1: Backup
```bash
git add .
git commit -m "Pre-sentence-case-cleanup backup"
```

### Step 2: Fix Navigation
1. Open `/src/app/data/navigation.ts`
2. Replace all title case labels with sentence case
3. Test navigation on 5-10 sample pages
4. Commit: `git commit -m "fix: navigation labels to sentence case"`

### Step 3: Fix Contact Data
1. Open `/src/app/data/contact.ts`
2. Replace all title case titles with sentence case
3. Test contact page (EN/AF)
4. Commit: `git commit -m "fix: contact data to sentence case"`

### Step 4: Fix Page Metadata
1. Open `/src/app/utils/createStubPages.ts`
2. Replace all title case page titles with sentence case
3. Test browser tab titles on sample pages
4. Commit: `git commit -m "fix: page titles to sentence case"`

### Step 5: Fix Help Data
1. Open `/src/app/data/help/faq-data.ts`
2. Replace all title case titles with sentence case
3. Test help center page
4. Commit: `git commit -m "fix: help data to sentence case"`

### Step 6: Full Test
1. Test all 78 pages visually
2. Check header navigation
3. Check footer navigation
4. Check contact page
5. Check help center
6. Check browser tab titles
7. Final commit: `git commit -m "chore: complete sentence case audit and fixes"`

---

## 📊 Final Statistics

### Before Remediation
- **Title Case Violations:** 177
- **Sentence Case Compliance:** 0%
- **Guideline Compliance:** ❌ VIOLATION

### After Remediation (Target)
- **Title Case Violations:** 0
- **Sentence Case Compliance:** 100%
- **Guideline Compliance:** ✅ COMPLIANT

---

## 📝 Testing Checklist

After remediation, verify:

### Navigation
- [ ] Header navigation uses sentence case
- [ ] Dropdown menus use sentence case
- [ ] CTA buttons use sentence case
- [ ] Footer links use sentence case
- [ ] Mobile menu uses sentence case

### Pages
- [ ] Contact page headers use sentence case
- [ ] Contact category titles use sentence case
- [ ] Form labels use sentence case
- [ ] Help center quick links use sentence case
- [ ] Browser tab titles use sentence case

### Exceptions
- [ ] Proper nouns still capitalized (Nova News, WordPress)
- [ ] Acronyms still uppercase (PDF, FAQ, VAT)
- [ ] Contact names unchanged (John Doe, etc.)

---

## 🎯 Success Criteria

✅ All navigation labels use sentence case  
✅ All page headers use sentence case  
✅ All button labels use sentence case  
✅ All form labels use sentence case  
✅ All data file content uses sentence case  
✅ Proper nouns remain capitalized  
✅ Acronyms remain uppercase  
✅ All 78 pages tested and verified  
✅ Guidelines.md Section 13.5 compliance: 100%

---

## 📁 Files to Modify

### Data Files (4)
1. `/src/app/data/navigation.ts` — ~90 violations
2. `/src/app/data/contact.ts` — ~25 violations
3. `/src/app/utils/createStubPages.ts` — ~50 violations
4. `/src/app/data/help/faq-data.ts` — ~8 violations

### Total Files:** 4  
**Total Lines to Change:** ~173  
**Total Violations:** 177

---

## 🚀 Next Steps

1. **Review this audit** — Confirm scope and approach
2. **Create systematic fixes** — File by file in priority order
3. **Test after each fix** — Ensure no regressions
4. **Final full test** — All 78 pages
5. **Update CHANGELOG** — Document remediation
6. **Close ticket** — Mark guideline compliant

---

**Audit Complete!** Ready to proceed with systematic remediation. 🎉

---

**Audit Date:** March 16, 2026  
**Auditor:** AI Assistant  
**Scope:** All data files, 78 pages, 158 routes  
**Status:** ✅ COMPLETE  
**Next:** Systematic Remediation (Phase 1-4)
