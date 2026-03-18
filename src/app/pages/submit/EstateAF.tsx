import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function EstateAF() {
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
              Dien boedelkennisgewing in
            </h1>
            <p className="wpn-submit-form__subtitle">
              Voltooi die vorm hieronder om u boedelkennisgewing in te dien. Alle velde gemerk met * is verplig vir wetlike nakoming.
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
                      Boedelkennisgewingtipe <span className="wpn-submit-form__required">*</span>
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
                      <option value="creditors">Kennisgewing aan Krediteure (Vorm J187)</option>
                      <option value="heirs">Kennisgewing aan Erfgename en Legatarisse</option>
                      <option value="executor">Kennisgewing van Eksekuteur Aanstelling</option>
                      <option value="distribution">Kennisgewing van Distribusierekening</option>
                      <option value="objection">Kennisgewing van Beswaartydperk</option>
                      <option value="other">Ander Boedelkennisgewing</option>
                    </select>
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="estateNumber" className="wpn-submit-form__label">
                      Boedelnommer <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="estateNumber"
                      name="estateNumber"
                      value={formData.estateNumber}
                      onChange={handleInputChange}
                      placeholder="bv. 12345/2026"
                      required
                      className="wpn-submit-form__input"
                    />
                    <span className="wpn-submit-form__hint">
                      Boedelnommer toegeken deur die Meesterskantoor
                    </span>
                  </div>
                </div>
              </div>

              {/* Deceased Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Oorledene inligting
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="deceasedName" className="wpn-submit-form__label">
                      Volle naam van oorledene <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="deceasedName"
                      name="deceasedName"
                      value={formData.deceasedName}
                      onChange={handleInputChange}
                      placeholder="Volle wettige naam insluitend vanne"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="deceasedIdNumber" className="wpn-submit-form__label">
                        ID nommer <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="text"
                        id="deceasedIdNumber"
                        name="deceasedIdNumber"
                        value={formData.deceasedIdNumber}
                        onChange={handleInputChange}
                        placeholder="13-syfer ID nommer"
                        required
                        className="wpn-submit-form__input"
                        maxLength={13}
                      />
                    </div>

                    <div className="wpn-submit-form__field">
                      <label htmlFor="dateOfDeath" className="wpn-submit-form__label">
                        Datum van oorlye <span className="wpn-submit-form__required">*</span>
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
                      Boedeltipe <span className="wpn-submit-form__required">*</span>
                    </label>
                    <select
                      id="estateType"
                      name="estateType"
                      value={formData.estateType}
                      onChange={handleInputChange}
                      required
                      className="wpn-submit-form__select"
                    >
                      <option value="">Kies boedeltipe</option>
                      <option value="testate">Testamentêr (Met Testament)</option>
                      <option value="intestate">Intestaat (Sonder Testament)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Executor Information */}
              <div className="wpn-submit-form__section">
                <h2 className="wpn-submit-form__section-title">
                  Eksekuteur inligting
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__field">
                    <label htmlFor="executorName" className="wpn-submit-form__label">
                      Eksekuteur volle naam <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="executorName"
                      name="executorName"
                      value={formData.executorName}
                      onChange={handleInputChange}
                      placeholder="Naam van aangestelde eksekuteur"
                      required
                      className="wpn-submit-form__input"
                    />
                  </div>

                  <div className="wpn-submit-form__field">
                    <label htmlFor="executorIdNumber" className="wpn-submit-form__label">
                      Eksekuteur ID nommer <span className="wpn-submit-form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="executorIdNumber"
                      name="executorIdNumber"
                      value={formData.executorIdNumber}
                      onChange={handleInputChange}
                      placeholder="13-syfer ID nommer"
                      required
                      className="wpn-submit-form__input"
                      maxLength={13}
                    />
                  </div>

                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="executorContactNumber" className="wpn-submit-form__label">
                        Kontaknommer <span className="wpn-submit-form__required">*</span>
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
                        E-posadres <span className="wpn-submit-form__required">*</span>
                      </label>
                      <input
                        type="email"
                        id="executorEmail"
                        name="executorEmail"
                        value={formData.executorEmail}
                        onChange={handleInputChange}
                        placeholder="eksekuteur@voorbeeld.co.za"
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
                  Meesterskantoor & sperdatums
                </h2>
                <div className="wpn-submit-form__fields">
                  <div className="wpn-submit-form__row wpn-submit-form__row--2col">
                    <div className="wpn-submit-form__field">
                      <label htmlFor="masterOffice" className="wpn-submit-form__label">
                        Meesterskantoor <span className="wpn-submit-form__required">*</span>
                      </label>
                      <select
                        id="masterOffice"
                        name="masterOffice"
                        value={formData.masterOffice}
                        onChange={handleInputChange}
                        required
                        className="wpn-submit-form__select"
                      >
                        <option value="">Kies Meesterskantoor</option>
                        <option value="Cape Town">Kaapstad</option>
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
                        Krediteure sperdatum <span className="wpn-submit-form__required">*</span>
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
                        Datum waarteen krediteure eise moet indien
                      </span>
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
                      Laai sterfkennis, testament, eksekuteursbriewe, of ander relevante dokumente op
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-info-banner">
                <AlertCircle className="wpn-info-banner__icon" />
                <p className="wpn-info-banner__text">
                  <strong>Belangrik:</strong> Boedelkennisgewings moet voldoen aan die Boedelwet 66 van 1965. U kennisgewing sal deur ons span hersien word voor publikasie om wettige nakoming te verseker.
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