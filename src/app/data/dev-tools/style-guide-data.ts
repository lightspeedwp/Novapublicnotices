/**
 * Nova Public Notices Portal - Style Guide Data
 * 
 * Comprehensive audit of design system tokens, components, and patterns
 * Powers the StyleGuide dev tool page
 */

export interface DesignToken {
  name: string;
  value: string;
  cssVar: string;
  category: string;
  description?: string;
}

export interface ComponentExample {
  name: string;
  category: string;
  description: string;
  variants?: string[];
}

// ============================================================================
// AUDIT: DESIGN TOKENS
// ============================================================================

export const colorTokens: DesignToken[] = [
  // Brand Colors
  { name: 'Nova Primary', value: '#09082f', cssVar: '--nova-primary', category: 'brand', description: 'Primary brand color - deep navy' },
  { name: 'Nova Primary Hover', value: '#1a1849', cssVar: '--nova-primary-hover', category: 'brand' },
  { name: 'Nova Accent', value: '#d70025', cssVar: '--nova-accent', category: 'brand', description: 'Accent brand color - red' },
  { name: 'Nova Accent Hover', value: '#b5001f', cssVar: '--nova-accent-hover', category: 'brand' },
  { name: 'Nova Blue', value: '#549CBE', cssVar: '--nova-blue', category: 'brand', description: 'Supporting blue' },
  
  // Semantic Colors
  { name: 'Background', value: 'rgba(255, 255, 255, 1.00)', cssVar: '--background', category: 'semantic', description: 'Default background' },
  { name: 'Foreground', value: 'rgba(9, 9, 9, 1.00)', cssVar: '--foreground', category: 'semantic', description: 'Default text color' },
  { name: 'Card', value: 'rgba(255, 255, 255, 1.00)', cssVar: '--card', category: 'semantic', description: 'Card background' },
  { name: 'Card Foreground', value: 'rgba(9, 9, 9, 1.00)', cssVar: '--card-foreground', category: 'semantic' },
  { name: 'Primary', value: 'rgba(30, 106, 255, 1.00)', cssVar: '--primary', category: 'semantic', description: 'Primary interactive color' },
  { name: 'Primary Foreground', value: 'rgba(255, 255, 255, 1.00)', cssVar: '--primary-foreground', category: 'semantic' },
  { name: 'Secondary', value: 'rgba(224, 224, 224, 1.00)', cssVar: '--secondary', category: 'semantic' },
  { name: 'Secondary Foreground', value: 'rgba(44, 44, 44, 1.00)', cssVar: '--secondary-foreground', category: 'semantic' },
  { name: 'Muted', value: 'rgba(238, 238, 238, 1.00)', cssVar: '--muted', category: 'semantic', description: 'Muted/disabled state' },
  { name: 'Muted Foreground', value: 'rgba(117, 117, 117, 1.00)', cssVar: '--muted-foreground', category: 'semantic' },
  { name: 'Accent', value: 'rgba(0, 71, 208, 1.00)', cssVar: '--accent', category: 'semantic', description: 'Accent highlights' },
  { name: 'Destructive', value: 'rgba(204, 0, 0, 1.00)', cssVar: '--destructive', category: 'semantic', description: 'Error/delete actions' },
  { name: 'Border', value: 'rgba(220, 220, 220, 1.00)', cssVar: '--border', category: 'semantic', description: 'Default border color' },
  { name: 'Input Border', value: 'rgba(84, 156, 190, 0.4)', cssVar: '--input-border', category: 'semantic', description: 'Input field borders' },
  { name: 'Input', value: 'rgba(245, 245, 245, 1.00)', cssVar: '--input', category: 'semantic', description: 'Input background' },
  { name: 'Ring', value: 'rgba(30, 106, 255, 1.00)', cssVar: '--ring', category: 'semantic', description: 'Focus ring color' },
  
  // Status Colors
  { name: 'Published Background', value: '#eaf6ef', cssVar: '--status-published-bg', category: 'status' },
  { name: 'Published Foreground', value: '#1f6d3d', cssVar: '--status-published-fg', category: 'status' },
  { name: 'Pending Background', value: '#fff4e5', cssVar: '--status-pending-bg', category: 'status' },
  { name: 'Pending Foreground', value: '#9c5b00', cssVar: '--status-pending-fg', category: 'status' },
  { name: 'Draft Background', value: '#eef2f7', cssVar: '--status-draft-bg', category: 'status' },
  { name: 'Draft Foreground', value: '#46566b', cssVar: '--status-draft-fg', category: 'status' },
  { name: 'Archived Background', value: '#f2f2f2', cssVar: '--status-archived-bg', category: 'status' },
  { name: 'Archived Foreground', value: '#5f5f5f', cssVar: '--status-archived-fg', category: 'status' },
  
  // Alert Colors
  { name: 'Success Background', value: '#f0fdf4', cssVar: '--success-bg', category: 'alert' },
  { name: 'Success Foreground', value: '#22c55e', cssVar: '--success-fg', category: 'alert' },
  { name: 'Info Background', value: '#eff6ff', cssVar: '--info-bg', category: 'alert' },
  { name: 'Info Foreground', value: '#3b82f6', cssVar: '--info-fg', category: 'alert' },
  { name: 'Warning Background', value: '#fefce8', cssVar: '--warning-bg', category: 'alert' },
  { name: 'Warning Foreground', value: '#eab308', cssVar: '--warning-fg', category: 'alert' },
];

