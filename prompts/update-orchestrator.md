# Update Orchestrator — Master Update Prompt

**Category:** Orchestrator  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `update`  
**Status:** Active

---

## Purpose

Run all update-* prompts in sequence to ensure routes, sitemaps, guidelines, prompts, reports, tasks, status, data files, and trigger registry are synchronized and current.

---

## Overview

This orchestrator executes all update sub-prompts to maintain project consistency. It keeps documentation, routing, data architecture, and tooling in sync with the current codebase state.

---

## Sub-Prompts Executed

### 1. Update Routes
**File:** `/prompts/update-routes.md`  
**Trigger:** `update routes`

Audits React Router configuration and:
- Verifies all routes in `/src/app/routes.tsx`
- Checks bilingual route pairs (EN/AF)
- Updates route documentation
- Identifies orphaned routes
- Adds missing routes

### 2. Update Sitemap
**File:** `/prompts/update-sitemap.md`  
**Trigger:** `update sitemap`

Generates current sitemap and:
- Scans all active routes
- Creates `/docs/sitemap.md`
- Includes bilingual equivalents
- Documents access requirements
- Updates route hierarchy

### 3. Update Guidelines
**File:** `/prompts/update-guidelines.md`  
**Trigger:** `update guidelines`

Reviews and updates project standards:
- Scans `/guidelines/*.md`
- Updates Guidelines.md table of contents
- Syncs version numbers
- Updates cross-references
- Identifies gaps in documentation

### 4. Update Prompts
**File:** `/prompts/update-prompts.md`  
**Trigger:** `update prompts`

Maintains prompt file system:
- Reviews all prompts in `/prompts/`
- Updates prompt metadata
- Syncs with current guidelines
- Updates orchestrator execution lists
- Identifies deprecated prompts

### 5. Update Reports
**File:** `/prompts/update-reports.md`  
**Trigger:** `update reports`

Organizes audit reports:
- Reviews all reports in `/reports/`
- Updates report index
- Identifies superseded reports
- Suggests archiving candidates
- Creates report summary

### 6. Update Tasks
**File:** `/prompts/update-tasks.md`  
**Trigger:** `update tasks`

Synchronizes task tracking:
- Reviews all task lists in `/tasks/`
- Updates master task list
- Marks completed tasks
- Removes duplicates
- Prioritizes active tasks

### 7. Update Status
**File:** `/prompts/update-status.md`  
**Trigger:** `update status`

Generates project health dashboard:
- Runs compliance checks
- Calculates metrics
- Identifies blockers
- Updates status report
- Recommends next actions

### 8. Update Data
**File:** `/prompts/update-data.md`  
**Trigger:** `update data`

Migrates content to data files:
- Scans all templates/pages
- Finds hard-coded content
- Migrates to data files
- Ensures bilingual pairs
- Updates component imports

### 9. Update Triggers
**File:** `/prompts/update-triggers.md`  
**Trigger:** `update triggers`

Maintains trigger registry:
- Scans all prompts for trigger words
- Updates `/prompts/prompt-triggers.md`
- Checks for circular references
- Validates orchestrator chains
- Documents new triggers

---

## Execution Order

```
1. update-data.md       → Migrate content to data files FIRST
2. update-routes.md     → Sync route configuration
3. update-sitemap.md    → Generate current sitemap from routes
4. update-guidelines.md → Update project standards documentation
5. update-prompts.md    → Sync prompts with guidelines
6. update-triggers.md   → Update trigger registry from prompts
7. update-reports.md    → Organize audit reports
8. update-tasks.md      → Sync task lists from reports
9. update-status.md     → Generate final project status LAST
```

**Rationale:**
- Data first (foundation for everything)
- Routes second (defines app structure)
- Sitemap from routes (route dependency)
- Guidelines before prompts (prompts reference guidelines)
- Triggers after prompts (depends on prompt files)
- Reports before tasks (tasks generated from reports)
- Status last (aggregates all other updates)

---

## Workflow

### Phase 1: Pre-Update Scan

Before running updates:

1. **Read current state:**
   - All routes in `/src/app/routes.tsx`
   - All guidelines in `/guidelines/*.md`
   - All prompts in `/prompts/*.md`
   - All reports in `/reports/*.md`
   - All tasks in `/tasks/*.md`
   - All data files in `/src/app/data/**/*.ts`

