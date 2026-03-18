/**
 * Nova Public Notices Portal - Universal Notice Types
 * 
 * Implements the universal field schema defined in:
 * /guidelines/notice-fields-schema.md
 * 
 * All notices use the same field structure with optional extended fields
 * instead of category-specific field sets.
 */

// ============================================================================
// CORE NOTICE INTERFACE
// ============================================================================

export interface Notice {
  // Base fields (always present)
  id: string;
  title: BilingualText;
  category: NoticeCategory;
  publishDate: string; // Format: "DD MMM YYYY"
  location: string;
  referenceNumber: string;
  excerpt: BilingualText;
  body: BilingualText;
  publisher: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  deadline?: string; // Format: "DD MMM YYYY"
  status: NoticeStatus;
  accessPolicy: AccessPolicy;
  
  // Universal extended fields
  extendedFields: ExtendedFields;
  
  // System fields (optional)
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}

// ============================================================================
// BILINGUAL TEXT
// ============================================================================

export interface BilingualText {
  en: string;
  af: string;
}

// ============================================================================
// ENUMS & TYPES
// ============================================================================

export type NoticeStatus = 'published' | 'pending' | 'draft' | 'archived';

export type AccessPolicy = 'public' | 'account_required' | 'restricted';

export type NoticeCategory =
  | 'adoptions'
  | 'advertising-billboards'
  | 'agm-meetings'
  | 'business-licence'
  | 'court-orders'
  | 'curatorship'
  | 'demolition'
  | 'divorce-antenuptial'
  | 'estates-creditors-debtors'
  | 'estates-liquidation-distribution'
  | 'general-notices'
  | 'insolvent-estates'
  | 'liquor-licences'
  | 'lost-documents'
  | 'ois-environmental'
  | 'pension-provident'
  | 'public-auction'
  | 're-registrations'
  | 'rehabilitation'
  | 'sale-of-business'
  | 'sale-in-execution'
  | 'surrender-of-estate'
  | 'tenders'
  | 'town-establishment'
  | 'town-planning';

// ============================================================================
// EXTENDED FIELDS (Universal Schema)
// ============================================================================

export interface ExtendedFields {
  // Parties & Entities
  primaryParty?: PartyInfo;
  secondaryParty?: PartyInfo;
  affectedParties?: PartyInfo[];
  
  // Legal & Administrative Numbers
  caseNumber?: string;
  fileNumber?: string;
  registrationNumber?: string;
  licenceNumber?: string;
  permitNumber?: string;
  
  // Court & Government Entities
  courtName?: string;
  courtLocation?: string;
  magistrateOffice?: string;
  mastersOffice?: string;
  governmentDepartment?: string;
  municipality?: string;
  
  // Dates & Deadlines
  eventDate?: string; // Main event date (auction, meeting, etc.)
  hearingDate?: string; // Court hearing date
  closeDate?: string; // Deadline for submissions/objections
  effectiveDate?: string; // When something takes effect
  expiryDate?: string; // When something expires
  
  // Property & Location Details
  propertyDescription?: string;
  erfNumber?: string;
  farmPortion?: string;
  streetAddress?: string;
  gpsCoordinates?: string;
  
  // Financial Information
  amount?: MoneyValue;
  reservePrice?: MoneyValue;
  depositRequired?: MoneyValue;
  valuationAmount?: MoneyValue;
  
  // Documents & Attachments
  attachments?: Attachment[];
  relatedDocuments?: DocumentReference[];
  
  // Type & Classification
  noticeType?: string; // Sub-type within category
  subCategory?: string; // Further classification
  legalBasis?: string; // Legal act/section reference
  applicationType?: string; // Type of application
  
  // Flexible Metadata
  metadata?: Record<string, any>;
}

// ============================================================================
// SUB-INTERFACES
// ============================================================================

export interface PartyInfo {
  name: string;
  type: PartyType;
  idNumber?: string; // SA ID number for individuals
  registrationNumber?: string; // Company/organization registration
  role?: string; // E.g., "Executor", "Plaintiff", "Curator"
  address?: string;
  contactInfo?: string;
}

export type PartyType = 'individual' | 'company' | 'organization' | 'government';

export interface MoneyValue {
  amount: number;
  currency: Currency;
  formatted: string; // E.g., "R2,500,000" or "$10,000"
}

export type Currency = 'ZAR' | 'USD' | 'EUR' | 'GBP';

export interface Attachment {
  id: string;
  filename: string;
  fileType: FileType;
  fileSize: number; // in bytes
  url: string;
  uploadDate: string;
  description?: string;
}

export type FileType = 'pdf' | 'doc' | 'docx' | 'image' | 'spreadsheet' | 'other';

export interface DocumentReference {
  referenceNumber: string;
  documentType: string;
  relatedNoticeId?: string;
  description: string;
}

// ============================================================================
// FIELD LABEL TRANSLATIONS
// ============================================================================

