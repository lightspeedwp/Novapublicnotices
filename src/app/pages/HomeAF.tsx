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

export default function HomeAF() {
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
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#09082f] to-[#1a1849] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-raleway text-4xl md:text-5xl font-bold mb-4">
              Suid-Afrika se Regskennisgewings Gids
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Soek, ontdek en publiseer wetlik vereiste regskennisgewings vinnig en
              doeltreffend. U betroubare bron vir tenders, boedels, lisensies, en meer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#d70025] hover:bg-[#b5001f] text-white text-lg px-8"
                asChild
              >
                <Link to="/af/soek">
                  <Search className="mr-2 size-5" />
                  Soek Kennisgewings
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#09082f] hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link to="/af/indien">
                  <Upload className="mr-2 size-5" />
                  Dien 'n Kennisgewing In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <SearchFilterBar lang="af" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-8 text-center">
            Blaai volgens Kategorie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  to={`/af/kategorie/${cat.slug}`}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#09082f] hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#09082f] transition-colors">
                      <Icon className="size-6 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <CategoryBadge category={cat.slug} lang="af" className="mb-2" />
                      <p className="text-sm text-gray-600">{cat.count} kennisgewings</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Top Ad Slot */}
          <AdSlot slot="ad_top_leaderboard" height={90} label="Advertensie" />
        </div>
      </section>

      {/* Recent Notices */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-raleway text-3xl font-bold text-[#09082f]">
              Onlangs Gepubliseer
            </h2>
            <Button variant="outline" asChild>
              <Link to="/af/soek">
                Sien Alles
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNotices.map((notice) => (
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-4 text-center">
            Hoe Regskennisgewings Werk
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Of u soek vir kennisgewings of moet een publiseer, ons maak die proses eenvoudig en volgbaar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="size-16 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4">
                <Search className="size-8" />
              </div>
              <h3 className="font-raleway font-semibold text-xl mb-2">Soek Kennisgewings</h3>
              <p className="text-gray-600">
                Gebruik ons gevorderde soek- en filtreringsfunksies om spesifieke regskennisgewings te vind volgens kategorie, ligging, of datum.
              </p>
            </div>

            <div className="text-center">
              <div className="size-16 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4">
                <Upload className="size-8" />
              </div>
              <h3 className="font-raleway font-semibold text-xl mb-2">Dien U Kennisgewing In</h3>
              <p className="text-gray-600">
                Dien kennisgewings aanlyn in deur ons geleide vorm. Alle indiening word hersien voor publikasie.
              </p>
            </div>

            <div className="text-center">
              <div className="size-16 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="size-8" />
              </div>
              <h3 className="font-raleway font-semibold text-xl mb-2">Word Gepubliseer</h3>
              <p className="text-gray-600">
                Sodra goedgekeur, gaan u kennisgewing lewendig en word soekbaar. Laai bewys van publikasie enige tyd af.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <Clock className="size-8 text-[#d70025] mb-3" />
              <h4 className="font-semibold text-lg mb-2">Vinnige Ommekeer</h4>
              <p className="text-sm text-gray-600">
                Meeste kennisgewings word binne 48 uur na indiening en betaling hersien en gepubliseer.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <Shield className="size-8 text-[#d70025] mb-3" />
              <h4 className="font-semibold text-lg mb-2">Wetlik Volgbaar</h4>
              <p className="text-sm text-gray-600">
                Alle kennisgewings voldoen aan Suid-Afrikaanse wetlike publikasievereistes en word geargiveer vir nakoming.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <HeadphonesIcon className="size-8 text-[#d70025] mb-3" />
              <h4 className="font-semibold text-lg mb-2">Kundige Ondersteuning</h4>
              <p className="text-sm text-gray-600">
                Het u hulp nodig? Ons verkoopspan kan help met komplekse kennisgewings of grootmaat indiening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#09082f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl font-bold mb-4">
            Moet u 'n Regskennisgewing Publiseer?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Begin met ons eenvoudige selfbediening-indieningsproses, of kontak ons verkoopspan vir hulp met druk- en digitale pakkette.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#d70025] hover:bg-[#b5001f] text-white"
              asChild
            >
              <Link to="/af/indien">Dien Kennisgewing Aanlyn In</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-[#09082f] hover:bg-gray-100"
              asChild
            >
              <Link to="/af/verkope">Praat met Verkope</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