2. **Identify update needs:**
   - Missing routes
   - Outdated documentation
   - Hard-coded content
   - Orphaned files
   - Broken references

3. **Generate update plan:**
   - `/reports/YYYY-MM-DD-update-plan.md`
   - List what will be updated
   - Document dependencies
   - Estimate impact

### Phase 2: Execute Update Sub-Prompts

Run each sub-prompt in dependency order:

```bash
1. Run: update data
   → Scan templates for hard-coded content
   → Migrate to data files
   → Ensure bilingual pairs

2. Run: update routes
   → Verify React Router config
   → Check EN/AF route pairs
   → Document route structure

3. Run: update sitemap
   → Generate from current routes
   → Include bilingual variants
   → Document access levels

4. Run: update guidelines
   → Review all guidelines
   → Update table of contents
   → Sync cross-references

5. Run: update prompts
   → Review all prompt files
   → Sync with guidelines
   → Update orchestrators

6. Run: update triggers
   → Scan prompts for triggers
   → Update registry
   → Check circular refs

7. Run: update reports
   → Review audit reports
   → Create report index
   → Identify archiving needs

8. Run: update tasks
   → Review task lists
   → Update master list
   → Mark completed

9. Run: update status
   → Run compliance checks
   → Generate metrics
   → Create status dashboard
```

### Phase 3: Verify Updates

After all sub-prompts complete:

1. **Check consistency:**
   - Routes match sitemap
   - Prompts match trigger registry
   - Tasks match reports
   - Guidelines referenced correctly

2. **Verify completeness:**
   - All routes documented
   - All prompts have triggers
   - All data is dynamic
   - All cross-references valid

3. **Test functionality:**
   - All routes load
   - All prompts execute
   - All data files import
   - All bilingual pairs work

### Phase 4: Generate Update Summary

Create summary report:

**File:** `/reports/YYYY-MM-DD-update-summary.md`

```markdown
# Update Summary — YYYY-MM-DD

**Executed:** YYYY-MM-DD HH:MM  
**Orchestrator:** update-orchestrator.md v1.0.0

---

## Updates Completed

### Data Files Updated
- Content migrated: {number} files
- Data files created: {number}
- Bilingual pairs: {number}

### Routes Updated
- Routes verified: {number}
- Routes added: {number}
- Bilingual pairs: {number}

### Documentation Updated
- Guidelines updated: {number}
- Prompts synced: {number}
- Reports organized: {number}
- Tasks updated: {number}

### Trigger Registry Updated
- Total triggers: {number}
- New triggers: {number}
- Circular refs: {number}

---

## Issues Resolved

### Hard-Coded Content
- Files affected: {list}
- Content migrated to data files
- Components updated to use data

### Missing Routes
- Routes added: {list}
- Bilingual pairs created
- Documentation updated

### Outdated Documentation
- Guidelines updated: {list}
- Cross-references fixed
- Version numbers synced

---

## Current Project State

**Routes:**
- Total routes: {number}
- Bilingual pairs: {number}
- Public routes: {number}
- Protected routes: {number}

**Data Architecture:**
- Data files: {number}
- Bilingual pairs: {number}
- Categories: {number}
- Total notices: {number}

**Documentation:**
- Guidelines: {number} active
- Prompts: {number} active
- Reports: {number} (last 30 days)
- Tasks: {number} active

**Compliance:**
- No inline styles: ✅/❌
- All content dynamic: ✅/❌
- Bilingual complete: ✅/❌
- Routes documented: ✅/❌

---

## Next Steps

1. Review update summary
2. Test all updated routes
3. Verify bilingual switching
4. Run full audit suite
5. Update CHANGELOG.md

---

## Related Updates

- **[update-data.md](../prompts/update-data.md)** — Content migration
- **[update-routes.md](../prompts/update-routes.md)** — Route sync
- **[update-sitemap.md](../prompts/update-sitemap.md)** — Sitemap generation
- **[update-status.md](../prompts/update-status.md)** — Project status
```

---

## Update Sub-Prompt Details

### Update Data (`update-data.md`)

**Purpose:** Migrate all hard-coded content to data files

**Actions:**
1. Scan all `.tsx` files in `/src/app/pages/` and `/src/app/components/`
2. Identify hard-coded strings (excluding semantic class names)
3. Create data files in `/src/app/data/` with bilingual pairs
4. Update components to import and use data
5. Verify TypeScript types

