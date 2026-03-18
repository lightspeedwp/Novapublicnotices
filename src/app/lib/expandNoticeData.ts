/**
 * Notice Data Expander
 * Programmatically adds 5 more notices to each category
 * to reach minimum of 15 notices per category
 */

import type { Notice } from '../data/sampleNotices';
import { expandedNotices } from '../data/expandedNotices';

// Template data for generating additional notices
const noticeTemplates: Record<string, any> = {
  tenders: [
    {
      titlePrefix: 'Supply of Office Furniture',
      bodySnippet: 'invites tenders for supply and delivery of office furniture',
      publisher: 'Department of Public Works',
    },
    {
      titlePrefix: 'IT Infrastructure Upgrade',
      bodySnippet: 'seeks qualified service providers for IT infrastructure',
      publisher: 'City Council',
    },
    {
      titlePrefix: 'Building Maintenance Services',
      bodySnippet: 'requires maintenance services for government buildings',
      publisher: 'Provincial Administration',
    },
    {
      titlePrefix: 'Security Services Contract',
      bodySnippet: 'invites bids for provision of security services',
      publisher: 'Municipality',
    },
    {
      titlePrefix: 'Catering Services',
      bodySnippet: 'seeks tenders for catering services at government facilities',
      publisher: 'Department of Education',
    },
  ],
  estates: [
    {
      titlePrefix: 'Deceased Estate',
      bodySnippet: 'Notice is hereby given that liquidation and distribution accounts',
      publisher: 'Master of the High Court',
    },
    {
      titlePrefix: 'Estate Late',
      bodySnippet: 'will lie for inspection at the office of the Master',
      publisher: 'Master of the High Court',
    },
    {
      titlePrefix: 'Insolvent Estate',
      bodySnippet: 'meeting of creditors will be held',
      publisher: 'Trustee',
    },
    {
      titlePrefix: 'Final Account',
      bodySnippet: 'final liquidation and distribution account in the estate',
      publisher: 'Executor',
    },
    {
      titlePrefix: 'Estate Administration',
      bodySnippet: 'all persons having claims against the estate',
      publisher: 'Executor Dative',
    },
  ],
  'liquor-licences': [
    {
      titlePrefix: 'Liquor Licence Application',
      bodySnippet: 'applies for on-consumption liquor licence',
      publisher: 'Restaurant Owner',
    },
    {
      titlePrefix: 'Tavern Licence',
      bodySnippet: 'application for tavern special licence',
      publisher: 'Tavern Proprietor',
    },
    {
      titlePrefix: 'Wine Farm Licence',
      bodySnippet: 'application for wine farm licence',
      publisher: 'Estate Owner',
    },
    {
      titlePrefix: 'Event Liquor Permit',
      bodySnippet: 'applies for special event liquor licence',
      publisher: 'Event Organizer',
    },
    {
      titlePrefix: 'Transfer of Licence',
      bodySnippet: 'application for transfer of existing liquor licence',
      publisher: 'New Owner',
    },
  ],
  'town-planning': [
    {
      titlePrefix: 'Rezoning Application',
      bodySnippet: 'application for rezoning from residential to commercial',
      publisher: 'Property Developer',
    },
    {
      titlePrefix: 'Subdivision Application',
      bodySnippet: 'application for subdivision of agricultural land',
      publisher: 'Landowner',
    },
    {
      titlePrefix: 'Township Establishment',
      bodySnippet: 'application for establishment of township',
      publisher: 'Developer',
    },
    {
      titlePrefix: 'Land Use Change',
      bodySnippet: 'application for change of land use',
      publisher: 'Property Owner',
    },
    {
      titlePrefix: 'Building Line Relaxation',
      bodySnippet: 'application for relaxation of building lines',
      publisher: 'Homeowner',
    },
  ],
  'business-licence': [
    {
      titlePrefix: 'Fuel Retail Licence',
      bodySnippet: 'application for petroleum products retail licence',
      publisher: 'Service Station',
    },
    {
      titlePrefix: 'Gaming Licence',
      bodySnippet: 'application for limited payout machine licence',
      publisher: 'Casino Operator',
    },
    {
      titlePrefix: 'Trading Licence',
      bodySnippet: 'application for general dealer trading licence',
      publisher: 'Business Owner',
    },
    {
      titlePrefix: 'Manufacturing Licence',
      bodySnippet: 'application for manufacturing licence',
      publisher: 'Factory Owner',
    },
    {
      titlePrefix: 'Import/Export Permit',
      bodySnippet: 'application for import and export permit',
      publisher: 'Trading Company',
    },
  ],
  environmental: [
    {
      titlePrefix: 'Environmental Impact Assessment',
      bodySnippet: 'notice of environmental impact assessment for proposed development',
      publisher: 'Environmental Consultant',
    },
    {
      titlePrefix: 'Water Use Licence',
      bodySnippet: 'application for water use licence',
      publisher: 'Agricultural Company',
    },
    {
      titlePrefix: 'Waste Management Licence',
      bodySnippet: 'application for waste management facility licence',
      publisher: 'Waste Services',
    },
    {
      titlePrefix: 'Mining Right',
      bodySnippet: 'application for mining right',
      publisher: 'Mining Company',
    },
    {
      titlePrefix: 'Air Quality Permit',
      bodySnippet: 'application for atmospheric emission licence',
      publisher: 'Industrial Facility',
    },
  ],
  'court-orders': [
    {
      titlePrefix: 'Final Order',
      bodySnippet: 'notice of final court order in the matter',
      publisher: 'High Court',
    },
    {
      titlePrefix: 'Interdict Application',
      bodySnippet: 'application for interdict',
      publisher: 'Magistrate Court',
    },
    {
      titlePrefix: 'Sequestration Order',
      bodySnippet: 'notice of sequestration order',
      publisher: 'High Court',
    },
    {
      titlePrefix: 'Eviction Order',
      bodySnippet: 'notice of eviction proceedings',
      publisher: 'District Court',
    },
    {
      titlePrefix: 'Court Summons',
      bodySnippet: 'summons to appear in court',
      publisher: 'Magistrate Court',
    },
  ],
  general: [
    {
      titlePrefix: 'Public Notice',
      bodySnippet: 'notice is hereby given to the public',
      publisher: 'Public Authority',
    },
    {
      titlePrefix: 'Community Meeting',
      bodySnippet: 'notice of community consultation meeting',
      publisher: 'Municipality',
    },
    {
      titlePrefix: 'Road Closure',
      bodySnippet: 'notice of temporary road closure',
      publisher: 'Transport Authority',
    },
    {
      titlePrefix: 'Service Interruption',
      bodySnippet: 'notice of planned service interruption',
      publisher: 'Utility Company',
    },
    {
      titlePrefix: 'Public Hearing',
      bodySnippet: 'notice of public hearing',
      publisher: 'Government Department',
    },
  ],
};

