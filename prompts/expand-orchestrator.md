# Expand Orchestrator — Comprehensive Expansion Analysis

**Category:** Orchestrator  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand` or `expand all`  
**Status:** Active

---

## Purpose

Master orchestrator that runs all expansion analysis prompts in sequence to provide comprehensive recommendations for improving prompts, guidelines, functionality, pages, templates, patterns, components, data structures, triggers, and dev tools.

---

## Overview

This orchestrator coordinates 9 expansion analysis prompts that use AI to analyze conversation history, codebase patterns, and project context to recommend improvements and new additions across all aspects of the project.

---

## Execution Workflow

### Phase 1: Meta Analysis (Prompt & Guideline Systems)

**Run in parallel:**

1. **expand-prompts.md**
   - Trigger: `expand prompts`
   - Analyzes conversation for new prompt opportunities
   - Recommends updates to existing prompts
   - Output: `/reports/YYYY-MM-DD-prompt-recommendations.md`

2. **expand-guidelines.md**
   - Trigger: `expand guidelines`
   - Analyzes for guideline clarifications needed
   - Recommends new guideline sections
   - Output: `/reports/YYYY-MM-DD-guideline-recommendations.md`

3. **expand-triggers.md**
   - Trigger: `expand triggers`
   - Analyzes trigger registry for gaps
   - Recommends new triggers and orchestrators
   - Output: `/reports/YYYY-MM-DD-trigger-analysis.md`

**Wait for Phase 1 completion before Phase 2**

---

### Phase 2: Feature & Content Analysis

**Run in parallel:**

4. **expand-functionality.md**
   - Trigger: `expand functionality`
   - Analyzes for missing features
   - Compares with industry standards
   - Output: `/reports/YYYY-MM-DD-functionality-recommendations.md`

5. **expand-pages.md**
   - Trigger: `expand pages`
   - Analyzes for missing pages
   - Maps user journey gaps
   - Output: `/reports/YYYY-MM-DD-page-recommendations.md`

**Wait for Phase 2 completion before Phase 3**

---

### Phase 3: Architecture Analysis

**Run in parallel:**

6. **expand-templates.md**
   - Trigger: `expand templates`
   - Analyzes for repeated page patterns
   - Recommends reusable templates
   - Output: `/reports/YYYY-MM-DD-template-recommendations.md`

7. **expand-patterns.md**
   - Trigger: `expand patterns`
   - Analyzes for repeated UI sections
   - Recommends block patterns
   - Output: `/reports/YYYY-MM-DD-pattern-recommendations.md`

8. **expand-components.md**
   - Trigger: `expand components`
   - Analyzes for component duplication
   - Recommends atomic component extractions
   - Output: `/reports/YYYY-MM-DD-component-recommendations.md`

9. **expand-data.md**
   - Trigger: `expand data`
   - Analyzes for repeated data structures
   - Recommends shared TypeScript interfaces
   - Output: `/reports/YYYY-MM-DD-data-recommendations.md`

**Wait for Phase 3 completion before Phase 4**

---

### Phase 4: Developer Experience Analysis

**Run sequentially:**

10. **expand-dev-tools.md**
    - Trigger: `expand dev-tools`
    - Analyzes for automation opportunities
    - Recommends helper scripts and tools
    - Output: `/reports/YYYY-MM-DD-dev-tools-recommendations.md`

---

### Phase 5: Consolidation & Master Report

**After all expansion analyses complete:**

11. **Generate Master Expansion Report**
    - Consolidate all 10 recommendation reports
    - Prioritize across all categories
    - Create unified implementation roadmap
    - Identify dependencies between recommendations
    - Output: `/reports/YYYY-MM-DD-master-expansion-report.md`

---

## Report Structure

Each phase generates its own report. The final master report consolidates all findings.

### Master Expansion Report Format

```markdown
# Master Expansion Report — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Conversation Period:** {start - end}  
**Total Recommendations:** {number}  
**Estimated Impact:** {High/Medium/Low}

---

## Executive Summary

Comprehensive expansion analysis across 9 dimensions identified {N} total recommendations:
- {N} prompt improvements
- {N} guideline clarifications
- {N} new features
- {N} missing pages
- {N} template opportunities
- {N} block patterns
- {N} component extractions
- {N} data structure improvements
- {N} new triggers
- {N} dev tool automations

**Top 10 Highest Impact Recommendations:**
1. {Recommendation} — {Impact} — {Priority}
2. {Recommendation} — {Impact} — {Priority}
3. ...

---

## Phase 1: Meta Analysis Results

