import { Link } from "react-router";
import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Users, Target, TrendingUp, Globe, Award, BarChart, Home } from "lucide-react";
import "../../styles/components.css";

export default function Advertise() {
  return (
    <Layout lang="en" showAds={true}>
      {/* Page Header */}
      <section className="wpn-page-header">
        <div className="wpn-page-header__container">
          {/* Breadcrumb */}
          <nav className="wpn-breadcrumb" aria-label="Breadcrumb">
            <ol className="wpn-breadcrumb__list">
              <li className="wpn-breadcrumb__item">
                <Link to="/" className="wpn-breadcrumb__link">
                  <Home className="wpn-breadcrumb__icon" />
                  Home
                </Link>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__separator">/</span>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__current">Advertise with us</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title">
            Advertise with Nova News public notices
          </h1>
          <p className="wpn-page-header__subtitle">
            Reach South Africa's legal and business professionals through our trusted public notices platform
          </p>
        </div>
      </section>

      {/* Why Advertise Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center mb-12">
            Why Advertise on Nova News Public Notices?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Targeted Audience</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Reach legal professionals, business owners, and decision-makers actively searching for public notices and legal information.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">High Intent Traffic</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Our visitors are actively seeking specific legal notices, creating a highly engaged audience for your message.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Growing Platform</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Part of the Novus Media network, reaching thousands of readers across South Africa daily.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">National Reach</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Bilingual platform (English/Afrikaans) covering all provinces and major metropolitan areas.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Trusted Brand</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Nova News is a established media brand trusted by legal professionals and businesses nationwide.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Detailed Analytics</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Track your campaign performance with comprehensive analytics and reporting tools.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Advertising Options Section */}
      <div className="py-16 bg-[var(--muted)]">
        <div className="container mx-auto px-4">
          <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center mb-12">
            Advertising Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="wpn-heading-h3 wpn-heading--primary mb-4">Display Advertising</h3>
              <ul className="space-y-3 text-[var(--foreground)]">
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Banner ads in multiple sizes and formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Strategic placement on high-traffic pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Category-specific targeting options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Geographic targeting by province or city</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Flexible CPM or CPC pricing models</span>
                </li>
              </ul>
              <Button className="w-full mt-6 wpn-button wpn-button--accent" asChild>
                <Link to="/contact">Inquire About Display Ads</Link>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="wpn-heading-h3 wpn-heading--primary mb-4">Sponsored Content</h3>
              <ul className="space-y-3 text-[var(--foreground)]">
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Featured notice placements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Priority listing in search-results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Newsletter sponsorship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Category page sponsorships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Exclusive positioning options</span>
                </li>
              </ul>
              <Button className="w-full mt-6 wpn-button wpn-button--accent" asChild>
                <Link to="/contact">Inquire About Sponsorships</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Novus Media Network Section */}
      <div className="py-16 wpn-bg--primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="wpn-heading-h2 wpn-heading--white mb-6">
              Part of the Novus Media Network
            </h2>
            <p className="text-white/80 text-lg mb-8">
              When you advertise with Nova News Public Notices, you gain access to the entire Novus Media network 
              of digital properties, reaching diverse audiences across South Africa's digital media landscape.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="wpn-heading-h2 wpn-text--accent">500K+</div>
                <div className="text-sm text-white/60">Monthly Readers</div>
              </div>
              <div>
                <div className="wpn-heading-h2 wpn-text--accent">15+</div>
                <div className="text-sm text-white/60">Digital Properties</div>
              </div>
              <div>
                <div className="wpn-heading-h2 wpn-text--accent">9</div>
                <div className="text-sm text-white/60">Provinces Covered</div>
              </div>
              <div>
                <div className="wpn-heading-h2 wpn-text--accent">2</div>
                <div className="text-sm text-white/60">Official Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-12 max-w-3xl mx-auto text-center bg-gradient-to-br from-[var(--muted)] to-white">
            <h2 className="wpn-heading-h2 wpn-heading--primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[var(--foreground)] mb-8">
              Contact our advertising team today to discuss how we can help you reach your target audience 
              through the Nova News Public Notices platform and the broader Novus Media network.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="wpn-button wpn-button--accent" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Media Kit</Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-[var(--border-color-light)]">
              <p className="text-sm text-[var(--muted-foreground)]">
                For advertising inquiries: <a href="mailto:advertising@novanews.co.za" className="wpn-link--accent">advertising@novanews.co.za</a>
                <br />
                Phone: <a href="tel:+27123456789" className="wpn-link--accent">012 345 6789</a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}