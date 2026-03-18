# Locale Architecture — Bilingual Guidelines

**Category:** Architecture  
**Version:** 1.0.0  
**Last Updated:** 2026-03-16  
**Status:** Active  
**Parent:** [Guidelines.md](./Guidelines.md)

---

## Purpose

**What:** Standards for bilingual English/Afrikaans architecture in the Nova Public Notices Portal.

**Why:** Public notices are legal documents that must be available in both English and Afrikaans. Incorrect locale handling creates compliance risk and poor user experience.

**Who:** All developers working on routing, navigation, data files, or user-facing content.

---

## Core Principles

### 1. No Mixed-Language Pages

**Rule:** A page rendered in English must contain ONLY English content.  
**Rule:** A page rendered in Afrikaans must contain ONLY Afrikaans content.

**Forbidden:**
```tsx
// ❌ English page with Afrikaans section
<div>
  <h1>Public Notices</h1>
  <section>
    <h2>Afrikaans</h2>
    <a href="/af">Gaan na Afrikaans</a>
  </section>
</div>
```

**Correct:**
```tsx
// ✅ English page with only English content
<div>
  <h1>Public Notices</h1>
  <LanguageSwitcher currentLang="en" equivalentPath="/af" />
</div>
```

### 2. Route Equivalence Map

Every English route must have an Afrikaans equivalent:

| English | Afrikaans | Purpose |
|---------|-----------|---------|
| `/` | `/af` | Homepage |
| `/search` | `/af/soek` | Search results |
| `/category/:slug` | `/af/kategorie/:slug` | Category archive |
| `/notice/:id` | `/af/kennisgewing/:id` | Single notice |
| `/contact` | `/af/kontak` | Contact page |
| `/sales` | `/af/verkope` | Sales landing |
| `/submit` | `/af/indien` | Submit notice |
| `/login` | `/af/aanmeld` | Login |
| `/register` | `/af/registreer` | Register |
| `/my-account` | `/af/my-rekening` | Account dashboard |
| `/checkout` | `/af/afhandel` | Checkout |

### 3. Language Switcher Behavior

**Rule:** Language switcher must switch to the EQUIVALENT PAGE in the other locale, not to the homepage.

**Forbidden:**
```tsx
// ❌ Always goes to homepage
<Link to={lang === "en" ? "/af" : "/"}>
  Switch Language
</Link>
```

**Correct:**
```tsx
// ✅ Switches to equivalent page
const equivalentPath = getEquivalentPath(currentPath, targetLang);
<Link to={equivalentPath}>
  {lang === "en" ? "Afrikaans" : "English"}
</Link>
```

---

## Data File Structure

### Paired Locale Files

Use paired `.en.ts` and `.af.ts` files for language-specific content:

```
/src/app/data/
  site/
    navigation.en.ts       # English navigation
    navigation.af.ts       # Afrikaans navigation
  home/
    home.en.ts            # English homepage content
    home.af.ts            # Afrikaans homepage content
  notices/
    categories.en.ts      # English category labels
    categories.af.ts      # Afrikaans category labels
    notices.ts            # Shared notice data (bilingual fields)
```

### Bilingual Data Model

```typescript
// Shared fields (language-neutral)
interface NoticeCore {
  id: string;
  slug: string;
  category: string;
  referenceNumber: string;
  publishDate: string;
  location: string;
  status: string;
}

// Locale-specific fields
interface NoticeLocale {
  title: string;
  excerpt: string;
  body: string;
  seoTitle: string;
  seoDescription: string;
}

// Complete notice with both
interface Notice {
  ...NoticeCore;
  title: { en: string; af: string };
  excerpt: { en: string; af: string };
  body: { en: string; af: string };
}
```

---

## Search and Filtering

### Locale-Specific Search

**Rule:** Search results must ONLY return content in the active locale.

```typescript
function searchNotices(
  query: string,
  filters: SearchFilters,
  locale: "en" | "af"
): Notice[] {
  return notices
    .filter(notice => {
      // Search in locale-specific fields only
      const title = notice.title[locale].toLowerCase();
      const excerpt = notice.excerpt[locale].toLowerCase();
      const body = notice.body[locale].toLowerCase();
      
      return (
        title.includes(query.toLowerCase()) ||
        excerpt.includes(query.toLowerCase()) ||
        body.includes(query.toLowerCase())
      );
    });
}
```

**Forbidden:**
```typescript
// ❌ Searches both languages
const title = notice.title.en + notice.title.af;
```

---

## Navigation Data

### Dynamic Locale-Aware Links

Navigation must read from locale-specific data files:

```typescript
// navigation.en.ts
export const mainNav = [
  { label: "Search Notices", href: "/search" },
  { label: "Categories", href: "/categories" },
  { label: "Submit Notice", href: "/submit" },
  { label: "Contact", href: "/contact" },
];

// navigation.af.ts
export const mainNav = [
  { label: "Soek Kennisgewings", href: "/af/soek" },
  { label: "Kategorieë", href: "/af/kategorieë" },
  { label: "Dien Kennisgewing In", href: "/af/indien" },
  { label: "Kontak", href: "/af/kontak" },
];
```

