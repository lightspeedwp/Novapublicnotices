import { Link } from "react-router";
import Layout from "../../components/Layout";
import { CheckCircle, Envelope, Clock, FileText, House } from "@phosphor-icons/react";
import "../../../styles/submit-pages.css";

export default function SuccessAF() {
  const submissionData = {
    referenceNumber: "IND-2026-T-00123",
    submissionDate: "17 Maart 2026",
    noticeType: "Tender",
    estimatedPublicationDate: "19 Maart 2026",
  };

  return (
    <Layout lang="af" showAds={false}>
      <div className="wpn-submit-success">
        <div className="wpn-submit-success__container">
          <div className="wpn-submit-success__card">
            <div className="wpn-submit-success__icon">
              <CheckCircle />
            </div>

            <h1 className="wpn-submit-success__title">
              Indiening suksesvol!
            </h1>

            <p className="wpn-submit-success__subtitle">
              Dankie dat u u kennisgewing ingedien het. U betaling is ontvang en u kennisgewing is nou in ons moderasietou.
            </p>

            <div className="wpn-submit-success__details">
              <div className="wpn-submit-success__detail-row">
                <span className="wpn-submit-success__detail-label">Verwysingsnommer</span>
                <span className="wpn-submit-success__detail-value">{submissionData.referenceNumber}</span>
              </div>

              <div className="wpn-submit-success__detail-row">
                <span className="wpn-submit-success__detail-label">Indieningsdatum</span>
                <span className="wpn-submit-success__detail-value">{submissionData.submissionDate}</span>
              </div>

              <div className="wpn-submit-success__detail-row">
                <span className="wpn-submit-success__detail-label">Kennisgewingtipe</span>
                <span className="wpn-submit-success__detail-value">{submissionData.noticeType}</span>
              </div>

              <div className="wpn-submit-success__detail-row">
                <span className="wpn-submit-success__detail-label">Geskatte publikasie</span>
                <span className="wpn-submit-success__detail-value">{submissionData.estimatedPublicationDate}</span>
              </div>
            </div>

            <div className="wpn-submit-success__next-steps">
              <h2 className="wpn-submit-success__next-steps-title">
                Wat gebeur volgende?
              </h2>

              <div className="wpn-submit-success__next-steps-list">
                <div className="wpn-submit-success__next-step">
                  <Envelope className="wpn-submit-success__next-step-icon" />
                  <p className="wpn-submit-success__next-step-text">
                    <strong>E-pos bevestiging:</strong> U sal 'n bevestigings e-pos met u verwysingsnommer en kwitansie binne die volgende paar minute ontvang.
                  </p>
                </div>

                <div className="wpn-submit-success__next-step">
                  <Clock className="wpn-submit-success__next-step-icon" />
                  <p className="wpn-submit-success__next-step-text">
                    <strong>Moderasiehersiening:</strong> Ons span sal u kennisgewing binne 24 uur vir wettige nakoming hersien. Ons sal u per e-pos in kennis stel indien enige veranderings nodig is.
                  </p>
                </div>

                <div className="wpn-submit-success__next-step">
                  <FileText className="wpn-submit-success__next-step-icon" />
                  <p className="wpn-submit-success__next-step-text">
                    <strong>Publikasie:</strong> Sodra goedgekeur, sal u kennisgewing binne 48 uur gepubliseer word. U sal 'n publikasiebevestiging met 'n direkte skakel ontvang.
                  </p>
                </div>

                <div className="wpn-submit-success__next-step">
                  <House className="wpn-submit-success__next-step-icon" />
                  <p className="wpn-submit-success__next-step-text">
                    <strong>Volg u indiening:</strong> U kan die status van u kennisgewing enige tyd vanaf u rekeningpaneel bekyk.
                  </p>
                </div>
              </div>
            </div>

            <div className="wpn-submit-success__actions">
              <Link to="/af/my-rekening/indienings" className="wpn-button wpn-button--accent">
                Bekyk my indienings
              </Link>
              <Link to="/af/indien" className="wpn-button wpn-button--outline">
                Dien nog 'n kennisgewing in
              </Link>
            </div>

            <p className="wpn-submit-success__help">
              Benodig hulp? Kontak ons ondersteuningspan by <a href="mailto:ondersteuning@novanews.co.za" className="wpn-link--accent">ondersteuning@novanews.co.za</a> of bel 021 123 4567
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}