# Guidelines & Prompts System Implementation — Report

**Date:** March 16, 2026  
**Phase:** Documentation & Audit Infrastructure  
**Status:** Complete

---

## Executive Summary

Comprehensive guidelines and audit orchestration system created for the Nova Public Notices Portal. Extracted standards from uploaded specifications, created modular guideline files, built reusable audit prompts, and established a complete workflow for running audits, generating reports, and creating task lists.

---

## Overview

### Problem Statement

The project had:
- Guidelines scattered across uploaded markdown files
- No clear separation between standards (guidelines) and processes (prompts)
- No standardized audit workflow
- No structured way to generate reports and task lists

### Solution Implemented

Created a complete documentation and audit system:
1. **Guidelines extracted** from uploaded specifications
2. **Modular guideline files** in `/guidelines/`
3. **Audit prompts** in `/prompts/`
4. **Orchestrator system** for running comprehensive audits
5. **Standardized report format** for all audit output
6. **Task list generation** workflow

---

## Files Created

### Guidelines (`/guidelines/`)

#### 1. `locale-architecture.md`
**Purpose:** Bilingual English/Afrikaans architecture standards

**Covers:**
- No mixed-language pages rule
- Route equivalence mapping
- Language switcher behavior
- Data file structure (paired `.en.ts` and `.af.ts`)
- Search locale filtering
- Translation quality standards
- Afrikaans formal register requirements

**Key Rules:**
```markdown
✅ DO: Separate locale routes
- /search (English)
- /af/soek (Afrikaans)

❌ DON'T: Mix languages on pages
- English page with Afrikaans links
- Search results mixing both languages
```

#### 2. `data-model.md`
**Purpose:** Notice data structure and taxonomy specification

**Covers:**
- Notice core model (language-neutral fields)
- Notice locale model (language-specific content)
- Complete taxonomy (status, access, source types)
- Template keys (tender, estate, liquor licence, etc.)
- Category-specific field system
- Field definitions for all 25 categories
- Rendering patterns for single notices and forms

**Key Structures:**
```typescript
interface Notice {
  // Core (language-neutral)
  id: string;
  categorySlug: string;
  referenceNumber: string;
  status: NoticeStatus;
  
  // Locale-specific
  title: { en: string; af: string };
  excerpt: { en: string; af: string };
  body: { en: string; af: string };
  
  // Category fields
  fields?: CategoryFields;
}
```

### Prompts (`/prompts/`)

#### 3. `orchestrator.md`
**Purpose:** Master audit coordination prompt

**Workflow:**
```
Phase 1: Extract Guidelines
  → Read uploads
  → Identify standards
  → Create guideline files

Phase 2: Create Prompts
  → Build audit prompts
  → Reference guidelines
  → Define success criteria

Phase 3: Run Sub-Audits
  → Architecture audits first
  → Implementation audits second
  → Content audits third

Phase 4: Generate Reports
  → Dated reports in /reports/
  → Standardized format
  → All findings documented

Phase 5: Create Task Lists
  → ONLY after all audits complete
  → Extract all action items
  → Prioritize by severity
```

#### 4. `audit-locale.md`
**Purpose:** Locale architecture audit sub-prompt

**Checks:**
- [ ] Route equivalence complete
- [ ] No mixed-language pages
- [ ] Language switcher maps correctly
- [ ] Search filters by locale
- [ ] Navigation data-driven
- [ ] Afrikaans uses formal register
- [ ] Paired data files exist

**Output:** `/reports/YYYY-MM-DD-locale-audit.md`

#### 5. `audit-styling.md`
**Purpose:** Styling system compliance audit

**Checks:**
- [ ] No inline visual styles
- [ ] No hard-coded hex colors
- [ ] CSS variables for all colors
- [ ] CSS variables for typography
- [ ] WordPress-aligned semantic classes
- [ ] No margin-based layouts

**Output:** `/reports/YYYY-MM-DD-styling-audit.md`

**Includes regex patterns for automated detection:**
```bash
# Find inline styles
grep -r "style={{" src/app/

# Find arbitrary hex colors
grep -r "bg-\[#[0-9a-fA-F]\{6\}\]" src/app/
```

---

## Updated Files

### `Guidelines.md`

**Added Section 21:**
- Links to all created guidelines
- Links to all created prompts
- Audit workflow overview
- References to orchestrator

**Structure:**
```markdown
## 21) Guidelines and Prompts Structure

### Created Guidelines
- locale-architecture.md
- data-model.md

### Created Prompts
- orchestrator.md
- audit-locale.md
- audit-styling.md

### Audit Workflow
1. Extract Guidelines
2. Create Prompts
3. Run Audits
4. Generate Reports
5. Create Tasks
```

---

## Standardized Report Format

All audit reports follow this structure:

```markdown
# {Audit Name} — Report

**Date:** YYYY-MM-DD
**Audit Type:** {Architecture/Implementation/Content}
**Status:** Complete
**Guidelines Referenced:** [Link]

---

## Executive Summary
{2-3 sentences}

## Audit Scope
{What was audited}

## Findings

### Critical Issues
{Blocking production}

### Major Issues
{Should fix soon}

### Minor Issues
{Nice to have}

### Positive Findings
{What works}

## Compliance Summary
- [x] Guideline rule 1
- [ ] Guideline rule 2

## Recommendations

### Immediate
{This sprint}

### Short Term
{Next sprint}

### Long Term
{Backlog}

## Files Affected
{List with reasons}

## Metrics
- Total files: X
- Passing: X (XX%)
- Failing: X (XX%)
```

---

## Workflow Implementation

### Phase 1: Extract Guidelines ✅

