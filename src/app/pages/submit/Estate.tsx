import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";
import "../../../styles/submit-pages.css";

export default function Estate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    estateNumber: "",
    deceasedName: "",
    deceasedIdNumber: "",
    dateOfDeath: "",
    estateType: "",
    executorName: "",
    executorIdNumber: "",
    executorContactNumber: "",
    executorEmail: "",
    masterOffice: "",
    creditorsDeadline: "",
    noticeType: "",
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
            <h1 className="wpn-submit-form__title wpn-heading-h1">
              Submit estate notice
            </h1>
            <p className="wpn-submit-form__subtitle">
              Complete the form below to submit your estate notice. All fields marked with * are required for legal compliance.
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
                      Estate notice type <span className="wpn-submit-form__required">*</span>
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
                      <option value="creditors">Notice to Creditors (Form J187)</option>
                      <option value="heirs">Notice to Heirs and Legatees</option>
                      <option value="executor">Notice of Executor Appointment</option>
                      <option value="distribution">Notice of Distribution Account</option>
                      <option value="objection">Notice of Objection Period</option>
                      <option value="other">Other Estate Notice</option>
                    </select>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="estateNumber" className="wpn-submit-form__label">
                      Estate number <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="estateNumber"
                      name="estateNumber"
                      value={formData.estateNumber}
                      onChange={handleInputChange}
                      placeholder="e.g., 12345/2026"
                      required
                      className="wpn-submit-form__input"
                    />
                    <span className="wpn-submit-form__hint">
                      Estate number assigned by the Master's Office
                    </span>
                  </div>
                </div>
              </div>

              {/* Deceased Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Deceased information
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="deceasedName" className="wpn-submit-form__label">
                      Full name of deceased <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="deceasedName"
                      name="deceasedName"
                      value={formData.deceasedName}
                      onChange={handleInputChange}
                      placeholder="Full legal name including surnames"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="deceasedIdNumber" className="wpn-submit-form__label">
                        ID number <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="deceasedIdNumber"
                        name="deceasedIdNumber"
                        value={formData.deceasedIdNumber}
                        onChange={handleInputChange}
                        placeholder="13-digit ID number"
                        required
                        className="wpn-submit-form__input"
                        maxLength={13}
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="dateOfDeath" className="wpn-submit-form__label">
                        Date of death <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="date"
                        id="dateOfDeath"
                        name="dateOfDeath"
                        value={formData.dateOfDeath}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="estateType" className="wpn-submit-form__label">
                      Estate type <span className="wpn-submit-form__required">*</span>
                    </label>
                    <select
                      id="estateType"
                      name="estateType"
                      value={formData.estateType}
                      onChange={handleInputChange}
                      required
                      className="wpn-submit-form__select"
                    >
                      <option value="">Select estate type</option>
                      <option value="testate">Testate (With Will)</option>
                      <option value="intestate">Intestate (Without Will)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Executor Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Executor information
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="executorName" className="wpn-submit-form__label">
                      Executor full name <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="executorName"
                      name="executorName"
                      value={formData.executorName}
                      onChange={handleInputChange}
                      placeholder="Name of appointed executor"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="executorIdNumber" className="wpn-submit-form__label">
                      Executor ID number <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="executorIdNumber"
                      name="executorIdNumber"
                      value={formData.executorIdNumber}
                      onChange={handleInputChange}
                      placeholder="13-digit ID number"
                      required
                      className="wpn-submit-form__input"
                      maxLength={13}
                    />
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="executorContactNumber" className="wpn-submit-form__label">
                        Contact number <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="executorContactNumber"
                        name="executorContactNumber"
                        value={formData.executorContactNumber}
                        onChange={handleInputChange}
                        placeholder="021 123 4567"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="executorEmail" className="wpn-submit-form__label">
                        Email address <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="email"
                        id="executorEmail"
                        name="executorEmail"
                        value={formData.executorEmail}
                        onChange={handleInputChange}
                        placeholder="executor@example.com"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Master's Office & Deadlines */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Master's office & deadlines
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="masterOffice" className="wpn-submit-form__label">
                        Master's office <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="masterOffice"
                        name="masterOffice"
                        value={formData.masterOffice}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Select Master's Office</option>
                        <option value="Cape Town">Cape Town</option>
                        <option value="Johannesburg">Johannesburg</option>
                        <option value="Pretoria">Pretoria</option>
                        <option value="Durban">Durban</option>
                        <option value="Port Elizabeth">Port Elizabeth</option>
                        <option value="Bloemfontein">Bloemfontein</option>
                        <option value="Pietermaritzburg">Pietermaritzburg</option>
                        <option value="Kimberley">Kimberley</option>
                        <option value="Grahamstown">Makhanda (Grahamstown)</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="creditorsDeadline" className="wpn-submit-form__label">
                        Creditors deadline <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="date"
                        id="creditorsDeadline"
                        name="creditorsDeadline"
                        value={formData.creditorsDeadline}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__input"
                      />
                      <span className="wpn-submit-form__hint">
                        Date by which creditors must lodge claims
                      </span>
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
                      Upload death certificate, will, letters of executorship, or other relevant documents
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-submit-info">
                <AlertCircle className="wpn-submit-info__icon" />
                <p className="wpn-submit-info__text">
                  <strong>Legal requirement:</strong> Estate notices must be published in compliance with the Administration of Estates Act. Your notice will be reviewed by our legal team before publication to ensure all statutory requirements are met.
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
