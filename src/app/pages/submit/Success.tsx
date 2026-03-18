import { Link } from "react-router";
import Layout from "../../components/Layout";
import { CheckCircle, Envelope, Clock, FileText, House } from "@phosphor-icons/react";
import "../../../styles/submit-pages.css";

export default function Success() {
  // Mock submission data
  const submissionData = {
    referenceNumber: "SUB-2026-T-00123",
    submissionDate: "17 March 2026",
    noticeType: "Tender",
    estimatedPublicationDate: "19 March 2026",
  };

  return (
    <Layout lang="en" showAds={false}>
      <div className="wpn-submit-success">
        <div className="wpn-submit-success__container">
          <div className="wpn-submit-success__card">
            {/* Success Icon */}
            <div className="wpn-submit-success__icon">
              <CheckCircle />
            </div>

            {/* Title */}
            <h1 className="wpn-submit-success__title wpn-heading-h1">
              Submission successful!
            </h1>

            {/* Subtitle */}
            <p className="wpn-submit-success__subtitle">
              Thank you for submitting your notice. Your payment has been received and your notice is now in our moderation queue.
            </p>

            {/* Submission Details */}
            <div className="wpn-submit-success__details">
              <div className="wpn-submit-success__detail-row">
                <span className="wpn-submit-success__detail-label">Reference number</span>
                <span className="wpn-submit-success__detail-value">{submissionData.referenceNumber}</span>
              </div>

              <div className="wpn-submit-success__detail-row">
                <span className="wpn-submit-success__detail-label">Submission date</span>
                <span className="wpn-submit-success__detail-value">{submissionData.submissionDate}</span>
              </div>

              <div className="wpn-submit-success__detail-row">
                <span className="wpn-submit-success__detail-label">Notice type</span>
                <span className="wpn-submit-success__detail-value">{submissionData.noticeType}</span>
              </div>

              <div className="wpn-submit-success__detail-row">
                <span className="wpn-submit-success__detail-label">Estimated publication</span>
                <span className="wpn-submit-success__detail-value">{submissionData.estimatedPublicationDate}</span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="wpn-submit-success__next-steps">
              <h2 className="wpn-submit-success__next-steps-title">
                What happens next?
              </h2>

              <div className="wpn-submit-success__next-steps-list">
                <div className="wpn-submit-success__next-step">
                  <Envelope className="wpn-submit-success__next-step-icon" />
                  <p className="wpn-submit-success__next-step-text">
                    <strong>Email confirmation:</strong> You'll receive a confirmation email with your reference number and receipt within the next few minutes.
                  </p>
                </div>

                <div className="wpn-submit-success__next-step">
                  <Clock className="wpn-submit-success__next-step-icon" />
                  <p className="wpn-submit-success__next-step-text">
                    <strong>Moderation review:</strong> Our team will review your notice for legal compliance within 24 hours. We'll email you if any changes are needed.
                  </p>
                </div>

                <div className="wpn-submit-success__next-step">
                  <FileText className="wpn-submit-success__next-step-icon" />
                  <p className="wpn-submit-success__next-step-text">
                    <strong>Publication:</strong> Once approved, your notice will be published within 48 hours. You'll receive a publication confirmation with a direct link.
                  </p>
                </div>

                <div className="wpn-submit-success__next-step">
                  <House className="wpn-submit-success__next-step-icon" />
                  <p className="wpn-submit-success__next-step-text">
                    <strong>Track your submission:</strong> You can view the status of your notice at any time from your account dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="wpn-submit-success__actions">
              <Link to="/my-account/submissions" className="wpn-button wpn-button--accent">
                View my submissions
              </Link>
              <Link to="/submit" className="wpn-button wpn-button--outline">
                Submit another notice
              </Link>
            </div>

            {/* Help Text */}
            <p className="wpn-submit-success__help">
              Need help? Contact our support team at <a href="mailto:support@novanews.co.za" className="wpn-link--accent">support@novanews.co.za</a> or call 021 123 4567
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}