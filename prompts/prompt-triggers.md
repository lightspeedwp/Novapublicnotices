# Prompt Triggers

Quick reference for when to use each prompt file.

## When to Use Each Prompt

### `/prompts/cleanup.md`
**Trigger phrases:**
- "Clean up the codebase"
- "Audit against guidelines"
- "Remove inline styles"
- "Fix standards violations"
- "Prepare for production"
- "Code quality check"
- "Enforce project rules"

**Use when:**
- Starting a new sprint
- Before major releases
- After rapid prototyping
- When technical debt accumulates
- Before WordPress handoff

### `/prompts/continue.md`
**Trigger phrases:**
- "Continue development"
- "Resume work"
- "What's next?"
- "How do I start?"
- "Show me the project structure"
- "I'm new to this project"

**Use when:**
- Starting a work session
- Onboarding a new developer
- Returning after a break
- Context switching from another project
- Need to understand project conventions

### `/guidelines/Guidelines.md`
**Trigger phrases:**
- "What are the project rules?"
- "How should I structure this?"
- "Is this allowed?"
- "What's the standard for...?"
- "Show me the requirements"

**Use when:**
- Making architectural decisions
- Resolving code review questions
- Planning new features
- Settling team debates
- Documenting exceptions

## Common Scenarios

### Scenario: New Developer Joining
1. Read `/guidelines/Guidelines.md`
2. Follow `/prompts/continue.md` setup section
3. Review recent reports in `/reports/`
4. Check `/tasks/task-list.md` for available work

### Scenario: Starting New Feature
1. Check `/guidelines/Guidelines.md` for relevant section
2. Follow `/prompts/continue.md` "Starting a New Feature" workflow
3. Create data files first (EN + AF)
4. Implement with semantic classes
5. Update `/tasks/task-list.md`

### Scenario: Code Review Fails
1. Run `/prompts/cleanup.md` audit
2. Check specific guideline sections
3. Fix violations
4. Re-submit for review

### Scenario: Preparing for WordPress Handoff
1. Run full `/prompts/cleanup.md` audit
2. Verify all guidelines met
3. Generate `/reports/` documentation
4. Create handoff checklist in `/docs/`

### Scenario: Technical Debt Accumulating
1. Schedule cleanup sprint
2. Run `/prompts/cleanup.md` checklist
3. Document findings in `/reports/`
4. Create remediation tasks in `/tasks/`

### Scenario: Bilingual Content Update
1. Locate relevant data files in `/src/app/data/`
2. Update both `.en.ts` and `.af.ts` files
3. Verify types match
4. Test language switching
5. Follow `/guidelines/Guidelines.md` section 12

### Scenario: Adding New Notice Category
1. Review `/guidelines/Guidelines.md` section 9
2. Update category data files (EN + AF)
3. Add category-specific fields if needed
4. Update category badge component
5. Test search and filtering
6. Document in `/CHANGELOG.md`

### Scenario: Styling Question
1. Check `/src/styles/theme.css` for available tokens
2. Review `/guidelines/Guidelines.md` section 13
3. Use semantic class names
4. Never use inline styles
5. Test in both languages

### Scenario: Authentication Flow Change
1. Review `/guidelines/Guidelines.md` section 8.1
2. Update both logged-in and logged-out states
3. Update data files in `/src/app/data/auth/`
4. Test access control rules
5. Document behavior

### Scenario: Performance Issue
1. Check file sizes (max 500 lines recommended)
2. Review `/guidelines/Guidelines.md` section 16
3. Implement lazy loading if needed
4. Split large data files
5. Audit component rendering

## Quick Decision Tree

```
Need to understand project rules?
  → /guidelines/Guidelines.md

Need to start working?
  → /prompts/continue.md

Need to fix code quality?
  → /prompts/cleanup.md

Need to add bilingual content?
  → /guidelines/Guidelines.md section 12
  → Check /src/app/data/ structure

Need to add new page?
  → /prompts/continue.md "Adding a New Page"
  → /guidelines/Guidelines.md section 7

Need to style something?
  → /guidelines/Guidelines.md section 13
  → Check /src/styles/theme.css

Unsure if something is allowed?
  → /guidelines/Guidelines.md section 4

Need to organize files?
  → /guidelines/Guidelines.md section 6

Need to understand routes?
  → /guidelines/Guidelines.md section 8
  → Check /src/app/routes.tsx
```

## Emergency Reference

### "I broke something!"
1. Check console for errors
2. Verify TypeScript compilation
3. Review recent changes in git
4. Check if data files match types
5. Test authentication state
6. Verify language switching

### "Where does this file go?"
- Prompts → `/prompts/`
- Reports → `/reports/`
- Tasks → `/tasks/`
- Docs → `/docs/`
- Guidelines → `/guidelines/`
- Scripts → `/scripts/`
- Nothing else in root!

### "How do I name this file?"
- Pages: `PascalCase.tsx`
- Components: `PascalCase.tsx`
- Data: `kebab-case.en.ts` or `kebab-case.af.ts`
- Utilities: `kebab-case.ts`
- Documentation: `kebab-case.md`

### "Is inline styling allowed?"
**NO.** Never use `style={{}}` for visual properties.
Only exception: truly dynamic computed values (rare).
Always use semantic CSS classes instead.

### "Do I need bilingual support?"
**YES.** Always create both `.en.ts` and `.af.ts` data files.
English and Afrikaans ship together from day one.

### "Can I hard-code this color?"
**NO.** Always use CSS variables from `/src/styles/theme.css`.
Never hard-code hex, rgb, or hsl values in components.

## Maintenance Schedule

### Daily
- Follow `/prompts/continue.md` workflow
- Update `/tasks/task-list.md` as you work
- Document decisions in code comments

### Weekly
- Review `/tasks/task-list.md`
- Quick cleanup audit (inline styles check)
- Update `/CHANGELOG.md`

### Sprint End
- Full `/prompts/cleanup.md` audit
- Generate progress report in `/reports/`
- Update `/docs/` with new patterns
- Review and update `/tasks/task-list.md`

### Pre-Release
- Complete `/prompts/cleanup.md` checklist
- Full accessibility audit
- Performance audit
- Bilingual testing
- Generate handoff documentation

## Getting Help

If prompts don't cover your scenario:
1. Check `/docs/` for additional documentation
2. Review similar existing implementations
3. Consult `/guidelines/Guidelines.md` principles
4. Document your decision for future reference
5. Add to `/docs/` if it's a common pattern
