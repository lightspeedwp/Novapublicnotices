# Nova Public Notices — Component Styling Guide

**100% BEM-Compliant CSS Architecture**  
**100% Design System Variables**  
**Zero Inline Styles | Zero Hardcoded Values**

---

## Overview

This document showcases all enhanced shared components in the Nova Public Notices Portal prototype. Every component follows strict BEM methodology and uses only CSS variables from the design system in `/src/styles/theme-variables.css`.

**Core Principles:**
- ✅ BEM class naming (Block__Element--Modifier)
- ✅ CSS variables only (no hardcoded colors, spacing, fonts)
- ✅ Sentence case for all text
- ✅ Phosphor icons exclusively
- ✅ Flexbox layouts (no CSS Grid)
- ✅ Gap-first spacing (no margins)
- ✅ Smooth animations with reduced-motion support
- ✅ Full accessibility (ARIA, keyboard nav, focus states)

---

## 1. Hero Component

**File:** `/src/app/components/Hero.tsx` + `/src/app/components/Hero.css`

**Features:**
- ✨ Navy background with gradient overlay
- ✨ White text with red accent highlights
- ✨ Staggered fade-in animations (0.1s-0.4s delays)
- ✨ Button shimmer effects on hover
- ✨ Breadcrumb navigation with underline animation
- ✨ Responsive typography (64px on all breakpoints)
- ✨ Text shadow for depth
- ✨ Three size variants (sm, md, lg)
- ✨ Four layout variants (default, split, centered, minimal)

**CSS Variables Used:**
```css
--nova-primary, --nova-accent, --nova-accent-hover
--font-family-heading, --font-family-body
--text-2xl through --text-6xl
--space-2 through --space-20
--radius-md, --border-width-2
--duration-fast, --duration-normal, --duration-slow, --duration-slower
--ease-out, --line-height-tight, --line-height-relaxed
--icon-size-xs, --icon-size-sm, --icon-size-md
--hover-translate-y-sm
```

**Animations:**
- `wpn-hero-fade-in` — Main content entrance
- `wpn-breadcrumb-fade-in` — Breadcrumb slide-in
- `wpn-subtitle-fade-in` — Subtitle delayed entrance
- `wpn-title-fade-in` — Title dramatic entrance
- `wpn-description-fade-in` — Description smooth entrance
- `wpn-buttons-fade-in` — CTA buttons final entrance
- `wpn-search-fade-in` — Search bar entrance
- Button shimmer effect on hover

**Example Usage:**
```tsx
<Hero
  size="lg"
  layout="centered"
  title="Find legal public notices"
  subtitle="Official notices"
  description="Search thousands of public notices..."
  buttons={[
    { text: "Search notices", href: "/search", variant: "primary" },
    { text: "Submit a notice", href: "/submit", variant: "secondary" }
  ]}
/>
```

---

## 2. NoticeCard Component

**File:** `/src/app/components/NoticeCard.tsx` + `/src/app/components/NoticeCard.css`

**Features:**
- ✨ Gradient border on hover using CSS masks
- ✨ Smooth elevation shadow transitions
- ✨ Line-clamped text (3-line excerpt)
- ✨ Category badge with color coding
- ✨ Status indicators (published, pending, archived)
- ✨ Meta information grid (date, location, reference)
- ✨ Hover lift effect
- ✨ Three variants (default, featured, compact)
- ✨ Loading skeleton state

**CSS Variables Used:**
```css
--card, --background, --foreground
--border-color-default, --border-color-strong
--text-sm, --text-base, --text-lg, --text-xl
--space-3 through --space-6
--radius-lg, --border-width-1
--duration-normal, --ease-out
--nova-accent, --muted, --muted-foreground
--line-height-tight, --line-height-relaxed
--font-weight-semibold, --font-weight-bold
--hover-translate-y-sm, --shadow-sm, --shadow-md
```

**Animations:**
- Gradient border animation on hover
- Elevation shadow transition
- Lift transform on hover
- Color transitions on all interactive elements

**Example Usage:**
```tsx
<NoticeCard
  variant="featured"
  notice={{
    slug: "tender-2024-001",
    title: "Municipal infrastructure tender",
    excerpt: "Notice for construction...",
    category: "tenders",
    location: "Gauteng",
    publishDate: "2024-03-15",
    status: "published",
    referenceNumber: "TEND-2024-001"
  }}
  lang="en"
/>
```

