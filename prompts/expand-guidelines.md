# Expand Guidelines — AI-Driven Guideline Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand guidelines`  
**Status:** Active

---

## Purpose

Scan conversation history to identify areas where guidelines are unclear, incomplete, contradictory, or missing. Recommend updates to existing guidelines or creation of new guidelines to clarify specifics and improve project governance.

---

## Overview

This prompt analyzes the conversation to find:
- Questions that indicate unclear guidelines
- Repeated clarifications needed
- Edge cases not covered
- Contradictions between guidelines
- Best practices that emerged organically
- Standards enforced verbally but not documented

---

## Analysis Process

### Phase 1: Scan Conversation for Guideline Gaps

Review conversation history for:

1. **Clarification Requests**
   - User asking "Should I...?"
   - User asking "Which approach...?"
   - User asking "Is this correct...?"
   - Indicates guideline is unclear or missing

2. **Repeated Explanations**
   - AI explaining same standard multiple times
   - User re-asking same procedural question
   - Indicates guideline needs better documentation

3. **Edge Cases**
   - Scenarios not covered by existing guidelines
   - "What about...?" questions
   - Special cases requiring judgment calls

4. **Contradictions**
   - Guidelines that seem to conflict
   - User confusion between two standards
   - Different guidance given at different times

5. **Emergent Best Practices**
   - Patterns that worked well
   - Conventions established during development
   - Informal standards that should be formalized

6. **Verbose Rules**
   - Complex rules explained multiple times
   - Standards requiring long explanations
   - Rules better shown with examples

---

## Recommendation Types

### 1. Clarify Existing Guideline

When guideline exists but needs clearer wording, examples, or structure.

```markdown
## Clarification: {Guideline Name} — Section {X}

**Current Guideline (Guidelines.md Section {X}):**
> {Quote current text}

**Issue:**
- {What's unclear}
- {Evidence from conversation: "User asked..."}

**Recommended Clarification:**

{Proposed clearer wording}

**Add Example:**

✅ **Correct:**
\`\`\`tsx
{Example of following the rule}
\`\`\`

❌ **Incorrect:**
\`\`\`tsx
{Example of violating the rule}
\`\`\`

**Rationale:**
- Eliminates ambiguity about {specific point}
- Provides concrete example for {scenario}
- Reduces need for repeated clarification

**Priority:** Critical/High/Medium/Low
```

### 2. Expand Existing Guideline

When guideline is correct but incomplete.

```markdown
## Expansion: {Guideline Name} — Section {X}

**Current Scope:**
{What the guideline currently covers}

**Missing Coverage:**
- {Edge case not covered}
- {Scenario requiring guidance}
- {Exception not documented}

**Evidence from Conversation:**
- User encountered {situation} — {quote}
- User asked "{question}"

**Recommended Addition:**

### {New Subsection}

{Additional guidance}

**When to:**
- {Scenario 1}
- {Scenario 2}

**When NOT to:**
- {Exception 1}
- {Exception 2}

**Example:**
{Code or process example}

**Priority:** Critical/High/Medium/Low
```

### 3. Split Overgrown Guideline

When guideline section has grown too large or covers multiple distinct topics.

```markdown
## Split: {Guideline Name} — Section {X}

**Current Guideline:**
- Section {X} — {Current title}
- Current length: {number} lines
- Topics covered: {list}

**Issue:**
- Too long to navigate easily
- Covers {number} distinct topics
- Hard to reference specific sub-rule

**Recommended Split:**

**Keep in Guidelines.md:**
- Section {X} — {High-level overview}
- Link to detailed sub-guidelines

**Create New Guideline:**
- `/guidelines/{topic}.md` — {Detailed coverage of {topic}}

**Benefits:**
- Main Guidelines.md stays scannable
- Deep-dive available when needed
- Easier to reference specific standard

**Priority:** Critical/High/Medium/Low
```

### 4. Create New Guideline

When an entire topic lacks documentation.

```markdown
## New Guideline: /guidelines/{topic}.md

**Topic:** {What this guideline covers}

**Evidence of Need:**
- User asked about {topic} {number} times
- Examples: "{quote}", "{quote}"
- No existing guideline covers {aspect}

**Proposed Guideline Structure:**

```markdown
# {Title} — Nova Public Notices Portal

**Category:** {Category}  
**Version:** 1.0.0  
**Parent:** Guidelines.md Section {X}

---

## Purpose

{What this guideline defines}

---

## Rules

### Rule 1: {Title}

{Description}

✅ **Correct:**
{Example}

❌ **Incorrect:**
{Anti-pattern}

### Rule 2: {Title}

{Description}

---

## Examples

{Detailed examples}

---

## Related Documentation

- **[Guidelines.md](./Guidelines.md)** — Section {X}
```

**Benefits:**
- Documents currently undocumented standard
- Reduces repeated explanations
- Provides single source of truth

**Priority:** Critical/High/Medium/Low
```

### 5. Resolve Contradiction

