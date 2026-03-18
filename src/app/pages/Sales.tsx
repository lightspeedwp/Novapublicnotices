import { Link } from "react-router";
import Layout from "../components/Layout";
import { 
  Check, 
  FileText, 
  CurrencyCircleDollar, 
  Clock, 
  Phone, 
  Users, 
  MagnifyingGlass, 
  ShoppingCart,
  CheckCircle,
  Question,
  ShieldCheck,
  Lightning,
  Envelope,
  House
} from "@phosphor-icons/react";
import "../../styles/sales.css";

export default function Sales() {
  return (
    <Layout lang="en" showAds={true}>
      {/* Page Header */}
      <div className="wpn-page-header wpn-bg--primary">
        <div className="wpn-page-header__container">
          {/* Breadcrumb */}
          <nav className="wpn-breadcrumb wpn-breadcrumb--light" aria-label="Breadcrumb">
            <ol className="wpn-breadcrumb__list">
              <li className="wpn-breadcrumb__item">
                <Link to="/" className="wpn-breadcrumb__link">
                  <House className="wpn-breadcrumb__icon" />
                  Home
                </Link>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__separator">/</span>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__current">Sales & support</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title wpn-page-header__title--white">
            How to publish public notices
          </h1>
          <p className="wpn-page-header__subtitle wpn-page-header__subtitle--light">
            Everything you need to know about publishing legal notices in South Africa
          </p>

          <div className="wpn-page-header__actions">
            <Link to="/submit" className="wpn-button wpn-button--lg wpn-button--accent">
              Start publishing
            </Link>
            <Link to="/pricing" className="wpn-button wpn-button--lg wpn-button--white">
              View pricing
            </Link>
          </div>
        </div>
      </div>

      {/* What are Public Notices */}
      <div className="wpn-section wpn-section--white">
        <div className="wpn-container wpn-container--narrow">
          <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center">
            What are public notices?
          </h2>
          
          <div className="wpn-card">
            <p className="wpn-card__text">
              Public notices are <strong>legally required announcements</strong> that must be published to inform the public about matters of legal significance. These notices serve to protect the rights of interested parties by ensuring transparency and providing an opportunity for public participation or objection.
            </p>
            <p className="wpn-card__text">
              In South Africa, many public notices must be published in <strong>official government gazettes</strong> and/or <strong>newspapers</strong> to comply with various legislative requirements. Common types include:
            </p>
            
            <ul className="wpn-list wpn-list--checked">
              <li className="wpn-list__item">
                <Check className="wpn-list__icon" />
                <span><strong>Estate notices:</strong> Notifications to creditors and beneficiaries of deceased estates</span>
              </li>
              <li className="wpn-list__item">
                <Check className="wpn-list__icon" />
                <span><strong>Tenders:</strong> Government and municipal procurement opportunities</span>
              </li>
              <li className="wpn-list__item">
                <Check className="wpn-list__icon" />
                <span><strong>Liquor licence applications:</strong> Notices for liquor licence applications, transfers, and renewals</span>
              </li>
              <li className="wpn-list__item">
                <Check className="wpn-list__icon" />
                <span><strong>Town planning:</strong> Rezoning applications, land use changes, and development proposals</span>
              </li>
              <li className="wpn-list__item">
                <Check className="wpn-list__icon" />
                <span><strong>Environmental notices:</strong> Environmental impact assessments and public participation processes</span>
              </li>
              <li className="wpn-list__item">
                <Check className="wpn-list__icon" />
                <span><strong>Business licences:</strong> Various commercial and professional licence applications</span>
              </li>
            </ul>
            
            <div className="wpn-info-box wpn-info-box--info">
              <p className="wpn-info-box__text">
                <strong>Important:</strong> Nova News Public Notices provides a <strong>digital platform</strong> for publishing and archiving public notices, ensuring wide visibility and permanent searchability. Always verify specific legal requirements for your notice type, as some may require publication in print media or official gazettes in addition to digital platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Step by Step */}
      <div className="wpn-section wpn-section--muted">
        <div className="wpn-container wpn-container--narrow">
          <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center">
            How it works: 3 simple steps
          </h2>
          
          <div className="wpn-sales-steps">
            {/* Step 1 */}
            <div className="wpn-sales-step">
              <div className="wpn-step-badge">1</div>
              <div className="wpn-sales-step__content">
                <h3 className="wpn-sales-step__title">Submit your notice</h3>
                
                <div className="wpn-sales-step__card">
                  <p className="wpn-sales-step__description">
                    There are two ways to submit your public notice:
                  </p>
                  
                  <div className="wpn-submission-options">
                    <div className="wpn-submission-option wpn-submission-option--primary">
                      <h4 className="wpn-submission-option__title">Self-service submission (online)</h4>
                      <ul className="wpn-submission-option__list">
                        <li className="wpn-submission-option__list-item">
                          <Check className="wpn-submission-option__list-icon wpn-text--accent" />
                          <span>Create a free account or log in</span>
                        </li>
                        <li className="wpn-submission-option__list-item">
                          <Check className="wpn-submission-option__list-icon wpn-text--accent" />
                          <span>Select your notice type from our comprehensive categories</span>
                        </li>
                        <li className="wpn-submission-option__list-item">
                          <Check className="wpn-submission-option__list-icon wpn-text--accent" />
                          <span>Fill out the notice details using our guided form</span>
                        </li>
                        <li className="wpn-submission-option__list-item">
                          <Check className="wpn-submission-option__list-icon wpn-text--accent" />
                          <span>Upload supporting documents (if required)</span>
                        </li>
                        <li className="wpn-submission-option__list-item">
                          <Check className="wpn-submission-option__list-icon wpn-text--accent" />
                          <span>Preview your notice before submission</span>
                        </li>
                      </ul>
                      <div className="wpn-submission-option__actions">
                        <Link to="/submit" className="wpn-button wpn-button--accent">
                          Submit online
                        </Link>
                      </div>
                    </div>

                    <div className="wpn-submission-option">
                      <h4 className="wpn-submission-option__title">Sales-assisted submission (full service)</h4>
                      <ul className="wpn-submission-option__list">
                        <li className="wpn-submission-option__list-item">
                          <Phone className="wpn-submission-option__list-icon wpn-text--muted" />
                          <span>Contact our sales team via phone or email</span>
                        </li>
                        <li className="wpn-submission-option__list-item">
                          <Phone className="wpn-submission-option__list-icon wpn-text--muted" />
                          <span>Discuss your specific requirements with an expert</span>
                        </li>
                        <li className="wpn-submission-option__list-item">
                          <Phone className="wpn-submission-option__list-icon wpn-text--muted" />
                          <span>Receive guidance on legal requirements and formatting</span>
                        </li>
                        <li className="wpn-submission-option__list-item">
                          <Phone className="wpn-submission-option__list-icon wpn-text--muted" />
                          <span>Send your notice content via email or document upload</span>
                        </li>
                        <li className="wpn-submission-option__list-item">
                          <Phone className="wpn-submission-option__list-icon wpn-text--muted" />
                          <span>Our team handles formatting and publication for you</span>
                        </li>
                      </ul>
                      <div className="wpn-submission-option__actions">
                        <Link to="/contact" className="wpn-button wpn-button--outline">
                          Contact sales
                        </Link>
                        <a href="tel:+27123456789" className="wpn-button wpn-button--outline">
                          <Phone className="wpn-icon wpn-icon--sm" />
                          012 345 6789
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="wpn-sales-step">
              <div className="wpn-step-badge">2</div>
              <div className="wpn-sales-step__content">
                <h3 className="wpn-sales-step__title">Review & payment</h3>
                
                <div className="wpn-sales-step__card">
                  <p className="wpn-sales-step__description">
                    Once you've submitted your notice, here's what happens:
                  </p>
                  
                  <div className="wpn-process-steps">
                    <div className="wpn-process-step">
                      <div className="wpn-icon-badge">
                        <FileText className="wpn-icon-badge__icon" />
                      </div>
                      <div>
                        <h4 className="wpn-process-step__title">Content review</h4>
                        <p className="wpn-process-step__description">
                          Our editorial team reviews your notice for completeness and compliance with publishing standards. This typically takes 2-4 business hours during working days.
                        </p>
                      </div>
                    </div>

                    <div className="wpn-process-step">
                      <div className="wpn-icon-badge">
                        <ShoppingCart className="wpn-icon-badge__icon" />
                      </div>
                      <div>
                        <h4 className="wpn-process-step__title">Quote & pricing</h4>
                        <p className="wpn-process-step__description">
                          You'll receive a detailed quote based on your notice type, word count, duration, and any additional services requested. Pricing is transparent with no hidden fees.
                        </p>
                      </div>
                    </div>

                    <div className="wpn-process-step">
                      <div className="wpn-icon-badge">
                        <CurrencyCircleDollar className="wpn-icon-badge__icon" />
                      </div>
                      <div>
                        <h4 className="wpn-process-step__title">Secure payment</h4>
                        <p className="wpn-process-step__description">
                          Complete payment through our secure checkout powered by industry-standard payment gateways. We accept credit/debit cards, EFT, and instant EFT payments.
                        </p>
                      </div>
                    </div>

                    <div className="wpn-process-step">
                      <div className="wpn-icon-badge">
                        <Envelope className="wpn-icon-badge__icon" />
                      </div>
                      <div>
                        <h4 className="wpn-process-step__title">Confirmation</h4>
                        <p className="wpn-process-step__description">
                          Receive instant confirmation via email with your order details, publication schedule, and tax invoice.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="wpn-info-box wpn-info-box--success">
                    <p className="wpn-info-box__text">
                      <strong>Money-back guarantee:</strong> If we cannot publish your notice for any reason, you will receive a full refund within 5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="wpn-sales-step">
              <div className="wpn-step-badge">3</div>
              <div className="wpn-sales-step__content">
                <h3 className="wpn-sales-step__title">Publication & proof</h3>
                
                <div className="wpn-sales-step__card">
                  <p className="wpn-sales-step__description">
                    Your notice is published and you receive comprehensive documentation:
                  </p>
                  
                  <div className="wpn-process-steps">
                    <div className="wpn-process-step">
                      <CheckCircle className="wpn-icon wpn-icon--md wpn-text--success" />
                      <div>
                        <h4 className="wpn-process-step__title">Immediate publication</h4>
                        <p className="wpn-process-step__description">
                          Once payment is confirmed, your notice goes live on our platform within 1-2 hours. You'll receive an email notification with the direct link to your published notice.
                        </p>
                      </div>
                    </div>

                    <div className="wpn-process-step">
                      <CheckCircle className="wpn-icon wpn-icon--md wpn-text--success" />
                      <div>
                        <h4 className="wpn-process-step__title">Proof of publication</h4>
                        <p className="wpn-process-step__description">
                          Download an official Affidavit of Publication (certified PDF) from your account dashboard. This serves as legal proof that the notice was published on the specified date.
                        </p>
                      </div>
                    </div>

                    <div className="wpn-process-step">
                      <CheckCircle className="wpn-icon wpn-icon--md wpn-text--success" />
                      <div>
                        <h4 className="wpn-process-step__title">Permanent archive</h4>
                        <p className="wpn-process-step__description">
                          Your notice remains permanently searchable in our public archive. Interested parties can find it via search engines, our search functionality, and category browsing.
                        </p>
                      </div>
                    </div>

                    <div className="wpn-process-step">
                      <CheckCircle className="wpn-icon wpn-icon--md wpn-text--success" />
                      <div>
                        <h4 className="wpn-process-step__title">Distribution & visibility</h4>
                        <p className="wpn-process-step__description">
                          Notices are distributed across the Novus Media network, indexed by search engines, and shared with relevant industry stakeholders for maximum visibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="wpn-stats-grid">
                    <div className="wpn-stat-box">
                      <h5 className="wpn-stat-box__title">Publication duration</h5>
                      <p className="wpn-stat-box__content">
                        Standard: 30 days minimum<br />
                        Extended options available<br />
                        Permanent archive access
                      </p>
                    </div>
                    <div className="wpn-stat-box">
                      <h5 className="wpn-stat-box__title">Reach & analytics</h5>
                      <p className="wpn-stat-box__content">
                        Track views in real-time<br />
                        Download statistics<br />
                        Share directly from platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publication Options & Pricing */}
      <div className="wpn-section wpn-section--white">
        <div className="wpn-container wpn-container--narrow">
          <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center">
            Publication options
          </h2>
          
          <div className="wpn-pricing-grid">
            {/* Digital Only */}
            <div className="wpn-pricing-card">
              <div className="wpn-pricing-card__header">
                <Lightning className="wpn-pricing-card__icon" />
                <h3 className="wpn-pricing-card__title">Digital only</h3>
                <div className="wpn-pricing-card__price">From R500</div>
                <span className="wpn-pricing-card__period">Per notice</span>
              </div>
              <ul className="wpn-pricing-card__features">
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Online publication</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>30 days visibility</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Permanent archive</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>PDF proof</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Basic analytics</span>
                </li>
              </ul>
              <Link to="/pricing" className="wpn-button wpn-button--outline wpn-button--full">
                View details
              </Link>
            </div>

            {/* Digital + Print */}
            <div className="wpn-pricing-card wpn-pricing-card--featured">
              <div className="wpn-pricing-card__badge">MOST POPULAR</div>
              <div className="wpn-pricing-card__header">
                <FileText className="wpn-pricing-card__icon" />
                <h3 className="wpn-pricing-card__title">Digital + print</h3>
                <div className="wpn-pricing-card__price">From R1,500</div>
                <span className="wpn-pricing-card__period">Per notice</span>
              </div>
              <ul className="wpn-pricing-card__features">
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>All digital features</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Print publication</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Regional newspaper</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Certified affidavit</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link to="/pricing" className="wpn-button wpn-button--accent wpn-button--full">
                View details
              </Link>
            </div>

            {/* Premium Package */}
            <div className="wpn-pricing-card">
              <div className="wpn-pricing-card__header">
                <ShieldCheck className="wpn-pricing-card__icon" />
                <h3 className="wpn-pricing-card__title">Premium</h3>
                <div className="wpn-pricing-card__price">From R3,500</div>
                <span className="wpn-pricing-card__period">Per notice</span>
              </div>
              <ul className="wpn-pricing-card__features">
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>All print features</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Official gazette</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>National publication</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="wpn-pricing-card__feature">
                  <Check className="wpn-pricing-card__feature-icon" />
                  <span>Priority publishing</span>
                </li>
              </ul>
              <Link to="/pricing" className="wpn-button wpn-button--outline wpn-button--full">
                View details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="wpn-section wpn-section--muted">
        <div className="wpn-container wpn-container--narrow">
          <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center">
            Why choose Nova News public notices?
          </h2>
          
          <div className="wpn-feature-grid">
            <div className="wpn-feature-card">
              <Users className="wpn-feature-card__icon" />
              <h3 className="wpn-feature-card__title">Expert support</h3>
              <p className="wpn-feature-card__description">
                Our experienced team understands South African legal publishing requirements and is here to guide you through every step of the process.
              </p>
            </div>

            <div className="wpn-feature-card">
              <Clock className="wpn-feature-card__icon" />
              <h3 className="wpn-feature-card__title">Fast turnaround</h3>
              <p className="wpn-feature-card__description">
                Most notices are reviewed and published within 24 hours. Urgent publications can be arranged with our premium service.
              </p>
            </div>

            <div className="wpn-feature-card">
              <MagnifyingGlass className="wpn-feature-card__icon" />
              <h3 className="wpn-feature-card__title">Maximum visibility</h3>
              <p className="wpn-feature-card__description">
                Your notice is indexed by search engines, distributed across our media network, and permanently archived for easy discovery.
              </p>
            </div>

            <div className="wpn-feature-card">
              <ShieldCheck className="wpn-feature-card__icon" />
              <h3 className="wpn-feature-card__title">Secure & compliant</h3>
              <p className="wpn-feature-card__description">
                We maintain high standards of data security and ensure all publications comply with relevant South African legislation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="wpn-section wpn-section--white">
        <div className="wpn-container wpn-container--narrow">
          <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center">
            Frequently asked questions
          </h2>
          
          <div className="wpn-faq-list">
            <div className="wpn-faq-item">
              <div className="wpn-faq-item__content">
                <Question className="wpn-faq-item__icon" />
                <div>
                  <h3 className="wpn-faq-item__question">How long does it take to publish a notice?</h3>
                  <p className="wpn-faq-item__answer">
                    Digital-only notices are typically published within 24 hours after payment confirmation. Print publications require 3-5 business days lead time depending on the publication schedule.
                  </p>
                </div>
              </div>
            </div>

            <div className="wpn-faq-item">
              <div className="wpn-faq-item__content">
                <Question className="wpn-faq-item__icon" />
                <div>
                  <h3 className="wpn-faq-item__question">Is digital publication legally compliant?</h3>
                  <p className="wpn-faq-item__answer">
                    Digital publication is accepted for many notice types, but some legislation specifically requires print or official gazette publication. We recommend consulting with your legal advisor or contacting our team to confirm requirements for your specific notice type.
                  </p>
                </div>
              </div>
            </div>

            <div className="wpn-faq-item">
              <div className="wpn-faq-item__content">
                <Question className="wpn-faq-item__icon" />
                <div>
                  <h3 className="wpn-faq-item__question">Can I edit my notice after submission?</h3>
                  <p className="wpn-faq-item__answer">
                    Before publication, you can request amendments at no extra charge. After publication, amendments may require republication at an additional cost. Contact our support team for assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="wpn-faq-item">
              <div className="wpn-faq-item__content">
                <Question className="wpn-faq-item__icon" />
                <div>
                  <h3 className="wpn-faq-item__question">What payment methods do you accept?</h3>
                  <p className="wpn-faq-item__answer">
                    We accept all major credit and debit cards, instant EFT, and standard EFT transfers. For corporate accounts, we can arrange invoicing with 30-day payment terms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="wpn-text-center">
            <p className="wpn-text-muted">Still have questions?</p>
            <div className="wpn-button-group wpn-button-group--center">
              <Link to="/faq" className="wpn-button wpn-button--outline">
                View full FAQ
              </Link>
              <Link to="/contact" className="wpn-button wpn-button--accent">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="wpn-section wpn-bg--primary">
        <div className="wpn-container wpn-text-center">
          <h2 className="wpn-heading-h2 wpn-heading--white">
            Ready to publish your notice?
          </h2>
          <p className="wpn-text-xl wpn-text--white-muted">
            Start your submission now or speak with our team to discuss your requirements
          </p>
          <div className="wpn-button-group wpn-button-group--center">
            <Link to="/submit" className="wpn-button wpn-button--lg wpn-button--accent">
              Submit notice online
            </Link>
            <Link to="/contact" className="wpn-button wpn-button--lg wpn-button--outline-inverse">
              <Phone className="wpn-icon wpn-icon--sm" />
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}