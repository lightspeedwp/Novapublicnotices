/**
 * Category Card Grid Component
 * 
 * Responsive grid with automatic column scaling:
 * - Mobile (320px+): 2 columns
 * - Tablet (640px+): 3 columns
 * - Laptop (1024px+): 4 columns
 * - Desktop (1440px+): 5 columns
 * - Ultra-wide (2000px+): 6 columns
 * 
 * Supports two variants:
 * - large: Full cards with description (default)
 * - compact: Horizontal cards without description
 */

import { Link } from 'react-router';
import { 
  Scroll, Wine, Briefcase, MapTrifold, Storefront, Gavel, FileX, Leaf,
  Hammer, Heart, Bell, Buildings, ShieldCheck, Warning, UsersThree,
  TrendDown, Vault, ArrowsClockwise, Handshake, HandPalm, Megaphone
} from '@phosphor-icons/react';
import { CategoryWithCount } from '../data/categories/categories-data';
import '../../styles/category-card.css';

/* =================================================================
   Icon Mapping
   ================================================================= */

const iconMap: Record<string, React.ComponentType<any>> = {
  Scroll,
  Wine,
  Briefcase,
  MapTrifold,
  Storefront,
  Gavel,
  FileX,
  Leaf,
  Hammer,
  Heart,
  Bell,
  Buildings,
  ShieldCheck,
  Warning,
  UsersThree,
  TrendDown,
  Vault,
  ArrowsClockwise,
  Handshake,
  HandPalm,
  Megaphone,
};

/* =================================================================
   CategoryCard Component
   ================================================================= */

interface CategoryCardProps {
  category: CategoryWithCount;
  language?: 'en' | 'af';
  variant?: 'large' | 'compact';
}

function CategoryCard({ 
  category, 
  language = 'en',
  variant = 'large'
}: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Scroll;
  const basePath = language === 'af' ? '/af' : '';
  
  // Build CSS class names
  const cardClasses = [
    'wpn-category-card',
    `wpn-category-card--${category.slug}`,
    variant === 'compact' ? 'wpn-category-card--compact' : '',
  ].filter(Boolean).join(' ');
  
  return (
    <Link
      to={`${basePath}/category/${category.slug}`}
      className={cardClasses}
    >
      <div className="wpn-category-card__container">
        {/* Decorative gradient background */}
        <div className="wpn-category-card__gradient" />
        
        {/* Icon section with glow effect */}
        <div className="wpn-category-card__icon-section">
          <div className="wpn-category-card__icon-glow" />
          <div className="wpn-category-card__icon-badge">
            <Icon className="wpn-category-card__icon" weight="duotone" />
          </div>
        </div>
        
        {/* Content section */}
        <div className="wpn-category-card__content">
          <h3 className="wpn-category-card__title">
            {category.name[language]}
          </h3>
          
          {variant === 'large' && category.description && (
            <p className="wpn-category-card__description">
              {category.description[language]}
            </p>
          )}
        </div>
        
        {/* Footer with count and arrow */}
        <div className="wpn-category-card__footer">
          <div className="wpn-category-card__count-badge">
            <span className="wpn-category-card__count-number">{category.count}</span>
            <span className="wpn-category-card__count-label">
              {language === 'en' ? 'notices' : 'kennisgewings'}
            </span>
          </div>
          
          <div className="wpn-category-card__arrow">
            <svg className="wpn-category-card__arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        
        {/* Decorative corner accent */}
        <div className="wpn-category-card__corner-accent" />
      </div>
    </Link>
  );
}

/* =================================================================
   CategoryGrid Component
   ================================================================= */

interface CategoryGridProps {
  categories: CategoryWithCount[];
  language?: 'en' | 'af';
  variant?: 'large' | 'compact';
}

export function CategoryGrid({ 
  categories, 
  language = 'en',
  variant = 'large'
}: CategoryGridProps) {
  // Build grid class name
  const gridClassName = variant === 'compact' 
    ? 'wpn-category-grid wpn-category-grid--compact'
    : 'wpn-category-grid';
  
  return (
    <div className={gridClassName}>
      {categories.map((category) => (
        <CategoryCard 
          key={category.id} 
          category={category} 
          language={language}
          variant={variant}
        />
      ))}
    </div>
  );
}