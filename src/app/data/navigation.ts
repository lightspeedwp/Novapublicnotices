/**
 * Navigation Data
 * Centralized navigation structure for the Nova Public Notices Portal
 * Supports bilingual navigation (English/Afrikaans)
 */

export interface NavItem {
  label: {
    en: string;
    af: string;
  };
  href: string;
  external?: boolean;
  children?: NavItem[];
}

/**
 * Main Navigation (Header)
 */
export const mainNavigation: NavItem[] = [
  {
    label: { en: "Home", af: "Tuis" },
    href: "/",
  },
  {
    label: { en: "Search Notices", af: "Soek Kennisgewings" },
    href: "/search",
  },
  {
    label: { en: "Public Notices", af: "Openbare Kennisgewings" },
    href: "/search",
    children: [
      { label: { en: "Estates", af: "Boedels" }, href: "/category/estates" },
      { label: { en: "Liquor Licences", af: "Dranklisensiëring" }, href: "/category/liquor-licences" },
      { label: { en: "Tenders", af: "Tenders" }, href: "/category/tenders" },
      { label: { en: "Town Planning", af: "Stadsbeplanningskennisgewings" }, href: "/category/town-planning" },
      { label: { en: "Business Licences", af: "Besigheidslisensiëring" }, href: "/category/business-licences" },
      { label: { en: "Court Orders", af: "Hofbevele" }, href: "/category/court-orders" },
      { label: { en: "Lost Documents", af: "Verloorde Dokumente" }, href: "/category/lost-documents" },
      { label: { en: "Environmental Notices", af: "Omgewingskennisgewings" }, href: "/category/environmental-notices" },
      { label: { en: "Sale in Execution", af: "Verkoping in Eksekusie" }, href: "/category/sale-in-execution" },
      { label: { en: "General Notices", af: "Algemene Kennisgewings" }, href: "/category/general-notices" },
      { label: { en: "View All Categories", af: "Bekyk Alle Kategorieë" }, href: "/search" },
    ],
  },
  {
    label: { en: "How It Works", af: "Hoe Dit Werk" },
    href: "/sales",
  },
  {
    label: { en: "Contact", af: "Kontak" },
    href: "/contact",
  },
];

/**
 * Top Bar Navigation (Quick Links)
 */
export const topBarNavigation: NavItem[] = [
  {
    label: { en: "Home", af: "Tuis" },
    href: "/",
  },
  {
    label: { en: "All Categories", af: "Alle Kategorieë" },
    href: "/search",
  },
];

/**
 * User Account Navigation
 */
export const userNavigation: NavItem[] = [
  {
    label: { en: "Login", af: "Meld Aan" },
    href: "/login",
  },
  {
    label: { en: "Register", af: "Registreer" },
    href: "/register",
  },
  {
    label: { en: "My Account", af: "My Rekening" },
    href: "/my-account",
  },
];

/**
 * Footer Navigation - Notice Types Column 1
 */
export const footerNoticeTypesCol1: NavItem[] = [
  { label: { en: "Estates", af: "Boedels" }, href: "/category/estates" },
  { label: { en: "Liquor Licences", af: "Dranklisensiëring" }, href: "/category/liquor-licences" },
  { label: { en: "Tenders", af: "Tenders" }, href: "/category/tenders" },
  { label: { en: "Town Planning", af: "Stadsbeplanningskennisgewings" }, href: "/category/town-planning" },
  { label: { en: "Business Licences", af: "Besigheidslisensiëring" }, href: "/category/business-licences" },
  { label: { en: "Court Orders", af: "Hofbevele" }, href: "/category/court-orders" },
];

/**
 * Footer Navigation - Notice Types Column 2
 */
export const footerNoticeTypesCol2: NavItem[] = [
  { label: { en: "Lost Documents", af: "Verloorde Dokumente" }, href: "/category/lost-documents" },
  { label: { en: "Environmental Notices", af: "Omgewingskennisgewings" }, href: "/category/environmental-notices" },
  { label: { en: "Sale in Execution", af: "Verkoping in Eksekusie" }, href: "/category/sale-in-execution" },
  { label: { en: "Adoptions", af: "Aannemings" }, href: "/category/adoptions" },
  { label: { en: "General Notices", af: "Algemene Kennisgewings" }, href: "/category/general-notices" },
  { label: { en: "View All →", af: "Bekyk Almal →" }, href: "/search" },
];

