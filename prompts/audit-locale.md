# Locale Architecture Audit — Sub-Audit Prompt

**Version:** 1.0.0  
**Last Updated:** 2026-03-16  
**Guidelines Referenced:** [locale-architecture.md](../guidelines/locale-architecture.md)

---

## Purpose

Audit the bilingual English/Afrikaans architecture to ensure:
- No mixed-language pages
- Correct route mapping
- Proper language switching
- Locale-specific search results
- Translation quality

---

## Pre-Audit Requirements

1. Read `/guidelines/locale-architecture.md` completely
2. Read `/guidelines/Guidelines.md` sections 12 (Bilingual content rules)
3. Understand the route equivalence map
4. Know the translation standards

---

## Audit Scope

### Files to Audit

**Routes:**
- `/src/app/routes.tsx` or `/src/app/routes/`
- All route configuration files

**Pages:**
- All files in `/src/app/pages/`
- Both English and Afrikaans variants

**Components:**
- `/src/app/components/Layout.tsx`
- `/src/app/components/` (any with lang prop)

**Data Files:**
- `/src/app/data/site/navigation.*`
- `/src/app/data/notices/categories.*`
- Any paired `.en.ts` and `.af.ts` files

**Search:**
- `/src/app/lib/search.ts` or search utility files

---

## Audit Checklist

### 1. Route Architecture

**Check:**
- [ ] Every English route has an Afrikaans equivalent
- [ ] Route paths follow naming conventions (e.g., `/search` ↔ `/af/soek`)
- [ ] No routes missing locale variant
- [ ] Route parameters consistent across locales

**Look For:**
```typescript
// ❌ Missing Afrikaans equivalent
{ path: "/search", element: <SearchResults /> }  // No /af/soek

// ✅ Complete locale routes
{ path: "/search", element: <SearchResults lang="en" /> }
{ path: "/af/soek", element: <SearchResults lang="af" /> }
```

### 2. Mixed-Language Content

**Check:**
- [ ] English pages contain ONLY English text
- [ ] Afrikaans pages contain ONLY Afrikaans text
- [ ] No components rendering both languages
- [ ] Sitemaps are locale-pure

**Look For:**
```tsx
// ❌ Mixed language on same page
<div>
  <h1>Public Notices</h1>
  <Link to="/af">Afrikaans</Link>  // English page with Afrikaans link text
</div>

// ✅ Single language only
<div>
  <h1>Public Notices</h1>
  <LanguageSwitcher currentLang="en" />
</div>
```

### 3. Language Switcher

**Check:**
- [ ] Switcher navigates to equivalent page, not homepage
- [ ] Switcher correctly maps current route to other locale
- [ ] Switcher works from all pages
- [ ] Switcher preserves route parameters (e.g., notice ID)

**Look For:**
```tsx
// ❌ Always goes to homepage
<Link to={lang === "en" ? "/af" : "/"}>Switch</Link>

// ✅ Maps to equivalent page
<Link to={getEquivalentPath(currentPath, targetLang)}>Switch</Link>
```

### 4. Navigation Data

**Check:**
- [ ] Navigation uses locale-specific data files
- [ ] No hard-coded menu labels in components
- [ ] All nav items read from `navigation.{lang}.ts`
- [ ] Footer links use correct locale paths

**Look For:**
```tsx
// ❌ Hard-coded navigation
<Link to="/search">Search Notices</Link>

// ✅ Data-driven navigation
{mainNav.map(item => (
  <Link to={basePath + item.href}>{item.label[lang]}</Link>
))}
```

### 5. Search Locale Filtering

**Check:**
- [ ] Search only returns results in active locale
- [ ] Search queries only text in active locale
- [ ] No mixed-language search results
- [ ] Filters display in correct language

**Look For:**
```typescript
// ❌ Searches both languages
const text = notice.title.en + notice.title.af;

// ✅ Locale-specific search
const text = notice.title[locale];
```

