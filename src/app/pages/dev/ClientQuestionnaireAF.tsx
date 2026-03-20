import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { useHero } from "../../hooks/useHero";
import {
  Building,
  Globe,
  CurrencyCircleDollar,
  Users,
  ShieldCheck,
  Bell,
  ChartLine,
  Headset,
  Download,
  Printer,
} from "@phosphor-icons/react";
import "../../../styles/dev-tools.css";

interface Question {
  id: string;
  question: string;
  hint?: string;
  priority: "high" | "medium" | "low";
}

interface QuestionCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; weight?: string }>;
  questions: Question[];
}

export default function ClientQuestionnaireAF() {
  const heroData = useHero('clientQuestionnaire', 'af');

  const categories: QuestionCategory[] = [
    {
      id: "organization",
      title: "Organisasie en handelsmerk",
      icon: Building,
      questions: [
        {
          id: "org-1",
          question: "Wat is die amptelike naam van jou organisasie of publikasie?",
          hint: "Dit sal in die webwerf kopstuk, voetskrif, en alle regsdokumente verskyn.",
          priority: "high",
        },
        {
          id: "org-2",
          question: "Het jy 'n byskrif of slagspreuk wat jy wil vertoon?",
          hint: "Voorbeeld: 'Suid-Afrika se vertroude openbare kennisgewings portaal'",
          priority: "medium",
        },
        {
          id: "org-3",
          question: "Het jy bestaande handelsmerkkl colours wat ons moet gebruik?",
          hint: "Voorsien asseblief hex kodes indien beskikbaar (bv. #09082f vir primêre kleur)",
          priority: "high",
        },
        {
          id: "org-4",
          question: "Het jy 'n logo wat ons moet gebruik?",
          hint: "Voorsien asseblief in SVG, PNG, of hoë resolusie formaat",
          priority: "high",
        },
        {
          id: "org-5",
          question: "Wat moet die webwerf URL wees?",
          hint: "Voorbeeld: novanews.co.za/kennisgewings of openbarekennis gewings.co.za",
          priority: "high",
        },
        {
          id: "org-6",
          question: "Wie besit die inhoud en intellektuele eiendom?",
          hint: "Dit beïnvloed kopiereg kennisgewings en regskennisgewings",
          priority: "medium",
        },
      ],
    },
    {
      id: "languages",
      title: "Tale en lokalisering",
      icon: Globe,
      questions: [
        {
          id: "lang-1",
          question: "Watter tale moet die portaal ondersteun?",
          hint: "Tans geprototipeer: Engels en Afrikaans",
          priority: "high",
        },
        {
          id: "lang-2",
          question: "Wat moet die verstekingestelde taal wees vir eerste keer besoekers?",
          hint: "Gebaseer op blaaier instellings of vaste verstek?",
          priority: "medium",
        },
        {
          id: "lang-3",
          question: "Moet kennisgewings in verskeie tale gepubliseer word?",
          hint: "Kan gebruikers tweetalige kennisgewings indien of slegs enkel taal?",
          priority: "medium",
        },
        {
          id: "lang-4",
          question: "Is daar spesifieke vertaling vereistes vir regsterme?",
          hint: "Sommige regsterme mag gesertifiseerde vertaling benodig",
          priority: "low",
        },
      ],
    },
    {
      id: "pricing",
      title: "Pryse en betaling",
      icon: CurrencyCircleDollar,
      questions: [
        {
          id: "price-1",
          question: "Wat is jou prysmodel vir slegs-digitale kennisgewings?",
          hint: "Per woord, per kennisgewing, per karakter, of vaste tarief?",
          priority: "high",
        },
        {
          id: "price-2",
          question: "Wat is jou pryse vir druk + digitale kennisgewings?",
          hint: "Gekombineerde pakket pryse of aparte heffings?",
          priority: "high",
        },
        {
          id: "price-3",
          question: "Hef jy BTW, en indien wel, teen watter tarief?",
          hint: "Tans 15% in Suid-Afrika",
          priority: "high",
        },
        {
          id: "price-4",
          question: "Bied jy afslag vir massa indiening aan?",
          hint: "Volume afslag vir regsfirmas of regeringsdepartemente?",
          priority: "medium",
        },
        {
          id: "price-5",
          question: "Watter betalingsmetodes moet ons aanvaar?",
          hint: "Kredietkaart, EFT, PayFast, SnapScan, rekening fakturering?",
          priority: "high",
        },
        {
          id: "price-6",
          question: "Wil jy betalingsplanne of rekening fakturering vir gereelde kliënte aanbied?",
          hint: "Netto 30 terme vir gevestigde kliënte?",
          priority: "medium",
        },
        {
          id: "price-7",
          question: "Moet pryse wissel volgens kennisgewing kategorie?",
          hint: "Verskillende tariewe vir tenders teenoor boedel kennisgewings?",
          priority: "medium",
        },
        {
          id: "price-8",
          question: "Hoe lank moet kennisgewings gepubliseer bly?",
          hint: "Beïnvloed duur die pryse? (30 dae, 60 dae, permanente argief?)",
          priority: "medium",
        },
      ],
    },
    {
      id: "users",
      title: "Gebruiker rolle en toegang",
      icon: Users,
      questions: [
        {
          id: "user-1",
          question: "Moet die publiek kennisgewings kan bekyk sonder om aan te meld?",
          hint: "Of registrasie vereis om volledige kennisgewing besonderhede te sien?",
          priority: "high",
        },
        {
          id: "user-2",
          question: "Kan individue kennisgewings indien, of slegs organisasies?",
          hint: "Verskillende verifikasie vereistes vir elk?",
          priority: "high",
        },
        {
          id: "user-3",
          question: "Benodig jy goedkeuring vir nuwe gebruiker registrasies?",
          hint: "Of onmiddellike selfbediening registrasie toelaat?",
          priority: "medium",
        },
        {
          id: "user-4",
          question: "Moet gebruikers organisasies/maatskappy profiele kan stoor?",
          hint: "Vir herhaling indieners soos regsfirmas",
          priority: "medium",
        },
        {
          id: "user-5",
          question: "Benodig jy verskillende toestemmingsvlakke vir span lede?",
          hint: "Indiener, hersiener, admin, fakturering kontak, ens.",
          priority: "low",
        },
      ],
    },
    {
      id: "moderation",
      title: "Moderering en voldoening",
      icon: ShieldCheck,
      questions: [
        {
          id: "mod-1",
          question: "Wie sal kennisgewings hersien en goedkeur voor publikasie?",
          hint: "Interne span, uitkontrakteer, of geoutomatiseer?",
          priority: "high",
        },
        {
          id: "mod-2",
          question: "Wat is jou teiken hersiening omdraaityd?",
          hint: "24 uur, 48 uur, dieselfde dag?",
          priority: "high",
        },
        {
          id: "mod-3",
          question: "Moet jy indiener identiteit verifieer?",
          hint: "ID verifikasie, maatskappy registrasie kontrole?",
          priority: "medium",
        },
        {
          id: "mod-4",
          question: "Wat is jou regs retensie vereistes?",
          hint: "Hoe lank moet gepubliseerde kennisgewings toeganklik gehou word?",
          priority: "high",
        },
        {
          id: "mod-5",
          question: "Benodig jy oudit spore vir alle veranderinge?",
          hint: "Wie het wat geredigeer, wanneer, en hoekom?",
          priority: "medium",
        },
        {
          id: "mod-6",
          question: "Kan kennisgewings opdateer word na publikasie?",
          hint: "Regstellings, wysigings, of permanent sodra leef?",
          priority: "medium",
        },
        {
          id: "mod-7",
          question: "Wat gebeur as 'n kennisgewing afgewys word?",
          hint: "Volle terugbetaling, hersiening toegelaat, of handmatige kontak?",
          priority: "medium",
        },
      ],
    },
    {
      id: "notifications",
      title: "Kennisgewings en waarskuwings",
      icon: Bell,
      questions: [
        {
          id: "notif-1",
          question: "Moet gebruikers e-pos bevestigings ontvang wanneer hulle 'n kennisgewing indien?",
          priority: "high",
        },
        {
          id: "notif-2",
          question: "Wil jy gebruikers in kennis stel wanneer hul kennisgewing goedgekeur of afgekeur word?",
          priority: "high",
        },
        {
          id: "notif-3",
          question: "Moet gebruikers soektogte kan stoor en waarskuwings ontvang vir nuwe passende kennisgewings?",
          hint: "E-pos waarskuwings vir nuwe tenders in hul streek, ens.",
          priority: "medium",
        },
        {
          id: "notif-4",
          question: "Wil jy herinnering e-posse stuur voordat kennisgewings verval?",
          hint: "Vir kennisgewings met beperkte publikasie duur",
          priority: "low",
        },
        {
          id: "notif-5",
          question: "Moet modereerders kennisgewings ontvang wanneer nuwe kennisgewings ingedien word?",
          priority: "high",
        },
      ],
    },
    {
      id: "advertising",
      title: "Advertensies en inkomste",
      icon: ChartLine,
      questions: [
        {
          id: "ad-1",
          question: "Wil jy advertensies op die portaal vertoon?",
          hint: "Indien ja, waar? (Tuisblad, soekresultate, enkel kennisgewings, ens.)",
          priority: "medium",
        },
        {
          id: "ad-2",
          question: "Watter advertensie netwerke of stelsels sal jy gebruik?",
          hint: "Google AdSense, direkte verkope, programmaties?",
          priority: "low",
        },
        {
          id: "ad-3",
          question: "Moet advertensies uitgesluit word van sekere bladsye?",
          hint: "Afhandeling, rekening bladsye, regsbladsye?",
          priority: "medium",
        },
        {
          id: "ad-4",
          question: "Wil jy uitgestalde/geborgde kennisgewing lyste hê?",
          hint: "Premium plasing vir 'n addisionele fooi",
          priority: "low",
        },
      ],
    },
    {
      id: "support",
      title: "Kliënt ondersteuning en verkope",
      icon: Headset,
      questions: [
        {
          id: "support-1",
          question: "Watter kliënt ondersteuning kanale sal jy aanbied?",
          hint: "E-pos, foon, lewendige klets, WhatsApp?",
          priority: "high",
        },
        {
          id: "support-2",
          question: "Wat is jou ondersteuning ure?",
          hint: "Slegs besigheid ure of uitgebreide ondersteuning?",
          priority: "medium",
        },
        {
          id: "support-3",
          question: "Het jy 'n verkoopspan vir ondersteunde indiening?",
          hint: "Hoe moet kliënte hulle kontak?",
          priority: "high",
        },
        {
          id: "support-4",
          question: "Watter e-pos adresse moet ons gebruik vir ondersteuning en verkope?",
          hint: "support@, sales@, notices@?",
          priority: "high",
        },
        {
          id: "support-5",
          question: "Watter foonnommers moet vertoon word?",
          hint: "Verskillende nommers vir ondersteuning teenoor verkope?",
          priority: "high",
        },
      ],
    },
    {
      id: "export",
      title: "Uitvoer en verslagdoening",
      icon: Download,
      questions: [
        {
          id: "export-1",
          question: "Moet gebruikers kennisgewings as PDF kan aflaai?",
          priority: "medium",
        },
        {
          id: "export-2",
          question: "Benodig jy verslagdoenings paneelborde vir interne gebruik?",
          hint: "Inkomste, indiening, kategorieë, ens.",
          priority: "low",
        },
        {
          id: "export-3",
          question: "Moet gebruikers soekresultate kan uitvoer?",
          hint: "CSV, Excel, PDF formate?",
          priority: "low",
        },
      ],
    },
    {
      id: "print",
      title: "Druk integrasie",
      icon: Printer,
      questions: [
        {
          id: "print-1",
          question: "In watter druk publikasies sal kennisgewings verskyn?",
          hint: "Spesifieke koerant name en streek uitgawes",
          priority: "high",
        },
        {
          id: "print-2",
          question: "Hoe koördineer druk en digitale besprekings?",
          hint: "Dieselfde sperdatum, aparte sperdate, of slegs-digitale opsie?",
          priority: "high",
        },
        {
          id: "print-3",
          question: "Kry druk kliënte outomatiese digitale insluiting?",
          hint: "Of is digitale publikasie 'n opsionele byvoegsel?",
          priority: "medium",
        },
        {
          id: "print-4",
          question: "Hoe word druk proewe hanteer?",
          hint: "E-pos PDF voor publikasie, of vertroue digitale voorskou?",
          priority: "medium",
        },
      ],
    },
  ];

  const totalQuestions = categories.reduce(
    (sum, cat) => sum + cat.questions.length,
    0
  );

  return (
    <Layout lang="af" showAds={false}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="af" />}

      {/* Questionnaire Content */}
      <div className="wpn-devtools">
        <div className="wpn-devtools__container">
          
          {/* Introduction */}
          <section className="wpn-questionnaire">
            <div className="wpn-questionnaire__intro">
              <h2 className="wpn-questionnaire__intro-title">
                Oor hierdie vraelys
              </h2>
              <p className="wpn-questionnaire__intro-text">
                Hierdie vraelys bevat {totalQuestions} noodsaaklike vrae georganiseer in {categories.length} kategorieë. Jou antwoorde sal ons help om jou behoeftes te verstaan, die portaal korrek te konfigureer, en verseker dat ons presies bou wat jy nodig het. Neem asseblief jou tyd om hierdie vrae te beantwoord - hoe meer detail jy verskaf, hoe beter kan ons jou dien.
              </p>
            </div>

            {/* Summary Cards */}
            <div className="wpn-devtools-summary">
              <div className="wpn-devtools-summary-card">
                <div className="wpn-devtools-summary-card__header">
                  <Building weight="duotone" className="wpn-devtools-summary-card__icon" />
                </div>
                <div className="wpn-devtools-summary-card__value">{categories.length}</div>
                <div className="wpn-devtools-summary-card__label">Kategorieë</div>
              </div>

              <div className="wpn-devtools-summary-card">
                <div className="wpn-devtools-summary-card__header">
                  <ShieldCheck weight="duotone" className="wpn-devtools-summary-card__icon" />
                </div>
                <div className="wpn-devtools-summary-card__value">{totalQuestions}</div>
                <div className="wpn-devtools-summary-card__label">Vrae</div>
              </div>

              <div className="wpn-devtools-summary-card">
                <div className="wpn-devtools-summary-card__header">
                  <CurrencyCircleDollar weight="duotone" className="wpn-devtools-summary-card__icon" />
                </div>
                <div className="wpn-devtools-summary-card__value">
                  {categories.reduce((sum, cat) =>
                    sum + cat.questions.filter(q => q.priority === "high").length, 0
                  )}
                </div>
                <div className="wpn-devtools-summary-card__label">Hoë prioriteit</div>
              </div>

              <div className="wpn-devtools-summary-card">
                <div className="wpn-devtools-summary-card__header">
                  <Globe weight="duotone" className="wpn-devtools-summary-card__icon" />
                </div>
                <div className="wpn-devtools-summary-card__value">~30</div>
                <div className="wpn-devtools-summary-card__label">Minute</div>
              </div>
            </div>

            {/* Question Categories */}
            {categories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="wpn-questionnaire-category">
                  <div className="wpn-questionnaire-category__header">
                    <Icon weight="duotone" className="wpn-questionnaire-category__icon" />
                    <div>
                      <h2 className="wpn-questionnaire-category__title">
                        {catIndex + 1}. {category.title}
                      </h2>
                      <p className="wpn-questionnaire-category__count">
                        {category.questions.length} vrae
                      </p>
                    </div>
                  </div>

                  <div className="wpn-questionnaire-category__body">
                    <ul className="wpn-questionnaire-list">
                      {category.questions.map((question, qIndex) => (
                        <li key={question.id} className="wpn-questionnaire-item">
                          <div className="wpn-questionnaire-item__number">
                            {qIndex + 1}
                          </div>
                          <div className="wpn-questionnaire-item__content">
                            <h3 className="wpn-questionnaire-item__question">
                              {question.question}
                            </h3>
                            {question.hint && (
                              <p className="wpn-questionnaire-item__hint">
                                {question.hint}
                              </p>
                            )}
                            <span
                              className={`wpn-questionnaire-item__priority wpn-questionnaire-item__priority--${question.priority}`}
                            >
                              {question.priority === "high" && "Hoë prioriteit"}
                              {question.priority === "medium" && "Medium prioriteit"}
                              {question.priority === "low" && "Opsioneel"}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* Action Buttons */}
            <div className="wpn-devtools-actions">
              <button className="wpn-devtools-actions__button wpn-devtools-actions__button--primary">
                <Download weight="bold" className="wpn-devtools-actions__button-icon" />
                Laai af as PDF
              </button>
              <button className="wpn-devtools-actions__button wpn-devtools-actions__button--secondary">
                <Printer weight="bold" className="wpn-devtools-actions__button-icon" />
                Druk vraelys
              </button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
