import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Layout from "../components/Layout";
import {
  House,
  MagnifyingGlass,
  Phone,
  Envelope,
  WarningCircle,
  ArrowLeft,
  Headset,
  BookOpen,
  Question,
  Newspaper,
} from "@phosphor-icons/react";
import "../../styles/error-pages.css";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const popularCategories = [
    { slug: "estates", label: "Estates" },
    { slug: "tenders", label: "Tenders" },
    { slug: "liquor-licences", label: "Liquor licences" },
    { slug: "court-orders", label: "Court orders" },
    { slug: "town-planning", label: "Town planning" },
    { slug: "business-licences", label: "Business licences" },
  ];

  const helpfulLinks = [
    {
      icon: House,
      title: "Homepage",
      description: "Return to the main page",
      href: "/",
    },
    {
      icon: MagnifyingGlass,
      title: "Search notices",
      description: "Find public notices",
      href: "/search",
    },
    {
      icon: BookOpen,
      title: "Help center",
      description: "Browse guides and FAQs",
      href: "/help",
    },
    {
      icon: Question,
      title: "FAQ",
      description: "Common questions",
      href: "/faq",
    },
    {
      icon: Newspaper,
      title: "Submit a notice",
      description: "Publish your notice",
      href: "/submit",
    },
    {
      icon: Headset,
      title: "Contact us",
      description: "Get in touch",
      href: "/contact",
    },
  ];

  return (
    <Layout lang="en" showAds={false}>
      <div className="wpn-error">
        <div className="wpn-error__container">
          {/* Error Icon */}
          <div className="wpn-error__icon-wrapper">
            <WarningCircle weight="duotone" className="wpn-error__icon" />
          </div>

          {/* Error Code */}
          <h1 className="wpn-error__code">404</h1>

          {/* Title */}
          <h2 className="wpn-error__title">
            Page not found
          </h2>

          {/* Description */}
          <p className="wpn-error__description">
            The page you're looking for doesn't exist or has been moved. Try searching for what you need or explore the links below.
          </p>

          {/* Search Box */}
          <div className="wpn-error-search">
            <label htmlFor="error-search" className="wpn-error-search__label">
              Search for notices
            </label>
            <form onSubmit={handleSearch} className="wpn-error-search__field">
              <MagnifyingGlass className="wpn-error-search__icon" />
              <input
                type="search"
                id="error-search"
                className="wpn-error-search__input"
                placeholder="Search by keyword, category, or reference..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Action Buttons */}
          <div className="wpn-error-actions">
            <Link to="/" className="wpn-error-actions__button wpn-error-actions__button--primary">
              <House weight="fill" className="wpn-error-actions__button-icon" />
              Go to homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="wpn-error-actions__button wpn-error-actions__button--secondary"
            >
              <ArrowLeft weight="bold" className="wpn-error-actions__button-icon" />
              Go back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="wpn-error-links">
            <h3 className="wpn-error-links__title">
              Helpful links
            </h3>
            <div className="wpn-error-links__grid">
              {helpfulLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={index} to={link.href} className="wpn-error-links__card">
                    <Icon weight="duotone" className="wpn-error-links__card-icon" />
                    <div className="wpn-error-links__card-content">
                      <h4 className="wpn-error-links__card-title">{link.title}</h4>
                      <p className="wpn-error-links__card-description">{link.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Popular Categories */}
          <div className="wpn-error-categories">
            <h3 className="wpn-error-categories__title">
              Popular notice categories
            </h3>
            <ul className="wpn-error-categories__list">
              {popularCategories.map((category) => (
                <li key={category.slug} className="wpn-error-categories__item">
                  <Link
                    to={`/category/${category.slug}`}
                    className="wpn-error-categories__link"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="wpn-error-support">
            <h3 className="wpn-error-support__title">
              Still can't find what you're looking for?
            </h3>
            <p className="wpn-error-support__text">
              Our support team is ready to help you find the information you need.
            </p>
            <Link to="/contact" className="wpn-error-support__link">
              <Envelope weight="fill" className="wpn-error-support__link-icon" />
              Contact support
            </Link>
            {" or "}
            <a href="tel:+27123456789" className="wpn-error-support__link">
              <Phone weight="fill" className="wpn-error-support__link-icon" />
              +27 12 345 6789
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
