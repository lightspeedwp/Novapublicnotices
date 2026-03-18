import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function General() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    noticeType: "",
    noticeTitle: "",
    noticeCategory: "",
    noticeBody: "",
    referenceNumber: "",
    location: "",
    province: "",
    publicationDuration: "",
    applicantName: "",
    applicantType: "",
    contactNumber: "",
    email: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/submit/review");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout lang="en" showAds={true}>
      <div className="wpn-submit-form">
        <div className="wpn-submit-form__container">
          {/* Breadcrumb */}
          <div className="wpn-submit-breadcrumb">
            <Link to="/submit" className="wpn-submit-breadcrumb__link">
              <ArrowLeft className="wpn-submit-breadcrumb__icon" />
              Back to notice types
            </Link>
          </div>

          {/* Header */}
          <div className="wpn-submit-form__header">
            <h1 className="wpn-submit-form__title">
              Submit general notice
            </h1>
            <p className="wpn-submit-form__subtitle">
              Complete the form below to submit your general public notice. All fields marked with * are required.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="wpn-submit-form__card">
              {/* Notice Type */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Notice type
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="noticeType" className="wpn-submit-form__label">
                      General notice type <span className="wpn-submit-form__required">*</span>
                    </label>
                    <select
                      id="noticeType"
                      name="noticeType"
                      value={formData.noticeType}
                      onChange={handleInputChange}
                      required
                      className="wpn-submit-form__select"
                    >
                      <option value="">Select notice type</option>
                      <option value="lost-documents">Lost Documents</option>
                      <option value="name-change">Name Change</option>
                      <option value="company-formation">Company Formation</option>
                      <option value="company-dissolution">Company Dissolution</option>
                      <option value="partnership">Partnership Notice</option>
                      <option value="trust">Trust Notice</option>
                      <option value="curatorship">Curatorship Notice</option>
                      <option value="adoption">Adoption Notice</option>
                      <option value="environmental">Environmental Notice</option>
                      <option value="public-meeting">Public Meeting Notice</option>
                      <option value="other">Other General Notice</option>
                    </select>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="noticeCategory" className="wpn-submit-form__label">
                      Category
                    </label>
                    <select
                      id="noticeCategory"
                      name="noticeCategory"
                      value={formData.noticeCategory}
                      onChange={handleInputChange}
                      className="wpn-submit-form__select"
                    >
                      <option value="">Select category (optional)</option>
                      <option value="legal">Legal</option>
                      <option value="corporate">Corporate</option>
                      <option value="personal">Personal</option>
                      <option value="government">Government</option>
                      <option value="community">Community</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notice Details */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Notice details
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="noticeTitle" className="wpn-submit-form__label">
                      Notice title <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="noticeTitle"
                      name="noticeTitle"
                      value={formData.noticeTitle}
                      onChange={handleInputChange}
                      placeholder="Brief descriptive title of the notice"
                      required
                      className="wpn-submit-form__input"
                    />
                    <span className="wpn-submit-form__hint">
                      Keep it clear and concise (e.g., "Loss of ID Document" or "Formation of Company")
                    </span>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="referenceNumber" className="wpn-submit-form__label">
                      Reference number
                    </label>
                    <input
                      type="text"
                      id="referenceNumber"
                      name="referenceNumber"
                      value={formData.referenceNumber}
                      onChange={handleInputChange}
                      placeholder="Your internal reference (if applicable)"
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="noticeBody" className="wpn-submit-form__label">
                      Notice content <span className="wpn-submit-form__required">*</span>
                    </label>
                    <textarea
                      id="noticeBody"
                      name="noticeBody"
                      value={formData.noticeBody}
                      onChange={handleInputChange}
                      placeholder="Enter the full text of your notice. Be as detailed and specific as possible."
                      required
                      className="wpn-submit-form__textarea"
                      rows={8}
                    />
                    <span className="wpn-submit-form__hint">
                      Minimum 50 characters. Include all relevant details, dates, names, and contact information.
                    </span>
                  </div>
                </div>
              </div>

              {/* Location & Publication */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Location & publication
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="location" className="wpn-submit-form__label">
                        Location / Area <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City or town"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="province" className="wpn-submit-form__label">
                        Province <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Select province</option>
                        <option value="Eastern Cape">Eastern Cape</option>
                        <option value="Free State">Free State</option>
                        <option value="Gauteng">Gauteng</option>
                        <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                        <option value="Limpopo">Limpopo</option>
                        <option value="Mpumalanga">Mpumalanga</option>
                        <option value="Northern Cape">Northern Cape</option>
                        <option value="North West">North West</option>
                        <option value="Western Cape">Western Cape</option>
                        <option value="National">National</option>
                      </select>
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="publicationDuration" className="wpn-submit-form__label">
                      Publication duration
                    </label>
                    <select
                      id="publicationDuration"
                      name="publicationDuration"
                      value={formData.publicationDuration}
                      onChange={handleInputChange}
                      className="wpn-submit-form__select"
                    >
                      <option value="">Standard (30 days)</option>
                      <option value="7">7 days</option>
                      <option value="14">14 days</option>
                      <option value="30">30 days (recommended)</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                    </select>
                    <span className="wpn-submit-form__hint">
                      How long should your notice remain publicly accessible?
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Contact information
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicantType" className="wpn-submit-form__label">
                        Submitting as <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="applicantType"
                        name="applicantType"
                        value={formData.applicantType}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Select type</option>
                        <option value="individual">Individual</option>
                        <option value="company">Company</option>
                        <option value="organization">Organization</option>
                        <option value="legal-representative">Legal Representative</option>
                        <option value="government">Government Department</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicantName" className="wpn-submit-form__label">
                        Name <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="applicantName"
                        name="applicantName"
                        value={formData.applicantName}
                        onChange={handleInputChange}
                        placeholder="Full name or company name"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="contactNumber" className="wpn-submit-form__label">
                        Contact number <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="021 123 4567"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="email" className="wpn-submit-form__label">
                        Email address <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="contact@example.com"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Additional information
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="additionalInfo" className="wpn-submit-form__label">
                      Additional notes
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any additional information or special instructions"
                      className="wpn-submit-form__textarea"
                      rows={4}
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label className="wpn-submit-form__label">
                      Supporting documents
                    </label>
                    <div className="wpn-submit-form__file-upload">
                      <Upload className="wpn-submit-form__file-icon" />
                      <p className="wpn-submit-form__file-text">
                        <strong>Click to upload</strong> or drag and drop
                      </p>
                      <p className="wpn-submit-form__file-limit">
                        PDF, DOC, or DOCX (max. 10MB per file)
                      </p>
                    </div>
                    <span className="wpn-submit-form__hint">
                      Upload any supporting documents, certificates, or proof of identity
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-info-banner">
                <AlertCircle className="wpn-info-banner__icon" />
                <p className="wpn-info-banner__text">
                  <strong>Important:</strong> General notices must be clear and complete. Your notice will be reviewed by our team before publication to ensure all requirements are met.
                </p>
              </div>

              {/* Form Actions */}
              <div className="wpn-submit-form__actions">
                <Link to="/submit" className="wpn-button wpn-button--outline">
                  Cancel
                </Link>
                <div className="wpn-submit-form__actions-group">
                  <button type="button" className="wpn-button wpn-button--outline">
                    Save as draft
                  </button>
                  <button type="submit" className="wpn-button wpn-button--accent">
                    Continue to review
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}