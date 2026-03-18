import { Link } from "react-router";
import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import AdSlot from "../components/AdSlot";
import { Home } from "lucide-react";
import "../../styles/components.css";

export default function Privacy() {
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
                <span className="wpn-breadcrumb__current">Privacy policy</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title">
            Privacy policy
          </h1>
          <p className="wpn-page-header__subtitle">
            Last updated: March 16, 2026
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="wpn-legal-content">
        <div className="wpn-container--narrow">
          <Card className="wpn-card--bordered wpn-card--xl">
            <div className="wpn-list-gap-md">
              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">1. Introduction</h2>
                <p className="wpn-legal-content__text">
                  Nova News ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Public Notices Portal.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">2. Information We Collect</h2>
                
                <h3 className="wpn-legal-content__subheading">Personal Information</h3>
                <p className="wpn-legal-content__text">When you create an account or submit a notice, we collect:</p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Organization details (if applicable)</li>
                  <li>Payment information (processed securely through PayFast)</li>
                  <li>Notice content and supporting documents</li>
                </ul>

                <h3 className="wpn-legal-content__subheading">Usage Information</h3>
                <p className="wpn-legal-content__text">We automatically collect:</p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Search queries and filters used</li>
                </ul>

                <h3 className="wpn-legal-content__subheading">Cookies and Tracking</h3>
                <p className="wpn-legal-content__text">We use cookies to:</p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Maintain your session and preferences</li>
                  <li>Analyze site usage and improve our services</li>
                  <li>Remember your language preference</li>
                  <li>Provide targeted advertising (with your consent)</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">3. How We Use Your Information</h2>
                <p className="wpn-legal-content__text">We use collected information to:</p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Process and publish your notices</li>
                  <li>Manage your account and provide customer support</li>
                  <li>Process payments and issue invoices</li>
                  <li>Send transaction emails and updates</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">4. Information Sharing</h2>
                <p className="wpn-legal-content__text">We may share your information with:</p>
                
                <h3 className="wpn-legal-content__subheading">Service Providers</h3>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Payment processors (PayFast)</li>
                  <li>Email service providers</li>
                  <li>Cloud hosting services</li>
                  <li>Analytics providers</li>
                </ul>

                <h3 className="wpn-legal-content__subheading">Legal Requirements</h3>
                <p className="wpn-legal-content__text">
                  We may disclose information when required by law, court order, or to:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Comply with legal processes</li>
                  <li>Protect our rights and property</li>
                  <li>Prevent fraud or illegal activity</li>
                  <li>Protect the safety of users or the public</li>
                </ul>

                <h3 className="wpn-legal-content__subheading">Public Information</h3>
                <p className="wpn-legal-content__text">
                  Published notices become public information and may include:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Notice content as submitted</li>
                  <li>Contact details included in the notice</li>
                  <li>Publication dates and reference numbers</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">5. Data Security</h2>
                <p className="wpn-legal-content__text">
                  We implement appropriate technical and organizational measures to protect your information, including:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure socket layer (SSL) technology</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Staff training on data protection</li>
                </ul>
                <p className="wpn-legal-content__text mt-4">
                  However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">6. Your Rights</h2>
                <p className="wpn-legal-content__text">
                  Under the Protection of Personal Information Act (POPIA), you have the right to:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information (subject to legal retention requirements)</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Lodge a complaint with the Information Regulator</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">7. Data Retention</h2>
                <p className="wpn-legal-content__text">
                  We retain your information for as long as:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Your account is active</li>
                  <li>Required to provide our services</li>
                  <li>Necessary to comply with legal obligations</li>
                  <li>Required for legitimate business purposes</li>
                </ul>
                <p className="wpn-legal-content__text mt-4">
                  Published notices remain in our public archive indefinitely for legal compliance and public access.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">8. Children's Privacy</h2>
                <p className="wpn-legal-content__text">
                  Our Service is not intended for individuals under 18 years of age. We do not knowingly collect information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">9. Third-Party Links</h2>
                <p className="wpn-legal-content__text">
                  Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">10. Changes to This Policy</h2>
                <p className="wpn-legal-content__text">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a notice on our website. Continued use after changes constitutes acceptance.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">11. Contact Us</h2>
                <p className="wpn-legal-content__text">
                  For questions about this Privacy Policy or to exercise your rights, contact:
                </p>
                <ul className="list-none text-muted-foreground space-y-2">
                  <li><strong>Email:</strong> privacy@novanews.co.za</li>
                  <li><strong>Information Officer:</strong> Available through our contact page</li>
                  <li><strong>Information Regulator:</strong> www.justice.gov.za/inforeg</li>
                </ul>
              </section>
            </div>
          </Card>
        </div>
      </section>

      {/* Ad Slot */}
      <AdSlot variant="leaderboard" className="my-8" />
    </Layout>
  );
}