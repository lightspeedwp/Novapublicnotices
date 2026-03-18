import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function LiquorLicence() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    applicationType: "",
    licenceType: "",
    businessName: "",
    tradingName: "",
    physicalAddress: "",
    suburb: "",
    city: "",
    province: "",
    postalCode: "",
    applicantName: "",
    applicantIdNumber: "",
    contactNumber: "",
    email: "",
    premisesType: "",
    operatingHours: "",
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
              Submit liquor licence notice
            </h1>
            <p className="wpn-submit-form__subtitle">
              Complete the form below to submit your liquor licence application notice. All fields marked with * are required.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="wpn-submit-form__card">
              {/* Application Type */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Application type
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicationType" className="wpn-submit-form__label">
                        Application type <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="applicationType"
                        name="applicationType"
                        value={formData.applicationType}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Select application type</option>
                        <option value="new">New Application</option>
                        <option value="transfer">Transfer of Licence</option>
                        <option value="renewal">Renewal</option>
                        <option value="amendment">Amendment</option>
                        <option value="temporary">Temporary Licence</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="licenceType" className="wpn-submit-form__label">
                        Licence type <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="licenceType"
                        name="licenceType"
                        value={formData.licenceType}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Select licence type</option>
                        <option value="on-consumption">On-Consumption</option>
                        <option value="off-consumption">Off-Consumption</option>
                        <option value="special-event">Special Event</option>
                        <option value="micro-manufacturer">Micro-Manufacturer</option>
                        <option value="distributor">Distributor's Licence</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Business information
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="businessName" className="wpn-submit-form__label">
                        Registered business name <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Legal entity name"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="tradingName" className="wpn-submit-form__label">
                        Trading name <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="tradingName"
                        name="tradingName"
                        value={formData.tradingName}
                        onChange={handleInputChange}
                        placeholder="Trading as / DBA"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="premisesType" className="wpn-submit-form__label">
                      Premises type <span className="wpn-submit-form__required">*</span>
                    </label>
                    <select
                      id="premisesType"
                      name="premisesType"
                      value={formData.premisesType}
                      onChange={handleInputChange}
                      required
                      className="wpn-submit-form__select"
                    >
                      <option value="">Select premises type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="pub">Pub/Bar</option>
                      <option value="hotel">Hotel</option>
                      <option value="bottle-store">Bottle Store</option>
                      <option value="nightclub">Nightclub</option>
                      <option value="tavern">Tavern</option>
                      <option value="winery">Winery</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Premises Address */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Premises address
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="physicalAddress" className="wpn-submit-form__label">
                      Physical address <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="physicalAddress"
                      name="physicalAddress"
                      value={formData.physicalAddress}
                      onChange={handleInputChange}
                      placeholder="Street address and number"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="suburb" className="wpn-submit-form__label">
                        Suburb <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="suburb"
                        name="suburb"
                        value={formData.suburb}
                        onChange={handleInputChange}
                        placeholder="Suburb or area"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="city" className="wpn-submit-form__label">
                        City <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City or town"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
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
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="postalCode" className="wpn-submit-form__label">
                        Postal code <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="4-digit code"
                        required
                        className="wpn-submit-form__input"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Applicant Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Applicant information
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="applicantName" className="wpn-submit-form__label">
                      Applicant full name <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="applicantName"
                      name="applicantName"
                      value={formData.applicantName}
                      onChange={handleInputChange}
                      placeholder="Full legal name"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="applicantIdNumber" className="wpn-submit-form__label">
                      ID number <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="applicantIdNumber"
                      name="applicantIdNumber"
                      value={formData.applicantIdNumber}
                      onChange={handleInputChange}
                      placeholder="13-digit ID number"
                      required
                      className="wpn-submit-form__input"
                      maxLength={13}
                    />
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
                        placeholder="applicant@example.com"
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
                    <label htmlFor="operatingHours" className="wpn-submit-form__label">
                      Proposed operating hours
                    </label>
                    <input
                      type="text"
                      id="operatingHours"
                      name="operatingHours"
                      value={formData.operatingHours}
                      onChange={handleInputChange}
                      placeholder="e.g., Mon-Sun 10:00-22:00"
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="additionalInfo" className="wpn-submit-form__label">
                      Additional notes
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any additional information or special circumstances"
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
                      Upload floor plans, proof of ownership, zoning certificates, or other required documents
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-info-banner">
                <AlertCircle className="wpn-info-banner__icon" />
                <p className="wpn-info-banner__text">
                  <strong>Important:</strong> Liquor licence notices must comply with the Liquor Act. Your notice will be reviewed by our team before publication to ensure all statutory requirements are met.
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