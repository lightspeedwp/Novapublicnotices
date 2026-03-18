# Audit Accessibility — Comprehensive WCAG 2.1 AA Audit

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `audit accessibility`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Comprehensive accessibility audit for the Nova Public Notices Portal covering focus visibility, keyboard navigation, ARIA labelling, touch target sizing, and bilingual accessibility compliance (English/Afrikaans).

**When to Use:** After building new notice templates, forms, or interactive components. Required before production deployment of public-facing legal content.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` (Section 16 - Accessibility)
- `/guidelines/locale-architecture.md` (Bilingual accessibility)

---

## Workflow Steps

### Step 1: Focus Visibility Audit

Scan all `.tsx` and `.css` files for:

1. **`:focus-visible` styles:** Every interactive element (buttons, links, inputs, selects, notice card links) MUST have visible `:focus-visible` style.
2. **Focus ring styling:** Focus indicators must use CSS variables from theme.css — no `outline: none` without replacement.
3. **Custom focus:** Components with custom focus styling must meet 3:1 contrast against adjacent colors.
4. **Focus suppression:** Search for `outline: none` violations unless paired with replacement indicator.
5. **Modal focus:** Notice submission modals and login gates manage focus correctly.

**Priority Components:**
- Notice cards (clickable)
- Search filter controls
- Category badges (if clickable)
- Language switcher
- Pagination buttons
- Submit notice form fields

### Step 2: Keyboard Navigation

**Notice Portal Specific:**

1. **Tab order:** Notice cards reachable via Tab in logical DOM order.
2. **Escape key:** Search filters, language switcher dropdown, moderation modals close on Escape.
3. **Enter key:** Notice card links activate on Enter; form submit buttons work with Enter.
4. **Skip link:** "Skip to search results" or "Skip to main content" link exists.
5. **Focus trap:** Login-required modal traps focus correctly.
6. **Filter navigation:** Category filters navigable via keyboard.
7. **Pagination:** Keyboard accessible pagination controls.

### Step 3: ARIA Labelling

**Notice Portal Specifics:**

1. **Icon-only buttons:**
   - Language switcher icon: `aria-label="Switch to Afrikaans"` / `"Skakel na Engels"`
   - Search submit icon: `aria-label="Search notices"` / `"Soek kennisgewings"`
   - Filter clear icon: `aria-label="Clear filters"` / `"Duidelike filters"`
   - Download PDF icon: `aria-label="Download notice as PDF"`

2. **Form associations:**
   - Submit notice form: Every input has visible `<label>` or `aria-label`
   - Search input: Properly labelled in both languages
   - Filter dropdowns: Labelled with category/location context

3. **Notice metadata:**
   - Reference numbers: `aria-label="Reference number: {ref}"`
   - Publish dates: Proper date formatting with aria-label
   - Status badges: `aria-label="Notice status: {status}"`

4. **Dynamic regions:**
   - Search results count: `aria-live="polite"`
   - Filter application: `aria-live="polite"` for result updates
   - Form validation errors: `aria-live="assertive"`

5. **Bilingual ARIA:**
   - ARIA labels must match page language
   - English page: English aria-labels
   - Afrikaans page: Afrikaans aria-labels

### Step 4: Touch Target Sizing

Per Guidelines.md Section 16 and legal notice requirements:

| Control Type | Minimum Size | Reason |
|---|---|---|
| Notice card (entire card) | 100% width, min 120px height | Primary interaction |
| Category badges (clickable) | 44x44px | Filter controls |
| Pagination buttons | 44x44px | Navigation |
| Language switcher | 44x44px | Critical control |
| Submit notice button | 44x44px | Primary action |
| Search submit button | 44x44px | Primary action |
| Filter checkboxes/radios | 44x44px | Form controls |
| Icon-only buttons | 44x44px | All icon buttons |

**Audit Steps:**

1. **Measure:** Check computed size of all interactive elements.
2. **Spacing:** Adjacent filter buttons must have 8px minimum spacing.
3. **Mobile:** Touch targets remain 44x44px on viewport ≤768px.
4. **Notice cards:** Full card clickable area, not just title link.

### Step 5: Image & Media Accessibility

**Notice Portal Images:**

1. **Category icons:** SVG icons have `aria-label` describing category.
2. **Publisher logos:** Alt text with organization name.
3. **Ad placeholders:** `aria-hidden="true"` or descriptive alt.
4. **Notice attachments:** PDF icons have descriptive labels.
5. **Decorative images:** Empty alt (`alt=""`) or `aria-hidden="true"`.

### Step 6: Color & Contrast

**Nova News Brand Colors:**

Verify contrast ratios for:
- Primary color (`#09082f`) against white: Must be ≥ 4.5:1
- Accent color (`#d70025`) against white: Must be ≥ 4.5:1
- Category badge backgrounds: Must meet 3:1 minimum
- Form validation errors: Must meet 4.5:1
- Status indicators: Color + icon (not color alone)

