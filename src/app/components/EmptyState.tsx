/**
 * Empty State Component
 * 
 * Displays contextual empty state messages for search results
 * with helpful suggestions and actions
 */

import { MagnifyingGlass, Funnel, FileX, WarningCircle, ArrowsClockwise } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import "../../styles/empty-state.css";

export interface EmptyStateProps {
  type: "no-results" | "no-filters" | "error" | "no-data";
  query?: string;
  filters?: {
    category?: string;
    location?: string;
    dateFrom?: string;
    dateTo?: string;
    status?: string;
    publisher?: string;
    referenceNumber?: string;
  };
  onClearFilters?: () => void;
  onRetry?: () => void;
  lang?: "en" | "af";
}

export default function EmptyState({
  type,
  query,
  filters,
  onClearFilters,
  onRetry,
  lang = "en",
}: EmptyStateProps) {
  const t = {
    en: {
      noResults: {
        title: "No notices found",
        subtitle: "We couldn't find any notices matching your search criteria",
        suggestions: "Try these suggestions:",
        checkSpelling: "Check your spelling or try different keywords",
        broaderSearch: "Use broader search terms",
        clearFilters: "Remove some filters to expand your search",
        browseCategories: "Browse all categories",
        contactSupport: "Contact support if you need help",
      },
      noFilters: {
        title: "Start your search",
        subtitle: "Enter keywords or apply filters to find public notices",
        placeholder: "Search by keyword, reference number, or location...",
        popularSearches: "Popular searches:",
        allCategories: "Browse all categories",
      },
      error: {
        title: "Something went wrong",
        subtitle: "We're having trouble loading the search results",
        tryAgain: "Try again",
        contactSupport: "Contact support",
        errorDetails: "If this problem persists, please contact our support team",
      },
      noData: {
        title: "No notices available",
        subtitle: "There are currently no public notices in this category",
        checkBack: "Please check back later for new notices",
        browseOther: "Browse other categories",
      },
      actions: {
        clearFilters: "Clear all filters",
        tryAgain: "Try again",
        browseCategories: "Browse categories",
        contactUs: "Contact us",
        goHome: "Go to homepage",
      },
      searchTips: {
        title: "Search tips:",
        tip1: "Use specific keywords from the notice you're looking for",
        tip2: "Search by reference number for exact matches",
        tip3: "Filter by location to narrow down provincial notices",
        tip4: "Use date ranges to find recent or historical notices",
      },
    },
    af: {
      noResults: {
        title: "Geen kennisgewings gevind nie",
        subtitle: "Ons kon geen kennisgewings vind wat by jou soekriteria pas nie",
        suggestions: "Probeer hierdie voorstelle:",
        checkSpelling: "Gaan jou spelling na of probeer ander sleutelwoorde",
        broaderSearch: "Gebruik breër soekterme",
        clearFilters: "Verwyder sommige filters om jou soektog uit te brei",
        browseCategories: "Blaai deur alle kategorieë",
        contactSupport: "Kontak ondersteuning as jy hulp benodig",
      },
      noFilters: {
        title: "Begin jou soektog",
        subtitle: "Voer sleutelwoorde in of pas filters toe om openbare kennisgewings te vind",
        placeholder: "Soek volgens sleutelwoord, verwysingsnommer, of ligging...",
        popularSearches: "Gewilde soektogte:",
        allCategories: "Blaai deur alle kategorieë",
      },
      error: {
        title: "Iets het verkeerd geloop",
        subtitle: "Ons ondervind probleme om die soekresultate te laai",
        tryAgain: "Probeer weer",
        contactSupport: "Kontak ondersteuning",
        errorDetails: "As hierdie probleem voortduur, kontak asseblief ons ondersteuningspan",
      },
      noData: {
        title: "Geen kennisgewings beskikbaar nie",
        subtitle: "Daar is tans geen openbare kennisgewings in hierdie kategorie nie",
        checkBack: "Gaan asseblief later terug vir nuwe kennisgewings",
        browseOther: "Blaai deur ander kategorieë",
      },
      actions: {
        clearFilters: "Maak alle filters skoon",
        tryAgain: "Probeer weer",
        browseCategories: "Blaai kategorieë",
        contactUs: "Kontak ons",
        goHome: "Gaan na tuisblad",
      },
      searchTips: {
        title: "Soek wenke:",
        tip1: "Gebruik spesifieke sleutelwoorde van die kennisgewing wat jy soek",
        tip2: "Soek volgens verwysingsnommer vir presiese resultate",
        tip3: "Filtreer volgens ligging om provinsiale kennisgewings te beperk",
        tip4: "Gebruik datumreekse om onlangse of historiese kennisgewings te vind",
      },
    },
  };

  const text = t[lang];

  // Determine active filter count
  const activeFilterCount = filters
    ? Object.values(filters).filter((v) => v && v !== "all").length
    : 0;

  const hasQuery = query && query.trim().length > 0;

  // Render based on type
  switch (type) {
    case "no-results":
      return (
        <div className="wpn-empty-state">
          <div className="wpn-empty-state__container">
            <div className="wpn-empty-state__icon wpn-empty-state__icon--search">
              <FileX className="wpn-empty-state__icon-svg" />
            </div>

            <h2 className="wpn-empty-state__title">{text.noResults.title}</h2>
            <p className="wpn-empty-state__subtitle">{text.noResults.subtitle}</p>

            {(hasQuery || activeFilterCount > 0) && (
              <div className="wpn-empty-state__query-info">
                {hasQuery && (
                  <div className="wpn-empty-state__query-text">
                    {lang === "en" ? "Searched for:" : "Gesoek vir:"}{" "}
                    <span className="wpn-empty-state__query-highlight">"{query}"</span>
                  </div>
                )}
                {activeFilterCount > 0 && (
                  <div className="wpn-empty-state__filter-count">
                    {activeFilterCount} {lang === "en" ? "filters applied" : "filters toegepas"}
                  </div>
                )}
              </div>
            )}

            <div className="wpn-empty-state__suggestions">
              <h3 className="wpn-empty-state__suggestions-title">
                {text.noResults.suggestions}
              </h3>
              <ul className="wpn-empty-state__suggestions-list">
                <li className="wpn-empty-state__suggestion-item">
                  {text.noResults.checkSpelling}
                </li>
                <li className="wpn-empty-state__suggestion-item">
                  {text.noResults.broaderSearch}
                </li>
                {activeFilterCount > 0 && (
                  <li className="wpn-empty-state__suggestion-item">
                    {text.noResults.clearFilters}
                  </li>
                )}
                <li className="wpn-empty-state__suggestion-item">
                  {text.noResults.browseCategories}
                </li>
              </ul>
            </div>

            <div className="wpn-empty-state__search-tips">
              <h3 className="wpn-empty-state__search-tips-title">
                <WarningCircle className="wpn-empty-state__search-tips-icon" />
                {text.searchTips.title}
              </h3>
              <ul className="wpn-empty-state__search-tips-list">
                <li>{text.searchTips.tip1}</li>
                <li>{text.searchTips.tip2}</li>
                <li>{text.searchTips.tip3}</li>
                <li>{text.searchTips.tip4}</li>
              </ul>
            </div>

            <div className="wpn-empty-state__actions">
              {onClearFilters && (
                <Button
                  variant="outline"
                  onClick={onClearFilters}
                  className="wpn-button wpn-button--outline"
                >
                  <Funnel className="wpn-empty-state__button-icon" />
                  {text.actions.clearFilters}
                </Button>
              )}
              <Button className="wpn-button wpn-button--primary" asChild>
                <Link to="/">{text.actions.browseCategories}</Link>
              </Button>
            </div>
          </div>
        </div>
      );

    case "error":
      return (
        <div className="wpn-empty-state wpn-empty-state--error">
          <div className="wpn-empty-state__container">
            <div className="wpn-empty-state__icon wpn-empty-state__icon--error">
              <WarningCircle className="wpn-empty-state__icon-svg" />
            </div>

            <h2 className="wpn-empty-state__title">{text.error.title}</h2>
            <p className="wpn-empty-state__subtitle">{text.error.subtitle}</p>

            <p className="wpn-empty-state__error-details">{text.error.errorDetails}</p>

            <div className="wpn-empty-state__actions">
              {onRetry && (
                <Button
                  onClick={onRetry}
                  className="wpn-button wpn-button--accent"
                >
                  <ArrowsClockwise className="wpn-empty-state__button-icon" />
                  {text.actions.tryAgain}
                </Button>
              )}
              <Button variant="outline" className="wpn-button wpn-button--outline" asChild>
                <Link to="/contact">{text.actions.contactUs}</Link>
              </Button>
            </div>
          </div>
        </div>
      );

    case "no-data":
      return (
        <div className="wpn-empty-state">
          <div className="wpn-empty-state__container">
            <div className="wpn-empty-state__icon wpn-empty-state__icon--info">
              <MagnifyingGlass className="wpn-empty-state__icon-svg" />
            </div>

            <h2 className="wpn-empty-state__title">{text.noData.title}</h2>
            <p className="wpn-empty-state__subtitle">{text.noData.subtitle}</p>

            <p className="wpn-empty-state__check-back">{text.noData.checkBack}</p>

            <div className="wpn-empty-state__actions">
              <Button className="wpn-button wpn-button--primary" asChild>
                <Link to="/">{text.actions.browseCategories}</Link>
              </Button>
            </div>
          </div>
        </div>
      );

    case "no-filters":
    default:
      return (
        <div className="wpn-empty-state wpn-empty-state--start">
          <div className="wpn-empty-state__container">
            <div className="wpn-empty-state__icon wpn-empty-state__icon--start">
              <MagnifyingGlass className="wpn-empty-state__icon-svg" />
            </div>

            <h2 className="wpn-empty-state__title">{text.noFilters.title}</h2>
            <p className="wpn-empty-state__subtitle">{text.noFilters.subtitle}</p>

            <div className="wpn-empty-state__actions">
              <Button className="wpn-button wpn-button--primary" asChild>
                <Link to="/">{text.actions.goHome}</Link>
              </Button>
            </div>
          </div>
        </div>
      );
  }
}