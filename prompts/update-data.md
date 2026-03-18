# Update Data — Content Migration to Data Files

**Category:** Maintenance  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `update data`  
**Status:** Active  
**Parent:** update-orchestrator.md

---

## Purpose

Audit the codebase to find any hard-coded content within templates or page components, then migrate all content to data files. **All components MUST dynamically call content from data files for ALL values.**

---

## Scope

This audit scans:
- All page components in `/src/app/pages/`
- All components in `/src/app/components/`
- All route components
- All template parts (Header, Footer, Hero, etc.)

---

## Hard-Coded Content Detection

### What Counts as Hard-Coded Content

**Must be migrated:**
- Page titles and headings
- Body copy and descriptions
- Button labels
- Link text
- Form labels and placeholders
- Error messages
- Success messages
- Helper text
- Alt text
- ARIA labels (content, not semantic descriptions)
- List items with display text
- Card content (titles, descriptions, metadata)
- Modal content
- Toast/notification messages

**Allowed to remain:**
- Semantic class names
- Technical identifiers
- TypeScript types
- Import paths
- Route paths (these go in route config)
- Component prop names
- HTML attributes (non-content)

---

## Detection Patterns

### Inline String Literals

**Search for:**
```tsx
// Direct string literals in JSX
<h1>About us</h1>
<p>This is some content</p>
<button>Click here</button>

// String literals in props
<Button label="Submit" />
<Link text="Read more" />
```

**Should be:**
```tsx
// Import from data file
import { aboutData } from '../data/about/about.en';

<h1>{aboutData.title}</h1>
<p>{aboutData.description}</p>
<button>{aboutData.actions.submit}</button>
```

### Template Literals

**Search for:**
```tsx
const message = `Welcome to ${appName}`;
const greeting = `Hello, ${userName}`;
```

**Should be:**
```tsx
import { messages } from '../data/site/messages.en';

const message = messages.welcome(appName);
const greeting = messages.greeting(userName);
```

### Hard-Coded Arrays

**Search for:**
```tsx
const items = [
  { title: "Item 1", description: "Description 1" },
  { title: "Item 2", description: "Description 2" },
];
```

**Should be:**
```tsx
import { items } from '../data/section/items.en';

// items.ts exports typed array
```

---

## Data File Structure Requirements

### Bilingual Pair Rule

**Every data file MUST have an EN/AF pair:**

```
/src/app/data/
  home/
    home.en.ts       ← English version
    home.af.ts       ← Afrikaans version
  about/
    about.en.ts
    about.af.ts
  contact/
    contact.en.ts
    contact.af.ts
```

### Data File Format

Each data file must export a typed constant:

```typescript
// /src/app/data/home/home.en.ts

import type { PageData } from '../types';

export const homeData: PageData = {
  meta: {
    title: "Public notices portal",
    description: "Discover and publish public notices in South Africa"
  },
  hero: {
    heading: "Find public notices",
    subheading: "Browse legal notices from across South Africa",
    cta: {
      primary: "Search notices",
      secondary: "Submit a notice"
    }
  },
  sections: {
    about: {
      title: "What are public notices?",
      description: "Legal announcements published for public record...",
      link: {
        text: "Learn more",
        href: "/about"
      }
    }
  }
};
```

### TypeScript Types Required

All data must be typed:

```typescript
// /src/app/data/types.ts

export interface PageData {
  meta: PageMeta;
  hero: HeroData;
  sections: Record<string, SectionData>;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface HeroData {
  heading: string;
  subheading: string;
  cta: {
    primary: string;
    secondary?: string;
  };
}

export interface SectionData {
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}
```

---

## Migration Workflow

### Step 1: Scan for Hard-Coded Content

```bash
# Search for potential hard-coded strings
1. Read all .tsx files in /src/app/pages/
2. Read all .tsx files in /src/app/components/
3. Identify string literals in JSX
4. Identify string literals in props
5. Identify hard-coded arrays with content
```

### Step 2: Create Data Files

For each page/component with hard-coded content:

1. **Create data directory:**
   ```
   /src/app/data/{page-name}/
   ```

2. **Create bilingual pair:**
   ```
   {page-name}.en.ts
   {page-name}.af.ts
   ```

3. **Export typed constant:**
   ```typescript
   export const {pageName}Data: PageData = { ... };
   ```

4. **Translate Afrikaans:**
   - Use formal, official, high-register Afrikaans
   - No slang or casual language
   - Appropriate for legal/public sector

### Step 3: Update Components

For each component using hard-coded content:

1. **Add data import:**
   ```typescript
   import { homeData } from '../data/home/home.en';
   ```

2. **Replace string literals:**
   ```tsx
   // Before
   <h1>Public Notices Portal</h1>
   
   // After
   <h1>{homeData.hero.heading}</h1>
   ```

3. **Update props:**
   ```tsx
   // Before
   <Button label="Submit" />
   
   // After
   <Button label={homeData.actions.submit} />
   ```

