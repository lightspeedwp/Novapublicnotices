# Update Routes — React Router Synchronization

**Category:** Maintenance  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `update routes`  
**Status:** Active  
**Parent:** update-orchestrator.md

---

## Purpose

Verify and synchronize React Router configuration, ensuring all routes are properly configured with bilingual EN/AF pairs, all route components exist, and route documentation is current.

---

## Scope

- React Router configuration in `/src/app/routes.tsx`
- All route components in `/src/app/pages/`
- Bilingual route equivalents (EN/AF)
- Route documentation
- Access control requirements

---

## Audit Checklist

### 1. Route Configuration

- [ ] Read `/src/app/routes.tsx`
- [ ] Verify `createBrowserRouter` is used correctly
- [ ] Check all routes have `path` and `Component`
- [ ] Verify nested routes structure
- [ ] Check wildcard/404 route exists

### 2. Bilingual Route Pairs

For every EN route, verify AF equivalent exists:

```typescript
// EN routes
{ path: "/", Component: Home }
{ path: "/about", Component: About }
{ path: "/search", Component: Search }

// AF routes
{ path: "/af", Component: Home }
{ path: "/af/oor-ons", Component: About }
{ path: "/af/soek", Component: Search }
```

- [ ] All EN routes have AF equivalents
- [ ] Route paths use correct translations
- [ ] Both routes point to same Component
- [ ] Locale context differentiates content

### 3. Route Components

For each route, verify:

- [ ] Component file exists in `/src/app/pages/`
- [ ] Component has default export
- [ ] Component imports correctly
- [ ] Component uses data files (not hard-coded content)

### 4. Access Control

- [ ] Public routes identified
- [ ] Protected routes identified
- [ ] Auth middleware applied where needed
- [ ] Redirect logic for unauthenticated users

### 5. Route Hierarchy

- [ ] Parent/child relationships correct
- [ ] Nested routes properly configured
- [ ] Index routes defined where needed
- [ ] Catch-all (404) route at end

---

## Required Routes

Verify these routes exist per Guidelines.md Section 8:

### Public Routes
- `/` (Home)
- `/af` (Home - Afrikaans)
- `/contact` + `/af/kontak`
- `/sales` + `/af/verkope`

### Notice Routes
- `/search` + `/af/soek`
- `/category/:slug` + `/af/kategorie/:slug`
- `/notice/:slug` + `/af/kennisgewing/:slug`

### Auth Routes
- `/register` + `/af/registreer`
- `/login` + `/af/aanmeld`
- `/forgot-password` + `/af/vergeet-wagwoord`

### Protected Routes
- `/my-account` + `/af/my-rekening`
- `/my-account/dashboard` + `/af/my-rekening/paneelbord`
- `/my-account/notices` + `/af/my-rekening/kennisgewings`
- `/my-account/orders` + `/af/my-rekening/bestellings`
- `/my-account/profile` + `/af/my-rekening/profiel`
- `/submit-notice` + `/af/dien-kennisgewing-in`
- `/submit-notice/review` + `/af/dien-kennisgewing-in/hersien`
- `/checkout` + `/af/afhandel`

---

## Route Documentation

Update `/docs/routes.md` with:

### Route Table

| EN Route | AF Route | Component | Access | Notes |
|----------|----------|-----------|--------|-------|
| `/` | `/af` | `Home` | Public | Landing page |
| `/search` | `/af/soek` | `Search` | Login-gated | Notice search |
| `/notice/:slug` | `/af/kennisgewing/:slug` | `NoticeDetail` | Login-gated | Single notice |
| `/my-account` | `/af/my-rekening` | `MyAccount` | Protected | User dashboard |
| `/checkout` | `/af/afhandel` | `Checkout` | Protected | Payment flow |

### Route Hierarchy Diagram