export const spacingTokens: DesignToken[] = [
  { name: 'Space 0', value: '0', cssVar: '--space-0', category: 'spacing' },
  { name: 'Space 1', value: '0.25rem (4px)', cssVar: '--space-1', category: 'spacing' },
  { name: 'Space 2', value: '0.5rem (8px)', cssVar: '--space-2', category: 'spacing' },
  { name: 'Space 3', value: '0.75rem (12px)', cssVar: '--space-3', category: 'spacing' },
  { name: 'Space 4', value: '1rem (16px)', cssVar: '--space-4', category: 'spacing' },
  { name: 'Space 5', value: '1.25rem (20px)', cssVar: '--space-5', category: 'spacing' },
  { name: 'Space 6', value: '1.5rem (24px)', cssVar: '--space-6', category: 'spacing' },
  { name: 'Space 8', value: '2rem (32px)', cssVar: '--space-8', category: 'spacing' },
  { name: 'Space 10', value: '2.5rem (40px)', cssVar: '--space-10', category: 'spacing' },
  { name: 'Space 12', value: '3rem (48px)', cssVar: '--space-12', category: 'spacing' },
  { name: 'Space 16', value: '4rem (64px)', cssVar: '--space-16', category: 'spacing' },
  { name: 'Space 20', value: '5rem (80px)', cssVar: '--space-20', category: 'spacing' },
];

export const typographyTokens: DesignToken[] = [
  // Font Sizes
  { name: 'Text XS', value: '12px', cssVar: '--text-xs', category: 'fontSize' },
  { name: 'Text SM', value: '14px', cssVar: '--text-sm', category: 'fontSize' },
  { name: 'Text Base', value: '16px', cssVar: '--text-base', category: 'fontSize' },
  { name: 'Text MD', value: '17px', cssVar: '--text-md', category: 'fontSize' },
  { name: 'Text LG', value: '24px', cssVar: '--text-lg', category: 'fontSize' },
  { name: 'Text XL', value: '32px', cssVar: '--text-xl', category: 'fontSize' },
  { name: 'Text 2XL', value: '40px', cssVar: '--text-2xl', category: 'fontSize' },
  { name: 'Text 3XL', value: '48px', cssVar: '--text-3xl', category: 'fontSize' },
  { name: 'Text 4XL', value: '60px', cssVar: '--text-4xl', category: 'fontSize' },
  { name: 'Text 5XL', value: '72px', cssVar: '--text-5xl', category: 'fontSize' },
  { name: 'Text 6XL', value: '96px', cssVar: '--text-6xl', category: 'fontSize' },
  { name: 'Text Hero', value: '64px', cssVar: '--text-hero', category: 'fontSize' },
  
  // Font Weights
  { name: 'Font Normal', value: '400', cssVar: '--font-weight-normal', category: 'fontWeight' },
  { name: 'Font Medium', value: '500', cssVar: '--font-weight-medium', category: 'fontWeight' },
  { name: 'Font Semibold', value: '600', cssVar: '--font-weight-semibold', category: 'fontWeight' },
  { name: 'Font Bold', value: '600', cssVar: '--font-weight-bold', category: 'fontWeight' },
  { name: 'Font Extrabold', value: '700', cssVar: '--font-weight-extrabold', category: 'fontWeight' },
  
  // Line Heights
  { name: 'Line Height None', value: '1', cssVar: '--line-height-none', category: 'lineHeight' },
  { name: 'Line Height Tight', value: '1.15', cssVar: '--line-height-tight', category: 'lineHeight' },
  { name: 'Line Height Snug', value: '1.3', cssVar: '--line-height-snug', category: 'lineHeight' },
  { name: 'Line Height Normal', value: '1.5', cssVar: '--line-height-normal', category: 'lineHeight' },
  { name: 'Line Height Relaxed', value: '1.7', cssVar: '--line-height-relaxed', category: 'lineHeight' },
  
  // Font Families
  { name: 'Font Heading', value: 'Lexend, sans-serif', cssVar: '--font-family-heading', category: 'fontFamily' },
  { name: 'Font Body', value: 'Lexend, sans-serif', cssVar: '--font-family-body', category: 'fontFamily' },
  { name: 'Font Meta', value: 'Lexend, sans-serif', cssVar: '--font-family-meta', category: 'fontFamily' },
];

