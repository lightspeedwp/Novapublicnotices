import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { 
  CheckCircle, 
  Receipt, 
  Envelope, 
  Clock, 
  FileText,
  Eye,
  Download,
  Headset,
  Question
} from "@phosphor-icons/react";
import "../../styles/order-confirmation.css";

export default function OrderConfirmationAF() {
  const navigate = useNavigate();

  return (
    <Layout
      lang="af"
      showAds={false}
      currentPage="order-confirmation"
    >
      <div className="wpn-confirmation-wrapper">
        <div className="wpn-confirmation-container">
          
          {/* Hero Section */}
          <div className="wpn-confirmation-hero">
            <div className="wpn-confirmation-hero__icon-wrapper">
              <CheckCircle className="wpn-confirmation-hero__icon" weight="fill" />
            </div>
            <h1 className="wpn-confirmation-hero__title">
              Bestelling bevestig!
            </h1>
            <p className="wpn-confirmation-hero__subtitle">
              Dankie vir jou indiening. Jou betaling is ontvang en jou kennisgewing is 
              nou in ons hersieningsproses. Ons sal jou opdaterings stuur na johan.smit@voorbeeld.com
            </p>
            <div className="wpn-confirmation-hero__order-number">
              <Receipt weight="duotone" />
              Bestelling #NOV-2026-0847
            </div>
          </div>

          <div className="wpn-confirmation-layout">
            
            {/* Main Content */}
            <div className="wpn-confirmation-layout__main">
              
              {/* Order Details */}
              <section className="wpn-confirmation-section">
                <div className="wpn-confirmation-section__header">
                  <Receipt className="wpn-confirmation-section__icon" weight="duotone" />
                  <h2 className="wpn-confirmation-section__title">Bestellingbesonderhede</h2>
                </div>

                <div className="wpn-confirmation-details">
                  <div className="wpn-confirmation-detail">
                    <span className="wpn-confirmation-detail__label">Bestellingnommer</span>
                    <span className="wpn-confirmation-detail__value">NOV-2026-0847</span>
                  </div>

                  <div className="wpn-confirmation-detail">
                    <span className="wpn-confirmation-detail__label">Bestellingdatum</span>
                    <span className="wpn-confirmation-detail__value">17 Maart 2026</span>
                  </div>

                  <div className="wpn-confirmation-detail">
                    <span className="wpn-confirmation-detail__label">Betaalmetode</span>
                    <span className="wpn-confirmation-detail__value">Visa eindig in 4242</span>
                  </div>

                  <div className="wpn-confirmation-detail">
                    <span className="wpn-confirmation-detail__label">Totaal betaal</span>
                    <span className="wpn-confirmation-detail__value wpn-confirmation-detail__value--highlight">
                      R1,178.75
                    </span>
                  </div>
                </div>

                <div className="wpn-confirmation-items" style={{ marginTop: "var(--space-6)" }}>
                  <div className="wpn-confirmation-item">
                    <div className="wpn-confirmation-item__header">
                      <h3 className="wpn-confirmation-item__title">
                        Boedelkennisgewing: Wyle Johan Smit
                      </h3>
                      <span className="wpn-confirmation-item__price">R750.00</span>
                    </div>
                    <div className="wpn-confirmation-item__meta">
                      <span className="wpn-confirmation-item__type">
                        Digitale publikasie • 30 dae • Kaapstad
                      </span>
                    </div>
                  </div>

                  <div className="wpn-confirmation-item">
                    <div className="wpn-confirmation-item__header">
                      <h3 className="wpn-confirmation-item__title">
                        Addisionele liggings
                      </h3>
                      <span className="wpn-confirmation-item__price">R250.00</span>
                    </div>
                    <div className="wpn-confirmation-item__meta">
                      <span className="wpn-confirmation-item__type">
                        Johannesburg, Pretoria
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* What Happens Next */}
              <section className="wpn-confirmation-section">
                <div className="wpn-confirmation-section__header">
                  <Clock className="wpn-confirmation-section__icon" weight="duotone" />
                  <h2 className="wpn-confirmation-section__title">Wat gebeur volgende?</h2>
                </div>

                <div className="wpn-confirmation-timeline">
                  
                  {/* Step 1 - Complete */}
                  <div className="wpn-confirmation-timeline-item">
                    <div className="wpn-confirmation-timeline-item__icon wpn-confirmation-timeline-item__icon--complete">
                      <CheckCircle weight="fill" />
                    </div>
                    <div className="wpn-confirmation-timeline-item__content">
                      <h3 className="wpn-confirmation-timeline-item__title">
                        Betaling ontvang
                      </h3>
                      <p className="wpn-confirmation-timeline-item__description">
                        Jou betaling is suksesvol verwerk en bevestig. 
                        'n Kwitansie is na jou e-posadres gestuur.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 - Pending */}
                  <div className="wpn-confirmation-timeline-item">
                    <div className="wpn-confirmation-timeline-item__icon wpn-confirmation-timeline-item__icon--pending">
                      <Clock weight="fill" />
                    </div>
                    <div className="wpn-confirmation-timeline-item__content">
                      <h3 className="wpn-confirmation-timeline-item__title">
                        Redaksionele hersiening aan die gang
                      </h3>
                      <p className="wpn-confirmation-timeline-item__description">
                        Ons redaksionele span hersien jou kennisgewing vir akkuraatheid, volledigheid, 
                        en voldoening aan wetlike vereistes. Dit neem tipies 1-2 werksdae.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 - Future */}
                  <div className="wpn-confirmation-timeline-item">
                    <div className="wpn-confirmation-timeline-item__icon wpn-confirmation-timeline-item__icon--future">
                      <FileText weight="duotone" />
                    </div>
                    <div className="wpn-confirmation-timeline-item__content">
                      <h3 ClassName="wpn-confirmation-timeline-item__title">
                        Kennisgewing gepubliseer
                      </h3>
                      <p className="wpn-confirmation-timeline-item__description">
                        Sodra goedgekeur, sal jou kennisgewing op Nova News gepubliseer word en 
                        lewendig bly vir 30 dae. Jy sal 'n bevestigings e-pos ontvang met die publikasieskakel.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 - Future */}
                  <div className="wpn-confirmation-timeline-item">
                    <div className="wpn-confirmation-timeline-item__icon wpn-confirmation-timeline-item__icon--future">
                      <Envelope weight="duotone" />
                    </div>
                    <div className="wpn-confirmation-timeline-item__content">
                      <h3 className="wpn-confirmation-timeline-item__title">
                        Bevestiging en argief
                      </h3>
                      <p className="wpn-confirmation-timeline-item__description">
                        Na die 30-dag periode, sal jou kennisgewing geargiveer word en soekbaar bly 
                        in ons openbare rekords. Jy sal permanente toegang hê in jou rekening.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

            </div>

            {/* Sidebar */}
            <div className="wpn-confirmation-layout__sidebar">
              
              {/* Quick Actions */}
              <div className="wpn-confirmation-card">
                <div className="wpn-confirmation-card__header">
                  <Receipt className="wpn-confirmation-card__icon" weight="duotone" />
                  <h3 className="wpn-confirmation-card__title">Vinnige aksies</h3>
                </div>
                <div className="wpn-confirmation-actions">
                  <button 
                    onClick={() => navigate("/af/my-rekening/bestellings")}
                    className="wpn-button wpn-button--outline wpn-button--full"
                  >
                    <Eye />
                    Bekyk bestellingbesonderhede
                  </button>
                  <button 
                    onClick={() => window.print()}
                    className="wpn-button wpn-button--outline wpn-button--full"
                  >
                    <Download />
                    Laai kwitansie af
                  </button>
                  <button 
                    onClick={() => navigate("/af/my-rekening/kennisgewings")}
                    className="wpn-button wpn-button--outline wpn-button--full"
                  >
                    <FileText />
                    Bekyk my kennisgewings
                  </button>
                  <button 
                    onClick={() => navigate("/af/indien")}
                    className="wpn-button wpn-button--accent wpn-button--full"
                  >
                    Dien nog 'n kennisgewing in
                  </button>
                </div>
              </div>

              {/* Important Information */}
              <div className="wpn-confirmation-card wpn-confirmation-card--help">
                <div className="wpn-confirmation-card__header">
                  <Question className="wpn-confirmation-card__icon" weight="duotone" />
                </div>
                <h3 className="wpn-confirmation-card__title">
                  Belangrike inligting
                </h3>
                <p className="wpn-confirmation-card__text">
                  <strong>Hersieningstydlyn:</strong> Redaksionele hersiening neem tipies 1-2 werksdae. 
                  As ons enige opheldering of veranderings benodig, sal ons jou kontak by die e-posadres verskaf.
                </p>
                <p className="wpn-confirmation-card__text" style={{ marginTop: "var(--space-3)" }}>
                  <strong>Publikasietydperk:</strong> Jou kennisgewing sal lewendig wees vir 30 dae vanaf 
                  die publikasiedatum. Hierna sal dit geargiveer word maar soekbaar bly.
                </p>
              </div>

              {/* Need Help */}
              <div className="wpn-confirmation-card">
                <div className="wpn-confirmation-card__header">
                  <Headset className="wpn-confirmation-card__icon" weight="fill" />
                </div>
                <h3 className="wpn-confirmation-card__title">
                  Benodig hulp?
                </h3>
                <p className="wpn-confirmation-card__text">
                  Ons ondersteuningspan is hier om jou te help Maandag tot Vrydag, 8:00 VM - 5:00 NM SAST.
                </p>
                <div className="wpn-confirmation-actions" style={{ marginTop: "var(--space-4)" }}>
                  <button 
                    onClick={() => navigate("/af/kontak")}
                    className="wpn-button wpn-button--outline wpn-button--full"
                  >
                    Kontak ondersteuning
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}