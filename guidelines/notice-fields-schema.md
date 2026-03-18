# Notice Fields Schema — Universal Field System

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

This guideline defines a **universal field schema** for all 25 notice categories in the Nova Public Notices Portal. Instead of category-specific fields, we use a standardized set of flexible fields that can be applied consistently across all notice types.

---

## Design Principles

1. **Universal Applicability** — Fields must work across all 25 categories
2. **Semantic Clarity** — Field names clearly indicate their purpose
3. **Flexibility** — Fields can be optional or required based on category
4. **Bilingual Support** — All field labels support EN/AF translations
5. **Search & Filter Ready** — Fields designed for search indexing
6. **WordPress Compatible** — Field names align with WordPress custom field conventions

---

## Core Notice Fields

### Base Fields (Always Present)

These fields exist on every notice regardless of category:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✓ | Unique notice identifier |
| `title` | object {en, af} | ✓ | Bilingual notice title |
| `category` | string | ✓ | Category slug |
| `publishDate` | string | ✓ | Publication date (DD MMM YYYY) |
| `location` | string | ✓ | Geographic location |
| `referenceNumber` | string | ✓ | Unique reference/tracking number |
| `excerpt` | object {en, af} | ✓ | Short summary |
| `body` | object {en, af} | ✓ | Full notice content |
| `publisher` | string | ✓ | Publishing entity name |
| `contactName` | string | ✓ | Contact person |
| `contactEmail` | string | ✓ | Contact email |
| `contactPhone` | string | ✓ | Contact phone |
| `deadline` | string | optional | Submission/objection deadline |
| `status` | enum | ✓ | published \| pending \| draft \| archived |
| `accessPolicy` | enum | ✓ | public \| account_required \| restricted |

---

## Universal Extended Fields

### The `extendedFields` Object

Instead of category-specific fields, all notices use a single `extendedFields` object with standardized keys:

```typescript
interface Notice {
  // ... base fields ...
  extendedFields: {
    // Parties & Entities
    primaryParty?: PartyInfo;
    secondaryParty?: PartyInfo;
    affectedParties?: PartyInfo[];
    
    // Legal & Administrative
    caseNumber?: string;
    fileNumber?: string;
    registrationNumber?: string;
    licenceNumber?: string;
    permitNumber?: string;
    
    // Court & Government
    courtName?: string;
    courtLocation?: string;
    magistrateOffice?: string;
    mastersOffice?: string;
    governmentDepartment?: string;
    municipality?: string;
    
    // Dates & Deadlines
    eventDate?: string;
    hearingDate?: string;
    closeDate?: string;
    effectiveDate?: string;
    expiryDate?: string;
    
    // Property & Location
    propertyDescription?: string;
    erfNumber?: string;
    farmPortion?: string;
    streetAddress?: string;
    gpsCoordinates?: string;
    
    // Financial
    amount?: MoneyValue;
    reservePrice?: MoneyValue;
    depositRequired?: MoneyValue;
    valuationAmount?: MoneyValue;
    
    // Documents & Attachments
    attachments?: Attachment[];
    relatedDocuments?: DocumentReference[];
    
    // Status & Type
    noticeType?: string;
    subCategory?: string;
    legalBasis?: string;
    applicationType?: string;
    
    // Custom Metadata
    metadata?: Record<string, any>;
  };
}
```

---

## Sub-Interfaces

### PartyInfo

Represents any person, company, or organization involved:

```typescript
interface PartyInfo {
  name: string;
  type: 'individual' | 'company' | 'organization' | 'government';
  idNumber?: string;
  registrationNumber?: string;
  role?: string;
  address?: string;
  contactInfo?: string;
}
```

**Examples:**
- **Deceased person** → `primaryParty`
- **Executor** → `secondaryParty`
- **Creditors** → `affectedParties`
- **Applicant** → `primaryParty`
- **Respondent** → `secondaryParty`

### MoneyValue

```typescript
interface MoneyValue {
  amount: number;
  currency: 'ZAR' | 'USD' | 'EUR';
  formatted: string; // e.g. "R2,500,000"
}
```

### Attachment

```typescript
interface Attachment {
  id: string;
  filename: string;
  fileType: 'pdf' | 'doc' | 'image' | 'other';
  fileSize: number;
  url: string;
  uploadDate: string;
  description?: string;
}
```

