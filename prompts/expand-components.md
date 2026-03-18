# Expand Components — Component Architecture Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand components`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Identify duplicated component logic, propose atomic component extractions, and recommend component architecture improvements for better reusability and maintainability.

---

## Scope

Analyzes:
- Component duplication across pages
- Opportunities for atomic components
- Component composition patterns
- Prop interface standardization

---

## Analysis Areas

### 1. Atomic Components

**Buttons, links, inputs:**
- Button variants
- Link components
- Form inputs
- Icons
- Badges/labels

### 2. Molecule Components

**Combined atomic components:**
- Form fields (label + input + error)
- Card components
- List items
- Navigation items

### 3. Organism Components

**Complete UI sections:**
- Header
- Footer
- Navigation menus
- Filter panels
- Notice cards
- User profile cards

---

## Report Format

Generate: `/reports/YYYY-MM-DD-component-recommendations.md`

```markdown
# Component Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Components Analyzed:** {number}  
**Duplications Found:** {number}  
**New Components Recommended:** {number}

---

## Executive Summary

Identified {N} duplicated component patterns and recommend extracting {N} new atomic/molecule components.

---

## Recommended Components

### Component: NoticeCard

**Detected Duplications:** 5 variants across pages

**Standardized Component:**
```tsx
interface NoticeCardProps {
  notice: Notice;
  variant?: 'grid' | 'list' | 'compact';
  showActions?: boolean;
  showCategory?: boolean;
  showLocation?: boolean;
}

export function NoticeCard({
  notice,
  variant = 'grid',
  showActions = false,
  showCategory = true,
  showLocation = true
}: NoticeCardProps) {
  // Implementation
}
```

**Benefits:**
- Single card component
- Configurable via props
- Consistent styling
- Easy to maintain

---

{Additional recommendations...}

---

## Next Steps

1. Create new atomic components
2. Refactor existing components
3. Update component library documentation
```

---

## Success Criteria

✅ Component duplications identified  
✅ Atomic component recommendations provided  
✅ Prop interfaces standardized  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[expand-patterns.md](./expand-patterns.md)** — Block patterns
- **[Guidelines.md](../guidelines/Guidelines.md)** — Component standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial component expansion analysis prompt |
