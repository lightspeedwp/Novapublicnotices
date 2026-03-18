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

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Digital only",
      icon: Zap,
      price: "From R500",
      description: "Online publication only",
      features: [
        "Publication on Nova News portal",
        "Searchable digital archive",
        "Basic analytics dashboard",
        "Email confirmation",
        "24-48 hour moderation",
      ],
      cta: "Get started",
      href: "/submit",
      popular: false,
    },
    {
      name: "Print + Digital",
      icon: FileText,
      price: "From R1,500",
      description: "Combined print and online",
      features: [
        "All digital only features",
        "Print publication in newspapers",
        "Provincial gazette option",
        "Priority moderation (12-24 hours)",
        "Dedicated support",
      ],
      cta: "Contact sales",
      href: "/contact",
      popular: true,
    },
    {
      name: "Full Service",
      icon: Shield,
      price: "From R3,500",
      description: "Complete managed service",
      features: [
        "All print + digital features",
        "Dedicated account manager",
        "Document preparation assistance",
        "Legal compliance review",
        "Multi-publication coordination",
      ],
      cta: "Talk to sales",
      href: "/sales",
      popular: false,
    },
  ];

  const noticeTypes = [
    { name: "Tenders", digital: "R500", print: "R1,500", notes: "Varies by length" },
    { name: "Estates", digital: "R600", print: "R1,800", notes: "Standard format" },
    { name: "Liquor Licences", digital: "R750", print: "R2,000", notes: "Provincial variations" },
    { name: "Town Planning", digital: "R800", print: "R2,200", notes: "Municipal requirements" },
    { name: "Business Licences", digital: "R550", print: "R1,600", notes: "Type dependent" },
    { name: "General Notices", digital: "R500+", print: "R1,500+", notes: "Customized pricing" },
  ];

  return (
    <Layout lang="en" showAds={true}>
      {/* Page Header */}
      <section className="wpn-page-header">
        <div className="wpn-page-header__container">
          {/* Breadcrumb */}
          <nav className="wpn-breadcrumb" aria-label="Breadcrumb">
            <ol className="wpn-breadcrumb__list">
              <li className="wpn-breadcrumb__item">
                <Link to="/" className="wpn-breadcrumb__link">
                  <Home className="wpn-breadcrumb__icon" />
                  Home
                </Link>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__separator">/</span>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__current">Pricing</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title">
            Transparent pricing for public notices
          </h1>
          <p className="wpn-page-header__subtitle">
            Choose the publication option that works best for your requirements. All prices include moderation and support.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="wpn-section-header text-center mb-12">
              <h2 className="wpn-section-header__title">
                Publication Options
              </h2>
              <p className="wpn-section-header__subtitle">
                Select the package that meets your legal and reach requirements
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
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 wpn-bg--accent text-white text-xs font-bold px-3 py-1 rounded-full text-[#000000]">
                        Most Popular
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
                Pricing by Notice Type
              </h2>
              <p className="wpn-section-header__subtitle">
                Indicative pricing for common notice categories
              </p>
            </div>

            <Card className="wpn-card--bordered">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-bold wpn-text--primary">
                        Notice Type
                      </th>
                      <th className="text-left p-4 font-bold wpn-text--primary">
                        Digital Only
                      </th>
                      <th className="text-left p-4 font-bold wpn-text--primary">
                        Print + Digital
                      </th>
                      <th className="text-left p-4 font-bold wpn-text--primary">
                        Notes
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
                <strong>Note:</strong> Pricing shown is indicative and may vary based on:
              </p>
              <ul className="text-sm text-[var(--foreground)] space-y-1 ml-6 list-disc">
                <li>Notice length and complexity</li>
                <li>Number of publications required</li>
                <li>Provincial or municipal requirements</li>
                <li>Urgency and turnaround time</li>
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
                What's Included in Every Package
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Professional Moderation
                </h3>
                <p className="text-sm text-muted-foreground">
                  All notices are reviewed by our team to ensure legal compliance and accuracy before publication.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Secure Payment Processing
                </h3>
                <p className="text-sm text-muted-foreground">
                  PayFast integration ensures safe and secure payment with multiple payment method options.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Email Notifications
                </h3>
                <p className="text-sm text-muted-foreground">
                  Stay informed with automatic email updates at each stage: submission, payment, review, and publication.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Digital Archive Access
                </h3>
                <p className="text-sm text-muted-foreground">
                  All notices remain searchable in our digital archive for easy reference and compliance records.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Document Upload Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Upload supporting documents, certificates, and attachments as required by legal regulations.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-4 flex items-center gap-2">
                  <Check className="size-5 wpn-text--accent" />
                  Responsive Support Team
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our team is available to assist with questions, changes, or any issues during the process.
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
                Pricing FAQs
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-2">
                  Are there any hidden fees?
                </h3>
                <p className="text-sm text-muted-foreground">
                  No. The prices shown include moderation, publication, and support. Payment processing fees are shown separately at checkout.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-2">
                  Can I get a refund if my notice is rejected?
                </h3>
                <p className="text-sm text-muted-foreground">
                  If your notice is rejected during moderation, you'll receive a full refund or can revise and resubmit at no additional cost.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-2">
                  Do you offer bulk or volume discounts?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes. Organizations publishing multiple notices can contact our sales team for custom pricing packages.
                </p>
              </Card>

              <Card className="wpn-card--bordered p-6">
                <h3 className="font-bold wpn-text--primary mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We accept credit/debit cards, EFT, and instant EFT through our secure PayFast integration.
                </p>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="wpn-button wpn-button--outline" asChild>
                <Link to="/faq">
                  View All FAQs
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
            <h2 className="wpn-cta-section__title text-[#ffffff]">
              Need a Custom Quote?
            </h2>
            <p className="wpn-cta-section__description">
              Contact our sales team for volume pricing, enterprise packages, or specialized requirements.
            </p>
            <div className="wpn-cta-section__actions">
              <Button size="lg" className="wpn-button wpn-button--lg wpn-button--white" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 size-5" />
                  Request Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="wpn-button wpn-button--lg wpn-button--outline border-white text-white hover:bg-white/10" asChild>
                <Link to="/sales">
                  <Phone className="mr-2 size-5" />
                  Talk to Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}