import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SearchFilterBar from "../components/SearchFilterBar";
import NoticeGrid from "../components/NoticeGrid";
import EmptyState from "../components/EmptyState";
import AdSlot from "../components/AdSlot";
import { CaretLeft, CaretRight, House, FileText, Funnel } from "@phosphor-icons/react";
import { searchNotices, SearchFilters } from "../lib/searchOptimized";
import "../../styles/search-results.css";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 12;

  // Extract filters from URL params
  const filters: SearchFilters = {
    query: searchParams.get("q") || "",
    category: searchParams.get("category") || "all",
    location: searchParams.get("location") || "all",
    dateFrom: searchParams.get("dateFrom") || undefined,
    dateTo: searchParams.get("dateTo") || undefined,
    status: searchParams.get("status") || "all",
    publisher: searchParams.get("publisher") || undefined,
    referenceNumber: searchParams.get("ref") || undefined,
    sort: searchParams.get("sort") || "newest",
  };

  // Perform search
  const allResults = searchNotices(filters, "en");
  const totalResults = allResults.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  // Paginate results
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedResults = allResults.slice(startIndex, endIndex);

  // Count active filters
  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => {
    if (key === "sort") return false; // Don't count sort as a filter
    if (key === "query" && !value) return false;
    if (value === "all" || value === "" || value === undefined) return false;
    return true;
  }).length;

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearFilters = () => {
    setSearchParams({});
  };

  // Generate pagination items
  const getPaginationItems = () => {
    const items: (number | string)[] = [];
    
    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      // Always show first page
      items.push(1);
      
      if (currentPage > 3) {
        items.push("...");
      }
      
      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        items.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        items.push("...");
      }
      
      // Always show last page
      items.push(totalPages);
    }
    
    return items;
  };

  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      <Hero
        title="Search public notices"
        description={filters.query ? `Results for "${filters.query}"` : "Find the notices you're looking for"}
        size="sm"
        variant="center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Search public notices" },
        ]}
        showSearchBar={false}
      />

      {/* Main Content */}
      <div className="wpn-search-results">
        <div className="wpn-search-results__container">
          <div className="wpn-search-results__layout">
            
            {/* Main Results */}
            <div className="wpn-search-results__main">
              
              {/* Results Header */}
              <div className="wpn-search-results__header">
                <div className="wpn-search-results__header-top">
                  <h2 className="wpn-search-results__title">
                    {totalResults} {totalResults === 1 ? "result" : "results"}
                  </h2>
                </div>
                
                {filters.query && (
                  <p className="wpn-search-results__query">
                    Showing results for <span className="wpn-search-results__query-highlight">"{filters.query}"</span>
                  </p>
                )}

                <div className="wpn-search-results__meta">
                  <div className="wpn-search-results__meta-item">
                    <FileText className="wpn-search-results__meta-icon" weight="duotone" />
                    <span className="wpn-search-results__meta-value">{totalResults}</span>
                    <span>{totalResults === 1 ? "notice found" : "notices found"}</span>
                  </div>
                  
                  {currentPage > 1 && (
                    <div className="wpn-search-results__meta-item">
                      <span>Page {currentPage} of {totalPages}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Active Filters Banner */}
              {activeFiltersCount > 0 && (
                <div className="wpn-search-results__filters-banner">
                  <div className="wpn-search-results__filters-content">
                    <Funnel className="wpn-search-results__filters-icon" weight="duotone" />
                    <span className="wpn-search-results__filters-text">
                      <span className="wpn-search-results__filters-count">{activeFiltersCount}</span>
                      {activeFiltersCount === 1 ? " filter" : " filters"} applied
                    </span>
                  </div>
                  <button 
                    onClick={handleClearFilters}
                    className="wpn-search-results__filters-clear"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Search Filter Bar */}
              <SearchFilterBar lang="en" showResults={false} resultCount={totalResults} />

              {/* Results Grid or Empty State */}
              <div className="wpn-search-results__grid">
                {paginatedResults.length > 0 ? (
                  <NoticeGrid 
                    notices={paginatedResults} 
                    lang="en"
                    columns={3}
                  />
                ) : (
                  <EmptyState
                    type="no-results"
                    query={filters.query}
                    filters={{
                      category: filters.category,
                      location: filters.location,
                      dateFrom: filters.dateFrom,
                      dateTo: filters.dateTo,
                      status: filters.status,
                      publisher: filters.publisher,
                      referenceNumber: filters.referenceNumber,
                    }}
                    onClearFilters={handleClearFilters}
                    lang="en"
                  />
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && paginatedResults.length > 0 && (
                <nav className="wpn-search-results__pagination" aria-label="Pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="wpn-search-results__pagination-button"
                    aria-label="Previous page"
                  >
                    <CaretLeft size={16} weight="bold" />
                  </button>
                  
                  {getPaginationItems().map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === "number" && handlePageChange(page)}
                      disabled={page === "..."}
                      className={
                        page === currentPage
                          ? "wpn-search-results__pagination-button wpn-search-results__pagination-button--active"
                          : page === "..."
                          ? "wpn-search-results__pagination-button wpn-search-results__pagination-button--ellipsis"
                          : "wpn-search-results__pagination-button"
                      }
                      aria-label={typeof page === "number" ? `Page ${page}` : "More pages"}
                      aria-current={page === currentPage ? "page" : undefined}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="wpn-search-results__pagination-button"
                    aria-label="Next page"
                  >
                    <CaretRight size={16} weight="bold" />
                  </button>
                </nav>
              )}
            </div>

            {/* Sidebar */}
            <aside className="wpn-search-results__sidebar">
              <div className="wpn-search-results__sidebar-inner">
                <AdSlot slot="ad_sidebar_1" height={250} />
                <AdSlot slot="ad_sidebar_2" height={250} />
              </div>
            </aside>

          </div>
        </div>
      </div>
    </Layout>
  );
}