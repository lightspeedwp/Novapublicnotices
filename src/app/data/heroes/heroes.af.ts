/**
 * Hero Section Data — Afrikaans
 * Hero content for all pages in Afrikaans
 * All heroes include icons from Phosphor Icons
 */

import type { HeroDataMap } from './types';

export const heroesAF: HeroDataMap = {
  // Homepage
  home: {
    title: 'Suid-Afrika se vertroude openbare kennisgewings portaal',
    subtitle: 'Regskennisgewings, tenders en amptelike aankondigings',
    description: 'Soek deur duisende openbare kennisgewings van regering, howe en besighede. Vinnig, voldoende en omvattend.',
    icon: 'newspaper',
    size: 'lg',
    alignment: 'center',
    buttons: [
      {
        text: 'Soek kennisgewings',
        href: '/af/soek',
        variant: 'primary',
        icon: 'magnifying-glass',
      },
      {
        text: 'Dien \'n kennisgewing in',
        href: '/af/dien-kennisgewing-in',
        variant: 'secondary',
        icon: 'upload',
      },
    ],
    showSearch: true,
  },

  // Search Results
  search: {
    title: 'Soek openbare kennisgewings',
    description: 'Gebruik filters om spesifieke kennisgewings te vind volgens kategorie, ligging, datum of sleutelwoord.',
    icon: 'magnifying-glass',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Soek' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Single Notice
  notice: {
    title: 'Openbare kennisgewing',
    icon: 'file-text',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Soek', href: '/af/soek' },
      { label: 'Kennisgewing' },
    ],
    size: 'sm',
    alignment: 'left',
  },

  // Category Archive
  category: {
    title: 'Blaai kennisgewings volgens kategorie',
    icon: 'folders',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Kategorieë' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // About
  about: {
    title: 'Oor Nova News',
    description: 'Jou vertroude vennoot vir publikasie van openbare kennisgewings in Suid-Afrika.',
    icon: 'info',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Oor ons' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Contact
  contact: {
    title: 'Kontak ons',
    description: 'Kom in aanraking met ons span vir ondersteuning, verkope navrae, of algemene vrae.',
    icon: 'envelope',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Kontak' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Bel ons',
        href: 'tel:+27123456789',
        variant: 'outline',
        icon: 'phone',
      },
    ],
  },

  // Sales
  sales: {
    title: 'Druk en digitale kennisgewingsdienste',
    description: 'Professionele openbare kennisgewing plasing met kundige ondersteuning vir druk, digitale, of gekombineerde publikasie.',
    icon: 'handshake',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Verkope' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Kontak verkope',
        href: '/af/kontak',
        variant: 'primary',
        icon: 'phone',
      },
    ],
  },

  // Pricing
  pricing: {
    title: 'Pryse',
    description: 'Deursigtige pryse vir publikasie van openbare kennisgewings. Kies tussen selfbediening digitaal of verkoopgeassisteerde opsies.',
    icon: 'currency-circle-dollar',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Pryse' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Advertise
  advertise: {
    title: 'Adverteer by ons',
    description: 'Bereik duisende regsprofessionals, besighede en regeringsamptenare deur geteikende advertensies.',
    icon: 'megaphone',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Adverteer' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Kontak ons',
        href: '/af/kontak',
        variant: 'primary',
        icon: 'phone',
      },
    ],
  },

  // FAQ
  faq: {
    title: 'Gereelde vrae',
    description: 'Vind antwoorde op algemene vrae oor openbare kennisgewings, indiening en ons dienste.',
    icon: 'question',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Gereelde vrae' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Help
  help: {
    title: 'Hulpsentrum',
    description: 'Blaai deur gidse, tutoriale en dokumentasie om die meeste te maak van ons openbare kennisgewings portaal.',
    icon: 'lifebuoy',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Hulp' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Privacy
  privacy: {
    title: 'Privaatheidsbeleid',
    description: 'Hoe ons jou persoonlike inligting versamel, gebruik en beskerm.',
    icon: 'shield-check',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Privaatheidsbeleid' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Terms
  terms: {
    title: 'Terme en voorwaardes',
    description: 'Terme wat die gebruik van ons openbare kennisgewings portaal en dienste beheer.',
    icon: 'file-doc',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Terme' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Sitemap
  sitemap: {
    title: 'Werfkaart',
    description: 'Navigeer ons hele openbare kennisgewings portaal struktuur.',
    icon: 'tree-structure',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Werfkaart' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Compare Notices
  compareNotices: {
    title: 'Vergelyk kennisgewings',
    description: 'Vergelyk verskeie openbare kennisgewings langs mekaar om verskille en ooreenkomste te identifiseer.',
    icon: 'arrows-left-right',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Vergelyk kennisgewings' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Login
  login: {
    title: 'Teken in by jou rekening',
    description: 'Toegang tot jou dashboard, bestuur kennisgewings, en volg indiening',
    icon: 'sign-in',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Teken in' },
    ],
    size: 'sm',
    alignment: 'center',
  },

  // Register
  register: {
    title: 'Skep jou rekening',
    description: 'Begin met die indiening en bestuur van openbare kennisgewings',
    icon: 'user-plus',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Registreer' },
    ],
    size: 'sm',
    alignment: 'center',
  },

  // Auth: Forgot Password
  forgotPassword: {
    title: 'Herstel jou wagwoord',
    description: 'Voer jou e-posadres in en ons sal vir jou \'n herstel skakel stuur',
    icon: 'lock',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Teken in', href: '/af/aanmeld' },
      { label: 'Herstel wagwoord' },
    ],
    size: 'sm',
    alignment: 'center',
  },

  // Auth: Reset Password
  resetPassword: {
    title: 'Kies \'n nuwe wagwoord',
    description: 'Voer jou nuwe wagwoord hieronder in',
    icon: 'key',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Herstel wagwoord' },
    ],
    size: 'sm',
    alignment: 'center',
  },

  // Dev Tools: Client Questionnaire
  clientQuestionnaire: {
    title: 'Kliënt vraelys',
    description: 'Noodsaaklike vrae om ons te help om jou perfekte openbare kennisgewings portaal te bou',
    icon: 'clipboard-text',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Ont gereedskap' },
      { label: 'Kliënt vraelys' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Dev Tools: Launch Checklist
  launchChecklist: {
    title: 'Bekendstelling kontrolelys',
    description: 'Alles wat ons nodig het om jou openbare kennisgewings portaal van prototipe na produksie te neem',
    icon: 'checklist',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Ont gereedskap' },
      { label: 'Bekendstelling kontrolelys' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // My Account
  account: {
    title: 'My rekening',
    description: 'Bestuur jou kennisgewings, bestellings en rekening instellings.',
    icon: 'user-circle',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'My rekening' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // My Notices
  myNotices: {
    title: 'My kennisgewings',
    description: 'Bekyk en bestuur al jou ingediende openbare kennisgewings.',
    icon: 'files',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'My rekening', href: '/af/my-rekening' },
      { label: 'My kennisgewings' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Dien nuwe kennisgewing in',
        href: '/af/dien-kennisgewing-in',
        variant: 'primary',
        icon: 'upload',
      },
    ],
  },

  // My Orders
  myOrders: {
    title: 'My bestellings',
    description: 'Bekyk jou bestellingsgeskiedenis en laai fakture af.',
    icon: 'shopping-bag',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'My rekening', href: '/af/my-rekening' },
      { label: 'Bestellings' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Profile
  profile: {
    title: 'Profiel instellings',
    description: 'Werk jou persoonlike inligting en rekening voorkeure by.',
    icon: 'user-gear',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'My rekening', href: '/af/my-rekening' },
      { label: 'Profiel' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Saved Searches
  savedSearches: {
    title: 'Gestoorde soektogte en kennisgewings',
    description: 'Bestuur jou gestoorde soektogte en ontvang e-pos kennisgewings wanneer nuwe toepaslike kennisgewings gepubliseer word.',
    icon: 'bookmark',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'My rekening', href: '/af/my-rekening' },
      { label: 'Gestoorde soektogte' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Skep nuwe soektog',
        href: '/af/soek',
        variant: 'primary',
        icon: 'magnifying-glass',
      },
    ],
  },

  // Settings
  settings: {
    title: 'Rekening instellings',
    description: 'Bestuur jou kennisgewing voorkeure, privaatheid instellings, en rekening sekuriteit.',
    icon: 'gear',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'My rekening', href: '/af/my-rekening' },
      { label: 'Instellings' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Submit Notice
  submitNotice: {
    title: 'Dien \'n openbare kennisgewing in',
    description: 'Publiseer jou regskennisgewing vinnig en voldoende. Alle indiening word hersien voor publikasie.',
    icon: 'upload',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Dien kennisgewing in' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Submit Notice Form
  submitNoticeForm: {
    title: 'Dien kennisgewing in',
    icon: 'notebook',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Dien kennisgewing in', href: '/af/dien-kennisgewing-in' },
      { label: 'Vorm' },
    ],
    size: 'sm',
    alignment: 'left',
  },

  // Submit Notice Entry (Landing)
  submitNoticeEntry: {
    title: "Dien 'n openbare kennisgewing in",
    description: 'Publiseer jou regskennisgewing vinnig en voldoende. Kies tussen selfbediening digitaal of verkoopgeassisteerde druk en digitale opsies.',
    icon: 'upload',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Dien kennisgewing in' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Dien digitale kennisgewing in',
        href: '/af/dien-kennisgewing-in/vorm',
        variant: 'primary',
        icon: 'upload',
      },
      {
        text: 'Verkope ondersteuning',
        href: '/af/verkope',
        variant: 'outline',
        icon: 'phone',
      },
    ],
  },

  // Review Notice
  reviewNotice: {
    title: 'Hersien jou kennisgewing',
    description: 'Hersien asseblief alle besonderhede noukeurig voor betaling.',
    icon: 'eye',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Dien kennisgewing in', href: '/af/dien-kennisgewing-in' },
      { label: 'Hersien' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Checkout
  checkout: {
    title: 'Afhandeling',
    description: 'Voltooi jou bestelling veilig. Jou kennisgewing sal hersien word voor publikasie.',
    icon: 'credit-card',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Afhandeling' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Order Confirmation
  orderConfirmation: {
    title: 'Bestelling bevestig',
    description: 'Dankie vir jou bestelling. Ons sal jou kennisgewing hersien en jou in kennis stel sodra dit gepubliseer is.',
    icon: 'check-circle',
    size: 'md',
    alignment: 'center',
  },

  // Success
  success: {
    title: 'Sukses!',
    description: 'U kennisgewing is suksesvol ingedien.',
    icon: 'check-circle',
    size: 'md',
    alignment: 'center',
    buttons: [
      {
        text: 'Bekyk my kennisgewings',
        href: '/af/my-rekening/my-kennisgewings',
        variant: 'primary',
        icon: 'file-text',
      },
    ],
  },

  // Moderation Dashboard
  moderationDashboard: {
    title: 'Moderering paneelbord',
    description: 'Hersien en bestuur ingediende kennisgewings wat wag op goedkeuring.',
    icon: 'shield-check',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Moderering' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Style Guide
  styleGuide: {
    title: 'Stylgids',
    description: 'Ontwerpstelsel dokumentasie en komponent biblioteek.',
    icon: 'palette',
    breadcrumbs: [
      { label: 'Tuis', href: '/af' },
      { label: 'Stylgids' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Not Found
  notFound: {
    title: 'Bladsy nie gevind nie',
    description: 'Die bladsy wat jy soek bestaan nie of is geskuif.',
    icon: 'warning',
    size: 'md',
    alignment: 'center',
    buttons: [
      {
        text: 'Gaan na tuisblad',
        href: '/af',
        variant: 'primary',
      },
      {
        text: 'Soek kennisgewings',
        href: '/af/soek',
        variant: 'outline',
        icon: 'magnifying-glass',
      },
    ],
  },
};