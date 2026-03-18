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

export default function FAQ() {
  const faqCategories = [
    {
      title: "Getting started",
      icon: FileText,
      faqs: [
        {
          question: "What are public notices?",
          answer: "Public notices are legally required announcements that must be published to inform the public about matters of legal significance, such as deceased estates, tenders, liquor licence applications, and town planning proposals.",
        },
        {
          question: "Who needs to publish public notices?",
          answer: "Legal practitioners, executors, municipalities, government departments, businesses applying for licences, and individuals required by law to make public announcements.",
        },
        {
          question: "How do I know which type of notice I need?",
          answer: "Our submission form guides you through selecting the correct notice type. If you're unsure, contact our sales team for assistance.",
        },
      ],
    },
    {
      title: "Submission process",
      icon: FileText,
      faqs: [
        {
          question: "How long does the submission process take?",
          answer: "Filling out the form takes 5-10 minutes. After submission and payment, notices undergo moderation within 24-48 hours before publication.",
        },
        {
          question: "What information do I need to provide?",
          answer: "You'll need the notice details (names, dates, reference numbers), any required supporting documents, and contact information. Specific requirements vary by notice type.",
        },
        {
          question: "Can I save my submission and complete it later?",
          answer: "Yes, if you're logged in, you can save drafts and return to complete them later from your account dashboard.",
        },
        {
          question: "What file formats can I upload?",
          answer: "We accept PDF, DOC, DOCX, JPG, and PNG files up to 10MB each. Multiple files can be uploaded per notice.",
        },
      ],
    },
    {
      title: "Pricing & Payment",
      icon: DollarSign,
      faqs: [
        {
          question: "How much does it cost to publish a notice?",
          answer: "Digital-only notices start from R500. Print + digital packages start from R1,500. Exact pricing depends on notice type, length, and publication requirements. See our pricing page for detailed information.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards (Visa, Mastercard), EFT, and instant EFT through our secure PayFast integration.",
        },
        {
          question: "Is VAT included in the pricing?",
          answer: "Yes, all prices shown include VAT. You'll receive a tax invoice after payment.",
        },
        {
          question: "Do you offer refunds?",
          answer: "If your notice is rejected during moderation due to non-compliance, you'll receive a full refund or can revise and resubmit at no additional cost. Refunds for published notices are subject to our terms and conditions.",
        },
      ],
    },
    {
      title: "Moderation & Publication",
      icon: Clock,
      faqs: [
        {
          question: "Why do notices need to be moderated?",
          answer: "All notices are reviewed to ensure legal compliance, accuracy, and completeness before publication. This protects both publishers and the public.",
        },
        {
          question: "How long does moderation take?",
          answer: "Standard moderation takes 24-48 hours. Print + digital packages include priority moderation (12-24 hours). Full service packages offer expedited review.",
        },
        {
          question: "What happens if my notice is rejected?",
          answer: "You'll receive an email explaining why it was rejected and what changes are needed. You can revise and resubmit at no additional cost, or request a full refund.",
        },
        {
          question: "How long will my notice be published?",
          answer: "Digital notices remain in our searchable archive indefinitely. Print notices appear in the publication date specified. Legal requirements vary by notice type.",
        },
      ],
    },
    {
      title: "Account & Support",
      icon: Shield,
      faqs: [
        {
          question: "Do I need an account to submit a notice?",
          answer: "Yes, an account allows you to track submissions, save drafts, view order history, and receive email updates throughout the process.",
        },
        {
          question: "Can I submit notices on behalf of my organization?",
          answer: "Yes, you can register an organization account and submit notices on behalf of your company, law firm, or government department.",
        },
        {
          question: "How can I track the status of my notice?",
          answer: "Log in to your account and go to 'My Notices' to see the status of all your submissions. You'll also receive email updates at each stage.",
        },
        {
          question: "What if I need to make changes after submission?",
          answer: "Contact our support team immediately. Changes can be made before moderation is complete. After publication, amendments may require a new submission.",
        },
      ],
    },
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
                <span className="wpn-breadcrumb__current">Frequently asked questions</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title">
            Frequently asked questions
          </h1>
          <p className="wpn-page-header__subtitle">
            Find answers to common questions about publishing public notices with Nova News
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
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our support team is here to help you with any questions about publishing notices.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="wpn-button wpn-button--lg wpn-button--accent" asChild>
                    <Link to="/contact">
                      <Mail className="mr-2 size-5" />
                      Contact Support
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="wpn-button wpn-button--lg wpn-button--outline" asChild>
                    <Link to="/sales">
                      <Phone className="mr-2 size-5" />
                      Talk to Sales
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
              Ready to Submit Your Notice?
            </h2>
            <p className="wpn-cta-section__description">
              Our guided submission process makes it easy to publish your public notice quickly and compliantly.
            </p>
            <div className="wpn-cta-section__actions">
              <Button size="lg" className="wpn-button wpn-button--lg wpn-button--white" asChild>
                <Link to="/submit">
                  Start Submission
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="wpn-button wpn-button--lg wpn-button--outline border-white text-white hover:bg-white/10" asChild>
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}