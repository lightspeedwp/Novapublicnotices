/**
 * Nova Public Notices Portal - Notice Data Part 2
 * 
 * Continuation of notice data for remaining categories
 * Categories 8-16
 */

import { Notice } from "./noticeData";

export const noticesPart2: Notice[] = [
  // ========================================
  // 8. DIVORCE ANTENUPTIAL MOTIONS (3 notices)
  // ========================================
  {
    id: "divorce-001",
    title: {
      en: "Notice of Intended Action - Divorce Proceedings",
      af: "Kennisgewing van Voorgenome Aksie - Egskeidingsverhoor",
    },
    category: "divorce-antenuptial",
    publishDate: "06 Mar 2026",
    location: "Johannesburg, Gauteng",
    referenceNumber: "DIV-2026-0234",
    excerpt: {
      en: "Notice to interested parties regarding pending divorce proceedings and asset division.",
      af: "Kennisgewing aan belangstellendes rakende hangende egskeidingsverhoor en bate verdeling.",
    },
    body: {
      en: "Take notice that SARAH JANE WILLIAMS has instituted divorce proceedings against MICHAEL JOHN WILLIAMS in the High Court of South Africa, Gauteng Division, Johannesburg. Case Number: 2026/23456. The matter involves the dissolution of marriage and division of joint estate. Any person having a financial interest in the estate of the parties may file a notice with the Registrar of the High Court within 21 days. The marriage was in community of property. Plaintiff's Attorneys: Smith & Jones Inc. Defendant's Attorneys: Brown Attorneys.",
      af: "Neem kennis dat SARAH JANE WILLIAMS egskeidingsverhoor ingestel het teen MICHAEL JOHN WILLIAMS in die Hooggeregshof van Suid-Afrika, Gauteng Afdeling, Johannesburg. Saaknommer: 2026/23456. Die saak behels die ontbinding van huwelik en verdeling van gemeenskaplike boedel. Enige persoon met 'n finansiële belang in die boedel van die partye kan 'n kennisgewing indien by die Registrateur van die Hooggeregshof binne 21 dae. Die huwelik was in gemeenskap van goedere. Eiser se Prokureurs: Smith & Jones Ing. Verweerder se Prokureurs: Brown Prokureurs.",
    },
    publisher: "Smith & Jones Inc. Attorneys",
    contactName: "Attorney - L. Smith",
    contactEmail: "divorce@smithjones.co.za",
    contactPhone: "011 784 3000",
    deadline: "27 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      caseNumber: "2026/23456",
      court: "High Court Gauteng Division",
      marriageRegime: "In community of property",
      plaintiff: "Sarah Jane Williams",
      defendant: "Michael John Williams",
    },
  },
  {
    id: "divorce-002",
    title: {
      en: "Antenuptial Contract Amendment Application",
      af: "Huweliksvoorwaarde Kontrak Wysigingsaansoek",
    },
    category: "divorce-antenuptial",
    publishDate: "08 Mar 2026",
    location: "Cape Town, Western Cape",
    referenceNumber: "DIV-2026-0267",
    excerpt: {
      en: "Application to amend antenuptial contract - change from exclusion to community of property.",
      af: "Aansoek om huweliksvoorwaarde kontrak te wysig - verandering van uitsluiting na gemeenskap van goedere.",
    },
    body: {
      en: "Notice is hereby given that DAVID PETRUS FOURIE and MARIA ELIZABETH FOURIE (born De Wet) have applied to the High Court, Western Cape Division, Cape Town for an order amending their antenuptial contract dated 15 June 1995. The spouses seek to change their matrimonial property regime from marriage out of community of property to marriage in community of property. The application will be heard on 30 April 2026 at 10:00. Creditors and interested parties may oppose the application by filing objections with the Registrar within 21 days. Case Number: ANC/2026/123. Notarial Deed: N456/2026.",
      af: "Kennis word hiermee gegee dat DAVID PETRUS FOURIE en MARIA ELIZABETH FOURIE (gebore De Wet) aansoek gedoen het by die Hooggeregshof, Wes-Kaap Afdeling, Kaapstad vir 'n bevel om hul huweliksvoorwaarde kontrak gedateer 15 Junie 1995 te wysig. Die eggenote soek om hul huweliksgoedere regime te verander van huwelik buite gemeenskap van goedere na huwelik in gemeenskap van goedere. Die aansoek sal aangehoor word op 30 April 2026 om 10:00. Krediteure en belanghebbende partye kan die aansoek teenstaan deur besware in te dien by die Registrateur binne 21 dae. Saaknommer: ANC/2026/123. Notariële Akte: N456/2026.",
    },
    publisher: "Fourie & Partners Attorneys",
    contactName: "Notary - A. Fourie",
    contactEmail: "notarial@fourie.co.za",
    contactPhone: "021 425 8000",
    deadline: "29 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      originalContract: "15 Jun 1995",
      currentRegime: "Out of community of property",
      proposedRegime: "In community of property",
      hearingDate: "30 Apr 2026 10:00",
    },
  },
  {
    id: "divorce-003",
    title: {
      en: "Notice of Redistribution Order Application",
      af: "Kennisgewing van Herverdelingsbevel Aansoek",
    },
    category: "divorce-antenuptial",
    publishDate: "10 Mar 2026",
    location: "Durban, KwaZulu-Natal",
    referenceNumber: "DIV-2026-0301",
    excerpt: {
      en: "Application for redistribution of assets upon divorce - marriage out of community of property.",
      af: "Aansoek vir herverdeling van bates met egskeiding - huwelik buite gemeenskap van goedere.",
    },
    body: {
      en: "In the matter between NOMSA GRACE DLAMINI (Plaintiff) and THABO SAMUEL DLAMINI (Defendant). The Plaintiff has applied to the High Court, KwaZulu-Natal Division, Durban for a redistribution order in terms of Section 7(3) of the Divorce Act. The parties were married out of community of property with accrual. The Plaintiff seeks a redistribution of assets claiming substantial contribution to the maintenance and growth of the Defendant's estate during 22 years of marriage. The application will be heard on 20 May 2026. Case Number: D-2026-5678. Any interested creditors may appear or file representations.",
      af: "In die saak tussen NOMSA GRACE DLAMINI (Eiser) en THABO SAMUEL DLAMINI (Verweerder). Die Eiser het aansoek gedoen by die Hooggeregshof, KwaZulu-Natal Afdeling, Durban vir 'n herverdelingsbevel ingevolge Artikel 7(3) van die Egskeidingswet. Die partye was getroud buite gemeenskap van goedere met aanwas. Die Eiser soek 'n herverdeling van bates en eis aansienlike bydrae tot die instandhouding en groei van die Verweerder se boedel gedurende 22 jaar van huwelik. Die aansoek sal aangehoor word op 20 Mei 2026. Saaknommer: D-2026-5678. Enige belangstellende krediteure kan verskyn of vertoë indien.",
    },
    publisher: "Women's Legal Centre",
    contactName: "Attorney - N. Mkhize",
    contactEmail: "divorce@wlc.org.za",
    contactPhone: "031 301 7000",
    deadline: "20 May 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      marriageRegime: "Out of community with accrual",
      marriageDuration: "22 years",
      redistributionClaim: "Contribution to defendant's estate",
      hearingDate: "20 May 2026",
    },
  },

  // ========================================
  // 9. ESTATES: CREDITORS & DEBTORS (3 notices)
  // ========================================
  {
    id: "estate-cred-001",
    title: {
      en: "Notice to Creditors and Debtors - Estate Late John Smith",
      af: "Kennisgewing aan Krediteure en Debiteure - Boedel Wyle John Smith",
    },
    category: "estates-creditors-debtors",
    publishDate: "05 Mar 2026",
    location: "Pretoria, Gauteng",
    referenceNumber: "EST-2026-0445",
    excerpt: {
      en: "All creditors and debtors must lodge claims and pay debts within 30 days.",
      af: "Alle krediteure en debiteure moet eise indien en skulde betaal binne 30 dae.",
    },
    body: {
      en: "In the Estate of the late JOHN MICHAEL SMITH, who died on 15 January 2026, Identity Number: 6305145098083, last address: 78 Oak Avenue, Centurion, Gauteng. All persons having claims against the estate are hereby called upon to lodge their claims with the Executor within 30 (thirty) days from the date of publication hereof. All persons indebted to the estate are required to make payment to the Executor without delay. Executor: FNB Fiduciary Services. Estate Number: 003456/2026. Master's Office: Pretoria. Executor's Tel: 012 313 2000.",
      af: "In die Boedel van wyle JOHN MICHAEL SMITH, wat oorlede is op 15 Januarie 2026, Identiteitsnommer: 6305145098083, laaste adres: Eikelaan 78, Centurion, Gauteng. Alle persone met eise teen die boedel word hiermee opgeroep om hul eise in te dien by die Eksekuteur binne 30 (dertig) dae vanaf die datum van publikasie hiervan. Alle persone wat skuldig is aan die boedel word vereis om betaling aan die Eksekuteur te maak sonder versuim. Eksekuteur: FNB Fidusiêre Dienste. Boedelnommer: 003456/2026. Meester se Kantoor: Pretoria. Eksekuteur se Tel: 012 313 2000.",
    },
    publisher: "FNB Fiduciary Services",
    contactName: "Estate Administrator",
    contactEmail: "estates@fnbfiduciary.co.za",
    contactPhone: "012 313 2000",
    deadline: "04 Apr 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      deceasedID: "6305145098083",
      dateOfDeath: "15 Jan 2026",
      estateNumber: "003456/2026",
      mastersOffice: "Pretoria",
    },
  },
  {
    id: "estate-cred-002",
    title: {
      en: "Creditors: Final Liquidation and Distribution Account",
      af: "Krediteure: Finale Likwidasie en Distribusie Rekening",
    },
    category: "estates-creditors-debtors",
    publishDate: "07 Mar 2026",
    location: "Cape Town, Western Cape",
    referenceNumber: "EST-2026-0489",
    excerpt: {
      en: "Notice of lying for inspection - final liquidation and distribution account.",
      af: "Kennisgewing van lê vir inspeksie - finale likwidasie en distribusie rekening.",
    },
    body: {
      en: "Notice is hereby given that the First and Final Liquidation and Distribution Account in the Estate of the late ELIZABETH MARY JONES, Estate Number 008901/2025, will lie for inspection at the Office of the Master of the High Court, Cape Town, and at the office of the Executor, for a period of 21 days from the date of publication hereof. Any person having objections to the account must lodge such objections in writing with the Master within the specified period. Executor: Sanlam Trust Limited, 2 Strand Street, Cape Town. Date of Death: 5 August 2025.",
      af: "Kennis word hiermee gegee dat die Eerste en Finale Likwidasie en Distribusie Rekening in die Boedel van wyle ELIZABETH MARY JONES, Boedelnommer 008901/2025, ter insae sal lê by die Kantoor van die Meester van die Hooggeregshof, Kaapstad, en by die kantoor van die Eksekuteur, vir 'n tydperk van 21 dae vanaf die datum van publikasie hiervan. Enige persoon met besware teen die rekening moet sodanige besware skriftelik indien by die Meester binne die gespesifiseerde tydperk. Eksekuteur: Sanlam Trust Beperk, Strandstraat 2, Kaapstad. Datum van Afsterwe: 5 Augustus 2025.",
    },
    publisher: "Sanlam Trust Limited",
    contactName: "Trust Officer - M. van der Walt",
    contactEmail: "estates@sanlamtrust.co.za",
    contactPhone: "021 947 9111",
    deadline: "28 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      accountType: "First and Final L&D",
      estateNumber: "008901/2025",
      dateOfDeath: "05 Aug 2025",
      inspectionPeriod: "21 days",
    },
  },
  {
    id: "estate-cred-003",
    title: {
      en: "Notice to Debtors - Immediate Payment Required",
      af: "Kennisgewing aan Debiteure - Onmiddellike Betaling Vereis",
    },
    category: "estates-creditors-debtors",
    publishDate: "09 Mar 2026",
    location: "Bloemfontein, Free State",
    referenceNumber: "EST-2026-0512",
    excerpt: {
      en: "All persons indebted to the estate must make immediate payment to avoid legal action.",
      af: "Alle persone wat skuldig is aan die boedel moet onmiddellike betaling maak om regsaksie te vermy.",
    },
    body: {
      en: "FINAL NOTICE TO DEBTORS: In the Estate of the late HENDRIK JACOBUS PRETORIUS (ID: 5108235167089), Estate Number: 001234/2025. All persons who are indebted to the deceased estate are hereby given final notice to make payment of all outstanding amounts to the Executor within 14 (fourteen) days from the date of publication. Failure to make payment will result in legal action being instituted without further notice, and the debtor will be liable for all legal costs. Executor: Botha & Partners Trust, 56 President Brand Street, Bloemfontein. Banking Details available on request. Master's Office: Bloemfontein.",
      af: "FINALE KENNISGEWING AAN DEBITEURE: In die Boedel van wyle HENDRIK JACOBUS PRETORIUS (ID: 5108235167089), Boedelnommer: 001234/2025. Alle persone wat skuldig is aan die oorledene boedel word hiermee finale kennisgewing gegee om betaling van alle uitstaande bedrae aan die Eksekuteur te maak binne 14 (veertien) dae vanaf die datum van publikasie. Versuim om betaling te maak sal lei tot regsaksie wat ingestel word sonder verdere kennisgewing, en die debiteur sal aanspreeklik wees vir alle regskoste. Eksekuteur: Botha & Vennote Trust, President Brandstraat 56, Bloemfontein. Bankbesonderhede beskikbaar op versoek. Meester se Kantoor: Bloemfontein.",
    },
    publisher: "Botha & Partners Trust",
    contactName: "Estate Manager - J. Botha",
    contactEmail: "collections@bothatrust.co.za",
    contactPhone: "051 430 8000",
    deadline: "23 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      deceasedID: "5108235167089",
      estateNumber: "001234/2025",
      paymentDeadline: "23 Mar 2026",
      legalAction: "Will be instituted if not paid",
    },
  },

  // ========================================
  // 10. ESTATES: LIQUIDATION & DISTRIBUTION (3 notices)
  // ========================================
  {
    id: "estate-liq-001",
    title: {
      en: "Liquidation Account - Estate of Anna Botha",
      af: "Likwidasie Rekening - Boedel van Anna Botha",
    },
    category: "estates-liquidation-distribution",
    publishDate: "06 Mar 2026",
    location: "Johannesburg, Gauteng",
    referenceNumber: "EST-2026-0567",
    excerpt: {
      en: "First Liquidation and Distribution Account lies for inspection for 21 days.",
      af: "Eerste Likwidasie en Distribusie Rekening lê ter insae vir 21 dae.",
    },
    body: {
      en: "In the matter of the estate of the late ANNA MARIA BOTHA (born VAN ZYL), who died on 10 November 2025, Identity Number: 4802125098087. Notice is hereby given that the First Liquidation and Distribution Account in the said estate will lie open for inspection by all persons interested therein for a period of 21 days from the date of publication at the Office of the Master, Johannesburg and at the office of the Executor. Executor: Standard Bank Executor Services. Estate Number: 012789/2025. Objections to the account to be lodged with the Master within the inspection period.",
      af: "In die saak van die boedel van wyle ANNA MARIA BOTHA (gebore VAN ZYL), wat oorlede is op 10 November 2025, Identiteitsnommer: 4802125098087. Kennis word hiermee gegee dat die Eerste Likwidasie en Distribusie Rekening in genoemde boedel ter insae sal lê vir alle persone daarin belangstellend vir 'n tydperk van 21 dae vanaf die datum van publikasie by die Kantoor van die Meester, Johannesburg en by die kantoor van die Eksekuteur. Eksekuteur: Standard Bank Eksekuteursdienste. Boedelnommer: 012789/2025. Besware teen die rekening moet ingedien word by die Meester binne die inspeksie tydperk.",
    },
    publisher: "Standard Bank Executor Services",
    contactName: "Estate Department",
    contactEmail: "executorservices@standardbank.co.za",
    contactPhone: "011 636 9111",
    deadline: "27 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      deceasedID: "4802125098087",
      dateOfDeath: "10 Nov 2025",
      estateNumber: "012789/2025",
      accountType: "First L&D",
    },
  },
  {
    id: "estate-liq-002",
    title: {
      en: "Supplementary Liquidation Account - Estate Pienaar",
      af: "Aanvullende Likwidasie Rekening - Boedel Pienaar",
    },
    category: "estates-liquidation-distribution",
    publishDate: "08 Mar 2026",
    location: "Stellenbosch, Western Cape",
    referenceNumber: "EST-2026-0601",
    excerpt: {
      en: "Supplementary account due to discovery of additional estate assets.",
      af: "Aanvullende rekening weens ontdekking van addisionele boedel bates.",
    },
    body: {
      en: "ESTATE: WILLEM FREDERICK PIENAAR (deceased 22 July 2024), Estate No: 006543/2024. Notice is given that a Supplementary Liquidation and Distribution Account has been prepared due to the discovery of additional assets (property in France) that were not included in the First and Final Account. The account will lie for inspection for 21 days at the Master's Office, Cape Town and the Executor's office in Stellenbosch. Beneficiaries and creditors may inspect and lodge objections during this period. Executor: BOE Trust (Pty) Ltd, 12 Church Street, Stellenbosch.",
      af: "BOEDEL: WILLEM FREDERICK PIENAAR (oorlede 22 Julie 2024), Boedel No: 006543/2024. Kennis word gegee dat 'n Aanvullende Likwidasie en Distribusie Rekening opgestel is weens die ontdekking van addisionele bates (eiendom in Frankryk) wat nie ingesluit was in die Eerste en Finale Rekening nie. Die rekening sal ter insae lê vir 21 dae by die Meester se Kantoor, Kaapstad en die Eksekuteur se kantoor in Stellenbosch. Begunstigdes en krediteure kan inspekteer en besware indien gedurende hierdie tydperk. Eksekuteur: BOE Trust (Edms) Bpk, Kerkstraat 12, Stellenbosch.",
    },
    publisher: "BOE Trust (Pty) Ltd",
    contactName: "Senior Trust Officer - C. Theron",
    contactEmail: "estates@boetrust.co.za",
    contactPhone: "021 883 2000",
    deadline: "29 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      estateNumber: "006543/2024",
      dateOfDeath: "22 Jul 2024",
      accountType: "Supplementary L&D",
      reason: "Additional assets discovered (France property)",
    },
  },
  {
    id: "estate-liq-003",
    title: {
      en: "Amended Liquidation Account - Correction Notice",
      af: "Gewysigde Likwidasie Rekening - Regstelling Kennisgewing",
    },
    category: "estates-liquidation-distribution",
    publishDate: "10 Mar 2026",
    location: "Durban, KwaZulu-Natal",
    referenceNumber: "EST-2026-0634",
    excerpt: {
      en: "Amended account filed due to calculation errors in original distribution.",
      af: "Gewysigde rekening ingedien weens berekenfoute in oorspronklike distribusie.",
    },
    body: {
      en: "AMENDED LIQUIDATION ACCOUNT: Estate of RAJESH KUMAR NAIDOO, ID: 6709145098081, Estate Number: 004321/2025. Notice is hereby given that an Amended First Liquidation and Distribution Account has been filed with the Master's Office, Durban, correcting calculation errors in the original account published on 15 January 2026. The corrected account redistributes assets among beneficiaries according to the Will. The amended account will lie for inspection for 21 days. Beneficiaries affected by the amendments have been personally notified. Executor: Nedbank Executor Services. Master's Office: Durban.",
      af: "GEWYSIGDE LIKWIDASIE REKENING: Boedel van RAJESH KUMAR NAIDOO, ID: 6709145098081, Boedelnommer: 004321/2025. Kennis word hiermee gegee dat 'n Gewysigde Eerste Likwidasie en Distribusie Rekening ingedien is by die Meester se Kantoor, Durban, wat berekenfoute regstel in die oorspronklike rekening gepubliseer op 15 Januarie 2026. Die reggestelde rekening herverdeel bates onder begunstigdes volgens die Testament. Die gewysigde rekening sal ter insae lê vir 21 dae. Begunstigdes geaffekteer deur die wysigings is persoonlik in kennis gestel. Eksekuteur: Nedbank Eksekuteursdienste. Meester se Kantoor: Durban.",
    },
    publisher: "Nedbank Executor Services",
    contactName: "Estate Specialist - P. Moodley",
    contactEmail: "executors@nedbank.co.za",
    contactPhone: "031 364 2000",
    deadline: "31 Mar 2026",
    status: "published",
    accessPolicy: "public",
    fields: {
      deceasedID: "6709145098081",
      estateNumber: "004321/2025",
      accountType: "Amended First L&D",
      reason: "Calculation errors corrected",
    },
  },

  // Continue with remaining categories (11-16) in next section...
];
