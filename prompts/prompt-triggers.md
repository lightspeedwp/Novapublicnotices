# Prompt Triggers — Nova Public Notices Portal

**Category:** Reference  
**Version:** 6.0.0  
**Last Updated:** 2026-03-18  
**Status:** Active

---

## Purpose

Quick reference guide for all prompt trigger words in the Nova Public Notices Portal project. Type any trigger word to execute the corresponding audit or task.

---

## Master Orchestrators

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `audit` | `/prompts/orchestrator.md` | Run all audit sub-prompts in sequence |
| `orchestrator` | `/prompts/orchestrator.md` | Same as `audit` |
| `fix` | `/prompts/fix-orchestrator.md` | Run all fix prompts in sequence |
| `archive` | `/prompts/archive-orchestrator.md` | Run all archive-* prompts in sequence |
| `cleanup` | `/prompts/cleanup-orchestrator.md` | Run all cleanup-* prompts + archive |
| `update` | `/prompts/update-orchestrator.md` | Run all update-* prompts in sequence |
| `expand` | `/prompts/expand-orchestrator.md` | Run all expand-* prompts in sequence |
| `optimise` or `optimize` | `/prompts/optimise.md` | Run all optimization prompts in sequence |

---

## Fix Prompts (NEW)

### Content Fixes

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `fix titles` | `/prompts/fix-titles.md` | Enforce sentence case for all titles and headings |
| `fix sentence-case` | `/prompts/fix-titles.md` | (Alias for fix-titles) |

### Code Fixes (Planned)

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `fix icons` | `/prompts/fix-icons.md` | Migrate Lucide to Phosphor Icons (TO CREATE) |
| `fix variables` | `/prompts/fix-variables.md` | Replace hardcoded values with CSS variables (TO CREATE) |
| `fix spacing` | `/prompts/fix-spacing.md` | Enforce gap-first spacing, remove margins (TO CREATE) |

---

## Optimization Prompts (NEW)

### Core Optimizations

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `optimise memory` | `/prompts/optimise-memory.md` | File size & memory optimization |
| `optimize memory` | `/prompts/optimise-memory.md` | (American spelling alias) |
| `optimise performance` | `/prompts/optimise-performance.md` | Runtime performance & Web Vitals (TO CREATE) |
| `optimise assets` | `/prompts/optimise-assets.md` | Static asset optimization (TO CREATE) |
| `optimise css` | `/prompts/optimise-css.md` | CSS architecture optimization (TO CREATE) |
| `optimise components` | `/prompts/optimise-components.md` | Component consolidation (TO CREATE) |
| `optimise data` | `/prompts/optimise-data.md` | Data structure optimization (TO CREATE) |

### Quality Optimizations

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `optimise accessibility` | `/prompts/optimise-accessibility.md` | A11y improvements (TO CREATE) |
| `optimise a11y` | `/prompts/optimise-accessibility.md` | (Shorthand alias) |
| `optimise seo` | `/prompts/optimise-seo.md` | SEO optimization (TO CREATE) |

### Specialized Optimizations

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `optimise fonts` | `/prompts/optimise-fonts.md` | Font optimization (TO CREATE) |
| `optimise images` | `/prompts/optimise-images.md` | Image optimization (TO CREATE) |
| `optimise bundle` | `/prompts/optimise-bundle.md` | Bundle size reduction (TO CREATE) |
| `optimise forms` | `/prompts/optimise-forms.md` | Form optimization (TO CREATE) |
| `optimise routing` | `/prompts/optimise-routing.md` | Route optimization (TO CREATE) |
| `optimise animation` | `/prompts/optimise-animation.md` | Animation performance (TO CREATE) |
| `optimise state` | `/prompts/optimise-state.md` | State management (TO CREATE) |
| `optimise caching` | `/prompts/optimise-caching.md` | Cache strategy (TO CREATE) |
| `optimise testing` | `/prompts/optimise-testing.md` | Test suite optimization (TO CREATE) |

---

## Audit Prompts

### Architecture Audits

| Trigger | Prompt File | Purpose |
|---------|-------------|---------| 
| `audit locale` | `/prompts/audit-locale.md` | Bilingual architecture & route equivalence |
| `audit routing` | `/prompts/audit-routing.md` | Route integrity & bilingual navigation |
| `audit data` | `/prompts/audit-data.md` | Notice data architecture, bilingual pairs, type safety |

### Styling & Design System

| Trigger | Prompt File | Purpose |
|---------|-------------|---------| 
| `audit styling` | `/prompts/audit-styling.md` | CSS variables, no inline styles, semantic classes |
| `audit css` | `/prompts/audit-css.md` | CSS architecture, imports, WordPress classes |
| `audit tokens` | `/prompts/audit-tokens.md` | CSS variable compliance, font face enforcement |
| `audit phosphor` | `/prompts/audit-phosphor.md` | Phosphor Icons usage, no legacy Lucide icons |

### Template Parts

