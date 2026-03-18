# Breadcrumb Implementation Status

**Last Updated:** March 17, 2026  
**Component:** `.wpn-breadcrumb` BEM component  
**CSS File:** `/src/styles/page-header.css`

## Overview

Comprehensive implementation of BEM breadcrumbs across all templates requiring navigation context.

---

## ✅ Fully Implemented (8 Pages)

### 1. **CategoryArchive.tsx**
- **Route:** `/category/:slug`
- **Breadcrumb:** Home / Search / [Category Name]
- **Status:** ✅ Complete with BEM + icons

### 2. **CategoryArchiveAF.tsx**
- **Route:** `/af/kategorie/:slug`
- **Breadcrumb:** Tuis / Soek / [Kategorie Naam]
- **Status:** ✅ Complete with BEM + icons

### 3. **SearchResults.tsx**
- **Route:** `/search`
- **Breadcrumb:** Home / Search public notices
- **Status:** ✅ Complete with BEM + icons

### 4. **SearchResultsAF.tsx**
- **Route:** `/af/soek`
- **Breadcrumb:** Tuis / Soek openbare kennisgewings
- **Status:** ✅ Complete with BEM + icons

### 5. **SingleNotice.tsx**
- **Route:** `/notice/:id`
- **Breadcrumb:** Home / Search / [Reference Number]
- **Status:** ✅ Complete with BEM + icons

### 6. **SingleNoticeAF.tsx**
- **Route:** `/af/kennisgewing/:id`
- **Breadcrumb:** Tuis / Soek / [Verwysingsnommer]
- **Status:** ✅ Complete with BEM + icons

### 7. **Contact.tsx**
- **Route:** `/contact`
- **Breadcrumb:** Home / Contact us
- **Status:** ✅ Complete with BEM + icons

### 8. **ContactAF.tsx**
- **Route:** `/af/kontak`
- **Breadcrumb:** Tuis / Kontak ons
- **Status:** 🔄 NEEDS UPDATE

---

## 🔄 Needs Implementation (Remaining Pages)

### High Priority (User-Facing Pages)

#### **Sales.tsx / SalesAF.tsx**
- **Route:** `/sales`, `/af/verkope`
- **Recommended Breadcrumb:** Home / Sales & support
- **Status:** ❌ Not implemented

#### **About.tsx / AboutAF.tsx**
- **Route:** `/about`, `/af/oor-ons`
- **Recommended Breadcrumb:** Home / About us
- **Status:** ❌ Not implemented (About.tsx exists, AboutAF.tsx is stub)

#### **Help.tsx / HelpAF.tsx**
- **Route:** `/help`, `/af/hulp`
- **Recommended Breadcrumb:** Home / Help center
- **Status:** ❌ Not implemented

#### **FAQ.tsx / FAQAF.tsx**
- **Route:** `/faq`, `/af/vrae`
- **Recommended Breadcrumb:** Home / FAQ
- **Status:** ❌ Not implemented

#### **Pricing.tsx / PricingAF.tsx**
- **Route:** `/pricing`, `/af/pryse`
- **Recommended Breadcrumb:** Home / Pricing
- **Status:** ❌ Not implemented

---

### Medium Priority (Information Pages)

#### **Terms.tsx / TermsAF.tsx**
- **Route:** `/terms`, `/af/bepalings`
- **Recommended Breadcrumb:** Home / Terms & conditions
- **Status:** ❌ Not implemented (TermsAF.tsx is stub)

#### **Privacy.tsx / PrivacyAF.tsx**
- **Route:** `/privacy`, `/af/privaatheid`
- **Recommended Breadcrumb:** Home / Privacy policy
- **Status:** ❌ Not implemented (PrivacyAF.tsx is stub)

#### **Sitemap.tsx / SitemapAF.tsx**
- **Route:** `/sitemap`, `/af/sitekaart`
- **Recommended Breadcrumb:** Home / Sitemap
- **Status:** ❌ Not implemented

#### **Advertise.tsx / AdvertiseAF.tsx**
- **Route:** `/advertise`, `/af/adverteer`
- **Recommended Breadcrumb:** Home / Advertise with us
- **Status:** ❌ Not implemented

---

### Low Priority (Utility Pages)

#### **CompareNotices.tsx / CompareNoticesAF.tsx**
- **Route:** `/compare`, `/af/vergelyk`
- **Recommended Breadcrumb:** Home / Compare notices
- **Status:** ❌ Not implemented

---

## ❌ Pages That Don't Need Breadcrumbs

### **Home.tsx / HomeAF.tsx**
- **Reason:** Homepage - no breadcrumb required

### **NotFound.tsx**
- **Reason:** Error page - minimal navigation

