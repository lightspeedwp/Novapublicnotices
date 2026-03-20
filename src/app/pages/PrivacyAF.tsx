import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { useHero } from "../hooks/useHero";
import { House } from "@phosphor-icons/react";
import "../../styles/components.css";

export default function PrivacyAF() {
  const heroData = useHero('privacy', 'af');

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="af" />}

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <Card className="wpn-card--bordered p-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">1. Inleiding</h2>
                  <p className="text-muted-foreground mb-4">
                    Nova News ("ons", "ons", "ons") is verbind tot die beskerming van u privaatheid. Hierdie Privaatheidsbeleid verduidelik hoe ons u inligting insamel, gebruik, openbaar en beskerm wanneer u ons Openbare Kennisgewings Portaal gebruik.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">2. Inligting wat ons insamel</h2>
                  
                  <h3 className="text-xl font-bold wpn-text--primary mb-3 mt-6">Persoonlike inligting</h3>
                  <p className="text-muted-foreground mb-2">Wanneer u 'n rekening skep of 'n kennisgewing indien, versamel ons:</p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Naam en kontakinligting (e-pos, telefoonnommer)</li>
                    <li>Organisasiebesonderhede (indien van toepassing)</li>
                    <li>Betalingsinligting (veilig verwerk deur PayFast)</li>
                    <li>Kennisgewinginhoud en ondersteunende dokumente</li>
                  </ul>

                  <h3 className="text-xl font-bold wpn-text--primary mb-3 mt-6">Gebruiksinligting</h3>
                  <p className="text-muted-foreground mb-2">Ons versamel outomaties:</p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>IP-adres en toestelmorfering</li>
                    <li>Blaaitipe en weergawe</li>
                    <li>Bladsye besoek en tyd spandeer</li>
                    <li>Soeknavrae en filters gebruik</li>
                  </ul>

                  <h3 className="text-xl font-bold wpn-text--primary mb-3 mt-6">Koekies en opsporing</h3>
                  <p className="text-muted-foreground mb-2">Ons gebruik koekies om:</p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>U sessie en voorkeure te handhaaf</li>
                    <li>Webwerf gebruik te ontleed en ons dienste te verbeter</li>
                    <li>U taalvoorkeur te onthou</li>
                    <li>Geteikende advertering te verskaf (met u toestemming)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">3. Hoe ons u inligting gebruik</h2>
                  <p className="text-muted-foreground mb-4">Ons gebruik ingesamelde inligting om:</p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>U kennisgewings te verwerk en te publiseer</li>
                    <li>U rekening te bestuur en kliëntediens te verskaf</li>
                    <li>Betalings te verwerk en fakture uit te reik</li>
                    <li>Transaksie-e-posse en opdaterings te stuur</li>
                    <li>Ons dienste en gebruikerservaring te verbeter</li>
                    <li>Aan wettige verpligtinge te voldoen</li>
                    <li>Bedrog te voorkom en sekuriteit te verseker</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">4. Inligtingdeling</h2>
                  <p className="text-muted-foreground mb-4">Ons kan u inligting deel met:</p>
                  
                  <h3 className="text-xl font-bold wpn-text--primary mb-3 mt-6">Diensverskaffers</h3>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Betalingprosesseerders (PayFast)</li>
                    <li>E-pos diensverskaffers</li>
                    <li>Wolkgasheer dienste</li>
                    <li>Analise verskaffers</li>
                  </ul>

                  <h3 className="text-xl font-bold wpn-text--primary mb-3 mt-6">Wettige vereistes</h3>
                  <p className="text-muted-foreground mb-2">
                    Ons kan inligting openbaar wanneer vereis deur wet, hofbevel, of om:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Aan wettige prosesse te voldoen</li>
                    <li>Ons regte en eiendom te beskerm</li>
                    <li>Bedrog of onwettige aktiwiteit te voorkom</li>
                    <li>Die veiligheid van gebruikers of die publiek te beskerm</li>
                  </ul>

                  <h3 className="text-xl font-bold wpn-text--primary mb-3 mt-6">Openbare inligting</h3>
                  <p className="text-muted-foreground mb-2">
                    Gepubliseerde kennisgewings word openbare inligting en kan insluit:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Kennisgewinginhoud soos ingedien</li>
                    <li>Kontakbesonderhede ingesluit in die kennisgewing</li>
                    <li>Publikasiedatums en verwysingsnommers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">5. Data sekuriteit</h2>
                  <p className="text-muted-foreground mb-4">
                    Ons implementeer toepaslike tegniese en organisatoriese maatreëls om u inligting te beskerm, insluitend:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Enkripsie van data in oordrag en by rus</li>
                    <li>Veilige sok laag (SSL) tegnologie</li>
                    <li>Gereelde sekuriteitsbeoordelings</li>
                    <li>Toegangskontroles en verifikasie</li>
                    <li>Personeelopleiding oor databeskerming</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Egter, geen metode van oordrag oor die internet is 100% veilig nie. Ons kan nie absolute sekuriteit waarborg nie.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">6. U regte</h2>
                  <p className="text-muted-foreground mb-4">
                    Onder die Beskerming van Persoonlike Inligting Wet (POPIA), het u die reg om:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Toegang tot u persoonlike inligting te verkry</li>
                    <li>Onakkurate inligting te korrigeer</li>
                    <li>Verwydering van u inligting aan te vra (onderhewig aan wettige retensievereistes)</li>
                    <li>Beswaar te maak teen verwerking van u inligting</li>
                    <li>Toestemming vir bemarkingkommunikasie te onttrek</li>
                    <li>'n Klagte by die Inligtingsreguleerder in te dien</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">7. Data retensie</h2>
                  <p className="text-muted-foreground mb-4">
                    Ons behou u inligting vir solank as:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>U rekening aktief is</li>
                    <li>Vereis om ons dienste te verskaf</li>
                    <li>Nodig om aan wettige verpligtinge te voldoen</li>
                    <li>Vereis vir wettige besigheidsdoeleindes</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Gepubliseerde kennisgewings bly vir onbepaalde tyd in ons openbare argief vir wettige nakoming en openbare toegang.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">8. Kinders se privaatheid</h2>
                  <p className="text-muted-foreground mb-4">
                    Ons Diens is nie bedoel vir individue onder 18 jaar oud nie. Ons versamel nie doelbewus inligting van kinders nie. As u glo ons het inligting van 'n kind versamel, kontak ons asseblief onmiddellik.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">9. Derdeparty skakels</h2>
                  <p className="text-muted-foreground mb-4">
                    Ons Diens kan skakels na derdeparty webwerwe bevat. Ons is nie verantwoordelik vir die privaatheids praktyke van hierdie webwerwe nie. Ons moedig u aan om hul privaatheidsbeĺeide te lees.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">10. Veranderinge aan hierdie beleid</h2>
                  <p className="text-muted-foreground mb-4">
                    Ons kan hierdie Privaatheidsbeleid van tyd tot tyd opdateer. Ons sal u van beduidende veranderinge in kennis stel deur e-pos of deur 'n kennisgewing op ons webwerf. Voortgesette gebruik na veranderinge konstitueer aanvaarding.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">11. Kontak ons</h2>
                  <p className="text-muted-foreground mb-4">
                    Vir vrae oor hierdie Privaatheidsbeleid of om u regte uit te oefen, kontak:
                  </p>
                  <ul className="list-none text-muted-foreground space-y-2">
                    <li><strong>E-pos:</strong> privacy@novanews.co.za</li>
                    <li><strong>Inligtingsbeampte:</strong> Beskikbaar deur ons kontakbladsy</li>
                    <li><strong>Inligtingsreguleerder:</strong> www.justice.gov.za/inforeg</li>
                  </ul>
                </section>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <AdSlot variant="leaderboard" className="my-8" />
    </Layout>
  );
}