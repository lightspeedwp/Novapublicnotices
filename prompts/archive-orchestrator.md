# Archive Orchestrator — Master Archive Prompt

**Category:** Orchestrator  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `archive`  
**Status:** Active

---

## Purpose

Run all archive-* prompts in sequence to clean up completed work, outdated reports, deprecated guidelines, and unused prompts.

---

## Overview

This orchestrator executes all archive sub-prompts to maintain a clean, organized project structure. It removes clutter while preserving important historical context and completed work.

---

## Sub-Prompts Executed

### 1. Archive Prompts
**File:** `/prompts/archive-prompts.md`  
**Trigger:** `archive prompts`

Reviews all prompts in `/prompts/` and:
- Identifies completed/deprecated prompts
- Moves to `/prompts/archived/`
- Updates trigger registry
- Preserves version history

### 2. Archive Reports
**File:** `/prompts/archive-reports.md`  
**Trigger:** `archive reports`

Reviews all reports in `/reports/` and:
- Identifies old/superseded reports (>30 days)
- Moves to `/reports/archived/YYYY/MM/`
- Keeps latest reports active
- Preserves audit trail

### 3. Archive Tasks
**File:** `/prompts/archive-tasks.md`  
**Trigger:** `archive tasks`

Reviews all task lists in `/tasks/` and:
- Identifies completed task lists
- Moves to `/tasks/archived/YYYY/MM/`
- Updates master task list
- Removes completed items from active lists

### 4. Archive Guidelines
**File:** `/prompts/archive-guidelines.md`  
**Trigger:** `archive guidelines`

Reviews all guidelines in `/guidelines/` and:
- Identifies deprecated/superseded guidelines
- Moves to `/guidelines/archived/`
- Updates parent Guidelines.md
- Maintains guideline version history

---

## Execution Order

```
1. archive-prompts.md     → Clean up unused prompts
2. archive-reports.md     → Archive old audit reports
3. archive-tasks.md       → Archive completed tasks
4. archive-guidelines.md  → Archive deprecated guidelines
```

**Rationale:**
- Prompts first (may affect other archives)
- Reports second (referenced by tasks)
- Tasks third (referenced by guidelines)
- Guidelines last (parent document)

---

## Workflow

### Phase 1: Pre-Archive Scan

Before archiving anything:

1. Read all active files in:
   - `/prompts/*.md`
   - `/reports/*.md`
   - `/tasks/*.md`
   - `/guidelines/*.md`

2. Identify candidates for archiving:
   - **Prompts:** Marked as "Deprecated" or unused >90 days
   - **Reports:** Older than 30 days and superseded by newer audits
   - **Tasks:** 100% completed or marked "Archived"
   - **Guidelines:** Marked "Deprecated" or superseded by newer versions

3. Generate archive plan report:
   - `/reports/YYYY-MM-DD-archive-plan.md`
   - List what will be archived and why
   - Include preservation requirements

### Phase 2: Execute Archive Sub-Prompts

Run each sub-prompt in sequence:

```bash
1. Run: archive prompts
   → Move deprecated prompts to /prompts/archived/
   → Update prompt-triggers.md

2. Run: archive reports
   → Move old reports to /reports/archived/YYYY/MM/
   → Keep latest 30 days active

3. Run: archive tasks
   → Move completed tasks to /tasks/archived/YYYY/MM/
   → Update master-task-list.md

4. Run: archive guidelines
   → Move deprecated guidelines to /guidelines/archived/
   → Update Guidelines.md references
```

### Phase 3: Verify Archives

After all sub-prompts complete:

1. Check archive directories exist:
   - `/prompts/archived/`
   - `/reports/archived/YYYY/MM/`
   - `/tasks/archived/YYYY/MM/`
   - `/guidelines/archived/`

2. Verify active files are clean:
   - No deprecated prompts in `/prompts/`
   - Only recent reports in `/reports/`
   - Only active tasks in `/tasks/`
   - Only current guidelines in `/guidelines/`

3. Update documentation:
   - Update `/README.md` if needed
   - Update `/CHANGELOG.md` with archive actions
   - Update parent guideline documents

### Phase 4: Generate Archive Summary

Create summary report:

**File:** `/reports/YYYY-MM-DD-archive-summary.md`

