/**
 * Nova Public Notices Portal - Final Notice Data
 * Categories 17-25 (Final 27 notices)
 * 
 * Completes the full database of 75+ notices across all 25 categories
 */

import { Notice } from "./noticeData";

export const noticesFinal: Notice[] = [
  // Category 17: Public Auction (3 notices)
  {
    id: "auction-001",
    title: {
      en: "Public Auction - Residential Property",
      af: "Publieke Veiling - Residensiële Eiendom",
    },
    category: "public-auction",
    publishDate: "06 Mar 2026",
    location: "Sandton, Gauteng",
    referenceNumber: "AUC-2026-0145",
    excerpt: {
      en: "Luxury 4-bedroom home to be sold by public auction on 15 April 2026.",
      af: "Luukse 4-slaapkamer huis te koop by publieke veiling op 15 April 2026.",
    },
    body: {
      en: "PUBLIC AUCTION: Property situated at 45 Sandown Road, Sandton (Erf 3456), comprising 4 bedrooms, 3 bathrooms, double garage, swimming pool on 1200m² stand. Auction Date: Tuesday, 15 April 2026 at 11:00. Venue: On-site. Reserve Price: R4.5 million. Viewing: By appointment with estate agent. Auctioneer: Premium Auctions (Pty) Ltd. Tel: 011 883 5000. Conditions of sale available from auctioneers. 10% deposit payable on fall of hammer.",
      af: "PUBLIEKE VEILING: Eiendom geleë te Sandownweg 45, Sandton (Erf 3456), bestaande uit 4 slaapkamers, 3 badkamers, dubbel motorhuis, swembad op 1200m² erf. Veiling Datum: Dinsdag, 15 April 2026 om 11:00. Plek: Op die perseel. Reserwe Prys: R4.5 miljoen. Besigtiging: Per afspraak met eiendomsagent. Afslaer: Premium Veilings (Edms) Bpk. Tel: 011 883 5000. Voorwaardes van verkoop beskikbaar van afslaers. 10% deposito betaalbaar by val van hamer.",
    },
    publisher: "Premium Auctions (Pty) Ltd",
    contactName: "Auctioneer - D. van Rensburg",
    contactEmail: "auctions@premiumauctions.co.za",
    contactPhone: "011 883 5000",
    deadline: "15 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      propertyAddress: "45 Sandown Road, Sandton",
      auctionDate: "15 Apr 2026 11:00",
      reservePrice: "R4,500,000",
      depositRequired: "10%",
    },
  },

  {
    id: "auction-002",
    title: {
      en: "Farm Equipment Auction - Bankruptcy Sale",
      af: "Plaasgereedskap Veiling - Bankrotskap Verkoop",
    },
    category: "public-auction",
    publishDate: "08 Mar 2026",
    location: "Bethlehem, Free State",
    referenceNumber: "AUC-2026-0178",
    excerpt: {
      en: "Liquidation sale of farm machinery and livestock by court-appointed liquidator.",
      af: "Likwidasie verkoop van plaasmasjinerie en lewende hawe deur hof-aangestelde likwidateur.",
    },
    body: {
      en: "LIQUIDATION AUCTION by order of the Master of the High Court: Farm Weltevreden 234 FS. To be sold: 2 tractors (John Deere, Massey Ferguson), combine harvester, livestock (50 cattle, 200 sheep), farming implements, workshop tools. Auction: Saturday, 29 March 2026, 10:00 on the farm (15km from Bethlehem on R26). Viewing: 28 March 2026 08:00-16:00. Cash or bank-guaranteed cheque. No reserve. Auctioneer: Freestate Auctions. Tel: 058 303 5000. Estate: 001234/2025.",
      af: "LIKWIDASIE VEILING op las van die Meester van die Hooggeregshof: Plaas Weltevreden 234 VS. Te koop: 2 trekkers (John Deere, Massey Ferguson), stroper, lewende hawe (50 beeste, 200 skape), plaasimplemente, werkswinkel gereedskap. Veiling: Saterdag, 29 Maart 2026, 10:00 op die plaas (15km vanaf Bethlehem op R26). Besigtiging: 28 Maart 2026 08:00-16:00. Kontant of bank-gewaarborgde tjek. Geen reserwe. Afslaer: Vrystaat Veilings. Tel: 058 303 5000. Boedel: 001234/2025.",
    },
    publisher: "Freestate Auctions",
    contactName: "Auctioneer - J. Kruger",
    contactEmail: "auctions@freestateauctions.co.za",
    contactPhone: "058 303 5000",
    deadline: "29 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      auctionType: "Liquidation Sale",
      estateNumber: "001234/2025",
      noReserve: "Yes",
      viewingDate: "28 Mar 2026 08:00-16:00",
    },
  },

  {
    id: "auction-003",
    title: {
      en: "Vehicle Auction - Repossessed Motor Vehicles",
      af: "Voertuig Veiling - Teruggenome Motorvoertuie",
    },
    category: "public-auction",
    publishDate: "10 Mar 2026",
    location: "Durban, KwaZulu-Natal",
    referenceNumber: "AUC-2026-0201",
    excerpt: {
      en: "Bank repossessed vehicles to be sold at public auction - 35 units available.",
      af: "Bank teruggenome voertuie te koop by publieke veiling - 35 eenhede beskikbaar.",
    },
    body: {
      en: "VEHICLE AUCTION: 35 bank repossessed vehicles including sedans, bakkies, SUVs (2018-2023 models). Brands: Toyota, VW, Ford, Nissan, Mercedes-Benz. Auction: Wednesday, 20 March 2026, 10:00 at Durban Auction House, 67 Warehouse Road, Mobeni. Viewing: Monday-Tuesday 18-19 March 09:00-16:00. Finance available subject to approval. All vehicles sold voetstoots. Bidder registration from 09:00 on auction day. Auctioneer: Auto Auctions KZN. Tel: 031 465 8000.",
      af: "VOERTUIG VEILING: 35 bank teruggenome voertuie insluitend sedans, bakkies, SUVs (2018-2023 modelle). Handelsmerke: Toyota, VW, Ford, Nissan, Mercedes-Benz. Veiling: Woensdag, 20 Maart 2026, 10:00 by Durban Veilingshuis, Pakhuisweg 67, Mobeni. Besigtiging: Maandag-Dinsdag 18-19 Maart 09:00-16:00. Finansiering beskikbaar onderhewig aan goedkeuring. Alle voertuie verkoop voetstoots. Bieder registrasie vanaf 09:00 op veilings dag. Afslaer: Auto Veilings KZN. Tel: 031 465 8000.",
    },
    publisher: "Auto Auctions KZN",
    contactName: "Sales Manager - P. Naidoo",
    contactEmail: "sales@autoauctions.co.za",
    contactPhone: "031 465 8000",
    deadline: "20 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      vehicleCount: "35 units",
      auctionDate: "20 Mar 2026 10:00",
      viewingDates: "18-19 Mar 2026 09:00-16:00",
      condition: "Voetstoots (as-is)",
    },
  },

  // Category 18: Re-registrations (3 notices)
  {
    id: "rereg-001",
    title: {
      en: "Company Re-registration - Change of Legal Entity",
      af: "Maatskappy Her-registrasie - Verandering van Regspersoon",
    },
    category: "re-registrations",
    publishDate: "07 Mar 2026",
    location: "Johannesburg, Gauteng",
    referenceNumber: "REREG-2026-0134",
    excerpt: {
      en: "Close Corporation converting to Private Company - re-registration notice.",
      af: "Beslote Korporasie omskakel na Privaat Maatskappy - her-registrasie kennisgewing.",
    },
    body: {
      en: "Notice of Re-registration: TECH SOLUTIONS CC (Registration: CK2010/123456/23) has been re-registered as TECH SOLUTIONS (PTY) LTD (Registration: 2026/123456/07) in terms of Section 14 of the Companies Act. All rights, obligations, and contracts remain unchanged. The conversion took effect on 1 March 2026. New share capital: 1000 ordinary shares. Directors: Same as previous members. Registered Office: 45 Rivonia Road, Sandton. Contact: companysec@techsolutions.co.za.",
      af: "Kennisgewing van Her-registrasie: TECH SOLUTIONS BK (Registrasie: CK2010/123456/23) is her-geregistreer as TECH SOLUTIONS (EDMS) BPK (Registrasie: 2026/123456/07) ingevolge Artikel 14 van die Maatskappywet. Alle regte, verpligtinge, en kontrakte bly onveranderd. Die omsetting het in werking getree op 1 Maart 2026. Nuwe aandelekapitaal: 1000 gewone aandele. Direkteure: Dieselfde as vorige lede. Geregistreerde Kantoor: Rivoniaweg 45, Sandton. Kontak: companysec@techsolutions.co.za.",
    },
    publisher: "Tech Solutions (Pty) Ltd",
    contactName: "Company Secretary",
    contactEmail: "companysec@techsolutions.co.za",
    contactPhone: "011 234 7000",
    deadline: "N/A",
    status: "published",
    accessPolicy: "public",
    fields: {
      oldRegistration: "CK2010/123456/23 (CC)",
      newRegistration: "2026/123456/07 (Pty Ltd)",
      effectiveDate: "01 Mar 2026",
    },
  },

  {
    id: "rereg-002",
    title: {
      en: "Cooperative Re-registration - New Legislation Compliance",
      af: "Koöperatief Her-registrasie - Nuwe Wetgewing Voldoening",
    },
    category: "re-registrations",
    publishDate: "09 Mar 2026",
    location: "Cape Town, Western Cape",
    referenceNumber: "REREG-2026-0156",
    excerpt: {
      en: "Agricultural cooperative re-registering under Cooperatives Act 14 of 2005.",
      af: "Landbou koöperatief her-registreer onder Koöperatiewe Wet 14 van 2005.",
    },
    body: {
      en: "WINELANDS FARMERS COOPERATIVE LTD (Old Reg: Co-op 45/1985) hereby notifies members and stakeholders of its re-registration under the Cooperatives Act 14 of 2005. New Registration Number: COOP-2026-WC-156. The cooperative's constitution has been updated to comply with current legislation. All membership rights preserved. Members must sign new membership agreements by 30 June 2026. Annual General Meeting: 15 May 2026 to approve updated constitution. Contact: secretary@winelandscoop.co.za.",
      af: "WINELANDS BOERE KOÖPERATIEF BPK (Ou Reg: Co-op 45/1985) stel hiermee lede en belanghebbendes in kennis van sy her-registrasie onder die Koöperatiewe Wet 14 van 2005. Nuwe Registrasie Nommer: COOP-2026-WC-156. Die koöperatief se grondwet is opgedateer om te voldoen aan huidige wetgewing. Alle lidmaatskap regte behou. Lede moet nuwe lidmaatskap ooreenkomste teken teen 30 Junie 2026. Jaarlikse Algemene Vergadering: 15 Mei 2026 om opgedateerde grondwet goed te keur. Kontak: secretary@winelandscoop.co.za.",
    },
    publisher: "Winelands Farmers Cooperative Ltd",
    contactName: "Secretary - A. van der Merwe",
    contactEmail: "secretary@winelandscoop.co.za",
    contactPhone: "021 875 6000",
    deadline: "30 Jun 2026",
    status: "published",
    accessPolicy: "account_required",
    fields: {
      oldRegistration: "Co-op 45/1985",
      newRegistration: "COOP-2026-WC-156",
      agmDate: "15 May 2026",
    },
  },

  {
    id: "rereg-003",
    title: {
      en: "NPO Re-registration - Annual Compliance",
      af: "NPO Her-registrasie - Jaarlikse Voldoening",
    },
    category: "re-registrations",
    publishDate: "11 Mar 2026",
    location: "Pretoria, Gauteng",
    referenceNumber: "REREG-2026-0178",
    excerpt: {
      en: "Non-Profit Organization annual re-registration and financial reporting.",
      af: "Nie-Winsgewende Organisasie jaarlikse her-registrasie en finansiële verslagdoening.",
    },
    body: {
      en: "CHILDREN'S WELFARE NPO (Registration: NPO 045-678) has completed its annual re-registration with the Department of Social Development for the 2026/2027 financial year. Updated registration certificate and annual financial statements are available from the NPO office. All donors and beneficiaries are assured of continued compliance with NPO Act requirements. Tax-exemption status: Confirmed (Section 18A approved). Contact for donation receipts: finance@childrenswelfare.org.za. NPO Number: 045-678 (Valid until 28 Feb 2027).",
      af: "KINDERWELSYN NPO (Registrasie: NPO 045-678) het sy jaarlikse her-registrasie voltooi by die Departement van Maatskaplike Ontwikkeling vir die 2026/2027 finansiële jaar. Opgedateerde registrasie sertifikaat en jaarlikse finansiële state is beskikbaar van die NPO kantoor. Alle skenkers en begunstigdes word verseker van voortgesette voldoening aan NPO Wet vereistes. Belasting-vrystelling status: Bevestig (Artikel 18A goedgekeur). Kontak vir skenking kwitansies: finance@childrenswelfare.org.za. NPO Nommer: 045-678 (Geldig tot 28 Feb 2027).",
    },
    publisher: "Children's Welfare NPO",
    contactName: "Executive Director - S. Mahlangu",
    contactEmail: "director@childrenswelfare.org.za",
    contactPhone: "012 323 8000",
    deadline: "N/A",
    status: "published",
    accessPolicy: "public",
    fields: {
      npoNumber: "NPO 045-678",
      validUntil: "28 Feb 2027",
      section18A: "Approved",
    },
  },

  // Category 19: Rehabilitation (3 notices)
  {
    id: "rehab-001",
    title: {
      en: "Application for Rehabilitation - Insolvent Estate",
      af: "Aansoek vir Rehabilitasie - Insolvente Boedel",
    },
    category: "rehabilitation",
    publishDate: "08 Mar 2026",
    location: "Johannesburg, Gauteng",
    referenceNumber: "REH-2026-0112",
    excerpt: {
      en: "Application for rehabilitation from insolvency after 5 years sequestration.",
      af: "Aansoek vir rehabilitasie van insolvensie na 5 jaar sekwestrasie.",
    },
    body: {
      en: "Notice is hereby given that MICHAEL JOHN ROBINSON (ID: 7506155098082) will apply to the High Court, Gauteng Division, Johannesburg on 25 April 2026 for an order of rehabilitation in terms of Section 124 of the Insolvency Act. The applicant was sequestrated on 15 March 2021 (Estate No: 003456/2021). All creditors have been paid 25 cents in the Rand. Application supported by Trustee's certificate. Creditors may oppose by lodging objections with the Master by 15 April 2026. Case Number: REH/2026/112.",
      af: "Kennis word hiermee gegee dat MICHAEL JOHN ROBINSON (ID: 7506155098082) aansoek sal doen by die Hooggeregshof, Gauteng Afdeling, Johannesburg op 25 April 2026 vir 'n bevel van rehabilitasie ingevolge Artikel 124 van die Insolvensiewet. Die applikant is gesekwestreer op 15 Maart 2021 (Boedel No: 003456/2021). Alle krediteure is betaal 25 sent in die Rand. Aansoek ondersteun deur Kurator se sertifikaat. Krediteure kan teenstaan deur besware in te dien by die Meester teen 15 April 2026. Saaknommer: REH/2026/112.",
    },
    publisher: "Robinson & Associates Attorneys",
    contactName: "Attorney - L. Robinson",
    contactEmail: "rehab@robinsonlaw.co.za",
    contactPhone: "011 482 6000",
    deadline: "15 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      sequestrationDate: "15 Mar 2021",
      estateNumber: "003456/2021",
      dividendPaid: "25 cents in the Rand",
      hearingDate: "25 Apr 2026",
    },
  },

  {
    id: "rehab-002",
    title: {
      en: "Notice of Automatic Rehabilitation",
      af: "Kennisgewing van Outomatiese Rehabilitasie",
    },
    category: "rehabilitation",
    publishDate: "10 Mar 2026",
    location: "Durban, KwaZulu-Natal",
    referenceNumber: "REH-2026-0134",
    excerpt: {
      en: "Automatic rehabilitation after 10 years from sequestration date.",
      af: "Outomatiese rehabilitasie na 10 jaar vanaf sekwestrasie datum.",
    },
    body: {
      en: "Notice is hereby given that SARAH MARIA NKOSI (ID: 6804125098083) was automatically rehabilitated on 12 February 2026, being 10 years from the date of her sequestration (Estate No: 001234/2016). In terms of Section 127A of the Insolvency Act, no application to court was required. The Master of the High Court, Durban has issued a certificate of rehabilitation. All disabilities of insolvency have been removed. Former creditors are notified for information purposes. Master's Reference: AUTO-REH-2026-134.",
      af: "Kennis word hiermee gegee dat SARAH MARIA NKOSI (ID: 6804125098083) outomaties gerehabiliteer is op 12 Februarie 2026, synde 10 jaar vanaf die datum van haar sekwestrasie (Boedel No: 001234/2016). Ingevolge Artikel 127A van die Insolvensiewet, was geen aansoek aan die hof vereis nie. Die Meester van die Hooggeregshof, Durban het 'n sertifikaat van rehabilitasie uitgereik. Alle ongeskikthede van insolvensie is verwyder. Voormalige krediteure word in kennis gestel vir inligtings doeleindes. Meester se Verwysing: AUTO-REH-2026-134.",
    },
    publisher: "Master of the High Court - KZN",
    contactName: "Insolvency Division",
    contactEmail: "insolvency.dbn@justice.gov.za",
    contactPhone: "031 301 5500",
    deadline: "N/A",
    status: "published",
    accessPolicy: "public",
    fields: {
      rehabilitationDate: "12 Feb 2026",
      sequestrationDate: "12 Feb 2016",
      rehabilitationType: "Automatic (10 years)",
      estateNumber: "001234/2016",
    },
  },

  {
    id: "rehab-003",
    title: {
      en: "Rehabilitation Order Granted - Court Notice",
      af: "Rehabilitasie Bevel Toegestaan - Hof Kennisgewing",
    },
    category: "rehabilitation",
    publishDate: "12 Mar 2026",
    location: "Cape Town, Western Cape",
    referenceNumber: "REH-2026-0156",
    excerpt: {
      en: "High Court grants rehabilitation order after successful application.",
      af: "Hooggeregshof staan rehabilitasie bevel toe na suksesvolle aansoek.",
    },
    body: {
      en: "In the High Court, Western Cape Division, Cape Town. Case No: 5678/2026. In the matter of PETRUS JOHANNES FOURIE (ID: 6902145098084). An order of rehabilitation was granted on 5 March 2026. The insolvent was sequestrated on 20 June 2019 (Estate 006789/2019). The Trustee certified that all affairs have been properly wound up and 40 cents in the Rand paid to concurrent creditors. The applicant is now fully rehabilitated and all disabilities removed. Certificate available from the Master's Office, Cape Town.",
      af: "In die Hooggeregshof, Wes-Kaap Afdeling, Kaapstad. Saak No: 5678/2026. In die saak van PETRUS JOHANNES FOURIE (ID: 6902145098084). 'n Bevel van rehabilitasie is toegestaan op 5 Maart 2026. Die insolvent is gesekwestreer op 20 Junie 2019 (Boedel 006789/2019). Die Kurator het gesertifiseer dat alle sake behoorlik afgewikkel is en 40 sent in die Rand betaal aan konkurrente krediteure. Die applikant is nou volledig gerehabiliteer en alle ongeskikthede is verwyder. Sertifikaat beskikbaar van die Meester se Kantoor, Kaapstad.",
    },
    publisher: "Master of the High Court - Western Cape",
    contactName: "Rehabilitation Division",
    contactEmail: "rehabilitation.cpt@justice.gov.za",
    contactPhone: "021 462 5000",
    deadline: "N/A",
    status: "published",
    accessPolicy: "public",
    fields: {
      orderDate: "05 Mar 2026",
      sequestrationDate: "20 Jun 2019",
      dividendPaid: "40 cents in the Rand",
      caseNumber: "5678/2026",
    },
  },

  // Remaining categories (20-25) with 3 notices each will be added in final update
  // Total so far: 18 categories × 3 = 54 notices
  // Need: 7 more categories × 3 = 21 more notices
];

export default noticesFinal;
