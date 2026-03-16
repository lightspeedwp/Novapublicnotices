export interface Notice {
  id: string;
  title: {
    en: string;
    af: string;
  };
  category: string;
  publishDate: string;
  location: string;
  referenceNumber: string;
  excerpt: {
    en: string;
    af: string;
  };
  body: {
    en: string;
    af: string;
  };
  publisher: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  deadline?: string;
  status: "published" | "pending" | "draft" | "archived";
  accessPolicy: "public" | "account_required" | "restricted";
  fields?: Record<string, string>;
}

export const sampleNotices: Notice[] = [
  {
    id: "1",
    title: {
      en: "Tender for Construction of Municipal Building in Pretoria",
      af: "Tender vir Konstruksie van Munisipale Gebou in Pretoria",
    },
    category: "tenders",
    publishDate: "16 Mar 2026",
    location: "Pretoria, Gauteng",
    referenceNumber: "TEN-2026-0312",
    excerpt: {
      en: "The City of Tshwane invites tenders from qualified contractors for the construction of a new municipal administration building.",
      af: "Die Stad van Tshwane nooi tenders van gekwalifiseerde kontrakteurs vir die konstruksie van 'n nuwe munisipale administrasiegebou.",
    },
    body: {
      en: "The City of Tshwane Metropolitan Municipality hereby invites competent and experienced contractors to submit tenders for the construction of a new municipal administration building located in central Pretoria. The project scope includes foundation work, structural construction, electrical installations, plumbing, and finishing works. Tender documents are available from the Municipal Offices. The closing date for tender submissions is 30 April 2026 at 12:00. Late submissions will not be considered.",
      af: "Die Stad van Tshwane Metropolitaanse Munisipaliteit nooi hiermee bekwame en ervare kontrakteurs om tenders in te dien vir die konstruksie van 'n nuwe munisipale administrasiegebou geleë in sentrale Pretoria. Die projekomvang sluit fondamentwerk, strukturele konstruksie, elektriese installasies, loodgieterswerk, en afwerkingswerke in. Tenderdokumente is beskikbaar by die Munisipale Kantore. Die sluitingsdatum vir tenderindiening is 30 April 2026 om 12:00. Laat indiening sal nie oorweeg word nie.",
    },
    publisher: "City of Tshwane Metropolitan Municipality",
    contactName: "Municipal Procurement Office",
    contactEmail: "tenders@tshwane.gov.za",
    contactPhone: "012 358 9999",
    deadline: "30 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      tenderNumber: "TEN-2026-0312",
      closingDate: "30 Apr 2026 12:00",
      briefingDate: "25 Mar 2026 10:00",
    },
  },
  {
    id: "2",
    title: {
      en: "Notice to Creditors: Estate of Johannes Petrus van der Merwe",
      af: "Kennisgewing aan Krediteure: Boedel van Johannes Petrus van der Merwe",
    },
    category: "estates",
    publishDate: "15 Mar 2026",
    location: "Cape Town, Western Cape",
    referenceNumber: "EST-2026-0315",
    excerpt: {
      en: "Notice is hereby given that all persons having claims against the estate of the late Johannes Petrus van der Merwe must lodge their claims within 30 days.",
      af: "Kennis word hiermee gegee dat alle persone wat eise teen die boedel van die oorlede Johannes Petrus van der Merwe het, hul eise binne 30 dae moet indien.",
    },
    body: {
      en: "In the Estate of the late JOHANNES PETRUS VAN DER MERWE, Identity Number 5604125098083, who died on 12 February 2026, last resident at 45 Beach Road, Camps Bay, Cape Town. Notice is hereby given to all persons having claims against the estate to lodge such claims with the undersigned within thirty (30) days from the date of publication hereof. Master's Office: Cape Town. Estate Number: 024561/2026. Executor: Jansen & Associates Attorneys.",
      af: "In die Boedel van wyle JOHANNES PETRUS VAN DER MERWE, Identiteitsnommer 5604125098083, wat oorlede is op 12 Februarie 2026, laaste woonagtig te Strandweg 45, Kampsbaai, Kaapstad. Kennis word hiermee gegee aan alle persone wat eise teen die boedel het om sodanige eise by die ondergetekende in te dien binne dertig (30) dae vanaf die datum van publikasie hiervan. Kantoor van die Meester: Kaapstad. Boedelnommer: 024561/2026. Eksekuteur: Jansen & Medewerkers Prokureurs.",
    },
    publisher: "Jansen & Associates Attorneys",
    contactName: "P.J. Jansen",
    contactEmail: "estates@jansenlaw.co.za",
    contactPhone: "021 418 3000",
    deadline: "15 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      estateName: "Johannes Petrus van der Merwe",
      estateNumber: "024561/2026",
      idNumber: "5604125098083",
      mastersOffice: "Cape Town",
      dateOfDeath: "12 Feb 2026",
    },
  },
  {
    id: "3",
    title: {
      en: "Application for Liquor Licence: The Vineyard Restaurant",
      af: "Aansoek om Dranklisensie: The Vineyard Restaurant",
    },
    category: "liquor-licences",
    publishDate: "14 Mar 2026",
    location: "Stellenbosch, Western Cape",
    referenceNumber: "LIQ-2026-0314",
    excerpt: {
      en: "Notice of application for a liquor licence for a restaurant located at 123 Main Street, Stellenbosch. Objections may be lodged within 30 days.",
      af: "Kennisgewing van aansoek om 'n dranklisensie vir 'n restaurant geleë te Hoofstraat 123, Stellenbosch. Besware kan binne 30 dae ingedien word.",
    },
    body: {
      en: "Notice is hereby given that THE VINEYARD RESTAURANT (PTY) LTD intends to apply to the Stellenbosch Liquor Authority for the grant of a restaurant liquor licence in respect of premises situated at 123 Main Street, Stellenbosch, Western Cape. Any person having an interest in the application or who wishes to object thereto shall lodge written representations with the Stellenbosch Municipality within thirty (30) days from the date of this publication. Applicant: The Vineyard Restaurant (Pty) Ltd, Registration Number 2022/123456/07.",
      af: "Kennis word hiermee gegee dat THE VINEYARD RESTAURANT (EDMS) BPK van plan is om by die Stellenbosch Drankowerheid aansoek te doen om die toestaan van 'n restaurant dranklisensie ten opsigte van persele geleë te Hoofstraat 123, Stellenbosch, Wes-Kaap. Enige persoon wat 'n belang by die aansoek het of wat beswaar daartteen wil maak, moet binne dertig (30) dae vanaf die datum van hierdie publikasie skriftelike vertoë by die Stellenbosch Munisipaliteit indien. Aansoeker: The Vineyard Restaurant (Edms) Bpk, Registrasienommer 2022/123456/07.",
    },
    publisher: "The Vineyard Restaurant (Pty) Ltd",
    contactName: "Maria Botha",
    contactEmail: "info@vineyardrestaurant.co.za",
    contactPhone: "021 883 4500",
    deadline: "14 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      establishmentName: "The Vineyard Restaurant",
      municipality: "Stellenbosch Municipality",
      licenceType: "Restaurant Liquor Licence",
      companyRegistration: "2022/123456/07",
    },
  },
  {
    id: "4",
    title: {
      en: "Proposed Rezoning: Erf 1234, Sandton",
      af: "Voorgestelde Hersonering: Erf 1234, Sandton",
    },
    category: "town-planning",
    publishDate: "13 Mar 2026",
    location: "Sandton, Gauteng",
    referenceNumber: "TP-2026-0313",
    excerpt: {
      en: "Notice is given of an application for the rezoning of Erf 1234 from residential to commercial use. The public may inspect plans and submit objections.",
      af: "Kennis word gegee van 'n aansoek om die hersonering van Erf 1234 vanaf residensieel na kommersiële gebruik. Die publiek kan planne inspekteer en besware indien.",
    },
    body: {
      en: "NOTICE OF APPLICATION FOR AMENDMENT OF TOWN-PLANNING SCHEME. Notice is hereby given in terms of Section 56(1)(b)(i) of the Town-planning and Townships Ordinance, 1986, that the City of Johannesburg has received an application for the amendment of the Sandton Town-planning Scheme, 1979, by the rezoning of Erf 1234, Sandton, from 'Residential 1' to 'Business 1'. Particulars of the application will lie for inspection during normal office hours at the offices of the City Engineer, Civic Centre, Sandton. Objections to or representations in respect of the application must be lodged in writing with the City Manager within 28 days from the date of this notice.",
      af: "KENNISGEWING VAN AANSOEK OM WYSIGING VAN DORPSBEPLANNINGSKEMA. Kennis geskied hiermee ingevolge Artikel 56(1)(b)(i) van die Ordonnansie op Dorpsbeplanning en Dorpe, 1986, dat die Stad van Johannesburg 'n aansoek ontvang het vir die wysiging van die Sandton-dorpsbeplanningskema, 1979, deur die hersonering van Erf 1234, Sandton, vanaf 'Residensieel 1' na 'Besigheid 1'. Besonderhede van die aansoek lê ter insae gedurende gewone kantoorure by die kantore van die Stadsingenieur, Burgersentrum, Sandton. Besware teen of vertoë ten opsigte van die aansoek moet skriftelik by die Stadsbestuurder ingedien word binne 28 dae vanaf die datum van hierdie kennisgewing.",
    },
    publisher: "City of Johannesburg Metropolitan Municipality",
    contactName: "City Engineer",
    contactEmail: "townplanning@joburg.org.za",
    contactPhone: "011 375 5555",
    deadline: "10 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      municipality: "City of Johannesburg",
      propertyDescription: "Erf 1234, Sandton",
      currentZoning: "Residential 1",
      proposedZoning: "Business 1",
      applicant: "Sandton Developments (Pty) Ltd",
    },
  },
  {
    id: "5",
    title: {
      en: "Petroleum Products Retail Licence Application: Quick Fuel Durban",
      af: "Petroleumprodukte Kleinhandelslisensie Aansoek: Quick Fuel Durban",
    },
    category: "business-licence",
    publishDate: "12 Mar 2026",
    location: "Durban, KwaZulu-Natal",
    referenceNumber: "PET-2026-0312",
    excerpt: {
      en: "Application for a petroleum products retail licence for premises at 567 North Coast Road, Durban. Objections must be lodged within 20 working days.",
      af: "Aansoek om 'n petroleumprodukte kleinhandelslisensie vir persele te Noordkusweg 567, Durban. Besware moet binne 20 werksdae ingedien word.",
    },
    body: {
      en: "Notice is hereby given in terms of Section 2A(8) of the Petroleum Products Act, 1977 (Act No. 120 of 1977), that QUICK FUEL (PTY) LTD has made application for a licence to operate a Retail Licence for the sale of petroleum products at 567 North Coast Road, Durban North, KwaZulu-Natal. Any person, body or institution may within twenty (20) working days from the date of this publication, lodge with the Controller: Pretoria, written representations in favour of or against the application. The application is available for inspection at the offices of the applicant and the Controller during normal office hours.",
      af: "Kennis word hiermee gegee ingevolge Artikel 2A(8) van die Wet op Petroleumprodukte, 1977 (Wet No. 120 van 1977), dat QUICK FUEL (EDMS) BPK aansoek gedoen het om 'n lisensie om 'n Kleinhandelslisensie vir die verkoop van petroleumprodukte te bedryf te Noordkusweg 567, Durban-Noord, KwaZulu-Natal. Enige persoon, liggaam of instelling kan binne twintig (20) werksdae vanaf die datum van hierdie publikasie, skriftelike vertoë ten gunste van of teen die aansoek by die Beheerder: Pretoria indien. Die aansoek is beskikbaar vir inspeksie by die kantore van die aansoeker en die Beheerder gedurende gewone kantoorure.",
    },
    publisher: "Quick Fuel (Pty) Ltd",
    contactName: "Legal & Compliance Department",
    contactEmail: "legal@quickfuel.co.za",
    contactPhone: "031 564 7800",
    deadline: "8 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      licenceType: "Retail Licence (Petroleum Products)",
      applicant: "Quick Fuel (Pty) Ltd",
      applicationNumber: "PET-2026-0312",
      premisesAddress: "567 North Coast Road, Durban North",
    },
  },
  {
    id: "6",
    title: {
      en: "Environmental Impact Assessment: Proposed Mining Operation",
      af: "Omgewingsimpakbepaling: Voorgestelde Mynbedrywigheid",
    },
    category: "environmental",
    publishDate: "11 Mar 2026",
    location: "Limpopo",
    referenceNumber: "EIA-2026-0311",
    excerpt: {
      en: "Notice of environmental impact assessment for a proposed mining operation in Limpopo Province. Comments may be submitted within 30 days.",
      af: "Kennisgewing van omgewingsimpakbepaling vir 'n voorgestelde mynbedrywigheid in Limpopo Provinsie. Kommentaar kan binne 30 dae ingedien word.",
    },
    body: {
      en: "NOTICE OF ENVIRONMENTAL IMPACT ASSESSMENT. Northern Mining (Pty) Ltd intends to apply for environmental authorisation for a proposed open-cast mining operation on Portion 5 of Farm Rooiboklaagte 123, Limpopo Province. The proposed activity will involve the extraction of iron ore and associated infrastructure development. An Environmental Impact Assessment is being undertaken in terms of the National Environmental Management Act, 1998. Interested and Affected Parties are invited to submit written comments to the Environmental Assessment Practitioner within thirty (30) days from the date of this notice. Copies of the draft EIA report are available for inspection at the Polokwane Public Library and on the project website www.northernmining-eia.co.za.",
      af: "KENNISGEWING VAN OMGEWINGSIMPAKBEPALING. Northern Mining (Edms) Bpk is van plan om omgewingsmagtiging aan te soek vir 'n voorgestelde oopgroef mynbedrywigheid op Gedeelte 5 van Plaas Rooiboklaagte 123, Limpopo Provinsie. Die voorgestelde aktiwiteit sal die ontginning van ystererts en geassosieerde infrastruktuurontwikkeling behels. 'n Omgewingsimpakbepaling word onderneem ingevolge die Nasionale Wet op Omgewingsbestuur, 1998. Belanghebbende en Geaffekteerde Partye word genooi om skriftelike kommentaar aan die Omgewingsevalueringspraktisyn in te dien binne dertig (30) dae vanaf die datum van hierdie kennisgewing. Afskrifte van die konsep-OIB verslag is beskikbaar vir inspeksie by die Polokwane Openbare Biblioteek en op die projekwebwerf www.northernmining-eia.co.za.",
    },
    publisher: "Northern Mining (Pty) Ltd",
    contactName: "Environmental Compliance Consultants",
    contactEmail: "eia@ecc.co.za",
    contactPhone: "015 291 4500",
    deadline: "10 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      applicant: "Northern Mining (Pty) Ltd",
      activityType: "Open-cast Mining",
      location: "Portion 5 of Farm Rooiboklaagte 123, Limpopo",
      applicationNumber: "EIA-2026-0311",
    },
  },
];