| Trigger | Prompt File | Purpose |
|---------|-------------|---------| 
| `audit header` | `/prompts/audit-header.md` | Header template part consistency across all pages |
| `audit footer` | `/prompts/audit-footer.md` | Footer template part consistency across all pages |
| `audit hero` | `/prompts/audit-hero.md` | Hero template part usage on ALL pages and templates |

### Accessibility

| Trigger | Prompt File | Purpose |
|---------|-------------|---------| 
| `audit accessibility` | `/prompts/audit-accessibility.md` | Comprehensive WCAG 2.1 AA audit with bilingual support |
| `audit a11y` | `/prompts/audit-a11y.md` | Quick accessibility check |

### Performance

| Trigger | Prompt File | Purpose |
|---------|-------------|---------| 
| `audit performance` | `/prompts/audit-performance.md` | Render performance, assets, bundle size |

---

## Archive Prompts

| Trigger | Prompt File | Purpose |
|---------|-------------|---------| 
| `archive prompts` | `/prompts/archive-prompts.md` | Review and archive specific/completed prompts |
| `archive reports` | `/prompts/archive-reports.md` | Review and archive old audit reports |
| `archive tasks` | `/prompts/archive-tasks.md` | Review and archive completed task lists |
| `archive guidelines` | `/prompts/archive-guidelines.md` | Review and archive deprecated guidelines |

---

## Maintenance Prompts

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `migrate icons` | `/prompts/migrate-icons.md` | Migrate from Lucide to Phosphor Icons |
| `cleanup` | `/prompts/cleanup.md` | Enforce project standards across codebase |
| `update triggers` | `/prompts/update-triggers.md` | Update trigger registry and check circular references |

---

## Update Prompts

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `update data` | `/prompts/update-data.md` | Migrate hard-coded content to data files |
| `update routes` | `/prompts/update-routes.md` | Synchronize React Router configuration |
| `update sitemap` | `/prompts/update-sitemap.md` | Generate current application sitemap |
| `update guidelines` | `/prompts/update-guidelines.md` | Sync project standards documentation |
| `update prompts` | `/prompts/update-prompts.md` | Maintain prompt file system |
| `update reports` | `/prompts/update-reports.md` | Organize and index audit reports |
| `update tasks` | `/prompts/update-tasks.md` | Synchronize task tracking |
| `update status` | `/prompts/update-status.md` | Generate project health dashboard |

---

## Expand Prompts

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `expand prompts` | `/prompts/expand-prompts.md` | AI-driven prompt recommendations from chat history |
| `expand guidelines` | `/prompts/expand-guidelines.md` | AI-driven guideline recommendations from chat history |
| `expand functionality` | `/prompts/expand-functionality.md` | AI-driven feature recommendations based on gaps and industry standards |
| `expand pages` | `/prompts/expand-pages.md` | AI-driven page recommendations based on user journeys and requirements |
| `expand templates` | `/prompts/expand-templates.md` | Template pattern analysis and reusable template recommendations |
| `expand patterns` | `/prompts/expand-patterns.md` | Block pattern analysis and reusable UI section recommendations |
| `expand components` | `/prompts/expand-components.md` | Component architecture analysis and atomic component recommendations |
| `expand data` | `/prompts/expand-data.md` | Data structure analysis and shared interface recommendations |
| `expand triggers` | `/prompts/expand-triggers.md` | Meta-trigger analysis for gaps and orchestrator opportunities |
| `expand dev-tools` | `/prompts/expand-dev-tools.md` | Development workflow analysis and automation recommendations |
| `expand blocks` | `/prompts/expand-blocks.md` | Block component analysis following WordPress architecture |
| `expand parts` | `/prompts/expand-parts.md` | Template part analysis and variant system recommendations |
| `expand styles` | `/prompts/expand-styles.md` | Style architecture analysis and BEM/CSS variable compliance |

---

## Utility Prompts

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `process reports` | `/prompts/process-reports.md` | Organize reports, create task lists from audits |
| `status` | `/prompts/status.md` | Project health dashboard, metrics, compliance check |
| `continue` | `/prompts/continue.md` | Continue previous work session |
| `data expansion` | `/prompts/data-expansion.md` | Expand notice data for categories |

---

## Trigger Word Patterns

### Base Triggers

Use the base trigger to run the full audit:
```
audit accessibility    → Full accessibility audit
audit locale          → Full locale architecture audit
audit styling         → Full styling system audit
```

### Combined Triggers

Run multiple audits in sequence:
```
audit locale, styling, routing    → Run 3 audits
audit performance, accessibility  → Run 2 audits
```

### Chained Triggers

Execute audit then process results:
```
audit && process reports    → Run all audits, then generate task lists
```

---

## Nova Public Notices Specific Triggers

### Notice-Specific Audits

These audits check notice portal functionality:

| Focus Area | Trigger | Checks |
|------------|---------|--------|
| **Notice Data** | `audit data model` | Category fields, taxonomy completeness, notice structure |
| **Notice Search** | `audit functionality` | Search filters, locale filtering, pagination |
| **Notice Cards** | `audit performance` | Card render performance, image optimization |
| **Notice Forms** | `audit accessibility` | Submit notice form accessibility, validation |
| **Bilingual Routes** | `audit locale` | EN/AF route pairs, language switcher |

