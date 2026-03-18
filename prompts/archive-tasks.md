# Archive Tasks — Nova Public Notices Portal

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `archive tasks`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Review all task files in `/tasks/`, move completed tasks to archive, update active task lists, and maintain a clean task tracking system.

**When to Use:** End of sprint, after major milestones, or when task lists become cluttered with completed items.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Section 5 (Required root-level folders)
- `/guidelines/Guidelines.md` — Section 17.2 (Tasks structure)

---

## Workflow Steps

### Step 1: Scan All Task Files

Read all files in `/tasks/` directory:

1. List all `.md` files in `/tasks/`
2. For each file, extract:
   - File name
   - Total tasks
   - Completed tasks `[x]`
   - Open tasks `[ ]`
   - Task categories (Critical / High / Medium / Low)
   - Last updated date

### Step 2: Categorize Task Lists

Sort task lists into categories:

**Category A: Active Task Lists**
- Master task list with open items
- Current sprint tasks
- Ongoing work tracking
- Keep in main `/tasks/` directory

**Category B: Completed Task Lists**
- All tasks marked `[x]`
- No remaining work
- Milestone achieved
- Move to archive

**Category C: Partially Complete**
- Mix of `[x]` and `[ ]`
- Archive completed items
- Keep open items in active list
- Requires splitting

**Category D: Deprecated**
- Outdated task lists
- Superseded by newer lists
- No longer relevant
- Move to archive with note

### Step 3: Process Partially Complete Lists

For **Category C** task lists:

1. **Create new active list with only open tasks:**
   ```markdown
   # Active Tasks — {Topic}
   
   **Created:** YYYY-MM-DD  
   **Status:** Active  
   **Previous:** See /tasks/archive/{old-list}
   
   ## Open Tasks
   
   - [ ] Remaining task 1
   - [ ] Remaining task 2
   ```

2. **Archive original list with all tasks:**
   ```markdown
   # Completed Tasks — {Topic}
   
   **Created:** YYYY-MM-DD  
   **Archived:** YYYY-MM-DD  
   **Completion:** {N}% complete ({completed}/{total})  
   **Superseded By:** /tasks/{new-active-list}
   
   ## Completed
   - [x] Task 1 — Completed YYYY-MM-DD
   - [x] Task 2 — Completed YYYY-MM-DD
   
   ## Remaining (Moved to Active List)
   - [ ] Task 3 — See /tasks/{new-active-list}
   ```

### Step 4: Create Archive Structure

Create archive directories by year and quarter:

```
/tasks/
  archive/
    README.md              # Archive index
    2026/
      Q1/                 # January - March
        sprint-1-tasks.md
        bem-tasks.md
      Q2/                 # April - June
        sprint-2-tasks.md
      Q3/                 # July - September
      Q4/                 # October - December
```

### Step 5: Archive Completed Tasks

For each **Category B** and **Category D** task list:

1. **Add archive metadata:**
   ```markdown
   ---
   **Archived:** YYYY-MM-DD  
   **Completion:** 100% ({total}/{total} tasks)  
   **Milestone:** {Name of completed milestone}  
   **Duration:** {Start date} to {End date}  
   **Original Location:** `/tasks/{filename}.md`
   ---
   ```

2. **Move to archive:**
   ```
   /tasks/archive/{YYYY}/Q{N}/{filename}.md
   ```

3. **Update timestamps:**
   - Add completion dates to all `[x]` tasks if not present
   - Format: `[x] Task name — Completed YYYY-MM-DD`

### Step 6: Update Master Task List

Update `/tasks/task-list.md` (or `/tasks/master-task-list.md`):

1. **Remove completed tasks** that have been archived
2. **Consolidate related tasks** from multiple lists
3. **Re-prioritize** remaining tasks
4. **Add completion metrics:**

```markdown
# Master Task List — Nova Public Notices Portal

**Last Updated:** YYYY-MM-DD  
**Status:** Active

---

## Completion Metrics

- Total tasks tracked (all time): {N}
- Completed tasks: {N} ({%}%)
- Open tasks: {N}
- Critical open: {N}
- High priority open: {N}

---

## Critical Tasks (P1)

- [ ] Task 1
- [ ] Task 2

## High Priority (P2)

- [ ] Task 3
- [ ] Task 4

## Medium Priority (P3)

- [ ] Task 5

## Low Priority (P4)

- [ ] Task 6

---

## Recently Completed (Last archived YYYY-MM-DD)

- [x] BEM implementation 100% — Completed 2026-03-16
- [x] CSS variables migration — Completed 2026-03-17
- [x] Breadcrumb system — Completed 2026-03-17

**Archived to:** `/tasks/archive/2026/Q1/`

---

## Related Task Lists

- **Active Lists:**
  - `/tasks/current-sprint-tasks.md`
  - `/tasks/design-system-tasks.md`

- **Archived Lists:**
  - `/tasks/archive/2026/Q1/bem-tasks.md` — 100% complete
  - `/tasks/archive/2026/Q1/css-migration-tasks.md` — 100% complete
```

### Step 7: Update Archive Index

Update `/tasks/archive/README.md`:

