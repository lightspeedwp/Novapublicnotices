# Fix Orchestrator — Run All Fix Prompts

**Trigger Word:** `fix`  
**Category:** Orchestrator  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18

---

## Purpose

Master orchestrator that runs all fix/correction prompts in sequence to identify and fix common issues across the codebase.

**Use this when:**
- You want to run all automated fixes
- Preparing for deployment
- After major refactoring
- Regular maintenance cleanup

---

## Fix Prompts to Run

This orchestrator executes the following prompts in order:

### 1. Fix Titles ✅
**Trigger:** `fix titles`  
**File:** `/prompts/fix-titles.md`  
**Purpose:** Enforce sentence case for all titles and headings  
**Priority:** High (user-facing content)

### 2. Fix Icons (Future)
**Trigger:** `fix icons`  
**File:** `/prompts/fix-icons.md` (to be created)  
**Purpose:** Ensure all icons use Phosphor Icons (no Lucide)  
**Priority:** Medium

### 3. Fix Variables (Future)
**Trigger:** `fix variables`  
**File:** `/prompts/fix-variables.md` (to be created)  
**Purpose:** Replace hardcoded values with CSS variables  
**Priority:** High

### 4. Fix Spacing (Future)
**Trigger:** `fix spacing`  
**File:** `/prompts/fix-spacing.md` (to be created)  
**Purpose:** Enforce gap-first spacing (no margins)  
**Priority:** Medium

### 5. Fix Sentence Case (Future)
**Trigger:** `fix sentence-case`  
**File:** `/prompts/fix-sentence-case.md` (to be created)  
**Purpose:** Alias for fix-titles  
**Priority:** High

---

## Execution Sequence

Run each fix prompt in order. Each prompt will:
1. Scan relevant files
2. Identify issues
3. Generate fix suggestions
4. Apply fixes (if safe)
5. Generate report

**Total Estimated Time:** 15-30 minutes

---

## Current Fix Prompts

### Fix Titles (Active) ✅

**What it fixes:**
- Title Case → Sentence case
- Navigation labels
- Button text
- Hero titles
- Heading text
- Data file content

**Files affected:**
- Hero data (EN + AF)
- Navigation data
- Page components
- FAQ data
- All TSX files with titles

**Priority:** HIGH — User-facing content visibility

---

## Future Fix Prompts

### Fix Icons (Planned)

**What it will fix:**
- Lucide React imports → Phosphor Icons
- Icon weight consistency
- Icon size variables

### Fix Variables (Planned)

**What it will fix:**
- Hardcoded colors → CSS variables
- Hardcoded spacing → CSS variables
- Hardcoded fonts → CSS variables
- Inline styles → BEM classes

### Fix Spacing (Planned)

**What it will fix:**
- `margin` → `gap` or `padding`
- Margin-based layouts → Flexbox/Grid with gap
- Inconsistent spacing → Design system tokens

---

## Usage

### Run All Fix Prompts

Simply use the trigger word:
```
fix
```

This will execute all available fix prompts in sequence.

### Run Individual Fix Prompt

Use the specific trigger:
```
fix titles
fix icons
fix variables
fix spacing
```

---

## Report Output

The orchestrator will generate:

### Summary Report
```
Fix Orchestrator — Session Report
Date: 2026-03-18

Prompts Executed: 1/1
Total Issues Found: 47
Total Files Modified: 12
Total Changes Made: 53

Status: ✅ Complete
```

### Individual Prompt Reports

Each fix prompt generates its own detailed report:
- Issues found
- Files modified
- Changes made
- Before/after examples

### Master Fix Report

Consolidated report showing:
- All fixes applied
- Total impact
- Remaining issues
- Recommendations

---

## Pre-Flight Checklist

Before running fix orchestrator:

- [ ] Commit current work
- [ ] Create backup branch
- [ ] Review open files
- [ ] Close any file watchers
- [ ] Clear any build errors

---

## Post-Fix Actions

After running all fix prompts:

1. **Review Changes**
   - Check git diff
   - Verify fixes are correct
   - Look for edge cases

2. **Test Application**
   - Run dev server
   - Check all pages
   - Verify no broken links
   - Test navigation

3. **Update Documentation**
   - Note any patterns found
   - Update guidelines if needed
   - Create follow-up tasks

4. **Commit Changes**
   - Meaningful commit message
   - Reference fix prompt used
   - Note issue count fixed

---

## Safety Measures

The orchestrator includes safety checks:

✅ **Read-only scan first** — Preview issues before fixing  
✅ **Backup suggestions** — Show before/after  
✅ **File-by-file confirmation** — Review critical changes  
✅ **Rollback capability** — Git history preserved  
✅ **Error handling** — Graceful failures  

---

## Success Criteria

✅ All fix prompts executed successfully  
✅ No errors or warnings  
✅ Comprehensive reports generated  
✅ Changes reviewed and approved  
✅ Application still builds  
✅ No visual regressions  

---

## Priority Levels

**HIGH Priority (Run always):**
- fix-titles
- fix-variables

**MEDIUM Priority (Run regularly):**
- fix-icons
- fix-spacing

**LOW Priority (Run occasionally):**
- Other specialized fixes

---

## Integration with Other Prompts

The fix orchestrator works alongside:

- **audit-*** prompts — Identify issues
- **fix-*** prompts — Fix issues
- **cleanup** — General maintenance
- **status** — Health check

**Workflow:**
1. Run `status` — Check project health
2. Run `audit-*` — Identify specific issues
3. Run `fix` — Apply automated fixes
4. Run `cleanup` — Final polish

---

## Expansion Plan

As the project grows, add new fix prompts:

**Content Fixes:**
- fix-links (broken links)
- fix-images (missing alt text)
- fix-translations (missing AF content)

**Code Fixes:**
- fix-imports (unused imports)
- fix-types (TypeScript issues)
- fix-formatting (Prettier issues)

**Design Fixes:**
- fix-accessibility (a11y issues)
- fix-responsive (mobile breakpoints)
- fix-colors (contrast issues)

---

## Guidelines Reference

See `/guidelines/Guidelines.md` Section 13.5 for sentence case requirements.

---

## Related Prompts

- `fix titles` — Sentence case enforcement
- `audit-styling` — Style audit
- `cleanup` — General cleanup
- `status` — Project status

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-18 | Initial creation — Fix orchestrator with fix-titles |