**Success Criteria:**
- Zero hard-coded content strings in templates
- All data files have EN/AF pairs
- All components use data imports
- TypeScript compilation passes

### Update Routes (`update-routes.md`)

**Purpose:** Synchronize React Router configuration

**Actions:**
1. Read `/src/app/routes.tsx`
2. Verify all routes have bilingual equivalents
3. Check route component imports
4. Document route hierarchy
5. Update route documentation

**Success Criteria:**
- All routes have EN/AF variants
- All routes load correctly
- Route documentation current
- No orphaned route components

### Update Sitemap (`update-sitemap.md`)

**Purpose:** Generate current application sitemap

**Actions:**
1. Extract all routes from routes.tsx
2. Map EN/AF route pairs
3. Document access requirements
4. Create visual hierarchy
5. Save to `/docs/sitemap.md`

**Success Criteria:**
- Sitemap reflects current routes
- Bilingual equivalents documented
- Access levels shown
- Route hierarchy clear

### Update Guidelines (`update-guidelines.md`)

**Purpose:** Keep project standards documentation current

**Actions:**
1. Review all `/guidelines/*.md` files
2. Update table of contents in Guidelines.md
3. Sync version numbers
4. Fix cross-references
5. Identify documentation gaps

**Success Criteria:**
- Table of contents complete
- Cross-references valid
- Version numbers current
- No orphaned guidelines

### Update Prompts (`update-prompts.md`)

**Purpose:** Maintain prompt file system

**Actions:**
1. Review all `/prompts/*.md` files
2. Update prompt metadata
3. Sync with current guidelines
4. Update orchestrator execution lists
5. Identify deprecated prompts

**Success Criteria:**
- All prompts reference current guidelines
- Orchestrators list current prompts
- Metadata is accurate
- Deprecated prompts flagged

### Update Triggers (`update-triggers.md`)

**Purpose:** Maintain trigger word registry

**Actions:**
1. Scan all prompts for trigger words
2. Update `/prompts/prompt-triggers.md`
3. Check for circular references
4. Validate orchestrator chains
5. Document new triggers

**Success Criteria:**
- All prompts have registered triggers
- No circular references
- Orchestrator chains valid
- Trigger registry complete

### Update Reports (`update-reports.md`)

**Purpose:** Organize and index audit reports

**Actions:**
1. Review all `/reports/*.md` files
2. Create report index
3. Identify superseded reports
4. Suggest archiving candidates
5. Update report summary

**Success Criteria:**
- Report index current
- Superseded reports identified
- Archive candidates flagged
- Report summary accurate

### Update Tasks (`update-tasks.md`)

**Purpose:** Synchronize task tracking

**Actions:**
1. Review all `/tasks/*.md` files
2. Update master task list
3. Mark completed tasks
4. Remove duplicates
5. Prioritize active tasks

**Success Criteria:**
- Master task list current
- Completed tasks marked
- No duplicate tasks
- Priorities accurate

### Update Status (`update-status.md`)

**Purpose:** Generate project health dashboard

**Actions:**
1. Run compliance checks
2. Calculate metrics
3. Identify blockers
4. Create status dashboard
5. Recommend next actions

**Success Criteria:**
- Compliance metrics current
- Blockers identified
- Next actions clear
- Status dashboard complete

---

## Success Criteria

✅ **Update Complete When:**

- All sub-prompts executed successfully
- Update summary report generated
- All consistency checks pass
- All functionality tests pass
- Documentation updated
- CHANGELOG.md updated
- No broken references
- No circular dependencies

---

## Safety Rules

### Always Backup Before:
- Modifying route configuration
- Migrating content to data files
- Updating Guidelines.md
- Batch-updating prompts

### Never Update Without:
- Reading current state first
- Checking dependencies
- Validating references
- Testing after changes

### Verify After Update:
- All routes load
- All imports resolve
- All data files parse
- All bilingual pairs work
- TypeScript compiles
- Tests pass

---

## Related Documentation

- **[update-data.md](./update-data.md)** — Content migration audit
- **[update-routes.md](./update-routes.md)** — Route synchronization
- **[update-sitemap.md](./update-sitemap.md)** — Sitemap generation
- **[update-triggers.md](./update-triggers.md)** — Trigger registry maintenance
- **[status.md](./status.md)** — Project status dashboard
- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial update orchestrator with 9-phase workflow |