---

## 3. StatsBlock Component

**File:** `/src/app/components/StatsBlock.tsx` + `/src/app/components/StatsBlock.css`

**Features:**
- ✨ Glass morphism dark variant with blur effect
- ✨ Staggered fade-in animations (0.1s per stat)
- ✨ Icon scale pulse animations
- ✨ Glow effects in dark mode
- ✨ Responsive flexbox grid (1→2→4 columns)
- ✨ Icon support with Phosphor icons
- ✨ Smooth number counter effect (CSS only)
- ✨ Accent color highlights

**CSS Variables Used:**
```css
--nova-primary, --nova-accent
--space-4 through --space-8
--text-xs, --text-base, --text-3xl, --text-4xl
--radius-lg, --border-width-1
--font-weight-semibold, --font-weight-bold
--line-height-none, --line-height-snug
--duration-normal, --duration-slow, --ease-out
--icon-size-lg, --icon-size-xl
```

**Animations:**
- `wpn-stat-fade-in` — Staggered entrance (0.1s, 0.2s, 0.3s, 0.4s delays)
- `wpn-stat-icon-pulse` — Icon breathing effect
- Glow shadow pulse animation

**Example Usage:**
```tsx
<StatsBlock
  stats={[
    { value: "50,000+", label: "Public notices", icon: "FileText" },
    { value: "25", label: "Categories", icon: "Folders" },
    { value: "9", label: "Provinces", icon: "MapPin" },
    { value: "24/7", label: "Support", icon: "Headset" }
  ]}
  layout="horizontal"
  variant="dark"
/>
```

---

## 4. CategoryBadge Component

**File:** `/src/app/components/CategoryBadge.tsx` + `/src/app/components/CategoryBadge.css`

**Features:**
- ✨ 25 category-specific colors from design system
- ✨ Pill design with rounded corners
- ✨ Hover lift effect
- ✨ Three size variants (sm, md, lg)
- ✨ Four style variants (subtle, outlined, solid, interactive)
- ✨ Optional icon support
- ✨ Smooth color transitions

**CSS Variables Used:**
```css
--category-{name}-bg, --category-{name}-color
(e.g., --category-tenders-bg, --category-estates-color)
--text-xs, --text-sm, --text-base
--space-1 through --space-4
--radius-full, --border-width-1
--font-weight-medium, --font-weight-semibold
--duration-fast, --ease-out
--hover-translate-y-xs, --icon-size-xs, --icon-size-sm
```

**25 Supported Categories:**
Tenders, Estates, Liquor Licences, Town Planning, Business Licence, Court Orders, Environmental, General, Adoptions, Curatorship, Demolition, Divorce, Insolvent Estates, Lost Documents, Pension Funds, Re-registrations, Sale of Business, Sale in Execution, Surrender of Estate, Town Establishment, and more.

**Example Usage:**
```tsx
<CategoryBadge
  category="tenders"
  size="md"
  variant="solid"
  showIcon
  lang="en"
/>
```

---

## 5. AdSlot Component

**File:** `/src/app/components/AdSlot.tsx` + `/src/app/components/AdSlot.css`

**Features:**
- ✨ Dashed border for visual distinction
- ✨ Subtle pulse animation (shimmer effect)
- ✨ Professional typography
- ✨ Seven ad format variants (leaderboard, MPU, sidebar, billboard, mobile-banner, skyscraper, custom)
- ✨ Hover state with border color change
- ✨ Print-hidden for clean printouts
- ✨ Reserved space prevents layout shift

**CSS Variables Used:**
```css
--muted, --muted-foreground
--border-color-default, --border-color-strong
--text-xs, --text-sm, --text-base
--space-3, --space-4
--radius-md, --border-width-2
--font-weight-semibold, --font-weight-normal
--letter-spacing-wide
--duration-normal, --ease-out
```

**Animations:**
- `wpn-ad-pulse` — Shimmer sweep animation (3s infinite)
- Hover border color transition

**Example Usage:**
```tsx
<AdSlot
  slot="leaderboard"
  width={728}
  height={90}
  label="Advertisement"
  className="wpn-ad-slot--leaderboard"
/>
```

