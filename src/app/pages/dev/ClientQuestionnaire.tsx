import { Link } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { useHero } from "../../hooks/useHero";
import {
  ClipboardText,
  GlobeHemisphereWest,
  Palette,
  Users,
  CreditCard,
  ShieldCheck,
  ChartLine,
  FileText,
  EnvelopeSimple,
  Phone,
  Desktop,
  Article,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import "../../../styles/dev-tools.css";

export default function ClientQuestionnaire() {
  const heroData = useHero('dev-questionnaire', 'en');

  const questionSections = [
    {
      id: "business",
      title: "Business and brand",
      icon: Users,
      description: "Help us understand your organization and brand identity",
      questions: [
        {
          q: "What is the official legal name of your organization?",
          helper: "This will appear in legal documents and copyright notices",
        },
        {
          q: "What name should we display to the public?",
          helper: "E.g., 'Nova News' vs 'Novus Media Group (Pty) Ltd'",
        },
        {
          q: "Do you have a tagline or slogan we should include?",
          helper: "This might appear in the footer or about page",
        },
        {
          q: "What are the three main things you want visitors to know about your organization?",
          helper: "We'll feature these prominently on the homepage",
        },
        {
          q: "Who is your primary audience?",
          helper: "E.g., legal professionals, municipalities, general public, businesses",
        },
        {
          q: "What makes your public notices service different from competitors?",
          helper: "This helps us craft compelling messaging",
        },
      ],
    },
    {
      id: "branding",
      title: "Visual identity",
      icon: Palette,
      description: "Ensure the portal matches your brand",
      questions: [
        {
          q: "Have you approved the current brand colors?",
          helper: "Primary: #09082f (dark navy), Accent: #d70025 (red)",
        },
        {
          q: "Do you have an official logo file we should use?",
          helper: "We need SVG, PNG (high-res), and favicon versions",
        },
        {
          q: "Are there any brand colors we shouldn't use?",
          helper: "Some brands restrict certain color combinations",
        },
        {
          q: "Do you have brand guidelines or a style guide?",
          helper: "This helps us stay consistent with your other materials",
        },
        {
          q: "Should the portal feel corporate and formal, or modern and approachable?",
          helper: "This affects tone of voice and visual style",
        },
        {
          q: "Are there any competitor websites whose style you like or dislike?",
          helper: "Help us understand your aesthetic preferences",
        },
      ],
    },
    {
      id: "content",
      title: "Content and messaging",
      icon: Article,
      description: "Ensure all text reflects your voice",
      questions: [
        {
          q: "Who should we describe as the publisher of notices?",
          helper: "E.g., 'Published by Nova News' or 'Novus Media Group'",
        },
        {
          q: "What tone should we use when speaking to visitors?",
          helper: "Professional and legal? Friendly and helpful? Authoritative?",
        },
        {
          q: "Do you have preferred terminology for public notices?",
          helper: "E.g., 'legal notices', 'official notices', 'government notices'",
        },
        {
          q: "Should Afrikaans content be a perfect translation or adapted for tone?",
          helper: "Some phrases translate better when adapted rather than literal",
        },
        {
          q: "Are there any legal disclaimers we must include?",
          helper: "Liability statements, terms, legal language requirements",
        },
        {
          q: "Do you have an 'About us' page text we should use?",
          helper: "Or should we draft one for your approval?",
        },
      ],
    },
    {
      id: "functionality",
      title: "Features and functionality",
      icon: Desktop,
      description: "Which features matter most to you",
      questions: [
        {
          q: "Should all notices be publicly viewable, or require login?",
          helper: "Login-gating can increase registrations but may reduce discoverability",
        },
        {
          q: "Do you want users to be able to save/bookmark notices?",
          helper: "Saved notices appear in their account dashboard",
        },
        {
          q: "Should users be able to set up email alerts for new notices?",
          helper: "E.g., 'notify me when a new notice is published in Gauteng'",
        },
        {
          q: "Do you want a 'compare notices' feature?",
          helper: "Useful for tracking changes or comparing similar notices side-by-side",
        },
        {
          q: "Should notices have social sharing buttons?",
          helper: "Share to LinkedIn, Twitter, email, etc.",
        },
        {
          q: "Do you want a print-friendly version of each notice?",
          helper: "Clean layout for printing or PDF export",
        },
        {
          q: "Should users be able to download proof of publication?",
          helper: "Official stamped PDF confirming a notice was published",
        },
      ],
    },
    {
      id: "search",
      title: "Search and discovery",
      icon: MagnifyingGlass,
      description: "How users find the notices they need",
      questions: [
        {
          q: "What filters are most important for your users?",
          helper: "E.g., category, location, date range, reference number, keywords",
        },
        {
          q: "Should search results show previews or just titles?",
          helper: "Previews help but take more space",
        },
        {
          q: "Do you want advanced search options visible by default?",
          helper: "Or hidden behind a toggle to keep the interface simple?",
        },
        {
          q: "How many results should appear per page?",
          helper: "Common options: 10, 20, 25, 50",
        },
        {
          q: "Should categories be organized alphabetically or by popularity?",
          helper: "Or would you prefer manual ordering?",
        },
        {
          q: "Do you want a map view for location-based searches?",
          helper: "Visual map showing where notices were published",
        },
      ],
    },
    {
      id: "users",
      title: "User accounts and access",
      icon: Users,
      description: "Managing who can do what",
      questions: [
        {
          q: "Can anyone create an account, or do you want approval first?",
          helper: "Open registration vs. moderated registration",
        },
        {
          q: "Should users verify their email before accessing features?",
          helper: "Email verification reduces spam but adds friction",
        },
        {
          q: "Do you want to support organization accounts?",
          helper: "E.g., law firms with multiple users under one account",
        },
        {
          q: "Should users be able to reset passwords themselves?",
          helper: "Standard practice but requires email infrastructure",
        },
        {
          q: "Do you need role-based access (admin, moderator, publisher, viewer)?",
          helper: "Different permission levels for different user types",
        },
        {
          q: "Should account creation require any documents or verification?",
          helper: "E.g., ID number, business registration, practicing certificate",
        },
      ],
    },
    {
      id: "payment",
      title: "Pricing and payments",
      icon: CreditCard,
      description: "How you want to handle payments",
      questions: [
        {
          q: "What are your actual pricing tiers?",
          helper: "We've used placeholder prices (R500 digital, R1500 print+digital)",
        },
        {
          q: "Do you offer discounts for bulk submissions?",
          helper: "E.g., '10% off when submitting 5+ notices'",
        },
        {
          q: "Should pricing include VAT or be shown separately?",
          helper: "Legal requirement: total must include VAT",
        },
        {
          q: "Do you want to offer payment plans or invoicing?",
          helper: "Useful for government departments or large organizations",
        },
        {
          q: "What payment methods do you accept?",
          helper: "Card, EFT, instant EFT, cash deposit, account billing?",
        },
        {
          q: "Do you have a PayFast account, or should we help you set one up?",
          helper: "PayFast integration is ready but needs your merchant credentials",
        },
        {
          q: "Should free notices be allowed for certain categories?",
          helper: "E.g., government notices or community announcements",
        },
      ],
    },
    {
      id: "moderation",
      title: "Moderation and workflow",
      icon: ShieldCheck,
      description: "How notices get reviewed and published",
      questions: [
        {
          q: "Who will moderate submitted notices?",
          helper: "Names and email addresses of your moderation team",
        },
        {
          q: "What's your target turnaround time for reviewing notices?",
          helper: "We've shown '24-48 hours' but what's realistic for you?",
        },
        {
          q: "Should moderators be able to edit notices, or only approve/reject?",
          helper: "Editing helps fix small errors but takes more time",
        },
        {
          q: "Do you want automatic email notifications for new submissions?",
          helper: "Alert moderators immediately when a new notice arrives",
        },
        {
          q: "What happens to rejected notices?",
          helper: "Refund, allow resubmission, both?",
        },
        {
          q: "Should approved notices publish immediately or wait for a scheduled date?",
          helper: "Batch publishing vs. real-time publishing",
        },
        {
          q: "How long should notices remain published?",
          helper: "Forever? 90 days? Vary by category?",
        },
      ],
    },
    {
      id: "legal",
      title: "Legal and compliance",
      icon: FileText,
      description: "Terms, privacy, and legal requirements",
      questions: [
        {
          q: "Do you have privacy policy text we must use?",
          helper: "POPIA compliance requires a privacy policy",
        },
        {
          q: "Do you have terms and conditions we must use?",
          helper: "Legal protection for both you and users",
        },
        {
          q: "Are there any disclaimers we must show?",
          helper: "E.g., 'We are not responsible for user-submitted content'",
        },
        {
          q: "Do you need to include PAIA/PAJA references?",
          helper: "Promotion of Access to Information Act compliance",
        },
        {
          q: "Should we include cookie consent banners?",
          helper: "GDPR/POPIA compliance for tracking",
        },
        {
          q: "Are there specific legal requirements for notice retention?",
          helper: "How long must notices be stored and accessible?",
        },
      ],
    },
    {
      id: "advertising",
      title: "Advertising and revenue",
      icon: ChartLine,
      description: "Ad placements and revenue generation",
      questions: [
        {
          q: "Do you want to display ads on the portal?",
          helper: "We've included ad slots but they can be removed",
        },
        {
          q: "What ad network or system will you use?",
          helper: "Google AdSense, direct sales, programmatic?",
        },
        {
          q: "Should ads appear on every page, or exclude certain pages?",
          helper: "We've excluded checkout/confirmation pages",
        },
        {
          q: "Do you sell ad space directly to clients?",
          helper: "If yes, we can create ad management pages",
        },
        {
          q: "What ad sizes and placements do you prefer?",
          helper: "Leaderboard, MPU, sidebar, inline?",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact information",
      icon: EnvelopeSimple,
      description: "How people get in touch with you",
      questions: [
        {
          q: "What email address should appear for general enquiries?",
          helper: "E.g., info@novanews.co.za",
        },
        {
          q: "What email should be used for support queries?",
          helper: "E.g., support@novanews.co.za",
        },
        {
          q: "What email should be used for sales enquiries?",
          helper: "E.g., sales@novanews.co.za",
        },
        {
          q: "What phone number should we display?",
          helper: "Include area code (e.g., +27 12 345 6789)",
        },
        {
          q: "What's your physical address?",
          helper: "For contact page and footer",
        },
        {
          q: "Do you have office hours we should display?",
          helper: "E.g., 'Monday-Friday, 8:00-17:00'",
        },
        {
          q: "What social media accounts should we link to?",
          helper: "Facebook, Twitter, LinkedIn, Instagram, etc.",
        },
      ],
    },
    {
      id: "technical",
      title: "Technical and integration",
      icon: GlobeHemisphereWest,
      description: "Backend systems and integrations",
      questions: [
        {
          q: "What domain name will the portal use?",
          helper: "E.g., novanews.co.za/notices or notices.novanews.co.za",
        },
        {
          q: "Do you have WordPress hosting already?",
          helper: "The prototype will be migrated to WordPress",
        },
        {
          q: "Do you want to import notices from existing sources?",
          helper: "E.g., Pongrass, old database, spreadsheets",
        },
        {
          q: "Should the portal integrate with any other systems?",
          helper: "CRM, ERP, accounting software, email marketing?",
        },
        {
          q: "Do you need analytics/tracking set up?",
          helper: "Google Analytics, Meta Pixel, other tracking?",
        },
        {
          q: "Should we set up automated backups?",
          helper: "Daily backups of database and uploaded files",
        },
      ],
    },
  ];

  return (
    <Layout lang="en" showAds={false}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      {/* Intro */}
      <div className="wpn-dev-questionnaire">
        <div className="wpn-dev-questionnaire__container">
          <div className="wpn-dev-questionnaire__intro">
            <p className="wpn-dev-questionnaire__intro-text">
              This questionnaire helps us gather all the details needed to finalize your public notices portal. 
              Take your time answering — the more detail you provide, the better we can customize the platform to match your needs.
            </p>
            <p className="wpn-dev-questionnaire__intro-note">
              <ShieldCheck weight="fill" className="wpn-dev-questionnaire__intro-icon" />
              We've organized questions by topic. You don't need to answer everything at once — save this page and return anytime.
            </p>
          </div>

          {/* Question Sections */}
          {questionSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <section key={section.id} className="wpn-dev-questionnaire__section">
                <div className="wpn-dev-questionnaire__section-header">
                  <div className="wpn-dev-questionnaire__section-icon-wrapper">
                    <Icon weight="duotone" className="wpn-dev-questionnaire__section-icon" />
                  </div>
                  <div className="wpn-dev-questionnaire__section-header-text">
                    <h2 className="wpn-dev-questionnaire__section-title">
                      {idx + 1}. {section.title}
                    </h2>
                    <p className="wpn-dev-questionnaire__section-description">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="wpn-dev-questionnaire__questions">
                  {section.questions.map((question, qIdx) => (
                    <div key={qIdx} className="wpn-dev-questionnaire__question">
                      <div className="wpn-dev-questionnaire__question-number">
                        {idx + 1}.{qIdx + 1}
                      </div>
                      <div className="wpn-dev-questionnaire__question-content">
                        <h3 className="wpn-dev-questionnaire__question-text">
                          {question.q}
                        </h3>
                        <p className="wpn-dev-questionnaire__question-helper">
                          {question.helper}
                        </p>
                        <div className="wpn-dev-questionnaire__question-answer">
                          <label className="wpn-dev-questionnaire__label">
                            Your answer:
                          </label>
                          <textarea
                            className="wpn-dev-questionnaire__textarea"
                            rows={3}
                            placeholder="Type your answer here..."
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <div className="wpn-dev-questionnaire__cta">
            <h3 className="wpn-dev-questionnaire__cta-title">
              Ready to submit your answers?
            </h3>
            <p className="wpn-dev-questionnaire__cta-description">
              Once you've completed the questionnaire, send it to your project manager or email it to us.
            </p>
            <div className="wpn-dev-questionnaire__cta-actions">
              <button className="wpn-dev-questionnaire__button wpn-dev-questionnaire__button--primary">
                <EnvelopeSimple weight="fill" />
                Email questionnaire
              </button>
              <button className="wpn-dev-questionnaire__button wpn-dev-questionnaire__button--secondary">
                <ClipboardText weight="fill" />
                Copy to clipboard
              </button>
            </div>
          </div>

          {/* Back Link */}
          <div className="wpn-dev-questionnaire__footer">
            <Link to="/dev" className="wpn-dev-questionnaire__back-link">
              ← Back to dev tools
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
