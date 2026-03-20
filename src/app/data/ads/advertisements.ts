/**
 * Advertisement Data Management — Nova Public Notices Portal
 * 
 * Central data file for managing all advertisement creatives,
 * placements, targeting, and rotation logic.
 * 
 * Supports:
 * - Multiple ad creatives per slot type
 * - Targeting rules (page type, category, user type)
 * - A/B testing and rotation
 * - Bilingual content (English + Afrikaans)
 * - Performance tracking metadata
 * - Seasonal campaigns
 * 
 * Dependencies: None
 * Last Updated: 2026-03-18
 */

/* =================================================================
   TypeScript Interfaces
   ================================================================= */

/**
 * Ad Creative — Single advertisement unit
 */
export interface AdCreative {
  id: string;
  name: string;
  advertiser: string;
  
  // Content
  headline: string;
  body?: string;
  cta: string;
  ctaUrl: string;
  
  // Targeting
  adType: AdType;
  size?: AdSize;
  placement?: AdPlacement;
  
  // Targeting Rules
  targetPages?: PageType[];
  targetCategories?: string[];
  targetLanguages?: ('en' | 'af')[];
  targetUserTypes?: UserType[];
  
  // Scheduling
  startDate?: Date;
  endDate?: Date;
  isActive: boolean;
  priority?: number; // 1-10 (10 = highest)
  
  // Visual Styling (overrides default theme)
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  
  // Performance Tracking
  impressions?: number;
  clicks?: number;
  ctr?: number;
  revenue?: number;
  
  // Meta
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
}

/**
 * Ad Campaign — Group of related creatives
 */
export interface AdCampaign {
  id: string;
  name: string;
  advertiser: string;
  description?: string;
  
  // Creatives in this campaign
  creativeIds: string[];
  
  // Campaign Scheduling
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  
  // Budget & Performance
  budget?: number;
  spent?: number;
  impressions?: number;
  clicks?: number;
  conversions?: number;
  
  // Meta
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Ad Placement Rule — Where and when to show ads
 */
export interface AdPlacementRule {
  id: string;
  name: string;
  
  // Placement Location
  placement: AdPlacement;
  adTypes: AdType[];
  
  // Targeting
  pages: PageType[];
  categories?: string[];
  languages?: ('en' | 'af')[];
  
  // Rotation Strategy
  rotationStrategy: 'sequential' | 'random' | 'weighted' | 'optimized';
  maxAdsPerPage?: number;
  frequency?: 'once' | 'every-visit' | 'every-n-hours';
  frequencyHours?: number;
  
  // Performance
  isActive: boolean;
  priority?: number;
}

/* =================================================================
   Enums & Constants
   ================================================================= */

/**
 * Ad Types (IAB Standards)
 */
export type AdType =
  // Display Ads
  | 'leaderboard'           // 728×90
  | 'super-leaderboard'     // 970×90
  | 'billboard'             // 970×250
  | 'medium-rectangle'      // 300×250 (MPU)
  | 'large-rectangle'       // 336×280
  | 'half-page'             // 300×600
  | 'wide-skyscraper'       // 160×600
  | 'skyscraper'            // 120×600
  
  // Mobile Ads
  | 'mobile-leaderboard'    // 320×50
  | 'large-mobile-banner'   // 320×100
  | 'mobile-rectangle'      // 300×250
  
  // Sticky Ads
  | 'sticky-footer'
  | 'sticky-sidebar'
  | 'sticky-header'
  
  // Advanced Ads
  | 'in-feed-native'
  | 'sponsored-listing'
  | 'expandable-banner'
  | 'interstitial'
  | 'modal-overlay'
  | 'slide-in'
  | 'video-outstream'
  | 'wallpaper';

/**
 * Ad Sizes (Pixels)
 */
export type AdSize =
  | '728x90'    // Leaderboard
  | '970x90'    // Super Leaderboard
  | '970x250'   // Billboard
  | '300x250'   // Medium Rectangle (MPU)
  | '336x280'   // Large Rectangle
  | '300x600'   // Half-Page
  | '160x600'   // Wide Skyscraper
  | '120x600'   // Skyscraper
  | '320x50'    // Mobile Leaderboard
  | '320x100'   // Large Mobile Banner
  | '300x1050'; // Portrait

/**
 * Ad Placement Locations (News Website Strategy)
 */
export type AdPlacement =
  // Top-of-Page (The "Hook")
  | 'header-top'
  | 'header-below-logo'
  | 'header-takeover'
  
