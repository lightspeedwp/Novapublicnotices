import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function BusinessLicenceAF() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    licenceType: "",
    businessName: "",
    tradingName: "",
    registrationNumber: "",
    businessActivity: "",
    physicalAddress: "",
    suburb: "",
    city: "",
    province: "",
    postalCode: "",
    applicantName: "",
    applicantIdNumber: "",
    contactNumber: "",
    email: "",
    numberOfEmployees: "",
    commencementDate: "",
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
              Dien besigheidslisensie kennisgewing in
            </h1>
            <p className="wpn-submit-form__subtitle">
              Voltooi die vorm hieronder om u besigheidslisensie of permit aansoek kennisgewing in te dien. Alle velde gemerk met * is verplig.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="wpn-submit-form__card">
              {/* Licence Type */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Lisensie tipe
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="licenceType" className="wpn-submit-form__label">
                      Besigheidslisensie tipe <span className="wpn-submit-form__required">*</span>
                    </label>
                    <select
                      id="licenceType"
                      name="licenceType"
                      value={formData.licenceType}
                      onChange={handleInputChange}
                      required
                      className="wpn-submit-form__select"
                    >
                      <option value="">Kies lisensie tipe</option>
                      <option value="trading">Handels Lisensie</option>
                      <option value="health">Gesondheid & Veiligheid Permit</option>
                      <option value="food">Voedselhanteraar se Lisensie</option>
                      <option value="street-trading">Straathandel Permit</option>
                      <option value="entertainment">Vermaaklikheids Lisensie</option>
                      <option value="signage">Bordteken Permit</option>
                      <option value="outdoor-advertising">Buitelug Advertensies</option>
                      <option value="other">Ander Besigheid Permit</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Besigheidsinligting
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="businessName" className="wpn-submit-form__label">
                        Geregistreerde besigheidsnaam <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Wettige entiteitnaam"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="tradingName" className="wpn-submit-form__label">
                        Handelsnaam
                      </label>
                      <input
                        type="text"
                        id="tradingName"
                        name="tradingName"
                        value={formData.tradingName}
                        onChange={handleInputChange}
                        placeholder="Handel as (indien anders)"
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="registrationNumber" className="wpn-submit-form__label">
                        Registrasienommer <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="registrationNumber"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleInputChange}
                        placeholder="Maatskappy / CK / BK registrasienommer"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="commencementDate" className="wpn-submit-form__label">
                        Besigheid aanvang datum
                      </label>
                      <input
                        type="date"
                        id="commencementDate"
                        name="commencementDate"
                        value={formData.commencementDate}
                        onChange={handleInputChange}
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="businessActivity" className="wpn-submit-form__label">
                      Besigheidsaktiwiteit <span className="wpn-submit-form__required">*</span>
                    </label>
                    <textarea
                      id="businessActivity"
                      name="businessActivity"
                      value={formData.businessActivity}
                      onChange={handleInputChange}
                      placeholder="Beskryf die aard van u besigheidsaktiwiteite in detail"
                      required
                      className="wpn-submit-form__textarea"
                      rows={4}
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="numberOfEmployees" className="wpn-submit-form__label">
                      Aantal werknemers
                    </label>
                    <select
                      id="numberOfEmployees"
                      name="numberOfEmployees"
                      value={formData.numberOfEmployees}
                      onChange={handleInputChange}
                      className="wpn-submit-form__select"
                    >
                      <option value="">Kies omvang</option>
                      <option value="1-5">1-5 werknemers</option>
                      <option value="6-10">6-10 werknemers</option>
                      <option value="11-20">11-20 werknemers</option>
                      <option value="21-50">21-50 werknemers</option>
                      <option value="51+">51+ werknemers</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Business Address */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Besigheidsadres
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="physicalAddress" className="wpn-submit-form__label">
                      Fisiese adres <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="physicalAddress"
                      name="physicalAddress"
                      value={formData.physicalAddress}
                      onChange={handleInputChange}
                      placeholder="Straatadres en nommer"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="suburb" className="wpn-submit-form__label">
                        Voorstad <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="suburb"
                        name="suburb"
                        value={formData.suburb}
                        onChange={handleInputChange}
                        placeholder="Voorstad of area"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="city" className="wpn-submit-form__label">
                        Stad <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Stad of dorp"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="province" className="wpn-submit-form__label">
                        Provinsie <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Kies provinsie</option>
                        <option value="Eastern Cape">Oos-Kaap</option>
                        <option value="Free State">Vrystaat</option>
                        <option value="Gauteng">Gauteng</option>
                        <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                        <option value="Limpopo">Limpopo</option>
                        <option value="Mpumalanga">Mpumalanga</option>
                        <option value="Northern Cape">Noord-Kaap</option>
                        <option value="North West">Noordwes</option>
                        <option value="Western Cape">Wes-Kaap</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="postalCode" className="wpn-submit-form__label">
                        Poskode <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="4-syfer kode"
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
                  Aansoeker inligting
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="applicantName" className="wpn-submit-form__label">
                      Aansoeker volle naam <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="applicantName"
                      name="applicantName"
                      value={formData.applicantName}
                      onChange={handleInputChange}
                      placeholder="Volle wettige naam"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="applicantIdNumber" className="wpn-submit-form__label">
                      ID nommer <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="applicantIdNumber"
                      name="applicantIdNumber"
                      value={formData.applicantIdNumber}
                      onChange={handleInputChange}
                      placeholder="13-syfer ID nommer"
                      required
                      className="wpn-submit-form__input"
                      maxLength={13}
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
                        placeholder="aansoeker@voorbeeld.co.za"
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
                  Addisionele inligting
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="additionalInfo" className="wpn-submit-form__label">
                      Addisionele notas
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
                      Laai maatskappy registrasie, ID afskrifte, bewys van adres, of ander vereiste dokumente op
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-info-banner">
                <AlertCircle className="wpn-info-banner__icon" />
                <p className="wpn-info-banner__text">
                  <strong>Belangrik:</strong> Besigheidslisensiekennisgewings moet voldoen aan munisipale wette. U kennisgewing sal deur ons span hersien word voor publikasie om nakoming te verseker.
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