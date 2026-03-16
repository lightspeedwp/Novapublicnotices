# Changelog

All notable changes to the Nova Public Notices Portal project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### To Do (Phase 2)
- Restructure data files to bilingual format
- Remove inline styles from all components
- Create WordPress-aligned semantic CSS classes
- Complete My Account sub-pages
- Implement full checkout flow

---

## [0.1.0] - 2026-03-16

### Added - Foundation & Guidelines

#### Project Structure
- Created required root folders: `guidelines/`, `docs/`, `prompts/`, `reports/`, `tasks/`, `scripts/`
- Established clean root directory policy (only README, CHANGELOG, ATTRIBUTIONS allowed)

#### Documentation
- **Guidelines.md** — Comprehensive project governance document (780+ lines)
  - Core principles and non-negotiable rules
  - Data structure requirements
  - Bilingual content strategy
  - WordPress-aligned styling approach
  - Page-specific requirements
  - User journey documentation
- **cleanup.md** — Code quality audit checklist and procedures
- **continue.md** — Development workflow guide for ongoing work
- **prompt-triggers.md** — Reference for when to use each prompt
- **colors.md** — Complete color system documentation
- **typography.md** — Typography tokens and usage guidelines
- **spacing.md** — Spacing system with gap/padding approach
- **task-list.md** — Master task list with 10 project phases
- **2026-03-16-guidelines-implementation.md** — Initial progress report

#### Key Pages Finalized
- **Single Notice Page** — Login-required view with comprehensive metadata sidebar
- **Register Page** — Two-section design (User Details + Company Details) with logo upload
- **Login Page** — Clean authentication with password visibility toggle
- **My Account Dashboard** — WooCommerce-aligned with sidebar navigation
- **Sales Landing Page** — Comprehensive 3-step process explanation (2,500+ words)

#### Features
- Login-required access to public notices
- Mock authentication system (localStorage-based)
- WooCommerce-style account navigation
- Company registration with logo upload
- Password visibility toggles
- Comprehensive sales process documentation

### Changed
- Updated Register page to match Maroela Media competitor design
- Enhanced Login page with better UX patterns
- Restructured My Account to WooCommerce sidebar pattern
- Expanded Sales page with detailed step-by-step process

### Project Governance
- Established "no inline styles" rule
- Defined bilingual data file requirements
- Set WordPress-aligned CSS class naming conventions
- Implemented gap/padding spacing policy (avoid margin)
- Created definition of done checklist

---

## [0.0.1] - 2026-03-01 to 2026-03-15

### Initial Development (Pre-Guidelines)

#### Pages Created
- Homepage/Landing
- Search page
- Category archives
- Single notice template (basic)
- Contact page
- Register page (basic)
- Login page (basic)
- My Account (basic)
- Submit notice form
- Sales page (basic)
- 50+ support pages

#### Core Features
- React Router setup with data mode
- Layout component with header/footer
- Category badge system
- Ad slot components
- Basic authentication flows
- Nova News branding application
- Sample notice data (50+ notices across 12 categories)
- Footer with newsletter and social media
- Sitemap and Advertise pages

#### Technical Foundation
- Vite + React + TypeScript setup
- Tailwind CSS integration
- CSS custom properties in theme.css
- Component library structure
- Data file organization (initial)
- Route configuration

---

## Guidelines Version History

- **v1.0** (2026-03-16) — Initial comprehensive guidelines established
  - 20 main sections covering all project aspects
  - Non-negotiable rules defined
  - Bilingual requirements documented
  - WordPress alignment established

---

## Notes

### Versioning Strategy
- **0.x.x** — Pre-production prototype
- **1.0.0** — WordPress handoff ready
- **1.x.x** — Post-launch iterations

### Breaking Changes
Breaking changes will be clearly marked with **[BREAKING]** prefix.

### Documentation Updates
Major documentation updates will be noted under "Changed" section.

---

## Legend

- **Added** — New features, pages, or components
- **Changed** — Changes to existing functionality
- **Deprecated** — Features marked for removal
- **Removed** — Deleted features or files
- **Fixed** — Bug fixes
- **Security** — Security-related changes
- **[BREAKING]** — Changes that break backward compatibility

---

**Last Updated:** March 16, 2026
