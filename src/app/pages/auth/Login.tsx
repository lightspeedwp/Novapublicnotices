import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { Eye, EyeSlash, Check, FileText, Bell, Clock, Shield, MagnifyingGlass } from "@phosphor-icons/react";
import "../../../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - store auth token
    localStorage.setItem("authToken", "mock_token_12345");
    alert("Login successful! You can now view public notices.");
    navigate("/my-account");
  };

  return (
    <Layout lang="en" showAds={false}>
      <div className="wpn-auth">
        <div className="wpn-auth__container">
          <div className="wpn-auth-grid">
            {/* Login Form Column */}
            <div className="wpn-auth-form">
              <div className="wpn-auth-form__header">
                <h1 className="wpn-auth-form__title">
                  Welcome back
                </h1>
                <p className="wpn-auth-form__subtitle">
                  Sign in to your account to access public notices
                </p>
              </div>

              <form onSubmit={handleSubmit} className="wpn-auth-form__body">
                <div className="wpn-auth-form__field">
                  <label htmlFor="email" className="wpn-auth-form__label">
                    Email address *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                    className="wpn-auth-form__input"
                  />
                </div>

                <div className="wpn-auth-form__field">
                  <label htmlFor="password" className="wpn-auth-form__label">
                    Password *
                  </label>
                  <div className="wpn-auth-form__password-wrapper">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      required 
                      className="wpn-auth-form__input wpn-auth-form__input--with-toggle"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="wpn-auth-form__password-toggle"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeSlash /> : <Eye />}
                    </button>
                  </div>
                </div>

                <div className="wpn-auth-form__options">
                  <label className="wpn-auth-form__remember">
                    <input 
                      type="checkbox" 
                      className="wpn-auth-form__checkbox" 
                    />
                    <span className="wpn-auth-form__remember-label">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="wpn-auth-form__forgot-link">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="wpn-button wpn-button--accent wpn-button--full">
                  Sign in
                </Button>
              </form>

              <div className="wpn-auth-form__footer">
                Don't have an account?{" "}
                <Link to="/register" className="wpn-auth-form__footer-link">
                  Create a free account
                </Link>
              </div>
            </div>

            {/* Benefits/Promo Column */}
            <div className="wpn-auth-promo">
              <div>
                <h2 className="wpn-auth-promo__title">
                  Why create an account?
                </h2>
                <p className="wpn-auth-promo__subtitle">
                  Get unlimited access to South Africa's most comprehensive public notices database
                </p>
              </div>

              <div className="wpn-auth-promo__benefits">
                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <FileText />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Access all public notices across 25+ categories
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <MagnifyingGlass />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Advanced search and filtering tools
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <Bell />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Set up alerts for new notices in your area
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <Clock />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Track notice deadlines and important dates
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <Shield />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Secure account to manage your submissions
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <Check />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Submit and publish notices with ease
                  </div>
                </div>
              </div>

              <div className="wpn-auth-promo__cta">
                <h3 className="wpn-auth-promo__cta-title">
                  Need to publish a notice?
                </h3>
                <p className="wpn-auth-promo__cta-text">
                  Legal professionals, businesses, and government departments trust Nova News for official public notice publication.
                </p>
                <Link to="/sales" className="wpn-button wpn-button--white wpn-button--full">
                  Learn more about publishing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}