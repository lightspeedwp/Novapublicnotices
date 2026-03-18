# Expand Parts — Template Part Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand parts`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Analyze codebase for sitewide shared sections that should be extracted into reusable template parts following WordPress block theme architecture.

**Reference:** `/guidelines/wordpress-component-architecture.md`

---

## Scope

Identifies opportunities for:
- Sitewide template parts (Header, Footer, Hero, Sidebar, Breadcrumbs)
- Template part variants for different contexts
- Hardcoded template parts that should use components
- Missing template parts from standard WordPress patterns

---

## Template Part Categories

### 1. Global Template Parts

**Required on every or most pages:**
- Header (with variants: default, minimal, transparent, checkout)
- Footer (with variants: default, minimal)
- MobileMenu (collapsible navigation)
- LanguageSwitcher (EN/AF toggle)

### 2. Navigation Template Parts

**Context-specific navigation:**
- Breadcrumbs (dynamic, data-driven)
- Sidebar (variants: navigation, filters, content, widgets)
- TabNavigation (for multi-section pages)
- AccountNav (account dashboard navigation)
- StepIndicator (checkout, forms, wizards)

### 3. Content Template Parts

**Reusable content sections:**
- Hero (loads different hero patterns based on context)
- PageHeader (simple title + breadcrumbs)
- PostMeta (notice metadata, blog post metadata)
- SocialSharing (share buttons, follow links)
- RelatedContent (related notices, articles)
- Comments (future: notice comments/discussion)

### 4. Utility Template Parts

**Supporting elements:**
- AdSlot (advertisement placements)
- AnnouncementBanner (sitewide notifications)
- CookieConsent (POPIA compliance banner)
- SearchBar (global search, can be in header or standalone)
- LoginWall (access gate for logged-out users)
- LoadingState (page-level loading indicator)

---

## Analysis Process

### Step 1: Identify Repeated Sections

**Search for repeated markup across pages:**

```
<header
<footer
<nav.*breadcrumb
<aside
<section.*hero
```

**Check for:**
- Same header markup on multiple pages
- Same footer markup on multiple pages
- Same breadcrumb structure repeated
- Same sidebar structure repeated
- Same hero structure repeated (but not using Hero component)

### Step 2: Check for Hardcoded Template Parts

**Violations to find:**

```tsx
❌ Hardcoded header in page:
export function MyPage() {
  return (
    <div>
      <header className="site-header">
        <nav>...</nav>
      </header>
      {/* page content */}
    </div>
  );
}

✅ Using Header template part:
import { Header } from '../components/parts/Header';

export function MyPage() {
  return (
    <div>
      <Header lang="en" variant="default" />
      {/* page content */}
    </div>
  );
}
```

### Step 3: Analyze Current /components/ Structure

**Check:**
```
/src/app/components/
  ├─ parts/           ← What exists here?
  ├─ Layout.tsx       ← Should this be split into parts?
  ├─ Header.tsx       ← Should be in parts/Header.tsx?
  ├─ Footer.tsx       ← Should be in parts/Footer.tsx?
  └─ Hero.tsx         ← Should be in parts/Hero.tsx?
```

**For each component in root:**
- Is it used sitewide?
- Does it appear in multiple templates?
- Should it have variants?
- Should it be in parts/?

### Step 4: Check for Variant Opportunities

**Template parts that benefit from variants:**

**Header variants:**
- default — Full navigation, all features
- minimal — Logo + essential links only
- transparent — Transparent background over hero
- checkout — Distraction-free for checkout flow

**Footer variants:**
- default — Full footer with all links
- minimal — Copyright + essential links only

**Hero variants:**
- Already implemented via pattern loading (good!)

**Sidebar variants:**
- navigation — Navigation menu
- filters — Search/archive filters
- content — Related content, widgets
- ad — Ad placement sidebar

### Step 5: Check for Missing Standard Parts

**Essential template parts that should exist:**
- Header ✓/✗
- Footer ✓/✗
- MobileMenu ✓/✗
- Breadcrumbs ✓/✗
- Sidebar ✓/✗
- Hero ✓/✗
- PostMeta ✓/✗
- SocialSharing ✓/✗
- AdSlot ✓/✗
- SearchBar ✓/✗
- LanguageSwitcher ✓/✗
- AnnouncementBanner ✓/✗
- CookieConsent ✓/✗
- LoginWall ✓/✗

---

## Report Format

Generate: `/reports/YYYY-MM-DD-template-part-recommendations.md`

