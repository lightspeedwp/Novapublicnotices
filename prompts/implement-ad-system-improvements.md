# Implement Ad System Improvements

**Purpose:** Polish the AdSlot component and implement comprehensive ad placement logic using the new advertisements data file.

**When to use:** When you need to enhance the ad system with data-driven management, targeting rules, and performance tracking.

---

## Context

The Nova Public Notices Portal has:
- ✅ IAB standards documented in Guidelines.md Section 14
- ✅ News website ad strategy defined
- ✅ Comprehensive ad data file at `/src/app/data/ads/advertisements.ts`
- ⚠️ AdSlot component needs enhancement to use data file
- ⚠️ Ad placement logic needs to be data-driven

---

## Objectives

1. **Update AdSlot component** to use advertisements data file
2. **Implement intelligent ad selection** based on targeting rules
3. **Add performance tracking** (impressions, clicks, CTR)
4. **Support multiple rotation strategies** (random, weighted, optimized)
5. **Enhance bilingual support** with automatic language detection
6. **Add A/B testing capabilities** for creative optimization
7. **Implement frequency capping** to avoid ad fatigue
8. **100% CSS variables** for all styling (no hardcoded values)

---

## Requirements

### 1. AdSlot Component Enhancement

**File:** `/src/app/components/AdSlot.tsx`

#### Current Implementation Issues:
- Uses legacy `ad-creatives.ts` data structure
- No targeting logic
- No performance tracking
- No rotation strategies
- Hardcoded styling in some places

#### Required Updates:

**A. Import New Data File**
```tsx
import {
  getAdCreativesForPlacement,
  getAdCreativeByStrategy,
  getPlacementRulesForPage,
  trackAdImpression,
  trackAdClick,
  type AdCreative,
  type AdPlacement,
  type PageType,
} from '../data/ads/advertisements';
```

**B. Update Component Props**
```tsx
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
```

**C. Implement Intelligent Ad Selection**
```tsx
const selectAdCreative = (): AdCreative | undefined => {
  // Get placement rules for this page
  const placementRules = pageType 
    ? getPlacementRulesForPage(pageType)
    : [];
  
  // Get matching creatives
  const matchingCreatives = placement
    ? getAdCreativesForPlacement(pageType, placement, language, category)
    : [];
  
  // Apply rotation strategy
  const strategy = rotationStrategy || placementRules[0]?.rotationStrategy || 'random';
  return getAdCreativeByStrategy(matchingCreatives, strategy);
};
```

**D. Add Performance Tracking**
```tsx
// Track impression when ad renders
useEffect(() => {
  if (ad && isVisible) {
    trackAdImpression(ad.id);
    onImpression?.(ad.id);
  }
}, [ad, isVisible]);

// Track click when ad is clicked
const handleAdClick = () => {
  if (ad) {
    trackAdClick(ad.id);
    onClick?.(ad.id);
  }
};
```

**E. Remove Hardcoded Styling**

Replace all instances of hardcoded colors:
```tsx
// ❌ Before
style={{
  backgroundColor: ad.backgroundColor,
  color: ad.textColor,
}}

// ✅ After
className="wpn-ad-slot__content"
style={{
  '--ad-bg-color': ad.backgroundColor || 'var(--color-bg-primary)',
  '--ad-text-color': ad.textColor || 'var(--color-text-primary)',
  '--ad-accent-color': ad.accentColor || 'var(--nova-accent)',
} as React.CSSProperties}
```

**F. Update ads.css to Use CSS Variables**

```css
/* Ad content with dynamic colors */
.wpn-ad-slot__content {
  background: var(--ad-bg-color, var(--color-bg-primary));
  color: var(--ad-text-color, var(--color-text-primary));
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
}

.wpn-ad-slot__cta {
  background: var(--ad-accent-color, var(--nova-accent));
  color: var(--color-text-inverse);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  font-family: var(--font-family-body);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
}
```

---

### 2. Ad Placement Helper Component

**File:** `/src/app/components/AdPlacement.tsx` (NEW)

Create a higher-level wrapper that simplifies ad placement:

