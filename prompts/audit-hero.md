# Audit Hero — Nova Public Notices Portal

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit hero`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Audit hero section implementation across ALL pages and templates to ensure consistent use of Hero template part component with appropriate patterns loaded from data files.

**When to Use:** After hero changes, before deployment, when hero inconsistencies are suspected, or when adding new pages.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Section 7 (Dynamic page requirements)
- `/guidelines/design-tokens/page-headers.md` — Hero and page header patterns
- `/guidelines/design-tokens/css-architecture.md` — BEM and component structure
- `/docs/hero-system.md` — Hero system documentation

---

## Hero Architecture Requirements

### Template Part Concept

**CRITICAL: ALL pages must use a single Hero template part component**

- Component: `/src/app/components/template-parts/Hero.tsx` or `/src/app/components/Hero.tsx`
- Patterns stored in: `/src/app/components/patterns/heroes/`
- Data stored in: `/src/app/data/heroes/`

**Every page needs a hero.** No exceptions.

### Hero Patterns by Page Type

**1. Homepage Hero** — `HeroHome.tsx`
- Large, impactful hero
- Search prominently featured
- Key stats or categories
- Background image or graphic
- CTA buttons

**2. Page Header Hero** — `HeroPageHeader.tsx`
- Standard page header
- Page title
- Breadcrumbs
- Optional description
- Consistent across most pages

**3. Search Results Hero** — `HeroSearchResults.tsx`
- Search input prominently displayed
- Active filters shown
- Result count
- Sort options

**4. Notice Detail Hero** — `HeroNoticeDetail.tsx`
- Notice title
- Category badge
- Publication date
- Reference number
- Location
- Status badge

**5. Category Archive Hero** — `HeroCategoryArchive.tsx`
- Category name
- Category description
- Category icon
- Filter options
- Notice count

**6. Dev Tools Hero** — `HeroDevTools.tsx`
- Page title
- Navigation tabs
- Distinct dev styling
- No breadcrumbs

**7. Auth/Account Hero** — `HeroAuth.tsx`
- Page title
- Account navigation
- User context
- Simple, functional

**8. Checkout Hero** — `HeroCheckout.tsx`
- Checkout steps indicator
- Current step highlighted
- Progress bar
- Minimal distraction

---

## Workflow Steps

### Step 1: Scan ALL Page Files

Search for hero usage in every page file:

```bash
file_search: "Hero" in /src/app/pages/
file_search: "hero" in /src/app/pages/
file_search: "PageHeader" in /src/app/pages/
file_search: "<section" in /src/app/pages/
```

**Check EVERY page:**
- `/src/app/pages/*.tsx`
- `/src/app/pages/account/*.tsx`
- `/src/app/pages/auth/*.tsx`
- `/src/app/pages/submit/*.tsx`
- `/src/app/pages/moderation/*.tsx`

For each page file:
1. Does it import Hero component?
2. Which hero pattern does it use?
3. Is it hardcoding hero markup?
4. Does it pass data from hero data files?
5. Does it have inline styles?

### Step 2: Verify Hero Component Exists

Check template part structure:

```
/src/app/components/
  template-parts/
    Hero.tsx             # Main hero template part
    HeroStyles.css       # Hero-specific styles
```

OR

```
/src/app/components/
  Hero.tsx             # Main hero component
  Hero.css            # Hero styles
```

**Hero.tsx must:**
- Accept `pattern` or `type` prop
- Accept `data` prop (hero data object)
- Accept `locale` prop for bilingual content
- Dynamically load correct pattern component
- Use consistent BEM class names
- Use CSS variables (no inline styles)
- Never hardcode content

Example structure:
```tsx
// Hero.tsx
import { HeroHome } from './patterns/heroes/HeroHome';
import { HeroPageHeader } from './patterns/heroes/HeroPageHeader';
import { HeroSearchResults } from './patterns/heroes/HeroSearchResults';
import { HeroNoticeDetail } from './patterns/heroes/HeroNoticeDetail';
import { HeroCategoryArchive } from './patterns/heroes/HeroCategoryArchive';
import { HeroDevTools } from './patterns/heroes/HeroDevTools';
import { HeroAuth } from './patterns/heroes/HeroAuth';
import { HeroCheckout } from './patterns/heroes/HeroCheckout';

interface HeroProps {
  type: 'home' | 'page-header' | 'search-results' | 'notice-detail' | 
        'category-archive' | 'dev-tools' | 'auth' | 'checkout';
  data: any; // Typed based on hero type
  locale?: 'en' | 'af';
}

export function Hero({ type, data, locale = 'en' }: HeroProps) {
  switch (type) {
    case 'home':
      return <HeroHome data={data} locale={locale} />;
    case 'search-results':
      return <HeroSearchResults data={data} locale={locale} />;
    case 'notice-detail':
      return <HeroNoticeDetail data={data} locale={locale} />;
    case 'category-archive':
      return <HeroCategoryArchive data={data} locale={locale} />;
    case 'dev-tools':
      return <HeroDevTools data={data} locale={locale} />;
    case 'auth':
      return <HeroAuth data={data} locale={locale} />;
    case 'checkout':
      return <HeroCheckout data={data} locale={locale} />;
    default:
      return <HeroPageHeader data={data} locale={locale} />;
  }
}
```

### Step 3: Check Hero Patterns Exist

Verify pattern components exist:

```
/src/app/components/patterns/heroes/
  HeroHome.tsx
  HeroPageHeader.tsx
  HeroSearchResults.tsx
  HeroNoticeDetail.tsx
  HeroCategoryArchive.tsx
  HeroDevTools.tsx
  HeroAuth.tsx
  HeroCheckout.tsx
```

**Each pattern must:**
- Accept `data` prop (typed interface)
- Accept `locale` prop
- Use semantic HTML (`<section>`, `<header>`)
- Use BEM class names (`.wp-hero`, `.wp-hero__title`)
- Use CSS variables (no hard-coded styles)
- Pull ALL content from data prop (no hardcoding)
- Support bilingual content
- Be responsive

### Step 4: Check Hero Data Files

Verify data structure exists:

```
/src/app/data/heroes/
  heroes.en.ts         # English hero data
  heroes.af.ts         # Afrikaans hero data
  types.ts            # TypeScript interfaces
  index.ts            # Data exports
```

**Hero data structure:**

```typescript
// types.ts
export interface HeroHomeData {
  title: string;
  subtitle: string;
  description: string;
  searchPlaceholder: string;
  ctaButtons: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  stats?: {
    label: string;
    value: string | number;
  }[];
}

export interface HeroPageHeaderData {
  title: string;
  description?: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
}

export interface HeroSearchResultsData {
  title: string;
  searchPlaceholder: string;
  resultCount: number;
  activeFilters: {
    label: string;
    value: string;
  }[];
  sortOptions: {
    label: string;
    value: string;
  }[];
}

// ... other hero data interfaces
```

**Multiple data files may be needed:**
- `/src/app/data/heroes/home-hero.en.ts` — Homepage hero data
- `/src/app/data/heroes/page-headers.en.ts` — Standard page headers data
- `/src/app/data/heroes/dev-tools-heroes.en.ts` — Dev tools hero data
- Each with `.af.ts` bilingual pair

### Step 5: Verify Pattern Usage by Page

**Homepage (/pages/Home.tsx, /pages/HomeAF.tsx):**
```tsx
import { Hero } from '../components/Hero';
import { homeHeroData } from '../data/heroes/home-hero.en';

export function Home() {
  return (
    <div>
      <Hero type="home" data={homeHeroData} locale="en" />
      {/* page content */}
    </div>
  );
}
```

**Standard Pages (About, Contact, Sales, etc.):**
```tsx
import { Hero } from '../components/Hero';
import { pageHeadersData } from '../data/heroes/page-headers.en';

