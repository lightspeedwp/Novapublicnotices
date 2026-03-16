import { Link } from "react-router";
import { Search, Menu, Globe, Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Logo } from "./Logo";
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

interface LayoutProps {
  children: React.ReactNode;
  lang?: "en" | "af";
  showAds?: boolean;
}

export default function Layout({ children, lang = "en", showAds = true }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenuItems, setExpandedMenuItems] = useState<string[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  
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
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <div className="wp-bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            {topBarNavigation.map((item, idx) => (
              <Link
                key={idx}
                to={basePath + item.href}
                className="wp-link hover:underline"
              >
                {item.label[lang]}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 transition-colors duration-150"
              asChild
            >
              <Link to={lang === "en" ? "/af" : "/"}>
                <Globe className="size-4 mr-2" />
                {lang === "en" ? "Afrikaans" : "English"}
              </Link>
            </Button>
            {userNavigation.slice(0, 1).map((item, idx) => (
              <Link
                key={idx}
                to={basePath + item.href}
                className="wp-link hover:underline text-sm"
              >
                {item.label[lang]}
              </Link>
            ))}
            <Button
              size="sm"
              className="wp-btn-accent text-white"
              asChild
            >
              <Link to={basePath + userNavigation[1].href}>
                {userNavigation[1].label[lang]}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to={basePath + "/"} className="flex items-center gap-2">
              <Logo variant="light" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to={basePath + "/search"}
                className="wp-link text-foreground/70 hover:text-foreground"
              >
                {text.search}
              </Link>
              <Link
                to={basePath + "/sales"}
                className="wp-link text-foreground/70 hover:text-foreground"
              >
                {text.howItWorks}
              </Link>
              <Link
                to={basePath + "/contact"}
                className="wp-link text-foreground/70 hover:text-foreground"
              >
                {text.contact}
              </Link>
              <Button
                className="wp-btn-accent text-white"
                asChild
              >
                <Link to={basePath + "/submit"}>{text.submitNotice}</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <Link to={basePath + "/"} onClick={() => setMobileMenuOpen(false)}>
                <Logo variant="light" className="h-10 w-auto" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="size-6" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-1">
              {mobileNavigation.map((item, idx) => (
                <div key={idx}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleMobileMenuItem(item.label.en)}
                        className="w-full flex items-center justify-between py-3 px-4 text-foreground hover:bg-muted rounded-md transition-colors duration-150"
                      >
                        <span className="font-medium">{item.label[lang]}</span>
                        <ChevronDown
                          className={`size-5 transition-transform duration-200 ${
                            expandedMenuItems.includes(item.label.en) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedMenuItems.includes(item.label.en) && (
                        <div className="pl-4 py-2 space-y-1">
                          {item.children.map((child, childIdx) => (
                            <Link
                              key={childIdx}
                              to={basePath + child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 px-4 text-foreground/70 hover:text-foreground hover:bg-muted rounded-md transition-colors duration-150"
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
                      className="block py-3 px-4 text-foreground hover:bg-muted rounded-md transition-colors duration-150 font-medium"
                    >
                      {item.label[lang]}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Button
                  className="w-full wp-btn-accent text-white"
                  asChild
                >
                  <Link to={basePath + "/submit"} onClick={() => setMobileMenuOpen(false)}>
                    {text.submitNotice}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="wp-bg-primary text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          {/* Newsletter Section */}
          <div className="mb-12 pb-8 border-b border-white/20">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="size-8 wp-text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                {text.newsletterTitle}
              </h3>
              <p className="text-white/70 mb-6">
                {text.newsletterDescription}
              </p>
              <form 
                className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
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
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button type="submit" className="wp-btn-accent">
                  {text.subscribe}
                </Button>
              </form>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Logo variant="dark" className="h-8 w-auto mb-4" />
              <p className="text-white/70 text-sm mb-4">
                {text.footerTagline}
              </p>
              {/* Social Media Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wp-hover-scale text-white/70 hover:text-white transition-colors duration-150"
                    aria-label={social.name}
                  >
                    {social.icon === "facebook" && <Facebook className="size-5" />}
                    {social.icon === "instagram" && <Instagram className="size-5" />}
                    {social.icon === "twitter" && <Twitter className="size-5" />}
                    {social.icon === "linkedin" && <Linkedin className="size-5" />}
                    {social.icon === "youtube" && <Youtube className="size-5" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Notice Types Column 1 */}
            <div>
              <h3 className="font-semibold mb-4">{text.noticeTypes}</h3>
              <ul className="space-y-2 text-sm">
                {footerNoticeTypesCol1.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={basePath + item.href}
                      className="wp-link text-white/70 hover:text-white"
                    >
                      {item.label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notice Types Column 2 */}
            <div>
              <h3 className="font-semibold mb-4">{text.moreCategories}</h3>
              <ul className="space-y-2 text-sm">
                {footerNoticeTypesCol2.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={basePath + item.href}
                      className="wp-link text-white/70 hover:text-white"
                    >
                      {item.label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account & Resources Column */}
            <div>
              <h3 className="font-semibold mb-4">{text.account}</h3>
              <ul className="space-y-2 text-sm">
                {footerAccount.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={basePath + item.href}
                      className="wp-link text-white/70 hover:text-white"
                    >
                      {item.label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Sitemap Column */}
            <div>
              <h3 className="font-semibold mb-4">{text.legal}</h3>
              <ul className="space-y-2 text-sm">
                {footerLegal.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={basePath + item.href}
                      className="wp-link text-white/70 hover:text-white"
                    >
                      {item.label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/70 text-center sm:text-left">
              © {currentYear} Nova News. {text.allRightsReserved}.
            </p>
            <div className="flex gap-4 text-sm">
              <Link to={basePath + "/terms"} className="wp-link text-white/70 hover:text-white">
                {text.termsOfService}
              </Link>
              <span className="text-white/30">·</span>
              <Link to={basePath + "/privacy"} className="wp-link text-white/70 hover:text-white">
                {text.privacyPolicy}
              </Link>
              <span className="text-white/30">·</span>
              <Link to={basePath + "/sitemap"} className="wp-link text-white/70 hover:text-white">
                {lang === "en" ? "Sitemap" : "Werfkaart"}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}