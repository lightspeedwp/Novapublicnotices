# Expand Hooks — Custom Hook Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand hooks`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Analyze codebase for repeated logic patterns that should be extracted into reusable custom React hooks.

**Reference:** `/guidelines/wordpress-component-architecture.md`

---

## Scope

Identifies opportunities for:
- Reusable state management hooks
- API/data fetching hooks
- Browser API wrapper hooks
- Form handling hooks
- UI interaction hooks
- Utility hooks

---

## Hook Categories to Analyze

### 1. State Management Hooks

**Common patterns:**
- `useLocalStorage` — Persist state to localStorage with sync
- `useSessionStorage` — Persist state to sessionStorage
- `useToggle` — Boolean toggle state management
- `useCounter` — Counter state with increment/decrement/reset
- `usePrevious` — Track previous value of state/prop
- `useHistoryState` — State with undo/redo capability

### 2. Data Fetching Hooks

**Common patterns:**
- `useNotices` — Fetch notice data with filters/pagination
- `useCategories` — Fetch category data
- `useSearch` — Search functionality with debounce
- `usePagination` — Pagination state and logic
- `useInfiniteScroll` — Infinite scroll with intersection observer
- `useAsync` — Generic async operation handler

### 3. Browser API Hooks

**Common patterns:**
- `useMediaQuery` — Responsive breakpoint detection
- `useWindowSize` — Window dimensions tracking
- `useClickOutside` — Detect clicks outside element
- `useIntersectionObserver` — Element visibility detection
- `useScrollPosition` — Track scroll position
- `useClipboard` — Copy to clipboard
- `useGeolocation` — Access user location
- `useNetworkStatus` — Online/offline detection

### 4. Form Hooks

**Common patterns:**
- `useForm` — Form state and validation
- `useFormField` — Individual field state and validation
- `useFileUpload` — File upload with progress
- `useFormPersistence` — Auto-save form to localStorage
- `useFormValidation` — Validation with error messages

### 5. UI Interaction Hooks

**Common patterns:**
- `useDebounce` — Debounce value changes
- `useThrottle` — Throttle function calls
- `useHover` — Track hover state
- `useFocus` — Track focus state
- `useKeyPress` — Keyboard shortcut handling
- `useDisclosure` — Modal/drawer open/close state
- `useToast` — Toast notification management

### 6. Utility Hooks

**Common patterns:**
- `useIsMounted` — Check if component is mounted
- `useTimeout` — setTimeout with cleanup
- `useInterval` — setInterval with cleanup
- `useEventListener` — addEventListener with cleanup
- `useUpdateEffect` — useEffect that skips first render
- `useLockBodyScroll` — Prevent body scroll (modals)

---

## Analysis Process

### Step 1: Scan for Repeated Patterns

**Search for:**
```tsx
// LocalStorage usage
localStorage.getItem
localStorage.setItem

// Event listeners
window.addEventListener
document.addEventListener

// Media queries
window.matchMedia

// Debounce/throttle logic
setTimeout
setInterval

// Form state management
const [value, setValue] = useState('')
const [error, setError] = useState('')

// API calls
fetch(
.then(
.catch(
```

### Step 2: Identify Duplicate Logic

**Check for:**
- Same localStorage pattern in multiple components
- Same event listener setup/cleanup in multiple files
- Same debounce logic repeated
- Same form validation patterns
- Same async/loading/error state management

### Step 3: Analyze Current Hooks

**Check `/src/app/hooks/` directory:**
```
/src/app/hooks/
  ├─ useHero.ts          ✓ Exists
  ├─ useLocalStorage.ts  ? Check if exists
  ├─ useDebounce.ts      ? Check if exists
  └─ ...
```

### Step 4: Identify Missing Essential Hooks

**Essential hooks for public notices portal:**
- `useNoticeSearch` — Search with filters, debounce, pagination
- `useAuth` — Authentication state and actions
- `useLocale` — Language state and switching
- `useFilters` — Filter state management for search/archives
- `usePagination` — Pagination logic
- `useNoticeSubmission` — Notice submission workflow state

---

## Report Format

Generate: `/reports/YYYY-MM-DD-hook-recommendations.md`

