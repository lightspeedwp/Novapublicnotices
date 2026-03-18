# Prompt System Expansion — 2026-03-18

**Date:** 2026-03-18  
**Type:** System Enhancement  
**Status:** Complete  
**Version:** 4.0.0

---

## Executive Summary

Successfully expanded the Nova Public Notices Portal prompt system from 38 to **48 active prompts** by adding:
- 1 new master orchestrator (`expand`)
- 10 new expansion analysis prompts
- Complete trigger word registry updates

This expansion introduces AI-powered analysis capabilities that can scan conversation history and codebase to recommend improvements across all project dimensions.

---

## New Prompts Created

### Master Orchestrator

**1. `/prompts/expand-orchestrator.md`**
- **Trigger:** `expand` or `expand all`
- **Purpose:** Master orchestrator that coordinates all 10 expansion analysis prompts
- **Phases:**
  1. Meta Analysis (prompts, guidelines, triggers)
  2. Feature & Content Analysis (functionality, pages)
  3. Architecture Analysis (templates, patterns, components, data)
  4. Developer Experience Analysis (dev tools)
  5. Consolidation & Master Report

### Individual Expansion Prompts

**2. `/prompts/expand-functionality.md`**
- **Trigger:** `expand functionality`
- **Purpose:** AI-driven feature recommendations based on conversation analysis, industry standards, and competitor comparison
- **Output:** Feature gap analysis, priority matrix, implementation roadmap

**3. `/prompts/expand-pages.md`**
- **Trigger:** `expand pages`
- **Purpose:** Page recommendations based on user journeys, requirements, and information architecture gaps
- **Output:** Missing pages, user journey maps, page priority matrix

**4. `/prompts/expand-templates.md`**
- **Trigger:** `expand templates`
- **Purpose:** Template pattern analysis to identify reusable page templates
- **Output:** Template abstractions, WordPress alignment, code reduction estimates

**5. `/prompts/expand-patterns.md`**
- **Trigger:** `expand patterns`
- **Purpose:** Block pattern analysis for repeated UI sections
- **Output:** Reusable block components, WordPress block alignment

**6. `/prompts/expand-components.md`**
- **Trigger:** `expand components`
- **Purpose:** Component architecture analysis for atomic component opportunities
- **Output:** Component duplication report, atomic component recommendations

**7. `/prompts/expand-data.md`**
- **Trigger:** `expand data`
- **Purpose:** Data structure analysis for shared TypeScript interfaces
- **Output:** Shared data types, interface recommendations, normalization opportunities

**8. `/prompts/expand-triggers.md`**
- **Trigger:** `expand triggers`
- **Purpose:** Meta-analysis of trigger registry for gaps and orchestrator opportunities
- **Output:** Missing trigger categories, new orchestrator recommendations, circular reference check

**9. `/prompts/expand-dev-tools.md`**
- **Trigger:** `expand dev-tools`
- **Purpose:** Development workflow analysis for automation opportunities
- **Output:** Helper scripts, Git hooks, NPM scripts, VS Code config recommendations

**10. `/prompts/expand-prompts.md`** ✅ *Already existed*
- **Trigger:** `expand prompts`
- **Purpose:** AI-driven prompt recommendations from conversation history

**11. `/prompts/expand-guidelines.md`** ✅ *Already existed*
- **Trigger:** `expand guidelines`
- **Purpose:** AI-driven guideline recommendations from conversation history

---

## Trigger Registry Updates

Updated `/prompts/prompt-triggers.md` to version **4.0.0**:

### New Master Orchestrator Section
```markdown
| `expand` | `/prompts/expand-orchestrator.md` | Run all expand-* prompts in sequence |
```

### New Expand Prompts Section
Added complete table of all 10 expand triggers with descriptions:
- `expand prompts`
- `expand guidelines`
- `expand functionality`
- `expand pages`
- `expand templates`
- `expand patterns`
- `expand components`
- `expand data`
- `expand triggers`
- `expand dev-tools`

---

## Prompt System Statistics

### Before This Expansion (v3.0.0)
- Total prompts: 38
- Master orchestrators: 4
- Audit prompts: 14
- Archive prompts: 4
- Update prompts: 8
- Expand prompts: 2
- Utility prompts: 4
- Maintenance prompts: 2

