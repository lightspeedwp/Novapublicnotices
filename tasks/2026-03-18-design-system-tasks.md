# Design System Compliance Tasks

**Generated From:** `/reports/2026-03-18-design-system-audit.md`  
**Date:** 2026-03-18  
**Status:** Active  
**Priority:** High

---

## Critical (P1) — Must Fix Immediately

### Inline Styles in TSX Files (14 files)

Remove all inline `style={{ width: '14px', height: '14px' }}` on breadcrumb icons. These should rely on CSS classes instead.

- [ ] **Remove inline styles from SingleNoticeAF.tsx**
  - File: `/src/app/pages/SingleNoticeAF.tsx`
  - Lines: 109, 118
  - Code: `<Home className="wpn-breadcrumb__icon" style={{ width: '14px', height: '14px' }} />`
  - Fix: Remove `style` prop, use only `className="wpn-breadcrumb__icon"`
  - Report: Section 1

- [ ] **Remove inline styles from ContactAF.tsx**
  - File: `/src/app/pages/ContactAF.tsx`
  - Line: 33
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from SalesAF.tsx**
  - File: `/src/app/pages/SalesAF.tsx`
  - Line: 19
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from About.tsx**
  - File: `/src/app/pages/About.tsx`
  - Line: 60
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from Terms.tsx**
  - File: `/src/app/pages/Terms.tsx`
  - Line: 19
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from TermsAF.tsx**
  - File: `/src/app/pages/TermsAF.tsx`
  - Line: 19
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from Privacy.tsx**
  - File: `/src/app/pages/Privacy.tsx`
  - Line: 19
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from PrivacyAF.tsx**
  - File: `/src/app/pages/PrivacyAF.tsx`
  - Line: 19
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from FAQ.tsx**
  - File: `/src/app/pages/FAQ.tsx`
  - Line: 138
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from FAQAF.tsx**
  - File: `/src/app/pages/FAQAF.tsx`
  - Line: 138
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from Pricing.tsx**
  - File: `/src/app/pages/Pricing.tsx`
  - Line: 89
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from PricingAF.tsx**
  - File: `/src/app/pages/PricingAF.tsx`
  - Line: 89
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from Sitemap.tsx**
  - File: `/src/app/pages/Sitemap.tsx`
  - Line: 18
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from SitemapAF.tsx**
  - File: `/src/app/pages/SitemapAF.tsx`
  - Line: 19
  - Same issue as above
  - Report: Section 1

- [ ] **Remove inline styles from Advertise.tsx**
  - File: `/src/app/pages/Advertise.tsx`
  - Line: 19
  - Same issue as above
  - Report: Section 1

---

## High Priority (P2) — Should Fix Soon

### Hardcoded Gradient Colors in AccountSidebar.css

- [ ] **Replace hardcoded hex in AccountSidebar.css gradients**
  - File: `/src/app/components/AccountSidebar.css`
  - Lines: 134, 142, 147
  - Current: `linear-gradient(135deg, var(--nova-primary), #0a0729)`
  - Should be: `linear-gradient(135deg, var(--nova-primary), var(--nova-primary-hover))`
  - Issue: Hardcoded hex values `#0a0729`, `#ff1744`
  - Fix: Replace with design system variables
  - Report: Section 2

### Hardcoded White Color in page-header.css

- [ ] **Replace hardcoded white in page-header.css**
  - File: `/src/styles/page-header.css`
  - Lines: 80, 88, 121
  - Current: `color: white;` and `color: #ffffff;`
  - Should be: `color: var(--foreground-inverse);` or appropriate semantic variable
  - Issue: Hardcoded white/hex instead of design system variable
  - Fix: Use CSS variables for all color values
  - Report: Section 3

---

## Low Priority (P3) — Improvements

### Design System Documentation

- [ ] **Create design system compliance checklist**
  - Document: `/guidelines/design-tokens/compliance-checklist.md`
  - Include: Common violations to avoid, proper variable usage examples
  - Reference: Design system audit findings
  - Benefit: Prevent future violations

- [ ] **Add linting rules for inline styles**
  - Tool: Consider ESLint plugin to catch inline styles
  - Rule: Warn/error on `style={{...}}` prop usage
  - Exceptions: Document legitimate use cases (truly dynamic values)
  - Benefit: Automated compliance checking

---

## Progress Tracking

**Total Tasks:** 19  
**Critical (P1):** 15 tasks (inline styles removal)  
**High Priority (P2):** 2 tasks (CSS variable replacement)  
**Low Priority (P3):** 2 tasks (documentation/tooling)

**Completion Status:** 0/19 (0%)

**Estimated Compliance After Completion:** 100%

---

## Related Files

- **Design System:** `/src/styles/theme-variables.css`, `/src/styles/global.css`
- **Guidelines:** `/guidelines/Guidelines.md` (Section 4.1, 4.2)
- **CSS Architecture:** `/guidelines/design-tokens/css-architecture.md`

---

## Success Criteria

- [ ] Zero inline styles in TSX files (except truly dynamic values)
- [ ] All CSS files use design system variables exclusively
- [ ] No hardcoded hex, rgb, or color names in stylesheets
- [ ] 100% design system compliance
- [ ] Automated linting in place to prevent future violations