/**
 * Footer Navigation - Resources
 */
export const footerResources: NavItem[] = [
  { label: { en: "About Us", af: "Oor Ons" }, href: "/about" },
  { label: { en: "How It Works", af: "Hoe Dit Werk" }, href: "/sales" },
  { label: { en: "Pricing", af: "Pryse" }, href: "/pricing" },
  { label: { en: "Advertise", af: "Adverteer" }, href: "/advertise" },
  { label: { en: "Help & FAQ", af: "Hulp & Vrae" }, href: "/faq" },
  { label: { en: "Contact", af: "Kontak" }, href: "/contact" },
];

/**
 * Footer Navigation - Account
 */
export const footerAccount: NavItem[] = [
  { label: { en: "Login", af: "Meld Aan" }, href: "/login" },
  { label: { en: "Register", af: "Registreer" }, href: "/register" },
  { label: { en: "My Account", af: "My Rekening" }, href: "/my-account" },
  { label: { en: "Submit Notice", af: "Dien Kennisgewing In" }, href: "/submit" },
  { label: { en: "Track Submission", af: "Volg Indiening" }, href: "/my-account/notices" },
];

/**
 * Footer Navigation - Legal
 */
export const footerLegal: NavItem[] = [
  { label: { en: "Terms of Service", af: "Diensbepalings" }, href: "/terms" },
  { label: { en: "Privacy Policy", af: "Privaatheidsbeleid" }, href: "/privacy" },
  { label: { en: "Sitemap", af: "Werfkaart" }, href: "/sitemap" },
];

/**
 * Social Media Links
 */
export const socialLinks: Array<{
  name: string;
  url: string;
  icon: string;
}> = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/NovaNewsZA/",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/novanewsza/",
    icon: "instagram",
  },
  {
    name: "Twitter/X",
    url: "https://x.com/NovusMediaZA",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/novusmediaza/",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@NovusMediaZA",
    icon: "youtube",
  },
];

/**
 * Mobile Navigation - Expanded structure for full-screen mobile menu
 */
export const mobileNavigation: NavItem[] = [
  {
    label: { en: "Home", af: "Tuis" },
    href: "/",
  },
  {
    label: { en: "Search All Notices", af: "Soek Alle Kennisgewings" },
    href: "/search",
  },
  {
    label: { en: "Public Notices", af: "Openbare Kennisgewings" },
    href: "/search",
    children: [
      { label: { en: "Estates", af: "Boedels" }, href: "/category/estates" },
      { label: { en: "Liquor Licences", af: "Dranklisensiëring" }, href: "/category/liquor-licences" },
      { label: { en: "Tenders", af: "Tenders" }, href: "/category/tenders" },
      { label: { en: "Town Planning", af: "Stadsbeplanningskennisgewings" }, href: "/category/town-planning" },
      { label: { en: "Business Licences", af: "Besigheidslisensiëring" }, href: "/category/business-licences" },
      { label: { en: "Court Orders", af: "Hofbevele" }, href: "/category/court-orders" },
      { label: { en: "Lost Documents", af: "Verloorde Dokumente" }, href: "/category/lost-documents" },
      { label: { en: "Environmental Notices", af: "Omgewingskennisgewings" }, href: "/category/environmental-notices" },
      { label: { en: "Sale in Execution", af: "Verkoping in Eksekusie" }, href: "/category/sale-in-execution" },
      { label: { en: "Adoptions", af: "Aannemings" }, href: "/category/adoptions" },
      { label: { en: "General Notices", af: "Algemene Kennisgewings" }, href: "/category/general-notices" },
    ],
  },
  {
    label: { en: "How It Works", af: "Hoe Dit Werk" },
    href: "/sales",
  },
  {
    label: { en: "Pricing", af: "Pryse" },
    href: "/pricing",
  },
  {
    label: { en: "Contact", af: "Kontak" },
    href: "/contact",
  },
  {
    label: { en: "My Account", af: "My Rekening" },
    href: "/my-account",
  },
  {
    label: { en: "Help & FAQ", af: "Hulp & Vrae" },
    href: "/faq",
  },
];
