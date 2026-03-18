/**
 * Optimized Search Functions
 * 
 * High-performance search with indexing and caching
 */

import { generateAllNotices } from "../data/noticesGenerator";
import { buildSearchIndex, searchIndex as searchIndexFn, SearchIndex } from "./searchIndex";

export interface SearchFilters {
  query?: string;
  category?: string;
  location?: string;
  dateFrom?: string;
  dateTo?: string;
  status?: string;
  publisher?: string;
  referenceNumber?: string;
  sort?: string;
}

export interface SearchResult {
  id: string;
  title: { en: string; af: string };
  excerpt: { en: string; af: string };
  body: { en: string; af: string };
  category: string;
  location: string;
  publishDate: string;
  referenceNumber: string;
  publisher: string;
  status: string;
  relevanceScore?: number;
}

// Cache for notices and search index
let cachedNotices: SearchResult[] | null = null;
let cachedIndex: { en: SearchIndex; af: SearchIndex } | null = null;

/**
 * Get all notices (with caching)
 */
export function getAllNotices(): SearchResult[] {
  if (!cachedNotices) {
    cachedNotices = generateAllNotices() as SearchResult[];
  }
  return cachedNotices;
}

/**
 * Get search index (with caching)
 */
export function getSearchIndex(lang: "en" | "af" = "en"): SearchIndex {
  if (!cachedIndex) {
    const notices = getAllNotices();
    cachedIndex = {
      en: buildSearchIndex(notices, "en"),
      af: buildSearchIndex(notices, "af"),
    };
  }
  return cachedIndex[lang];
}

/**
 * Clear cache (useful for testing or when data updates)
 */
export function clearCache() {
  cachedNotices = null;
  cachedIndex = null;
}

/**
 * Parse date string to Date object
 */
function parseDate(dateStr: string): Date {
  // Handle both "DD Mon YYYY" and "YYYY-MM-DD" formats
  if (dateStr.includes("-") && dateStr.length === 10) {
    return new Date(dateStr);
  }
  return new Date(dateStr);
}

/**
 * Get recent notices
 */
export function getRecentNotices(limit: number = 6, lang: "en" | "af" = "en"): SearchResult[] {
  const notices = getAllNotices();
  
  // Sort by publish date descending
  const sorted = [...notices].sort((a, b) => {
    const dateA = parseDate(a.publishDate);
    const dateB = parseDate(b.publishDate);
    return dateB.getTime() - dateA.getTime();
  });

  return sorted.slice(0, limit);
}

/**
 * Get notices by category
 */
