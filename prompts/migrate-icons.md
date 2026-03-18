# Migrate Icons — Lucide to Phosphor Icons Migration

**Type:** Maintenance  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `migrate icons`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Migrate all icon imports from `lucide-react` to `@phosphor-icons/react` throughout the Nova Public Notices Portal codebase. This is a required migration per project guidelines.

**When to Use:** After detecting `lucide-react` imports in audit, or when standardizing to Phosphor Icons.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Design system requirements
- Per Guidelines: `@phosphor-icons/react` is the approved icon library

---

## Icon Mapping Reference

### Common Icon Mappings (Lucide → Phosphor)

| Lucide Icon | Phosphor Icon | Weight |
|-------------|---------------|--------|
| `Search` | `MagnifyingGlass` | regular |
| `Menu` | `List` | regular |
| `X` | `X` | regular |
| `ChevronDown` | `CaretDown` | regular |
| `ChevronUp` | `CaretUp` | regular |
| `ChevronLeft` | `CaretLeft` | regular |
| `ChevronRight` | `CaretRight` | regular |
| `Calendar` | `Calendar` | regular |
| `Clock` | `Clock` | regular |
| `User` | `User` | regular |
| `Users` | `Users` | regular |
| `Mail` | `Envelope` | regular |
| `Phone` | `Phone` | regular |
| `MapPin` | `MapPin` | regular |
| `Download` | `Download` | regular |
| `Upload` | `Upload` | regular |
| `Plus` | `Plus` | regular |
| `Minus` | `Minus` | regular |
| `Edit` | `PencilSimple` | regular |
| `Trash` | `Trash` | regular |
| `Check` | `Check` | regular |
| `AlertCircle` | `WarningCircle` | regular |
| `Info` | `Info` | regular |
| `Settings` | `Gear` | regular |
| `LogOut` | `SignOut` | regular |
| `LogIn` | `SignIn` | regular |
| `Eye` | `Eye` | regular |
| `EyeOff` | `EyeClosed` | regular |
| `Filter` | `Funnel` | regular |
| `Star` | `Star` | regular |
| `Heart` | `Heart` | regular |
| `Share` | `ShareNetwork` | regular |
| `Copy` | `Copy` | regular |
| `ExternalLink` | `ArrowSquareOut` | regular |
| `File` | `File` | regular |
| `FileText` | `FileText` | regular |
| `Folder` | `Folder` | regular |
| `Home` | `House` | regular |
| `Bell` | `Bell` | regular |
| `MoreVertical` | `DotsThreeVertical` | regular |
| `MoreHorizontal` | `DotsThree` | regular |

### Nova-Specific Notice Portal Icons

| Function | Lucide | Phosphor | Usage |
|----------|--------|----------|--------|
| Language switcher | `Globe` | `Globe` | Bilingual toggle |
| Notice category | `Tag` | `Tag` | Category badges |
| Notice reference | `Hash` | `Hash` | Reference numbers |
| Notice location | `MapPin` | `MapPin` | Location field |
| Notice date | `Calendar` | `Calendar` | Publication date |
| Notice status | `CheckCircle` | `CheckCircle` | Status indicators |
| Attachment | `Paperclip` | `Paperclip` | PDF attachments |
| Print notice | `Printer` | `Printer` | Print option |
| Filter notices | `Filter` | `Funnel` | Search filters |
| Submit notice | `Send` | `PaperPlaneRight` | Form submission |
| Moderation | `Shield` | `ShieldCheck` | Moderation status |
| Archive | `Archive` | `Archive` | Archived notices |

---

## Workflow Steps

### Step 1: Scan for Lucide Imports

Search entire codebase for `lucide-react` imports:

```bash
file_search: "from 'lucide-react'"
file_search: "from \"lucide-react\""
```

1. List all files using Lucide icons
2. For each file, list which icons are imported
3. Create mapping table of Lucide → Phosphor equivalents

### Step 2: Install Phosphor Icons (if needed)

Check `package.json` for `@phosphor-icons/react`:

