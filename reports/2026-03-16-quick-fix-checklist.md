# Quick Fix Checklist — Nova Public Notices Portal

**Date:** 2026-03-16  
**Purpose:** Action items from comprehensive audit  
**Total Estimated Time:** 11-16 hours

---

## 🔴 Priority 1: Critical Fixes (Must Do)

### 1. Fix Hard-Coded Colors (2-3 hours)

#### Logo.tsx
```tsx
// ❌ Before:
const textColor = variant === "dark" ? "#FFFFFF" : "#09082F";
const accentColor = "#D3000D";

// ✅ After:
const textColor = variant === "dark" ? "var(--foreground)" : "var(--nova-primary)";
const accentColor = "var(--nova-accent)";
```

---

#### Contact.tsx & ContactAF.tsx
```tsx
// ❌ Before:
<Mail className="text-[#d70025]" />
<Button className="bg-[#d70025] hover:bg-[#b5001f]" />

// ✅ After:
<Mail className="wpn-text--accent" />
<Button className="wpn-button wpn-button--accent" />
```

**Search Pattern:** `text-\[#[a-f0-9]{6}\]|bg-\[#[a-f0-9]{6}\]`

---

#### Sales.tsx
```tsx
// ❌ Before:
<div className="from-[#09082f] to-[#1a1849]">
<Button className="bg-[#d70025]">

// ✅ After:
<div className="wpn-bg--primary">
<Button className="wpn-button wpn-button--accent">
```

---

#### PageStub.tsx
```tsx
// ❌ Before:
<Construction className="text-[#d70025]" />
<h1 className="text-[#09082f]">

// ✅ After:
<Construction className="wpn-text--accent" />
<h1 className="wpn-text--primary">
```

---

### 2. Migrate Legacy Classes (1-2 hours)

#### Search and Replace

| Find | Replace |
|------|---------|
| `className="wp-bg-primary"` | `className="wpn-bg--primary"` |
| `className="wp-bg-accent"` | `className="wpn-bg--accent"` |
| `className="wp-text-primary"` | `className="wpn-text--primary"` |
| `className="wp-text-accent"` | `className="wpn-text--accent"` |
| `className="wp-btn-accent"` | `className="wpn-button wpn-button--accent"` |
| `className="wp-btn-primary"` | `className="wpn-button wpn-button--primary"` |
| `className="wp-link"` | `className="wpn-link--primary"` |

**Files to Check:**
- All `.tsx` files in `/src/app/pages/`
- All `.tsx` files in `/src/app/components/`

**Verification:**
```bash
# Search for remaining legacy classes
grep -r "className=\"wp-" src/app/
```

---

### 3. Refactor Data Files (1 hour)

#### Current Structure (confusing):
```
/src/app/data/notices/
├── noticeData.ts
├── noticeDataPart2.ts
├── noticeDataPart3.ts
└── noticeDataFinal.ts
```

#### Recommended Structure (clear):
```
/src/app/data/notices/
├── types.ts              // Type definitions
├── index.ts              // Main export aggregator
├── tenders.ts            // Tenders category data
├── estates.ts            // Estates category data
├── liquor-licences.ts    // Liquor licences data
├── town-planning.ts      // Town planning data
└── helpers.ts            // Data utility functions
```

**Steps:**
1. Create new category-specific files
2. Move data from old files to new files
3. Update `index.ts` to export from new files
4. Update all imports in components
5. Delete old files (`noticeData*.ts`)
6. Test all pages still work

---

### 4. Centralize Type Definitions (2 hours)

#### Create `/src/app/types/` Directory

**Structure:**
```
/src/app/types/
├── index.ts              // Main export
├── notice.ts             // Notice types
├── category.ts           // Category types
├── user.ts               // User types
├── navigation.ts         // Navigation types
├── contact.ts            // Contact types
└── status.ts             // Status enums
```

---

