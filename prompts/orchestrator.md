# Audit Orchestrator — Master Audit Prompt

**Version:** 1.0.0  
**Last Updated:** 2026-03-16  
**Purpose:** Run comprehensive repository audits and coordinate sub-audits

---

## Overview

This prompt orchestrates multiple sub-audit prompts to create a complete repository analysis. It ensures audits run in the correct order, reports are properly generated, and task lists are created only after all audits complete.

---

## Workflow

### Phase 1: Extract & Create Guidelines

**Before running ANY audits, extract guidelines from:**

1. Read ALL files in `/src/imports/` and `/src/imports/pasted_text/`
2. Identify content that defines:
   - Standards (how things should be done)
   - Requirements (what must be built)
   - Specifications (technical details)
   - Rules (non-negotiable constraints)

3. Create guideline files in `/guidelines/` for:
   - Architecture patterns
   - Data models
   - Styling systems
   - Locale/i18n requirements
   - Performance standards
   - Content modeling
   - Any other standard-defining content

**Guideline files must:**
- Use descriptive names (e.g., `locale-architecture.md`, `data-model.md`)
- Include header metadata (Category, Version, Date, Status, Parent)
- Link to parent `Guidelines.md`
- Provide clear examples and anti-patterns
- Be self-contained (readable without prior context)

### Phase 2: Create Prompt Files

**After guidelines exist, create prompt files in `/prompts/` for:**

1. **Sub-audit prompts** (e.g., `audit-locale.md`, `audit-data-model.md`)
2. **Task prompts** (e.g., `continue.md`, `cleanup.md`)
3. **Utility prompts** (e.g., `refactor-styling.md`)

**Prompt files must:**
- Reference specific guidelines they enforce
- Include clear success criteria
- Specify required reports
- List deliverables
- Provide examples

### Phase 3: Run Sub-Audits

**Execute audits in dependency order:**

1. **Architecture Audits** (run first)
   - Locale/i18n architecture
   - Route structure
   - Data model completeness

2. **Implementation Audits** (run after architecture)
   - Component styling compliance
   - Search functionality
   - Form validation
   - Navigation correctness

3. **Content Audits** (run after implementation)
   - Translation quality
   - Data completeness
   - Sample content coverage

**Each audit must:**
- Read relevant guidelines
- Analyze current implementation
- Generate dated report in `/reports/`
- Use standardized report format (see below)

### Phase 4: Generate Reports

**All reports go in `/reports/` with date prefix:**

Format: `/reports/YYYY-MM-DD-{audit-name}.md`

Examples:
- `/reports/2026-03-16-locale-audit.md`
- `/reports/2026-03-16-data-model-audit.md`
- `/reports/2026-03-16-styling-audit.md`

**Report format:**

```markdown
# {Audit Name} — Report

**Date:** YYYY-MM-DD  
**Audit Type:** {Architecture/Implementation/Content}  
**Status:** {Complete/In Progress/Blocked}  
**Guidelines Referenced:** [Link to guideline]

---

## Executive Summary

{2-3 sentence overview of findings}

---

## Audit Scope

{What was audited and why}

---

## Findings

### Critical Issues

{Issues that block production or violate hard rules}

### Major Issues

{Significant problems that should be fixed soon}

### Minor Issues

{Nice-to-have improvements}

### Positive Findings

{What is working well}

---

## Compliance Summary

- [x] Guideline Section 1
- [ ] Guideline Section 2
- [x] Guideline Section 3

---

## Recommendations

### Immediate (This Sprint)

1. {Action item}
2. {Action item}

### Short Term (Next Sprint)

1. {Action item}
2. {Action item}

### Long Term (Backlog)

1. {Action item}
2. {Action item}

---

## Files Affected

### Files Requiring Changes

- `/path/to/file.tsx` — {reason}
- `/path/to/file.ts` — {reason}

### Files Working Correctly

- `/path/to/file.tsx` — {what it does well}

---

## Metrics

- Total files audited: {number}
- Files passing: {number} ({percent}%)
- Files failing: {number} ({percent}%)
- Critical issues: {number}
- Major issues: {number}
- Minor issues: {number}

---

## Related Documentation

- **[Guideline](../guidelines/{guideline}.md)**
- **[Sub-audit prompt](../prompts/audit-{name}.md)**

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | YYYY-MM-DD | Initial audit report |
```

### Phase 5: Create Task Lists

**ONLY after ALL reports are complete:**

1. Read all reports in `/reports/`
2. Extract all action items
3. Organize by priority
4. Create `/tasks/task-list.md`

**Task list format:**

```markdown
# Task List — Master Tracking

**Generated:** YYYY-MM-DD  
**Status:** Active

---

## Critical Tasks (Blocking)

- [ ] Task from audit 1 — [Report](../reports/YYYY-MM-DD-audit.md)
- [ ] Task from audit 2 — [Report](../reports/YYYY-MM-DD-audit.md)

## High Priority (This Sprint)

- [ ] Task from audit 3
- [ ] Task from audit 4

## Medium Priority (Next Sprint)

- [ ] Task from audit 5
- [ ] Task from audit 6

## Low Priority (Backlog)

- [ ] Task from audit 7
- [ ] Task from audit 8

---

## Completed Tasks

- [x] Completed task — YYYY-MM-DD
```

