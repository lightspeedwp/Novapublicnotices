# Audit Routing — Route Integrity & Bilingual Navigation

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `audit routing`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Audit all navigation links, `<Link>` components, and bilingual route mappings against the router definition — validate English/Afrikaans route equivalence, verify language switcher behavior, identify 404s, and confirm locale-specific navigation.

**When to Use:** After adding routes, modifying bilingual paths, or navigation refactors.

**Reference Guidelines:**
- `/guidelines/locale-architecture.md` (Route equivalence map)
- `/guidelines/Guidelines.md` (Section 8 - Routes)

---

## Workflow Steps

### Step 1: Router Definition Inventory

1. **Read router config:** Parse `/src/app/routes.tsx` or `/src/app/routes/` for all route paths.
2. **Build route map:**
   - English routes (starting with `/`)
   - Afrikaans routes (starting with `/af/`)
3. **Verify equivalence:** Every EN route must have AF equivalent per locale-architecture.md

**Expected Route Pairs:**
```
/ ↔ /af
/search ↔ /af/soek
/category/:slug ↔ /af/kategorie/:slug
/notice/:id ↔ /af/kennisgewing/:id
/contact ↔ /af/kontak
/sales ↔ /af/verkope
/submit ↔ /af/indien
/login ↔ /af/aanmeld
/register ↔ /af/registreer
/my-account ↔ /af/my-rekening
/checkout ↔ /af/afhandel
```

### Step 2: Link Target Validation

Scan all `.tsx` files in `/src/app/` for navigation elements:

1. **`<Link to="...">` targets:**
   - Extract every `to` prop value
   - Verify it matches a defined route
   - Flag any hardcoded paths that should use route helpers

2. **Language-specific links:**
   - English pages must link to English routes only
   - Afrikaans pages must link to Afrikaans routes only
   - No mixed-language link targets

3. **Dynamic segments:**
   - `/notice/:id` routes: Verify notice IDs are valid
   - `/category/:slug` routes: Verify category slugs exist

4. **Internal `<a href>` tags:**
   - Should be `<Link>` components for SPA navigation
   - Flag any relative `<a>` tags

### Step 3: Language Switcher Validation

**Critical Check:**

1. **Equivalent path mapping:**
   - Language switcher MUST map to equivalent page, not homepage
   - Test from: Home, Search, Single Notice, Category Archive
   - Verify `getEquivalentPath()` function exists and works

2. **Parameter preservation:**
   - Switching on `/notice/123` should go to `/af/kennisgewing/123`
   - Switching on `/category/tenders` should go to `/af/kategorie/tenders`

3. **Accessibility:**
   - Switcher has `aria-label` in both languages
   - Current language indicated visually

### Step 4: 404 & Blank Page Detection

1. **Catch-all route:** Verify `path: "*"` exists for both EN and AF.
2. **404 pages exist:**
   - `/src/app/pages/NotFound.tsx`
   - `/src/app/pages/NotFoundAF.tsx`
3. **Orphan routes:** Routes defined but unreachable via navigation.
4. **Broken redirects:** Check for redirect routes to non-existent pages.

### Step 5: Navigation Component Audit

**Layout Navigation:**

1. **Header navigation:**
   - `/src/app/components/Layout.tsx`
   - Links use locale-specific navigation data
   - No hardcoded paths

2. **Footer links:**
   - Footer uses locale-specific data
   - All links resolve to valid routes

3. **Breadcrumbs:**
   - Reflect actual route hierarchy
   - Use correct locale paths

**Notice-Specific Navigation:**

1. **Category navigation:**
   - Category badges link to correct archive pages
   - Links use `/category/{slug}` or `/af/kategorie/{slug}`

2. **Related notices:**
   - Links to related notices use correct locale
   - No cross-locale links

### Step 6: Logo Navigation

1. **Logo click behavior:**
   - English site: Logo → `/`
   - Afrikaans site: Logo → `/af`
   - Must use `<Link>`, not `<a href>`

2. **Logo consistency:**
   - Logo link present in header
   - Logo has `aria-label="Return to homepage"` / `"Terug na tuisblad"`

### Step 7: Report

Save report to `/reports/YYYY-MM-DD-routing-audit.md`:

```markdown
# Routing Audit — Nova Public Notices Portal

**Date:** YYYY-MM-DD  
**Focus:** Bilingual route integrity

---

## Executive Summary
{Route compliance status}

## Route Equivalence
### English Routes: {count}
### Afrikaans Routes: {count}

### Missing Equivalents
- English route `/path` has no AF equivalent
- Afrikaans route `/af/pad` has no EN equivalent

## Link Validation
### Broken Links
- File: `/src/app/pages/Home.tsx`
  - Link: `/nonexistent`
  - Should be: {correct path}

### Mixed-Language Links
- File: `/src/app/pages/SearchResults.tsx`
  - Issue: English page linking to `/af/soek`

## Language Switcher
- [ ] Maps to equivalent pages
- [ ] Preserves notice IDs
- [ ] Preserves category slugs
- [ ] Has bilingual aria-labels

## 404 Handling
- [ ] Catch-all route exists for EN
- [ ] Catch-all route exists for AF
- [ ] 404 pages exist and render

## Navigation Components
- Header navigation: {status}
- Footer navigation: {status}
- Breadcrumbs: {status}
- Logo link: {status}

## Orphan Routes
{Routes defined but unreachable}

## Fixes Applied
- [ ] Added missing AF routes
- [ ] Fixed language switcher mapping
- [ ] Corrected mixed-language links
```

---

## Success Criteria

- [ ] All EN routes have AF equivalents
- [ ] All AF routes have EN equivalents
- [ ] Zero broken link targets
- [ ] Language switcher maps correctly
- [ ] No mixed-language navigation
- [ ] 404 routes exist for both locales
- [ ] Logo navigates correctly by locale
- [ ] Report saved to `/reports/`

---

## Related Documentation

- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Route mapping
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 8
- **[orchestrator.md](./orchestrator.md)** — Parent audit

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial routing audit for bilingual Nova Public Notices Portal |