### Prompt System
- Total prompt recommendations: {N}
- Critical: {N}
- High: {N}
- Medium: {N}

**Top 3:**
1. {Prompt recommendation}
2. {Prompt recommendation}
3. {Prompt recommendation}

[Link to full report](./YYYY-MM-DD-prompt-recommendations.md)

### Guideline System
- Total guideline recommendations: {N}
- Clarifications needed: {N}
- New sections recommended: {N}

**Top 3:**
1. {Guideline recommendation}
2. {Guideline recommendation}
3. {Guideline recommendation}

[Link to full report](./YYYY-MM-DD-guideline-recommendations.md)

### Trigger Registry
- Gaps identified: {N}
- New triggers recommended: {N}
- New orchestrators recommended: {N}

**Top 3:**
1. {Trigger recommendation}
2. {Trigger recommendation}
3. {Trigger recommendation}

[Link to full report](./YYYY-MM-DD-trigger-analysis.md)

---

## Phase 2: Feature & Content Results

### Functionality
- Critical features missing: {N}
- High-priority features: {N}
- Medium-priority features: {N}

**Top 3:**
1. {Feature recommendation}
2. {Feature recommendation}
3. {Feature recommendation}

[Link to full report](./YYYY-MM-DD-functionality-recommendations.md)

### Pages
- Required pages missing: {N}
- High-priority pages: {N}
- User journey gaps: {N}

**Top 3:**
1. {Page recommendation}
2. {Page recommendation}
3. {Page recommendation}

[Link to full report](./YYYY-MM-DD-page-recommendations.md)

---

## Phase 3: Architecture Results

### Templates
- Template patterns identified: {N}
- Code duplication reduction: {percentage}%
- Pages affected: {N}

**Top 3:**
1. {Template recommendation}
2. {Template recommendation}
3. {Template recommendation}

[Link to full report](./YYYY-MM-DD-template-recommendations.md)

### Block Patterns
- Repeated UI sections: {N}
- Reusable blocks recommended: {N}
- WordPress alignment: {status}

**Top 3:**
1. {Pattern recommendation}
2. {Pattern recommendation}
3. {Pattern recommendation}

[Link to full report](./YYYY-MM-DD-pattern-recommendations.md)

### Components
- Duplicated components: {N}
- Atomic components recommended: {N}
- Component library improvements: {N}

**Top 3:**
1. {Component recommendation}
2. {Component recommendation}
3. {Component recommendation}

[Link to full report](./YYYY-MM-DD-component-recommendations.md)

### Data Structures
- Repeated data patterns: {N}
- Shared interfaces recommended: {N}
- Type safety improvements: {N}

**Top 3:**
1. {Data recommendation}
2. {Data recommendation}
3. {Data recommendation}

[Link to full report](./YYYY-MM-DD-data-recommendations.md)

---

## Phase 4: Developer Experience Results

### Dev Tools
- Repetitive tasks identified: {N}
- Automation opportunities: {N}
- Scripts recommended: {N}

**Top 3:**
1. {Dev tool recommendation}
2. {Dev tool recommendation}
3. {Dev tool recommendation}

[Link to full report](./YYYY-MM-DD-dev-tools-recommendations.md)

---

## Unified Priority Matrix

| Recommendation | Category | Impact | Effort | Priority | Dependencies |
|----------------|----------|--------|--------|----------|--------------|
| {Rec 1} | Prompt | High | Low | Critical | None |
| {Rec 2} | Feature | High | Medium | Critical | {Rec 5} |
| {Rec 3} | Template | High | Medium | High | None |
| {Rec 4} | Component | Medium | Low | High | {Rec 3} |
| {Rec 5} | Page | High | High | High | None |
| ... | ... | ... | ... | ... | ... |

---

## Dependency Graph

```
Critical Feature A
  ├─ Requires: Page B (expand pages)
  └─ Blocks: Template C (expand templates)

Template C
  ├─ Requires: Component D (expand components)
  └─ Enables: Data Structure E (expand data)

Prompt F
  ├─ Requires: Guideline clarification G (expand guidelines)
  └─ Adds trigger H (expand triggers)
```

---

## Implementation Roadmap

### Sprint 1: Critical Foundations
**Focus:** Meta improvements and critical features

**From expand-prompts:**
- [ ] {Prompt recommendation} — {Est. time}

**From expand-guidelines:**
- [ ] {Guideline recommendation} — {Est. time}

**From expand-functionality:**
- [ ] {Critical feature} — {Est. time}

