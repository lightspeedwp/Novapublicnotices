/**
 * Nova Public Notices Portal - No Results Component
 * 
 * Displays when search/filter yields no results
 * Provides helpful suggestions and actions
 */

import { Button } from './ui/button';
import { Card } from './ui/card';
import { SearchX, Filter, RotateCcw, HelpCircle } from 'lucide-react';

interface NoResultsProps {
  searchQuery?: string;
  appliedFilters?: string[];
  onClearFilters?: () => void;
  onClearSearch?: () => void;
  onResetAll?: () => void;
  language?: 'en' | 'af';
}

export function NoResults({
  searchQuery,
  appliedFilters = [],
  onClearFilters,
  onClearSearch,
  onResetAll,
  language = 'en'
}: NoResultsProps) {
  const hasFilters = appliedFilters.length > 0;
  const hasSearch = searchQuery && searchQuery.trim().length > 0;
  
  const content = {
    en: {
      title: 'No results found',
      subtitle: hasSearch || hasFilters 
        ? 'Try adjusting your search or filters'
        : 'No notices match your criteria',
      suggestions: {
        title: 'Suggestions:',
        items: [
          'Check your spelling',
          'Use different keywords',
          'Remove some filters',
          'Try a broader date range',
          'Search in a wider location area'
        ]
      },
      buttons: {
        clearSearch: 'Clear search',
        clearFilters: 'Clear filters',
        resetAll: 'Reset all',
        viewAll: 'View all notices',
        help: 'Search help'
      }
    },
    af: {
      title: 'Geen resultate gevind nie',
      subtitle: hasSearch || hasFilters
        ? 'Probeer u soektog of filters aanpas'
        : 'Geen kennisgewings pas u kriteria nie',
      suggestions: {
        title: 'Voorstelle:',
        items: [
          'Kontroleer u spelling',
          'Gebruik verskillende sleutelwoorde',
          'Verwyder sommige filters',
          'Probeer \'n wyer datumreeks',
          'Soek in \'n wyer liggingsarea'
        ]
      },
      buttons: {
        clearSearch: 'Maak soektog skoon',
        clearFilters: 'Maak filters skoon',
        resetAll: 'Stel alles terug',
        viewAll: 'Bekyk alle kennisgewings',
        help: 'Soek hulp'
      }
    }
  };
  
  const t = content[language];
  
  return (
    <div className="py-16">
      <Card className="p-12 text-center">
        {/* Icon */}
        <div className="wpn-icon-badge wpn-icon-badge--lg wpn-bg--muted mx-auto mb-6">
          <SearchX className="wpn-icon-badge__icon text-[var(--muted-foreground)]" />
        </div>
        
        {/* Title */}
        <h2 className="wpn-heading-h3 wpn-heading--primary mb-3">
          {t.title}
        </h2>
        
        {/* Subtitle */}
        <p className="text-[var(--muted-foreground)] text-lg mb-8">
          {t.subtitle}
        </p>
        
        {/* Active Search/Filters Display */}
        {(hasSearch || hasFilters) && (
          <div className="mb-8 p-4 rounded-lg bg-[var(--muted)] border border-[var(--border)]">
            {hasSearch && (
              <div className="mb-3">
                <span className="text-sm font-medium wpn-text--muted">Search query:</span>
                <div className="mt-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--border)] ml-3">
                  <span className="text-sm wpn-text--primary">{searchQuery}</span>
                  {onClearSearch && (
                    <button
                      onClick={onClearSearch}
                      className="text-[var(--muted-foreground)] hover:text-[var(--destructive)] transition-colors"
                      aria-label={language === 'en' ? 'Clear search' : 'Maak soektog skoon'}
                    >
                      <RotateCcw className="size-3" />
                    </button>
                  )}
                </div>
              </div>
            )}
            
            {hasFilters && (
              <div>
                <span className="text-sm font-medium wpn-text--muted">
                  {language === 'en' ? 'Active filters:' : 'Aktiewe filters:'}
                </span>
                <div className="mt-2 flex flex-wrap gap-2 justify-center">
                  {appliedFilters.map((filter, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--border)] text-sm wpn-text--primary"
                    >
                      <Filter className="size-3" />
                      {filter}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Suggestions */}
        <div className="mb-8 text-left max-w-md mx-auto">
          <h3 className="wpn-heading-h5 wpn-heading--primary mb-3">
            {t.suggestions.title}
          </h3>
          <ul className="space-y-2">
            {t.suggestions.items.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-2 text-[var(--muted-foreground)]">
                <span className="wpn-text--accent mt-0.5">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {hasSearch && onClearSearch && (
            <Button
              onClick={onClearSearch}
              variant="outline"
              className="wpn-button wpn-button--outline"
            >
              <RotateCcw className="size-4 mr-2" />
              {t.buttons.clearSearch}
            </Button>
          )}
          
          {hasFilters && onClearFilters && (
            <Button
              onClick={onClearFilters}
              variant="outline"
              className="wpn-button wpn-button--outline"
            >
              <Filter className="size-4 mr-2" />
              {t.buttons.clearFilters}
            </Button>
          )}
          
          {(hasSearch || hasFilters) && onResetAll && (
            <Button
              onClick={onResetAll}
              className="wpn-button wpn-button--accent"
            >
              <RotateCcw className="size-4 mr-2" />
              {t.buttons.resetAll}
            </Button>
          )}
          
          {!hasSearch && !hasFilters && (
            <>
              <Button
                onClick={() => window.location.href = language === 'en' ? '/search' : '/af/soek'}
                className="wpn-button wpn-button--accent"
              >
                {t.buttons.viewAll}
              </Button>
              
              <Button
                onClick={() => window.location.href = language === 'en' ? '/help' : '/af/hulp'}
                variant="outline"
                className="wpn-button wpn-button--outline"
              >
                <HelpCircle className="size-4 mr-2" />
                {t.buttons.help}
              </Button>
            </>
          )}
        </div>
        
        {/* Help Text */}
        <p className="text-sm text-[var(--muted-foreground)] mt-8">
          {language === 'en' 
            ? 'Need help finding a specific notice? ' 
            : 'Benodig u hulp om \'n spesifieke kennisgewing te vind? '}
          <a 
            href={language === 'en' ? '/help' : '/af/hulp'}
            className="wpn-text--accent hover:underline font-medium"
          >
            {language === 'en' ? 'Contact support' : 'Kontak ondersteuning'}
          </a>
        </p>
      </Card>
    </div>
  );
}