// Locations
const locations = [
  'Pretoria, Gauteng',
  'Johannesburg, Gauteng',
  'Sandton, Gauteng',
  'Cape Town, Western Cape',
  'Durban, KwaZulu-Natal',
  'Port Elizabeth, Eastern Cape',
  'Bloemfontein, Free State',
  'Polokwane, Limpopo',
  'Nelspruit, Mpumalanga',
  'Kimberley, Northern Cape',
  'Mahikeng, North West',
  'Stellenbosch, Western Cape',
  'Pietermaritzburg, KwaZulu-Natal',
];

/**
 * Generate date helper
 */
function getRecentDate(daysAgo: number): string {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getFutureDate(daysAhead: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/**
 * Generate 5 additional notices for a category
 */
function generateAdditionalNotices(category: string, startId: number): Notice[] {
  const templates = noticeTemplates[category];
  if (!templates) return [];

  const notices: Notice[] = [];

  templates.forEach((template: any, index: number) => {
    const id = `${category.toUpperCase().substring(0, 3)}-${String(startId + index).padStart(3, '0')}`;
    const location = locations[Math.floor(Math.random() * locations.length)];
    const daysAgo = Math.floor(Math.random() * 14) + 1;

    notices.push({
      id,
      title: {
        en: `${template.titlePrefix} - ${location.split(',')[0]}`,
        af: `${template.titlePrefix} - ${location.split(',')[0]}`,
      },
      category,
      publishDate: getRecentDate(daysAgo),
      location,
      referenceNumber: `${category.toUpperCase()}-2026-${Math.floor(Math.random() * 999)}`,
      excerpt: {
        en: `${template.publisher} ${template.bodySnippet} in ${location}.`,
        af: `${template.publisher} ${template.bodySnippet} in ${location}.`,
      },
      body: {
        en: `${template.publisher} ${template.bodySnippet} for premises located at ${location}. Interested parties may submit objections within 30 days. Reference: ${id}. Closing date: ${getFutureDate(30)}.`,
        af: `${template.publisher} ${template.bodySnippet} vir persele geleë te ${location}. Belangstellende partye kan besware indien binne 30 dae. Verwysing: ${id}. Sluitingsdatum: ${getFutureDate(30)}.`,
      },
      publisher: template.publisher,
      contactName: 'Notice Administrator',
      contactEmail: `notices@${template.publisher.toLowerCase().replace(/\s+/g, '')}.co.za`,
      contactPhone: '+27 12 000 0000',
      deadline: getFutureDate(30),
      status: 'published',
      accessPolicy: 'public',
    });
  });

  return notices;
}

/**
 * Get expanded notices with additional data
 */
export function getExpandedNotices(): Notice[] {
  const categories = [
    'tenders',
    'estates',
    'liquor-licences',
    'town-planning',
    'business-licence',
    'environmental',
    'court-orders',
    'general',
  ];

  let allNotices = [...expandedNotices];
  let nextId = expandedNotices.length + 1000;

  categories.forEach((category) => {
    const existingCount = allNotices.filter((n) => n.category === category).length;
    if (existingCount < 15) {
      const additional = generateAdditionalNotices(category, nextId);
      allNotices = [...allNotices, ...additional];
      nextId += additional.length;
    }
  });

  return allNotices;
}

/**
 * Export as default notice source
 */
export const allNotices = getExpandedNotices();
