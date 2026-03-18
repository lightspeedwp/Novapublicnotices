import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function TownPlanning() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    applicationType: "",
    applicationNumber: "",
    propertyDescription: "",
    erfNumber: "",
    physicalAddress: "",
    suburb: "",
    city: "",
    province: "",
    currentZoning: "",
    proposedZoning: "",
    proposedUse: "",
    applicantName: "",
    applicantType: "",
    contactNumber: "",
    email: "",
    municipality: "",
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
              Submit town planning notice
            </h1>
            <p className="wpn-submit-form__subtitle">
              Complete the form below to submit your town planning or rezoning notice. All fields marked with * are required.
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
                        Notice type <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="applicationType"
                        name="applicationType"
                        value={formData.applicationType}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Select notice type</option>
                        <option value="rezoning">Rezoning Application</option>
                        <option value="land-use">Land Use Application</option>
                        <option value="subdivision">Subdivision Application</option>
                        <option value="consolidation">Consolidation Application</option>
                        <option value="departure">Departure Application</option>
                        <option value="amendment">Amendment to Town Planning Scheme</option>
                        <option value="other">Other Planning Notice</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicationNumber" className="wpn-submit-form__label">
                        Application number
                      </label>
                      <input
                        type="text"
                        id="applicationNumber"
                        name="applicationNumber"
                        value={formData.applicationNumber}
                        onChange={handleInputChange}
                        placeholder="Municipal reference number (if available)"
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Property details
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="erfNumber" className="wpn-submit-form__label">
                        Erf / Farm number <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="erfNumber"
                        name="erfNumber"
                        value={formData.erfNumber}
                        onChange={handleInputChange}
                        placeholder="e.g., Erf 1234 or Farm 567"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="propertyDescription" className="wpn-submit-form__label">
                        Property description <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="propertyDescription"
                        name="propertyDescription"
                        value={formData.propertyDescription}
                        onChange={handleInputChange}
                        placeholder="Full property description"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

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
                      <label htmlFor="municipality" className="wpn-submit-form__label">
                        Municipality <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="municipality"
                        name="municipality"
                        value={formData.municipality}
                        onChange={handleInputChange}
                        placeholder="e.g., City of Cape Town"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Zoning & Proposed Use */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Zoning & proposed use
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="currentZoning" className="wpn-submit-form__label">
                        Current zoning <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="currentZoning"
                        name="currentZoning"
                        value={formData.currentZoning}
                        onChange={handleInputChange}
                        placeholder="e.g., Residential 1"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="proposedZoning" className="wpn-submit-form__label">
                        Proposed zoning <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="proposedZoning"
                        name="proposedZoning"
                        value={formData.proposedZoning}
                        onChange={handleInputChange}
                        placeholder="e.g., Business 2"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="proposedUse" className="wpn-submit-form__label">
                      Proposed land use <span className="wpn-submit-form__required">*</span>
                    </label>
                    <textarea
                      id="proposedUse"
                      name="proposedUse"
                      value={formData.proposedUse}
                      onChange={handleInputChange}
                      placeholder="Describe the intended use of the property in detail"
                      required
                      className="wpn-submit-form__textarea"
                      rows={4}
                    />
                    <span className="wpn-submit-form__hint">
                      Provide a comprehensive description of how the property will be used
                    </span>
                  </div>
                </div>
              </div>

              {/* Applicant Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Applicant information
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicantType" className="wpn-submit-form__label">
                        Applicant type <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="applicantType"
                        name="applicantType"
                        value={formData.applicantType}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Select applicant type</option>
                        <option value="owner">Property Owner</option>
                        <option value="agent">Authorized Agent</option>
                        <option value="developer">Developer</option>
                        <option value="planner">Town Planner</option>
                        <option value="architect">Architect</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicantName" className="wpn-submit-form__label">
                        Applicant name <span className="wpn-submit-form__required">*</span>
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
                    <label htmlFor="additionalInfo" className="wpn-submit-form__label">
                      Additional notes
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any additional information, special circumstances, or notes"
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
                      Upload site plans, layout plans, environmental reports, or other required documents
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-info-banner">
                <AlertCircle className="wpn-info-banner__icon" />
                <p className="wpn-info-banner__text">
                  <strong>Important:</strong> Town planning notices must comply with the applicable municipal planning bylaws. Your notice will be reviewed by our team before publication to ensure legal compliance.
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