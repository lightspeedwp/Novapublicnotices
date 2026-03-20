import { useState } from "react";
import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { useHero } from "../hooks/useHero";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
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
} from "lucide-react";
import { faqCategories, faqItems, quickHelpLinks } from "../data/help/faq-data";
import "../../styles/help.css";

export default function Help() {
  const heroData = useHero('help', 'en');
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
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      {/* Help Page Content */}
      <div className="wpn-help">
        <div className="wpn-help__container">
          
          {/* Search Bar */}
          <section className="wpn-help-search">
            <div className="wpn-help-search__inner">
              <label htmlFor="faq-search" className="wpn-help-search__label">
                Search for answers
              </label>
              <div className="wpn-help-search__field">
                <Search className="wpn-help-search__icon" />
                <Input
                  type="search"
                  id="faq-search"
                  placeholder="Search help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="wpn-help-search__input"
                />
              </div>
              {searchQuery && (
                <p className="wpn-help-search__results">
                  Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>
          </section>

          {/* Quick Help Links */}
          <section className="wpn-help-quick">
            <h2 className="wpn-help-quick__title">Quick help</h2>
            <div className="wpn-help-quick__grid">
              {quickHelpLinks[lang].map((link, index) => {
                const Icon = getQuickLinkIcon(link.icon);
                return (
                  <div key={index} className="wpn-help-quick-card">
                    <a href={link.href} className="wpn-help-quick-card__link">
                      <div className="wpn-help-quick-card__icon">
                        <Icon />
                      </div>
                      <h3 className="wpn-help-quick-card__title">
                        {link.title}
                      </h3>
                      <p className="wpn-help-quick-card__description">
                        {link.description}
                      </p>
                    </a>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Category Filter */}
          <section className="wpn-help-categories">
            <h2 className="wpn-help-categories__title">Browse by category</h2>
            <div className="wpn-help-categories__grid">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`wpn-help-category ${
                  selectedCategory === "all" ? "wpn-help-category--active" : ""
                }`}
              >
                <div className="wpn-help-category__inner">
                  <HelpCircle className="wpn-help-category__icon" />
                  <div className="wpn-help-category__content">
                    <h4 className="wpn-help-category__title">All categories</h4>
                    <p className="wpn-help-category__count">
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
                    className={`wpn-help-category ${
                      isSelected ? "wpn-help-category--active" : ""
                    }`}
                  >
                    <div className="wpn-help-category__inner">
                      <Icon className="wpn-help-category__icon" />
                      <div className="wpn-help-category__content">
                        <h4 className="wpn-help-category__title">
                          {category.name[lang]}
                        </h4>
                        <p className="wpn-help-category__count">
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
          <section className="wpn-help-faq">
            <div className="wpn-help-faq__inner">
              {selectedCategory !== "all" && (
                <div className="wpn-help-faq__header">
                  <h2 className="wpn-help-faq__header-title">
                    {faqCategories.find((cat) => cat.id === selectedCategory)
                      ?.name[lang]}
                  </h2>
                  <p className="wpn-help-faq__header-description">
                    {faqCategories.find((cat) => cat.id === selectedCategory)
                      ?.description[lang]}
                  </p>
                </div>
              )}

              {filteredFAQs.length === 0 ? (
                <div className="wpn-help-faq__empty">
                  <HelpCircle className="wpn-help-faq__empty-icon" />
                  <h3 className="wpn-help-faq__empty-title">
                    No results found
                  </h3>
                  <p className="wpn-help-faq__empty-description">
                    Try adjusting your search or browse all categories
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    variant="outline"
                    className="wpn-button wpn-button--outline"
                  >
                    Clear filters
                  </Button>
                </div>
              ) : (
                <div className="wpn-help-faq__list">
                  {filteredFAQs.map((faq) => {
                    const isExpanded = expandedFAQ.includes(faq.id);

                    return (
                      <div key={faq.id} className="wpn-help-faq-item">
                        <button
                          onClick={() => toggleFAQ(faq.id)}
                          className="wpn-help-faq-item__button"
                        >
                          <h3 className="wpn-help-faq-item__question">
                            {faq.question[lang]}
                          </h3>
                          <ChevronDown
                            className={`wpn-help-faq-item__icon ${
                              isExpanded ? "wpn-help-faq-item__icon--expanded" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="wpn-help-faq-item__answer">
                            <div className="wpn-help-faq-item__answer-inner">
                              <p className="wpn-help-faq-item__answer-text">
                                {faq.answer[lang]}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>

          {/* Contact Support Section */}
          <section className="wpn-help-support">
            <div className="wpn-help-support__inner">
              <h2 className="wpn-help-support__title">
                Still need help?
              </h2>
              <p className="wpn-help-support__subtitle">
                Our support team is ready to assist you with any questions
              </p>

              <div className="wpn-help-support__grid">
                <div className="wpn-help-support-card">
                  <Mail className="wpn-help-support-card__icon" />
                  <h4 className="wpn-help-support-card__title">Email support</h4>
                  <p className="wpn-help-support-card__description">
                    Get a response within 24 hours
                  </p>
                  <a
                    href="mailto:support@novanews.co.za"
                    className="wpn-help-support-card__link"
                  >
                    support@novanews.co.za
                  </a>
                </div>

                <div className="wpn-help-support-card">
                  <Phone className="wpn-help-support-card__icon" />
                  <h4 className="wpn-help-support-card__title">Phone support</h4>
                  <p className="wpn-help-support-card__description">
                    Mon-Fri, 8am-5pm SAST
                  </p>
                  <a
                    href="tel:+27123456789"
                    className="wpn-help-support-card__link"
                  >
                    +27 12 345 6789
                  </a>
                </div>

                <div className="wpn-help-support-card">
                  <MessageCircle className="wpn-help-support-card__icon" />
                  <h4 className="wpn-help-support-card__title">Live chat</h4>
                  <p className="wpn-help-support-card__description">
                    Chat with us in real-time
                  </p>
                  <button className="wpn-help-support-card__button">
                    Start chat
                  </button>
                </div>
              </div>

              <div>
                <Button
                  className="wpn-button wpn-button--accent"
                  asChild
                >
                  <Link to="/contact">Contact sales team</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="wpn-help-resources">
            <h2 className="wpn-help-resources__title">Additional resources</h2>
            <div className="wpn-help-resources__grid">
              <div className="wpn-help-resource-card">
                <FileText className="wpn-help-resource-card__icon" />
                <h3 className="wpn-help-resource-card__title">
                  Legal guides
                </h3>
                <p className="wpn-help-resource-card__description">
                  Download comprehensive guides for different notice types
                </p>
                <a href="#" className="wpn-help-resource-card__link">
                  Browse guides →
                </a>
              </div>

              <div className="wpn-help-resource-card">
                <BookOpen className="wpn-help-resource-card__icon" />
                <h3 className="wpn-help-resource-card__title">
                  Video tutorials
                </h3>
                <p className="wpn-help-resource-card__description">
                  Watch step-by-step video guides for submitting notices
                </p>
                <a href="#" className="wpn-help-resource-card__link">
                  Watch videos →
                </a>
              </div>

              <div className="wpn-help-resource-card">
                <Calculator className="wpn-help-resource-card__icon" />
                <h3 className="wpn-help-resource-card__title">
                  Pricing calculator
                </h3>
                <p className="wpn-help-resource-card__description">
                  Estimate the cost of publishing your notice
                </p>
                <a href="#" className="wpn-help-resource-card__link">
                  Calculate cost →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
