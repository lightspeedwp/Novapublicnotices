/**
 * Nova Public Notices Portal - Liquor Licences Category Data
 * 
 * Includes applications for:
 * - New liquor licences
 * - Transfer of licences
 * - Removal of licences
 * - Alterations to existing licences
 * 
 * Total Entries: 12
 */

import { Notice } from '../noticeTypes';

export const liquorLicencesNotices: Notice[] = [
  {
    id: 'liquor-001',
    title: {
      en: 'Application for Transfer of Liquor Licence - The Golden Lion Tavern',
      af: 'Aansoek om Oordrag van Dranklis ensie - The Golden Lion Tavern'
    },
    category: 'liquor-licences',
    publishDate: '15 Jan 2024',
    location: 'Johannesburg, Gauteng',
    referenceNumber: 'LIQ-2024-001-JHB',
    excerpt: {
      en: 'Application for transfer of on-consumption liquor licence from current owner to new owner at The Golden Lion Tavern.',
      af: 'Aansoek om oordrag van op-verbruik dranklisensie vanaf huidige eienaar na nuwe eienaar by The Golden Lion Tavern.'
    },
    body: {
      en: `Notice is hereby given in terms of Section 55(1) of the Gauteng Liquor Act, 2003, that SIPHO JOHN MTHEMBU, Identity Number 7805125678089, intends to apply to the Gauteng Liquor Board for the transfer of the on-consumption liquor licence currently held by TSHEPO DAVID MOLEFE in respect of premises situated at 456 Commissioner Street, Johannesburg, 2001, Gauteng Province, trading as THE GOLDEN LION TAVERN.

The current licence holder's details:
Name: Tshepo David Molefe
ID Number: 6912075432087
Trading Name: The Golden Lion Tavern
Licence Number: GPL-2018-004567

Proposed new licence holder:
Name: Sipho John Mthembu  
ID Number: 7805125678089
Contact: 082 456 7890

The application will be open for inspection at the offices of the Gauteng Liquor Board and the Johannesburg Metropolitan Municipality during normal office hours.

Objections, if any, should be lodged in writing with the Gauteng Liquor Board, 119 Commiss ioner Street, Johannesburg, within 60 days from the date of publication of this notice, and a copy thereof furnished to the applicant at the address mentioned below.

Applicant's Address: 
456 Commissioner Street
Johannesburg, 2001
Email: smthembu@goldenlion.co.za
Tel: 011 334 5678`,
      af: `Kennis geskied hiermee ingevolge Artikel 55(1) van die Gauteng Drankwet, 2003, dat SIPHO JOHN MTHEMBU, Identiteitsnommer 7805125678089, van voorneme is om by die Gauteng Drankraad aansoek te doen om die oordrag van die op-verbruik dranklisensie wat tans gehou word deur TSHEPO DAVID MOLEFE ten opsigte van persele geleë te Kommissarisstraat 456, Johannesburg, 2001, Gauteng Provinsie, wat handel dryf as THE GOLDEN LION TAVERN.

Die huidige lisensiehouer se besonderhede:
Naam: Tshepo David Molefe
ID Nommer: 6912075432087
Handelsnaam: The Golden Lion Tavern
Lisensienommer: GPL-2018-004567

Voorgestelde nuwe lisensiehouer:
Naam: Sipho John Mthembu
ID Nommer: 7805125678089
Kontak: 082 456 7890

Die aansoek sal beskikbaar wees vir inspeksie by die kantore van die Gauteng Drankraad en die Johannesburg Metropolitaanse Munisipaliteit gedurende normale kantoorure.

Besware, indien enige, moet skriftelik ingedien word by die Gauteng Drankraad, Kommissarisstraat 119, Johannesburg, binne 60 dae vanaf die datum van publikasie van hierdie kennisgewing, en 'n afskrif daarvan aan die applikant verskaf word by die adres hieronder genoem.

Applikant se Adres:
Kommissarisstraat 456
Johannesburg, 2001
E-pos: smthembu@goldenlion.co.za
Tel: 011 334 5678`
    },
    publisher: 'Sipho John Mthembu',
    contactName: 'Sipho John Mthembu',
    contactEmail: 'smthembu@goldenlion.co.za',
    contactPhone: '+27 11 334 5678',
    deadline: '15 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Sipho John Mthembu',
        type: 'individual',
        idNumber: '7805125678089',
        role: 'Applicant'
      },
      secondaryParty: {
        name: 'Tshepo David Molefe',
        type: 'individual',
        idNumber: '6912075432087',
        role: 'Current Licence Holder'
      },
      licenceNumber: 'GPL-2018-004567',
      municipality: 'City of Johannesburg Metropolitan Municipality',
      streetAddress: '456 Commissioner Street, Johannesburg, 2001',
      applicationType: 'Transfer of Licence',
      noticeType: 'On-Consumption Liquor Licence Transfer',
      legalBasis: 'Gauteng Liquor Act, 2003 Section 55(1)'
    }
  },

  {
    id: 'liquor-002',
    title: {
      en: 'New Application for Retail Liquor Licence - Sunset Bottle Store',
      af: 'Nuwe Aansoek vir Kleinhandel Dranklisensie - Sunset Bottle Store'
    },
    category: 'liquor-licences',
    publishDate: '18 Jan 2024',
    location: 'Cape Town, Western Cape',
    referenceNumber: 'LIQ-2024-002-CT',
    excerpt: {
      en: 'Application for a new off-consumption retail liquor licence for Sunset Bottle Store in Camps Bay.',
      af: 'Aansoek vir \'n nuwe af-verbruik kleinhandel dranklisensie vir Sunset Bottle Store in Kampsbaai.'
    },
    body: {
      en: `NOTICE OF APPLICATION FOR LIQUOR LICENCE

Notice is hereby given in terms of Section 30 of the Western Cape Liquor Act, 2008 (Act No. 4 of 2008), that SARAH ELIZABETH WILLIAMS, ID Number 8206145231087, trading as SUNSET BOTTLE STORE, intends to apply to the Western Cape Liquor Authority for an off-consumption liquor licence in respect of the premises situated at:

Shop 5, Camps Bay Village
62 Camps Bay Drive
Camps Bay, Cape Town, 8005

Type of Licence Applied For: Off-Consumption (Retail)
Trading Name: Sunset Bottle Store
Trading Hours Proposed: Monday-Saturday 09:00-20:00, Sunday 10:00-18:00

The application and relevant documents are available for inspection at:
1. Western Cape Liquor Authority Offices, 4 Long Street, Cape Town
2. City of Cape Town Licensing Department, Civic Centre

Objections to the application must be lodged in writing with:
- The Western Cape Liquor Authority, Private Bag X9043, Cape Town, 8000
- A copy to the applicant at the address below

within SIXTY (60) DAYS from the date of this publication.

Objections must:
- Be in writing
- State the name and address of objector
- Specify grounds for objection
- Be signed by the objector

Applicant's Details:
Sarah Elizabeth Williams
Email: swilliams@sunsetbottle.co.za
Telephone: 021 438 5600
Address: Shop 5, Camps Bay Village, 62 Camps Bay Drive, Camps Bay, 8005`,
      af: `KENNISGEWING VAN AANSOEK VIR DRANKLISENSIE

Kennis geskied hiermee ingevolge Artikel 30 van die Wes-Kaap Drankwet, 2008 (Wet No. 4 van 2008), dat SARAH ELIZABETH WILLIAMS, ID Nommer 8206145231087, wat handel dryf as SUNSET BOTTLE STORE, van voorneme is om by die Wes-Kaap Drankowerheid aansoek te doen vir 'n af-verbruik dranklisensie ten opsigte van die persele geleë te:

Winkel 5, Kampsbaai Dorp
Kampsbaairy laan 62
Kampsbaai, Kaapstad, 8005

Tipe Lisensie Waarvoor Aansoek Gedoen Word: Af-Verbruik (Kleinhandel)
Handelsnaam: Sunset Bottle Store
Voorgestelde Handelsure: Maandag-Saterdag 09:00-20:00, Sondag 10:00-18:00

Die aansoek en relevante dokumente is beskikbaar vir inspeksie by:
1. Wes-Kaap Drankowerheid Kantore, Langstraat 4, Kaapstad
2. Stad Kaapstad Lisensiëring Departement, Burgersentrum

Besware teen die aansoek moet skriftelik ingedien word by:
- Die Wes-Kaap Drankowerheid, Privaatsak X9043, Kaapstad, 8000
- 'n Afskrif aan die applikant by die adres hieronder

binne SESTIG (60) DAE vanaf die datum van hierdie publikasie.

Besware moet:
- Skriftelik wees
- Die naam en adres van beswaarmaker vermeld
- Gronde vir beswaar spesifiseer
- Deur die beswaarmaker geteken wees

Applikant se Besonderhede:
Sarah Elizabeth Williams
E-pos: swilliams@sunsetbottle.co.za
Telefoon: 021 438 5600
Adres: Winkel 5, Kampsbaai Dorp, Kampsbaairy laan 62, Kampsbaai, 8005`
    },
    publisher: 'Sarah Elizabeth Williams',
    contactName: 'Sarah Elizabeth Williams',
    contactEmail: 'swilliams@sunsetbottle.co.za',
    contactPhone: '+27 21 438 5600',
    deadline: '18 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Sarah Elizabeth Williams',
        type: 'individual',
        idNumber: '8206145231087',
        role: 'Applicant'
      },
      municipality: 'City of Cape Town Metropolitan Municipality',
      streetAddress: 'Shop 5, Camps Bay Village, 62 Camps Bay Drive, Camps Bay, 8005',
      applicationType: 'New Application - Off-Consumption',
      noticeType: 'Retail Liquor Licence Application',
      legalBasis: 'Western Cape Liquor Act, 2008 Section 30',
      metadata: {
        tradingName: 'Sunset Bottle Store',
        tradingHours: 'Mon-Sat 09:00-20:00, Sun 10:00-18:00',
        licenceType: 'Off-Consumption Retail'
      }
    }
  },

  {
    id: 'liquor-003',
    title: {
      en: 'Removal of Liquor Licence - Ocean View Restaurant',
      af: 'Verwydering van Dranklisensie - Ocean View Restaurant'
    },
    category: 'liquor-licences',
    publishDate: '22 Jan 2024',
    location: 'Durban, KwaZulu-Natal',
    referenceNumber: 'LIQ-2024-003-DBN',
    excerpt: {
      en: 'Application for removal of on-consumption liquor licence to new premises location.',
      af: 'Aansoek vir verwydering van op-verbruik dranklisensie na nuwe persele ligging.'
    },
    body: {
      en: `NOTICE OF APPLICATION FOR REMOVAL OF LIQUOR LICENCE

Notice is hereby given in terms of the KwaZulu-Natal Liquor Licensing Act, 2010 (Act No. 6 of 2010), that OCEAN VIEW RESTAURANTS (PTY) LTD, Registration Number 2015/123456/07, holder of on-consumption liquor licence number KZN-2015-002341, intends to apply to the KwaZulu-Natal Liquor Authority for the removal of the said licence from the current premises to new premises.

CURRENT PREMISES:
345 Marine Parade
South Beach, Durban, 4001

NEW PREMISES:
The Gateway Shopping Centre, Shop L234
1 Palm Boulevard, Umhlanga Ridge, 4319

Licence Details:
Licence Number: KZN-2015-002341
Type: On-Consumption (Restaurant)
Current Trading Name: Ocean View Seafood Restaurant
Hours: 11:00-23:00 Daily

The application and relevant supporting documents may be inspected during office hours at:
- KwaZulu-Natal Liquor Authority, 270 Jabu Ndlovu Street, Pietermaritzburg
- eThekwini Municipality Licensing Office, Durban City Hall

Any person wishing to object to the granting of the application must lodge written objections with the KwaZulu-Natal Liquor Authority and furnish a copy to the applicant within 60 days from the date of publication of this notice.

Grounds for objection must be clearly stated and may include:
- Unsuitability of premises
- Potential public disturbance
- Objections from community members within 500m radius
- Non-compliance with zoning regulations

Contact Details for Objections and Enquiries:
Ocean View Restaurants (Pty) Ltd
Att: Ms. Priya Naidoo (Operations Director)
Email: liquorlicence@oceanviewrest.co.za
Tel: 031 337 4500
Fax: 031 337 4501`,
      af: `KENNISGEWING VAN AANSOEK VIR VERWYDERING VAN DRANKLISENSIE

Kennis geskied hiermee ingevolge die KwaZulu-Natal Dranklisensieringswet, 2010 (Wet No. 6 van 2010), dat OCEAN VIEW RESTAURANTS (PTY) LTD, Registrasienommer 2015/123456/07, houer van op-verbruik dranklisensie nommer KZN-2015-002341, van voorneme is om by die KwaZulu-Natal Drankowerheid aansoek te doen vir die verwydering van genoemde lisensie vanaf die huidige persele na nuwe persele.

HUIDIGE PERSELE:
Marine Parade 345
Suidstrand, Durban, 4001

NUWE PERSELE:
The Gateway Winkelsentrum, Winkel L234
Palm Boulevard 1, Umhlanga Ridge, 4319

Lisensie Besonderhede:
Lisensienommer: KZN-2015-002341
Tipe: Op-Verbruik (Restaurant)
Huidige Handelsnaam: Ocean View Seafood Restaurant
Ure: 11:00-23:00 Daagliks

Die aansoek en relevante ondersteunende dokumente kan gedurende kantoorure geïnspekteer word by:
- KwaZulu-Natal Drankowerheid, Jabu Ndlovustraat 270, Pietermaritzburg
- eThekwini Munisipaliteit Lisensiëring Kantoor, Durban Stadsaal

Enige persoon wat beswaar wil maak teen die toestaan van die aansoek moet skriftelike besware by die KwaZulu-Natal Drankowerheid indien en 'n afskrif aan die applikant verskaf binne 60 dae vanaf die datum van publikasie van hierdie kennisgewing.

Gronde vir beswaar moet duidelik vermeld word en kan insluit:
- Ongeskiktheid van persele
- Potensiële openbare steurnis
- Besware van gemeenskapslede binne 500m radius
- Nie-voldoening aan soneringregulasies

Kontakbesonderhede vir Besware en Navrae:
Ocean View Restaurants (Edms) Bpk
Att: Me. Priya Naidoo (Bedryfsdirekteur)
E-pos: liquorlicence@oceanviewrest.co.za
Tel: 031 337 4500
Faks: 031 337 4501`
    },
    publisher: 'Ocean View Restaurants (Pty) Ltd',
    contactName: 'Priya Naidoo',
    contactEmail: 'liquorlicence@oceanviewrest.co.za',
    contactPhone: '+27 31 337 4500',
    deadline: '22 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Ocean View Restaurants (Pty) Ltd',
        type: 'company',
        registrationNumber: '2015/123456/07',
        role: 'Licence Holder'
      },
      licenceNumber: 'KZN-2015-002341',
      municipality: 'eThekwini Metropolitan Municipality',
      streetAddress: 'The Gateway Shopping Centre, Shop L234, 1 Palm Boulevard, Umhlanga Ridge, 4319',
      applicationType: 'Removal of Licence',
      noticeType: 'On-Consumption Liquor Licence Removal',
      legalBasis: 'KwaZulu-Natal Liquor Licensing Act, 2010',
      metadata: {
        currentAddress: '345 Marine Parade, South Beach, Durban, 4001',
        newAddress: 'Shop L234, The Gateway, 1 Palm Boulevard, Umhlanga Ridge, 4319',
        tradingName: 'Ocean View Seafood Restaurant',
        tradingHours: '11:00-23:00 Daily'
      }
    }
  },

  {
    id: 'liquor-004',
    title: {
      en: 'Micro-Brewery Liquor Licence Application - Craft & Barrel',
      af: 'Mikro-Brouersy Dranklisensie Aansoek - Craft & Barrel'
    },
    category: 'liquor-licences',
    publishDate: '25 Jan 2024',
    location: 'Stellenbosch, Western Cape',
    referenceNumber: 'LIQ-2024-004-STL',
    excerpt: {
      en: 'Application for micro-manufacturing and on-consumption liquor licence for craft brewery.',
      af: 'Aansoek vir mikro-vervaardiging en op-verbruik dranklisensie vir ambagsbrou ery.'
    },
    body: {
      en: `LIQUOR LICENCE APPLICATION
MICRO-MANUFACTURING AND ON-CONSUMPTION

Notice is hereby given that CRAFT & BARREL BREWERIES CC, Registration Number CK 2023/654321/23, intends to apply to the Western Cape Liquor Authority for a micro-manufacturing liquor licence with on-consumption rights in respect of premises situated at:

The Old Mill Building
86 Dorp Street
Stellenbosch, 7600

The application is for:
1. Micro-manufacturing of craft beer (annual production not exceeding 500,000 litres)
2. On-consumption of liquor manufactured on premises (taproom)
3. Off-consumption sales of own manufactured products

Proposed Trading Hours:
Taproom: Wednesday-Sunday 12:00-22:00
Off-Sales: Wednesday-Sunday 10:00-20:00

Members of CC:
- David John Anderson (ID: 8105125432086) - 50% interest
- Christina Maria van Zyl (ID: 8308095123084) - 50% interest

The application, together with floor plans, fire safety certificate, and zoning compliance certificate, will be available for inspection at:
- Western Cape Liquor Authority, 4 Long Street, Cape Town, 8001
- Stellenbosch Municipality Offices, Plein Street, Stellenbosch, 7600

Objections must be submitted in writing within 60 days to:
Western Cape Liquor Authority
Private Bag X9043
Cape Town, 8000
Email: objections@wcliquor.gov.za

With a copy to:
Craft & Barrel Breweries CC
Att: David Anderson
Email: david@craftandbarrel.co.za
Tel: 021 887 6500

Grounds for objection may include health and safety concerns, noise pollution, traffic impact, or non-conformity with municipal bylaws.`,
      af: `DRANKLISENSIE AANSOEK
MIKRO-VERVAARDIGING EN OP-VERBRUIK

Kennis geskied hiermee dat CRAFT & BARREL BREWERIES BK, Registrasienommer CK 2023/654321/23, van voorneme is om by die Wes-Kaap Drankowerheid aansoek te doen vir 'n mikro-vervaardiging dranklisensie met op-verbruik regte ten opsigte van persele geleë te:

Die Ou Meulgebou
Dorpstraat 86
Stellenbosch, 7600

Die aansoek is vir:
1. Mikro-vervaardiging van ambagsbier (jaarlikse produksie nie meer as 500,000 liter nie)
2. Op-verbruik van drank vervaardig op persele (tapkamer)
3. Af-verbruik verkope van eie vervaardigde produkte

Voorgestelde Handelsure:
Tapkamer: Woensdag-Sondag 12:00-22:00
Af-Verkope: Woensdag-Sondag 10:00-20:00

Lede van BK:
- David John Anderson (ID: 8105125432086) - 50% belang
- Christina Maria van Zyl (ID: 8308095123084) - 50% belang

Die aansoek, tesame met vloerplanne, brandsertifikaat, en soneringsvoldoeningsertifikaat, sal beskikbaar wees vir inspeksie by:
- Wes-Kaap Drankowerheid, Langstraat 4, Kaapstad, 8001
- Stellenbosch Munisipaliteit Kantore, Pleinstraat, Stellenbosch, 7600

Besware moet skriftelik ingedien word binne 60 dae aan:
Wes-Kaap Drankowerheid
Privaatsak X9043
Kaapstad, 8000
E-pos: objections@wcliquor.gov.za

Met 'n afskrif aan:
Craft & Barrel Breweries BK
Att: David Anderson
E-pos: david@craftandbarrel.co.za
Tel: 021 887 6500

Gronde vir beswaar kan gesondheids- en veiligheidskwessies, geraasbesoedeling, verkeersimpak, of nie-nakoming van munisipale verordeninge insluit.`
    },
    publisher: 'Craft & Barrel Breweries CC',
    contactName: 'David John Anderson',
    contactEmail: 'david@craftandbarrel.co.za',
    contactPhone: '+27 21 887 6500',
    deadline: '25 Mar 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Craft & Barrel Breweries CC',
        type: 'company',
        registrationNumber: 'CK 2023/654321/23',
        role: 'Applicant'
      },
      affectedParties: [
        {
          name: 'David John Anderson',
          type: 'individual',
          idNumber: '8105125432086',
          role: 'Member (50%)'
        },
        {
          name: 'Christina Maria van Zyl',
          type: 'individual',
          idNumber: '8308095123084',
          role: 'Member (50%)'
        }
      ],
      municipality: 'Stellenbosch Municipality',
      streetAddress: 'The Old Mill Building, 86 Dorp Street, Stellenbosch, 7600',
      applicationType: 'New Application - Micro-Manufacturing with On-Consumption',
      noticeType: 'Micro-Brewery Liquor Licence',
      legalBasis: 'Western Cape Liquor Act, 2008',
      metadata: {
        tradingName: 'Craft & Barrel',
        licenceType: 'Micro-Manufacturing + On-Consumption',
        productionLimit: '500,000 litres per annum',
        taproomHours: 'Wed-Sun 12:00-22:00',
        offSalesHours: 'Wed-Sun 10:00-20:00'
      }
    }
  },

  {
    id: 'liquor-005',
    title: {
      en: 'Tavern Liquor Licence Renewal - Mzansi Tavern',
      af: 'Taverne Dranklisensie Hernuwing - Mzansi Tavern'
    },
    category: 'liquor-licences',
    publishDate: '29 Jan 2024',
    location: 'Soweto, Gauteng',
    referenceNumber: 'LIQ-2024-005-SWT',
    excerpt: {
      en: 'Application for renewal of on-consumption liquor licence for Mzansi Tavern.',
      af: 'Aansoek vir hernuwing van op-verbruik dranklisensie vir Mzansi Tavern.'
    },
    body: {
      en: `NOTICE OF APPLICATION FOR RENEWAL OF LIQUOR LICENCE

In terms of Section 57 of the Gauteng Liquor Act, 2003, notice is hereby given that THABO JACKSON MOKOENA, ID Number 7209085341082, trading as MZANSI TAVERN, intends to apply for the renewal of on-consumption liquor licence number GPL-2019-007654.

Premises Details:
Trading Name: Mzansi Tavern
Physical Address: 1234 Vilakazi Street, Orlando West, Soweto, 1804
Erf Number: 45678
Licence Number: GPL-2019-007654
Original Issue Date: 15 February 2019
Expiry Date: 14 February 2024

Type of Licence: On-Consumption (Tavern)
Trading Hours: Monday-Sunday 10:00-22:00

The renewal application includes:
- Updated compliance certificates
- Current tax clearance
- Fire safety certificate
- Proof of payment of renewal fees
- No objections from SAPS

The application documentation may be inspected during normal office hours at:
1. Gauteng Liquor Board, 119 Commissioner Street, Johannesburg, 2001
2. City of Johannesburg Metropolitan Municipality, Licensing Department

Written objections must be lodged with the Gauteng Liquor Board within 30 days from date of publication at:

Gauteng Liquor Board
Private Bag X30
Marshalltown, 2107
Email: objections@gautengLiquor.gov.za

Copy to Applicant:
Thabo Jackson Mokoena
1234 Vilakazi Street
Orlando West, Soweto, 1804
Cell: 082 567 8901
Email: mzansitavern@gmail.com

Objections must state clear grounds and be supported by evidence where applicable.

APPLICANT: Thabo Jackson Mokoena
DATE: 29 January 2024`,
      af: `KENNISGEWING VAN AANSOEK VIR HERNUWING VAN DRANKLISENSIE

Ingevolge Artikel 57 van die Gauteng Drankwet, 2003, word hiermee kennis gegee dat THABO JACKSON MOKOENA, ID Nommer 7209085341082, wat handel dryf as MZANSI TAVERN, van voorneme is om aansoek te doen vir die hernuwing van op-verbruik dranklisensie nommer GPL-2019-007654.

Persele Besonderhede:
Handelsnaam: Mzansi Tavern
Fisiese Adres: Vilakazistraat 1234, Orlando Wes, Soweto, 1804
Erfnommer: 45678
Lisensienommer: GPL-2019-007654
Oorspronklike Uitgiftedatum: 15 Februarie 2019
Vervaldatum: 14 Februarie 2024

Tipe Lisensie: Op-Verbruik (Taverne)
Handelsure: Maandag-Sondag 10:00-22:00

Die hernuwingsaansoek sluit in:
- Opgedateerde voldoeningsertifikate
- Huidige belastingklaring
- Brandsertifikaat
- Bewys van betaling van hernuwingsfooie
- Geen besware van SAPD

Die aansoekdokumentasie kan gedurende normale kantoorure geïnspekteer word by:
1. Gauteng Drankraad, Kommissarisstraat 119, Johannesburg, 2001
2. Stad van Johannesburg Metropolitaanse Munisipaliteit, Lisensiëring Departement

Skriftelike besware moet binne 30 dae vanaf datum van publikasie ingedien word by die Gauteng Drankraad by:

Gauteng Drankraad
Privaatsak X30
Marshalltown, 2107
E-pos: objections@gautengliquor.gov.za

Afskrif aan Applikant:
Thabo Jackson Mokoena
Vilakazistraat 1234
Orlando Wes, Soweto, 1804
Sel: 082 567 8901
E-pos: mzansitavern@gmail.com

Besware moet duidelike gronde vermeld en waar van toepassing deur bewyse ondersteun word.

APPLIKANT: Thabo Jackson Mokoena
DATUM: 29 Januarie 2024`
    },
    publisher: 'Thabo Jackson Mokoena',
    contactName: 'Thabo Jackson Mokoena',
    contactEmail: 'mzansitavern@gmail.com',
    contactPhone: '+27 82 567 8901',
    deadline: '28 Feb 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Thabo Jackson Mokoena',
        type: 'individual',
        idNumber: '7209085341082',
        role: 'Licence Holder'
      },
      licenceNumber: 'GPL-2019-007654',
      erfNumber: '45678',
      municipality: 'City of Johannesburg Metropolitan Municipality',
      streetAddress: '1234 Vilakazi Street, Orlando West, Soweto, 1804',
      applicationType: 'Renewal of Licence',
      noticeType: 'On-Consumption Tavern Licence Renewal',
      legalBasis: 'Gauteng Liquor Act, 2003 Section 57',
      expiryDate: '14 Feb 2024',
      metadata: {
        tradingName: 'Mzansi Tavern',
        originalIssueDate: '15 February 2019',
        tradingHours: 'Monday-Sunday 10:00-22:00'
      }
    }
  },

  {
    id: 'liquor-006',
    title: {
      en: 'Alteration of Licensed Premises - Riverside Hotel',
      af: 'Verandering van Gelisensieerde Persele - Riverside Hotel'
    },
    category: 'liquor-licences',
    publishDate: '01 Feb 2024',
    location: 'Bloemfontein, Free State',
    referenceNumber: 'LIQ-2024-006-BFN',
    excerpt: {
      en: 'Application to alter licensed premises by adding outdoor patio area.',
      af: 'Aansoek om gelisensieerde persele te verander deur buitepatio area by te voeg.'
    },
    body: {
      en: `NOTICE OF APPLICATION TO ALTER LICENSED PREMISES

Notice is hereby given in terms of the Free State Liquor Act, 2016, that RIVERSIDE HOTELS (PTY) LTD, Registration Number 2010/987654/07, holder of on-consumption liquor licence number FSL-2018-003421, intends to apply to the Free State Liquor Authority for permission to alter the licensed premises as follows:

CURRENT LICENSED AREA: 
Interior restaurant and bar areas (450m²)

PROPOSED ALTERATION:
Addition of outdoor patio/deck area (150m²) adjacent to main restaurant overlooking the river

Licence Details:
Licence Holder: Riverside Hotels (Pty) Ltd
Trading Name: The Riverside Restaurant & Bar
Licence Number: FSL-2018-003421
Premises: 78 Second Avenue, Westdene, Bloemfontein, 9301

Reasons for Alteration:
- Increased customer demand for outdoor seating
- Enhanced dining experience
- Compliance with COVID-19 social distancing requirements
- Seasonal trading advantages

The proposed alteration includes:
- Installation of covered deck structure
- Additional seating for 60 patrons
- Extended liquor service area
- Compliance with building regulations
- Upgraded security and lighting

Supporting Documents Available for Inspection:
- Architectural plans approved by municipality
- Updated fire safety assessment
- Proof of compliance with National Building Regulations
- Environmental impact assessment (if required)
- Noise management plan

Inspection of Documents:
Free State Liquor Authority
32 East Burger Street, Bloemfontein, 9301
Mangaung Metropolitan Municipality
Bram Fischer Building, Bloemfontein

Objections may be lodged within 60 days from publication to:
Free State Liquor Authority
Private Bag X20579
Bloemfontein, 9300
Email: objections@fsliquor.gov.za

Copy to:
Riverside Hotels (Pty) Ltd
Att: Mr. Johan Pretorius (General Manager)
78 Second Avenue, Westdene, Bloemfontein, 9301
Tel: 051 447 3600
Email: gm@riversidehotel.co.za`,
      af: `KENNISGEWING VAN AANSOEK OM GELISENSIEERDE PERSELE TE VERANDER

Kennis geskied hiermee ingevolge die Vrystaat Drankwet, 2016, dat RIVERSIDE HOTELS (PTY) LTD, Registrasienommer 2010/987654/07, houer van op-verbruik dranklisensie nommer FSL-2018-003421, van voorneme is om by die Vrystaat Drankowerheid aansoek te doen vir toestemming om die gelisensieerde persele soos volg te verander:

HUIDIGE GELISENSIEERDE AREA:
Binnenshuise restaurant en kroegarea (450m²)

VOORGESTELDE VERANDERING:
Byvoeging van buitelug patio/dek area (150m²) aangrensend aan hoofrestaurant met uitsig oor die rivier

Lisensie Besonderhede:
Lisensiehouer: Riverside Hotels (Edms) Bpk
Handelsnaam: The Riverside Restaurant & Bar
Lisensienommer: FSL-2018-003421
Persele: Tweede Laan 78, Westdene, Bloemfontein, 9301

Redes vir Verandering:
- Verhoogde kliëntaanvraag vir buitelug sitplek
- Verbeterde eetervaring
- Voldoening aan COVID-19 sosiale afstandvereistes
- Seisoenale handelvoordele

Die voorgestelde verandering sluit in:
- Installasie van bedekte dekstruktuur
- Addisionele sitplek vir 60 kliënte
- Uitgebreide drankdiensarea
- Voldoening aan bouregulasies
- Opgegradeerde sekuriteit en beligting

Ondersteunende Dokumente Beskikbaar vir Inspeksie:
- Argitektoniese planne goedgekeur deur munisipaliteit
- Opgedateerde brandevaluering
- Bewys van voldoening aan Nasionale Bouregulasies
- Omgewingsimpakassessering (indien vereis)
- Geraasbestuur splan

Inspeksie van Dokumente:
Vrystaat Drankowerheid
Oos-Burgerstraat 32, Bloemfontein, 9301
Mangaung Metropolitaanse Munisipaliteit
Bram Fischer Gebou, Bloemfontein

Besware kan ingedien word binne 60 dae vanaf publikasie aan:
Vrystaat Drankowerheid
Privaatsak X20579
Bloemfontein, 9300
E-pos: objections@fsliquor.gov.za

Afskrif aan:
Riverside Hotels (Edms) Bpk
Att: Mnr. Johan Pretorius (Algemene Bestuurder)
Tweede Laan 78, Westdene, Bloemfontein, 9301
Tel: 051 447 3600
E-pos: gm@riversidehotel.co.za`
    },
    publisher: 'Riverside Hotels (Pty) Ltd',
    contactName: 'Johan Pretorius',
    contactEmail: 'gm@riversidehotel.co.za',
    contactPhone: '+27 51 447 3600',
    deadline: '01 Apr 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Riverside Hotels (Pty) Ltd',
        type: 'company',
        registrationNumber: '2010/987654/07',
        role: 'Licence Holder'
      },
      licenceNumber: 'FSL-2018-003421',
      municipality: 'Mangaung Metropolitan Municipality',
      streetAddress: '78 Second Avenue, Westdene, Bloemfontein, 9301',
      applicationType: 'Alteration of Licensed Premises',
      noticeType: 'Premises Alteration Application',
      legalBasis: 'Free State Liquor Act, 2016',
      metadata: {
        tradingName: 'The Riverside Restaurant & Bar',
        currentArea: '450m²',
        proposedAddition: '150m² outdoor patio',
        additionalSeating: '60 patrons'
      }
    }
  },

  {
    id: 'liquor-007',
    title: {
      en: 'Special Event Liquor Licence - Stellenbosch Wine Festival',
      af: 'Spesiale Gebeurtenis Dranklisensie - Stellenbosch Wynfees'
    },
    category: 'liquor-licences',
    publishDate: '05 Feb 2024',
    location: 'Stellenbosch, Western Cape',
    referenceNumber: 'LIQ-2024-007-STL-EVENT',
    excerpt: {
      en: 'Application for special event liquor licence for annual wine festival.',
      af: 'Aansoek vir spesiale gebeurtenis dranklisensie vir jaarlikse wynfees.'
    },
    body: {
      en: `NOTICE: APPLICATION FOR SPECIAL EVENT LIQUOR LICENCE

Notice is hereby given that STELLENBOSCH WINE ROUTES NPC, Registration Number 2005/123789/08, intends to apply to the Western Cape Liquor Authority for a special event liquor licence in terms of Section 54 of the Western Cape Liquor Act, 2008.

Event Details:
Event Name: Stellenbosch Wine Festival 2024
Event Type: Wine tasting and cultural festival
Event Dates: 15-17 March 2024 (3 days)
Event Hours: Daily 10:00-22:00
Expected Attendance: Approximately 5,000 persons per day

Event Venue:
Coetzenburg Sports Grounds
Stellenbosch University Campus
Stellenbosch, 7600

Types of Liquor to be Sold/Consumed:
- Wine (primary focus - local wine estates)
- Craft beer (limited selection)
- Spirits (cocktail bars - limited)

Licence Type Applied For:
Special Event On-Consumption Licence (3 days)

The event will feature:
- 45 wine estates with tasting tables
- 8 craft breweries
- 2 cocktail bars
- Food vendors (12 stalls)
- Live entertainment stages
- Designated driver program
- Security personnel (15 guards)
- Medical services on-site

Safety and Compliance Measures:
- Wristband identification system (21+ years)
- ID verification at entrance
- Limited drinks per person per transaction
- Free water stations throughout venue
- Shuttle service from town center
- SAPS notification and liaison
- Event liability insurance (R10 million cover)

Application documents available for inspection at:
- Western Cape Liquor Authority, 4 Long Street, Cape Town
- Stellenbosch Municipality, Plein Street, Stellenbosch

Objections must be lodged in writing within 14 days to:
Western Cape Liquor Authority
Private Bag X9043, Cape Town, 8000
Email: specialevents@wcliquor.gov.za

And to:
Stellenbosch Wine Routes NPC
PO Box 5432, Stellenbosch, 7599
Contact: Ms. Elsa van der Walt
Tel: 021 886 4300
Email: events@wineroute.co.za`,
      af: `KENNISGEWING: AANSOEK VIR SPESIALE GEBEURTENIS DRANKLISENSIE

Kennis geskied hiermee dat STELLENBOSCH WINE ROUTES NPC, Registrasienommer 2005/123789/08, van voorneme is om by die Wes-Kaap Drankowerheid aansoek te doen vir 'n spesiale gebeurtenis dranklisensie ingevolge Artikel 54 van die Wes-Kaap Drankwet, 2008.

Gebeurtenis Besonderhede:
Gebeurtenis Naam: Stellenbosch Wynfees 2024
Gebeurtenis Tipe: Wynproe en kulturele fees
Gebeurtenis Datums: 15-17 Maart 2024 (3 dae)
Gebeurtenis Ure: Daagliks 10:00-22:00
Verwagte Bywoning: Ongeveer 5,000 persone per dag

Gebeurtenis Lokaal:
Coetzenburg Sportgronde
Universiteit Stellenbosch Kampus
Stellenbosch, 7600

Tipes Drank om Verkoop/Verbruik te word:
- Wyn (primêre fokus - plaaslike wynplase)
- Ambagsbier (beperkte keuse)
- Spiritus (kelkiedrankkraampies - beperk)

Lisensie Tipe Waarvoor Aansoek Gedoen Word:
Spesiale Gebeurtenis Op-Verbruik Lisensie (3 dae)

Die gebeurtenis sal insluit:
- 45 wynplase met proëtafels
- 8 ambagsbier brouers
- 2 kelkiedrank krampies
- Kosverskaffers (12 stalletjies)
- Lewendige vermaak verhoe
- Aangewese bestuurder program
- Sekuriteitspersoneel (15 wagte)
- Mediese dienste op terrein

Veiligheid en Voldoeningsmaatreëls:
- Polsbandidentifikasiestelsel (21+ jaar)
- ID verifikasie by ingang
- Beperkte drankies per persoon per transaksie
- Gratis waterstasies reg deur lokaal
- Pendeldiens vanaf dorpssentrum
- SAPD kennisgewing en skakeling
- Gebeurtenis aanspreeklikheidsversekering (R10 miljoen dekking)

Aansoekdokumente beskikbaar vir inspeksie by:
- Wes-Kaap Drankowerheid, Langstraat 4, Kaapstad
- Stellenbosch Munisipaliteit, Pleinstraat, Stellenbosch

Besware moet skriftelik ingedien word binne 14 dae aan:
Wes-Kaap Drankowerheid
Privaatsak X9043, Kaapstad, 8000
E-pos: specialevents@wcliquor.gov.za

En aan:
Stellenbosch Wine Routes NPC
Posbus 5432, Stellenbosch, 7599
Kontak: Me. Elsa van der Walt
Tel: 021 886 4300
E-pos: events@wineroute.co.za`
    },
    publisher: 'Stellenbosch Wine Routes NPC',
    contactName: 'Elsa van der Walt',
    contactEmail: 'events@wineroute.co.za',
    contactPhone: '+27 21 886 4300',
    deadline: '19 Feb 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Stellenbosch Wine Routes NPC',
        type: 'organization',
        registrationNumber: '2005/123789/08',
        role: 'Applicant'
      },
      municipality: 'Stellenbosch Municipality',
      streetAddress: 'Coetzenburg Sports Grounds, Stellenbosch University Campus, Stellenbosch, 7600',
      applicationType: 'Special Event Licence',
      noticeType: 'Special Event On-Consumption Licence',
      legalBasis: 'Western Cape Liquor Act, 2008 Section 54',
      eventDate: '15 Mar 2024',
      closeDate: '17 Mar 2024',
      metadata: {
        eventName: 'Stellenbosch Wine Festival 2024',
        eventDuration: '3 days (15-17 March 2024)',
        eventHours: 'Daily 10:00-22:00',
        expectedAttendance: '5,000 persons per day',
        wineEstates: 45,
        breweries: 8,
        securityGuards: 15
      }
    }
  },

  {
    id: 'liquor-008',
    title: {
      en: 'Nightclub Liquor Licence Application - Eclipse Nightclub',
      af: 'Nagklub Dranklisensie Aansoek - Eclipse Nagklub'
    },
    category: 'liquor-licences',
    publishDate: '08 Feb 2024',
    location: 'Pretoria, Gauteng',
    referenceNumber: 'LIQ-2024-008-PTA',
    excerpt: {
      en: 'Application for on-consumption liquor licence for new nightclub venue.',
      af: 'Aansoek vir op-verbruik dranklisensie vir nuwe nagklub lokaal.'
    },
    body: {
      en: `LIQUOR LICENCE APPLICATION - NIGHTCLUB

Notice is hereby given in terms of the Gauteng Liquor Act, 2003, that ECLIPSE ENTERTAINMENT (PTY) LTD, Registration Number 2023/456789/07, intends to apply to the Gauteng Liquor Board for an on-consumption liquor licence for the operation of a nightclub.

Premises Details:
Trading Name: Eclipse Nightclub
Physical Address: Menlyn Maine Central Square, 258 Aramist Avenue, Waterkloof Glen, Pretoria, 0181
Erf Number: 234567
Total Floor Area: 850m²
Capacity: 450 patrons

Proposed Trading Hours:
Thursday: 20:00-02:00 (following day)
Friday: 20:00-04:00 (following day)
Saturday: 20:00-04:00 (following day)

Type of Establishment:
- Upmarket nightclub and cocktail lounge
- DJ entertainment and dance floor
- VIP lounge areas
- Full bar service (wine, beer, spirits, cocktails)
- Light meals and snacks available

Company Directors:
- Michael John Thompson (ID: 8003125432089) - Managing Director
- Lerato Grace Khumalo (ID: 8507145678085) - Financial Director

Compliance and Safety Measures:
- 24-hour security personnel
- CCTV surveillance system (16 cameras)
- Professional door security team (6 bouncers)
- Age verification system (21+ entry policy)
- Designated driver program partnership
- Sound proofing to meet noise regulations
- Fire safety compliance certificate
- Emergency evacuation procedures
- Trained staff in responsible alcohol service

Attached Documents Include:
- Zoning compliance certificate
- Building plan approval
- Fire safety certificate
- SAPS clearance certificate
- Lease agreement
- Company registration documents
- Curriculum vitae of directors
- Sound impact assessment
- Traffic impact study

The application will be available for public inspection at:
1. Gauteng Liquor Board, 119 Commissioner Street, Johannesburg
2. City of Tshwane Metropolitan Municipality, Tshwane House

Objections must be submitted in writing within 60 days to:

Gauteng Liquor Board
Private Bag X30, Marshalltown, 2107
Email: objections@gautengliquor.gov.za

Copy to Applicant:
Eclipse Entertainment (Pty) Ltd
Att: Michael Thompson
Email: licensing@eclipsepta.co.za
Tel: 012 348 7600

Objection grounds may include:
- Proximity to residential areas
- Noise concerns
- Traffic and parking impacts
- Public safety concerns
- Non-compliance with zoning

APPLICANT: Eclipse Entertainment (Pty) Ltd
DATE: 8 February 2024`,
      af: `DRANKLISENSIE AANSOEK - NAGKLUB

Kennis geskied hiermee ingevolge die Gauteng Drankwet, 2003, dat ECLIPSE ENTERTAINMENT (PTY) LTD, Registrasienommer 2023/456789/07, van voorneme is om by die Gauteng Drankraad aansoek te doen vir 'n op-verbruik dranklisensie vir die bedryf van 'n nagklub.

Persele Besonderhede:
Handelsnaam: Eclipse Nagklub
Fisiese Adres: Menlyn Maine Sentrale Plein, Aramistlaan 258, Waterkloof Glen, Pretoria, 0181
Erfnommer: 234567
Totale Vloerarea: 850m²
Kapasiteit: 450 kliënte

Voorgestelde Handelsure:
Donderdag: 20:00-02:00 (volgende dag)
Vrydag: 20:00-04:00 (volgende dag)
Saterdag: 20:00-04:00 (volgende dag)

Tipe Onderneming:
- Bo-mark nagklub en kelkiedrank salon
- DJ vermaak en dansvloer
- VIP salon areas
- Volledige kroegdiens (wyn, bier, spiritus, kelkiedrank)
- Ligte etes en versnaperings beskikbaar

Maatskappy Direkteure:
- Michael John Thompson (ID: 8003125432089) - Besturende Direkteur
- Lerato Grace Khumalo (ID: 8507145678085) - Finansiële Direkteur

Voldoenings- en Veiligheidsmaatreëls:
- 24-uur sekuriteitspersoneel
- CCTV bewakingstelsel (16 kameras)
- Professionele deur sekuriteit span (6 uitsm yters)
- Ouderdom verifikasiestelsel (21+ toegangsbeleid)
- Aangewese bestuurder program vennootskap
- Klankbewysing om geraasregulasies na te kom
- Brandsertifikaat
- Nood ontruimingsprosedures
- Opgeleide personeel in verantwoordelike alkoholdiens

Aangehegte Dokumente Sluit In:
- Sonering voldoeningsertifikaat
- Bouplan goedkeuring
- Brandsertifikaat
- SAPD klaringsertifikaat
- Huurkontrak
- Maatskappy registrasiedokumente
- Curriculum vitae van direkteure
- Klankimpak assessering
- Verkeer impakstudie

Die aansoek sal beskikbaar wees vir openbare inspeksie by:
1. Gauteng Drankraad, Kommissarisstraat 119, Johannesburg
2. Stad van Tshwane Metropolitaanse Munisipaliteit, Tshwane Huis

Besware moet skriftelik ingedien word binne 60 dae aan:

Gauteng Drankraad
Privaatsak X30, Marshalltown, 2107
E-pos: objections@gautengliquor.gov.za

Afskrif aan Applikant:
Eclipse Entertainment (Edms) Bpk
Att: Michael Thompson
E-pos: licensing@eclipsepta.co.za
Tel: 012 348 7600

Beswaargronde kan insluit:
- Nabyheid aan residensiële areas
- Geraaskwessies
- Verkeer en parkering impakte
- Openbare veiligheidskwessies
- Nie-voldoening aan sonering

APPLIKANT: Eclipse Entertainment (Edms) Bpk
DATUM: 8 Februarie 2024`
    },
    publisher: 'Eclipse Entertainment (Pty) Ltd',
    contactName: 'Michael John Thompson',
    contactEmail: 'licensing@eclipsepta.co.za',
    contactPhone: '+27 12 348 7600',
    deadline: '08 Apr 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Eclipse Entertainment (Pty) Ltd',
        type: 'company',
        registrationNumber: '2023/456789/07',
        role: 'Applicant'
      },
      affectedParties: [
        {
          name: 'Michael John Thompson',
          type: 'individual',
          idNumber: '8003125432089',
          role: 'Managing Director'
        },
        {
          name: 'Lerato Grace Khumalo',
          type: 'individual',
          idNumber: '8507145678085',
          role: 'Financial Director'
        }
      ],
      erfNumber: '234567',
      municipality: 'City of Tshwane Metropolitan Municipality',
      streetAddress: 'Menlyn Maine Central Square, 258 Aramist Avenue, Waterkloof Glen, Pretoria, 0181',
      applicationType: 'New Application - Nightclub',
      noticeType: 'On-Consumption Nightclub Licence',
      legalBasis: 'Gauteng Liquor Act, 2003',
      metadata: {
        tradingName: 'Eclipse Nightclub',
        floorArea: '850m²',
        capacity: '450 patrons',
        tradingDays: 'Thursday, Friday, Saturday',
        securityStaff: '6 bouncers + security team',
        cctvCameras: 16,
        agePolicy: '21+ only'
      }
    }
  },

  {
    id: 'liquor-009',
    title: {
      en: 'Wine Farm Liquor Licence - Sunset Valley Wines',
      af: 'Wynplaas Dranklisensie - Sunset Valley Wines'
    },
    category: 'liquor-licences',
    publishDate: '12 Feb 2024',
    location: 'Paarl, Western Cape',
    referenceNumber: 'LIQ-2024-009-PRL',
    excerpt: {
      en: 'Application for wine farm licence including on-consumption tasting room and off-consumption sales.',
      af: 'Aansoek vir wynplaas lisensie insluitend op-verbruik proëkamer en af-verbruik verkope.'
    },
    body: {
      en: `WINE FARM LIQUOR LICENCE APPLICATION

Notice is hereby given that SUNSET VALLEY WINES (PTY) LTD, Registration Number 2020/345678/07, intends to apply for a wine farm liquor licence in terms of the Western Cape Liquor Act, 2008.

Farm Details:
Farm Name: Sunset Valley Wine Estate
Property Description: Portion 12 of Farm 456, Paarl
Physical Address: Sunset Valley Road, off R45, Paarl, 7646
Erf/Farm Number: Farm 456, Portion 12

Licence Application Includes:
1. Wine production (micro-manufacturing)
2. On-consumption tasting room and restaurant
3. Off-consumption retail sales (own products only)
4. Wine cellar tours and events

Production Details:
- Annual production: Approximately 80,000 bottles
- Wine varieties: Cabernet Sauvignon, Shiraz, Pinotage, Chardonnay, Sauvignon Blanc
- Estate-grown grapes: 25 hectares under vine

Facilities:
- Tasting room: Capacity 45 persons
- Restaurant: Capacity 80 persons
- Retail shop: Wine sales and merchandise
- Event venue: Weddings and corporate events (max 150 persons)
- Wine cellar: Tours available

Proposed Operating Hours:
Tasting Room & Restaurant: Daily 09:00-17:00
Retail Shop: Daily 09:00-17:00
Events: By booking only, max 23:00

Owners and Directors:
- Pierre Jean Rousseau (ID: 7112095423087) - Winemaker & Director (60%)
- Annemarie Rousseau (ID: 7405125634089) - Director (40%)

Tourism and Educational Component:
- Wine education courses
- Cellar tours (hourly)
- Food and wine pairing experiences
- Art gallery featuring local artists
- Children's play area (family-friendly)

Environmental and Social Responsibility:
- Organic and sustainable farming practices
- WWF Biodiversity & Wine Initiative member
- Employment of local community (15 permanent staff)
- Water conservation measures
- Renewable energy (solar panels installed)

Compliance Certifications:
- Wine & Spirit Board registration
- Tourism grading (4-star)
- Health and safety compliance
- Building plans approved by municipality
- Environmental management plan

Application documents available at:
- Western Cape Liquor Authority, 4 Long Street, Cape Town
- Drakenstein Municipality, Berg River Boulevard, Paarl

Objections (if any) must be lodged within 60 days to:
Western Cape Liquor Authority
Private Bag X9043, Cape Town, 8000
Email: winetourism@wcliquor.gov.za

Copy to Applicant:
Sunset Valley Wines (Pty) Ltd
PO Box 987, Paarl, 7620
Contact: Pierre Rousseau
Tel: 021 872 5600
Email: info@sunsetvalleywines.co.za`,
      af: `WYNPLAAS DRANKLISENSIE AANSOEK

Kennis geskied hiermee dat SUNSET VALLEY WINES (PTY) LTD, Registrasienommer 2020/345678/07, van voorneme is om aansoek te doen vir 'n wynplaas dranklisensie ingevolge die Wes-Kaap Drankwet, 2008.

Plaas Besonderhede:
Plaas Naam: Sunset Valley Wynlandgoed
Eiendom Beskrywing: Gedeelte 12 van Plaas 456, Paarl
Fisiese Adres: Sunset Valley Pad, van R45 af, Paarl, 7646
Erf/Plaas Nommer: Plaas 456, Gedeelte 12

Lisensie Aansoek Sluit In:
1. Wynproduksie (mikro-vervaardiging)
2. Op-verbruik proëkamer en restaurant
3. Af-verbruik kleinhandel verkope (slegs eie produkte)
4. Wynkelder toere en gebeurtenisse

Produksie Besonderhede:
- Jaarlikse produksie: Ongeveer 80,000 bottels
- Wyn variëteite: Cabernet Sauvignon, Shiraz, Pinotage, Chardonnay, Sauvignon Blanc
- Landgoed-geteelde druiwe: 25 hektaar onder wingerd

Fasiliteite:
- Proëkamer: Kapasiteit 45 persone
- Restaurant: Kapasiteit 80 persone
- Kleinhandel winkel: Wynverkope en handelsware
- Gebeurtenis lokaal: Troues en korporatiewe gebeurtenisse (maks 150 persone)
- Wynkelder: Toere beskikbaar

Voorgestelde Bedryfsure:
Proëkamer & Restaurant: Daagliks 09:00-17:00
Kleinhandel Winkel: Daagliks 09:00-17:00
Gebeurtenisse: Slegs op bespreking, maks 23:00

Eienaars en Direkteure:
- Pierre Jean Rousseau (ID: 7112095423087) - Wynmaker & Direkteur (60%)
- Annemarie Rousseau (ID: 7405125634089) - Direkteur (40%)

Toerisme en Opvoedkundige Komponent:
- Wyn opvoedingskursusse
- Keldertoere (uurliks)
- Kos en wyn paringservarings
- Kunsgalery met plaaslike kunstenaars
- Kinders speelarea (gesinsvriendelik)

Omgewings- en Sosiale Verantwoordelikheid:
- Organiese en volhoubare boerdery praktyke
- WWF Biodiversiteit & Wyn Inisiatief lid
- Indiensneming van plaaslike gemeenskap (15 permanente personeel)
- Water bewaringsmaatreëls
- Hernubare energie (sonpanele geïnstalleer)

Voldoeningssertifikate:
- Wyn & Spiritus Raad registrasie
- Toerisme gradering (4-ster)
- Gesondheid en veiligheid voldoening
- Bouplanne goedgekeur deur munisipaliteit
- Omgewingsbestuursplan

Aansoekdokumente beskikbaar by:
- Wes-Kaap Drankowerheid, Langstraat 4, Kaapstad
- Drakenstein Munisipaliteit, Bergrivier Boulevard, Paarl

Besware (indien enige) moet ingedien word binne 60 dae aan:
Wes-Kaap Drankowerheid
Privaatsak X9043, Kaapstad, 8000
E-pos: winetourism@wcliquor.gov.za

Afskrif aan Applikant:
Sunset Valley Wines (Edms) Bpk
Posbus 987, Paarl, 7620
Kontak: Pierre Rousseau
Tel: 021 872 5600
E-pos: info@sunsetvalleywines.co.za`
    },
    publisher: 'Sunset Valley Wines (Pty) Ltd',
    contactName: 'Pierre Jean Rousseau',
    contactEmail: 'info@sunsetvalleywines.co.za',
    contactPhone: '+27 21 872 5600',
    deadline: '12 Apr 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Sunset Valley Wines (Pty) Ltd',
        type: 'company',
        registrationNumber: '2020/345678/07',
        role: 'Applicant'
      },
      affectedParties: [
        {
          name: 'Pierre Jean Rousseau',
          type: 'individual',
          idNumber: '7112095423087',
          role: 'Winemaker & Director (60%)'
        },
        {
          name: 'Annemarie Rousseau',
          type: 'individual',
          idNumber: '7405125634089',
          role: 'Director (40%)'
        }
      ],
      municipality: 'Drakenstein Municipality',
      propertyDescription: 'Portion 12 of Farm 456, Paarl',
      farmPortion: 'Portion 12 of Farm 456',
      streetAddress: 'Sunset Valley Road, off R45, Paarl, 7646',
      applicationType: 'Wine Farm Licence (Multi-component)',
      noticeType: 'Wine Farm Liquor Licence',
      legalBasis: 'Western Cape Liquor Act, 2008',
      metadata: {
        estateName: 'Sunset Valley Wine Estate',
        annualProduction: '80,000 bottles',
        vineyardSize: '25 hectares',
        tastingCapacity: 45,
        restaurantCapacity: 80,
        eventCapacity: 150,
        grading: '4-star tourism',
        sustainabilityCertifications: ['WWF Biodiversity & Wine Initiative', 'Organic farming']
      }
    }
  },

  {
    id: 'liquor-010',
    title: {
      en: 'Transfer and Removal - Liquor City Bottle Store',
      af: 'Oordrag en Verwydering - Liquor City Bottelwinkel'
    },
    category: 'liquor-licences',
    publishDate: '15 Feb 2024',
    location: 'Pietermaritzburg, KwaZulu-Natal',
    referenceNumber: 'LIQ-2024-010-PMB',
    excerpt: {
      en: 'Combined application for transfer of ownership and removal of liquor licence to new premises.',
      af: 'Gekombineerde aansoek vir oordrag van eienaarskap en verwydering van dranklisensie na nuwe persele.'
    },
    body: {
      en: `COMBINED APPLICATION: TRANSFER AND REMOVAL OF LIQUOR LICENCE

Notice is hereby given in terms of the KwaZulu-Natal Liquor Licensing Act, 2010, that a combined application will be made for:

1. TRANSFER of off-consumption liquor licence from current owner to new owner
2. REMOVAL of licence from current premises to new premises

CURRENT LICENCE HOLDER:
Name: Rajesh Kumar Patel
ID Number: 6509125678082
Licence Number: KZN-2017-005432
Trading Name: Liquor City Pietermaritzburg

CURRENT PREMISES:
234 Church Street
Pietermaritzburg, 3201
Erf Number: 12345

PROPOSED NEW LICENCE HOLDER:
Name: Liquor Retailers KZN (Pty) Ltd
Registration Number: 2023/789456/07
Directors:
- Sanjeev Kumar Moodley (ID: 7803125432087) - 50%
- Priya Naidoo (ID: 8106145678089) - 50%

PROPOSED NEW PREMISES:
Liberty Midlands Mall, Shop G42
50 Sanctuary Road
Pietermaritzburg, 3201
Erf Number: 67890

Reasons for Transfer and Removal:
- Retirement of current owner (Mr. Patel)
- Relocation to high-traffic shopping mall
- Improved parking and accessibility
- Enhanced security in mall environment
- Larger retail space (current 85m², new 145m²)

New Premises Details:
- Modern retail fit-out
- Refrigeration for full range
- Security: Mall security + in-store CCTV
- Parking: 500+ bays in mall parking
- Accessibility: Ground floor, wheelchair access
- Fire safety: Mall fire system compliance

Proposed Trading Hours:
Monday-Saturday: 09:00-19:00
Sunday: 10:00-17:00
Public Holidays: 10:00-15:00

The licence will continue to authorize:
- Off-consumption sale of wine, beer, and spirits
- Retail liquor sales to public
- No on-consumption or tasting

Supporting Documents:
- Consent from current licence holder (Mr. Patel)
- Sale of business agreement
- Lease agreement for new premises (Liberty Midlands Mall)
- Municipal zoning approval
- Mall management approval
- Company registration documents
- Tax clearance certificates (seller and buyer)
- SAPS clearance certificates
- Fire safety compliance certificate
- Building plan approval

Financial Consideration:
Purchase price of business (including goodwill and stock): R2,850,000

Application Available for Inspection:
- KwaZulu-Natal Liquor Authority, Pietermaritzburg Office
- Msunduzi Municipality, Licensing Department

Objections must be lodged within 60 days from publication to:

KwaZulu-Natal Liquor Authority
Private Bag X9124
Pietermaritzburg, 3200
Email: objections@kznliquor.gov.za

Copy to Applicant:
Liquor Retailers KZN (Pty) Ltd
Att: Sanjeev Moodley
Tel: 033 345 7600
Email: licensing@liquorretailerskzn.co.za

Copy to Current Licence Holder:
Rajesh Kumar Patel
234 Church Street, Pietermaritzburg, 3201
Tel: 033 394 5678

APPLICANT: Liquor Retailers KZN (Pty) Ltd
SELLER: Rajesh Kumar Patel
DATE: 15 February 2024`,
      af: `GEKOMBINEERDE AANSOEK: OORDRAG EN VERWYDERING VAN DRANKLISENSIE

Kennis geskied hiermee ingevolge die KwaZulu-Natal Dranklisensieringswet, 2010, dat 'n gekombineerde aansoek gedoen sal word vir:

1. OORDRAG van af-verbruik dranklisensie vanaf huidige eienaar na nuwe eienaar
2. VERWYDERING van lisensie vanaf huidige persele na nuwe persele

HUIDIGE LISENSIEHOUER:
Naam: Rajesh Kumar Patel
ID Nommer: 6509125678082
Lisensienommer: KZN-2017-005432
Handelsnaam: Liquor City Pietermaritzburg

HUIDIGE PERSELE:
Kerkstraat 234
Pietermaritzburg, 3201
Erfnommer: 12345

VOORGESTELDE NUWE LISENSIEHOUER:
Naam: Liquor Retailers KZN (Edms) Bpk
Registrasienommer: 2023/789456/07
Direkteure:
- Sanjeev Kumar Moodley (ID: 7803125432087) - 50%
- Priya Naidoo (ID: 8106145678089) - 50%

VOORGESTELDE NUWE PERSELE:
Liberty Midlands Winkelsentrum, Winkel G42
Sanctuary Pad 50
Pietermaritzburg, 3201
Erfnommer: 67890

Redes vir Oordrag en Verwydering:
- Aftrede van huidige eienaar (Mnr. Patel)
- Hervestiging na hoë-verkeer winkelsentrum
- Verbeterde parkering en toeganklikheid
- Verhoogde sekuriteit in sentrum omgewing
- Groter kleinhandel spasie (huidige 85m², nuwe 145m²)

Nuwe Persele Besonderhede:
- Moderne kleinhandel inrigting
- Verkoeling vir volledige reeks
- Sekuriteit: Sentrum sekuriteit + in-winkel CCTV
- Parkering: 500+ parkeerplekke in sentrum
- Toeganklikheid: Grondvloer, rolstoeltoegang
- Brandveiligheid: Sentrum brandstelsel voldoening

Voorgestelde Handelsure:
Maandag-Saterdag: 09:00-19:00
Sondag: 10:00-17:00
Openbare Vakansiedae: 10:00-15:00

Die lisensie sal voortgaan om te magtig:
- Af-verbruik verkoop van wyn, bier, en spiritus
- Kleinhandel drankverkope aan publiek
- Geen op-verbruik of proe nie

Ondersteunende Dokumente:
- Toestemming vanaf huidige lisensiehouer (Mnr. Patel)
- Verkoop van besigheid ooreenkoms
- Huurkontrak vir nuwe persele (Liberty Midlands Sent rum)
- Munisipale sonering goedkeuring
- Sentrum bestuur goedkeuring
- Maatskappy registrasiedokumente
- Belasting klaringsertifikate (verkoper en koper)
- SAPD klaringsertifikate
- Brandveiligheid voldoeningsertifikaat
- Bouplan goedkeuring

Finansiële Oorweging:
Aankoopprys van besigheid (insluitend welwillendheid en voorraad): R2,850,000

Aansoek Beskikbaar vir Inspeksie:
- KwaZulu-Natal Drankowerheid, Pietermaritzburg Kantoor
- Msunduzi Munisipaliteit, Lisensiëring Departement

Besware moet ingedien word binne 60 dae vanaf publikasie aan:

KwaZulu-Natal Drankowerheid
Privaatsak X9124
Pietermaritzburg, 3200
E-pos: objections@kznliquor.gov.za

Afskrif aan Applikant:
Liquor Retailers KZN (Edms) Bpk
Att: Sanjeev Moodley
Tel: 033 345 7600
E-pos: licensing@liquorretailerskzn.co.za

Afskrif aan Huidige Lisensiehouer:
Rajesh Kumar Patel
Kerkstraat 234, Pietermaritzburg, 3201
Tel: 033 394 5678

APPLIKANT: Liquor Retailers KZN (Edms) Bpk
VERKOPER: Rajesh Kumar Patel
DATUM: 15 Februarie 2024`
    },
    publisher: 'Liquor Retailers KZN (Pty) Ltd',
    contactName: 'Sanjeev Kumar Moodley',
    contactEmail: 'licensing@liquorretailerskzn.co.za',
    contactPhone: '+27 33 345 7600',
    deadline: '15 Apr 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Liquor Retailers KZN (Pty) Ltd',
        type: 'company',
        registrationNumber: '2023/789456/07',
        role: 'New Licence Holder (Applicant)'
      },
      secondaryParty: {
        name: 'Rajesh Kumar Patel',
        type: 'individual',
        idNumber: '6509125678082',
        role: 'Current Licence Holder (Seller)'
      },
      affectedParties: [
        {
          name: 'Sanjeev Kumar Moodley',
          type: 'individual',
          idNumber: '7803125432087',
          role: 'Director (50%)'
        },
        {
          name: 'Priya Naidoo',
          type: 'individual',
          idNumber: '8106145678089',
          role: 'Director (50%)'
        }
      ],
      licenceNumber: 'KZN-2017-005432',
      erfNumber: '67890',
      municipality: 'Msunduzi Municipality',
      streetAddress: 'Liberty Midlands Mall, Shop G42, 50 Sanctuary Road, Pietermaritzburg, 3201',
      applicationType: 'Combined Transfer and Removal',
      noticeType: 'Off-Consumption Licence Transfer and Removal',
      legalBasis: 'KwaZulu-Natal Liquor Licensing Act, 2010',
      amount: {
        amount: 2850000,
        currency: 'ZAR',
        formatted: 'R2,850,000'
      },
      metadata: {
        currentPremises: '234 Church Street, Pietermaritzburg, 3201',
        newPremises: 'Liberty Midlands Mall, Shop G42, 50 Sanctuary Road',
        currentArea: '85m²',
        newArea: '145m²',
        tradingName: 'Liquor City',
        purchasePrice: 'R2,850,000',
        reason: 'Retirement and business sale'
      }
    }
  },

  {
    id: 'liquor-011',
    title: {
      en: 'Distillery Licence Application - Cape Craft Distillers',
      af: 'Distilleerderylisensie Aansoek - Cape Craft Distillers'
    },
    category: 'liquor-licences',
    publishDate: '19 Feb 2024',
    location: 'Cape Town, Western Cape',
    referenceNumber: 'LIQ-2024-011-CT-DIST',
    excerpt: {
      en: 'Application for micro-manufacturing licence for craft gin and spirit production with tasting room.',
      af: 'Aansoek vir mikro-vervaardiging lisensie vir ambags-gin en spiritus produksie met proëkamer.'
    },
    body: {
      en: `MICRO-DISTILLERY LIQUOR LICENCE APPLICATION

Notice is hereby given that CAPE CRAFT DISTILLERS (PTY) LTD, Registration Number 2022/876543/07, intends to apply to the Western Cape Liquor Authority for a micro-manufacturing licence for the production of craft spirits, with on-consumption and off-consumption rights.

Premises Details:
Trading Name: Cape Craft Distillers
Physical Address: Unit 12, The Old Biscuit Mill, 375 Albert Road, Woodstock, Cape Town, 7925
Property Type: Industrial premises converted to craft distillery

Licence Components Requested:
1. Micro-Manufacturing (Distillery)
   - Craft gin production
   - Vodka production
   - Flavoured spirits
   - Annual production limit: 50,000 litres

2. On-Consumption (Tasting Room & Bar)
   - Cocktail bar featuring own spirits
   - Spirit tastings and education
   - Capacity: 60 persons

3. Off-Consumption (Retail Sales)
   - Retail sales of own manufactured products
   - Online sales fulfillment
   - Corporate gifting

Company Directors:
- James Robert McKenzie (ID: 7906125432088) - Master Distiller, 40%
- Emma Louise Barnard (ID: 8205145234087) - Business Director, 35%
- Thando William Mbeki (ID: 8409085123086) - Marketing Director, 25%

Products and Production:
Primary Products:
- Cape Fynbos Gin (flagship product)
- Table Mountain Vodka
- Rooibos-infused spirits
- Seasonal limited editions

Botanicals Sourced:
- Indigenous fynbos from sustainable sources
- Locally sourced citrus and herbs
- Partnership with Kirstenbosch Botanical Gardens

Production Capacity:
- Copper pot stills: 500L and 250L
- Annual target: 35,000 bottles
- Small-batch artisanal production
- Quality over quantity philosophy

Tasting Room Experience:
Operating Hours: Wednesday-Sunday 12:00-20:00
Offerings:
- Guided spirit tastings (30-45 minutes)
- Cocktail masterclasses
- Distillery tours (behind-the-scenes)
- Food pairing experiences
- Private events and functions

Retail and Distribution:
- On-site bottle shop
- Online store (nationwide delivery)
- Wholesale to selected restaurants and bars
- Export potential (international markets)

Tourism Component:
- Registered tourism attraction
- Educational programs on craft distilling
- Support for local hospitality industry
- Job creation (12 permanent positions)

Compliance and Safety:
- Building plans approved (industrial to mixed-use conversion)
- Fire safety systems (sprinklers, extinguishers, alarms)
- Health and safety compliance
- Excise registration with SARS
- Environmental health approval
- Waste management plan
- Water use licence

Community Engagement:
- Local employment preference
- Skills development and training
- Support for local suppliers
- Responsible alcohol consumption programs

Supporting Documentation:
- Detailed business plan
- Financial projections
- Proof of funding (R4.5 million invested)
- Building compliance certificate
- Fire safety certificate
- Environmental impact assessment
- Distillery equipment specifications
- Product formulations and recipes
- Marketing and distribution strategy

Application Available for Inspection:
Western Cape Liquor Authority
4 Long Street, Cape Town, 8001

City of Cape Town
Metropolitan Licensing Department

Objections to be lodged within 60 days to:
Western Cape Liquor Authority
Private Bag X9043
Cape Town, 8000
Email: micromanufacturing@wcliquor.gov.za

Copy to Applicant:
Cape Craft Distillers (Pty) Ltd
Unit 12, The Old Biscuit Mill
375 Albert Road, Woodstock, 7925
Contact: Emma Barnard
Tel: 021 447 8500
Email: licensing@capecraftdistillers.co.za

APPLICANT: Cape Craft Distillers (Pty) Ltd
DATE: 19 February 2024`,
      af: `MIKRO-DISTILLEERDERYLISENSIE AANSOEK

Kennis geskied hiermee dat CAPE CRAFT DISTILLERS (PTY) LTD, Registrasienommer 2022/876543/07, van voorneme is om by die Wes-Kaap Drankowerheid aansoek te doen vir 'n mikro-vervaardiging lisensie vir die produksie van ambagspiritus, met op-verbruik en af-verbruik regte.

Persele Besonderhede:
Handelsnaam: Cape Craft Distillers
Fisiese Adres: Eenheid 12, The Old Biscuit Mill, Albertweg 375, Woodstock, Kaapstad, 7925
Eiendom Tipe: Nywerheidspers ele omgeskakel na ambagsdistilleerderij

Lisensie Komponente Versoek:
1. Mikro-Vervaardiging (Distilleerderij)
   - Ambags-gin produksie
   - Vodka produksie
   - Gearomatiseerde spiritus
   - Jaarlikse produksie limiet: 50,000 liter

2. Op-Verbruik (Proëkamer & Kroeg)
   - Kelkiedrank kroeg met eie spiritus
   - Spiritus proe en opvoeding
   - Kapasiteit: 60 persone

3. Af-Verbruik (Kleinhandel Verkope)
   - Kleinhandel verkope van eie vervaardigde produkte
   - Aanlyn verkope uitvoering
   - Korporatiewe geskenke

Maatskappy Direkteure:
- James Robert McKenzie (ID: 7906125432088) - Meester Distilleerder, 40%
- Emma Louise Barnard (ID: 8205145234087) - Besigheidsdirekteur, 35%
- Thando William Mbeki (ID: 8409085123086) - Bemarkingsdirekteur, 25%

Produkte en Produksie:
Primêre Produkte:
- Cape Fynbos Gin (vlagskip produk)
- Table Mountain Vodka
- Rooibos-geïnfuseerde spiritus
- Seisoenale beperkte uitgawes

Botaniese Bronne:
- Inheemse fynbos vanaf volhoubare bronne
- Plaaslik verkrygde sitrus en kruie
- Vennootskap met Kirstenbosch Botaniese Tuin

Produksie Kapasiteit:
- Koper potketels: 500L en 250L
- Jaarlikse teiken: 35,000 bottels
- Klein-groep ambagtelike produksie
- Kwaliteit oor kwantiteit filosofie

Proëkamer Ervaring:
Bedryfsure: Woensdag-Sondag 12:00-20:00
Aanbiedinge:
- Begeleide spiritus proe (30-45 minute)
- Kelkiedrank meesterklasse
- Distilleerderij toere (agter die skerms)
- Kos paring ervarings
- Privaat gebeurtenisse en funksies

Kleinhandel en Distribusie:
- Ter plaatse bottelwinkel
- Aanlyn winkel (landwye aflewering)
- Groothandel aan geselekteerde restaurante en kroee
- Uitvoer potensiaal (internasionale markte)

Toerisme Komponent:
- Geregistreerde toerisme aantreklikheid
- Opvoedkundige programme oor ambagsdistillering
- Ondersteuning vir plaaslike gasvryheidsbedryf
- Werkskepping (12 permanente posisies)

Voldoening en Veiligheid:
- Bouplanne goedgekeur (nywerheid na gemengde-gebruik omsetting)
- Brandveiligheidstelsels (sproeierstelsels, blussers, alarms)
- Gesondheid en veiligheid voldoening
- Aksyns registrasie met SAID
- Omgewingsgesondheid goedkeuring
- Afvalbestuursplan
- Water gebruikslisensie

Gemeenskapsbet rokkenheid:
- Plaaslike indiensneming voorkeur
- Vaardigheidsontwikkeling en opleiding
- Ondersteuning vir plaaslike verskaffers
- Verantwoordelike alkoholverbruik programme

Ondersteunende Dokumentasie:
- Gedetailleerde besigheidsplan
- Finansiële projeksies
- Bewys van befondsing (R4.5 miljoen belê)
- Gebou voldoeningsertifikaat
- Brandveiligheidssertifikaat
- Omgewingsimpak assessering
- Distilleerderij toerusting spesifikasies
- Produk formules en resepte
- Bemarking en distribusie strategie

Aansoek Beskikbaar vir Inspeksie:
Wes-Kaap Drankowerheid
Langstraat 4, Kaapstad, 8001

Stad van Kaapstad
Metropolitaanse Lisensiëring Departement

Besware moet ingedien word binne 60 dae aan:
Wes-Kaap Drankowerheid
Privaatsak X9043
Kaapstad, 8000
E-pos: micromanufacturing@wcliquor.gov.za

Afskrif aan Applikant:
Cape Craft Distillers (Edms) Bpk
Eenheid 12, The Old Biscuit Mill
Albertweg 375, Woodstock, 7925
Kontak: Emma Barnard
Tel: 021 447 8500
E-pos: licensing@capecraftdistillers.co.za

APPLIKANT: Cape Craft Distillers (Edms) Bpk
DATUM: 19 Februarie 2024`
    },
    publisher: 'Cape Craft Distillers (Pty) Ltd',
    contactName: 'Emma Louise Barnard',
    contactEmail: 'licensing@capecraftdistillers.co.za',
    contactPhone: '+27 21 447 8500',
    deadline: '19 Apr 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Cape Craft Distillers (Pty) Ltd',
        type: 'company',
        registrationNumber: '2022/876543/07',
        role: 'Applicant'
      },
      affectedParties: [
        {
          name: 'James Robert McKenzie',
          type: 'individual',
          idNumber: '7906125432088',
          role: 'Master Distiller & Director (40%)'
        },
        {
          name: 'Emma Louise Barnard',
          type: 'individual',
          idNumber: '8205145234087',
          role: 'Business Director (35%)'
        },
        {
          name: 'Thando William Mbeki',
          type: 'individual',
          idNumber: '8409085123086',
          role: 'Marketing Director (25%)'
        }
      ],
      municipality: 'City of Cape Town Metropolitan Municipality',
      streetAddress: 'Unit 12, The Old Biscuit Mill, 375 Albert Road, Woodstock, Cape Town, 7925',
      applicationType: 'New Application - Micro-Distillery (Multi-component)',
      noticeType: 'Micro-Manufacturing Distillery Licence',
      legalBasis: 'Western Cape Liquor Act, 2008',
      amount: {
        amount: 4500000,
        currency: 'ZAR',
        formatted: 'R4,500,000'
      },
      metadata: {
        tradingName: 'Cape Craft Distillers',
        licenceType: 'Micro-Manufacturing + On + Off-Consumption',
        annualProductionLimit: '50,000 litres',
        targetProduction: '35,000 bottles per annum',
        tastingCapacity: 60,
        products: ['Cape Fynbos Gin', 'Table Mountain Vodka', 'Rooibos Spirits'],
        equipment: ['500L copper pot still', '250L copper pot still'],
        investment: 'R4,500,000',
        employment: '12 permanent positions'
      }
    }
  },

  {
    id: 'liquor-012',
    title: {
      en: 'Shebeen Licence Conversion - Mama Ntombi\'s Tavern',
      af: 'Sjebeen Lisensie Omsetting - Mama Ntombi se Taverne'
    },
    category: 'liquor-licences',
    publishDate: '22 Feb 2024',
    location: 'Mdantsane, Eastern Cape',
    referenceNumber: 'LIQ-2024-012-MDT',
    excerpt: {
      en: 'Application to convert informal shebeen operation to formal licensed tavern.',
      af: 'Aansoek om informele sjebeen bedryf om te skakel na formele gelisensieerde taverne.'
    },
    body: {
      en: `SHEBEEN TO TAVERN LICENCE CONVERSION APPLICATION

Notice is hereby given in terms of the Eastern Cape Liquor Act, 2003, that NTOMBIZODWA GRACE MTHEMBU, Identity Number 6804125234089, trading as MAMA NTOMBI'S TAVERN, intends to apply to the Eastern Cape Liquor Board for conversion of informal shebeen operation to a formal on-consumption tavern liquor licence.

Background and Motivation:
The applicant has been operating an informal shebeen at the current address for approximately 8 years, serving the Mdantsane community. This application seeks to formalize the operation and comply with all legal requirements for a licensed tavern.

Applicant Details:
Name: Ntombizodwa Grace Mthembu
ID Number: 6804125234089
Marital Status: Widow
Community Standing: Long-term resident (32 years in Mdantsane)

Premises Information:
Physical Address: 1456 Zone 3, Mdantsane, Eastern Cape, 5219
Property Ownership: Owner-occupied (Title Deed available)
Erf Number: Zone 3-1456
Property Type: Residential property with tavern extension

Premises Description:
- Main dwelling: 3-bedroom house
- Tavern section: Separate 60m² structure
- Seating capacity: 40 persons
- Outdoor area: 30m² covered patio
- Toilet facilities: 2 separate toilets
- Parking: Street parking + 4 off-street bays

Proposed Trading Details:
Trading Name: Mama Ntombi's Tavern
Proposed Hours: Monday-Sunday 11:00-22:00
Type of Licence: On-Consumption (Tavern)
Products: Beer, wine, and spirits
Food Service: Light meals and snacks available

Community Support:
The application is supported by:
- Ward Councillor (written letter of support)
- Community Policing Forum
- 45 signatures from community members
- Local church leadership

Economic and Social Impact:
Positive Contributions:
- Employment: 3 permanent staff from local community
- Safe drinking environment (vs unlicensed shebeens)
- Community gathering place for responsible adults
- Compliance with health and safety standards
- Tax contribution to formal economy
- Support for local suppliers (bread, meat, soft drinks)

Responsible Trading Commitments:
- No service to persons under 18 years
- ID verification at entry
- Refusal of service to visibly intoxicated persons
- No trading during prohibited hours
- Cooperation with SAPS
- Community complaint hotline
- Designated driver program
- Support for local crime prevention initiatives

Compliance Upgrades Completed:
- Building alterations approved by municipality
- Separate tavern entrance from dwelling
- Fire extinguishers installed
- Adequate lighting (interior and exterior)
- Burglar bars and security gate
- First aid kit on premises
- Health and safety compliance

Required Supporting Documents:
- Title deed (proof of ownership)
- Municipal rates clearance certificate
- Building plan approval (tavern extension)
- Health certificate (food preparation area)
- Fire safety compliance
- Tax clearance certificate (personal)
- SAPS clearance
- Community support letters and signatures
- Business plan
- Proof of completion of responsible alcohol service training

Municipal Zoning:
Current Zoning: Residential
Application: Special consent for tavern use
Status: Application submitted to municipality

Financial Information:
Estimated Monthly Turnover: R35,000-R45,000
Estimated Monthly Expenses: R25,000
Net Monthly Income: R10,000-R20,000
Employment Created: 3 jobs

Community Objection Procedure:
The application will be displayed at:
1. Premises notice board (1456 Zone 3, Mdantsane)
2. Ward Office, Mdantsane Zone 11
3. Buffalo City Metropolitan Municipality Licensing Office
4. Eastern Cape Liquor Board, East London

Objections may be lodged in writing within 60 days to:

Eastern Cape Liquor Board
Private Bag X0035
Bhisho, 5605
Email: objections@ecliquor.gov.za

Copy to Applicant:
Ntombizodwa Grace Mthembu
1456 Zone 3, Mdantsane, 5219
Cell: 073 456 7890
Email: mamantombi456@gmail.com

Note to Community:
Public meeting to discuss application will be held at Zone 3 Community Hall on 10 March 2024 at 14:00. All community members welcome.

APPLICANT: Ntombizodwa Grace Mthembu
ASSISTED BY: Mdantsane Community Development Trust
DATE: 22 February 2024`,
      af: `SJEBEEN NA TAVERNE LISENSIE OMSETTINGSAANSOEK

Kennis geskied hiermee ingevolge die Oos-Kaap Drankwet, 2003, dat NTOMBIZODWA GRACE MTHEMBU, Identiteitsnommer 6804125234089, wat handel dryf as MAMA NTOMBI SE TAVERNE, van voorneme is om by die Oos-Kaap Drankraad aansoek te doen vir omsetting van informele sjebeen bedryf na 'n formele op-verbruik taverne dranklisensie.

Agtergrond en Motivering:
Die applikant bedryf reeds vir ongeveer 8 jaar 'n informele sjebeen by die huidige adres, wat die Mdantsane gemeenskap bedien. Hierdie aansoek poog om die bedryf te formaliseer en aan alle wetlike vereistes vir 'n gelisensieerde taverne te voldoen.

Applikant Besonderhede:
Naam: Ntombizodwa Grace Mthembu
ID Nommer: 6804125234089
Huwelikstatus: Weduwee
Gemeenskapsaansien: Langterm yn inwoner (32 jaar in Mdantsane)

Persele Inligting:
Fisiese Adres: 1456 Sone 3, Mdantsane, Oos-Kaap, 5219
Eiendom Eienaarskap: Eienaar-besette (Titelakte beskikbaar)
Erfnommer: Sone 3-1456
Eiendom Tipe: Residensiële eiendom met taverne uitbreiding

Persele Beskrywing:
- Hoofwoning: 3-slaapkamer huis
- Taverne afdeling: Aparte 60m² struktuur
- Sitplek kapasiteit: 40 persone
- Buitelug area: 30m² bedekte patio
- Toilet fasiliteite: 2 aparte toilette
- Parkering: Straatparkering + 4 buite-straat plekke

Voorgestelde Handelsbesonderhede:
Handelsnaam: Mama Ntombi se Taverne
Voorgestelde Ure: Maandag-Sondag 11:00-22:00
Tipe Lisensie: Op-Verbruik (Taverne)
Produkte: Bier, wyn, en spiritus
Kos Diens: Ligte etes en versnaperings beskikbaar

Gemeenskapsondersteuning:
Die aansoek word ondersteun deur:
- Wyksraadslid (skriftelike ondersteuningsbrief)
- Gemeenskapspolisiëring Forum
- 45 handtekeninge van gemeenskapslede
- Plaaslike kerkleierskap

Ekonomiese en Sosiale Impak:
Positiewe Bydraes:
- Indiensneming: 3 permanente personeel uit plaaslike gemeenskap
- Veilige drinkomgewing (vs ongelisensieerde sjebeen)
- Gemeenskapsbymekaar plek vir verantwoordelike volwassenes
- Voldoening aan gesondheid en veiligheidstandaarde
- Belasting bydrae tot formele ekonomie
- Ondersteuning vir plaaslike verskaffers (brood, vleis, koeldrank)

Verantwoordelike Handelsverbintenisse:
- Geen diens aan persone onder 18 jaar nie
- ID verifikasie by ingang
- Weiering van diens aan sigbaar dronk persone
- Geen handel gedurende verbode ure nie
- Samewerking met SAPD
- Gemeenskapsklagte noodnommer
- Aangewese bestuurder program
- Ondersteuning vir plaaslike misdaadvoorkomingsinisiatiewe

Voldoeningsopgraderings Voltooi:
- Gebou veranderings goedgekeur deur munisipaliteit
- Aparte taverne ingang vanaf woning
- Brandblussers geïnstalleer
- Voldoende beligting (binne en buite)
- Diefstalstawwe en sekuriteitsheining
- Noodhulp kis op persele
- Gesondheid en veiligheid voldoening

Vereiste Ondersteunende Dokumente:
- Titelakte (bewys van eienaarskap)
- Munisipale tariewe klaringsertifikaat
- Bouplan goedkeuring (taverne uitbreiding)
- Gesondheidssertifikaat (kosvoorbereiding area)
- Brandveiligheid voldoening
- Belasting klaringsertifikaat (persoonlik)
- SAPD klaring
- Gemeenskapsondersteuning briewe en handtekeninge
- Besigheidsplan
- Bewys van voltooiing van verantwoordelike alkoholdiens opleiding

Munisipale Sonering:
Huidige Sonering: Residensieel
Aansoek: Spesiale toestemming vir taverne gebruik
Status: Aansoek ingedien by munisipaliteit

Finansiële Inligting:
Geskatte Maandelikse Omset: R35,000-R45,000
Geskatte Maandelikse Uitgawes: R25,000
Netto Maandelikse Inkomste: R10,000-R20,000
Indiensneming Geskep: 3 werk sgeleenthede

Gemeenskapsbeswaar Prosedure:
Die aansoek sal vertoon word by:
1. Persele kennisgewingbord (1456 Sone 3, Mdantsane)
2. Wykkantoor, Mdantsane Sone 11
3. Buffalo City Metropolitaanse Munisipaliteit Lisensiëring Kantoor
4. Oos-Kaap Drankraad, Oos-Londen

Besware kan skriftelik ingedien word binne 60 dae aan:

Oos-Kaap Drankraad
Privaatsak X0035
Bhisho, 5605
E-pos: objections@ecliquor.gov.za

Afskrif aan Applikant:
Ntombizodwa Grace Mthembu
1456 Sone 3, Mdantsane, 5219
Sel: 073 456 7890
E-pos: mamantombi456@gmail.com

Nota aan Gemeenskap:
Openbare vergadering om aansoek te bespreek sal gehou word by Sone 3 Gemeenskapsaal op 10 Maart 2024 om 14:00. Alle gemeenskapslede welkom.

APPLIKANT: Ntombizodwa Grace Mthembu
GEASSISTEER DEUR: Mdantsane Gemeenskapsontwikkelings Trust
DATUM: 22 Februarie 2024`
    },
    publisher: 'Ntombizodwa Grace Mthembu',
    contactName: 'Ntombizodwa Grace Mthembu',
    contactEmail: 'mamantombi456@gmail.com',
    contactPhone: '+27 73 456 7890',
    deadline: '22 Apr 2024',
    status: 'published',
    accessPolicy: 'account_required',
    extendedFields: {
      primaryParty: {
        name: 'Ntombizodwa Grace Mthembu',
        type: 'individual',
        idNumber: '6804125234089',
        role: 'Applicant/Owner'
      },
      erfNumber: 'Zone 3-1456',
      municipality: 'Buffalo City Metropolitan Municipality',
      streetAddress: '1456 Zone 3, Mdantsane, Eastern Cape, 5219',
      applicationType: 'Shebeen to Tavern Conversion',
      noticeType: 'On-Consumption Tavern Licence (Conversion)',
      legalBasis: 'Eastern Cape Liquor Act, 2003',
      eventDate: '10 Mar 2024',
      metadata: {
        tradingName: 'Mama Ntombi\'s Tavern',
        floorArea: '60m² tavern + 30m² patio',
        capacity: '40 persons',
        yearsOperating: '8 years (informal)',
        communitySupport: '45 signatures + ward councillor + CPF',
        employment: '3 permanent jobs',
        monthlyTurnover: 'R35,000-R45,000',
        propertyOwnership: 'Owner-occupied',
        publicMeeting: '10 March 2024, 14:00, Zone 3 Community Hall'
      }
    }
  }
];