#### notice.ts
```typescript
export interface Notice {
  id: string;
  category: string;
  categorySlug: string;
  title: BilingualText;
  excerpt: BilingualText;
  body?: BilingualText;
  location: string;
  date: string;
  refNumber: string;
  status?: NoticeStatus;
  source?: NoticeSource;
  attachments?: string[];
}

export type NoticeStatus = 
  | 'draft'
  | 'submitted'
  | 'pending'
  | 'published'
  | 'archived'
  | 'expired';

export type NoticeSource = 
  | 'self-serve'
  | 'sales-assisted'
  | 'imported';
```

---

#### category.ts
```typescript
export interface Category {
  slug: string;
  name: BilingualText;
  description: BilingualText;
  icon?: string;
  count?: number;
  color?: string; // Reference to CSS variable
}
```

---

#### user.ts
```typescript
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

export type UserRole = 
  | 'admin'
  | 'editor'
  | 'subscriber';
```

---

#### index.ts
```typescript
export * from './notice';
export * from './category';
export * from './user';
export * from './navigation';
export * from './contact';
export * from './status';

// Shared bilingual type
export interface BilingualText {
  en: string;
  af: string;
}
```

---

**Migration Steps:**
1. Create `/src/app/types/` directory
2. Create all type files
3. Move interfaces from data files
4. Update imports across codebase:
   ```typescript
   // Before:
   import { Category } from '../data/categories';
   
   // After:
   import { Category } from '../types';
   ```
5. Search for any remaining local type definitions
6. Test TypeScript compilation

---

## 🟡 Priority 2: Quality Improvements (Optional)

### 5. Add Data Validation (4-6 hours)

```bash
npm install zod
```

```typescript
// /src/app/lib/validation.ts
import { z } from 'zod';

export const BilingualTextSchema = z.object({
  en: z.string().min(1),
  af: z.string().min(1),
});

export const CategorySchema = z.object({
  slug: z.string().min(1),
  name: BilingualTextSchema,
  description: BilingualTextSchema,
  icon: z.string().optional(),
  count: z.number().optional(),
});

export const NoticeSchema = z.object({
  id: z.string().uuid(),
  category: z.string().min(1),
  categorySlug: z.string().min(1),
  title: BilingualTextSchema,
  excerpt: BilingualTextSchema,
  body: BilingualTextSchema.optional(),
  location: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  refNumber: z.string().min(1),
  status: z.enum(['draft', 'submitted', 'pending', 'published', 'archived', 'expired']).optional(),
  source: z.enum(['self-serve', 'sales-assisted', 'imported']).optional(),
  attachments: z.array(z.string()).optional(),
});
```

---

### 6. Split utility-classes.css (2-3 hours)

**Current:** 1 file (400+ lines)  
**Target:** Multiple small files (<300 lines each)

```
/src/styles/
├── utilities/
│   ├── colors.css         // Text & background colors
│   ├── borders.css        // Border utilities
│   ├── shadows.css        // Shadow utilities
│   └── typography.css     // Text utilities
└── components/
    ├── buttons.css        // Button system
    ├── hero.css           // Hero section
    ├── cards.css          // Card components
    ├── features.css       // Feature cards
    └── navigation.css     // Nav components
```

**Update theme.css:**
```css
/* Import utilities */
@import "./utilities/colors.css";
@import "./utilities/borders.css";
@import "./utilities/shadows.css";
@import "./utilities/typography.css";

/* Import components */
@import "./components/buttons.css";
@import "./components/hero.css";
@import "./components/cards.css";
@import "./components/features.css";
@import "./components/navigation.css";
```

---

### 7. Add CSS Linting (1 hour)

```bash
npm install --save-dev \
  stylelint \
  stylelint-config-standard \
  stylelint-bem-namics \
  stylelint-order
```

**Create `.stylelintrc.json`:**
```json
{
  "extends": [
    "stylelint-config-standard"
  ],
  "plugins": [
    "stylelint-bem-namics",
    "stylelint-order"
  ],
  "rules": {
    "plugin/bem-namics": {
      "patternPrefixes": ["wpn"],
      "helperPrefixes": []
    },
    "order/properties-alphabetical-order": true,
    "selector-class-pattern": "^(wpn-[a-z0-9]+(__[a-z0-9]+)?(--[a-z0-9]+)?|wp-.*)$"
  }
}
```

