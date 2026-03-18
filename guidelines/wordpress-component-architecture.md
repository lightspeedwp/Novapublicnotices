# WordPress Component Architecture — Nova Public Notices Portal

**Category:** Architecture  
**Version:** 1.0.0  
**Date:** 2026-03-18  
**Status:** Active  
**Parent:** Guidelines.md

---

## Purpose

This guideline defines how to structure React components in the Nova Public Notices Portal to align with WordPress block theme architecture, making future WordPress implementation seamless.

**Core Principle:** Build the prototype like a WordPress block theme, with clear separation between blocks, patterns, parts, templates, and pages.

---

## WordPress Block Theme Architecture Overview

WordPress block themes organize components in a hierarchical structure:

```
Template → Template Parts → Patterns → Blocks
```

1. **Blocks** — Smallest reusable components (Button, Card, Badge)
2. **Patterns** — Composed groups of blocks (Hero patterns, Feature sections, CTA blocks)
3. **Template Parts** — Sitewide shared sections (Header, Footer, Breadcrumbs, Sidebar)
4. **Templates** — Full page layouts (Homepage, Archive, Single, Page)
5. **Pages** — Specific page implementations using templates

---

## Component Folder Structure

### Required Component Directories

```
/src/app/components/
  blocks/           ← Atomic UI components (Button, Card, Badge, Input)
  patterns/         ← Composed component groups (Hero patterns, Feature blocks, CTA sections)
  parts/            ← Sitewide template parts (Header, Footer, Breadcrumbs, Sidebar)
  templates/        ← Page layout templates (PageTemplate, ArchiveTemplate, SingleTemplate)
  pages/            ← Page-specific components (if needed)
  ui/               ← shadcn/ui components (existing, keep as-is)
```

### Required Style Directories

```
/src/styles/
  blocks/           ← Block-specific styles (button.css, card.css, badge.css)
  patterns/         ← Pattern-specific styles (hero-patterns.css, feature-blocks.css)
  parts/            ← Template part styles (header.css, footer.css, sidebar.css)
  templates/        ← Template styles (page-template.css, archive-template.css)
  pages/            ← Page-specific styles (home.css, contact.css)
  global.css        ← Global styles and design tokens
  theme.css         ← WordPress-aligned theme styles
```

---

## Component Categories

### 1. Blocks (`/components/blocks/`)

**Definition:** Smallest reusable UI components, equivalent to WordPress core blocks.

**Characteristics:**
- Single responsibility
- No layout logic
- Accept props only
- Stateless when possible
- Use BEM class names
- Use CSS variables from design system

**Examples:**

```tsx
// /components/blocks/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', size = 'md', href, onClick }: ButtonProps) {
  const classes = `wpn-button wpn-button--${variant} wpn-button--${size}`;
  
  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
```

```tsx
// /components/blocks/Card.tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ children, variant = 'default', padding = 'md' }: CardProps) {
  return (
    <div className={`wpn-card wpn-card--${variant} wpn-card--padding-${padding}`}>
      {children}
    </div>
  );
}
```

**Block Component List (Examples):**
- `Button.tsx` — Button with variants
- `Badge.tsx` — Category/status badges
- `Icon.tsx` — Icon wrapper for Phosphor Icons
- `Input.tsx` — Form input field
- `Textarea.tsx` — Form textarea
- `Select.tsx` — Form select dropdown
- `Checkbox.tsx` — Form checkbox
- `Radio.tsx` — Form radio button
- `Avatar.tsx` — User avatar
- `Spinner.tsx` — Loading spinner
- `Divider.tsx` — Section divider
- `Tag.tsx` — Tag/chip component
- `Alert.tsx` — Alert/notification message
- `Tooltip.tsx` — Tooltip component

**Styles:** `/src/styles/blocks/button.css`, `/src/styles/blocks/card.css`, etc.

---

### 2. Patterns (`/components/patterns/`)

**Definition:** Composed groups of blocks that form reusable content sections, equivalent to WordPress block patterns.

**Characteristics:**
- Combine multiple blocks
- Have specific purpose/layout
- Accept data props
- Can have variants
- More complex than blocks, simpler than template parts
- Use BEM class names
- Use CSS variables from design system

**Pattern Organization:**

