import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { useHero } from "../hooks/useHero";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Check, Upload, FileText, DollarSign, Clock, Phone, Home } from "lucide-react";
import "../../styles/components.css";

export default function SalesAF() {
  const heroData = useHero('sales', 'af');

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="af" />}

      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <section className="mb-16">
              <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center mb-6">
                Wat is Regskennisgewings?
              </h2>
              <Card className="p-8">
                <p className="text-foreground mb-4">
                  Regskennisgewings is wetlik vereiste aankondigings wat gepubliseer moet word om die publiek in te lig oor aangeleenthede van regsbelang. Dit sluit boedelkennisgewings, tenders, dranklisensie-aansoeke, stadsbeplanningsvoorstelle, en ander statutêre vereistes in.
                </p>
                <p className="text-foreground">
                  In Suid-Afrika moet baie regskennisgewings in amptelike koerante en nuusblaaie gepubliseer word om aan wetlike vereistes te voldoen. Ons platform bied 'n digitale aanvulling tot tradisionele drukpublikasie, wat wye sigbaarheid en permanente soekbaarheid verseker.
                </p>
              </Card>
            </section>

            <section className="mb-16">
              <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center mb-6">
                Publikasie-Opsies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="wpn-heading-h4 wpn-heading--primary mb-4">
                    Slegs Digitaal
                  </h3>
                  <div className="wpn-heading-h2 wpn-text--accent mb-4">Vanaf R500</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Aanlyn publikasie op Nova News Regskennisgewings portaal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Soekbaar en geïndekseer volgens kategorie en ligging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Tweetalige publikasie (EN/AF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Aflaaibare bewys van publikasie</span>
                    </li>
                  </ul>
                  <Button className="w-full wpn-button wpn-button--accent" asChild>
                    <Link to="/af/indien">Dien Digitale Kennisgewing In</Link>
                  </Button>
                </Card>

                <Card className="p-6 wpn-border--primary-thick">
                  <div className="wpn-bg--primary text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    AANBEVEEL
                  </div>
                  <h3 className="wpn-heading-h4 wpn-heading--primary mb-4">
                    Druk + Digitale Pakket
                  </h3>
                  <div className="wpn-heading-h2 wpn-text--accent mb-4">Pasgemaakte Kwotasie</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Drukpublikasie in Nova News nuusblad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Digitale publikasie op die portaal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Groter wettige nakoming en reikwydte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Toegewyde rekeningbestuurder ondersteuning</span>
                    </li>
                  </ul>
                  <Button className="w-full wpn-button wpn-button--primary" asChild>
                    <Link to="/af/kontak">Kontak Verkoopspan</Link>
                  </Button>
                </Card>
              </div>
            </section>

            <section>
              <Card className="p-8 wpn-bg--primary text-white text-center">
                <Phone className="size-12 mx-auto mb-4" />
                <h2 className="wpn-heading-h3 wpn-heading--white mb-4">
                  Het u Hulp Nodig met U Kennisgewing?
                </h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Ons verkoopspan kan help met komplekse kennisgewings, grootmaat indiening, en druk + digitale pakkette.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="outline" className="bg-white wpn-text--primary hover:bg-muted" asChild>
                    <Link to="/af/kontak">Kontak Verkope</Link>
                  </Button>
                  <Button size="lg" className="wpn-button wpn-button--accent" asChild>
                    <Link to="/af/indien">Dien Aanlyn In</Link>
                  </Button>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}