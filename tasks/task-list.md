# Nova Public Notices — Task List

Last updated: March 16, 2026 — Report Processing Complete

## Status Key
- ✅ Complete
- 🚧 In Progress
- ⏳ Planned
- ⚠️ Blocked
- 📋 Needs Review

---

## ⚠️ URGENT: Critical Clarification Needed

### "global.css" File Confusion
- ⚠️ **BLOCKED:** User mentioned updating `/src/styles/global.css` but this file DOES NOT EXIST
- ⏳ **ACTION REQUIRED:** Clarify if user meant `theme.css` (which IS the global design system file)
- ⏳ **ACTION REQUIRED:** Confirm if user has a separate team design system file to import
- ⏳ **ACTION REQUIRED:** Verify current font system (Lexend only) is correct

**Current Reality:**
- ✅ All design tokens ARE in `/src/styles/theme.css` (150+ CSS variables)
- ✅ Font system uses ONLY Lexend (no Inter, no Raleway)
- ✅ All UI generation uses CSS variables from theme.css
- ✅ System is production-ready with 92/100 compliance score

**Resolution needed before proceeding with new features.**

---

## 📊 Recent Audit Results (2026-03-16)

**Overall Score: 92/100** ✅ Production Ready

| Area | Score | Status |
|------|-------|--------|
| CSS Tokens | 100/100 | ✅ PERFECT |
| Font System | 100/100 | ✅ PERFECT (Lexend only) |
| Data Structure | 100/100 | ✅ PERFECT (Universal schema) |
| Inline Styles | 95/100 | ✅ EXCELLENT (only 21 acceptable cases) |
| BEM Architecture | 80/100 | ⚠️ GOOD (foundation laid) |
| Component CSS | 70/100 | ⚠️ FAIR (needs migration) |

**See:** `/reports/comprehensive-audit-2026-03-16.md`  
**See:** `/reports/report-processing-action-plan-2026-03-16.md`

---

## Phase 1: Foundation & Guidelines (✅ Complete)

### Project Structure
- ✅ Create folder structure (`/guidelines/`, `/docs/`, `/prompts/`, `/reports/`, `/tasks/`, `/scripts/`)
- ✅ Create main `Guidelines.md`
- ✅ Create `cleanup.md` prompt
- ✅ Create `continue.md` prompt
- ✅ Create `prompt-triggers.md`
- ✅ Create master `task-list.md`

### Core Pages (✅ Complete)
- ✅ Homepage/Landing
- ✅ Search page
- ✅ Single notice page (with login gate)
- ✅ Category archive pages
- ✅ Contact page
- ✅ Register page (with User Details and Company Details sections)
- ✅ Login page
- ✅ My Account dashboard (WooCommerce-aligned with sidebar nav)
- ✅ Sales landing page (comprehensive with 3-step process)

---

## Phase 2: Data Restructuring (⏳ Planned)

### Bilingual Data Files
- ⏳ Restructure data folder according to Guidelines section 7.2
- ⏳ Create `/src/app/data/site/` folder
  - ⏳ `navigation.en.ts` and `navigation.af.ts`
  - ⏳ `footer.en.ts` and `footer.af.ts`
- ⏳ Create `/src/app/data/home/` folder
  - ⏳ `home.en.ts` and `home.af.ts`
- ⏳ Create `/src/app/data/sales/` folder
  - ⏳ `sales-page.en.ts` and `sales-page.af.ts`
- ⏳ Create `/src/app/data/contact/` folder
  - ⏳ `contact-page.en.ts` and `contact-page.af.ts`
- ⏳ Create `/src/app/data/auth/` folder
  - ⏳ `login.en.ts` and `login.af.ts`
  - ⏳ `register.en.ts` and `register.af.ts`
  - ⏳ `account.en.ts` and `account.af.ts`
- ⏳ Create `/src/app/data/checkout/` folder
  - ⏳ `checkout.en.ts` and `checkout.af.ts`