---

## 6. EmptyState Component

**File:** `/src/app/components/EmptyState.tsx` + `/src/styles/empty-state.css`

**Features:**
- ✨ Icon pulse animations with shadow rings
- ✨ Icon rotation animation
- ✨ Smooth fade-in transitions
- ✨ Color-coded states (search=blue, error=red, info=green)
- ✨ Glass card designs for suggestions
- ✨ Gradient backgrounds
- ✨ Professional suggestions with bullet points
- ✨ Search tips box with checkmarks
- ✨ Staggered animations (0.1s-0.6s)

**CSS Variables Used:**
```css
--muted, --muted-foreground, --foreground, --card
--border-color-default, --border-width-1, --border-width-2
--text-xs, --text-sm, --text-base, --text-lg, --text-2xl, --text-3xl
--space-1 through --space-20
--radius-lg, --radius-full
--font-weight-semibold, --font-weight-bold, --font-weight-normal
--line-height-tight, --line-height-relaxed
--duration-normal, --duration-slow, --ease-out
--icon-size-md, --icon-size-sm
--nova-accent
```

**Animations:**
- `wpn-empty-fade-in-up` — Container entrance
- `wpn-icon-pulse` — Icon breathing with shadow ring
- `wpn-icon-rotate` — Subtle icon rotation
- `wpn-title-fade-in` — Title entrance (0.1s delay)
- `wpn-subtitle-fade-in` — Subtitle entrance (0.2s delay)
- `wpn-query-info-fade-in` — Query info card entrance (0.3s delay)
- `wpn-suggestions-fade-in` — Suggestions slide-in (0.4s delay)
- `wpn-tips-fade-in` — Tips slide-in (0.5s delay)
- `wpn-actions-fade-in` — Action buttons entrance (0.6s delay)

**Four Empty State Types:**
1. `no-results` — When search returns no matches (blue icon)
2. `error` — When something goes wrong (red icon with pulse)
3. `no-data` — When category/page is empty (green icon)
4. `no-filters` — Initial state before search (neutral icon)

**Example Usage:**
```tsx
<EmptyState
  type="no-results"
  query="municipal tenders"
  filters={{
    category: "tenders",
    location: "gauteng",
    dateFrom: "2024-01-01"
  }}
  onClearFilters={() => clearFilters()}
  lang="en"
/>
```

---

## 7. SearchFilterBar Component

**File:** `/src/app/components/SearchFilterBar.tsx` + `/src/styles/search-filter.css`

**Features:**
- ✨ Main search with animated icon pulse
- ✨ Quick filter dropdowns (category, location, sort)
- ✨ Expandable advanced filters with slide-down animation
- ✨ Active filter pills with pop-in animations
- ✨ Results badge with pulsing glow
- ✨ Clear all filters button
- ✨ Responsive flexbox grid (1→2→3 columns)
- ✨ Smooth transitions on all interactions
- ✨ Loading state with sweep animation

**CSS Variables Used:**
```css
--card, --background, --foreground
--border-color-default, --border-width-1
--text-xs, --text-sm, --text-base
--space-1 through --space-6
--radius-md, --radius-lg, --radius-full
--font-weight-medium, --font-weight-semibold
--line-height-normal
--duration-fast, --duration-normal, --duration-slow, --ease-out
--icon-size-xs, --icon-size-sm, --icon-size-md
--nova-accent, --nova-accent-hover
--muted, --muted-foreground
--letter-spacing-wide
```

**Animations:**
- `wpn-filter-bar-fade-in` — Component entrance
- `wpn-search-row-fade-in` — Search row entrance (0.05s delay)
- `wpn-search-icon-pulse` — Search icon breathing (2s infinite)
- `wpn-filters-fade-in` — Quick filters entrance (0.1s delay)
- `wpn-actions-fade-in` — Actions row entrance (0.15s delay)
- `wpn-badge-pulse` — Results badge glow (2s infinite)
- `wpn-advanced-slide-down` — Advanced filters expand
- `wpn-active-filters-fade-in` — Active filters appear
- `wpn-pill-pop-in` — Individual filter pill pop
- `wpn-clear-btn-fade-in` — Clear button entrance (0.2s delay)
- `wpn-loading-sweep` — Loading indicator sweep

