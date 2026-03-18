# Audit Data — Notice Data Architecture Audit

**Type:** Audit  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `audit data`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Audit all data files in `/src/app/data/` for duplicates, orphaned files, oversized files, type safety, bilingual data integrity, and compliance with the centralized data architecture.

**When to Use:** After adding new notice categories, bilingual data files, or periodically to verify data architecture integrity.

**Reference Guidelines:**
- `/guidelines/data-model.md` — Notice data structure
- `/guidelines/locale-architecture.md` — Bilingual data requirements
- `/guidelines/Guidelines.md` — Section 7.2 (Data structure)

---

## Workflow Steps

### Step 1: Inventory Data Files

**Nova-Specific Structure:**

List all `.ts` files in `/src/app/data/` and categorize:

```
/src/app/data/
  site/
    navigation.en.ts
    navigation.af.ts
    footer.en.ts
    footer.af.ts
  notices/
    types.ts
    categories.en.ts
    categories.af.ts
    sampleNotices.ts
    expandedNotices.ts
    filters.en.ts
    filters.af.ts
    statuses.ts
  auth/
    login.en.ts (if exists)
    login.af.ts (if exists)
  contact/
    contact-page.en.ts (if exists)
    contact-page.af.ts (if exists)
```

For each file, record:
- Filename
- Line count (flag if > 500 lines per Guidelines)
- Export names
- Number of importers
- Paired locale file exists (for .en.ts / .af.ts)

### Step 2: Bilingual Data Pair Validation

**Critical for Nova:**

1. **Check paired files exist:**
   - Every `.en.ts` file must have `.af.ts` equivalent
   - Every `.af.ts` file must have `.en.ts` equivalent

2. **Structure consistency:**
   - EN and AF files must export same structure
   - Field keys must match (only values differ)
   - Type interfaces must be identical

**Example:**
```typescript
// navigation.en.ts
export const mainNav = [
  { label: "Search Notices", href: "/search" }
];

// navigation.af.ts
export const mainNav = [
  { label: "Soek Kennisgewings", href: "/af/soek" }
];
```

### Step 3: Find Orphaned Files

1. For each data file, search codebase for imports:
   ```bash
   file_search: "from './data/{filename}'"
   file_search: "from '../data/{filename}'"
   ```

2. Files with zero importers → flag as orphaned

3. **Notice-specific check:**
   - Sample notices must be imported by search/archive pages
   - Category data must be imported by category components
   - Navigation data must be imported by Layout

### Step 4: Find Duplicates

**Notice Data Duplicates:**

1. **Notice definitions:**
   - Check for duplicate notices in `sampleNotices.ts` vs `expandedNotices.ts`
   - Flag notices with same ID across files

2. **Category definitions:**
   - Compare `categories.en.ts` and `categories.af.ts`
   - Ensure no duplicate category slugs
   - Verify all 25 category types defined (per data-model.md)

3. **Navigation links:**
   - Check for duplicate menu items
   - Verify no conflicting routes in navigation data

### Step 5: File Size Check

Per Guidelines.md Section 16 (Performance):

1. Flag any data file over 500 lines
2. **Specific thresholds:**
   - `sampleNotices.ts` — Should have 20-50 notices maximum
   - `expandedNotices.ts` — Separate large notices to prevent bundle bloat
   - Category definitions — Split by category family if > 500 lines

3. **Suggest splits:**
   - Split notices by category
   - Split categories into category families (tenders, estates, legal, etc.)
   - Split navigation by section (main, footer, user menu)

### Step 6: Type Safety Check

**Notice Data Type Safety:**

1. **Verify TypeScript interfaces exist:**
   ```typescript
   // From data-model.md
   interface NoticeCore { ... }
   interface NoticeLocale { ... }
   interface Notice extends NoticeCore { ... }
   interface NoticeCategory { ... }
   interface FieldDefinition { ... }
   ```

