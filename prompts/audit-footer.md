# Audit Footer — Nova Public Notices Portal

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit footer`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Audit footer implementation across all pages to ensure consistent use of footer template part with appropriate patterns for main site vs dev tools sections.

**When to Use:** After footer changes, before deployment, or when footer inconsistencies are suspected.

**Reference Guidelines:**
- `/guidelines/Guidelines.md` — Section 13 (Design system and styling rules)
- `/guidelines/design-tokens/navigation.md` — Navigation patterns
- `/guidelines/design-tokens/css-architecture.md` — BEM and component structure
- `/guidelines/locale-architecture.md` — Bilingual content requirements

---

## Footer Architecture Requirements

### Template Part Concept

**All pages must use a single Footer template part component:**
- Component: `/src/app/components/template-parts/Footer.tsx`
- Patterns stored in: `/src/app/components/patterns/footers/`

**Footer patterns by section:**

1. **Main Site Footer** — `FooterMain.tsx`
   - Full footer with navigation columns
   - Contact information
   - Social media links
   - Newsletter signup
   - Legal links (Privacy, Terms)
   - Copyright notice
   - Bilingual language switcher

2. **Dev Tools Footer** — `FooterDevTools.tsx`
   - Simplified dev-focused footer
   - Link back to main site
   - Dev tools navigation
   - Copyright only
   - No newsletter or social

3. **Minimal Footer** — `FooterMinimal.tsx`
   - Used on checkout, forms, auth pages
   - Essential links only
   - Copyright
   - No distractions

---

## Workflow Steps

### Step 1: Scan All Page Files

Search for footer usage in all page files:

```bash
file_search: "<footer" in /src/app/pages/
file_search: "Footer" in /src/app/pages/
file_search: "wp-footer" in /src/app/pages/
```

For each page file:
1. Check if it imports Footer component
2. Check which footer pattern it uses
3. Verify it's not hardcoding footer markup
4. Check for inline footer styles

### Step 2: Check Footer Component Exists

Verify template part structure:

```
/src/app/components/
  template-parts/
    Footer.tsx           # Main footer template part
    FooterStyles.css     # Footer-specific styles
```

**Footer.tsx should:**
- Accept `pattern` prop to determine which pattern to load
- Accept `section` prop (main / dev-tools / minimal)
- Accept `locale` prop for bilingual content
- Dynamically load correct pattern component
- Use consistent class names (BEM)
- Use CSS variables (no inline styles)

Example structure:
```tsx
// Footer.tsx
import { FooterMain } from '../patterns/footers/FooterMain';
import { FooterDevTools } from '../patterns/footers/FooterDevTools';
import { FooterMinimal } from '../patterns/footers/FooterMinimal';

interface FooterProps {
  section?: 'main' | 'dev-tools' | 'minimal';
  locale?: 'en' | 'af';
}

export function Footer({ section = 'main', locale = 'en' }: FooterProps) {
  switch (section) {
    case 'dev-tools':
      return <FooterDevTools locale={locale} />;
    case 'minimal':
      return <FooterMinimal locale={locale} />;
    default:
      return <FooterMain locale={locale} />;
  }
}
```

### Step 3: Check Footer Patterns

Verify pattern components exist:

```
/src/app/components/patterns/footers/
  FooterMain.tsx
  FooterDevTools.tsx
  FooterMinimal.tsx
```

**Each pattern must:**
- Use semantic HTML (`<footer>`)
- Use BEM class names (`.wp-footer`, `.wp-footer__column`)
- Use CSS variables (no hard-coded colors)
- Support bilingual content via props
- Be responsive (mobile stacked layout)
- Include ARIA labels where appropriate

### Step 4: Verify Pattern Usage by Page Type

**Main Site Pages (most pages):**
```tsx
<Footer section="main" locale={locale} />
```
- Should use FooterMain pattern
- Full navigation columns
- Social links
- Newsletter signup

**Dev Tools Pages (StyleGuide, etc.):**
```tsx
<Footer section="dev-tools" locale={locale} />
```
- Should use FooterDevTools pattern
- Simplified dev footer
- Link to main site

**Checkout/Auth/Forms:**
```tsx
<Footer section="minimal" locale={locale} />
```
- Should use FooterMinimal pattern
- Distraction-free
- Essential links only

### Step 5: Check Footer Data

Verify footer data is properly structured:

```
/src/app/data/footer/
  footer.en.ts
  footer.af.ts
  footer-dev-tools.en.ts
  footer-dev-tools.af.ts
  footer-minimal.en.ts
  footer-minimal.af.ts