**Filter Features:**
- Category selection (25 notice types)
- Location selection (9 provinces)
- Status filter (published, pending, archived, expired)
- Date range picker
- Publisher search
- Reference number search
- Sort options (newest, oldest, relevance)

**Example Usage:**
```tsx
<SearchFilterBar
  lang="en"
  showResults={true}
  resultCount={142}
/>
```

---

## 8. AccountSidebar Component

**File:** `/src/app/components/AccountSidebar.tsx` + `/src/app/components/AccountSidebar.css`

**Features:**
- ✨ Vertical navigation with staggered animations
- ✨ Sliding left border indicator
- ✨ Gradient active state
- ✨ Icon scale and rotate on hover
- ✨ Smooth color transitions
- ✨ Mobile horizontal tabs layout
- ✨ Responsive icon sizing
- ✨ Full keyboard navigation

**CSS Variables Used:**
```css
--card, --muted, --foreground, --muted-foreground
--border-color-default, --border-width-1, --border-width-2
--text-xs, --text-sm
--space-1 through --space-4
--radius-lg, --radius-md
--font-weight-medium, --font-weight-semibold
--duration-normal, --ease-out
--icon-size-sm, --icon-size-md
--nova-primary, --nova-accent, --nova-accent-hover
```

**Animations:**
- `wpn-sidebar-fade-in` — Sidebar entrance
- `wpn-link-fade-in` — Staggered link entrance (0.05s-0.25s delays)
- Sliding indicator (vertical on desktop, horizontal on mobile)
- Icon scale and rotate on hover
- Gradient background shift on active hover

**Navigation Items:**
1. Profile — User account settings
2. My Notices — Published and draft notices
3. Orders — Order history and invoices
4. Saved Searches — Saved search queries and alerts
5. Settings — Account preferences

**Responsive Behavior:**
- **Desktop (>768px)**: Vertical sidebar with sliding left border
- **Mobile (<640px)**: Horizontal scrolling tabs with bottom border

**Example Usage:**
```tsx
<AccountSidebar
  lang="en"
  activePage="notices"
/>
```

---

## 🎨 Design System Integration

### Color Usage Pattern

All components follow this color hierarchy:

**Text Colors:**
- Primary text: `--foreground`
- Secondary text: `--muted-foreground`
- Brand text: `--nova-primary`
- Accent text: `--nova-accent`
- White text (on dark): `white` or `rgba(255, 255, 255, 0.9)`

**Background Colors:**
- Page background: `--background`
- Card background: `--card`
- Navy sections: `--nova-primary`
- Hover backgrounds: Semi-transparent variations

**Border Colors:**
- Default: `--border-color-default` or `--card-border-color`
- Light: `--border-color-light`
- Subtle: `--border-color-subtle`
- Strong: `--border-color-strong`
- Hover: `--card-border-color-hover` or `--nova-primary`

### Spacing System

All spacing uses the modular scale:
```css
--space-0: 0
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
```

**Gap-First Approach:**
- Use `gap` for spacing between items
- Use `padding` for internal spacing
- Avoid `margin` (only used for centering containers)

### Typography Scale

```css
--text-xs: 12px
--text-sm: 14px
--text-base: 16px
--text-md: 17px
--text-lg: 24px
--text-xl: 32px
--text-2xl: 40px
--text-3xl: 48px
--text-4xl: 60px
--text-5xl: 72px
--text-6xl: 96px
```

**Responsive Typography:**
Components use smaller sizes on mobile and scale up through breakpoints.

### Animation Tokens

```css
/* Durations */
--duration-fast: 150ms
--duration-normal: 250ms
--duration-slow: 350ms
--duration-slower: 500ms

/* Easing */
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)

/* Transforms */
--hover-translate-y: -2px
--hover-translate-y-sm: -1px
--hover-translate-y-lg: -4px
--hover-scale: 1.02
```

---

## 🏠 Page-Level Enhancements

### Home Page Styles

**File:** `/src/styles/home.css`

**Features:**
- ✨ Category cards with gradient overlays and icon animations
- ✨ Feature cards with floating icon animations
- ✨ Process steps with timeline connector
- ✨ Trust badges with staggered entrance
- ✨ CTA sections with gradient shimmer
- ✨ Testimonial cards with avatar styling
- ✨ Staggered animations throughout (0.05s-0.4s delays)

