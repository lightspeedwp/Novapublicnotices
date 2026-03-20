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

export default function HelpAF() {
  const heroData = useHero('help', 'af');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedFAQ, setExpandedFAQ] = useState<string[]>([]);

  const lang = "af";

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
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="af" />}

      {/* Help Page Content */}
      <div className="wpn-help">
        <div className="wpn-help__container">
          
          {/* Search Bar */}
          <section className="wpn-help-search">
            <div className="wpn-help-search__inner">
              <label htmlFor="faq-search" className="wpn-help-search__label">
                Soek vir antwoorde
              </label>
              <div className="wpn-help-search__field">
                <Search className="wpn-help-search__icon" />
                <Input
                  type="search"
                  id="faq-search"
                  placeholder="Soek hulpartikels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="wpn-help-search__input"
                />
              </div>
              {searchQuery && (
                <p className="wpn-help-search__results">
                  {filteredFAQs.length} resultate gevind
                </p>
              )}
            </div>
          </section>

          {/* Quick Help Links */}
          <section className="wpn-help-quick">
            <h2 className="wpn-help-quick__title">Vinnige hulp</h2>
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
            <h2 className="wpn-help-categories__title">Blaai volgens kategorie</h2>
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
                    <h4 className="wpn-help-category__title">Alle kategorieë</h4>
                    <p className="wpn-help-category__count">
                      {faqItems.length} vrae
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
                          {count} {count !== 1 ? "vrae" : "vraag"}
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
                    Geen resultate gevind nie
                  </h3>
                  <p className="wpn-help-faq__empty-description">
                    Probeer jou soektog aanpas of blaai alle kategorieë
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    variant="outline"
                    className="wpn-button wpn-button--outline"
                  >
                    Maak filters skoon
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
                Benodig steeds hulp?
              </h2>
              <p className="wpn-help-support__subtitle">
                Ons ondersteuningspan is gereed om jou te help met enige vrae
              </p>

              <div className="wpn-help-support__grid">
                <div className="wpn-help-support-card">
                  <Mail className="wpn-help-support-card__icon" />
                  <h4 className="wpn-help-support-card__title">E-pos ondersteuning</h4>
                  <p className="wpn-help-support-card__description">
                    Kry 'n antwoord binne 24 uur
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
                  <h4 className="wpn-help-support-card__title">Foon ondersteuning</h4>
                  <p className="wpn-help-support-card__description">
                    Ma-Vr, 8vm-5nm SAST
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
                  <h4 className="wpn-help-support-card__title">Lewendige klets</h4>
                  <p className="wpn-help-support-card__description">
                    Klets met ons in werklike tyd
                  </p>
                  <button className="wpn-help-support-card__button">
                    Begin klets
                  </button>
                </div>
              </div>

              <div>
                <Button
                  className="wpn-button wpn-button--accent"
                  asChild
                >
                  <Link to="/af/kontak">Kontak verkoopspan</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="wpn-help-resources">
            <h2 className="wpn-help-resources__title">Bykomende hulpbronne</h2>
            <div className="wpn-help-resources__grid">
              <div className="wpn-help-resource-card">
                <FileText className="wpn-help-resource-card__icon" />
                <h3 className="wpn-help-resource-card__title">
                  Regsgidse
                </h3>
                <p className="wpn-help-resource-card__description">
                  Laai omvattende gidse af vir verskillende kennisgewingtipes
                </p>
                <a href="#" className="wpn-help-resource-card__link">
                  Blaai gidse →
                </a>
              </div>

              <div className="wpn-help-resource-card">
                <BookOpen className="wpn-help-resource-card__icon" />
                <h3 className="wpn-help-resource-card__title">
                  Video tutoriale
                </h3>
                <p className="wpn-help-resource-card__description">
                  Kyk stap-vir-stap video gidse vir indiening van kennisgewings
                </p>
                <a href="#" className="wpn-help-resource-card__link">
                  Kyk video's →
                </a>
              </div>

              <div className="wpn-help-resource-card">
                <Calculator className="wpn-help-resource-card__icon" />
                <h3 className="wpn-help-resource-card__title">
                  Prysberekeningsprogram
                </h3>
                <p className="wpn-help-resource-card__description">
                  Skat die koste van publikasie van jou kennisgewing
                </p>
                <a href="#" className="wpn-help-resource-card__link">
                  Bereken koste →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
