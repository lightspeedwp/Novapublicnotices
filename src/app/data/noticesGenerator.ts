/**
 * Notice Generator
 * 
 * Generates comprehensive notice data for all categories
 * with randomized dates and realistic content
 */

import { Notice } from "./sampleNotices";

/**
 * Generate random date within a range
 * @param minDaysAgo - Minimum days in the past
 * @param maxDaysAgo - Maximum days in the past
 */
function getRandomDate(minDaysAgo: number, maxDaysAgo: number): string {
  const randomDays = Math.floor(Math.random() * (maxDaysAgo - minDaysAgo + 1)) + minDaysAgo;
  const date = new Date();
  date.setDate(date.getDate() - randomDays);
  
  // Format as ISO string for easier sorting
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}

/**
 * Generate future date for deadlines
 */
function getFutureDate(minDaysAhead: number, maxDaysAhead: number): string {
  const randomDays = Math.floor(Math.random() * (maxDaysAhead - minDaysAhead + 1)) + minDaysAhead;
  const date = new Date();
  date.setDate(date.getDate() + randomDays);
  return date.toISOString().split('T')[0];
}

/**
 * Format date for display
 */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-GB", { 
    day: "numeric", 
    month: "short", 
    year: "numeric" 
  });
}

// South African locations
const locations = [
  "Pretoria, Gauteng",
  "Johannesburg, Gauteng",
  "Sandton, Gauteng",
  "Centurion, Gauteng",
  "Cape Town, Western Cape",
  "Stellenbosch, Western Cape",
  "George, Western Cape",
  "Durban, KwaZulu-Natal",
  "Pietermaritzburg, KwaZulu-Natal",
  "Richards Bay, KwaZulu-Natal",
  "Port Elizabeth, Eastern Cape",
  "East London, Eastern Cape",
  "Mthatha, Eastern Cape",
  "Bloemfontein, Free State",
  "Welkom, Free State",
  "Polokwane, Limpopo",
  "Tzaneen, Limpopo",
  "Nelspruit, Mpumalanga",
  "Witbank, Mpumalanga",
  "Kimberley, Northern Cape",
  "Upington, Northern Cape",
  "Mahikeng, North West",
  "Rustenburg, North West",
];

const statuses = ["published", "published", "published", "archived", "pending"];

const publishers = [
  "Nova News",
  "Government Gazette",
  "Provincial Gazette",
  "Municipality",
  "Department of Justice",
  "SANRAL",
  "Department of Health",
  "Department of Education",
  "City Council",
  "Local Municipality",
];

/**
 * Get random item from array
 */
function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generate comprehensive notices for all categories
 */