### Moderation & Workflows

To be created as project progresses:

| Trigger | Purpose |
|---------|---------|
| `audit moderation` | Check moderation workflow completeness |
| `audit checkout` | Verify WooCommerce-aligned checkout flow |
| `audit forms` | Validate all form submissions and validation |

---

## Quick Audit Cheat Sheet

### Before Deployment
```bash
# Run full audit suite
audit

# Or run critical audits only
audit locale, accessibility, performance, styling
```

### After Adding Features
```bash
# Added new notice category
audit data model, functionality

# Added new bilingual page
audit locale, routing, accessibility

# Modified styles
audit styling, responsive, layout

# Added images
audit performance, accessibility
```

### Weekly Health Check
```bash
# Core compliance
audit locale, styling, accessibility

# Generate reports
audit && process reports
```

---

## Trigger Response Format

All audit prompts follow this standard response:

1. **Read Guidelines** — Load relevant guideline files
2. **Scan Files** — Audit specified files/components
3. **Identify Issues** — Critical, major, minor
4. **Apply Fixes** — Auto-fix where safe
5. **Generate Report** — Save to `/reports/YYYY-MM-DD-{audit-name}.md`
6. **Output Summary** — Display findings count and next steps

---

## Report Naming Convention

All audit reports saved to `/reports/` with date prefix:

```
/reports/YYYY-MM-DD-locale-audit.md
/reports/YYYY-MM-DD-styling-audit.md
/reports/YYYY-MM-DD-accessibility-audit.md
/reports/YYYY-MM-DD-performance-audit.md
/reports/YYYY-MM-DD-routing-audit.md
```

---

## Task List Generation

After running audits, process reports into task lists:

```bash
# Manually trigger task generation
process reports

# Or chain with audit
audit && process reports
```

Task lists created in `/tasks/`:
```
/tasks/locale-tasks.md
/tasks/styling-tasks.md
/tasks/accessibility-tasks.md
/tasks/master-task-list.md
```

---

## Prompt File Location Reference

All prompts stored in `/prompts/`:

```
/prompts/
  orchestrator.md              # Master audit coordinator
  audit-locale.md             # Bilingual architecture
  audit-styling.md            # Styling compliance
  audit-accessibility.md      # WCAG 2.1 AA
  audit-performance.md        # Performance optimization
  audit-routing.md            # Route integrity
  audit-responsive.md         # Responsive design (to be created)
  audit-layout.md             # Layout integrity (to be created)
  audit-functionality.md      # UI interactions (to be created)
  audit-guidelines.md         # Documentation standards (to be created)
  audit-data-model.md         # Notice data structure (to be created)
  prompt-triggers.md          # This file
```

---

## Custom Trigger Creation

To add new audit trigger:

1. Create prompt file in `/prompts/audit-{name}.md`
2. Add trigger word to frontmatter: `**Trigger Word:** audit {name}`
3. Update this file with new trigger
4. Update orchestrator.md execution order if needed
5. Test trigger executes correctly

---

## Environment Notes

**Figma Make Environment:**
- No terminal commands
- All file edits via tools
- React Router (not react-router-dom)
- Lucide React icons
- CSS variables from `/src/styles/theme.css`
- WordPress-aligned class names (`.wp-*`)

**Design System Compliance:**
- All colors via CSS variables
- All spacing via CSS tokens
- Typography via defined font faces only
- No inline styles (except truly dynamic values)
- No hard-coded hex/rgb/spacing values

---

## Related Documentation

- **[orchestrator.md](./orchestrator.md)** — Master audit workflow
- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual rules
- **[data-model.md](../guidelines/data-model.md)** — Notice structure

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 6.0.0 | 2026-03-18 | Added fix orchestrator + fix-titles prompt for sentence case enforcement — Total: 63 active prompts |
| 5.0.0 | 2026-03-18 | Added 10 new optimization prompts (memory, performance, assets, css, components, data, accessibility, a11y, seo, fonts, images, bundle, forms, routing, animation, state, caching, testing) — Total: 61 active prompts |
| 4.1.0 | 2026-03-18 | Added 3 new expand prompts (blocks, parts, styles) for WordPress architecture — Total: 51 active prompts |
| 4.0.0 | 2026-03-18 | Added expand orchestrator + 10 expand prompts (functionality, pages, templates, patterns, components, data, triggers, dev-tools) — Total: 48 active prompts |
| 3.0.0 | 2026-03-18 | Added 3 orchestrators (archive, cleanup, update) + 8 update prompts + 2 expand prompts — Total: 38 active prompts |
| 2.3.0 | 2026-03-18 | Added archive prompts, maintenance prompts, and template parts audit |
| 2.1.0 | 2026-03-16 | Added migrate-icons prompt for Lucide to Phosphor migration |
| 2.0.0 | 2026-03-16 | Added 6 new prompts: audit-data, audit-css, audit-tokens, audit-a11y, process-reports, status — total 11 active prompts |
| 1.0.0 | 2026-03-16 | Initial trigger reference for Nova Public Notices Portal with 5 active audits |