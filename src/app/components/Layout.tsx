import { Link } from "react-router";
import { Search, Menu, Globe, Facebook, Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Logo } from "./Logo";
import { categories } from "../data/categories";

interface LayoutProps {
  children: React.ReactNode;
  lang?: "en" | "af";
  showAds?: boolean;
}

export default function Layout({ children, lang = "en", showAds = true }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    },
  };
  
  const text = t[lang];
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <div className="bg-[#09082f] text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Link to={basePath + "/"} className="hover:underline">
              {text.home}
            </Link>
            <Link to={basePath + "/search"} className="hover:underline">
              {text.allCategories}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
              asChild
            >
              <Link to={lang === "en" ? "/af" : "/"}>
                <Globe className="size-4 mr-2" />
                {lang === "en" ? "Afrikaans" : "English"}
              </Link>
            </Button>
            <Link to={basePath + "/login"} className="hover:underline">
              {text.login}
            </Link>
            <Button
              size="sm"
              className="bg-[#d70025] hover:bg-[#b5001f] text-white"
              asChild
            >
              <Link to={basePath + "/register"}>{text.register}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to={basePath + "/"} className="flex items-center gap-2">
              <Logo variant="light" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to={basePath + "/search"}
                className="text-gray-700 hover:text-[#09082f] font-medium"
              >
                {text.search}
              </Link>
              <Link
                to={basePath + "/sales"}
                className="text-gray-700 hover:text-[#09082f] font-medium"
              >
                {text.howItWorks}
              </Link>
              <Link
                to={basePath + "/contact"}
                className="text-gray-700 hover:text-[#09082f] font-medium"
              >
                {text.contact}
              </Link>
              <Button
                className="bg-[#d70025] hover:bg-[#b5001f] text-white"
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
              <Menu className="size-6" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-3">
              <Link
                to={basePath + "/search"}
                className="text-gray-700 hover:text-[#09082f] py-2"
              >
                {text.search}
              </Link>
              <Link
                to={basePath + "/sales"}
                className="text-gray-700 hover:text-[#09082f] py-2"
              >
                {text.howItWorks}
              </Link>
              <Link
                to={basePath + "/contact"}
                className="text-gray-700 hover:text-[#09082f] py-2"
              >
                {text.contact}
              </Link>
              <Button
                className="bg-[#d70025] hover:bg-[#b5001f] text-white w-full"
                asChild
              >
                <Link to={basePath + "/submit"}>{text.submitNotice}</Link>
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#09082f] text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          {/* Newsletter Section */}
          <div className="mb-12 pb-8 border-b border-gray-700">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="size-8 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-raleway text-2xl font-bold mb-2">
                {lang === "en" ? "Subscribe to Our Newsletter" : "Teken In Op Ons Nuusbrief"}
              </h3>
              <p className="text-gray-300 mb-6">
                {lang === "en" 
                  ? "Get the latest public notices and updates delivered to your inbox." 
                  : "Ontvang die nuutste openbare kennisgewings en opdaterings in jou inbox."}
              </p>
              <form 
                className="flex gap-2 max-w-md mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(lang === "en" ? "Thank you for subscribing!" : "Dankie vir jou intekening!");
                  setNewsletterEmail("");
                }}
              >
                <Input
                  type="email"
                  placeholder={lang === "en" ? "Enter your email" : "Voer jou e-pos in"}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button type="submit" className="bg-[#d70025] hover:bg-[#b5001f]">
                  {lang === "en" ? "Subscribe" : "Teken In"}
                </Button>
              </form>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Logo variant="dark" className="h-12 w-auto mb-4" />
              <p className="text-gray-300 text-sm mb-4">
                {lang === "en"
                  ? "Your trusted source for legal public notices in South Africa."
                  : "U betroubare bron vir wetlike regskennisgewings in Suid-Afrika."}
              </p>
              {/* Social Media Links */}
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/NovaNewsZA/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5" />
                </a>
                <a 
                  href="https://www.instagram.com/novanewsza/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5" />
                </a>
                <a 
                  href="https://x.com/NovusMediaZA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Twitter/X"
                >
                  <Twitter className="size-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/novusmediaza/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@NovusMediaZA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="size-5" />
                </a>
              </div>
            </div>

            {/* Categories Column 1 */}
            <div>
              <h3 className="font-semibold mb-4">{lang === "en" ? "Notice Types" : "Kennisgewingtipes"}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {categories.slice(0, 6).map((cat) => (
                  <li key={cat.slug}>
                    <Link to={basePath + "/category/" + cat.slug} className="hover:text-white transition-colors">
                      {cat.name[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Column 2 */}
            <div>
              <h3 className="font-semibold mb-4">{lang === "en" ? "More Categories" : "Meer Kategorieë"}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {categories.slice(6).map((cat) => (
                  <li key={cat.slug}>
                    <Link to={basePath + "/category/" + cat.slug} className="hover:text-white transition-colors">
                      {cat.name[lang]}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={basePath + "/search"} className="hover:text-white transition-colors font-medium">
                    {lang === "en" ? "View All →" : "Bekyk Almal →"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold mb-4">{lang === "en" ? "Resources" : "Hulpbronne"}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to={basePath + "/about"} className="hover:text-white transition-colors">
                    {text.about}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/sales"} className="hover:text-white transition-colors">
                    {text.howItWorks}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/pricing"} className="hover:text-white transition-colors">
                    {lang === "en" ? "Pricing" : "Pryse"}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/advertise"} className="hover:text-white transition-colors">
                    {lang === "en" ? "Advertise" : "Adverteer"}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/faq"} className="hover:text-white transition-colors">
                    {text.help}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/contact"} className="hover:text-white transition-colors">
                    {text.contact}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/sitemap"} className="hover:text-white transition-colors">
                    {lang === "en" ? "Sitemap" : "Werfkaart"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-semibold mb-4">{lang === "en" ? "Legal" : "Regsaspekte"}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to={basePath + "/terms"} className="hover:text-white transition-colors">
                    {text.termsOfService}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/privacy"} className="hover:text-white transition-colors">
                    {text.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/login"} className="hover:text-white transition-colors">
                    {text.login}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/register"} className="hover:text-white transition-colors">
                    {text.register}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/my-account"} className="hover:text-white transition-colors">
                    {text.myAccount}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-300 text-left">
              © {currentYear} Nova News. {lang === "en" ? "All rights reserved" : "Alle regte voorbehou"}.{" "}
              <Link to={basePath + "/terms"} className="hover:text-white underline">
                {text.termsOfService}
              </Link>
              {" · "}
              <Link to={basePath + "/privacy"} className="hover:text-white underline">
                {text.privacyPolicy}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}