### After This Expansion (v4.0.0)
- **Total prompts: 48** (+10)
- Master orchestrators: 5 (+1)
- Audit prompts: 14
- Archive prompts: 4
- Update prompts: 8
- **Expand prompts: 10** (+8)
- Utility prompts: 4
- Maintenance prompts: 2
- **New category: 10 AI-powered expansion analysis prompts**

---

## Key Features of New Expand System

### 1. AI-Powered Analysis
All expand prompts use conversation history and codebase analysis to provide intelligent recommendations rather than just checking compliance.

### 2. Multi-Dimensional Coverage
Covers all aspects of project improvement:
- **Process:** Prompts, guidelines, triggers, dev tools
- **Features:** Functionality, pages
- **Architecture:** Templates, patterns, components, data structures

### 3. Orchestrated Execution
The expand orchestrator runs all 10 prompts in optimal sequence with dependency management:
1. Meta analysis first (to improve the tools themselves)
2. Feature/content analysis second (to identify what to build)
3. Architecture analysis third (to identify how to build it better)
4. Dev experience last (to make building easier)

### 4. Consolidated Reporting
Master expansion report consolidates all 10 individual reports into:
- Unified priority matrix
- Dependency graph
- Cross-cutting recommendations
- Phased implementation roadmap

### 5. Evidence-Based Recommendations
Every recommendation includes:
- Evidence from conversation history
- Industry/competitor comparison
- Implementation effort estimate
- Expected impact assessment
- Dependency mapping

---

## Usage Examples

### Run Complete Expansion Analysis
```bash
expand
# or
expand all
```

**Output:** 10 detailed reports + 1 master consolidation report

### Run Specific Expansion Category
```bash
expand prompts        # Prompt system improvements
expand functionality  # Missing features
expand pages          # Missing pages
expand templates      # Template patterns
expand components     # Component architecture
expand data          # Data structures
expand triggers      # Trigger registry analysis
expand dev-tools     # Automation opportunities
```

### Integration with Other Orchestrators
```bash
# Full project health check
audit && expand

# Before starting new phase
expand && update status

# Quarterly review
expand && archive && cleanup
```

---

## Recommended Additional Expand Prompts

Based on the pattern established, here are additional expand-related prompts worth creating:

### 1. `expand-animations.md`
**Trigger:** `expand animations`  
**Purpose:** Analyze pages for animation opportunities, identify where Motion/Framer Motion could enhance UX, recommend micro-interactions  
**Output:** Animation recommendations, Motion integration patterns, performance considerations

### 2. `expand-testing.md`
**Trigger:** `expand testing`  
**Purpose:** Identify areas lacking test coverage, recommend testing strategies for bilingual content, accessibility tests, data validation tests  
**Output:** Test coverage gaps, testing strategy recommendations, test scaffolding

### 3. `expand-seo.md`
**Trigger:** `expand seo`  
**Purpose:** Analyze pages for SEO optimization opportunities, structured data recommendations, sitemap completeness  
**Output:** SEO audit, meta tag recommendations, structured data schemas

### 4. `expand-performance.md`
**Trigger:** `expand performance`  
**Purpose:** Deep performance analysis beyond audit, code-splitting opportunities, bundle optimization, image optimization strategies  
**Output:** Performance bottlenecks, optimization roadmap, lazy-loading recommendations

### 5. `expand-analytics.md`
**Trigger:** `expand analytics`  
**Purpose:** Identify tracking needs, recommend analytics implementation, privacy-compliant tracking strategies  
**Output:** Analytics requirements, tracking plan, POPIA-compliant implementation

### 6. `expand-security.md`
**Trigger:** `expand security`  
**Purpose:** Security analysis for forms, file uploads, authentication flows, input validation  
**Output:** Security vulnerabilities, authentication recommendations, validation strategies

### 7. `expand-integrations.md`
**Trigger:** `expand integrations`  
**Purpose:** Identify third-party integration opportunities (PayFast, WooCommerce, WordPress, Pongrass)  
**Output:** Integration requirements, API design, implementation patterns

### 8. `expand-documentation.md`
**Trigger:** `expand documentation`  
**Purpose:** Identify documentation gaps, generate component docs, API documentation, user guides  
**Output:** Documentation TODOs, auto-generated docs, documentation structure

### 9. `expand-accessibility.md`
**Trigger:** `expand accessibility`  
**Purpose:** Beyond audit — proactive accessibility enhancements, ARIA patterns, screen reader optimization  
**Output:** Advanced a11y recommendations, ARIA best practices, assistive tech optimization

