# Update Reports — Organize and Index Audit Reports

**Category:** Maintenance  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `update reports`  
**Status:** Active  
**Parent:** update-orchestrator.md

---

## Purpose

Review all audit reports in `/reports/`, create a report index, identify superseded reports, suggest archiving candidates, and generate a summary.

---

## Actions

1. Scan all `/reports/*.md` files
2. Group reports by audit type
3. Identify latest vs superseded reports
4. Create `/reports/README.md` index
5. Flag reports older than 30 days for archiving
6. Generate summary report

---

## Report Categories

### By Audit Type

- **Locale audits:** audit-locale, audit-routing
- **Data audits:** audit-data, data-migration
- **Styling audits:** audit-styling, audit-css, audit-tokens
- **Template audits:** audit-header, audit-footer, audit-hero
- **Accessibility audits:** audit-accessibility, audit-a11y
- **Performance audits:** audit-performance
- **Update audits:** routes-audit, guidelines-update, prompts-update

### By Date

- **Last 7 days:** Active reports
- **8-30 days:** Recent reports
- **31+ days:** Archive candidates

---

## Report Index Format

Create `/reports/README.md`:

```markdown
# Audit Reports Index

**Last Updated:** YYYY-MM-DD

---

## Active Reports (Last 30 Days)

### Locale & Routing
- [2026-03-18-locale-audit.md](./2026-03-18-locale-audit.md) — Latest locale audit
- [2026-03-18-routing-audit.md](./2026-03-18-routing-audit.md) — Latest routing audit

### Data Architecture
- [2026-03-18-data-migration.md](./2026-03-18-data-migration.md) — Content migration to data files

### Styling & Design System
- [2026-03-17-styling-audit.md](./2026-03-17-styling-audit.md) — CSS compliance audit
- [2026-03-16-tokens-audit.md](./2026-03-16-tokens-audit.md) — Design tokens usage

### Template Parts
- [2026-03-18-header-audit.md](./2026-03-18-header-audit.md) — Header consistency
- [2026-03-18-footer-audit.md](./2026-03-18-footer-audit.md) — Footer consistency

### Accessibility
- [2026-03-17-accessibility-audit.md](./2026-03-17-accessibility-audit.md) — WCAG 2.1 AA audit

---

## Archive Candidates (31+ Days)

- [2026-02-10-locale-audit.md](./2026-02-10-locale-audit.md) — Superseded by 2026-03-18
- [2026-02-05-styling-audit.md](./2026-02-05-styling-audit.md) — Superseded by 2026-03-17

Run `archive reports` to move these to `/reports/archived/YYYY/MM/`

---

## Report Status Summary

- Total reports: {number}
- Active (last 30 days): {number}
- Archive candidates: {number}
- Archived: {number}
```

---

## Success Criteria

✅ All reports inventoried  
✅ Report index created  
✅ Superseded reports identified  
✅ Archive candidates flagged  
✅ Summary report generated

---

## Related Documentation

- **[archive-reports.md](./archive-reports.md)** — Archive old reports
- **[update-orchestrator.md](./update-orchestrator.md)** — Parent prompt

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial reports organization prompt |