export const borderTokens: DesignToken[] = [
  { name: 'Border Width 1', value: '1px', cssVar: '--border-width-1', category: 'borderWidth' },
  { name: 'Border Width 2', value: '2px', cssVar: '--border-width-2', category: 'borderWidth' },
  { name: 'Border Default', value: 'rgba(220, 220, 220, 1.00)', cssVar: '--border-color-default', category: 'borderColor' },
  { name: 'Border Strong', value: '#d1d5db', cssVar: '--border-color-strong', category: 'borderColor' },
  { name: 'Border Light', value: '#e5e7eb', cssVar: '--border-color-light', category: 'borderColor' },
  { name: 'Border Subtle', value: '#f3f4f6', cssVar: '--border-color-subtle', category: 'borderColor' },
  { name: 'Border Brand', value: 'var(--nova-primary)', cssVar: '--border-color-brand', category: 'borderColor' },
  { name: 'Border Accent', value: 'var(--nova-accent)', cssVar: '--border-color-accent', category: 'borderColor' },
];

export const radiusTokens: DesignToken[] = [
  { name: 'Radius XS', value: '2px', cssVar: '--radius-xs', category: 'radius' },
  { name: 'Radius SM', value: '4px', cssVar: '--radius-sm', category: 'radius' },
  { name: 'Radius MD', value: '6px', cssVar: '--radius-md', category: 'radius' },
  { name: 'Radius LG', value: '8px', cssVar: '--radius-lg', category: 'radius' },
  { name: 'Radius XL', value: '12px', cssVar: '--radius-xl', category: 'radius' },
  { name: 'Radius Pill', value: '999px', cssVar: '--radius-pill', category: 'radius' },
  { name: 'Radius Button', value: '4px', cssVar: '--radius-button', category: 'radius' },
  { name: 'Radius Card', value: '8px', cssVar: '--radius-card', category: 'radius' },
];

