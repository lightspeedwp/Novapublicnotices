/**
 * Notice Helper Functions
 * Utilities for working with notice data including stats calculation
 */

import type { Notice } from '../data/sampleNotices';
import { expandedNotices } from '../data/expandedNotices';

/**
 * Calculate category statistics
 */
export interface CategoryStats {
  total: number;
  published: number;
  thisWeek: number;
  thisMonth: number;
  avgPerWeek: number;
  locations: number;
}

export function getCategoryStats(category: string): CategoryStats {
  const notices = expandedNotices.filter((notice) => notice.category === category);
  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const published = notices.filter((n) => n.status === 'published').length;
  
  const thisWeek = notices.filter((n) => {
    try {
      const publishDate = new Date(n.publishDate);
      return publishDate >= oneWeekAgo && !isNaN(publishDate.getTime());
    } catch {
      return false;
    }
  }).length;

  const thisMonth = notices.filter((n) => {
    try {
      const publishDate = new Date(n.publishDate);
      return publishDate >= oneMonthAgo && !isNaN(publishDate.getTime());
    } catch {
      return false;
    }
  }).length;

  // Get unique locations
  const uniqueLocations = new Set(notices.map((n) => n.location).filter(Boolean));

  // Calculate average per week (last 30 days / 4.3 weeks)
  const avgPerWeek = thisMonth > 0 ? Math.round(thisMonth / 4.3) : 0;

  return {
    total: notices.length,
    published,
    thisWeek,
    thisMonth,
    avgPerWeek,
    locations: uniqueLocations.size,
  };
}

/**
 * Generate notice stats for display in StatsBlock
 */
export function generateCategoryStatsData(category: string, lang: 'en' | 'af' = 'en') {
  // Return empty stats if no category provided
  if (!category) {
    return [
      { label: lang === 'en' ? 'Total notices' : 'Totaal kennisgewings', value: 0, icon: 'file-text' },
      { label: lang === 'en' ? 'Published' : 'Gepubliseer', value: 0, icon: 'check-circle' },
      { label: lang === 'en' ? 'This month' : 'Hierdie maand', value: 0, icon: 'calendar' },
      { label: lang === 'en' ? 'Locations' : 'Liggings', value: 0, icon: 'map-pin' },
    ];
  }

  const stats = getCategoryStats(category);

  const labels = {
    en: {
      total: 'Total notices',
      published: 'Published',
      thisWeek: 'This week',
      thisMonth: 'This month',
      locations: 'Locations',
      avgPerWeek: 'Avg per week',
    },
    af: {
      total: 'Totaal kennisgewings',
      published: 'Gepubliseer',
      thisWeek: 'Hierdie week',
      thisMonth: 'Hierdie maand',
      locations: 'Liggings',
      avgPerWeek: 'Gem per week',
    },
  };

  const l = labels[lang];

  return [
    {
      label: l.total,
      value: stats.total,
      icon: 'file-text',
    },
    {
      label: l.published,
      value: stats.published,
      icon: 'check-circle',
    },
    {
      label: l.thisMonth,
      value: stats.thisMonth,
      icon: 'calendar',
    },
    {
      label: l.locations,
      value: stats.locations,
      icon: 'map-pin',
    },
  ];
}

/**
 * Get all category statistics
 */
export function getAllCategoryStats(): Record<string, CategoryStats> {
  const categories = [
    'tenders',
    'estates',
    'liquor-licences',
    'town-planning',
    'business-licence',
    'environmental',
    'court-orders',
    'general',
    'adoptions',
    'curatorship',
    'demolition',
    'divorce',
    'insolvent-estates',
    'lost-documents',
    'pension-funds',
    're-registration',
    'sale-of-business',
    'sale-in-execution',
    'surrender-of-estate',
    'town-establishment',
    'company-notices',
    'liquidation',
    'name-changes',
    'partnerships',
    'trusts',
  ];

  const statsMap: Record<string, CategoryStats> = {};

  categories.forEach((cat) => {
    statsMap[cat] = getCategoryStats(cat);
  });

  return statsMap;
}