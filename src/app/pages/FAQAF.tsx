import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AdSlot from "../components/AdSlot";
import { useHero } from "../hooks/useHero";
import {
  Question,
  FileText,
  CurrencyCircleDollar,
  Clock,
  ShieldCheck,
  Envelope,
  Phone,
} from "@phosphor-icons/react";
import "../../styles/faq.css";

export default function FAQAF() {
  const heroData = useHero('faq', 'af');

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
      icon: CurrencyCircleDollar,
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
      icon: ShieldCheck,
      faqs: [
        {
          question: "Benodig ek 'n rekening om 'n kennisgewing in te dien?",
          answer: "Ja, 'n rekening laat u toe om indiening te volg, konsepte te stoor, bestellingsgeskiedenis te bekyk, en e-pos opdaterings deur die proses te ontvang.",
        },
        {
          question: "Kan ek kennisgewings namens my organisasie indien?",
          answer: "Ja, u kan 'n organisasierekening registreer en kennisgewings namens u maatskappy, regsfirma, of regeringsdepartement indien.",
        },
        {
          question: "Hoe kan ek die status van my kennisgewing volg?",
          answer: "Meld aan by u rekening en gaan na 'My Kennisgewings' om die status van al u indiening te sien. U sal ook e-pos opdaterings by elke stadium ontvang.",
        },
        {
          question: "Wat as ek veranderinge moet maak na indiening?",
          answer: "Kontak ons ondersteuningspan onmiddellik. Veranderinge kan gemaak word voordat moderering voltooi is. Na publikasie mag wysigings 'n nuwe indiening vereis.",
        },
      ],
    },
  ];

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="af" />}

      {/* FAQ Content */}
      <div className="wpn-faq">
        <div className="wpn-faq__container">
          {/* FAQ Categories */}
          {faqCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <div key={catIdx} className="wpn-faq-category">
                <div className="wpn-faq-category__header">
                  <div className="wpn-faq-category__icon-wrapper">
                    <Icon weight="duotone" className="wpn-faq-category__icon" />
                  </div>
                  <h2 className="wpn-faq-category__title">
                    {category.title}
                  </h2>
                </div>

                <ul className="wpn-faq-list">
                  {category.faqs.map((faq, faqIdx) => (
                    <li key={faqIdx} className="wpn-faq-item">
                      <div className="wpn-faq-item__question-wrapper">
                        <Question weight="fill" className="wpn-faq-item__question-icon" />
                        <h3 className="wpn-faq-item__question">
                          {faq.question}
                        </h3>
                      </div>
                      <p className="wpn-faq-item__answer">
                        {faq.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Ad Slot */}
          <AdSlot variant="leaderboard" />

          {/* Support CTA */}
          <section className="wpn-faq-support">
            <Question weight="duotone" className="wpn-faq-support__icon" />
            <h2 className="wpn-faq-support__title">
              Het u nog vrae?
            </h2>
            <p className="wpn-faq-support__description">
              Kan u nie die antwoord vind waarna u soek nie? Ons ondersteuningspan is hier om u te help met enige vrae oor die publikasie van kennisgewings.
            </p>
            <div className="wpn-faq-support__actions">
              <Link to="/af/contact" className="wpn-faq-support__button wpn-faq-support__button--primary">
                <Envelope weight="fill" className="wpn-faq-support__button-icon" />
                Kontak ondersteuning
              </Link>
              <Link to="/af/sales" className="wpn-faq-support__button wpn-faq-support__button--secondary">
                <Phone weight="fill" className="wpn-faq-support__button-icon" />
                Praat met verkope
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="wpn-faq-cta">
            <h2 className="wpn-faq-cta__title">
              Gereed om u kennisgewing in te dien?
            </h2>
            <p className="wpn-faq-cta__description">
              Ons begeleide indieningsproses maak dit maklik om u openbare kennisgewing vinnig en voldoend te publiseer.
            </p>
            <div className="wpn-faq-cta__actions">
              <Link to="/af/submit" className="wpn-faq-cta__button wpn-faq-cta__button--primary">
                Begin indiening
              </Link>
              <Link to="/af/pricing" className="wpn-faq-cta__button wpn-faq-cta__button--secondary">
                Bekyk pryse
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
