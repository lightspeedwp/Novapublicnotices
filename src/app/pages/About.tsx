import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { useHero } from "../hooks/useHero";
import { CheckCircle, Users, Shield, TrendUp, House } from "@phosphor-icons/react";
import "../../styles/components.css";

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: CheckCircle,
    title: "Legal compliance",
    description: "Meet all statutory requirements for public notice publication"
  },
  {
    icon: Users,
    title: "Wide reach",
    description: "Access to thousands of legal professionals and interested parties"
  },
  {
    icon: Shield,
    title: "Secure & reliable",
    description: "Industry-leading security with guaranteed uptime"
  },
  {
    icon: TrendUp,
    title: "Cost effective",
    description: "Transparent pricing with no hidden fees"
  }
];

export default function About() {
  const heroData = useHero('about', 'en');

  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      {/* About Content */}
      <section className="wpn-section wpn-section--white">
        <div className="wpn-container--narrow">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">Our Mission</h2>
          </div>
          <Card className="wpn-card--bordered wpn-card--spacious">
            <div style={{ textAlign: 'center' }}>
              <FileText className="size-16 wpn-text--accent" style={{ margin: '0 auto var(--space-6)' }} />
              <p className="wpn-text-lg wpn-text--muted" style={{ lineHeight: 'var(--line-height-relaxed)' }}>
                To provide a comprehensive, accessible, and legally compliant platform for publishing public notices in South Africa. We combine traditional print publication with modern digital accessibility, ensuring legal requirements are met while making notices easily discoverable by the public.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="wpn-section wpn-section--muted">
        <div className="wpn-container">
          <div className="wpn-grid--4col wpn-gap-xl">
            {stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div className="wpn-text--accent wpn-mb-2" style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--font-weight-bold)' }}>
                  {stat.number}
                </div>
                <div className="wpn-text-sm wpn-text--muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="wpn-section wpn-section--white">
        <div className="wpn-container">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">Our Values</h2>
          </div>
          <div className="wpn-grid--2col wpn-gap-xl">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="wpn-card--bordered wpn-card--spacious">
                  <Icon className="size-12 wpn-text--accent wpn-mb-4" />
                  <h3 className="wpn-text-xl wpn-text--primary wpn-mb-4" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                    {value.title}
                  </h3>
                  <p className="wpn-text--muted">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <AdSlot variant="leaderboard" className="wpn-my-8" />

      {/* What We Do */}
      <section className="wpn-section wpn-section--muted">
        <div className="wpn-container--narrow">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">What We Do</h2>
          </div>
          <div className="wpn-list-gap-md">
            <Card className="wpn-card--bordered wpn-card--spacious">
              <h3 className="wpn-text-xl wpn-text--primary wpn-mb-4" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                Digital Publication Platform
              </h3>
              <p className="wpn-text--muted">
                We provide a modern, searchable online platform where public notices are permanently archived and easily discoverable. Our digital-first approach ensures notices are accessible 24/7 to anyone with an internet connection.
              </p>
            </Card>

            <Card className="wpn-card--bordered wpn-card--spacious">
              <h3 className="wpn-text-xl wpn-text--primary wpn-mb-4" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                Print + Digital Solutions
              </h3>
              <p className="wpn-text--muted">
                For notices requiring print publication, we coordinate placement in newspapers and provincial gazettes while simultaneously publishing online, ensuring full legal compliance and maximum reach.
              </p>
            </Card>

            <Card className="wpn-card--bordered wpn-card--spacious">
              <h3 className="wpn-text-xl wpn-text--primary wpn-mb-4" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                Professional Moderation
              </h3>
              <p className="wpn-text--muted">
                Every submitted notice undergoes professional review to ensure legal compliance, accuracy, and completeness. Our moderation process protects both publishers and the public interest.
              </p>
            </Card>

            <Card className="wpn-card--bordered wpn-card--spacious">
              <h3 className="wpn-text-xl wpn-text--primary wpn-mb-4" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                Comprehensive Support
              </h3>
              <p className="wpn-text--muted">
                Our experienced team assists with notice preparation, category selection, legal requirements, and the entire publication process from submission to publication.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wpn-cta-section">
        <div className="wpn-cta-section__container">
          <h2 className="wpn-cta-section__title">
            Ready to Publish Your Notice?
          </h2>
          <p className="wpn-cta-section__description wpn-cta-section__description--narrow">
            Join the legal professionals, businesses, and government departments who trust Nova News for their public notice requirements.
          </p>
          <div className="wpn-cta-section__actions">
            <Button size="lg" className="wpn-button wpn-button--lg wpn-button--white" asChild>
              <Link to="/submit">
                Submit a Notice
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="wpn-button wpn-button--lg wpn-button--outline-inverse" asChild>
              <Link to="/contact">
                <Phone className="mr-2 size-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}