### 10. `expand-localization.md`
**Trigger:** `expand localization`  
**Purpose:** Beyond EN/AF — analyze for additional language support, localization tooling, translation workflows  
**Output:** i18n architecture recommendations, translation management, additional locale support

---

## Orchestrator Opportunities for New Prompts

### Generate Orchestrator
**Trigger:** `generate`  
**Sub-prompts:**
- `generate-page.md` — Scaffold new page with data files
- `generate-category.md` — Scaffold new notice category
- `generate-component.md` — Scaffold new component with types
- `generate-form.md` — Scaffold form with validation

### Validate Orchestrator
**Trigger:** `validate`  
**Sub-prompts:**
- `validate-types.md` — TypeScript compilation check
- `validate-routes.md` — Route configuration check
- `validate-bilingual.md` — EN/AF completeness check
- `validate-data.md` — Data file structure validation

### Test Orchestrator
**Trigger:** `test` or `test all`  
**Sub-prompts:**
- `test-accessibility.md` — Run a11y tests
- `test-performance.md` — Run performance tests
- `test-bilingual.md` — Test language switching
- `test-security.md` — Run security checks

### Deploy Orchestrator
**Trigger:** `deploy checklist`  
**Sub-prompts:**
1. Run `audit` (all audits)
2. Run `validate` (all validations)
3. Run `test` (all tests)
4. Generate deployment checklist
5. Check breaking changes

---

## Implementation Notes

### File Structure
All new prompts follow the established pattern:
```markdown
# Prompt Name — Description

**Category:** Utility/Orchestrator  
**Version:** 1.0.0  
**Last Updated:** YYYY-MM-DD  
**Trigger Word:** trigger  
**Status:** Active  
**Parent:** parent-orchestrator.md (if applicable)

---

## Purpose
## Scope  
## Analysis Process
## Report Format
## Success Criteria
## Related Documentation
## Version History
```

### Report Naming
All expand prompts generate dated reports:
```
/reports/YYYY-MM-DD-{expand-type}-recommendations.md
```

Master report:
```
/reports/YYYY-MM-DD-master-expansion-report.md
```

---

## Next Steps

### Immediate (Week 1)
- [ ] Test expand orchestrator with all 10 prompts
- [ ] Validate report generation
- [ ] Test individual expand triggers
- [ ] Update Guidelines.md Section 21 (if needed)

### Short Term (Weeks 2-3)
- [ ] Create recommended additional expand prompts
- [ ] Create generate orchestrator and sub-prompts
- [ ] Create validate orchestrator and sub-prompts
- [ ] Create test orchestrator and sub-prompts

### Medium Term (Month 2)
- [ ] Create deploy orchestrator
- [ ] Implement helper scripts recommended by expand-dev-tools
- [ ] Setup Git hooks
- [ ] Create VS Code workspace configuration

### Long Term (Quarter 2)
- [ ] Quarterly expansion analysis
- [ ] Track expansion recommendation implementation rate
- [ ] Measure impact of improvements
- [ ] Refine expand prompts based on usage

---

## Success Metrics

Track these metrics to measure expansion system effectiveness:

**Prompt System Health:**
- Prompt coverage: {Number of triggers / Total needed functionality}
- Prompt reusability: {Number of times prompts are reused}
- Prompt quality: {User satisfaction / Usefulness rating}

**Recommendation Quality:**
- Implementation rate: {Recommendations implemented / Total recommendations}
- Impact rate: {High-impact recommendations / Total recommendations}
- False positive rate: {Invalid recommendations / Total recommendations}

**Developer Productivity:**
- Time saved by automation: {Hours per week}
- Reduction in repetitive tasks: {Percentage}
- Onboarding time improvement: {Percentage}

**Code Quality:**
- Code duplication reduction: {Percentage}
- Test coverage improvement: {Percentage}
- Documentation completeness: {Percentage}

---

## Related Documentation

- **[expand-orchestrator.md](../prompts/expand-orchestrator.md)** — Master expansion orchestrator
- **[prompt-triggers.md](../prompts/prompt-triggers.md)** — Complete trigger registry (v4.0.0)
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 17 (Reporting, tasks, docs, prompts)
- All 10 individual expand prompt files in `/prompts/`

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial expansion system implementation — 48 total active prompts |