```bash
read: /package.json
```

If not installed, note that `@phosphor-icons/react` must be installed via install_package tool.

### Step 3: Create Icon Mapping for Each File

For each file with Lucide imports:

1. **Extract current Lucide imports:**
   ```tsx
   import { Search, Menu, X, Calendar } from 'lucide-react';
   ```

2. **Map to Phosphor equivalents:**
   ```tsx
   import { MagnifyingGlass, List, X, Calendar } from '@phosphor-icons/react';
   ```

3. **Note icon renames needed in JSX:**
   ```tsx
   // Before
   <Search />
   // After
   <MagnifyingGlass />
   ```

### Step 4: Update Import Statements

Replace import statements:

**Before:**
```tsx
import { Search, Filter, Calendar, MapPin } from 'lucide-react';
```

**After:**
```tsx
import { MagnifyingGlass, Funnel, Calendar, MapPin } from '@phosphor-icons/react';
```

### Step 5: Update Icon Component Usage

Update all icon component references in JSX:

**Before:**
```tsx
<Search className="w-5 h-5" />
<Filter className="w-4 h-4" />
```

**After:**
```tsx
<MagnifyingGlass className="w-5 h-5" />
<Funnel className="w-4 h-4" />
```

### Step 6: Handle Icon Weights (Phosphor-Specific)

Phosphor icons support different weights. Default is `regular`, but can specify:

```tsx
import { MagnifyingGlass } from '@phosphor-icons/react';

// Regular (default)
<MagnifyingGlass />

// Bold
<MagnifyingGlass weight="bold" />

// Light
<MagnifyingGlass weight="light" />

// Fill
<MagnifyingGlass weight="fill" />
```

**Recommendation for Nova:**
- Default to `regular` weight
- Use `bold` for primary actions (submit, search)
- Use `fill` for active/selected states

### Step 7: Update Icon Sizing

Phosphor icons accept `size` prop:

**Before (Lucide with Tailwind):**
```tsx
<Search className="w-5 h-5" />
```

**After (Phosphor with size prop or CSS variables):**
```tsx
<MagnifyingGlass size={20} />
// or using CSS
<MagnifyingGlass className="w-5 h-5" />
```

**Recommended approach:**
Use CSS variables for consistency:
```tsx
<MagnifyingGlass style={{ width: 'var(--icon-size-md)', height: 'var(--icon-size-md)' }} />
```

### Step 8: Update Aria Labels (Accessibility)

Ensure all icon-only buttons maintain aria-labels:

**Before:**
```tsx
<button aria-label="Search notices">
  <Search />
</button>
```

**After:**
```tsx
<button aria-label="Search notices">
  <MagnifyingGlass />
</button>
```

**Bilingual aria-labels:**
```tsx
{/* English */}
<button aria-label="Search notices">
  <MagnifyingGlass />
</button>

{/* Afrikaans */}
<button aria-label="Soek kennisgewings">
  <MagnifyingGlass />
</button>
```

### Step 9: Update Any Icon-Specific Logic

Check for icon-specific logic that might break:

1. **Icon color props:**
   ```tsx
   // Lucide
   <Search color="#09082f" />
   
   // Phosphor (same)
   <MagnifyingGlass color="var(--nova-primary)" />
   ```

2. **Icon click handlers:**
   - Should remain unchanged
   - Verify click events still work

3. **Conditional icon rendering:**
   - Update icon component names in conditionals

### Step 10: Test Critical Flows

**Test these Nova-specific flows:**

1. **Language switcher icon** — Globe icon visible and functional
2. **Search icon** — MagnifyingGlass in search input
3. **Filter icon** — Funnel icon on filter buttons
4. **Category badges** — Tag icon on notice cards
5. **Pagination icons** — CaretLeft/CaretRight working
6. **Download PDF** — Download icon functional
7. **Mobile menu** — List icon (hamburger menu)

### Step 11: Remove Lucide Dependency

After all migrations complete:

