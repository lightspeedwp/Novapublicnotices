# Audit Header — Nova Public Notices Portal

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit header`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Audit header implementation across all pages to ensure consistent use of header template part with appropriate patterns for different site sections (homepage, main site, dev tools, etc.).

**When to Use:** After header changes, before deployment, or when header inconsistencies are suspected.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Section 13 (Design system and styling rules)
- `/guidelines/design-tokens/navigation.md` — Navigation patterns
- `/guidelines/design-tokens/css-architecture.md` — BEM and component structure
- `/guidelines/locale-architecture.md` — Bilingual navigation requirements

---

## Header Architecture Requirements

### Template Part Concept

**All pages must use a single Header template part component:**
- Component: `/src/app/components/template-parts/Header.tsx`
- Patterns stored in: `/src/app/components/patterns/headers/`

**Header patterns by section:**

1. **Homepage Header** — `HeaderHome.tsx`
   - Transparent background on hero
   - Transitions to solid on scroll
   - No breadcrumbs
   - Full navigation

2. **Main Site Header** — `HeaderMain.tsx`
   - Solid background
   - Breadcrumbs below nav
   - Full navigation
   - Language switcher

3. **Dev Tools Header** — `HeaderDevTools.tsx`
   - Distinct styling
   - Dev tools navigation
   - No breadcrumbs
   - Return to main site link

4. **Authenticated Header** — `HeaderAuth.tsx`
   - User account menu
   - Notification icon
   - Full navigation

5. **Mobile Header** — All patterns responsive
   - Hamburger menu
   - Simplified navigation
   - Mobile language switcher

---

## Workflow Steps

### Step 1: Scan All Page Files

Search for header usage in all page files:

```bash
file_search: "<header" in /src/app/pages/
file_search: "Header" in /src/app/pages/
file_search: "nav" in /src/app/pages/
```

For each page file:
1. Check if it imports Header component
2. Check which header pattern it uses
3. Verify it's not hardcoding header markup
4. Check for inline header styles

### Step 2: Check Header Component Exists

Verify template part structure:

```
/src/app/components/
  template-parts/
    Header.tsx           # Main header template part
    HeaderStyles.css     # Header-specific styles
```

**Header.tsx should:**
- Accept `pattern` prop to determine which pattern to load
- Accept `section` prop (home / main / dev-tools / auth)
- Dynamically load correct pattern component
- Use consistent class names (BEM)
- Use CSS variables (no inline styles)

Example structure:
```tsx
// Header.tsx
import { HeaderHome } from '../patterns/headers/HeaderHome';
import { HeaderMain } from '../patterns/headers/HeaderMain';
import { HeaderDevTools } from '../patterns/headers/HeaderDevTools';

interface HeaderProps {
  section?: 'home' | 'main' | 'dev-tools' | 'auth';
  locale?: 'en' | 'af';
}

export function Header({ section = 'main', locale = 'en' }: HeaderProps) {
  switch (section) {
    case 'home':
      return <HeaderHome locale={locale} />;
    case 'dev-tools':
      return <HeaderDevTools locale={locale} />;
    case 'auth':
      return <HeaderAuth locale={locale} />;
    default:
      return <HeaderMain locale={locale} />;
  }
}
```

### Step 3: Check Header Patterns

Verify pattern components exist:

```
/src/app/components/patterns/headers/
  HeaderHome.tsx
  HeaderMain.tsx
  HeaderDevTools.tsx
  HeaderAuth.tsx
```

**Each pattern must:**
- Use semantic HTML (`<header>`, `<nav>`)
- Use BEM class names (`.wp-header`, `.wp-header__nav`)
- Use CSS variables (no hard-coded colors)
- Support bilingual content via props
- Be responsive (mobile patterns)
- Include ARIA labels for accessibility

### Step 4: Verify Pattern Usage by Page Type

**Homepage (/ and /af/):**
```tsx
<Header section="home" locale={locale} />
```
- Should use HeaderHome pattern
- Transparent background initially
- No breadcrumbs

**Main Pages (all other public pages):**
```tsx
<Header section="main" locale={locale} />
```
- Should use HeaderMain pattern
- Solid background
- Breadcrumbs included

**Dev Tools Pages (StyleGuide, etc.):**
```tsx
<Header section="dev-tools" locale={locale} />
```
- Should use HeaderDevTools pattern
- Distinct dev styling
- Dev navigation

**Account/Auth Pages:**
```tsx
<Header section="auth" locale={locale} />
```
- Should use HeaderAuth pattern
- User menu
- Account-specific nav

### Step 5: Check Navigation Data

Verify navigation data is properly structured:

```
/src/app/data/navigation/
  navigation.en.ts
  navigation.af.ts
  navigation-dev-tools.en.ts
  navigation-dev-tools.af.ts
