import { useNavigate } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { useHero } from "../../hooks/useHero";
import AccountSidebar from "../../components/AccountSidebar";
import { CheckCircle, User, Envelope, Phone, MapPin, Buildings, Lock, FloppyDisk } from "@phosphor-icons/react";
import { useState } from "react";
import "../../../styles/components.css";

export default function Profile() {
  const heroData = useHero('profile', 'en');
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("You have been logged out.");
    navigate("/login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 5000);
  };

  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      <div className="wpn-account-wrapper">
        <div className="wpn-account-container">
          <h1 className="wpn-heading-h1 wpn-heading--primary wpn-account__page-title">
            Account details
          </h1>

          <div className="wpn-account-layout">
            {/* Sidebar Navigation */}
            <AccountSidebar currentPage="profile" onLogout={handleLogout} />

            {/* Main Content */}
            <div className="wpn-account-layout__main">
              {/* Success Alert */}
              {showSuccessAlert && (
                <div className="wpn-alert wpn-alert--success">
                  <CheckCircle className="wpn-alert__icon" />
                  <div className="wpn-alert__content">
                    <strong className="wpn-alert__title">Profile updated successfully!</strong>
                    <p className="wpn-alert__message">Your changes have been saved.</p>
                  </div>
                </div>
              )}

              {/* Personal Information Section */}
              <div className="wpn-account-card">
                <div className="wpn-account-card__header">
                  <div>
                    <h2 className="wpn-account-card__title">Personal information</h2>
                    <p className="wpn-account-card__text wpn-account-card__text--muted">
                      Update your personal details and contact information
                    </p>
                  </div>
                </div>

                <form className="wpn-form" onSubmit={handleSubmit}>
                  <div className="wpn-form__grid wpn-form__grid--2col">
                    <div className="wpn-form__group">
                      <label htmlFor="firstName" className="wpn-form__label wpn-form__label--required">
                        <User className="wpn-form__label-icon" />
                        First name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="wpn-form__input"
                        defaultValue="John"
                        required
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label htmlFor="lastName" className="wpn-form__label wpn-form__label--required">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="wpn-form__input"
                        defaultValue="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="wpn-form__group">
                    <label htmlFor="email" className="wpn-form__label wpn-form__label--required">
                      <Envelope className="wpn-form__label-icon" />
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="wpn-form__input"
                      defaultValue="john.doe@example.com"
                      required
                    />
                    <span className="wpn-form__help">We'll never share your email with anyone else</span>
                  </div>

                  <div className="wpn-form__group">
                    <label htmlFor="phone" className="wpn-form__label">
                      <Phone className="wpn-form__label-icon" />
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="wpn-form__input"
                      defaultValue="+27 12 345 6789"
                    />
                  </div>

                  <div className="wpn-form__group">
                    <label htmlFor="language" className="wpn-form__label">
                      Preferred language
                    </label>
                    <select id="language" className="wpn-form__select" defaultValue="en">
                      <option value="en">English</option>
                      <option value="af">Afrikaans</option>
                    </select>
                  </div>

                  <div className="wpn-form__actions">
                    <button type="submit" className="wpn-button wpn-button--accent">
                      <FloppyDisk className="wpn-icon wpn-icon--sm" />
                      Save changes
                    </button>
                  </div>
                </form>
              </div>

              {/* Address Information */}
              <div className="wpn-account-card">
                <div className="wpn-account-card__header">
                  <div>
                    <h2 className="wpn-account-card__title">Address information</h2>
                    <p className="wpn-account-card__text wpn-account-card__text--muted">
                      This address will be used for billing and correspondence
                    </p>
                  </div>
                </div>

                <form className="wpn-form">
                  <div className="wpn-form__group">
                    <label htmlFor="street" className="wpn-form__label">
                      <MapPin className="wpn-form__label-icon" />
                      Street address
                    </label>
                    <input
                      id="street"
                      type="text"
                      className="wpn-form__input"
                      defaultValue="123 Main Street"
                    />
                  </div>

                  <div className="wpn-form__grid wpn-form__grid--2col">
                    <div className="wpn-form__group">
                      <label htmlFor="city" className="wpn-form__label">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        className="wpn-form__input"
                        defaultValue="Pretoria"
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label htmlFor="postalCode" className="wpn-form__label">
                        Postal code
                      </label>
                      <input
                        id="postalCode"
                        type="text"
                        className="wpn-form__input"
                        defaultValue="0001"
                      />
                    </div>
                  </div>

                  <div className="wpn-form__group">
                    <label htmlFor="province" className="wpn-form__label">
                      Province
                    </label>
                    <select id="province" className="wpn-form__select" defaultValue="gauteng">
                      <option value="">Select province</option>
                      <option value="gauteng">Gauteng</option>
                      <option value="western-cape">Western Cape</option>
                      <option value="eastern-cape">Eastern Cape</option>
                      <option value="kwazulu-natal">KwaZulu-Natal</option>
                      <option value="free-state">Free State</option>
                      <option value="limpopo">Limpopo</option>
                      <option value="mpumalanga">Mpumalanga</option>
                      <option value="northern-cape">Northern Cape</option>
                      <option value="north-west">North West</option>
                    </select>
                  </div>

                  <div className="wpn-form__actions">
                    <button type="submit" className="wpn-button wpn-button--accent">
                      <FloppyDisk className="wpn-icon wpn-icon--sm" />
                      Save address
                    </button>
                  </div>
                </form>
              </div>

              {/* Organization Details (Optional) */}
              <div className="wpn-account-card">
                <div className="wpn-account-card__header">
                  <div>
                    <h2 className="wpn-account-card__title">Organization details</h2>
                    <p className="wpn-account-card__text wpn-account-card__text--muted">
                      Optional: Add your organization details for business accounts
                    </p>
                  </div>
                </div>

                <form className="wpn-form">
                  <div className="wpn-form__group">
                    <label htmlFor="orgName" className="wpn-form__label">
                      <Buildings className="wpn-form__label-icon" />
                      Organization name
                    </label>
                    <input
                      id="orgName"
                      type="text"
                      className="wpn-form__input"
                      placeholder="Your company or organization name"
                    />
                  </div>

                  <div className="wpn-form__group">
                    <label htmlFor="vatNumber" className="wpn-form__label">
                      VAT number
                    </label>
                    <input
                      id="vatNumber"
                      type="text"
                      className="wpn-form__input"
                      placeholder="e.g., 4123456789"
                    />
                  </div>

                  <div className="wpn-form__group">
                    <label htmlFor="regNumber" className="wpn-form__label">
                      Registration number
                    </label>
                    <input
                      id="regNumber"
                      type="text"
                      className="wpn-form__input"
                      placeholder="Company registration number"
                    />
                  </div>

                  <div className="wpn-form__actions">
                    <button type="submit" className="wpn-button wpn-button--accent">
                      <FloppyDisk className="wpn-icon wpn-icon--sm" />
                      Save organization
                    </button>
                  </div>
                </form>
              </div>

              {/* Password Change Section */}
              <div className="wpn-account-card">
                <div className="wpn-account-card__header">
                  <div>
                    <h2 className="wpn-account-card__title">Change password</h2>
                    <p className="wpn-account-card__text wpn-account-card__text--muted">
                      Update your password to keep your account secure
                    </p>
                  </div>
                </div>

                <form className="wpn-form">
                  <div className="wpn-form__group">
                    <label htmlFor="currentPassword" className="wpn-form__label wpn-form__label--required">
                      Current password
                    </label>
                    <input
                      id="currentPassword"
                      type="password"
                      className="wpn-form__input"
                      required
                    />
                  </div>

                  <div className="wpn-form__group">
                    <label htmlFor="newPassword" className="wpn-form__label wpn-form__label--required">
                      New password
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      className="wpn-form__input"
                      required
                    />
                    <span className="wpn-form__help">
                      Password must be at least 8 characters long
                    </span>
                  </div>

                  <div className="wpn-form__group">
                    <label htmlFor="confirmPassword" className="wpn-form__label wpn-form__label--required">
                      Confirm new password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="wpn-form__input"
                      required
                    />
                  </div>

                  <div className="wpn-form__actions">
                    <button type="submit" className="wpn-button wpn-button--accent">
                      <Lock className="wpn-icon wpn-icon--sm" />
                      Update password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}