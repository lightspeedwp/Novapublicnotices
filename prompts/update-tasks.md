# Update Tasks — Synchronize Task Tracking

**Category:** Maintenance  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `update tasks`  
**Status:** Active  
**Parent:** update-orchestrator.md

---

## Purpose

Review all task lists in `/tasks/`, update master task list, mark completed tasks, remove duplicates, and prioritize active tasks.

---

## Actions

1. Scan all `/tasks/*.md` files
2. Extract incomplete tasks from all lists
3. Mark completed tasks (100% done)
4. Remove duplicate tasks
5. Update `/tasks/master-task-list.md`
6. Prioritize by Critical → High → Medium → Low
7. Flag completed task lists for archiving

---

## Task List Types

### Master Task List
`/tasks/master-task-list.md` — Aggregates all active tasks from sub-lists

### Sub-Task Lists
- `locale-tasks.md` — From locale audits
- `styling-tasks.md` — From styling audits
- `data-tasks.md` — From data audits
- `accessibility-tasks.md` — From a11y audits
- `performance-tasks.md` — From performance audits

---

## Master Task List Format

```markdown
# Master Task List — Nova Public Notices Portal

**Last Updated:** YYYY-MM-DD  
**Status:** Active

---

## Critical Tasks (Blocking Production)

- [ ] Fix missing AF route for /submit-notice — [locale-audit](../reports/2026-03-18-locale-audit.md)
- [ ] Migrate hard-coded content in Header.tsx — [data-migration](../reports/2026-03-18-data-migration.md)

## High Priority (This Sprint)

- [ ] Update all buttons to use design tokens — [styling-audit](../reports/2026-03-17-styling-audit.md)
- [ ] Add ARIA labels to search form — [accessibility-audit](../reports/2026-03-17-accessibility-audit.md)

## Medium Priority (Next Sprint)

- [ ] Optimize category card images — [performance-audit](../reports/2026-03-16-performance-audit.md)
- [ ] Create data file for Contact page — [data-migration](../reports/2026-03-18-data-migration.md)

## Low Priority (Backlog)

- [ ] Add loading states to all async components
- [ ] Improve error messages for form validation

---

## Completed Tasks

- [x] Created bilingual route pairs for all pages — 2026-03-18
- [x] Migrated Home page to data files — 2026-03-18
- [x] Implemented Phosphor Icons — 2026-03-17

---

## Task Sources

Tasks aggregated from:
- [locale-tasks.md](./locale-tasks.md)
- [styling-tasks.md](./styling-tasks.md)
- [data-tasks.md](./data-tasks.md)
- [accessibility-tasks.md](./accessibility-tasks.md)
```

---

## Task Prioritization

### Critical (Blocking)
- Breaks production
- Violates hard rules (Guidelines.md)
- Prevents deployment
- Security/legal issues

### High Priority (This Sprint)
- Impacts user experience significantly
- Required for next feature
- Compliance issues
- Performance problems

### Medium Priority (Next Sprint)
- Nice-to-have improvements
- Optimization opportunities
- Documentation updates
- Minor UX enhancements

### Low Priority (Backlog)
- Future enhancements
- Experimental features
- Non-blocking optimizations

---

## Deduplication Rules

Tasks are duplicates if:
- Same action + same file
- Same source report
- Completed in one list but open in another

**Action:** Keep highest-priority version, remove duplicates

---

## Completion Criteria

Mark task complete when:
- [ ] Implementation done
- [ ] Code reviewed
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Verified in audit

---

## Report Format

Generate: `/reports/YYYY-MM-DD-tasks-update.md`

```markdown
# Tasks Update — YYYY-MM-DD

## Summary

- Total tasks: {number}
- Critical: {number}
- High: {number}
- Medium: {number}
- Low: {number}
- Completed this update: {number}
- Duplicates removed: {number}

## Task Lists Updated

- master-task-list.md
- locale-tasks.md
- styling-tasks.md
- data-tasks.md

## Tasks Marked Complete

- [x] {Task description} — {Date completed}

## New Tasks Added

- [ ] {Task from recent audit}

## Archive Candidates

- {task-list}.md — 100% complete, flag for archiving
```

---

## Success Criteria

✅ Master task list current  
✅ Completed tasks marked  
✅ Duplicates removed  
✅ Priorities updated  
✅ Completed lists flagged for archive

---

## Related Documentation

- **[archive-tasks.md](./archive-tasks.md)** — Archive completed task lists
- **[update-orchestrator.md](./update-orchestrator.md)** — Parent prompt

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial task sync prompt |
