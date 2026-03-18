/**
 * Nova Public Notices Portal - Categories Data
 * 
 * Complete category definitions with icons, descriptions, and metadata
 * Powers dynamic category displays throughout the application
 */

import { NoticeCategory } from '../notices/noticeTypes';
import { getAllCategoryCounts } from '../notices/allCategories';

export interface CategoryData {
  id: NoticeCategory;
  name: {
    en: string;
    af: string;
  };
  slug: string;
  description: {
    en: string;
    af: string;
  };
  icon: string; // Phosphor icon name
  color: {
    bg: string;
    fg: string;
    border: string;
  };
  featured: boolean;
  sortOrder: number;
}

// ============================================================================
// CATEGORY DEFINITIONS
// ============================================================================

export const categoriesData: CategoryData[] = [
  {
    id: 'estates-creditors-debtors',
    name: {
      en: 'Estates',
      af: 'Boedels',
    },
    slug: 'estates',
    description: {
      en: 'Estate notices including creditors, debtors, liquidations, and distributions',
      af: 'Boedelkennisgewings insluitend skuldeisers, skuldenaars, likwidasies en distribusies',
    },
    icon: 'Scroll',
    color: {
      bg: 'var(--color-category-estates-bg)',
      fg: 'var(--color-category-estates-fg)',
      border: 'var(--color-category-estates-border)',
    },
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'liquor-licences',
    name: {
      en: 'Liquor Licences',
      af: 'Dranklisensies',
    },
    slug: 'liquor-licences',
    description: {
      en: 'Applications, transfers, and renewals of liquor licences',
      af: 'Aansoeke, oordragte en hernuwings van dranklisensies',
    },
    icon: 'Wine',
    color: {
      bg: 'var(--color-category-liquor-licences-bg)',
      fg: 'var(--color-category-liquor-licences-fg)',
      border: 'var(--color-category-liquor-licences-border)',
    },
    featured: true,
    sortOrder: 2,
  },
  {
    id: 'tenders',
    name: {
      en: 'Tenders',
      af: 'Tenders',
    },
    slug: 'tenders',
    description: {
      en: 'Government and municipal tender opportunities and RFPs',
      af: 'Regerings- en munisipale tendergeleenthede en versoeke om voorstelle',
    },
    icon: 'Briefcase',
    color: {
      bg: 'var(--color-category-tenders-bg)',
      fg: 'var(--color-category-tenders-fg)',
      border: 'var(--color-category-tenders-border)',
    },
    featured: true,
    sortOrder: 3,
  },
  {
    id: 'town-planning',
    name: {
      en: 'Town Planning',
      af: 'Stadsbeplanning',
    },
    slug: 'town-planning',
    description: {
      en: 'Zoning applications, subdivisions, and development notices',
      af: 'Soneringsaansoeke, onderverdelings en ontwikkelingskennisgewings',
    },
    icon: 'MapTrifold',
    color: {
      bg: 'var(--color-category-town-planning-bg)',
      fg: 'var(--color-category-town-planning-fg)',
      border: 'var(--color-category-town-planning-border)',
    },
    featured: true,
    sortOrder: 4,
  },
  {
    id: 'business-licence',
    name: {
      en: 'Business Licences',
      af: 'Besigheidslisensies',
    },
    slug: 'business-licences',
    description: {
      en: 'Trading licences, hawker permits, and business registrations',
      af: 'Handelslisensies, smousperms en besigheidsregistrasies',
    },
    icon: 'Storefront',
    color: {
      bg: 'var(--color-category-business-licences-bg)',
      fg: 'var(--color-category-business-licences-fg)',
      border: 'var(--color-category-business-licences-border)',
    },
    featured: true,
    sortOrder: 5,
  },
  {
    id: 'court-orders',
    name: {
      en: 'Court Orders',
      af: 'Hofbevele',
    },
    slug: 'court-orders',
    description: {
      en: 'Legal notices, court orders, and judicial proceedings',
      af: 'Regskennisgewings, hofbevele en geregtelike verrigtinge',
    },
    icon: 'Gavel',
    color: {
      bg: 'var(--color-category-court-orders-bg)',
      fg: 'var(--color-category-court-orders-fg)',
      border: 'var(--color-category-court-orders-border)',
    },
    featured: true,
    sortOrder: 6,
  },
  {
    id: 'lost-documents',
    name: {
      en: 'Lost Documents',
      af: 'Verlore Dokumente',
    },
    slug: 'lost-documents',
    description: {
      en: 'Lost title deeds, share certificates, and other documents',
      af: 'Verlore titelaktes, aandeelsertifikate en ander dokumente',
    },
    icon: 'FileX',
    color: {
      bg: 'var(--color-category-lost-documents-bg)',
      fg: 'var(--color-category-lost-documents-fg)',
      border: 'var(--color-category-lost-documents-border)',
    },
    featured: false,
    sortOrder: 7,
  },
  {
    id: 'ois-environmental',
    name: {
      en: 'Environmental Notices',
      af: 'Omgewingskennisgewings',
    },
    slug: 'environmental',
    description: {
      en: 'Environmental impact assessments and public participation',
      af: 'Omgewingsimpak assesserings en openbare deelname',
    },
    icon: 'Leaf',
    color: {
      bg: 'var(--color-category-environmental-bg)',
      fg: 'var(--color-category-environmental-fg)',
      border: 'var(--color-category-environmental-border)',
    },
    featured: true,
    sortOrder: 8,
  },
  {
    id: 'sale-in-execution',
    name: {
      en: 'Sale in Execution',
      af: 'Verkoping in Eksekusie',
    },
    slug: 'sale-in-execution',
    description: {
      en: 'Property and asset sales in execution of court orders',
      af: 'Eiendoms- en bateverkope in uitvoering van hofbevele',
    },
    icon: 'Hammer',
    color: {
      bg: 'var(--color-category-sale-in-execution-bg)',
      fg: 'var(--color-category-sale-in-execution-fg)',
      border: 'var(--color-category-sale-in-execution-border)',
    },
    featured: true,
    sortOrder: 9,
  },
  {
    id: 'adoptions',
    name: {
      en: 'Adoptions',
      af: 'Aannemings',
    },
    slug: 'adoptions',
    description: {
      en: 'Adoption proceedings and children\'s court notices',
      af: 'Aannemingsverrigtinge en kinderhofkennisgewings',
    },
    icon: 'Heart',
    color: {
      bg: 'var(--color-category-adoptions-bg)',
      fg: 'var(--color-category-adoptions-fg)',
      border: 'var(--color-category-adoptions-border)',
    },
    featured: false,
    sortOrder: 10,
  },
  {
    id: 'general-notices',
    name: {
      en: 'General Notices',
      af: 'Algemene Kennisgewings',
    },
    slug: 'general',
    description: {
      en: 'Miscellaneous public notices and announcements',
      af: 'Diverse openbare kennisgewings en aankondigings',
    },
    icon: 'Bell',
    color: {
      bg: 'var(--color-category-general-bg)',
      fg: 'var(--color-category-general-fg)',
      border: 'var(--color-category-general-border)',
    },
    featured: false,
    sortOrder: 11,
  },
  {
    id: 'town-establishment',
    name: {
      en: 'Town Establishment',
      af: 'Dorpstigting',
    },
    slug: 'town-establishment',
    description: {
      en: 'Township establishment and municipal planning notices',
      af: 'Dorpstigting en munisipale beplanningskennisgewings',
    },
    icon: 'Buildings',
    color: {
      bg: 'var(--color-category-town-establishment-bg)',
      fg: 'var(--color-category-town-establishment-fg)',
      border: 'var(--color-category-town-establishment-border)',
    },
    featured: false,
    sortOrder: 12,
  },
  {
    id: 'curatorship',
    name: {
      en: 'Curatorship',
      af: 'Kuratorskap',
    },
    slug: 'curatorship',
    description: {
      en: 'Curatorship appointments and related notices',
      af: 'Kuratorskapaanstellings en verwante kennisgewings',
    },
    icon: 'ShieldCheck',
    color: {
      bg: 'var(--color-category-curatorship-bg)',
      fg: 'var(--color-category-curatorship-fg)',
      border: 'var(--color-category-curatorship-border)',
    },
    featured: false,
    sortOrder: 13,
  },
  {
    id: 'demolition',
    name: {
      en: 'Demolition',
      af: 'Sloping',
    },
    slug: 'demolition',
    description: {
      en: 'Demolition orders and building removal notices',
      af: 'Slopingsbevele en gebou verwyderings kennisgewings',
    },
    icon: 'Warning',
    color: {
      bg: 'var(--color-category-demolition-bg)',
      fg: 'var(--color-category-demolition-fg)',
      border: 'var(--color-category-demolition-border)',
    },
    featured: false,
    sortOrder: 14,
  },
  {
    id: 'divorce-antenuptial',
    name: {
      en: 'Divorce & Antenuptial',
      af: 'Egskeiding & Voorhuwelik',
    },
    slug: 'divorce',
    description: {
      en: 'Divorce proceedings and antenuptial contract notices',
      af: 'Egskeidingsverrigtinge en voorhuwelikse kontrak kennisgewings',
    },
    icon: 'UsersThree',
    color: {
      bg: 'var(--color-category-divorce-bg)',
      fg: 'var(--color-category-divorce-fg)',
      border: 'var(--color-category-divorce-border)',
    },
    featured: false,
    sortOrder: 15,
  },
  {
    id: 'insolvent-estates',
    name: {
      en: 'Insolvent Estates',
      af: 'Insolvente Boedels',
    },
    slug: 'insolvent-estates',
    description: {
      en: 'Insolvency and sequestration proceedings',
      af: 'Insolvensie en sekwestrasie verrigtinge',
    },
    icon: 'TrendDown',
    color: {
      bg: 'var(--color-category-insolvent-estates-bg)',
      fg: 'var(--color-category-insolvent-estates-fg)',
      border: 'var(--color-category-insolvent-estates-border)',
    },
    featured: false,
    sortOrder: 16,
  },
  {
    id: 'pension-provident',
    name: {
      en: 'Pension Funds',
      af: 'Pensioenfondse',
    },
    slug: 'pension-provident',
    description: {
      en: 'Pension and provident fund notices',
      af: 'Pensioen en voorsorgfonds kennisgewings',
    },
    icon: 'Vault',
    color: {
      bg: 'var(--color-category-pension-provident-bg)',
      fg: 'var(--color-category-pension-provident-fg)',
      border: 'var(--color-category-pension-provident-border)',
    },
    featured: false,
    sortOrder: 17,
  },
  {
    id: 're-registrations',
    name: {
      en: 'Re-Registrations',
      af: 'Herregistrasies',
    },
    slug: 're-registrations',
    description: {
      en: 'Company and entity re-registration notices',
      af: 'Maatskappy en entiteit herregistrasie kennisgewings',
    },
    icon: 'ArrowsClockwise',
    color: {
      bg: 'var(--color-category-re-registrations-bg)',
      fg: 'var(--color-category-re-registrations-fg)',
      border: 'var(--color-category-re-registrations-border)',
    },
    featured: false,
    sortOrder: 18,
  },
  {
    id: 'sale-of-business',
    name: {
      en: 'Sale of Business',
      af: 'Verkoop van Besigheid',
    },
    slug: 'sale-of-business',
    description: {
      en: 'Business transfer and sale notifications',
      af: 'Besigheidsoordrag en verkoop kennisgewings',
    },
    icon: 'Handshake',
    color: {
      bg: 'var(--color-category-sale-of-business-bg)',
      fg: 'var(--color-category-sale-of-business-fg)',
      border: 'var(--color-category-sale-of-business-border)',
    },
    featured: false,
    sortOrder: 19,
  },
  {
    id: 'surrender-of-estate',
    name: {
      en: 'Surrender of Estate',
      af: 'Oorgawe van Boedel',
    },
    slug: 'surrender-of-estate',
    description: {
      en: 'Estate surrender applications and proceedings',
      af: 'Boedeloorgawe aansoeke en verrigtinge',
    },
    icon: 'HandPalm',
    color: {
      bg: 'var(--color-category-surrender-of-estate-bg)',
      fg: 'var(--color-category-surrender-of-estate-fg)',
      border: 'var(--color-category-surrender-of-estate-border)',
    },
    featured: false,
    sortOrder: 20,
  },
  {
    id: 'public-auction',
    name: {
      en: 'Public Auctions',
      af: 'Openbare Veilings',
    },
    slug: 'public-auction',
    description: {
      en: 'Public auction notices for property and assets',
      af: 'Openbare veilingskennisgewings vir eiendom en bates',
    },
    icon: 'Megaphone',
    color: {
      bg: 'var(--color-category-sale-in-execution-bg)',
      fg: 'var(--color-category-sale-in-execution-fg)',
      border: 'var(--color-category-sale-in-execution-border)',
    },
    featured: false,
    sortOrder: 21,
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get category by ID
 */
export function getCategoryById(id: NoticeCategory): CategoryData | undefined {
  return categoriesData.find(cat => cat.id === id);
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return categoriesData.find(cat => cat.slug === slug);
}

/**
 * Get featured categories only
 */
export function getFeaturedCategories(): CategoryData[] {
  return categoriesData.filter(cat => cat.featured).sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Get all categories sorted by sort order
 */
export function getAllCategories(): CategoryData[] {
  return [...categoriesData].sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Get categories with notices (non-zero count)
 */
export function getCategoriesWithContent(): CategoryData[] {
  const counts = getAllCategoryCounts();
  return categoriesData.filter(cat => {
    const count = counts[cat.id] || 0;
    return count > 0;
  }).sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Get category count dynamically
 */
export function getCategoryCount(categoryId: NoticeCategory): number {
  const counts = getAllCategoryCounts();
  return counts[categoryId] || 0;
}

/**
 * Get category with count
 */
export interface CategoryWithCount extends CategoryData {
  count: number;
}

export function getCategoryWithCount(categoryId: NoticeCategory): CategoryWithCount | undefined {
  const category = getCategoryById(categoryId);
  if (!category) return undefined;
  
  return {
    ...category,
    count: getCategoryCount(categoryId),
  };
}

/**
 * Get all categories with counts
 */
export function getAllCategoriesWithCounts(): CategoryWithCount[] {
  return categoriesData.map(cat => ({
    ...cat,
    count: getCategoryCount(cat.id),
  })).sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Search categories by name
 */
export function searchCategories(query: string, language: 'en' | 'af' = 'en'): CategoryData[] {
  const lowerQuery = query.toLowerCase();
  return categoriesData.filter(cat => 
    cat.name[language].toLowerCase().includes(lowerQuery) ||
    cat.description[language].toLowerCase().includes(lowerQuery)
  );
}