**Enhanced Elements:**

**1. Category Cards:**
- Gradient overlay on hover
- Icon scale and rotate animations
- Border color transition to accent
- Lift effect with shadow
- Staggered fade-in entrance

**2. Feature Cards:**
- Floating icon animation (3s infinite)
- Navy gradient icon backgrounds
- Hover lift effect
- Centered text alignment
- Staggered fade-in delays

**3. Process Steps:**
- Timeline connector line (desktop only)
- Numbered badges with pulse animation
- Scale entrance animation
- Responsive flexbox layout
- Sequential delays for visual flow

**4. Trust Badges:**
- Icon-based design
- Scale-in animations
- Flexbox wrapping layout
- Muted background container

**5. CTA Sections:**
- Navy gradient backgrounds
- Animated shimmer overlay (3s infinite)
- White text with proper contrast
- Centered content with max-width
- Button groups with gap spacing

**6. Testimonials:**
- Avatar circles with initials
- Quote styling with italic text
- Author info layout
- Slide-in animations from left

---

## 🛠️ Utility Classes

**File:** `/src/styles/utilities.css`

### Section Spacing
```css
.wpn-section--sm    /* 32px vertical padding */
.wpn-section--md    /* 48px → 64px responsive */
.wpn-section--lg    /* 64px → 80px responsive */
.wpn-section--xl    /* 80px vertical padding */
```

### Section Backgrounds
```css
.wpn-section--muted      /* Muted background */
.wpn-section--card       /* Card background */
.wpn-section--primary    /* Navy gradient */
.wpn-section--accent     /* Red gradient */
```

### Container Widths
```css
.wpn-container           /* 1440px max-width */
.wpn-container--narrow   /* 768px max-width */
.wpn-container--wide     /* 1280px max-width */
.wpn-container--full     /* 100% width */
```

### Flexbox Grids (No CSS Grid)
```css
.wpn-grid--2col    /* 1→2 columns responsive */
.wpn-grid--3col    /* 1→2→3 columns responsive */
.wpn-grid--4col    /* 1→2→4 columns responsive */
```

### Gap Utilities
```css
.wpn-gap-xs    /* 8px gap */
.wpn-gap-sm    /* 12px gap */
.wpn-gap-md    /* 16px gap */
.wpn-gap-lg    /* 24px gap */
.wpn-gap-xl    /* 32px gap */
```

### Section Headers
```css
.wpn-section-header              /* Centered header */
.wpn-section-header--left        /* Left-aligned header */
.wpn-section-header--flex        /* Flexbox header with actions */
.wpn-section-header__title       /* Responsive title (2xl→3xl) */
.wpn-section-header__subtitle    /* Responsive subtitle with max-width */
```

### Page Headers
```css
.wpn-page-header                /* Navy gradient with shimmer */
.wpn-page-header__content       /* Content container */
.wpn-page-header__title         /* Large white title (3xl→4xl) */
.wpn-page-header__description   /* White description text */
```

### Cards
```css
.wpn-card                 /* Base card with shadow */
.wpn-card__title          /* Card title (lg, bold) */
.wpn-card__description    /* Card description (sm, muted) */
```

### Loading States
```css
.wpn-skeleton              /* Shimmer animation */
.wpn-skeleton--text        /* Text skeleton (1em height) */
.wpn-skeleton--title       /* Title skeleton (2em height) */
.wpn-skeleton--card        /* Card skeleton (200px height) */
```

### Accessibility
```css
.wpn-sr-only      /* Screen reader only */
.wpn-skip-link    /* Skip to content link */
```

### Print Utilities
```css
.wpn-no-print                    /* Hide when printing */
.wpn-page-break-before           /* Force page break before */
.wpn-page-break-after            /* Force page break after */
.wpn-page-break-inside-avoid     /* Prevent breaking inside */
```

---

## ♿ Accessibility Features

All enhanced components include:

### 1. Focus States
- Clear focus rings using `--ring` color (3px outline)
- Offset for visibility
- Works with keyboard navigation

