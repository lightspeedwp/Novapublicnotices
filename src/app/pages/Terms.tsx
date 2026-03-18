import { Link } from "react-router";
import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import AdSlot from "../components/AdSlot";
import { Home } from "lucide-react";
import "../../styles/components.css";

export default function Terms() {
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
                <span className="wpn-breadcrumb__current">Terms and conditions</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title">
            Terms and conditions
          </h1>
          <p className="wpn-page-header__subtitle">
            Last updated: March 16, 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="wpn-legal-content">
        <div className="wpn-container--narrow">
          <Card className="wpn-card--bordered wpn-card--xl">
            <div className="wpn-list-gap-md">
              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">1. Acceptance of Terms</h2>
                <p className="wpn-legal-content__text">
                  By accessing and using the Nova News Public Notices Portal ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">2. User Accounts</h2>
                <p className="wpn-legal-content__text">
                  To submit public notices, you must create an account. You are responsible for:
                </p>
                <ul className="wpn-legal-content__list">
                  <li className="wpn-legal-content__list-item">Maintaining the confidentiality of your account credentials</li>
                  <li className="wpn-legal-content__list-item">All activities that occur under your account</li>
                  <li className="wpn-legal-content__list-item">Providing accurate and current information</li>
                  <li className="wpn-legal-content__list-item">Notifying us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">3. Notice Submission</h2>
                <p className="wpn-legal-content__text">
                  When submitting notices, you agree that:
                </p>
                <ul className="wpn-legal-content__list">
                  <li className="wpn-legal-content__list-item">All information provided is accurate, complete, and not misleading</li>
                  <li className="wpn-legal-content__list-item">You have the legal authority to publish the notice</li>
                  <li className="wpn-legal-content__list-item">The notice complies with all applicable laws and regulations</li>
                  <li className="wpn-legal-content__list-item">You have obtained all necessary consents and permissions</li>
                  <li className="wpn-legal-content__list-item">The notice does not infringe on any third-party rights</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">4. Moderation Policy</h2>
                <p className="wpn-legal-content__text">
                  All submitted notices undergo professional moderation. We reserve the right to:
                </p>
                <ul className="wpn-legal-content__list">
                  <li className="wpn-legal-content__list-item">Review and approve or reject any notice</li>
                  <li className="wpn-legal-content__list-item">Request additional information or documentation</li>
                  <li className="wpn-legal-content__list-item">Edit notices for legal compliance or formatting</li>
                  <li className="wpn-legal-content__list-item">Remove published notices that violate these terms</li>
                </ul>
                <p className="wpn-legal-content__text">
                  Rejection during moderation entitles you to a full refund or the opportunity to revise and resubmit.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">5. Payment Terms</h2>
                <p className="wpn-legal-content__text">
                  Payment must be received before notices are published. All prices:
                </p>
                <ul className="wpn-legal-content__list">
                  <li className="wpn-legal-content__list-item">Are stated in South African Rand (ZAR)</li>
                  <li className="wpn-legal-content__list-item">Include VAT where applicable</li>
                  <li className="wpn-legal-content__list-item">Are subject to change with notice</li>
                  <li className="wpn-legal-content__list-item">Are non-refundable after publication, except as specified in our refund policy</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">6. Intellectual Property</h2>
                <p className="wpn-legal-content__text">
                  You retain ownership of the content you submit. By submitting a notice, you grant us a non-exclusive, worldwide license to:
                </p>
                <ul className="wpn-legal-content__list">
                  <li className="wpn-legal-content__list-item">Publish the notice on our digital platform</li>
                  <li className="wpn-legal-content__list-item">Coordinate print publication in newspapers and gazettes</li>
                  <li className="wpn-legal-content__list-item">Archive the notice in our searchable database</li>
                  <li className="wpn-legal-content__list-item">Use aggregated, anonymized data for analytics</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">7. Prohibited Uses</h2>
                <p className="wpn-legal-content__text">
                  You may not use the Service to:
                </p>
                <ul className="wpn-legal-content__list">
                  <li className="wpn-legal-content__list-item">Publish false, misleading, or fraudulent information</li>
                  <li className="wpn-legal-content__list-item">Violate any laws or regulations</li>
                  <li className="wpn-legal-content__list-item">Infringe on intellectual property or privacy rights</li>
                  <li className="wpn-legal-content__list-item">Publish defamatory, obscene, or offensive content</li>
                  <li className="wpn-legal-content__list-item">Attempt to circumvent our moderation process</li>
                  <li className="wpn-legal-content__list-item">Interfere with the proper functioning of the Service</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">8. Limitation of Liability</h2>
                <p className="wpn-legal-content__text">
                  To the maximum extent permitted by law:
                </p>
                <ul className="wpn-legal-content__list">
                  <li className="wpn-legal-content__list-item">We are not liable for any indirect, incidental, or consequential damages</li>
                  <li className="wpn-legal-content__list-item">Our total liability is limited to the fees paid for the specific notice</li>
                  <li className="wpn-legal-content__list-item">We do not guarantee uninterrupted or error-free service</li>
                  <li className="wpn-legal-content__list-item">We are not responsible for third-party content or services</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">9. Disclaimer of Warranties</h2>
                <p className="wpn-legal-content__text">
                  The Service is provided "as is" without warranties of any kind. We do not warrant that:
                </p>
                <ul className="wpn-legal-content__list">
                  <li className="wpn-legal-content__list-item">The Service will meet your specific requirements</li>
                  <li className="wpn-legal-content__list-item">Notice publication will result in any particular outcome</li>
                  <li className="wpn-legal-content__list-item">All notices will be approved</li>
                  <li className="wpn-legal-content__list-item">The Service will be available at all times</li>
                </ul>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">10. Changes to Terms</h2>
                <p className="wpn-legal-content__text">
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting. Continued use of the Service after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">11. Governing Law</h2>
                <p className="wpn-legal-content__text">
                  These terms are governed by the laws of South Africa. Any disputes shall be subject to the exclusive jurisdiction of the South African courts.
                </p>
              </section>

              <section className="wpn-legal-content__section">
                <h2 className="wpn-legal-content__heading">12. Contact Information</h2>
                <p className="wpn-legal-content__text">
                  For questions about these Terms of Service, please contact us through our contact page or email legal@novanews.co.za.
                </p>
              </section>
            </div>
          </Card>
        </div>
      </section>

      {/* Ad Slot */}
      <AdSlot variant="leaderboard" className="wpn-my-8" />
    </Layout>
  );
}