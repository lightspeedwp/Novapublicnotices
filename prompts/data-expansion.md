# Nova Public Notices - Data Expansion Prompt

## Purpose
This prompt provides instructions for expanding the public notices data files to ensure comprehensive coverage across all 11 required categories with sufficient entries for pagination demonstration.

## Current Status

### Completed Category Files:
1. **Estates** (`/src/app/data/notices/categories/estates.ts`) - ✅ 15 entries
   - Includes both estates-creditors-debtors and estates-liquidation-distribution
2. **Liquor Licences** (`/src/app/data/notices/categories/liquor-licences.ts`) - ✅ 12 entries

### Required Category Files (Pending):
3. **Tenders** - Need 15 entries
4. **Town Planning** - Need 15 entries
5. **Business Licences** - Need 12 entries
6. **Court Orders** - Need 12 entries
7. **Lost Documents** - Need 10 entries
8. **Environmental Notices** (ois-environmental) - Need 12 entries
9. **Sale in Execution** - Need 15 entries
10. **Adoptions** - Need 10 entries
11. **General Notices** - Need 15 entries

**Total Remaining Entries Needed: 126 notices**

## Data Structure Requirements

### Template Location
Refer to: `/src/app/data/notices/_notice-template.ts`

### Type Definitions
Refer to: `/src/app/data/notices/noticeTypes.ts`

### Standard Format
Each category file must:
1. Import `Notice` type from `../noticeTypes`
2. Export a const array named `[category]Notices: Notice[]`
3. Include comprehensive bilingual content (EN/AF)
4. Use proper extended fields based on category requirements
5. Follow consistent dating format: "DD Mon YYYY"
6. Include realistic South African locations, names, and legal references

## Category-Specific Requirements

### 3. Tenders (`tenders.ts`)
**Category ID:** `'tenders'`
**Entry Count:** 15
**Required Extended Fields:**
- `governmentDepartment` or `municipality`
- `closeDate` (tender closing date)
- `amount` or `valuationAmount` (estimated tender value)
- `applicationType` (e.g., "Open Tender", "Request for Proposal")

**Entry Types:**
- Municipal infrastructure tenders
- Government procurement tenders
- Services tenders (IT, consulting, maintenance)
- Construction and building tenders
- Supply and delivery tenders

**South African Context:**
- Reference departments like: National Treasury, DoT, DoH, DoE
- Municipalities: eThekwini, City of Cape Town, City of Johannesburg, etc.
- Use CIDB grading references where applicable
- Include BEE/BBBEE requirements
- Reference treasury regulations and PFMA

### 4. Town Planning (`town-planning.ts`)
**Category ID:** `'town-planning'`
**Entry Count:** 15
**Required Extended Fields:**
- `municipality` (always required)
- `erfNumber` or `propertyDescription`
- `applicationType` (e.g., "Rezoning", "Subdivision", "Township Establishment")
- `closeDate` (objection deadline)

**Entry Types:**
- Rezoning applications
- Subdivision applications
- Township establishment
- Consent uses
- Departures from town planning scheme
- Removal of restrictive title conditions

**South African Context:**
- Reference municipal town planning schemes
- Include erf numbers and farm portions
- Reference relevant town planning ordinances/acts
- Include objection procedures and periods

### 5. Business Licences (`business-licences.ts`)
**Category ID:** `'business-licence'`
**Entry Count:** 12
**Required Extended Fields:**
- `licenceNumber` or `permitNumber`
- `municipality`
- `streetAddress`
- `applicationType` (e.g., "New Application", "Renewal")

**Entry Types:**
- Trading licences
- Hawker permits
- Market stall licences
- Food vendor permits
- Billboard/advertising permits
- Home industry permits

### 6. Court Orders (`court-orders.ts`)
**Category ID:** `'court-orders'`
**Entry Count:** 12
**Required Extended Fields:**
- `caseNumber` (always required)
- `courtName` (always required)
- `courtLocation`
- `hearingDate` or `eventDate`
- `primaryParty` and optionally `secondaryParty`

**Entry Types:**
- Rule nisi (provisional orders)
- Final court orders
- Eviction orders
- Interdict applications
- Name change orders
- Liquidation/winding-up orders