```markdown
# Custom Hook Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Files Analyzed:** {number}  
**Hook Opportunities Identified:** {number}  
**Priority Hooks to Create:** {number}

---

## Executive Summary

Analyzed component logic and identified {N} opportunities for custom hooks. Currently have {N} hooks, recommend creating {N} additional hooks for better reusability and cleaner components.

**Top Priorities:**
1. {Hook name} — Used in {N} places
2. {Hook name} — Repeated logic across {N} components
3. {Hook name} — Missing but essential for {use case}

---

## Current Hook Inventory

### Existing Hooks
- ✅ useHero — `/hooks/useHero.ts`
- ❌ useLocalStorage — Not found
- ❌ useDebounce — Not found
- ❌ useMediaQuery — Not found

### Hooks in Components (Should Extract)
- ⚠️ localStorage logic in SearchResults.tsx
- ⚠️ debounce logic in SearchFilterBar.tsx
- ⚠️ window resize logic in Header.tsx

---

## Recommended New Hooks

### Critical Priority

#### 1. useLocalStorage

**Usage:** localStorage operations found in {N} files

**Current Issues:**
- Repeated localStorage.getItem/setItem
- No sync between tabs
- No error handling
- Manual JSON parsing

**Recommended Implementation:**

```tsx
// /hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // Get initial value from localStorage or use default
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
}
```

**Usage:**
```tsx
const [filters, setFilters] = useLocalStorage('search-filters', {});
const [recentSearches, setRecentSearches] = useLocalStorage('recent-searches', []);
```

**Files to Update:**
- SearchResults.tsx — Replace localStorage logic
- CategoryArchive.tsx — Replace filter persistence
- {List all files}

**Benefit:** Type-safe, synced, error-handled localStorage

---

#### 2. useDebounce

**Usage:** Debounce logic found in {N} files

**Current Issues:**
- Repeated setTimeout logic
- Manual cleanup
- Inconsistent debounce delays

**Recommended Implementation:**

```tsx
// /hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

**Usage:**
```tsx
const [searchQuery, setSearchQuery] = useState('');
const debouncedQuery = useDebounce(searchQuery, 300);

useEffect(() => {
  // Search with debounced value
  searchNotices(debouncedQuery);
}, [debouncedQuery]);
```

**Files to Update:**
- SearchFilterBar.tsx — Replace debounce logic
- SearchResults.tsx — Replace search debouncing

**Benefit:** Clean, reusable, consistent debouncing

---

#### 3. useMediaQuery

**Usage:** Responsive logic needed across components

**Recommended Implementation:**

```tsx
// /hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Preset breakpoint hooks
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
```

**Usage:**
```tsx
const isMobile = useIsMobile();
const isDesktop = useIsDesktop();

return (
  <div>
    {isMobile && <MobileNav />}
    {isDesktop && <DesktopNav />}
  </div>
);
```

**Benefit:** Responsive logic in JS, cleaner conditionals

---

{Continue for all recommended hooks...}

---

## Project-Specific Hooks

### useNoticeSearch

**Purpose:** Search notices with filters, sorting, pagination

```tsx
// /hooks/useNoticeSearch.ts
import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';
import { searchNotices } from '../lib/search';

interface SearchFilters {
  query?: string;
  category?: string;
  location?: string;
  dateFrom?: string;
  dateTo?: string;
}

export function useNoticeSearch(initialFilters: SearchFilters = {}) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const debouncedQuery = useDebounce(filters.query, 300);

  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const searchResults = await searchNotices({
          ...filters,
          query: debouncedQuery
        });
        setResults(searchResults);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [debouncedQuery, filters.category, filters.location, filters.dateFrom, filters.dateTo]);

  return {
    filters,
    setFilters,
    results,
    loading,
    error,
  };
}
```

---

## Hook Migration Roadmap

### Phase 1: Essential Utility Hooks (Week 1)
- [ ] Create useLocalStorage
- [ ] Create useDebounce
- [ ] Create useMediaQuery
- [ ] Migrate components using these patterns

### Phase 2: UI Interaction Hooks (Week 2)
- [ ] Create useClickOutside
- [ ] Create useDisclosure
- [ ] Create useToast
- [ ] Migrate modal/dropdown components

### Phase 3: Project-Specific Hooks (Week 3)
- [ ] Create useNoticeSearch
- [ ] Create useAuth
- [ ] Create useLocale
- [ ] Create useFilters
- [ ] Migrate search and filter components

### Phase 4: Advanced Hooks (Week 4)
- [ ] Create useIntersectionObserver
- [ ] Create useInfiniteScroll
- [ ] Create useFormValidation
- [ ] Migrate complex components

---

## Hook Best Practices

### DO ✅

- Name hooks with `use` prefix
- Return arrays for state-like hooks: `[value, setValue]`
- Return objects for complex hooks: `{ data, loading, error }`
- Add TypeScript types for all parameters and return values
- Clean up side effects in useEffect return
- Document hook purpose and usage examples
- Keep hooks focused (single responsibility)

### DON'T ❌

- Call hooks conditionally
- Call hooks in loops
- Call hooks in callbacks
- Use hooks in class components
- Create hooks that do too many things
- Forget to clean up listeners/timers/subscriptions

---

## Next Steps

1. Review hook recommendations
2. Prioritize by usage frequency
3. Create `/hooks/` directory (if not exists)
4. Implement priority hooks
5. Migrate existing logic
6. Update components
7. Test thoroughly
8. Document hook library

---

## Related Documentation

- **[wordpress-component-architecture.md](../guidelines/wordpress-component-architecture.md)** — Component architecture
- **[expand-components.md](./expand-components.md)** — Component recommendations
- **[expand-contexts.md](./expand-contexts.md)** — Context recommendations

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial custom hook expansion analysis prompt |
