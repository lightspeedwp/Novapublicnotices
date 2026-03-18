/**
 * Nova Public Notices Portal - Category Card Component
 * 
 * Dynamic category card with icon, count, and hover animation
 * Data-driven from categories-data.ts
 */

import { Link } from 'react-router';
import { CategoryWithCount } from '../data/categories/categories-data';
import {
  Scroll, Wine, Briefcase, MapTrifold, Storefront, Gavel, FileX, Leaf,
  Hammer, Heart, Bell, Buildings, ShieldCheck, Warning, UsersThree,
  TrendDown, Vault, ArrowsClockwise, Handshake, HandPalm, Megaphone
} from '@phosphor-icons/react';

// Icon map for dynamic icon rendering - using Phosphor icons
const iconMap: Record<string, React.ComponentType<{ className?: string; weight?: "regular" | "thin" | "light" | "bold" | "fill" | "duotone" }>> = {
  Scroll, Wine, Briefcase, MapTrifold, Storefront, Gavel, FileX, Leaf,
  Hammer, Heart, Bell, Buildings, ShieldCheck, Warning, UsersThree,
  TrendDown, Vault, ArrowsClockwise, Handshake, HandPalm, Megaphone
};

interface CategoryCardProps {
  category: CategoryWithCount;
  language?: 'en' | 'af';
  variant?: 'default' | 'compact' | 'featured';
}

export function CategoryCard({ 
  category, 
  language = 'en',
  variant = 'default'
}: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Bell;
  const baseUrl = language === 'af' ? '/af' : '';
  const categoryPath = language === 'af' ? 'kategorie' : 'category';
  
  return (
    <Link
      to={`${baseUrl}/${categoryPath}/${category.slug}`}
      className={`wpn-category-card wpn-category-card--${category.slug}`}
    >
      <div className="wpn-category-card__container">
        {/* Icon Badge */}
        <div className="wpn-category-card__icon-wrapper">
          <div className="wpn-category-card__icon-badge">
            <Icon 
              className="wpn-category-card__icon"
              weight="regular"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="wpn-category-card__content">
          <h3 className="wpn-category-card__title">
            {category.name[language]}
          </h3>
          <p className="wpn-category-card__description">
            {category.description[language]}
          </p>
        </div>
        
        {/* Count Badge */}
        <div className="wpn-category-card__footer">
          <div className="wpn-category-card__count">
            {(category.count || 0).toLocaleString()}
            <span className="wpn-category-card__count-label">
              {(category.count || 0) === 1 
                ? (language === 'en' ? 'notice' : 'kennisgewing')
                : (language === 'en' ? 'notices' : 'kennisgewings')
              }
            </span>
          </div>
        </div>
        
        {/* Hover Arrow */}
        <div className="wpn-category-card__arrow">
          <svg 
            className="wpn-category-card__arrow-icon" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

/**
 * Category Card Grid Component
 */
interface CategoryGridProps {
  categories: CategoryWithCount[];
  language?: 'en' | 'af';
  columns?: 2 | 3 | 4;
}

export function CategoryGrid({ 
  categories, 
  language = 'en',
  columns = 3
}: CategoryGridProps) {
  return (
    <div 
      className="wpn-category-grid"
      style={{
        '--grid-columns': columns,
      } as React.CSSProperties}
    >
      {categories.map((category) => (
        <CategoryCard 
          key={category.id} 
          category={category} 
          language={language}
        />
      ))}
    </div>
  );
}