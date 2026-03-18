import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function TownPlanningAF() {
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
              Dien stadsbeplanningskennisgewing in
            </h1>
            <p className="wpn-submit-form__subtitle">
              Voltooi die vorm hieronder om u stadsbeplannings- of hersonering kennisgewing in te dien. Alle velde gemerk met * is verplig.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="wpn-submit-form__card">
              {/* Application Type */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Aansoekvorm
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicationType" className="wpn-submit-form__label">
                        Kennisgewingtipe <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="applicationType"
                        name="applicationType"
                        value={formData.applicationType}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Kies kennisgewingtipe</option>
                        <option value="rezoning">Hersonerings Aansoek</option>
                        <option value="land-use">Grondgebruik Aansoek</option>
                        <option value="subdivision">Onderverdeling Aansoek</option>
                        <option value="consolidation">Konsolidasie Aansoek</option>
                        <option value="departure">Afwyking Aansoek</option>
                        <option value="amendment">Wysiging aan Dorpsbeplanningskema</option>
                        <option value="other">Ander Beplanningskennisgewing</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicationNumber" className="wpn-submit-form__label">
                        Aansoeknommer
                      </label>
                      <input
                        type="text"
                        id="applicationNumber"
                        name="applicationNumber"
                        value={formData.applicationNumber}
                        onChange={handleInputChange}
                        placeholder="Munisipale verwysingsnommer (indien beskikbaar)"
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Eiendom besonderhede
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="erfNumber" className="wpn-submit-form__label">
                        Erf / Plaas nommer <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="erfNumber"
                        name="erfNumber"
                        value={formData.erfNumber}
                        onChange={handleInputChange}
                        placeholder="bv. Erf 1234 of Plaas 567"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="propertyDescription" className="wpn-submit-form__label">
                        Eiendom beskrywing <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="propertyDescription"
                        name="propertyDescription"
                        value={formData.propertyDescription}
                        onChange={handleInputChange}
                        placeholder="Volledige eiendom beskrywing"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

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
                      <label htmlFor="municipality" className="wpn-submit-form__label">
                        Munisipaliteit <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="municipality"
                        name="municipality"
                        value={formData.municipality}
                        onChange={handleInputChange}
                        placeholder="bv. Stad Kaapstad"
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
                  Sonering & voorgestelde gebruik
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="currentZoning" className="wpn-submit-form__label">
                        Huidige sonering <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="currentZoning"
                        name="currentZoning"
                        value={formData.currentZoning}
                        onChange={handleInputChange}
                        placeholder="bv. Residensieel 1"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="proposedZoning" className="wpn-submit-form__label">
                        Voorgestelde sonering <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="proposedZoning"
                        name="proposedZoning"
                        value={formData.proposedZoning}
                        onChange={handleInputChange}
                        placeholder="bv. Besigheid 2"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="proposedUse" className="wpn-submit-form__label">
                      Voorgestelde grondgebruik <span className="wpn-submit-form__required">*</span>
                    </label>
                    <textarea
                      id="proposedUse"
                      name="proposedUse"
                      value={formData.proposedUse}
                      onChange={handleInputChange}
                      placeholder="Beskryf die beoogde gebruik van die eiendom in detail"
                      required
                      className="wpn-submit-form__textarea"
                      rows={4}
                    />
                    <span className="wpn-submit-form__hint">
                      Verskaf 'n omvattende beskrywing van hoe die eiendom gebruik sal word
                    </span>
                  </div>
                </div>
              </div>

              {/* Applicant Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Aansoeker inligting
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicantType" className="wpn-submit-form__label">
                        Aansoeker tipe <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="applicantType"
                        name="applicantType"
                        value={formData.applicantType}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Kies aansoeker tipe</option>
                        <option value="owner">Eiendom Eienaar</option>
                        <option value="agent">Gemagtigde Agent</option>
                        <option value="developer">Ontwikkelaar</option>
                        <option value="planner">Stadsbeplanner</option>
                        <option value="architect">Argitek</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicantName" className="wpn-submit-form__label">
                        Aansoeker naam <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="applicantName"
                        name="applicantName"
                        value={formData.applicantName}
                        onChange={handleInputChange}
                        placeholder="Volle naam of maatskappy naam"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>
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
                      placeholder="Enige addisionele inligting, spesiale omstandighede, of notas"
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
                      Laai perseel planne, uitlegplanne, omgewingsverslae, of ander vereiste dokumente op
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-info-banner">
                <AlertCircle className="wpn-info-banner__icon" />
                <p className="wpn-info-banner__text">
                  <strong>Belangrik:</strong> Stadsbeplanningkennisgewings moet voldoen aan die toepaslike munisipale beplanningswette. U kennisgewing sal deur ons span hersien word voor publikasie om wettige nakoming te verseker.
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