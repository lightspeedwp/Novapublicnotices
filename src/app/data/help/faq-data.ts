/**
 * FAQ Data - Help Center
 * Bilingual EN/AF support
 */

export interface FAQItem {
  id: string;
  question: {
    en: string;
    af: string;
  };
  answer: {
    en: string;
    af: string;
  };
  category: string;
}

export interface FAQCategory {
  id: string;
  name: {
    en: string;
    af: string;
  };
  icon: string;
  description: {
    en: string;
    af: string;
  };
}

export const faqCategories: FAQCategory[] = [
  {
    id: "getting-started",
    name: {
      en: "Getting Started",
      af: "Aan Die Gang Kom",
    },
    icon: "play-circle",
    description: {
      en: "Learn the basics of using the Public Notices Portal",
      af: "Leer die basiese beginsels van die gebruik van die Openbare Kennisgewingsportaal",
    },
  },
  {
    id: "searching",
    name: {
      en: "Searching Notices",
      af: "Soek Kennisgewings",
    },
    icon: "search",
    description: {
      en: "How to find and filter public notices",
      af: "Hoe om openbare kennisgewings te vind en te filter",
    },
  },
  {
    id: "submitting",
    name: {
      en: "Submitting Notices",
      af: "Indien van Kennisgewings",
    },
    icon: "file-plus",
    description: {
      en: "How to submit and publish your notice",
      af: "Hoe om u kennisgewing in te dien en te publiseer",
    },
  },
  {
    id: "pricing",
    name: {
      en: "Pricing & Payment",
      af: "Pryse & Betaling",
    },
    icon: "credit-card",
    description: {
      en: "Understanding costs and payment options",
      af: "Verstaan koste en betalingsopsies",
    },
  },
  {
    id: "account",
    name: {
      en: "Account Management",
      af: "Rekeningbestuur",
    },
    icon: "user",
    description: {
      en: "Managing your account and preferences",
      af: "Bestuur u rekening en voorkeure",
    },
  },
  {
    id: "legal",
    name: {
      en: "Legal Requirements",
      af: "Wetlike Vereistes",
    },
    icon: "scale",
    description: {
      en: "Understanding legal notice requirements",
      af: "Verstaan wetlike kennisgewingvereistes",
    },
  },
];

