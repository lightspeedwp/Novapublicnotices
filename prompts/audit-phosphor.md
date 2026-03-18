# Audit Phosphor Icons — Nova Public Notices Portal

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit phosphor`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Audit Phosphor Icons implementation to ensure no legacy Lucide icons remain, all imports are correct, icon names are up-to-date, and usage follows project standards.

**When to Use:** After icon migration, before deployment, when icon import errors occur, or quarterly maintenance.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Section 13 (Design system and styling rules)
- `/guidelines/design-tokens/iconography.md` — Icon standards
- `/prompts/migrate-icons.md` — Icon migration guide

---

## Phosphor Icons Requirements

### Installation Check

**Package must be installed:**
- Package: `@phosphor-icons/react`
- Version: Latest stable (currently 2.x)
- Check `package.json` for presence

### Import Standards

**Correct import syntax:**
```tsx
✅ CORRECT:
import { MagnifyingGlass, User, Bell } from '@phosphor-icons/react';

❌ WRONG:
import MagnifyingGlass from '@phosphor-icons/react';
import { MagnifyingGlass } from 'phosphor-icons';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/icons';
```

### No Legacy Lucide Icons

**Lucide must be eliminated:**
```tsx
❌ FORBIDDEN:
import { Search, User, Menu } from 'lucide-react';

✅ REQUIRED:
import { MagnifyingGlass, User, List } from '@phosphor-icons/react';
```

---

## Workflow Steps

### Step 1: Check Package Installation

Verify `@phosphor-icons/react` in package.json:

```bash
read: /package.json
```

**Check:**
- ✅ `"@phosphor-icons/react"` exists in dependencies
- ✅ Version is 2.x or higher
- ✅ No conflicting icon packages

### Step 2: Scan for Legacy Lucide Icons

**CRITICAL CHECK:** Search entire codebase for Lucide imports:

```bash
file_search: "from 'lucide-react'" in /src/
file_search: "from \"lucide-react\"" in /src/
```

**If ANY matches found:**
- 🔴 CRITICAL ISSUE: Legacy Lucide icons still in use
- Must migrate immediately
- Use `/prompts/migrate-icons.md` for migration

### Step 3: Scan for Phosphor Icon Imports

Search for all Phosphor icon imports:

```bash
file_search: "from '@phosphor-icons/react'" in /src/
```

For each file found:
1. List imported icons
2. Check import syntax correctness
3. Verify icon names are current (not deprecated)
4. Check usage in JSX

### Step 4: Check Icon Import Syntax

**Common issues to find:**

**Issue 1: Wrong import path**
```tsx
❌ WRONG:
import { Icon } from '@phosphor-icons/react/dist/icons/Icon';
import { Icon } from '@phosphor-icons/react/icons';

✅ CORRECT:
import { Icon } from '@phosphor-icons/react';
```

**Issue 2: Default import instead of named**
```tsx
❌ WRONG:
import MagnifyingGlass from '@phosphor-icons/react';

✅ CORRECT:
import { MagnifyingGlass } from '@phosphor-icons/react';
```

**Issue 3: Incorrect package name**
```tsx
❌ WRONG:
import { Icon } from 'phosphor-icons';
import { Icon } from 'phosphor-react';
import { Icon } from '@phosphor/icons';

✅ CORRECT:
import { Icon } from '@phosphor-icons/react';
```

### Step 5: Verify Icon Names Are Current

**Phosphor updates icon names between versions. Check for deprecated names:**

Common renames to check:
- `CaretDown` → Still valid ✅
- `MagnifyingGlass` → Still valid ✅
- `List` → Still valid ✅
- `Gear` → Still valid ✅
- Check [Phosphor Icons website](https://phosphoricons.com/) for current names

**If TypeScript errors occur:**
- Icon name may have changed
- Check Phosphor Icons documentation
- Update to new name

### Step 6: Check Icon Usage in JSX

**Standard usage:**
```tsx
✅ CORRECT:
<MagnifyingGlass size={20} />
<MagnifyingGlass size={24} weight="bold" />
<MagnifyingGlass className="icon-class" />
<User size={20} weight="fill" />

⚠️ CHECK: Size should use CSS variables where possible
<MagnifyingGlass style={{ width: 'var(--icon-size-md)', height: 'var(--icon-size-md)' }} />
```

**Icon weights (Phosphor-specific):**
- `thin` — Thin stroke
- `light` — Light stroke
- `regular` — Default
- `bold` — Bold stroke
- `fill` — Filled
- `duotone` — Duotone (two colors)

### Step 7: Check Accessibility

**Icon-only buttons must have labels:**

```tsx
✅ CORRECT:
<button aria-label="Search notices">
  <MagnifyingGlass size={20} />
</button>

<button aria-label="Open menu">
  <List size={24} />
</button>

❌ WRONG:
<button>
  <MagnifyingGlass size={20} />
</button>
```

**Decorative icons should be hidden:**
```tsx
✅ CORRECT:
<MagnifyingGlass aria-hidden="true" />
<span>Search</span>

