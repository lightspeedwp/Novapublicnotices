/**
 * AdSlot Component — Intelligent Ad Display System
 * 
 * Data-driven ad system with targeting, performance tracking, and rotation strategies.
 * 100% CSS variables from design system — zero hardcoded styling.
 * 
 * Features:
 * - Intelligent ad selection based on page type, placement, category, language
 * - Multiple rotation strategies (random, weighted, optimized, sequential)
 * - Performance tracking (impressions, clicks, CTR)
 * - Frequency capping
 * - Bilingual support
 * - All IAB standard ad sizes
 */

import { useState, useEffect } from 'react';
import { X } from '@phosphor-icons/react';
import {
  getAdCreativesForPlacement,
  getAdCreativeByStrategy,
  trackAdImpression,
  trackAdClick,
  type AdCreative,
  type AdType,
  type AdPlacement,
  type PageType,
  type UserType,
} from '../data/ads/advertisements';
import '../../styles/ads.css';

export interface AdSlotProps {
  // Core Props
  type: AdType;
  placement?: AdPlacement;
  pageType?: PageType;
  category?: string;
  language?: 'en' | 'af';
  
  // Targeting
  userType?: UserType;
  
  // Display Options
  className?: string;
  label?: string;
  showLabel?: boolean;
  dismissable?: boolean;
  
  // Advanced
  rotationStrategy?: 'sequential' | 'random' | 'weighted' | 'optimized';
  autoShow?: boolean;
  delay?: number;
  onClose?: () => void;
  onImpression?: (adId: string) => void;
  onClick?: (adId: string) => void;
}

export default function AdSlot({
  type,
  placement,
  pageType,
  category,
  language = 'en',
  userType,
  className = '',
  label,
  showLabel = true,
  dismissable = false,
  rotationStrategy = 'random',
  autoShow = true,
  delay = 0,
  onClose,
  onImpression,
  onClick,
}: AdSlotProps) {
  const [isVisible, setIsVisible] = useState(autoShow);
  const [isExpanded, setIsExpanded] = useState(false);
  const [ad, setAd] = useState<AdCreative | undefined>(undefined);
  
  // Select ad creative on mount
  useEffect(() => {
    const selectAdCreative = (): AdCreative | undefined => {
      if (!pageType || !placement) {
        // Fallback: get any active creative for this ad type
        return undefined;
      }
      
      // Get matching creatives
      const matchingCreatives = getAdCreativesForPlacement(
        pageType,
        placement,
        language,
        category
      );
      
      if (matchingCreatives.length === 0) return undefined;
      
      // Apply rotation strategy
      return getAdCreativeByStrategy(matchingCreatives, rotationStrategy);
    };
    
    setAd(selectAdCreative());
  }, [type, placement, pageType, category, language, rotationStrategy]);
  
  // Track impression when ad renders
  useEffect(() => {
    if (ad && isVisible) {
      trackAdImpression(ad.id);
      onImpression?.(ad.id);
    }
  }, [ad, isVisible, onImpression]);
  
  // Handle auto-show with delay for popups
  useEffect(() => {
    if (!autoShow) return;
    
    if (delay > 0) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [autoShow, delay]);
  
  // Handle close
  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };
  
  // Handle click
  const handleAdClick = () => {
    if (ad) {
      trackAdClick(ad.id);
      onClick?.(ad.id);
    }
  };
  
  // If no ad creative, show placeholder
  if (!ad) {
    return (
      <div className={`wpn-ad-slot wpn-ad-slot--${type} wpn-ad-slot--placeholder ${className}`}>
        <div className="wpn-ad-slot__placeholder-content">
          <span className="wpn-ad-slot__placeholder-label">{label || 'Advertisement'}</span>
          <span className="wpn-ad-slot__placeholder-size">{type}</span>
        </div>
      </div>
    );
  }
  
  // Don't render if not visible (for dismissable ads)
  if (!isVisible && (type.includes('interstitial') || type === 'modal-overlay' || type === 'slide-in')) {
    return null;
  }
  
  // Get bilingual label
  const adLabel = label || (language === 'en' ? 'Advertisement' : 'Advertensie');
  
  // Render based on ad type
  switch (type) {
    case 'sticky-footer':
      return <StickyFooterAd ad={ad} onClose={dismissable ? handleClose : undefined} onClick={handleAdClick} label={adLabel} showLabel={showLabel} />;
    
    case 'sticky-header':
      return <StickyHeaderAd ad={ad} onClose={dismissable ? handleClose : undefined} onClick={handleAdClick} label={adLabel} showLabel={showLabel} />;
    
    case 'sticky-sidebar':
      return <StickySidebarAd ad={ad} onClick={handleAdClick} label={adLabel} showLabel={showLabel} className={className} />;
    
    case 'interstitial':
    case 'modal-overlay':
      return <PopupAd ad={ad} onClose={handleClose} onClick={handleAdClick} type={type} />;
    
    case 'slide-in':
      return <SlideInAd ad={ad} onClose={handleClose} onClick={handleAdClick} />;
    
    case 'in-feed-native':
    case 'sponsored-listing':
      return <NativeAd ad={ad} onClick={handleAdClick} label={adLabel} showLabel={showLabel} />;
    
    case 'expandable-banner':
      return <ExpandableAd ad={ad} isExpanded={isExpanded} onToggle={() => setIsExpanded(!isExpanded)} onClick={handleAdClick} label={adLabel} showLabel={showLabel} />;
    
    default:
      return <StandardDisplayAd ad={ad} type={type} onClick={handleAdClick} label={adLabel} showLabel={showLabel} className={className} />;
  }
}