export const faqItems: FAQItem[] = [
  // Getting Started
  {
    id: "what-are-public-notices",
    question: {
      en: "What are public notices?",
      af: "Wat is openbare kennisgewings?",
    },
    answer: {
      en: "Public notices are legally required announcements published to inform the public about matters such as estate settlements, company registrations, liquor license applications, property sales, and government tenders. They ensure transparency and allow interested parties to respond within specified timeframes.",
      af: "Openbare kennisgewings is wetlik vereiste aankondigings wat gepubliseer word om die publiek in te lig oor sake soos boedelreëlings, maatskappyregistrasies, dranklisensienaansoeke, eiendomsverkope en regeringstenders. Hulle verseker deursigtigheid en laat belangstellende partye toe om binne gespesifiseerde tydperke te reageer.",
    },
    category: "getting-started",
  },
  {
    id: "who-needs-public-notices",
    question: {
      en: "Who needs to publish public notices?",
      af: "Wie moet openbare kennisgewings publiseer?",
    },
    answer: {
      en: "Public notices are required by various entities including executors of estates, attorneys, municipalities, government departments, businesses applying for licenses, property developers, and companies undergoing liquidation or restructuring. Legal requirements vary by notice type.",
      af: "Openbare kennisgewings word vereis deur verskeie entiteite insluitend eksekuteurs van boedels, prokureurs, munisipaliteite, regeringsdepartemente, besighede wat vir lisensies aansoek doen, eiendomsontwikkelaars en maatskappye wat likwidasie of herstrukturering ondergaan. Wetlike vereistes wissel volgens kennisgewingtipe.",
    },
    category: "getting-started",
  },
  {
    id: "do-i-need-account",
    question: {
      en: "Do I need an account to view notices?",
      af: "Het ek 'n rekening nodig om kennisgewings te bekyk?",
    },
    answer: {
      en: "Yes, you need a free account to view public notices. This helps us maintain quality, prevent scraping, and ensure the portal remains sustainable. Registration takes less than 2 minutes and gives you access to search, save searches, and receive alerts.",
      af: "Ja, u benodig 'n gratis rekening om openbare kennisgewings te bekyk. Dit help ons om kwaliteit te handhaaf, skraap te voorkom en te verseker dat die portaal volhoubaar bly. Registrasie neem minder as 2 minute en gee u toegang tot soek, stoor soektogte en ontvang waarskuwings.",
    },
    category: "getting-started",
  },
  {
    id: "how-to-register",
    question: {
      en: "How do I create an account?",
      af: "Hoe skep ek 'n rekening?",
    },
    answer: {
      en: "Click 'Register' in the top menu, fill in your personal details, and optionally add your company information if you'll be submitting notices on behalf of an organization. Verify your email address, and you're ready to start using the portal.",
      af: "Klik op 'Registreer' in die boonste spyskaart, vul u persoonlike besonderhede in, en voeg opsioneel u maatskappyinligting by indien u kennisgewings namens 'n organisasie sal indien. Verifieer u e-posadres, en u is gereed om die portaal te begin gebruik.",
    },
    category: "getting-started",
  },

  // Searching
  {
    id: "how-to-search",
    question: {
      en: "How do I search for notices?",
      af: "Hoe soek ek vir kennisgewings?",
    },
    answer: {
      en: "Use the search bar on the homepage or dedicated search page. Enter keywords, reference numbers, or names. Use the filters to narrow by category (e.g., estates, tenders), location, date range, and status. You can also save searches to receive alerts when new matching notices are published.",
      af: "Gebruik die soekbalk op die tuisblad of toegewyde soekbladsy. Voer sleutelwoorde, verwysingsnommers of name in. Gebruik die filters om te vernou volgens kategorie (bv. boedels, tenders), ligging, datumreeks en status. U kan ook soektogte stoor om waarskuwings te ontvang wanneer nuwe ooreenstemmende kennisgewings gepubliseer word.",
    },
    category: "searching",
  },
  {
    id: "search-by-reference",
    question: {
      en: "Can I search by reference number?",
      af: "Kan ek volgens verwysingsnommer soek?",
    },
    answer: {
      en: "Yes, enter the reference number (e.g., estate number, case number, application number) in the search bar. Reference numbers are unique identifiers that make it easy to find specific notices quickly.",
      af: "Ja, voer die verwysingsnommer (bv. boedelnommer, saaknommer, aansoeknommer) in die soekbalk in. Verwysingsnommers is unieke identifiseerders wat dit maklik maak om spesifieke kennisgewings vinnig te vind.",
    },
    category: "searching",
  },
  {
    id: "save-search",
    question: {
      en: "Can I save my searches?",
      af: "Kan ek my soektogte stoor?",
    },
    answer: {
      en: "Yes! After performing a search, click 'Save This Search' to store your filters and keywords. You can enable email alerts to be notified when new notices match your saved criteria. Manage all your saved searches from My Account > Saved Searches.",
      af: "Ja! Nadat u 'n soektog uitgevoer het, klik op 'Stoor Hierdie Soektog' om u filters en sleutelwoorde te stoor. U kan e-poswaarskuwings aktiveer om in kennis gestel te word wanneer nuwe kennisgewings by u gestoorde kriteria pas. Bestuur al u gestoorde soektogte vanaf My Rekening > Gestoorde Soektogte.",
    },
    category: "searching",
  },
  {
    id: "filter-by-location",
    question: {
      en: "How do I filter by location?",
      af: "Hoe filter ek volgens ligging?",
    },
    answer: {
      en: "Use the 'Location' filter on the search page to select specific provinces, cities, or municipalities. This is especially useful for property-related notices, municipal announcements, and regional tenders.",
      af: "Gebruik die 'Ligging'-filter op die soekbladsy om spesifieke provinsies, stede of munisipaliteite te kies. Dit is veral nuttig vir eiendomverwante kennisgewings, munisipale aankondigings en streekstenders.",
    },
    category: "searching",
  },

  // Submitting
  {
    id: "how-to-submit",
    question: {
      en: "How do I submit a public notice?",
      af: "Hoe dien ek 'n openbare kennisgewing in?",
    },
    answer: {
      en: "Click 'Submit Notice' in the main menu. Choose your notice category, fill in the required details, upload any supporting documents, preview your notice, and proceed to payment. All notices are reviewed by our editorial team before publication to ensure compliance.",
      af: "Klik op 'Dien Kennisgewing In' in die hoofspyskaart. Kies u kennisgewingkategorie, vul die vereiste besonderhede in, laai enige ondersteunende dokumente op, voorskou u kennisgewing en gaan voort na betaling. Alle kennisgewings word deur ons redaksionele span hersien voor publikasie om voldoening te verseker.",
    },
    category: "submitting",
  },
  {
    id: "digital-vs-print",
    question: {
      en: "What's the difference between digital-only and print + digital?",
      af: "Wat is die verskil tussen slegs-digitaal en druk + digitaal?",
    },
    answer: {
      en: "Digital-only notices are published on our portal and are ideal for faster, more affordable publication. Print + digital includes publication in Nova News newspapers plus the portal, providing maximum reach and meeting traditional legal requirements. Our sales team can advise on legal requirements for your specific notice type.",
      af: "Slegs-digitale kennisgewings word op ons portaal gepubliseer en is ideaal vir vinniger, meer bekostigbare publikasie. Druk + digitaal sluit publikasie in Nova News-koerante plus die portaal in, wat maksimum bereik bied en aan tradisionele wetlike vereistes voldoen. Ons verkoopspan kan advies gee oor wetlike vereistes vir u spesifieke kennisgewingtipe.",
    },
    category: "submitting",
  },
  {
    id: "approval-time",
    question: {
      en: "How long does approval take?",
      af: "Hoe lank neem goedkeuring?",
    },
    answer: {
      en: "Digital-only notices are typically reviewed within 2-4 business hours during office hours. Print + digital notices require coordination with print deadlines and may take 1-2 business days. Rush processing is available for urgent notices. You'll receive email updates on your notice status.",
      af: "Slegs-digitale kennisgewings word gewoonlik binne 2-4 besigheidsure gedurende kantoorure hersien. Druk + digitale kennisgewings vereis koördinasie met drukspertye en kan 1-2 besigheidsdae neem. Haasverwerking is beskikbaar vir dringende kennisgewings. U sal e-posopdaterings oor u kennisgewingstatus ontvang.",
    },
    category: "submitting",
  },
  {
    id: "required-documents",
    question: {
      en: "What documents do I need to upload?",
      af: "Watter dokumente moet ek oplaai?",
    },
    answer: {
      en: "Required documents vary by notice type. Common requirements include: proof of identity (ID/passport), authorization letters, death certificates (estates), liquor license applications, court orders, property title deeds, or company registration documents. Our submission form clearly indicates required documents for each category.",
      af: "Vereiste dokumente wissel volgens kennisgewingtipe. Algemene vereistes sluit in: bewys van identiteit (ID/paspoort), magtigingsbriewe, sterftesertifikate (boedels), dranklisensienaansoeke, hofbevele, eiendomstitelaktes of maatskappyregistrasiedokumente. Ons indieningsvorm dui duidelik vereiste dokumente vir elke kategorie aan.",
    },
    category: "submitting",
  },

  // Pricing
  {
    id: "how-much-cost",
    question: {
      en: "How much does it cost to publish a notice?",
      af: "Hoeveel kos dit om 'n kennisgewing te publiseer?",
    },
    answer: {
      en: "Digital-only notices start from R350 depending on length and category. Print + digital pricing varies by publication, size, and placement. Use our online pricing calculator or contact our sales team for a detailed quote. All prices include VAT and editorial review.",
      af: "Slegs-digitale kennisgewings begin vanaf R350 afhangende van lengte en kategorie. Druk + digitale pryse wissel volgens publikasie, grootte en plasing. Gebruik ons aanlyn prysberekening of kontak ons verkoopspan vir 'n gedetailleerde kwotasie. Alle pryse sluit BTW en redaksionele hersiening in.",
    },
    category: "pricing",
  },
  {
    id: "payment-methods",
    question: {
      en: "What payment methods do you accept?",
      af: "Watter betalingsmetodes aanvaar u?",
    },
    answer: {
      en: "We accept credit/debit cards (Visa, Mastercard), EFT, instant EFT, and SnapScan through our secure PayFast payment gateway. Payment is required before notices are submitted for review. Invoicing is available for registered corporate accounts.",
      af: "Ons aanvaar krediet-/debietkaarte (Visa, Mastercard), EFT, kitsoorbetaling en SnapScan deur ons veilige PayFast-betaalpoort. Betaling word vereis voordat kennisgewings vir hersiening ingedien word. Fakturering is beskikbaar vir geregistreerde korporatiewe rekeninge.",
    },
    category: "pricing",
  },
  {
    id: "refund-policy",
    question: {
      en: "What is your refund policy?",
      af: "Wat is u terugbetalingsbeleid?",
    },
    answer: {
      en: "Refunds are available if your notice is rejected due to legal non-compliance or if we cannot publish for technical reasons. Once a notice is approved and published, refunds are not available. If you need to make changes after payment, contact our support team for assistance.",
      af: "Terugbetalings is beskikbaar indien u kennisgewing verwerp word weens wetlike nie-voldoening of indien ons nie kan publiseer vir tegniese redes nie. Sodra 'n kennisgewing goedgekeur en gepubliseer is, is terugbetalings nie beskikbaar nie. Indien u veranderinge moet maak na betaling, kontak ons ondersteuningspan vir bystand.",
    },
    category: "pricing",
  },

  // Account
  {
    id: "reset-password",
    question: {
      en: "How do I reset my password?",
      af: "Hoe herstel ek my wagwoord?",
    },
    answer: {
      en: "Click 'Forgot Password' on the login page, enter your registered email address, and we'll send you a password reset link. Follow the link to create a new password. If you don't receive the email, check your spam folder or contact support.",
      af: "Klik op 'Wagwoord Vergeet' op die aanmeldblad, voer u geregistreerde e-posadres in, en ons sal vir u 'n wagwoordherstelskakel stuur. Volg die skakel om 'n nuwe wagwoord te skep. Indien u nie die e-pos ontvang nie, kyk in u strooiposvlouer of kontak ondersteuning.",
    },
    category: "account",
  },
  {
    id: "update-company-info",
    question: {
      en: "How do I update my company information?",
      af: "Hoe werk ek my maatskappyinligting by?",
    },
    answer: {
      en: "Go to My Account > Profile and scroll to the Company Information section. Update your company name, registration number, VAT number, and logo. Changes to company details may require verification documentation for security purposes.",
      af: "Gaan na My Rekening > Profiel en rol af na die Maatskappyinligting-afdeling. Werk u maatskappynaam, registrasienommer, BTW-nommer en logo by. Veranderinge aan maatskappybesonderhede kan verifikasiedokumentasie vereis vir sekuriteitsdoeleindes.",
    },
    category: "account",
  },
  {
    id: "notification-settings",
    question: {
      en: "How do I manage my notification preferences?",
      af: "Hoe bestuur ek my kennisgewingvoorkeure?",
    },
    answer: {
      en: "Visit My Account > Settings to control all notification preferences. You can enable/disable email notifications, set digest frequency (daily/weekly), manage saved search alerts, and control marketing communications. Changes take effect immediately.",
      af: "Besoek My Rekening > Instellings om alle kennisgewingvoorkeure te beheer. U kan e-poskennisgewings aktiveer/deaktiveer, opsommingfrekwensie stel (daagliks/weekliks), gestoorde soektogwaarskuwings bestuur en bemarkingskommunikasie beheer. Veranderinge tree onmiddellik in werking.",
    },
    category: "account",
  },

  // Legal
  {
    id: "legal-requirements",
    question: {
      en: "What are the legal requirements for publishing notices?",
      af: "Wat is die wetlike vereistes vir die publisering van kennisgewings?",
    },
    answer: {
      en: "Legal requirements vary by notice type and jurisdiction. Common requirements include specific wording, minimum publication periods, required information fields, and authorized signatures. Our editorial team reviews all submissions for compliance. Contact our sales team for guidance on specific legal requirements for your notice category.",
      af: "Wetlike vereistes wissel volgens kennisgewingtipe en jurisdiksie. Algemene vereistes sluit in spesifieke bewoording, minimum publikasieperiodes, vereiste inligtingsvelde en gemagtigde handtekeninge. Ons redaksionele span hersien alle indiening vir voldoening. Kontak ons verkoopspan vir leiding oor spesifieke wetlike vereistes vir u kennisgewingkategorie.",
    },
    category: "legal",
  },
  {
    id: "digital-legal",
    question: {
      en: "Are digital notices legally valid?",
      af: "Is digitale kennisgewings wettig geldig?",
    },
    answer: {
      en: "Yes, digital publication is legally recognized for most notice types in South Africa. However, some categories still require print publication or both print and digital. Our team can advise on legal requirements specific to your notice type and jurisdiction. When in doubt, print + digital ensures maximum compliance.",
      af: "Ja, digitale publikasie word wetlik erken vir die meeste kennisgewingtipes in Suid-Afrika. Sommige kategorieë vereis egter steeds drukpublikasie of beide druk en digitaal. Ons span kan advies gee oor wetlike vereistes spesifiek vir u kennisgewingtipe en jurisdiksie. In geval van twyfel verseker druk + digitaal maksimum voldoening.",
    },
    category: "legal",
  },
  {
    id: "proof-publication",
    question: {
      en: "Will I receive proof of publication?",
      af: "Sal ek bewys van publikasie ontvang?",
    },
    answer: {
      en: "Yes, once your notice is published, you'll receive a digital certificate of publication via email. This includes the publication date, notice reference number, and a permanent link to your notice. Print notices also receive tear sheets (physical proof). These documents serve as legal proof of compliance.",
      af: "Ja, sodra u kennisgewing gepubliseer is, sal u 'n digitale publikasiesertifikaat via e-pos ontvang. Dit sluit die publikasiedatum, kennisgewingverwysingsnommer en 'n permanente skakel na u kennisgewing in. Drukkennisgewings ontvang ook skeurblaaie (fisiese bewys). Hierdie dokumente dien as wetlike bewys van voldoening.",
    },
    category: "legal",
  },
];

