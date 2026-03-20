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

export default function FAQ() {
  const heroData = useHero('faq', 'en');

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
      title: "Pricing and payment",
      icon: CurrencyCircleDollar,
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
      title: "Moderation and publication",
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
      title: "Account and support",
      icon: ShieldCheck,
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
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

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
              Still have questions?
            </h2>
            <p className="wpn-faq-support__description">
              Can't find the answer you're looking for? Our support team is here to help you with any questions about publishing notices.
            </p>
            <div className="wpn-faq-support__actions">
              <Link to="/contact" className="wpn-faq-support__button wpn-faq-support__button--primary">
                <Envelope weight="fill" className="wpn-faq-support__button-icon" />
                Contact support
              </Link>
              <Link to="/sales" className="wpn-faq-support__button wpn-faq-support__button--secondary">
                <Phone weight="fill" className="wpn-faq-support__button-icon" />
                Talk to sales
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="wpn-faq-cta">
            <h2 className="wpn-faq-cta__title">
              Ready to submit your notice?
            </h2>
            <p className="wpn-faq-cta__description">
              Our guided submission process makes it easy to publish your public notice quickly and compliantly.
            </p>
            <div className="wpn-faq-cta__actions">
              <Link to="/submit" className="wpn-faq-cta__button wpn-faq-cta__button--primary">
                Start submission
              </Link>
              <Link to="/pricing" className="wpn-faq-cta__button wpn-faq-cta__button--secondary">
                View pricing
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