export function About() {
  return (
    <div>
      <Hero 
        type="page-header" 
        data={pageHeadersData.about} 
        locale="en" 
      />
      {/* page content */}
    </div>
  );
}
```

**Search Results Page:**
```tsx
import { Hero } from '../components/Hero';

export function SearchResults() {
  const searchHeroData = {
    title: 'Search results',
    searchPlaceholder: 'Search notices...',
    resultCount: notices.length,
    activeFilters: [...],
    sortOptions: [...]
  };
  
  return (
    <div>
      <Hero 
        type="search-results" 
        data={searchHeroData} 
        locale="en" 
      />
      {/* results */}
    </div>
  );
}
```

**Single Notice Page:**
```tsx
import { Hero } from '../components/Hero';

export function SingleNotice() {
  const noticeHeroData = {
    title: notice.title,
    category: notice.category,
    publishDate: notice.publishDate,
    referenceNumber: notice.referenceNumber,
    location: notice.location,
    status: notice.status
  };
  
  return (
    <div>
      <Hero 
        type="notice-detail" 
        data={noticeHeroData} 
        locale="en" 
      />
      {/* notice content */}
    </div>
  );
}
```

**Category Archive:**
```tsx
import { Hero } from '../components/Hero';

export function CategoryArchive() {
  const categoryHeroData = {
    name: category.name,
    description: category.description,
    icon: category.icon,
    noticeCount: notices.length
  };
  
  return (
    <div>
      <Hero 
        type="category-archive" 
        data={categoryHeroData} 
        locale="en" 
      />
      {/* notices */}
    </div>
  );
}
```

**Dev Tools (StyleGuide, etc.):**
```tsx
import { Hero } from '../components/Hero';
import { devToolsHeroesData } from '../data/heroes/dev-tools-heroes.en';

