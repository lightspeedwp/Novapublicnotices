# Design Tokens — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

This directory contains comprehensive design token guidelines for the Nova Public Notices Portal. All design tokens are defined as CSS custom properties and must be used consistently throughout the application.

---

## Token Guidelines

### Core System

1. **[CSS Architecture](./css-architecture.md)**
   - CSS file organization
   - BEM naming conventions
   - WordPress-aligned class names
   - Token usage rules

2. **[Colors](./colors.md)**
   - Brand colors (Nova primary, accent)
   - Semantic color tokens
   - Status colors
   - Content readability rules

3. **[Typography](./typography.md)**
   - Font families (Lexend)
   - Type scale
   - Font weights
   - Line heights
   - Usage examples

4. **[Spacing](./spacing.md)**
   - Spacing scale (0-20)
   - Gap-first approach
   - No-margin policy
   - Page rhythm guidelines

### Component Tokens

5. **[Buttons](./buttons.md)**
   - Button sizes (sm, md, lg)
   - Button variants (primary, accent, outline, ghost)
   - Button with icons
   - Accessibility requirements

6. **[Forms](./forms.md)**
   - Form field tokens
   - Input, select, textarea styling
   - Checkbox and radio styling
   - Error states and validation
   - Search and filter controls

7. **[Navigation](./navigation.md)**
   - Navigation heights
   - Nav link states
   - Language switcher
   - Breadcrumbs
   - Sitemap rules

8. **[Iconography](./iconography.md)**
   - Phosphor Icons integration
   - Icon sizes
   - Icon usage patterns
   - Accessibility guidelines

### Visual Effects

9. **[Borders](./borders.md)**
   - Border widths
   - Border colors
   - Usage patterns
   - Interactive borders

10. **[Radii](./radii.md)**
    - Border radius scale
    - Component mappings
    - Usage rules

11. **[Shadows](./shadows.md)**
    - Elevation scale
    - Shadow usage rules
    - Hover states

12. **[Animations](./animations.md)**
    - Duration tokens
    - Easing functions
    - Approved uses
    - Reduced motion support

### Layout & Modes

13. **[Responsive](./responsive.md)**
    - Breakpoints
    - Layout rules
    - Container rules
    - Mobile-first approach

14. **[Light & Dark Mode](./light-dark-mode.md)**
    - Light mode (default)
    - Dark mode tokens
    - Readability rules
    - Accessibility requirements

---

## Design Token Hierarchy

```
CSS Custom Properties (theme.css)
    ↓
Semantic Tokens (component-specific)
    ↓
BEM Classes (component CSS files)
    ↓
React Components (JSX)
```

---

## Token Usage Rules

### ✅ **DO:**

- Use CSS custom properties from `theme.css`
- Create BEM-structured component classes
- Use semantic helper classes
- Keep tokens in CSS, not TSX
- Test in both light and dark modes
- Ensure bilingual content shares tokens

### ❌ **DO NOT:**

- Hard-code colors: `color: #09082f`
- Hard-code spacing: `padding: 24px`
- Use inline styles: `style={{ ... }}`
- Use Tailwind arbitrary values: `bg-[#d70025]`
- Create different token systems per language
- Override tokens with inline styles

---

## Token Categories

### Brand Tokens

```css
--nova-primary: #09082f
--nova-primary-hover: #1a1849
--nova-accent: #d70025
--nova-accent-hover: #b5001f
--nova-blue: #549cbe
```

### Semantic Tokens

```css
--background
--foreground
--card
--muted
--border
--input-background
--ring
```

### Size Tokens

```css
--text-xs to --text-4xl
--space-1 to --space-20
--radius-xs to --radius-pill
--button-height-sm to --button-height-lg
--icon-size-xs to --icon-size-2xl
```

### Effect Tokens

```css
--shadow-sm to --shadow-xl
--duration-fast to --duration-slow
--ease-in, --ease-out, --ease-in-out
```

---

## Quick Reference

| Token Type | File | Primary Tokens |
|------------|------|----------------|
| Colors | colors.md | `--nova-primary`, `--nova-accent` |
| Typography | typography.md | `--font-family-body`, `--text-*` |
| Spacing | spacing.md | `--space-*` |
| Buttons | buttons.md | `--button-height-*`, `--button-padding-*` |
| Forms | forms.md | `--form-field-*` |
| Icons | iconography.md | `--icon-size-*` |
| Borders | borders.md | `--border-color-*`, `--border-width-*` |
| Radius | radii.md | `--radius-*` |
| Shadows | shadows.md | `--shadow-*` |
| Animations | animations.md | `--duration-*`, `--ease-*` |

---

## Implementation Checklist

When creating new components:

- [ ] Define tokens in `theme.css` if needed
- [ ] Create BEM-structured CSS file
- [ ] Use semantic token names
- [ ] Provide bilingual support
- [ ] Test responsive behavior
- [ ] Test light and dark modes
- [ ] Ensure accessibility
- [ ] Document usage examples

---

## File Organization

```
/guidelines/design-tokens/
├── README.md (this file)
├── css-architecture.md
├── colors.md
├── typography.md
├── spacing.md
├── buttons.md
├── forms.md
├── navigation.md
├── iconography.md
├── borders.md
├── radii.md
├── shadows.md
├── animations.md
├── responsive.md
└── light-dark-mode.md
```

---

## Related Documentation

- [`/guidelines/Guidelines.md`](../Guidelines.md) — Main project guidelines
- [`/guidelines/locale-architecture.md`](../locale-architecture.md) — Bilingual content
- [`/guidelines/data-model.md`](../data-model.md) — Notice data structure
- [`/guidelines/notice-fields-schema.md`](../notice-fields-schema.md) — Universal fields

---

## Token Updates

When updating design tokens:

1. Update the token in `theme.css`
2. Update the relevant guideline file
3. Update this README if new token categories are added
4. Test across all components using the token
5. Document breaking changes in project changelog

---

## Support

For questions or clarifications about design tokens, refer to:

- Individual guideline files for detailed usage
- `/Guidelines.md` for project-wide rules
- CSS architecture guideline for organizational patterns