export function generateAllNotices(): Notice[] {
  const notices: Notice[] = [];
  let idCounter = 1;

  // Helper to generate notice
  const createNotice = (
    category: string,
    titleEn: string,
    titleAf: string,
    excerptEn: string,
    excerptAf: string,
    bodyEn: string,
    bodyAf: string,
    refPrefix: string
  ): Notice => {
    const publishDate = getRandomDate(1, 365); // Random date in last year
    const deadline = getFutureDate(14, 90); // Random deadline 2-12 weeks ahead
    
    return {
      id: `${category.toUpperCase().substring(0, 3)}-${String(idCounter++).padStart(4, '0')}`,
      title: { en: titleEn, af: titleAf },
      category,
      publishDate: formatDate(publishDate),
      location: randomItem(locations),
      referenceNumber: `${refPrefix}-2026-${String(Math.floor(Math.random() * 9000) + 1000).padStart(4, '0')}`,
      excerpt: { en: excerptEn, af: excerptAf },
      body: { en: bodyEn, af: bodyAf },
      publisher: randomItem(publishers),
      contactName: "Notice Department",
      contactEmail: `notices@${category}.gov.za`,
      contactPhone: "012 345 6789",
      deadline: formatDate(deadline),
      status: randomItem(statuses),
      accessPolicy: "public",
    };
  };

  // TENDERS (10 notices)
  notices.push(
    createNotice(
      "tenders",
      "Road Maintenance Services - N1 Highway",
      "Padonderhoudsdienste - N1 Snelweg",
      "SANRAL invites tenders for maintenance services on the N1 highway.",
      "SANRAL nooi tenders vir onderhoudsdienste op die N1 snelweg.",
      "The South African National Roads Agency Limited (SANRAL) invites competent contractors to submit tenders for road maintenance services on the N1 national route. Scope includes pothole repairs, road marking, and grass cutting.",
      "Die Suid-Afrikaanse Nasionale Padagentskap Beperk (SANRAL) nooi bekwame kontrakteurs om tenders in te dien vir padonderhoudsdienste op die N1 nasionale roete. Omvang sluit slaggat herstelwerk, padmerke, en gras sny in.",
      "TEN"
    ),
    createNotice(
      "tenders",
      "Supply of Medical Equipment - Steve Biko Hospital",
      "Verskaffing van Mediese Toerusting - Steve Biko Hospitaal",
      "Gauteng Health seeks suppliers for medical equipment.",
      "Gauteng Gesondheid soek verskaffers vir mediese toerusting.",
      "Gauteng Department of Health invites tenders from qualified suppliers for the supply and installation of medical equipment including diagnostic machines, patient monitoring systems, and surgical equipment.",
      "Gauteng Departement van Gesondheid nooi tenders van gekwalifiseerde verskaffers vir die verskaffing en installering van mediese toerusting insluitend diagnostiese masjiene, pasiënt moniteringstelsels, en chirurgiese toerusting.",
      "TEN"
    ),
    createNotice(
      "tenders",
      "Construction of Low-Cost Housing - Khayelitsha",
      "Konstruksie van Laekoste Behuising - Khayelitsha",
      "City of Cape Town invites tenders for construction of 500 housing units.",
      "Stad van Kaapstad nooi tenders vir konstruksie van 500 behuisingseenhede.",
      "The City of Cape Town Metropolitan Municipality invites experienced contractors to submit tenders for the construction of 500 low-cost housing units as part of the Khayelitsha Housing Development Project.",
      "Die Stad van Kaapstad Metropolitaanse Munisipaliteit nooi ervare kontrakteurs om tenders in te dien vir die konstruksie van 500 laekoste behuisingseenhede as deel van die Khayelitsha Behuisingsontwikkelingsprojek.",
      "TEN"
    ),
    createNotice(
      "tenders",
      "IT Infrastructure Upgrade - eThekwini Municipality",
      "IT Infrastruktuur Opgradering - eThekwini Munisipaliteit",
      "Municipality invites tenders for comprehensive IT infrastructure upgrade.",
      "Munisipaliteit nooi tenders vir omvattende IT infrastruktuur opgradering.",
      "eThekwini Metropolitan Municipality invites qualified IT service providers to submit tenders for comprehensive IT infrastructure upgrade project across all municipal offices.",
      "eThekwini Metropolitaanse Munisipaliteit nooi gekwalifiseerde IT diensverskaffers om tenders in te dien vir omvattende IT infrastruktuur opgraderings projek oor alle munisipale kantore.",
      "TEN"
    ),
    createNotice(
      "tenders",
      "Waste Collection Services - Nelson Mandela Bay",
      "Afvalversameling Dienste - Nelson Mandela Baai",
      "Municipality seeks waste collection and disposal service providers.",
      "Munisipaliteit soek afvalversameling en wegdoenings diensverskaffers.",
      "Nelson Mandela Bay Metropolitan Municipality invites tenders for the provision of waste collection and disposal services for the next 5 years.",
      "Nelson Mandela Baai Metropolitaanse Munisipaliteit nooi tenders vir die verskaffing van afvalversameling en wegdoenings dienste vir die volgende 5 jaar.",
      "TEN"
    ),
    createNotice(
      "tenders",
      "School Building Construction - Free State Department of Education",
      "Skoolgebou Konstruksie - Vrystaat Departement van Onderwys",
      "Department seeks contractors for new school construction project.",
      "Departement soek kontrakteurs vir nuwe skool konstruksie projek.",
      "Free State Department of Education invites tenders for the construction of a new secondary school in Bloemfontein with capacity for 1200 learners.",
      "Vrystaat Departement van Onderwys nooi tenders vir die konstruksie van 'n nuwe sekondêre skool in Bloemfontein met kapasiteit vir 1200 leerders.",
      "TEN"
    ),
    createNotice(
      "tenders",
      "Water Infrastructure Development - Limpopo Province",
      "Water Infrastruktuur Ontwikkeling - Limpopo Provinsie",
      "Province invites tenders for water infrastructure development.",
      "Provinsie nooi tenders vir water infrastruktuur ontwikkeling.",
      "Limpopo Department of Water and Sanitation invites tenders for the development of water infrastructure including pipelines, reservoirs, and treatment facilities.",
      "Limpopo Departement van Water en Sanitasie nooi tenders vir die ontwikkeling van water infrastruktuur insluitend pype, reservoirs, en behandelingsfasiliteite.",
      "TEN"
    ),
    createNotice(
      "tenders",
      "Security Services - Government Buildings Pretoria",
      "Sekuriteitsdienste - Regeringsgeboue Pretoria",
      "Department seeks security service providers for government facilities.",
      "Departement soek sekuriteitsdiens verskaffers vir regeringsfasiliteite.",
      "Department of Public Works invites tenders for the provision of security services at government buildings in the Pretoria central business district.",
      "Departement van Openbare Werke nooi tenders vir die verskaffing van sekuriteitsdienste by regeringsgeboue in die Pretoria sentrale besigheidsgebied.",
      "TEN"
    ),
    createNotice(
      "tenders",
      "Catering Services - Department of Health Facilities",
      "Spyseniering Dienste - Departement van Gesondheid Fasiliteite",
      "Health Department seeks catering service providers.",
      "Gesondheid Departement soek spysenierings diens verskaffers.",
      "Mpumalanga Department of Health invites tenders for the provision of catering services at provincial hospitals and clinics.",
      "Mpumalanga Departement van Gesondheid nooi tenders vir die verskaffing van spysenieringsdienste by provinsiale hospitale en klinieke.",
      "TEN"
    ),
    createNotice(
      "tenders",
      "Park Development and Landscaping Services - Johannesburg",
      "Park Ontwikkeling en Landskappering Dienste - Johannesburg",
      "City seeks contractors for park development project.",
      "Stad soek kontrakteurs vir park ontwikkeling projek.",
      "City of Johannesburg invites tenders for park development and landscaping services including design, construction, and maintenance of public green spaces.",
      "Stad van Johannesburg nooi tenders vir park ontwikkeling en landskapperingsdienste insluitend ontwerp, konstruksie, en onderhoud van openbare groen ruimtes.",
      "TEN"
    )
  );

  // ESTATES (10 notices)
  notices.push(
    createNotice(
      "estates",
      "Notice to Creditors - Estate Late John Smith",
      "Kennisgewing aan Krediteure - Boedel Wyle John Smith",
      "Creditors are called upon to lodge claims against the estate.",
      "Krediteure word opgeroep om eise teen die boedel in te dien.",
      "Notice is hereby given that letters of executorship in the estate of the late John Michael Smith (ID: 5801015800089) who died on 15 January 2026 have been granted to First National Executor & Trust Company.",
      "Kennis word hiermee gegee dat eksekuteursbriewe in die boedel van wyle John Michael Smith (ID: 5801015800089) wat op 15 Januarie 2026 oorlede is, toegestaan is aan First National Executor & Trust Company.",
      "EST"
    ),
    createNotice(
      "estates",
      "Notice to Creditors - Estate Late Maria van der Merwe",
      "Kennisgewing aan Krediteure - Boedel Wyle Maria van der Merwe",
      "All persons having claims against the estate are required to lodge them.",
      "Alle persone met eise teen die boedel word versoek om dit in te dien.",
      "Notice is hereby given to all creditors and debtors to lodge their claims or pay their debts to the Executor within 30 days of publication of this notice.",
      "Kennis word hiermee gegee aan alle krediteure en debiteure om hul eise in te dien of hul skuld aan die Eksekuteur te betaal binne 30 dae van publikasie van hierdie kennisgewing.",
      "EST"
    ),
    createNotice(
      "estates",
      "Liquidation and Distribution Account - Estate Late Peter Naidoo",
      "Likwidasie en Distribusie Rekening - Boedel Wyle Peter Naidoo",
      "Final account lies for inspection at the Master's Office.",
      "Finale rekening lê ter insae by die Meester se Kantoor.",
      "Notice is hereby given that the liquidation and distribution account in the estate of Peter Naidoo will lie for inspection at the Master's Office Durban for a period of 21 days.",
      "Kennis word hiermee gegee dat die likwidasie en distribusie rekening in die boedel van Peter Naidoo ter insae sal lê by die Meester se Kantoor Durban vir 'n tydperk van 21 dae.",
      "EST"
    ),
    createNotice(
      "estates",
      "Notice to Debtors - Estate Late Sarah Khumalo",
      "Kennisgewing aan Debiteure - Boedel Wyle Sarah Khumalo",
      "All debtors must pay outstanding amounts to the estate.",
      "Alle debiteure moet uitstaande bedrae aan die boedel betaal.",
      "All persons indebted to the estate are required to pay their debts to the undersigned executor without delay. Contact the executor at executor@estateservices.co.za.",
      "Alle persone wat aan die boedel skuld is, moet hul skuld sonder versuim aan die ondergetekende eksekuteur betaal. Kontak die eksekuteur by executor@estateservices.co.za.",
      "EST"
    ),
    createNotice(
      "estates",
      "Estate Notice - Late Jacobus Petrus du Plessis",
      "Boedel Kennisgewing - Wyle Jacobus Petrus du Plessis",
      "Notice of appointment of executor in deceased estate.",
      "Kennisgewing van aanstelling van eksekuteur in oorledene boedel.",
      "Notice is hereby given that Standard Bank of South Africa Limited has been appointed as executor in the estate of the late Jacobus Petrus du Plessis (ID: 4506125076088).",
      "Kennis word hiermee gegee dat Standard Bank van Suid-Afrika Beperk aangestel is as eksekuteur in die boedel van wyle Jacobus Petrus du Plessis (ID: 4506125076088).",
      "EST"
    ),
    createNotice(
      "estates",
      "Notice of Intention to Wind Up Estate - Late Anna Botha",
      "Kennisgewing van Voorneme om Boedel Op te Wind - Wyle Anna Botha",
      "Intention to wind up estate announced for public notice.",
      "Voorneme om boedel op te wind aangekondig vir openbare kennisgewing.",
      "Notice is given that the executor intends to wind up the estate of the late Anna Elizabeth Botha within 60 days from the date of this publication.",
      "Kennis word gegee dat die eksekuteur van voorneme is om die boedel van wyle Anna Elizabeth Botha binne 60 dae vanaf die datum van hierdie publikasie op te wind.",
      "EST"
    ),
    createNotice(
      "estates",
      "Estate Claim Verification - Late Mohammed Essop",
      "Boedel Eis Verifikasie - Wyle Mohammed Essop",
      "All claims must be verified and submitted within the prescribed period.",
      "Alle eise moet geverifieer en ingedien word binne die voorgeskrewe tydperk.",
      "Creditors are hereby notified to submit verified claims to the estate within 30 days. Unverified claims will not be considered in the distribution account.",
      "Krediteure word hiermee in kennis gestel om geverifieerde eise binne 30 dae by die boedel in te dien. Ongeverifieerde eise sal nie oorweeg word in die distribusierekening nie.",
      "EST"
    ),
    createNotice(
      "estates",
      "Distribution of Estate Assets - Late Elizabeth Jones",
      "Distribusie van Boedel Bates - Wyle Elizabeth Jones",
      "Notice of distribution of estate assets to beneficiaries.",
      "Kennisgewing van distribusie van boedel bates aan begunstigdes.",
      "The executor will proceed with distribution of estate assets on 30 April 2026 in accordance with the approved liquidation and distribution account.",
      "Die eksekuteur sal voortgaan met distribusie van boedel bates op 30 April 2026 in ooreenstemming met die goedgekeurde likwidasie en distribusierekening.",
      "EST"
    ),
    createNotice(
      "estates",
      "Estate Executor Appointment - Late William Mthembu",
      "Boedel Eksekuteur Aanstelling - Wyle William Mthembu",
      "Official appointment notice for estate executor.",
      "Amptelike aanstellings kennisgewing vir boedel eksekuteur.",
      "Letters of executorship have been granted to Absa Trust Limited in respect of the estate of the late William Mthembu who died on 20 December 2025.",
      "Eksekuteursbriewe is toegestaan aan Absa Trust Beperk met betrekking tot die boedel van wyle William Mthembu wat op 20 Desember 2025 oorlede is.",
      "EST"
    ),
    createNotice(
      "estates",
      "Notice to Heirs - Estate Late Catherine Venter",
      "Kennisgewing aan Erfgename - Boedel Wyle Catherine Venter",
      "Heirs are notified of their inheritance and distribution date.",
      "Erfgename word in kennis gestel van hul erfenis en distribusie datum.",
      "All heirs of the late Catherine Venter are notified to contact the executor's office to arrange collection of their inheritance as per the approved distribution account.",
      "Alle erfgename van wyle Catherine Venter word in kennis gestel om die eksekuteur se kantoor te kontak om insameling van hul erfenis te reël soos per die goedgekeurde distribusierekening.",
      "EST"
    )
  );

  // LIQUOR LICENCES (10 notices)
  notices.push(
    createNotice(
      "liquor-licences",
      "Application for Liquor Licence - The Golden Lion Pub",
      "Aansoek vir Dranklisensie - The Golden Lion Kroeg",
      "Notice of application for on-consumption liquor licence.",
      "Kennisgewing van aansoek vir op-verbruik dranklisensie.",
      "Notice is hereby given that Sipho Dlamini Trading Pty Ltd intends applying for an on-consumption liquor licence in respect of premises situated at 123 Main Road, Sandton. Any objections must be lodged within 30 days.",
      "Kennis word hiermee gegee dat Sipho Dlamini Trading Edms Bpk van voorneme is om aansoek te doen vir 'n op-verbruik dranklisensie ten opsigte van perseel geleë te 123 Hoofweg, Sandton. Enige besware moet binne 30 dae ingedien word.",
      "LIQ"
    ),
    createNotice(
      "liquor-licences",
      "Liquor Licence Renewal - Sunset Restaurant",
      "Dranklisensie Hernu wing - Sunset Restaurant",
      "Notice of application for renewal of liquor licence.",
      "Kennisgewing van aansoek vir hernu wing van dranklisensie.",
      "Sunset Restaurant CC hereby gives notice of its intention to renew its on-consumption liquor licence for the premises at Corner of Beach Road and Marine Drive, Durban.",
      "Sunset Restaurant BK gee hiermee kennis van sy voorneme om sy op-verbruik dranklisensie te hernuwe vir die perseel op Hoek van Strandweg en Marine Drive, Durban.",
      "LIQ"
    ),
    createNotice(
      "liquor-licences",
      "Transfer of Liquor Licence - Ocean View Tavern",
      "Oordrag van Dranklisensie - Ocean View Tavern",
      "Notice of transfer of liquor licence to new owner.",
      "Kennisgewing van oordrag van dranklisensie aan nuwe eienaar.",
      "Notice is given that the liquor licence for Ocean View Tavern will be transferred from John Brown to Mary Johnson. The premises will continue operating at the same location.",
      "Kennis word gegee dat die dranklisensie vir Ocean View Tavern oorgedra sal word van John Brown aan Mary Johnson. Die perseel sal aanhou funksioneer by dieselfde ligging.",
      "LIQ"
    ),
    createNotice(
      "liquor-licences",
      "Off-Consumption Licence Application - Corner Store",
      "Af-Verbruik Lisensie Aansoek - Hoek Winkel",
      "Application for off-consumption liquor sales.",
      "Aansoek vir af-verbruik drank verkope.",
      "Notice is hereby given that Corner Store Retailers Pty Ltd intends to apply for an off-consumption liquor licence for the premises at 45 Church Street, Bloemfontein.",
      "Kennis word hiermee gegee dat Corner Store Retailers Edms Bpk van voorneme is om aansoek te doen vir 'n af-verbruik dranklisensie vir die perseel te 45 Kerkstraat, Bloemfontein.",
      "LIQ"
    ),
    createNotice(
      "liquor-licences",
      "Special Event Liquor Licence - Summer Music Festival",
      "Spesiale Geleentheid Dranklisensie - Somer Musiek Fees",
      "Application for temporary liquor licence for special event.",
      "Aansoek vir tydelike dranklisensie vir spesiale geleentheid.",
      "Event Organizers SA applies for a special event liquor licence for the Summer Music Festival to be held at Centurion Lake on 15-17 March 2026.",
      "Event Organizers SA doen aansoek vir 'n spesiale geleentheid dranklisensie vir die Somer Musiek Fees wat gehou sal word by Centurion Lake op 15-17 Maart 2026.",
      "LIQ"
    ),
    createNotice(
      "liquor-licences",
      "Micro-Brewery Licence Application - Craft Beer Co",
      "Mikro-Brouhuis Lisensie Aansoek - Craft Beer Co",
      "Application for micro-brewery and on-consumption licence.",
      "Aansoek vir mikro-brouhuis en op-verbruik lisensie.",
      "Craft Beer Company Pty Ltd applies for a micro-brewery licence and on-consumption liquor licence for premises at 78 Industrial Road, Cape Town.",
      "Craft Beer Company Edms Bpk doen aansoek vir 'n mikro-brouhuis lisensie en op-verbruik dranklisensie vir perseel te 78 Industriële Weg, Kaapstad.",
      "LIQ"
    ),
    createNotice(
      "liquor-licences",
      "Wine Farm Liquor Licence - Stellenbosch Vineyards",
      "Wynplaas Dranklisensie - Stellenbosch Wingerde",
      "Application for wine farm liquor licence and tastings.",
      "Aansoek vir wynplaas dranklisensie en proewings.",
      "Stellenbosch Vineyards Estate applies for a wine farm licence to allow wine tastings and sales directly from the farm premises.",
      "Stellenbosch Wingerde Landgoed doen aansoek vir 'n wynplaas lisensie om wynproewings en verkope direk vanaf die plaas perseel toe te laat.",
      "LIQ"
    ),
    createNotice(
      "liquor-licences",
      "Nightclub Liquor Licence - Platinum Lounge",
      "Nagklub Dranklisensie - Platinum Lounge",
      "Application for nightclub on-consumption licence with extended hours.",
      "Aansoek vir nagklub op-verbruik lisensie met verlengde ure.",
      "Platinum Entertainment Pty Ltd applies for an on-consumption liquor licence with extended trading hours until 04:00 for nightclub premises at 156 Long Street, Cape Town.",
      "Platinum Entertainment Edms Bpk doen aansoek vir 'n op-verbruik dranklisensie met verlengde handelsure tot 04:00 vir nagklub perseel te 156 Langstraat, Kaapstad.",
      "LIQ"
    ),
    createNotice(
      "liquor-licences",
      "Hotel Liquor Licence Amendment - Grand Palace Hotel",
      "Hotel Dranklisensie Wysiging - Grand Palace Hotel",
      "Amendment to existing hotel liquor licence.",
      "Wysiging tot bestaande hotel dranklisensie.",
      "Grand Palace Hotel applies to amend its existing liquor licence to include a rooftop bar and poolside service area.",
      "Grand Palace Hotel doen aansoek om sy bestaande dranklisensie te wysig om 'n dakbar en swembadkant diens area in te sluit.",
      "LIQ"
    ),
    createNotice(
      "liquor-licences",
      "Liquor Licence Objection Period - Riverside Tavern",
      "Dranklisensie Beswaar Tydperk - Riverside Tavern",
      "Public objection period for liquor licence application.",
      "Openbare beswaar tydperk vir dranklisensie aansoek.",
      "Members of the public may lodge objections to the liquor licence application for Riverside Tavern at the Municipal Offices within 30 days of this notice.",
      "Lede van die publiek kan besware indien teen die dranklisensie aansoek vir Riverside Tavern by die Munisipale Kantore binne 30 dae van hierdie kennisgewing.",
      "LIQ"
    )
  );

  // TOWN PLANNING (10 notices)
  notices.push(
    createNotice(
      "town-planning",
      "Rezoning Application - Erven 1234 and 1235 Pretoria",
      "Hersonerings Aansoek - Erwe 1234 en 1235 Pretoria",
      "Application for rezoning from residential to commercial use.",
      "Aansoek vir hersonering van residensieel na kommersiële gebruik.",
      "Notice is given that application has been made for the rezoning of Erven 1234 and 1235, Pretoria Central, from Residential 1 to Business 3. Objections may be lodged within 30 days.",
      "Kennis word gegee dat aansoek gedoen is vir die hersonering van Erwe 1234 en 1235, Pretoria Sentraal, van Residensieel 1 na Besigheid 3. Besware kan binne 30 dae ingedien word.",
      "TOWN"
    ),
    createNotice(
      "town-planning",
      "Development Application - Shopping Center Sandton",
      "Ontwikkelings Aansoek - Winkelsentrum Sandton",
      "Proposed development of regional shopping center.",
      "Voorgestelde ontwikkeling van streek winkelsentrum.",
      "Development Developers Pty Ltd proposes to develop a regional shopping center on Portion 10 of Erf 5678, Sandton. Environmental Impact Assessment completed.",
      "Development Developers Edms Bpk stel voor om 'n streek winkelsentrum te ontwikkel op Gedeelte 10 van Erf 5678, Sandton. Omgewingsimpak Assessering voltooi.",
      "TOWN"
    ),
    createNotice(
      "town-planning",
      "Land Use Change - Agricultural to Residential",
      "Grondgebruik Verandering - Landbou na Residensieel",
      "Application to change land use designation.",
      "Aansoek om grondgebruik aanwysing te verander.",
      "Application is made for approval to change the land use of Farm Portion 45, Centurion Agricultural Holdings, from Agricultural to Residential Estate Development.",
      "Aansoek word gedoen vir goedkeuring om die grondgebruik van Plaasgedeelte 45, Centurion Landbou Hoewes, te verander van Landbou na Residensiële Landgoed Ontwikkeling.",
      "TOWN"
    ),
    createNotice(
      "town-planning",
      "Building Height Relaxation - CBD Office Tower",
      "Gebouhoogte Verslapping - SSG Kantoor Toring",
      "Application for relaxation of building height restrictions.",
      "Aansoek vir verslapping van gebouhoogte beperkings.",
      "Permission is sought to exceed the maximum building height of 80m to allow construction of a 120m office tower at Corner of Commissioner and Market Streets, Johannesburg.",
      "Toestemming word gevra om die maksimum gebouhoogte van 80m te oorskry om konstruksie van 'n 120m kantoor toring toe te laat by Hoek van Commissioner en Markstraat, Johannesburg.",
      "TOWN"
    ),
    createNotice(
      "town-planning",
      "Subdivision Application - Residential Estate",
      "Onderverdeling Aansoek - Residensiële Landgoed",
      "Application for subdivision of land into residential stands.",
      "Aansoek vir onderverdeling van grond in residensiële stande.",
      "Notice of application for subdivision of Erf 9876 into 150 residential stands ranging from 300m² to 800m² for a gated residential estate development.",
      "Kennisgewing van aansoek vir onderverdeling van Erf 9876 in 150 residensiële stande wat wissel van 300m² tot 800m² vir 'n omheinde residensiële landgoed ontwikkeling.",
      "TOWN"
    ),
    createNotice(
      "town-planning",
      "Consent Use Application - Home Industry",
      "Toestemming Gebruik Aansoek - Tuis Bedryf",
      "Application for consent to operate home industry.",
      "Aansoek vir toestemming om tuis bedryf te bedryf.",
      "Application for consent use to operate a small-scale manufacturing business from residential premises at 45 Oak Avenue, Durban North.",
      "Aansoek vir toestemming gebruik om 'n kleinskaalse vervaardigings besigheid te bedryf vanaf residensiële perseel te 45 Eikelaan, Durban Noord.",
      "TOWN"
    ),
    createNotice(
      "town-planning",
      "Township Establishment - New Residential Development",
      "Dorpstigting - Nuwe Residensiële Ontwikkeling",
      "Application for establishment of new residential township.",
      "Aansoek vir stigting van nuwe residensiële dorp.",
      "Application is made for the establishment of a township to be known as Sunset Hills Extension 12, comprising 500 residential erven and public open spaces.",
      "Aansoek word gedoen vir die stigting van 'n dorp bekend as Sunset Hills Uitbreiding 12, bestaande uit 500 residensiële erwe en openbare oop ruimtes.",
      "TOWN"
    ),
    createNotice(
      "town-planning",
      "Departure Application - Reduced Parking Requirements",
      "Afwyking Aansoek - Verminderde Parkering Vereistes",
      "Application for departure from parking bay requirements.",
      "Aansoek vir afwyking van parkeerhoek vereistes.",
      "Application for a departure to reduce required parking bays from 200 to 150 for a mixed-use development at 789 Commissioner Street, Johannesburg.",
      "Aansoek vir 'n afwyking om vereiste parkeerhoekke te verminder van 200 na 150 vir 'n gemengde-gebruik ontwikkeling te 789 Kommissarisstraat, Johannesburg.",
      "TOWN"
    ),
    createNotice(
      "town-planning",
      "Closure of Public Road - Urban Development",
      "Sluiting van Openbare Pad - Stedelike Ontwikkeling",
      "Application for closure of portion of public road.",
      "Aansoek vir sluiting van gedeelte van openbare pad.",
      "The Municipality proposes to close a 50m section of Green Street to facilitate urban regeneration and pedestrian plaza development.",
      "Die Munisipaliteit stel voor om 'n 50m seksie van Groenstraat te sluit om stedelike herlewing en voetganger plein ontwikkeling te fasiliteer.",
      "TOWN"
    ),
    createNotice(
      "town-planning",
      "Industrial Zoning Application - Warehouse Development",
      "Industriële Sonering Aansoek - Pakhuis Ontwikkeling",
      "Application for industrial zoning for warehouse facility.",
      "Aansoek vir industriële sonering vir pakhuis fasiliteit.",
      "Application for rezoning to Industrial 2 to permit development of a 15,000m² warehouse and distribution facility at Corner of Main and Factory Roads, Germiston.",
      "Aansoek vir hersonering na Industrieel 2 om ontwikkeling van 'n 15,000m² pakhuis en verspreiding fasiliteit toe te laat by Hoek van Hoof en Fabriekpaaie, Germiston.",
      "TOWN"
    )
  );

  // BUSINESS LICENCES (10 notices)
  // ENVIRONMENTAL (10 notices)
  // COURT ORDERS (10 notices)
  // Continue with remaining categories...
  // (Adding abbreviated versions for brevity)

  notices.push(
    // Business Licences
    ...Array.from({ length: 10 }, (_, i) => createNotice(
      "business-licence",
      `Business Licence Application ${i + 1}`,
      `Besigheidslisensie Aansoek ${i + 1}`,
      "Application for new business operating licence.",
      "Aansoek vir nuwe besigheid bedryfs lisensie.",
      "Notice of application for business licence to operate commercial premises in accordance with municipal bylaws.",
      "Kennisgewing van aansoek vir besigheidslisensie om kommersiële perseel te bedryf in ooreenstemming met munisipale verordeninge.",
      "BUS"
    )),

    // Environmental
    ...Array.from({ length: 10 }, (_, i) => createNotice(
      "environmental",
      `Environmental Impact Assessment ${i + 1}`,
      `Omgewingsimpak Assessering ${i + 1}`,
      "Notice of environmental assessment for proposed development.",
      "Kennisgewing van omgewings assessering vir voorgestelde ontwikkeling.",
      "Environmental Impact Assessment process initiated for proposed development project in accordance with NEMA regulations.",
      "Omgewingsimpak Assesserings proses geïnisieer vir voorgestelde ontwikkelings projek in ooreenstemming met NEMA regulasies.",
      "ENV"
    )),

    // Court Orders
    ...Array.from({ length: 10 }, (_, i) => createNotice(
      "court-orders",
      `Court Order Notice ${i + 1}`,
      `Hofbevel Kennisgewing ${i + 1}`,
      "Notice of court order and legal proceedings.",
      "Kennisgewing van hofbevel en wettige verrigtinge.",
      "Notice is given of court order issued in the matter between parties in terms of court case number.",
      "Kennis word gegee van hofbevel uitgereik in die saak tussen partye in terme van hofsaak nommer.",
      "CRT"
    )),

    // Insolvency
    ...Array.from({ length: 10 }, (_, i) => createNotice(
      "insolvency",
      `Insolvency Notice ${i + 1}`,
      `Insolvensie Kennisgewing ${i + 1}`,
      "Notice of insolvency and liquidation proceedings.",
      "Kennisgewing van insolvensie en likwidasie verrigtinge.",
      "Notice is given that insolvency proceedings have been initiated. Creditors are required to submit verified claims.",
      "Kennis word gegee dat insolvensie verrigtinge geïnisieer is. Krediteure word vereis om geverifieerde eise in te dien.",
      "INS"
    )),

    // Lost Documents
    ...Array.from({ length: 10 }, (_, i) => createNotice(
      "lost-documents",
      `Lost Title Deed ${i + 1}`,
      `Verlore Titelakte ${i + 1}`,
      "Notice of lost or destroyed title deed.",
      "Kennisgewing van verlore of vernietigde titelakte.",
      "Notice is given that the original title deed has been lost and application will be made for a certified copy.",
      "Kennis word gegee dat die oorspronklike titelakte verlore is en aansoek gedoen sal word vir 'n gesertifiseerde afskrif.",
      "LOST"
    )),

    // General Notices
    ...Array.from({ length: 10 }, (_, i) => createNotice(
      "general",
      `General Public Notice ${i + 1}`,
      `Algemene Openbare Kennisgewing ${i + 1}`,
      "General public notice and announcement.",
      "Algemene openbare kennisgewing en aankondiging.",
      "General notice is hereby given for information of the public in accordance with applicable legislation.",
      "Algemene kennis word hiermee gegee vir inligting van die publiek in ooreenstemming met toepaslike wetgewing.",
      "GEN"
    )),

    // Adoptions
    ...Array.from({ length: 10 }, (_, i) => createNotice(
      "adoptions",
      `Adoption Notice ${i + 1}`,
      `Aanneming Kennisgewing ${i + 1}`,
      "Notice of adoption proceedings.",
      "Kennisgewing van aannemings verrigtinge.",
      "Notice is given of adoption proceedings in accordance with the Children's Act and related legislation.",
      "Kennis word gegee van aannemings verrigtinge in ooreenstemming met die Kinderwet en verwante wetgewing.",
      "ADPT"
    )),

    // Curatorship
    ...Array.from({ length: 10 }, (_, i) => createNotice(
      "curatorship",
      `Curatorship Appointment ${i + 1}`,
      `Kuratoraanstelling ${i + 1}`,
      "Notice of curatorship appointment.",
      "Kennisgewing van kuratoraanstelling.",
      "Notice is given of the appointment of a curator in terms of the relevant provisions of law.",
      "Kennis word gegee van die aanstelling van 'n kurator in terme van die relevante bepalings van die reg.",
      "CUR"
    ))
  );

  return notices;
}
