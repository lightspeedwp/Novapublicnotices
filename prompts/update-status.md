# Update Status — Project Health Dashboard

**Category:** Maintenance  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `update status`  
**Status:** Active  
**Parent:** update-orchestrator.md

---

## Purpose

Generate a comprehensive project health dashboard with compliance checks, metrics, identified blockers, and recommended next actions. This prompt aggregates all other update results into a single status view.

---

## Note

This prompt should be run LAST in the update-orchestrator workflow, after all other updates complete, so it can aggregate the most current information.

---

## Actions

1. Run compliance checks against Guidelines.md
2. Calculate project metrics
3. Identify critical blockers
4. Read recent audit reports for issues
5. Generate status dashboard
6. Recommend prioritized next actions

---

## Compliance Checks

### Guidelines.md Compliance

- [ ] **Section 4.1:** No inline visual styles
- [ ] **Section 4.2:** No hard-coded visual values in TSX
- [ ] **Section 4.3:** No random files in project root
- [ ] **Section 4.4:** No one-off page data in components
- [ ] **Section 4.5:** No infinite scroll (using pagination)
- [ ] **Section 7:** Dynamic page requirements met
- [ ] **Section 8:** All required routes exist
- [ ] **Section 12:** Bilingual EN/AF content complete
- [ ] **Section 13:** Design system and styling rules followed
- [ ] **Section 14:** Ads supported (except checkout)

### Design Token Compliance

- [ ] All colors from CSS variables
- [ ] All typography from defined font faces
- [ ] All spacing from tokens (gap/padding, no margin)
- [ ] All borders/radii from tokens
- [ ] All shadows from tokens

### Data Architecture Compliance

- [ ] All pages use data files (no hard-coded content)
- [ ] All data files have EN/AF pairs
- [ ] All data files use TypeScript types
- [ ] All notices have category-specific fields

### Route Compliance

- [ ] All EN routes have AF equivalents
- [ ] All routes documented
- [ ] Access control configured
- [ ] 404 handlers exist

---

## Project Metrics

### Codebase Metrics

```typescript
// Calculate from file system
- Total TypeScript files: {number}
- Total components: {number}
- Total pages: {number}
- Total data files: {number}
- Average file size: {number} lines
- Largest file: {filename} ({lines} lines)
```

### Data Metrics

```typescript
// Calculate from data files
- Notice categories: {number}
- Total notices: {number}
- Bilingual data pairs: {number}
- Data files with missing AF: {number}
```

### Route Metrics

```typescript
// Calculate from routes.tsx
- Total routes: {number}
- EN routes: {number}
- AF routes: {number}
- Public routes: {number}
- Protected routes: {number}
- Routes missing AF equivalent: {number}
```

### Documentation Metrics

```typescript
// Calculate from /guidelines/, /prompts/, /reports/
- Active guidelines: {number}
- Active prompts: {number}
- Active reports (last 30 days): {number}
- Active tasks: {number}
```

---

## Status Dashboard Format

Generate: `/reports/YYYY-MM-DD-project-status.md`