❌ WRONG (if decorative):
<MagnifyingGlass />
<span>Search</span>
```

### Step 8: Check Bilingual Aria Labels

**Icon labels must be translated:**

```tsx
// English
<button aria-label="Search notices">
  <MagnifyingGlass />
</button>

// Afrikaans
<button aria-label="Soek kennisgewings">
  <MagnifyingGlass />
</button>
```

**Use data files for labels:**
```tsx
import { iconLabels } from '../data/icon-labels.en';

<button aria-label={iconLabels.search}>
  <MagnifyingGlass />
</button>
```

### Step 9: Check Icon Sizes

**Standard icon sizes:**
```tsx
// Small (16px)
<Icon size={16} />

// Medium (20px)
<Icon size={20} />

// Large (24px)
<Icon size={24} />

// Extra large (32px)
<Icon size={32} />
```

**Touch targets for icon-only buttons:**
```tsx
✅ CORRECT (44x44px minimum):
<button className="icon-button" style={{ minWidth: '44px', minHeight: '44px' }}>
  <MagnifyingGlass size={24} />
</button>

❌ WRONG (too small):
<button>
  <MagnifyingGlass size={16} />
</button>
```

### Step 10: Check for Hardcoded Icon Styling

**Icons should use CSS variables:**

```tsx
❌ WRONG:
<MagnifyingGlass color="#09082f" />
<MagnifyingGlass style={{ color: '#d70025' }} />

✅ CORRECT:
<MagnifyingGlass color="var(--nova-primary)" />
<MagnifyingGlass className="icon-primary" />

/* In CSS */
.icon-primary {
  color: var(--nova-primary);
}
```

### Step 11: Common Icon Mappings Check

Verify correct Phosphor icons used (not Lucide equivalents):

| Use Case | Correct Phosphor Icon | Legacy Lucide (Remove) |
|----------|----------------------|------------------------|
| Search | `MagnifyingGlass` | `Search` |
| Menu | `List` | `Menu` |
| Close | `X` | `X` |
| Settings | `Gear` | `Settings` |
| User | `User` | `User` |
| Filter | `Funnel` | `Filter` |
| Calendar | `Calendar` | `Calendar` |
| Location | `MapPin` | `MapPin` |
| Upload | `Upload` | `Upload` |
| Download | `Download` | `Download` |
| Edit | `PencilSimple` | `Edit` |
| Delete | `Trash` | `Trash` |
| Info | `Info` | `Info` |
| Warning | `WarningCircle` | `AlertCircle` |
| Success | `CheckCircle` | `CheckCircle` |
| Email | `Envelope` | `Mail` |
| Phone | `Phone` | `Phone` |
| Chevron Down | `CaretDown` | `ChevronDown` |
| Chevron Up | `CaretUp` | `ChevronUp` |
| Chevron Left | `CaretLeft` | `ChevronLeft` |
| Chevron Right | `CaretRight` | `ChevronRight` |
| External Link | `ArrowSquareOut` | `ExternalLink` |
| Language | `Globe` | `Globe` |

### Step 12: Check for Broken Imports

**Look for TypeScript errors:**
- Icon name not found in `@phosphor-icons/react`
- Incorrect import path
- Missing icon package

**Common causes:**
- Icon name changed in new Phosphor version
- Typo in icon name
- Wrong import syntax

### Step 13: Generate Audit Report

Save report to `/reports/YYYY-MM-DD-phosphor-icons-audit.md`:

```markdown
# Phosphor Icons Audit Report

**Date:** YYYY-MM-DD  
**Audit Type:** Icon System  
**Status:** Complete  
**Guidelines Referenced:** iconography.md, Guidelines.md (Section 13)

---

## Executive Summary

Audited Phosphor Icons implementation across {N} files. Found {N} files using Phosphor correctly, {N} files with issues.

---

## Findings

### Critical Issues

**Legacy Lucide Icons Found:**
- {List files still importing from 'lucide-react'}

**Broken Icon Imports:**
- {List files with import errors}

**Missing Accessibility Labels:**
- {List icon-only buttons without aria-label}

### Major Issues

**Incorrect Import Syntax:**
- {List files with wrong import paths}

**Hardcoded Icon Styling:**
- {List icons with hard-coded colors}

**Non-Bilingual Labels:**
- {List icon labels not translated}

### Minor Issues

**Inconsistent Icon Sizes:**
- {List files with inconsistent sizing}

**Icon Weights Not Utilized:**
- {List places where weight prop could improve design}

### Positive Findings

**Correct Implementation:**
- {List files correctly using Phosphor icons}

---

## Package Status

- ✅ / ❌ `@phosphor-icons/react` installed
- ✅ / ❌ Version: {version}
- ✅ / ❌ No conflicting packages

---

## Legacy Icon Check

**Lucide Icons Remaining:**
- Total files with Lucide imports: {N}
- Must migrate: ✅ Yes / ❌ No

