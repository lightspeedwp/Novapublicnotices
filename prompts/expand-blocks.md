# Expand Blocks — Block Component Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand blocks`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Analyze codebase for repeated atomic UI elements that should be extracted into reusable block components following WordPress block theme architecture.

**Reference:** `/guidelines/wordpress-component-architecture.md`

---

## Scope

Identifies opportunities for:
- Atomic block components (Button, Card, Badge, Input, etc.)
- Duplicated UI elements across pages
- Inconsistent implementations of same component
- Missing block components from common UI patterns

---

## Block Categories to Analyze

### 1. Action Blocks
- Button (primary, secondary, outline, text)
- Link (internal, external, download)
- Icon button
- FAB (Floating Action Button)
- Toggle switch
- Dropdown trigger

### 2. Display Blocks
- Card (default, elevated, outlined)
- Badge (status, category, count)
- Tag/Chip
- Avatar (user, initials, icon)
- Thumbnail
- Logo

### 3. Form Blocks
- Input (text, email, tel, number)
- Textarea
- Select/Dropdown
- Checkbox
- Radio button
- Toggle
- Date picker
- File upload

### 4. Feedback Blocks
- Alert (success, error, warning, info)
- Toast/Notification
- Spinner/Loader
- Progress bar
- Skeleton loader
- Empty state
- Error boundary

### 5. Navigation Blocks
- Breadcrumb item
- Tab item
- Pagination button
- Menu item
- Back button
- Close button

### 6. Content Blocks
- Heading (with variants)
- Paragraph
- Blockquote
- Code block
- Divider/Separator
- Spacer
- Icon wrapper

---

## Analysis Process

### Step 1: Scan for Repeated Elements

**Search patterns:**
```
<button
<input
<select
<textarea
className=".*button.*"
className=".*card.*"
className=".*badge.*"
```

**Check for:**
- Same HTML structure repeated
- Similar styling patterns
- Inline styling (should be blocks with BEM classes)
- Hardcoded variants that should be props

### Step 2: Identify Inconsistencies

Compare implementations:
- Button styles differ across pages?
- Card structures not consistent?
- Form inputs styled differently?
- Icons used inconsistently?

### Step 3: Check Current /components/ Structure

**Analyze:**
```
/src/app/components/
  ├─ blocks/           ← What exists?
  ├─ ui/               ← Can any be converted to blocks?
  └─ *.tsx             ← Should these be in blocks/?
```

**For each component in root:**
- Is it atomic enough for blocks/?
- Is it reused across pages?
- Does it have single responsibility?

### Step 4: Check for Missing Standard Blocks

**Essential blocks that should exist:**
- Button ✓/✗
- Card ✓/✗
- Badge ✓/✗
- Input ✓/✗
- Select ✓/✗
- Checkbox ✓/✗
- Radio ✓/✗
- Alert ✓/✗
- Spinner ✓/✗
- Avatar ✓/✗
- Divider ✓/✗
- Tag ✓/✗
- Tooltip ✓/✗
- Icon wrapper ✓/✗

---

## Report Format

Generate: `/reports/YYYY-MM-DD-block-recommendations.md`

```markdown
# Block Component Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Components Analyzed:** {number}  
**Block Opportunities Identified:** {number}  
**Priority Blocks to Create:** {number}

---

## Executive Summary

Analyzed component structure and identified {N} opportunities for atomic block components. Currently have {N} blocks, recommend creating {N} additional blocks for better reusability and WordPress alignment.

**Top Priorities:**
1. {Block name} — Used in {N} places, {N} inconsistent implementations
2. {Block name} — Missing but needed for {use case}
3. {Block name} — Currently duplicated across {N} files

---

## Current Block Inventory

### Existing Blocks
- ✅ Button — `/components/blocks/Button.tsx` (if exists)
- ✅ Card — `/components/ui/card.tsx` (could move to blocks/)
- ❌ Badge — Not found, recommend creating
- ...

### Blocks in Wrong Location
- ⚠️ `/components/SomeComponent.tsx` — Should be in `/components/blocks/`
- ⚠️ `/components/ui/badge.tsx` — Should be in `/components/blocks/Badge.tsx`

---

## Recommended New Blocks

### Critical Priority

#### 1. Button Block

**Usage:** Found {N} button implementations across {N} files

**Current Issues:**
- Inconsistent styling
- Inline styles in some cases
- No variant system
- Hardcoded colors

**Recommended Implementation:**

```tsx
// /components/blocks/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({ children, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  const classes = `wpn-button wpn-button--${variant} wpn-button--${size}`;
  
  if (props.href) {
    return <Link to={props.href} className={classes}>{children}</Link>;
  }
  
  return <button className={classes} onClick={props.onClick}>{children}</button>;
}
```

**CSS File:**
```css
/* /styles/blocks/button.css */
.wpn-button {
  /* Base styles using CSS variables */
  font-family: var(--font-body);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  /* ... */
}

