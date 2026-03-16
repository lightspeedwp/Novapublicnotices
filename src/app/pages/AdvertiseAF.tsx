import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Users, Target, TrendingUp, Globe, Award, BarChart } from "lucide-react";

export default function AdvertiseAF() {
  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#09082f] to-[#1a1850] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-raleway text-4xl md:text-5xl font-bold mb-6">
              Adverteer Met Nova News Regskennisgewings
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Bereik Suid-Afrika se regs- en besigheidsprofessionele persone deur ons betroubare openbare kennisgewings platform
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
                <Link to="/af/kontak">Begin Nou</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#09082f] hover:bg-gray-100" asChild>
                <Link to="/af/prysstruktuur">Bekyk Pryse</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Advertise Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-raleway text-3xl font-bold text-center text-[#09082f] mb-12">
            Hoekom Adverteer op Nova News Regskennisgewings?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Geteikende Gehoor</h3>
              <p className="text-gray-600 text-sm">
                Bereik regsprofessionele persone, besigheidseienaars, en besluitnemers wat aktief soek vir openbare kennisgewings.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Hoë Intent Verkeer</h3>
              <p className="text-gray-600 text-sm">
                Ons besoekers soek aktief spesifieke regskennisgewings, wat 'n hoogs betrokke gehoor vir jou boodskap skep.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Groeiende Platform</h3>
              <p className="text-gray-600 text-sm">
                Deel van die Novus Media netwerk, wat duisende lesers regoor Suid-Afrika daagliks bereik.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Nasionale Reikwydte</h3>
              <p className="text-gray-600 text-sm">
                Tweetalige platform (Engels/Afrikaans) wat alle provinsies en groot metropolitaanse areas dek.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Betroubare Handelsmerk</h3>
              <p className="text-gray-600 text-sm">
                Nova News is 'n gevestigde media handelsmerk vertrou deur regsprofessionele persone en besighede landwyd.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Gedetailleerde Analise</h3>
              <p className="text-gray-600 text-sm">
                Volg jou veldtog prestasie met omvattende analise en verslagdoeningsinstrumente.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Advertising Options Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-raleway text-3xl font-bold text-center text-[#09082f] mb-12">
            Advertensie Opsies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">Vertoon Advertensies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Banneradvertensies in verskeie groottes en formate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Strategiese plasing op hoë-verkeer bladsye</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Kategorie-spesifieke teikenopsies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Geografiese teikening per provinsie of stad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Buigsame CPM of CPC prysmodelle</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-[#d70025] hover:bg-[#b5001f]" asChild>
                <Link to="/af/kontak">Navraag Oor Vertoon Advertensies</Link>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">Borg Inhoud</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Uitgestalde kennisgewing plasings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Prioriteit lys in soekresultate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Nuusbrief borgskapgeleenthede</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Kategorie bladsy borgskappe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Eksklusiewe posisioneringopsies</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-[#d70025] hover:bg-[#b5001f]" asChild>
                <Link to="/af/kontak">Navraag Oor Borgskappe</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-12 max-w-3xl mx-auto text-center bg-gradient-to-br from-gray-50 to-white">
            <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-4">
              Gereed Om Te Begin?
            </h2>
            <p className="text-gray-700 mb-8">
              Kontak ons advertensie span vandag om te bespreek hoe ons jou kan help om jou teikengehoor te bereik 
              deur die Nova News Regskennisgewings platform en die breër Novus Media netwerk.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
                <Link to="/af/kontak">Kontak Ons</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/af/prysstruktuur">Bekyk Media Stel</Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Vir advertensie navrae: <a href="mailto:advertensies@novanews.co.za" className="text-[#d70025] hover:underline">advertensies@novanews.co.za</a>
                <br />
                Telefoon: <a href="tel:+27123456789" className="text-[#d70025] hover:underline">012 345 6789</a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
