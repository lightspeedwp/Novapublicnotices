import { Link } from "react-router";
import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import AdSlot from "../components/AdSlot";
import {
  HelpCircle,
  FileText,
  DollarSign,
  Clock,
  Shield,
  Phone,
  Mail,
  Home,
} from "lucide-react";
import "../../styles/components.css";

export default function FAQAF() {
  const faqCategories = [
    {
      title: "Aan die gang kom",
      icon: FileText,
      faqs: [
        {
          question: "Wat is openbare kennisgewings?",
          answer: "Openbare kennisgewings is wetlik vereiste aankondigings wat gepubliseer moet word om die publiek in te lig oor sake van wettige belang, soos oorlede boedels, tenders, dranklisensievergunnings en dorpsbeplanningsvoorstelle.",
        },
        {
          question: "Wie moet openbare kennisgewings publiseer?",
          answer: "Regspraktisyns, eksekuteurs, munisipaliteite, regeringsdepartemente, besighede wat aansoek doen vir lisensies, en individue wat deur die wet vereis word om openbare aankondigings te maak.",
        },
        {
          question: "Hoe weet ek watter tipe kennisgewing ek benodig?",
          answer: "Ons indieningsvorm lei u deur die korrekte kennisgewingtipe te kies. As u onseker is, kontak ons verkoopspan vir bystand.",
        },
      ],
    },
    {
      title: "Indieningsproses",
      icon: FileText,
      faqs: [
        {
          question: "Hoe lank neem die indieningsproses?",
          answer: "Die invul van die vorm neem 5-10 minute. Na indiening en betaling, ondergaan kennisgewings moderering binne 24-48 uur voor publikasie.",
        },
        {
          question: "Watter inligting moet ek verskaf?",
          answer: "U sal die kennisgewingbesonderhede (name, datums, verwysingsnommers), enige vereiste ondersteunende dokumente, en kontakinligting benodig. Spesifieke vereistes wissel volgens kennisgewingtipe.",
        },
        {
          question: "Kan ek my indiening stoor en later voltooi?",
          answer: "Ja, as u aangemeld is, kan u konsepte stoor en later terugkeer om dit vanaf u rekeningpaneel te voltooi.",
        },
        {
          question: "Watter lêerformate kan ek oplaai?",
          answer: "Ons aanvaar PDF, DOC, DOCX, JPG, en PNG lêers tot 10MB elk. Verskeie lêers kan per kennisgewing opgelaai word.",
        },
      ],
    },
    {
      title: "Pryse en betaling",
      icon: DollarSign,
      faqs: [
        {
          question: "Hoeveel kos dit om 'n kennisgewing te publiseer?",
          answer: "Slegs digitale kennisgewings begin vanaf R500. Druk + digitale pakkette begin vanaf R1,500. Presiese pryse hang af van kennisgewingtipe, lengte, en publikasievereistes. Sien ons prysebladsy vir gedetailleerde inligting.",
        },
        {
          question: "Watter betaalmetodes aanvaar u?",
          answer: "Ons aanvaar krediet-/debietkaarte (Visa, Mastercard), EFT, en kitsoombliklike EFT deur ons veilige PayFast-integrasie.",
        },
        {
          question: "Is BTW ingesluit in die pryse?",
          answer: "Ja, alle pryse wat gewys word sluit BTW in. U sal 'n belastingfaktuur na betaling ontvang.",
        },
        {
          question: "Bied u terugbetalings aan?",
          answer: "As u kennisgewing verwerp word tydens moderering weens nie-nakoming, sal u 'n volle terugbetaling ontvang of kan hersien en herindien sonder addisionele koste. Terugbetalings vir gepubliseerde kennisgewings is onderhewig aan ons terme en voorwaardes.",
        },
      ],
    },
    {
      title: "Moderering en publikasie",
      icon: Clock,
      faqs: [
        {
          question: "Hoekom moet kennisgewings gemodereer word?",
          answer: "Alle kennisgewings word hersien om wettige nakoming, akkuraatheid, en volledigheid te verseker voor publikasie. Dit beskerm beide uitgewers en die publiek.",
        },
        {
          question: "Hoe lank neem moderering?",
          answer: "Standaard moderering neem 24-48 uur. Druk + digitale pakkette sluit prioriteit moderering in (12-24 uur). Voldiens pakkette bied versnelde hersiening.",
        },
        {
          question: "Wat gebeur as my kennisgewing verwerp word?",
          answer: "U sal 'n e-pos ontvang wat verduidelik hoekom dit verwerp is en watter veranderinge nodig is. U kan hersien en herindien sonder addisionele koste, of 'n volle terugbetaling aanvra.",
        },
        {
          question: "Hoe lank sal my kennisgewing gepubliseer word?",
          answer: "Digitale kennisgewings bly vir onbepaalde tyd in ons soekbare argief. Drukkennisgewings verskyn op die gespesifiseerde publikasiedatum. Wettige vereistes wissel volgens kennisgewingtipe.",
        },
      ],
    },
    {
      title: "Rekening en ondersteuning",
      icon: Shield,
      faqs: [
        {
          question: "Het ek 'n rekening nodig om 'n kennisgewing in te dien?",
          answer: "Ja, 'n rekening laat u toe om indiening na te spoor, konsepte te stoor, bestellingsgeskiedenis te bekyk, en e-pos opdaterings deur die proses te ontvang.",
        },
        {
          question: "Kan ek kennisgewings namens my organisasie indien?",
          answer: "Ja, u kan 'n organisasierekening registreer en kennisgewings namens u maatskappy, regsfirma, of regeringsdepartement indien.",
        },
        {
          question: "Hoe kan ek die status van my kennisgewing naspoor?",
          answer: "Meld aan by u rekening en gaan na 'My Kennisgewings' om die status van al u indiening te sien. U sal ook e-pos opdaterings by elke stadium ontvang.",
        },
        {
          question: "Wat as ek veranderinge moet maak na indiening?",
          answer: "Kontak ons ondersteuningsspan onmiddellik. Veranderinge kan gemaak word voor moderering voltooi is. Na publikasie, kan wysigings 'n nuwe indiening vereis.",
        },
      ],
    },
  ];

  return (
    <Layout lang="af" showAds={true}>
      {/* Page Header */}
      <section className="wpn-page-header">
        <div className="wpn-page-header__container">
          {/* Breadcrumb */}
          <nav className="wpn-breadcrumb" aria-label="Broodkrummels">
            <ol className="wpn-breadcrumb__list">
              <li className="wpn-breadcrumb__item">
                <Link to="/af" className="wpn-breadcrumb__link">
                  <Home className="wpn-breadcrumb__icon" />
                  Tuis
                </Link>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__separator">/</span>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__current">Gereelde vrae</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title">
            Gereelde vrae
          </h1>
          <p className="wpn-page-header__subtitle">
            Vind antwoorde op algemene vrae oor die publisering van openbare kennisgewings met Nova News
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIdx) => {
              const Icon = category.icon;
              return (
                <div key={catIdx} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="wpn-bg--accent text-white rounded-lg p-2">
                      <Icon className="size-6" />
                    </div>
                    <h2 className="text-2xl font-bold wpn-text--primary">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIdx) => (
                      <Card key={faqIdx} className="wpn-card--bordered p-6">
                        <h3 className="text-lg font-bold wpn-text--primary mb-3 flex items-start gap-2">
                          <HelpCircle className="size-5 wpn-text--accent flex-shrink-0 mt-0.5" />
                          <span>{faq.question}</span>
                        </h3>
                        <p className="text-muted-foreground ml-7">
                          {faq.answer}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <AdSlot variant="leaderboard" className="my-8" />

      {/* Still Have Questions */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="wpn-bg--muted border-0">
              <div className="p-12 text-center">
                <HelpCircle className="size-16 wpn-text--accent mx-auto mb-6" />
                <h2 className="text-3xl font-bold wpn-text--primary mb-4">
                  Het u steeds vrae?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Kan u nie die antwoord kry wat u soek nie? Ons ondersteuningsspan is hier om u te help met enige vrae oor die publisering van kennisgewings.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="wpn-button wpn-button--lg wpn-button--accent" asChild>
                    <Link to="/af/kontak">
                      <Mail className="mr-2 size-5" />
                      Kontak ondersteuning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="wpn-button wpn-button--lg wpn-button--outline" asChild>
                    <Link to="/af/verkope">
                      <Phone className="mr-2 size-5" />
                      Praat met verkope
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wpn-cta-section">
        <div className="wpn-cta-section__container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="wpn-cta-section__title">
              Gereed om u kennisgewing in te dien?
            </h2>
            <p className="wpn-cta-section__description">
              Ons begeleide indieningsproses maak dit maklik om u openbare kennisgewing vinnig en voldoend te publiseer.
            </p>
            <div className="wpn-cta-section__actions">
              <Button size="lg" className="wpn-button wpn-button--lg wpn-button--white" asChild>
                <Link to="/af/indien">
                  Begin indiening
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="wpn-button wpn-button--lg wpn-button--outline border-white text-white hover:bg-white/10" asChild>
                <Link to="/af/pryse">
                  Bekyk pryse
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}