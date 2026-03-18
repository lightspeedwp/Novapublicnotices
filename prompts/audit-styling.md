# Styling System Audit — Sub-Audit Prompt

**Version:** 1.0.0  
**Last Updated:** 2026-03-16  
**Guidelines Referenced:** [Guidelines.md](../guidelines/Guidelines.md) sections 4.1, 4.2, 13

---

## Purpose

Audit styling implementation to ensure:
- No inline visual styles
- No hard-coded colors/fonts/spacing
- CSS variables used throughout
- WordPress-aligned semantic classes
- Proper design token usage

---

## Pre-Audit Requirements

1. Read `/guidelines/Guidelines.md` sections:
   - 4.1 (No inline visual styles)
   - 4.2 (No hard-coded visual values in TSX)
   - 13 (Design system and styling rules)
2. Read `/src/styles/theme.css` to understand available tokens
3. Know the CSS variable naming conventions

---

## Audit Scope

### Files to Audit

**All TSX/JSX Files:**
- `/src/app/pages/*.tsx`
- `/src/app/components/*.tsx`
- Any file with `className` or `style` attributes

**Style Files:**
- `/src/styles/*.css`
- Check for proper token definitions

**Button Components:**
- `/src/app/components/ui/button.tsx`
- Check for semantic variants

---

## Audit Checklist

### 1. Inline Styles

**Check:**
- [ ] No `style={{ color: '#...' }}`
- [ ] No `style={{ fontSize: '...' }}`
- [ ] No `style={{ padding: '...' }}`
- [ ] No `style={{ margin: '...' }}`
- [ ] No `style={{ background: '#...' }}`

**Allowed Exceptions:**
- Truly dynamic computed values
- Must have comment explaining why

**Look For:**
```tsx
// ❌ Forbidden inline styles
<div style={{ color: '#09082f', padding: '16px' }}>
<h1 style={{ fontFamily: 'Lexend', fontSize: '32px' }}>

// ✅ No inline styles
<div className="wp-text-primary wp-padding-4">
<h1 className="wp-heading-large">
```

### 2. Hard-Coded Colors

**Check:**
- [ ] No `bg-[#09082f]` arbitrary Tailwind classes
- [ ] No `text-[#d70025]` arbitrary classes
- [ ] No hex values in className strings
- [ ] No RGB/RGBA values in className strings

**Look For:**
```tsx
// ❌ Hard-coded colors
<div className="bg-[#09082f] text-[#d70025]">
<Button className="bg-[#d70025] hover:bg-[#b5001f]">

// ✅ CSS variables / semantic classes
<div className="wp-bg-primary wp-text-accent">
<Button className="wp-btn-accent text-white">
```

### 3. Hard-Coded Typography

**Check:**
- [ ] No `font-[Lexend]` or font family utilities
- [ ] No `text-[24px]` arbitrary font sizes
- [ ] No hard-coded line-heights
- [ ] No hard-coded font weights (unless semantic)

**Look For:**
```tsx
// ❌ Hard-coded typography
<h1 className="font-raleway text-[48px] leading-[1.2]">
<p className="text-[16px] font-[Inter]">

// ✅ Let CSS handle typography
<h1>Auto-styled by theme.css h1 selector</h1>
<p>Uses default body styles</p>
```

### 4. Hard-Coded Spacing

**Check:**
- [ ] No `p-[16px]` arbitrary padding
- [ ] No `m-[24px]` arbitrary margins
- [ ] No `gap-[12px]` arbitrary gaps
- [ ] Spacing uses design tokens

**Look For:**
```tsx
// ❌ Hard-coded spacing
<div className="p-[24px] gap-[16px]">
<div className="mt-[32px] mb-[48px]">

// ✅ Design token spacing
<div className="p-6 gap-4">
<div className="mt-8 mb-12">
```

### 5. CSS Variables

**Check:**
- [ ] All colors defined as CSS variables
- [ ] All spacing values use tokens
- [ ] Typography uses custom properties
- [ ] Borders/radii use tokens

**Look For in theme.css:**
```css
✅ Properly defined
:root {
  --nova-primary: #09082f;
  --nova-accent: #d70025;
  --text-base: 16px;
  --spacing-4: 1rem;
}

❌ Missing tokens
/* No --nova-primary defined, but used in components */
```

### 6. Semantic Classes

**Check:**
- [ ] WordPress-aligned class names exist
- [ ] `.wp-btn-*` button variants
- [ ] `.wp-text-*` color utilities
- [ ] `.wp-bg-*` background utilities
- [ ] `.wp-link` for links

**Look For in theme.css:**
```css
✅ Semantic classes defined
.wp-btn-accent {
  background-color: var(--nova-accent);
  color: white;
}

.wp-text-primary {
  color: var(--nova-primary);
}

❌ Missing semantic classes
/* Components use bg-[#d70025] but no .wp-btn-accent */
```

