import { Link } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { useHero } from "../../hooks/useHero";
import {
  ClipboardText,
  Rocket,
  CheckCircle,
  ArrowRight,
  Info,
} from "@phosphor-icons/react";
import "../../../styles/dev-tools.css";

export default function DevIndex() {
  const heroData = useHero('dev', 'en');

  const tools = [
    {
      id: "questionnaire",
      title: "Client questionnaire",
      description: "Comprehensive questionnaire to gather all project requirements and client details before finalization.",
      icon: ClipboardText,
      href: "/dev/client-questionnaire",
      features: [
        "75 detailed questions",
        "12 organized sections",
        "Non-technical language",
        "Export functionality",
      ],
      badge: "Essential",
      badgeVariant: "critical" as const,
    },
    {
      id: "checklist",
      title: "Launch checklist",
      description: "Track launch readiness with a comprehensive checklist covering all requirements from content to technical setup.",
      icon: Rocket,
      href: "/dev/launch-checklist",
      features: [
        "66 checklist items",
        "11 priority sections",
        "Progress tracking",
        "Status indicators",
      ],
      badge: "Required",
      badgeVariant: "high" as const,
    },
  ];

  return (
    <Layout lang="en" showAds={false}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      {/* Dev Tools */}
      <div className="wpn-dev-index">
        <div className="wpn-dev-index__container">
          {/* Intro */}
          <div className="wpn-dev-index__intro">
            <div className="wpn-dev-index__intro-icon-wrapper">
              <Info weight="duotone" className="wpn-dev-index__intro-icon" />
            </div>
            <div className="wpn-dev-index__intro-content">
              <h2 className="wpn-dev-index__intro-title">
                Development tools for project finalization
              </h2>
              <p className="wpn-dev-index__intro-text">
                These tools help us gather all necessary information from you to complete the Nova Public Notices Portal prototype 
                and prepare for WordPress migration. Please complete both the questionnaire and review the launch checklist.
              </p>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="wpn-dev-index__grid">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.id} className="wpn-dev-index__card">
                  <div className="wpn-dev-index__card-header">
                    <div className="wpn-dev-index__card-icon-wrapper">
                      <Icon weight="duotone" className="wpn-dev-index__card-icon" />
                    </div>
                    <span className={`wpn-dev-index__badge wpn-dev-index__badge--${tool.badgeVariant}`}>
                      {tool.badge}
                    </span>
                  </div>

                  <div className="wpn-dev-index__card-content">
                    <h3 className="wpn-dev-index__card-title">
                      {tool.title}
                    </h3>
                    <p className="wpn-dev-index__card-description">
                      {tool.description}
                    </p>

                    <ul className="wpn-dev-index__features">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="wpn-dev-index__feature">
                          <CheckCircle weight="fill" className="wpn-dev-index__feature-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wpn-dev-index__card-footer">
                    <Link to={tool.href} className="wpn-dev-index__button">
                      Open {tool.title.toLowerCase()}
                      <ArrowRight weight="bold" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Box */}
          <div className="wpn-dev-index__info-box">
            <h3 className="wpn-dev-index__info-title">
              Why these tools?
            </h3>
            <div className="wpn-dev-index__info-grid">
              <div className="wpn-dev-index__info-item">
                <h4 className="wpn-dev-index__info-item-title">
                  Reduce back-and-forth
                </h4>
                <p className="wpn-dev-index__info-item-text">
                  Capture all requirements upfront to minimize delays and miscommunication during development.
                </p>
              </div>
              <div className="wpn-dev-index__info-item">
                <h4 className="wpn-dev-index__info-item-title">
                  Track progress
                </h4>
                <p className="wpn-dev-index__info-item-text">
                  Clear visibility into what's needed and what's complete helps everyone stay aligned on launch readiness.
                </p>
              </div>
              <div className="wpn-dev-index__info-item">
                <h4 className="wpn-dev-index__info-item-title">
                  Ensure completeness
                </h4>
                <p className="wpn-dev-index__info-item-text">
                  Comprehensive coverage of all aspects ensures nothing is missed before WordPress migration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
