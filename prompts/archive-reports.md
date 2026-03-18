# Archive Reports — Nova Public Notices Portal

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `archive reports`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Review all report files in `/reports/`, identify outdated or completed reports, consolidate findings, and archive old reports to keep the directory manageable.

**When to Use:** Monthly maintenance, after major milestones, or when `/reports/` exceeds 50 files.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Section 5 (Required root-level folders)
- `/guidelines/Guidelines.md` — Section 17.1 (Reports structure)

---

## Workflow Steps

### Step 1: Scan All Reports

Read all files in `/reports/` directory:

1. List all `.md` files in `/reports/`
2. For each file, extract:
   - File name and date
   - Report type (Audit / Progress / Summary / Executive)
   - Status (Complete / In Progress / Superseded)
   - Key findings summary
   - Related task lists

### Step 2: Categorize Reports

Sort reports into categories:

**Category A: Recent & Active**
- Reports from current month
- Reports with open action items
- Master reports / Executive summaries
- Keep in main `/reports/` directory

**Category B: Historical & Complete**
- Reports older than 90 days
- All action items completed
- Findings documented elsewhere
- Move to archive

**Category C: Superseded**
- Reports replaced by newer reports
- Duplicate findings
- Outdated information
- Move to archive with superseded note

**Category D: Master Reports**
- MASTER-AUDIT-*.md
- EXECUTIVE-SUMMARY-*.md
- PROCESSING-SUMMARY-*.md
- Keep permanently (or until superseded by newer master)

### Step 3: Create Archive Structure

Create archive directories by year and month:

```
/reports/
  archive/
    README.md           # Archive index
    2026/
      2026-01/         # January reports
        report-1.md
        report-2.md
      2026-02/         # February reports
        report-3.md
      2026-03/         # March reports
        report-4.md
```

### Step 4: Archive Old Reports

For each **Category B** and **Category C** report:

1. **Determine archive location:**
   ```
   /reports/archive/{YYYY}/{YYYY-MM}/report-name.md
   ```

2. **Add archive metadata to file:**
   ```markdown
   ---
   **Archived:** YYYY-MM-DD  
   **Reason:** Completed / Superseded by {report} / Historical  
   **Original Location:** `/reports/report-name.md`  
   **Action Items Status:** All completed / Documented in {task-list}
   ---
   ```

3. **Move file to archive:**
   - Use read + write to move content
   - Do not delete original until confirmed in archive

### Step 5: Consolidate Master Reports

Check for multiple master reports:

1. **If multiple MASTER-AUDIT-* exist:**
   - Keep most recent
   - Archive older versions
   - Note: "Superseded by MASTER-AUDIT-{newer-date}.md"

2. **If multiple EXECUTIVE-SUMMARY-* exist:**
   - Keep most recent
   - Archive older versions
   - Link to newer summary in archive

3. **Create consolidated view if needed:**
   - `/reports/CURRENT-STATUS.md` — Links to all active reports
   - Easier than searching through many files

### Step 6: Update Archive Index

Update `/reports/archive/README.md`:

```markdown
# Reports Archive — Nova Public Notices Portal

Last Updated: YYYY-MM-DD

---

## Archive Structure

Reports organized by year and month. Archived reports are historical records of completed audits and progress tracking.

---

## 2026 Archives

### March 2026

| Report | Date | Type | Status | Notes |
|--------|------|------|--------|-------|
| bem-completion-final.md | 2026-03-16 | Progress | Complete | All BEM tasks done |
| css-variables-migration-progress.md | 2026-03-16 | Progress | Complete | Migration finished |
| ... | ... | ... | ... | ... |

**Key Milestones:**
- BEM implementation 100% complete
- CSS variables fully migrated
- All accessibility audits passed

### February 2026

{Similar table for Feb reports}

### January 2026

{Similar table for Jan reports}

---

## Finding Archived Reports

**By Type:**
- Audit reports → Search for `audit` in filenames
- Progress reports → Search for `progress` or `status`
- BEM reports → Search for `bem`
- CSS reports → Search for `css`

**By Topic:**
- Accessibility → `a11y`, `accessibility`
- Styling → `styling`, `css`, `tokens`
- Data → `data`, `locale`
- Performance → `performance`

---

## Superseded Reports

Reports that have been replaced by newer versions:

| Archived Report | Superseded By | Date |
|-----------------|---------------|------|
| audit-summary-2026-01-15.md | MASTER-AUDIT-2026-03-17.md | 2026-03-17 |
| ... | ... | ... |

---

## Related Documentation

- **[Guidelines.md](../../guidelines/Guidelines.md)** — Report standards
- **[process-reports.md](../../prompts/process-reports.md)** — Report processing
```