**Special Checks:**
- Disabled form fields visible but distinguishable
- Focus rings meet 3:1 contrast
- Link text distinguishable from body text

### Step 7: Bilingual Accessibility

**Language-Specific Checks:**

1. **Page language:** `<html lang="en">` or `<html lang="af">` correctly set.
2. **Lang attributes:** Mixed-language content has `lang` attribute.
3. **Screen readers:** Proper pronunciation in both languages.
4. **Form labels:** Labels match form language (no English labels on Afrikaans forms).
5. **Error messages:** Validation errors in correct language.
6. **Date formats:** Locale-appropriate date formatting.

### Step 8: Legal Notice Accessibility

**Critical for Compliance:**

1. **Notice text:** Minimum 16px font size, high contrast.
2. **Reference numbers:** Clearly readable and selectable (for copying).
3. **Legal deadlines:** Visually prominent and announced by screen readers.
4. **Contact information:** Properly formatted and accessible.
5. **Document attachments:** Clear indication of file type and size.

### Step 9: Report

Save report to `/reports/YYYY-MM-DD-accessibility-audit.md`:

```markdown
# Accessibility Audit — Nova Public Notices Portal

**Date:** YYYY-MM-DD  
**Standard:** WCAG 2.1 AA  
**Languages:** English, Afrikaans

---

## Executive Summary
{Compliance status and critical issues}

## Focus Visibility
### Violations
- File: `/src/app/components/NoticeCard.tsx`
  - Issue: No :focus-visible styling
  - Fix: Add CSS variable-based focus ring

## Keyboard Navigation
- [ ] Notice cards keyboard accessible
- [ ] Search filters keyboard accessible
- [ ] Pagination keyboard accessible
- [ ] Language switcher keyboard accessible

## ARIA Labelling
### Icon-Only Buttons
- Language switcher: ❌ Missing aria-label
- Search button: ✅ Has aria-label
- Filter clear: ❌ Missing bilingual labels

### Forms
- Submit notice form: {status}
- Search form: {status}

## Touch Targets
### Violations (< 44x44px)
- Filter checkboxes: 36x36px → need 44x44px
- Pagination arrows: 40x40px → need 44x44px

## Bilingual Compliance
- [ ] Page lang attributes set correctly
- [ ] ARIA labels match page language
- [ ] Form labels in correct language
- [ ] Error messages bilingual

## Legal Notice Specific
- [ ] Reference numbers accessible
- [ ] Dates formatted correctly
- [ ] Contact info accessible
- [ ] Attachments clearly labelled

## Color Contrast
- Primary (#09082f) on white: ✅ 15.8:1
- Accent (#d70025) on white: ✅ 6.4:1
- Category badges: {status}

## Critical Issues (P1)
- {issue blocking users}

## Major Issues (P2)
- {issue degrading experience}

## Minor Issues (P3)
- {best practice improvements}

## Compliance Score
{Percentage of checks passed}
```

---

## Success Criteria

- [ ] Every interactive element has visible `:focus-visible` styling
- [ ] All notice cards keyboard accessible
- [ ] All icon-only buttons have bilingual `aria-label`
- [ ] All interactive elements meet 44x44px minimum
- [ ] All images have appropriate `alt` attributes
- [ ] Color contrast meets WCAG AA thresholds
- [ ] Bilingual ARIA labels implemented
- [ ] Legal notice content fully accessible
- [ ] Report saved to `/reports/`

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 16
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual standards
- **[orchestrator.md](./orchestrator.md)** — Parent audit

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial accessibility audit for Nova Public Notices Portal with bilingual support |