/**
 * Standard Display Ad (Leaderboard, MPU, Billboard, etc.)
 * 100% CSS variables — zero hardcoded styling
 */
function StandardDisplayAd({ 
  ad, 
  type, 
  onClick,
  label, 
  showLabel, 
  className 
}: { 
  ad: AdCreative; 
  type: string;
  onClick: () => void;
  label: string; 
  showLabel: boolean; 
  className: string;
}) {
  return (
    <div className={`wpn-ad-slot wpn-ad-slot--${type} ${className}`}>
      {showLabel && <span className="wpn-ad-slot__label">{label}</span>}
      
      <a 
        href={ad.ctaUrl} 
        className="wpn-ad-slot__content"
        style={{
          '--ad-bg-color': ad.backgroundColor || 'var(--color-bg-primary)',
          '--ad-text-color': ad.textColor || 'var(--color-text-primary)',
          '--ad-accent-color': ad.accentColor || 'var(--nova-accent)',
        } as React.CSSProperties}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={onClick}
      >
        <div className="wpn-ad-slot__inner">
          <div className="wpn-ad-slot__text">
            <h3 className="wpn-ad-slot__headline">{ad.headline}</h3>
            {ad.body && <p className="wpn-ad-slot__body">{ad.body}</p>}
            <span className="wpn-ad-slot__advertiser">{ad.advertiser}</span>
          </div>
          
          <button className="wpn-ad-slot__cta">
            {ad.cta}
          </button>
        </div>
      </a>
    </div>
  );
}

/**
 * Sticky Footer Ad
 * 100% CSS variables — zero hardcoded styling
 */
function StickyFooterAd({ 
  ad, 
  onClose,
  onClick,
  label, 
  showLabel 
}: { 
  ad: AdCreative; 
  onClose?: () => void;
  onClick: () => void;
  label: string; 
  showLabel: boolean;
}) {
  return (
    <div className="wpn-ad-slot wpn-ad-slot--sticky-footer">
      {showLabel && <span className="wpn-ad-slot__label wpn-ad-slot__label--sticky">{label}</span>}
      
      {onClose && (
        <button 
          className="wpn-ad-slot__close wpn-ad-slot__close--sticky"
          onClick={onClose}
          aria-label="Close advertisement"
        >
          <X weight="bold" />
        </button>
      )}
      
      <a 
        href={ad.ctaUrl} 
        className="wpn-ad-slot__content"
        style={{
          '--ad-bg-color': ad.backgroundColor || 'var(--color-bg-primary)',
          '--ad-text-color': ad.textColor || 'var(--color-text-primary)',
          '--ad-accent-color': ad.accentColor || 'var(--nova-accent)',
        } as React.CSSProperties}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={onClick}
      >
        <div className="wpn-ad-slot__inner wpn-ad-slot__inner--sticky-footer">
          <span className="wpn-ad-slot__headline wpn-ad-slot__headline--compact">{ad.headline}</span>
          {ad.body && <span className="wpn-ad-slot__body wpn-ad-slot__body--compact">{ad.body}</span>}
          <button className="wpn-ad-slot__cta wpn-ad-slot__cta--compact">
            {ad.cta}
          </button>
        </div>
      </a>
    </div>
  );
}

