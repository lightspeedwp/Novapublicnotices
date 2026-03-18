# Iconography Tokens — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

The repo currently uses Phosphor Icons (previously Lucide React). Keep iconography clean, lightweight, and editorial.

---

## Approved System

- **Primary icon set:** Phosphor Icons (`@phosphor-icons/react`)
- **Default size:** 16px to 20px for metadata and controls
- **Large feature icons:** 24px to 32px
- **Avoid:** Decorative oversized icon use inside legal content templates

---

## Icon Tokens

```css
:root {
  --icon-size-xs: 12px;
  --icon-size-sm: 16px;
  --icon-size-md: 20px;
  --icon-size-lg: 24px;
  --icon-size-xl: 32px;
  --icon-size-2xl: 48px;
  --icon-stroke-width: 1.75;
}
```

---

## Usage Rules

### By Context

- **Metadata rows:** `--icon-size-sm` (16px)
- **Filter controls:** `--icon-size-sm` or `--icon-size-md` (16-20px)
- **Buttons:** `--icon-size-md` (20px)
- **Hero feature icons:** `--icon-size-xl` or `--icon-size-2xl` (32-48px)
- **Status indicators:** `--icon-size-xs` or `--icon-size-sm` (12-16px)

### Color Inheritance

- Button icons should inherit button color
- Metadata icons use `--muted-foreground`
- Active/hover states use `--nova-primary` or `--nova-accent`
- Do not use random icon sizes in TSX unless token-mapped

---

## BEM Examples

```css
.notice-meta__icon {
  width: var(--icon-size-sm);
  height: var(--icon-size-sm);
  color: var(--muted-foreground);
  flex-shrink: 0;
}

.wpn-button__icon {
  width: var(--icon-size-md);
  height: var(--icon-size-md);
  color: currentColor;
}

.category-card__icon {
  width: var(--icon-size-lg);
  height: var(--icon-size-lg);
  color: var(--nova-primary);
}

.hero__feature-icon {
  width: var(--icon-size-2xl);
  height: var(--icon-size-2xl);
  color: var(--nova-accent);
}
```

---

## Phosphor Icons Implementation

### Installation

```bash
npm install @phosphor-icons/react
```

### Usage in React

```tsx
import { MagnifyingGlass, Calendar, MapPin, FileText } from '@phosphor-icons/react';

// In component
<MagnifyingGlass size={20} weight="regular" />
<Calendar size={16} weight="regular" className="notice-meta__icon" />
```

### Icon Weights

Phosphor offers multiple weights. Use consistently:

- **Regular** (default) — For most UI icons
- **Bold** — For emphasis and important actions
- **Light** — Avoid (not editorial enough)
- **Thin** — Avoid (readability issues)
- **Fill** — For active/selected states only

---

## Common Icon Mappings

### Notice Metadata

```tsx
// Date
<Calendar size={16} weight="regular" />

// Location
<MapPin size={16} weight="regular" />

// Category
<Folder size={16} weight="regular" />

// Reference number
<Hash size={16} weight="regular" />

// Publisher
<Buildings size={16} weight="regular" />

// Deadline
<Clock size={16} weight="regular" />
```

### Actions

```tsx
// Search
<MagnifyingGlass size={20} weight="regular" />

// Filter
<Funnel size={20} weight="regular" />

// Download
<DownloadSimple size={20} weight="regular" />

// Print
<Printer size={20} weight="regular" />

// Share
<ShareNetwork size={20} weight="regular" />

// Edit
<PencilSimple size={20} weight="regular" />
```

### Navigation

```tsx
// Menu
<List size={24} weight="regular" />

// Close
<X size={24} weight="regular" />

// Chevron right
<CaretRight size={16} weight="regular" />

// Arrow right
<ArrowRight size={20} weight="regular" />

// Home
<House size={20} weight="regular" />
```

### Status