```markdown
# Template Part Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Pages Analyzed:** {number}  
**Template Parts Identified:** {number}  
**New Parts Recommended:** {number}

---

## Executive Summary

Analyzed page structure and identified {N} sitewide sections that should be template parts. Currently {N} parts exist, recommend creating {N} additional parts and refactoring {N} existing components.

**Top Priorities:**
1. {Part name} — Found hardcoded in {N} pages
2. {Part name} — Missing but needed for {use case}
3. {Part name} — Exists but needs variant system

---

## Current Template Part Inventory

### Existing Parts
- ✅ Header — `/components/Header.tsx` (should move to `/components/parts/Header.tsx`)
- ✅ Footer — `/components/Footer.tsx` (should move to `/components/parts/Footer.tsx`)
- ✅ Hero — `/components/Hero.tsx` (should move to `/components/parts/Hero.tsx`)
- ❌ Breadcrumbs — Not found as standalone part
- ❌ Sidebar — Not found as reusable part
- ❌ MobileMenu — Not found as standalone part

### Parts in Wrong Location
- ⚠️ `/components/Layout.tsx` — Should be split into Header + Footer parts
- ⚠️ `/components/Hero.tsx` — Should be in `/components/parts/Hero.tsx`

---

## Recommended New Template Parts

### Critical Priority

#### 1. Header Template Part with Variants

**Current State:** Header exists but may not have variant system

**Issues:**
- Same header on all pages (no contextual variants)
- Checkout pages should have minimal header
- Auth pages could use simpler header

**Recommended Implementation:**

```tsx
// /components/parts/Header.tsx
import { navigation } from '../../data/parts/navigation.en';
import { HeaderDefault } from './headers/HeaderDefault';
import { HeaderMinimal } from './headers/HeaderMinimal';
import { HeaderCheckout } from './headers/HeaderCheckout';

interface HeaderProps {
  lang: 'en' | 'af';
  variant?: 'default' | 'minimal' | 'checkout';
}

export function Header({ lang, variant = 'default' }: HeaderProps) {
  const navData = navigation[lang];
  
  switch (variant) {
    case 'minimal':
      return <HeaderMinimal navData={navData} lang={lang} />;
    case 'checkout':
      return <HeaderCheckout navData={navData} lang={lang} />;
    default:
      return <HeaderDefault navData={navData} lang={lang} />;
  }
}
```

**Variants:**

```tsx
// HeaderDefault.tsx — Full featured header
<header className="wpn-header wpn-header--default">
  <Logo />
  <MainNavigation />
  <LanguageSwitcher />
  <SearchButton />
  <UserMenu />
  <MobileMenuToggle />
</header>

// HeaderMinimal.tsx — Logo + essential links
<header className="wpn-header wpn-header--minimal">
  <Logo />
  <LanguageSwitcher />
</header>

// HeaderCheckout.tsx — Distraction-free
<header className="wpn-header wpn-header--checkout">
  <Logo />
  <StepIndicator />
</header>
```

**Usage:**
```tsx
// Standard pages
<Header lang="en" variant="default" />

// Checkout
<Header lang="en" variant="checkout" />

// Auth pages
<Header lang="en" variant="minimal" />
```

**Data File:**
```typescript
// /data/parts/navigation.en.ts
export const navigation = {
  primary: [
    { label: 'Home', href: '/' },
    { label: 'Search', href: '/search' },
    { label: 'Categories', href: '/categories' },
  ],
  secondary: [...],
  footer: [...],
};
```

**Files to Update:**
- All pages using hardcoded header
- Layout.tsx (if extracting from there)

**Benefit:** Contextual headers, distraction-free checkout, cleaner auth experience

---

#### 2. Breadcrumbs Template Part

**Current State:** Breadcrumbs may be hardcoded in pages or part of Hero

**Issues:**
- Breadcrumbs repeated in hero data
- No standalone breadcrumb component
- Inconsistent breadcrumb markup

**Recommended Implementation:**

```tsx
// /components/parts/Breadcrumbs.tsx
import { Link } from 'react-router';
import { CaretRight } from '@phosphor-icons/react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  lang?: 'en' | 'af';
}

