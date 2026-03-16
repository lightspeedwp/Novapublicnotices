# Nova Public Notices Portal

A comprehensive public notices portal prototype for Nova News / Novus Media, designed for future WordPress + WooCommerce implementation.

## 🎯 Project Purpose

This is a **Public Notices Portal / Directory** that supports:
- Public notice discovery and search
- Legal and business submission workflows
- Self-serve digital submissions
- Sales-assisted print + digital publishing
- Moderation workflows before publication
- Bilingual English/Afrikaans interfaces
- WooCommerce-aligned account and checkout UX

**This is NOT a generic classifieds site.**

---

## 📋 Quick Start

### For New Developers
1. **Read the guidelines:** `/guidelines/Guidelines.md`
2. **Follow the workflow:** `/prompts/continue.md`
3. **Check available tasks:** `/tasks/task-list.md`

### For Continuing Work
```bash
# See /prompts/continue.md for detailed workflow
npm install
npm run dev
```

---

## 📁 Project Structure

```
/
├── guidelines/          # Project governance and standards
│   ├── Guidelines.md    # PRIMARY GOVERNANCE DOCUMENT
│   └── design-tokens/   # Color, typography, spacing tokens
├── docs/                # Reference documentation
├── prompts/             # Reusable build and maintenance prompts
├── reports/             # Dated work reports and audits
├── tasks/               # Task tracking and master task list
├── scripts/             # Helper scripts
└── src/
    ├── app/
    │   ├── components/  # Reusable UI components
    │   ├── pages/       # Route/page components
    │   ├── data/        # All content and data files
    │   ├── lib/         # Utilities and helpers
    │   └── routes.tsx   # Route configuration
    └── styles/          # Global CSS and design tokens
        ├── theme.css    # Design tokens (colors, fonts, spacing)
        └── fonts.css    # Font imports
```

---

## 🎨 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Routing:** React Router (data mode)
- **Styling:** Tailwind CSS + CSS Custom Properties
- **Target Platform:** WordPress + WooCommerce + PayFast

---

## 🚨 Core Rules (Read `/guidelines/Guidelines.md`)

### ❌ DON'T
- Use inline visual styles (`style={{}}`)
- Hard-code colors, fonts, or spacing
- Hard-code content in components
- Create files in project root (except README, CHANGELOG, ATTRIBUTIONS)
- Use margin for layout (use gap/padding)
- Create English-only content

### ✅ DO
- Use CSS custom properties from `/src/styles/theme.css`
- Use semantic, WordPress-aligned class names
- Create bilingual data files (`.en.ts` and `.af.ts` pairs)
- Use TypeScript interfaces for all data
- Use gap and padding for spacing
- Test in both English and Afrikaans

---

## 📚 Documentation

### Essential Reading
- **[Project Guidelines](/guidelines/Guidelines.md)** — Core governance document
- **[Continue Prompt](/prompts/continue.md)** — Development workflow
- **[Cleanup Prompt](/prompts/cleanup.md)** — Code quality audit
- **[Task List](/tasks/task-list.md)** — Current work and priorities

### Design Tokens
- **[Colors](/guidelines/design-tokens/colors.md)** — Color system
- **[Typography](/guidelines/design-tokens/typography.md)** — Font system
- **[Spacing](/guidelines/design-tokens/spacing.md)** — Spacing system

---

## 🌐 Bilingual Support

English and Afrikaans are required from day one.

### Data File Structure
```
/src/app/data/
  site/
    navigation.en.ts
    navigation.af.ts
  home/
    home.en.ts
    home.af.ts
  notices/
    categories.en.ts
    categories.af.ts
```

All user-facing content must exist in both languages.

---

## ✅ Current Status

### Completed (Phase 1 — 100%)
- ✅ 68+ functional pages
- ✅ Authentication flows (login, register)
- ✅ Single notice page (login-required)
- ✅ My Account dashboard (WooCommerce-aligned)
- ✅ Sales landing page (comprehensive)
- ✅ Project guidelines and documentation
- ✅ Folder structure and governance

### Next Up (Phase 2 — 0%)
- ⏳ Restructure data files to bilingual format
- ⏳ Remove inline styles
- ⏳ Create WordPress-aligned CSS classes
- ⏳ Complete My Account sub-pages
- ⏳ Implement checkout flow

See `/tasks/task-list.md` for full roadmap.

---

## 🧪 Testing

### Before Committing
- [ ] Test in both English and Afrikaans
- [ ] Verify responsive layouts
- [ ] Test logged-in and logged-out states
- [ ] Check keyboard navigation
- [ ] Verify no inline styles used
- [ ] Ensure no console errors

---

## 🚀 Deployment

*Deployment documentation to be added.*

Target: WordPress environment with WooCommerce and PayFast integration.

---

## 📊 Reports

Regular progress reports and audits are stored in `/reports/`.

Latest: [Guidelines Implementation Report](/reports/2026-03-16-guidelines-implementation.md)

---

## 🤝 Contributing

### Development Workflow
1. Check `/tasks/task-list.md` for available work
2. Read relevant section in `/guidelines/Guidelines.md`
3. Follow `/prompts/continue.md` workflow
4. Create bilingual data files (EN + AF)
5. Use semantic CSS classes (no inline styles)
6. Test thoroughly
7. Update `/CHANGELOG.md`

### Code Review Checklist
Use `/prompts/cleanup.md` as the review checklist.

---

## 🔗 Important Links

- **Primary Guidelines:** `/guidelines/Guidelines.md`
- **Design Tokens:** `/guidelines/design-tokens/`
- **Development Workflow:** `/prompts/continue.md`
- **Code Audit:** `/prompts/cleanup.md`
- **Task Tracking:** `/tasks/task-list.md`
- **Latest Report:** `/reports/2026-03-16-guidelines-implementation.md`

---

## 📝 License

*License information to be added.*

---

## 📧 Contact

For questions about this project, refer to documentation in `/guidelines/` and `/docs/`.

---

**Last Updated:** March 16, 2026  
**Version:** 0.1.0 (Phase 1 Complete)
