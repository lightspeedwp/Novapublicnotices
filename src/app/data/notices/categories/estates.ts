/**
 * Nova Public Notices Portal - Estates Category Data
 * 
 * Includes both:
 * - estates-creditors-debtors (Form J187)
 * - estates-liquidation-distribution (Form J193)
 * 
 * Total Entries: 15
 */

import { Notice } from '../noticeTypes';

export const estatesNotices: Notice[] = [
  {
    id: 'estates-001',
    title: {
      en: 'Estate Late Johannes Petrus van der Merwe',
      af: 'Boedel Wyle Johannes Petrus van der Merwe'
    },
    category: 'estates-creditors-debtors',
    publishDate: '15 Jan 2024',
    location: 'Pretoria, Gauteng',
    referenceNumber: 'EST-2024-001-PT',
    excerpt: {
      en: 'Notice to creditors and debtors in the Estate of the late Johannes Petrus van der Merwe. All claims must be lodged within 30 days.',
      af: 'Kennisgewing aan skuldeisers en skuldenaars in die Boedel van wyle Johannes Petrus van der Merwe. Alle eise moet binne 30 dae ingedien word.'
    },
    body: {
      en: `Notice is hereby given that all persons having claims against or owing money to the Estate of the late Johannes Petrus van der Merwe (Identity Number: 5203155029083), who died on 12 December 2023, are required to lodge their claims with or pay to the undersigned within 30 days from the date of publication hereof.

DATED at PRETORIA on this 10th day of January 2024.

EXECUTORS: Van der Merwe & Partners Incorporated
ADDRESS: 123 Church Street, Pretoria Central, 0002
MASTER'S REFERENCE: 006544/2023`,
      af: `Kennis geskied hiermee dat alle persone wat vorderinge het teen of geld skuld aan die Boedel van wyle Johannes Petrus van der Merwe (Identiteitsnommer: 5203155029083), wat oorlede is op 12 Desember 2023, versoek word om hul vorderinge in te dien by of te betaal aan die ondergetekende binne 30 dae vanaf die datum van publikasie hiervan.

GEDATEER te PRETORIA op hierdie 10de dag van Januarie 2024.

EKSEKUTEURS: Van der Merwe & Vennote Ingelyf
ADRES: Kerkstraat 123, Pretoria Sentraal, 0002
MEESTER SE VERWYSING: 006544/2023`
    },
    publisher: 'Van der Merwe & Partners Inc.',
    contactName: 'Maria Scheepers',
    contactEmail: 'estates@vdmlaw.co.za',
    contactPhone: '+27 12 326 4500',
    deadline: '14 Feb 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Johannes Petrus van der Merwe',
        type: 'individual',
        idNumber: '5203155029083',
        role: 'Deceased'
      },
      fileNumber: '006544/2023',
      mastersOffice: "Master of the High Court, Pretoria",
      noticeType: 'Form J187 - Notice to Creditors and Debtors',
      legalBasis: 'Administration of Estates Act, 1965'
    }
  },

  {
    id: 'estates-002',
    title: {
      en: 'Liquidation and Distribution Account - Estate Late Sarah Nomsa Dlamini',
      af: 'Likwidasie en Distribusierekening - Boedel Wyle Sarah Nomsa Dlamini'
    },
    category: 'estates-liquidation-distribution',
    publishDate: '18 Jan 2024',
    location: 'Durban, KwaZulu-Natal',
    referenceNumber: 'EST-2024-002-DBN',
    excerpt: {
      en: 'Notice that the liquidation and distribution account in the Estate Late Sarah Nomsa Dlamini will lie for inspection for 21 days.',
      af: 'Kennis dat die likwidasie en distribusierekening in die Boedel Wyle Sarah Nomsa Dlamini vir inspeksie sal lê vir 21 dae.'
    },
    body: {
      en: `In terms of Section 35(5) of the Administration of Estates Act No. 66 of 1965, notice is hereby given that the liquidation and distribution account in the Estate of the late Sarah Nomsa Dlamini (Identity Number: 6408230156082), who died on 22 October 2023, will lie open for inspection by all persons interested therein for a period of 21 days from the date of publication hereof at the Office of the Master of the High Court, Durban, and the Office of the Magistrate, Pietermaritzburg.

Should no objection be lodged with the Master during the said period, the Executor will proceed to make payment in accordance with the account.

EXECUTOR: KZN Fiduciary Services (Pty) Ltd
MASTER'S REFERENCE: 012887/2023
FIRST PUBLICATION: 18 January 2024`,
      af: `Ingevolge Artikel 35(5) van die Boedelwet No. 66 van 1965, word hiermee kennis gegee dat die likwidasie en distribusierekening in die Boedel van wyle Sarah Nomsa Dlamini (Identiteitsnommer: 6408230156082), wat oorlede is op 22 Oktober 2023, ter insae sal lê vir alle belanghebbende persone vir 'n tydperk van 21 dae vanaf die datum van publikasie hiervan by die Kantoor van die Meester van die Hoë Hof, Durban, en die Kantoor van die Landdros, Pietermaritzburg.

Indien geen beswaar by die Meester gedurende genoemde tydperk ingedien word nie, sal die Eksekuteur oorgaan tot uitbetaling in ooreenstemming met die rekening.

EKSEKUTEUR: KZN Fidusiêre Dienste (Edms) Bpk
MEESTER SE VERWYSING: 012887/2023
EERSTE PUBLIKASIE: 18 Januarie 2024`
    },
    publisher: 'KZN Fiduciary Services (Pty) Ltd',
    contactName: 'Thandi Mkhize',
    contactEmail: 'estates@kznfiduciary.co.za',
    contactPhone: '+27 31 301 2400',
    deadline: '08 Feb 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Sarah Nomsa Dlamini',
        type: 'individual',
        idNumber: '6408230156082',
        role: 'Deceased'
      },
      fileNumber: '012887/2023',
      mastersOffice: "Master of the High Court, Durban",
      magistrateOffice: "Pietermaritzburg Magistrate's Court",
      noticeType: 'Form J193 - Liquidation and Distribution Account',
      legalBasis: 'Administration of Estates Act, 1965 Section 35(5)',
      eventDate: '08 Feb 2024'
    }
  },

  {
    id: 'estates-003',
    title: {
      en: 'Estate Late Robert William Thompson - Notice to Creditors',
      af: 'Boedel Wyle Robert William Thompson - Kennisgewing aan Skuldeisers'
    },
    category: 'estates-creditors-debtors',
    publishDate: '22 Jan 2024',
    location: 'Cape Town, Western Cape',
    referenceNumber: 'EST-2024-003-CT',
    excerpt: {
      en: 'All persons having claims against the Estate Late Robert William Thompson must lodge same within 30 days.',
      af: 'Alle persone met vorderinge teen die Boedel Wyle Robert William Thompson moet dit binne 30 dae indien.'
    },
    body: {
      en: `Notice is hereby given to all creditors and debtors of the Estate of the late Robert William Thompson, who died on 5 January 2024 at Cape Town.

All persons having claims against the Estate are hereby called upon to lodge their claims with the Executor within thirty (30) days from the date of publication of this notice.

All persons indebted to the Estate are required to settle their debts with the Executor within the same period.

Identity Number of Deceased: 4807095118085
Date of Death: 5 January 2024
Master's Office: Cape Town
Estate Number: 001245/2024

EXECUTOR: Atlantic Trust Company Limited
Physical Address: 15 Spin Street, Cape Town, 8001
Postal Address: PO Box 4523, Cape Town, 8000
Telephone: (021) 418 3500
Reference: RWT/2024/001`,
      af: `Kennis geskied hiermee aan alle skuldeisers en skuldenaars van die Boedel van wyle Robert William Thompson, wat oorlede is op 5 Januarie 2024 te Kaapstad.

Alle persone met vorderinge teen die Boedel word hiermee versoek om hul vorderinge by die Eksekuteur in te dien binne dertig (30) dae vanaf die datum van publikasie van hierdie kennisgewing.

Alle persone wat aan die Boedel skuld, word versoek om hul skuld by die Eksekuteur te vereffen binne dieselfde tydperk.

Identiteitsnommer van Oorledene: 4807095118085
Datum van Oorlye: 5 Januarie 2024
Meester se Kantoor: Kaapstad
Boedelnommer: 001245/2024

EKSEKUTEUR: Atlantic Trust Maatskappy Beperk
Fisiese Adres: Spinstraat 15, Kaapstad, 8001
Posadres: Posbus 4523, Kaapstad, 8000
Telefoon: (021) 418 3500
Verwysing: RWT/2024/001`
    },
    publisher: 'Atlantic Trust Company Limited',
    contactName: 'Jennifer Adams',
    contactEmail: 'estates@atlantictrust.co.za',
    contactPhone: '+27 21 418 3500',
    deadline: '21 Feb 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Robert William Thompson',
        type: 'individual',
        idNumber: '4807095118085',
        role: 'Deceased'
      },
      fileNumber: '001245/2024',
      mastersOffice: "Master of the High Court, Cape Town",
      streetAddress: '15 Spin Street, Cape Town, 8001',
      noticeType: 'Form J187 - Notice to Creditors and Debtors',
      legalBasis: 'Administration of Estates Act, 1965'
    }
  },

  {
    id: 'estates-004',
    title: {
      en: 'Estate Late Annelize Johanna Botha - Final Distribution',
      af: 'Boedel Wyle Annelize Johanna Botha - Finale Distribusie'
    },
    category: 'estates-liquidation-distribution',
    publishDate: '25 Jan 2024',
    location: 'Bloemfontein, Free State',
    referenceNumber: 'EST-2024-004-BFN',
    excerpt: {
      en: 'The first and final liquidation and distribution account lies for inspection at the Master\'s Office.',
      af: 'Die eerste en finale likwidasie en distribusierekening lê ter insae by die Meester se Kantoor.'
    },
    body: {
      en: `Notice is hereby given in terms of Section 35(5) of Act 66 of 1965, as amended, that the First and Final Liquidation and Distribution Account in the Estate of the late Annelize Johanna Botha will lie open for inspection at the Office of the Master, Bloemfontein, and at the Office of the Magistrate, Welkom, for a period of 21 days from date of publication hereof.

Deceased: Annelize Johanna Botha
Identity Number: 5512280098087
Date of Death: 15 November 2023
Estate Number: 008956/2023
Master's Office: Bloemfontein

Objections to the account must be lodged with the Master within the said period.

Executor: FS Estate Administrators CC
Contact: Mr. J.P. Fourie
Telephone: 051 447 8200
Email: jp.fourie@fsestates.co.za`,
      af: `Kennis geskied hiermee ingevolge Artikel 35(5) van Wet 66 van 1965, soos gewysig, dat die Eerste en Finale Likwidasie en Distribusierekening in die Boedel van wyle Annelize Johanna Botha ter insae sal lê by die Kantoor van die Meester, Bloemfontein, en by die Kantoor van die Landdros, Welkom, vir 'n tydperk van 21 dae vanaf datum van publikasie hiervan.

Oorledene: Annelize Johanna Botha
Identiteitsnommer: 5512280098087
Datum van Oorlye: 15 November 2023
Boedelnommer: 008956/2023
Meester se Kantoor: Bloemfontein

Besware teen die rekening moet by die Meester ingedien word binne genoemde tydperk.

Eksekuteur: FS Boedeladministrateurs BK
Kontak: Mnr. J.P. Fourie
Telefoon: 051 447 8200
E-pos: jp.fourie@fsestates.co.za`
    },
    publisher: 'FS Estate Administrators CC',
    contactName: 'J.P. Fourie',
    contactEmail: 'jp.fourie@fsestates.co.za',
    contactPhone: '+27 51 447 8200',
    deadline: '15 Feb 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Annelize Johanna Botha',
        type: 'individual',
        idNumber: '5512280098087',
        role: 'Deceased'
      },
      fileNumber: '008956/2023',
      mastersOffice: "Master of the High Court, Bloemfontein",
      magistrateOffice: "Welkom Magistrate's Court",
      noticeType: 'Form J193 - First and Final Account',
      legalBasis: 'Administration of Estates Act, 1965 Section 35(5)',
      eventDate: '15 Feb 2024'
    }
  },

  {
    id: 'estates-005',
    title: {
      en: 'Estate Late Thabo Daniel Mokoena - Creditors Notice',
      af: 'Boedel Wyle Thabo Daniel Mokoena - Skuldeiserskennisgewing'
    },
    category: 'estates-creditors-debtors',
    publishDate: '29 Jan 2024',
    location: 'Polokwane, Limpopo',
    referenceNumber: 'EST-2024-005-PLK',
    excerpt: {
      en: 'Notice to all creditors and debtors to lodge claims or pay debts within 30 days from publication.',
      af: 'Kennisgewing aan alle skuldeisers en skuldenaars om vorderinge in te dien of skuld te betaal binne 30 dae vanaf publikasie.'
    },
    body: {
      en: `NOTICE TO CREDITORS IN DECEASED ESTATES

All persons having claims against the undermentioned estate are hereby called upon to lodge their claims with the executor concerned within 30 days (or as indicated) from the date of publication hereof.

ESTATE NUMBER: 002341/2023
SURNAME: MOKOENA
FULL NAMES: Thabo Daniel
IDENTITY NUMBER: 6910145387081
LAST ADDRESS: 45 Grobler Street, Polokwane, 0699
DATE OF DEATH: 18 December 2023
MASTER'S OFFICE: Polokwane
EXECUTOR: Northern Fiduciary Services (Pty) Ltd
ADDRESS OF EXECUTOR: 78 Marshall Street, Polokwane, 0700
TELEPHONE: 015 295 3400
EMAIL: claims@northernfid.co.za

All creditors must submit documentary proof of their claims.`,
      af: `KENNISGEWING AAN SKULDEISERS IN BESTORWE BOEDELS

Alle persone wat vorderinge het teen die onderstaande boedel word hiermee versoek om hul vorderinge by die betrokke eksekuteur in te dien binne 30 dae (of soos aangedui) vanaf die datum van publikasie hiervan.

BOEDELNOMMER: 002341/2023
VAN: MOKOENA
VOLLEDIGE NAME: Thabo Daniel
IDENTITEITSNOMMER: 6910145387081
LAASTE ADRES: Groblerstraat 45, Polokwane, 0699
DATUM VAN OORLYE: 18 Desember 2023
MEESTER SE KANTOOR: Polokwane
EKSEKUTEUR: Northern Fidusiêre Dienste (Edms) Bpk
ADRES VAN EKSEKUTEUR: Marshallstraat 78, Polokwane, 0700
TELEFOON: 015 295 3400
E-POS: claims@northernfid.co.za

Alle skuldeisers moet dokumentêre bewys van hul vorderinge indien.`
    },
    publisher: 'Northern Fiduciary Services (Pty) Ltd',
    contactName: 'Patricia Maluleke',
    contactEmail: 'claims@northernfid.co.za',
    contactPhone: '+27 15 295 3400',
    deadline: '28 Feb 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Thabo Daniel Mokoena',
        type: 'individual',
        idNumber: '6910145387081',
        role: 'Deceased'
      },
      fileNumber: '002341/2023',
      mastersOffice: "Master of the High Court, Polokwane",
      streetAddress: '45 Grobler Street, Polokwane, 0699',
      noticeType: 'Form J187 - Notice to Creditors',
      legalBasis: 'Administration of Estates Act, 1965'
    }
  },

  {
    id: 'estates-006',
    title: {
      en: 'Estate Late Elizabeth Mary Johnson - Account Lying for Inspection',
      af: 'Boedel Wyle Elizabeth Mary Johnson - Rekening Lê ter Insae'
    },
    category: 'estates-liquidation-distribution',
    publishDate: '01 Feb 2024',
    location: 'Port Elizabeth, Eastern Cape',
    referenceNumber: 'EST-2024-006-PE',
    excerpt: {
      en: 'Liquidation and distribution account will lie for inspection for 21 days at the Master\'s Office.',
      af: 'Likwidasie en distribusierekening sal vir 21 dae ter insae lê by die Meester se Kantoor.'
    },
    body: {
      en: `NOTICE OF LIQUIDATION AND DISTRIBUTION ACCOUNT LYING FOR INSPECTION

In the Estate of the late Elizabeth Mary Johnson (Identity Number: 5309125134086), who died on 2 November 2023.

Notice is hereby given that the liquidation and distribution account in the above estate will lie open for inspection by all persons interested therein for a period of 21 days from the date of publication at:

1. The Master's Office, Mthatha
2. The Magistrate's Office, Port Elizabeth

Estate Number: 009887/2023
Executor: Eastern Cape Trust Corporation
Executor's Address: 120 Cape Road, Mill Park, Port Elizabeth, 6001
Telephone: 041 582 4100
Email: estates@ectrust.co.za

Any objections must be lodged with the Master in writing before the expiry of the said period.`,
      af: `KENNISGEWING VAN LIKWIDASIE EN DISTRIBUSIEREKENING WAT TER INSAE LÊ

In die Boedel van wyle Elizabeth Mary Johnson (Identiteitsnommer: 5309125134086), wat oorlede is op 2 November 2023.

Kennis geskied hiermee dat die likwidasie en distribusierekening in bogenoemde boedel ter insae sal lê vir alle belangstellende persone vir 'n tydperk van 21 dae vanaf die datum van publikasie by:

1. Die Meester se Kantoor, Mthatha
2. Die Landdros se Kantoor, Port Elizabeth

Boedelnommer: 009887/2023
Eksekuteur: Oos-Kaap Trust Korporasie
Eksekuteur se Adres: Kaapweg 120, Mill Park, Port Elizabeth, 6001
Telefoon: 041 582 4100
E-pos: estates@ectrust.co.za

Enige besware moet skriftelik by die Meester ingedien word voor die verstryking van genoemde tydperk.`
    },
    publisher: 'Eastern Cape Trust Corporation',
    contactName: 'Michael Stevens',
    contactEmail: 'estates@ectrust.co.za',
    contactPhone: '+27 41 582 4100',
    deadline: '22 Feb 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Elizabeth Mary Johnson',
        type: 'individual',
        idNumber: '5309125134086',
        role: 'Deceased'
      },
      fileNumber: '009887/2023',
      mastersOffice: "Master of the High Court, Mthatha",
      magistrateOffice: "Port Elizabeth Magistrate's Court",
      streetAddress: '120 Cape Road, Mill Park, Port Elizabeth, 6001',
      noticeType: 'Form J193 - Liquidation Account',
      legalBasis: 'Administration of Estates Act, 1965 Section 35(5)',
      eventDate: '22 Feb 2024'
    }
  },

  {
    id: 'estates-007',
    title: {
      en: 'Estate Late Pieter Hendrik Viljoen - Notice to Creditors',
      af: 'Boedel Wyle Pieter Hendrik Viljoen - Kennisgewing aan Skuldeisers'
    },
    category: 'estates-creditors-debtors',
    publishDate: '05 Feb 2024',
    location: 'Nelspruit, Mpumalanga',
    referenceNumber: 'EST-2024-007-NSP',
    excerpt: {
      en: 'All creditors are required to lodge claims within 30 days from date of publication.',
      af: 'Alle skuldeisers word versoek om vorderinge in te dien binne 30 dae vanaf datum van publikasie.'
    },
    body: {
      en: `FORM J187
NOTICE TO CREDITORS IN DECEASED ESTATES

Notice is hereby given that all persons having claims against the estate of the late Pieter Hendrik Viljoen, who died on 20 January 2024, are hereby required to lodge their claims with the undersigned within 30 days from the date of publication of this notice.

FULL NAMES: Pieter Hendrik Viljoen
IDENTITY NUMBER: 4505065211088
DATE OF DEATH: 20 January 2024
ESTATE NUMBER: 000876/2024
MASTER'S OFFICE: Nelspruit
LAST RESIDENTIAL ADDRESS: Farm Doornkop 234 JT, Nelspruit District

EXECUTOR: Lowveld Fiduciary Services
POSTAL ADDRESS: PO Box 2341, Nelspruit, 1200
PHYSICAL ADDRESS: 34 Brown Street, Nelspruit, 1200
TELEPHONE: 013 752 5600
FAX: 013 752 5601
EMAIL: info@lowveldfiduciary.co.za
CONTACT PERSON: Mrs. A. van Rensburg

Creditors who fail to lodge their claims within the specified period will be excluded from any distribution made.`,
      af: `VORM J187
KENNISGEWING AAN SKULDEISERS IN BESTORWE BOEDELS

Kennis geskied hiermee dat alle persone wat vorderinge het teen die boedel van wyle Pieter Hendrik Viljoen, wat oorlede is op 20 Januarie 2024, hiermee versoek word om hul vorderinge by die ondergetekende in te dien binne 30 dae vanaf die datum van publikasie van hierdie kennisgewing.

VOLLEDIGE NAME: Pieter Hendrik Viljoen
IDENTITEITSNOMMER: 4505065211088
DATUM VAN OORLYE: 20 Januarie 2024
BOEDELNOMMER: 000876/2024
MEESTER SE KANTOOR: Nelspruit
LAASTE WOONADRES: Plaas Doornkop 234 JT, Nelspruit Distrik

EKSEKUTEUR: Lowveld Fidusiêre Dienste
POSADRES: Posbus 2341, Nelspruit, 1200
FISIESE ADRES: Brownstraat 34, Nelspruit, 1200
TELEFOON: 013 752 5600
FAKS: 013 752 5601
E-POS: info@lowveldfiduciary.co.za
KONTAKPERSOON: Mev. A. van Rensburg

Skuldeisers wat versuim om hul vorderinge binne die gespesifiseerde tydperk in te dien, sal uitgesluit word van enige uitdeling wat gemaak word.`
    },
    publisher: 'Lowveld Fiduciary Services',
    contactName: 'Anna van Rensburg',
    contactEmail: 'info@lowveldfiduciary.co.za',
    contactPhone: '+27 13 752 5600',
    deadline: '06 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Pieter Hendrik Viljoen',
        type: 'individual',
        idNumber: '4505065211088',
        role: 'Deceased'
      },
      fileNumber: '000876/2024',
      mastersOffice: "Master of the High Court, Nelspruit",
      propertyDescription: 'Farm Doornkop 234 JT, Nelspruit District',
      noticeType: 'Form J187 - Notice to Creditors',
      legalBasis: 'Administration of Estates Act, 1965'
    }
  },

  {
    id: 'estates-008',
    title: {
      en: 'Estate Late Maria Magdalena Kruger - Final Account',
      af: 'Boedel Wyle Maria Magdalena Kruger - Finale Rekening'
    },
    category: 'estates-liquidation-distribution',
    publishDate: '08 Feb 2024',
    location: 'Kimberley, Northern Cape',
    referenceNumber: 'EST-2024-008-KIM',
    excerpt: {
      en: 'The liquidation and distribution account in the above estate will lie for inspection for 21 days.',
      af: 'Die likwidasie en distribusierekening in bogenoemde boedel sal vir 21 dae ter insae lê.'
    },
    body: {
      en: `In the Estate of the late Maria Magdalena Kruger, who died on 5 December 2023 at Kimberley.

In terms of Section 35(5) of the Administration of Estates Act, 1965 (Act No. 66 of 1965), notice is hereby given that a liquidation and distribution account in the above estate will lie open for inspection by all persons interested therein for a period of 21 days from the date of publication hereof at the offices of:

The Master of the High Court, Kimberley
The Magistrate, Kimberley

Identity Number: 4208150142089
Estate Number: 007654/2023
Date of Death: 5 December 2023

Executor: Northern Cape Executor Services (Pty) Ltd
Physical Address: 56 Du Toitspan Road, Kimberley, 8301
Postal Address: PO Box 1456, Kimberley, 8300
Contact Person: Mr. D.J. Steyn
Telephone: 053 831 2700
Email: dj.steyn@ncexecutors.co.za

Should no objections be received within the stated period, the Executor will proceed to make final distribution in accordance with the account.`,
      af: `In die Boedel van wyle Maria Magdalena Kruger, wat oorlede is op 5 Desember 2023 te Kimberley.

Ingevolge Artikel 35(5) van die Boedelwet, 1965 (Wet No. 66 van 1965), word hiermee kennis gegee dat 'n likwidasie en distribusierekening in bogenoemde boedel ter insae sal lê vir alle belangstellende persone vir 'n tydperk van 21 dae vanaf die datum van publikasie hiervan by die kantore van:

Die Meester van die Hoë Hof, Kimberley
Die Landdros, Kimberley

Identiteitsnommer: 4208150142089
Boedelnommer: 007654/2023
Datum van Oorlye: 5 Desember 2023

Eksekuteur: Noord-Kaap Eksekuteursdienste (Edms) Bpk
Fisiese Adres: Du Toitspanweg 56, Kimberley, 8301
Posadres: Posbus 1456, Kimberley, 8300
Kontakpersoon: Mnr. D.J. Steyn
Telefoon: 053 831 2700
E-pos: dj.steyn@ncexecutors.co.za

Indien geen besware binne die gestelde tydperk ontvang word nie, sal die Eksekuteur oorgaan tot finale uitdeling in ooreenstemming met die rekening.`
    },
    publisher: 'Northern Cape Executor Services (Pty) Ltd',
    contactName: 'D.J. Steyn',
    contactEmail: 'dj.steyn@ncexecutors.co.za',
    contactPhone: '+27 53 831 2700',
    deadline: '29 Feb 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Maria Magdalena Kruger',
        type: 'individual',
        idNumber: '4208150142089',
        role: 'Deceased'
      },
      fileNumber: '007654/2023',
      mastersOffice: "Master of the High Court, Kimberley",
      magistrateOffice: "Kimberley Magistrate's Court",
      streetAddress: '56 Du Toitspan Road, Kimberley, 8301',
      noticeType: 'Form J193 - Final Account',
      legalBasis: 'Administration of Estates Act, 1965 Section 35(5)',
      eventDate: '29 Feb 2024'
    }
  },

  {
    id: 'estates-009',
    title: {
      en: 'Estate Late Sipho Wiseman Nkosi - Creditors Must Lodge Claims',
      af: 'Boedel Wyle Sipho Wiseman Nkosi - Skuldeisers Moet Vorderinge Indien'
    },
    category: 'estates-creditors-debtors',
    publishDate: '12 Feb 2024',
    location: 'Johannesburg, Gauteng',
    referenceNumber: 'EST-2024-009-JHB',
    excerpt: {
      en: 'Notice to creditors in the Estate Late Sipho Wiseman Nkosi to lodge claims within 30 days.',
      af: 'Kennisgewing aan skuldeisers in die Boedel Wyle Sipho Wiseman Nkosi om vorderinge binne 30 dae in te dien.'
    },
    body: {
      en: `ADMINISTRATION OF ESTATES ACT, 1965 (ACT NO. 66 OF 1965)
NOTICE TO CREDITORS IN DECEASED ESTATES

All persons having claims against the undermentioned estate are hereby called upon to lodge their claims with the executor within 30 days from the date of publication hereof.

Estate Number: 003421/2024
Surname and Full Names: NKOSI, Sipho Wiseman
Identity Number: 7503095784086
Last Address: 234 Steve Biko Road, Yeoville, Johannesburg, 2198
Date of Death: 28 January 2024
Master's Office: Johannesburg

Executor: Johannesburg Estate Services (Pty) Ltd
Executor's Address:
Physical: Suite 405, 11 Diagonal Street, Johannesburg, 2001
Postal: PO Box 61234, Marshalltown, 2107
Telephone: 011 834 5600
Email: estates@jesservices.co.za
Contact Person: Ms. Noluthando Mthembu

Claims must be accompanied by full particulars and supporting documentation.
Late claims may be excluded from distribution.`,
      af: `BOEDELWET, 1965 (WET NO. 66 VAN 1965)
KENNISGEWING AAN SKULDEISERS IN BESTORWE BOEDELS

Alle persone met vorderinge teen die onderstaande boedel word hiermee versoek om hul vorderinge by die eksekuteur in te dien binne 30 dae vanaf die datum van publikasie hiervan.

Boedelnommer: 003421/2024
Van en Volledige Name: NKOSI, Sipho Wiseman
Identiteitsnommer: 7503095784086
Laaste Adres: Steve Bikoweg 234, Yeoville, Johannesburg, 2198
Datum van Oorlye: 28 Januarie 2024
Meester se Kantoor: Johannesburg

Eksekuteur: Johannesburg Boedeldienste (Edms) Bpk
Eksekuteur se Adres:
Fisies: Suite 405, Diagonaalstraat 11, Johannesburg, 2001
Pos: Posbus 61234, Marshalltown, 2107
Telefoon: 011 834 5600
E-pos: estates@jesservices.co.za
Kontakpersoon: Me. Noluthando Mthembu

Vorderinge moet vergesel wees van volledige besonderhede en ondersteunende dokumentasie.
Laat vorderinge kan van distribusie uitgesluit word.`
    },
    publisher: 'Johannesburg Estate Services (Pty) Ltd',
    contactName: 'Noluthando Mthembu',
    contactEmail: 'estates@jesservices.co.za',
    contactPhone: '+27 11 834 5600',
    deadline: '13 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Sipho Wiseman Nkosi',
        type: 'individual',
        idNumber: '7503095784086',
        role: 'Deceased'
      },
      fileNumber: '003421/2024',
      mastersOffice: "Master of the High Court, Johannesburg",
      streetAddress: '234 Steve Biko Road, Yeoville, Johannesburg, 2198',
      noticeType: 'Form J187 - Notice to Creditors',
      legalBasis: 'Administration of Estates Act, 1965'
    }
  },

  {
    id: 'estates-010',
    title: {
      en: 'Estate Late Catherina Susan Wessels - Distribution Account',
      af: 'Boedel Wyle Catherina Susan Wessels - Distribusierekening'
    },
    category: 'estates-liquidation-distribution',
    publishDate: '15 Feb 2024',
    location: 'Rustenburg, North West',
    referenceNumber: 'EST-2024-010-RST',
    excerpt: {
      en: 'First liquidation and distribution account will lie for inspection at the Master\'s Office for 21 days.',
      af: 'Eerste likwidasie en distribusierekening sal vir 21 dae ter insae lê by die Meester se Kantoor.'
    },
    body: {
      en: `FORM J193
LIQUIDATION AND DISTRIBUTION ACCOUNTS IN DECEASED ESTATES LYING FOR INSPECTION

In terms of section 35(5) of Act 66 of 1965, notice is hereby given that copies of the liquidation and distribution accounts in the estates specified below will be open for the inspection of all persons interested therein for a period of 21 days (or shorter or longer if specifically indicated) from the date of publication hereof.

Should no objection be received, the executor shall proceed to make payment in accordance with the accounts.

Estate Number: 006543/2023
Surname: WESSELS
Full Names: Catherina Susan
Identity Number: 5606140123085
Last Address: 89 President Street, Rustenburg, 0299
Date of Death: 10 November 2023

The account will lie for inspection at:
- Master's Office, Mmabatho
- Magistrate's Office, Rustenburg

Executor: Platinum Fiduciary Services
Address: 45 Heysteck Street, Rustenburg, 0300
Tel: 014 592 3400
Email: estates@platinumfid.co.za
Contact: Mr. Johannes Malan`,
      af: `VORM J193
LIKWIDASIE EN DISTRIBUSIEREKENINGS IN BESTORWE BOEDELS WAT TER INSAE LÊ

Ingevolge artikel 35(5) van Wet 66 van 1965 word hiermee kennis gegee dat duplikate van die likwidasie en distribusierekenings in die boedels hieronder vermeld, in die kantore daarin genoem gedurende 'n tydperk van 21 dae (of korter of langer indien spesifiek aangedui) vanaf die datum van publikasie hiervan ter insae lê van alle persone wat daarby belang het.

Indien binne genoemde tydperk geen besware daarteen by die betrokke Meester ingedien word nie, gaan die eksekuteur oor tot uitbetalings ingevolge gemelde rekenings.

Boedelnommer: 006543/2023
Van: WESSELS
Volledige Name: Catherina Susan
Identiteitsnommer: 5606140123085
Laaste Adres: Presidentstraat 89, Rustenburg, 0299
Datum van Oorlye: 10 November 2023

Die rekening lê ter insae by:
- Meester se Kantoor, Mmabatho
- Landdros se Kantoor, Rustenburg

Eksekuteur: Platinum Fidusiêre Dienste
Adres: Heystekstraat 45, Rustenburg, 0300
Tel: 014 592 3400
E-pos: estates@platinumfid.co.za
Kontak: Mnr. Johannes Malan`
    },
    publisher: 'Platinum Fiduciary Services',
    contactName: 'Johannes Malan',
    contactEmail: 'estates@platinumfid.co.za',
    contactPhone: '+27 14 592 3400',
    deadline: '07 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Catherina Susan Wessels',
        type: 'individual',
        idNumber: '5606140123085',
        role: 'Deceased'
      },
      fileNumber: '006543/2023',
      mastersOffice: "Master of the High Court, Mmabatho",
      magistrateOffice: "Rustenburg Magistrate's Court",
      streetAddress: '89 President Street, Rustenburg, 0299',
      noticeType: 'Form J193 - Liquidation Account',
      legalBasis: 'Administration of Estates Act, 1965 Section 35(5)',
      eventDate: '07 Mar 2024'
    }
  },

  {
    id: 'estates-011',
    title: {
      en: 'Estate Late David Arthur Jones - Urgent Notice to Creditors',
      af: 'Boedel Wyle David Arthur Jones - Dringende Kennisgewing aan Skuldeisers'
    },
    category: 'estates-creditors-debtors',
    publishDate: '19 Feb 2024',
    location: 'George, Western Cape',
    referenceNumber: 'EST-2024-011-GRG',
    excerpt: {
      en: 'All creditors must lodge claims within 30 days. Late claims will be excluded.',
      af: 'Alle skuldeisers moet vorderinge binne 30 dae indien. Laat vorderinge sal uitgesluit word.'
    },
    body: {
      en: `Notice is hereby given to all creditors to lodge their claims against the Estate of the late David Arthur Jones with the Executor within thirty (30) days of the date of publication of this notice.

Deceased's Details:
Full Names: David Arthur Jones
Identity Number: 5110085197083
Date of Death: 5 February 2024
Last Known Address: 12 York Street, George, 6529
Marital Status: Married in community of property

Estate Details:
Estate Number: 001234/2024
Master's Office: Cape Town
Executor: Garden Route Fiduciary Services CC

Executor Contact Details:
Physical Address: 78 Courtenay Street, George, 6530
Postal Address: PO Box 987, George, 6530
Telephone: 044 874 3200
Email: estates@gardenroutefid.co.za
Reference: DAJ/2024/011

Claims must include:
- Full details of the claim
- Supporting documentation
- Claimant's contact details and banking information

IMPORTANT: Creditors who fail to lodge their claims within the specified period will be excluded from any distribution made in this estate.`,
      af: `Kennis geskied hiermee aan alle skuldeisers om hul vorderinge teen die Boedel van wyle David Arthur Jones by die Eksekuteur in te dien binne dertig (30) dae vanaf die datum van publikasie van hierdie kennisgewing.

Oorledene se Besonderhede:
Volledige Name: David Arthur Jones
Identiteitsnommer: 5110085197083
Datum van Oorlye: 5 Februarie 2024
Laaste Bekende Adres: Yorkstraat 12, George, 6529
Huwelikstatus: Getroud binne gemeenskap van goedere

Boedel Besonderhede:
Boedelnommer: 001234/2024
Meester se Kantoor: Kaapstad
Eksekuteur: Garden Route Fidusiêre Dienste BK

Eksekuteur Kontakbesonderhede:
Fisiese Adres: Courtenaystraat 78, George, 6530
Posadres: Posbus 987, George, 6530
Telefoon: 044 874 3200
E-pos: estates@gardenroutefid.co.za
Verwysing: DAJ/2024/011

Vorderinge moet insluit:
- Volledige besonderhede van die vordering
- Ondersteunende dokumentasie
- Eiser se kontakbesonderhede en bankinligting

BELANGRIK: Skuldeisers wat versuim om hul vorderinge binne die gespesifiseerde tydperk in te dien, sal uitgesluit word van enige uitdeling in hierdie boedel.`
    },
    publisher: 'Garden Route Fiduciary Services CC',
    contactName: 'Riaan Pretorius',
    contactEmail: 'estates@gardenroutefid.co.za',
    contactPhone: '+27 44 874 3200',
    deadline: '20 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'David Arthur Jones',
        type: 'individual',
        idNumber: '5110085197083',
        role: 'Deceased'
      },
      fileNumber: '001234/2024',
      mastersOffice: "Master of the High Court, Cape Town",
      streetAddress: '12 York Street, George, 6529',
      noticeType: 'Form J187 - Notice to Creditors',
      legalBasis: 'Administration of Estates Act, 1965'
    }
  },

  {
    id: 'estates-012',
    title: {
      en: 'Estate Late Nomvula Grace Dladla - Second and Final Account',
      af: 'Boedel Wyle Nomvula Grace Dladla - Tweede en Finale Rekening'
    },
    category: 'estates-liquidation-distribution',
    publishDate: '22 Feb 2024',
    location: 'Richards Bay, KwaZulu-Natal',
    referenceNumber: 'EST-2024-012-RB',
    excerpt: {
      en: 'Second and final liquidation and distribution account lies for inspection for 21 days.',
      af: 'Tweede en finale likwidasie en distribusierekening lê vir 21 dae ter insae.'
    },
    body: {
      en: `NOTICE: LIQUIDATION AND DISTRIBUTION ACCOUNT

The Second and Final Liquidation and Distribution Account in the Estate of the late Nomvula Grace Dladla will lie for inspection by all persons interested therein for a period of 21 days from the date of publication hereof at the following offices:

1. Master of the High Court, Durban
2. Magistrate's Court, Richards Bay

Estate Information:
Deceased: Nomvula Grace Dladla
Identity Number: 5803165234089
Date of Death: 18 September 2023
Estate Number: 008765/2023
Nature of Estate: Intestate

Inspection Period: 21 days from 22 February 2024
Objection Deadline: 14 March 2024

Executor Details:
Executor: Zululand Executors (Pty) Ltd
Physical Address: 34 Kruger Street, Richards Bay, 3900
Postal Address: Private Bag X9876, Richards Bay, 3900
Contact Person: Mrs. Zanele Khumalo
Telephone: 035 789 4500
Email: zkhumalo@zululandexecutors.co.za

Any person who has an objection to the account must lodge such objection in writing with the Master before the expiry of the 21-day period.`,
      af: `KENNISGEWING: LIKWIDASIE EN DISTRIBUSIEREKENING

Die Tweede en Finale Likwidasie en Distribusierekening in die Boedel van wyle Nomvula Grace Dladla sal ter insae lê vir alle belangstellende persone vir 'n tydperk van 21 dae vanaf die datum van publikasie hiervan by die volgende kantore:

1. Meester van die Hoë Hof, Durban
2. Landdroshof, Richards Bay

Boedel Inligting:
Oorledene: Nomvula Grace Dladla
Identiteitsnommer: 5803165234089
Datum van Oorlye: 18 September 2023
Boedelnommer: 008765/2023
Aard van Boedel: Intestaat

Inspeksie Tydperk: 21 dae vanaf 22 Februarie 2024
Beswaar Sperdatum: 14 Maart 2024

Eksekuteur Besonderhede:
Eksekuteur: Zululand Eksekuteurs (Edms) Bpk
Fisiese Adres: Krugerstraat 34, Richards Bay, 3900
Posadres: Privaatsak X9876, Richards Bay, 3900
Kontakpersoon: Mev. Zanele Khumalo
Telefoon: 035 789 4500
E-pos: zkhumalo@zululandexecutors.co.za

Enige persoon wat 'n beswaar teen die rekening het, moet sodanige beswaar skriftelik by die Meester indien voor die verstryking van die 21-dae tydperk.`
    },
    publisher: 'Zululand Executors (Pty) Ltd',
    contactName: 'Zanele Khumalo',
    contactEmail: 'zkhumalo@zululandexecutors.co.za',
    contactPhone: '+27 35 789 4500',
    deadline: '14 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Nomvula Grace Dladla',
        type: 'individual',
        idNumber: '5803165234089',
        role: 'Deceased'
      },
      fileNumber: '008765/2023',
      mastersOffice: "Master of the High Court, Durban",
      magistrateOffice: "Richards Bay Magistrate's Court",
      streetAddress: '34 Kruger Street, Richards Bay, 3900',
      noticeType: 'Form J193 - Second and Final Account',
      legalBasis: 'Administration of Estates Act, 1965 Section 35(5)',
      eventDate: '14 Mar 2024'
    }
  },

  {
    id: 'estates-013',
    title: {
      en: 'Estate Late Willem Frederick Smit - Notice to Creditors and Debtors',
      af: 'Boedel Wyle Willem Frederick Smit - Kennisgewing aan Skuldeisers en Skuldenaars'
    },
    category: 'estates-creditors-debtors',
    publishDate: '26 Feb 2024',
    location: 'Stellenbosch, Western Cape',
    referenceNumber: 'EST-2024-013-STL',
    excerpt: {
      en: 'All persons having claims or owing debts must respond within 30 days from publication.',
      af: 'Alle persone met vorderinge of wat skuld, moet binne 30 dae vanaf publikasie reageer.'
    },
    body: {
      en: `NOTICE TO CREDITORS AND DEBTORS
IN THE ESTATE OF THE LATE WILLEM FREDERICK SMIT

All persons having claims against or owing money to the Estate of the late Willem Frederick Smit are hereby notified to submit their claims or pay their debts to the undersigned Executor within thirty (30) days from the date of publication of this notice.

Particulars of Deceased:
Full Names: Willem Frederick Smit
Identity Number: 4702075098087
Date of Birth: 7 February 1947
Date of Death: 8 February 2024
Last Address: Wine Estate Road, Stellenbosch, 7600
Occupation: Wine Farmer (Retired)

Estate Particulars:
Estate Number: 001789/2024
Master's Office: Cape Town
Executor Appointed: 20 February 2024

Appointed Executor:
Winelands Trust Company (Pty) Ltd
Registration Number: 1998/012345/07
Physical Address: 15 Church Street, Stellenbosch, 7600
Postal Address: PO Box 456, Stellenbosch, 7599
Contact Person: Mr. Francois du Toit
Telephone: 021 883 4200
Fax: 021 883 4201
Email: estates@winelandstrust.co.za

Requirements for Claims:
All claims must be submitted in writing and must include:
- Full particulars of the claim
- Supporting documents (invoices, agreements, etc.)
- Claimant's full contact details and banking details
- Proof of identity

Claims not lodged within the specified period may be excluded from distribution.

Dated at Stellenbosch this 26th day of February 2024.`,
      af: `KENNISGEWING AAN SKULDEISERS EN SKULDENAARS
IN DIE BOEDEL VAN WYLE WILLEM FREDERICK SMIT

Alle persone wat vorderinge het teen of geld skuld aan die Boedel van wyle Willem Frederick Smit word hiermee in kennis gestel om hul vorderinge in te dien of hul skuld te betaal aan die ondergetekende Eksekuteur binne dertig (30) dae vanaf die datum van publikasie van hierdie kennisgewing.

Besonderhede van Oorledene:
Volledige Name: Willem Frederick Smit
Identiteitsnommer: 4702075098087
Geboortedatum: 7 Februarie 1947
Datum van Oorlye: 8 Februarie 2024
Laaste Adres: Wynplaaspad, Stellenbosch, 7600
Beroep: Wynboer (Afgetree)

Boedel Besonderhede:
Boedelnommer: 001789/2024
Meester se Kantoor: Kaapstad
Eksekuteur Aangestel: 20 Februarie 2024

Aangestelde Eksekuteur:
Winelands Trust Maatskappy (Edms) Bpk
Registrasienommer: 1998/012345/07
Fisiese Adres: Kerkstraat 15, Stellenbosch, 7600
Posadres: Posbus 456, Stellenbosch, 7599
Kontakpersoon: Mnr. Francois du Toit
Telefoon: 021 883 4200
Faks: 021 883 4201
E-pos: estates@winelandstrust.co.za

Vereistes vir Vorderinge:
Alle vorderinge moet skriftelik ingedien word en moet insluit:
- Volledige besonderhede van die vordering
- Ondersteunende dokumente (fakture, ooreenkomste, ens.)
- Eiser se volledige kontakbesonderhede en bankbesonderhede
- Bewys van identiteit

Vorderinge wat nie binne die gespesifiseerde tydperk ingedien word nie, kan van distribusie uitgesluit word.

Gedateer te Stellenbosch hierdie 26ste dag van Februarie 2024.`
    },
    publisher: 'Winelands Trust Company (Pty) Ltd',
    contactName: 'Francois du Toit',
    contactEmail: 'estates@winelandstrust.co.za',
    contactPhone: '+27 21 883 4200',
    deadline: '27 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Willem Frederick Smit',
        type: 'individual',
        idNumber: '4702075098087',
        role: 'Deceased'
      },
      fileNumber: '001789/2024',
      mastersOffice: "Master of the High Court, Cape Town",
      streetAddress: 'Wine Estate Road, Stellenbosch, 7600',
      noticeType: 'Form J187 - Notice to Creditors and Debtors',
      legalBasis: 'Administration of Estates Act, 1965',
      metadata: {
        occupation: 'Wine Farmer (Retired)',
        maritalStatus: 'Married'
      }
    }
  },

  {
    id: 'estates-014',
    title: {
      en: 'Estate Late Fatima Bibi Ismail - Supplementary Account',
      af: 'Boedel Wyle Fatima Bibi Ismail - Aanvullende Rekening'
    },
    category: 'estates-liquidation-distribution',
    publishDate: '29 Feb 2024',
    location: 'Lenasia, Gauteng',
    referenceNumber: 'EST-2024-014-LEN',
    excerpt: {
      en: 'Supplementary liquidation and distribution account will lie for inspection for 14 days.',
      af: 'Aanvullende likwidasie en distribusierekening sal vir 14 dae ter insae lê.'
    },
    body: {
      en: `NOTICE OF SUPPLEMENTARY LIQUIDATION AND DISTRIBUTION ACCOUNT

In the Estate of the late Fatima Bibi Ismail (born 23 May 1958, died 12 November 2023).

Notice is hereby given in terms of Section 35(5) of the Administration of Estates Act, 1965, that a Supplementary Liquidation and Distribution Account in the above-mentioned estate will lie open for inspection at the following offices for a period of 14 days from the date of publication:

Inspection Offices:
- Master of the High Court, Johannesburg
- Magistrate's Office, Lenasia

Estate Details:
Identity Number: 5805235147082
Estate Number: 009234/2023
Date of Death: 12 November 2023
Last Address: 45 Nirvana Drive, Lenasia South, 1827

Reason for Supplementary Account:
Additional assets discovered after filing of first account

Executor Information:
Name: Islamic Estates & Trusts (Pty) Ltd
Physical Address: 23 Mint Road, Fordsburg, Johannesburg, 2092
Postal Address: PO Box 12876, Johannesburg, 2000
Contact Person: Mr. Ahmed Karachi
Telephone: 011 838 7600
Email: estates@islamictrusts.co.za
Reference: FBI-2023-009234

Inspection Period: 14 days
Any objections must be lodged with the Master in writing before expiry of the inspection period.

DATED at JOHANNESBURG this 29th day of February 2024.`,
      af: `KENNISGEWING VAN AANVULLENDE LIKWIDASIE EN DISTRIBUSIEREKENING

In die Boedel van wyle Fatima Bibi Ismail (gebore 23 Mei 1958, oorlede 12 November 2023).

Kennis geskied hiermee ingevolge Artikel 35(5) van die Boedelwet, 1965, dat 'n Aanvullende Likwidasie en Distribusierekening in bogenoemde boedel ter insae sal lê by die volgende kantore vir 'n tydperk van 14 dae vanaf die datum van publikasie:

Inspeksie Kantore:
- Meester van die Hoë Hof, Johannesburg
- Landdros se Kantoor, Lenasia

Boedel Besonderhede:
Identiteitsnommer: 5805235147082
Boedelnommer: 009234/2023
Datum van Oorlye: 12 November 2023
Laaste Adres: Nirvana Rylaan 45, Lenasia Suid, 1827

Rede vir Aanvullende Rekening:
Addisionele bates ontdek na indiening van eerste rekening

Eksekuteur Inligting:
Naam: Islamitiese Boedels & Trusts (Edms) Bpk
Fisiese Adres: Mintweg 23, Fordsburg, Johannesburg, 2092
Posadres: Posbus 12876, Johannesburg, 2000
Kontakpersoon: Mnr. Ahmed Karachi
Telefoon: 011 838 7600
E-pos: estates@islamictrusts.co.za
Verwysing: FBI-2023-009234

Inspeksie Tydperk: 14 dae
Enige besware moet skriftelik by die Meester ingedien word voor verstryking van die inspeksie tydperk.

GEDATEER te JOHANNESBURG hierdie 29ste dag van Februarie 2024.`
    },
    publisher: 'Islamic Estates & Trusts (Pty) Ltd',
    contactName: 'Ahmed Karachi',
    contactEmail: 'estates@islamictrusts.co.za',
    contactPhone: '+27 11 838 7600',
    deadline: '14 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Fatima Bibi Ismail',
        type: 'individual',
        idNumber: '5805235147082',
        role: 'Deceased'
      },
      fileNumber: '009234/2023',
      mastersOffice: "Master of the High Court, Johannesburg",
      magistrateOffice: "Lenasia Magistrate's Court",
      streetAddress: '45 Nirvana Drive, Lenasia South, 1827',
      noticeType: 'Form J193 - Supplementary Account',
      legalBasis: 'Administration of Estates Act, 1965 Section 35(5)',
      eventDate: '14 Mar 2024',
      metadata: {
        accountType: 'Supplementary',
        reason: 'Additional assets discovered'
      }
    }
  },

  {
    id: 'estates-015',
    title: {
      en: 'Estate Late Andries Jacobus Pretorius - Final Notice to Creditors',
      af: 'Boedel Wyle Andries Jacobus Pretorius - Finale Kennisgewing aan Skuldeisers'
    },
    category: 'estates-creditors-debtors',
    publishDate: '04 Mar 2024',
    location: 'Upington, Northern Cape',
    referenceNumber: 'EST-2024-015-UPN',
    excerpt: {
      en: 'Final notice to creditors - all claims must be lodged within 21 days or be forever barred.',
      af: 'Finale kennisgewing aan skuldeisers - alle vorderinge moet binne 21 dae ingedien word of vir ewig uitgesluit word.'
    },
    body: {
      en: `FINAL NOTICE TO CREDITORS
ESTATE LATE ANDRIES JACOBUS PRETORIUS

This is the FINAL NOTICE to all creditors in the Estate of the late Andries Jacobus Pretorius.

All persons having any claims against the said Estate are hereby given FINAL NOTICE to lodge their claims with the undersigned Executor within TWENTY-ONE (21) DAYS from the date of publication of this notice.

ANY CLAIMS NOT LODGED WITHIN THIS PERIOD WILL BE FOREVER BARRED.

Details of Deceased:
Surname and Full Names: PRETORIUS, Andries Jacobus
Identity Number: 3908145082081
Date of Death: 15 January 2024
Last Known Address: Farm Grootdrink 456, Upington District, 8801
Occupation: Farmer

Estate Information:
Estate Number: 000543/2024
Master's Office: Kimberley
Date Estate Reported: 25 January 2024
Type of Estate: Testate (Last Will and Testament dated 10 May 2021)

Executor:
Name: Kalahari Fiduciary Services
Registration: Close Corporation Reg. No. CK 2005/123456/23
Physical Address: 34 Schroder Street, Upington, 8800
Postal Address: Private Bag X5432, Upington, 8800
Contact Person: Mrs. Susan Steenkamp
Telephone: 054 332 4500
Fax: 054 332 4501
Email: estates@kalaharifd.co.za

Claim Lodgement Requirements:
1. Claims must be in writing
2. Include full particulars and amounts
3. Attach supporting documents
4. Provide claimant's identity document copy
5. Provide banking details for payment

WARNING: This is the final opportunity to lodge claims. Claims received after the deadline will not be considered.

DATED at UPINGTON this 4th day of March 2024.

________________________
KALAHARI FIDUCIARY SERVICES
EXECUTOR`,
      af: `FINALE KENNISGEWING AAN SKULDEISERS
BOEDEL WYLE ANDRIES JACOBUS PRETORIUS

Hierdie is die FINALE KENNISGEWING aan alle skuldeisers in die Boedel van wyle Andries Jacobus Pretorius.

Alle persone wat enige vorderinge het teen genoemde Boedel word hiermee FINALE KENNISGEWING gegee om hul vorderinge by die ondergetekende Eksekuteur in te dien binne EEN-EN-TWINTIG (21) DAE vanaf die datum van publikasie van hierdie kennisgewing.

ENIGE VORDERINGE WAT NIE BINNE HIERDIE TYDPERK INGEDIEN WORD NIE, SAL VIR EWIG UITGESLUIT WORD.

Besonderhede van Oorledene:
Van en Volledige Name: PRETORIUS, Andries Jacobus
Identiteitsnommer: 3908145082081
Datum van Oorlye: 15 Januarie 2024
Laaste Bekende Adres: Plaas Grootdrink 456, Upington Distrik, 8801
Beroep: Boer

Boedel Inligting:
Boedelnommer: 000543/2024
Meester se Kantoor: Kimberley
Datum Boedel Gerapporteer: 25 Januarie 2024
Tipe Boedel: Testamentêr (Laaste Wil en Testament gedateer 10 Mei 2021)

Eksekuteur:
Naam: Kalahari Fidusiêre Dienste
Registrasie: Beslote Korporasie Reg. Nr. CK 2005/123456/23
Fisiese Adres: Schrö derstraat 34, Upington, 8800
Posadres: Privaatsak X5432, Upington, 8800
Kontakpersoon: Mev. Susan Steenkamp
Telefoon: 054 332 4500
Faks: 054 332 4501
E-pos: estates@kalaharifd.co.za

Vereistes vir Indiening van Vorderinge:
1. Vorderinge moet skriftelik wees
2. Sluit volledige besonderhede en bedrae in
3. Heg ondersteunende dokumente aan
4. Verskaf eiser se identiteitsdokument afskrif
5. Verskaf bankbesonderhede vir betaling

WAARSKUWING: Hierdie is die finale geleentheid om vorderinge in te dien. Vorderinge wat na die sperdatum ontvang word, sal nie oorweeg word nie.

GEDATEER te UPINGTON hierdie 4de dag van Maart 2024.

________________________
KALAHARI FIDUSIÊRE DIENSTE
EKSEKUTEUR`
    },
    publisher: 'Kalahari Fiduciary Services',
    contactName: 'Susan Steenkamp',
    contactEmail: 'estates@kalaharifd.co.za',
    contactPhone: '+27 54 332 4500',
    deadline: '25 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Andries Jacobus Pretorius',
        type: 'individual',
        idNumber: '3908145082081',
        role: 'Deceased'
      },
      fileNumber: '000543/2024',
      mastersOffice: "Master of the High Court, Kimberley",
      propertyDescription: 'Farm Grootdrink 456, Upington District',
      streetAddress: 'Farm Grootdrink 456, Upington District, 8801',
      noticeType: 'Form J187 - Final Notice to Creditors',
      legalBasis: 'Administration of Estates Act, 1965',
      metadata: {
        estateType: 'Testate',
        willDate: '10 May 2021',
        occupation: 'Farmer',
        urgency: 'Final Notice'
      }
    }
  }
];
