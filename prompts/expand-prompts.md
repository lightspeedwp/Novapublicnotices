# Expand Prompts — AI-Driven Prompt Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand prompts`  
**Status:** Active

---

## Purpose

Scan conversation history to identify patterns, repeated requests, and manual workflows that could benefit from reusable prompts. Recommend new prompts or updates to existing prompts to make the user's tasks easier and more efficient.

---

## Overview

This is an AI-powered analysis prompt that learns from actual usage patterns. Unlike other prompts that audit the codebase, this one audits the **conversation history** and **user's workflow** to suggest prompt system improvements.

---

## Analysis Process

### Phase 1: Scan Conversation History

Review the entire conversation for:

1. **Repeated Requests**
   - Tasks the user asks for multiple times
   - Similar requests phrased differently
   - Multi-step workflows that recur

2. **Manual Workflows**
   - Sequences of actions the user performs manually
   - Copy-paste patterns
   - File navigation patterns
   - Multi-tool sequences

3. **Pain Points**
   - Tasks that require clarification
   - Requests that need multiple iterations
   - Complex multi-step processes
   - Areas where user expresses frustration

4. **Common Combinations**
   - Prompts frequently run together
   - Chained commands (e.g., "audit && process reports")
   - Related tasks that always happen in sequence

5. **Missing Abstractions**
   - Low-level tasks that could be automated
   - Patterns that could be templated
   - Workflows without a single trigger

### Phase 2: Identify Prompt Opportunities

For each pattern found, determine:

**New Prompt Needed?**
- Is this a distinct, repeatable task?
- Would it benefit multiple workflows?
- Is it complex enough to warrant its own prompt?
- Would it reduce user cognitive load?

**Update Existing Prompt?**
- Does an existing prompt almost cover this?
- Would expanding an existing prompt be better than creating new one?
- Is there scope creep that should be split out?

**Create Orchestrator?**
- Are there 3+ related prompts that should be coordinated?
- Is there a natural workflow sequence?
- Do dependencies require specific execution order?

---

## Recommendation Format

### For New Prompts

```markdown
## Recommended New Prompt: {prompt-name}.md

**Trigger Word:** `{trigger}`  
**Category:** {Audit/Maintenance/Utility/Orchestrator}  
**Rationale:** {Why this prompt is needed}

**Evidence from Conversation:**
- User requested similar task {number} times
- Examples: "{quote}", "{quote}"
- Pain point: {description}

**Proposed Actions:**
1. {Action the prompt would take}
2. {Action the prompt would take}

**Success Criteria:**
- {What defines completion}

**Benefits:**
- Reduces {number}-step manual process to single trigger
- Eliminates need to {manual task}
- Standardizes {workflow}

**Implementation Priority:** Critical/High/Medium/Low
```

### For Prompt Updates

```markdown
## Recommended Update: {existing-prompt}.md

**Current Scope:** {What it does now}  
**Proposed Addition:** {What to add}  
**Rationale:** {Why this expansion makes sense}

**Evidence from Conversation:**
- User requested related task {number} times
- Examples: "{quote}", "{quote}"

**Proposed Changes:**
- Add section: {section name}
- Include check: {new check}
- Update workflow: {workflow change}

**Backward Compatibility:** {Impact on existing usage}

**Implementation Priority:** Critical/High/Medium/Low
```

### For New Orchestrators

```markdown
## Recommended Orchestrator: {orchestrator-name}.md

**Trigger Word:** `{trigger}`  
**Sub-Prompts to Coordinate:**
1. {prompt-1}.md
2. {prompt-2}.md
3. {prompt-3}.md

**Rationale:** {Why these should be orchestrated together}

**Evidence from Conversation:**
- User ran these prompts in sequence {number} times
- Examples: "{quote}"

**Execution Order:**
1. {prompt} — {reason for order}
2. {prompt} — {reason for order}

**Dependencies:**
- {prompt-2} requires output from {prompt-1}

**Benefits:**
- Single trigger replaces {number}-step manual sequence
- Ensures correct execution order
- Prevents skipping critical steps

**Implementation Priority:** Critical/High/Medium/Low
```

---

## Recommendation Categories

### 1. Workflow Automation

Prompts that automate repeated manual workflows.

**Examples:**
- "Generate all category data files" (if user manually creates each one)
- "Setup new page" (scaffold page component + data files + route + tests)
- "Deploy checklist" (run all pre-deployment checks)

### 2. Code Generation

Prompts that scaffold boilerplate code.

**Examples:**
- "Create bilingual page" (generate page + data pair + route)
- "Add new category" (generate data schema + sample data + filters)
- "Create form component" (scaffold form + validation + data)

### 3. Quality Checks

Prompts that validate specific quality attributes.

