# Breadcrumb Completion Task List

**Created:** March 17, 2026  
**Status:** 62% Complete (16/26 pages)  
**Target:** 100% Complete (26/26 pages)

---

## Current Status

✅ **Completed: 16 pages**  
❌ **Remaining: 10 pages**  
📊 **Progress: 62%**

---

## Remaining Pages (Priority Order)

### **🔴 High Priority (7 pages)**

#### 1. PricingAF.tsx
- [ ] Add breadcrumb: Tuis / Pryse
- [ ] Use standard page header pattern
- [ ] Ensure sentence case in all headings
- **Estimated Time:** 5 minutes

#### 2. FAQ.tsx
- [ ] Add breadcrumb: Home / Frequently asked questions
- [ ] Use standard page header pattern
- [ ] Audit content for sentence case
- **Estimated Time:** 5 minutes

#### 3. FAQAF.tsx
- [ ] Add breadcrumb: Tuis / Gereelde vrae
- [ ] Use standard page header pattern
- [ ] Audit content for sentence case
- **Estimated Time:** 5 minutes

#### 4. Terms.tsx
- [ ] Add breadcrumb: Home / Terms and conditions
- [ ] Use standard page header pattern
- [ ] Audit legal content for sentence case in headings only
- **Estimated Time:** 5 minutes

#### 5. TermsAF.tsx
- [ ] Add breadcrumb: Tuis / Terme en voorwaardes
- [ ] Use standard page header pattern
- [ ] Audit legal content for sentence case in headings only
- **Estimated Time:** 5 minutes

#### 6. Privacy.tsx
- [ ] Add breadcrumb: Home / Privacy policy
- [ ] Use standard page header pattern
- [ ] Audit policy content for sentence case in headings only
- **Estimated Time:** 5 minutes

#### 7. PrivacyAF.tsx
- [ ] Add breadcrumb: Tuis / Privaatheidsbeleid
- [ ] Use standard page header pattern
- [ ] Audit policy content for sentence case in headings only
- **Estimated Time:** 5 minutes

---

### **🟡 Medium Priority (2 pages)**

#### 8. Sitemap.tsx
- [ ] Add breadcrumb: Home / Sitemap
- [ ] Use standard page header pattern
- [ ] Ensure all site links use sentence case
- **Estimated Time:** 5 minutes

#### 9. SitemapAF.tsx
- [ ] Add breadcrumb: Tuis / Werfkaart
- [ ] Use standard page header pattern
- [ ] Ensure all site links use sentence case
- **Estimated Time:** 5 minutes

---

### **🟢 Low Priority (1 page)**

#### 10. Advertise.tsx
- [ ] Add breadcrumb: Home / Advertise with us
- [ ] Use standard page header pattern
- [ ] Ensure sentence case in CTAs
- **Estimated Time:** 5 minutes

---

## Standard Breadcrumb Pattern

### **English Pages**

```tsx
import { Link } from "react-router";
import { Home } from "lucide-react";
import "../../styles/components.css";

// In component:
<section className="wpn-page-header">
  <div className="wpn-page-header__container">
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
          <span className="wpn-breadcrumb__current">Page name</span>
        </li>
      </ol>
    </nav>

    <h1 className="wpn-page-header__title">
      Page title
    </h1>
    <p className="wpn-page-header__subtitle">
      Page subtitle
    </p>
  </div>
</section>
```

### **Afrikaans Pages**

```tsx
import { Link } from "react-router";
import { Home } from "lucide-react";
import "../../styles/components.css";

// In component:
<section className="wpn-page-header">
  <div className="wpn-page-header__container">
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
          <span className="wpn-breadcrumb__current">Bladsy naam</span>
        </li>
      </ol>
    </nav>

    <h1 className="wpn-page-header__title">
      Bladsy titel
    </h1>
    <p className="wpn-page-header__subtitle">
      Bladsy subtitel
    </p>
  </div>
</section>
```

---

## Breadcrumb Text Reference

| Page | English Breadcrumb | Afrikaans Breadcrumb |
|------|-------------------|----------------------|
| PricingAF | N/A | Tuis / Pryse |
| FAQ | Home / Frequently asked questions | N/A |
| FAQAF | N/A | Tuis / Gereelde vrae |
| Terms | Home / Terms and conditions | N/A |
| TermsAF | N/A | Tuis / Terme en voorwaardes |
| Privacy | Home / Privacy policy | N/A |
| PrivacyAF | N/A | Tuis / Privaatheidsbeleid |
| Sitemap | Home / Sitemap | N/A |
| SitemapAF | N/A | Tuis / Werfkaart |
| Advertise | Home / Advertise with us | N/A |

---

## Quality Checklist (Per Page)

Before marking a page as complete, verify:

- [ ] Import `{ Link }` from `"react-router"` (NOT `react-router-dom`)
- [ ] Import `{ Home }` from `"lucide-react"`
- [ ] Import `"../../styles/components.css"`
- [ ] Use correct ARIA label (`aria-label="Breadcrumb"` or `"Broodkrummels"`)
- [ ] Use correct home link (`to="/"` or `to="/af"`)
- [ ] Icon has explicit size: `style={{ width: '14px', height: '14px' }}`
- [ ] All text uses sentence case (not Title Case)
- [ ] BEM classes: `.wpn-breadcrumb`, `.wpn-breadcrumb__list`, etc.
- [ ] Page header uses `.wpn-page-header` and `.wpn-page-header__container`
- [ ] No hardcoded colors, spacing, or typography (use CSS variables)

---

## Additional Improvements (Optional)

### **Create CSS Classes for White Text**

Add to `/src/styles/page-header.css`:

```css
/* White text variants for dark backgrounds */
.wpn-page-header__title--white {
  color: #ffffff;
}

.wpn-page-header__subtitle--light {
  color: rgba(255, 255, 255, 0.8);
}
```

Then update Sales.tsx and SalesAF.tsx to use classes instead of inline styles:

```tsx
// Before:
<h1 className="wpn-page-header__title" style={{ color: 'white' }}>

// After:
<h1 className="wpn-page-header__title wpn-page-header__title--white">
```

---

## Time Estimate

| Task | Pages | Est. Time |
|------|-------|-----------|
| High Priority | 7 | 35 minutes |
| Medium Priority | 2 | 10 minutes |
| Low Priority | 1 | 5 minutes |
| **Total** | **10** | **50 minutes** |

---

## Success Criteria

**Definition of Done:**
- ✅ All 26 pages have BEM breadcrumbs
- ✅ 100% CSS variable compliance
- ✅ 100% sentence case in UI text
- ✅ All imports use `react-router` (not `react-router-dom`)
- ✅ Consistent pattern across EN and AF versions
- ✅ No hardcoded colors, spacing, or typography
- ✅ Full accessibility (ARIA labels, semantic HTML)

---

## Notes

- All breadcrumb CSS already exists in `/src/styles/page-header.css`
- Pattern is proven and working on 16 existing pages
- Low risk, high-value work
- Can be completed in a single focused session
- No design changes needed — pure implementation

---

**Last Updated:** March 17, 2026  
**Next Review:** After completion (target: 100%)
