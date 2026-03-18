# Expand Triggers — Meta-Trigger Analysis

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand triggers`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Meta-analysis of the full trigger registry to identify gaps, overlaps, missing orchestrator coverage, and opportunities for new trigger words that would streamline workflows.

---

## Scope

Analyzes:
- Current trigger word coverage
- Gaps in trigger categories
- Orchestrator opportunities
- Circular references
- Naming consistency
- Documentation completeness

---

## Analysis Process

### Phase 1: Registry Audit

**Read `/prompts/prompt-triggers.md` and analyze:**

1. **Trigger Coverage:**
   - Total triggers: {count}
   - By category (Audit, Archive, Update, Expand, etc.)
   - Missing obvious triggers
   - Redundant triggers

2. **Orchestrator Coverage:**
   - Which triggers have orchestrators
   - Which related triggers lack orchestrators
   - Opportunities for new orchestrators

3. **Naming Consistency:**
   - Convention: `{category} {subject}`
   - Examples: `audit locale`, `update data`, `expand prompts`
   - Violations or inconsistencies

4. **Documentation Quality:**
   - Triggers with missing prompt files
   - Prompts without trigger words
   - Broken links
   - Outdated references

### Phase 2: Gap Analysis

**Identify missing trigger categories:**

1. **Generate Triggers**
   - `generate category data`
   - `generate page scaffolding`
   - `generate component`
   - `generate types`

2. **Validate Triggers**
   - `validate types`
   - `validate routes`
   - `validate bilingual`
   - `validate data completeness`

3. **Sync Triggers**
   - `sync navigation`
   - `sync routes`
   - `sync types`
   - `sync documentation`

4. **Test Triggers**
   - `test accessibility`
   - `test performance`
   - `test bilingual`
   - `test data integrity`

5. **Deploy Triggers**
   - `deploy checklist`
   - `deploy preview`
   - `deploy production`

### Phase 3: Orchestrator Opportunities

**Identify related triggers that should be orchestrated:**

Example findings:
```markdown
## Opportunity: Data Validation Orchestrator

**Trigger:** `validate all` or `validate`

**Should run:**
1. `validate types` — TypeScript compilation
2. `validate routes` — Route configuration
3. `validate bilingual` — EN/AF completeness
4. `validate data` — Data file structure
5. `validate accessibility` — Basic a11y checks

**Rationale:** These validations often run together before commits or deployments.
```

### Phase 4: Circular Reference Check

**Detect circular dependencies:**

```
Prompt A references Prompt B
Prompt B references Prompt C
Prompt C references Prompt A  <-- CIRCULAR!
```

**Check:**
- Orchestrators calling other orchestrators
- Prompts that invoke each other
- Infinite loop potential

---

## Report Format

Generate: `/reports/YYYY-MM-DD-trigger-analysis.md`

```markdown
# Trigger Registry Analysis — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Current Triggers:** {number}  
**Gaps Identified:** {number}  
**New Triggers Recommended:** {number}  
**New Orchestrators Recommended:** {number}

---

## Executive Summary

Analyzed complete trigger registry. Identified {N} gaps, {N} naming inconsistencies, and {N} opportunities for new orchestrators.

**Key Findings:**
1. {Finding}
2. {Finding}
3. {Finding}

---

## Current Trigger Coverage

### By Category

| Category | Trigger Count | Coverage |
|----------|---------------|----------|
| Audit | 14 | ✅ Comprehensive |
| Archive | 4 | ✅ Complete |
| Update | 8 | ⚠️ Missing `update types` |
| Expand | 8 | ✅ Complete |
| Maintenance | 3 | ⚠️ Missing `validate` triggers |
| Utility | 4 | ✅ Adequate |
| **Total** | **41** | - |

---

## Gap Analysis

### Missing Trigger Categories

**1. Generate Triggers** (Not present)

Recommended triggers:
- `generate category` — Scaffold new notice category
- `generate page` — Scaffold new page with data files
- `generate component` — Create new component with types
- `generate form` — Scaffold form with validation

**2. Validate Triggers** (Not present)

Recommended triggers:
- `validate types` — Run TypeScript compiler
- `validate routes` — Check route configuration
- `validate bilingual` — Check EN/AF completeness
- `validate data` — Validate data file structures

**3. Sync Triggers** (Only `update` equivalents exist)

Recommended triggers:
- `sync navigation` — Update all nav menus
- `sync types` — Regenerate type files
- `sync docs` — Update all documentation

**4. Test Triggers** (Not present)

