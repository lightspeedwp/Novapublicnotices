/**
 * Nova Public Notices Portal - All Categories Aggregator
 * 
 * This file aggregates all category-specific notice data files
 * and provides helper functions for dynamic stats, counts, and filtering.
 * 
 * Import Structure:
 * - Each category has its own data file in /categories/
 * - This file combines them into a single queryable dataset
 * - Provides dynamic functions for stats and counts
 */

import { Notice, NoticeCategory } from './noticeTypes';
import { estatesNotices } from './categories/estates';
import { liquorLicencesNotices } from './categories/liquor-licences';

// Import remaining category files (to be created)
// import { tendersNotices } from './categories/tenders';
// import { townPlanningNotices } from './categories/town-planning';
// import { businessLicencesNotices } from './categories/business-licences';
// import { courtOrdersNotices } from './categories/court-orders';
// import { lostDocumentsNotices } from './categories/lost-documents';
// import { environmentalNotices } from './categories/environmental';
// import { saleInExecutionNotices } from './categories/sale-in-execution';
// import { adoptionsNotices } from './categories/adoptions';
// import { generalNotices } from './categories/general-notices';

// ============================================================================
// ALL NOTICES AGGREGATION
// ============================================================================

/**
 * Combined array of all notices from all categories
 * This is the single source of truth for all notice data
 */
export const allNotices: Notice[] = [
  ...estatesNotices,
  ...liquorLicencesNotices,
  // ...tendersNotices,
  // ...townPlanningNotices,
  // ...businessLicencesNotices,
  // ...courtOrdersNotices,
  // ...lostDocumentsNotices,
  // ...environmentalNotices,
  // ...saleInExecutionNotices,
  // ...adoptionsNotices,
  // ...generalNotices,
];

// ============================================================================
// DYNAMIC STATS AND COUNTS
// ============================================================================

/**
 * Get total count of all published notices
 */
export function getTotalNoticesCount(): number {
  return allNotices.filter(notice => notice.status === 'published').length;
}

/**
 * Get count of notices by category
 */
export function getNoticeCountByCategory(category: NoticeCategory): number {
  return allNotices.filter(
    notice => notice.category === category && notice.status === 'published'
  ).length;
}

/**
 * Get counts for all categories (returns object with category counts)
 */
export function getAllCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  
  const categories: NoticeCategory[] = [
    'estates-creditors-debtors',
    'estates-liquidation-distribution',
    'liquor-licences',
    'tenders',
    'town-planning',
    'business-licence',
    'court-orders',
    'lost-documents',
    'ois-environmental',
    'sale-in-execution',
    'adoptions',
    'general-notices',
    'town-establishment',
    'curatorship',
    'demolition',
    'divorce-antenuptial',
    'insolvent-estates',
    'pension-provident',
    're-registrations',
    'sale-of-business',
    'surrender-of-estate',
    'public-auction',
  ];
  
  categories.forEach(category => {
    counts[category] = getNoticeCountByCategory(category);
  });
  
  // Combine estates categories for display
  counts['estates-creditors-debtors'] = getNoticeCountByCategory('estates-creditors-debtors');
  
  return counts;
}

/**
 * Get notices by category with pagination support
 */
export function getNoticesByCategory(
  category: NoticeCategory,
  page: number = 1,
  pageSize: number = 12
): {
  notices: Notice[];
  total: number;
  totalPages: number;
  currentPage: number;
  hasMore: boolean;
} {
  const filtered = allNotices.filter(
    notice => notice.category === category && notice.status === 'published'
  );
  
  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const notices = filtered.slice(startIndex, endIndex);
  
  return {
    notices,
    total,
    totalPages,
    currentPage: page,
    hasMore: page < totalPages
  };
}

/**
 * Get recent notices (latest published)
 */
