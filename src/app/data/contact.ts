/**
 * Contact Page Data
 * Centralized contact information for Nova News / Novus Media
 */

export interface ContactRegion {
  region: {
    en: string;
    af: string;
  };
  email: string;
  phone: string;
}

export interface ContactCategory {
  title: {
    en: string;
    af: string;
  };
  description: {
    en: string;
    af: string;
  };
  email?: string;
  action?: {
    en: string;
    af: string;
  };
}

/**
 * Regional Contact Information
 */
export const regionalContacts: ContactRegion[] = [
  {
    region: { en: "Cape Peninsula", af: "Kaapse Skiereiland" },
    email: "wpadvertising@novusmedia.co.za",
    phone: "+27 21 910 6500",
  },
  {
    region: { en: "Boland", af: "Boland" },
    email: "bolandadvertising@novusmedia.co.za",
    phone: "+27 21 870 4600",
  },
  {
    region: { en: "Eastern Cape", af: "Oos-Kaap" },
    email: "ecadvertising@novusmedia.co.za",
    phone: "+27 41 503 5111",
  },
  {
    region: { en: "Free State & Northern Cape", af: "Vrystaat & Noord-Kaap" },
    email: "centraladvertising@novusmedia.co.za",
    phone: "+27 51 404 7600",
  },
];

/**
 * National Publications
 */
export const nationalPublications = [
  { name: "Soccer Laduma", url: "https://www.soccerladuma.co.za/" },
  { name: "Kickoff", url: "https://www.kickoff.com/" },
  { name: "rooi rose", url: "https://www.rooirose.co.za/" },
];

/**
 * Contact Categories
 */
export const contactCategories: ContactCategory[] = [
  {
    title: { en: "Advertise With Us", af: "Adverteer by Ons" },
    description: {
      en: "For more information on our advertising options, visit our Advertise Page.",
      af: "Vir meer inligting oor ons advertensie-opsies, besoek ons Adverteer-bladsy.",
    },
    action: { en: "Visit Advertise Page", af: "Besoek Adverteer-bladsy" },
  },
  {
    title: { en: "Technical Issues", af: "Tegniese Probleme" },
    description: {
      en: "Report any technical issues by emailing helpdesk@novusmedia.co.za with as much detail as possible.",
      af: "Rapporteer enige tegniese probleme deur 'n e-pos te stuur aan helpdesk@novusmedia.co.za met soveel besonderhede as moontlik.",
    },
    email: "helpdesk@novusmedia.co.za",
  },
  {
    title: { en: "Syndication Requests", af: "Sindikasieversoeke" },
    description: {
      en: "For requests to republish our material, contact syndication@novusmedia.co.za.",
      af: "Vir versoeke om ons materiaal te herpubliseer, kontak syndication@novusmedia.co.za.",
    },
    email: "syndication@novusmedia.co.za",
  },
  {
    title: { en: "General Queries", af: "Algemene Navrae" },
    description: {
      en: "Use the enquiry form above to direct your query to the appropriate division.",
      af: "Gebruik die navraagvorm hierbo om u navraag na die toepaslike afdeling te stuur.",
    },
  },
  {
    title: { en: "Editorial Enquiries", af: "Redaksionele Navrae" },
    description: {
      en: "For story ideas and editorial enquiries, send an email to newsdesk@novusmedia.co.za.",
      af: "Vir verhaalidees en redaksionele navrae, stuur 'n e-pos aan newsdesk@novusmedia.co.za.",
    },
    email: "newsdesk@novusmedia.co.za",
  },
  {
    title: { en: "Legal Matters", af: "Regskwessies" },
    description: {
      en: "For any legal queries, contact legal@novusmedia.co.za.",
      af: "Vir enige regsvrae, kontak legal@novusmedia.co.za.",
    },
    email: "legal@novusmedia.co.za",
  },
  {
    title: { en: "Classified Ads", af: "Geklassifiseerde Advertensies" },
    description: {
      en: "To place a classified ad, job listing, or submit an event, email classifieds@novusmedia.co.za.",
      af: "Om 'n geklassifiseerde advertensie, pos of gebeurtenis in te dien, stuur 'n e-pos aan classifieds@novusmedia.co.za.",
    },
    email: "classifieds@novusmedia.co.za",
  },
];

/**
 * Social Media Information
 */
export const socialMediaInfo = {
  facebook: {
    text: { en: "Join our community on Facebook", af: "Sluit aan by ons gemeenskap op Facebook" },
    url: "https://www.facebook.com/NovaNewsZA/",
  },
  general: {
    text: { en: "Follow us", af: "Volg ons" },
  },
};

/**
 * Page Header Content
 */
export const contactPageHeader = {
  title: { en: "Contact Us", af: "Kontak Ons" },
  subtitle: {
    en: "We love hearing from our readers! Whether you have a story tip, a question, or just want to reach out to our team, we're here for you. Below, you'll find all the ways you can get in touch with us.",
    af: "Ons hou daarvan om van ons lesers te hoor! Of jy 'n storie-wenk het, 'n vraag, of net met ons span wil kontak maak, ons is hier vir jou. Hieronder sal jy al die maniere vind waarop jy met ons in kontak kan kom.",
  },
};

/**
 * Regional Contacts Section
 */
export const regionalContactsHeader = {
  title: { en: "Get in touch", af: "Kom in kontak" },
};

/**
 * How Can We Help Section
 */
export const helpSectionHeader = {
  title: { en: "How can we help you today?", af: "Hoe kan ons jou vandag help?" },
};

/**
 * Contact Form
 */
export const contactFormLabels = {
  name: { en: "Full Name", af: "Volle Naam" },
  email: { en: "Email Address", af: "E-posadres" },
  phone: { en: "Phone Number", af: "Telefoonnommer" },
  region: { en: "Region", af: "Streek" },
  category: { en: "Enquiry Type", af: "Navraag Tipe" },
  subject: { en: "Subject", af: "Onderwerp" },
  message: { en: "Message", af: "Boodskap" },
  submit: { en: "Send Message", af: "Stuur Boodskap" },
  required: { en: "Required", af: "Verplig" },
  optional: { en: "Optional", af: "Opsioneel" },
};

export const contactFormPlaceholders = {
  name: { en: "John Doe", af: "Jan van der Merwe" },
  email: { en: "john@example.com", af: "jan@voorbeeld.co.za" },
  phone: { en: "+27 12 345 6789", af: "+27 12 345 6789" },
  region: { en: "Select your region", af: "Kies jou streek" },
  category: { en: "Select enquiry type", af: "Kies navraag tipe" },
  subject: { en: "How can we help?", af: "Hoe kan ons help?" },
  message: { en: "Please describe your inquiry...", af: "Beskryf asseblief jou navraag..." },
};
