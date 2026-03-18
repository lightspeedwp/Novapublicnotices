import {
  FileText,
  Clock,
  CheckCircle,
  TrendUp,
  MapPin,
  Eye,
  Users,
  Calendar,
} from '@phosphor-icons/react';
import './StatsBlock.css';

export interface StatItem {
  label: string;
  value: string | number;
  icon?: string;
}

interface StatsBlockProps {
  stats: StatItem[];
  title?: string;
  variant?: 'default' | 'dark';
  showIcons?: boolean;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  'file-text': FileText,
  'clock': Clock,
  'check-circle': CheckCircle,
  'trend-up': TrendUp,
  'map-pin': MapPin,
  'eye': Eye,
  'users': Users,
  'calendar': Calendar,
};

export default function StatsBlock({
  stats,
  title,
  variant = 'default',
  showIcons = false,
}: StatsBlockProps) {
  const variantClass = variant === 'dark' ? 'wpn-stats--dark' : '';
  const gridClass =
    stats.length <= 3 ? 'wpn-stats__grid--compact' : '';

  return (
    <div className={`wpn-stats ${variantClass}`}>
      {title && <h3 className="wpn-stats__title">{title}</h3>}
      
      <div className={`wpn-stats__grid ${gridClass}`}>
        {stats.map((stat, index) => {
          const Icon = stat.icon ? iconMap[stat.icon] : null;
          const itemClass = showIcons && Icon ? 'wpn-stats__item--with-icon' : '';

          return (
            <div key={index} className={`wpn-stats__item ${itemClass}`}>
              {showIcons && Icon && (
                <div className="wpn-stats__item-icon-wrapper">
                  <Icon className="wpn-stats__item-icon" weight="bold" />
                </div>
              )}
              
              <div className="wpn-stats__item-content">
                <div className="wpn-stats__item-value">{stat.value}</div>
                <div className="wpn-stats__item-label">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
