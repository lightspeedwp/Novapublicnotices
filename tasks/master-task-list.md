# Master Task List — Nova Public Notices Portal

**Last Updated:** 2026-03-18  
**Version:** 2.0.0  
**Status:** Active

---

## Overview

Central tracking for all project tasks across audits, features, and improvements.

**Task Organization:**
- `/tasks/2026-03-18-hero-fixes.md` — Hero template part fixes (16 critical)
- `/tasks/wordpress-architecture-migration.md` — Component structure refactoring
- `/tasks/design-system-compliance.md` — CSS variables and font face enforcement
- This file — Master checklist and progress tracking

---

## Active Sprints

### Current Sprint: Hero Fixes & WordPress Architecture (March 18-25, 2026)

**Sprint Goal:** Fix all hardcoded heroes and establish WordPress component architecture

**Priority Tasks:**
1. ✅ Document WordPress component architecture — COMPLETE
2. ✅ Audit hero implementation — COMPLETE
3. 🔲 Fix 16 pages with hardcoded heroes — IN PROGRESS
4. 🔲 Create missing hero data entries — PENDING
5. 🔲 Migrate to WordPress folder structure — PENDING

**Sprint Metrics:**
- Tasks completed: 2 / 5 (40%)
- Critical bugs fixed: 0 / 16
- Documentation created: 5 files (3,300+ lines)
- Prompts created: 3 new (51 total)

---

## Critical Tasks (P0 — Blocking)

### Hero Template Part Fixes

**Source:** `/reports/2026-03-18-hero-audit.md`  
**Task List:** `/tasks/2026-03-18-hero-fixes.md`

| Page | Status | Assignee | Due Date |
|------|--------|----------|----------|
| HomeAF.tsx | 🔲 Pending | — | 2026-03-19 |
| ContactAF.tsx | 🔲 Pending | — | 2026-03-19 |
| Sales.tsx | 🔲 Pending | — | 2026-03-19 |
| SalesAF.tsx | 🔲 Pending | — | 2026-03-19 |
| submit/Entry.tsx | 🔲 Pending | — | 2026-03-20 |
| submit/EntryAF.tsx | 🔲 Pending | — | 2026-03-20 |
| account/Dashboard.tsx | 🔲 Pending | — | 2026-03-20 |
| account/DashboardAF.tsx | 🔲 Pending | — | 2026-03-20 |
| account/MyNotices.tsx | 🔲 Pending | — | 2026-03-21 |
| account/Orders.tsx | 🔲 Pending | — | 2026-03-21 |
| account/Profile.tsx | 🔲 Pending | — | 2026-03-21 |
| account/ProfileAF.tsx | 🔲 Pending | — | 2026-03-21 |
| account/SavedSearches.tsx | 🔲 Pending | — | 2026-03-22 |
| account/SavedSearchesAF.tsx | 🔲 Pending | — | 2026-03-22 |
| account/Settings.tsx | 🔲 Pending | — | 2026-03-22 |
| account/SettingsAF.tsx | 🔲 Pending | — | 2026-03-22 |

**Completion:** 0 / 16 (0%)

### Missing Hero Data Entries

**Source:** `/tasks/2026-03-18-hero-fixes.md`

| Data Entry | Status | File |
|------------|--------|------|
| submitNoticeEntry (EN) | 🔲 Pending | `/data/heroes/heroes.en.ts` |
| submitNoticeEntry (AF) | 🔲 Pending | `/data/heroes/heroes.af.ts` |
| savedSearches (EN) | 🔲 Pending | `/data/heroes/heroes.en.ts` |
| savedSearches (AF) | 🔲 Pending | `/data/heroes/heroes.af.ts` |
| settings (EN) | 🔲 Pending | `/data/heroes/heroes.en.ts` |
| settings (AF) | 🔲 Pending | `/data/heroes/heroes.af.ts` |

**Completion:** 0 / 6 (0%)

---

## High Priority Tasks (P1 — This Sprint)

### WordPress Component Architecture Migration

**Source:** `/guidelines/wordpress-component-architecture.md`