export function Breadcrumbs({ items, lang = 'en' }: BreadcrumbsProps) {
  return (
    <nav className="wpn-breadcrumbs" aria-label="Breadcrumb">
      <ol className="wpn-breadcrumbs__list">
        {items.map((item, index) => (
          <li key={index} className="wpn-breadcrumbs__item">
            {item.href ? (
              <Link to={item.href} className="wpn-breadcrumbs__link">
                {item.label}
              </Link>
            ) : (
              <span className="wpn-breadcrumbs__current" aria-current="page">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <CaretRight className="wpn-breadcrumbs__separator" weight="bold" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

**Usage:**
```tsx
<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'Estates' },
  ]}
  lang="en"
/>
```

**Benefit:** Consistent breadcrumb markup, proper accessibility, reusable across pages

---

{Continue for remaining template parts...}

---

## Template Part Migration Roadmap

### Phase 1: Extract Global Parts (Week 1)
- [ ] Create `/components/parts/` directory
- [ ] Move Header to `/components/parts/Header.tsx`
- [ ] Move Footer to `/components/parts/Footer.tsx`
- [ ] Move Hero to `/components/parts/Hero.tsx`
- [ ] Add variant support to Header
- [ ] Update all pages to use parts

### Phase 2: Create Navigation Parts (Week 2)
- [ ] Create Breadcrumbs part
- [ ] Create MobileMenu part
- [ ] Create Sidebar part (with variants)
- [ ] Update pages using these elements

### Phase 3: Create Content Parts (Week 3)
- [ ] Create PostMeta part
- [ ] Create SocialSharing part
- [ ] Create RelatedContent part
- [ ] Update pages using these elements

### Phase 4: Create Utility Parts (Week 4)
- [ ] Create AdSlot part
- [ ] Create AnnouncementBanner part
- [ ] Create CookieConsent part
- [ ] Create LoginWall part
- [ ] Update pages using these elements

---

## Variant System Best Practices

### When to Use Variants

**Use variants for:**
- Contextual differences (checkout vs standard)
- Visual differences (minimal vs full)
- Behavioral differences (static vs sticky header)

**Don't use variants for:**
- Content differences (use data props)
- Language differences (use lang prop)
- One-time customizations (use composition)

### Variant Implementation Pattern

```tsx
// Template Part with variants
interface PartProps {
  variant?: 'default' | 'alternative';
  // ... other props
}

export function Part({ variant = 'default', ...props }: PartProps) {
  switch (variant) {
    case 'alternative':
      return <AlternativeVariant {...props} />;
    default:
      return <DefaultVariant {...props} />;
  }
}
```

**Or with conditional classes:**

```tsx
export function Part({ variant = 'default', ...props }: PartProps) {
  return (
    <div className={`wpn-part wpn-part--${variant}`}>
      {/* Content */}
    </div>
  );
}
```

---

## Template Part Data Structure

All template parts should pull data from `/data/parts/`:

```
/src/app/data/parts/
  navigation.en.ts    — Navigation menu data
  navigation.af.ts
  footer.en.ts        — Footer links and content
  footer.af.ts
  social.en.ts        — Social links
  social.af.ts
  metadata.en.ts      — Post meta labels
  metadata.af.ts
```

---

## BEM Class Naming for Parts

```css
/* Block */
.wpn-header { }
.wpn-footer { }
.wpn-breadcrumbs { }
.wpn-sidebar { }

/* Elements */
.wpn-header__logo { }
.wpn-header__nav { }
.wpn-header__actions { }
.wpn-footer__links { }
.wpn-footer__social { }
.wpn-breadcrumbs__list { }
.wpn-breadcrumbs__item { }

/* Modifiers */
.wpn-header--default { }
.wpn-header--minimal { }
.wpn-header--checkout { }
.wpn-sidebar--navigation { }
.wpn-sidebar--filters { }
```

---

## Next Steps

1. Review template part recommendations
2. Create `/components/parts/` directory
3. Create `/styles/parts/` directory
4. Move existing parts to new location
5. Add variant systems where needed
6. Create missing parts
7. Update all pages to use parts
8. Create template part data files

---

## Related Documentation

- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — Architecture guide
- **[expand-blocks.md](./expand-blocks.md)** — Block recommendations
- **[expand-patterns.md](./expand-patterns.md)** — Pattern recommendations
- **[expand-templates.md](./expand-templates.md)** — Template recommendations
```

---

## Success Criteria

✅ All sitewide sections identified  
✅ Hardcoded parts documented  
✅ Missing parts identified  
✅ Variant systems recommended  
✅ BEM class names proposed  
✅ Data structure defined  
✅ Migration roadmap created  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — Architecture guide
- **[expand-blocks.md](./expand-blocks.md)** — Block recommendations
- **[expand-patterns.md](./expand-patterns.md)** — Pattern recommendations

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial template part expansion analysis prompt |
