import { useState } from "react";
import { useParams, Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import StatsBlock from "../components/StatsBlock";
import NoticeGrid from "../components/NoticeGrid";
import AdSlot from "../components/AdSlot";
import { Button } from "../components/ui/button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { getNoticesByCategory } from "../lib/search";
import { generateCategoryStatsData } from "../lib/noticeHelpers";
import { getCategoryBySlug } from "../data/categories";
import type { HeroData } from "../data/heroes/types";
import "../../styles/components.css";
import "../../styles/category-archive.css";

export default function CategoryArchiveAF() {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 12;

  // Get category configuration
  const category = getCategoryBySlug(slug || "");
  const lang = "af";

  // Filter notices by category
  const categoryNotices = getNoticesByCategory(slug || "", lang);

  const totalResults = categoryNotices.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  // Paginate results
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedNotices = categoryNotices.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate pagination items
  const getPaginationItems = () => {
    const items: (number | string)[] = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      items.push(1);
      
      if (currentPage > 3) {
        items.push("...");
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        items.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        items.push("...");
      }
      
      items.push(totalPages);
    }
    
    return items;
  };

  // Get category name from data (or fallback to slug formatting)
  const categoryName = category?.name[lang] || slug
    ?.split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ") || "";

  // Generate category stats
  const categoryStats = generateCategoryStatsData(slug || "", lang);

  // Create Hero data with optional category-specific overrides
  const heroData: HeroData = {
    title: `${categoryName} kennisgewings`,
    description: category?.heroDescription?.[lang] || 
                 `Blaai deur alle ${categoryName.toLowerCase()} openbare kennisgewings. Daagliks bygewerk met nuwe kennisgewings van regoor Suid-Afrika.`,
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Kategorieë', href: '/af/soek' },
      { label: categoryName },
    ],
    size: category?.heroSize || 'md',
    alignment: 'left',
    layout: category?.heroLayout || 'default',
  };

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      <Hero data={heroData} lang="af" />

      {/* Stats Block */}
      <section className="wpn-section--sm wpn-section--muted">
        <div className="wpn-container">
          <StatsBlock stats={categoryStats} showIcons={true} />
        </div>
      </section>

      {/* Main Content */}
      <div className="wpn-container wpn-results-layout">
        <div className="wpn-results-layout__main">
          {paginatedNotices.length > 0 ? (
            <>
              <NoticeGrid 
                notices={paginatedNotices} 
                lang="af"
                columns={3}
              />

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="wpn-pagination">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="wpn-pagination__button"
                  >
                    <CaretLeft />
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
                          ? "wpn-pagination__button wpn-pagination__button--active"
                          : "wpn-pagination__button"
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
                    className="wpn-pagination__button"
                  >
                    <CaretRight />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="wpn-empty-state">
              <p className="wpn-empty-state__title">
                Geen kennisgewings in hierdie kategorie gevind nie.
              </p>
              <div className="wpn-mt-4">
                <Button variant="outline" className="wpn-button wpn-button--outline" asChild>
                  <Link to="/af/soek">Blaai Alle Kategorieë</Link>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="wpn-results-layout__sidebar">
          <div className="wpn-results-layout__sidebar-inner">
            <AdSlot slot="ad_sidebar_1" height={250} />
            <AdSlot slot="ad_sidebar_2" height={250} />
          </div>
        </aside>
      </div>
    </Layout>
  );
}