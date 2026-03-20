import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Eye, EyeSlash, UploadSimple, X, User, Buildings, CheckCircle } from "@phosphor-icons/react";
import "../../../styles/register.css";

export default function Register() {
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
    alert("Registration successful! You can now view public notices.");
    navigate("/my-account");
  };

  return (
    <Layout lang="en" showAds={false}>
      {/* Hero Section */}
      <Hero
        lang="en"
        title="Create your account"
        subtitle="Join Nova Public Notices"
        description="Register for instant access to legal public notices, submit your own publications, and manage everything from your personalized dashboard."
        icon="user-plus"
        size="sm"
        variant="center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Register", href: "/register" }
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
              <div className="wpn-register-progress__label">Account</div>
            </div>
            <div className={`wpn-register-progress__step ${registerAsPublisher ? 'wpn-register-progress__step--active' : ''}`}>
              <div className="wpn-register-progress__indicator">
                <Buildings weight="bold" size={16} />
              </div>
              <div className="wpn-register-progress__label">Company</div>
            </div>
            <div className="wpn-register-progress__step">
              <div className="wpn-register-progress__indicator">
                <CheckCircle weight="bold" size={16} />
              </div>
              <div className="wpn-register-progress__label">Complete</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="wpn-register__form">
            {/* User Details Section */}
            <div className="wpn-register-section">
              <h2 className="wpn-register-section__title">Personal information</h2>

              <div className="wpn-register-section__body">
                {/* Name & Surname Grid */}
                <div className="wpn-register-field-grid">
                  <div className="wpn-register-field">
                    <label htmlFor="firstName" className="wpn-register-field__label wpn-register-field__label--required">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      required
                      className="wpn-register-field__input"
                    />
                  </div>

                  <div className="wpn-register-field">
                    <label htmlFor="lastName" className="wpn-register-field__label wpn-register-field__label--required">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      required
                      className="wpn-register-field__input"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="wpn-register-field">
                  <label htmlFor="email" className="wpn-register-field__label wpn-register-field__label--required">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="wpn-register-field__input"
                  />
                </div>

                {/* Password & Confirm Password Grid */}
                <div className="wpn-register-field-grid">
                  <div className="wpn-register-field">
                    <label htmlFor="password" className="wpn-register-field__label wpn-register-field__label--required">
                      Password
                    </label>
                    <div className="wpn-register-field__password-wrapper">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        required
                        className="wpn-register-field__input wpn-register-field__input--password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="wpn-register-field__password-toggle"
                        aria-label={showPassword ? "Hide password" : "Show password"}
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
                      Confirm password
                    </label>
                    <div className="wpn-register-field__password-wrapper">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        required
                        className="wpn-register-field__input wpn-register-field__input--password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="wpn-register-field__password-toggle"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
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
                    I'm registering on behalf of a company or organization
                  </label>
                </div>
              </div>
            </div>

            {/* Company Details Section - Only shown if registering as publisher */}
            {registerAsPublisher && (
              <div className="wpn-register-section">
                <h2 className="wpn-register-section__title">Company details</h2>

                <div className="wpn-register-section__body">
                  {/* Company Name */}
                  <div className="wpn-register-field">
                    <label htmlFor="companyName" className="wpn-register-field__label wpn-register-field__label--required">
                      Company name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      required={registerAsPublisher}
                      className="wpn-register-field__input"
                    />
                  </div>

                  {/* Contact Person & Phone Grid */}
                  <div className="wpn-register-field-grid">
                    <div className="wpn-register-field">
                      <label htmlFor="contactPerson" className="wpn-register-field__label wpn-register-field__label--required">
                        Contact person
                      </label>
                      <input
                        id="contactPerson"
                        type="text"
                        placeholder="Primary contact name"
                        required={registerAsPublisher}
                        className="wpn-register-field__input"
                      />
                    </div>

                    <div className="wpn-register-field">
                      <label htmlFor="phone" className="wpn-register-field__label wpn-register-field__label--required">
                        Phone number
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
                      VAT number (optional)
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
                      Business address
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder="Street address, city, postal code"
                      required={registerAsPublisher}
                      className="wpn-register-field__input"
                    />
                  </div>

                  {/* Logo Upload */}
                  <div className="wpn-register-logo">
                    <label className="wpn-register-logo__label">Company logo (optional)</label>
                    {logoPreview ? (
                      <div className="wpn-register-logo__preview-wrapper">
                        <img
                          src={logoPreview}
                          alt="Company logo preview"
                          className="wpn-register-logo__preview"
                        />
                        <button
                          type="button"
                          onClick={removeLogo}
                          className="wpn-register-logo__remove"
                          aria-label="Remove logo"
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
                            Click to upload or drag and drop
                          </p>
                          <p className="wpn-register-logo__upload-hint">
                            PNG, JPG, or SVG up to 5MB
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
                    I agree to the{" "}
                    <Link to="/terms" className="wpn-register-terms__link">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="wpn-register-terms__link">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="wpn-register-actions">
                  <Button
                    type="button"
                    variant="outline"
                    className="wpn-register-actions__button"
                    onClick={() => navigate("/login")}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="wpn-register-actions__button wpn-button wpn-button--accent"
                  >
                    Create account
                  </Button>
                </div>
              </div>
            </div>
          </form>

          {/* Footer */}
          <div className="wpn-register__footer">
            Already have an account?{" "}
            <Link to="/login" className="wpn-register__footer-link">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
