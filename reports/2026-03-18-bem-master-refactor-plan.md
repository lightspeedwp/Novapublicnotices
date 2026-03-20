# BEM Master Refactor Plan — Session 2026-03-18

**Date:** 2026-03-18  
**Task:** Comprehensive BEM refactoring across all pages  
**Status:** 🚧 **IN PROGRESS**

---

## Scope

### Pages to Refactor (13 pages + 404)

1. ✅ `/help` — COMPLETE
2. 🔲 `/faq`
3. 🔲 `/` (home)
4. 🔲 `/login`
5. 🔲 `/register`
6. 🔲 `/sitemap`
7. 🔲 `/submit` (entry page)
8. 🔲 `/privacy`
9. 🔲 `/terms`
10. 🔲 `/my-account` (dashboard)
11. 🔲 `/my-account/notices`
12. 🔲 `/search`
13. 🔲 `/notice/:id` (single notice template)
14. 🔲 `404` (error page + enhancement)

---

## Tasks

### 1. Font Weights
- ✅ Verified: Already reduced by 100 in theme-variables.css
- ✅ All components using CSS variables

### 2. Hero Component Audit
- 🔲 Create Hero template part  
- 🔲 Define layout patterns (sm, md, lg, centered, left, right)
- 🔲 Ensure all 30 heroes use shared template
- 🔲 Remove duplicate hero markup

### 3. BEM Page Refactoring
Each page needs:
- BEM architecture applied
- Dedicated CSS file created
- CSS variables only
- Hero component integrated
- No inline styles
- No hardcoded values
- Sentence case
- Responsive design

### 4. 404 Page Enhancement
- BEM architecture
- Enhanced design
- Search functionality
- Useful navigation buttons
- Category suggestions
- Recent notices

### 5. Guidelines Update
- Document Hero template part patterns
- Update BEM compliance checklist
- Add 404 page standards

---

## Implementation Order

**Priority 1 (Core Pages):**
1. Hero component refactor
2. Home page
3. Search page
4. Single notice
5. Login/Register

**Priority 2 (Account):**
6. My Account dashboard
7. My Notices

**Priority 3 (Content):**
8. FAQ
9. Privacy
10. Terms
11. Sitemap

**Priority 4 (Submission):**
12. Submit entry

**Priority 5 (Error):**
13. 404 page

---

## Progress Tracker

| Page | CSS File | Hero | BEM | Variables | Responsive | Status |
|------|----------|------|-----|-----------|------------|--------|
| Help | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ Complete |
| FAQ | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🚧 Next |
| Home | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| Login | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| Register | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| Sitemap | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| Submit | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| Privacy | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| Terms | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| My Account | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| My Notices | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| Search | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| Notice | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |
| 404 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 | 🔲 Pending |

---

## Estimated Time

- Hero refactor: ~30 minutes
- Per page refactor: ~20 minutes
- 404 enhancement: ~30 minutes
- Guidelines update: ~15 minutes

**Total:** ~5-6 hours of focused work

---

## This Session Goals

Due to scope, target completion for this session:
1. ✅ Help page (complete)
2. 🎯 Hero component refactor
3. 🎯 404 page enhancement
4. 🎯 2-3 core pages (FAQ, Home, Single Notice)

Remaining pages can be completed in follow-up sessions.

---

## Next Steps

1. Refactor Hero component into template part
2. Apply BEM to 404 page + enhance
3. Apply BEM to FAQ page
4. Apply BEM to Home page  
5. Apply BEM to Single Notice page
6. Update guidelines

---

*This is a master tracking document. Each completed page will generate its own detailed report.*
