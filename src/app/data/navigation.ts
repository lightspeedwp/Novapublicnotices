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
    label: { en: "Search notices", af: "Soek kennisgewings" },
    href: "/search",
  },
  {
    label: { en: "Public notices", af: "Openbare kennisgewings" },
    href: "/search",
    children: [
      { label: { en: "Estates", af: "Boedels" }, href: "/category/estates" },
      { label: { en: "Liquor licences", af: "Dranklisensiëring" }, href: "/category/liquor-licences" },
      { label: { en: "Tenders", af: "Tenders" }, href: "/category/tenders" },
      { label: { en: "Town planning", af: "Stadsbeplanningskennisgewings" }, href: "/category/town-planning" },
      { label: { en: "Business licences", af: "Besigheidslisensiëring" }, href: "/category/business-licences" },
      { label: { en: "Court orders", af: "Hofbevele" }, href: "/category/court-orders" },
      { label: { en: "Lost documents", af: "Verloorde dokumente" }, href: "/category/lost-documents" },
      { label: { en: "Environmental notices", af: "Omgewingskennisgewings" }, href: "/category/environmental-notices" },
      { label: { en: "Sale in execution", af: "Verkoping in eksekusie" }, href: "/category/sale-in-execution" },
      { label: { en: "General notices", af: "Algemene kennisgewings" }, href: "/category/general-notices" },
      { label: { en: "View all categories", af: "Bekyk alle kategorieë" }, href: "/search" },
    ],
  },
  {
    label: { en: "How it works", af: "Hoe dit werk" },
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
    label: { en: "All categories", af: "Alle kategorieë" },
    href: "/search",
  },
  {
    label: { en: "Help", af: "Hulp" },
    href: "/help",
  },
];

/**
 * User Account Navigation
 */
export const userNavigation: NavItem[] = [
  {
    label: { en: "Login", af: "Meld aan" },
    href: "/login",
  },
  {
    label: { en: "Register", af: "Registreer" },
    href: "/register",
  },
  {
    label: { en: "My account", af: "My rekening" },
    href: "/my-account",
  },
];

/**
 * Footer Navigation - Notice Types Column 1
 */
export const footerNoticeTypesCol1: NavItem[] = [
  { label: { en: "Estates", af: "Boedels" }, href: "/category/estates" },
  { label: { en: "Liquor licences", af: "Dranklisensiëring" }, href: "/category/liquor-licences" },
  { label: { en: "Tenders", af: "Tenders" }, href: "/category/tenders" },
  { label: { en: "Town planning", af: "Stadsbeplanningskennisgewings" }, href: "/category/town-planning" },
  { label: { en: "Business licences", af: "Besigheidslisensiëring" }, href: "/category/business-licences" },
  { label: { en: "Court orders", af: "Hofbevele" }, href: "/category/court-orders" },
];

/**
 * Footer Navigation - Notice Types Column 2
 */
export const footerNoticeTypesCol2: NavItem[] = [
  { label: { en: "Lost documents", af: "Verloorde dokumente" }, href: "/category/lost-documents" },
  { label: { en: "Environmental notices", af: "Omgewingskennisgewings" }, href: "/category/environmental-notices" },
  { label: { en: "Sale in execution", af: "Verkoping in eksekusie" }, href: "/category/sale-in-execution" },
  { label: { en: "Adoptions", af: "Aannemings" }, href: "/category/adoptions" },
  { label: { en: "General notices", af: "Algemene kennisgewings" }, href: "/category/general-notices" },
  { label: { en: "View all →", af: "Bekyk almal →" }, href: "/search" },
];

/**
 * Footer Navigation - Resources
 */
export const footerResources: NavItem[] = [
  { label: { en: "About us", af: "Oor ons" }, href: "/about" },
  { label: { en: "How it works", af: "Hoe dit werk" }, href: "/sales" },
  { label: { en: "Pricing", af: "Pryse" }, href: "/pricing" },
  { label: { en: "Advertise", af: "Adverteer" }, href: "/advertise" },
  { label: { en: "Help & FAQ", af: "Hulp & vrae" }, href: "/faq" },
  { label: { en: "Contact", af: "Kontak" }, href: "/contact" },
];

/**
 * Footer Navigation - Account
 */
export const footerAccount: NavItem[] = [
  { label: { en: "Login", af: "Meld aan" }, href: "/login" },
  { label: { en: "Register", af: "Registreer" }, href: "/register" },
  { label: { en: "My account", af: "My rekening" }, href: "/my-account" },
  { label: { en: "Submit notice", af: "Dien kennisgewing in" }, href: "/submit" },
  { label: { en: "Track submission", af: "Volg indiening" }, href: "/my-account/notices" },
];

/**
 * Footer Navigation - Legal
 */
export const footerLegal: NavItem[] = [
  { label: { en: "Terms of service", af: "Diensbepalings" }, href: "/terms" },
  { label: { en: "Privacy policy", af: "Privaatheidsbeleid" }, href: "/privacy" },
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
    label: { en: "Search all notices", af: "Soek alle kennisgewings" },
    href: "/search",
  },
  {
    label: { en: "Public notices", af: "Openbare kennisgewings" },
    href: "/search",
    children: [
      { label: { en: "Estates", af: "Boedels" }, href: "/category/estates" },
      { label: { en: "Liquor licences", af: "Dranklisensiëring" }, href: "/category/liquor-licences" },
      { label: { en: "Tenders", af: "Tenders" }, href: "/category/tenders" },
      { label: { en: "Town planning", af: "Stadsbeplanningskennisgewings" }, href: "/category/town-planning" },
      { label: { en: "Business licences", af: "Besigheidslisensiëring" }, href: "/category/business-licences" },
      { label: { en: "Court orders", af: "Hofbevele" }, href: "/category/court-orders" },
      { label: { en: "Lost documents", af: "Verloorde dokumente" }, href: "/category/lost-documents" },
      { label: { en: "Environmental notices", af: "Omgewingskennisgewings" }, href: "/category/environmental-notices" },
      { label: { en: "Sale in execution", af: "Verkoping in eksekusie" }, href: "/category/sale-in-execution" },
      { label: { en: "Adoptions", af: "Aannemings" }, href: "/category/adoptions" },
      { label: { en: "General notices", af: "Algemene kennisgewings" }, href: "/category/general-notices" },
    ],
  },
  {
    label: { en: "How it works", af: "Hoe dit werk" },
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
    label: { en: "My account", af: "My rekening" },
    href: "/my-account",
  },
  {
    label: { en: "Help & FAQ", af: "Hulp & vrae" },
    href: "/faq",
  },
];