/**
 * Search Index System
 * 
 * Creates an optimized search index for fast notice lookup
 * Implements:
 * - Tokenization and normalization
 * - Inverted index for O(1) lookups
 * - Relevance scoring
 * - Fuzzy matching support
 */

import { Notice } from "../data/sampleNotices";

export interface SearchToken {
  term: string;
  noticeId: string;
  field: 'title' | 'excerpt' | 'body' | 'location' | 'reference' | 'publisher' | 'category';
  score: number;
}

export interface SearchIndex {
  tokens: Map<string, SearchToken[]>;
  noticeIds: Set<string>;
  lastUpdated: Date;
}

/**
 * Normalize text for searching
 * - Convert to lowercase
 * - Remove special characters
 * - Trim whitespace
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ') // Replace special chars with space
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .trim();
}

/**
 * Tokenize text into searchable terms
 */
export function tokenize(text: string): string[] {
  const normalized = normalizeText(text);
  return normalized.split(/\s+/).filter(term => term.length > 1); // Ignore single characters
}

/**
 * Calculate relevance score based on field type
 */
export function getFieldScore(field: SearchToken['field']): number {
  const scores: Record<SearchToken['field'], number> = {
    title: 10,
    reference: 8,
    excerpt: 5,
    location: 4,
    body: 3,
    publisher: 2,
    category: 6,
  };
  return scores[field];
}

/**
 * Build search index from notices
 */
export function buildSearchIndex(notices: Notice[], lang: 'en' | 'af' = 'en'): SearchIndex {
  const tokens = new Map<string, SearchToken[]>();
  const noticeIds = new Set<string>();

  for (const notice of notices) {
    noticeIds.add(notice.id);

    // Index title
    if (notice.title?.[lang]) {
      const titleTokens = tokenize(notice.title[lang]);
      titleTokens.forEach(term => {
        if (!tokens.has(term)) {
          tokens.set(term, []);
        }
        tokens.get(term)!.push({
          term,
          noticeId: notice.id,
          field: 'title',
          score: getFieldScore('title'),
        });
      });
    }

    // Index excerpt
    if (notice.excerpt?.[lang]) {
      const excerptTokens = tokenize(notice.excerpt[lang]);
      excerptTokens.forEach(term => {
        if (!tokens.has(term)) {
          tokens.set(term, []);
        }
        tokens.get(term)!.push({
          term,
          noticeId: notice.id,
          field: 'excerpt',
          score: getFieldScore('excerpt'),
        });
      });
    }

    // Index body
    if (notice.body?.[lang]) {
      const bodyTokens = tokenize(notice.body[lang]);
      bodyTokens.forEach(term => {
        if (!tokens.has(term)) {
          tokens.set(term, []);
        }
        tokens.get(term)!.push({
          term,
          noticeId: notice.id,
          field: 'body',
          score: getFieldScore('body'),
        });
      });
    }

    // Index location
    if (notice.location) {
      const locationTokens = tokenize(notice.location);
      locationTokens.forEach(term => {
        if (!tokens.has(term)) {
          tokens.set(term, []);
        }
        tokens.get(term)!.push({
          term,
          noticeId: notice.id,
          field: 'location',
          score: getFieldScore('location'),
        });
      });
    }

    // Index reference number
    if (notice.referenceNumber) {
      const refTokens = tokenize(notice.referenceNumber);
      refTokens.forEach(term => {
        if (!tokens.has(term)) {
          tokens.set(term, []);
        }
        tokens.get(term)!.push({
          term,
          noticeId: notice.id,
          field: 'reference',
          score: getFieldScore('reference'),
        });
      });
    }

    // Index publisher
    if (notice.publisher) {
      const publisherTokens = tokenize(notice.publisher);
      publisherTokens.forEach(term => {
        if (!tokens.has(term)) {
          tokens.set(term, []);
        }
        tokens.get(term)!.push({
          term,
          noticeId: notice.id,
          field: 'publisher',
          score: getFieldScore('publisher'),
        });
      });
    }

    // Index category
    if (notice.category) {
      const categoryTokens = tokenize(notice.category);
      categoryTokens.forEach(term => {
        if (!tokens.has(term)) {
          tokens.set(term, []);
        }
        tokens.get(term)!.push({
          term,
          noticeId: notice.id,
          field: 'category',
          score: getFieldScore('category'),
        });
      });
    }
  }

  return {
    tokens,
    noticeIds,
    lastUpdated: new Date(),
  };
}

/**
 * Search the index for matching notices
 */
export function searchIndex(
  index: SearchIndex,
  query: string
): Map<string, number> {
  const queryTerms = tokenize(query);
  const scores = new Map<string, number>();

  for (const term of queryTerms) {
    // Exact match
    if (index.tokens.has(term)) {
      const matches = index.tokens.get(term)!;
      matches.forEach(match => {
        const currentScore = scores.get(match.noticeId) || 0;
        scores.set(match.noticeId, currentScore + match.score);
      });
    }

    // Partial match (prefix search)
    for (const [indexTerm, matches] of index.tokens.entries()) {
      if (indexTerm.startsWith(term) && indexTerm !== term) {
        matches.forEach(match => {
          const currentScore = scores.get(match.noticeId) || 0;
          // Partial matches get 70% of the score
          scores.set(match.noticeId, currentScore + (match.score * 0.7));
        });
      }
    }
  }

  return scores;
}

/**
 * Get search suggestions based on partial input
 */
export function getSuggestions(
  index: SearchIndex,
  partialQuery: string,
  limit: number = 5
): string[] {
  const normalized = normalizeText(partialQuery);
  const suggestions = new Set<string>();

  for (const term of index.tokens.keys()) {
    if (term.startsWith(normalized) && term.length > normalized.length) {
      suggestions.add(term);
      if (suggestions.size >= limit) break;
    }
  }

  return Array.from(suggestions);
}

/**
 * Get popular search terms
 */
export function getPopularTerms(index: SearchIndex, limit: number = 10): string[] {
  const termFrequency = new Map<string, number>();

  for (const [term, tokens] of index.tokens.entries()) {
    termFrequency.set(term, tokens.length);
  }

  return Array.from(termFrequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([term]) => term);
}