export const quickHelpLinks = {
  en: [
    {
      title: "Submit your first notice",
      description: "Step-by-step guide to publishing a notice",
      href: "/submit",
      icon: "file-plus",
    },
    {
      title: "Pricing calculator",
      description: "Estimate costs for your notice",
      href: "/pricing",
      icon: "calculator",
    },
    {
      title: "Contact sales team",
      description: "Get personalized assistance",
      href: "/contact",
      icon: "headset",
    },
    {
      title: "Browse notice examples",
      description: "See sample notices by category",
      href: "/search",
      icon: "book-open",
    },
  ],
  af: [
    {
      title: "Dien u eerste kennisgewing in",
      description: "Stap-vir-stap gids om 'n kennisgewing te publiseer",
      href: "/af/dien-in",
      icon: "file-plus",
    },
    {
      title: "Prysberekening",
      description: "Skat koste vir u kennisgewing",
      href: "/af/pryse",
      icon: "calculator",
    },
    {
      title: "Kontak verkoopspan",
      description: "Kry persoonlike bystand",
      href: "/af/kontak",
      icon: "headset",
    },
    {
      title: "Blaai deur kennisgewingvoorbeelde",
      description: "Sien voorbeeldkennisgewings volgens kategorie",
      href: "/af/soek",
      icon: "book-open",
    },
  ],
};