```
/components/patterns/
  heroes/           ← Hero pattern variants
    HeroHome.tsx
    HeroPageHeader.tsx
    HeroMinimal.tsx
    HeroSearch.tsx
    index.ts
  cards/            ← Card pattern variants
    FeatureCard.tsx
    BlogCard.tsx
    NoticeCard.tsx
    PricingCard.tsx
    TestimonialCard.tsx
    index.ts
  cta/              ← Call-to-action patterns
    CTABanner.tsx
    CTAInline.tsx
    CTAModal.tsx
    index.ts
  features/         ← Feature section patterns
    FeaturesGrid.tsx
    FeaturesAlternating.tsx
    FeaturesTimeline.tsx
    index.ts
```

**Example Pattern:**

```tsx
// /components/patterns/cards/FeatureCard.tsx
import { Icon } from '../../blocks/Icon';
import { Button } from '../../blocks/Button';
import './FeatureCard.css';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

export function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <article className="wpn-feature-card">
      <Icon name={icon} className="wpn-feature-card__icon" size="lg" />
      <h3 className="wpn-feature-card__title">{title}</h3>
      <p className="wpn-feature-card__description">{description}</p>
      {link && (
        <Button variant="text" href={link.href}>
          {link.text}
        </Button>
      )}
    </article>
  );
}
```

```tsx
// /components/patterns/heroes/HeroPageHeader.tsx
import { Breadcrumbs } from '../../blocks/Breadcrumbs';
import './HeroPageHeader.css';

interface HeroPageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function HeroPageHeader({ title, subtitle, breadcrumbs }: HeroPageHeaderProps) {
  return (
    <section className="wpn-hero wpn-hero--page-header">
      <div className="wpn-hero__container">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="wpn-hero__title">{title}</h1>
        {subtitle && <p className="wpn-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
```

**Pattern Component List (Examples):**
- **Heroes:** HeroHome, HeroPageHeader, HeroMinimal, HeroSearch, HeroLegal
- **Cards:** FeatureCard, BlogCard, NoticeCard, PricingCard, TestimonialCard
- **CTA:** CTABanner, CTAInline, CTASection, CTAModal
- **Features:** FeaturesGrid, FeaturesAlternating, FeaturesTimeline
- **Content:** ContentGrid, ContentList, ContentAlternating
- **Forms:** ContactForm, SearchForm, SubmitNoticeForm
- **Navigation:** MegaMenu, TabNavigation, StepIndicator
- **Media:** ImageGallery, VideoEmbed, AudioPlayer
- **Social:** SocialLinks, ShareButtons, SocialProof
- **Stats:** StatsCounter, StatsGrid, StatsBar
- **Testimonials:** TestimonialGrid, TestimonialSlider, TestimonialCard

**Styles:** `/src/styles/patterns/heroes/`, `/src/styles/patterns/cards/`, etc.

---

### 3. Template Parts (`/components/parts/`)

**Definition:** Sitewide shared sections that appear across multiple pages/templates, equivalent to WordPress template parts.

**Characteristics:**
- Appear on multiple pages/templates
- Can have variants for different contexts
- May be stateful (e.g., mobile menu toggle)
- Use global state/context when needed
- Pull data from global data files
- Use BEM class names
- Use CSS variables from design system

**Template Parts List:**

**Global Template Parts:**
- `Header.tsx` — Sitewide header
- `Footer.tsx` — Sitewide footer
- `Breadcrumbs.tsx` — Breadcrumb navigation
- `MobileMenu.tsx` — Mobile navigation menu
- `Sidebar.tsx` — Sidebar (with variants: navigation, filters, content)

**Content Template Parts:**
- `Hero.tsx` — Hero section (loads different patterns)
- `PostMeta.tsx` — Post/notice metadata display
- `SocialSharing.tsx` — Social share buttons
- `AdSlot.tsx` — Advertisement placeholder
- `AnnouncementBanner.tsx` — Site-wide announcements

**Example Template Part:**

```tsx
// /components/parts/Header.tsx
import { Logo } from '../blocks/Logo';
import { Button } from '../blocks/Button';
import { MobileMenuToggle } from '../blocks/MobileMenuToggle';
import { navigation } from '../../data/navigation';
import './Header.css';

interface HeaderProps {
  lang: 'en' | 'af';
  variant?: 'default' | 'minimal' | 'transparent';
}

export function Header({ lang, variant = 'default' }: HeaderProps) {
  const navData = navigation[lang];
  
  return (
    <header className={`wpn-header wpn-header--${variant}`}>
      <div className="wpn-header__container">
        <Logo />
        
        <nav className="wpn-header__nav" aria-label="Primary navigation">
          {navData.primary.map((item) => (
            <Link key={item.href} to={item.href} className="wpn-header__nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="wpn-header__actions">
          <Button variant="outline" href="/login">{navData.actions.login}</Button>
          <Button variant="primary" href="/submit-notice">{navData.actions.submit}</Button>
        </div>
        
        <MobileMenuToggle />
      </div>
    </header>
  );
}
```