### Step 4: Verify Migration

After migration:

1. **Check no string literals remain:**
   - Search for `<{tag}>.*[A-Za-z].*</{tag}>` patterns
   - Search for `label="`, `text="`, `title="` with literal strings

2. **Verify bilingual pairs exist:**
   - Every `.en.ts` has matching `.af.ts`
   - Content structure matches between pairs
   - No missing translations

3. **Test TypeScript compilation:**
   - All imports resolve
   - All types match
   - No type errors

4. **Test functionality:**
   - All pages load
   - All content displays
   - No undefined values

---

## Special Cases

### Dynamic Content with Variables

**Use functions or template strings in data:**

```typescript
// data file
export const messages = {
  welcome: (name: string) => `Welcome, ${name}!`,
  itemCount: (count: number) => `Showing ${count} items`
};

// component
<p>{messages.welcome(userName)}</p>
<p>{messages.itemCount(items.length)}</p>
```

### Conditional Content

**Store all variants in data:**

```typescript
// data file
export const statusMessages = {
  success: "Notice published successfully",
  pending: "Notice awaiting review",
  rejected: "Notice requires changes"
};

// component
<p>{statusMessages[notice.status]}</p>
```

### Lists and Repeated Content

**Export arrays from data:**

```typescript
// data file
export const categories = [
  { id: 'estates', name: 'Estates', slug: 'estates' },
  { id: 'liquor', name: 'Liquor licences', slug: 'liquor-licences' },
  // ...
];

// component
{categories.map(cat => (
  <li key={cat.id}>{cat.name}</li>
))}
```

---

## Report Format

Generate report: `/reports/YYYY-MM-DD-data-migration.md`

```markdown
# Data Migration Audit — YYYY-MM-DD

**Audited:** YYYY-MM-DD  
**Scope:** All pages and components  
**Status:** {Complete/In Progress}

---

## Executive Summary

{Summary of findings}

---

## Files Scanned

- Total files scanned: {number}
- Pages: {number}
- Components: {number}
- Template parts: {number}

---

## Hard-Coded Content Found

### Critical Issues (Content in Components)

**File:** `/src/app/pages/About.tsx`
- Line 15: `<h1>About us</h1>`
- Line 23: `<p>This is our story...</p>`
- **Action:** Migrate to `/src/app/data/about/about.en.ts`

### Data Files Created

1. `/src/app/data/home/home.en.ts` + `home.af.ts`
2. `/src/app/data/about/about.en.ts` + `about.af.ts`
3. `/src/app/data/contact/contact.en.ts` + `contact.af.ts`

---

## Migration Summary

- Hard-coded strings found: {number}
- Data files created: {number}
- Bilingual pairs: {number}
- Components updated: {number}

---

## Compliance Status

- [x] All page content in data files
- [x] All bilingual pairs exist
- [x] All data files typed
- [x] TypeScript compiles
- [x] All pages load correctly

---

## Remaining Work

### To Do
- [ ] Migrate {component-name}
- [ ] Create data file for {page-name}
- [ ] Translate AF version of {data-file}

### Blocked
- None

---

## Related Files

- **[update-orchestrator.md](./update-orchestrator.md)** — Parent orchestrator
- **[audit-data.md](./audit-data.md)** — Data architecture audit
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 4.4
```

---

## Success Criteria

✅ **Migration Complete When:**

- Zero hard-coded content strings in any `.tsx` file
- All data files have EN/AF bilingual pairs
- All data files use TypeScript types
- All components import and use data
- TypeScript compilation passes with no errors
- All pages load and display content correctly
- All bilingual switching works
- Report generated and placed in `/reports/`

---

## Common Violations

### ❌ Hard-coded in component:
```tsx
function About() {
  return <h1>About us</h1>;
}
```

### ✅ Correct (data-driven):
```tsx
import { aboutData } from '../data/about/about.en';

function About() {
  return <h1>{aboutData.title}</h1>;
}
```

### ❌ Missing bilingual pair:
```
/src/app/data/home/home.en.ts  ← Only EN exists
```

### ✅ Correct (bilingual pair):
```
/src/app/data/home/home.en.ts
/src/app/data/home/home.af.ts
```

### ❌ Untyped data:
```typescript
export const homeData = {
  title: "Home"  // No type
};
```

### ✅ Correct (typed data):
```typescript
export const homeData: PageData = {
  title: "Home"
};
```

---

## Automation Opportunities

For future optimization, consider:
- Script to detect string literals in JSX
- Script to scaffold data file pairs
- Script to validate EN/AF content structure matches
- Script to check all data files are imported

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 4.4 (No one-off page data in components)
- **[data-model.md](../guidelines/data-model.md)** — Data architecture standards
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual data requirements
- **[update-orchestrator.md](./update-orchestrator.md)** — Parent prompt

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial data migration audit prompt |