### DocumentReference

```typescript
interface DocumentReference {
  referenceNumber: string;
  documentType: string;
  relatedNoticeId?: string;
  description: string;
}
```

---

## Field Mapping by Category

### How Universal Fields Apply to Each Category

#### 1. Adoptions

```typescript
{
  primaryParty: { name: "Child Name", type: "individual" },
  secondaryParty: { name: "Adoptive Parents", type: "individual" },
  caseNumber: "2026/12345",
  courtName: "High Court Gauteng Division",
  hearingDate: "15 Apr 2026 10:00",
  legalBasis: "Children's Act 38 of 2005"
}
```

#### 2. Advertising Billboards

```typescript
{
  primaryParty: { name: "Outdoor Media (Pty) Ltd", type: "company" },
  propertyDescription: "Erf 1234, N1 Highway",
  erfNumber: "1234",
  permitNumber: "BILL-2026-0089",
  municipality: "City of Johannesburg",
  closeDate: "29 Mar 2026"
}
```

#### 3. AGM Meetings

```typescript
{
  primaryParty: { name: "Sandton Homeowners Association", type: "organization" },
  eventDate: "15 Apr 2026 18:00",
  streetAddress: "Community Hall, Sandton Drive",
  noticeType: "Annual General Meeting",
  closeDate: "14 Apr 2026 12:00" // Proxy deadline
}
```

#### 4. Business Licence

```typescript
{
  primaryParty: { name: "Riverside Retailers (Pty) Ltd", type: "company", registrationNumber: "2015/123456/07" },
  licenceNumber: "BUS-2026-0234",
  municipality: "Mangaung Metropolitan Municipality",
  streetAddress: "Shop 5, Bloem Plaza Shopping Centre",
  applicationType: "New business trading licence",
  subCategory: "Retail Store"
}
```

#### 5. Court Orders / Sequestrations / Liquidations

```typescript
{
  primaryParty: { name: "John David Smith", type: "individual", idNumber: "7801155678082" },
  secondaryParty: { name: "First National Bank Limited", type: "company" },
  caseNumber: "12345/2026",
  courtName: "High Court Gauteng Division, Pretoria",
  hearingDate: "15 Apr 2026 10:00",
  noticeType: "Provisional Sequestration"
}
```

#### 6. Curatorship

```typescript
{
  primaryParty: { name: "Sarah Elizabeth Brown", type: "individual", idNumber: "4506125678083" },
  secondaryParty: { name: "Michael Brown (Curator)", type: "individual", role: "Proposed Curator" },
  caseNumber: "2026/9876",
  courtName: "High Court Gauteng Division",
  mastersOffice: "Johannesburg",
  hearingDate: "22 Apr 2026 10:00"
}
```

#### 7. Demolition

```typescript
{
  primaryParty: { name: "Property Developers (Pty) Ltd", type: "company" },
  propertyDescription: "123 Main Street, Johannesburg CBD",
  erfNumber: "456",
  municipality: "City of Johannesburg",
  eventDate: "1 May 2026", // Start date
  expiryDate: "30 Jun 2026", // End date
  fileNumber: "DEMO-2026-0045"
}
```

#### 8. Divorce Antenuptial Motions

```typescript
{
  primaryParty: { name: "Sarah Jane Williams", type: "individual", role: "Plaintiff" },
  secondaryParty: { name: "Michael John Williams", type: "individual", role: "Defendant" },
  caseNumber: "2026/23456",
  courtName: "High Court Gauteng Division",
  courtLocation: "Johannesburg",
  noticeType: "Divorce Proceedings",
  metadata: { marriageRegime: "In community of property" }
}
```

#### 9. Estates: Creditors & Debtors

```typescript
{
  primaryParty: { name: "John Michael Smith", type: "individual", idNumber: "6305145098083" },
  secondaryParty: { name: "FNB Fiduciary Services", type: "company", role: "Executor" },
  fileNumber: "003456/2026",
  mastersOffice: "Pretoria",
  closeDate: "04 Apr 2026",
  metadata: { dateOfDeath: "15 Jan 2026" }
}
```

#### 10. Estates: Liquidation & Distribution