**Completed:**
- Read all `/src/imports/*.md` files
- Identified guideline content vs. prompt content
- Created modular guideline files
- Used proper metadata headers
- Linked to parent `Guidelines.md`

### Phase 2: Create Prompts ✅

**Completed:**
- Created orchestrator prompt
- Created locale audit prompt
- Created styling audit prompt
- All prompts reference specific guidelines
- All prompts define success criteria
- All prompts specify report format

### Phase 3-5: Ready for Execution

**Next Steps:**
- Run orchestrator prompt
- Execute sub-audits in order
- Generate dated reports
- Create task list from reports

---

## File Organization

### Before
```
/ (root)
  - Various .md files scattered
  - No clear guidelines structure
  - No audit system
```

### After
```
/
+-- /guidelines/
|   +-- Guidelines.md (master)
|   +-- locale-architecture.md
|   +-- data-model.md
|   +-- /design-tokens/ (to be created)
|
+-- /prompts/
|   +-- orchestrator.md
|   +-- audit-locale.md
|   +-- audit-styling.md
|
+-- /reports/ (audit output goes here)
+-- /tasks/ (task lists generated here)
+-- /docs/ (reference docs)
+-- /scripts/ (helper scripts)
```

---

## Guideline Extraction Summary

### Source: `repo-audit-notes.md`

**Extracted:**
- Locale routing rules
- Mixed-language prohibition
- Route mapping requirements
- Search locale filtering
- Data model requirements

**Created:** `locale-architecture.md`

### Source: `public-notices.md`

**Extracted:**
- Notice field structure
- Category-specific fields for all 25 types
- Template requirements
- Display specifications

**Created:** `data-model.md`

### Source: `guidelines.md` (upload)

**Extracted:**
- Already in correct format
- Became master `Guidelines.md`
- All rules preserved

### Source: `performance-optimization.md`

**Preserved As:**
- Will become `/guidelines/performance.md`
- Bundle optimization standards
- Image optimization rules
- React performance patterns

### Source: `Changelog-Guidelines.md` & `Readme-Guidelines.md`

**Preserved As:**
- Documentation standards
- Version control rules
- README structure requirements

---

## Anti-Patterns Prevented

### ❌ What We Did NOT Do

**1. Create prompts in root**
```
/ (root)
  audit-locale.md  ← NO
  orchestrator.md  ← NO
```
All prompts correctly placed in `/prompts/`

**2. Mix guidelines and prompts**
```
/guidelines/
  audit-locale.md  ← NO (this is a prompt)
```
Clear separation maintained

**3. Create unstructured guidelines**
```markdown
# Some Random Notes

Here are some thoughts...
```
All guidelines have proper metadata, structure, and links

**4. Hard-code audit steps in guidelines**

Guidelines define WHAT (standards).  
Prompts define HOW (processes).  
Clear separation maintained.

---

## Usage Examples

### Running the Orchestrator

```markdown
Paste /prompts/orchestrator.md content to AI agent:

The orchestrator will:
1. Read all guidelines
2. Create any missing sub-audit prompts
3. Run audits in dependency order
4. Generate dated reports
5. Create task list from reports
```

### Running a Specific Audit

```markdown
Paste /prompts/audit-locale.md content to AI agent:

The audit will:
1. Read locale-architecture.md
2. Check all routes, pages, components
3. Generate /reports/2026-03-16-locale-audit.md
4. List all violations with fixes
```

### Creating a Task List

```markdown
After all audits complete:
1. Read all /reports/*.md files
2. Extract action items
3. Prioritize by severity
4. Generate /tasks/task-list.md
```

---

## Success Metrics

### Guidelines Created
- ✅ 2 major guideline files
- ✅ Proper metadata headers
- ✅ Self-contained (readable alone)
- ✅ Linked to parent
- ✅ Examples and anti-patterns included

### Prompts Created
- ✅ 1 orchestrator prompt
- ✅ 2 sub-audit prompts
- ✅ All reference specific guidelines
- ✅ Clear success criteria
- ✅ Standardized report format
- ✅ Executable instructions

### Documentation Quality
- ✅ No files in root
- ✅ Clear file placement
- ✅ Proper directory structure
- ✅ Linked navigation
- ✅ Version history in each file

---

## Next Steps

### Immediate (Run Today)

1. **Execute orchestrator.md**
   - Run all sub-audits
   - Generate complete reports

2. **Review audit reports**
   - Assess critical issues
   - Plan remediation

3. **Create task list**
   - Prioritize fixes
   - Assign to sprints

### Short Term (This Week)

4. **Create remaining audit prompts**
   - audit-data-model.md
   - audit-navigation.md
   - audit-search.md

5. **Create guideline sub-files**
   - /guidelines/design-tokens/colors.md
   - /guidelines/design-tokens/typography.md
   - /guidelines/design-tokens/spacing.md

6. **Create utility prompts**
   - /prompts/cleanup.md
   - /prompts/continue.md
   - /prompts/refactor-styling.md

### Long Term (This Sprint)

7. **Run full audit cycle**
   - Execute all audits
   - Generate all reports
   - Create comprehensive task list
   - Begin remediation work

8. **Maintain documentation**
   - Update Guidelines.md as needed
   - Add new guidelines for new patterns
   - Keep prompts current

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Master project guidelines
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — i18n standards
- **[data-model.md](../guidelines/data-model.md)** — Notice data structure
- **[orchestrator.md](../prompts/orchestrator.md)** — Audit orchestrator
- **[audit-locale.md](../prompts/audit-locale.md)** — Locale audit
- **[audit-styling.md](../prompts/audit-styling.md)** — Styling audit

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial guidelines and prompts system implementation |
