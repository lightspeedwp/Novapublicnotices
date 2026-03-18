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

export default function Checkout() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    // Navigate to order confirmation
    navigate("/order-confirmation");
  };

  return (
    <Layout
      lang="en"
      showAds={false}
      currentPage="checkout"
    >
      <div className="wpn-checkout-wrapper">
        <div className="wpn-checkout-container">
          
          {/* Header */}
          <div className="wpn-checkout-header">
            <h1 className="wpn-h1">
              <ShieldCheck weight="duotone" />
              Secure checkout
            </h1>
            <p className="wpn-checkout-header__subtitle">
              Complete your payment securely. Your notice will be reviewed before publication.
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
                    <h2 className="wpn-checkout-section__title">Billing information</h2>
                  </div>

                  <div className="wpn-form__grid wpn-form__grid--2col">
                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        <User className="wpn-form__label-icon" />
                        First name
                      </label>
                      <input 
                        type="text" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="John"
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        <User className="wpn-form__label-icon" />
                        Last name
                      </label>
                      <input 
                        type="text" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="Smith"
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        <Envelope className="wpn-form__label-icon" />
                        Email address
                      </label>
                      <input 
                        type="email" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="john.smith@example.com"
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        <Phone className="wpn-form__label-icon" />
                        Phone number
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
                      Street address
                    </label>
                    <input 
                      type="text" 
                      className="wpn-form__input" 
                      required 
                      defaultValue="123 Main Street"
                    />
                  </div>

                  <div className="wpn-form__grid wpn-form__grid--2col" style={{ marginTop: "var(--space-4)" }}>
                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        City
                      </label>
                      <input 
                        type="text" 
                        className="wpn-form__input" 
                        required 
                        defaultValue="Cape Town"
                      />
                    </div>

                    <div className="wpn-form__group">
                      <label className="wpn-form__label wpn-form__label--required">
                        Postal code
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
                    <h2 className="wpn-checkout-section__title">Payment method</h2>
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
                          <div className="wpn-payment-method__title">Credit or debit card</div>
                          <div className="wpn-payment-method__description">
                            Pay securely with Visa, Mastercard, or American Express
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
                          <div className="wpn-payment-method__title">Instant EFT</div>
                          <div className="wpn-payment-method__description">
                            Secure bank transfer via PayFast
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
                          <div className="wpn-payment-method__title">Digital wallet</div>
                          <div className="wpn-payment-method__description">
                            Pay with Zapper, SnapScan, or PayFast wallet
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
                      All payments are processed securely through PayFast, South Africa's leading payment gateway. 
                      Your payment information is encrypted and never stored on our servers.
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
                        I agree to the <a href="/terms" className="wpn-link wpn-link--accent">terms and conditions</a> and 
                        understand that my notice will be reviewed by Nova News before publication. 
                        I authorize the payment of the total amount shown.
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
                    <h2 className="wpn-checkout-summary__title">Order summary</h2>
                  </div>

                  <div className="wpn-checkout-summary__items">
                    <div className="wpn-checkout-item">
                      <div className="wpn-checkout-item__header">
                        <h3 className="wpn-checkout-item__title">
                          Estate notice: Late John Smith
                        </h3>
                        <span className="wpn-checkout-item__price">R750.00</span>
                      </div>
                      <div className="wpn-checkout-item__meta">
                        <span className="wpn-checkout-item__type">
                          Digital publication • 30 days
                        </span>
                      </div>
                    </div>

                    <div className="wpn-checkout-item">
                      <div className="wpn-checkout-item__header">
                        <h3 className="wpn-checkout-item__title">
                          Additional location: Johannesburg
                        </h3>
                        <span className="wpn-checkout-item__price">R250.00</span>
                      </div>
                      <div className="wpn-checkout-item__meta">
                        <span className="wpn-checkout-item__type">
                          Digital publication
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="wpn-checkout-summary__totals">
                    <div className="wpn-checkout-summary__row">
                      <span>Subtotal</span>
                      <span>R1,000.00</span>
                    </div>
                    <div className="wpn-checkout-summary__row">
                      <span>VAT (15%)</span>
                      <span>R150.00</span>
                    </div>
                    <div className="wpn-checkout-summary__row wpn-checkout-summary__row--total">
                      <span>Total</span>
                      <span>R1,150.00</span>
                    </div>
                  </div>

                  <button type="submit" className="wpn-button wpn-button--primary wpn-button--full">
                    <ShieldCheck weight="bold" />
                    Complete secure payment
                  </button>

                  <p className="wpn-checkout-summary__note">
                    Your notice will be reviewed within 1-2 business days
                  </p>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