```typescript
{
  primaryParty: { name: "Anna Maria Botha", type: "individual", idNumber: "4802125098087" },
  secondaryParty: { name: "Standard Bank Executor Services", type: "company", role: "Executor" },
  fileNumber: "012789/2025",
  mastersOffice: "Johannesburg",
  noticeType: "First Liquidation and Distribution Account",
  closeDate: "27 Mar 2026"
}
```

#### 11. General Notices

```typescript
{
  primaryParty: { name: "City of Johannesburg Water & Sanitation", type: "government" },
  eventDate: "25 Mar 2026",
  streetAddress: "Sandton CBD, Hyde Park, Rosebank",
  noticeType: "Water Supply Interruption",
  metadata: { duration: "06:00 to 18:00" }
}
```

#### 12. Insolvent Estates

```typescript
{
  primaryParty: { name: "Pieter Johannes du Toit", type: "individual", idNumber: "7605155098082" },
  caseNumber: "INS/2026/3456",
  courtName: "High Court Gauteng Division",
  courtLocation: "Pretoria",
  hearingDate: "15 Apr 2026 10:00",
  amount: { amount: 5000000, currency: "ZAR", formatted: "R5,000,000" },
  metadata: { assets: "R800,000", liabilities: "R5,000,000" }
}
```

#### 13. Liquor Licences

```typescript
{
  primaryParty: { name: "Vineyard Bistro (Pty) Ltd", type: "company" },
  licenceNumber: "LIQ-2026-0234",
  municipality: "Western Cape Liquor Authority",
  streetAddress: "78 Dorp Street, Stellenbosch",
  erfNumber: "3456",
  applicationType: "On-Consumption Liquor Licence",
  closeDate: "07 Apr 2026"
}
```

#### 14. Lost Documents

```typescript
{
  primaryParty: { name: "Maria Elizabeth van der Merwe", type: "individual", idNumber: "6508125098083" },
  fileNumber: "T12345/2010",
  erfNumber: "4567",
  streetAddress: "23 Rose Street, Gardens, Cape Town",
  noticeType: "Lost Title Deed",
  metadata: { documentType: "Title Deed" }
}
```

#### 15. OIS Environmental Impact Studies

```typescript
{
  primaryParty: { name: "Mineral Resources (Pty) Ltd", type: "company" },
  propertyDescription: "Portion 12 of Farm Grootfontein 456 LQ",
  municipality: "Limpopo Province",
  fileNumber: "14/12/16/3/3/2/EIS-2026-0234",
  governmentDepartment: "Department of Environmental Affairs",
  eventDate: "28 Mar 2026 18:00", // Public meeting
  closeDate: "30 Apr 2026",
  applicationType: "Environmental Impact Assessment"
}
```

#### 16. Pension Provident Funds

```typescript
{
  primaryParty: { name: "ABC Retirement Fund", type: "organization", registrationNumber: "12/8/12345" },
  noticeType: "Amendment to Fund Rules",
  closeDate: "08 Apr 2026",
  metadata: { 
    keyChanges: "Contribution increase, Voluntary contributions",
    employerContribution: "12%"
  }
}
```

#### 17. Public Auction

```typescript
{
  primaryParty: { name: "Premium Auctions (Pty) Ltd", type: "company", role: "Auctioneer" },
  propertyDescription: "4 bedroom home, 1200m² stand",
  streetAddress: "45 Sandown Road, Sandton",
  erfNumber: "3456",
  eventDate: "15 Apr 2026 11:00",
  reservePrice: { amount: 4500000, currency: "ZAR", formatted: "R4,500,000" },
  depositRequired: { amount: 450000, currency: "ZAR", formatted: "R450,000" }
}
```

#### 18. Re-registrations

```typescript
{
  primaryParty: { name: "Tech Solutions CC", type: "company", registrationNumber: "CK2010/123456/23" },
  secondaryParty: { name: "Tech Solutions (Pty) Ltd", type: "company", registrationNumber: "2026/123456/07" },
  effectiveDate: "01 Mar 2026",
  noticeType: "Company Re-registration",
  legalBasis: "Section 14 of the Companies Act"
}
```

#### 19. Rehabilitation

