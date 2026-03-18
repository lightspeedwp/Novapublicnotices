# Update Prompts — Maintain Prompt File System

**Category:** Maintenance  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `update prompts`  
**Status:** Active  
**Parent:** update-orchestrator.md

---

## Purpose

Review all prompts in `/prompts/`, update metadata, sync with current guidelines, update orchestrator execution lists, and identify deprecated prompts.

---

## Actions

1. Scan all `/prompts/*.md` files
2. Verify prompt metadata (Category, Version, Trigger, Status, Parent)
3. Check prompt references to guidelines are current
4. Update orchestrator.md and other orchestrators with new prompts
5. Flag prompts marked "Deprecated" for archiving

---

## Checklist

### Prompt Metadata

For each prompt file, verify:

- [ ] **Category** is set (Audit/Maintenance/Orchestrator/Utility)
- [ ] **Version** follows semver (1.0.0)
- [ ] **Last Updated** is current date
- [ ] **Trigger Word** matches prompt-triggers.md
- [ ] **Status** is Active/Deprecated
- [ ] **Parent** references orchestrator if applicable

### Guideline References

- [ ] Scan for `[Guideline](path)` links
- [ ] Verify linked guidelines exist
- [ ] Check guideline sections referenced are current
- [ ] Update references if guidelines moved/renamed

### Orchestrator Sync

- [ ] Read all orchestrator files (orchestrator.md, archive-orchestrator.md, update-orchestrator.md, cleanup-orchestrator.md)
- [ ] Verify sub-prompts listed in orchestrators exist
- [ ] Add new prompts to appropriate orchestrator execution lists
- [ ] Update execution order if dependencies changed

### Deprecation Check

- [ ] Identify prompts marked Status: Deprecated
- [ ] Flag for archiving via archive-prompts.md
- [ ] Ensure replacement prompt exists if applicable
- [ ] Update trigger registry to point to new prompt

---

## Orchestrator Updates

### orchestrator.md (Main Audit)

Update sub-audits list (lines 308-367) with new audit prompts:

```markdown
### Required Sub-Audits

1. **Locale Architecture** → `/prompts/audit-locale.md`
2. **Data Model** → `/prompts/audit-data.md`
3. **{New Audit}** → `/prompts/audit-{new}.md`
```

### archive-orchestrator.md

Update sub-prompts list with new archive-* prompts:

```markdown
### Sub-Prompts Executed

1. **Archive Prompts** → `/prompts/archive-prompts.md`
2. **{New Archive}** → `/prompts/archive-{new}.md`
```

### update-orchestrator.md

Update sub-prompts list with new update-* prompts:

```markdown
### Sub-Prompts Executed

1. **Update Data** → `/prompts/update-data.md`
2. **{New Update}** → `/prompts/update-{new}.md`
```

### cleanup-orchestrator.md

Update sub-prompts list with new cleanup-* prompts (when created).

---

## Report Format

Generate: `/reports/YYYY-MM-DD-prompts-update.md`

```markdown
# Prompts Update — YYYY-MM-DD

## Summary

- Total prompts: {number}
- Active prompts: {number}
- Deprecated prompts: {number}
- Prompts updated: {number}
- New prompts added: {number}

## Prompts Inventory

### Orchestrators
- orchestrator.md (Main audit)
- archive-orchestrator.md
- update-orchestrator.md
- cleanup-orchestrator.md

### Audit Prompts
- audit-locale.md
- audit-data.md
- {list all audit-*.md}

### Maintenance Prompts
- cleanup.md
- migrate-icons.md
- {list all maintenance prompts}

### Archive Prompts
- archive-prompts.md
- archive-reports.md
- {list all archive-*.md}

### Utility Prompts
- status.md
- continue.md
- {list all utility prompts}

## Updates Made

- Updated metadata in {prompt-name}.md
- Fixed guideline reference in {prompt-name}.md
- Added {new-prompt}.md to {orchestrator}.md

## Deprecated Prompts

- {prompt-name}.md → Replaced by {new-prompt}.md
- Flag for archiving

## Next Steps

1. Run update-triggers.md to sync trigger registry
2. Archive deprecated prompts
3. Test all trigger words
```

---

## Success Criteria

✅ All prompt metadata current  
✅ Guideline references valid  
✅ Orchestrators list all sub-prompts  
✅ Deprecated prompts flagged  
✅ Report generated

---

## Related Documentation

- **[update-triggers.md](./update-triggers.md)** — Next: Update trigger registry
- **[archive-prompts.md](./archive-prompts.md)** — Archive deprecated prompts
- **[update-orchestrator.md](./update-orchestrator.md)** — Parent prompt

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial prompts sync prompt |