```markdown
# Archive Summary — YYYY-MM-DD

**Executed:** YYYY-MM-DD HH:MM  
**Orchestrator:** archive-orchestrator.md v1.0.0

---

## Archives Created

### Prompts Archived
- Total archived: {number}
- Reason: Deprecated/unused
- Location: `/prompts/archived/`

Files:
- {filename} → Reason

### Reports Archived
- Total archived: {number}
- Older than: 30 days
- Location: `/reports/archived/YYYY/MM/`

Files:
- {filename} → Superseded by {newer-report}

### Tasks Archived
- Total archived: {number}
- Completion: 100%
- Location: `/tasks/archived/YYYY/MM/`

Files:
- {filename} → All tasks completed

### Guidelines Archived
- Total archived: {number}
- Reason: Deprecated/superseded
- Location: `/guidelines/archived/`

Files:
- {filename} → Superseded by {newer-guideline}

---

## Active Files Remaining

- Prompts: {number} active
- Reports: {number} active (last 30 days)
- Tasks: {number} active
- Guidelines: {number} active

---

## Next Steps

1. Review archived files are correctly categorized
2. Update prompt-triggers.md if prompts archived
3. Update Guidelines.md if guidelines archived
4. Update master task list if tasks archived

---

## Preservation Notes

All archived files preserved with:
- Original timestamps
- Version history
- Attribution
- Related file references
```

---

## Archive Directory Structure

### Prompts Archive
```
/prompts/
  archived/
    YYYY-MM-DD-{prompt-name}.md
    README.md (index of archived prompts)
```

### Reports Archive
```
/reports/
  archived/
    2026/
      03/
        YYYY-MM-DD-{audit-name}.md
    README.md (index of archived reports)
```

### Tasks Archive
```
/tasks/
  archived/
    2026/
      03/
        YYYY-MM-DD-{task-list}.md
    README.md (index of archived tasks)
```

### Guidelines Archive
```
/guidelines/
  archived/
    YYYY-MM-DD-{guideline-name}.md
    README.md (index of archived guidelines)
```

---

## Archive Criteria

### Prompts
Archive if:
- Status marked "Deprecated"
- Unused for >90 days
- Superseded by newer prompt
- One-off prompt (task completed)

Keep if:
- Status "Active"
- Used within 90 days
- Referenced by orchestrator
- Part of core audit suite

### Reports
Archive if:
- Older than 30 days
- Superseded by newer audit
- One-off analysis

Keep if:
- Generated within 30 days
- Latest version of audit type
- Referenced by active tasks

### Tasks
Archive if:
- 100% completed
- Superseded by new task list
- One-off task (completed)

Keep if:
- Any incomplete tasks
- Active project work
- Referenced by current sprint

### Guidelines
Archive if:
- Status marked "Deprecated"
- Superseded by newer version
- Content merged into parent

Keep if:
- Status "Active"
- Referenced by prompts
- Part of core standards

---

## Preservation Requirements

All archived files MUST preserve:

1. **Original metadata:**
   - Creation date
   - Last updated date
   - Version number
   - Author/attribution

2. **Content integrity:**
   - Full original text
   - Code examples
   - References
   - Version history

3. **Context:**
   - Why archived
   - Superseded by what
   - Related files
   - Archive date

4. **Accessibility:**
   - README.md in each archive directory
   - Index of archived files
   - Search/find instructions
   - Restoration process

---

## Success Criteria

✅ **Archive Complete When:**

- All sub-prompts executed successfully
- Archive directories created with proper structure
- Archived files moved to correct locations
- Active directories contain only current files
- Archive summary report generated
- Documentation updated
- No broken references

---

## Safety Rules

### Never Archive:
- `/guidelines/Guidelines.md` (master)
- `/prompts/orchestrator.md` (master)
- `/prompts/prompt-triggers.md` (registry)
- Active prompts referenced by orchestrators
- Current sprint task lists
- Reports from last 30 days
- Core active guidelines

### Always Preserve:
- Version history
- Attribution
- Original timestamps
- Related file references
- Archive reason/context

### Before Archiving:
- Scan for references in active files
- Check if superseding version exists
- Verify completion status
- Confirm archive criteria met

---

## Rollback Process

If archive was incorrect:

1. **Locate archived file:**
   - Check archive directory
   - Find by date or name

2. **Restore to active:**
   - Move back to active directory
   - Update status if needed
   - Restore references

3. **Update documentation:**
   - Update trigger registry
   - Update parent documents
   - Note restoration in changelog

4. **Verify restoration:**
   - Check file is accessible
   - Verify references work
   - Test trigger word if prompt

---

## Related Documentation

- **[archive-prompts.md](./archive-prompts.md)** — Archive unused prompts
- **[archive-reports.md](./archive-reports.md)** — Archive old reports
- **[archive-tasks.md](./archive-tasks.md)** — Archive completed tasks
- **[archive-guidelines.md](./archive-guidelines.md)** — Archive deprecated guidelines
- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards
- **[prompt-triggers.md](./prompt-triggers.md)** — Trigger word registry

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial archive orchestrator with 4-phase workflow |
