import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { ArrowLeft, PencilSimple, Check, Warning } from "@phosphor-icons/react";
import "../../../styles/submit-pages.css";

export default function ReviewAF() {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/af/betaal");
  };

  const submissionData = {
    type: "Tender",
    tenderNumber: "T2026/001",
    title: "Konstruksie van Nuwe Gemeenskapsentrum",
    description: "Versoek om voorstelle vir die ontwerp en konstruksie van 'n veeldoelige gemeenskapsentrum in Kaapstad. Die projek sluit argitektoniese ontwerp, siviele werke, elektriese stelsels en landskapsontwerp in.",
    department: "Stad Kaapstad",
    location: "Wes-Kaap",
    closingDate: "2026-04-30",
    contactPerson: "John Smith",
    contactEmail: "john.smith@capetown.gov.za",
    contactPhone: "021 123 4567",
    category: "Konstruksie & Infrastruktuur",
    estimatedValue: "R 5,000,000",
  };

  const pricingData = {
    digitalPublication: 450.00,
    moderationFee: 0.00,
    vat: 67.50,
    total: 517.50,
  };

  return (
    <Layout lang="af" showAds={true}>
      <div className="wpn-submit-review">
        <div className="wpn-submit-review__container">
          {/* Breadcrumb */}
          <div className="wpn-submit-breadcrumb">
            <Link to="/af/indien/tender" className="wpn-submit-breadcrumb__link">
              <ArrowLeft className="wpn-submit-breadcrumb__icon" />
              Terug na vorm
            </Link>
          </div>

          {/* Header */}
          <div className="wpn-submit-review__header">
            <h1 className="wpn-submit-review__title">
              Hersien u indiening
            </h1>
            <p className="wpn-submit-review__subtitle">
              Hersien asseblief alle besonderhede noukeurig voordat u voortgaan met betaling. U kan enige afdeling wysig indien nodig.
            </p>
          </div>

          {/* Content */}
          <div className="wpn-submit-review__content">
            <div className="wpn-submit-review__main">
              {/* Notice Details */}
              <div className="wpn-submit-review__card">
                <div className="wpn-submit-review__card-header">
                  <h2 className="wpn-submit-review__card-title">
                    Kennisgewingbesonderhede
                  </h2>
                  <Link to="/af/indien/tender" className="wpn-button wpn-button--sm wpn-button--outline">
                    <PencilSimple />
                    Wysig
                  </Link>
                </div>

                <div className="wpn-submit-review__field-group">
                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Kennisgewingtipe</span>
                    <span className="wpn-submit-review__field-value">{submissionData.type}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Tendernommer</span>
                    <span className="wpn-submit-review__field-value">{submissionData.tenderNumber}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Titel</span>
                    <span className="wpn-submit-review__field-value">{submissionData.title}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Beskrywing</span>
                    <span className="wpn-submit-review__field-value">{submissionData.description}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Kategorie</span>
                    <span className="wpn-submit-review__field-value">{submissionData.category}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Geskatte waarde</span>
                    <span className="wpn-submit-review__field-value">{submissionData.estimatedValue}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Sluitingsdatum</span>
                    <span className="wpn-submit-review__field-value">{submissionData.closingDate}</span>
                  </div>
                </div>
              </div>

              {/* Department & Location */}
              <div className="wpn-submit-review__card">
                <h2 className="wpn-submit-review__card-title">
                  Departement & ligging
                </h2>

                <div className="wpn-submit-review__field-group">
                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Departement</span>
                    <span className="wpn-submit-review__field-value">{submissionData.department}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Ligging</span>
                    <span className="wpn-submit-review__field-value">{submissionData.location}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="wpn-submit-review__card">
                <h2 className="wpn-submit-review__card-title">
                  Kontakinligting
                </h2>

                <div className="wpn-submit-review__field-group">
                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Kontakpersoon</span>
                    <span className="wpn-submit-review__field-value">{submissionData.contactPerson}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">E-pos</span>
                    <span className="wpn-submit-review__field-value">{submissionData.contactEmail}</span>
                  </div>

                  <div className="wpn-submit-review__field">
                    <span className="wpn-submit-review__field-label">Telefoon</span>
                    <span className="wpn-submit-review__field-value">{submissionData.contactPhone}</span>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="wpn-submit-info">
                <Warning className="wpn-submit-info__icon" />
                <p className="wpn-submit-info__text">
                  <strong>Volgende stappe:</strong> Na betaling sal u kennisgewing ons moderasietou betree. Ons span sal dit binne 24 uur vir wettige nakoming hersien. U sal e-pos opdaterings by elke stadium ontvang.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="wpn-submit-review__sidebar">
              {/* Pricing Summary */}
              <div className="wpn-submit-review__card">
                <h2 className="wpn-submit-review__card-title">
                  Prysoopsomming
                </h2>

                <div className="wpn-submit-review__summary">
                  <div className="wpn-submit-review__summary-row">
                    <span className="wpn-submit-review__summary-label">Digitale publikasie</span>
                    <span className="wpn-submit-review__summary-value">R {pricingData.digitalPublication.toFixed(2)}</span>
                  </div>

                  <div className="wpn-submit-review__summary-row">
                    <span className="wpn-submit-review__summary-label">Moderasiefooi</span>
                    <span className="wpn-submit-review__summary-value">R {pricingData.moderationFee.toFixed(2)}</span>
                  </div>

                  <div className="wpn-submit-review__summary-row">
                    <span className="wpn-submit-review__summary-label">BTW (15%)</span>
                    <span className="wpn-submit-review__summary-value">R {pricingData.vat.toFixed(2)}</span>
                  </div>

                  <div className="wpn-submit-review__summary-row">
                    <span className="wpn-submit-review__summary-label">Totaal</span>
                    <span className="wpn-submit-review__summary-value">R {pricingData.total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleProceedToCheckout}
                  className="wpn-button wpn-button--accent wpn-button--full wpn-submit-review__proceed-btn"
                >
                  Gaan voort met betaling
                </button>
              </div>

              {/* What Happens Next */}
              <div className="wpn-submit-review__card">
                <h2 className="wpn-submit-review__card-title">
                  Wat gebeur volgende?
                </h2>

                <div className="wpn-submit-review__next-list">
                  <div className="wpn-submit-review__next-item">
                    <Check className="wpn-submit-review__next-icon" />
                    <p className="wpn-submit-review__next-text">
                      <strong>Betalingsbevestiging</strong><br/>
                      Onmiddellike e-pos kwitansie
                    </p>
                  </div>

                  <div className="wpn-submit-review__next-item">
                    <Check className="wpn-submit-review__next-icon" />
                    <p className="wpn-submit-review__next-text">
                      <strong>Moderasiehersiening</strong><br/>
                      Binne 24 uur
                    </p>
                  </div>

                  <div className="wpn-submit-review__next-item">
                    <Check className="wpn-submit-review__next-icon" />
                    <p className="wpn-submit-review__next-text">
                      <strong>Publikasie</strong><br/>
                      Binne 48 uur van goedkeuring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}