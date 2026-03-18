import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { 
  CheckCircle, 
  Receipt, 
  Envelope, 
  Clock, 
  FileText,
  Eye,
  Download,
  Headset,
  Question
} from "@phosphor-icons/react";
import "../../styles/order-confirmation.css";

export default function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <Layout
      lang="en"
      showAds={false}
      currentPage="order-confirmation"
    >
      <div className="wpn-confirmation-wrapper">
        <div className="wpn-confirmation-container">
          
          {/* Hero Section */}
          <div className="wpn-confirmation-hero">
            <div className="wpn-confirmation-hero__icon-wrapper">
              <CheckCircle className="wpn-confirmation-hero__icon" weight="fill" />
            </div>
            <h1 className="wpn-confirmation-hero__title">
              Order confirmed!
            </h1>
            <p className="wpn-confirmation-hero__subtitle">
              Thank you for your submission. Your payment has been received and your notice is 
              now in our review process. We'll send you updates at john.smith@example.com
            </p>
            <div className="wpn-confirmation-hero__order-number">
              <Receipt weight="duotone" />
              Order #NOV-2026-0847
            </div>
          </div>

          <div className="wpn-confirmation-layout">
            
            {/* Main Content */}
            <div className="wpn-confirmation-layout__main">
              
              {/* Order Details */}
              <section className="wpn-confirmation-section">
                <div className="wpn-confirmation-section__header">
                  <Receipt className="wpn-confirmation-section__icon" weight="duotone" />
                  <h2 className="wpn-confirmation-section__title">Order details</h2>
                </div>

                <div className="wpn-confirmation-details">
                  <div className="wpn-confirmation-detail">
                    <span className="wpn-confirmation-detail__label">Order number</span>
                    <span className="wpn-confirmation-detail__value">NOV-2026-0847</span>
                  </div>

                  <div className="wpn-confirmation-detail">
                    <span className="wpn-confirmation-detail__label">Order date</span>
                    <span className="wpn-confirmation-detail__value">March 17, 2026</span>
                  </div>

                  <div className="wpn-confirmation-detail">
                    <span className="wpn-confirmation-detail__label">Payment method</span>
                    <span className="wpn-confirmation-detail__value">Visa ending in 4242</span>
                  </div>

                  <div className="wpn-confirmation-detail">
                    <span className="wpn-confirmation-detail__label">Total paid</span>
                    <span className="wpn-confirmation-detail__value wpn-confirmation-detail__value--highlight">
                      R1,178.75
                    </span>
                  </div>
                </div>

                <div className="wpn-confirmation-items" style={{ marginTop: "var(--space-6)" }}>
                  <div className="wpn-confirmation-item">
                    <div className="wpn-confirmation-item__header">
                      <h3 className="wpn-confirmation-item__title">
                        Estate notice: Late John Smith
                      </h3>
                      <span className="wpn-confirmation-item__price">R750.00</span>
                    </div>
                    <div className="wpn-confirmation-item__meta">
                      <span className="wpn-confirmation-item__type">
                        Digital publication • 30 days • Cape Town
                      </span>
                    </div>
                  </div>

                  <div className="wpn-confirmation-item">
                    <div className="wpn-confirmation-item__header">
                      <h3 className="wpn-confirmation-item__title">
                        Additional locations
                      </h3>
                      <span className="wpn-confirmation-item__price">R250.00</span>
                    </div>
                    <div className="wpn-confirmation-item__meta">
                      <span className="wpn-confirmation-item__type">
                        Johannesburg, Pretoria
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* What Happens Next */}
              <section className="wpn-confirmation-section">
                <div className="wpn-confirmation-section__header">
                  <Clock className="wpn-confirmation-section__icon" weight="duotone" />
                  <h2 className="wpn-confirmation-section__title">What happens next?</h2>
                </div>

                <div className="wpn-confirmation-timeline">
                  
                  {/* Step 1 - Complete */}
                  <div className="wpn-confirmation-timeline-item">
                    <div className="wpn-confirmation-timeline-item__icon wpn-confirmation-timeline-item__icon--complete">
                      <CheckCircle weight="fill" />
                    </div>
                    <div className="wpn-confirmation-timeline-item__content">
                      <h3 className="wpn-confirmation-timeline-item__title">
                        Payment received
                      </h3>
                      <p className="wpn-confirmation-timeline-item__description">
                        Your payment has been successfully processed and confirmed. 
                        A receipt has been sent to your email address.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 - Pending */}
                  <div className="wpn-confirmation-timeline-item">
                    <div className="wpn-confirmation-timeline-item__icon wpn-confirmation-timeline-item__icon--pending">
                      <Clock weight="fill" />
                    </div>
                    <div className="wpn-confirmation-timeline-item__content">
                      <h3 className="wpn-confirmation-timeline-item__title">
                        Editorial review in progress
                      </h3>
                      <p className="wpn-confirmation-timeline-item__description">
                        Our editorial team is reviewing your notice for accuracy, completeness, 
                        and compliance with legal requirements. This typically takes 1-2 business days.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 - Upcoming */}
                  <div className="wpn-confirmation-timeline-item">
                    <div className="wpn-confirmation-timeline-item__icon wpn-confirmation-timeline-item__icon--upcoming">
                      <Eye weight="fill" />
                    </div>
                    <div className="wpn-confirmation-timeline-item__content">
                      <h3 className="wpn-confirmation-timeline-item__title">
                        Publication
                      </h3>
                      <p className="wpn-confirmation-timeline-item__description">
                        Once approved, your notice will be published on Nova News and remain live for 
                        the duration specified in your order. You'll receive a publication confirmation.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 - Upcoming */}
                  <div className="wpn-confirmation-timeline-item">
                    <div className="wpn-confirmation-timeline-item__icon wpn-confirmation-timeline-item__icon--upcoming">
                      <Download weight="fill" />
                    </div>
                    <div className="wpn-confirmation-timeline-item__content">
                      <h3 className="wpn-confirmation-timeline-item__title">
                        Archive and certificate
                      </h3>
                      <p className="wpn-confirmation-timeline-item__description">
                        After publication, a proof of publication certificate will be available for 
                        download in your account for your records.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* Actions */}
              <section className="wpn-confirmation-section">
                <div className="wpn-confirmation-section__header">
                  <FileText className="wpn-confirmation-section__icon" weight="duotone" />
                  <h2 className="wpn-confirmation-section__title">Manage your submission</h2>
                </div>

                <div className="wpn-confirmation-actions">
                  <button
                    onClick={() => navigate("/my-account")}
                    className="wpn-button wpn-button--primary"
                  >
                    <Eye weight="bold" />
                    View my account
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="wpn-button wpn-button--secondary"
                  >
                    <Download weight="bold" />
                    Download receipt
                  </button>

                  <button
                    onClick={() => navigate("/submit-notice")}
                    className="wpn-button wpn-button--outline"
                  >
                    <FileText weight="bold" />
                    Submit another notice
                  </button>
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <div className="wpn-confirmation-layout__sidebar">
              
              {/* Support Card */}
              <div className="wpn-confirmation-card">
                <div className="wpn-confirmation-card__header">
                  <Headset className="wpn-confirmation-card__icon" weight="duotone" />
                  <h3 className="wpn-confirmation-card__title">Need help?</h3>
                </div>
                <p className="wpn-confirmation-card__text">
                  Our support team is here to assist you with any questions about your submission.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="wpn-button wpn-button--outline wpn-button--full"
                >
                  <Envelope weight="bold" />
                  Contact support
                </button>
              </div>

              {/* FAQ Card */}
              <div className="wpn-confirmation-card">
                <div className="wpn-confirmation-card__header">
                  <Question className="wpn-confirmation-card__icon" weight="duotone" />
                  <h3 className="wpn-confirmation-card__title">Common questions</h3>
                </div>
                
                <div className="wpn-confirmation-faq">
                  <details className="wpn-confirmation-faq__item">
                    <summary className="wpn-confirmation-faq__question">
                      How long does review take?
                    </summary>
                    <p className="wpn-confirmation-faq__answer">
                      Reviews typically take 1-2 business days. You'll be notified by email when 
                      your notice is approved and published.
                    </p>
                  </details>

                  <details className="wpn-confirmation-faq__item">
                    <summary className="wpn-confirmation-faq__question">
                      Can I edit my notice?
                    </summary>
                    <p className="wpn-confirmation-faq__answer">
                      Yes, you can make edits before publication. Contact support if changes are 
                      needed after your notice has been published.
                    </p>
                  </details>

                  <details className="wpn-confirmation-faq__item">
                    <summary className="wpn-confirmation-faq__question">
                      Where's my receipt?
                    </summary>
                    <p className="wpn-confirmation-faq__answer">
                      A receipt has been sent to your email. You can also download it from 
                      your account or print this page.
                    </p>
                  </details>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
