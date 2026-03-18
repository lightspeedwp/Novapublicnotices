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
      <section className="wpn-hero">
        <div className="wpn-hero__container">
          <div className="max-w-4xl mx-auto">
            <h1 className="wpn-hero__title">
              Suid-Afrika se Regskennisgewings Gids
            </h1>
            <p className="wpn-hero__subtitle">
              Soek, ontdek en publiseer wetlik vereiste regskennisgewings vinnig en
              doeltreffend. U betroubare bron vir tenders, boedels, lisensies, en meer.
            </p>
            <div className="wpn-hero__actions">
              <Button
                size="lg"
                className="wpn-button wpn-button--lg wpn-button--accent"
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
                className="wpn-button wpn-button--lg wpn-button--white"
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
      <section className="py-8 bg-muted">
        <div className="wpn-container">
          <SearchFilterBar lang="af" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="wpn-container">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">
              Blaai volgens Kategorie
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  to={`/af/kategorie/${cat.slug}`}
                  className="wpn-category-card"
                >
                  <div className="wpn-category-card__icon">
                    <Icon />
                  </div>
                  <div>
                    <CategoryBadge category={cat.slug} className="mb-2" />
                    <p className="wpn-category-card__count">{cat.count} kennisgewings</p>
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
      <section className="py-12 bg-muted">
        <div className="wpn-container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="wpn-section-header__title">
              Onlangs Gepubliseer
            </h2>
            <Button variant="outline" className="wpn-button wpn-button--outline" asChild>
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
        <div className="wpn-container">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">
              Hoe Regskennisgewings Werk
            </h2>
            <p className="wpn-section-header__subtitle">
              Of u nou soek na kennisgewings of een moet publiseer, ons maak die proses
              eenvoudig en volgbaar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="wpn-step">
              <div className="wpn-step__icon">
                <Search />
              </div>
              <h3 className="wpn-step__title">Soek Kennisgewings</h3>
              <p className="wpn-step__description">
                Gebruik ons gevorderde soek- en filtreringsfunksies om spesifieke regskennisgewings te vind volgens kategorie, ligging, of datum.
              </p>
            </div>

            <div className="wpn-step">
              <div className="wpn-step__icon">
                <Upload />
              </div>
              <h3 className="wpn-step__title">Dien U Kennisgewing In</h3>
              <p className="wpn-step__description">
                Dien kennisgewings aanlyn in deur ons geleide vorm. Alle indiening word hersien voor publikasie.
              </p>
            </div>

            <div className="wpn-step">
              <div className="wpn-step__icon">
                <CheckCircle />
              </div>
              <h3 className="wpn-step__title">Word Gepubliseer</h3>
              <p className="wpn-step__description">
                Sodra goedgekeur, gaan u kennisgewing lewendig en word soekbaar. Laai bewys van publikasie enige tyd af.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="wpn-feature">
              <Clock className="wpn-feature__icon" />
              <h4 className="wpn-feature__title">Vinnige Ommekeer</h4>
              <p className="wpn-feature__description">
                Meeste kennisgewings word binne 48 uur na indiening en betaling hersien en gepubliseer.
              </p>
            </div>

            <div className="wpn-feature">
              <Shield className="wpn-feature__icon" />
              <h4 className="wpn-feature__title">Wetlik Volgbaar</h4>
              <p className="wpn-feature__description">
                Alle kennisgewings voldoen aan Suid-Afrikaanse wetlike publikasievereistes en word vir voldoening geargiveer.
              </p>
            </div>

            <div className="wpn-feature">
              <HeadphonesIcon className="wpn-feature__icon" />
              <h4 className="wpn-feature__title">Kundige Ondersteuning</h4>
              <p className="wpn-feature__description">
                Benodig hulp? Ons verkoopspan kan met komplekse kennisgewings of massa-indienings help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wpn-cta-section">
        <div className="wpn-cta-section__container">
          <h2 className="wpn-cta-section__title">
            Moet u 'n Regskennisgewing Publiseer?
          </h2>
          <p className="wpn-cta-section__description max-w-2xl mx-auto">
            Begin met ons eenvoudige selfbediening-indieningsproses, of kontak ons verkoopspan vir hulp met druk- en digitale pakkette.
          </p>
          <div className="wpn-cta-section__actions">
            <Button
              size="lg"
              className="wpn-button wpn-button--lg wpn-button--accent"
              asChild
            >
              <Link to="/af/indien">Dien Kennisgewing Aanlyn In</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="wpn-button wpn-button--lg wpn-button--white"
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