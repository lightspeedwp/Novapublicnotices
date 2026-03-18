# Audit A11y — Quick Accessibility Check

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `audit a11y`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Quick accessibility check for Nova Public Notices Portal — semantic HTML, keyboard navigation, ARIA labels, bilingual support, and reduced motion. This is the quick version; use `audit accessibility` for comprehensive WCAG 2.1 AA audit.

**When to Use:** Quick health check after building components, or during development for rapid feedback.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` (Section 16 - Accessibility)
- For comprehensive audit, use `/prompts/audit-accessibility.md`

---

## Workflow Steps

### Step 1: Semantic HTML Quick Check

Scan 5-10 random `.tsx` files for:

1. **Heading hierarchy:** One `<h1>` per page, sequential headings
2. **Landmark elements:** `<main>`, `<nav>`, `<header>`, `<footer>` present
3. **Button vs link:** `<button>` for actions, `<a>` for navigation
4. **Notice cards:** Use semantic `<article>` or similar

### Step 2: Keyboard Navigation Spot Check

Test 3 key pages:

1. **Homepage:** Tab through all interactive elements
2. **Search Results:** Keyboard accessible filters and notice cards
3. **Single Notice:** Downloadable attachments keyboard accessible

**Check:**
- All interactive elements focusable
- Logical tab order
- Escape closes modals/dropdowns

### Step 3: ARIA Labels Quick Scan

Search for icon-only buttons missing labels:

**Critical for Nova:**
- Language switcher: `aria-label="Switch to Afrikaans"` / `"Skakel na Engels"`
- Search submit: `aria-label`
- Filter buttons: `aria-label`
- Download PDF: `aria-label`

**Regex search:**
```bash
# Find icon-only buttons without aria-label
grep -r "<button[^>]*<.*Icon" --include="*.tsx"
```

### Step 4: Bilingual ARIA Check

**Language-specific labels:**
- English pages: English aria-labels only
- Afrikaans pages: Afrikaans aria-labels only
- No mixed language aria-labels

### Step 5: Touch Targets Quick Check

Measure 5 key interactive elements:

**Must be 44x44px:**
- Category filter badges
- Pagination buttons
- Language switcher
- Submit notice button
- Search button

### Step 6: Reduced Motion

Check if CSS includes:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Step 7: Quick Report

Output summary (no full report saved):

```markdown
## A11y Quick Check — YYYY-MM-DD

### Semantic HTML
- Heading hierarchy: ✅ / ❌
- Landmarks: ✅ / ❌
- Button/link usage: ✅ / ❌

### Keyboard Navigation
- Homepage: ✅ / ❌
- Search: ✅ / ❌
- Single Notice: ✅ / ❌

### ARIA Labels
- Icon buttons checked: {N}
- Missing labels: {N}
- Bilingual labels: ✅ / ❌

### Touch Targets
- Measured elements: {N}/5
- Below 44x44px: {N}

### Reduced Motion
- Media query present: ✅ / ❌

**Next Step:** {Pass / Run full audit accessibility}
```

---

## Success Criteria

- [ ] Spot check completed on 5-10 files
- [ ] Key pages keyboard tested
- [ ] Icon-only buttons scanned for aria-label
- [ ] Bilingual labels verified
- [ ] Touch targets measured
- [ ] Reduced motion check complete
- [ ] Summary output (no full report needed)

---

## Related Documentation

- **[audit-accessibility.md](./audit-accessibility.md)** — Full comprehensive audit
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 16
- **[orchestrator.md](./orchestrator.md)** — Parent audit

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial quick a11y check for Nova Public Notices Portal |
