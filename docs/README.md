# Nova Public Notices — Documentation Index

## Overview

This directory contains technical documentation for the Nova Public Notices Portal prototype.

---

## Core Architecture Documents

### [ARCHITECTURE-OVERVIEW.md](./ARCHITECTURE-OVERVIEW.md) 🌟 **Start Here**
Complete system architecture overview covering:
- One-template-per-page-type pattern
- Shared component library
- Design system architecture
- Data flow and component patterns
- WordPress migration path

### [dynamic-category-architecture.md](./dynamic-category-architecture.md)
In-depth guide to the dynamic category template system:
- How one template handles 25+ categories
- Category data structure
- Optional per-category customization
- Adding new categories
- Shared component architecture

### [category-system-summary.md](./category-system-summary.md)
High-level summary of the category system:
- Architecture overview
- Current categories (25 total)
- Design system integration
- Benefits and patterns

### [styling-architecture.md](./styling-architecture.md)
Complete guide to the CSS architecture:
- Design token system (CSS variables)
- BEM methodology
- Typography system
- Layout patterns
- Component styling examples
- WordPress alignment

### [quick-reference-category-system.md](./quick-reference-category-system.md) 🚀 **Quick Lookup**
Fast reference card for developers:
- TL;DR summaries
- Add new category checklist
- CSS variable quick reference
- Common issues and solutions

---

## Quick Navigation

### I want to...

**...understand the overall system**
→ Start with [ARCHITECTURE-OVERVIEW.md](./ARCHITECTURE-OVERVIEW.md)