**Examples:**
- "Check bilingual completeness" (verify all EN has AF)
- "Validate data schemas" (ensure all data files match types)
- "Check route coverage" (verify all pages have routes)

### 4. Refactoring Assistance

Prompts that help with code refactoring.

**Examples:**
- "Extract data to files" (find hard-coded content, migrate to data)
- "Consolidate duplicates" (find and merge duplicate code)
- "Split large file" (detect oversized files, recommend splits)

### 5. Documentation Sync

Prompts that keep documentation current.

**Examples:**
- "Update all docs" (sync guides, prompts, reports, tasks)
- "Generate changelog" (from git history or recent reports)
- "Document new feature" (scaffold docs for new addition)

---

## Pattern Recognition Examples

### Pattern: Repeated Category Creation

**Evidence:**
```
User: "Create data file for Tenders category with 15 entries"
User: "Create data file for Liquor Licences category with 20 entries"
User: "Create data file for Estates category with 18 entries"
```

**Recommendation:**
```markdown
## New Prompt: generate-category-data.md

**Trigger:** `generate category data {category-name} {entry-count}`

**Actions:**
1. Read category schema from /guidelines/notice-fields-schema.md
2. Generate {entry-count} sample notices for {category-name}
3. Create {category-name}.en.ts and {category-name}.af.ts
4. Ensure realistic variety in fields
5. Add to category index

**Benefit:** Reduces 20-minute manual task to single command
```

### Pattern: Pre-Deployment Sequence

**Evidence:**
```
User: "Run audit"
User: "Run status"
User: "Update CHANGELOG.md"
User: "Generate deployment report"
```

**Recommendation:**
```markdown
## New Orchestrator: deploy-checklist.md

**Trigger:** `deploy checklist` or `pre-deploy`

**Sequence:**
1. Run orchestrator.md (all audits)
2. Run update-status.md
3. Generate deployment readiness report
4. Create pre-deployment checklist
5. Suggest CHANGELOG.md entries

**Benefit:** Ensures no pre-deployment steps skipped
```

---

## Output Format

Generate: `/reports/YYYY-MM-DD-prompt-recommendations.md`

```markdown
# Prompt Recommendations — YYYY-MM-DD

**Analysis Period:** {Conversation start - end}  
**Messages Analyzed:** {number}  
**Patterns Identified:** {number}

---

## Executive Summary

Based on conversation history analysis, {number} new prompts recommended, {number} existing prompts should be updated, and {number} new orchestrators proposed.

**Highest Impact:**
1. {Recommendation} — Would save {estimated time/effort}
2. {Recommendation} — Would eliminate {pain point}

---

## New Prompts Recommended

### Critical Priority

[Full recommendation details]

### High Priority

[Full recommendation details]

### Medium Priority

[Full recommendation details]

---

## Existing Prompts to Update

### {prompt-name}.md

[Full update recommendation]

---

## New Orchestrators Recommended

### {orchestrator-name}.md

[Full orchestrator recommendation]

---

## Pattern Analysis

### Most Repeated Tasks

1. {Task} — Occurred {number} times
2. {Task} — Occurred {number} times

### Longest Manual Workflows

1. {Workflow} — {number} steps
2. {Workflow} — {number} steps

### Common Pain Points

1. {Pain point} — Mentioned {number} times
2. {Pain point} — Mentioned {number} times

---

## Implementation Roadmap

### Phase 1 (Critical — Implement First)
- [ ] {Recommended prompt}
- [ ] {Recommended prompt}

### Phase 2 (High — Next Sprint)
- [ ] {Recommended prompt}
- [ ] {Recommended prompt}

### Phase 3 (Medium — Backlog)
- [ ] {Recommended prompt}
- [ ] {Recommended prompt}

---

## Next Steps

1. Review recommendations with user
2. Prioritize based on user feedback
3. Implement Phase 1 prompts
4. Update prompt-triggers.md
5. Test new prompts
```

---

## Success Criteria

✅ Conversation history analyzed  
✅ Patterns identified and documented  
✅ Concrete prompt recommendations provided  
✅ Evidence from conversation cited  
✅ Implementation priority assigned  
✅ Estimated impact/benefit calculated  
✅ Report generated

---

## Usage

Run this prompt when:

- Project has evolved significantly
- User's workflow has changed
- Feeling like tasks are repetitive
- Wanting to optimize prompt system
- Starting new project phase

**Trigger:** `expand prompts`

---

## Related Documentation

- **[expand-guidelines.md](./expand-guidelines.md)** — Recommend guideline updates
- **[prompt-triggers.md](./prompt-triggers.md)** — Current trigger registry
- **[orchestrator.md](./orchestrator.md)** — Main audit orchestrator

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial AI-driven prompt recommendation system |