```typescript
{
  primaryParty: { name: "Michael John Robinson", type: "individual", idNumber: "7506155098082" },
  caseNumber: "REH/2026/112",
  courtName: "High Court Gauteng Division",
  courtLocation: "Johannesburg",
  hearingDate: "25 Apr 2026",
  fileNumber: "003456/2021", // Original sequestration estate number
  metadata: { 
    sequestrationDate: "15 Mar 2021",
    dividendPaid: "25 cents in the Rand"
  }
}
```

#### 20. Sale of Business

```typescript
{
  primaryParty: { name: "Seller Name", type: "company", role: "Seller" },
  secondaryParty: { name: "Buyer Name", type: "company", role: "Buyer" },
  eventDate: "15 Apr 2026", // Date of sale
  streetAddress: "Business Location",
  amount: { amount: 2500000, currency: "ZAR", formatted: "R2,500,000" },
  noticeType: "Sale of Business as a Going Concern"
}
```

#### 21. Sale of Execution

```typescript
{
  primaryParty: { name: "Plaintiff Name", type: "individual", role: "Plaintiff" },
  secondaryParty: { name: "Defendant Name", type: "individual", role: "Defendant" },
  caseNumber: "12345/2026",
  courtName: "High Court Name",
  eventDate: "20 Apr 2026 10:00", // Sale date
  streetAddress: "Sale venue address",
  propertyDescription: "Property to be sold"
}
```

#### 22. Surrender of Estate

```typescript
{
  primaryParty: { name: "Debtor Name", type: "individual", idNumber: "8506085098081" },
  caseNumber: "SUR/2026/456",
  courtName: "High Court Division",
  mastersOffice: "City name",
  hearingDate: "25 Apr 2026 10:00",
  fileNumber: "Master reference number"
}
```

#### 23. Tenders

```typescript
{
  primaryParty: { name: "City of Tshwane Metropolitan Municipality", type: "government" },
  fileNumber: "TEN-2026-0312",
  streetAddress: "Central Pretoria",
  closeDate: "30 Apr 2026 12:00",
  noticeType: "Construction Tender",
  metadata: {
    projectScope: "Municipal administration building",
    briefingDate: "25 Mar 2026 10:00"
  }
}
```

#### 24. Town Establishment Founding

```typescript
{
  primaryParty: { name: "Developer Name (Pty) Ltd", type: "company" },
  municipality: "Local Municipality Name",
  propertyDescription: "Farm Description",
  streetAddress: "Proposed town location",
  fileNumber: "TOWN-2026-0123",
  closeDate: "30 Apr 2026",
  applicationType: "Township Establishment"
}
```

#### 25. Town Planning

```typescript
{
  primaryParty: { name: "Developer Name (Pty) Ltd", type: "company" },
  municipality: "Local Municipality Name",
  propertyDescription: "Erf description and current zoning",
  erfNumber: "1234",
  streetAddress: "Property address",
  fileNumber: "TP-2026-0456",
  applicationType: "Rezoning Application",
  closeDate: "15 Apr 2026"
}
```

---

## Field Validation Rules

### Required vs Optional by Category

| Field Group | Always Required | Category-Specific Required |
|-------------|----------------|---------------------------|
| **Parties** | primaryParty (name) | secondaryParty for court cases, transfers |
| **Legal Numbers** | At least one of: caseNumber, fileNumber, registrationNumber, licenceNumber | Depends on category |
| **Dates** | eventDate OR hearingDate OR closeDate | At least one date field |
| **Location** | Base `location` field | streetAddress, erfNumber for property-related |
| **Financial** | Optional | amount for auctions, sales |

---

## Search & Filter Implementation

### Indexed Fields for Search

All fields in `extendedFields` should be indexed for search:

```typescript
const searchableFields = [
  'primaryParty.name',
  'secondaryParty.name',
  'caseNumber',
  'fileNumber',
  'registrationNumber',
  'erfNumber',
  'propertyDescription',
  'streetAddress',
  'municipality',
  'courtName'
];
```

### Filter Facets

```typescript
const filterFacets = {
  // Existing
  category: string[];
  location: string[];
  publishDate: DateRange;
  
  // New from extendedFields
  municipality: string[];
  courtName: string[];
  noticeType: string[];
  applicationType: string[];
  hasDeadline: boolean;
  dateRange: DateRange;
  priceRange: MoneyRange;
};
```