```tsx
/**
 * AdPlacement — Intelligent Ad Placement Component
 * 
 * Automatically selects and displays ads based on:
 * - Page type
 * - Placement location
 * - Category context
 * - User language
 * - Targeting rules
 */

import AdSlot from './AdSlot';
import { useLocation } from 'react-router';
import { type PageType, type AdPlacement } from '../data/ads/advertisements';

interface AdPlacementProps {
  placement: AdPlacement;
  pageType: PageType;
  category?: string;
  className?: string;
  dismissable?: boolean;
}

export default function AdPlacement({
  placement,
  pageType,
  category,
  className,
  dismissable = false,
}: AdPlacementProps) {
  const location = useLocation();
  const language = location.pathname.startsWith('/af') ? 'af' : 'en';
  
  // Determine ad type based on placement
  const adType = getAdTypeForPlacement(placement);
  
  return (
    <AdSlot
      type={adType}
      placement={placement}
      pageType={pageType}
      category={category}
      language={language}
      className={className}
      dismissable={dismissable}
    />
  );
}

// Map placements to ad types
function getAdTypeForPlacement(placement: AdPlacement): string {
  const placementMap: Record<AdPlacement, string> = {
    'header-top': 'leaderboard',
    'header-below-logo': 'leaderboard',
    'header-takeover': 'billboard',
    'sidebar-primary': 'half-page',
    'sidebar-secondary': 'medium-rectangle',
    'sidebar-sticky': 'sticky-sidebar',
    'in-content-top': 'medium-rectangle',
    'in-content-mid': 'in-feed-native',
    'in-content-bottom': 'large-rectangle',
    'between-paragraphs': 'in-feed-native',
    'article-end': 'large-rectangle',
    'below-content': 'medium-rectangle',
    'footer-top': 'leaderboard',
    'sticky-footer-mobile': 'sticky-footer',
    'sticky-sidebar-desktop': 'sticky-sidebar',
    'background-skin': 'wallpaper',
    'overlay-modal': 'modal-overlay',
  };
  
  return placementMap[placement] || 'medium-rectangle';
}
```

---

### 3. Update All Pages to Use New System

#### Before:
```tsx
<AdSlot type="medium-rectangle" />
```

#### After (Simple):
```tsx
<AdSlot 
  type="medium-rectangle"
  placement="sidebar-primary"
  pageType="single-notice"
  category={notice.category}
  language={lang}
/>
```

#### After (With Helper):
```tsx
<AdPlacement 
  placement="sidebar-primary"
  pageType="single-notice"
  category={notice.category}
/>
```

---

### 4. Implementation Checklist

**Phase 1: Component Updates** (2-3 hours)
- [ ] Update AdSlot component to import new data file
- [ ] Add intelligent ad selection logic
- [ ] Implement performance tracking (impressions, clicks)
- [ ] Remove all hardcoded styling
- [ ] Update ads.css to use CSS variables
- [ ] Add TypeScript types for all props

**Phase 2: Helper Components** (1 hour)
- [ ] Create AdPlacement wrapper component
- [ ] Add placement-to-type mapping
- [ ] Implement automatic language detection
- [ ] Add category context support

**Phase 3: Page Updates** (2-3 hours)
- [ ] Update Home.tsx to use new system
- [ ] Update HomeAF.tsx to use new system
- [ ] Update SearchResults.tsx to use new system
- [ ] Update SearchResultsAF.tsx to use new system
- [ ] Update SingleNotice.tsx to use new system
- [ ] Update SingleNoticeAF.tsx to use new system
- [ ] Update CategoryArchive.tsx to use new system
- [ ] Update CategoryArchiveAF.tsx to use new system

**Phase 4: Advanced Features** (2-3 hours)
- [ ] Implement frequency capping (localStorage)
- [ ] Add A/B testing support
- [ ] Create admin dashboard for ad stats
- [ ] Add campaign scheduling logic
- [ ] Implement lazy loading for below-fold ads

**Phase 5: Testing & Optimization** (2 hours)
- [ ] Test all placement rules
- [ ] Verify targeting logic
- [ ] Test rotation strategies
- [ ] Verify performance tracking
- [ ] Test bilingual support
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing

---

### 5. Advanced Features

#### A. Frequency Capping

Prevent ad fatigue by limiting how often users see the same ad:

```tsx
// Check if ad has been shown recently
const isAdFrequencyCapped = (adId: string, hours: number): boolean => {
  const lastSeen = localStorage.getItem(`ad-seen-${adId}`);
  if (!lastSeen) return false;
  
  const lastSeenDate = new Date(lastSeen);
  const hoursSince = (Date.now() - lastSeenDate.getTime()) / (1000 * 60 * 60);
  
  return hoursSince < hours;
};

// Mark ad as seen
const markAdSeen = (adId: string): void => {
  localStorage.setItem(`ad-seen-${adId}`, new Date().toISOString());
};
```