```

**Navigation data must:**
- Be separate for main site vs dev tools
- Include bilingual labels
- Define navigation structure
- NOT be hard-coded in header components

### Step 6: Check CSS Architecture

Verify header styles follow BEM:

```css
/* /src/styles/header.css */

/* Block */
.wp-header { }

/* Elements */
.wp-header__container { }
.wp-header__nav { }
.wp-header__logo { }
.wp-header__menu { }
.wp-header__menu-item { }
.wp-header__actions { }
.wp-header__lang-switcher { }

/* Modifiers */
.wp-header--transparent { }
.wp-header--dev-tools { }
.wp-header--mobile { }
```

**Check for violations:**
- ❌ Inline styles
- ❌ Hard-coded colors
- ❌ Tailwind utility classes for visual styling
- ❌ Hard-coded spacing values
- ❌ Non-semantic class names

### Step 7: Check Accessibility

**Required accessibility features:**

1. **Semantic HTML:**
   ```tsx
   <header role="banner">
     <nav role="navigation" aria-label="Main navigation">
       <ul role="list">
         <li role="listitem">
   ```

2. **Skip links:**
   ```tsx
   <a href="#main-content" className="wp-skip-link">
     Skip to content
   </a>
   ```

3. **Keyboard navigation:**
   - All nav items keyboard accessible
   - Focus indicators visible
   - Escape closes mobile menu

4. **ARIA labels:**
   ```tsx
   <button aria-label="Open menu" aria-expanded="false">
   <button aria-label="Close menu" aria-expanded="true">
   <nav aria-label="Main navigation" />
   ```

5. **Bilingual labels:**
   ```tsx
   // English
   <button aria-label="Open menu">
   
   // Afrikaans
   <button aria-label="Maak kieslys oop">
   ```

### Step 8: Check Mobile Responsiveness

**Mobile header requirements:**

1. **Hamburger menu** for navigation
2. **Mobile language switcher**
3. **Touch-friendly targets** (44x44px minimum)
4. **Simplified navigation** for small screens
5. **Fixed or sticky header** (depending on pattern)

**Breakpoints:**
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

### Step 9: Check for Hardcoded Headers

Search for pages that hardcode header markup instead of using Header component:

```bash
file_search: "<header" in /src/app/pages/
```

**Violations:**
```tsx
❌ BAD: Hardcoded header in page
export function MyPage() {
  return (
    <div>
      <header className="...">
        <nav>...</nav>
      </header>
      {/* page content */}
    </div>
  );
}

✅ GOOD: Using Header template part
import { Header } from '../components/template-parts/Header';

export function MyPage() {
  return (
    <div>
      <Header section="main" locale="en" />
      {/* page content */}
    </div>
  );
}
```

### Step 10: Generate Audit Report

Save report to `/reports/YYYY-MM-DD-header-audit.md`:

```markdown
# Header Audit Report

**Date:** YYYY-MM-DD  
**Audit Type:** Template Part  
**Status:** Complete  
**Guidelines Referenced:** Guidelines.md (Section 13), navigation.md, css-architecture.md

---

## Executive Summary

Audited header implementation across {N} pages. Found {N} pages using Header template part correctly, {N} pages with violations.

---

## Findings

### Critical Issues

**Pages without Header template part:**
- {List pages hardcoding header markup}

**Pages with inline styles:**
- {List pages with style={{ }} in header}

**Pages using wrong pattern:**
- {List pages using incorrect header pattern for their section}

### Major Issues

**Missing accessibility features:**
- {List pages missing ARIA labels}
- {List pages missing skip links}

**Navigation data issues:**
- {List pages with hardcoded nav instead of data files}

### Minor Issues

**Non-BEM class names:**
- {List pages using non-standard classes}

**Mobile responsiveness:**
- {List pages with mobile header issues}

### Positive Findings

**Correct implementation:**
- {List pages correctly using Header template part}

---

## Template Part Status