export function StyleGuide() {
  return (
    <div>
      <Hero 
        type="dev-tools" 
        data={devToolsHeroesData.styleGuide} 
        locale="en" 
      />
      {/* dev tools content */}
    </div>
  );
}
```

### Step 6: Check CSS Architecture

Verify hero styles follow BEM:

```css
/* /src/styles/hero.css or /src/styles/page-header.css */

/* Block */
.wp-hero { }

/* Elements */
.wp-hero__container { }
.wp-hero__content { }
.wp-hero__title { }
.wp-hero__subtitle { }
.wp-hero__description { }
.wp-hero__breadcrumbs { }
.wp-hero__actions { }
.wp-hero__search { }
.wp-hero__stats { }
.wp-hero__meta { }
.wp-hero__badge { }

/* Modifiers */
.wp-hero--home { }
.wp-hero--page-header { }
.wp-hero--search-results { }
.wp-hero--notice-detail { }
.wp-hero--category-archive { }
.wp-hero--dev-tools { }
.wp-hero--minimal { }
```

**Check for violations:**
- ❌ Inline styles
- ❌ Hard-coded colors
- ❌ Hard-coded spacing
- ❌ Tailwind utility classes for visual styling
- ❌ Non-semantic class names
- ❌ Hardcoded content in components

### Step 7: Check for Hardcoded Heroes

**CRITICAL CHECK:** Search for pages hardcoding hero/header content:

```bash
file_search: "<h1" in /src/app/pages/
```

**Violations to find:**

```tsx
❌ BAD: Hardcoded hero/header in page
export function MyPage() {
  return (
    <div>
      <section className="hero">
        <h1>My Page Title</h1>
        <p>Description text</p>
      </section>
      {/* page content */}
    </div>
  );
}

❌ BAD: Hardcoded page header in page
export function MyPage() {
  return (
    <div>
      <header>
        <h1>My Page Title</h1>
      </header>
      {/* page content */}
    </div>
  );
}

✅ GOOD: Using Hero template part with data
import { Hero } from '../components/Hero';
import { myPageHeroData } from '../data/heroes/page-headers.en';

export function MyPage() {
  return (
    <div>
      <Hero 
        type="page-header" 
        data={myPageHeroData} 
        locale="en" 
      />
      {/* page content */}
    </div>
  );
}
```

### Step 8: Check Accessibility

**Required accessibility features:**

1. **Semantic HTML:**
   ```tsx
   <section className="wp-hero" aria-labelledby="hero-title">
     <h1 id="hero-title">{data.title}</h1>
   ```

2. **Heading hierarchy:**
   - Hero title should be `<h1>` (or appropriate level)
   - Only one `<h1>` per page
   - Subtitle should be `<p>` or `<h2>` if needed

3. **Breadcrumb navigation:**
   ```tsx
   <nav aria-label="Breadcrumb">
     <ol role="list">
       <li role="listitem">
   ```

4. **Bilingual content:**
   - All labels from data files
   - Properly translated in `.af.ts` files

### Step 9: Check Mobile Responsiveness

**Mobile hero requirements:**

1. **Stacked layout** (not side-by-side)
2. **Readable font sizes** on mobile
3. **Touch-friendly buttons** (44x44px minimum)
4. **Simplified content** for small screens
5. **Proper spacing** using gap/padding

**Breakpoints:**
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

### Step 10: Generate Comprehensive Audit Report

Save report to `/reports/YYYY-MM-DD-hero-audit.md`:

```markdown
# Hero Audit Report — COMPREHENSIVE