```
/
├── Home (public)
├── /contact (public)
├── /sales (public)
├── /search (login-gated)
├── /category/:slug (login-gated)
├── /notice/:slug (login-gated)
├── /register (public)
├── /login (public)
├── /my-account (protected)
│   ├── /dashboard
│   ├── /notices
│   ├── /orders
│   └── /profile
├── /submit-notice (protected)
│   ├── /review
│   └── /success
├── /checkout (protected)
└── * (404)

/af (Afrikaans mirror of above)
```

---

## Migration Actions

### Add Missing Routes

If routes are missing, add to `/src/app/routes.tsx`:

```typescript
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
// ... other imports

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // EN routes
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "search", Component: Search },
      // ... more routes
      
      // AF routes
      {
        path: "af",
        children: [
          { index: true, Component: Home },
          { path: "oor-ons", Component: About },
          { path: "soek", Component: Search },
          // ... more routes
        ]
      },
      
      // 404 catch-all
      { path: "*", Component: NotFound },
    ],
  },
]);
```

### Create Missing Components

If route component doesn't exist:

1. Create `/src/app/pages/{ComponentName}.tsx`
2. Implement component with data file import
3. Add default export
4. Create bilingual data files

---

## Report Format

Generate report: `/reports/YYYY-MM-DD-routes-audit.md`

```markdown
# Routes Audit — YYYY-MM-DD

**Audited:** YYYY-MM-DD  
**Configuration:** /src/app/routes.tsx  
**Status:** {Complete/In Progress}

---

## Executive Summary

{Summary of route configuration status}

---

## Route Inventory

- Total routes: {number}
- EN routes: {number}
- AF routes: {number}
- Bilingual pairs: {number}
- Public routes: {number}
- Protected routes: {number}

---

## Bilingual Pair Compliance

- [x] All EN routes have AF equivalents
- [x] Route paths correctly translated
- [x] Components shared between pairs

### Missing AF Routes

- `/new-page` → Missing AF equivalent `/af/nuwe-bladsy`

---

## Component Status

### Routes with Components

- `/` → Home.tsx ✅
- `/about` → About.tsx ✅
- `/search` → Search.tsx ✅

### Routes Missing Components

- `/new-route` → Component not found ❌

---

## Access Control

### Public Routes (No Auth Required)
- `/` (Home)
- `/contact` (Contact)
- `/sales` (Sales)
- `/register` (Register)
- `/login` (Login)

### Login-Gated Routes (Must be logged in)
- `/search` (Search)
- `/category/:slug` (Category)
- `/notice/:slug` (Notice)

### Protected Routes (Auth + Validation)
- `/my-account/*` (Account pages)
- `/submit-notice` (Submit notice)
- `/checkout` (Checkout)

---

## Issues Found

### Critical
- Missing AF route for: `/new-page`
- Component not found: `/missing-page`

### Major
- Route documentation outdated
- Missing 404 handler for AF routes

### Minor
- Route ordering could be improved
- Some routes missing type hints

---

## Actions Taken

- [x] Added missing AF route: `/af/nuwe-bladsy`
- [x] Created missing component: `NewPage.tsx`
- [x] Updated route documentation
- [x] Added 404 handler for AF

---

## Next Steps

1. Test all routes load correctly
2. Verify bilingual switching works
3. Test auth protection
4. Update sitemap.md

---

## Related Files

- **[routes.tsx](../src/app/routes.tsx)** — Route configuration
- **[update-sitemap.md](./update-sitemap.md)** — Next: Generate sitemap
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 8 (Routes)
```

---

## Success Criteria

✅ **Routes Updated When:**

- All required routes exist
- All EN routes have AF equivalents
- All route components exist and load
- Route documentation is current
- Access control properly configured
- 404/wildcard routes exist for both locales
- Report generated

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 8 (Information architecture and routes)
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual route requirements
- **[update-sitemap.md](./update-sitemap.md)** — Next step after routes
- **[update-orchestrator.md](./update-orchestrator.md)** — Parent prompt

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial routes audit and sync prompt |