export const fieldLabels: Record<string, BilingualText> = {
  // Parties
  primaryParty: { en: 'Primary Party', af: 'Primêre Party' },
  secondaryParty: { en: 'Secondary Party', af: 'Sekondêre Party' },
  affectedParties: { en: 'Affected Parties', af: 'Geaffekteerde Partye' },
  
  // Legal Numbers
  caseNumber: { en: 'Case Number', af: 'Saaknommer' },
  fileNumber: { en: 'File Number', af: 'Lêernommer' },
  registrationNumber: { en: 'Registration Number', af: 'Registrasienommer' },
  licenceNumber: { en: 'Licence Number', af: 'Lisensienommer' },
  permitNumber: { en: 'Permit Number', af: 'Permitnommer' },
  
  // Court & Government
  courtName: { en: 'Court Name', af: 'Hofnaam' },
  courtLocation: { en: 'Court Location', af: 'Hof Ligging' },
  magistrateOffice: { en: "Magistrate's Office", af: 'Magistraat se Kantoor' },
  mastersOffice: { en: "Master's Office", af: 'Meester se Kantoor' },
  governmentDepartment: { en: 'Government Department', af: 'Regeringsdepartement' },
  municipality: { en: 'Municipality', af: 'Munisipaliteit' },
  
  // Dates
  eventDate: { en: 'Event Date', af: 'Gebeurtenis Datum' },
  hearingDate: { en: 'Hearing Date', af: 'Verhoor Datum' },
  closeDate: { en: 'Closing Date', af: 'Sluitingsdatum' },
  effectiveDate: { en: 'Effective Date', af: 'Effektiewe Datum' },
  expiryDate: { en: 'Expiry Date', af: 'Vervaldatum' },
  
  // Property
  propertyDescription: { en: 'Property Description', af: 'Eiendom Beskrywing' },
  erfNumber: { en: 'Erf Number', af: 'Erfnommer' },
  farmPortion: { en: 'Farm Portion', af: 'Plaasgedeelte' },
  streetAddress: { en: 'Street Address', af: 'Straatadres' },
  gpsCoordinates: { en: 'GPS Coordinates', af: 'GPS Koördinate' },
  
  // Financial
  amount: { en: 'Amount', af: 'Bedrag' },
  reservePrice: { en: 'Reserve Price', af: 'Reserweprys' },
  depositRequired: { en: 'Deposit Required', af: 'Deposito Vereis' },
  valuationAmount: { en: 'Valuation Amount', af: 'Waardasie Bedrag' },
  
  // Type & Classification
  noticeType: { en: 'Notice Type', af: 'Kennisgewing Tipe' },
  subCategory: { en: 'Sub-Category', af: 'Subkategorie' },
  legalBasis: { en: 'Legal Basis', af: 'Regsbasis' },
  applicationType: { en: 'Application Type', af: 'Aansoek Tipe' },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get primary party name from notice
 */
export function getPrimaryPartyName(notice: Notice): string {
  return notice.extendedFields.primaryParty?.name || 'Unknown';
}

/**
 * Get secondary party name from notice
 */
export function getSecondaryPartyName(notice: Notice): string | null {
  return notice.extendedFields.secondaryParty?.name || null;
}

/**
 * Get all date fields from notice
 */
export function getAllDates(notice: Notice): string[] {
  const dates: string[] = [notice.publishDate];
  if (notice.deadline) dates.push(notice.deadline);
  if (notice.extendedFields.eventDate) dates.push(notice.extendedFields.eventDate);
  if (notice.extendedFields.hearingDate) dates.push(notice.extendedFields.hearingDate);
  if (notice.extendedFields.closeDate) dates.push(notice.extendedFields.closeDate);
  if (notice.extendedFields.effectiveDate) dates.push(notice.extendedFields.effectiveDate);
  if (notice.extendedFields.expiryDate) dates.push(notice.extendedFields.expiryDate);
  return dates.filter((date, index, self) => self.indexOf(date) === index); // Remove duplicates
}

/**
 * Check if notice has court involvement
 */
export function hasCourtInvolvement(notice: Notice): boolean {
  return !!(
    notice.extendedFields.caseNumber ||
    notice.extendedFields.courtName ||
    notice.extendedFields.magistrateOffice ||
    notice.extendedFields.mastersOffice
  );
}

/**
 * Get display location (most specific available)
 */
export function getDisplayLocation(notice: Notice): string {
  return (
    notice.extendedFields.streetAddress ||
    notice.extendedFields.municipality ||
    notice.location
  );
}

/**
 * Get property identifier (ERF or other)
 */
export function getPropertyIdentifier(notice: Notice): string | null {
  if (notice.extendedFields.erfNumber) {
    return `Erf ${notice.extendedFields.erfNumber}`;
  }
  if (notice.extendedFields.farmPortion) {
    return notice.extendedFields.farmPortion;
  }
  return null;
}

/**
 * Check if notice has financial information
 */
export function hasFinancialInfo(notice: Notice): boolean {
  return !!(
    notice.extendedFields.amount ||
    notice.extendedFields.reservePrice ||
    notice.extendedFields.depositRequired ||
    notice.extendedFields.valuationAmount
  );
}

/**
 * Get primary financial amount
 */
export function getPrimaryAmount(notice: Notice): MoneyValue | null {
  return (
    notice.extendedFields.amount ||
    notice.extendedFields.reservePrice ||
    notice.extendedFields.valuationAmount ||
    null
  );
}

/**
 * Get all parties involved in notice
 */
export function getAllParties(notice: Notice): PartyInfo[] {
  const parties: PartyInfo[] = [];
  if (notice.extendedFields.primaryParty) parties.push(notice.extendedFields.primaryParty);
  if (notice.extendedFields.secondaryParty) parties.push(notice.extendedFields.secondaryParty);
  if (notice.extendedFields.affectedParties) {
    parties.push(...notice.extendedFields.affectedParties);
  }
  return parties;
}

/**
 * Format money value for display
 */
export function formatMoney(money: MoneyValue): string {
  return money.formatted;
}

/**
 * Get field label in specified language
 */
export function getFieldLabel(fieldName: string, language: 'en' | 'af'): string {
  const label = fieldLabels[fieldName];
  return label ? label[language] : fieldName;
}

/**
 * Check if notice is published
 */
export function isPublished(notice: Notice): boolean {
  return notice.status === 'published';
}

/**
 * Check if notice is publicly accessible
 */
export function isPubliclyAccessible(notice: Notice): boolean {
  return notice.accessPolicy === 'public' && isPublished(notice);
}

/**
 * Check if notice requires login
 */
export function requiresLogin(notice: Notice): boolean {
  return notice.accessPolicy === 'account_required' || notice.accessPolicy === 'restricted';
}

/**
 * Get urgency level based on deadline
 */
export function getUrgencyLevel(notice: Notice): 'urgent' | 'soon' | 'normal' | 'none' {
  const deadlineDate = notice.deadline || notice.extendedFields.closeDate;
  if (!deadlineDate) return 'none';
  
  const today = new Date();
  const deadline = new Date(deadlineDate);
  const daysUntilDeadline = Math.floor((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysUntilDeadline < 0) return 'none'; // Deadline passed
  if (daysUntilDeadline <= 7) return 'urgent';
  if (daysUntilDeadline <= 14) return 'soon';
  return 'normal';
}

// ============================================================================
// VALIDATION HELPERS
// ============================================================================

/**
 * Validate required fields by category
 */
export function validateNotice(notice: Notice): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Base field validation
  if (!notice.title.en || !notice.title.af) {
    errors.push('Title required in both languages');
  }
  if (!notice.category) {
    errors.push('Category is required');
  }
  if (!notice.referenceNumber) {
    errors.push('Reference number is required');
  }
  
  // Category-specific validation
  switch (notice.category) {
    case 'court-orders':
    case 'divorce-antenuptial':
    case 'rehabilitation':
      if (!notice.extendedFields.caseNumber) {
        errors.push('Case number is required for court-related notices');
      }
      if (!notice.extendedFields.courtName) {
        errors.push('Court name is required for court-related notices');
      }
      break;
      
    case 'estates-creditors-debtors':
    case 'estates-liquidation-distribution':
    case 'insolvent-estates':
      if (!notice.extendedFields.fileNumber && !notice.extendedFields.caseNumber) {
        errors.push('Estate number or case number is required');
      }
      if (!notice.extendedFields.mastersOffice) {
        errors.push("Master's Office is required for estate notices");
      }
      break;
      
    case 'liquor-licences':
    case 'business-licence':
      if (!notice.extendedFields.licenceNumber && !notice.extendedFields.permitNumber) {
        errors.push('Licence or permit number is required');
      }
      if (!notice.extendedFields.municipality) {
        errors.push('Municipality is required for licence applications');
      }
      break;
      
    case 'public-auction':
    case 'sale-in-execution':
      if (!notice.extendedFields.eventDate) {
        errors.push('Auction/sale date is required');
      }
      break;
      
    case 'town-planning':
    case 'town-establishment':
      if (!notice.extendedFields.municipality) {
        errors.push('Municipality is required for planning applications');
      }
      if (!notice.extendedFields.propertyDescription && !notice.extendedFields.erfNumber) {
        errors.push('Property description or erf number is required');
      }
      break;
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// ============================================================================
// TYPE GUARDS
// ============================================================================

export function isNotice(obj: any): obj is Notice {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'object' &&
    typeof obj.category === 'string' &&
    typeof obj.referenceNumber === 'string'
  );
}

export function isPartyInfo(obj: any): obj is PartyInfo {
  return (
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.type === 'string'
  );
}

export function isMoneyValue(obj: any): obj is MoneyValue {
  return (
    typeof obj === 'object' &&
    typeof obj.amount === 'number' &&
    typeof obj.currency === 'string' &&
    typeof obj.formatted === 'string'
  );
}