---

## Database Schema

### SQL Table Structure

```sql
CREATE TABLE notices (
  id VARCHAR(50) PRIMARY KEY,
  title_en TEXT NOT NULL,
  title_af TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  publish_date DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  reference_number VARCHAR(100) NOT NULL UNIQUE,
  excerpt_en TEXT NOT NULL,
  excerpt_af TEXT NOT NULL,
  body_en TEXT NOT NULL,
  body_af TEXT NOT NULL,
  publisher VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(50) NOT NULL,
  deadline DATE,
  status ENUM('published', 'pending', 'draft', 'archived') NOT NULL,
  access_policy ENUM('public', 'account_required', 'restricted') NOT NULL,
  extended_fields JSON, -- Stores all extendedFields as JSON
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_category (category),
  INDEX idx_publish_date (publish_date),
  INDEX idx_location (location),
  INDEX idx_status (status),
  INDEX idx_deadline (deadline),
  FULLTEXT INDEX idx_search (title_en, title_af, excerpt_en, excerpt_af, body_en, body_af)
);

-- JSON path indexes for common extendedFields queries
CREATE INDEX idx_case_number ON notices((extended_fields->>'$.caseNumber'));
CREATE INDEX idx_erf_number ON notices((extended_fields->>'$.erfNumber'));
CREATE INDEX idx_municipality ON notices((extended_fields->>'$.municipality'));
CREATE INDEX idx_court_name ON notices((extended_fields->>'$.courtName'));
```

### WordPress Custom Fields

Map `extendedFields` to WordPress post meta:

```php
// Meta key naming convention
$meta_keys = [
  'notice_primary_party_name',
  'notice_primary_party_type',
  'notice_secondary_party_name',
  'notice_case_number',
  'notice_file_number',
  'notice_erf_number',
  'notice_municipality',
  'notice_court_name',
  'notice_hearing_date',
  'notice_close_date',
  'notice_property_description',
  // ... etc
];
```

---

## TypeScript Implementation

### Complete Interface

```typescript
export interface Notice {
  // Base fields
  id: string;
  title: { en: string; af: string };
  category: string;
  publishDate: string;
  location: string;
  referenceNumber: string;
  excerpt: { en: string; af: string };
  body: { en: string; af: string };
  publisher: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  deadline?: string;
  status: 'published' | 'pending' | 'draft' | 'archived';
  accessPolicy: 'public' | 'account_required' | 'restricted';
  
  // Universal extended fields
  extendedFields: ExtendedFields;
}

export interface ExtendedFields {
  // Parties & Entities
  primaryParty?: PartyInfo;
  secondaryParty?: PartyInfo;
  affectedParties?: PartyInfo[];
  
  // Legal & Administrative
  caseNumber?: string;
  fileNumber?: string;
  registrationNumber?: string;
  licenceNumber?: string;
  permitNumber?: string;
  
  // Court & Government
  courtName?: string;
  courtLocation?: string;
  magistrateOffice?: string;
  mastersOffice?: string;
  governmentDepartment?: string;
  municipality?: string;
  
  // Dates & Deadlines
  eventDate?: string;
  hearingDate?: string;
  closeDate?: string;
  effectiveDate?: string;
  expiryDate?: string;
  
  // Property & Location
  propertyDescription?: string;
  erfNumber?: string;
  farmPortion?: string;
  streetAddress?: string;
  gpsCoordinates?: string;
  
  // Financial
  amount?: MoneyValue;
  reservePrice?: MoneyValue;
  depositRequired?: MoneyValue;
  valuationAmount?: MoneyValue;
  
  // Documents & Attachments
  attachments?: Attachment[];
  relatedDocuments?: DocumentReference[];
  
  // Status & Type
  noticeType?: string;
  subCategory?: string;
  legalBasis?: string;
  applicationType?: string;
  
  // Custom Metadata
  metadata?: Record<string, any>;
}

export interface PartyInfo {
  name: string;
  type: 'individual' | 'company' | 'organization' | 'government';
  idNumber?: string;
  registrationNumber?: string;
  role?: string;
  address?: string;
  contactInfo?: string;
}

export interface MoneyValue {
  amount: number;
  currency: 'ZAR' | 'USD' | 'EUR';
  formatted: string;
}

export interface Attachment {
  id: string;
  filename: string;
  fileType: 'pdf' | 'doc' | 'image' | 'other';
  fileSize: number;
  url: string;
  uploadDate: string;
  description?: string;
}

export interface DocumentReference {
  referenceNumber: string;
  documentType: string;
  relatedNoticeId?: string;
  description: string;
}
```