export function getNoticesByCategory(category: string, lang: "en" | "af" = "en"): SearchResult[] {
  const notices = getAllNotices();
  
  if (!category || category === "all") {
    return notices;
  }
  
  return notices.filter(
    (notice) => notice.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Search notices with optimized indexing
 */
export function searchNotices(
  filters: SearchFilters,
  lang: "en" | "af" = "en"
): SearchResult[] {
  let results = getAllNotices();

  // Text search using index
  if (filters.query && filters.query.trim()) {
    const index = getSearchIndex(lang);
    const scores = searchIndexFn(index, filters.query);
    
    // Filter to only matching notices and add scores
    results = results
      .filter(notice => scores.has(notice.id))
      .map(notice => ({
        ...notice,
        relevanceScore: scores.get(notice.id) || 0,
      }));
  }

  // Filter by category
  if (filters.category && filters.category !== "all") {
    results = results.filter(
      (notice) => notice.category.toLowerCase() === filters.category!.toLowerCase()
    );
  }

  // Filter by location
  if (filters.location && filters.location !== "all") {
    results = results.filter((notice) =>
      notice.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  // Filter by status
  if (filters.status && filters.status !== "all") {
    results = results.filter((notice) => notice.status === filters.status);
  }

  // Filter by publisher (partial match)
  if (filters.publisher && filters.publisher.trim()) {
    const publisherQuery = filters.publisher.toLowerCase();
    results = results.filter(
      (notice) => notice.publisher.toLowerCase().includes(publisherQuery)
    );
  }

  // Filter by reference number (partial match)
  if (filters.referenceNumber && filters.referenceNumber.trim()) {
    const refQuery = filters.referenceNumber.toLowerCase();
    results = results.filter(
      (notice) => notice.referenceNumber.toLowerCase().includes(refQuery)
    );
  }

  // Filter by date range
  if (filters.dateFrom || filters.dateTo) {
    results = results.filter((notice) => {
      const noticeDate = parseDate(notice.publishDate);
      
      if (filters.dateFrom) {
        const fromDate = new Date(filters.dateFrom);
        if (noticeDate < fromDate) return false;
      }
      
      if (filters.dateTo) {
        const toDate = new Date(filters.dateTo);
        if (noticeDate > toDate) return false;
      }
      
      return true;
    });
  }

  // Sort results
  results = sortResults(results, filters.sort);

  return results;
}

/**
 * Sort search results
 */
function sortResults(results: SearchResult[], sortBy?: string): SearchResult[] {
  const sorted = [...results];
  
  switch (sortBy) {
    case "newest":
      sorted.sort((a, b) => {
        const dateA = parseDate(a.publishDate);
        const dateB = parseDate(b.publishDate);
        return dateB.getTime() - dateA.getTime();
      });
      break;
      
    case "oldest":
      sorted.sort((a, b) => {
        const dateA = parseDate(a.publishDate);
        const dateB = parseDate(b.publishDate);
        return dateA.getTime() - dateB.getTime();
      });
      break;
      
    case "relevance":
      sorted.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
      break;
      
    default:
      // Default to newest
      sorted.sort((a, b) => {
        const dateA = parseDate(a.publishDate);
        const dateB = parseDate(b.publishDate);
        return dateB.getTime() - dateA.getTime();
      });
      break;
  }
  
  return sorted;
}

/**
 * Get related notices
 */
export function getRelatedNotices(
  currentNoticeId: string,
  category: string,
  location: string,
  limit: number = 3,
  lang: "en" | "af" = "en"
): SearchResult[] {
  const notices = getAllNotices();
  
  // Filter by same category, exclude current notice
  let related = notices.filter(
    (notice) =>
      notice.id !== currentNoticeId &&
      notice.category.toLowerCase() === category.toLowerCase()
  );

  // Score by location similarity
  const locationLower = location.toLowerCase();
  related = related.map(notice => {
    let score = 0;
    const noticeLoc = notice.location.toLowerCase();
    
    // Exact location match
    if (noticeLoc === locationLower) {
      score += 10;
    }
    // Province match (last part after comma)
    else if (noticeLoc.includes(locationLower.split(",").pop()?.trim() || "")) {
      score += 5;
    }
    
    return {
      ...notice,
      relevanceScore: score,
    };
  });

  // Sort by relevance
  related.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));

  return related.slice(0, limit);
}

/**
 * Get notice by ID
 */
export function getNoticeById(id: string): SearchResult | undefined {
  const notices = getAllNotices();
  return notices.find(notice => notice.id === id);
}

/**
 * Get category statistics
 */
export function getCategoryStats(): Record<string, number> {
  const notices = getAllNotices();
  const stats: Record<string, number> = {};
  
  for (const notice of notices) {
    stats[notice.category] = (stats[notice.category] || 0) + 1;
  }
  
  return stats;
}

/**
 * Get location statistics
 */
export function getLocationStats(): Record<string, number> {
  const notices = getAllNotices();
  const stats: Record<string, number> = {};
  
  for (const notice of notices) {
    // Extract province (after comma)
    const parts = notice.location.split(",");
    const province = parts.length > 1 ? parts[1].trim() : notice.location;
    stats[province] = (stats[province] || 0) + 1;
  }
  
  return stats;
}

/**
 * Get search result count without fetching all results
 */
export function getSearchResultCount(
  filters: SearchFilters,
  lang: "en" | "af" = "en"
): number {
  return searchNotices(filters, lang).length;
}