**Date:** YYYY-MM-DD  
**Audit Type:** Template Part (Critical)  
**Status:** Complete  
**Guidelines Referenced:** Guidelines.md, page-headers.md, hero-system.md

---

## Executive Summary

Audited hero implementation across **ALL {N} pages**. Found {N} pages using Hero template part correctly, **{N} pages with CRITICAL violations** (hardcoded heroes/headers).

---

## Critical Findings

### Pages WITHOUT Hero Template Part

**BLOCKING ISSUES — Must fix immediately:**

| Page | Issue | Pattern Needed |
|------|-------|----------------|
| /src/app/pages/Example.tsx | Hardcoded <h1> in page | page-header |
| /src/app/pages/Another.tsx | No hero at all | page-header |
| ... | ... | ... |

### Pages With Hardcoded Content in Hero

| Page | Issue | Fix Required |
|------|-------|--------------|
| /src/app/pages/Home.tsx | Hardcoded title string | Move to homeHeroData |
| ... | ... | ... |

### Pages With Inline Styles

| Page | Issue | Fix Required |
|------|-------|--------------|
| /src/app/pages/Example.tsx | style={{ }} in hero | Use CSS classes |
| ... | ... | ... |

---

## Template Part Status

### Hero Component
- ✅ / ❌ Hero template part exists (`/src/app/components/Hero.tsx`)
- ✅ / ❌ Accepts `type`, `data`, `locale` props
- ✅ / ❌ Dynamically loads patterns
- ✅ / ❌ Uses BEM class names
- ✅ / ❌ Uses CSS variables
- ✅ / ❌ No hardcoded content

### Hero Patterns
- ✅ / ❌ HeroHome.tsx exists
- ✅ / ❌ HeroPageHeader.tsx exists
- ✅ / ❌ HeroSearchResults.tsx exists
- ✅ / ❌ HeroNoticeDetail.tsx exists
- ✅ / ❌ HeroCategoryArchive.tsx exists
- ✅ / ❌ HeroDevTools.tsx exists
- ✅ / ❌ HeroAuth.tsx exists
- ✅ / ❌ HeroCheckout.tsx exists

### Hero Data Files
- ✅ / ❌ heroes.en.ts exists
- ✅ / ❌ heroes.af.ts exists
- ✅ / ❌ home-hero.en.ts exists
- ✅ / ❌ page-headers.en.ts exists
- ✅ / ❌ dev-tools-heroes.en.ts exists
- ✅ / ❌ All have bilingual pairs

---

## Pages by Hero Pattern

### Homepage Pattern (HeroHome)
- ✅ /src/app/pages/Home.tsx
- ✅ /src/app/pages/HomeAF.tsx

### Page Header Pattern (HeroPageHeader)
- ✅ /src/app/pages/About.tsx
- ✅ /src/app/pages/Contact.tsx
- ✅ /src/app/pages/Sales.tsx
- ❌ /src/app/pages/Example.tsx — Not using Hero at all
- {List ALL pages}

### Search Results Pattern (HeroSearchResults)
- ✅ /src/app/pages/SearchResults.tsx
- ✅ /src/app/pages/SearchResultsAF.tsx

### Notice Detail Pattern (HeroNoticeDetail)
- ✅ /src/app/pages/SingleNotice.tsx
- ✅ /src/app/pages/SingleNoticeAF.tsx

### Category Archive Pattern (HeroCategoryArchive)
- ✅ /src/app/pages/CategoryArchive.tsx
- ✅ /src/app/pages/CategoryArchiveAF.tsx

### Dev Tools Pattern (HeroDevTools)
- ✅ /src/app/pages/StyleGuide.tsx
- {List all dev tools pages}

### Auth Pattern (HeroAuth)
- ✅ /src/app/pages/auth/Login.tsx
- ✅ /src/app/pages/account/Dashboard.tsx
- {List all auth pages}

### Checkout Pattern (HeroCheckout)
- ✅ /src/app/pages/Checkout.tsx
- ✅ /src/app/pages/CheckoutAF.tsx

---

## Violations Summary

**Total pages audited:** {N}  
**Pages with violations:** {N}