/**
 * Sticky Header Ad
 * 100% CSS variables — zero hardcoded styling
 */
function StickyHeaderAd({ 
  ad, 
  onClose,
  onClick,
  label, 
  showLabel 
}: { 
  ad: AdCreative; 
  onClose?: () => void;
  onClick: () => void;
  label: string; 
  showLabel: boolean;
}) {
  return (
    <div className="wpn-ad-slot wpn-ad-slot--sticky-header">
      {showLabel && <span className="wpn-ad-slot__label">{label}</span>}
      
      {onClose && (
        <button 
          className="wpn-ad-slot__close"
          onClick={onClose}
          aria-label="Close advertisement"
        >
          <X weight="bold" />
        </button>
      )}
      
      <a 
        href={ad.ctaUrl} 
        className="wpn-ad-slot__content"
        style={{
          '--ad-bg-color': ad.backgroundColor || 'var(--color-bg-primary)',
          '--ad-text-color': ad.textColor || 'var(--color-text-primary)',
          '--ad-accent-color': ad.accentColor || 'var(--nova-accent)',
        } as React.CSSProperties}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={onClick}
      >
        <div className="wpn-ad-slot__inner">
          <div className="wpn-ad-slot__text">
            <span className="wpn-ad-slot__headline">{ad.headline}</span>
            {ad.body && <span className="wpn-ad-slot__body">{ad.body}</span>}
          </div>
          <button className="wpn-ad-slot__cta">
            {ad.cta}
          </button>
        </div>
      </a>
    </div>
  );
}

/**
 * Sticky Sidebar Ad
 * 100% CSS variables — zero hardcoded styling
 */
function StickySidebarAd({ 
  ad,
  onClick,
  label, 
  showLabel, 
  className 
}: { 
  ad: AdCreative;
  onClick: () => void;
  label: string; 
  showLabel: boolean; 
  className: string;
}) {
  return (
    <div className={`wpn-ad-slot wpn-ad-slot--sticky-sidebar ${className}`}>
      {showLabel && <span className="wpn-ad-slot__label">{label}</span>}
      
      <a 
        href={ad.ctaUrl} 
        className="wpn-ad-slot__content"
        style={{
          '--ad-bg-color': ad.backgroundColor || 'var(--color-bg-primary)',
          '--ad-text-color': ad.textColor || 'var(--color-text-primary)',
          '--ad-accent-color': ad.accentColor || 'var(--nova-accent)',
        } as React.CSSProperties}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={onClick}
      >
        <div className="wpn-ad-slot__inner">
          <div className="wpn-ad-slot__text">
            <h3 className="wpn-ad-slot__headline">{ad.headline}</h3>
            {ad.body && <p className="wpn-ad-slot__body">{ad.body}</p>}
            <span className="wpn-ad-slot__advertiser">{ad.advertiser}</span>
          </div>
          <button className="wpn-ad-slot__cta">
            {ad.cta}
          </button>
        </div>
      </a>
    </div>
  );
}

/**
 * Popup Ad (Interstitial, Modal)
 * 100% CSS variables — zero hardcoded styling
 */