```tsx
// /components/parts/Hero.tsx
// This is a template part that loads different hero patterns

import { HeroHome } from '../patterns/heroes/HeroHome';
import { HeroPageHeader } from '../patterns/heroes/HeroPageHeader';
import { HeroSearch } from '../patterns/heroes/HeroSearch';
import { HeroMinimal } from '../patterns/heroes/HeroMinimal';

interface HeroProps {
  pattern: 'home' | 'page-header' | 'search' | 'minimal';
  data: any; // Type based on pattern
  lang?: 'en' | 'af';
}

export function Hero({ pattern, data, lang = 'en' }: HeroProps) {
  switch (pattern) {
    case 'home':
      return <HeroHome {...data} lang={lang} />;
    case 'search':
      return <HeroSearch {...data} lang={lang} />;
    case 'minimal':
      return <HeroMinimal {...data} lang={lang} />;
    default:
      return <HeroPageHeader {...data} lang={lang} />;
  }
}
```

**Key Difference: Template Parts vs Patterns**

| Template Parts | Patterns |
|----------------|----------|
| Appear sitewide (Header, Footer) | Used within specific pages/contexts |
| May have global state | Usually stateless |
| One active variant per page | Multiple patterns can be on same page |
| Examples: Header, Footer, Sidebar | Examples: FeatureCard, CTABanner |

**Styles:** `/src/styles/parts/header.css`, `/src/styles/parts/footer.css`, etc.

---

### 4. Templates (`/components/templates/`)

**Definition:** Full page layout templates that define the structure and composition of different page types, equivalent to WordPress template files.

**Characteristics:**
- Define page structure
- Compose template parts and patterns
- Handle layout logic
- Accept page-specific data
- Provide slots for content
- Use BEM class names for template-specific elements

**Template List:**

```
/components/templates/
  PageTemplate.tsx         — Standard page layout (most pages)
  HomeTemplate.tsx         — Homepage layout
  ArchiveTemplate.tsx      — Category/search archive layout
  SingleTemplate.tsx       — Single notice/post layout
  AuthTemplate.tsx         — Authentication pages layout
  CheckoutTemplate.tsx     — Checkout flow layout
  AccountTemplate.tsx      — Account dashboard layout
  ErrorTemplate.tsx        — 404/error pages layout
```

**Example Template:**

```tsx
// /components/templates/PageTemplate.tsx
import { Header } from '../parts/Header';
import { Hero } from '../parts/Hero';
import { Footer } from '../parts/Footer';
import { AdSlot } from '../parts/AdSlot';
import './PageTemplate.css';

interface PageTemplateProps {
  lang: 'en' | 'af';
  heroData?: any;
  heroPattern?: 'page-header' | 'minimal';
  showAds?: boolean;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export function PageTemplate({
  lang,
  heroData,
  heroPattern = 'page-header',
  showAds = true,
  sidebar,
  children
}: PageTemplateProps) {
  return (
    <div className="wpn-page-template">
      <Header lang={lang} />
      
      {heroData && <Hero pattern={heroPattern} data={heroData} lang={lang} />}
      
      <div className="wpn-page-template__container">
        <main className="wpn-page-template__main">
          {showAds && <AdSlot position="top" />}
          {children}
          {showAds && <AdSlot position="bottom" />}
        </main>
        
        {sidebar && (
          <aside className="wpn-page-template__sidebar">
            {sidebar}
          </aside>
        )}
      </div>
      
      <Footer lang={lang} />
    </div>
  );
}
```

