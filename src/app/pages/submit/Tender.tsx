import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";
import "../../../styles/submit-pages.css";

export default function Tender() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tenderNumber: "",
    tenderTitle: "",
    description: "",
    department: "",
    location: "",
    closingDate: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    tenderCategory: "",
    estimatedValue: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to review page
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
            <h1 className="wpn-submit-form__title wpn-heading-h1">
              Submit tender notice
            </h1>
            <p className="wpn-submit-form__subtitle">
              Complete the form below to submit your tender notice. All fields marked with * are required.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="wpn-submit-form__card">
              {/* Tender Details */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Tender details
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="tenderNumber" className="wpn-submit-form__label">
                        Tender number <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="tenderNumber"
                        name="tenderNumber"
                        value={formData.tenderNumber}
                        onChange={handleInputChange}
                        placeholder="e.g., T2026/001"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="tenderCategory" className="wpn-submit-form__label">
                        Tender category <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="tenderCategory"
                        name="tenderCategory"
                        value={formData.tenderCategory}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Select category</option>
                        <option value="construction">Construction & Infrastructure</option>
                        <option value="services">Professional Services</option>
                        <option value="goods">Goods & Supplies</option>
                        <option value="maintenance">Maintenance & Repairs</option>
                        <option value="consultancy">Consultancy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="tenderTitle" className="wpn-submit-form__label">
                      Tender title <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="tenderTitle"
                      name="tenderTitle"
                      value={formData.tenderTitle}
                      onChange={handleInputChange}
                      placeholder="Brief descriptive title of the tender"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="description" className="wpn-submit-form__label">
                      Description <span className="wpn-submit-form__required">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Provide a detailed description of the tender requirements, scope of work, and specifications"
                      required
                      className="wpn-submit-form__textarea"
                      rows={6}
                    />
                    <span className="wpn-submit-form__hint">
                      Minimum 100 characters. Be as detailed as possible.
                    </span>
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="estimatedValue" className="wpn-submit-form__label">
                        Estimated value (ZAR)
                      </label>
                      <input
                        type="text"
                        id="estimatedValue"
                        name="estimatedValue"
                        value={formData.estimatedValue}
                        onChange={handleInputChange}
                        placeholder="e.g., R 500,000"
                        className="wpn-submit-form__input"
                      />
                      <span className="wpn-submit-form__hint">
                        Optional - for transparency purposes
                      </span>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="closingDate" className="wpn-submit-form__label">
                        Closing date <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="date"
                        id="closingDate"
                        name="closingDate"
                        value={formData.closingDate}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Department & Location */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Department & location
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="department" className="wpn-submit-form__label">
                        Department / Organization <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        placeholder="e.g., City of Cape Town"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="location" className="wpn-submit-form__label">
                        Location <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
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
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Contact information
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="contactPerson" className="wpn-submit-form__label">
                      Contact person <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="contactEmail" className="wpn-submit-form__label">
                        Email address <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        placeholder="contact@example.com"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="contactPhone" className="wpn-submit-form__label">
                        Phone number <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        placeholder="021 123 4567"
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
                      placeholder="Any additional information, special requirements, or notes"
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
                      Upload tender specifications, terms of reference, or other relevant documents
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-submit-info">
                <AlertCircle className="wpn-submit-info__icon" />
                <p className="wpn-submit-info__text">
                  <strong>Important:</strong> Your tender notice will be reviewed by our team before publication to ensure compliance with legal requirements. You will receive an email confirmation and publication timeline within 24 hours.
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