**South African Context:**
- Use real court names: High Court of South Africa (divisions), Magistrate's Courts
- Reference court rules (Uniform Rules, Magistrates' Courts Act)
- Include case number formats

### 7. Lost Documents (`lost-documents.ts`)
**Category ID:** `'lost-documents'`
**Entry Count:** 10
**Required Extended Fields:**
- `documentType` (in metadata or noticeType)
- `referenceNumber` or `registrationNumber`
- `location`
- `closeDate` (deadline for objections)

**Entry Types:**
- Lost title deeds
- Lost share certificates
- Lost bonds/mortgage documents
- Lost will documents
- Lost vehicle registration documents
- Lost mining licenses

### 8. Environmental Notices (`environmental.ts`)
**Category ID:** `'ois-environmental'`
**Entry Count:** 12
**Required Extended Fields:**
- `governmentDepartment` (e.g., "Department of Environmental Affairs")
- `municipality`
- `propertyDescription` or `gpsCoordinates`
- `applicationType` (e.g., "Basic Assessment", "Scoping", "EIA")
- `closeDate` (public comment period)

**Entry Types:**
- Environmental impact assessments (EIA)
- Basic assessments (BA)
- Scoping reports
- Water use licence applications (WULA)
- Mining rights applications
- Waste management licence applications

**South African Context:**
- Reference NEMA (National Environmental Management Act)
- Include DEA or provincial environmental department
- Reference environmental consultants (EAPs)
- Include I&AP (Interested and Affected Parties) procedures

### 9. Sale in Execution (`sale-in-execution.ts`)
**Category ID:** `'sale-in-execution'`
**Entry Count:** 15
**Required Extended Fields:**
- `eventDate` (auction date - always required)
- `caseNumber` or `fileNumber`
- `courtName` or `magistrateOffice`
- `propertyDescription` and/or `erfNumber`
- `reservePrice` or `valuationAmount`
- `streetAddress`

**Entry Types:**
- Residential property sales in execution
- Commercial property sales in execution
- Agricultural property sales in execution
- Vehicle sales in execution
- Movable asset sales

**South African Context:**
- Reference Sheriffs of the court
- Include terms of sale (deposit requirements, auctioneer's commission)
- Reference Magistrates' Courts Act or High Court rules

### 10. Adoptions (`adoptions.ts`)
**Category ID:** `'adoptions'`
**Entry Count:** 10
**Required Extended Fields:**
- `caseNumber`
- `courtName` (Children's Court)
- `courtLocation`
- `closeDate` (objection period)
- Use `primaryParty` sparingly (protect children's identities)

**Entry Types:**
- Adoption applications (formal notice)
- Foster care placements (where required)
- Curator ad litem appointments

**South African Context:**
- Reference Children's Act 38 of 2005
- Use Children's Courts
- Emphasize privacy and child protection
- Limited identifying details

### 11. General Notices (`general-notices.ts`)
**Category ID:** `'general-notices'`
**Entry Count:** 15
**Required Extended Fields:**
- Varies widely - use appropriate fields based on notice type

**Entry Types:**
- Company name changes
- Business partnerships
- Associations and societies
- Cooperative registrations
- Sectional title developments
- Public meetings and inquiries
- Road closures
- Miscellaneous statutory notices

## Quality Standards

### Content Requirements
1. **Bilingual Completeness:** Every notice must have complete EN and AF translations
2. **Realistic Data:** Use plausible South African names, places, legal references
3. **Legal Accuracy:** Follow actual SA legal notice conventions
4. **Date Consistency:** Use format "DD Mon YYYY" (e.g., "15 Jan 2024")
5. **Reference Numbers:** Create realistic reference number formats

### Afrikaans Translation Standards
- Use formal, official register Afrikaans
- Appropriate for legal and public-sector communication
- Avoid colloquialisms or casual language
- Use correct legal terminology

### Extended Fields Usage
- **Always populate relevant extended fields** based on category requirements
- Don't leave category-specific required fields empty
- Use `metadata` object for additional category-specific information

## File Structure

Each category file should follow this structure:

```typescript
/**
 * Nova Public Notices Portal - [Category Name] Category Data
 * 
 * [Brief description of what this category includes]
 * 
 * Total Entries: [number]
 */

import { Notice } from '../noticeTypes';

export const [category]Notices: Notice[] = [
  {
    id: '[category-prefix]-001',
    title: {
      en: 'English title',
      af: 'Afrikaanse titel'
    },
    category: '[category-id]',
    // ... rest of notice structure
  },
  // ... more entries
];
```

## Pagination Requirements

**Critical:** Each category must have enough entries to demonstrate pagination functionality.

**Minimum entries per category:** 10
**Recommended entries per category:** 12-15
**Page size (default):** 12 notices per page

This ensures:
- Category archive pages show pagination controls
- Users can navigate between pages
- Search results can span multiple pages
- Prototype demonstrates real-world scale

## Testing and Validation

After creating each category file:

1. **Import Check:** Ensure file imports correctly in `/src/app/data/notices/allCategories.ts`
2. **Type Validation:** No TypeScript errors
3. **Required Fields:** All category-specific required fields are populated
4. **Bilingual Content:** Both EN and AF are complete
5. **Date Format:** Dates follow "DD Mon YYYY" format
6. **Reference Numbers:** Unique and realistic
7. **Status:** All entries have `status: 'published'`
8. **Access Policy:** Appropriate `accessPolicy` set (default: `'account_required'`)

## Integration Steps

After creating new category files:

1. **Update allCategories.ts:**
   ```typescript
   import { [category]Notices } from './categories/[category]';
   
   export const allNotices: Notice[] = [
     ...existingNotices,
     ...[category]Notices,
   ];
   ```

2. **Verify Dynamic Counts:**
   - Run `getAllCategoryCounts()` to ensure counts are accurate
   - Check that category shows in stats blocks
   - Verify pagination works on category archive pages

3. **Test Search:**
   - Search for keywords from new entries
   - Verify filtering by new category works
   - Check that results display correctly

## Example Prompt for AI Completion

```
Create the [CATEGORY NAME] category data file with [NUMBER] comprehensive entries following the Nova Public Notices data structure.

File: /src/app/data/notices/categories/[filename].ts
Category ID: '[category-id]'
Entries: [number]

Requirements:
- Follow template structure from _notice-template.ts
- Include all required extended fields for this category
- Complete bilingual content (EN/AF)
- Use realistic South African legal references and locations
- Ensure all dates use "DD Mon YYYY" format
- Make reference numbers unique and realistic
- Set status to 'published' and accessPolicy to 'account_required'

Refer to /prompts/data-expansion.md for category-specific requirements and examples.
```

## Priority Order

Complete category files in this order for maximum impact:

1. **Sale in Execution** (15 entries) - High user interest, demonstrates financial data
2. **Tenders** (15 entries) - B2B focus, shows commercial use case
3. **Town Planning** (15 entries) - High community relevance
4. **Court Orders** (12 entries) - Legal focus, demonstrates court integration
5. **Environmental Notices** (12 entries) - Public interest, shows compliance workflows
6. **Business Licences** (12 entries) - SME focus
7. **General Notices** (15 entries) - Variety showcase
8. **Adoptions** (10 entries) - Sensitive content handling demo
9. **Lost Documents** (10 entries) - Quick wins, simpler structure

## Completion Checklist

- [ ] Tenders (15 entries)
- [ ] Town Planning (15 entries)
- [ ] Business Licences (12 entries)
- [ ] Court Orders (12 entries)
- [ ] Lost Documents (10 entries)
- [ ] Environmental Notices (12 entries)
- [ ] Sale in Execution (15 entries)
- [ ] Adoptions (10 entries)
- [ ] General Notices (15 entries)
- [ ] All imports added to allCategories.ts
- [ ] Dynamic stats functions tested
- [ ] Pagination working on all category pages
- [ ] Search returns results from all categories
- [ ] No-results component displays when appropriate
- [ ] Category counts are non-zero in stats blocks

## Success Criteria

✅ **Complete** when:
- All 11 category files exist with required entry counts
- Total of 140+ published notices across all categories
- Every category shows in navigation and stats
- Pagination works on all category archive pages
- Search yields results from all categories
- No category has zero count in stats blocks
- All bilingual content is complete and professional
- No TypeScript errors or missing required fields

---

**Estimated Total Notices After Completion:** 140-150+ entries
**Current Progress:** 27 entries (Estates: 15, Liquor Licences: 12)
**Remaining:** 113+ entries across 9 categories

**Last Updated:** 4 March 2024
