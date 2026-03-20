import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { useHero } from "../hooks/useHero";
import { House } from "@phosphor-icons/react";
import "../../styles/components.css";

export default function TermsAF() {
  const heroData = useHero('terms', 'af');

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="af" />}

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <Card className="wpn-card--bordered p-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">1. Aanvaarding van terme</h2>
                  <p className="text-muted-foreground mb-4">
                    Deur toegang tot en gebruik van die Nova News Openbare Kennisgewings Portaal ("die Diens") te verkry, aanvaar en stem u in om gebind te wees aan hierdie Diensbepalings. As u nie met hierdie terme saamstem nie, moet u asseblief nie die Diens gebruik nie.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">2. Gebruikersrekeninge</h2>
                  <p className="text-muted-foreground mb-4">
                    Om openbare kennisgewings in te dien, moet u 'n rekening skep. U is verantwoordelik vir:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Die handhawing van die vertroulikheid van u rekeningbewyse</li>
                    <li>Alle aktiwiteite wat onder u rekening plaasvind</li>
                    <li>Die verskaffing van akkurate en huidige inligting</li>
                    <li>Onmiddellike kennisgewing aan ons van enige ongemagtigde gebruik van u rekening</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">3. Kennisgewingindiening</h2>
                  <p className="text-muted-foreground mb-4">
                    Wanneer u kennisgewings indien, stem u in dat:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Alle inligting wat verskaf word akkuraat, volledig en nie misleidend is nie</li>
                    <li>U die wettige gesag het om die kennisgewing te publiseer</li>
                    <li>Die kennisgewing voldoen aan alle toepaslike wette en regulasies</li>
                    <li>U alle nodige toestemmings en toestemmings verkry het</li>
                    <li>Die kennisgewing nie op enige derdepartyregte inbreuk maak nie</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">4. Moderasiebeleid</h2>
                  <p className="text-muted-foreground mb-4">
                    Alle ingedien kennisgewings ondergaan professionele moderering. Ons behou die reg voor om:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Enige kennisgewing te hersien en goed te keur of te verwerp</li>
                    <li>Addisionele inligting of dokumentasie aan te vra</li>
                    <li>Kennisgewings te redigeer vir wettige nakoming of formatering</li>
                    <li>Gepubliseerde kennisgewings wat hierdie terme skend te verwyder</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Verwerping tydens moderering gee u reg op 'n volle terugbetaling of die geleentheid om te hersien en herindien.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">5. Betalingsterme</h2>
                  <p className="text-muted-foreground mb-4">
                    Betaling moet ontvang word voordat kennisgewings gepubliseer word. Alle pryse:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Word in Suid-Afrikaanse Rand (ZAR) vermeld</li>
                    <li>Sluit BTW in waar van toepassing</li>
                    <li>Is onderhewig aan verandering met kennisgewing</li>
                    <li>Is nie terugbetaalbaar na publikasie nie, behalwe soos gespesifiseer in ons terugbetalingsbeleid</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">6. Intellektuele eiendom</h2>
                  <p className="text-muted-foreground mb-4">
                    U behou eienaarskap van die inhoud wat u indien. Deur 'n kennisgewing in te dien, verleen u ons 'n nie-eksklusiewe, wêreldwye lisensie om:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Die kennisgewing op ons digitale platform te publiseer</li>
                    <li>Drukpublikasie in koerante en koerante te koördineer</li>
                    <li>Die kennisgewing in ons soekbare databasis te argiveer</li>
                    <li>Geaggregeerde, anonieme data vir analise te gebruik</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">7. Verbode gebruike</h2>
                  <p className="text-muted-foreground mb-4">
                    U mag nie die Diens gebruik om:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Vals, misleidende of bedrieglike inligting te publiseer</li>
                    <li>Enige wette of regulasies te oortree</li>
                    <li>Op intellektuele eiendom of privaatheidsregte in te breuk</li>
                    <li>Lasterlike, onsedelike of aanstootlike inhoud te publiseer</li>
                    <li>Te probeer om ons moderasieproses te omseil</li>
                    <li>In te meng met die behoorlike funksionering van die Diens</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">8. Beperking van aanspreeklikheid</h2>
                  <p className="text-muted-foreground mb-4">
                    Tot die maksimum mate toegelaat deur die wet:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Ons is nie aanspreeklik vir enige indirekte, toevallige of gevolglike skade nie</li>
                    <li>Ons totale aanspreeklikheid is beperk tot die fooie wat betaal is vir die spesifieke kennisgewing</li>
                    <li>Ons waarborg nie ononderbroke of foutlose diens nie</li>
                    <li>Ons is nie verantwoordelik vir derdeparty-inhoud of -dienste nie</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">9. Vrywaring van waarborge</h2>
                  <p className="text-muted-foreground mb-4">
                    Die Diens word verskaf "soos dit is" sonder waarborge van enige aard. Ons waarborg nie dat:
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                    <li>Die Diens aan u spesifieke vereistes sal voldoen</li>
                    <li>Kennisgewingpublikasie in enige spesifieke uitkoms sal resulteer</li>
                    <li>Alle kennisgewings goedgekeur sal word</li>
                    <li>Die Diens te alle tye beskikbaar sal wees</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">10. Veranderinge aan terme</h2>
                  <p className="text-muted-foreground mb-4">
                    Ons behou die reg voor om hierdie terme te eniger tyd te wysig. Veranderinge sal effektief wees by plasing. Voortgesette gebruik van die Diens na veranderinge konstitueer aanvaarding van die gewysigde terme.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">11. Regerende wet</h2>
                  <p className="text-muted-foreground mb-4">
                    Hierdie terme word geregeer deur die wette van Suid-Afrika. Enige dispute sal onderhewig wees aan die eksklusiewe jurisdiksie van die Suid-Afrikaanse howe.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold wpn-text--primary mb-4">12. Kontakinligting</h2>
                  <p className="text-muted-foreground mb-4">
                    Vir vrae oor hierdie Diensbepalings, kontak ons asseblief deur ons kontakbladsy of e-pos legal@novanews.co.za.
                  </p>
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