/**
 * Nova Public Notices Portal - Ad Slots Data
 * 
 * IAB-approved standard ad sizes and slot configuration
 * All ad units use industry-standard dimensions
 */

export interface AdSlot {
  id: string;
  name: string;
  size: AdSize;
  position: AdPosition;
  brandName: string;
  brandLogo?: string;
  backgroundColor: string;
  showOnMobile: boolean;
}

export interface AdSize {
  width: number;
  height: number;
  label: string; // IAB standard name
}

// ============================================================================
// IAB STANDARD AD SIZES
// ============================================================================

export const adSizes = {
  // Desktop Display Ads
  leaderboard: { width: 728, height: 90, label: 'Leaderboard' },
  billboard: { width: 970, height: 250, label: 'Billboard' },
  mediumRectangle: { width: 300, height: 250, label: 'Medium Rectangle (MPU)' },
  largeRectangle: { width: 336, height: 280, label: 'Large Rectangle' },
  wideSkyscraper: { width: 160, height: 600, label: 'Wide Skyscraper' },
  halfPage: { width: 300, height: 600, label: 'Half Page' },
  portrait: { width: 300, height: 1050, label: 'Portrait' },
  square: { width: 250, height: 250, label: 'Square' },
  smallSquare: { width: 200, height: 200, label: 'Small Square' },
  
  // Mobile Ads
  mobileBanner: { width: 320, height: 50, label: 'Mobile Banner' },
  largeMobileBanner: { width: 320, height: 100, label: 'Large Mobile Banner' },
  mobileLeaderboard: { width: 320, height: 90, label: 'Mobile Leaderboard' },
  
  // Button Ads
  button1: { width: 120, height: 60, label: 'Button 1' },
  button2: { width: 120, height: 90, label: 'Button 2' },
  microBar: { width: 88, height: 31, label: 'Micro Bar' },
};

export type AdPosition =
  | 'header'
  | 'sidebar-top'
  | 'sidebar-mid'
  | 'sidebar-bottom'
  | 'content-top'
  | 'content-mid'
  | 'content-bottom'
  | 'footer'
  | 'inline'
  | 'sticky-bottom';

// ============================================================================
// AD INVENTORY - Real Brand Placeholders
// ============================================================================

export const adInventory: AdSlot[] = [
  // Header / Billboard Ads
  {
    id: 'header-billboard-1',
    name: 'Header Billboard',
    size: adSizes.billboard,
    position: 'header',
    brandName: 'Coca-Cola',
    backgroundColor: '#E31E24',
    showOnMobile: false,
  },
  {
    id: 'header-leaderboard-1',
    name: 'Header Leaderboard',
    size: adSizes.leaderboard,
    position: 'header',
    brandName: 'Standard Bank',
    backgroundColor: '#003E7E',
    showOnMobile: false,
  },
  {
    id: 'mobile-header-1',
    name: 'Mobile Header',
    size: adSizes.largeMobileBanner,
    position: 'header',
    brandName: 'Vodacom',
    backgroundColor: '#E60000',
    showOnMobile: true,
  },
  
  // Sidebar Ads
  {
    id: 'sidebar-mpu-1',
    name: 'Sidebar MPU Top',
    size: adSizes.mediumRectangle,
    position: 'sidebar-top',
    brandName: 'FNB',
    backgroundColor: '#00A9CE',
    showOnMobile: false,
  },
  {
    id: 'sidebar-mpu-2',
    name: 'Sidebar MPU Mid',
    size: adSizes.mediumRectangle,
    position: 'sidebar-mid',
    brandName: 'Nedbank',
    backgroundColor: '#007A3D',
    showOnMobile: false,
  },
  {
    id: 'sidebar-skyscraper-1',
    name: 'Sidebar Skyscraper',
    size: adSizes.wideSkyscraper,
    position: 'sidebar-top',
    brandName: 'MTN',
    backgroundColor: '#FFCB05',
    showOnMobile: false,
  },
  {
    id: 'sidebar-halfpage-1',
    name: 'Sidebar Half Page',
    size: adSizes.halfPage,
    position: 'sidebar-mid',
    brandName: 'Absa',
    backgroundColor: '#DA291C',
    showOnMobile: false,
  },
  
  // Content / Inline Ads
  {
    id: 'content-mpu-1',
    name: 'Content MPU',
    size: adSizes.mediumRectangle,
    position: 'content-mid',
    brandName: 'Pick n Pay',
    backgroundColor: '#00843D',
    showOnMobile: true,
  },
  {
    id: 'content-large-rect-1',
    name: 'Content Large Rectangle',
    size: adSizes.largeRectangle,
    position: 'content-mid',
    brandName: 'Woolworths',
    backgroundColor: '#004E42',
    showOnMobile: false,
  },
  {
    id: 'content-square-1',
    name: 'Content Square',
    size: adSizes.square,
    position: 'inline',
    brandName: 'Clicks',
    backgroundColor: '#E4002B',
    showOnMobile: false,
  },
  
  // Footer Ads
  {
    id: 'footer-leaderboard-1',
    name: 'Footer Leaderboard',
    size: adSizes.leaderboard,
    position: 'footer',
    brandName: 'Discovery',
    backgroundColor: '#005EB8',
    showOnMobile: false,
  },
  {
    id: 'footer-mobile-banner-1',
    name: 'Footer Mobile Banner',
    size: adSizes.mobileBanner,
    position: 'footer',
    brandName: 'Telkom',
    backgroundColor: '#00B5E2',
    showOnMobile: true,
  },
  
  // Sticky Mobile Ad
  {
    id: 'mobile-sticky-1',
    name: 'Mobile Sticky Bottom',
    size: adSizes.mobileBanner,
    position: 'sticky-bottom',
    brandName: 'Capitec',
    backgroundColor: '#00A3E0',
    showOnMobile: true,
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get ad slots by position
 */
export function getAdsByPosition(position: AdPosition, isMobile: boolean = false): AdSlot[] {
  return adInventory.filter(ad => 
    ad.position === position && 
    (isMobile ? ad.showOnMobile : !ad.showOnMobile)
  );
}

/**
 * Get ad slot by ID
 */
export function getAdById(id: string): AdSlot | undefined {
  return adInventory.find(ad => ad.id === id);
}

/**
 * Get random ad for position
 */
export function getRandomAdForPosition(position: AdPosition, isMobile: boolean = false): AdSlot | null {
  const ads = getAdsByPosition(position, isMobile);
  if (ads.length === 0) return null;
  return ads[Math.floor(Math.random() * ads.length)];
}

/**
 * Get ad dimensions as CSS
 */
export function getAdDimensions(size: AdSize): { width: string; height: string } {
  return {
    width: `${size.width}px`,
    height: `${size.height}px`,
  };
}

// ============================================================================
// AD SLOT METADATA
// ============================================================================

export const adPositionLabels: Record<AdPosition, string> = {
  'header': 'Header',
  'sidebar-top': 'Sidebar Top',
  'sidebar-mid': 'Sidebar Middle',
  'sidebar-bottom': 'Sidebar Bottom',
  'content-top': 'Content Top',
  'content-mid': 'Content Middle',
  'content-bottom': 'Content Bottom',
  'footer': 'Footer',
  'inline': 'Inline Content',
  'sticky-bottom': 'Sticky Bottom (Mobile)',
};

export const iabStandards = {
  description: 'All ad units follow IAB (Interactive Advertising Bureau) standard sizes',
  url: 'https://www.iab.com/guidelines/iab-display-advertising-guidelines/',
  lastUpdated: '2024-03-18',
};
