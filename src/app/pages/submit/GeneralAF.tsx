import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function GeneralAF() {
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
              Dien algemene kennisgewing in
            </h1>
            <p className="wpn-submit-form__subtitle">
              Voltooi die vorm hieronder om u algemene publieke kennisgewing in te dien. Alle velde gemerk met * is verplig.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="wpn-submit-form__card">
              {/* Notice Type */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Kennisgewingtipe
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="noticeType" className="wpn-submit-form__label">
                      Algemene kennisgewingtipe <span className="wpn-submit-form__required">*</span>
                    </label>
                    <select
                      id="noticeType"
                      name="noticeType"
                      value={formData.noticeType}
                      onChange={handleInputChange}
                      required
                      className="wpn-submit-form__select"
                    >
                      <option value="">Kies kennisgewingtipe</option>
                      <option value="lost-documents">Verlore Dokumente</option>
                      <option value="name-change">Naamverandering</option>
                      <option value="company-formation">Maatskappy Vorming</option>
                      <option value="company-dissolution">Maatskappy Ontbinding</option>
                      <option value="partnership">Vennootskap Kennisgewing</option>
                      <option value="trust">Trust Kennisgewing</option>
                      <option value="curatorship">Kuratele Kennisgewing</option>
                      <option value="adoption">Aanneming Kennisgewing</option>
                      <option value="environmental">Omgewings Kennisgewing</option>
                      <option value="public-meeting">Openbare Vergadering Kennisgewing</option>
                      <option value="other">Ander Algemene Kennisgewing</option>
                    </select>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="noticeCategory" className="wpn-submit-form__label">
                      Kategorie
                    </label>
                    <select
                      id="noticeCategory"
                      name="noticeCategory"
                      value={formData.noticeCategory}
                      onChange={handleInputChange}
                      className="wpn-submit-form__select"
                    >
                      <option value="">Kies kategorie (opsioneel)</option>
                      <option value="legal">Wetlik</option>
                      <option value="corporate">Korporatief</option>
                      <option value="personal">Persoonlik</option>
                      <option value="government">Regering</option>
                      <option value="community">Gemeenskap</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notice Details */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Kennisgewing besonderhede
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="noticeTitle" className="wpn-submit-form__label">
                      Kennisgewing titel <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="noticeTitle"
                      name="noticeTitle"
                      value={formData.noticeTitle}
                      onChange={handleInputChange}
                      placeholder="Kort beskrywende titel van die kennisgewing"
                      required
                      className="wpn-submit-form__input"
                    />
                    <span className="wpn-submit-form__hint">
                      Hou dit duidelik en bondig (bv. "Verlies van ID Dokument" of "Vorming van Maatskappy")
                    </span>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="referenceNumber" className="wpn-submit-form__label">
                      Verwysingsnommer
                    </label>
                    <input
                      type="text"
                      id="referenceNumber"
                      name="referenceNumber"
                      value={formData.referenceNumber}
                      onChange={handleInputChange}
                      placeholder="U interne verwysing (indien van toepassing)"
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="noticeBody" className="wpn-submit-form__label">
                      Kennisgewing inhoud <span className="wpn-submit-form__required">*</span>
                    </label>
                    <textarea
                      id="noticeBody"
                      name="noticeBody"
                      value={formData.noticeBody}
                      onChange={handleInputChange}
                      placeholder="Verskaf die volledige teks van u kennisgewing. Wees so gedetailleerd en spesifiek as moontlik."
                      required
                      className="wpn-submit-form__textarea"
                      rows={8}
                    />
                    <span className="wpn-submit-form__hint">
                      Minimum 50 karakters. Sluit alle relevante besonderhede, datums, name, en kontakinligting in.
                    </span>
                  </div>
                </div>
              </div>

              {/* Location & Publication */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Ligging & publikasie
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="location" className="wpn-submit-form__label">
                        Ligging / Area <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Stad of dorp"
                        required
                        className="wpn-submit-form__input"
                      />
                    </div>

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
                        <option value="National">Nasionaal</option>
                      </select>
                    </div>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="publicationDuration" className="wpn-submit-form__label">
                      Publikasie tydperk
                    </label>
                    <select
                      id="publicationDuration"
                      name="publicationDuration"
                      value={formData.publicationDuration}
                      onChange={handleInputChange}
                      className="wpn-submit-form__select"
                    >
                      <option value="">Standaard (30 dae)</option>
                      <option value="7">7 dae</option>
                      <option value="14">14 dae</option>
                      <option value="30">30 dae (aanbeveel)</option>
                      <option value="60">60 dae</option>
                      <option value="90">90 dae</option>
                    </select>
                    <span className="wpn-submit-form__hint">
                      Hoe lank moet u kennisgewing publiek toeganklik bly?
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Kontakinligting
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicantType" className="wpn-submit-form__label">
                        Indien as <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="applicantType"
                        name="applicantType"
                        value={formData.applicantType}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Kies tipe</option>
                        <option value="individual">Individu</option>
                        <option value="company">Maatskappy</option>
                        <option value="organization">Organisasie</option>
                        <option value="legal-representative">Wetlike Verteenwoordiger</option>
                        <option value="government">Regeringsdepartement</option>
                      </select>
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="applicantName" className="wpn-submit-form__label">
                        Naam <span className="wpn-submit-form__required">*</span>
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
                        placeholder="kontak@voorbeeld.co.za"
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
                      placeholder="Enige addisionele inligting of spesiale instruksies"
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
                      Laai enige ondersteunende dokumente, sertifikate, of bewys van identiteit op
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-info-banner">
                <AlertCircle className="wpn-info-banner__icon" />
                <p className="wpn-info-banner__text">
                  <strong>Belangrik:</strong> Algemene kennisgewings moet duidelik en volledig wees. U kennisgewing sal deur ons span hersien word voor publikasie om te verseker dat alle vereistes nagekom word.
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