```tsx
// /components/templates/ArchiveTemplate.tsx
import { Header } from '../parts/Header';
import { Hero } from '../parts/Hero';
import { Footer } from '../parts/Footer';
import { Sidebar } from '../parts/Sidebar';
import { Pagination } from '../blocks/Pagination';
import './ArchiveTemplate.css';

interface ArchiveTemplateProps<T> {
  lang: 'en' | 'af';
  heroData: any;
  items: T[];
  ItemComponent: React.ComponentType<{ item: T; lang?: 'en' | 'af' }>;
  filters?: React.ReactNode;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

export function ArchiveTemplate<T>({
  lang,
  heroData,
  items,
  ItemComponent,
  filters,
  pagination
}: ArchiveTemplateProps<T>) {
  return (
    <div className="wpn-archive-template">
      <Header lang={lang} />
      
      <Hero pattern="page-header" data={heroData} lang={lang} />
      
      <div className="wpn-archive-template__container">
        {filters && (
          <Sidebar variant="filters">
            {filters}
          </Sidebar>
        )}
        
        <main className="wpn-archive-template__main">
          <div className="wpn-archive-template__grid">
            {items.map((item, index) => (
              <ItemComponent key={index} item={item} lang={lang} />
            ))}
          </div>
          
          {pagination && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={pagination.onPageChange}
            />
          )}
        </main>
      </div>
      
      <Footer lang={lang} />
    </div>
  );
}
```

**Template Usage Example:**

```tsx
// /pages/About.tsx
import { PageTemplate } from '../components/templates/PageTemplate';
import { aboutData } from '../data/about/about.en';

export function About() {
  return (
    <PageTemplate
      lang="en"
      heroData={aboutData.hero}
      showAds={true}
    >
      <section className="wpn-about-content">
        <h2>{aboutData.sections.mission.title}</h2>
        <p>{aboutData.sections.mission.description}</p>
      </section>
    </PageTemplate>
  );
}
```

**Styles:** `/src/styles/templates/page-template.css`, etc.

---

### 5. Pages (`/components/pages/`)

**Definition:** Page-specific components that are too complex or unique to fit in other categories.

**Usage:** ONLY use for page-specific components that don't fit elsewhere.

**Characteristics:**
- Page-specific logic
- Not reusable across pages
- Complex page-only interactions
- One-off implementations

**Example:**

```tsx
// /components/pages/SubmitNoticeWizard.tsx
// Complex multi-step wizard specific to submit notice page
```

**Note:** Most pages should NOT need components in `/components/pages/`. Instead, use templates + patterns + blocks.

---

## Pattern: Header Template Part with Variants

One of the most important concepts in WordPress block themes is **template part variants**.

### Header Variants Example

```tsx
// /components/parts/Header.tsx
import { navigation } from '../../data/navigation';
import { HeaderDefault } from './headers/HeaderDefault';
import { HeaderMinimal } from './headers/HeaderMinimal';
import { HeaderCheckout } from './headers/HeaderCheckout';

interface HeaderProps {
  lang: 'en' | 'af';
  variant?: 'default' | 'minimal' | 'checkout';
}

export function Header({ lang, variant = 'default' }: HeaderProps) {
  const navData = navigation[lang];
  
  switch (variant) {
    case 'minimal':
      return <HeaderMinimal navData={navData} lang={lang} />;
    case 'checkout':
      return <HeaderCheckout navData={navData} lang={lang} />;
    default:
      return <HeaderDefault navData={navData} lang={lang} />;
  }
}
```

**Usage:**

```tsx
// Standard pages
<Header lang="en" variant="default" />

// Checkout page (distraction-free)
<Header lang="en" variant="checkout" />

// Auth pages (minimal)
<Header lang="en" variant="minimal" />
```

This mirrors how WordPress allows you to import different header patterns into the global header template part.

---

## Styling Architecture

### Style File Organization

```
/src/styles/
  blocks/
    button.css           ← Button block styles
    card.css             ← Card block styles
    badge.css            ← Badge block styles
    input.css            ← Input block styles
    ...
  patterns/
    heroes/
      hero-home.css      ← Homepage hero pattern
      hero-page-header.css
      hero-minimal.css
    cards/
      feature-card.css
      blog-card.css
      notice-card.css
    ...
  parts/
    header.css           ← Header template part
    footer.css           ← Footer template part
    sidebar.css          ← Sidebar template part
    ...
  templates/
    page-template.css    ← Page template layout
    archive-template.css ← Archive template layout
    ...
  pages/
    home.css             ← Page-specific styles (if needed)
    contact.css
    ...
  global.css             ← Global styles, resets, utilities
  theme.css              ← Theme variables and WordPress-aligned classes
```

### CSS Import Strategy

**Option 1: Component-Level Imports (Recommended)**

```tsx
// Component imports its own CSS
import './Button.css';

export function Button(props) {
  // ...
}
```

**Option 2: Centralized Imports**

```css
/* /src/styles/blocks.css */
@import './blocks/button.css';
@import './blocks/card.css';
@import './blocks/badge.css';
/* ... */
```

```tsx
// In main App.tsx or index.tsx
import '../styles/blocks.css';
import '../styles/patterns.css';
import '../styles/parts.css';
```