```

**Footer data must include:**
```typescript
// footer.en.ts
export const footerData = {
  columns: [
    {
      title: 'Public notices',
      links: [
        { label: 'Browse notices', href: '/search' },
        { label: 'Submit notice', href: '/submit-notice' },
        ...
      ]
    },
    {
      title: 'Help & support',
      links: [...]
    },
    {
      title: 'Company',
      links: [...]
    }
  ],
  social: [
    { platform: 'Facebook', href: '...', icon: 'FacebookLogo' },
    { platform: 'Twitter', href: '...', icon: 'TwitterLogo' },
    ...
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
    ...
  ],
  newsletter: {
    title: 'Subscribe to notices',
    description: 'Get notified of new notices in your categories',
    buttonLabel: 'Subscribe'
  },
  copyright: '© 2026 Nova News. All rights reserved.'
};
```

### Step 6: Check CSS Architecture

Verify footer styles follow BEM:

```css
/* /src/styles/footer.css */

/* Block */
.wp-footer { }

/* Elements */
.wp-footer__container { }
.wp-footer__columns { }
.wp-footer__column { }
.wp-footer__column-title { }
.wp-footer__link { }
.wp-footer__social { }
.wp-footer__social-link { }
.wp-footer__newsletter { }
.wp-footer__legal { }
.wp-footer__copyright { }

/* Modifiers */
.wp-footer--dev-tools { }
.wp-footer--minimal { }
.wp-footer--mobile { }
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
   <footer role="contentinfo">
     <nav aria-label="Footer navigation">
       <ul role="list">
         <li role="listitem">
   ```

2. **Landmark regions:**
   ```tsx
   <footer role="contentinfo">
   ```

3. **ARIA labels:**
   ```tsx
   <nav aria-label="Footer navigation">
   <nav aria-label="Social media links">
   <nav aria-label="Legal links">
   ```

4. **Link descriptions:**
   ```tsx
   <a href="..." aria-label="Facebook - Nova News">
     <FacebookLogo aria-hidden="true" />
   </a>
   ```

5. **Bilingual labels:**
   ```tsx
   // English
   <nav aria-label="Footer navigation">
   
   // Afrikaans
   <nav aria-label="Voetnavigasie">
   ```

### Step 8: Check Mobile Responsiveness

**Mobile footer requirements:**

1. **Stacked columns** (not side-by-side)
2. **Touch-friendly links** (44x44px minimum)
3. **Collapsible sections** (optional, for long footers)
4. **Simplified newsletter form** for mobile
5. **Social icons properly sized**

**Breakpoints:**
- Desktop: 1024px+ (3-4 columns)
- Tablet: 768px - 1023px (2 columns)
- Mobile: 320px - 767px (stacked)

### Step 9: Check for Hardcoded Footers

Search for pages that hardcode footer markup instead of using Footer component:

```bash
file_search: "<footer" in /src/app/pages/
```

**Violations:**
```tsx
❌ BAD: Hardcoded footer in page
export function MyPage() {
  return (
    <div>
      {/* page content */}
      <footer className="...">
        <div>...</div>
      </footer>
    </div>
  );
}

✅ GOOD: Using Footer template part
import { Footer } from '../components/template-parts/Footer';

export function MyPage() {
  return (
    <div>
      {/* page content */}
      <Footer section="main" locale="en" />
    </div>
  );
}
```

### Step 10: Check Footer Content Completeness

**Main footer must include:**
- ✅ Navigation columns (3-4 columns)
- ✅ Social media links (Facebook, Twitter, LinkedIn)
- ✅ Newsletter signup form
- ✅ Legal links (Privacy, Terms, Cookies)
- ✅ Contact information
- ✅ Copyright notice
- ✅ Language switcher
- ✅ All content bilingual (EN/AF)

**Dev tools footer must include:**
- ✅ Copyright
- ✅ Link to main site
- ✅ Dev tools navigation
- ✅ Minimal distraction

**Minimal footer must include:**
- ✅ Copyright
- ✅ Essential legal links only
- ✅ No distractions (no newsletter, no social)

### Step 11: Generate Audit Report

Save report to `/reports/YYYY-MM-DD-footer-audit.md`:

```markdown
# Footer Audit Report

**Date:** YYYY-MM-DD  
**Audit Type:** Template Part  
**Status:** Complete  
**Guidelines Referenced:** Guidelines.md (Section 13), navigation.md, css-architecture.md

---

## Executive Summary

Audited footer implementation across {N} pages. Found {N} pages using Footer template part correctly, {N} pages with violations.

---

## Findings

### Critical Issues

**Pages without Footer template part:**
- {List pages hardcoding footer markup}

**Pages with inline styles:**
- {List pages with style={{ }} in footer}

**Pages using wrong pattern:**
- {List pages using incorrect footer pattern}

### Major Issues

**Missing accessibility features:**
- {List pages missing ARIA labels}
- {List pages missing semantic HTML}

**Footer data issues:**
- {List pages with hardcoded footer content}
- {List missing bilingual data}

### Minor Issues

**Non-BEM class names:**
- {List pages using non-standard classes}

**Mobile responsiveness:**
- {List pages with mobile footer issues}

### Positive Findings

**Correct implementation:**
- {List pages correctly using Footer template part}

---

## Template Part Status

