import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import Layout from "../components/Layout";
import SearchFilterBar from "../components/SearchFilterBar";
import NoticeCard from "../components/NoticeCard";
import AdSlot from "../components/AdSlot";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { searchNotices, SearchFilters } from "../lib/search";

export default function SearchResultsAF() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  // Extract filters from URL params
  const filters: SearchFilters = {
    query: searchParams.get("q") || "",
    category: searchParams.get("category") || "all",
    location: searchParams.get("location") || "all",
    dateFrom: searchParams.get("dateFrom") || undefined,
    dateTo: searchParams.get("dateTo") || undefined,
    status: searchParams.get("status") || "all",
  };

  // Perform search
  const allResults = searchNotices(filters, "af");
  const totalResults = allResults.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  // Paginate results
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedResults = allResults.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <Layout lang="af" showAds={true}>
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-6">
            Soek Regskennisgewings
          </h1>

          <SearchFilterBar lang="af" showResults={true} resultCount={totalResults} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Results */}
            <div className="lg:col-span-2">
              {paginatedResults.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {paginatedResults.map((notice) => (
                    <NoticeCard
                      key={notice.id}
                      id={notice.id}
                      title={notice.title.af}
                      category={notice.category}
                      publishDate={notice.publishDate}
                      location={notice.location}
                      referenceNumber={notice.referenceNumber}
                      excerpt={notice.excerpt.af}
                      publisher={notice.publisher}
                      lang="af"
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-card border border-border rounded-lg p-12 text-center">
                  <p className="text-muted-foreground mb-4">
                    Geen kennisgewings gevind wat by u soektogte pas nie.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Probeer om u filters of soekterm aan te pas.
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="transition-colors duration-150"
                  >
                    <ChevronLeft className="size-4" />
                  </Button>
                  
                  {getPaginationItems().map((page, index) => (
                    <Button
                      key={index}
                      variant={page === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => typeof page === "number" && handlePageChange(page)}
                      disabled={page === "..."}
                      className={
                        page === currentPage
                          ? "bg-[#09082f] hover:bg-[#09082f]/90 transition-colors duration-150"
                          : "transition-colors duration-150"
                      }
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="transition-colors duration-150"
                  >
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AdSlot slot="ad_sidebar_1" height={250} />
              <AdSlot slot="ad_sidebar_2" height={250} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
