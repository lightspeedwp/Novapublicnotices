# Update Sitemap — Generate Current Application Sitemap

**Category:** Maintenance  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `update sitemap`  
**Status:** Active  
**Parent:** update-orchestrator.md

---

## Purpose

Generate a current sitemap from React Router configuration, documenting all routes with bilingual equivalents, access requirements, and hierarchy.

---

## Actions

1. Read `/src/app/routes.tsx`
2. Extract all routes and bilingual pairs
3. Document access levels (public/login-gated/protected)
4. Create visual hierarchy
5. Save to `/docs/sitemap.md`

---

## Sitemap Format

```markdown
# Nova Public Notices Portal — Sitemap

**Generated:** YYYY-MM-DD  
**Source:** /src/app/routes.tsx

---

## Route Hierarchy

### Public Routes

| EN Route | AF Route | Component | Description |
|----------|----------|-----------|-------------|
| `/` | `/af` | Home | Landing page |
| `/contact` | `/af/kontak` | Contact | Contact form |
| `/sales` | `/af/verkope` | Sales | Sales info |

### Login-Gated Routes

| EN Route | AF Route | Component | Description |
|----------|----------|-----------|-------------|
| `/search` | `/af/soek` | Search | Notice search |
| `/category/:slug` | `/af/kategorie/:slug` | Category | Category archive |

### Protected Routes

| EN Route | AF Route | Component | Description |
|----------|----------|-----------|-------------|
| `/my-account` | `/af/my-rekening` | MyAccount | User dashboard |
| `/checkout` | `/af/afhandel` | Checkout | Payment flow |

---

## Visual Hierarchy

\`\`\`
/ (EN) │ /af (AF)
├── Home (public)
├── /contact | /af/kontak (public)
├── /search | /af/soek (login-gated)
└── /my-account | /af/my-rekening (protected)
    ├── /dashboard | /paneelbord
    └── /profile | /profiel
\`\`\`
```

---

## Success Criteria

✅ Sitemap reflects current routes.tsx  
✅ All bilingual pairs documented  
✅ Access levels shown  
✅ File saved to /docs/sitemap.md

---

## Related Documentation

- **[update-routes.md](./update-routes.md)** — Previous step
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 8

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial sitemap generation prompt |
