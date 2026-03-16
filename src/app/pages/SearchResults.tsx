import Layout from "../components/Layout";
import SearchFilterBar from "../components/SearchFilterBar";
import NoticeCard from "../components/NoticeCard";
import AdSlot from "../components/AdSlot";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sampleNotices } from "../data/sampleNotices";

export default function SearchResults() {
  const notices = sampleNotices;
  const currentPage = 1;
  const totalPages = 12;
  const resultCount = notices.length;

  return (
    <Layout lang="en" showAds={true}>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-6">
            Search Public Notices
          </h1>

          <SearchFilterBar lang="en" showResults={true} resultCount={resultCount} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Results */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-4">
                {notices.map((notice) => (
                  <NoticeCard
                    key={notice.id}
                    id={notice.id}
                    title={notice.title.en}
                    category={notice.category}
                    publishDate={notice.publishDate}
                    location={notice.location}
                    referenceNumber={notice.referenceNumber}
                    excerpt={notice.excerpt.en}
                    publisher={notice.publisher}
                    lang="en"
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <Button variant="outline" size="sm" disabled={currentPage === 1}>
                  <ChevronLeft className="size-4" />
                </Button>
                {[1, 2, 3, "...", totalPages - 1, totalPages].map((page, index) => (
                  <Button
                    key={index}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    className={
                      page === currentPage
                        ? "bg-[#09082f] hover:bg-[#09082f]/90"
                        : ""
                    }
                    disabled={page === "..."}
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="sm" disabled={currentPage === totalPages}>
                  <ChevronRight className="size-4" />
                </Button>
              </div>
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
