import { Link } from "react-router";
import { 
  MagnifyingGlass, 
  List, 
  Globe, 
  FacebookLogo, 
  InstagramLogo, 
  TwitterLogo, 
  LinkedinLogo, 
  YoutubeLogo, 
  Envelope, 
  X, 
  CaretDown,
  User,
  SignOut
} from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Logo } from "./Logo";
import { useAuth } from "../contexts/AuthContext";
import {
  mobileNavigation,
  topBarNavigation,
  userNavigation,
  footerNoticeTypesCol1,
  footerNoticeTypesCol2,
  footerResources,
  footerAccount,
  footerLegal,
  socialLinks,
} from "../data/navigation";
import "../../styles/components.css";

interface LayoutProps {
  children: React.ReactNode;
  lang?: "en" | "af";
  showAds?: boolean;
}

export default function Layout({ children, lang = "en", showAds = true }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenuItems, setExpandedMenuItems] = useState<string[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { isLoggedIn, toggleLoginState } = useAuth();
  
  const basePath = lang === "af" ? "/af" : "";
  const currentYear = new Date().getFullYear();
  
  const t = {
    en: {
      home: "Home",
      search: "Search Notices",
      categories: "Categories",
      submitNotice: "Submit Notice",
      howItWorks: "How It Works",
      contact: "Contact",
      login: "Login",
      register: "Register",
      myAccount: "My Account",
      searchPlaceholder: "Search public notices...",
      copyright: "© 2025 Nova News. All rights reserved.",
      about: "About Us",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      help: "Help & FAQ",
      allCategories: "All Categories",
      footerTagline: "Your trusted source for legal public notices in South Africa.",
      newsletterTitle: "Subscribe to Our Newsletter",
      newsletterDescription: "Get the latest public notices and updates delivered to your inbox.",
      subscribe: "Subscribe",
      enterEmail: "Enter your email",
      thankYouSubscribe: "Thank you for subscribing!",
      noticeTypes: "Notice Types",
      moreCategories: "More Categories",
      resources: "Resources",
      account: "Account",
      legal: "Legal",
      allRightsReserved: "All rights reserved",
    },
    af: {
      home: "Tuis",
      search: "Soek Kennisgewings",
      categories: "Kategorieë",
      submitNotice: "Dien Kennisgewing In",
      howItWorks: "Hoe Dit Werk",
      contact: "Kontak",
      login: "Meld Aan",
      register: "Registreer",
      myAccount: "My Rekening",
      searchPlaceholder: "Soek regskennisgewings...",
      copyright: "© 2025 Nova News. Alle regte voorbehou.",
      about: "Oor Ons",
      termsOfService: "Diensbepalings",
      privacyPolicy: "Privaatheidsbeleid",
      help: "Hulp & Vrae",
      allCategories: "Alle Kategorieë",
      footerTagline: "U betroubare bron vir wetlike regskennisgewings in Suid-Afrika.",
      newsletterTitle: "Teken In Op Ons Nuusbrief",
      newsletterDescription: "Ontvang die nuutste openbare kennisgewings en opdaterings in jou inbox.",
      subscribe: "Teken In",
      enterEmail: "Voer jou e-pos in",
      thankYouSubscribe: "Dankie vir jou intekening!",
      noticeTypes: "Kennisgewingtipes",
      moreCategories: "Meer Kategorieë",
      resources: "Hulpbronne",
      account: "Rekening",
      legal: "Regsaspekte",
      allRightsReserved: "Alle regte voorbehou",
    },
  };
  
  const text = t[lang];

  const toggleMobileMenuItem = (label: string) => {
    setExpandedMenuItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };
  
  return (
    <div className="wpn-layout">
      {/* Top Bar */}
      <div className="wpn-layout__topbar">
        <div className="wpn-layout__topbar-container">
          <div className="wpn-layout__topbar-links">
            {topBarNavigation.map((item, idx) => (
              <Link
                key={idx}
                to={basePath + item.href}
                className="wpn-layout__topbar-link"
              >
                {item.label[lang]}
              </Link>
            ))}
          </div>
          <div className="wpn-layout__topbar-actions">
            {/* Login State Toggle - DEV ONLY */}
            <button
              onClick={toggleLoginState}
              className="wpn-layout__topbar-auth-toggle"
              title={isLoggedIn ? "Switch to logged out state" : "Switch to logged in state"}
            >
              {isLoggedIn ? (
                <>
                  <User className="wpn-layout__topbar-icon" weight="fill" />
                  <span className="wpn-layout__topbar-auth-label">Logged In</span>
                </>
              ) : (
                <>
                  <User className="wpn-layout__topbar-icon" />
                  <span className="wpn-layout__topbar-auth-label">Logged Out</span>
                </>
              )}
            </button>

            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              className="wpn-layout__topbar-lang-btn"
              asChild
            >
              <Link to={lang === "en" ? "/af" : "/"}>
                <Globe className="wpn-layout__topbar-icon" />
                {lang === "en" ? "Afrikaans" : "English"}
              </Link>
            </Button>

            {/* Conditional Navigation Based on Login State */}
            {isLoggedIn ? (
              <>
                {/* Logged In - Show My Account Link */}
                <Link
                  to={basePath + "/my-account"}
                  className="wpn-layout__topbar-link wpn-layout__topbar-link--account"
                >
                  <User className="wpn-layout__topbar-icon" weight="bold" />
                  {text.myAccount}
                </Link>
              </>
            ) : (
              <>
                {/* Logged Out - Show Login Link */}
                <Link
                  to={basePath + userNavigation[0].href}
                  className="wpn-layout__topbar-link"
                >
                  {userNavigation[0].label[lang]}
                </Link>
                {/* Logged Out - Show Register Button */}
                <Button
                  size="sm"
                  className="wpn-button wpn-button--sm wpn-button--accent"
                  asChild
                >
                  <Link to={basePath + userNavigation[1].href}>
                    {userNavigation[1].label[lang]}
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="wpn-layout__header">
        <div className="wpn-layout__container">
          <div className="wpn-layout__header-container">
            <Link to={basePath + "/"} className="wpn-layout__logo-link">
              <Logo variant="light" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="wpn-layout__nav">
              <Link
                to={basePath + "/search"}
                className="wpn-layout__nav-link"
              >
                {text.search}
              </Link>
              <Link
                to={basePath + "/sales"}
                className="wpn-layout__nav-link"
              >
                {text.howItWorks}
              </Link>
              <Link
                to={basePath + "/contact"}
                className="wpn-layout__nav-link"
              >
                {text.contact}
              </Link>
              <Button
                className="wpn-button wpn-button--md wpn-button--accent"
                asChild
              >
                <Link to={basePath + "/submit"}>{text.submitNotice}</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="wpn-layout__mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <List />}
            </Button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="wpn-layout__mobile-menu">
          <div className="wpn-layout__container">
            <div className="wpn-layout__mobile-menu-container">
              {/* Mobile Menu Header */}
              <div className="wpn-layout__mobile-menu-header">
                <Link to={basePath + "/"} onClick={() => setMobileMenuOpen(false)}>
                  <Logo variant="light" className="h-10 w-auto" />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="wpn-layout__mobile-nav">
                {/* Top Bar Navigation Items - Mobile Only */}
                <div className="wpn-layout__mobile-nav-section">
                  {topBarNavigation.map((item, idx) => (
                    <Link
                      key={idx}
                      to={basePath + item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="wpn-layout__mobile-nav-link"
                    >
                      {item.label[lang]}
                    </Link>
                  ))}
                </div>

                {/* Main Navigation Items */}
                {mobileNavigation.map((item, idx) => (
                  <div key={idx} className="wpn-layout__mobile-nav-expandable">
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleMobileMenuItem(item.label.en)}
                          className="wpn-layout__mobile-nav-toggle"
                        >
                          <span>{item.label[lang]}</span>
                          <CaretDown
                            className={`wpn-layout__mobile-nav-toggle-icon ${
                              expandedMenuItems.includes(item.label.en) ? "wpn-layout__mobile-nav-toggle-icon--rotated" : ""
                            }`}
                          />
                        </button>
                        {expandedMenuItems.includes(item.label.en) && (
                          <div className="wpn-layout__mobile-nav-submenu">
                            {item.children.map((child, childIdx) => (
                              <Link
                                key={childIdx}
                                to={basePath + child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="wpn-layout__mobile-nav-link"
                              >
                                {child.label[lang]}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={basePath + item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="wpn-layout__mobile-nav-link wpn-layout__mobile-nav-link--highlighted"
                      >
                        {item.label[lang]}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="wpn-layout__mobile-cta">
                  <Button
                    className="wpn-button wpn-button--md wpn-button--accent wpn-button--full"
                    asChild
                  >
                    <Link to={basePath + "/submit"} onClick={() => setMobileMenuOpen(false)}>
                      {text.submitNotice}
                    </Link>
                  </Button>
                </div>

                {/* User Account Section - Mobile Only */}
                <div className="wpn-layout__mobile-account-section">
                  {/* Login Link */}
                  <Link
                    to={basePath + userNavigation[0].href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="wpn-layout__mobile-nav-link"
                  >
                    {userNavigation[0].label[lang]}
                  </Link>
                  
                  {/* Register Button */}
                  <Button
                    className="wpn-button wpn-button--md wpn-button--accent wpn-button--full"
                    asChild
                  >
                    <Link to={basePath + userNavigation[1].href} onClick={() => setMobileMenuOpen(false)}>
                      {userNavigation[1].label[lang]}
                    </Link>
                  </Button>

                  {/* Language Switcher */}
                  <Button
                    variant="outline"
                    className="wpn-button--full"
                    asChild
                  >
                    <Link to={lang === "en" ? "/af" : "/"} onClick={() => setMobileMenuOpen(false)}>
                      <Globe className="wpn-layout__topbar-icon" />
                      {lang === "en" ? "Afrikaans" : "English"}
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="wpn-layout__main">{children}</main>

      {/* Footer */}
      <footer className="wpn-layout__footer">
        <div className="wpn-layout__container">
          <div className="wpn-layout__footer-container">
            {/* Newsletter Section */}
            <div className="wpn-layout__footer-newsletter">
              <div className="wpn-layout__footer-newsletter-content">
                <Envelope className="wpn-layout__footer-newsletter-icon" />
                <h3 className="wpn-layout__footer-newsletter-title">
                  {text.newsletterTitle}
                </h3>
                <p className="wpn-layout__footer-newsletter-description">
                  {text.newsletterDescription}
                </p>
                <form 
                  className="wpn-layout__footer-newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(text.thankYouSubscribe);
                    setNewsletterEmail("");
                  }}
                >
                  <Input
                    type="email"
                    placeholder={text.enterEmail}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="wpn-layout__footer-newsletter-input"
                  />
                  <Button type="submit" className="wpn-button wpn-button--md wpn-button--accent">
                    {text.subscribe}
                  </Button>
                </form>
              </div>
            </div>

            {/* Main Footer Grid */}
            <div className="wpn-layout__footer-grid">
              {/* Brand Column */}
              <div className="wpn-layout__footer-column wpn-layout__footer-column--brand">
                <Logo variant="dark" className="h-8 w-auto mb-4" />
                <p className="wpn-layout__footer-brand-tagline">
                  {text.footerTagline}
                </p>
                {/* Social Media Links */}
                <div className="wpn-layout__footer-social-links">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wpn-layout__footer-social-link"
                      aria-label={social.name}
                    >
                      {social.icon === "facebook" && <FacebookLogo className="wpn-layout__footer-social-icon" />}
                      {social.icon === "instagram" && <InstagramLogo className="wpn-layout__footer-social-icon" />}
                      {social.icon === "twitter" && <TwitterLogo className="wpn-layout__footer-social-icon" />}
                      {social.icon === "linkedin" && <LinkedinLogo className="wpn-layout__footer-social-icon" />}
                      {social.icon === "youtube" && <YoutubeLogo className="wpn-layout__footer-social-icon" />}
                    </a>
                  ))}
                </div>
              </div>

              {/* Notice Types Column 1 */}
              <div className="wpn-layout__footer-column">
                <h3 className="wpn-layout__footer-column-title">{text.noticeTypes}</h3>
                <ul className="wpn-layout__footer-links">
                  {footerNoticeTypesCol1.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={basePath + item.href}
                        className="wpn-layout__footer-link"
                      >
                        {item.label[lang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notice Types Column 2 */}
              <div className="wpn-layout__footer-column">
                <h3 className="wpn-layout__footer-column-title">{text.moreCategories}</h3>
                <ul className="wpn-layout__footer-links">
                  {footerNoticeTypesCol2.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={basePath + item.href}
                        className="wpn-layout__footer-link"
                      >
                        {item.label[lang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Account & Resources Column */}
              <div className="wpn-layout__footer-column">
                <h3 className="wpn-layout__footer-column-title">{text.account}</h3>
                <ul className="wpn-layout__footer-links">
                  {footerAccount.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={basePath + item.href}
                        className="wpn-layout__footer-link"
                      >
                        {item.label[lang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Sitemap Column */}
              <div className="wpn-layout__footer-column">
                <h3 className="wpn-layout__footer-column-title">{text.legal}</h3>
                <ul className="wpn-layout__footer-links">
                  {footerLegal.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={basePath + item.href}
                        className="wpn-layout__footer-link"
                      >
                        {item.label[lang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="wpn-layout__footer-bottom">
              <p className="wpn-layout__footer-copyright">
                © {currentYear} Nova News. {text.allRightsReserved}.
              </p>
              <div className="wpn-layout__footer-legal-links">
                <Link to={basePath + "/terms"} className="wpn-layout__footer-link">
                  {text.termsOfService}
                </Link>
                <span className="wpn-layout__footer-separator">·</span>
                <Link to={basePath + "/privacy"} className="wpn-layout__footer-link">
                  {text.privacyPolicy}
                </Link>
                <span className="wpn-layout__footer-separator">·</span>
                <Link to={basePath + "/sitemap"} className="wpn-layout__footer-link">
                  {lang === "en" ? "Sitemap" : "Werfkaart"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}