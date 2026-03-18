import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import NoticeCard from "../components/NoticeCard";
import AdSlot from "../components/AdSlot";
import { CategoryGrid } from "../components/CategoryCard";
import { getAllCategoriesWithCounts } from "../data/categories/categories-data";
import { Button } from "../components/ui/button";
import {
  FileText,
  MagnifyingGlass,
  UploadSimple,
  CheckCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
  Headphones,
} from "@phosphor-icons/react";
import { getRecentNotices } from "../data/notices/allCategories";
import { useHero } from "../hooks/useHero";
import "../../styles/home.css";

export default function Home() {
  const heroData = useHero('home', 'en');
  const recentNotices = getRecentNotices(6);
  
  // Get categories with content dynamically (filter out categories with 0 notices)
  const categories = getAllCategoriesWithCounts()
    .filter(cat => cat.count > 0)
    .slice(0, 9); // Top 9 categories with content

  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      {/* Categories Section */}
      <section className="wpn-section--md">
        <div className="wpn-container">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">
              Browse by category
            </h2>
            <p className="wpn-section-header__subtitle">
              Explore public notices organized by type - from estates and tenders to liquor licences and town planning
            </p>
          </div>
          
          <CategoryGrid 
            categories={categories} 
            language="en"
            columns={3}
          />

          {/* Top Ad Slot */}
          <div className="mt-12">
            <AdSlot slot="ad_top_leaderboard" height={90} label="Advertisement" />
          </div>
        </div>
      </section>

      {/* Recent Notices */}
      <section className="wpn-section--md wpn-section--muted">
        <div className="wpn-container">
          <div className="wpn-section-header--flex">
            <h2 className="wpn-section-header__title">
              Recently Published
            </h2>
            <Button variant="outline" className="wpn-button wpn-button--outline" asChild>
              <Link to="/search">
                View All
                <ArrowRight className="wpn-button__icon--trailing" />
              </Link>
            </Button>
          </div>

          <div className="wpn-grid--3col wpn-gap-lg">
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
      <section className="wpn-section">
        <div className="wpn-container">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">
              How Public Notices Work
            </h2>
            <p className="wpn-section-header__subtitle">
              Whether you're searching for notices or need to publish one, we make the process
              simple and compliant.
            </p>
          </div>

          <div className="wpn-grid--3col wpn-gap-xl wpn-mb-12">
            <div className="wpn-step">
              <div className="wpn-step__icon">
                <MagnifyingGlass />
              </div>
              <h3 className="wpn-step__title">Search Notices</h3>
              <p className="wpn-step__description">
                Use our advanced search and filtering to find specific public notices by
                category, location, or date.
              </p>
            </div>

            <div className="wpn-step">
              <div className="wpn-step__icon">
                <UploadSimple />
              </div>
              <h3 className="wpn-step__title">Submit Your Notice</h3>
              <p className="wpn-step__description">
                Submit notices online through our guided form. All submissions are reviewed
                before publication.
              </p>
            </div>

            <div className="wpn-step">
              <div className="wpn-step__icon">
                <CheckCircle />
              </div>
              <h3 className="wpn-step__title">Get Published</h3>
              <p className="wpn-step__description">
                Once approved, your notice goes live and becomes searchable. Download proof
                of publication anytime.
              </p>
            </div>
          </div>

          <div className="wpn-grid--3col wpn-gap-lg">
            <div className="wpn-feature">
              <Clock className="wpn-feature__icon" />
              <h4 className="wpn-feature__title">Fast Turnaround</h4>
              <p className="wpn-feature__description">
                Most notices are reviewed and published within 48 hours of submission and
                payment.
              </p>
            </div>

            <div className="wpn-feature">
              <ShieldCheck className="wpn-feature__icon" />
              <h4 className="wpn-feature__title">Legally Compliant</h4>
              <p className="wpn-feature__description">
                All notices meet South African legal publication requirements and are
                archived for compliance.
              </p>
            </div>

            <div className="wpn-feature">
              <Headphones className="wpn-feature__icon" />
              <h4 className="wpn-feature__title">Expert Support</h4>
              <p className="wpn-feature__description">
                Need help? Our sales team can assist with complex notices or bulk
                submissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wpn-cta-section wpn-cta-section--spaced">
        <div className="wpn-cta-section__container">
          <h2 className="wpn-cta-section__title">
            Need to Publish a Public Notice?
          </h2>
          <p className="wpn-cta-section__description wpn-cta-section__description--narrow">
            Get started with our simple self-service submission process, or contact our sales
            team for assistance with print and digital packages.
          </p>
          <div className="wpn-cta-section__actions">
            <Button
              size="lg"
              className="wpn-button wpn-button--lg wpn-button--accent"
              asChild
            >
              <Link to="/submit">Submit Notice Online</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="wpn-button wpn-button--lg wpn-button--white"
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