### 7. Component Styling

**Check:**
- [ ] Button component has proper variants
- [ ] Card component uses tokens
- [ ] Form controls use semantic classes
- [ ] Icons sized with classes, not inline

**Look For:**
```tsx
// ❌ Ad hoc button styling
<Button className="bg-red-600 text-white px-8 py-4">

// ✅ Semantic button variants
<Button className="wp-btn-accent" size="lg">
```

### 8. Tailwind Usage

**Check:**
- [ ] Tailwind used for layout only (flex, grid)
- [ ] No arbitrary color values
- [ ] No arbitrary spacing beyond design system
- [ ] Structural classes acceptable

**Look For:**
```tsx
// ✅ Acceptable Tailwind (structural)
<div className="flex items-center gap-4">
<div className="grid grid-cols-3">

// ❌ Forbidden Tailwind (visual)
<div className="bg-[#09082f] text-[#d70025]">
<h1 className="font-[Lexend] text-[48px]">
```

---

## Report Requirements

Generate `/reports/YYYY-MM-DD-styling-audit.md` with:

### Executive Summary
Overall styling system health.

### Critical Issues
- Inline visual styles
- Hard-coded hex colors in components
- Missing CSS variables
- No semantic button classes

### Major Issues
- Excessive arbitrary Tailwind classes
- Typography not token-based
- Spacing inconsistencies
- Missing WordPress-aligned classes

### Minor Issues
- Inconsistent class naming
- Redundant styles
- Unused CSS

### Positive Findings
What's using tokens correctly.

### Files by Violation Count

```markdown
## Most Violations

1. `/src/app/pages/Home.tsx` — 45 violations
2. `/src/app/pages/Contact.tsx` — 32 violations
3. `/src/app/components/Layout.tsx` — 28 violations
```

### Compliance Checklist

```markdown
## Styling System Compliance

- [ ] No inline visual styles (Guideline 4.1)
- [ ] No hard-coded hex values (Guideline 4.2)
- [ ] CSS variables for colors (Guideline 13.4)
- [ ] CSS variables for typography (Guideline 13.4)
- [ ] WordPress-aligned classes (Guideline 13.1)
- [ ] Semantic button system (Guideline 13.1)
- [ ] No margin layouts (Guideline 13.3)
```

### Migration Path

```markdown
## Recommended Migration

### Phase 1: CSS Variables (Week 1)
- Add all Nova brand colors to theme.css
- Create --nova-primary, --nova-accent, etc.
- Add to Tailwind config

### Phase 2: Semantic Classes (Week 1-2)
- Create .wp-btn-* variants
- Create .wp-text-* utilities
- Create .wp-bg-* utilities

### Phase 3: Component Updates (Week 2-3)
- Update Layout.tsx
- Update Home.tsx
- Update all page components
- Update all reusable components

### Phase 4: Validation (Week 3)
- Re-run this audit
- Verify 100% compliance
- Update documentation
```

---

## Deliverables

1. **Report:** `/reports/YYYY-MM-DD-styling-audit.md`
2. **Violation Inventory:** File-by-file breakdown
3. **Migration Plan:** Step-by-step token adoption
4. **Priority List:** Critical files first

---

## Success Criteria

✅ Audit complete when:
- All `.tsx` files scanned
- All `style={}` instances found
- All arbitrary classes documented
- All missing tokens identified
- Report generated with metrics
- Migration plan created

---

## Automated Checks

Use these regex patterns to find violations:

```bash
# Find inline styles
grep -r "style={{" src/app/

# Find arbitrary hex colors
grep -r "bg-\[#[0-9a-fA-F]\{6\}\]" src/app/
grep -r "text-\[#[0-9a-fA-F]\{6\}\]" src/app/

# Find arbitrary font sizes
grep -r "text-\[[0-9]" src/app/

# Find arbitrary spacing
grep -r "p-\[[0-9]" src/app/
grep -r "m-\[[0-9]" src/app/
```

---

## Example Findings

### Critical Issue Example

```markdown
### Critical: Inline Colors in Layout

**File:** `/src/app/components/Layout.tsx`

**Line:** 109

**Issue:**
\`\`\`tsx
<div className="bg-[#09082f] text-white py-2">
\`\`\`

**Guideline Violation:** Guidelines.md section 4.2 (No hard-coded visual values)

**Fix:**
\`\`\`tsx
<div className="wp-bg-primary text-white py-2">
\`\`\`

**Requires:** Add to theme.css:
\`\`\`css
.wp-bg-primary {
  background-color: var(--nova-primary);
}
\`\`\`

**Priority:** Critical  
**Effort:** 15 minutes
```

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Sections 4, 13
- **[orchestrator.md](./orchestrator.md)** — Parent audit
- **[/src/styles/theme.css](../src/styles/theme.css)** — Design tokens

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial styling audit prompt with regex helpers |