**Add to package.json:**
```json
{
  "scripts": {
    "lint:css": "stylelint 'src/styles/**/*.css'"
  }
}
```

---

## Verification Commands

### Check for Hard-Coded Colors
```bash
grep -r "text-\[#" src/app/ | grep -v "node_modules"
grep -r "bg-\[#" src/app/ | grep -v "node_modules"
grep -r "#[0-9a-fA-F]{6}" src/app/ | grep -v "node_modules"
```

### Check for Legacy Classes
```bash
grep -r "className=\"wp-" src/app/ | grep -v "node_modules"
```

### Check TypeScript Compilation
```bash
npm run build
# or
tsc --noEmit
```

### Check CSS Validity (if Stylelint installed)
```bash
npm run lint:css
```

---

## Testing Checklist

After making changes, verify:

- [ ] Homepage loads correctly
- [ ] Search page works
- [ ] Category pages display
- [ ] Single notice pages render
- [ ] Contact page shows properly
- [ ] Navigation works (desktop)
- [ ] Navigation works (mobile)
- [ ] Language switcher works (EN ↔ AF)
- [ ] Buttons show correct styles
- [ ] Colors match design system
- [ ] Borders are 1px (not 2px)
- [ ] Shadows are subtle
- [ ] All text uses Lexend font
- [ ] No TypeScript errors
- [ ] No console errors

---

## Rollback Plan

If issues occur:

1. **Git Rollback:**
   ```bash
   git checkout <commit-before-changes>
   ```

2. **Selective Rollback:**
   ```bash
   git checkout HEAD -- src/app/components/Logo.tsx
   ```

3. **Create Branch:**
   ```bash
   git checkout -b fix/design-system-updates
   # Make changes
   git commit -m "Update design system usage"
   ```

---

## Success Metrics

### Before Fixes:
- Hard-coded colors: 50+
- Legacy classes: 10+
- Data file issues: 5 files
- Type definitions: Scattered
- Grade: A- (89/100)

### After Fixes:
- Hard-coded colors: 0 ✅
- Legacy classes: 0 ✅
- Data file issues: 0 ✅
- Type definitions: Centralized ✅
- Grade: A+ (95/100) ✅

---

## Timeline

### Day 1: Colors & Classes (3-5 hours)
- Fix Logo.tsx
- Fix Contact.tsx & ContactAF.tsx
- Fix Sales.tsx
- Fix PageStub.tsx
- Migrate legacy classes

### Day 2: Data & Types (3-4 hours)
- Refactor notices/ folder
- Create types/ directory
- Move type definitions
- Update imports

### Day 3: Testing & Verification (2-3 hours)
- Run all verification commands
- Test all pages
- Fix any issues
- Update documentation

**Total Time:** 8-12 hours (conservative estimate)

---

## Questions & Support

### Need Help?

1. **Check documentation:**
   - `/docs/bem-utility-classes.md`
   - `/guidelines/Guidelines.md`
   - `/guidelines/design-tokens/`

2. **Review audit reports:**
   - `/reports/2026-03-16-token-audit.md`
   - `/reports/2026-03-16-css-architecture-audit.md`
   - `/reports/2026-03-16-data-structure-audit.md`

3. **Search codebase examples:**
   ```bash
   grep -r "wpn-button" src/app/
   grep -r "BilingualText" src/app/
   ```

---

## Completion Checklist

- [ ] All hard-coded colors removed
- [ ] All legacy classes migrated
- [ ] Data files renamed clearly
- [ ] Type definitions centralized
- [ ] All tests passing
- [ ] TypeScript compiles
- [ ] No console errors
- [ ] Documentation updated
- [ ] Git committed with clear message
- [ ] Team notified of changes

---

**Good luck with the fixes! 🚀**

**Report Generated:** 2026-03-16  
**Estimated Completion:** 2-3 days