**...add a new category**
→ Jump to [quick-reference-category-system.md](./quick-reference-category-system.md#add-a-new-category)

**...learn the styling system**
→ Read [styling-architecture.md](./styling-architecture.md)

**...understand category templates**
→ See [dynamic-category-architecture.md](./dynamic-category-architecture.md)

**...find CSS variables**
→ Check [styling-architecture.md](./styling-architecture.md#design-token-system) or `/src/styles/theme-variables.css`

**...see BEM examples**
→ Look at [styling-architecture.md](./styling-architecture.md#bem-methodology)

---

## Related Documentation

### In `/guidelines/`

Main governance and standards documents:

- [Guidelines.md](/guidelines/Guidelines.md) — Primary project governance
- [locale-architecture.md](/guidelines/locale-architecture.md) — Bilingual EN/AF standards
- [data-model.md](/guidelines/data-model.md) — Notice data structure
- [notice-fields-schema.md](/guidelines/notice-fields-schema.md) — Field schema for all categories

### In `/guidelines/design-tokens/`

Design system specifications (14 files):

- [README.md](/guidelines/design-tokens/README.md) — Design tokens overview
- [css-architecture.md](/guidelines/design-tokens/css-architecture.md) — BEM and WordPress alignment
- [colors.md](/guidelines/design-tokens/colors.md) — Color system
- [typography.md](/guidelines/design-tokens/typography.md) — Type scale and fonts
- [spacing.md](/guidelines/design-tokens/spacing.md) — Gap-first spacing
- [buttons.md](/guidelines/design-tokens/buttons.md) — Button variants
- [forms.md](/guidelines/design-tokens/forms.md) — Form controls
- [navigation.md](/guidelines/design-tokens/navigation.md) — Nav patterns
- [iconography.md](/guidelines/design-tokens/iconography.md) — Phosphor Icons
- [borders.md](/guidelines/design-tokens/borders.md) — Border tokens
- [radii.md](/guidelines/design-tokens/radii.md) — Border radius
- [shadows.md](/guidelines/design-tokens/shadows.md) — Elevation system
- [animations.md](/guidelines/design-tokens/animations.md) — Motion
- [responsive.md](/guidelines/design-tokens/responsive.md) — Breakpoints
- [light-dark-mode.md](/guidelines/design-tokens/light-dark-mode.md) — Color modes

---

## Document Status

| Document | Status | Last Updated |
|----------|--------|--------------|
| ARCHITECTURE-OVERVIEW.md | ✅ Complete | 2026-03-17 |
| dynamic-category-architecture.md | ✅ Complete | 2026-03-17 |
| category-system-summary.md | ✅ Complete | 2026-03-17 |
| styling-architecture.md | ✅ Complete | 2026-03-17 |
| quick-reference-category-system.md | ✅ Complete | 2026-03-17 |

---

## Key Architectural Decisions

### 1. One Dynamic Template Per Page Type

**Decision:** Use a single dynamic template for all category pages instead of creating separate templates for each of 25 categories.

**Rationale:**
- Maintainability: Update 1 template instead of 25
- DRY principle: No duplicated code
- Scalability: Add categories without new files
- Consistency: Same UX across all categories

**Implementation:** `CategoryArchive.tsx` pulls category-specific data from `categories.ts`

### 2. 100% CSS Variable Design System

**Decision:** All visual styling must use CSS variables from `theme-variables.css`. Zero hardcoded values in components.

**Rationale:**
- Centralized design tokens
- Easy theme updates
- WordPress alignment
- Maintainable styling
- User can update by editing CSS only

**Implementation:** All colors, spacing, typography, shadows use `var(--token-name)`

### 3. BEM Methodology for CSS

**Decision:** Use strict BEM naming convention for all CSS classes.

**Rationale:**
- Predictable class names
- No naming conflicts
- Clear component boundaries
- WordPress compatibility
- Easy to understand and maintain

**Implementation:** `.wpn-{block}__{element}--{modifier}` pattern throughout

### 4. Gap-First Layout (No Margins)

**Decision:** Use `gap` and `padding` for layout. Avoid `margin` for spacing.

**Rationale:**
- More predictable layouts
- No margin collapse issues
- Cleaner component boundaries
- Flexbox-friendly

**Implementation:** All spacing via `gap: var(--space-*)` and `padding: var(--space-*)`

### 5. Shared Component Library

**Decision:** Build a library of reusable components used across all pages.

**Rationale:**
- Consistency across pages
- Single source of truth
- Easy to update globally
- Smaller bundle size

**Implementation:** `Hero`, `StatsBlock`, `NoticeGrid`, `Layout`, etc. used everywhere

### 6. Bilingual Data Architecture

**Decision:** Every user-facing string exists in both EN and AF with paired data files.

**Rationale:**
- Required by project scope
- Clear separation of languages
- Easy to maintain translations
- Type-safe bilingual data

**Implementation:** `*.en.ts` and `*.af.ts` files with `{ en: "...", af: "..." }` structure

---

## Architecture Highlights

### Category System

```
ONE Template (CategoryArchive.tsx)
    ↓
Category Data (categories.ts)
    ↓
Filtered Notices (getNoticesByCategory)
    ↓
Shared Components (Hero, StatsBlock, NoticeGrid)
    ↓
Rendered Page
```

**25 categories, 1 template, infinite flexibility**

### Design System

```
CSS Variables (theme-variables.css)
    ↓
BEM Component Classes
    ↓
React Components
    ↓
Rendered UI
```

**Update design system → all components update automatically**

### Data Flow

```
Route Parameter (slug)
    ↓
Get Category Config
    ↓
Filter Notices by Category
    ↓
Generate Stats
    ↓
Build Hero Data (with optional overrides)
    ↓
Render with Shared Components
```

**Fully data-driven, no hardcoded content**

---

## File Organization

```
/docs/
├── README.md                           ← This file
├── ARCHITECTURE-OVERVIEW.md            ← System architecture
├── dynamic-category-architecture.md    ← Category template system
├── category-system-summary.md          ← Category overview
├── styling-architecture.md             ← Design system guide
└── quick-reference-category-system.md  ← Quick lookup

/guidelines/
├── Guidelines.md                       ← Main governance
├── locale-architecture.md
├── data-model.md
├── notice-fields-schema.md
└── design-tokens/                      ← 14 token guideline files

/src/
├── app/
│   ├── pages/                          ← Page components
│   ├── components/                     ← Shared components
│   ├── data/                           ← Data layer
│   └── lib/                            ← Helper functions
└── styles/                             ← Design system CSS
    ├── theme-variables.css             ← CSS custom properties
    └── ...
```

---

## Contribution Guidelines

When creating new documentation:

1. **Location:**
   - Technical docs → `/docs/`
   - Standards/governance → `/guidelines/`
   - Design tokens → `/guidelines/design-tokens/`

2. **Format:**
   - Use Markdown (.md)
   - Include table of contents for long docs
   - Add "Last Updated" date
   - Link to related docs

3. **Naming:**
   - Use kebab-case: `category-system-summary.md`
   - Be descriptive: not `notes.md`, use `category-architecture-notes.md`

4. **Content:**
   - Start with overview/TL;DR
   - Include code examples
   - Add visual diagrams where helpful
   - Link to source files

5. **Update This Index:**
   - Add new docs to relevant section
   - Update status table
   - Add to "Quick Navigation" if applicable

---

## Version History

- **2026-03-17** — Initial documentation created
  - ARCHITECTURE-OVERVIEW.md
  - dynamic-category-architecture.md
  - category-system-summary.md
  - styling-architecture.md
  - quick-reference-category-system.md
  - This README

---

## Next Steps

Planned documentation:

- [ ] Component API Reference
- [ ] Data Schema Reference
- [ ] Migration Guide (WordPress)
- [ ] Performance Optimization Guide
- [ ] Testing Strategy
- [ ] Deployment Guide

---

**Questions or suggestions?** Update this README or create a new doc in `/docs/`.

---

**Last Updated:** 2026-03-17  
**Docs Status:** ✅ Core documentation complete