  // Sidebar (The "Peripheral")
  | 'sidebar-primary'
  | 'sidebar-secondary'
  | 'sidebar-sticky'
  
  // In-Article (The "Engagement")
  | 'in-content-top'
  | 'in-content-mid'
  | 'in-content-bottom'
  | 'between-paragraphs'
  
  // Bottom-of-Article (The "Closure")
  | 'article-end'
  | 'below-content'
  | 'footer-top'
  
  // Specialty
  | 'sticky-footer-mobile'
  | 'sticky-sidebar-desktop'
  | 'background-skin'
  | 'overlay-modal';

/**
 * Page Types (Where ads appear)
 */
export type PageType =
  | 'homepage'
  | 'search-results'
  | 'category-archive'
  | 'single-notice'
  | 'content-page'        // About, FAQ, Help
  | 'account-dashboard'
  | 'submit-notice'
  | 'sales-page';

/**
 * User Types (Targeting)
 */
export type UserType =
  | 'anonymous'           // Not logged in
  | 'registered'          // Logged in
  | 'subscriber'          // Has subscription
  | 'publisher'           // Has published notices
  | 'business'            // Business account
  | 'government'          // Government/municipality account
  | 'legal-professional'; // Lawyer/legal firm

/* =================================================================
   Ad Creatives Database
   ================================================================= */

/**
 * All active ad creatives
 */
export const adCreatives: AdCreative[] = [
  /* =================================================================
     Liquor Licence Ads (High CPM)
     ================================================================= */
  {
    id: 'liquor-001',
    name: 'Distell - Liquor Licence Applications',
    advertiser: 'Distell Group Limited',
    
    headline: 'Need a liquor licence?',
    body: 'Fast-track your application with expert support from Distell.',
    cta: 'Get Started',
    ctaUrl: 'https://example.com/distell-liquor-licences',
    
    adType: 'medium-rectangle',
    size: '300x250',
    placement: 'sidebar-primary',
    
    targetPages: ['single-notice', 'category-archive', 'search-results'],
    targetCategories: ['liquor-licences'],
    targetLanguages: ['en', 'af'],
    
    startDate: new Date('2026-01-01'),
    endDate: new Date('2026-12-31'),
    isActive: true,
    priority: 9,
    
    backgroundColor: '#1a1a2e',
    textColor: '#ffffff',
    accentColor: '#d70025',
    
    impressions: 12450,
    clicks: 623,
    ctr: 5.0,
    revenue: 8500,
    
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-03-15'),
    tags: ['liquor', 'licence', 'high-cpm', 'direct-sale'],
  },
  
  {
    id: 'liquor-002-af',
    name: 'Distell - Dranklisensie Aansoeke (Afrikaans)',
    advertiser: 'Distell Group Limited',
    
    headline: 'Benodig u \'n dranklisensie?',
    body: 'Versnel u aansoek met kundige ondersteuning van Distell.',
    cta: 'Begin',
    ctaUrl: 'https://example.com/distell-dranklisensies',
    
    adType: 'medium-rectangle',
    size: '300x250',
    placement: 'sidebar-primary',
    
    targetPages: ['single-notice', 'category-archive', 'search-results'],
    targetCategories: ['liquor-licences'],
    targetLanguages: ['af'],
    
    startDate: new Date('2026-01-01'),
    endDate: new Date('2026-12-31'),
    isActive: true,
    priority: 9,
    
    backgroundColor: '#1a1a2e',
    textColor: '#ffffff',
    accentColor: '#d70025',
    
    impressions: 5230,
    clicks: 289,
    ctr: 5.5,
    revenue: 3800,
    
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-03-15'),
    tags: ['liquor', 'licence', 'afrikaans', 'high-cpm', 'direct-sale'],
  },
  
  /* =================================================================
     Legal Services Ads (High CPM)
     ================================================================= */
  {
    id: 'legal-001',
    name: 'Bowmans Law - Estate Services',
    advertiser: 'Bowmans Law Firm',
    
    headline: 'Expert estate administration',
    body: 'Navigate complex estate law with South Africa\'s leading firm.',
    cta: 'Consult Now',
    ctaUrl: 'https://example.com/bowmans-estates',
    
    adType: 'half-page',
    size: '300x600',
    placement: 'sidebar-sticky',
    
    targetPages: ['single-notice', 'category-archive'],
    targetCategories: ['estates', 'insolvent-estates', 'curatorship'],
    targetLanguages: ['en', 'af'],
    targetUserTypes: ['registered', 'legal-professional', 'business'],
    
    startDate: new Date('2026-01-01'),
    endDate: new Date('2026-06-30'),
    isActive: true,
    priority: 8,
    
    backgroundColor: '#09082f',
    textColor: '#ffffff',
    accentColor: '#549CBE',
    
    impressions: 18920,
    clicks: 756,
    ctr: 4.0,
    revenue: 15200,
    
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-03-15'),
    tags: ['legal', 'estates', 'professional', 'high-cpm', 'direct-sale'],
  },
  
  /* =================================================================
     Real Estate / Tender Ads
     ================================================================= */
  {
    id: 'tender-001',
    name: 'National Treasury - Tender Portal',
    advertiser: 'National Treasury RSA',
    
    headline: 'Discover government tenders',
    body: 'Access South Africa\'s official tender opportunities.',
    cta: 'Browse Tenders',
    ctaUrl: 'https://example.com/national-treasury-tenders',
    
    adType: 'leaderboard',
    size: '728x90',
    placement: 'header-below-logo',
    
    targetPages: ['homepage', 'category-archive', 'search-results'],
    targetCategories: ['tenders'],
    targetLanguages: ['en', 'af'],
    targetUserTypes: ['business', 'registered'],
    
    startDate: new Date('2026-01-01'),
    endDate: new Date('2026-12-31'),
    isActive: true,
    priority: 7,
    
    backgroundColor: '#ffffff',
    textColor: '#09082f',
    accentColor: '#d70025',
    
    impressions: 45600,
    clicks: 1824,
    ctr: 4.0,
    revenue: 18240,
    
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-03-15'),
    tags: ['tenders', 'government', 'business', 'seasonal'],
  },
  
  /* =================================================================
     In-Feed Native Ads
     ================================================================= */
  {
    id: 'native-001',
    name: 'Nova News - Subscribe for Alerts',
    advertiser: 'Nova News',
    
    headline: 'Never miss a notice',
    body: 'Get instant email alerts for new notices in your category.',
    cta: 'Subscribe Free',
    ctaUrl: '/register',
    
    adType: 'in-feed-native',
    placement: 'in-content-mid',
    
    targetPages: ['search-results', 'category-archive', 'single-notice'],
    targetLanguages: ['en', 'af'],
    targetUserTypes: ['anonymous'],
    
    isActive: true,
    priority: 6,
    
    backgroundColor: '#f8f9fa',
    textColor: '#09082f',
    accentColor: '#549CBE',
    
    impressions: 89500,
    clicks: 8950,
    ctr: 10.0,
    revenue: 0, // Internal promotion
    
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-03-15'),
    tags: ['internal', 'native', 'conversion', 'registration'],
  },
  
  /* =================================================================
     Sponsored Listings
     ================================================================= */
  {
    id: 'sponsored-001',
    name: 'Cape Town Municipality - Public Consultations',
    advertiser: 'City of Cape Town',
    
    headline: 'City of Cape Town: Public consultation open',
    body: 'Have your say on proposed zoning changes in your area.',
    cta: 'Learn More',
    ctaUrl: 'https://example.com/cpt-consultations',
    
    adType: 'sponsored-listing',
    placement: 'in-content-top',
    
    targetPages: ['search-results', 'category-archive'],
    targetCategories: ['town-planning', 'environmental'],
    targetLanguages: ['en'],
    
    startDate: new Date('2026-03-01'),
    endDate: new Date('2026-04-30'),
    isActive: true,
    priority: 7,
    
    backgroundColor: '#ffffff',
    textColor: '#09082f',
    accentColor: '#059669',
    
    impressions: 12400,
    clicks: 620,
    ctr: 5.0,
    revenue: 6200,
    
    createdAt: new Date('2026-03-01'),
    updatedAt: new Date('2026-03-15'),
    tags: ['government', 'municipality', 'sponsored', 'seasonal'],
  },
  
  /* =================================================================
     Sticky Footer Mobile Ads
     ================================================================= */
  {
    id: 'mobile-001',
    name: 'Nova News Mobile App',
    advertiser: 'Nova News',
    
    headline: 'Get the Nova News app',
    body: 'Instant notice alerts on your phone.',
    cta: 'Download',
    ctaUrl: 'https://example.com/nova-app',
    
    adType: 'sticky-footer',
    placement: 'sticky-footer-mobile',
    
    targetPages: ['homepage', 'search-results', 'single-notice'],
    targetLanguages: ['en', 'af'],
    targetUserTypes: ['anonymous', 'registered'],
    
    isActive: true,
    priority: 5,
    
    backgroundColor: '#09082f',
    textColor: '#ffffff',
    accentColor: '#d70025',
    
    impressions: 156000,
    clicks: 7800,
    ctr: 5.0,
    revenue: 0, // Internal promotion
    
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-03-15'),
    tags: ['internal', 'mobile', 'app', 'sticky'],
  },
  
  /* =================================================================
     Seasonal Campaign (Q4 Tenders)
     ================================================================= */
  {
    id: 'seasonal-001',
    name: 'Q4 Tender Rush - Bidding Platform',
    advertiser: 'Tender Platform SA',
    
    headline: 'Q4 tender season is here',
    body: 'Don\'t miss year-end opportunities. Find and bid on tenders.',
    cta: 'Browse Now',
    ctaUrl: 'https://example.com/tender-platform',
    
    adType: 'billboard',
    size: '970x250',
    placement: 'header-takeover',
    
    targetPages: ['homepage'],
    targetCategories: ['tenders'],
    targetLanguages: ['en'],
    targetUserTypes: ['business', 'registered'],
    
    startDate: new Date('2026-10-01'),
    endDate: new Date('2026-12-31'),
    isActive: false, // Not yet active (seasonal)
    priority: 10,
    
    backgroundColor: '#d70025',
    textColor: '#ffffff',
    accentColor: '#09082f',
    
    impressions: 0,
    clicks: 0,
    ctr: 0,
    revenue: 0,
    
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-01-15'),
    tags: ['seasonal', 'q4', 'tenders', 'high-impact', 'direct-sale'],
  },
];

/* =================================================================
   Ad Campaigns Database
   ================================================================= */

export const adCampaigns: AdCampaign[] = [
  {
    id: 'campaign-001',
    name: 'Distell Liquor Licences 2026',
    advertiser: 'Distell Group Limited',
    description: 'Year-long campaign promoting Distell\'s liquor licence support services',
    
    creativeIds: ['liquor-001', 'liquor-002-af'],
    
    startDate: new Date('2026-01-01'),
    endDate: new Date('2026-12-31'),
    isActive: true,
    
    budget: 250000,
    spent: 52100,
    impressions: 17680,
    clicks: 912,
    conversions: 45,
    
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-03-15'),
  },
  
  {
    id: 'campaign-002',
    name: 'Bowmans Estate Services H1 2026',
    advertiser: 'Bowmans Law Firm',
    description: 'First-half campaign for estate administration services',
    
    creativeIds: ['legal-001'],
    
    startDate: new Date('2026-01-01'),
    endDate: new Date('2026-06-30'),
    isActive: true,
    
    budget: 180000,
    spent: 76000,
    impressions: 18920,
    clicks: 756,
    conversions: 28,
    
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-03-15'),
  },
  
  {
    id: 'campaign-003',
    name: 'Q4 Tender Season Campaign',
    advertiser: 'Tender Platform SA',
    description: 'High-impact campaign for Q4 tender rush',
    
    creativeIds: ['seasonal-001'],
    
    startDate: new Date('2026-10-01'),
    endDate: new Date('2026-12-31'),
    isActive: false,
    
    budget: 150000,
    spent: 0,
    impressions: 0,
    clicks: 0,
    conversions: 0,
    
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-01-15'),
  },
];

/* =================================================================
   Ad Placement Rules
   ================================================================= */

export const adPlacementRules: AdPlacementRule[] = [
  /* Header Placements */
  {
    id: 'rule-header-desktop',
    name: 'Desktop Header Leaderboard',
    placement: 'header-below-logo',
    adTypes: ['leaderboard', 'super-leaderboard'],
    pages: ['homepage', 'search-results', 'category-archive'],
    rotationStrategy: 'weighted',
    maxAdsPerPage: 1,
    frequency: 'every-visit',
    isActive: true,
    priority: 9,
  },
  
  {
    id: 'rule-header-takeover',
    name: 'Homepage Billboard Takeover',
    placement: 'header-takeover',
    adTypes: ['billboard'],
    pages: ['homepage'],
    rotationStrategy: 'optimized',
    maxAdsPerPage: 1,
    frequency: 'once',
    isActive: true,
    priority: 10,
  },
  
  /* Sidebar Placements */
  {
    id: 'rule-sidebar-primary',
    name: 'Primary Sidebar (High Impact)',
    placement: 'sidebar-primary',
    adTypes: ['half-page', 'wide-skyscraper', 'medium-rectangle'],
    pages: ['single-notice', 'category-archive', 'search-results'],
    rotationStrategy: 'weighted',
    maxAdsPerPage: 1,
    frequency: 'every-visit',
    isActive: true,
    priority: 8,
  },
  
  {
    id: 'rule-sidebar-secondary',
    name: 'Secondary Sidebar (Standard)',
    placement: 'sidebar-secondary',
    adTypes: ['medium-rectangle', 'large-rectangle'],
    pages: ['single-notice', 'category-archive', 'search-results'],
    rotationStrategy: 'random',
    maxAdsPerPage: 1,
    frequency: 'every-visit',
    isActive: true,
    priority: 6,
  },
  
  /* In-Content Placements */
  {
    id: 'rule-in-content-native',
    name: 'In-Feed Native Ads',
    placement: 'in-content-mid',
    adTypes: ['in-feed-native', 'sponsored-listing'],
    pages: ['search-results', 'category-archive'],
    rotationStrategy: 'optimized',
    maxAdsPerPage: 3,
    frequency: 'every-visit',
    isActive: true,
    priority: 7,
  },
  
  {
    id: 'rule-article-end',
    name: 'End-of-Article Ad',
    placement: 'article-end',
    adTypes: ['large-rectangle', 'medium-rectangle'],
    pages: ['single-notice'],
    rotationStrategy: 'weighted',
    maxAdsPerPage: 1,
    frequency: 'every-visit',
    isActive: true,
    priority: 7,
  },
  
  /* Sticky Placements */
  {
    id: 'rule-sticky-footer-mobile',
    name: 'Sticky Footer Mobile',
    placement: 'sticky-footer-mobile',
    adTypes: ['sticky-footer', 'mobile-leaderboard'],
    pages: ['homepage', 'search-results', 'single-notice', 'category-archive'],
    rotationStrategy: 'sequential',
    maxAdsPerPage: 1,
    frequency: 'every-n-hours',
    frequencyHours: 24,
    isActive: true,
    priority: 6,
  },
];

/* =================================================================
   Helper Functions
   ================================================================= */

/**
 * Get ad creative by ID
 */
export function getAdCreativeById(id: string): AdCreative | undefined {
  return adCreatives.find(ad => ad.id === id);
}

/**
 * Get all active ad creatives for a specific ad type
 */
export function getAdCreativesByType(
  adType: AdType,
  language?: 'en' | 'af'
): AdCreative[] {
  return adCreatives.filter(ad => 
    ad.adType === adType &&
    ad.isActive &&
    (!language || !ad.targetLanguages || ad.targetLanguages.includes(language))
  );
}

/**
 * Get ad creatives for a specific page and placement
 */
export function getAdCreativesForPlacement(
  pageType: PageType,
  placement: AdPlacement,
  language?: 'en' | 'af',
  category?: string
): AdCreative[] {
  return adCreatives.filter(ad => {
    // Must be active
    if (!ad.isActive) return false;
    
    // Check placement
    if (ad.placement && ad.placement !== placement) return false;
    
    // Check page type
    if (ad.targetPages && !ad.targetPages.includes(pageType)) return false;
    
    // Check language
    if (language && ad.targetLanguages && !ad.targetLanguages.includes(language)) return false;
    
    // Check category
    if (category && ad.targetCategories && !ad.targetCategories.includes(category)) return false;
    
    // Check date range
    if (ad.startDate && new Date() < ad.startDate) return false;
    if (ad.endDate && new Date() > ad.endDate) return false;
    
    return true;
  });
}

/**
 * Get random ad creative from a list (for rotation)
 */
export function getRandomAdCreative(creatives: AdCreative[]): AdCreative | undefined {
  if (creatives.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * creatives.length);
  return creatives[randomIndex];
}

/**
 * Get weighted ad creative (based on priority)
 */
export function getWeightedAdCreative(creatives: AdCreative[]): AdCreative | undefined {
  if (creatives.length === 0) return undefined;
  
  // Calculate total weight
  const totalWeight = creatives.reduce((sum, ad) => sum + (ad.priority || 5), 0);
  
  // Random weighted selection
  let random = Math.random() * totalWeight;
  
  for (const ad of creatives) {
    random -= (ad.priority || 5);
    if (random <= 0) return ad;
  }
  
  return creatives[0];
}

/**
 * Get optimized ad creative (based on CTR performance)
 */
export function getOptimizedAdCreative(creatives: AdCreative[]): AdCreative | undefined {
  if (creatives.length === 0) return undefined;
  
  // Sort by CTR (highest first)
  const sorted = [...creatives].sort((a, b) => (b.ctr || 0) - (a.ctr || 0));
  
  return sorted[0];
}

/**
 * Get ad creative based on placement rule rotation strategy
 */
export function getAdCreativeByStrategy(
  creatives: AdCreative[],
  strategy: 'sequential' | 'random' | 'weighted' | 'optimized'
): AdCreative | undefined {
  switch (strategy) {
    case 'random':
      return getRandomAdCreative(creatives);
    case 'weighted':
      return getWeightedAdCreative(creatives);
    case 'optimized':
      return getOptimizedAdCreative(creatives);
    case 'sequential':
    default:
      return creatives[0]; // First in list
  }
}

/**
 * Get ad campaign by ID
 */
export function getAdCampaignById(id: string): AdCampaign | undefined {
  return adCampaigns.find(campaign => campaign.id === id);
}

/**
 * Get all active campaigns
 */
export function getActiveCampaigns(): AdCampaign[] {
  return adCampaigns.filter(campaign => campaign.isActive);
}

/**
 * Get placement rule by ID
 */
export function getPlacementRuleById(id: string): AdPlacementRule | undefined {
  return adPlacementRules.find(rule => rule.id === id);
}

/**
 * Get active placement rules for a page
 */
export function getPlacementRulesForPage(pageType: PageType): AdPlacementRule[] {
  return adPlacementRules.filter(rule => 
    rule.isActive && rule.pages.includes(pageType)
  );
}

/**
 * Track ad impression (update metrics)
 */
export function trackAdImpression(adId: string): void {
  const ad = getAdCreativeById(adId);
  if (ad) {
    ad.impressions = (ad.impressions || 0) + 1;
    ad.updatedAt = new Date();
    
    // Update CTR
    if (ad.clicks && ad.impressions) {
      ad.ctr = (ad.clicks / ad.impressions) * 100;
    }
  }
}

/**
 * Track ad click (update metrics)
 */
export function trackAdClick(adId: string): void {
  const ad = getAdCreativeById(adId);
  if (ad) {
    ad.clicks = (ad.clicks || 0) + 1;
    ad.updatedAt = new Date();
    
    // Update CTR
    if (ad.clicks && ad.impressions) {
      ad.ctr = (ad.clicks / ad.impressions) * 100;
    }
  }
}

/**
 * Get ad statistics summary
 */
export function getAdStatistics(): {
  totalCreatives: number;
  activeCreatives: number;
  totalImpressions: number;
  totalClicks: number;
  averageCTR: number;
  totalRevenue: number;
} {
  const activeAds = adCreatives.filter(ad => ad.isActive);
  const totalImpressions = adCreatives.reduce((sum, ad) => sum + (ad.impressions || 0), 0);
  const totalClicks = adCreatives.reduce((sum, ad) => sum + (ad.clicks || 0), 0);
  const totalRevenue = adCreatives.reduce((sum, ad) => sum + (ad.revenue || 0), 0);
  
  return {
    totalCreatives: adCreatives.length,
    activeCreatives: activeAds.length,
    totalImpressions,
    totalClicks,
    averageCTR: totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0,
    totalRevenue,
  };
}