---

## Helper Functions

### Field Access Helpers

```typescript
// Get primary party name
export function getPrimaryPartyName(notice: Notice): string {
  return notice.extendedFields.primaryParty?.name || 'Unknown';
}

// Get all date fields
export function getAllDates(notice: Notice): string[] {
  const dates: string[] = [notice.publishDate];
  if (notice.deadline) dates.push(notice.deadline);
  if (notice.extendedFields.eventDate) dates.push(notice.extendedFields.eventDate);
  if (notice.extendedFields.hearingDate) dates.push(notice.extendedFields.hearingDate);
  if (notice.extendedFields.closeDate) dates.push(notice.extendedFields.closeDate);
  return dates;
}

// Check if notice has court involvement
export function hasCourtInvolvement(notice: Notice): boolean {
  return !!(notice.extendedFields.caseNumber || notice.extendedFields.courtName);
}

// Get display location
export function getDisplayLocation(notice: Notice): string {
  return notice.extendedFields.streetAddress || 
         notice.extendedFields.municipality || 
         notice.location;
}
```

---

## Migration Strategy

### From Old Fields to New Schema

```typescript
function migrateNoticeFields(oldNotice: OldNotice): Notice {
  return {
    ...oldNotice,
    extendedFields: {
      // Map old category-specific fields to universal schema
      primaryParty: oldNotice.fields?.name ? {
        name: oldNotice.fields.name,
        type: 'individual',
        idNumber: oldNotice.fields.idNumber
      } : undefined,
      
      caseNumber: oldNotice.fields?.caseNumber,
      erfNumber: oldNotice.fields?.erfNumber,
      municipality: oldNotice.fields?.municipality,
      // ... map remaining fields
      
      metadata: {
        // Store any unmapped fields here
        ...oldNotice.fields
      }
    }
  };
}
```

---

## Bilingual Field Labels

### Field Label Translations

```typescript
export const fieldLabels = {
  // Parties
  primaryParty: { en: 'Primary Party', af: 'Primêre Party' },
  secondaryParty: { en: 'Secondary Party', af: 'Sekondêre Party' },
  
  // Legal
  caseNumber: { en: 'Case Number', af: 'Saaknommer' },
  fileNumber: { en: 'File Number', af: 'Lêernommer' },
  
  // Court
  courtName: { en: 'Court Name', af: 'Hofnaam' },
  courtLocation: { en: 'Court Location', af: 'Hof Ligging' },
  
  // Dates
  eventDate: { en: 'Event Date', af: 'Gebeurtenis Datum' },
  hearingDate: { en: 'Hearing Date', af: 'Verhoor Datum' },
  closeDate: { en: 'Closing Date', af: 'Sluitingsdatum' },
  
  // Property
  erfNumber: { en: 'Erf Number', af: 'Erfnommer' },
  propertyDescription: { en: 'Property Description', af: 'Eiendom Beskrywing' },
  
  // ... complete list for all fields
};
```

---

## Best Practices

1. **Always populate primaryParty** — Even if it's just the company/organization name
2. **Use noticeType for sub-categorization** — E.g., "First L&D Account" vs "Supplementary L&D Account"
3. **Store dates in consistent format** — "DD MMM YYYY HH:MM" or ISO 8601
4. **Use metadata for one-off fields** — Don't create new top-level fields for rare cases
5. **Validate required fields by category** — Create category-specific validation rules
6. **Index commonly searched fields** — caseNumber, erfNumber, primaryParty.name
7. **Keep PartyInfo lightweight** — Don't duplicate data that exists elsewhere

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-16 | Initial universal field schema for all 25 categories |

---

## Related Documentation

- `/guidelines/Guidelines.md` — Project governance
- `/guidelines/data-model.md` — Notice data structure
- `/guidelines/locale-architecture.md` — Bilingual content standards