**From expand-triggers:**
- [ ] {New orchestrator} — {Est. time}

**Total Sprint 1 Effort:** {Total estimated time}

### Sprint 2: Content & Features
**Focus:** Missing pages and high-priority features

**From expand-pages:**
- [ ] {Page recommendation} — {Est. time}

**From expand-functionality:**
- [ ] {High-priority feature} — {Est. time}

**Total Sprint 2 Effort:** {Total estimated time}

### Sprint 3: Architecture Refactoring
**Focus:** Templates, patterns, and component extraction

**From expand-templates:**
- [ ] {Template recommendation} — {Est. time}

**From expand-patterns:**
- [ ] {Block pattern} — {Est. time}

**From expand-components:**
- [ ] {Component extraction} — {Est. time}

**From expand-data:**
- [ ] {Shared interface} — {Est. time}

**Total Sprint 3 Effort:** {Total estimated time}

### Sprint 4: Developer Experience
**Focus:** Automation and tooling

**From expand-dev-tools:**
- [ ] {Dev tool} — {Est. time}

**From expand-triggers:**
- [ ] {New trigger} — {Est. time}

**Total Sprint 4 Effort:** {Total estimated time}

---

## Impact Summary

### Code Quality
- Duplication reduction: {percentage}%
- Type safety improvement: {percentage}%
- Maintainability score: {Before → After}

### Developer Productivity
- Manual tasks automated: {N}
- Time saved per week: {hours}
- Onboarding time reduced: {percentage}%

### User Experience
- Features added: {N}
- Pages completed: {N}
- User journey gaps filled: {N}

### System Health
- Prompt coverage: {Before → After}
- Guideline completeness: {Before → After}
- Trigger system gaps: {Before → After}

---

## Next Steps

1. **Review all 10 expansion reports:**
   - Read each detailed report
   - Validate recommendations
   - Challenge assumptions

2. **Prioritize with stakeholders:**
   - Align with business goals
   - Consider resource constraints
   - Identify quick wins

3. **Create implementation tickets:**
   - Break down recommendations
   - Assign ownership
   - Set deadlines

4. **Track progress:**
   - Update task lists
   - Monitor implementation
   - Measure impact

5. **Schedule next expansion analysis:**
   - Recommended frequency: Monthly or quarterly
   - Track improvements over time
   - Refine recommendations

---

## Success Metrics

**Measure success by:**
- Reduction in repetitive tasks
- Increase in code reusability
- Improvement in developer satisfaction
- Reduction in time to implement new features
- Increase in system consistency
- Reduction in bugs and issues
- Improvement in documentation quality

---

## Related Documentation

- **[expand-prompts.md](./expand-prompts.md)** — Prompt recommendations
- **[expand-guidelines.md](./expand-guidelines.md)** — Guideline recommendations
- **[expand-triggers.md](./expand-triggers.md)** — Trigger analysis
- **[expand-functionality.md](./expand-functionality.md)** — Feature recommendations
- **[expand-pages.md](./expand-pages.md)** — Page recommendations
- **[expand-templates.md](./expand-templates.md)** — Template recommendations
- **[expand-patterns.md](./expand-patterns.md)** — Block pattern recommendations
- **[expand-components.md](./expand-components.md)** — Component recommendations
- **[expand-data.md](./expand-data.md)** — Data structure recommendations
- **[expand-dev-tools.md](./expand-dev-tools.md)** — Dev tools recommendations

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial expand orchestrator coordinating 10 expansion analyses |
```

---

## Execution Instructions

### To run complete expansion analysis:

```bash
expand
# or
expand all
```

This will:
1. Run all 10 expansion prompts in sequence
2. Generate 10 detailed reports
3. Create master consolidation report
4. Provide unified roadmap

### To run specific expansion category:

```bash
expand prompts        # Just prompt recommendations
expand guidelines     # Just guideline recommendations
expand functionality  # Just feature recommendations
expand pages          # Just page recommendations
expand templates      # Just template recommendations
expand patterns       # Just block pattern recommendations
expand components     # Just component recommendations
expand data           # Just data structure recommendations
expand triggers       # Just trigger analysis
expand dev-tools      # Just dev tools recommendations
```

---

## Success Criteria

✅ All 10 expansion prompts executed  
✅ All 10 detailed reports generated  
✅ Master consolidation report created  
✅ Unified priority matrix completed  
✅ Dependency graph mapped  
✅ Implementation roadmap provided  
✅ Success metrics defined  
✅ Next steps documented

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial expand orchestrator with 10 sub-prompts |
