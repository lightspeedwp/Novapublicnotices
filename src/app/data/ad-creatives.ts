/**
 * Ad Creatives — Real Ad Templates
 * 
 * This file contains real ad creative templates for different ad types.
 * Each ad has copy, CTA, colors, and layout specific to the ad type.
 */

export interface AdCreative {
  id: string;
  type: string;
  size: string;
  advertiser: string;
  campaign: string;
  headline: string;
  body?: string;
  cta: string;
  ctaUrl: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  logo?: string;
  image?: string;
  videoUrl?: string;
}

/**
 * Standard Display Ad Creatives
 */
export const displayAdCreatives: AdCreative[] = [
  // Leaderboard 728×90
  {
    id: 'legal-services-leaderboard',
    type: 'leaderboard',
    size: '728x90',
    advertiser: 'Van der Merwe Attorneys',
    campaign: 'Estate Planning Services',
    headline: 'Expert estate planning & administration',
    body: 'Over 25 years serving South Africa',
    cta: 'Get free consultation',
    ctaUrl: '#',
    backgroundColor: '#1e293b',
    textColor: '#ffffff',
    accentColor: '#0066cc',
  },
  
  // Medium Rectangle 300×250
  {
    id: 'accounting-mpu',
    type: 'medium-rectangle',
    size: '300x250',
    advertiser: 'Smith & Associates',
    campaign: 'Business Accounting',
    headline: 'Business accounting made simple',
    body: 'Expert tax planning and compliance for SMEs across South Africa',
    cta: 'Book appointment',
    ctaUrl: '#',
    backgroundColor: '#0f172a',
    textColor: '#ffffff',
    accentColor: '#10b981',
  },
  
  // Half Page 300×600
  {
    id: 'law-firm-halfpage',
    type: 'half-page',
    size: '300x600',
    advertiser: 'Johannesburg Law Group',
    campaign: 'Corporate Law Services',
    headline: 'Corporate law experts',
    body: 'Specializing in mergers, acquisitions, and business compliance. Trusted by 500+ companies.',
    cta: 'Schedule consultation',
    ctaUrl: '#',
    backgroundColor: '#1e40af',
    textColor: '#ffffff',
    accentColor: '#fbbf24',
  },
  
  // Billboard 970×250
  {
    id: 'bank-billboard',
    type: 'billboard',
    size: '970x250',
    advertiser: 'First National Bank',
    campaign: 'Business Banking',
    headline: 'Business banking solutions that grow with you',
    body: 'From startups to enterprises. Competitive rates, expert support, digital tools.',
    cta: 'Open business account',
    ctaUrl: '#',
    backgroundColor: '#be123c',
    textColor: '#ffffff',
    accentColor: '#fbbf24',
  },
];

/**
 * Mobile Ad Creatives
 */
export const mobileAdCreatives: AdCreative[] = [
  // Mobile Leaderboard 320×50
  {
    id: 'insurance-mobile-banner',
    type: 'mobile-leaderboard',
    size: '320x50',
    advertiser: 'Discovery Insure',
    campaign: 'Car Insurance',
    headline: 'Save on car insurance',
    cta: 'Get quote',
    ctaUrl: '#',
    backgroundColor: '#ec4899',
    textColor: '#ffffff',
    accentColor: '#fbbf24',
  },
  
  // Large Mobile Banner 320×100
  {
    id: 'property-mobile-large',
    type: 'large-mobile-banner',
    size: '320x100',
    advertiser: 'Property24',
    campaign: 'Property Listings',
    headline: 'Find your dream home',
    body: '50,000+ properties nationwide',
    cta: 'Search now',
    ctaUrl: '#',
    backgroundColor: '#0891b2',
    textColor: '#ffffff',
    accentColor: '#fbbf24',
  },
];

/**
 * Sticky Footer Ad Creatives
 */
export const stickyFooterCreatives: AdCreative[] = [
  {
    id: 'legal-sticky-footer-desktop',
    type: 'sticky-footer',
    size: '728x90',
    advertiser: 'LegalWise',
    campaign: 'Legal Cover',
    headline: 'Legal protection from R99/month',
    body: 'Family legal cover • Will drafting • Court representation',
    cta: 'Join now',
    ctaUrl: '#',
    backgroundColor: '#7c3aed',
    textColor: '#ffffff',
    accentColor: '#fbbf24',
  },
  {
    id: 'legal-sticky-footer-mobile',
    type: 'sticky-footer',
    size: '320x50',
    advertiser: 'LegalWise',
    campaign: 'Legal Cover',
    headline: 'Legal cover from R99/m',
    cta: 'Join now',
    ctaUrl: '#',
    backgroundColor: '#7c3aed',
    textColor: '#ffffff',
    accentColor: '#fbbf24',
  },
];

