/**
 * Nova Public Notices Portal - Ad Component
 * 
 * Dynamic ad display component for IAB-approved ad slots
 * Shows placeholder with brand name and slot dimensions
 */

import { AdSlot, getAdDimensions } from '../data/ads/ad-slots-data';

interface AdProps {
  slot: AdSlot;
  className?: string;
}

export function Ad({ slot, className = '' }: AdProps) {
  const dimensions = getAdDimensions(slot.size);
  
  return (
    <div 
      className={`wpn-ad ${className}`}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    >
      <div 
        className="wpn-ad__container"
        style={{
          backgroundColor: slot.backgroundColor,
        }}
      >
        {/* Ad Overlay Info */}
        <div className="wpn-ad__overlay">
          <div className="wpn-ad__info">
            <div className="wpn-ad__brand">
              {slot.brandName}
            </div>
            <div className="wpn-ad__size">
              {slot.size.width} × {slot.size.height}
            </div>
            <div className="wpn-ad__label">
              {slot.size.label}
            </div>
            <div className="wpn-ad__slot-name">
              {slot.name}
            </div>
          </div>
        </div>
        
        {/* Brand Logo Placeholder */}
        <div className="wpn-ad__logo">
          <div className="wpn-ad__logo-text">
            {slot.brandName.charAt(0)}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Responsive Ad Component
 * Automatically switches between desktop and mobile ad based on screen size
 */
interface ResponsiveAdProps {
  desktopSlot: AdSlot;
  mobileSlot: AdSlot;
  className?: string;
}

export function ResponsiveAd({ desktopSlot, mobileSlot, className = '' }: ResponsiveAdProps) {
  return (
    <>
      {/* Desktop Ad */}
      <div className={`hidden lg:block ${className}`}>
        <Ad slot={desktopSlot} />
      </div>
      
      {/* Mobile Ad */}
      <div className={`block lg:hidden ${className}`}>
        <Ad slot={mobileSlot} />
      </div>
    </>
  );
}

/**
 * Ad Placeholder for Empty Slots
 */
interface AdPlaceholderProps {
  width: number;
  height: number;
  label: string;
  className?: string;
}

export function AdPlaceholder({ width, height, label, className = '' }: AdPlaceholderProps) {
  return (
    <div 
      className={`wpn-ad wpn-ad--placeholder ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="wpn-ad__container wpn-ad__container--placeholder">
        <div className="wpn-ad__overlay">
          <div className="wpn-ad__info">
            <div className="wpn-ad__label">
              {label}
            </div>
            <div className="wpn-ad__size">
              {width} × {height}
            </div>
            <div className="wpn-ad__placeholder-text">
              Ad Space Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
