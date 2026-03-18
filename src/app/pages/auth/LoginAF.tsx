import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { Eye, EyeSlash, Check, FileText, Bell, Clock, Shield, MagnifyingGlass } from "@phosphor-icons/react";
import "../../../styles/auth.css";

export default function LoginAF() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - store auth token
    localStorage.setItem("authToken", "mock_token_12345");
    alert("Aanmelding suksesvol! U kan nou openbare kennisgewings bekyk.");
    navigate("/af/my-rekening");
  };

  return (
    <Layout lang="af" showAds={false}>
      <div className="wpn-auth">
        <div className="wpn-auth__container">
          <div className="wpn-auth-grid">
            {/* Login Form Column */}
            <div className="wpn-auth-form">
              <div className="wpn-auth-form__header">
                <h1 className="wpn-auth-form__title">
                  Welkom terug
                </h1>
                <p className="wpn-auth-form__subtitle">
                  Meld aan by u rekening om toegang tot openbare kennisgewings te kry
                </p>
              </div>

              <form onSubmit={handleSubmit} className="wpn-auth-form__body">
                <div className="wpn-auth-form__field">
                  <label htmlFor="email" className="wpn-auth-form__label">
                    E-posadres *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="u@voorbeeld.co.za" 
                    required 
                    className="wpn-auth-form__input"
                  />
                </div>

                <div className="wpn-auth-form__field">
                  <label htmlFor="password" className="wpn-auth-form__label">
                    Wagwoord *
                  </label>
                  <div className="wpn-auth-form__password-wrapper">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Voer u wagwoord in"
                      required 
                      className="wpn-auth-form__input wpn-auth-form__input--with-toggle"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="wpn-auth-form__password-toggle"
                      aria-label={showPassword ? "Versteek wagwoord" : "Wys wagwoord"}
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
                    <span className="wpn-auth-form__remember-label">Onthou my</span>
                  </label>
                  <Link to="/af/vergeet-wagwoord" className="wpn-auth-form__forgot-link">
                    Wagwoord vergeet?
                  </Link>
                </div>

                <Button type="submit" className="wpn-button wpn-button--accent wpn-button--full">
                  Meld aan
                </Button>
              </form>

              <div className="wpn-auth-form__footer">
                Het u nie 'n rekening nie?{" "}
                <Link to="/af/registreer" className="wpn-auth-form__footer-link">
                  Skep 'n gratis rekening
                </Link>
              </div>
            </div>

            {/* Benefits/Promo Column */}
            <div className="wpn-auth-promo">
              <div>
                <h2 className="wpn-auth-promo__title">
                  Waarom 'n rekening skep?
                </h2>
                <p className="wpn-auth-promo__subtitle">
                  Kry onbeperkte toegang tot Suid-Afrika se mees omvattende databasis van openbare kennisgewings
                </p>
              </div>

              <div className="wpn-auth-promo__benefits">
                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <FileText />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Toegang tot alle openbare kennisgewings in 25+ kategorieë
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <MagnifyingGlass />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Gevorderde soek- en filternutsmiddels
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <Bell />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Stel kennisgewings op vir nuwe kennisgewings in u area
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <Clock />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Volg kennisgewing-sperdatums en belangrike datums
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <Shield />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Veilige rekening om u voorleggings te bestuur
                  </div>
                </div>

                <div className="wpn-auth-promo__benefit">
                  <div className="wpn-auth-promo__benefit-icon">
                    <Check />
                  </div>
                  <div className="wpn-auth-promo__benefit-text">
                    Dien kennisgewings maklik in en publiseer dit
                  </div>
                </div>
              </div>

              <div className="wpn-auth-promo__cta">
                <h3 className="wpn-auth-promo__cta-title">
                  Moet u 'n kennisgewing publiseer?
                </h3>
                <p className="wpn-auth-promo__cta-text">
                  Regspraktisyns, besighede en regeringsdepartemente vertrou Nova News vir amptelike publikasie van openbare kennisgewings.
                </p>
                <Link to="/af/verkope" className="wpn-button wpn-button--white wpn-button--full">
                  Leer meer oor publikasie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