Recommended triggers:
- `test accessibility` — Run a11y tests
- `test performance` — Run performance checks
- `test bilingual` — Test language switching

---

## Orchestrator Opportunities

### 1. Validation Orchestrator

**Trigger:** `validate` or `validate all`

**Sub-prompts:**
1. validate-types.md
2. validate-routes.md
3. validate-bilingual.md
4. validate-data.md

**Use Case:** Pre-commit checks

**Priority:** High

### 2. Generate Orchestrator

**Trigger:** `generate`

**Sub-prompts:**
1. generate-category.md
2. generate-page.md
3. generate-component.md

**Use Case:** Scaffolding new features

**Priority:** Medium

### 3. Deploy Orchestrator

**Trigger:** `deploy checklist` or `pre-deploy`

**Sub-prompts:**
1. Run `audit` (orchestrator)
2. Run `validate` (orchestrator)
3. Run `update status`
4. Generate deployment checklist
5. Review breaking changes

**Use Case:** Pre-deployment validation

**Priority:** High

---

## Naming Inconsistencies

### Issues Found

1. **Inconsistent prefixes:**
   - Most use: `{verb} {subject}` (e.g., `audit locale`)
   - Exception: `orchestrator` (should be `audit all`?)
   - Recommendation: Add `audit all` as alias

2. **Missing symmetry:**
   - Have: `archive prompts`, `archive reports`, `archive tasks`
   - Missing: `archive docs`, `archive scripts`
   - Recommendation: Add if needed or document why not

3. **Verb variations:**
   - Using: `update`, `expand`, `audit`, `archive`
   - Could add: `generate`, `validate`, `sync`, `test`
   - Recommendation: Add these categories

---

## Documentation Quality

### Issues Found

1. **Prompts without trigger words:** 0 (✅ All have triggers)
2. **Triggers without prompt files:** 0 (✅ All implemented)
3. **Broken guideline links:** 2 found
   - `/prompts/audit-hero.md` line 45 — Fix link
   - `/prompts/expand-prompts.md` line 112 — Fix link
4. **Outdated version numbers:** 3 found
   - Update version in `prompt-triggers.md`

---

## Circular Reference Check

**Status:** ✅ No circular references detected

**Orchestrator Chain:**
```
audit (orchestrator.md)
  ├─ audit-locale.md ✅
  ├─ audit-data.md ✅
  ├─ audit-styling.md ✅
  └─ ...

cleanup (cleanup-orchestrator.md)
  ├─ archive (archive-orchestrator.md)
  │   ├─ archive-prompts.md ✅
  │   ├─ archive-reports.md ✅
  │   └─ ...
  └─ ...

No orchestrator calls another orchestrator's orchestrator.
```

---

## Recommended New Triggers

### Critical Priority

1. **`validate`** — Run all validation checks
   - validate types
   - validate routes
   - validate bilingual
   - validate data

2. **`deploy checklist`** — Pre-deployment validation
   - Run audit
   - Run validate
   - Check breaking changes
   - Generate deployment report

### High Priority

3. **`generate category`** — Scaffold new notice category
4. **`generate page`** — Scaffold new page with data files
5. **`test all`** — Run all tests (a11y, performance, bilingual)

### Medium Priority

6. **`sync navigation`** — Update all navigation menus
7. **`sync types`** — Regenerate type definitions
8. **`init project`** — Initialize new project section

---

## Implementation Roadmap

### Week 1: Critical Triggers
- [ ] Create validate orchestrator
- [ ] Create deploy checklist orchestrator
- [ ] Update prompt-triggers.md

### Week 2: High Priority
- [ ] Create generate triggers
- [ ] Create test triggers
- [ ] Update documentation

### Week 3: Medium Priority
- [ ] Create sync triggers
- [ ] Review all prompts for consistency
- [ ] Fix broken links

---

## Next Steps

1. Review recommendations with team
2. Prioritize new triggers
3. Create new prompt files
4. Update prompt-triggers.md
5. Document new workflows

---

## Related Documentation

- **[prompt-triggers.md](./prompt-triggers.md)** — Current trigger registry
- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
```

---

## Success Criteria

✅ Full trigger registry analyzed  
✅ Gaps identified  
✅ Overlaps detected  
✅ Naming inconsistencies found  
✅ Orchestrator opportunities identified  
✅ Circular references checked  
✅ New triggers recommended  
✅ Priority assigned  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[prompt-triggers.md](./prompt-triggers.md)** — Trigger registry
- **[orchestrator.md](./orchestrator.md)** — Main audit orchestrator

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial trigger analysis prompt |
