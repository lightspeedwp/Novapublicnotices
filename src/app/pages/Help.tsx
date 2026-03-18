import { useState } from "react";
import { Link } from "react-router";
import Layout from "../components/Layout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Search,
  ChevronDown,
  PlayCircle,
  FileText,
  CreditCard,
  User,
  Scale,
  Mail,
  MessageCircle,
  Phone,
  HelpCircle,
  FilePlus,
  Calculator,
  Headphones,
  BookOpen,
  Home,
} from "lucide-react";
import { faqCategories, faqItems, quickHelpLinks } from "../data/help/faq-data";
import "../../styles/components.css";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedFAQ, setExpandedFAQ] = useState<string[]>([]);

  const lang = "en";

  // Filter FAQs based on search and category
  const filteredFAQs = faqItems.filter((faq) => {
    const matchesSearch =
      searchQuery === "" ||
      faq.question[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer[lang].toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setExpandedFAQ((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCategoryIcon = (iconName: string) => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      "play-circle": PlayCircle,
      search: Search,
      "file-plus": FilePlus,
      "credit-card": CreditCard,
      user: User,
      scale: Scale,
    };
    return icons[iconName] || HelpCircle;
  };

  const getQuickLinkIcon = (iconName: string) => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      headphones: Headphones,
      "book-open": BookOpen,
      calculator: Calculator,
      "file-text": FileText,
    };
    return icons[iconName] || HelpCircle;
  };

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
                <span className="wpn-breadcrumb__current">Help center</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title">
            Help center
          </h1>
          <p className="wpn-page-header__subtitle">
            Find answers to your questions about public notices, submissions, and our platform
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <Card className="p-6 mb-8">
          <div className="max-w-2xl mx-auto">
            <label htmlFor="faq-search" className="block wpn-heading-h4 wpn-heading--primary mb-4 text-center">
              Search for answers
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[var(--muted-foreground)]" />
              <Input
                type="search"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-[var(--muted-foreground)] mt-3 text-center">
                Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </Card>

        {/* Quick Help Links */}
        <section className="mb-12">
          <h2 className="wpn-heading-h3 wpn-heading--primary mb-6 text-center">
            Quick Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelpLinks[lang].map((link, index) => {
              const Icon = getQuickLinkIcon(link.icon);
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <a href={link.href} className="block group">
                    <div className="wpn-icon-badge wpn-bg--accent mb-4">
                      <Icon className="wpn-icon-badge__icon text-white" />
                    </div>
                    <h3 className="wpn-heading-h5 wpn-heading--primary mb-2 group-hover:wpn-text--accent transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {link.description}
                    </p>
                  </a>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <h2 className="wpn-heading-h3 wpn-heading--primary mb-6 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                selectedCategory === "all"
                  ? "wpn-border--accent wpn-bg--accent text-white"
                  : "border-[var(--border-color-light)] hover:border-[var(--border)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <HelpCircle
                  className={`size-6 ${
                    selectedCategory === "all" ? "text-white" : "wpn-text--accent"
                  }`}
                />
                <div>
                  <h4
                    className={`font-semibold ${
                      selectedCategory === "all" ? "text-white" : "wpn-text--primary"
                    }`}
                  >
                    All Categories
                  </h4>
                  <p
                    className={`text-sm ${
                      selectedCategory === "all" ? "text-white/80" : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    {faqItems.length} questions
                  </p>
                </div>
              </div>
            </button>

            {faqCategories.map((category) => {
              const Icon = getCategoryIcon(category.icon);
              const count = faqItems.filter(
                (faq) => faq.category === category.id
              ).length;
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    isSelected
                      ? "wpn-border--accent wpn-bg--accent text-white"
                      : "border-[var(--border-color-light)] hover:border-[var(--border)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`size-6 ${
                        isSelected ? "text-white" : "wpn-text--accent"
                      }`}
                    />
                    <div>
                      <h4
                        className={`font-semibold ${
                          isSelected ? "text-white" : "wpn-text--primary"
                        }`}
                      >
                        {category.name[lang]}
                      </h4>
                      <p
                        className={`text-sm ${
                          isSelected ? "text-white/80" : "text-[var(--muted-foreground)]"
                        }`}
                      >
                        {count} question{count !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            {selectedCategory !== "all" && (
              <div className="mb-6">
                <h2 className="wpn-heading-h3 wpn-heading--primary mb-2">
                  {faqCategories.find((cat) => cat.id === selectedCategory)
                    ?.name[lang]}
                </h2>
                <p className="text-[var(--muted-foreground)]">
                  {faqCategories.find((cat) => cat.id === selectedCategory)
                    ?.description[lang]}
                </p>
              </div>
            )}

            {filteredFAQs.length === 0 ? (
              <Card className="p-12 text-center">
                <HelpCircle className="size-16 text-[var(--muted-foreground)] mx-auto mb-4" />
                <h3 className="wpn-heading-h4 wpn-heading--primary mb-2">
                  No results found
                </h3>
                <p className="text-[var(--muted-foreground)] mb-6">
                  Try adjusting your search or browse all categories
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className="space-y-3">
                {filteredFAQs.map((faq) => {
                  const isExpanded = expandedFAQ.includes(faq.id);

                  return (
                    <Card key={faq.id} className="overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-[var(--muted)] transition-colors duration-150"
                      >
                        <div className="flex-1">
                          <h3 className="wpn-heading-h5 wpn-heading--primary mb-0">
                            {faq.question[lang]}
                          </h3>
                        </div>
                        <ChevronDown
                          className={`size-6 wpn-text--accent flex-shrink-0 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="px-6 pb-6 border-t">
                          <div className="pt-4">
                            <p className="text-[var(--foreground)] leading-relaxed">
                              {faq.answer[lang]}
                            </p>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="mb-12">
          <Card className="p-8 wpn-bg--primary text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="wpn-heading-h3 wpn-heading--white mb-4">
                Still need help?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Our support team is ready to assist you with any questions
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-white/10 border-white/20">
                  <Mail className="size-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold text-white text-[#ffffff] m-[0px]">Email Support</h4>
                  <p className="text-sm text-white/80 m-[0px]">
                    Get a response within 24 hours
                  </p>
                  <a
                    href="mailto:support@novanews.co.za"
                    className="text-sm text-white underline hover:no-underline"
                  >
                    support@novanews.co.za
                  </a>
                </Card>

                <Card className="p-6 bg-white/10 border-white/20">
                  <Phone className="size-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold text-white text-[#ffffff] m-[0px]">Phone Support</h4>
                  <p className="text-sm text-white/80 mb-4">
                    Mon-Fri, 8am-5pm SAST
                  </p>
                  <a
                    href="tel:+27123456789"
                    className="text-sm text-white underline hover:no-underline"
                  >
                    +27 12 345 6789
                  </a>
                </Card>

                <Card className="p-6 bg-white/10 border-white/20">
                  <MessageCircle className="size-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold text-white text-[#ffffff] m-[0px]">Live Chat</h4>
                  <p className="text-sm text-white/80 mb-4">
                    Chat with us in real-time
                  </p>
                  <button className="text-sm text-white underline hover:no-underline">
                    Start Chat
                  </button>
                </Card>
              </div>

              <div className="mt-8">
                <Button
                  className="wpn-button wpn-button--accent"
                  asChild
                >
                  <a href="/contact">Contact Sales Team</a>
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="wpn-heading-h3 wpn-heading--primary mb-6 text-center">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <FileText className="size-8 wpn-text--accent mb-4" />
              <h3 className="wpn-heading-h5 wpn-heading--primary mb-2">
                Legal Guides
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Download comprehensive guides for different notice types
              </p>
              <a href="#" className="text-sm wpn-text--accent hover:underline">
                Browse Guides →
              </a>
            </Card>

            <Card className="p-6">
              <BookOpen className="size-8 wpn-text--accent mb-4" />
              <h3 className="wpn-heading-h5 wpn-heading--primary mb-2">
                Video Tutorials
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Watch step-by-step video guides for submitting notices
              </p>
              <a href="#" className="text-sm wpn-text--accent hover:underline">
                Watch Videos →
              </a>
            </Card>

            <Card className="p-6">
              <Calculator className="size-8 wpn-text--accent mb-4" />
              <h3 className="wpn-heading-h5 wpn-heading--primary mb-2">
                Pricing Calculator
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Estimate the cost of publishing your notice
              </p>
              <a href="#" className="text-sm wpn-text--accent hover:underline">
                Calculate Cost →
              </a>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}