| Task | Status | Notes |
|------|--------|-------|
| Create `/components/blocks/` directory | 🔲 Pending | Atomic UI components |
| Create `/components/patterns/` directory | 🔲 Pending | Composed sections |
| Create `/components/parts/` directory | 🔲 Pending | Template parts |
| Create `/components/templates/` directory | 🔲 Pending | Page layouts |
| Create `/styles/blocks/` directory | 🔲 Pending | Block styles |
| Create `/styles/patterns/` directory | 🔲 Pending | Pattern styles |
| Create `/styles/parts/` directory | 🔲 Pending | Part styles |
| Create `/styles/templates/` directory | 🔲 Pending | Template styles |
| Move Hero to `/components/parts/` | 🔲 Pending | Template part |
| Move Header to `/components/parts/` | 🔲 Pending | Template part |
| Move Footer to `/components/parts/` | 🔲 Pending | Template part |

**Completion:** 0 / 11 (0%)

### Design System CSS Variable Compliance

**Source:** User requirements (2026-03-18)  
**Task List:** `/tasks/design-system-compliance.md` (to be created)

| Task | Status | Notes |
|------|--------|-------|
| Audit all components for CSS variable usage | 🔲 Pending | Colors, spacing, typography |
| Verify font-face compliance | 🔲 Pending | Only use defined fonts |
| Check for hardcoded hex/rgb values | 🔲 Pending | Should use CSS variables |
| Check for hardcoded spacing values | 🔲 Pending | Should use CSS variables |
| Check for hardcoded font families | 🔲 Pending | Should use CSS variables |
| Document design system variables | 🔲 Pending | Create reference guide |

**Completion:** 0 / 6 (0%)

---

## Medium Priority Tasks (P2 — Next Sprint)

### Expand Prompt System Execution

**Run expand prompts to identify improvements:**

| Prompt | Status | Report |
|--------|--------|--------|
| `expand blocks` | 🔲 Pending | Atomic component recommendations |
| `expand parts` | 🔲 Pending | Template part recommendations |
| `expand styles` | 🔲 Pending | CSS architecture recommendations |
| `expand hooks` | 🔲 To create | Custom hooks analysis |
| `expand contexts` | 🔲 To create | React context analysis |
| `expand routes` | 🔲 To create | Navigation flow analysis |
| `expand seo` | 🔲 To create | SEO optimization analysis |
| `expand animations` | 🔲 To create | Animation opportunities |

**Completion:** 0 / 8 (0%)

### Additional Expand Prompts to Create

**Source:** User recommendations (2026-03-18)

| Prompt File | Status | Purpose |
|-------------|--------|---------|
| `/prompts/expand-hooks.md` | 🔲 To create | Custom hooks recommendations |
| `/prompts/expand-contexts.md` | 🔲 To create | React context analysis |
| `/prompts/expand-routes.md` | 🔲 To create | Navigation flow analysis |
| `/prompts/expand-seo.md` | 🔲 To create | SEO optimization recommendations |
| `/prompts/expand-animations.md` | 🔲 To create | Animation opportunities |
| `/prompts/expand-a11y.md` | 🔲 To create | Deep accessibility analysis |

**Completion:** 0 / 6 (0%)

### Documentation Tasks

| Task | Status | File |
|------|--------|------|
| Create hero system documentation | 🔲 Pending | `/docs/hero-system.md` |
| Create page headers guideline | 🔲 Pending | `/guidelines/design-tokens/page-headers.md` |
| Create block component guide | 🔲 Pending | `/docs/block-components.md` |
| Create template part guide | 🔲 Pending | `/docs/template-parts.md` |
| Document design system CSS variables | 🔲 Pending | `/guidelines/design-tokens/css-variables-reference.md` |

**Completion:** 0 / 5 (0%)

---

## Low Priority Tasks (P3 — Backlog)

### Hero Enhancements

| Task | Status | Notes |
|------|--------|-------|
| Add hero background image support | 🔲 Backlog | Enhancement |
| Add hero stats block | 🔲 Backlog | For with-stats layout |
| Add hero animations | 🔲 Backlog | Entrance animations |
| Split hero into pattern components | 🔲 Backlog | Optional refactor |

**Completion:** 0 / 4 (0%)

### Component Pattern Development

| Task | Status | Notes |
|------|--------|-------|
| Create FeatureCard pattern | 🔲 Backlog | `/components/patterns/cards/` |
| Create BlogCard pattern | 🔲 Backlog | `/components/patterns/cards/` |
| Create CTABanner pattern | 🔲 Backlog | `/components/patterns/cta/` |
| Create TestimonialCard pattern | 🔲 Backlog | `/components/patterns/cards/` |

