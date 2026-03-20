import { Link } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { heroesAF } from "../../data/heroes/heroes.af";
import AdSlot from "../../components/AdSlot";
import {
  FileText,
  Scale,
  Wine,
  Building,
  Briefcase,
  ArrowRight,
  HelpCircle,
  Phone,
} from "lucide-react";

export default function EntryAF() {
  const categories = [
    {
      slug: "tender",
      icon: Briefcase,
      title: "Tenders",
      description: "Regering en munisipale verkrygingsgeleenthede",
      commonUses: ["RFVs", "Tenders", "Regeringskontrakte"],
    },
    {
      slug: "boedel",
      icon: Scale,
      title: "Boedels",
      description: "Oorlede boedelkennisgewings en krediteur kennisgewings",
      commonUses: ["Eksekuteur kennisgewings", "Krediteur eise", "Verspreiding"],
    },
    {
      slug: "dranklisensie",
      icon: Wine,
      title: "Dranklisensies",
      description: "Dranklisensie aansoeke en hernuwings",
      commonUses: ["Nuwe aansoeke", "Oordragte", "Hernuwings"],
    },
    {
      slug: "stadsbeplanning",
      icon: Building,
      title: "Stadsbeplanning",
      description: "Hersonering en grondgebruik aansoeke",
      commonUses: ["Hersonering", "Grondgebruik", "Ontwikkeling"],
    },
    {
      slug: "besigheidslisensie",
      icon: FileText,
      title: "Besigheidslisensies",
      description: "Kommersiële en professionele lisensie aansoeke",
      commonUses: ["Permitte", "Registrasies", "Handelslisensies"],
    },
    {
      slug: "algemeen",
      icon: FileText,
      title: "Algemene kennisgewings",
      description: "Ander wettige en openbare kennisgewings",
      commonUses: ["Verlore dokumente", "Naamsveranderings", "Ander kennisgewings"],
    },
  ];

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      <Hero data={heroesAF.submitNoticeEntry} lang="af" />

      {/* Notice Type Selection */}
      <div className="wpn-submit-entry">
        <section className="wpn-submit-entry__section wpn-submit-entry__section--white">
          <div className="wpn-submit-entry__container">
            <div className="wpn-section-header">
              <h2 className="wpn-section-header__title">
                Kies kennisgewingstipe
              </h2>
              <p className="wpn-section-header__subtitle">
                Klik op die kategorie wat by u kennisgewingsvereistes pas
              </p>
            </div>

            <div className="wpn-submit-entry__grid">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.slug} className="wpn-submit-category-card">
                    <Link
                      to={`/af/indien/${category.slug}`}
                      className="wpn-submit-category-card__link"
                    >
                      <div className="wpn-submit-category-card__header">
                        <div className="wpn-submit-category-card__icon">
                          <Icon />
                        </div>
                        <div className="wpn-submit-category-card__content">
                          <h3 className="wpn-submit-category-card__title">
                            {category.title}
                          </h3>
                          <p className="wpn-submit-category-card__description">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="wpn-submit-category-card__meta">
                        <p className="wpn-submit-category-card__meta-label">Algemene gebruike:</p>
                        <div className="wpn-submit-category-card__tags">
                          {category.commonUses.map((use, idx) => (
                            <span key={idx} className="wpn-submit-category-card__tag">
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="wpn-submit-category-card__footer">
                        <span>Dien {category.title.toLowerCase()} in</span>
                        <ArrowRight className="wpn-submit-category-card__arrow" />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Help Section */}
            <div className="wpn-submit-help">
              <div className="wpn-submit-help__content">
                <HelpCircle className="wpn-submit-help__icon" />
                <div className="wpn-submit-help__body">
                  <h3 className="wpn-submit-help__title">
                    Nie seker watter kategorie om te kies nie?
                  </h3>
                  <p className="wpn-submit-help__description">
                    Ons span is hier om u te help om die regte kennisgewingstipe te kies en u deur die indieningsproses te lei.
                  </p>
                  <div className="wpn-submit-help__actions">
                    <Link to="/af/kontak" className="wpn-button wpn-button--accent">
                      <Phone className="size-4" />
                      Kontak verkoopspan
                    </Link>
                    <Link to="/af/verkope" className="wpn-button wpn-button--outline">
                      Leer meer oor kennisgewings
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="wpn-submit-entry__section wpn-submit-entry__section--muted">
          <div className="wpn-submit-entry__container">
            <div className="wpn-section-header">
              <h2 className="wpn-section-header__title">
                Hoe indiening werk
              </h2>
            </div>

            <div className="wpn-submit-steps">
              <div className="wpn-submit-step">
                <div className="wpn-submit-step__badge">1</div>
                <h3 className="wpn-submit-step__title">
                  Vul vorm in
                </h3>
                <p className="wpn-submit-step__description">
                  Voltooi ons geleide vorm met u kennisgewingsbesonderhede en laai enige vereiste dokumente op.
                </p>
              </div>

              <div className="wpn-submit-step">
                <div className="wpn-submit-step__badge">2</div>
                <h3 className="wpn-submit-step__title">
                  Hersien & betaal
                </h3>
                <p className="wpn-submit-step__description">
                  Hersien u kennisgewing, kies publikasie-opsies en voltooi veilige betaling.
                </p>
              </div>

              <div className="wpn-submit-step">
                <div className="wpn-submit-step__badge">3</div>
                <h3 className="wpn-submit-step__title">
                  Moderering & publikasie
                </h3>
                <p className="wpn-submit-step__description">
                  Ons span hersien u kennisgewing vir nakoming en publiseer dit binne 24-48 uur.
                </p>
              </div>
            </div>

            <div className="wpn-submit-info">
              <p className="wpn-submit-info__text">
                <strong>Belangrik:</strong> Alle ingedien kennisgewings ondergaan moderering voor publikasie om wettige nakoming en akkuraatheid te verseker. U sal e-pos opdaterings by elke stadium van die proses ontvang.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Ad Slot */}
      <AdSlot variant="leaderboard" className="my-8" />

      {/* Need Help CTA */}
      <section className="wpn-cta-section">
        <div className="wpn-cta-section__container">
          <h2 className="wpn-cta-section__title">
            Benodig bystand met u indiening?
          </h2>
          <p className="wpn-cta-section__description">
            Ons verkoopspan kan u help om u kennisgewing voor te berei en in te dien, of enige vrae oor die proses te beantwoord.
          </p>
          <div className="wpn-cta-section__actions">
            <Link to="/af/verkope" className="wpn-button wpn-button--lg wpn-button--white">
              <Phone className="size-5" />
              Praat met verkope
            </Link>
            <Link to="/af/vaak-gestelde-vrae" className="wpn-button wpn-button--lg wpn-button--outline-inverse">
              Bekyk VGV's
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}