### 6. Translation Quality

**Check:**
- [ ] Afrikaans uses formal register
- [ ] No slang or casual language
- [ ] Legal terms properly translated
- [ ] Reference numbers NOT translated
- [ ] Proper names NOT translated

**Examples:**

| Term | ✅ Correct | ❌ Incorrect |
|------|-----------|-------------|
| Public Notices | Regskennisgewings | Publieke Kennisgewings |
| Submit Notice | Dien Kennisgewing In | Submit Kennisgewing |
| Reference 12345 | Verwysing 12345 | Verwysing 12345 (no translation needed) |

### 7. Data File Structure

**Check:**
- [ ] Paired `.en.ts` and `.af.ts` files exist
- [ ] Both files have same structure
- [ ] Shared data (IDs, dates) not duplicated
- [ ] Locale data properly typed

**Look For:**
```
❌ Missing pair
/data/site/navigation.en.ts  (exists)
/data/site/navigation.af.ts  (missing)

✅ Complete pairs
/data/site/navigation.en.ts
/data/site/navigation.af.ts
```

---

## Report Requirements

Generate `/reports/YYYY-MM-DD-locale-audit.md` with:

### Executive Summary
2-3 sentences on overall locale architecture health.

### Critical Issues
- Mixed-language pages
- Missing route equivalents
- Broken language switcher
- Mixed search results

### Major Issues
- Missing Afrikaans translations
- Hard-coded labels in components
- Navigation not data-driven
- Poor translation quality

### Minor Issues
- Inconsistent terminology
- Missing helptext translations
- Untranslated error messages

### Positive Findings
What's working well.

### Files Requiring Changes
List all files with locale violations.

### Compliance Checklist
```markdown
## Locale Architecture Compliance

- [ ] No mixed-language pages (Guideline 12.3)
- [ ] Route equivalence map complete (Guideline locale-architecture.md)
- [ ] Language switcher maps correctly (Guideline locale-architecture.md)
- [ ] Search filters by locale (Guideline 7.4)
- [ ] Navigation uses data files (Guideline 7.2)
- [ ] Afrikaans uses formal register (Guideline 12.1)
- [ ] Paired data files exist (Guideline 12.2)
```

### Recommendations
Immediate, short-term, and long-term actions.

---

## Deliverables

1. **Report:** `/reports/YYYY-MM-DD-locale-audit.md`
2. **File List:** All files with locale issues
3. **Priority Matrix:** Critical vs. minor issues
4. **Fix Estimates:** Time to resolve each issue category

---

## Success Criteria

✅ Audit complete when:
- All route files checked
- All page files checked
- All navigation checked
- All data files checked
- Search functionality verified
- Translation quality assessed
- Report generated with all sections
- No files skipped

---

## Example Findings

### Critical Issue Example

```markdown
### Critical: Mixed Language on Homepage

**File:** `/src/app/pages/Home.tsx`

**Issue:** English homepage contains Afrikaans CTA button

**Code:**
\`\`\`tsx
<Button>
  <Link to="/af/indien">Dien Kennisgewing In</Link>
</Button>
\`\`\`

**Fix:**
\`\`\`tsx
<Button>
  <Link to={basePath + "/submit"}>{text.submitNotice}</Link>
</Button>
\`\`\`

**Priority:** Critical  
**Effort:** 30 minutes
```

### Major Issue Example

```markdown
### Major: Navigation Not Data-Driven

**File:** `/src/app/components/Layout.tsx`

**Issue:** Menu items hard-coded in component

**Guideline Violation:** Guidelines.md section 7.2 (dynamic data requirement)

**Fix:** Refactor to read from `navigation.{lang}.ts`

**Priority:** High  
**Effort:** 2 hours
```

---

## Related Documentation

- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Primary guideline
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 12 (Bilingual rules)
- **[orchestrator.md](./orchestrator.md)** — Parent audit workflow

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial locale audit prompt |