**Best Practice:** Use Option 1 for better code splitting and maintainability.

### CSS Naming Conventions

**Use BEM (Block Element Modifier):**

```css
/* Block */
.wpn-button { }

/* Elements */
.wpn-button__icon { }
.wpn-button__text { }

/* Modifiers */
.wpn-button--primary { }
.wpn-button--secondary { }
.wpn-button--sm { }
.wpn-button--lg { }
```

**Namespace All Classes with `wpn-`:**
- Prevents conflicts
- Aligns with WordPress practice (wp- prefix)
- Makes project classes identifiable

---

## Data Architecture

### Data Files Organization

```
/src/app/data/
  blocks/              ← Block configuration data (if needed)
  patterns/            ← Pattern content data
    heroes/
      heroes.en.ts
      heroes.af.ts
    features/
      features.en.ts
      features.af.ts
  parts/               ← Template part data
    navigation.en.ts
    navigation.af.ts
    footer.en.ts
    footer.af.ts
  pages/               ← Page-specific data
    home/
      home.en.ts
      home.af.ts
    contact/
      contact.en.ts
      contact.af.ts
```

### Data File Example

```typescript
// /src/app/data/patterns/heroes/heroes.en.ts

export const heroesEN = {
  home: {
    pattern: 'home',
    title: 'South Africa\'s trusted public notices portal',
    subtitle: 'Legal notices, tenders, and official announcements',
    buttons: [
      { text: 'Search notices', href: '/search', variant: 'primary' },
      { text: 'Submit notice', href: '/submit', variant: 'secondary' },
    ],
  },
  
  about: {
    pattern: 'page-header',
    title: 'About us',
    subtitle: 'Your trusted partner for public notice publication',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About' },
    ],
  },
};
```

---

## Implementation Workflow

### Creating a New Feature Block

1. **Create component file:**
   ```
   /src/app/components/blocks/NewBlock.tsx
   ```

2. **Create style file:**
   ```
   /src/styles/blocks/new-block.css
   ```

3. **Implement component:**
   ```tsx
   import './NewBlock.css';
   
   interface NewBlockProps {
     // Props
   }
   
   export function NewBlock(props: NewBlockProps) {
     return (
       <div className="wpn-new-block">
         {/* Implementation */}
       </div>
     );
   }
   ```

4. **Export from index:**
   ```tsx
   // /src/app/components/blocks/index.ts
   export { NewBlock } from './NewBlock';
   ```

### Creating a New Pattern

1. **Create pattern file:**
   ```
   /src/app/components/patterns/category/NewPattern.tsx
   ```

2. **Create pattern style:**
   ```
   /src/styles/patterns/category/new-pattern.css
   ```

3. **Create pattern data:**
   ```
   /src/app/data/patterns/category/new-pattern.en.ts
   /src/app/data/patterns/category/new-pattern.af.ts
   ```

4. **Implement pattern using blocks:**
   ```tsx
   import { Button } from '../../blocks/Button';
   import { Card } from '../../blocks/Card';
   import './NewPattern.css';
   
   interface NewPatternProps {
     data: NewPatternData;
     lang?: 'en' | 'af';
   }
   
   export function NewPattern({ data, lang = 'en' }: NewPatternProps) {
     return (
       <section className="wpn-new-pattern">
         <Card>
           <h2>{data.title}</h2>
           <Button variant="primary" href={data.button.href}>
             {data.button.text}
           </Button>
         </Card>
       </section>
     );
   }
   ```

### Creating a New Template Part

1. **Create part file:**
   ```
   /src/app/components/parts/NewPart.tsx
   ```

2. **Create part style:**
   ```
   /src/styles/parts/new-part.css
   ```

3. **Create part data (if needed):**
   ```
   /src/app/data/parts/new-part.en.ts
   /src/app/data/parts/new-part.af.ts
   ```

4. **Implement part using patterns/blocks:**
   ```tsx
   import { Logo } from '../blocks/Logo';
   import { SomePattern } from '../patterns/category/SomePattern';
   import './NewPart.css';
   
   interface NewPartProps {
     variant?: 'default' | 'alternative';
     lang?: 'en' | 'af';
   }
   
   export function NewPart({ variant = 'default', lang = 'en' }: NewPartProps) {
     return (
       <div className={`wpn-new-part wpn-new-part--${variant}`}>
         {/* Implementation using blocks and patterns */}
       </div>
     );
   }
   ```