#### B. A/B Testing

Test multiple creatives to find the best performer:

```tsx
// Get A/B test variant for user
const getABTestVariant = (creativeIds: string[]): string => {
  const userId = getUserId(); // From session or cookie
  const hash = hashCode(userId);
  const index = hash % creativeIds.length;
  return creativeIds[index];
};
```

#### C. Lazy Loading

Only load ads when they enter the viewport:

```tsx
import { useInView } from 'react-intersection-observer';

const AdSlot = ({ ... }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <div ref={ref}>
      {inView && <AdCreative ... />}
    </div>
  );
};
```

#### D. Performance Dashboard

Track ad performance in real-time:

```tsx
import { getAdStatistics } from '../data/ads/advertisements';

const AdDashboard = () => {
  const stats = getAdStatistics();
  
  return (
    <div className="wpn-ad-dashboard">
      <div className="wpn-ad-stat">
        <span className="wpn-ad-stat__label">Total Impressions</span>
        <span className="wpn-ad-stat__value">{stats.totalImpressions.toLocaleString()}</span>
      </div>
      <div className="wpn-ad-stat">
        <span className="wpn-ad-stat__label">Total Clicks</span>
        <span className="wpn-ad-stat__value">{stats.totalClicks.toLocaleString()}</span>
      </div>
      <div className="wpn-ad-stat">
        <span className="wpn-ad-stat__label">Average CTR</span>
        <span className="wpn-ad-stat__value">{stats.averageCTR.toFixed(2)}%</span>
      </div>
      <div className="wpn-ad-stat">
        <span className="wpn-ad-stat__label">Total Revenue</span>
        <span className="wpn-ad-stat__value">R{stats.totalRevenue.toLocaleString()}</span>
      </div>
    </div>
  );
};
```

---

### 6. Design System Compliance

**CRITICAL: 100% CSS Variables**

All styling must use CSS variables from the design system:

**Colors:**
- `var(--color-bg-primary)`
- `var(--color-text-primary)`
- `var(--color-border)`
- `var(--nova-accent)`
- `var(--nova-primary)`

**Spacing:**
- `var(--space-1)` to `var(--space-20)`

**Typography:**
- `var(--font-family-body)`
- `var(--font-family-heading)`
- `var(--text-xs)` to `var(--text-4xl)`
- `var(--font-weight-normal)` to `var(--font-weight-bold)`

**Radii:**
- `var(--radius-sm)` to `var(--radius-full)`

**No Hardcoded Values:**
- ❌ `#09082f`
- ❌ `16px`
- ❌ `'Inter'`
- ✅ CSS variables only

---

### 7. Testing Requirements

**Unit Tests:**
- [ ] Ad selection logic
- [ ] Targeting rules
- [ ] Rotation strategies
- [ ] Performance tracking
- [ ] Frequency capping

**Integration Tests:**
- [ ] Ad displays on all page types
- [ ] Bilingual ads show correctly
- [ ] Category targeting works
- [ ] User type targeting works

**Visual Tests:**
- [ ] Ads render with correct styling
- [ ] Responsive design works
- [ ] Sticky ads behave correctly
- [ ] Native ads match content styling

**Performance Tests:**
- [ ] Ads load without blocking content
- [ ] Below-fold ads lazy load
- [ ] No layout shift (CLS)
- [ ] Fast ad selection (<10ms)

---

### 8. Success Criteria

- ✅ AdSlot component uses advertisements.ts data file
- ✅ Intelligent ad selection based on targeting rules
- ✅ Performance tracking (impressions, clicks, CTR)
- ✅ Multiple rotation strategies supported
- ✅ Bilingual support with automatic language detection
- ✅ 100% CSS variables (zero hardcoded values)
- ✅ Frequency capping implemented
- ✅ A/B testing capabilities
- ✅ All pages updated to use new system
- ✅ Type-safe TypeScript implementation
- ✅ BEM architecture maintained
- ✅ WCAG 2.1 AA accessibility compliance

---

### 9. Example Implementation

**Single Notice Page with Enhanced Ad System:**