### Step 7: Update Report Processing Summary

Update `/reports/PROCESSING-SUMMARY.md` (or create if doesn't exist):

```markdown
# Report Processing Summary — Nova Public Notices Portal

**Last Updated:** YYYY-MM-DD

---

## Active Reports (Current Month)

| Report | Date | Type | Open Items | Priority |
|--------|------|------|------------|----------|
| design-system-audit.md | 2026-03-18 | Audit | 3 | High |
| ... | ... | ... | ... | ... |

---

## Archived Reports

**Total archived:** {N} reports  
**Archive location:** `/reports/archive/`  
**Last archive operation:** YYYY-MM-DD

---

## Master Reports

**Current master reports:**
- `/reports/MASTER-AUDIT-2026-03-17.md` — Most recent comprehensive audit
- `/reports/EXECUTIVE-SUMMARY-2026-03-17.md` — Latest executive summary

**Previous masters archived to:** `/reports/archive/2026/`

---

## Report Metrics

- Total reports generated: {N}
- Active reports: {N}
- Archived reports: {N}
- Average reports per month: {N}
- Reports with open action items: {N}

---

## Next Archive Date

**Recommended:** YYYY-MM-DD (first day of next month)
```

### Step 8: Generate Archive Report

Save report to `/reports/YYYY-MM-DD-report-archive.md`:

```markdown
# Report Archive Operation

**Date:** YYYY-MM-DD  
**Operation:** archive reports  
**Status:** Complete

---

## Executive Summary

Reviewed {N} reports. Kept {N} active reports in main directory, archived {N} historical reports to `/reports/archive/`.

---

## Reports Kept (Active)

| Report | Date | Type | Reason |
|--------|------|------|--------|
| design-system-audit.md | 2026-03-18 | Audit | Current month, open items |
| MASTER-AUDIT-2026-03-17.md | 2026-03-17 | Master | Most recent master |
| ... | ... | ... | ... |

---

## Reports Archived

| Report | Date | Archived To | Reason |
|--------|------|-------------|--------|
| bem-completion-final.md | 2026-03-16 | /reports/archive/2026/2026-03/ | Completed, >90 days old |
| css-token-verification-2026-03-16.md | 2026-03-16 | /reports/archive/2026/2026-03/ | All items complete |
| ... | ... | ... | ... |

---

## Reports Superseded

| Old Report | New Report | Date Superseded |
|------------|------------|-----------------|
| audit-summary-2026-01-15.md | MASTER-AUDIT-2026-03-17.md | 2026-03-17 |
| ... | ... | ... |

---

## Archive Statistics

- Reports reviewed: {N}
- Active reports: {N}
- Archived reports: {N}
- Superseded reports: {N}
- Master reports: {N}
- Archive storage: /reports/archive/2026/

---

## Action Items Completion Check

**All archived reports verified:**
- ✅ All critical action items completed or documented in tasks
- ✅ All findings recorded in guidelines or newer reports
- ✅ No open blockers remaining

---

## Archive Index Updated

- ✅ `/reports/archive/README.md` updated
- ✅ All archived reports have metadata
- ✅ Archive organized by YYYY/YYYY-MM
- ✅ Superseded reports linked to replacements

---

## Disk Space Reclaimed

**Main reports directory:**
- Before: {N} files
- After: {N} files
- Reduction: {N}%

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Report standards
- **[process-reports.md](../prompts/process-reports.md)** — Report processing

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | YYYY-MM-DD | Initial report archive operation |
```

---

## Archive Criteria

### Archive if:
- ✅ Report is older than 90 days
- ✅ All action items completed
- ✅ Findings documented in guidelines
- ✅ Not a master/executive report (unless superseded)
- ✅ No open blockers

### Keep if:
- ❌ From current month
- ❌ Has open action items
- ❌ Is a master/executive summary (most recent)
- ❌ Referenced by active tasks
- ❌ Contains unique findings not documented elsewhere

---

## Success Criteria

- [ ] All reports in `/reports/` reviewed
- [ ] Reports older than 90 days archived
- [ ] Archive directories created (YYYY/YYYY-MM structure)
- [ ] Archive index updated
- [ ] Processing summary updated
- [ ] All archived reports have metadata
- [ ] No active action items in archived reports
- [ ] Master reports properly maintained
- [ ] Archive operation report generated

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards
- **[process-reports.md](./process-reports.md)** — Report processing
- **[archive-prompts.md](./archive-prompts.md)** — Archive prompts
- **[archive-tasks.md](./archive-tasks.md)** — Archive tasks

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial archive reports for Nova Public Notices Portal |
