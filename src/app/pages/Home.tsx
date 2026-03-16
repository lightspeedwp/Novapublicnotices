import { Link } from "react-router";
import Layout from "../components/Layout";
import SearchFilterBar from "../components/SearchFilterBar";
import NoticeCard from "../components/NoticeCard";
import AdSlot from "../components/AdSlot";
import CategoryBadge from "../components/CategoryBadge";
import { Button } from "../components/ui/button";
import {
  FileText,
  Search,
  Upload,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  HeadphonesIcon,
} from "lucide-react";
import { sampleNotices } from "../data/sampleNotices";

export default function Home() {
  const recentNotices = sampleNotices.slice(0, 6);

  const categories = [
    { slug: "tenders", icon: FileText, count: 234 },
    { slug: "estates", icon: FileText, count: 456 },
    { slug: "liquor-licences", icon: FileText, count: 123 },
    { slug: "town-planning", icon: FileText, count: 189 },
    { slug: "business-licence", icon: FileText, count: 98 },
    { slug: "environmental", icon: FileText, count: 67 },
    { slug: "court-orders", icon: FileText, count: 145 },
    { slug: "general", icon: FileText, count: 312 },
  ];

  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#09082f] to-[#1a1849] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-raleway text-4xl md:text-5xl font-bold mb-4">
              South Africa's Public Notices Directory
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Search, discover, and publish legally required public notices quickly and
              efficiently. Your trusted source for tenders, estates, licences, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#d70025] hover:bg-[#b5001f] text-white text-lg px-8"
                asChild
              >
                <Link to="/search">
                  <Search className="mr-2 size-5" />
                  Search Notices
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#09082f] hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link to="/submit">
                  <Upload className="mr-2 size-5" />
                  Submit a Notice
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <SearchFilterBar lang="en" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#09082f] hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#09082f] transition-colors">
                      <Icon className="size-6 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <CategoryBadge category={cat.slug} className="mb-2" />
                      <p className="text-sm text-gray-600">{cat.count} notices</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Top Ad Slot */}
          <AdSlot slot="ad_top_leaderboard" height={90} label="Advertisement" />
        </div>
      </section>

      {/* Recent Notices */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-raleway text-3xl font-bold text-[#09082f]">
              Recently Published
            </h2>
            <Button variant="outline" asChild>
              <Link to="/search">
                View All
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNotices.map((notice) => (
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-4 text-center">
            How Public Notices Work
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you're searching for notices or need to publish one, we make the process
            simple and compliant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="size-16 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4">
                <Search className="size-8" />
              </div>
              <h3 className="font-raleway font-semibold text-xl mb-2">Search Notices</h3>
              <p className="text-gray-600">
                Use our advanced search and filtering to find specific public notices by
                category, location, or date.
              </p>
            </div>

            <div className="text-center">
              <div className="size-16 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4">
                <Upload className="size-8" />
              </div>
              <h3 className="font-raleway font-semibold text-xl mb-2">Submit Your Notice</h3>
              <p className="text-gray-600">
                Submit notices online through our guided form. All submissions are reviewed
                before publication.
              </p>
            </div>

            <div className="text-center">
              <div className="size-16 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="size-8" />
              </div>
              <h3 className="font-raleway font-semibold text-xl mb-2">Get Published</h3>
              <p className="text-gray-600">
                Once approved, your notice goes live and becomes searchable. Download proof
                of publication anytime.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <Clock className="size-8 text-[#d70025] mb-3" />
              <h4 className="font-semibold text-lg mb-2">Fast Turnaround</h4>
              <p className="text-sm text-gray-600">
                Most notices are reviewed and published within 48 hours of submission and
                payment.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <Shield className="size-8 text-[#d70025] mb-3" />
              <h4 className="font-semibold text-lg mb-2">Legally Compliant</h4>
              <p className="text-sm text-gray-600">
                All notices meet South African legal publication requirements and are
                archived for compliance.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <HeadphonesIcon className="size-8 text-[#d70025] mb-3" />
              <h4 className="font-semibold text-lg mb-2">Expert Support</h4>
              <p className="text-sm text-gray-600">
                Need help? Our sales team can assist with complex notices or bulk
                submissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#09082f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl font-bold mb-4">
            Need to Publish a Public Notice?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our simple self-service submission process, or contact our sales
            team for assistance with print and digital packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#d70025] hover:bg-[#b5001f] text-white"
              asChild
            >
              <Link to="/submit">Submit Notice Online</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-[#09082f] hover:bg-gray-100"
              asChild
            >
              <Link to="/sales">Speak to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
