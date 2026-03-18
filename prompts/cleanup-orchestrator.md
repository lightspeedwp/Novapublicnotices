# Cleanup Orchestrator — Master Cleanup Prompt

**Category:** Orchestrator  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `cleanup`  
**Status:** Active

---

## Purpose

Run all cleanup-* prompts in sequence to enforce project standards, remove code violations, and maintain a clean, compliant codebase.

---

## Overview

This orchestrator executes all cleanup sub-prompts to ensure the codebase adheres to Guidelines.md standards. It combines archiving old files with enforcing code quality rules.

---

## Execution Order

```
1. archive-orchestrator.md   → Archive old/deprecated files FIRST
2. cleanup.md                → Enforce project standards
3. update-data.md            → Migrate hard-coded content to data files
4. audit-styling.md          → Check for inline styles and violations
5. audit-tokens.md           → Verify CSS variable usage
6. audit-data.md             → Verify data file compliance
7. update-status.md          → Generate cleanup summary LAST
```

**Rationale:**
- Archive first (clear out old files before checking standards)
- Cleanup general violations second
- Migrate content to data third
- Run targeted audits fourth
- Generate status summary last

---

## Workflow

### Phase 1: Pre-Cleanup Archive

**Run:** `archive` (archive-orchestrator.md)

Actions:
- Archive deprecated prompts
- Archive old reports (>30 days)
- Archive completed tasks
- Archive deprecated guidelines
- Ensure active directories contain only current files

**Why first:**
- Removes clutter before checking compliance
- Prevents checking archived files
- Starts with clean slate

### Phase 2: General Cleanup

**Run:** `cleanup.md`

Actions:
- Check root directory for unauthorized files
- Verify file organization
- Check for oversized files
- Basic accessibility checks
- Basic performance checks

### Phase 3: Content Migration

**Run:** `update data` (update-data.md)

Actions:
- Scan all templates for hard-coded content
- Create data files with bilingual pairs
- Update components to use data imports
- Verify TypeScript types

**Why after general cleanup:**
- Operates on clean file structure
- Creates new data files (needs organized /data/ directory)
- Major refactoring step

### Phase 4: Styling Compliance

**Run:** `audit styling` (audit-styling.md)

Actions:
- Check for inline styles
- Check for hard-coded colors/spacing/fonts
- Verify semantic class usage
- Check margin usage (should use gap/padding)

**Run:** `audit tokens` (audit-tokens.md)

Actions:
- Verify all colors from CSS variables
- Verify all typography from defined font faces
- Check spacing tokens usage
- Verify border/radius/shadow tokens

**Why after content migration:**
- Data migration may update component code
- Check styling after all content changes

### Phase 5: Data Architecture

**Run:** `audit data` (audit-data.md)

Actions:
- Verify all data files have EN/AF pairs
- Check TypeScript types
- Verify notice category schemas
- Check field definitions

**Why after content migration:**
- Verifies data files created in Phase 3
- Ensures bilingual completeness

### Phase 6: Generate Cleanup Summary

**Run:** `update status` (update-status.md)

Actions:
- Run all compliance checks
- Calculate metrics
- Identify remaining issues
- Generate status dashboard

**Why last:**
- Aggregates results from all cleanup actions
- Shows before/after metrics
- Identifies remaining work

---

## Report Format

Generate: `/reports/YYYY-MM-DD-cleanup-summary.md`

```markdown
# Cleanup Summary — YYYY-MM-DD

**Executed:** YYYY-MM-DD HH:MM  
**Orchestrator:** cleanup-orchestrator.md v1.0.0

---

## Executive Summary

Cleanup orchestrator executed {number} sub-prompts, archived {number} old files, fixed {number} violations, and migrated {number} files to data architecture.

---

## Phase Results

### Phase 1: Archive (Completed)

- Prompts archived: {number}
- Reports archived: {number}
- Tasks archived: {number}
- Guidelines archived: {number}

### Phase 2: General Cleanup (Completed)

- Root files moved: {number}
- File organization issues fixed: {number}
- Oversized files identified: {number}

### Phase 3: Content Migration (Completed)

- Hard-coded content instances found: {number}
- Data files created: {number}
- Bilingual pairs created: {number}
- Components updated: {number}

### Phase 4: Styling Compliance (Completed)

- Inline styles removed: {number}
- Hard-coded colors replaced: {number}
- CSS variable usage: {percent}%
- Font face compliance: {percent}%

### Phase 5: Data Architecture (Completed)

- Data files checked: {number}
- Bilingual pairs complete: {percent}%
- TypeScript types valid: {percent}%
- Category schemas valid: {percent}%

---

## Compliance Metrics

### Before Cleanup

- Inline styles: {number}
- Hard-coded content: {number}
- Missing bilingual pairs: {number}
- Guidelines compliance: {percent}%

### After Cleanup

- Inline styles: {number} (↓ {number})
- Hard-coded content: {number} (↓ {number})
- Missing bilingual pairs: {number} (↓ {number})
- Guidelines compliance: {percent}% (↑ {percent}%)

---

## Remaining Issues

### Critical

- {Issue requiring immediate attention}

### High Priority

- {Issue to fix this sprint}

### Medium Priority

- {Issue to fix next sprint}

---

## Next Steps

1. Review remaining critical issues
2. Fix high-priority violations
3. Run cleanup orchestrator again to verify
4. Update CHANGELOG.md

---

## Related Prompts

- **[archive-orchestrator.md](./archive-orchestrator.md)** — Phase 1
- **[cleanup.md](./cleanup.md)** — Phase 2
- **[update-data.md](./update-data.md)** — Phase 3
- **[audit-styling.md](./audit-styling.md)** — Phase 4
- **[update-status.md](./update-status.md)** — Phase 6
```

---

## Success Criteria

✅ **Cleanup Complete When:**

- Archive orchestrator completed successfully
- All root directory violations resolved
- All hard-coded content migrated to data files
- All inline styles removed
- All CSS variables used correctly
- All data files have bilingual pairs
- Guidelines compliance >90%
- Cleanup summary generated
- Remaining issues documented

---

## Usage

**Trigger:** `cleanup`

**When to run:**

- Before major milestones
- Before deployment
- Weekly maintenance
- After adding significant features
- When codebase feels messy

**Frequency:**

- Minimum: Weekly
- Recommended: Before each deployment
- As needed: When standards drift

---

## Safety Notes

This orchestrator makes significant changes:

- Archives old files (moves, doesn't delete)
- Migrates content to new data files
- Refactors components to use data
- Replaces inline styles with classes

**Always:**
- Review archive plan before confirming
- Check data migration results
- Test after cleanup
- Verify bilingual switching still works
- Check all routes still load

**Never:**
- Run cleanup on uncommitted changes
- Skip testing after cleanup
- Archive files without reading archive plan
- Ignore critical violations in summary

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Standards being enforced
- **[archive-orchestrator.md](./archive-orchestrator.md)** — Archiving workflow
- **[update-orchestrator.md](./update-orchestrator.md)** — Updating workflow
- **[orchestrator.md](./orchestrator.md)** — Main audit workflow

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial cleanup orchestrator with 6-phase workflow |
