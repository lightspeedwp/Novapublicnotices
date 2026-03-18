/**
 * Hero Section Types
 * Type definitions for hero section data
 */

export type HeroSize = 'sm' | 'md' | 'lg';
export type HeroAlignment = 'left' | 'center';
export type HeroLayout = 'default' | 'split' | 'centered' | 'minimal' | 'with-stats';

export interface HeroButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: 'arrow-right' | 'magnifying-glass' | 'file-text' | 'upload' | 'phone';
}

export interface HeroBreadcrumb {
  label: string;
  href?: string;
}

export interface HeroStat {
  label: string;
  value: string | number;
  icon?: string;
}

export interface HeroData {
  /** Page title/heading */
  title: string;
  
  /** Optional icon for the hero section */
  icon?: string;
  
  /** Optional subtitle/tagline */
  subtitle?: string;
  
  /** Optional description paragraph */
  description?: string;
  
  /** Breadcrumb trail */
  breadcrumbs?: HeroBreadcrumb[];
  
  /** Call-to-action buttons */
  buttons?: HeroButton[];
  
  /** Hero size variant */
  size?: HeroSize;
  
  /** Text alignment */
  alignment?: HeroAlignment;
  
  /** Layout variant */
  layout?: HeroLayout;
  
  /** Show search bar in hero */
  showSearch?: boolean;
  
  /** Stats for with-stats layout */
  stats?: HeroStat[];
}

export interface HeroDataMap {
  [key: string]: HeroData;
}