2. **Check all exports are typed:**
   - No `any` types in notice data
   - No untyped arrays
   - Category fields use `FieldDefinition[]`
   - Notice status uses `NoticeStatus` enum

3. **Bilingual type safety:**
   - Locale-specific content uses `{ en: string; af: string }` pattern
   - No mixed-language strings in single-language files

### Step 7: Notice-Specific Data Validation

**Category Coverage (25 Categories):**

Check `categories.en.ts` and `categories.af.ts` include:
1. Adoptions
2. Advertising Billboards
3. AGM Meetings
4. Business Licences
5. Court Orders / Sequestrations
6. Curatorship
7. Demolition
8. Divorce / Antenuptial Motions
9. Estates: Creditors & Debtors
10. Estates: Liquidation & Distribution
11. General Notices
12. Insolvent Estates
13. Liquor Licences
14. Lost Documents
15. Environmental Impact Studies
16. Pension / Provident Funds
17. Public Auction
18. Re-registrations
19. Rehabilitation
20. Sale of Business
21. Sale in Execution
22. Surrender of Estate
23. Tenders
24. Town Establishment
25. Town Planning

**Sample Notice Quality:**

1. **Minimum 3 notices per major category** for testing
2. **Bilingual content** for all sample notices
3. **Realistic reference numbers** and dates
4. **Valid category slugs** matching category definitions
5. **Complete metadata** (location, publisher, status)

### Step 8: Fix and Report

1. **Auto-fix where safe:**
   - Delete confirmed orphaned files (after reference check)
   - Add missing bilingual pairs (create stub files)
   - Fix type safety issues

2. **Flag for manual review:**
   - Large files needing strategic splits
   - Category coverage gaps
   - Duplicate notices requiring merge decision

3. Save report to `/reports/YYYY-MM-DD-data-audit.md`:

```markdown
# Data Architecture Audit — Nova Public Notices Portal

**Date:** YYYY-MM-DD

---

## Executive Summary
{Overall data health}

## File Inventory
- Total data files: {N}
- Bilingual pairs: {N} EN, {N} AF
- Orphaned files: {N}
- Oversized files: {N}

## Bilingual Pair Status
### Complete Pairs ✅
- navigation.en.ts ↔ navigation.af.ts
- categories.en.ts ↔ categories.af.ts

### Missing Pairs ❌
- contact-page.en.ts (no AF equivalent)

## Type Safety
- Typed interfaces: {N}/{total}
- Untyped arrays: {N}
- Type violations: {details}

## Notice Data Quality
### Category Coverage
- Defined categories: {N}/25
- Missing categories: {list}

### Sample Notices
- Total notices: {N}
- Bilingual notices: {N}
- Incomplete notices: {N}

## Duplicates Found
{List of duplicate data}

## Orphaned Files
{Files with zero importers}

## Oversized Files
- sampleNotices.ts: {N} lines (threshold: 500)
- Recommendation: {split strategy}

## Fixes Applied
- [ ] Deleted orphaned files
- [ ] Created missing AF pairs
- [ ] Fixed type safety issues

## Remaining Issues
### P1 (Critical)
- Missing category definitions

### P2 (Important)
- Oversized data files

### P3 (Optimization)
- Sample notice coverage
```

---

## Success Criteria

- [ ] Zero orphaned data files (or justified exceptions)
- [ ] All EN files have AF equivalents
- [ ] All AF files have EN equivalents
- [ ] Zero duplicate data across files
- [ ] All data files under 500 lines
- [ ] All exports are type-safe (TypeScript interfaces)
- [ ] All 25 categories defined in both languages
- [ ] Sample notices cover all major categories
- [ ] Report saved to `/reports/`

---

## Related Documentation

- **[data-model.md](../guidelines/data-model.md)** — Notice data structure
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual requirements
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 7 (Data requirements)
- **[orchestrator.md](./orchestrator.md)** — Parent audit

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial data audit for Nova Public Notices Portal with bilingual validation |
