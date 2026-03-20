import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Eye, EyeSlash, UploadSimple, X, User, Buildings, CheckCircle } from "@phosphor-icons/react";
import "../../../styles/register.css";

export default function RegisterAF() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerAsPublisher, setRegisterAsPublisher] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - store auth token
    localStorage.setItem("authToken", "mock_token_12345");
    alert("Registrasie suksesvol! Jy kan nou openbare kennisgewings bekyk.");
    navigate("/af/my-rekening");
  };

  return (
    <Layout lang="af" showAds={false}>
      {/* Hero Section */}
      <Hero
        lang="af"
        title="Skep jou rekening"
        subtitle="Sluit aan by Nova Openbare Kennisgewings"
        description="Registreer vir onmiddellike toegang tot wetlike openbare kennisgewings, dien jou eie publikasies in en bestuur alles vanaf jou persoonlike paneelbord."
        icon="user-plus"
        size="sm"
        variant="center"
        breadcrumbs={[
          { label: "Tuis", href: "/af" },
          { label: "Registreer", href: "/af/registreer" }
        ]}
      />

      <div className="wpn-register">
        <div className="wpn-register__container">
          {/* Progress Indicator */}
          <div className="wpn-register-progress">
            <div className="wpn-register-progress__step wpn-register-progress__step--active">
              <div className="wpn-register-progress__indicator">
                <User weight="bold" size={16} />
              </div>
              <div className="wpn-register-progress__label">Rekening</div>
            </div>
            <div className={`wpn-register-progress__step ${registerAsPublisher ? 'wpn-register-progress__step--active' : ''}`}>
              <div className="wpn-register-progress__indicator">
                <Buildings weight="bold" size={16} />
              </div>
              <div className="wpn-register-progress__label">Maatskappy</div>
            </div>
            <div className="wpn-register-progress__step">
              <div className="wpn-register-progress__indicator">
                <CheckCircle weight="bold" size={16} />
              </div>
              <div className="wpn-register-progress__label">Voltooi</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="wpn-register__form">
            {/* User Details Section */}
            <div className="wpn-register-section">
              <h2 className="wpn-register-section__title">Persoonlike inligting</h2>

              <div className="wpn-register-section__body">
                {/* Name & Surname Grid */}
                <div className="wpn-register-field-grid">
                  <div className="wpn-register-field">
                    <label htmlFor="firstName" className="wpn-register-field__label wpn-register-field__label--required">
                      Voornaam
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Voer jou voornaam in"
                      required
                      className="wpn-register-field__input"
                    />
                  </div>

                  <div className="wpn-register-field">
                    <label htmlFor="lastName" className="wpn-register-field__label wpn-register-field__label--required">
                      Van
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Voer jou van in"
                      required
                      className="wpn-register-field__input"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="wpn-register-field">
                  <label htmlFor="email" className="wpn-register-field__label wpn-register-field__label--required">
                    E-posadres
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jy@voorbeeld.com"
                    required
                    className="wpn-register-field__input"
                  />
                </div>

                {/* Password & Confirm Password Grid */}
                <div className="wpn-register-field-grid">
                  <div className="wpn-register-field">
                    <label htmlFor="password" className="wpn-register-field__label wpn-register-field__label--required">
                      Wagwoord
                    </label>
                    <div className="wpn-register-field__password-wrapper">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Skep 'n sterk wagwoord"
                        required
                        className="wpn-register-field__input wpn-register-field__input--password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="wpn-register-field__password-toggle"
                        aria-label={showPassword ? "Versteek wagwoord" : "Wys wagwoord"}
                      >
                        {showPassword ? (
                          <EyeSlash className="wpn-register-field__password-toggle-icon" weight="bold" />
                        ) : (
                          <Eye className="wpn-register-field__password-toggle-icon" weight="bold" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="wpn-register-field">
                    <label htmlFor="confirmPassword" className="wpn-register-field__label wpn-register-field__label--required">
                      Bevestig wagwoord
                    </label>
                    <div className="wpn-register-field__password-wrapper">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Voer jou wagwoord weer in"
                        required
                        className="wpn-register-field__input wpn-register-field__input--password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="wpn-register-field__password-toggle"
                        aria-label={showConfirmPassword ? "Versteek wagwoord" : "Wys wagwoord"}
                      >
                        {showConfirmPassword ? (
                          <EyeSlash className="wpn-register-field__password-toggle-icon" weight="bold" />
                        ) : (
                          <Eye className="wpn-register-field__password-toggle-icon" weight="bold" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Publisher Toggle */}
                <div
                  className="wpn-register-toggle"
                  onClick={() => setRegisterAsPublisher(!registerAsPublisher)}
                >
                  <input
                    type="checkbox"
                    id="registerPublisher"
                    className="wpn-register-toggle__checkbox"
                    checked={registerAsPublisher}
                    onChange={(e) => setRegisterAsPublisher(e.target.checked)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label htmlFor="registerPublisher" className="wpn-register-toggle__label">
                    Ek registreer namens 'n maatskappy of organisasie
                  </label>
                </div>
              </div>
            </div>

            {/* Company Details Section - Only shown if registering as publisher */}
            {registerAsPublisher && (
              <div className="wpn-register-section">
                <h2 className="wpn-register-section__title">Maatskappy besonderhede</h2>

                <div className="wpn-register-section__body">
                  {/* Company Name */}
                  <div className="wpn-register-field">
                    <label htmlFor="companyName" className="wpn-register-field__label wpn-register-field__label--required">
                      Maatskappynaam
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      placeholder="Voer jou maatskappynaam in"
                      required={registerAsPublisher}
                      className="wpn-register-field__input"
                    />
                  </div>

                  {/* Contact Person & Phone Grid */}
                  <div className="wpn-register-field-grid">
                    <div className="wpn-register-field">
                      <label htmlFor="contactPerson" className="wpn-register-field__label wpn-register-field__label--required">
                        Kontakpersoon
                      </label>
                      <input
                        id="contactPerson"
                        type="text"
                        placeholder="Primêre kontak naam"
                        required={registerAsPublisher}
                        className="wpn-register-field__input"
                      />
                    </div>

                    <div className="wpn-register-field">
                      <label htmlFor="phone" className="wpn-register-field__label wpn-register-field__label--required">
                        Telefoonnommer
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+27 12 345 6789"
                        required={registerAsPublisher}
                        className="wpn-register-field__input"
                      />
                    </div>
                  </div>

                  {/* VAT Number */}
                  <div className="wpn-register-field">
                    <label htmlFor="vatNumber" className="wpn-register-field__label">
                      BTW-nommer (opsioneel)
                    </label>
                    <input
                      id="vatNumber"
                      type="text"
                      placeholder="4170226023"
                      className="wpn-register-field__input"
                    />
                  </div>

                  {/* Address */}
                  <div className="wpn-register-field">
                    <label htmlFor="address" className="wpn-register-field__label wpn-register-field__label--required">
                      Besigheidsadres
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder="Straatadres, stad, poskode"
                      required={registerAsPublisher}
                      className="wpn-register-field__input"
                    />
                  </div>

                  {/* Logo Upload */}
                  <div className="wpn-register-logo">
                    <label className="wpn-register-logo__label">Maatskappy logo (opsioneel)</label>
                    {logoPreview ? (
                      <div className="wpn-register-logo__preview-wrapper">
                        <img
                          src={logoPreview}
                          alt="Maatskappy logo voorskou"
                          className="wpn-register-logo__preview"
                        />
                        <button
                          type="button"
                          onClick={removeLogo}
                          className="wpn-register-logo__remove"
                          aria-label="Verwyder logo"
                        >
                          <X className="wpn-register-logo__remove-icon" weight="bold" />
                        </button>
                      </div>
                    ) : (
                      <div className="wpn-register-logo__dropzone">
                        <input
                          type="file"
                          id="logo"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="wpn-register-logo__input"
                        />
                        <label htmlFor="logo" className="wpn-register-logo__upload-label">
                          <UploadSimple className="wpn-register-logo__upload-icon" weight="bold" />
                          <p className="wpn-register-logo__upload-text">
                            Klik om op te laai of sleep en los
                          </p>
                          <p className="wpn-register-logo__upload-hint">
                            PNG, JPG, of SVG tot 5MB
                          </p>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Terms & Actions */}
            <div className="wpn-register-section">
              <div className="wpn-register-section__body">
                {/* Terms Checkbox */}
                <div className="wpn-register-terms">
                  <input
                    type="checkbox"
                    id="terms"
                    className="wpn-register-terms__checkbox"
                    required
                  />
                  <label htmlFor="terms" className="wpn-register-terms__label">
                    Ek stem in tot die{" "}
                    <Link to="/af/terms" className="wpn-register-terms__link">
                      Diensbepalings
                    </Link>
                    {" "}en{" "}
                    <Link to="/af/privacy" className="wpn-register-terms__link">
                      Privaatheidsbeleid
                    </Link>
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="wpn-register-actions">
                  <Button
                    type="button"
                    variant="outline"
                    className="wpn-register-actions__button"
                    onClick={() => navigate("/af/aanmeld")}
                  >
                    Kanselleer
                  </Button>
                  <Button
                    type="submit"
                    className="wpn-register-actions__button wpn-button wpn-button--accent"
                  >
                    Skep rekening
                  </Button>
                </div>
              </div>
            </div>
          </form>

          {/* Footer */}
          <div className="wpn-register__footer">
            Het jy reeds 'n rekening?{" "}
            <Link to="/af/aanmeld" className="wpn-register__footer-link">
              Meld hier aan
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