**Completion:** 0 / 4 (0%)

---

## Completed Tasks ✅

### March 18, 2026

- ✅ Created comprehensive hero audit (830 lines)
- ✅ Created hero fixes task list (370 lines)
- ✅ Created WordPress component architecture guideline (450 lines)
- ✅ Created expand-blocks.md prompt (310 lines)
- ✅ Created expand-parts.md prompt (320 lines)
- ✅ Created expand-styles.md prompt (360 lines)
- ✅ Updated prompt-triggers.md to v4.1.0 (51 active prompts)
- ✅ Created session summary report

### March 16-17, 2026

**Note:** Extensive prior work completed (see 70+ reports in `/reports/`)
- BEM implementation across pages
- CSS variable migration
- Accessibility improvements
- Form styling fixes
- Breadcrumb implementation
- And much more...

---

## Task Metrics

### Overall Progress

**Critical (P0):**
- Total: 22 tasks
- Complete: 0
- In Progress: 0
- Pending: 22
- **Completion: 0%**

**High Priority (P1):**
- Total: 23 tasks
- Complete: 0
- In Progress: 0
- Pending: 23
- **Completion: 0%**

**Medium Priority (P2):**
- Total: 19 tasks
- Complete: 0
- In Progress: 0
- Pending: 19
- **Completion: 0%**

**Low Priority (P3):**
- Total: 8 tasks
- Complete: 0
- In Progress: 0
- Pending: 8
- **Completion: 0%**

**Grand Total:**
- Total tasks: 72
- Complete: 0
- In Progress: 0
- Pending: 72
- **Overall Completion: 0%**

**Note:** This represents new tasks from March 18 audit. Extensive prior work (70+ reports) has been completed.

---

## Sprint Planning

### Sprint 1: Hero Fixes (March 18-25)
- Fix all 16 hardcoded heroes
- Add missing hero data
- Create hero documentation
- **Target:** 100% hero compliance

### Sprint 2: WordPress Architecture (March 25 - April 1)
- Create component directory structure
- Create style directory structure
- Begin component migration
- **Target:** 50% components migrated

### Sprint 3: Design System Compliance (April 1-8)
- Audit CSS variable usage
- Fix hardcoded values
- Enforce font-face compliance
- **Target:** 100% CSS variable compliance

### Sprint 4: Expand Analysis & Improvements (April 8-15)
- Run all expand prompts
- Create additional expand prompts
- Process recommendations
- **Target:** All expand analyses complete

---

## Blockers & Dependencies

### Current Blockers
- None identified

### Dependencies
- Hero fixes depend on hero data entries
- Component migration depends on directory creation
- Expand analysis depends on expand prompt creation

---

## Resource Allocation

**Development Time Estimates:**

| Task Category | Estimated Hours |
|--------------|-----------------|
| Hero fixes (16 pages) | 8-12 hours |
| Hero data entries (6) | 2-3 hours |
| WordPress migration | 16-24 hours |
| Design system compliance | 8-12 hours |
| Expand prompt creation (6) | 6-8 hours |
| Documentation | 8-12 hours |
| **Total:** | **48-71 hours** |

**Recommended:** 2-3 week sprint with focused development time

---

## Quality Gates

### Before Sprint Complete

- [ ] All P0 tasks complete (22 tasks)
- [ ] All hero implementations use Hero component
- [ ] All hero data from data files
- [ ] BEM compliance verified
- [ ] CSS variable compliance verified
- [ ] No inline styles (except dynamic)
- [ ] Bilingual content verified
- [ ] Accessibility tested
- [ ] Responsive tested (320px - 1440px)
- [ ] All expand prompts created
- [ ] Documentation updated

---

## Related Documentation

- **[2026-03-18-hero-audit.md](../reports/2026-03-18-hero-audit.md)** — Hero audit report
- **[2026-03-18-hero-fixes.md](./2026-03-18-hero-fixes.md)** — Hero fix tasks
- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — Architecture guide
- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 2.0.0 | 2026-03-18 | Major update: Added hero fixes, WordPress architecture, expand prompts, design system tasks |
| 1.0.0 | 2026-03-16 | Initial master task list |