```tsx
import AdPlacement from '../components/AdPlacement';

export default function SingleNotice() {
  const { id } = useParams();
  const notice = getNoticeById(id);
  
  return (
    <Layout lang="en" showAds={true}>
      <Hero data={heroData} lang="en" />
      
      {/* Top Leaderboard */}
      <AdPlacement
        placement="header-below-logo"
        pageType="single-notice"
        category={notice.category}
      />
      
      <div className="wpn-container">
        <div className="wpn-layout--with-sidebar">
          {/* Main Content */}
          <article className="wpn-notice-content">
            <h1>{notice.title}</h1>
            
            {/* In-Content Native Ad */}
            <AdPlacement
              placement="in-content-mid"
              pageType="single-notice"
              category={notice.category}
            />
            
            <div className="wpn-notice-body">
              {notice.body}
            </div>
            
            {/* Article End Ad */}
            <AdPlacement
              placement="article-end"
              pageType="single-notice"
              category={notice.category}
            />
          </article>
          
          {/* Sidebar */}
          <aside className="wpn-sidebar">
            {/* Sticky Sidebar Ad */}
            <AdPlacement
              placement="sidebar-sticky"
              pageType="single-notice"
              category={notice.category}
            />
            
            {/* Secondary Sidebar Ad */}
            <AdPlacement
              placement="sidebar-secondary"
              pageType="single-notice"
              category={notice.category}
            />
          </aside>
        </div>
      </div>
      
      {/* Sticky Footer Ad (Mobile) */}
      <AdPlacement
        placement="sticky-footer-mobile"
        pageType="single-notice"
        category={notice.category}
        dismissable={true}
      />
    </Layout>
  );
}
```

---

### 10. Documentation

After implementation, update:

1. **Component Documentation** — Add JSDoc comments to AdSlot and AdPlacement
2. **Data File Documentation** — Document ad creative structure and helper functions
3. **Guidelines.md** — Add section on ad data management
4. **README.md** — Add ad system overview
5. **CHANGELOG.md** — Document ad system improvements

---

## Files to Modify

**Components:**
- `/src/app/components/AdSlot.tsx` — Update to use new data file
- `/src/app/components/AdPlacement.tsx` — NEW helper component

**Data:**
- `/src/app/data/ads/advertisements.ts` — Already created ✅

**Styles:**
- `/src/styles/ads.css` — Update to use CSS variables only

**Pages (Update ad placement):**
- `/src/app/pages/Home.tsx`
- `/src/app/pages/HomeAF.tsx`
- `/src/app/pages/SearchResults.tsx`
- `/src/app/pages/SearchResultsAF.tsx`
- `/src/app/pages/SingleNotice.tsx`
- `/src/app/pages/SingleNoticeAF.tsx`
- `/src/app/pages/CategoryArchive.tsx`
- `/src/app/pages/CategoryArchiveAF.tsx`

**Guidelines:**
- `/guidelines/Guidelines.md` — Section 14 already updated ✅

---

## Timeline

**Total Estimated Time:** 10-12 hours

**Phase 1:** Component Updates (2-3 hours)  
**Phase 2:** Helper Components (1 hour)  
**Phase 3:** Page Updates (2-3 hours)  
**Phase 4:** Advanced Features (2-3 hours)  
**Phase 5:** Testing & Optimization (2 hours)

---

## Notes

- All ad styling must use CSS variables from the design system
- Font faces: Only use `var(--font-family-body)` or `var(--font-family-heading)`
- No hardcoded colors, spacing, or typography
- Follow BEM architecture (`.wpn-ad-slot__*`)
- Maintain WCAG 2.1 AA accessibility compliance
- Support bilingual content (English + Afrikaans)
- Test on mobile, tablet, and desktop
- Ensure ads don't interfere with legal content readability

---

## Completion Criteria

✅ **AdSlot component polished** with intelligent ad selection  
✅ **Ad placement logic data-driven** using advertisements.ts  
✅ **Performance tracking implemented** (impressions, clicks, CTR)  
✅ **Multiple rotation strategies** (random, weighted, optimized)  
✅ **Bilingual support** with automatic detection  
✅ **100% CSS variables** for all styling  
✅ **All pages updated** to use new system  
✅ **Type-safe** TypeScript implementation  
✅ **Accessible** (WCAG 2.1 AA)  
✅ **Tested** across browsers and devices

---

**The ad system will be production-ready with data-driven management, intelligent targeting, and comprehensive performance tracking!** 🎯📊✨