export function getRecentNotices(limit: number = 10): Notice[] {
  return allNotices
    .filter(notice => notice.status === 'published')
    .sort((a, b) => {
      // Sort by publishDate (newest first)
      const dateA = new Date(a.publishDate);
      const dateB = new Date(b.publishDate);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, limit);
}

/**
 * Search notices by keyword with filter support
 */
export function searchNotices(params: {
  query?: string;
  category?: NoticeCategory;
  location?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  pageSize?: number;
}): {
  notices: Notice[];
  total: number;
  totalPages: number;
  currentPage: number;
  hasMore: boolean;
} {
  const {
    query = '',
    category,
    location,
    dateFrom,
    dateTo,
    page = 1,
    pageSize = 12
  } = params;
  
  let filtered = allNotices.filter(notice => notice.status === 'published');
  
  // Filter by search query (searches title, excerpt, body, reference number)
  if (query.trim()) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(notice => {
      const searchableText = `
        ${notice.title.en} 
        ${notice.title.af}
        ${notice.excerpt.en} 
        ${notice.excerpt.af}
        ${notice.body.en} 
        ${notice.body.af}
        ${notice.referenceNumber}
        ${notice.location}
        ${notice.publisher}
      `.toLowerCase();
      
      return searchableText.includes(lowerQuery);
    });
  }
  
  // Filter by category
  if (category) {
    filtered = filtered.filter(notice => notice.category === category);
  }
  
  // Filter by location
  if (location) {
    filtered = filtered.filter(notice => 
      notice.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  
  // Filter by date range
  if (dateFrom) {
    filtered = filtered.filter(notice => 
      new Date(notice.publishDate) >= new Date(dateFrom)
    );
  }
  
  if (dateTo) {
    filtered = filtered.filter(notice => 
      new Date(notice.publishDate) <= new Date(dateTo)
    );
  }
  
  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const notices = filtered.slice(startIndex, endIndex);
  
  return {
    notices,
    total,
    totalPages,
    currentPage: page,
    hasMore: page < totalPages
  };
}

/**
 * Get notice by ID
 */
export function getNoticeById(id: string): Notice | undefined {
  return allNotices.find(notice => notice.id === id);
}

/**
 * Get notice by reference number
 */
export function getNoticeByReference(referenceNumber: string): Notice | undefined {
  return allNotices.find(notice => notice.referenceNumber === referenceNumber);
}

/**
 * Get related notices (same category, excluding current notice)
 */
export function getRelatedNotices(noticeId: string, limit: number = 3): Notice[] {
  const currentNotice = getNoticeById(noticeId);
  if (!currentNotice) return [];
  
  return allNotices
    .filter(notice => 
      notice.id !== noticeId &&
      notice.category === currentNotice.category &&
      notice.status === 'published'
    )
    .slice(0, limit);
}

/**
 * Get notices by location
 */
export function getNoticesByLocation(location: string, limit?: number): Notice[] {
  const filtered = allNotices.filter(notice => 
    notice.location.toLowerCase().includes(location.toLowerCase()) &&
    notice.status === 'published'
  );
  
  return limit ? filtered.slice(0, limit) : filtered;
}

/**
 * Get urgent notices (with approaching deadlines)
 */
export function getUrgentNotices(daysThreshold: number = 7, limit?: number): Notice[] {
  const today = new Date();
  const thresholdDate = new Date(today);
  thresholdDate.setDate(today.getDate() + daysThreshold);
  
  const filtered = allNotices.filter(notice => {
    if (!notice.deadline || notice.status !== 'published') return false;
    
    const deadlineDate = new Date(notice.deadline);
    return deadlineDate >= today && deadlineDate <= thresholdDate;
  }).sort((a, b) => {
    // Sort by deadline (soonest first)
    const dateA = new Date(a.deadline!);
    const dateB = new Date(b.deadline!);
    return dateA.getTime() - dateB.getTime();
  });
  
  return limit ? filtered.slice(0, limit) : filtered;
}

/**
 * Get statistics summary for dashboard
 */
export function getStatsSummary(): {
  totalNotices: number;
  categoryCounts: Record<string, number>;
  recentCount: number;
  urgentCount: number;
  locationsCount: number;
  publishersCount: number;
} {
  const published = allNotices.filter(n => n.status === 'published');
  
  // Get unique locations
  const locations = new Set(published.map(n => n.location));
  
  // Get unique publishers
  const publishers = new Set(published.map(n => n.publisher));
  
  // Get recent notices (last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentCount = published.filter(n => 
    new Date(n.publishDate) >= thirtyDaysAgo
  ).length;
  
  // Get urgent notices (deadlines within 7 days)
  const urgentCount = getUrgentNotices(7).length;
  
  return {
    totalNotices: published.length,
    categoryCounts: getAllCategoryCounts(),
    recentCount,
    urgentCount,
    locationsCount: locations.size,
    publishersCount: publishers.size
  };
}

/**
 * Get all unique locations from notices
 */
export function getAllLocations(): string[] {
  const locations = new Set(
    allNotices
      .filter(n => n.status === 'published')
      .map(n => n.location)
  );
  return Array.from(locations).sort();
}

/**
 * Get all unique publishers from notices
 */
export function getAllPublishers(): string[] {
  const publishers = new Set(
    allNotices
      .filter(n => n.status === 'published')
      .map(n => n.publisher)
  );
  return Array.from(publishers).sort();
}

/**
 * Category metadata for display
 */
export const categoryMetadata: Record<string, {
  name: { en: string; af: string };
  description: { en: string; af: string };
  icon: string;
}> = {
  'estates': {
    name: { en: 'Estates', af: 'Boedels' },
    description: { en: 'Estate notices, liquidations, and distributions', af: 'Boedelkennisgewings, likwidasies en distribusies' },
    icon: 'file-text'
  },
  'liquor-licences': {
    name: { en: 'Liquor licences', af: 'Dranklisensies' },
    description: { en: 'Liquor licence applications and transfers', af: 'Dranklisensie aansoeke en oordragte' },
    icon: 'wine'
  },
  'tenders': {
    name: { en: 'Tenders', af: 'Tenders' },
    description: { en: 'Government and municipal tenders', af: 'Regerings en munisipale tenders' },
    icon: 'briefcase'
  },
  'town-planning': {
    name: { en: 'Town planning', af: 'Stadsbeplanning' },
    description: { en: 'Zoning and development applications', af: 'Sonerings en ontwikkelingsaansoeke' },
    icon: 'map'
  },
  'business-licence': {
    name: { en: 'Business licences', af: 'Besigheidslisensies' },
    description: { en: 'Business and trading licence applications', af: 'Besigheids en handelslisensie aansoeke' },
    icon: 'store'
  },
  'court-orders': {
    name: { en: 'Court orders', af: 'Hofbevele' },
    description: { en: 'Court orders and legal notices', af: 'Hofbevele en wetlike kennisgewings' },
    icon: 'gavel'
  },
  'lost-documents': {
    name: { en: 'Lost documents', af: 'Verlore dokumente' },
    description: { en: 'Lost title deeds and certificates', af: 'Verlore titelaktes en sertifikate' },
    icon: 'file-question'
  },
  'ois-environmental': {
    name: { en: 'Environmental notices', af: 'Omgewingskennisgewings' },
    description: { en: 'Environmental impact assessments', af: 'Omgewingsimpak assesserings' },
    icon: 'leaf'
  },
  'sale-in-execution': {
    name: { en: 'Sale in execution', af: 'Verkoping in eksekusie' },
    description: { en: 'Property sales in execution', af: 'Eiendomsverkope in eksekusie' },
    icon: 'hammer'
  },
  'adoptions': {
    name: { en: 'Adoptions', af: 'Aannemings' },
    description: { en: 'Adoption notices and applications', af: 'Aannemingskennisgewings en aansoeke' },
    icon: 'heart'
  },
  'general-notices': {
    name: { en: 'General notices', af: 'Algemene kennisgewings' },
    description: { en: 'Miscellaneous public notices', af: 'Diverse openbare kennisgewings' },
    icon: 'bell'
  },
};

// ============================================================================
// EXPORT SUMMARY
// ============================================================================

export const noticeDataSummary = {
  totalCount: allNotices.length,
  publishedCount: getTotalNoticesCount(),
  categories: Object.keys(categoryMetadata).length,
  dataFiles: 11, // Number of category files
  lastUpdated: '2024-03-04'
};