### Header Component
- ✅ / ❌ `/src/app/components/template-parts/Header.tsx` exists
- ✅ / ❌ Accepts `section` and `locale` props
- ✅ / ❌ Dynamically loads patterns
- ✅ / ❌ Uses BEM class names
- ✅ / ❌ Uses CSS variables

### Header Patterns
- ✅ / ❌ HeaderHome.tsx exists
- ✅ / ❌ HeaderMain.tsx exists
- ✅ / ❌ HeaderDevTools.tsx exists
- ✅ / ❌ HeaderAuth.tsx exists

### Pattern Data Files
- ✅ / ❌ navigation.en.ts exists
- ✅ / ❌ navigation.af.ts exists
- ✅ / ❌ navigation-dev-tools.en.ts exists
- ✅ / ❌ navigation-dev-tools.af.ts exists

---

## Pages by Header Pattern

### Homepage Pattern (HeaderHome)
- ✅ /src/app/pages/Home.tsx
- ✅ /src/app/pages/HomeAF.tsx

### Main Site Pattern (HeaderMain)
- ✅ /src/app/pages/SearchResults.tsx
- ✅ /src/app/pages/SingleNotice.tsx
- {List all main pages}

### Dev Tools Pattern (HeaderDevTools)
- ✅ /src/app/pages/StyleGuide.tsx
- {List all dev tool pages}

### Auth Pattern (HeaderAuth)
- ✅ /src/app/pages/account/Dashboard.tsx
- {List all auth pages}

### Violations
- ❌ /src/app/pages/Example.tsx — Hardcoded header
- ❌ /src/app/pages/Another.tsx — Wrong pattern used

---

## CSS Architecture Compliance

**BEM Class Names:**
- ✅ / ❌ All header elements use .wp-header BEM
- ✅ / ❌ No utility classes for visual styling
- ✅ / ❌ Modifiers properly named

**CSS Variables:**
- ✅ / ❌ No hard-coded colors
- ✅ / ❌ No hard-coded spacing
- ✅ / ❌ Uses var(--nova-*) tokens

---

## Accessibility Compliance

- ✅ / ❌ Semantic HTML (header, nav, ul, li)
- ✅ / ❌ Skip links present
- ✅ / ❌ ARIA labels correct
- ✅ / ❌ Bilingual ARIA labels
- ✅ / ❌ Keyboard navigation functional
- ✅ / ❌ Focus indicators visible

---

## Recommendations

### Immediate (Blocking)
1. Create Header template part if missing
2. Fix pages hardcoding header markup
3. Add missing accessibility features

### Short Term (This Sprint)
1. Migrate all pages to Header template part
2. Create missing header patterns
3. Update navigation data files

### Long Term (Next Sprint)
1. Add scroll-based header transitions
2. Implement sticky header for mobile
3. Add header animations

---

## Files Requiring Changes

- `/src/app/components/template-parts/Header.tsx` — Create or update
- `/src/app/components/patterns/headers/HeaderHome.tsx` — Create pattern
- `/src/app/components/patterns/headers/HeaderMain.tsx` — Create pattern
- `/src/app/pages/{PageName}.tsx` — Migrate to Header template part
- {List all files needing updates}

---

## Metrics

- Total pages audited: {N}
- Pages using Header correctly: {N} ({%}%)
- Pages with violations: {N} ({%}%)
- Critical issues: {N}
- Major issues: {N}
- Minor issues: {N}

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 13
- **[navigation.md](../guidelines/design-tokens/navigation.md)** — Nav patterns
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | YYYY-MM-DD | Initial header audit |
```

---

## Success Criteria

- [ ] All page files scanned for header usage
- [ ] Header template part verified or flagged for creation
- [ ] Header patterns verified or flagged for creation
- [ ] Pattern usage verified for each page type
- [ ] Navigation data files verified
- [ ] CSS architecture compliance checked
- [ ] Accessibility features verified
- [ ] Mobile responsiveness checked
- [ ] Hardcoded headers identified
- [ ] Audit report generated with findings
- [ ] Recommendations prioritized

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Design system standards
- **[navigation.md](../guidelines/design-tokens/navigation.md)** — Navigation patterns
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM methodology
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual requirements
- **[audit-footer.md](./audit-footer.md)** — Footer audit (related)
- **[audit-hero.md](./audit-hero.md)** — Hero audit (related)

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial header audit prompt for Nova Public Notices Portal |
