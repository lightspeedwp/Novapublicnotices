# Data Model — Notice Structure & Taxonomy

**Category:** Architecture  
**Version:** 1.0.0  
**Last Updated:** 2026-03-16  
**Status:** Active  
**Parent:** [Guidelines.md](./Guidelines.md)

---

## Purpose

**What:** Typed data model specification for public notices, categories, and taxonomy.

**Why:** Public notices have complex, category-specific metadata. A shallow data model creates maintenance burden and breaks category-specific templates.

**Who:** All developers working on notice data, submission forms, or template rendering.

---

## Core Notice Model

### Notice Core Record

Language-neutral stable fields:

```typescript
interface NoticeCore {
  // Identity
  id: string;
  slug: string;
  categorySlug: string;
  templateKey: string;
  
  // Status & Access
  status: NoticeStatus;
  accessPolicy: AccessPolicy;
  
  // Dates
  publishDate: string;      // ISO 8601
  archiveDate?: string;     // ISO 8601
  expiryDate?: string;      // ISO 8601
  
  // Location
  location: string;         // City/Town
  province?: string;
  municipality?: string;
  
  // Publisher
  publisher: string;        // Company/Individual name
  referenceNumber: string;  // Legal reference
  
  // Attachments
  attachments?: string[];   // URLs to PDFs/images
  
  // Source
  sourceType: SourceType;
  language: "en" | "af" | "both";
}
```

### Notice Locale Record

Language-specific content:

```typescript
interface NoticeLocale {
  title: string;
  excerpt: string;
  body: string;
  seoTitle?: string;
  seoDescription?: string;
}
```

### Complete Notice

```typescript
interface Notice extends NoticeCore {
  title: { en: string; af: string };
  excerpt: { en: string; af: string };
  body: { en: string; af: string };
  fields?: CategoryFields;  // Typed category-specific fields
}
```

---

## Taxonomies

### Notice Status

```typescript
type NoticeStatus = 
  | "draft"
  | "submitted"
  | "pending_payment"
  | "paid"
  | "pending_review"
  | "changes_requested"
  | "approved"
  | "published"
  | "archived"
  | "expired"
  | "rejected";
```

### Access Policy

```typescript
type AccessPolicy =
  | "public"              // Anyone can view
  | "authenticated"       // Login required
  | "restricted"          // Internal only
  | "subscriber";         // Paid subscribers
```

### Source Type

```typescript
type SourceType =
  | "self_serve_digital"        // Digital-only self-submission
  | "sales_assisted_digital"    // Sales team, digital-only
  | "sales_assisted_print"      // Sales team, print + digital
  | "editorial_import"          // Imported from Pongrass or CMS
  | "legacy_migration";         // Historical data
```

### Template Key

```typescript
type TemplateKey =
  | "tender"
  | "estate"
  | "liquor_licence"
  | "town_planning"
  | "business_licence"
  | "petroleum_licence"
  | "environmental"
  | "court_legal"
  | "general";
```

---

## Notice Category Model

```typescript
interface NoticeCategory {
  // Identity
  slug: string;
  templateKey: TemplateKey;
  
  // Labels
  label: { en: string; af: string };
  description: { en: string; af: string };
  
  // Archive
  archiveTitle: { en: string; af: string };
  archiveIntro: { en: string; af: string };
  
  // UI
  icon: string;  // Lucide icon name
  
  // Configuration
  archiveConfig: ArchiveConfig;
  searchConfig: SearchConfig;
  defaultSort: "date_desc" | "date_asc" | "title";
  
  // Retention & Access
  retentionRule: RetentionRule;
  defaultAccessPolicy: AccessPolicy;
  
  // Fields
  requiredFields: FieldDefinition[];
  optionalFields: FieldDefinition[];
}
```

---

## Category-Specific Field System

### Field Definition

