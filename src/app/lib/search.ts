/**
 * Search Utilities
 * Dynamic search functionality for public notices
 */

import { sampleNotices } from "../data/sampleNotices";

export interface SearchFilters {
  query?: string;
  category?: string;
  location?: string;
  dateFrom?: string;
  dateTo?: string;
  status?: string;
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
 * Search notices based on query and filters
 */
export function searchNotices(
  filters: SearchFilters,
  lang: "en" | "af" = "en"
): SearchResult[] {
  let results = [...sampleNotices] as SearchResult[];

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
      
      // Search in body content
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
      
      // Search in category
      if (notice.category.toLowerCase().includes(query)) {
        notice.relevanceScore = (notice.relevanceScore || 0) + 6;
        return true;
      }
      
      return false;
    });
    
    // Sort by relevance score
    results.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
  }

  // Filter by category
  if (filters.category && filters.category !== "all") {
    results = results.filter((notice) => notice.category === filters.category);
  }

  // Filter by location
  if (filters.location && filters.location !== "all") {
    results = results.filter((notice) => 
      notice.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  // Filter by date range
  if (filters.dateFrom) {
    results = results.filter(
      (notice) => new Date(notice.publishDate) >= new Date(filters.dateFrom!)
    );
  }

  if (filters.dateTo) {
    results = results.filter(
      (notice) => new Date(notice.publishDate) <= new Date(filters.dateTo!)
    );
  }

  // Filter by status
  if (filters.status && filters.status !== "all") {
    results = results.filter((notice) => notice.status === filters.status);
  }

  return results;
}

/**
 * Get unique categories from notices
 */
export function getUniqueCategories(): string[] {
  const categories = new Set(sampleNotices.map((notice) => notice.category));
  return Array.from(categories).sort();
}

/**
 * Get unique locations from notices
 */
export function getUniqueLocations(): string[] {
  const locations = new Set(sampleNotices.map((notice) => notice.location));
  return Array.from(locations).sort();
}

/**
 * Get notices by category
 */
export function getNoticesByCategory(
  category: string,
  lang: "en" | "af" = "en"
): SearchResult[] {
  return searchNotices({ category }, lang);
}

/**
 * Get notice by ID
 */
export function getNoticeById(id: string): SearchResult | undefined {
  return sampleNotices.find((notice) => notice.id === id);
}

/**
 * Get related notices based on category and location
 */
export function getRelatedNotices(
  noticeId: string,
  limit: number = 3
): SearchResult[] {
  const notice = getNoticeById(noticeId);
  
  if (!notice) {
    return [];
  }

  const related = sampleNotices
    .filter((n) => n.id !== noticeId)
    .map((n) => {
      let score = 0;
      
      // Same category gets highest score
      if (n.category === notice.category) {
        score += 10;
      }
      
      // Same location gets medium score
      if (n.location === notice.location) {
        score += 5;
      }
      
      // Recent date gets lower score
      const daysDiff = Math.abs(
        new Date(n.publishDate).getTime() - new Date(notice.publishDate).getTime()
      ) / (1000 * 60 * 60 * 24);
      
      if (daysDiff < 30) {
        score += 3;
      }
      
      return { ...n, relevanceScore: score };
    })
    .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
    .slice(0, limit);

  return related;
}

/**
 * Get recent notices
 */
export function getRecentNotices(limit: number = 10): SearchResult[] {
  return [...sampleNotices]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

/**
 * Format date for display
 */
export function formatDate(dateString: string, lang: "en" | "af" = "en"): string {
  const date = new Date(dateString);
  
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const locale = lang === "af" ? "af-ZA" : "en-ZA";
  
  return date.toLocaleDateString(locale, options);
}

/**
 * Highlight search query in text
 */
export function highlightText(text: string, query: string): string {
  if (!query || !query.trim()) {
    return text;
  }
  
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}