### Layout Component Pattern

```tsx
interface LayoutProps {
  children: React.ReactNode;
  lang: "en" | "af";
}

export function Layout({ children, lang }: LayoutProps) {
  // Import the correct navigation file
  const nav = lang === "en" 
    ? require("./data/site/navigation.en").mainNav
    : require("./data/site/navigation.af").mainNav;
  
  return (
    <div>
      <nav>
        {nav.map(item => (
          <Link key={item.href} to={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
```

---

## Translation Standards

### Afrikaans Quality Requirements

**Rule:** Afrikaans must be:
- **Formal** — Official, not colloquial
- **High-register** — Appropriate for legal/public-sector communication
- **Accurate** — Semantically equivalent to English

**Forbidden:**
- Slang or casual language
- Literal machine translation
- Mixed English/Afrikaans words

**Examples:**

| English | ✅ Correct Afrikaans | ❌ Incorrect |
|---------|---------------------|-------------|
| Public Notices | Regskennisgewings | Publieke Kennisgewings |
| Submit Notice | Dien Kennisgewing In | Submit Kennisgewing |
| My Account | My Rekening | My Account |
| Checkout | Afhandel | Checkout |

### Non-Translatable Content

Do NOT translate:
- Reference numbers
- Legal case numbers
- Proper names
- Business/company names
- Technical IDs
- Date formats (use locale-appropriate formatting)

```typescript
// ✅ Correct
{
  title: { 
    en: "Estate Notice - Reference 12345/2026",
    af: "Boedelkennisgewing - Verwysing 12345/2026"
  }
}

// ❌ Incorrect - translated the reference number
{
  title: { 
    en: "Estate Notice - Reference 12345/2026",
    af: "Boedelkennisgewing - Verwysing 12345/2026" // Would be wrong if "Reference" was kept as "Reference"
  }
}
```

---

## Route Configuration

### React Router Setup

```typescript
// routes.tsx
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  // English routes
  {
    path: "/",
    element: <Home lang="en" />,
  },
  {
    path: "/search",
    element: <SearchResults lang="en" />,
  },
  {
    path: "/notice/:id",
    element: <SingleNotice lang="en" />,
  },
  
  // Afrikaans routes
  {
    path: "/af",
    element: <Home lang="af" />,
  },
  {
    path: "/af/soek",
    element: <SearchResults lang="af" />,
  },
  {
    path: "/af/kennisgewing/:id",
    element: <SingleNotice lang="af" />,
  },
]);
```

### Route Mapping Utility

```typescript
const routeMap: Record<string, { en: string; af: string }> = {
  home: { en: "/", af: "/af" },
  search: { en: "/search", af: "/af/soek" },
  notice: { en: "/notice/:id", af: "/af/kennisgewing/:id" },
  contact: { en: "/contact", af: "/af/kontak" },
  // ... all routes
};

export function getEquivalentPath(
  currentPath: string,
  targetLang: "en" | "af"
): string {
  // Find route pattern
  const pattern = Object.entries(routeMap).find(([key, paths]) => {
    return currentPath.startsWith(paths.en) || currentPath.startsWith(paths.af);
  });
  
  if (!pattern) return targetLang === "af" ? "/af" : "/";
  
  return pattern[1][targetLang];
}
```

---

## Sitemap Requirements

### Separate Sitemaps

**Rule:** Create separate sitemaps for each locale.

```xml
<!-- sitemap-en.xml -->
<urlset>
  <url><loc>https://novanews.co.za/notices/</loc></url>
  <url><loc>https://novanews.co.za/notices/search</loc></url>
  <url><loc>https://novanews.co.za/notices/contact</loc></url>
</urlset>

<!-- sitemap-af.xml -->
<urlset>
  <url><loc>https://novanews.co.za/notices/af</loc></url>
  <url><loc>https://novanews.co.za/notices/af/soek</loc></url>
  <url><loc>https://novanews.co.za/notices/af/kontak</loc></url>
</urlset>
```

**Forbidden:**
- Mixed-language sitemap
- English sitemap linking to Afrikaans pages
- Afrikaans sitemap linking to English pages

---

## Testing Checklist

- [ ] No mixed-language content on any public page
- [ ] Language switcher navigates to equivalent page
- [ ] Search returns only results in active locale
- [ ] All navigation uses locale-specific data files
- [ ] Category badges display in correct language
- [ ] Form labels use correct language
- [ ] Error messages use correct language
- [ ] Date formatting uses locale conventions
- [ ] No hard-coded UI text in components
- [ ] Afrikaans uses formal, high-register phrasing
- [ ] Legal terms not literally translated
- [ ] Sitemap contains only same-language links

---

## Related Documentation

- **[Guidelines.md](./Guidelines.md)** — Parent guidelines
- **[data-model.md](./data-model.md)** — Notice data structure
- **[navigation.md](./navigation.md)** — Navigation patterns
- **[search.md](./search.md)** — Search implementation

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial creation from audit notes and existing guidelines |