### Footer Component
- ✅ / ❌ `/src/app/components/template-parts/Footer.tsx` exists
- ✅ / ❌ Accepts `section` and `locale` props
- ✅ / ❌ Dynamically loads patterns
- ✅ / ❌ Uses BEM class names
- ✅ / ❌ Uses CSS variables

### Footer Patterns
- ✅ / ❌ FooterMain.tsx exists
- ✅ / ❌ FooterDevTools.tsx exists
- ✅ / ❌ FooterMinimal.tsx exists

### Pattern Data Files
- ✅ / ❌ footer.en.ts exists
- ✅ / ❌ footer.af.ts exists
- ✅ / ❌ footer-dev-tools.en.ts exists
- ✅ / ❌ footer-dev-tools.af.ts exists
- ✅ / ❌ footer-minimal.en.ts exists
- ✅ / ❌ footer-minimal.af.ts exists

---

## Pages by Footer Pattern

### Main Site Pattern (FooterMain)
- ✅ /src/app/pages/Home.tsx
- ✅ /src/app/pages/SearchResults.tsx
- {List all main pages}

### Dev Tools Pattern (FooterDevTools)
- ✅ /src/app/pages/StyleGuide.tsx
- {List all dev tool pages}

### Minimal Pattern (FooterMinimal)
- ✅ /src/app/pages/Checkout.tsx
- ✅ /src/app/pages/auth/Login.tsx
- {List all minimal footer pages}

### Violations
- ❌ /src/app/pages/Example.tsx — Hardcoded footer
- ❌ /src/app/pages/Another.tsx — Wrong pattern used

---

## CSS Architecture Compliance

**BEM Class Names:**
- ✅ / ❌ All footer elements use .wp-footer BEM
- ✅ / ❌ No utility classes for visual styling
- ✅ / ❌ Modifiers properly named

**CSS Variables:**
- ✅ / ❌ No hard-coded colors
- ✅ / ❌ No hard-coded spacing
- ✅ / ❌ Uses var(--nova-*) tokens

---

## Accessibility Compliance

- ✅ / ❌ Semantic HTML (footer, nav, ul, li)
- ✅ / ❌ Landmark role="contentinfo"
- ✅ / ❌ ARIA labels correct
- ✅ / ❌ Bilingual ARIA labels
- ✅ / ❌ Social links have descriptions
- ✅ / ❌ Keyboard navigation functional

---

## Content Completeness

**Main Footer:**
- ✅ / ❌ Navigation columns (3-4)
- ✅ / ❌ Social media links
- ✅ / ❌ Newsletter signup
- ✅ / ❌ Legal links
- ✅ / ❌ Contact info
- ✅ / ❌ Copyright
- ✅ / ❌ Language switcher
- ✅ / ❌ All bilingual (EN/AF)

**Dev Tools Footer:**
- ✅ / ❌ Copyright
- ✅ / ❌ Link to main site
- ✅ / ❌ Dev navigation
- ✅ / ❌ Minimal distraction

**Minimal Footer:**
- ✅ / ❌ Copyright
- ✅ / ❌ Essential legal links
- ✅ / ❌ No distractions

---

## Recommendations

### Immediate (Blocking)
1. Create Footer template part if missing
2. Fix pages hardcoding footer markup
3. Add missing accessibility features

### Short Term (This Sprint)
1. Migrate all pages to Footer template part
2. Create missing footer patterns
3. Update footer data files

### Long Term (Next Sprint)
1. Add newsletter integration
2. Implement social media feeds
3. Add footer animations

---

## Files Requiring Changes

- `/src/app/components/template-parts/Footer.tsx` — Create or update
- `/src/app/components/patterns/footers/FooterMain.tsx` — Create pattern
- `/src/app/components/patterns/footers/FooterDevTools.tsx` — Create pattern
- `/src/app/pages/{PageName}.tsx` — Migrate to Footer template part
- {List all files needing updates}

---

## Metrics

- Total pages audited: {N}
- Pages using Footer correctly: {N} ({%}%)
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
| 1.0.0 | YYYY-MM-DD | Initial footer audit |
```

---

## Success Criteria

- [ ] All page files scanned for footer usage
- [ ] Footer template part verified or flagged for creation
- [ ] Footer patterns verified or flagged for creation
- [ ] Pattern usage verified for each page type
- [ ] Footer data files verified
- [ ] CSS architecture compliance checked
- [ ] Accessibility features verified
- [ ] Mobile responsiveness checked
- [ ] Hardcoded footers identified
- [ ] Content completeness verified
- [ ] Audit report generated with findings
- [ ] Recommendations prioritized

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Design system standards
- **[navigation.md](../guidelines/design-tokens/navigation.md)** — Navigation patterns
- **[css-architecture.md](../guidelines/design-tokens/css-architecture.md)** — BEM methodology
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual requirements
- **[audit-header.md](./audit-header.md)** — Header audit (related)
- **[audit-hero.md](./audit-hero.md)** — Hero audit (related)

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial footer audit prompt for Nova Public Notices Portal |