export const shadowTokens: DesignToken[] = [
  { name: 'Shadow SM', value: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', cssVar: '--shadow-sm', category: 'shadow' },
  { name: 'Shadow MD', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', cssVar: '--shadow-md', category: 'shadow' },
  { name: 'Shadow LG', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', cssVar: '--shadow-lg', category: 'shadow' },
  { name: 'Shadow XL', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', cssVar: '--shadow-xl', category: 'shadow' },
  { name: 'Shadow Hover', value: 'var(--elevation-md)', cssVar: '--shadow-hover', category: 'shadow' },
];

export const iconSizes: DesignToken[] = [
  { name: 'Icon XS', value: '12px', cssVar: '--icon-size-xs', category: 'iconSize' },
  { name: 'Icon SM', value: '16px', cssVar: '--icon-size-sm', category: 'iconSize' },
  { name: 'Icon MD', value: '20px', cssVar: '--icon-size-md', category: 'iconSize' },
  { name: 'Icon LG', value: '24px', cssVar: '--icon-size-lg', category: 'iconSize' },
  { name: 'Icon XL', value: '32px', cssVar: '--icon-size-xl', category: 'iconSize' },
  { name: 'Icon 2XL', value: '48px', cssVar: '--icon-size-2xl', category: 'iconSize' },
];

// ============================================================================
// AUDIT: BEM COMPONENTS
// ============================================================================

export const bemComponents: ComponentExample[] = [
  // Buttons
  { name: 'wpn-button', category: 'button', description: 'Base button component', variants: ['primary', 'secondary', 'accent', 'outline', 'ghost', 'destructive'] },
  { name: 'wpn-button--sm', category: 'button', description: 'Small button (44px height)' },
  { name: 'wpn-button--md', category: 'button', description: 'Medium button (48px height)' },
  { name: 'wpn-button--lg', category: 'button', description: 'Large button (56px height)' },
  
  // Headings
  { name: 'wpn-heading-h1', category: 'typography', description: 'H1 heading (60px, semibold)' },
  { name: 'wpn-heading-h2', category: 'typography', description: 'H2 heading (48px, semibold)' },
  { name: 'wpn-heading-h3', category: 'typography', description: 'H3 heading (40px, semibold)' },
  { name: 'wpn-heading-h4', category: 'typography', description: 'H4 heading (32px, semibold)' },
  { name: 'wpn-heading-h5', category: 'typography', description: 'H5 heading (24px, medium)' },
  { name: 'wpn-heading-h6', category: 'typography', description: 'H6 heading (16px, medium)' },
  { name: 'wpn-heading--primary', category: 'typography', description: 'Primary color modifier' },
  { name: 'wpn-heading--accent', category: 'typography', description: 'Accent color modifier' },
  { name: 'wpn-heading--white', category: 'typography', description: 'White color modifier' },
  
  // Text Utilities
  { name: 'wpn-text--primary', category: 'typography', description: 'Primary brand color text' },
  { name: 'wpn-text--accent', category: 'typography', description: 'Accent brand color text' },
  { name: 'wpn-text--muted', category: 'typography', description: 'Muted text color' },
  
  // Backgrounds
  { name: 'wpn-bg--primary', category: 'background', description: 'Primary background color' },
  { name: 'wpn-bg--accent', category: 'background', description: 'Accent background color' },
  { name: 'wpn-bg--muted', category: 'background', description: 'Muted background color' },
  
  // Borders
  { name: 'wpn-border--primary', category: 'border', description: 'Primary border color' },
  { name: 'wpn-border--accent', category: 'border', description: 'Accent border color' },
  
  // Cards & Containers
  { name: 'wpn-card', category: 'card', description: 'Base card component' },
  { name: 'wpn-card--hover', category: 'card', description: 'Card with hover effects' },
  { name: 'wpn-card--clickable', category: 'card', description: 'Interactive clickable card' },
  
  // Icon Badge
  { name: 'wpn-icon-badge', category: 'icon', description: 'Icon badge component', variants: ['sm', 'md', 'lg', 'xl'] },
  { name: 'wpn-icon-badge__icon', category: 'icon', description: 'Icon element within badge' },
  
  // Status Badges
  { name: 'wpn-status-badge', category: 'badge', description: 'Status badge component', variants: ['published', 'pending', 'draft', 'archived'] },
  
  // Category Badges
  { name: 'wpn-category-badge', category: 'badge', description: 'Category badge with color coding' },
  
  // Page Header
  { name: 'wpn-page-header', category: 'layout', description: 'Page header container' },
  { name: 'wpn-page-header__container', category: 'layout', description: 'Page header content wrapper' },
  { name: 'wpn-page-header__title', category: 'layout', description: 'Page header title' },
  { name: 'wpn-page-header__subtitle', category: 'layout', description: 'Page header subtitle' },
  
  // Breadcrumb
  { name: 'wpn-breadcrumb', category: 'navigation', description: 'Breadcrumb navigation' },
  { name: 'wpn-breadcrumb__list', category: 'navigation', description: 'Breadcrumb list' },
  { name: 'wpn-breadcrumb__item', category: 'navigation', description: 'Breadcrumb item' },
  { name: 'wpn-breadcrumb__link', category: 'navigation', description: 'Breadcrumb link' },
  { name: 'wpn-breadcrumb__separator', category: 'navigation', description: 'Breadcrumb separator' },
  { name: 'wpn-breadcrumb__current', category: 'navigation', description: 'Current page indicator' },
  { name: 'wpn-breadcrumb__icon', category: 'navigation', description: 'Breadcrumb icon (14x14)' },
  
  // CTA Section
  { name: 'wpn-cta-section', category: 'layout', description: 'Call-to-action section' },
  { name: 'wpn-cta-section--spaced', category: 'layout', description: 'CTA with proper spacing' },
];

// ============================================================================
// ICON INVENTORY (Lucide React)
// ============================================================================

export const iconCategories = {
  'Navigation': ['Home', 'Search', 'Menu', 'ChevronDown', 'ChevronRight', 'ArrowRight', 'X'],
  'Actions': ['Plus', 'Edit', 'Trash2', 'Download', 'Upload', 'Save', 'Send'],
  'UI': ['User', 'Settings', 'HelpCircle', 'Info', 'AlertCircle', 'CheckCircle', 'XCircle'],
  'Content': ['FileText', 'File', 'Image', 'Calendar', 'Clock', 'Mail', 'Phone'],
  'Business': ['Briefcase', 'Building', 'MapPin', 'Scale', 'Gavel', 'Wine', 'Store'],
  'Social': ['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Youtube'],
  'Misc': ['Eye', 'EyeOff', 'Filter', 'MoreVertical', 'Heart', 'Bell', 'Lock']
};

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

export const breakpoints = [
  { name: 'Mobile', value: '320px', cssQuery: '@media (min-width: 320px)' },
  { name: 'Mobile L', value: '480px', cssQuery: '@media (min-width: 480px)' },
  { name: 'Tablet', value: '768px', cssQuery: '@media (min-width: 768px)' },
  { name: 'Laptop', value: '1024px', cssQuery: '@media (min-width: 1024px)' },
  { name: 'Desktop', value: '1280px', cssQuery: '@media (min-width: 1280px)' },
  { name: 'Wide', value: '1440px', cssQuery: '@media (min-width: 1440px)' },
];

// ============================================================================
// LAYOUT TOKENS
// ============================================================================

export const layoutTokens = [
  { name: 'Container Max Width', value: '1440px', cssVar: '--container-max-width' },
  { name: 'Nav Height Desktop', value: '80px', cssVar: '--nav-height-desktop' },
  { name: 'Nav Height Mobile', value: '64px', cssVar: '--nav-height-mobile' },
];

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const animationTokens: DesignToken[] = [
  { name: 'Duration Instant', value: '0ms', cssVar: '--duration-instant', category: 'duration' },
  { name: 'Duration Fast', value: '150ms', cssVar: '--duration-fast', category: 'duration' },
  { name: 'Duration Normal', value: '250ms', cssVar: '--duration-normal', category: 'duration' },
  { name: 'Duration Slow', value: '350ms', cssVar: '--duration-slow', category: 'duration' },
  { name: 'Duration Slower', value: '500ms', cssVar: '--duration-slower', category: 'duration' },
  
  { name: 'Ease Linear', value: 'linear', cssVar: '--ease-linear', category: 'easing' },
  { name: 'Ease In', value: 'cubic-bezier(0.4, 0, 1, 1)', cssVar: '--ease-in', category: 'easing' },
  { name: 'Ease Out', value: 'cubic-bezier(0, 0, 0.2, 1)', cssVar: '--ease-out', category: 'easing' },
  { name: 'Ease In Out', value: 'cubic-bezier(0.4, 0, 0.2, 1)', cssVar: '--ease-in-out', category: 'easing' },
  { name: 'Ease Bounce', value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', cssVar: '--ease-bounce', category: 'easing' },
];

// ============================================================================
// SUMMARY STATISTICS
// ============================================================================

export const systemStats = {
  totalColors: colorTokens.length,
  totalSpacingTokens: spacingTokens.length,
  totalTypographyTokens: typographyTokens.length,
  totalBorderTokens: borderTokens.length,
  totalRadiusTokens: radiusTokens.length,
  totalShadowTokens: shadowTokens.length,
  totalIconSizes: iconSizes.length,
  totalBemComponents: bemComponents.length,
  totalBreakpoints: breakpoints.length,
  totalAnimationTokens: animationTokens.length,
  fontFamilies: 1, // Lexend only
  cssFiles: 29, // Count from /src/styles/
  lastAudited: '2024-03-18',
};