.wpn-button--primary {
  background-color: var(--nova-primary);
  color: white;
}

.wpn-button--secondary {
  background-color: var(--nova-accent);
  color: white;
}
```

**Files to Update:**
- `/pages/Home.tsx` — Replace button markup
- `/pages/Contact.tsx` — Replace button markup
- {List all files using buttons}

**Benefit:** Consistent button styling, single source of truth, WordPress-ready

---

#### 2. Badge Block

**Usage:** Badge styles found in {N} places

**Current Issues:**
- Category badges styled inline
- Status badges inconsistent
- No reusable badge component

**Recommended Implementation:**

```tsx
// /components/blocks/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'default', size = 'md' }: BadgeProps) {
  return (
    <span className={`wpn-badge wpn-badge--${variant} wpn-badge--${size}`}>
      {children}
    </span>
  );
}
```

**Benefit:** Consistent badge styling, reusable across notice cards, category displays, status indicators

---

{Continue for all recommended blocks...}

---

## Block Migration Roadmap

### Phase 1: Essential Action Blocks (Week 1)
- [ ] Create Button block
- [ ] Create Link block (if different from button)
- [ ] Migrate all button usages

### Phase 2: Display & Form Blocks (Week 2)
- [ ] Create Badge block
- [ ] Create Card block (or move from ui/)
- [ ] Create Input block
- [ ] Create Select block
- [ ] Migrate form components

### Phase 3: Feedback Blocks (Week 3)
- [ ] Create Alert block
- [ ] Create Spinner block
- [ ] Create Toast block
- [ ] Migrate feedback components

---

## BEM Class Naming Standards

All blocks must use BEM:

```
Block:    .wpn-{block-name}
Element:  .wpn-{block-name}__{}element}
Modifier: .wpn-{block-name}--{modifier}
```

Examples:
```css
.wpn-button
.wpn-button__icon
.wpn-button__text
.wpn-button--primary
.wpn-button--lg
```

---

## CSS Variable Requirements

All blocks must use CSS variables from design system:

**Required variables:**
- Colors: `var(--nova-primary)`, `var(--nova-accent)`, etc.
- Spacing: `var(--space-2)`, `var(--space-4)`, etc.
- Typography: `var(--font-body)`, `var(--text-base)`, etc.
- Borders: `var(--border-width)`, `var(--radius-md)`, etc.

**Forbidden:**
- ❌ `color: #09082f` — use `var(--nova-primary)`
- ❌ `padding: 16px` — use `var(--space-4)`
- ❌ `font-family: Inter` — use `var(--font-body)`

---

## Next Steps

1. Review block recommendations
2. Prioritize based on usage frequency
3. Create `/components/blocks/` directory (if not exists)
4. Create `/styles/blocks/` directory (if not exists)
5. Implement priority blocks
6. Migrate existing components
7. Update all usages
8. Document block library

---

## Related Documentation

- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — Component architecture
- **[expand-patterns.md](./expand-patterns.md)** — Pattern recommendations
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM methodology
```

---

## Success Criteria

✅ All repeated UI elements identified  
✅ Inconsistent implementations documented  
✅ Missing essential blocks identified  
✅ Priority blocks recommended  
✅ BEM class names proposed  
✅ CSS variable usage enforced  
✅ Migration roadmap created  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — Architecture guide
- **[expand-patterns.md](./expand-patterns.md)** — Pattern recommendations
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial block component expansion analysis prompt |