```tsx
// Published
<CheckCircle size={16} weight="fill" />

// Pending
<Clock size={16} weight="regular" />

// Draft
<FileText size={16} weight="regular" />

// Archived
<ArchiveBox size={16} weight="regular" />

// Alert
<Warning size={16} weight="fill" />
```

---

## Component Integration

### Icon with Text

```tsx
function NoticeMetaItem({ icon: Icon, label, value }: MetaItemProps) {
  return (
    <div className="notice-meta__item">
      <Icon size={16} weight="regular" className="notice-meta__icon" />
      <span className="notice-meta__label">{label}:</span>
      <span className="notice-meta__value">{value}</span>
    </div>
  );
}
```

### Button with Icon

```tsx
function IconButton({ icon: Icon, children, ...props }: ButtonProps) {
  return (
    <button className="wpn-button wpn-button--primary" {...props}>
      <Icon size={20} weight="regular" className="wpn-button__icon" />
      {children}
    </button>
  );
}
```

---

## CSS Styling

```css
/* Base icon styling */
.icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}

/* Icon in metadata rows */
.notice-meta__icon {
  width: var(--icon-size-sm);
  height: var(--icon-size-sm);
  color: var(--muted-foreground);
  margin-right: var(--space-2);
}

/* Icon in buttons */
.wpn-button__icon {
  width: var(--icon-size-md);
  height: var(--icon-size-md);
  color: currentColor;
}

/* Icon in cards */
.category-card__icon {
  width: var(--icon-size-lg);
  height: var(--icon-size-lg);
  color: var(--nova-primary);
  margin-bottom: var(--space-3);
}

/* Status badge icons */
.status-badge__icon {
  width: var(--icon-size-xs);
  height: var(--icon-size-xs);
  color: currentColor;
  margin-right: var(--space-1);
}
```

---

## Accessibility

### Icon-Only Buttons

Always provide accessible labels:

```tsx
<button aria-label="Search notices" className="icon-button">
  <MagnifyingGlass size={20} weight="regular" />
</button>
```

### Decorative Icons

If icon is purely decorative (text already provides meaning):

```tsx
<span>
  <Calendar size={16} aria-hidden="true" />
  Publication Date: 16 Mar 2026
</span>
```

---

## Anti-Patterns

❌ **Do not:**
- Use different icon sizes randomly across the UI
- Mix Phosphor with other icon libraries
- Use light or thin weights (poor readability)
- Hardcode icon sizes in TSX: `<Icon size={18} />`
- Use decorative icons inside long legal text
- Color icons independently from their context

✅ **Do:**
- Use token-based sizes consistently
- Keep icon weights consistent (regular or bold)
- Make icon-only buttons accessible
- Match icon color to surrounding text
- Use icons to enhance scanability of metadata
- Choose semantically appropriate icons

---

## Migration from Lucide

If migrating from Lucide React:

| Lucide | Phosphor Equivalent |
|--------|-------------------|
| `Search` | `MagnifyingGlass` |
| `Filter` | `Funnel` |
| `Calendar` | `Calendar` |
| `MapPin` | `MapPin` |
| `File` | `FileText` |
| `Download` | `DownloadSimple` |
| `ChevronRight` | `CaretRight` |
| `Menu` | `List` |
| `X` | `X` |
| `Check` | `Check` |

---

## Performance Considerations

### Tree-Shaking

Import icons individually for better tree-shaking:

```tsx
// ✅ Good
import { MagnifyingGlass, Calendar } from '@phosphor-icons/react';

// ❌ Avoid
import * as Icons from '@phosphor-icons/react';
```

### Weight Selection

Only use the weights you need. Regular weight covers 90% of use cases.

---

## Related Documentation

- `/guidelines/design-tokens/colors.md` — Icon color tokens
- `/guidelines/design-tokens/spacing.md` — Icon spacing
- `/guidelines/design-tokens/buttons.md` — Button icon integration
- [Phosphor Icons Documentation](https://phosphoricons.com/)