```markdown
# Project Status Dashboard — YYYY-MM-DD

**Generated:** YYYY-MM-DD HH:MM  
**Project:** Nova Public Notices Portal  
**Phase:** {Current phase number/90+}

---

## 🚦 Overall Health

**Status:** 🟢 Healthy | 🟡 Needs Attention | 🔴 Critical Issues

---

## 📊 Compliance Summary

### Guidelines Compliance: {percent}%

- ✅ No inline styles: {pass/fail}
- ✅ All content in data files: {pass/fail}
- ✅ Bilingual EN/AF complete: {pass/fail}
- ❌ {Failed compliance check}

### Design Token Compliance: {percent}%

- ✅ Colors from CSS variables: {pass/fail}
- ✅ Typography from font faces: {pass/fail}
- ❌ {Failed compliance check}

### Data Architecture Compliance: {percent}%

- ✅ All pages use data files: {pass/fail}
- ✅ All data has EN/AF pairs: {pass/fail}
- ❌ {Failed compliance check}

### Route Compliance: {percent}%

- ✅ All routes have AF equivalents: {pass/fail}
- ✅ All routes documented: {pass/fail}
- ❌ {Failed compliance check}

---

## 📈 Project Metrics

### Codebase
- TypeScript files: {number}
- Components: {number}
- Pages: {number}
- Data files: {number}

### Content
- Notice categories: {number}
- Total notices: {number}
- Bilingual pairs: {number}

### Routes
- Total routes: {number}
- Bilingual route pairs: {number}
- Public routes: {number}
- Protected routes: {number}

### Documentation
- Guidelines: {number} active
- Prompts: {number} active
- Reports: {number} (last 30 days)
- Tasks: {number} active

---

## 🚨 Critical Blockers

### Blocking Production

1. **{Issue}**
   - **Impact:** {Description}
   - **Source:** [{Report}](../reports/YYYY-MM-DD-report.md)
   - **Action:** {Fix required}
   - **Priority:** Critical

---

## ⚠️ High Priority Issues

1. **{Issue}**
   - **Impact:** {Description}
   - **Source:** [{Report}](../reports/YYYY-MM-DD-report.md)
   - **Action:** {Fix required}
   - **Priority:** High

---

## ✅ Recent Wins

- Completed {feature/fix}
- Achieved {metric improvement}
- Resolved {blocker}

---

## 🎯 Recommended Next Actions

### Immediate (Today)

1. **{Action}**
   - Why: {Reason}
   - Impact: {Expected outcome}
   - Estimated effort: {time}

### This Sprint

1. **{Action}**
   - Why: {Reason}
   - Impact: {Expected outcome}
   - Estimated effort: {time}

### Next Sprint

1. **{Action}**
   - Why: {Reason}
   - Impact: {Expected outcome}
   - Estimated effort: {time}

---

## 📂 Recent Activity

### Last 7 Days

- {Date}: {Activity}
- {Date}: {Activity}

### Audits Run

- {Date}: [{Audit Name}](../reports/YYYY-MM-DD-audit.md)

### Updates Made

- {Date}: {Update description}

---

## 🔗 Quick Links

- **[Master Task List](../tasks/master-task-list.md)** — All active tasks
- **[Guidelines](../guidelines/Guidelines.md)** — Project standards
- **[Recent Reports](../reports/)** — Last 30 days
- **[Sitemap](../docs/sitemap.md)** — Current routes

---

## 📅 Next Milestones

- **{Milestone}:** {Date} — {Description}
- **{Milestone}:** {Date} — {Description}

---

## Version History

| Version | Date | Notes |
|---|---|---|
| {Version} | YYYY-MM-DD | {Summary of status at this snapshot} |
```

---

## Blocker Identification

**Critical Blocker Criteria:**

- Prevents deployment
- Violates hard rule in Guidelines.md
- Breaks core functionality
- Security or legal issue
- Blocks other development work

**Escalate if:**

- Critical blocker exists >3 days
- Multiple high-priority issues accumulating
- Compliance <80%

---

## Success Criteria

✅ Compliance checks run  
✅ Metrics calculated  
✅ Blockers identified  
✅ Status dashboard generated  
✅ Next actions prioritized  
✅ Report saved to `/reports/YYYY-MM-DD-project-status.md`

---

## Usage

Run this prompt:

- After completing all other update-* prompts
- Before starting new sprint
- Weekly as health check
- Before major deployments
- When status overview needed

**Trigger:** `update status` or simply `status`

---

## Related Documentation

- **[status.md](./status.md)** — Standalone status prompt (runs same checks)
- **[update-orchestrator.md](./update-orchestrator.md)** — Parent prompt (runs this last)
- **[Guidelines.md](../guidelines/Guidelines.md)** — Compliance source

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial project status dashboard prompt |
