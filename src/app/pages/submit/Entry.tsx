import { Link } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { heroesEN } from "../../data/heroes/heroes.en";
import CategoryBadge from "../../components/CategoryBadge";
import AdSlot from "../../components/AdSlot";
import { 
  FileText, 
  Building, 
  Scale, 
  Home as HomeIcon,
  TreePine,
  Briefcase,
  Wine,
  MapPin,
  Users,
  ArrowRight,
  Phone,
  HelpCircle as Question
} from "lucide-react";
import "../../../styles/submit-entry.css";

export default function Entry() {
  const categories = [
    {
      slug: "tender",
      icon: Briefcase,
      title: "Tenders",
      description: "Government and municipal procurement opportunities",
      commonUses: ["RFPs", "Bids", "Government contracts"],
    },
    {
      slug: "estate",
      icon: Scale,
      title: "Estates",
      description: "Deceased estate notices and creditor notifications",
      commonUses: ["Executor notices", "Creditor claims", "Distribution"],
    },
    {
      slug: "liquor-licence",
      icon: Wine,
      title: "Liquor licences",
      description: "Liquor licence applications and renewals",
      commonUses: ["New applications", "Transfers", "Renewals"],
    },
    {
      slug: "town-planning",
      icon: Building,
      title: "Town planning",
      description: "Rezoning and land use applications",
      commonUses: ["Rezoning", "Land use", "Development"],
    },
    {
      slug: "business-licence",
      icon: FileText,
      title: "Business licences",
      description: "Commercial and professional licence applications",
      commonUses: ["Permits", "Registrations", "Trade licences"],
    },
    {
      slug: "general",
      icon: FileText,
      title: "General notices",
      description: "Other legal and public notices",
      commonUses: ["Lost documents", "Name changes", "Other notices"],
    },
  ];

  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      <Hero data={heroesEN.submitNoticeEntry} lang="en" />

      {/* Notice Type Selection */}
      <div className="wpn-submit-entry">
        <section className="wpn-submit-entry__section wpn-submit-entry__section--white">
          <div className="wpn-submit-entry__container">
            <div className="wpn-section-header">
              <h2 className="wpn-section-header__title">
                Select notice type
              </h2>
              <p className="wpn-section-header__subtitle">
                Click on the category that matches your notice requirements
              </p>
            </div>

            <div className="wpn-submit-entry__grid">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.slug} className="wpn-submit-category-card">
                    <Link
                      to={`/submit/${category.slug}`}
                      className="wpn-submit-category-card__link"
                    >
                      <div className="wpn-submit-category-card__header">
                        <div className="wpn-submit-category-card__icon">
                          <Icon />
                        </div>
                        <div className="wpn-submit-category-card__content">
                          <h3 className="wpn-submit-category-card__title">
                            {category.title}
                          </h3>
                          <p className="wpn-submit-category-card__description">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="wpn-submit-category-card__meta">
                        <p className="wpn-submit-category-card__meta-label">Common uses:</p>
                        <div className="wpn-submit-category-card__tags">
                          {category.commonUses.map((use, idx) => (
                            <span key={idx} className="wpn-submit-category-card__tag">
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="wpn-submit-category-card__footer">
                        <span>Submit {category.title.toLowerCase()}</span>
                        <ArrowRight className="wpn-submit-category-card__arrow" />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Help Section */}
            <div className="wpn-submit-help">
              <div className="wpn-submit-help__content">
                <Question className="wpn-submit-help__icon" />
                <div className="wpn-submit-help__body">
                  <h3 className="wpn-submit-help__title">
                    Not sure which category to choose?
                  </h3>
                  <p className="wpn-submit-help__description">
                    Our team is here to help you select the right notice type and guide you through the submission process.
                  </p>
                  <div className="wpn-submit-help__actions">
                    <Link to="/contact" className="wpn-button wpn-button--accent">
                      <Phone />
                      Contact sales team
                    </Link>
                    <Link to="/sales" className="wpn-button wpn-button--outline">
                      Learn more about notices
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="wpn-submit-entry__section wpn-submit-entry__section--muted">
          <div className="wpn-submit-entry__container">
            <div className="wpn-section-header">
              <h2 className="wpn-section-header__title">
                How submission works
              </h2>
            </div>

            <div className="wpn-submit-steps">
              <div className="wpn-submit-step">
                <div className="wpn-submit-step__badge">1</div>
                <h3 className="wpn-submit-step__title">
                  Fill out form
                </h3>
                <p className="wpn-submit-step__description">
                  Complete our guided form with your notice details and upload any required documents.
                </p>
              </div>

              <div className="wpn-submit-step">
                <div className="wpn-submit-step__badge">2</div>
                <h3 className="wpn-submit-step__title">
                  Review & pay
                </h3>
                <p className="wpn-submit-step__description">
                  Review your notice, select publication options, and complete secure payment.
                </p>
              </div>

              <div className="wpn-submit-step">
                <div className="wpn-submit-step__badge">3</div>
                <h3 className="wpn-submit-step__title">
                  Moderation & publishing
                </h3>
                <p className="wpn-submit-step__description">
                  Our team reviews your notice for compliance and publishes it within 24-48 hours.
                </p>
              </div>
            </div>

            <div className="wpn-submit-info">
              <p className="wpn-submit-info__text">
                <strong>Important:</strong> All submitted notices undergo moderation before publication to ensure legal compliance and accuracy. You'll receive email updates at each stage of the process.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Ad Slot */}
      <AdSlot type="leaderboard" />

      {/* Need Help CTA */}
      <section className="wpn-cta-section">
        <div className="wpn-cta-section__container">
          <h2 className="wpn-cta-section__title">
            Need assistance with your submission?
          </h2>
          <p className="wpn-cta-section__description">
            Our sales team can help you prepare and submit your notice, or answer any questions about the process.
          </p>
          <div className="wpn-cta-section__actions">
            <Link to="/sales" className="wpn-button wpn-button--lg wpn-button--white">
              <Phone />
              Talk to sales
            </Link>
            <Link to="/faq" className="wpn-button wpn-button--lg wpn-button--outline-inverse">
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}