```typescript
interface FieldDefinition {
  // Identity
  key: string;
  
  // Labels
  label: { en: string; af: string };
  placeholder?: { en: string; af: string };
  helpText?: { en: string; af: string };
  
  // Type & Validation
  type: FieldType;
  required: boolean;
  validation?: ValidationRule[];
  
  // Behavior
  searchable: boolean;
  filterable: boolean;
  displayOnArchive: boolean;
  displayOnSingle: boolean;
  
  // Formatting
  formatter?: (value: any) => string;
}
```

### Field Types

```typescript
type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "date"
  | "email"
  | "phone"
  | "select"
  | "multiselect"
  | "file"
  | "checkbox";
```

---

## Category Field Examples

### Tender Notice

```typescript
const tenderFields: FieldDefinition[] = [
  {
    key: "tender_number",
    label: { en: "Tender Number", af: "Tender Nommer" },
    type: "text",
    required: true,
    searchable: true,
    filterable: true,
    displayOnArchive: true,
    displayOnSingle: true,
  },
  {
    key: "objection_deadline",
    label: { en: "Deadline for Objections", af: "Spertyd vir Besware" },
    type: "date",
    required: true,
    searchable: false,
    filterable: true,
    displayOnArchive: true,
    displayOnSingle: true,
  },
];
```

### Estate Notice

```typescript
const estateFields: FieldDefinition[] = [
  {
    key: "deceased_name",
    label: { en: "Name of Deceased", af: "Naam van Oorledene" },
    type: "text",
    required: true,
    searchable: true,
    filterable: false,
    displayOnArchive: true,
    displayOnSingle: true,
  },
  {
    key: "estate_number",
    label: { en: "Estate Number", af: "Boedelnommer" },
    type: "text",
    required: true,
    searchable: true,
    filterable: false,
    displayOnArchive: true,
    displayOnSingle: true,
  },
  {
    key: "masters_office",
    label: { en: "Master's Office", af: "Meesterskantoor" },
    type: "text",
    required: true,
    searchable: true,
    filterable: true,
    displayOnArchive: false,
    displayOnSingle: true,
  },
  {
    key: "id_number",
    label: { en: "ID Number", af: "ID Nommer" },
    type: "text",
    required: true,
    searchable: false,
    filterable: false,
    displayOnArchive: false,
    displayOnSingle: true,
  },
];
```

### Liquor Licence

```typescript
const liquorLicenceFields: FieldDefinition[] = [
  {
    key: "establishment_name",
    label: { en: "Establishment Name", af: "Inrigting Naam" },
    type: "text",
    required: true,
    searchable: true,
    filterable: false,
    displayOnArchive: true,
    displayOnSingle: true,
  },
  {
    key: "municipality",
    label: { en: "Municipality", af: "Munisipaliteit" },
    type: "text",
    required: true,
    searchable: true,
    filterable: true,
    displayOnArchive: true,
    displayOnSingle: true,
  },
  {
    key: "licence_type",
    label: { en: "Licence Type", af: "Lisensie Tipe" },
    type: "select",
    required: true,
    searchable: false,
    filterable: true,
    displayOnArchive: true,
    displayOnSingle: true,
  },
];
```

### Town Planning

```typescript
const townPlanningFields: FieldDefinition[] = [
  {
    key: "property_description",
    label: { en: "Property Description", af: "Eiendom Beskrywing" },
    type: "textarea",
    required: true,
    searchable: true,
    filterable: false,
    displayOnArchive: false,
    displayOnSingle: true,
  },
  {
    key: "application_number",
    label: { en: "Application Number", af: "Aansoek Nommer" },
    type: "text",
    required: true,
    searchable: true,
    filterable: false,
    displayOnArchive: true,
    displayOnSingle: true,
  },
  {
    key: "municipality",
    label: { en: "Municipality", af: "Munisipaliteit" },
    type: "text",
    required: true,
    searchable: true,
    filterable: true,
    displayOnArchive: true,
    displayOnSingle: true,
  },
  {
    key: "objection_deadline",
    label: { en: "Deadline for Objections", af: "Spertyd vir Besware" },
    type: "date",
    required: true,
    searchable: false,
    filterable: true,
    displayOnArchive: true,
    displayOnSingle: true,
  },
];
```

