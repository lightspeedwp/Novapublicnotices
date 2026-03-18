import { Link } from 'react-router';
import { 
  ArrowRight, 
  MagnifyingGlass, 
  FileText, 
  UploadSimple, 
  Phone,
  CaretRight,
  Newspaper,
  Folders,
  Info,
  Envelope,
  Handshake,
  CurrencyCircleDollar,
  Megaphone,
  Question,
  Lifebuoy,
  ShieldCheck,
  FileDoc,
  TreeStructure,
  ArrowsLeftRight,
  SignIn,
  UserPlus,
  UserCircle,
  Files,
  ShoppingBag,
  UserGear,
  Upload,
  Notebook,
  Eye,
  CreditCard,
  CheckCircle,
  Palette,
  Warning,
} from '@phosphor-icons/react';
import type { HeroData, HeroBreadcrumb, HeroButton } from '../data/heroes/types';
import SearchFilterBar from './SearchFilterBar';
import './Hero.css';

// Support both data object and direct props
interface HeroPropsWithData {
  data: HeroData;
  lang?: 'en' | 'af';
}

interface HeroPropsDirectProps {
  lang?: 'en' | 'af';
  title: string;
  icon?: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: HeroBreadcrumb[];
  buttons?: HeroButton[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'left' | 'center';
  showSearchBar?: boolean;
}

type HeroProps = HeroPropsWithData | HeroPropsDirectProps;

const iconMap: { [key: string]: any } = {
  // Button icons
  'arrow-right': ArrowRight,
  'magnifying-glass': MagnifyingGlass,
  'file-text': FileText,
  'upload': UploadSimple,
  'phone': Phone,
  // Hero icons
  'newspaper': Newspaper,
  'folders': Folders,
  'info': Info,
  'envelope': Envelope,
  'handshake': Handshake,
  'currency-circle-dollar': CurrencyCircleDollar,
  'megaphone': Megaphone,
  'question': Question,
  'lifebuoy': Lifebuoy,
  'shield-check': ShieldCheck,
  'file-doc': FileDoc,
  'tree-structure': TreeStructure,
  'arrows-left-right': ArrowsLeftRight,
  'sign-in': SignIn,
  'user-plus': UserPlus,
  'user-circle': UserCircle,
  'files': Files,
  'shopping-bag': ShoppingBag,
  'user-gear': UserGear,
  'notebook': Notebook,
  'eye': Eye,
  'credit-card': CreditCard,
  'check-circle': CheckCircle,
  'palette': Palette,
  'warning': Warning,
};

function isDataProp(props: HeroProps): props is HeroPropsWithData {
  return 'data' in props && props.data !== undefined;
}

export default function Hero(props: HeroProps) {
  const { lang = 'en' } = props;
  
  // Extract data from either the data object or direct props
  let title: string;
  let icon: string | undefined;
  let subtitle: string | undefined;
  let description: string | undefined;
  let breadcrumbs: HeroBreadcrumb[] | undefined;
  let buttons: HeroButton[] | undefined;
  let size: 'sm' | 'md' | 'lg';
  let alignment: 'left' | 'center';
  let layout: 'default' | 'split' | 'centered' | 'minimal' | 'with-stats';
  let showSearch: boolean;
  let stats: any;

  if (isDataProp(props)) {
    // Using data prop
    const data = props.data;
    title = data.title;
    icon = data.icon;
    subtitle = data.subtitle;
    description = data.description;
    breadcrumbs = data.breadcrumbs;
    buttons = data.buttons;
    size = data.size || 'md';
    alignment = data.alignment || 'left';
    layout = data.layout || 'default';
    showSearch = data.showSearch || false;
    stats = data.stats;
  } else {
    // Using direct props
    title = props.title;
    icon = props.icon;
    subtitle = props.subtitle;
    description = props.description;
    breadcrumbs = props.breadcrumbs;
    buttons = props.buttons;
    size = props.size || 'md';
    alignment = props.variant || 'left';
    layout = 'default';
    showSearch = props.showSearchBar || false;
    stats = undefined;
  }

  const sizeClass = `wpn-hero--${size}`;
  const alignmentClass = `wpn-hero__content--${alignment}`;
  const layoutClass = `wpn-hero--${layout}`;
  
  // Get icon component
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <section className={`wpn-hero ${sizeClass} ${layoutClass}`}>
      <div className="wpn-hero__container">
        <div className={`wpn-hero__content ${alignmentClass}`}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="wpn-hero__breadcrumbs" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="wpn-hero__breadcrumb-item">
                  {crumb.href ? (
                    <Link to={crumb.href} className="wpn-hero__breadcrumb-link">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="wpn-hero__breadcrumb-current">
                      {crumb.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <CaretRight className="wpn-hero__breadcrumb-separator" weight="bold" />
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className="wpn-hero__subtitle">
              {subtitle}
            </p>
          )}

          {/* Icon */}
          {IconComponent && (
            <div className="wpn-hero__icon">
              <IconComponent weight="duotone" />
            </div>
          )}

          {/* Title */}
          <h1 className="wpn-hero__title">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="wpn-hero__description">
              {description}
            </p>
          )}

          {/* Buttons */}
          {buttons && buttons.length > 0 && (
            <div className="wpn-hero__buttons">
              {buttons.map((button, index) => {
                const Icon = button.icon ? iconMap[button.icon] : null;
                const variantClass = `wpn-hero__button--${button.variant}`;

                return (
                  <Link
                    key={index}
                    to={button.href}
                    className={`wpn-hero__button ${variantClass}`}
                  >
                    {Icon && <Icon className="wpn-hero__button-icon" weight="bold" />}
                    {button.text}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Search Bar */}
          {showSearch && (
            <div className="wpn-hero__search">
              <SearchFilterBar lang={lang} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}