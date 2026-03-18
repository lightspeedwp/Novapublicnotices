import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Users, Target, TrendingUp, Globe, Award, BarChart } from "lucide-react";

export default function AdvertiseAF() {
  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      <div className="wpn-page-header">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="wpn-page-header__title wpn-heading--white">
              Adverteer Met Nova News Regskennisgewings
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Bereik Suid-Afrika se regs- en besigheidsprofessionele persone deur ons betroubare openbare kennisgewings platform
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="wpn-button wpn-button--accent" asChild>
                <Link to="/af/kontak">Begin Nou</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white wpn-text--primary hover:bg-[var(--muted)]" asChild>
                <Link to="/af/prysstruktuur">Bekyk Pryse</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Advertise Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center mb-12">
            Hoekom Adverteer op Nova News Regskennisgewings?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Geteikende Gehoor</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Bereik regsprofessionele persone, besigheidseienaars, en besluitnemers wat aktief soek vir openbare kennisgewings.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Hoë Intent Verkeer</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Ons besoekers soek aktief spesifieke regskennisgewings, wat 'n hoogs betrokke gehoor vir jou boodskap skep.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Groeiende Platform</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Deel van die Novus Media netwerk, wat duisende lesers regoor Suid-Afrika daagliks bereik.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Nasionale Reikwydte</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Tweetalige platform (Engels/Afrikaans) wat alle provinsies en groot metropolitaanse areas dek.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Betroubare Handelsmerk</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Nova News is 'n gevestigde media handelsmerk vertrou deur regsprofessionele persone en besighede landwyd.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="size-12 wpn-text--accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Gedetailleerde Analise</h3>
              <p className="text-[var(--muted-foreground)] text-sm">
                Volg jou veldtog prestasie met omvattende analise en verslagdoeningsinstrumente.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Advertising Options Section */}
      <div className="py-16 bg-[var(--muted)]">
        <div className="container mx-auto px-4">
          <h2 className="wpn-heading-h2 wpn-heading--primary wpn-heading--center mb-12">
            Advertensie Opsies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="wpn-heading-h3 wpn-heading--primary mb-4">Vertoon Advertensies</h3>
              <ul className="space-y-3 text-[var(--foreground)]">
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Banneradvertensies in verskeie groottes en formate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Strategiese plasing op hoë-verkeer bladsye</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Kategorie-spesifieke teikenopsies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Geografiese teikening per provinsie of stad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Buigsame CPM of CPC prysmodelle</span>
                </li>
              </ul>
              <Button className="w-full mt-6 wpn-button wpn-button--accent" asChild>
                <Link to="/af/kontak">Navraag Oor Vertoon Advertensies</Link>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="wpn-heading-h3 wpn-heading--primary mb-4">Borg Inhoud</h3>
              <ul className="space-y-3 text-[var(--foreground)]">
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Uitgestalde kennisgewing plasings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Prioriteit lys in soekresultate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Nuusbrief borgskapgeleenthede</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Kategorie bladsy borgskappe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="wpn-text--accent mt-1">•</span>
                  <span>Eksklusiewe posisioneringopsies</span>
                </li>
              </ul>
              <Button className="w-full mt-6 wpn-button wpn-button--accent" asChild>
                <Link to="/af/kontak">Navraag Oor Borgskappe</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-12 max-w-3xl mx-auto text-center bg-gradient-to-br from-[var(--muted)] to-white">
            <h2 className="wpn-heading-h2 wpn-heading--primary mb-4">
              Gereed Om Te Begin?
            </h2>
            <p className="text-[var(--foreground)] mb-8">
              Kontak ons advertensie span vandag om te bespreek hoe ons jou kan help om jou teikengehoor te bereik 
              deur die Nova News Regskennisgewings platform en die breër Novus Media netwerk.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="wpn-button wpn-button--accent" asChild>
                <Link to="/af/kontak">Kontak Ons</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/af/prysstruktuur">Bekyk Media Stel</Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-[var(--border-color-light)]">
              <p className="text-sm text-[var(--muted-foreground)]">
                Vir advertensie navrae: <a href="mailto:advertensies@novanews.co.za" className="wpn-link--accent">advertensies@novanews.co.za</a>
                <br />
                Telefoon: <a href="tel:+27123456789" className="wpn-link--accent">012 345 6789</a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}