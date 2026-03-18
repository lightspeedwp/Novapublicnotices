import { Link } from "react-router";
import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import AdSlot from "../components/AdSlot";
import {
  Check,
  Zap,
  FileText,
  Shield,
  HelpCircle,
  Phone,
  Mail,
  Home,
} from "lucide-react";
import "../../styles/components.css";

export default function PricingAF() {
  const pricingTiers = [
    {
      name: "Slegs digitaal",
      icon: Zap,
      price: "Vanaf R500",
      description: "Slegs aanlyn publikasie",
      features: [
        "Publikasie op Nova News portaal",
        "Soekbare digitale argief",
        "Basiese ontledingspaneel",
        "E-pos bevestiging",
        "24-48 uur moderering",
      ],
      cta: "Begin",
      href: "/af/indien",
      popular: false,
    },
    {
      name: "Druk + Digitaal",
      icon: FileText,
      price: "Vanaf R1,500",
      description: "Gekombineerde druk en aanlyn",
      features: [
        "Alle slegs digitaal kenmerke",
        "Druk publikasie in koerante",
        "Provinsiale koerant opsie",
        "Prioriteit moderering (12-24 uur)",
        "Toegewyde ondersteuning",
      ],
      cta: "Kontak verkope",
      href: "/af/kontak",
      popular: true,
    },
    {
      name: "Vol diens",
      icon: Shield,
      price: "Vanaf R3,500",
      description: "Volledige bestuurde diens",
      features: [
        "Alle druk + digitaal kenmerke",
        "Toegewyde rekeningbestuurder",
        "Dokument voorbereidingshulp",
        "Wettige nakomingshersiening",
        "Multi-publikasie koördinering",
      ],
      cta: "Praat met verkope",
      href: "/af/verkope",
      popular: false,
    },
  ];

  const noticeTypes = [
    { name: "Tenders", digital: "R500", print: "R1,500", notes: "Wissel volgens lengte" },
    { name: "Boedels", digital: "R600", print: "R1,800", notes: "Standaard formaat" },
    { name: "Dranklisensies", digital: "R750", print: "R2,000", notes: "Provinsiale variasies" },
    { name: "Stadsbeplanning", digital: "R800", print: "R2,200", notes: "Munisipale vereistes" },
    { name: "Besigheidslisensies", digital: "R550", print: "R1,600", notes: "Tipe afhanklik" },
    { name: "Algemene Kennisgewings", digital: "R500+", print: "R1,500+", notes: "Aangepaste pryse" },
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
                <span className="wpn-breadcrumb__current">Pryse</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title">
            Deursigtige pryse vir openbare kennisgewings
          </h1>
          <p className="wpn-page-header__subtitle">
            Kies die publikasie-opsie wat die beste vir u vereistes werk. Alle pryse sluit moderering en ondersteuning in.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="wpn-section-header text-center mb-12">
              <h2 className="wpn-section-header__title">
                Publikasie-opsies
              </h2>
              <p className="wpn-section-header__subtitle">
                Kies die pakket wat aan u wetlike en bereikvereistes voldoen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pricingTiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <Card
                    key={tier.name}
                    className={`relative ${
                      tier.popular
                        ? "wpn-border--accent wpn-shadow--lg"
                        : "wpn-card--bordered"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 wpn-bg--accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        Mees Gewild
                      </div>
                    )}
                    <div className="p-8">
                      <div className="text-center mb-6">
                        <Icon className="size-12 wpn-text--accent mx-auto mb-3" />
                        <h3 className="text-xl font-bold wpn-text--primary mb-2">
                          {tier.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {tier.description}
                        </p>
                        <div className="text-3xl font-bold wpn-text--accent">
                          {tier.price}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="size-4 wpn-text--accent shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full ${
                          tier.popular
                            ? "wpn-button wpn-button--accent"
                            : "wpn-button wpn-button--outline"
                        }`}
                        asChild
                      >
                        <Link to={tier.href}>{tier.cta}</Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing by Notice Type */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="wpn-section-header text-center mb-12">
              <h2 className="wpn-section-header__title">
                Pryse volgens Kennisgewingstipe
              </h2>
              <p className="wpn-section-header__subtitle">
                Aanwysende pryse vir algemene kennisgewingskategorieë
              </p>
            </div>

            <Card className="wpn-card--bordered">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-bold wpn-text--primary">
                        Kennisgewingstipe
                      </th>
                      <th className="text-left p-4 font-bold wpn-text--primary">
                        Slegs Digitaal
                      </th>
                      <th className="text-left p-4 font-bold wpn-text--primary">
                        Druk + Digitaal
                      </th>
                      <th className="text-left p-4 font-bold wpn-text--primary">
                        Notas
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {noticeTypes.map((notice, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-[var(--muted)]" : "bg-white"}
                      >
                        <td className="p-4 font-medium">{notice.name}</td>
                        <td className="p-4 wpn-text--accent font-bold">
                          {notice.digital}
                        </td>
                        <td className="p-4 wpn-text--accent font-bold">
                          {notice.print}
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">
                          {notice.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-sm text-[var(--foreground)] mb-2">
                <strong>Nota:</strong> Pryse getoon is aanwysend en kan wissel gebaseer op:
              </p>
              <ul className="text-sm text-[var(--foreground)] space-y-1 ml-6 list-disc">
                <li>Kennisgewingslengte en kompleksiteit</li>
                <li>Aantal publikasies benodig</li>
                <li>Provinsiale of munisipale vereistes</li>
                <li>Dringendheid en omskeertyd</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <AdSlot variant="leaderboard" className="my-8" />

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="wpn-section-header text-center mb-12">
              <h2 className="wpn-section-header__title">
                Wat Ingesluit is in Elke Pakket
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Professionele Moderering
                </h3>
                <p className="text-sm text-muted-foreground">
                  Alle kennisgewings word deur ons span hersien om wettige nakoming en akkuraatheid voor publikasie te verseker.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Veilige Betalingsverwerking
                </h3>
                <p className="text-sm text-muted-foreground">
                  PayFast integrasie verseker veilige betaling met verskeie betalingsmetode-opsies.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  E-pos Kennisgewings
                </h3>
                <p className="text-sm text-muted-foreground">
                  Bly ingelig met outomatiese e-pos opdaterings by elke stadium: indiening, betaling, hersiening, en publikasie.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Digitale Argief Toegang
                </h3>
                <p className="text-sm text-muted-foreground">
                  Alle kennisgewings bly soekbaar in ons digitale argief vir maklike verwysing en nakomingsrekords.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Dokument Oplaai Ondersteuning
                </h3>
                <p className="text-sm text-muted-foreground">
                  Laai ondersteunende dokumente, sertifikate en aanhegsels op soos vereis deur wetlike regulasies.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Responsiewe Ondersteuningspan
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ons span is beskikbaar om te help met vrae, veranderings, of enige probleme tydens die proses.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="wpn-section-header text-center mb-12">
              <h2 className="wpn-section-header__title">
                Prys VGV's
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-2">
                  Is daar enige versteekte fooie?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nee. Die pryse getoon sluit moderering, publikasie en ondersteuning in. Betalingsverwerkingsfooie word afsonderlik by betaalpunt getoon.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-2">
                  Kan ek 'n terugbetaling kry as my kennisgewing verwerp word?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Indien u kennisgewing tydens moderering verwerp word, sal u 'n volle terugbetaling ontvang of kan hersien en weer indien sonder addisionele koste.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-2">
                  Bied u grootmaat of volume afslag aan?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ja. Organisasies wat verskeie kennisgewings publiseer kan ons verkoopspan kontak vir aangepaste pryspakkette.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-2">
                  Watter betalingsmetodes aanvaar u?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ons aanvaar krediet/debietkaarte, EFT, en kitsoorskakel EFT deur ons veilige PayFast integrasie.
                </p>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="wpn-button wpn-button--outline" asChild>
                <Link to="/af/vaak-gestelde-vrae">
                  Bekyk Alle VGV's
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wpn-cta-section">
        <div className="wpn-cta-section__container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="wpn-cta-section__title">
              Benodig 'n Aangepaste Kwotasie?
            </h2>
            <p className="wpn-cta-section__description">
              Kontak ons verkoopspan vir volume pryse, ondernemingspakkette, of gespesialiseerde vereistes.
            </p>
            <div className="wpn-cta-section__actions">
              <Button size="lg" className="wpn-button wpn-button--lg wpn-button--white" asChild>
                <Link to="/af/kontak">
                  <Mail className="mr-2 size-5" />
                  Versoek Kwotasie
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="wpn-button wpn-button--lg wpn-button--outline border-white text-white hover:bg-white/10" asChild>
                <Link to="/af/verkope">
                  <Phone className="mr-2 size-5" />
                  Praat met Verkope
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}