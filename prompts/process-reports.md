# Process Reports — Organize and Archive Audit Reports

**Type:** Utility  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `process reports`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Audit the `/reports/` directory — move misplaced reports, rename non-conforming files, create task lists from audit findings, and ensure directory structure follows conventions.

**When to Use:** After running audit suite, monthly maintenance, or when reports directory becomes cluttered.

---

## Workflow Steps

### Step 1: Inventory Reports

1. **List all files in `/reports/`** and subdirectories
2. **Check for misplaced reports:**
   - Root `/` (should be in `/reports/`)
   - `/docs/` (should be in `/reports/`)
   - `/src/` (should be in `/reports/`)
   - `/guidelines/` (should be in `/reports/`)

3. **Record each report:**
   - Filename
   - Location
   - Date (from filename)
   - Follows naming convention (yes/no)
   - Has associated task list (yes/no)

### Step 2: Fix Locations

1. **Move misplaced reports** to `/reports/`
2. **Organize by date:**
   - Recent reports (< 30 days): Keep in `/reports/`
   - Archive older reports: Consider `/reports/archive/YYYY-MM/`

3. **Protected report files (never move):**
   - `/reports/2026-03-16-guidelines-and-prompts-system.md`
   - `/reports/2026-03-16-audit-prompts-customization.md`
   - Any report from current month

### Step 3: Fix Naming Convention

**Nova Report Naming:**

All report filenames must follow: `YYYY-MM-DD-audit-name.md`

- Date first (ISO 8601: YYYY-MM-DD)
- Lowercase description
- Hyphen-separated words
- `.md` extension

**Examples:**
```
✅ 2026-03-16-locale-audit.md
✅ 2026-03-16-accessibility-audit.md
✅ 2026-03-16-performance-audit.md

❌ locale-audit-march-16.md
❌ AccessibilityAudit.md
❌ 16-03-2026-audit.md
```

Rename non-conforming files.

### Step 4: Extract Task Lists from Reports

**Critical Step:** Convert audit findings into actionable tasks

For each audit report:

1. **Read report** to extract issues:
   - Critical issues (P1)
   - Major issues (P2)
   - Minor issues (P3)

2. **Create or update task list** in `/tasks/`:
   ```
   /tasks/locale-tasks.md
   /tasks/styling-tasks.md
   /tasks/accessibility-tasks.md
   /tasks/performance-tasks.md
   /tasks/routing-tasks.md
   ```

3. **Task list format:**
   ```markdown
   # {Audit Name} Tasks

   **Generated From:** /reports/YYYY-MM-DD-{audit-name}.md  
   **Date:** YYYY-MM-DD

   ---

   ## Critical (P1) — Must Fix

   - [ ] Fix mixed-language navigation links
     - File: `/src/app/components/Layout.tsx`
     - Issue: English page linking to `/af/soek`
     - Report: Section 3.2

   ## High Priority (P2) — Should Fix Soon

   - [ ] Add missing Afrikaans route equivalents
     - Missing: `/af/contact`, `/af/submit`
     - Report: Section 2.1

   ## Low Priority (P3) — Improvements

   - [ ] Optimize notice card images
     - 24 images without dimensions
     - Report: Section 4.3
   ```

4. **Update master task list** `/tasks/master-task-list.md`:
   - Add reference to new task lists
   - Update task counts
   - Set priorities

### Step 5: Archive Old Reports

1. **Reports older than 60 days:**
   - Check if referenced by active task lists
   - If no active references → archive

2. **Move to archive:**
   ```
   /reports/archive/2026-02/
   /reports/archive/2026-01/
   ```

3. **Do NOT auto-delete** — archive only

### Step 6: Generate Summary

Output summary of processing:

```markdown
## Reports Processing — YYYY-MM-DD

### Actions Taken

| Action | Count | Details |
|--------|-------|---------|
| Reports moved to correct location | {N} | {list} |
| Reports renamed for compliance | {N} | {list} |
| Task lists created from reports | {N} | {list} |
| Reports archived | {N} | {list} |
| Active reports remaining | {N} | — |

### Created Task Lists

- `/tasks/locale-tasks.md` — {N} tasks from locale audit
- `/tasks/styling-tasks.md` — {N} tasks from styling audit
- `/tasks/accessibility-tasks.md` — {N} tasks from accessibility audit

### Report Health

- ✅ All reports in correct location
- ✅ All reports follow naming convention
- ✅ Task lists generated for all audits
- ✅ Old reports archived

### Next Steps

1. Review task lists in `/tasks/`
2. Prioritize tasks in master task list
3. Begin implementation work
```

---

## Success Criteria

- [ ] Zero reports outside `/reports/` directory
- [ ] All filenames follow `YYYY-MM-DD-description.md` convention
- [ ] Task lists created from all audit reports
- [ ] Old reports archived (not deleted)
- [ ] Master task list updated with new tasks
- [ ] Summary output generated

---

## Related Documentation

- **[orchestrator.md](./orchestrator.md)** — Audit workflow
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 17.1 (Reports)
- **[/tasks/master-task-list.md](../tasks/master-task-list.md)** — Central task tracking

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial process reports utility for Nova Public Notices Portal |
