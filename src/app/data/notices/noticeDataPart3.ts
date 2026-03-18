/**
 * Nova Public Notices Portal - Notice Data Part 3
 * Categories 14-25 (Final 36 notices)
 */

import { Notice } from "./noticeData";

export const noticesPart3: Notice[] = [
  // Category 14: Lost Documents (3 notices)
  {
    id: "lost-001",
    title: {
      en: "Lost Share Certificate - Declaration of Loss",
      af: "Verlore Aandele Sertifikaat - Verklaring van Verlies",
    },
    category: "lost-documents",
    publishDate: "09 Mar 2026",
    location: "Johannesburg, Gauteng",
    referenceNumber: "LOST-2026-0123",
    excerpt: {
      en: "Notice of lost share certificate - application for replacement.",
      af: "Kennisgewing van verlore aandele sertifikaat - aansoek vir vervanging.",
    },
    body: {
      en: "Notice is hereby given that the original Share Certificate No. 12345 for 1,000 ordinary shares in ABC HOLDINGS LIMITED (Registration: 2005/123456/06) registered in the name of JOHN HENDRIK SMIT (ID: 7104155098082) has been lost. Application has been made for a replacement certificate. Any person having a claim to the said shares must notify the Company Secretary within 21 days. Company Secretary: XYZ Corporate Services, 45 Commissioner Street, Johannesburg. Tel: 011 234 5678.",
      af: "Kennis word hiermee gegee dat die oorspronklike Aandele Sertifikaat No. 12345 vir 1,000 gewone aandele in ABC HOLDINGS BEPERK (Registrasie: 2005/123456/06) geregistreer in die naam van JOHN HENDRIK SMIT (ID: 7104155098082) verlore is. Aansoek is gedoen vir 'n vervangings sertifikaat. Enige persoon met 'n eis op genoemde aandele moet die Maatskappy Sekretaris in kennis stel binne 21 dae. Maatskappy Sekretaris: XYZ Korporatiewe Dienste, Kommissarisstraat 45, Johannesburg. Tel: 011 234 5678.",
    },
    publisher: "XYZ Corporate Services",
    contactName: "Company Secretary",
    contactEmail: "companysec@xyzcorp.co.za",
    contactPhone: "011 234 5678",
    deadline: "30 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      certificateNumber: "12345",
      shareQuantity: "1,000 ordinary shares",
      companyRegistration: "2005/123456/06",
    },
  },

  {
    id: "lost-002",
    title: {
      en: "Lost Title Deed - Property Ownership Document",
      af: "Verlore Titelakte - Eiendom Eienaarskapdokument",
    },
    category: "lost-documents",
    publishDate: "11 Mar 2026",
    location: "Cape Town, Western Cape",
    referenceNumber: "LOST-2026-0145",
    excerpt: {
      en: "Declaration of lost original title deed for Erf 4567, Gardens, Cape Town.",
      af: "Verklaring van verlore oorspronklike titelakte vir Erf 4567, Gardens, Kaapstad.",
    },
    body: {
      en: "I, MARIA ELIZABETH VAN DER MERWE (ID: 6508125098083), hereby declare that I have lost the original Title Deed (T12345/2010) to Erf 4567, 23 Rose Street, Gardens, Cape Town. The property is registered in my name at the Deeds Office, Cape Town. Application will be made for a certified copy of the title deed. Any person with information regarding the lost document should contact my conveyancing attorneys. Attorneys: Cape Conveyancers Inc., Tel: 021 424 7000.",
      af: "Ek, MARIA ELIZABETH VAN DER MERWE (ID: 6508125098083), verklaar hiermee dat ek die oorspronklike Titelakte (T12345/2010) vir Erf 4567, Roosstraat 23, Gardens, Kaapstad verloor het. Die eiendom is in my naam geregistreer by die Akteskantoor, Kaapstad. Aansoek sal gedoen word vir 'n gesertifiseerde kopie van die titelakte. Enige persoon met inligting rakende die verlore dokument moet my transport prokureurs kontak. Prokureurs: Cape Conveyancers Ing., Tel: 021 424 7000.",
    },
    publisher: "Cape Conveyancers Inc.",
    contactName: "Conveyancing Attorney - P. Jacobs",
    contactEmail: "deeds@capeconveyancers.co.za",
    contactPhone: "021 424 7000",
    deadline: "N/A",
    status: "published",
    accessPolicy: "public",
    fields: {
      titleDeedNumber: "T12345/2010",
      erfNumber: "Erf 4567",
      address: "23 Rose Street, Gardens, Cape Town",
    },
  },

  {
    id: "lost-003",
    title: {
      en: "Lost Vehicle Registration Document (License Disc Book)",
      af: "Verlore Voertuig Registrasie Dokument (Lisensieskyf Boek)",
    },
    category: "lost-documents",
    publishDate: "13 Mar 2026",
    location: "Pretoria, Gauteng",
    referenceNumber: "LOST-2026-0167",
    excerpt: {
      en: "Notice of lost vehicle registration papers - application for duplicate.",
      af: "Kennisgewing van verlore voertuig registrasie papiere - aansoek vir duplikaat.",
    },
    body: {
      en: "Notice is hereby given that the vehicle registration document (license disc book) for motor vehicle Registration Number: ABC 123 GP, a 2020 Toyota Hilux, has been lost by the owner THABO MICHAEL MOLEFE (ID: 8506085098081). Application has been made to the Gauteng Licencing Department for a duplicate registration document. Any person who finds the original document is requested to return it to the nearest Licencing Department or contact: 012 358 1234.",
      af: "Kennis word hiermee gegee dat die voertuig registrasie dokument (lisensieskyf boek) vir motorvoertuig Registrasienommer: ABC 123 GP, 'n 2020 Toyota Hilux, verloor is deur die eienaar THABO MICHAEL MOLEFE (ID: 8506085098081). Aansoek is gedoen by die Gauteng Lisensiëring Departement vir 'n duplikaat registrasie dokument. Enige persoon wat die oorspronklike dokument vind word versoek om dit terug te besorg na die naaste Lisensiëring Departement of kontak: 012 358 1234.",
    },
    publisher: "Gauteng Department of Transport",
    contactName: "Licensing Services",
    contactEmail: "licensing@gauteng.gov.za",
    contactPhone: "012 358 1234",
    deadline: "N/A",
    status: "published",
    accessPolicy: "public",
    fields: {
      vehicleRegistration: "ABC 123 GP",
      vehicleDescription: "2020 Toyota Hilux",
      ownerID: "8506085098081",
    },
  },

  // Category 15: OIS Environmental Impact Studies (3 notices)
  {
    id: "eis-001",
    title: {
      en: "Environmental Impact Assessment - Mining Project",
      af: "Omgewingsimpak Assessering - Mynbouprojek",
    },
    category: "ois-environmental",
    publishDate: "07 Mar 2026",
    location: "Limpopo Province",
    referenceNumber: "EIS-2026-0234",
    excerpt: {
      en: "Public participation period for proposed platinum mine environmental assessment.",
      af: "Publieke deelname periode vir voorgestelde platinum myn omgewings assessering.",
    },
    body: {
      en: "Notice of Environmental Impact Assessment: MINERAL RESOURCES (PTY) LTD proposes to establish an open-cast platinum mine on Portion 12 of Farm Grootfontein 456 LQ, Limpopo Province. Draft Environmental Impact Assessment and Environmental Management Programme available for public comment. Public meeting: 28 March 2026, 18:00 at Mokopane Community Hall. Written comments to environmental consultant by 30 April 2026. DEA Reference: 14/12/16/3/3/2/EIS-2026-0234.",
      af: "Kennisgewing van Omgewingsimpak Assessering: MINERAL RESOURCES (EDMS) BPK stel voor om 'n oopgroef platinum myn te vestig op Gedeelte 12 van Plaas Grootfontein 456 LQ, Limpopo Provinsie. Konsep Omgewingsimpak Assessering en Omgewingsbestuurs Program beskikbaar vir publieke kommentaar. Publieke vergadering: 28 Maart 2026, 18:00 by Mokopane Gemeenskapsaal. Skriftelike kommentare aan omgewingskonsultant teen 30 April 2026. DEA Verwysing: 14/12/16/3/3/2/EIS-2026-0234.",
    },
    publisher: "Environmental Consultants CC",
    contactName: "EIA Practitioner - Dr. K. Msimang",
    contactEmail: "eia@enviroconsult.co.za",
    contactPhone: "015 297 8000",
    deadline: "30 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      projectType: "Platinum mine (open-cast)",
      location: "Farm Grootfontein 456 LQ, Limpopo",
      publicMeeting: "28 Mar 2026 18:00, Mokopane Community Hall",
      DEAReference: "14/12/16/3/3/2/EIS-2026-0234",
    },
  },

  {
    id: "eis-002",
    title: {
      en: "Scoping Report - Wind Farm Development",
      af: "Omvang Verslag - Windplaas Ontwikkeling",
    },
    category: "ois-environmental",
    publishDate: "09 Mar 2026",
    location: "Eastern Cape",
    referenceNumber: "EIS-2026-0267",
    excerpt: {
      en: "30-day comment period on scoping report for 200MW wind energy facility.",
      af: "30-dae kommentaar periode op omvang verslag vir 200MW wind energie fasiliteit.",
    },
    body: {
      en: "GREEN ENERGY SOLUTIONS (PTY) LTD announces a 30-day public review period for the Draft Scoping Report for a proposed 200MW Wind Energy Facility near Cookhouse, Eastern Cape. The facility will consist of up to 60 wind turbines. Reports available at Cookhouse Library and online at www.greenenergysolutions.co.za/eia. Register as Interested & Affected Party. Comments by 9 April 2026 to info@enviroconsultants.co.za. NEAS Reference: 14/12/16/3/3/1/EIS-2026-0267.",
      af: "GREEN ENERGY SOLUTIONS (EDMS) BPK kondig 'n 30-dae publieke hersiening periode aan vir die Konsep Omvang Verslag vir 'n voorgestelde 200MW Wind Energie Fasiliteit naby Cookhouse, Oos-Kaap. Die fasiliteit sal bestaan uit tot 60 wind turbines. Verslae beskikbaar by Cookhouse Biblioteek en aanlyn by www.greenenergysolutions.co.za/eia. Registreer as Belangstellende & Geaffekteerde Party. Kommentare teen 9 April 2026 aan info@enviroconsultants.co.za. NEAS Verwysing: 14/12/16/3/3/1/EIS-2026-0267.",
    },
    publisher: "Green Energy Solutions (Pty) Ltd",
    contactName: "Project Manager - A. Pieterse",
    contactEmail: "projects@greenenergy.co.za",
    contactPhone: "041 585 9000",
    deadline: "09 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      projectType: "Wind Energy Facility (200MW)",
      turbineCount: "Up to 60",
      location: "Near Cookhouse, Eastern Cape",
      NEASReference: "14/12/16/3/3/1/EIS-2026-0267",
    },
  },

  {
    id: "eis-003",
    title: {
      en: "Environmental Authorization Issued - Shopping Mall",
      af: "Omgewings Magtiging Uitgereik - Winkelsentrum",
    },
    category: "ois-environmental",
    publishDate: "11 Mar 2026",
    location: "Polokwane, Limpopo",
    referenceNumber: "EIS-2026-0289",
    excerpt: {
      en: "Department of Environmental Affairs issues authorization for retail development.",
      af: "Departement van Omgewingsake reik magtiging uit vir kleinhandel ontwikkeling.",
    },
    body: {
      en: "The Department of Environmental Affairs, Limpopo Province, hereby gives notice that Environmental Authorization has been issued to RETAIL DEVELOPMENTS (PTY) LTD for the development of a regional shopping centre on Erf 1234, Polokwane. The authorization is subject to conditions contained in the Environmental Management Programme. Appeal period: 20 days from date of publication. Appeals to MEC for Environmental Affairs. Authorization Number: ENV-AUTH-2026-0289.",
      af: "Die Departement van Omgewingsake, Limpopo Provinsie, gee hiermee kennis dat Omgewings Magtiging uitgereik is aan RETAIL DEVELOPMENTS (EDMS) BPK vir die ontwikkeling van 'n streek winkelsentrum op Erf 1234, Polokwane. Die magtiging is onderhewig aan voorwaardes vervat in die Omgewingsbestuurs Program. Appèl periode: 20 dae vanaf datum van publikasie. Appèlle aan LUR vir Omgewingsake. Magtiging Nommer: ENV-AUTH-2026-0289.",
    },
    publisher: "Limpopo Dept of Environmental Affairs",
    contactName: "Environmental Officer",
    contactEmail: "environment@limpopo.gov.za",
    contactPhone: "015 295 6000",
    deadline: "31 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      projectType: "Regional shopping centre",
      authorizationNumber: "ENV-AUTH-2026-0289",
      appealPeriod: "20 days",
      erfNumber: "Erf 1234, Polokwane",
    },
  },

  // Category 16: Pension Provident Funds (3 notices)
  {
    id: "pension-001",
    title: {
      en: "Amendment to Pension Fund Rules - Member Notice",
      af: "Wysiging van Pensioenfonds Reëls - Lede Kennisgewing",
    },
    category: "pension-provident",
    publishDate: "08 Mar 2026",
    location: "Johannesburg, Gauteng",
    referenceNumber: "PEN-2026-0178",
    excerpt: {
      en: "Notice of proposed amendments to retirement fund rules - member consultation period.",
      af: "Kennisgewing van voorgestelde wysigings aan aftreefonds reëls - lede konsultasie periode.",
    },
    body: {
      en: "The ABC RETIREMENT FUND (Registration No. 12/8/12345) hereby notifies all members of proposed amendments to the Fund Rules. Key changes: 1) Increase in employer contribution from 10% to 12%, 2) Introduction of additional voluntary contributions option, 3) Updated withdrawal benefit calculations. Members may obtain copies of proposed amendments from the Fund Administrator. Comment period: 30 days. Objections to Principal Officer by 8 April 2026. Email: principalofficer@abcfund.co.za.",
      af: "Die ABC AFTREEFONDS (Registrasie No. 12/8/12345) stel hiermee alle lede in kennis van voorgestelde wysigings aan die Fonds Reëls. Sleutelveranderings: 1) Verhoging in werkgewer bydrae van 10% tot 12%, 2) Inleiding van addisionele vrywillige bydraes opsie, 3) Opgedateerde onttrekkingsvoordeel berekeninge. Lede kan kopieë van voorgestelde wysigings verkry van die Fonds Administrateur. Kommentaar periode: 30 dae. Besware aan Hoofbeampte teen 8 April 2026. E-pos: principalofficer@abcfund.co.za.",
    },
    publisher: "ABC Retirement Fund",
    contactName: "Principal Officer - M. Nkosi",
    contactEmail: "principalofficer@abcfund.co.za",
    contactPhone: "011 881 7000",
    deadline: "08 Apr 2026",
    status: "published",
    accessPolicy: "account_required",
    fields: {
      fundRegistration: "12/8/12345",
      keyChanges: "Contribution increase, Voluntary contributions, Benefit calculations",
    },
  },

  {
    id: "pension-002",
    title: {
      en: "Unclaimed Pension Benefits - Tracing Members",
      af: "Onopgeëiste Pensioenvoordele - Naspring van Lede",
    },
    category: "pension-provident",
    publishDate: "10 Mar 2026",
    location: "Cape Town, Western Cape",
    referenceNumber: "PEN-2026-0201",
    excerpt: {
      en: "Retirement fund seeking to trace former members with unclaimed benefits.",
      af: "Aftreefonds soek om vorige lede na te spoor met onopgeëiste voordele.",
    },
    body: {
      en: "The XYZ PROVIDENT FUND hereby gives notice that it holds unclaimed benefits for the following former members who exited employment between 2015-2020: JOHN MTHEMBU, SARAH PIETERSE, THABO DLAMINI (and 47 others - full list available). Total unclaimed amount: R2.4 million. Members or their beneficiaries should contact the Fund Administrator urgently. Unclaimed benefits will be transferred to the Pension Funds Unclaimed Benefits Fund after statutory period. Contact: 021 419 8000 or unclaimed@xyzfund.co.za.",
      af: "Die XYZ VOORSORGFONDS gee hiermee kennis dat dit onopgeëiste voordele hou vir die volgende voormalige lede wat diens verlaat het tussen 2015-2020: JOHN MTHEMBU, SARAH PIETERSE, THABO DLAMINI (en 47 ander - volledige lys beskikbaar). Totale onopgeëiste bedrag: R2.4 miljoen. Lede of hul begunstigdes moet die Fonds Administrateur dringend kontak. Onopgeëiste voordele sal oorgedra word aan die Pensioenfondse Onopgeëiste Voordele Fonds na statutêre periode. Kontak: 021 419 8000 of unclaimed@xyzfund.co.za.",
    },
    publisher: "XYZ Provident Fund",
    contactName: "Fund Administrator - K. Singh",
    contactEmail: "unclaimed@xyzfund.co.za",
    contactPhone: "021 419 8000",
    deadline: "N/A",
    status: "published",
    accessPolicy: "public",
    fields: {
      unclaimedAmount: "R2,400,000",
      memberCount: "50 former members",
      exitPeriod: "2015-2020",
    },
  },

  {
    id: "pension-003",
    title: {
      en: "Surplus Distribution Proposal - Fund Members",
      af: "Surplus Distribusie Voorstel - Fonds Lede",
    },
    category: "pension-provident",
    publishDate: "12 Mar 2026",
    location: "Pretoria, Gauteng",
    referenceNumber: "PEN-2026-0234",
    excerpt: {
      en: "Pension fund proposes distribution of actuarial surplus to members and employer.",
      af: "Pensioenfonds stel distribusie van aktuariële surplus voor aan lede en werkgewer.",
    },
    body: {
      en: "SOUTH AFRICAN TRANSPORT PENSION FUND (Reg: 12/8/67890) notifies members of a proposed surplus distribution following the 2025 actuarial valuation which revealed a surplus of R150 million. Proposed allocation: 60% to member accounts, 30% to employer premium holiday, 10% retained as reserve. The proposal requires approval from the Financial Sector Conduct Authority (FSCA). Members have 60 days to object. Public hearing: 5 May 2026 at Fund Offices, Pretoria. Reference: FSCA/SURPLUS/2026/234.",
      af: "SUID-AFRIKAANSE VERVOER PENSIOENFONDS (Reg: 12/8/67890) stel lede in kennis van 'n voorgestelde surplus distribusie na die 2025 aktuariële waardasie wat 'n surplus van R150 miljoen getoon het. Voorgestelde toewysing: 60% aan lede rekeninge, 30% aan werkgewer premie vakansie, 10% behou as reserwe. Die voorstel vereis goedkeuring van die Finansiële Sektor Gedragsowerheid (FSCA). Lede het 60 dae om te beswaar. Publieke verhoor: 5 Mei 2026 by Fonds Kantore, Pretoria. Verwysing: FSCA/SURPLUS/2026/234.",
    },
    publisher: "SA Transport Pension Fund",
    contactName: "Principal Officer - T. Mahlangu",
    contactEmail: "principalofficer@satransportfund.co.za",
    contactPhone: "012 334 6000",
    deadline: "11 May 2026",
    status: "published",
    accessPolicy: "account_required",
    fields: {
      surplusAmount: "R150,000,000",
      memberAllocation: "60%",
      employerAllocation: "30%",
      reserveAllocation: "10%",
    },
  },

  // Continue with remaining 9 categories (27 notices)...
  // Due to file size limits, will create these in next continuation
];

export default noticesPart3;
