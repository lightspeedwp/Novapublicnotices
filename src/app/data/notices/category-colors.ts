/**
 * Category Color System
 * Unique colors for all 25 public notice categories
 * Colors are semantic and memorable per category type
 */

export interface CategoryColor {
  id: string;
  name: { en: string; af: string };
  color: string;
  colorHover: string;
  colorLight: string;
  colorDark: string;
}

export const categoryColors: Record<string, CategoryColor> = {
  tenders: {
    id: 'tenders',
    name: { en: 'Tenders', af: 'Tenders' },
    color: '#0066cc',
    colorHover: '#0052a3',
    colorLight: '#e6f2ff',
    colorDark: '#004080',
  },
  estates: {
    id: 'estates',
    name: { en: 'Estates', af: 'Boedels' },
    color: '#7c3aed',
    colorHover: '#6d28d9',
    colorLight: '#f3e8ff',
    colorDark: '#5b21b6',
  },
  'liquor-licences': {
    id: 'liquor-licences',
    name: { en: 'Liquor licences', af: 'Dranklisensies' },
    color: '#dc2626',
    colorHover: '#b91c1c',
    colorLight: '#fee2e2',
    colorDark: '#991b1b',
  },
  'town-planning': {
    id: 'town-planning',
    name: { en: 'Town planning', af: 'Stadsbeplanning' },
    color: '#059669',
    colorHover: '#047857',
    colorLight: '#d1fae5',
    colorDark: '#065f46',
  },
  'business-licences': {
    id: 'business-licences',
    name: { en: 'Business licences', af: 'Besigheidslisensies' },
    color: '#ea580c',
    colorHover: '#c2410c',
    colorLight: '#ffedd5',
    colorDark: '#9a3412',
  },
  adoptions: {
    id: 'adoptions',
    name: { en: 'Adoptions', af: 'Aannemings' },
    color: '#ec4899',
    colorHover: '#db2777',
    colorLight: '#fce7f3',
    colorDark: '#be185d',
  },
  'court-orders': {
    id: 'court-orders',
    name: { en: 'Court orders', af: 'Hofbevele' },
    color: '#1e40af',
    colorHover: '#1e3a8a',
    colorLight: '#dbeafe',
    colorDark: '#1e3a8a',
  },
  curatorship: {
    id: 'curatorship',
    name: { en: 'Curatorship', af: 'Kuratorskap' },
    color: '#7c2d12',
    colorHover: '#78350f',
    colorLight: '#fed7aa',
    colorDark: '#78350f',
  },
  demolition: {
    id: 'demolition',
    name: { en: 'Demolition', af: 'Sloping' },
    color: '#b91c1c',
    colorHover: '#991b1b',
    colorLight: '#fecaca',
    colorDark: '#7f1d1d',
  },
  divorce: {
    id: 'divorce',
    name: { en: 'Divorce', af: 'Egskeiding' },
    color: '#9333ea',
    colorHover: '#7e22ce',
    colorLight: '#f3e8ff',
    colorDark: '#6b21a8',
  },
  'insolvent-estates': {
    id: 'insolvent-estates',
    name: { en: 'Insolvent estates', af: 'Insolvente boedels' },
    color: '#4338ca',
    colorHover: '#3730a3',
    colorLight: '#e0e7ff',
    colorDark: '#312e81',
  },
  'lost-documents': {
    id: 'lost-documents',
    name: { en: 'Lost documents', af: 'Verlore dokumente' },
    color: '#0891b2',
    colorHover: '#0e7490',
    colorLight: '#cffafe',
    colorDark: '#155e75',
  },
  environmental: {
    id: 'environmental',
    name: { en: 'Environmental', af: 'Omgewings' },
    color: '#16a34a',
    colorHover: '#15803d',
    colorLight: '#dcfce7',
    colorDark: '#166534',
  },
  'pension-funds': {
    id: 'pension-funds',
    name: { en: 'Pension funds', af: 'Pensioenfondse' },
    color: '#0d9488',
    colorHover: '#0f766e',
    colorLight: '#ccfbf1',
    colorDark: '#115e59',
  },
  're-registrations': {
    id: 're-registrations',
    name: { en: 'Re-registrations', af: 'Her-registrasies' },
    color: '#2563eb',
    colorHover: '#1d4ed8',
    colorLight: '#dbeafe',
    colorDark: '#1e40af',
  },
  'sale-of-business': {
    id: 'sale-of-business',
    name: { en: 'Sale of business', af: 'Verkoop van besigheid' },
    color: '#ca8a04',
    colorHover: '#a16207',
    colorLight: '#fef9c3',
    colorDark: '#854d0e',
  },
  'sale-in-execution': {
    id: 'sale-in-execution',
    name: { en: 'Sale in execution', af: 'Verkoop in eksekusie' },
    color: '#d97706',
    colorHover: '#b45309',
    colorLight: '#fed7aa',
    colorDark: '#92400e',
  },
  'surrender-of-estate': {
    id: 'surrender-of-estate',
    name: { en: 'Surrender of estate', af: 'Oorgawe van boedel' },
    color: '#8b5cf6',
    colorHover: '#7c3aed',
    colorLight: '#ede9fe',
    colorDark: '#6d28d9',
  },
  'town-establishment': {
    id: 'town-establishment',
    name: { en: 'Town establishment', af: 'Dorpsvestiging' },
    color: '#10b981',
    colorHover: '#059669',
    colorLight: '#d1fae5',
    colorDark: '#047857',
  },
  'name-changes': {
    id: 'name-changes',
    name: { en: 'Name changes', af: 'Naamveranderings' },
    color: '#06b6d4',
    colorHover: '#0891b2',
    colorLight: '#cffafe',
    colorDark: '#0e7490',
  },
  'company-notices': {
    id: 'company-notices',
    name: { en: 'Company notices', af: 'Maatskappy kennisgewings' },
    color: '#6366f1',
    colorHover: '#4f46e5',
    colorLight: '#e0e7ff',
    colorDark: '#4338ca',
  },
  'antenuptial-contracts': {
    id: 'antenuptial-contracts',
    name: { en: 'Antenuptial contracts', af: 'Huweliksvoorwaarde kontrakte' },
    color: '#f43f5e',
    colorHover: '#e11d48',
    colorLight: '#ffe4e6',
    colorDark: '#be123c',
  },
  'road-closures': {
    id: 'road-closures',
    name: { en: 'Road closures', af: 'Padsluitings' },
    color: '#f59e0b',
    colorHover: '#d97706',
    colorLight: '#fef3c7',
    colorDark: '#b45309',
  },
  trusts: {
    id: 'trusts',
    name: { en: 'Trusts', af: 'Trusts' },
    color: '#14b8a6',
    colorHover: '#0d9488',
    colorLight: '#ccfbf1',
    colorDark: '#0f766e',
  },
  general: {
    id: 'general',
    name: { en: 'General notices', af: 'Algemene kennisgewings' },
    color: '#64748b',
    colorHover: '#475569',
    colorLight: '#f1f5f9',
    colorDark: '#334155',
  },
};

/**
 * Get category color by slug
 */
export function getCategoryColor(slug: string): CategoryColor {
  return categoryColors[slug] || categoryColors.general;
}

/**
 * Get CSS custom properties for a category
 */
export function getCategoryColorCSS(slug: string): Record<string, string> {
  const colors = getCategoryColor(slug);
  return {
    '--category-color': colors.color,
    '--category-color-hover': colors.colorHover,
    '--category-color-light': colors.colorLight,
    '--category-color-dark': colors.colorDark,
  };
}

/**
 * Get all category colors for CSS generation
 */
export function getAllCategoryColors(): CategoryColor[] {
  return Object.values(categoryColors);
}
