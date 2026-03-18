export interface Category {
  slug: string;
  name: {
    en: string;
    af: string;
  };
  description: {
    en: string;
    af: string;
  };
  icon?: string;
  count?: number;
  /** Optional hero layout override - defaults to 'default' */
  heroLayout?: 'default' | 'split' | 'centered' | 'minimal' | 'with-stats';
  /** Optional hero size override - defaults to 'md' */
  heroSize?: 'sm' | 'md' | 'lg';
  /** Optional custom hero description (overrides default) */
  heroDescription?: {
    en?: string;
    af?: string;
  };
}

export const categories: Category[] = [
  {
    slug: "tenders",
    name: {
      en: "Tenders",
      af: "Tenders",
    },
    description: {
      en: "Government and municipal tenders and requests for proposals",
      af: "Regering en munisipale tenders en versoeke vir voorstelle",
    },
    // Custom hero for high-visibility category
    heroLayout: 'with-stats',
    heroSize: 'lg',
    heroDescription: {
      en: "Access thousands of government tenders from municipalities, provinces, and national departments across South Africa. Updated daily.",
      af: "Toegang tot duisende regeringstenders vanaf munisipaliteite, provinsies, en nasionale departemente regoor Suid-Afrika. Daagliks bygewerk.",
    },
  },
  {
    slug: "estates",
    name: {
      en: "Estates",
      af: "Boedels",
    },
    description: {
      en: "Deceased estate notices, creditor and debtor notices",
      af: "Oorledene boedelkennisgewings, krediteur en debiteur kennisgewings",
    },
  },
  {
    slug: "liquor-licences",
    name: {
      en: "Liquor Licences",
      af: "Dranklisensies",
    },
    description: {
      en: "Applications for liquor licences and renewals",
      af: "Aansoeke vir dranklisensies en hernuwings",
    },
  },
  {
    slug: "town-planning",
    name: {
      en: "Town Planning",
      af: "Stadsbeplanning",
    },
    description: {
      en: "Rezoning applications, land use changes, and development proposals",
      af: "Hersoneringsaansoeke, grondgebruikveranderings, en ontwikkelingsvoorstelle",
    },
  },
  {
    slug: "business-licence",
    name: {
      en: "Business Licences",
      af: "Besigheidslisensies",
    },
    description: {
      en: "Business and commercial licence applications",
      af: "Besigheid en kommersiële lisensie aansoeke",
    },
  },
  {
    slug: "environmental",
    name: {
      en: "Environmental",
      af: "Omgewing",
    },
    description: {
      en: "Environmental impact assessments and related notices",
      af: "Omgewingsimpakbeoordelings en verwante kennisgewings",
    },
  },
  {
    slug: "court-orders",
    name: {
      en: "Court Orders",
      af: "Hofbevele",
    },
    description: {
      en: "Court orders, sequestrations, and liquidations",
      af: "Hofbevele, sekwestrasies, en likwidasies",
    },
  },
  {
    slug: "insolvency",
    name: {
      en: "Insolvency",
      af: "Insolvensie",
    },
    description: {
      en: "Insolvency notices and bankruptcy proceedings",
      af: "Insolvensiekennisgewings en bankrotskapprosedures",
    },
  },
  {
    slug: "lost-documents",
    name: {
      en: "Lost Documents",
      af: "Verlore Dokumente",
    },
    description: {
      en: "Lost title deeds and other important documents",
      af: "Verlore titelaktes en ander belangrike dokumente",
    },
  },
  {
    slug: "general",
    name: {
      en: "General Notices",
      af: "Algemene Kennisgewings",
    },
    description: {
      en: "General public notices and announcements",
      af: "Algemene openbare kennisgewings en aankondigings",
    },
  },
  {
    slug: "adoptions",
    name: {
      en: "Adoptions",
      af: "Aannemings",
    },
    description: {
      en: "Adoption notices and related proceedings",
      af: "Aannemingskennisgewings en verwante prosedures",
    },
  },
  {
    slug: "curatorship",
    name: {
      en: "Curatorship",
      af: "Kuratele",
    },
    description: {
      en: "Curatorship appointments and related notices",
      af: "Kuratoraanstellings en verwante kennisgewings",
    },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getCategoryName(slug: string, lang: "en" | "af" = "en"): string {
  const category = getCategoryBySlug(slug);
  return category ? category.name[lang] : slug;
}