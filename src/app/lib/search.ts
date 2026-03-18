/**
 * Search Utilities
 * Dynamic search functionality for public notices
 */

import { expandedNotices } from "../data/expandedNotices";

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

/**
 * Get recent notices
 */
export function getRecentNotices(limit: number = 6, lang: "en" | "af" = "en"): SearchResult[] {
  return expandedNotices.slice(0, limit) as SearchResult[];
}

/**
 * Get notices by category
 */
export function getNoticesByCategory(category: string, lang: "en" | "af" = "en"): SearchResult[] {
  if (!category || category === "all") {
    return expandedNotices as SearchResult[];
  }
  
  return expandedNotices.filter(
    (notice) => notice.category.toLowerCase() === category.toLowerCase()
  ) as SearchResult[];
}

/**
 * Search notices based on query and filters
 */
export function searchNotices(
  filters: SearchFilters,
  lang: "en" | "af" = "en"
): SearchResult[] {
  let results = [...expandedNotices] as SearchResult[];

  // Filter by search query
  if (filters.query && filters.query.trim()) {
    const query = filters.query.toLowerCase().trim();
    
    results = results.filter((notice) => {
      // Search in title
      if (notice.title[lang].toLowerCase().includes(query)) {
        notice.relevanceScore = (notice.relevanceScore || 0) + 10;
        return true;
      }
      
      // Search in excerpt
      if (notice.excerpt[lang].toLowerCase().includes(query)) {
        notice.relevanceScore = (notice.relevanceScore || 0) + 5;
        return true;
      }
      
      // Search in body
      if (notice.body[lang].toLowerCase().includes(query)) {
        notice.relevanceScore = (notice.relevanceScore || 0) + 3;
        return true;
      }
      
      // Search in reference number
      if (notice.referenceNumber.toLowerCase().includes(query)) {
        notice.relevanceScore = (notice.relevanceScore || 0) + 8;
        return true;
      }
      
      // Search in location
      if (notice.location.toLowerCase().includes(query)) {
        notice.relevanceScore = (notice.relevanceScore || 0) + 4;
        return true;
      }
      
      // Search in publisher
      if (notice.publisher && notice.publisher.toLowerCase().includes(query)) {
        notice.relevanceScore = (notice.relevanceScore || 0) + 2;
        return true;
      }
      
      return false;
    });
    
    // Sort by relevance score
    results.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
  }

  // Filter by category
  if (filters.category && filters.category !== "all") {
    results = results.filter(
      (notice) => notice.category.toLowerCase() === filters.category?.toLowerCase()
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

  // Filter by date range
  if (filters.dateFrom || filters.dateTo) {
    results = results.filter((notice) => {
      const noticeDate = new Date(notice.publishDate);
      
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

  // Filter by publisher
  if (filters.publisher && filters.publisher !== "all") {
    results = results.filter(
      (notice) => notice.publisher.toLowerCase().includes(filters.publisher!.toLowerCase())
    );
  }

  // Filter by reference number
  if (filters.referenceNumber && filters.referenceNumber !== "all") {
    results = results.filter(
      (notice) => notice.referenceNumber.toLowerCase().includes(filters.referenceNumber!.toLowerCase())
    );
  }

  // Sort results
  if (filters.sort) {
    switch (filters.sort) {
      case "newest":
        results.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        break;
      case "oldest":
        results.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
        break;
      case "relevance":
        results.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
        break;
      default:
        // Default to newest
        results.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        break;
    }
  } else {
    // Default sort by newest
    results.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  return results;
}

/**
 * Get related notices based on category and location
 */
export function getRelatedNotices(
  currentNoticeId: string,
  category: string,
  location: string,
  limit: number = 3,
  lang: "en" | "af" = "en"
): SearchResult[] {
  // Ensure category and location are strings
  const categoryStr = String(category);
  const locationStr = String(location);
  
  // Filter notices by same category, exclude current notice
  let related = expandedNotices.filter(
    (notice) =>
      notice.id !== currentNoticeId &&
      String(notice.category).toLowerCase() === categoryStr.toLowerCase()
  ) as SearchResult[];

  // Score by location similarity
  related.forEach((notice) => {
    notice.relevanceScore = 0;
    
    // Exact location match
    if (String(notice.location).toLowerCase() === locationStr.toLowerCase()) {
      notice.relevanceScore += 10;
    }
    // Province match (last part of location string)
    else if (String(notice.location).toLowerCase().includes(locationStr.split(",").pop()?.trim().toLowerCase() || "")) {
      notice.relevanceScore += 5;
    }
  });

  // Sort by relevance
  related.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));

  // Return limited results
  return related.slice(0, limit);
}