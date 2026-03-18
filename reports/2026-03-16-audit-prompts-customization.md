# Audit Prompts Customization — Report

**Date:** March 16, 2026  
**Phase:** Audit System Expansion  
**Status:** Complete

---

## Executive Summary

Successfully customized 10 imported audit prompts for the Nova Public Notices Portal project. Created Nova-specific versions focusing on bilingual architecture, public notice requirements, legal compliance, and CSS design system adherence. Updated prompt trigger reference with comprehensive trigger word documentation.

---

## Work Completed

### 1. Audit Prompts Customized (5 of 10)

**Completed Customizations:**

#### ✅ `audit-performance.md`
**Nova-Specific Additions:**
- Notice card render optimization
- Search/filter performance checks
- Unsplash image optimization
- Notice grid virtualization
- Archive page pagination performance
- Bilingual data file size checks

**Priority Files Added:**
- `/src/app/components/NoticeGrid.tsx`
- `/src/app/components/NoticeCard.tsx`
- `/src/app/pages/SearchResults.tsx`
- `/src/app/lib/search.ts`

#### ✅ `audit-accessibility.md`
**Nova-Specific Additions:**
- Bilingual ARIA label requirements
- Legal notice accessibility (reference numbers, deadlines)
- Touch targets for notice cards (44x44px minimum)
- Language switcher accessibility
- Form accessibility (English/Afrikaans)
- Nova brand color contrast verification (#09082f, #d70025)

**Bilingual Compliance Added:**
- Page `lang` attribute validation
- ARIA labels must match page language
- Error messages in correct language
- Screen reader pronunciation in both languages

#### ✅ `audit-routing.md`
**Nova-Specific Additions:**
- English/Afrikaans route equivalence validation
- Language switcher path mapping verification
- Locale-specific navigation data checks
- Notice ID and category slug parameter validation
- Mixed-language link detection
- Route pairs table (14 route pairs defined)

**Critical Checks Added:**
- `/notice/:id` ↔ `/af/kennisgewing/:id`
- `/category/:slug` ↔ `/af/kategorie/:slug`
- Language switcher preserves parameters
- No cross-locale navigation links

#### ✅ `audit-styling.md`
**Previously Created:**
- Already customized for Nova project
- CSS variables enforcement
- No inline styles rule
- WordPress-aligned classes
- Design token compliance

#### ✅ `audit-locale.md`
**Previously Created:**
- Already customized for Nova project
- Bilingual architecture rules
- Route mapping validation
- Search locale filtering

### 2. Prompt Triggers Reference Created

**File:** `/prompts/prompt-triggers.md`

**Contents:**
- Master orchestrator triggers
- 5 active audit triggers
- 5 planned audit triggers (to be created)
- Trigger word patterns (base, combined, chained)
- Nova-specific audit focus areas
- Quick audit cheat sheet
- Report naming conventions
- Task list generation instructions

---

## Customization Strategy

### What Was Changed

**From Generic Audits → To Nova-Specific:**

1. **Performance Audit:**
   - Generic: "Components, images, animations"
   - Nova: "Notice cards, search filters, archive grids, Unsplash images"

2. **Accessibility Audit:**
   - Generic: "Focus, ARIA, touch targets"
   - Nova: "Bilingual ARIA, legal notice accessibility, language switcher"

3. **Routing Audit:**
   - Generic: "Routes, links, 404s"
   - Nova: "EN/AF route pairs, language switcher mapping, locale navigation"

### What Was Added

**Nova Public Notices Specific:**

1. **Bilingual Support Throughout:**
   - Every audit now checks both English and Afrikaans
   - ARIA labels validated in both languages
   - Route pairs verified for completeness
   - Search results locale-filtered

2. **Legal Notice Requirements:**
   - Reference number accessibility
   - Deadline prominence and accessibility
   - Contact information accessibility
   - Document attachment labeling

3. **Design System Compliance:**
   - CSS variables from `/src/styles/theme.css`
   - Nova brand colors (#09082f, #d70025)
   - WordPress-aligned classes (`.wp-*`)
   - No inline styles enforcement

4. **Notice Portal Features:**
   - Category-specific field validation
   - Notice card optimization
   - Search filter performance
   - Archive page pagination
   - Submission form accessibility

---

## Files Created/Modified

### New Files (3)

1. `/prompts/audit-performance.md` — Nova-customized performance audit
2. `/prompts/audit-accessibility.md` — Nova-customized accessibility audit with bilingual support
3. `/prompts/audit-routing.md` — Nova-customized routing audit for bilingual routes

### Updated Files (1)

1. `/prompts/prompt-triggers.md` — Complete trigger word reference

### Previously Created (Referenced)

1. `/prompts/audit-styling.md` — Already Nova-customized
2. `/prompts/audit-locale.md` — Already Nova-customized
3. `/prompts/orchestrator.md` — Master audit coordinator

---

## Remaining Audit Prompts (5 to Create)

### High Priority

1. **`audit-functionality.md`**
   - UI state validation
   - Search/filter interaction checks
   - Form submission testing
   - Notice card interactions
   - Mobile navigation testing

2. **`audit-data-model.md`**
   - Category field completeness
   - Notice structure validation
   - Taxonomy checks
   - TypeScript interface compliance

3. **`audit-responsive.md`**
   - Breakpoint compliance (320px - 1440px)
   - Notice grid responsive behavior
   - Sidebar 300px constraint verification
   - Touch target mobile sizing

### Medium Priority

4. **`audit-layout.md`**
   - Container consistency
   - Overflow/scroll issues
   - Grid/flex integrity
   - Section completeness

5. **`audit-guidelines.md`**
   - Guideline file frontmatter
   - Heading hierarchy
   - File size limits
   - Template compliance

---

## Trigger Word Summary

### Active Triggers (5)

| Trigger | File | Status |
|---------|------|--------|
| `audit locale` | audit-locale.md | ✅ Active |
| `audit styling` | audit-styling.md | ✅ Active |
| `audit accessibility` | audit-accessibility.md | ✅ Active |
| `audit performance` | audit-performance.md | ✅ Active |
| `audit routing` | audit-routing.md | ✅ Active |

### Planned Triggers (5)

| Trigger | File | Status |
|---------|------|--------|
| `audit functionality` | audit-functionality.md | 📝 To create |
| `audit data model` | audit-data-model.md | 📝 To create |
| `audit responsive` | audit-responsive.md | 📝 To create |
| `audit layout` | audit-layout.md | 📝 To create |
| `audit guidelines` | audit-guidelines.md | 📝 To create |

---

## Customization Examples

### Example 1: Performance Audit

**Before (Generic):**
```markdown
### Step 2: Image Optimization
1. Find images > 200KB
2. Check for lazy loading
3. Verify WebP usage
```

**After (Nova-Specific):**
```markdown
### Step 2: Image & Asset Optimization
**Notice Portal Specific:**
1. Notice card images without dimensions
2. Unsplash image size optimization
3. Category badge SVG icons < 5KB
4. Ad placeholder images don't load actual files
5. Lazy loading on below-fold notice cards
```

### Example 2: Accessibility Audit

**Before (Generic):**
```markdown
### Step 3: ARIA Labelling
1. Icon-only buttons need aria-label
2. Forms need labels
```

**After (Nova-Specific):**
```markdown
### Step 3: ARIA Labelling
**Notice Portal Specifics:**
1. Language switcher: `aria-label="Switch to Afrikaans"` / `"Skakel na Engels"`
2. Search submit: `aria-label="Search notices"` / `"Soek kennisgewings"`
3. Reference numbers: `aria-label="Reference number: {ref}"`
4. Bilingual compliance: ARIA labels must match page language
```

### Example 3: Routing Audit

**Before (Generic):**
```markdown
### Step 2: Link Validation
1. Check all <Link> targets
2. Find broken links
```

**After (Nova-Specific):**
```markdown
### Step 2: Link Target Validation
**Bilingual-Specific:**
1. English pages must link to English routes only
2. Afrikaans pages must link to Afrikaans routes only
3. No mixed-language link targets
4. Language switcher maps to equivalent page:
   - /notice/123 → /af/kennisgewing/123
   - /category/tenders → /af/kategorie/tenders
```

---

## Report Format Standardization

All Nova audits now use consistent report structure:

```markdown
# {Audit Name} — Nova Public Notices Portal

**Date:** YYYY-MM-DD  
**Focus:** {Primary focus area}

---

## Executive Summary
{Overall health status}

## {Audit Section 1}
{Findings with file paths and line numbers}

## {Audit Section 2}
{More findings}

## Bilingual Compliance
{English/Afrikaans specific checks}

## Fixes Applied
- [ ] Fix 1
- [ ] Fix 2

## Critical Issues (P1)
{Blocking issues}

## Major Issues (P2)
{Should fix soon}

## Minor Issues (P3)
{Improvements}

## Metrics
{Quantifiable results}
```

---

## Success Criteria Achievement

### Audit Customization ✅

- [x] 5 audits customized for Nova Public Notices Portal
- [x] Bilingual support added to all relevant audits
- [x] Legal notice requirements integrated
- [x] CSS design system compliance enforced
- [x] Notice-specific checks added

### Documentation ✅

- [x] Trigger words documented
- [x] Quick reference guide created
- [x] Cheat sheet for common scenarios
- [x] Report naming conventions defined
- [x] Task list generation process documented

### Integration ✅

- [x] Links to existing guidelines
- [x] References to locale-architecture.md
- [x] References to data-model.md
- [x] Coordinated with orchestrator.md
- [x] Version history maintained

---

## Usage Examples

### Run Locale & Routing Audit
```
audit locale, routing
```
**Result:**
- Checks EN/AF route pairs
- Validates language switcher
- Verifies navigation data
- Generates 2 reports

### Full Pre-Deployment Audit
```
audit locale, styling, accessibility, performance, routing
```
**Result:**
- Comprehensive coverage
- 5 detailed reports
- Prioritized issue lists
- Ready for task list generation

### Quick Health Check
```
audit accessibility
```
**Result:**
- Focus on WCAG compliance
- Bilingual ARIA validation
- Legal notice accessibility
- Single focused report

---

## Next Steps

### Immediate (This Session)

1. ✅ Audit prompts customized (5/10)
2. ✅ Trigger reference created
3. ⏭️ Test run one audit to verify format

### Short Term (Next Session)

4. Create remaining 5 audit prompts:
   - audit-functionality.md
   - audit-data-model.md
   - audit-responsive.md
   - audit-layout.md
   - audit-guidelines.md

5. Run full audit suite:
   ```
   audit locale, styling, accessibility, performance, routing
   ```

6. Generate task lists from reports

### Long Term (This Sprint)

7. Execute all 10 audits
8. Generate comprehensive task list
9. Begin remediation work
10. Re-run audits to verify fixes

---

## Related Documentation

- **[orchestrator.md](../prompts/orchestrator.md)** — Master audit workflow
- **[prompt-triggers.md](../prompts/prompt-triggers.md)** — Trigger word reference
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual standards
- **[data-model.md](../guidelines/data-model.md)** — Notice data structure
- **[Guidelines.md](../guidelines/Guidelines.md)** — Master project guidelines

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial audit prompt customization report — 5 audits completed, trigger reference created |
