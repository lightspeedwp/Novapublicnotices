# Update Guidelines — Sync Project Standards Documentation

**Category:** Maintenance  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `update guidelines`  
**Status:** Active  
**Parent:** update-orchestrator.md

---

## Purpose

Review and update all guidelines in `/guidelines/`, ensuring table of contents is current, version numbers synced, cross-references valid, and no documentation gaps exist.

---

## Actions

1. Scan all `/guidelines/*.md` files
2. Update Guidelines.md table of contents (Section 21)
3. Sync version numbers across guideline files
4. Validate all cross-references and links
5. Identify and flag documentation gaps
6. Update parent-child relationships

---

## Checklist

### Table of Contents

- [ ] Read Guidelines.md Section 21
- [ ] Scan `/guidelines/` directory for all .md files
- [ ] Verify all guidelines listed in Section 21
- [ ] Add missing guidelines to table of contents
- [ ] Update descriptions if changed

### Version Synchronization

- [ ] Check each guideline frontmatter for version number
- [ ] Verify "Last Updated" dates are current
- [ ] Update version history tables
- [ ] Flag guidelines needing version bumps

### Cross-References

- [ ] Scan for internal links `[text](path.md)`
- [ ] Verify linked files exist
- [ ] Check anchor links to sections
- [ ] Update broken references
- [ ] Ensure bidirectional linking (parent ↔ child)

### Documentation Gaps

Identify missing guidelines for:
- [ ] New features added to codebase
- [ ] Standards mentioned in prompts but undocumented
- [ ] Design tokens without guideline coverage
- [ ] Workflows without documented process

---

## Guidelines.md Section 21 Format

```markdown
## 21) Guidelines and Prompts Structure

### Created Guidelines

* **[guideline-name.md](./guideline-name.md)** — Brief description
* **[data-model.md](./data-model.md)** — Notice data structure and taxonomies
* **[design-tokens/](./design-tokens/)** — Complete design token system
  * [colors.md](./design-tokens/colors.md) — Brand and semantic colors
  * [typography.md](./design-tokens/typography.md) — Fonts and scales
  
### Created Prompts

**Master Orchestrator:**
* **[orchestrator.md](../prompts/orchestrator.md)** — Master audit coordinator

**Audit Prompts:**
* **[audit-locale.md](../prompts/audit-locale.md)** — Bilingual architecture audit
* **[audit-data.md](../prompts/audit-data.md)** — Data model audit
```

---

## Report Format

Generate: `/reports/YYYY-MM-DD-guidelines-update.md`

```markdown
# Guidelines Update — YYYY-MM-DD

## Summary

- Total guidelines: {number}
- Guidelines updated: {number}
- Broken references fixed: {number}
- Documentation gaps: {number}

## Guidelines Inventory

### Active Guidelines
- Guidelines.md (master)
- locale-architecture.md
- data-model.md
- design-tokens/ (14 files)

### Updates Made
- Updated table of contents in Guidelines.md
- Fixed cross-references in {guideline}
- Synced version numbers

### Documentation Gaps Identified
- Missing guideline for {feature}
- Need guideline for {workflow}

## Next Steps
1. Create missing guidelines
2. Update prompt references
3. Sync with current codebase
```

---

## Success Criteria

✅ Table of contents current  
✅ All cross-references valid  
✅ Version numbers synced  
✅ Documentation gaps identified  
✅ Parent-child links bidirectional

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Master guideline
- **[update-prompts.md](./update-prompts.md)** — Next: Update prompts
- **[update-orchestrator.md](./update-orchestrator.md)** — Parent prompt

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial guidelines sync prompt |
