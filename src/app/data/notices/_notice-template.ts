/**
 * Nova Public Notices Portal - Notice Data Template
 * 
 * This template shows the standard structure for creating notice entries
 * across all categories. Copy this structure when creating new notices.
 * 
 * Guidelines:
 * 1. All notices must include bilingual content (en/af)
 * 2. Use proper date format: "DD Mon YYYY" (e.g., "15 Jan 2024")
 * 3. Always include referenceNumber, location, publishDate
 * 4. Use appropriate extendedFields based on category requirements
 * 5. Ensure status is 'published' for visible notices
 * 6. Set accessPolicy based on content sensitivity
 */

import { Notice } from './noticeTypes';

// ============================================================================
// TEMPLATE NOTICE ENTRY
// ============================================================================

export const TEMPLATE_NOTICE: Notice = {
  // Base Fields (REQUIRED)
  id: 'unique-id-here', // Use category-prefix-number (e.g., 'estates-001')
  
  title: {
    en: 'English title here',
    af: 'Afrikaanse titel hier'
  },
  
  category: 'general-notices', // Must match NoticeCategory type
  
  publishDate: '15 Jan 2024', // Format: "DD Mon YYYY"
  
  location: 'City/Town, Province', // Primary location
  
  referenceNumber: 'REF-2024-XXXX', // Unique reference number
  
  excerpt: {
    en: 'Brief English summary (2-3 sentences) providing key information.',
    af: 'Kort Afrikaanse opsomming (2-3 sinne) wat sleutelinligting verskaf.'
  },
  
  body: {
    en: `Full English notice text here. Include all relevant details, legal requirements, and instructions.
    
Can include multiple paragraphs. Use clear, formal language appropriate for legal notices.`,
    af: `Volledige Afrikaanse kennisgewingteks hier. Sluit alle relevante besonderhede, wetlike vereistes en instruksies in.
    
Kan veelvuldige paragrawe insluit. Gebruik duidelike, formele taal geskik vir wetlike kennisgewings.`
  },
  
  publisher: 'Publisher/Entity Name',
  
  contactName: 'Contact Person Name',
  contactEmail: 'email@example.com',
  contactPhone: '+27 12 345 6789',
  
  deadline: '28 Feb 2024', // Optional: Deadline for responses/objections
  
  status: 'published', // 'published' | 'pending' | 'draft' | 'archived'
  
  accessPolicy: 'account_required', // 'public' | 'account_required' | 'restricted'
  
  // Extended Fields (CATEGORY-SPECIFIC)
  extendedFields: {
    // Parties & Entities
    primaryParty: {
      name: 'Primary Party Full Name',
      type: 'individual', // 'individual' | 'company' | 'organization' | 'government'
      idNumber: '7001015009087', // SA ID for individuals
      registrationNumber: '2020/123456/07', // For companies
      role: 'Applicant', // E.g., 'Executor', 'Plaintiff', 'Curator'
      address: '123 Main Street, City, 0000',
      contactInfo: '+27 12 345 6789'
    },
    
    secondaryParty: {
      name: 'Secondary Party Name',
      type: 'company',
      registrationNumber: '2019/654321/07',
      role: 'Respondent'
    },
    
    affectedParties: [
      {
        name: 'Affected Party 1',
        type: 'individual',
        role: 'Creditor'
      }
    ],
    
    // Legal & Administrative Numbers
    caseNumber: '12345/2024',
    fileNumber: 'FILE-2024-001',
    registrationNumber: 'REG-2024-123',
    licenceNumber: 'LIC-2024-456',
    permitNumber: 'PERMIT-2024-789',
    
    // Court & Government Entities
    courtName: 'High Court of South Africa',
    courtLocation: 'Pretoria',
    magistrateOffice: "Pretoria Magistrate's Court",
    mastersOffice: "Master of the High Court, Pretoria",
    governmentDepartment: 'Department Name',
    municipality: 'City of Tshwane Metropolitan Municipality',
    
    // Dates & Deadlines
    eventDate: '15 Mar 2024', // Main event (auction, meeting, etc.)
    hearingDate: '20 Feb 2024', // Court hearing
    closeDate: '28 Feb 2024', // Submission deadline
    effectiveDate: '01 Mar 2024', // When takes effect
    expiryDate: '31 Dec 2024', // When expires
    
    // Property & Location Details
    propertyDescription: 'Full legal description of property',
    erfNumber: '12345',
    farmPortion: 'Portion 4 of Farm 123',
    streetAddress: '456 Property Street, Suburb, City, 0001',
    gpsCoordinates: '-25.7479, 28.2293',
    
    // Financial Information
    amount: {
      amount: 250000,
      currency: 'ZAR',
      formatted: 'R250,000'
    },
    
    reservePrice: {
      amount: 500000,
      currency: 'ZAR',
      formatted: 'R500,000'
    },
    
    depositRequired: {
      amount: 50000,
      currency: 'ZAR',
      formatted: 'R50,000'
    },
    
    valuationAmount: {
      amount: 750000,
      currency: 'ZAR',
      formatted: 'R750,000'
    },
    
    // Type & Classification
    noticeType: 'Specific notice sub-type',
    subCategory: 'Further classification',
    legalBasis: 'Legal Act Section XX',
    applicationType: 'New Application',
    
    // Flexible Metadata
    metadata: {
      customField1: 'Custom value',
      customField2: 123,
      tags: ['tag1', 'tag2']
    }
  },
  
  // System Fields (OPTIONAL)
  createdAt: '2024-01-15T09:00:00Z',
  updatedAt: '2024-01-15T09:00:00Z',
  createdBy: 'system',
  updatedBy: 'system'
};

// ============================================================================
// CATEGORY-SPECIFIC TEMPLATES
// ============================================================================

/**
 * ESTATES - Minimal required fields
 */
export const ESTATES_TEMPLATE: Partial<Notice> = {
  category: 'estates-creditors-debtors',
  extendedFields: {
    fileNumber: 'ESTATE-2024-001',
    mastersOffice: "Master's Office location",
    primaryParty: {
      name: 'Deceased Full Name',
      type: 'individual',
      idNumber: 'ID Number',
      role: 'Deceased'
    }
  }
};

/**
 * LIQUOR LICENCES - Minimal required fields
 */
export const LIQUOR_LICENCE_TEMPLATE: Partial<Notice> = {
  category: 'liquor-licences',
  extendedFields: {
    licenceNumber: 'LIQ-2024-001',
    municipality: 'Municipality name',
    propertyDescription: 'Trading premises description',
    applicationType: 'New Application'
  }
};

/**
 * TENDERS - Minimal required fields
 */
export const TENDER_TEMPLATE: Partial<Notice> = {
  category: 'tenders',
  extendedFields: {
    closeDate: 'Tender closing date',
    governmentDepartment: 'Issuing department',
    amount: {
      amount: 0,
      currency: 'ZAR',
      formatted: 'R0'
    }
  }
};

/**
 * TOWN PLANNING - Minimal required fields
 */
export const TOWN_PLANNING_TEMPLATE: Partial<Notice> = {
  category: 'town-planning',
  extendedFields: {
    municipality: 'Municipality name',
    propertyDescription: 'Property description',
    erfNumber: 'Erf number',
    applicationType: 'Application type'
  }
};

/**
 * COURT ORDERS - Minimal required fields
 */
export const COURT_ORDER_TEMPLATE: Partial<Notice> = {
  category: 'court-orders',
  extendedFields: {
    caseNumber: 'Case number',
    courtName: 'Court name',
    courtLocation: 'Court location',
    hearingDate: 'Hearing date'
  }
};