- ⏳ Restructure `/src/app/data/notices/` folder
  - ⏳ `types.ts`
  - ⏳ `categories.en.ts` and `categories.af.ts`
  - ⏳ `statuses.ts`
  - ⏳ `filters.en.ts` and `filters.af.ts`
  - ⏳ `notices.en.ts` and `notices.af.ts`
  - ⏳ `helpers.ts`
  - ⏳ `search.ts`
  - ⏳ `archive.ts`
  - ⏳ `submissions.ts`

### TypeScript Types
- ⏳ Create comprehensive type definitions in `/src/app/data/types.ts`
- ⏳ Define interfaces for all notice types
- ⏳ Define interfaces for user accounts
- ⏳ Define interfaces for orders/checkout
- ⏳ Define interfaces for forms
- ⏳ Add type guards and validators

---

## Phase 3: Styling Cleanup (⏳ Planned)

### Remove Inline Styles
- ⏳ Audit all `.tsx` files for `style={{}}` usage
- ⏳ Replace inline styles with semantic classes
- ⏳ Remove hard-coded hex colors
- ⏳ Remove hard-coded spacing values
- ⏳ Remove hard-coded font families

### WordPress-Aligned CSS Classes
- ⏳ Create `/src/styles/wordpress-classes.css`
- ⏳ Implement `.has-primary-color`
- ⏳ Implement `.has-accent-color`
- ⏳ Implement `.has-base-color`
- ⏳ Implement background color variants
- ⏳ Implement font family classes
- ⏳ Implement font size classes
- ⏳ Implement layout classes (`.is-layout-constrained`, `.is-layout-flex`)
- ⏳ Create `.wp-notices-*` component classes

### Design Token Documentation
- ⏳ Create `/guidelines/design-tokens/colors.md`
- ⏳ Create `/guidelines/design-tokens/typography.md`
- ⏳ Create `/guidelines/design-tokens/spacing.md`
- ⏳ Create `/guidelines/design-tokens/forms.md`
- ⏳ Create `/guidelines/design-tokens/navigation.md`

---

## Phase 4: Complete Missing Pages (⏳ Planned)

### Account Pages
- ⏳ My Account - Orders page
- ⏳ My Account - Notices page (list of published notices)
- ⏳ My Account - Profile page (edit account details)
- ⏳ My Account - Submissions page (draft/pending notices)

### Checkout Flow
- ⏳ Checkout page (WooCommerce-aligned, no ads)
- ⏳ Order confirmation page
- ⏳ Payment integration mockup (PayFast pattern)

### Submit Notice Flow
- ⏳ Submit notice form page (with category-specific fields)
- ⏳ Submit notice review page
- ⏳ Submit notice success page
- ⏳ File upload component
- ⏳ Form validation

### Support Pages
- ⏳ Forgot Password page
- ⏳ Terms of Service page
- ⏳ Privacy Policy page
- ⏳ FAQ page
- ⏳ Pricing page
- ⏳ About page

---

## Phase 5: Bilingual Implementation (⏳ Planned)

### Language Switching
- ⏳ Create language context/provider
- ⏳ Implement language switcher component
- ⏳ Add language switcher to header
- ⏳ Store language preference in localStorage
- ⏳ Update URL structure for language (if needed)

### Afrikaans Translations
- ⏳ Translate all navigation items
- ⏳ Translate all button labels
- ⏳ Translate all form labels and placeholders
- ⏳ Translate all error messages
- ⏳ Translate all success messages
- ⏳ Translate all page headings
- ⏳ Translate all helper text
- ⏳ Translate footer content
- ⏳ Review translations for formal register

### Bilingual Notice Content
- ⏳ Add Afrikaans versions of sample notices
- ⏳ Ensure category names are translated
- ⏳ Ensure filter labels are translated
- ⏳ Ensure status labels are translated

---

## Phase 6: Advanced Features (⏳ Planned)

### Search & Filtering
- ⏳ Enhance search algorithm
- ⏳ Add advanced filters (date range, location, category)
- ⏳ Add sort options
- ⏳ Implement pagination
- ⏳ Add search result count
- ⏳ Add "no results" state
- ⏳ Add search suggestions/autocomplete

