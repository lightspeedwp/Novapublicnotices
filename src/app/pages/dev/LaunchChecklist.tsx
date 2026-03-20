import { Link } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { useHero } from "../../hooks/useHero";
import {
  CheckCircle,
  XCircle,
  Circle,
  FileText,
  Palette,
  CreditCard,
  GlobeHemisphereWest,
  ShieldCheck,
  Users,
  Rocket,
  Article,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import "../../../styles/dev-tools.css";

export default function LaunchChecklist() {
  const heroData = useHero('dev-launch', 'en');

  const checklistSections = [
    {
      id: "content",
      title: "Content and copy",
      icon: Article,
      priority: "critical",
      items: [
        {
          item: "Final approved 'About us' page text",
          status: "pending",
          note: "Must be approved by legal and marketing",
        },
        {
          item: "Privacy policy document (POPIA compliant)",
          status: "pending",
          note: "Required by law before launch",
        },
        {
          item: "Terms and conditions document",
          status: "pending",
          note: "Must include liability disclaimers",
        },
        {
          item: "All page headings and descriptions finalized",
          status: "pending",
          note: "English and Afrikaans versions",
        },
        {
          item: "FAQ content reviewed and approved",
          status: "complete",
          note: "Already implemented with 19 questions",
        },
        {
          item: "Help page content approved",
          status: "complete",
          note: "Already implemented",
        },
        {
          item: "Email templates for user notifications",
          status: "pending",
          note: "Welcome, submission confirmation, approval, rejection emails",
        },
      ],
    },
    {
      id: "branding",
      title: "Branding and design",
      icon: Palette,
      priority: "critical",
      items: [
        {
          item: "Official logo files (SVG, PNG, favicon)",
          status: "pending",
          note: "Need high-resolution versions for all sizes",
        },
        {
          item: "Brand colors confirmed",
          status: "complete",
          note: "Primary #09082f, Accent #d70025",
        },
        {
          item: "Brand fonts confirmed",
          status: "complete",
          note: "Lexend, Inter, Raleway",
        },
        {
          item: "Social media preview images",
          status: "pending",
          note: "Open Graph and Twitter Card images",
        },
        {
          item: "Print-friendly notice templates",
          status: "pending",
          note: "For PDF generation and printing",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact information",
      icon: EnvelopeSimple,
      priority: "critical",
      items: [
        {
          item: "General enquiries email address",
          status: "pending",
          note: "E.g., info@novanews.co.za",
        },
        {
          item: "Support email address",
          status: "pending",
          note: "E.g., support@novanews.co.za",
        },
        {
          item: "Sales email address",
          status: "pending",
          note: "E.g., sales@novanews.co.za",
        },
        {
          item: "Phone number (with area code)",
          status: "pending",
          note: "Must be staffed during business hours",
        },
        {
          item: "Physical address",
          status: "pending",
          note: "For contact page and footer",
        },
        {
          item: "Office hours",
          status: "pending",
          note: "E.g., Monday-Friday, 8:00-17:00",
        },
        {
          item: "Social media account URLs",
          status: "pending",
          note: "Facebook, Twitter, LinkedIn, Instagram",
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing and payments",
      icon: CreditCard,
      priority: "critical",
      items: [
        {
          item: "Final pricing structure confirmed",
          status: "pending",
          note: "Digital-only, print+digital, bulk discounts",
        },
        {
          item: "PayFast merchant account credentials",
          status: "pending",
          note: "Merchant ID and Merchant Key",
        },
        {
          item: "PayFast passphrase",
          status: "pending",
          note: "For secure payment integration",
        },
        {
          item: "VAT registration number",
          status: "pending",
          note: "Required for tax invoices",
        },
        {
          item: "Banking details for EFT payments",
          status: "pending",
          note: "Bank name, account number, branch code",
        },
        {
          item: "Refund policy finalized",
          status: "pending",
          note: "When and how refunds are processed",
        },
      ],
    },
    {
      id: "users",
      title: "Users and access",
      icon: Users,
      priority: "high",
      items: [
        {
          item: "List of moderator accounts to create",
          status: "pending",
          note: "Names, emails, permission levels",
        },
        {
          item: "Admin user credentials decided",
          status: "pending",
          note: "Super admin account details",
        },
        {
          item: "User registration workflow confirmed",
          status: "pending",
          note: "Open registration or approval required?",
        },
        {
          item: "Email verification requirements",
          status: "pending",
          note: "Should users verify email before access?",
        },
        {
          item: "Password reset workflow approved",
          status: "pending",
          note: "Self-service or admin-assisted?",
        },
      ],
    },
    {
      id: "technical",
      title: "Technical setup",
      icon: GlobeHemisphereWest,
      priority: "critical",
      items: [
        {
          item: "Domain name confirmed",
          status: "pending",
          note: "E.g., novanews.co.za/notices",
        },
        {
          item: "WordPress hosting access",
          status: "pending",
          note: "FTP, cPanel, or hosting dashboard credentials",
        },
        {
          item: "Database access credentials",
          status: "pending",
          note: "MySQL database name, user, password",
        },
        {
          item: "SSL certificate installed",
          status: "pending",
          note: "HTTPS required for payment processing",
        },
        {
          item: "Email server/SMTP credentials",
          status: "pending",
          note: "For sending system emails",
        },
        {
          item: "Backup system configured",
          status: "pending",
          note: "Daily automated backups",
        },
        {
          item: "Analytics tracking codes",
          status: "pending",
          note: "Google Analytics, Meta Pixel, etc.",
        },
      ],
    },
    {
      id: "notices",
      title: "Notice categories and data",
      icon: FileText,
      priority: "high",
      items: [
        {
          item: "Category list reviewed and approved",
          status: "complete",
          note: "25 categories already defined",
        },
        {
          item: "Category-specific fields finalized",
          status: "complete",
          note: "Field schema already implemented",
        },
        {
          item: "Existing notices to import (if any)",
          status: "pending",
          note: "Provide CSV, database export, or Pongrass access",
        },
        {
          item: "Notice reference number format",
          status: "pending",
          note: "E.g., 'EST-2026-001' or custom format",
        },
        {
          item: "Default notice expiry rules",
          status: "pending",
          note: "How long notices remain published",
        },
      ],
    },
    {
      id: "moderation",
      title: "Moderation workflow",
      icon: ShieldCheck,
      priority: "high",
      items: [
        {
          item: "Moderation team roles assigned",
          status: "pending",
          note: "Who reviews what types of notices?",
        },
        {
          item: "Moderation turnaround SLA defined",
          status: "pending",
          note: "E.g., '24-48 hours for standard notices'",
        },
        {
          item: "Rejection email templates",
          status: "pending",
          note: "What to say when rejecting a notice",
        },
        {
          item: "Approval checklist created",
          status: "pending",
          note: "What moderators must verify before approving",
        },
        {
          item: "Emergency/priority notice workflow",
          status: "pending",
          note: "Fast-track process for urgent notices",
        },
      ],
    },
    {
      id: "legal",
      title: "Legal and compliance",
      icon: ShieldCheck,
      priority: "critical",
      items: [
        {
          item: "POPIA compliance reviewed",
          status: "pending",
          note: "Privacy policy and data handling procedures",
        },
        {
          item: "Cookie consent banner configured",
          status: "pending",
          note: "GDPR/POPIA compliance",
        },
        {
          item: "Terms of service legally reviewed",
          status: "pending",
          note: "Must protect both organization and users",
        },
        {
          item: "Disclaimers and liability statements",
          status: "pending",
          note: "Legal protection for user-generated content",
        },
        {
          item: "Notice retention policy defined",
          status: "pending",
          note: "How long notices must be stored",
        },
        {
          item: "PAIA/PAJA compliance checked",
          status: "pending",
          note: "If applicable to your organization",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing and quality assurance",
      icon: CheckCircle,
      priority: "high",
      items: [
        {
          item: "Test notice submissions completed",
          status: "pending",
          note: "Test every category and workflow",
        },
        {
          item: "Payment testing completed",
          status: "pending",
          note: "Test PayFast sandbox integration",
        },
        {
          item: "Email delivery tested",
          status: "pending",
          note: "Verify all system emails arrive correctly",
        },
        {
          item: "Mobile responsiveness checked",
          status: "complete",
          note: "Already tested on all breakpoints",
        },
        {
          item: "Accessibility testing completed",
          status: "pending",
          note: "WCAG 2.1 AA compliance verification",
        },
        {
          item: "Browser compatibility tested",
          status: "pending",
          note: "Chrome, Safari, Firefox, Edge",
        },
        {
          item: "Load testing completed",
          status: "pending",
          note: "Ensure site handles expected traffic",
        },
      ],
    },
    {
      id: "launch",
      title: "Launch preparation",
      icon: Rocket,
      priority: "critical",
      items: [
        {
          item: "Launch date set",
          status: "pending",
          note: "Coordinate with marketing and stakeholders",
        },
        {
          item: "Staff training completed",
          status: "pending",
          note: "Moderators and support staff know the system",
        },
        {
          item: "Launch announcement prepared",
          status: "pending",
          note: "Email, social media, press release",
        },
        {
          item: "Support documentation finalized",
          status: "pending",
          note: "Internal guides and external help docs",
        },
        {
          item: "Rollback plan prepared",
          status: "pending",
          note: "What to do if something goes wrong",
        },
        {
          item: "Monitoring and alerts configured",
          status: "pending",
          note: "Uptime monitoring, error tracking",
        },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle weight="fill" className="wpn-dev-checklist__status-icon wpn-dev-checklist__status-icon--complete" />;
      case "pending":
        return <Circle weight="regular" className="wpn-dev-checklist__status-icon wpn-dev-checklist__status-icon--pending" />;
      case "blocked":
        return <XCircle weight="fill" className="wpn-dev-checklist__status-icon wpn-dev-checklist__status-icon--blocked" />;
      default:
        return <Circle weight="regular" className="wpn-dev-checklist__status-icon" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    return (
      <span className={`wpn-dev-checklist__priority wpn-dev-checklist__priority--${priority}`}>
        {priority}
      </span>
    );
  };

  // Calculate progress
  const totalItems = checklistSections.reduce((sum, section) => sum + section.items.length, 0);
  const completedItems = checklistSections.reduce(
    (sum, section) => sum + section.items.filter(item => item.status === "complete").length,
    0
  );
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  return (
    <Layout lang="en" showAds={false}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      {/* Checklist */}
      <div className="wpn-dev-checklist">
        <div className="wpn-dev-checklist__container">
          {/* Progress Summary */}
          <div className="wpn-dev-checklist__progress">
            <div className="wpn-dev-checklist__progress-header">
              <h2 className="wpn-dev-checklist__progress-title">
                Launch progress
              </h2>
              <div className="wpn-dev-checklist__progress-stats">
                <span className="wpn-dev-checklist__progress-stat">
                  {completedItems} of {totalItems} items complete
                </span>
                <span className="wpn-dev-checklist__progress-percent">
                  {progressPercent}%
                </span>
              </div>
            </div>
            <div className="wpn-dev-checklist__progress-bar">
              <div 
                className="wpn-dev-checklist__progress-bar-fill" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Intro */}
          <div className="wpn-dev-checklist__intro">
            <p className="wpn-dev-checklist__intro-text">
              This checklist covers everything we need from you to complete the prototype and prepare for launch.
              Items marked <strong>critical</strong> must be provided before launch.
            </p>
          </div>

          {/* Checklist Sections */}
          {checklistSections.map((section, idx) => {
            const Icon = section.icon;
            const sectionComplete = section.items.filter(i => i.status === "complete").length;
            const sectionTotal = section.items.length;
            const sectionPercent = Math.round((sectionComplete / sectionTotal) * 100);

            return (
              <section key={section.id} className="wpn-dev-checklist__section">
                <div className="wpn-dev-checklist__section-header">
                  <div className="wpn-dev-checklist__section-icon-wrapper">
                    <Icon weight="duotone" className="wpn-dev-checklist__section-icon" />
                  </div>
                  <div className="wpn-dev-checklist__section-header-text">
                    <div className="wpn-dev-checklist__section-title-row">
                      <h2 className="wpn-dev-checklist__section-title">
                        {idx + 1}. {section.title}
                      </h2>
                      {getPriorityBadge(section.priority)}
                    </div>
                    <div className="wpn-dev-checklist__section-progress">
                      {sectionComplete} of {sectionTotal} complete ({sectionPercent}%)
                    </div>
                  </div>
                </div>

                <div className="wpn-dev-checklist__items">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className={`wpn-dev-checklist__item wpn-dev-checklist__item--${item.status}`}>
                      <div className="wpn-dev-checklist__item-checkbox">
                        {getStatusIcon(item.status)}
                      </div>
                      <div className="wpn-dev-checklist__item-content">
                        <h3 className="wpn-dev-checklist__item-title">
                          {item.item}
                        </h3>
                        <p className="wpn-dev-checklist__item-note">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <div className="wpn-dev-checklist__cta">
            <Rocket weight="duotone" className="wpn-dev-checklist__cta-icon" />
            <h3 className="wpn-dev-checklist__cta-title">
              Ready to provide this information?
            </h3>
            <p className="wpn-dev-checklist__cta-description">
              Fill out the client questionnaire to provide all the details we need for launch.
            </p>
            <Link 
              to="/dev/client-questionnaire" 
              className="wpn-dev-checklist__button wpn-dev-checklist__button--primary"
            >
              <FileText weight="fill" />
              Open client questionnaire
            </Link>
          </div>

          {/* Back Link */}
          <div className="wpn-dev-checklist__footer">
            <Link to="/dev" className="wpn-dev-checklist__back-link">
              ← Back to dev tools
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