---

## WordPress Implementation Notes

### When Moving to WordPress

This component structure makes WordPress implementation straightforward:

**Blocks → WordPress Blocks**
```php
// register_block_type() for each block
register_block_type('nova/button', [...]);
```

**Patterns → WordPress Block Patterns**
```php
// register_block_pattern() for each pattern
register_block_pattern('nova/hero-home', [...]);
```

**Template Parts → WordPress Template Parts**
```html
<!-- wp:template-part {"slug":"header","variant":"default"} /-->
```

**Templates → WordPress Block Templates**
```php
// Template files in /templates/
page.html
single.html
archive.html
```

### Recommended WordPress Plugins

- **Block Pattern Manager** — Manage and register block patterns
- **Template Parts Extended** — Extended template part features
- **Custom Block Styles** — Register custom block styles

---

## Best Practices

### DO ✅

- Use BEM naming for all CSS classes
- Namespace all classes with `wpn-`
- Use CSS variables from design system
- Keep blocks simple and atomic
- Compose patterns from blocks
- Keep template parts focused
- Use TypeScript interfaces for all data
- Create bilingual data file pairs
- Document component props
- Export components from index files

### DON'T ❌

- Don't use inline styles (except truly dynamic values)
- Don't hardcode content in components
- Don't mix concerns (keep blocks simple)
- Don't create page-specific components unless absolutely necessary
- Don't use Tailwind classes for visual styling (use semantic BEM classes)
- Don't bypass the component hierarchy
- Don't duplicate styles across files
- Don't create components without corresponding data files

---

## Migration from Current Structure

### Current Structure Issues

```
/src/app/components/
  Hero.tsx              ← Template part, but not in parts/
  NoticeCard.tsx        ← Pattern, but not in patterns/
  CategoryCard.tsx      ← Pattern, but not in patterns/
  StatsBlock.tsx        ← Pattern, but not in patterns/
  Layout.tsx            ← Template, but not in templates/
  ui/                   ← Shadcn components (keep as-is)
```

### Recommended Migration

```
/src/app/components/
  blocks/               ← Create new
    Button.tsx          ← Extracted from various places
    Card.tsx            ← Extracted from ui/card
    Badge.tsx           ← Extracted
    Icon.tsx            ← Wrapper for Phosphor Icons
    
  patterns/             ← Create new
    heroes/
      HeroHome.tsx      ← Split from Hero.tsx
      HeroPageHeader.tsx
      HeroMinimal.tsx
    cards/
      NoticeCard.tsx    ← Move from root
      CategoryCard.tsx  ← Move from root
      FeatureCard.tsx   ← Create new
    stats/
      StatsBlock.tsx    ← Move from root
      
  parts/                ← Create new
    Header.tsx          ← Extract from Layout.tsx
    Footer.tsx          ← Extract from Layout.tsx
    Hero.tsx            ← Refactor existing, loads hero patterns
    Breadcrumbs.tsx     ← Extract
    Sidebar.tsx         ← Extract
    
  templates/            ← Create new
    PageTemplate.tsx    ← Refactor from Layout.tsx
    ArchiveTemplate.tsx ← Create new
    SingleTemplate.tsx  ← Create new
    
  pages/                ← Use sparingly
  ui/                   ← Keep shadcn/ui components as-is
```

---

## Success Criteria

✅ **Component Structure:**
- All blocks in `/components/blocks/`
- All patterns in `/components/patterns/`
- All template parts in `/components/parts/`
- All templates in `/components/templates/`

✅ **Style Structure:**
- All block styles in `/styles/blocks/`
- All pattern styles in `/styles/patterns/`
- All part styles in `/styles/parts/`
- All template styles in `/styles/templates/`

✅ **Data Structure:**
- All block data in `/data/blocks/` (if needed)
- All pattern data in `/data/patterns/`
- All part data in `/data/parts/`
- All page data in `/data/pages/`

✅ **Implementation:**
- All components use BEM class names
- All components use CSS variables
- No hardcoded content
- Bilingual data pairs exist
- Components are composable
- Clear hierarchy: Templates → Parts → Patterns → Blocks

---

## Related Documentation

- **[Guidelines.md](./Guidelines.md)** — Parent guidelines
- **[css-architecture.md](./design-tokens/css-architecture.md)** — BEM methodology
- **[locale-architecture.md](./locale-architecture.md)** — Bilingual architecture
- **[data-model.md](./data-model.md)** — Data structure standards

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial WordPress component architecture guideline |