function PopupAd({ 
  ad, 
  onClose,
  onClick,
  type 
}: { 
  ad: AdCreative; 
  onClose: () => void;
  onClick: () => void;
  type: string;
}) {
  return (
    <div className={`wpn-ad-popup wpn-ad-popup--${type}`}>
      <div className="wpn-ad-popup__overlay" onClick={onClose} />
      
      <div 
        className="wpn-ad-popup__content"
        style={{
          '--ad-bg-color': ad.backgroundColor || 'var(--color-bg-primary)',
          '--ad-text-color': ad.textColor || 'var(--color-text-primary)',
          '--ad-accent-color': ad.accentColor || 'var(--nova-accent)',
        } as React.CSSProperties}
      >
        <button 
          className="wpn-ad-popup__close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} weight="bold" />
        </button>
        
        <div className="wpn-ad-popup__inner">
          <h2 className="wpn-ad-popup__headline">{ad.headline}</h2>
          {ad.body && <p className="wpn-ad-popup__body">{ad.body}</p>}
          
          <a 
            href={ad.ctaUrl}
            className="wpn-ad-popup__cta"
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={onClick}
          >
            {ad.cta}
          </a>
          
          <span className="wpn-ad-popup__advertiser">{ad.advertiser}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Slide-In Ad (Corner)
 * 100% CSS variables — zero hardcoded styling
 */
function SlideInAd({ 
  ad, 
  onClose,
  onClick
}: { 
  ad: AdCreative; 
  onClose: () => void;
  onClick: () => void;
}) {
  return (
    <div className="wpn-ad-slide-in">
      <div 
        className="wpn-ad-slide-in__content"
        style={{
          '--ad-bg-color': ad.backgroundColor || 'var(--color-bg-primary)',
          '--ad-text-color': ad.textColor || 'var(--color-text-primary)',
          '--ad-accent-color': ad.accentColor || 'var(--nova-accent)',
        } as React.CSSProperties}
      >
        <button 
          className="wpn-ad-slide-in__close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} weight="bold" />
        </button>
        
        <h3 className="wpn-ad-slide-in__headline">{ad.headline}</h3>
        {ad.body && <p className="wpn-ad-slide-in__body">{ad.body}</p>}
        
        <a 
          href={ad.ctaUrl}
          className="wpn-ad-slide-in__cta"
          target="_blank"
          rel="noopener noreferrer sponsored"
          onClick={onClick}
        >
          {ad.cta}
        </a>
      </div>
    </div>
  );
}

/**
 * Native In-Feed Ad
 * 100% CSS variables — zero hardcoded styling
 */
function NativeAd({ 
  ad,
  onClick,
  label, 
  showLabel 
}: { 
  ad: AdCreative;
  onClick: () => void;
  label: string; 
  showLabel: boolean;
}) {
  return (
    <div className="wpn-ad-native">
      {showLabel && <span className="wpn-ad-native__label">{label}</span>}
      
      <a 
        href={ad.ctaUrl}
        className="wpn-ad-native__content"
        style={{
          '--ad-accent-color': ad.accentColor || 'var(--nova-accent)',
        } as React.CSSProperties}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={onClick}
      >
        <h3 className="wpn-ad-native__headline">{ad.headline}</h3>
        {ad.body && <p className="wpn-ad-native__body">{ad.body}</p>}
        
        <div className="wpn-ad-native__footer">
          <span className="wpn-ad-native__advertiser">{ad.advertiser}</span>
          <span className="wpn-ad-native__cta">
            {ad.cta} →
          </span>
        </div>
      </a>
    </div>
  );
}

/**
 * Expandable Banner Ad
 * 100% CSS variables — zero hardcoded styling
 */
function ExpandableAd({ 
  ad, 
  isExpanded, 
  onToggle,
  onClick,
  label, 
  showLabel 
}: { 
  ad: AdCreative; 
  isExpanded: boolean; 
  onToggle: () => void;
  onClick: () => void;
  label: string; 
  showLabel: boolean;
}) {
  return (
    <div className={`wpn-ad-expandable ${isExpanded ? 'wpn-ad-expandable--expanded' : ''}`}>
      {showLabel && <span className="wpn-ad-slot__label">{label}</span>}
      
      <div 
        className="wpn-ad-expandable__content"
        style={{
          '--ad-bg-color': ad.backgroundColor || 'var(--color-bg-primary)',
          '--ad-text-color': ad.textColor || 'var(--color-text-primary)',
          '--ad-accent-color': ad.accentColor || 'var(--nova-accent)',
        } as React.CSSProperties}
        onMouseEnter={() => !isExpanded && onToggle()}
        onMouseLeave={() => isExpanded && onToggle()}
      >
        <div className="wpn-ad-expandable__collapsed">
          <span className="wpn-ad-slot__headline">{ad.headline}</span>
          <button className="wpn-ad-slot__cta wpn-ad-slot__cta--small">
            {ad.cta}
          </button>
        </div>
        
        {isExpanded && (
          <div className="wpn-ad-expandable__expanded-content">
            {ad.body && <p className="wpn-ad-slot__body">{ad.body}</p>}
            <a 
              href={ad.ctaUrl}
              className="wpn-ad-slot__cta"
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={onClick}
            >
              {ad.cta}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}