**By severity:**
- 🔴 Critical (no Hero at all): {N}
- 🟠 Major (hardcoded content): {N}
- 🟡 Minor (styling issues): {N}

---

## CSS Architecture Compliance

**BEM Class Names:**
- ✅ / ❌ All hero elements use .wp-hero BEM
- ✅ / ❌ No utility classes for visual styling
- ✅ / ❌ Modifiers properly named

**CSS Variables:**
- ✅ / ❌ No hard-coded colors
- ✅ / ❌ No hard-coded spacing
- ✅ / ❌ Uses var(--nova-*) tokens

---

## Data Architecture Compliance

**All hero content from data files:**
- ✅ / ❌ No hardcoded strings in components
- ✅ / ❌ Bilingual data pairs exist
- ✅ / ❌ TypeScript interfaces defined
- ✅ / ❌ Data properly exported and imported

---

## Accessibility Compliance

- ✅ / ❌ Semantic HTML (section, h1, nav)
- ✅ / ❌ Proper heading hierarchy (one h1 per page)
- ✅ / ❌ Breadcrumb navigation properly marked up
- ✅ / ❌ ARIA labels where appropriate
- ✅ / ❌ Bilingual ARIA labels

---

## Recommendations

### Immediate (BLOCKING)
1. **Create Hero template part** if missing
2. **Fix all pages without Hero** — Add Hero component
3. **Move hardcoded content to data files**
4. **Remove inline styles** from hero sections

### Short Term (This Sprint)
1. Create missing hero patterns
2. Create missing data files
3. Migrate all pages to use Hero template part
4. Ensure bilingual data completeness

### Long Term (Next Sprint)
1. Add hero animations
2. Implement hero background images
3. Add interactive hero elements
4. Optimize hero performance

---

## Implementation Checklist

**For each page without Hero:**

- [ ] Import Hero component: `import { Hero } from '../components/Hero';`
- [ ] Determine hero pattern needed (home / page-header / search-results / etc.)
- [ ] Create or use hero data from data files
- [ ] Add Hero component: `<Hero type="page-header" data={heroData} locale="en" />`
- [ ] Remove any hardcoded header/hero markup
- [ ] Test responsive behavior
- [ ] Verify bilingual version

---

## Files Requiring Changes

### Create (if missing):
- `/src/app/components/Hero.tsx` — Main Hero template part
- `/src/app/components/patterns/heroes/HeroHome.tsx`
- `/src/app/components/patterns/heroes/HeroPageHeader.tsx`
- `/src/app/data/heroes/heroes.en.ts`
- `/src/app/data/heroes/heroes.af.ts`

### Update (add Hero component):
- {List ALL pages that need Hero added}

### Fix (remove hardcoded content):
- {List ALL pages with hardcoded hero content}

---

## Metrics

- **Total pages audited:** {N}
- **Pages using Hero correctly:** {N} ({%}%)
- **Pages with violations:** {N} ({%}%)
- **Critical issues:** {N}
- **Major issues:** {N}
- **Minor issues:** {N}
- **Completion rate:** {%}%

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 7
- **[page-headers.md](../guidelines/design-tokens/page-headers.md)** — Hero patterns
- **[hero-system.md](../docs/hero-system.md)** — Hero system docs
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | YYYY-MM-DD | Initial comprehensive hero audit |
```

---

## Success Criteria

- [ ] **ALL page files scanned** (no exceptions)
- [ ] Hero template part verified or flagged for creation
- [ ] All hero patterns verified or flagged for creation
- [ ] Pattern usage verified for each page type
- [ ] Hero data files verified
- [ ] CSS architecture compliance checked
- [ ] Data architecture compliance checked
- [ ] Accessibility features verified
- [ ] Mobile responsiveness checked
- [ ] **Hardcoded heroes identified** (critical)
- [ ] **Pages without heroes identified** (critical)
- [ ] Comprehensive audit report generated
- [ ] Recommendations prioritized

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Dynamic page requirements (Section 7)
- **[page-headers.md](../guidelines/design-tokens/page-headers.md)** — Hero patterns
- **[hero-system.md](../docs/hero-system.md)** — Hero system documentation
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM methodology
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual requirements
- **[audit-header.md](./audit-header.md)** — Header audit (related)
- **[audit-footer.md](./audit-footer.md)** — Footer audit (related)

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial comprehensive hero audit for Nova Public Notices Portal |