**Files to migrate:**
1. {file-path} — Icons: {list}
2. {file-path} — Icons: {list}

---

## Import Syntax Compliance

**Correct Imports:**
- Files with correct syntax: {N} ({%}%)

**Incorrect Imports:**
| File | Issue | Fix |
|------|-------|-----|
| {file} | Wrong import path | Use `from '@phosphor-icons/react'` |
| {file} | Default import | Use named import `{ Icon }` |

---

## Icon Name Verification

**Deprecated Icon Names Found:**
| File | Deprecated Name | Current Name |
|------|-----------------|--------------|
| {file} | {old-name} | {new-name} |

---

## Accessibility Compliance

**Icon-only buttons:**
- Total icon-only buttons: {N}
- With aria-label: {N} ({%}%)
- Missing aria-label: {N}

**Buttons needing labels:**
1. {file} — {line} — {icon}
2. {file} — {line} — {icon}

**Bilingual labels:**
- English labels: {N}
- Afrikaans labels: {N}
- Missing translations: {N}

---

## Icon Usage Statistics

**Most used icons:**
1. `MagnifyingGlass` — {count} uses
2. `User` — {count} uses
3. `List` — {count} uses
4. `Funnel` — {count} uses
5. `Calendar` — {count} uses

**Icon weights used:**
- `regular`: {count}
- `bold`: {count}
- `fill`: {count}
- `light`: {count}
- `thin`: {count}

---

## Icon Sizing

**Size distribution:**
- 16px: {count}
- 20px: {count}
- 24px: {count}
- 32px: {count}
- Custom: {count}

**Touch target compliance:**
- Icon-only buttons ≥44x44px: {count}
- Icon-only buttons <44x44px: {count} ⚠️

---

## Styling Compliance

**Color usage:**
- ✅ Using CSS variables: {count}
- ❌ Hardcoded colors: {count}

**Files with hardcoded colors:**
1. {file} — `color="#09082f"`
2. {file} — `style={{ color: '...' }}`

---

## Recommendations

### Immediate (Blocking)
1. **Migrate remaining Lucide icons** — Use `/prompts/migrate-icons.md`
2. **Fix broken imports** — Update to correct syntax
3. **Add missing aria-labels** — All icon-only buttons

### Short Term (This Sprint)
1. Remove hardcoded icon colors
2. Standardize icon sizes
3. Add bilingual aria-labels
4. Fix touch target sizes

### Long Term (Next Sprint)
1. Create icon usage documentation
2. Implement icon weight system
3. Add icon animations
4. Create icon library component

---

## Files Requiring Changes

### Migrate from Lucide:
- {List files with Lucide imports}

### Fix import syntax:
- {List files with wrong imports}

### Add accessibility:
- {List files missing aria-labels}

### Remove hardcoded styles:
- {List files with hardcoded colors}

---

## Metrics

- Total files audited: {N}
- Files using Phosphor correctly: {N} ({%}%)
- Files with Lucide imports: {N}
- Files with import errors: {N}
- Files missing accessibility: {N}
- Critical issues: {N}
- Major issues: {N}
- Minor issues: {N}

---

## Migration Status

**If Lucide icons found:**
- ✅ / ❌ Migration complete
- ✅ / ❌ All imports updated
- ✅ / ❌ Ready to remove Lucide package

**If migration needed:**
- Run: `migrate icons` to start migration process

---

## Related Documentation

- **[iconography.md](../guidelines/design-tokens/iconography.md)** — Icon standards
- **[migrate-icons.md](./migrate-icons.md)** — Icon migration guide
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 13

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | YYYY-MM-DD | Initial Phosphor icons audit |
```

---

## Success Criteria

- [ ] Package installation verified
- [ ] All files scanned for Lucide icons
- [ ] All files scanned for Phosphor imports
- [ ] Import syntax verified
- [ ] Icon names verified as current
- [ ] JSX usage checked
- [ ] Accessibility labels verified
- [ ] Bilingual labels checked
- [ ] Icon sizes checked
- [ ] Hardcoded styling identified
- [ ] Common icon mappings verified
- [ ] TypeScript errors identified
- [ ] Audit report generated with findings
- [ ] Migration path provided if needed

---

## Quick Fix Commands

**Find all Lucide imports:**
```bash
file_search: "from 'lucide-react'" in /src/
```

**Find all Phosphor imports:**
```bash
file_search: "from '@phosphor-icons/react'" in /src/
```

**Find icon-only buttons:**
```bash
file_search: "<button" in /src/
# Then check for buttons with only icon children
```

---

## Related Documentation

- **[iconography.md](../guidelines/design-tokens/iconography.md)** — Icon standards
- **[migrate-icons.md](./migrate-icons.md)** — Migration guide
- **[Guidelines.md](../guidelines/Guidelines.md)** — Design system standards
- **[Phosphor Icons](https://phosphoricons.com/)** — Official documentation

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial Phosphor Icons audit for Nova Public Notices Portal |