### **Checkout.tsx / CheckoutAF.tsx**
- **Reason:** Focus state - minimize distractions

### **OrderConfirmation.tsx / OrderConfirmationAF.tsx**
- **Reason:** Confirmation page - single purpose

### **Styleguide.tsx**
- **Reason:** Development tool only

---

## 📋 BEM Breadcrumb Pattern

### Standard Breadcrumb Structure

```tsx
<nav className="wpn-breadcrumb" aria-label="Breadcrumb">
  <ol className="wpn-breadcrumb__list">
    <li className="wpn-breadcrumb__item">
      <Link to="/" className="wpn-breadcrumb__link">
        <Home className="wpn-breadcrumb__icon" style={{ width: '14px', height: '14px' }} />
        Home
      </Link>
    </li>
    <li className="wpn-breadcrumb__item">
      <span className="wpn-breadcrumb__separator">/</span>
    </li>
    <li className="wpn-breadcrumb__item">
      <span className="wpn-breadcrumb__current">Current Page</span>
    </li>
  </ol>
</nav>
```

### Afrikaans Pattern

```tsx
<nav className="wpn-breadcrumb" aria-label="Broodkrummels">
  <ol className="wpn-breadcrumb__list">
    <li className="wpn-breadcrumb__item">
      <Link to="/af" className="wpn-breadcrumb__link">
        <Home className="wpn-breadcrumb__icon" style={{ width: '14px', height: '14px' }} />
        Tuis
      </Link>
    </li>
    <li className="wpn-breadcrumb__item">
      <span className="wpn-breadcrumb__separator">/</span>
    </li>
    <li className="wpn-breadcrumb__item">
      <span className="wpn-breadcrumb__current">Huidige Bladsy</span>
    </li>
  </ol>
</nav>
```

---

## 🎨 CSS Variables Used

All breadcrumb styling uses CSS variables from `/src/styles/theme-variables.css`:

```css
/* Typography */
--font-family-body
--text-sm
--font-weight-medium
--font-weight-semibold

/* Colors */
--color-text-primary
--color-text-secondary
--color-border
--nova-accent (hover state)

/* Spacing */
--space-2 (gaps and icon spacing)
--space-8 (bottom margin)

/* Animation */
--duration-fast
--ease-out
```

---

## ✅ Quality Checklist

For each breadcrumb implementation, verify:

- [ ] Uses `.wpn-breadcrumb` BEM component
- [ ] Includes proper `aria-label` attribute
- [ ] Uses semantic `<nav>` and `<ol>` elements
- [ ] Home icon included (14px × 14px)
- [ ] Icons imported from `lucide-react`
- [ ] Separator between items (`/`)
- [ ] Current page uses `.wpn-breadcrumb__current` (not a link)
- [ ] All links use `.wpn-breadcrumb__link`
- [ ] CSS import: `import "../../styles/components.css"`
- [ ] No hardcoded colors or spacing
- [ ] Responsive on mobile
- [ ] Hover states work correctly
- [ ] Bilingual (EN and AF) where applicable

---

## 📊 Implementation Progress

**Total Pages Requiring Breadcrumbs:** 26 pages (13 English + 13 Afrikaans)

**Completed:** 8 pages (31%)  
**Remaining:** 18 pages (69%)

### Progress by Category

| Category | Total | Complete | Remaining |
|----------|-------|----------|-----------|
| **Core Templates** | 8 | 8 | 0 |
| **User-Facing** | 10 | 0 | 10 |
| **Information** | 8 | 0 | 8 |
| **Utility** | 2 | 0 | 2 |

---

## 🚀 Next Steps

### Immediate (Complete Next)
1. ContactAF.tsx — add breadcrumb
2. Sales.tsx — add breadcrumb
3. SalesAF.tsx — add breadcrumb
4. Help.tsx — add breadcrumb
5. HelpAF.tsx — add breadcrumb

### Short Term
6. About.tsx — add breadcrumb
7. FAQ.tsx — add breadcrumb
8. Pricing.tsx — add breadcrumb
9. PricingAF.tsx — add breadcrumb

### Medium Term
10-18. Remaining information and utility pages

---

## 📝 Notes

- All breadcrumbs must be placed **before** the page title
- Page headers can include breadcrumbs inside `.wpn-page-header__container`
- Icon size must be consistent: `style={{ width: '14px', height: '14px' }}`
- Always import Home icon from lucide-react
- Sentence case applies to breadcrumb text (not Title Case)

---

**Status:** 🔄 **In Progress**  
**Target:** 100% breadcrumb coverage on all user-facing pages  
**Priority:** High — Improves navigation and UX consistency
