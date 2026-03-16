import { Link } from "react-router";
import { Search, Menu, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  lang?: "en" | "af";
  showAds?: boolean;
}

export default function Layout({ children, lang = "en", showAds = true }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const basePath = lang === "af" ? "/af" : "";
  
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
              <div className="font-lexend text-2xl font-bold text-[#09082f]">
                NOVA<span className="text-[#d70025]">NEWS</span>
              </div>
              <div className="h-8 w-px bg-gray-300 ml-2" />
              <div className="font-lexend text-lg font-semibold text-[#09082f]">
                {lang === "en" ? "Public Notices" : "Regskennisgewings"}
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-lexend text-xl font-bold mb-4">
                NOVA<span className="text-[#d70025]">NEWS</span>
              </div>
              <p className="text-gray-300 text-sm">
                {lang === "en"
                  ? "Your trusted source for legal public notices in South Africa."
                  : "U betroubare bron vir wetlike regskennisgewings in Suid-Afrika."}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{text.allCategories}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to={basePath + "/category/tenders"} className="hover:text-white">
                    {lang === "en" ? "Tenders" : "Tenders"}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/category/estates"} className="hover:text-white">
                    {lang === "en" ? "Estates" : "Boedels"}
                  </Link>
                </li>
                <li>
                  <Link
                    to={basePath + "/category/liquor-licences"}
                    className="hover:text-white"
                  >
                    {lang === "en" ? "Liquor Licences" : "Dranklisensies"}
                  </Link>
                </li>
                <li>
                  <Link
                    to={basePath + "/category/town-planning"}
                    className="hover:text-white"
                  >
                    {lang === "en" ? "Town Planning" : "Stadsbeplanning"}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {lang === "en" ? "Resources" : "Hulpbronne"}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to={basePath + "/sales"} className="hover:text-white">
                    {text.howItWorks}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/pricing"} className="hover:text-white">
                    {lang === "en" ? "Pricing" : "Pryse"}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/contact"} className="hover:text-white">
                    {text.contact}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/faq"} className="hover:text-white">
                    {text.help}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {lang === "en" ? "Legal" : "Regsaspekte"}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to={basePath + "/about"} className="hover:text-white">
                    {text.about}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/terms"} className="hover:text-white">
                    {text.termsOfService}
                  </Link>
                </li>
                <li>
                  <Link to={basePath + "/privacy"} className="hover:text-white">
                    {text.privacyPolicy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>{text.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}