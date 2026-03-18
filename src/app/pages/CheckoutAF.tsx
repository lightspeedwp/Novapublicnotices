import { useState } from "react";
import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { 
  User, 
  Envelope, 
  Phone, 
  MapPin, 
  CreditCard, 
  Bank, 
  Wallet, 
  ShieldCheck, 
  Receipt,
  CheckCircle
} from "@phosphor-icons/react";
import "../../styles/checkout.css";

export default function CheckoutAF() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Gaan asseblief akkoord met die terme en voorwaardes");
      return;
    }
    // Navigate to order confirmation
    navigate("/af/bestelling-bevestiging");
  };

  return (
    <Layout
      lang="af"
      showAds={false}
      currentPage="checkout"
    >
      <div className="wpn-checkout-wrapper">
        <div className="wpn-checkout-container">
          
          {/* Header */}
          <div className="wpn-checkout-header">
            <h1 className="wpn-h1">
              <ShieldCheck weight="duotone" />
              Veilige betaling
            </h1>
            <p className="wpn-checkout-header__subtitle">
              Voltooi jou betaling veilig. Jou kennisgewing sal hersien word voor publikasie.
            </p>
          </div>

          <form onSubmit={handleSubmitOrder} className="wpn-checkout-form">
            <div className="wpn-checkout-layout">
              
              {/* Main Content - Left Side */}
              <div className="wpn-checkout-layout__main">
                
                {/* Billing Information */}
                <section className="wpn-checkout-section">
                  <div className="wpn-checkout-section__header">
                    <User className="wpn-checkout-section__icon" weight="duotone" />
                    <h2 className="wpn-checkout-section__title">Faktuurinligting</h2>
                  </div>

                  <div className="wpn-form__grid wpn-form__grid--2col">
                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        <User className="wpn-form__label-icon" />
                        Voornaam
                      </label>
                      <input 
                        type="text" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="Johan"
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        <User className="wpn-form__label-icon" />
                        Van
                      </label>
                      <input 
                        type="text" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="Smit"
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        <Envelope className="wpn-form__label-icon" />
                        E-posadres
                      </label>
                      <input 
                        type="email" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="johan.smit@voorbeeld.com"
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        <Phone className="wpn-form__label-icon" />
                        Telefoonnommer
                      </label>
                      <input 
                        type="tel" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="+27 82 123 4567"
                      />
                    </div>
                  </div>

                  <div className="wpn-form__group" style={{ marginTop: "var(--space-4)" }}>
                    <label className="wpn-form__label wpn-form__label--required">
                      <MapPin className="wpn-form__label-icon" />
                      Straatadres
                    </label>
                    <input 
                      type="text" 
                      className="wpn-form__input" 
                      required 
                      defaultValue="Hoofstraat 123"
                    />
                  </div>

                  <div className="wpn-form__grid wpn-form__grid--2col" style={{ marginTop: "var(--space-4)" }}>
                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        Stad
                      </label>
                      <input 
                        type="text" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="Kaapstad"
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        Poskode
                      </label>
                      <input 
                        type="text" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="8001"
                      />
                    </div>
                  </div>
                </section>

                {/* Payment Method */}
                <section className="wpn-checkout-section">
                  <div className="wpn-checkout-section__header">
                    <CreditCard className="wpn-checkout-section__icon" weight="duotone" />
                    <h2 className="wpn-checkout-section__title">Betaalmetode</h2>
                  </div>

                  <div className="wpn-payment-methods">
                    {/* Credit/Debit Card */}
                    <label 
                      className={`wpn-payment-method ${selectedPayment === "card" ? "wpn-payment-method--active" : ""}`}
                    >
                      <input 
                        type="radio" 
                        name="payment" 
                        value="card"
                        checked={selectedPayment === "card"}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="wpn-payment-method__radio"
                      />
                      <div className="wpn-payment-method__content">
                        <CreditCard 
                          className="wpn-payment-method__icon" 
                          weight="duotone" 
                        />
                        <div className="wpn-payment-method__text">
                          <div className="wpn-payment-method__title">Krediet- of debietkaart</div>
                          <div className="wpn-payment-method__description">
                            Betaal veilig met Visa, Mastercard, of American Express
                          </div>
                        </div>
                      </div>
                      {selectedPayment === "card" && (
                        <CheckCircle className="wpn-payment-method__badge" weight="fill" />
                      )}
                    </label>

                    {/* Instant EFT */}
                    <label 
                      className={`wpn-payment-method ${selectedPayment === "eft" ? "wpn-payment-method--active" : ""}`}
                    >
                      <input 
                        type="radio" 
                        name="payment" 
                        value="eft"
                        checked={selectedPayment === "eft"}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="wpn-payment-method__radio"
                      />
                      <div className="wpn-payment-method__content">
                        <Bank 
                          className="wpn-payment-method__icon" 
                          weight="duotone" 
                        />
                        <div className="wpn-payment-method__text">
                          <div className="wpn-payment-method__title">Kitsoorsending</div>
                          <div className="wpn-payment-method__description">
                            Veilige bankoordrag via PayFast
                          </div>
                        </div>
                      </div>
                      {selectedPayment === "eft" && (
                        <CheckCircle className="wpn-payment-method__badge" weight="fill" />
                      )}
                    </label>

                    {/* PayFast Wallet */}
                    <label 
                      className={`wpn-payment-method ${selectedPayment === "wallet" ? "wpn-payment-method--active" : ""}`}
                    >
                      <input 
                        type="radio" 
                        name="payment" 
                        value="wallet"
                        checked={selectedPayment === "wallet"}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="wpn-payment-method__radio"
                      />
                      <div className="wpn-payment-method__content">
                        <Wallet 
                          className="wpn-payment-method__icon" 
                          weight="duotone" 
                        />
                        <div className="wpn-payment-method__text">
                          <div className="wpn-payment-method__title">Digitale beursie</div>
                          <div className="wpn-payment-method__description">
                            Betaal met Zapper, SnapScan, of PayFast beursie
                          </div>
                        </div>
                      </div>
                      {selectedPayment === "wallet" && (
                        <CheckCircle className="wpn-payment-method__badge" weight="fill" />
                      )}
                    </label>
                  </div>

                  {/* Security Notice */}
                  <div className="wpn-checkout-security">
                    <ShieldCheck className="wpn-checkout-security__icon" weight="duotone" />
                    <p className="wpn-checkout-security__text">
                      Alle betalings word veilig verwerk deur PayFast, Suid-Afrika se voorste betaalpoort. 
                      Jou betaalinligting word geënkripteer en word nooit op ons bedieners gestoor nie.
                    </p>
                  </div>
                </section>

                {/* Terms & Conditions */}
                <section className="wpn-checkout-section">
                  <div className="wpn-checkout-terms">
                    <label className="wpn-checkout-checkbox">
                      <input 
                        type="checkbox" 
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="wpn-checkout-checkbox__input"
                        required
                      />
                      <span className="wpn-checkout-checkbox__checkmark"></span>
                      <span className="wpn-checkout-checkbox__label">
                        Ek stem in tot die <a href="/af/terme" className="wpn-link wpn-link--accent">terme en voorwaardes</a> en 
                        verstaan dat my kennisgewing deur Nova News hersien sal word voor publikasie. 
                        Ek magtig betaling vir die kennisgewing indien.
                      </span>
                    </label>
                  </div>
                </section>

              </div>

              {/* Sidebar - Order Summary */}
              <div className="wpn-checkout-layout__sidebar">
                <div className="wpn-checkout-summary">
                  <div className="wpn-checkout-summary__header">
                    <Receipt className="wpn-checkout-summary__icon" weight="duotone" />
                    <h2 className="wpn-checkout-summary__title">Bestellingopsomming</h2>
                  </div>

                  <div className="wpn-checkout-summary__items">
                    <div className="wpn-checkout-item">
                      <div className="wpn-checkout-item__header">
                        <h3 className="wpn-checkout-item__title">
                          Boedelkennisgewing: Wyle Johan Smit
                        </h3>
                        <span className="wpn-checkout-item__price">R750.00</span>
                      </div>
                      <div className="wpn-checkout-item__meta">
                        <span className="wpn-checkout-item__type">
                          Digitale publikasie • 30 dae
                        </span>
                      </div>
                    </div>

                    <div className="wpn-checkout-item">
                      <div className="wpn-checkout-item__header">
                        <h3 className="wpn-checkout-item__title">
                          Addisionele liggings
                        </h3>
                        <span className="wpn-checkout-item__price">R250.00</span>
                      </div>
                      <div className="wpn-checkout-item__meta">
                        <span className="wpn-checkout-item__type">
                          Johannesburg, Pretoria
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="wpn-checkout-summary__totals">
                    <div className="wpn-checkout-total">
                      <span className="wpn-checkout-total__label">Subtotaal</span>
                      <span className="wpn-checkout-total__value">R1,000.00</span>
                    </div>
                    <div className="wpn-checkout-total">
                      <span className="wpn-checkout-total__label">BTW (15%)</span>
                      <span className="wpn-checkout-total__value">R150.00</span>
                    </div>
                    <div className="wpn-checkout-total">
                      <span className="wpn-checkout-total__label">Verwerkingsfooi</span>
                      <span className="wpn-checkout-total__value">R28.75</span>
                    </div>
                    <div className="wpn-checkout-total wpn-checkout-total--final">
                      <span className="wpn-checkout-total__label">Totaal</span>
                      <span className="wpn-checkout-total__value">R1,178.75</span>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="wpn-button wpn-button--accent wpn-button--full"
                    disabled={!agreedToTerms}
                  >
                    <ShieldCheck weight="bold" />
                    Voltooi veilige betaling
                  </button>

                  <div className="wpn-checkout-summary__footer">
                    <ShieldCheck />
                    256-bis SSL geënkripteer
                  </div>
                </div>
              </div>

            </div>
          </form>

        </div>
      </div>
    </Layout>
  );
}