```markdown
# Task Archive — Nova Public Notices Portal

Last Updated: YYYY-MM-DD

---

## Archive Purpose

Completed task lists organized by year and quarter. Archive maintains historical record of work completed and milestones achieved.

---

## 2026 Task Archives

### Q1 (January - March)

| Task List | Completion | Duration | Key Milestone |
|-----------|------------|----------|---------------|
| bem-tasks.md | 100% (45/45) | 2026-03-10 to 2026-03-17 | BEM implementation complete |
| css-migration-tasks.md | 100% (32/32) | 2026-03-12 to 2026-03-18 | CSS variables fully migrated |
| breadcrumb-tasks.md | 100% (12/12) | 2026-03-15 to 2026-03-17 | Breadcrumb system complete |

**Quarter Summary:**
- Total tasks: {N}
- Completion rate: 100%
- Key achievements: BEM, CSS variables, breadcrumbs

### Q2 (April - June)

{Future quarters}

---

## Completion Statistics

**All Time:**
- Total tasks completed: {N}
- Total sprints: {N}
- Average tasks per sprint: {N}
- Average completion rate: {%}%

**By Category:**
- Critical tasks completed: {N}
- High priority completed: {N}
- Medium priority completed: {N}
- Low priority completed: {N}

---

## Major Milestones Achieved

### 2026

**Q1:**
- ✅ BEM implementation 100% complete
- ✅ CSS variables migration complete
- ✅ Breadcrumb system implemented
- ✅ Accessibility compliance achieved
- ✅ Bilingual architecture established

---

## Related Documentation

- **[task-list.md](../task-list.md)** — Current active tasks
- **[Guidelines.md](../../guidelines/Guidelines.md)** — Project standards
```

### Step 8: Generate Archive Report

Save report to `/reports/YYYY-MM-DD-task-archive.md`:

```markdown
# Task Archive Operation

**Date:** YYYY-MM-DD  
**Operation:** archive tasks  
**Status:** Complete

---

## Executive Summary

Reviewed {N} task lists. Kept {N} active lists with {N} open tasks, archived {N} completed lists with {N} finished tasks.

---

## Tasks Archived

| Task List | Completion | Archived To | Duration |
|-----------|------------|-------------|----------|
| bem-tasks.md | 100% (45/45) | /tasks/archive/2026/Q1/ | 7 days |
| css-migration-tasks.md | 100% (32/32) | /tasks/archive/2026/Q1/ | 6 days |
| ... | ... | ... | ... |

---

## Active Task Lists

| Task List | Open Tasks | Progress | Priority |
|-----------|------------|----------|----------|
| master-task-list.md | 12 | 75% | Mixed |
| design-system-tasks.md | 5 | 85% | High |
| ... | ... | ... | ... |

---

## Completion Metrics

**This Archive Period:**
- Tasks completed: {N}
- Task lists archived: {N}
- Average completion time: {N} days
- Critical tasks completed: {N}

**Cumulative:**
- All-time tasks completed: {N}
- All-time completion rate: {%}%
- Total sprints tracked: {N}

---

## Major Milestones This Period

1. **BEM Implementation** — 45 tasks, 100% complete
2. **CSS Variables Migration** — 32 tasks, 100% complete
3. **Breadcrumb System** — 12 tasks, 100% complete

---

## Open Tasks Remaining

**Critical (P1):** {N} tasks  
**High (P2):** {N} tasks  
**Medium (P3):** {N} tasks  
**Low (P4):** {N} tasks

**Next Priority:**
1. {Next critical task}
2. {Next high priority task}

---

## Archive Statistics

- Task lists reviewed: {N}
- Active lists: {N}
- Archived lists: {N}
- Archive location: /tasks/archive/2026/Q1/

---

## Archive Index Updated

- ✅ `/tasks/archive/README.md` updated
- ✅ All archived tasks have completion dates
- ✅ Archive organized by YYYY/Q{N}
- ✅ Master task list updated

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Task tracking standards
- **[master-task-list.md](../tasks/task-list.md)** — Current active tasks

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | YYYY-MM-DD | Initial task archive operation |
```

---

## Archive Criteria

### Archive if:
- ✅ Task list is 100% complete
- ✅ Milestone achieved
- ✅ All tasks marked `[x]`
- ✅ Sprint/phase completed
- ✅ Superseded by newer task list

### Keep if:
- ❌ Has open tasks `[ ]`
- ❌ Active sprint/milestone
- ❌ Referenced by active work
- ❌ Is the master task list
- ❌ Updated within last 30 days

### Split if:
- ⚠️ Mix of completed and open tasks
- Archive completed items
- Create new list with open items

---

## Task Completion Best Practices

**Mark completion dates:**
```markdown
✅ Good:
- [x] Implement BEM for home page — Completed 2026-03-16

❌ Bad:
- [x] Implement BEM for home page
```

**Link to related documentation:**
```markdown
- [x] Create accessibility guideline — Completed 2026-03-15 — See `/guidelines/design-tokens/accessibility.md`
```

**Note blockers if incomplete:**
```markdown
- [ ] Implement dark mode — Blocked: Waiting for design approval
```

---

## Success Criteria

- [ ] All task lists in `/tasks/` reviewed
- [ ] Completed task lists archived to `/tasks/archive/YYYY/Q{N}/`
- [ ] Archive directories created
- [ ] Archive index updated
- [ ] Master task list updated (completed items removed)
- [ ] All archived tasks have completion dates
- [ ] Partially complete lists split appropriately
- [ ] Archive operation report generated
- [ ] Completion metrics calculated

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards
- **[process-reports.md](./process-reports.md)** — Report processing
- **[archive-prompts.md](./archive-prompts.md)** — Archive prompts
- **[archive-reports.md](./archive-reports.md)** — Archive reports

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial archive tasks for Nova Public Notices Portal |