1. **Verify zero Lucide imports remain:**
   ```bash
   file_search: "from 'lucide-react'"
   ```

2. **If zero matches, note:** Lucide can be removed from dependencies
   - Do NOT auto-remove from package.json
   - Document in migration report

### Step 12: Generate Migration Report

Save report to `/reports/YYYY-MM-DD-icon-migration.md`:

```markdown
# Icon Migration Report — Lucide to Phosphor

**Date:** YYYY-MM-DD  
**Status:** Complete / In Progress

---

## Executive Summary

Migrated {N} files from `lucide-react` to `@phosphor-icons/react`.

## Files Migrated

| File | Icons Changed | Status |
|------|---------------|--------|
| `/src/app/components/SearchBar.tsx` | Search → MagnifyingGlass | ✅ |
| `/src/app/components/Layout.tsx` | Menu → List, X → X | ✅ |
| `/src/app/components/NoticeCard.tsx` | Calendar → Calendar | ✅ |

## Icon Mapping Applied

| Lucide Icon | Phosphor Icon | Usage Count |
|-------------|---------------|-------------|
| Search | MagnifyingGlass | 5 |
| Filter | Funnel | 3 |
| Menu | List | 2 |
| ChevronDown | CaretDown | 8 |

## Accessibility Verified

- [ ] All icon-only buttons have aria-labels
- [ ] Bilingual aria-labels implemented
- [ ] Icon sizes appropriate (44x44px minimum for touch targets)

## Critical Flows Tested

- [ ] Language switcher functional
- [ ] Search works
- [ ] Filters functional
- [ ] Pagination works
- [ ] Mobile menu opens/closes

## Remaining Work

{List any incomplete migrations}

## Next Steps

1. {Action item 1}
2. {Action item 2}

## Lucide Dependency Status

- Remaining Lucide imports: {N}
- Ready to remove dependency: Yes / No
```

---

## Icon Size Standards (Nova Portal)

Use consistent icon sizing:

```tsx
// Small icons (16px) — inline text icons
<MagnifyingGlass size={16} />

// Medium icons (20px) — default buttons
<MagnifyingGlass size={20} />

// Large icons (24px) — primary actions
<MagnifyingGlass size={24} />

// Extra large (32px) — feature icons
<MagnifyingGlass size={32} />

// Touch targets (44px minimum) — icon-only buttons
<button className="w-11 h-11 flex items-center justify-center">
  <MagnifyingGlass size={24} />
</button>
```

---

## Success Criteria

- [ ] All Lucide imports replaced with Phosphor
- [ ] All icon component names updated in JSX
- [ ] Icon sizing standardized
- [ ] Aria-labels verified on all icon-only buttons
- [ ] Bilingual aria-labels implemented
- [ ] Critical user flows tested
- [ ] No visual regressions
- [ ] Migration report saved to `/reports/`
- [ ] Zero `lucide-react` imports remaining

---

## Common Migration Issues

### Issue 1: Icon Not Found in Phosphor

**Problem:** Lucide icon has no direct Phosphor equivalent

**Solution:** Find closest match or use alternative:
- Check [Phosphor Icons](https://phosphoricons.com/) for alternatives
- Consider combining multiple icons
- Document substitution in report

### Issue 2: Icon Sizing Looks Different

**Problem:** Phosphor icons render at different visual weight

**Solution:** Adjust size or use weight prop:
```tsx
<MagnifyingGlass size={22} weight="bold" />
```

### Issue 3: TypeScript Errors

**Problem:** Icon component types not recognized

**Solution:** Verify `@phosphor-icons/react` is installed and imported correctly:
```tsx
import { MagnifyingGlass } from '@phosphor-icons/react';
// NOT: import MagnifyingGlass from '@phosphor-icons/react';
```

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Design system standards
- **[audit-styling.md](./audit-styling.md)** — Checks for lucide-react imports
- **[Phosphor Icons Documentation](https://phosphoricons.com/)** — Full icon reference

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial icon migration prompt for Nova Public Notices Portal |
