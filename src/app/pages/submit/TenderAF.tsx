import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function TenderAF() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tenderType: "",
    tenderNumber: "",
    tenderTitle: "",
    tenderDescription: "",
    issuingAuthority: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
    closingDate: "",
    briefingDate: "",
    briefingVenue: "",
    siteVisitDate: "",
    deliveryAddress: "",
    estimatedValue: "",
    compulsoryRequirements: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/submit/review-af");
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
    <Layout lang="af" showAds={true}>
      <div className="wpn-submit-form">
        <div className="wpn-submit-form__container">
          {/* Breadcrumb */}
          <div className="wpn-submit-breadcrumb">
            <Link to="/submit-af" className="wpn-submit-breadcrumb__link">
              <ArrowLeft className="wpn-submit-breadcrumb__icon" />
              Terug na kennisgewingtipes
            </Link>
          </div>

          {/* Header */}
          <div className="wpn-submit-form__header">
            <h1 className="wpn-submit-form__title">
              Dien tenderkennisgewing in
            </h1>
            <p className="wpn-submit-form__subtitle">
              Voltooi die vorm hieronder om u tenderkennisgewing in te dien. Alle velde gemerk met * is verplig.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="wpn-submit-form__card">
              {/* Tender Type */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Tendertipe
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="tenderType" className="wpn-submit-form__label">
                        Tenderkategorie <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="tenderType"
                        name="tenderType"
                        value={formData.tenderType}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Kies tendertipe</option>
                        <option value="construction">Konstruksie en bouwerk</option>
                        <option value="goods">Verskaffing van goedere</option>
                        <option value="services">Professionele dienste</option>
                        <option value="maintenance">Instandhouding en herstelwerk</option>
                        <option value="consulting">Konsultasiedienste</option>
                        <option value="ict">IKT en sagteware</option>
                        <option value="other">Ander</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="tenderNumber" className="wpn-submit-form__label">
                        Tendernommer <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="tenderNumber"
                        name="tenderNumber"
                        value={formData.tenderNumber}
                        onChange={handleInputChange}
                        placeholder="bv. T2026/001"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="tenderTitle" className="wpn-submit-form__label">
                      Tendertitel <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="tenderTitle"
                      name="tenderTitle"
                      value={formData.tenderTitle}
                      onChange={handleInputChange}
                      placeholder="Kort beskrywende titel"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="tenderDescription" className="wpn-submit-form__label">
                      Tenderbeskrywing <span className="wpn-submit-form__required">*</span>
                    </label>
                    <textarea
                      id="tenderDescription"
                      name="tenderDescription"
                      value={formData.tenderDescription}
                      onChange={handleInputChange}
                      placeholder="Volledige beskrywing van die tender se omvang, doelwitte en vereistes"
                      required
                      className="wpn-submit-form__textarea"
                      rows={6}
                    />
                  </div>
                </div>
              </div>

              {/* Issuing Authority */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Uitreikende owerheid
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="issuingAuthority" className="wpn-submit-form__label">
                      Organisasie / Owerheid <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="issuingAuthority"
                      name="issuingAuthority"
                      value={formData.issuingAuthority}
                      onChange={handleInputChange}
                      placeholder="bv. Stad Kaapstad, Nasionale Tesourie"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="contactPerson" className="wpn-submit-form__label">
                      Kontakpersoon <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="Volle naam"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="contactNumber" className="wpn-submit-form__label">
                        Kontaknommer <span className="wpn-submit-form__required">*</span>
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
                        E-posadres <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="kontak@voorbeeld.co.za"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Dates */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Belangrike datums
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="closingDate" className="wpn-submit-form__label">
                      Sluitingsdatum <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      id="closingDate"
                      name="closingDate"
                      value={formData.closingDate}
                      onChange={handleInputChange}
                      required
                      className="wpn-submit-form__input"
                    />
                    <span className="wpn-submit-form__hint">
                      Datum en tyd waarteen tenders moet ingedien wees
                    </span>
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="briefingDate" className="wpn-submit-form__label">
                        Inligtingsessie datum
                      </label>
                      <input
                        type="datetime-local"
                        id="briefingDate"
                        name="briefingDate"
                        value={formData.briefingDate}
                        onChange={handleInputChange}
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="siteVisitDate" className="wpn-submit-form__label">
                        Perseel besoek datum
                      </label>
                      <input
                        type="datetime-local"
                        id="siteVisitDate"
                        name="siteVisitDate"
                        value={formData.siteVisitDate}
                        onChange={handleInputChange}
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="briefingVenue" className="wpn-submit-form__label">
                      Inligtingsessie lokaal
                    </label>
                    <input
                      type="text"
                      id="briefingVenue"
                      name="briefingVenue"
                      value={formData.briefingVenue}
                      onChange={handleInputChange}
                      placeholder="Volledige adres van inligtingsessie"
                      className="wpn-submit-form__input"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Addisionele besonderhede
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="deliveryAddress" className="wpn-submit-form__label">
                      Aflewer / Indiening adres
                    </label>
                    <textarea
                      id="deliveryAddress"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleInputChange}
                      placeholder="Volledige adres waar tenders afgelewer moet word"
                      className="wpn-submit-form__textarea"
                      rows={3}
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="estimatedValue" className="wpn-submit-form__label">
                      Geskatte waarde
                    </label>
                    <input
                      type="text"
                      id="estimatedValue"
                      name="estimatedValue"
                      value={formData.estimatedValue}
                      onChange={handleInputChange}
                      placeholder="bv. R500,000 - R1,000,000"
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="compulsoryRequirements" className="wpn-submit-form__label">
                      Verpligte vereistes
                    </label>
                    <textarea
                      id="compulsoryRequirements"
                      name="compulsoryRequirements"
                      value={formData.compulsoryRequirements}
                      onChange={handleInputChange}
                      placeholder="Lys alle verpligte vereistes, sertifikate, of kwalifikasies"
                      className="wpn-submit-form__textarea"
                      rows={4}
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="additionalInfo" className="wpn-submit-form__label">
                      Addisionele inligting
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Enige addisionele inligting of spesiale omstandighede"
                      className="wpn-submit-form__textarea"
                      rows={4}
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label className="wpn-submit-form__label">
                      Ondersteunende dokumente
                    </label>
                    <div className="wpn-submit-form__file-upload">
                      <Upload className="wpn-submit-form__file-icon" />
                      <p className="wpn-submit-form__file-text">
                        <strong>Klik om op te laai</strong> of sleep en laat val
                      </p>
                      <p className="wpn-submit-form__file-limit">
                        PDF, DOC, of DOCX (maks. 10MB per lêer)
                      </p>
                    </div>
                    <span className="wpn-submit-form__hint">
                      Laai tenderdokumente, spesifikasies, tekeninge, of ander vereiste lêers op
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-info-banner">
                <AlertCircle className="wpn-info-banner__icon" />
                <p className="wpn-info-banner__text">
                  <strong>Belangrik:</strong> Tenderkennisgewings moet voldoen aan PPPFA en MFMA vereistes. U kennisgewing sal deur ons span hersien word voor publikasie om te verseker dat alle statutêre vereistes nagekom word.
                </p>
              </div>

              {/* Form Actions */}
              <div className="wpn-submit-form__actions">
                <Link to="/submit-af" className="wpn-button wpn-button--outline">
                  Kanselleer
                </Link>
                <div className="wpn-submit-form__actions-group">
                  <button type="button" className="wpn-button wpn-button--outline">
                    Stoor as konsep
                  </button>
                  <button type="submit" className="wpn-button wpn-button--accent">
                    Gaan voort na hersiening
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