import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, PencilSimple, Check, Warning } from "@phosphor-icons/react";
import "../../../styles/submit-pages.css";

export default function Review() {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    // Navigate to checkout
    navigate("/checkout");
  };

  // Mock submission data
  const submissionData = {
    type: "Tender",
    tenderNumber: "T2026/001",
    title: "Construction of New Community Center",
    description: "Request for proposals for the design and construction of a multi-purpose community center in Cape Town. The project includes architectural design, civil works, electrical systems, and landscaping.",
    department: "City of Cape Town",
    location: "Western Cape",
    closingDate: "2026-04-30",
    contactPerson: "John Smith",
    contactEmail: "john.smith@capetown.gov.za",
    contactPhone: "021 123 4567",
    category: "Construction & Infrastructure",
    estimatedValue: "R 5,000,000",
  };

  const pricingData = {
    digitalPublication: 450.00,
    moderationFee: 0.00,
    vat: 67.50,
    total: 517.50,
  };

  return (
    <Layout lang="en" showAds={true}>
      <div className="wpn-submit-review">
        <div className="wpn-submit-review__container">
          {/* Breadcrumb */}
          <div className="wpn-submit-breadcrumb">
            <Link to="/submit/tender" className="wpn-submit-breadcrumb__link">
              <ArrowLeft className="wpn-submit-breadcrumb__icon" />
              Back to form
            </Link>
          </div>

          {/* Header */}
          <div className="wpn-submit-review__header">
            <h1 className="wpn-submit-review__title wpn-heading-h1">
              Review your submission
            </h1>
            <p className="wpn-submit-review__subtitle">
              Please review all details carefully before proceeding to payment. You can edit any section if needed.
            </p>
          </div>

          {/* Content */}
          <div className="wpn-submit-review__content">
            <div className="wpn-submit-review__main">
              {/* Notice Details */}
              <div className="wpn-submit-review__card">
                <div className="wpn-submit-review__card-header">
                  <h2 className="wpn-submit-review__card-title">
                    Notice details
                  </h2>
                  <Link to="/submit/tender" className="wpn-button wpn-button--sm wpn-button--outline">
                    <PencilSimple />
                    Edit
                  </Link>
                </div>

                <div className="wpn-submit-review__field-group">
                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Notice type</span>
                    <span className="wpn-submit-review__field-value">{submissionData.type}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Tender number</span>
                    <span className="wpn-submit-review__field-value">{submissionData.tenderNumber}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Title</span>
                    <span className="wpn-submit-review__field-value">{submissionData.title}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Description</span>
                    <span className="wpn-submit-review__field-value">{submissionData.description}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Category</span>
                    <span className="wpn-submit-review__field-value">{submissionData.category}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Estimated value</span>
                    <span className="wpn-submit-review__field-value">{submissionData.estimatedValue}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Closing date</span>
                    <span className="wpn-submit-review__field-value">{submissionData.closingDate}</span>
                  </div>
                </div>
              </div>

              {/* Department & Location */}
              <div className="wpn-submit-review__card">
                <h2 className="wpn-submit-review__card-title">
                  Department & location
                </h2>

                <div className="wpn-submit-review__field-group">
                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Department</span>
                    <span className="wpn-submit-review__field-value">{submissionData.department}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Location</span>
                    <span className="wpn-submit-review__field-value">{submissionData.location}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="wpn-submit-review__card">
                <h2 className="wpn-submit-review__card-title">
                  Contact information
                </h2>

                <div className="wpn-submit-review__field-group">
                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Contact person</span>
                    <span className="wpn-submit-review__field-value">{submissionData.contactPerson}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Email</span>
                    <span className="wpn-submit-review__field-value">{submissionData.contactEmail}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Phone</span>
                    <span className="wpn-submit-review__field-value">{submissionData.contactPhone}</span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-submit-info">
                <Warning className="wpn-submit-info__icon" />
                <p className="wpn-submit-info__text">
                  <strong>Next steps:</strong> After payment, your notice will enter our moderation queue. Our team will review it for legal compliance within 24 hours. You'll receive email updates at each stage.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="wpn-submit-review__sidebar">
              {/* Pricing Summary */}
              <div className="wpn-submit-review__card">
                <h2 className="wpn-submit-review__card-title">
                  Pricing summary
                </h2>

                <div className="wpn-submit-review__summary">
                  <div className="wpn-submit-review__summary-row">
                    <span className="wpn-submit-review__summary-label">Digital publication</span>
                    <span className="wpn-submit-review__summary-value">R {pricingData.digitalPublication.toFixed(2)}</span>
                  </div>

                  <div className="wpn-submit-review__summary-row">
                    <span className="wpn-submit-review__summary-label">Moderation fee</span>
                    <span className="wpn-submit-review__summary-value">R {pricingData.moderationFee.toFixed(2)}</span>
                  </div>

                  <div className="wpn-submit-review__summary-row">
                    <span className="wpn-submit-review__summary-label">VAT (15%)</span>
                    <span className="wpn-submit-review__summary-value">R {pricingData.vat.toFixed(2)}</span>
                  </div>

                  <div className="wpn-submit-review__summary-row">
                    <span className="wpn-submit-review__summary-label">Total</span>
                    <span className="wpn-submit-review__summary-value">R {pricingData.total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleProceedToCheckout}
                  className="wpn-button wpn-button--accent wpn-button--full wpn-submit-review__proceed-btn"
                >
                  Proceed to payment
                </button>
              </div>

              {/* What Happens Next */}
              <div className="wpn-submit-review__card">
                <h2 className="wpn-submit-review__card-title">
                  What happens next?
                </h2>

                <div className="wpn-submit-review__next-list">
                  <div className="wpn-submit-review__next-item">
                    <Check className="wpn-submit-review__next-icon" />
                    <p className="wpn-submit-review__next-text">
                      <strong>Payment confirmation</strong><br/>
                      Instant email receipt
                    </p>
                  </div>

                  <div className="wpn-submit-review__next-item">
                    <Check className="wpn-submit-review__next-icon" />
                    <p className="wpn-submit-review__next-text">
                      <strong>Moderation review</strong><br/>
                      Within 24 hours
                    </p>
                  </div>

                  <div className="wpn-submit-review__next-item">
                    <Check className="wpn-submit-review__next-icon" />
                    <p className="wpn-submit-review__next-text">
                      <strong>Publication</strong><br/>
                      Within 48 hours of approval
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}