/**
 * Popup / Modal Ad Creatives
 */
export const popupAdCreatives: AdCreative[] = [
  // Entry Popup
  {
    id: 'newsletter-popup',
    type: 'entry-popup',
    size: '600x400',
    advertiser: 'Nova News',
    campaign: 'Newsletter Signup',
    headline: 'Never miss important legal notices',
    body: 'Get weekly updates on new public notices in your area. Free, no spam.',
    cta: 'Subscribe now',
    ctaUrl: '#',
    backgroundColor: '#ffffff',
    textColor: '#1e293b',
    accentColor: '#d70025',
  },
  
  // Exit Intent Popup
  {
    id: 'discount-exit-popup',
    type: 'exit-intent',
    size: '600x400',
    advertiser: 'Nova Notices',
    campaign: 'First Notice Discount',
    headline: 'Wait! Get 20% off your first notice',
    body: 'Special offer for first-time customers. Publish your legal notice today.',
    cta: 'Claim discount',
    ctaUrl: '#',
    backgroundColor: '#09082f',
    textColor: '#ffffff',
    accentColor: '#d70025',
  },
];

/**
 * In-Feed Native Ad Creatives
 */
export const nativeAdCreatives: AdCreative[] = [
  {
    id: 'sponsored-legal-service',
    type: 'in-feed-native',
    size: 'fluid',
    advertiser: 'Cape Town Legal Services',
    campaign: 'Estate Administration',
    headline: 'Need help with estate administration?',
    body: 'Our expert team handles everything from executor appointments to final distributions. Over 1,000 estates administered.',
    cta: 'Learn more',
    ctaUrl: '#',
    backgroundColor: 'transparent',
    textColor: 'inherit',
    accentColor: '#0066cc',
  },
  {
    id: 'sponsored-notice-platform',
    type: 'in-feed-native',
    size: 'fluid',
    advertiser: 'QuickNotice Pro',
    campaign: 'Notice Publishing',
    headline: 'Publish legal notices in 5 minutes',
    body: 'Automated compliance checking, instant quotes, same-day publication. Used by 2,000+ legal professionals.',
    cta: 'Try free',
    ctaUrl: '#',
    backgroundColor: 'transparent',
    textColor: 'inherit',
    accentColor: '#10b981',
  },
];

/**
 * Interstitial Ad Creatives
 */
export const interstitialCreatives: AdCreative[] = [
  {
    id: 'app-download-interstitial',
    type: 'interstitial',
    size: 'fullscreen',
    advertiser: 'Nova Notices Mobile',
    campaign: 'App Download',
    headline: 'Get the Nova Notices app',
    body: 'Access public notices on the go. Search, save, and get alerts. Available on iOS and Android.',
    cta: 'Download now',
    ctaUrl: '#',
    backgroundColor: 'linear-gradient(135deg, #09082f, #1e1b4b)',
    textColor: '#ffffff',
    accentColor: '#d70025',
  },
];

/**
 * Get ad creative by type and size
 */
export function getAdCreative(type: string, size?: string): AdCreative | undefined {
  const allCreatives = [
    ...displayAdCreatives,
    ...mobileAdCreatives,
    ...stickyFooterCreatives,
    ...popupAdCreatives,
    ...nativeAdCreatives,
    ...interstitialCreatives,
  ];
  
  if (size) {
    return allCreatives.find(ad => ad.type === type && ad.size === size);
  }
  
  return allCreatives.find(ad => ad.type === type);
}

/**
 * Get random ad creative by type
 */
export function getRandomAdCreative(type: string): AdCreative | undefined {
  const allCreatives = [
    ...displayAdCreatives,
    ...mobileAdCreatives,
    ...stickyFooterCreatives,
    ...popupAdCreatives,
    ...nativeAdCreatives,
    ...interstitialCreatives,
  ];
  
  const typeCreatives = allCreatives.filter(ad => ad.type === type);
  
  if (typeCreatives.length === 0) return undefined;
  
  return typeCreatives[Math.floor(Math.random() * typeCreatives.length)];
}

/**
 * Get ad creative by advertiser
 */
export function getAdCreativeByAdvertiser(advertiser: string): AdCreative[] {
  const allCreatives = [
    ...displayAdCreatives,
    ...mobileAdCreatives,
    ...stickyFooterCreatives,
    ...popupAdCreatives,
    ...nativeAdCreatives,
    ...interstitialCreatives,
  ];
  
  return allCreatives.filter(ad => ad.advertiser === advertiser);
}