---

## Execution Instructions

### 1. Initialize

```
Read all files in:
- /guidelines/Guidelines.md (primary)
- /guidelines/*.md (all sub-guidelines)
- /src/imports/*.md (import sources)
```

### 2. Extract Guidelines

```
For each import file:
1. Identify guideline content
2. Create /guidelines/{topic}.md
3. Link to parent Guidelines.md
4. Use proper format with metadata header
```

### 3. Create Prompts

```
For each guideline:
1. Create audit prompt in /prompts/audit-{topic}.md
2. Reference relevant guidelines
3. Define success criteria
4. Specify report format
```

### 4. Run Audits

```
Execute in order:
1. Architecture audits (locale, routing, data)
2. Implementation audits (components, styling, search)
3. Content audits (translations, data completeness)

Each generates:
- /reports/YYYY-MM-DD-{audit-name}.md
```

### 5. Generate Task List

```
After all reports exist:
1. Read all /reports/*.md files
2. Extract action items
3. Sort by priority
4. Create /tasks/task-list.md
```

---

## Sub-Audit Prompts

### Required Sub-Audits

1. **Locale Architecture** → `/prompts/audit-locale.md`
   - Guideline: `/guidelines/locale-architecture.md`
   - Checks: Mixed languages, route mapping, navigation correctness
   
2. **Data Model** → `/prompts/audit-data.md`
   - Guideline: `/guidelines/data-model.md`
   - Checks: Typed fields, category schemas, field definitions
   
3. **Styling System** → `/prompts/audit-styling.md`
   - Guideline: `/guidelines/Guidelines.md` (sections 4.1, 4.2, 13)
   - Checks: Inline styles, CSS variables, semantic classes

4. **CSS Architecture** → `/prompts/audit-css.md`
   - Guideline: `/guidelines/design-tokens/css-architecture.md`
   - Checks: BEM methodology, file organization, WordPress alignment

5. **CSS Tokens** → `/prompts/audit-tokens.md`
   - Guideline: `/guidelines/design-tokens/`
   - Checks: Token usage, no hardcoded values, font face enforcement
   
6. **Header Template Part** → `/prompts/audit-header.md`
   - Guideline: `/guidelines/design-tokens/navigation.md`
   - Checks: Header consistency, pattern usage, no hardcoded headers
   
7. **Footer Template Part** → `/prompts/audit-footer.md`
   - Guideline: `/guidelines/design-tokens/navigation.md`
   - Checks: Footer consistency, pattern usage, content completeness
   
8. **Hero Template Part** → `/prompts/audit-hero.md`
   - Guideline: `/guidelines/design-tokens/page-headers.md`, `/docs/hero-system.md`
   - Checks: Hero on ALL pages, data-driven content, no hardcoded heroes
   
9. **Phosphor Icons** → `/prompts/audit-phosphor.md`
   - Guideline: `/guidelines/design-tokens/iconography.md`
   - Checks: No Lucide icons, correct imports, accessibility labels
   
10. **Navigation** → `/prompts/audit-navigation.md`
    - Guideline: `/guidelines/locale-architecture.md` + `/guidelines/Guidelines.md`
    - Checks: Dynamic data, breadcrumbs, locale switching
    
11. **Accessibility** → `/prompts/audit-accessibility.md`
    - Guideline: `/guidelines/design-tokens/` (accessibility standards)
    - Checks: WCAG 2.1 AA compliance, bilingual labels, semantic HTML
    
12. **Performance** → `/prompts/audit-performance.md`
    - Guideline: `/guidelines/Guidelines.md` (section 16)
    - Checks: Bundle size, lazy loading, image optimization

13. **Routing** → `/prompts/audit-routing.md`
    - Guideline: `/guidelines/locale-architecture.md`
    - Checks: Bilingual route pairs, React Router configuration
    
14. **Search Functionality** → `/prompts/audit-search.md`
    - Guideline: `/guidelines/Guidelines.md` (section 7.4)
    - Checks: Locale filtering, searchable fields, result accuracy

---

## Success Criteria

✅ **Phase 1 Complete When:**
- All guideline files created in `/guidelines/`
- Each guideline properly formatted
- All guidelines linked to parent

✅ **Phase 2 Complete When:**
- All prompt files created in `/prompts/`
- Each prompt references correct guidelines
- Prompts define clear deliverables

✅ **Phase 3 Complete When:**
- All sub-audits executed
- Each audit checked against guidelines
- No audit skipped or incomplete

✅ **Phase 4 Complete When:**
- All reports exist in `/reports/`
- Reports use standardized format
- All findings documented

✅ **Phase 5 Complete When:**
- Task list created in `/tasks/`
- All action items extracted
- Tasks prioritized correctly

---

## File Placement Rules

**Forbidden:**
- Creating guidelines in root
- Creating prompts in root
- Creating reports in root
- Creating tasks in root
- Mixing prompts and guidelines

**Required:**
- `/guidelines/` → All standard documents
- `/prompts/` → All audit and task prompts
- `/reports/` → All audit output (dated)
- `/tasks/` → Task lists and tracking

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Primary project governance
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — i18n standards
- **[data-model.md](../guidelines/data-model.md)** — Notice data structure

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial orchestrator prompt with 5-phase workflow |