---

## Complete Category Definitions

### Full Category List

All categories must be defined with complete field schemas:

1. **Adoptions**
2. **Advertising Billboards**
3. **AGM Meetings**
4. **Business Licences**
5. **Court Orders / Sequestrations / Liquidations**
6. **Curatorship**
7. **Demolition**
8. **Divorce / Antenuptial Motions**
9. **Estates: Creditors & Debtors**
10. **Estates: Liquidation & Distribution**
11. **General Notices**
12. **Insolvent Estates**
13. **Liquor Licences**
14. **Lost Documents**
15. **Environmental Impact Studies**
16. **Pension / Provident Funds**
17. **Public Auction**
18. **Re-registrations**
19. **Rehabilitation**
20. **Sale of Business**
21. **Sale in Execution**
22. **Surrender of Estate**
23. **Tenders**
24. **Town Establishment / Founding**
25. **Town Planning**

---

## Field Rendering Pattern

### Single Notice Template

```tsx
function SingleNotice({ notice }: { notice: Notice }) {
  const category = getCategoryDefinition(notice.categorySlug);
  const fields = category.requiredFields.concat(category.optionalFields);
  
  return (
    <div>
      <h1>{notice.title[lang]}</h1>
      <div className="notice-body">{notice.body[lang]}</div>
      
      <aside className="notice-details">
        {fields
          .filter(field => field.displayOnSingle)
          .map(field => (
            <div key={field.key}>
              <dt>{field.label[lang]}</dt>
              <dd>
                {field.formatter 
                  ? field.formatter(notice.fields?.[field.key])
                  : notice.fields?.[field.key]
                }
              </dd>
            </div>
          ))
        }
      </aside>
    </div>
  );
}
```

### Submission Form

```tsx
function SubmissionForm({ categorySlug }: { categorySlug: string }) {
  const category = getCategoryDefinition(categorySlug);
  
  return (
    <form>
      {category.requiredFields.map(field => (
        <FormField
          key={field.key}
          field={field}
          lang={lang}
          required={field.required}
        />
      ))}
      
      {category.optionalFields.map(field => (
        <FormField
          key={field.key}
          field={field}
          lang={lang}
          required={false}
        />
      ))}
    </form>
  );
}
```

---

## Data File Structure

```
/src/app/data/notices/
  types.ts                  # TypeScript interfaces
  categories.en.ts          # English category definitions
  categories.af.ts          # Afrikaans category definitions
  fields/
    tender-fields.ts
    estate-fields.ts
    liquor-licence-fields.ts
    town-planning-fields.ts
    business-licence-fields.ts
    court-legal-fields.ts
    environmental-fields.ts
    general-fields.ts
  notices.ts                # Sample notice data
  helpers.ts                # Utility functions
```

---

## Anti-Patterns

### ❌ Loose Field Map

```typescript
// DON'T: Generic untyped fields
interface Notice {
  fields?: Record<string, string>;
}
```

### ✅ Typed Field Definitions

```typescript
// DO: Strongly typed with schema
interface Notice {
  fields?: CategoryFields;
}

type CategoryFields = 
  | TenderFields
  | EstateFields
  | LiquorLicenceFields
  | TownPlanningFields;
```

### ❌ Hard-Coded Field Labels

```tsx
// DON'T: Hard-coded in component
<label>Tender Number:</label>
```

### ✅ Data-Driven Labels

```tsx
// DO: Read from field definition
<label>{field.label[lang]}:</label>
```

---

## Related Documentation

- **[Guidelines.md](./Guidelines.md)** — Parent guidelines
- **[locale-architecture.md](./locale-architecture.md)** — Bilingual structure
- **[/src/imports/pasted_text/public-notices.md](../src/imports/pasted_text/public-notices.md)** — Original field specs

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial creation from audit notes and public-notices spec |