### 2. Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .component {
    animation: none;
    transition: none;
  }
  
  .component:hover {
    transform: none;
  }
}
```

### 3. High Contrast Mode
```css
@media (prefers-contrast: high) {
  .component {
    border-width: var(--border-width-2);
  }
}
```

### 4. ARIA Support
- Proper ARIA labels
- Semantic HTML
- Screen reader friendly

---

## 📱 Responsive Behavior

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

### Mobile-First Strategy
All components start with mobile layout and scale up:

```css
/* Mobile default */
.component {
  flex-direction: column;
  gap: var(--space-4);
}

/* Tablet */
@media (min-width: 640px) {
  .component {
    flex-direction: row;
    gap: var(--space-6);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    padding: var(--space-8);
  }
}
```

---

## 🔧 Usage Examples

### Hero Component

```tsx
import Hero from './components/Hero';
import { heroData } from './data/heroes/heroes.en';

// Small hero with buttons
<Hero 
  data={{
    title: "Public notices",
    subtitle: "Legal transparency",
    description: "Search and discover official notices",
    size: "sm",
    alignment: "left",
    buttons: [
      { text: "Search notices", href: "/search", variant: "primary", icon: "magnifying-glass" },
      { text: "Submit notice", href: "/submit", variant: "secondary", icon: "upload" }
    ]
  }}
/>

// Large centered hero with search
<Hero 
  data={{
    title: "Find legal notices",
    size: "lg",
    alignment: "center",
    showSearch: true
  }}
/>
```

### NoticeCard Component

```tsx
import NoticeCard from './components/NoticeCard';

// Standard card
<NoticeCard 
  notice={noticeData}
  lang="en"
/>

// Featured card
<NoticeCard 
  notice={noticeData}
  variant="featured"
  lang="en"
/>
```

### StatsBlock Component

```tsx
import StatsBlock from './components/StatsBlock';

// Light variant
<StatsBlock 
  stats={[
    { value: "1,234", label: "Active notices", icon: "file-text" },
    { value: "567", label: "This month", icon: "calendar" },
    { value: "89", label: "Categories", icon: "folders" },
    { value: "24/7", label: "Support", icon: "headset" }
  ]}
/>

// Dark variant for hero
<StatsBlock 
  stats={statsData}
  variant="dark"
/>
```

### CategoryBadge Component

```tsx
import CategoryBadge from './components/CategoryBadge';

// Standard badge
<CategoryBadge category="tenders" lang="en" />

// Large badge with link
<CategoryBadge 
  category="estates" 
  size="lg" 
  href="/category/estates"
  lang="en" 
/>

// Badge group
<div className="wpn-category-badge-group">
  <CategoryBadge category="tenders" lang="en" />
  <CategoryBadge category="estates" lang="en" />
  <CategoryBadge category="liquor-licences" lang="en" />
</div>
```

---

## 🎯 Best Practices

### 1. Always Use CSS Variables
❌ **Don't:**
```css
.component {
  color: #09082f;
  padding: 24px;
  font-size: 16px;
}
```

✅ **Do:**
```css
.component {
  color: var(--nova-primary);
  padding: var(--space-6);
  font-size: var(--text-base);
}
```

### 2. Use Gap for Spacing
❌ **Don't:**
```css
.component__item {
  margin-right: 16px;
  margin-bottom: 16px;
}
```

✅ **Do:**
```css
.component {
  display: flex;
  gap: var(--space-4);
}
```

### 3. Follow BEM Naming
❌ **Don't:**
```css
.cardTitle { }
.card-description { }
.CardMeta { }
```

✅ **Do:**
```css
.wpn-card__title { }
.wpn-card__description { }
.wpn-card__meta { }
```

### 4. Include Accessibility
❌ **Don't:**
```css
.button:hover {
  background: blue;
}
```

✅ **Do:**
```css
.button:hover {
  background: var(--nova-primary);
}

.button:focus {
  outline: 3px solid var(--ring);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}
```

---

## 📚 Additional Resources

- **Design System Variables**: `/src/styles/theme-variables.css`
- **Global Styles**: `/src/styles/global.css`
- **Component Guidelines**: `/guidelines/design-tokens/`
- **BEM Documentation**: `/guidelines/design-tokens/css-architecture.md`

---

**Last Updated**: March 17, 2026  
**Maintained By**: Nova Public Notices Development Team