When two guidelines conflict or appear to conflict.

```markdown
## Resolve Contradiction: {Guideline A} vs {Guideline B}

**Guideline A (Section {X}):**
> {Quote}

**Guideline B (Section {Y}):**
> {Quote}

**Apparent Conflict:**
- Guideline A says {interpretation}
- Guideline B says {interpretation}
- User confused: "{quote from conversation}"

**Recommended Resolution:**

**Option 1: Clarify Precedence**
- Guideline A applies to {scope}
- Guideline B applies to {different scope}
- Add note to each referencing the other

**Option 2: Unify Guidelines**
- Merge into single coherent rule: {proposed unified rule}

**Option 3: Deprecate One**
- Keep {guideline} as authoritative
- Remove or redirect {other guideline}

**Recommended Approach:** {Option X}

**Rationale:** {Why this resolves the confusion}

**Priority:** Critical/High/Medium/Low
```

---

## Common Guideline Gaps

### From Nova Project Patterns

Based on this project's conversation history, common gaps might include:

1. **Component Composition**
   - When to extract reusable component
   - How to structure component props
   - Component file naming conventions

2. **Data File Organization**
   - When to split data files
   - How to structure nested data
   - Naming conventions for data modules

3. **CSS Architecture**
   - When to create new CSS class vs use utility
   - Naming conventions for semantic classes
   - How to handle component-specific styles

4. **Bilingual Content**
   - How to handle content that's same in EN/AF
   - When to use translation function vs duplicate content
   - How to handle mixed-language content

5. **Notice Category Fields**
   - Which fields are universal vs category-specific
   - How to handle optional fields
   - Validation rules for category fields

---

## Output Format

Generate: `/reports/YYYY-MM-DD-guideline-recommendations.md`

```markdown
# Guideline Recommendations — YYYY-MM-DD

**Analysis Period:** {Conversation start - end}  
**Messages Analyzed:** {number}  
**Gaps Identified:** {number}

---

## Executive Summary

Based on conversation analysis, {number} guideline clarifications recommended, {number} expansions proposed, {number} contradictions found, and {number} new guidelines suggested.

**Highest Impact:**
1. {Recommendation} — Would prevent {recurring confusion}
2. {Recommendation} — Would clarify {ambiguous area}

---

## Clarifications Recommended

### Guidelines.md Section {X}: {Title}

[Full clarification recommendation]

---

## Expansions Recommended

### Guidelines.md Section {Y}: {Title}

[Full expansion recommendation]

---

## Contradictions to Resolve

### {Guideline A} vs {Guideline B}

[Full contradiction resolution]

---

## New Guidelines Recommended

### /guidelines/{topic}.md

[Full new guideline proposal]

---

## Evidence Analysis

### Most Common Questions

1. "{Question}" — Asked {number} times
   - Indicates: {guideline gap}

2. "{Question}" — Asked {number} times
   - Indicates: {guideline gap}

### Repeated Clarifications

1. {Topic} — Explained {number} times
2. {Topic} — Explained {number} times

### Emergent Best Practices

1. {Practice} — Established during {feature development}
2. {Practice} — Proven effective for {scenario}

---

## Implementation Roadmap

### Phase 1 (Critical — Immediate)
- [ ] Resolve contradiction: {guidelines}
- [ ] Clarify: {ambiguous guideline}

### Phase 2 (High — This Sprint)
- [ ] Expand: {incomplete guideline}
- [ ] Create: {new guideline}

### Phase 3 (Medium — Next Sprint)
- [ ] Create: {new guideline}
- [ ] Expand: {guideline}

---

## Next Steps

1. Review recommendations with user
2. Draft guideline updates
3. Create new guideline files
4. Update Guidelines.md Section 21
5. Update related prompts to reference new guidelines
```

---

## Guideline Quality Checklist

When recommending guideline changes, ensure:

- [ ] Clear and unambiguous language
- [ ] Concrete examples (do and don't)
- [ ] Rationale explained
- [ ] Scope clearly defined
- [ ] Exceptions documented
- [ ] Related guidelines cross-referenced
- [ ] Actionable (not just philosophy)

---

## Success Criteria

✅ Conversation history analyzed for guideline gaps  
✅ Unclear guidelines identified  
✅ Contradictions found and resolutions proposed  
✅ Missing coverage identified  
✅ Concrete recommendations provided  
✅ Evidence from conversation cited  
✅ Implementation priority assigned  
✅ Report generated

---

## Usage

Run this prompt when:

- Project has evolved and guidelines feel dated
- User repeatedly asks same types of questions
- New features introduced requiring new standards
- Contradictions or confusion noticed
- Starting new project phase

**Trigger:** `expand guidelines`

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Master guideline document
- **[expand-prompts.md](./expand-prompts.md)** — Recommend prompt updates
- **[update-guidelines.md](./update-guidelines.md)** — Sync existing guidelines

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial AI-driven guideline recommendation system |