### Notice Management
- ⏳ Create moderation workflow UI
- ⏳ Add status badges (draft, pending, published, archived)
- ⏳ Add reviewer notes feature
- ⏳ Add "request changes" workflow
- ⏳ Add proof of publication generation
- ⏳ Add notice expiry logic
- ⏳ Add notice archive functionality

### User Experience
- ⏳ Add loading states
- ⏳ Add error states
- ⏳ Add skeleton loaders
- ⏳ Add toast notifications
- ⏳ Add confirmation dialogs
- ⏳ Improve form validation feedback
- ⏳ Add keyboard shortcuts

---

## Phase 7: Accessibility Audit (⏳ Planned)

### WCAG AA Compliance
- ⏳ Audit color contrast ratios
- ⏳ Add ARIA labels to interactive elements
- ⏳ Ensure keyboard navigation works
- ⏳ Add visible focus indicators
- ⏳ Ensure 44x44px minimum touch targets
- ⏳ Add alt text to all images
- ⏳ Ensure form fields have proper labels
- ⏳ Test with screen reader
- ⏳ Add skip navigation links
- ⏳ Support reduced motion preferences

---

## Phase 8: Performance Optimization (⏳ Planned)

### Code Splitting
- ⏳ Implement route-based code splitting
- ⏳ Lazy load images
- ⏳ Lazy load non-critical components
- ⏳ Optimize bundle size

### Data Optimization
- ⏳ Split large data files
- ⏳ Implement virtual scrolling for long lists (if needed)
- ⏳ Optimize images
- ⏳ Add image compression

### Caching
- ⏳ Implement service worker (if needed)
- ⏳ Add cache headers
- ⏳ Optimize API calls (future WordPress integration)

---

## Phase 9: Testing & Documentation (⏳ Planned)

### Testing
- ⏳ Add unit tests for utilities
- ⏳ Add integration tests for forms
- ⏳ Add E2E tests for critical flows
- ⏳ Test in multiple browsers
- ⏳ Test on multiple devices
- ⏳ Test with assistive technologies

### Documentation
- ⏳ Create component documentation
- ⏳ Document data structure patterns
- ⏳ Document styling conventions
- ⏳ Create WordPress handoff guide
- ⏳ Document API integration points
- ⏳ Create deployment guide

---

## Phase 10: WordPress Preparation (⏳ Planned)

### WordPress Alignment
- ⏳ Document WordPress block patterns
- ⏳ Map React components to WordPress equivalents
- ⏳ Document WooCommerce integration points
- ⏳ Document PayFast integration requirements
- ⏳ Create theme structure recommendations
- ⏳ Document custom post type requirements
- ⏳ Document taxonomy requirements
- ⏳ Create migration plan

---

## Ongoing Tasks

### Maintenance
- 🚧 Update `/CHANGELOG.md` with changes
- 🚧 Keep data files in sync (EN/AF)
- 🚧 Review and update guidelines as needed
- 🚧 Monitor and fix bugs
- 🚧 Respond to user feedback

### Code Quality
- 🚧 Regular cleanup audits using `/prompts/cleanup.md`
- 🚧 Enforce TypeScript strict mode
- 🚧 Remove console.log statements
- 🚧 Fix linter warnings
- 🚧 Maintain consistent code style

---

## Blocked Items (⚠️)

None currently.

---

## Notes

- Priority should be given to bilingual data restructuring (Phase 2) before adding new features
- Styling cleanup (Phase 3) should happen alongside data restructuring
- All new pages should follow Guidelines from day one
- WordPress alignment should be considered in all architectural decisions

---

## Quick Add Section

### Next Sprint Priorities
1. Restructure data files to bilingual format
2. Remove all inline styles
3. Create WordPress-aligned CSS classes
4. Complete My Account sub-pages
5. Implement complete checkout flow

### Tech Debt
- Some components still have inline styles (to be cleaned up in Phase 3)
- Data files not yet fully bilingual (to be restructured in Phase 2)
- Missing TypeScript types in some areas (to be added in Phase 2)
- Some hard-coded content strings (to be moved to data files in Phase 2)

---

## Completion Metrics

- **Phase 1:** 100% ✅
- **Phase 2:** 0%
- **Phase 3:** 0%
- **Overall:** ~10%

**Last reviewed:** March 16, 2026