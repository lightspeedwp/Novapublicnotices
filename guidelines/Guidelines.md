# Nova Public Notices — Project Guidelines

## 1) Purpose

This project is a **Public Notices Portal / Directory** for Nova News / Novus Media.

It is **not** a generic classifieds site.

The prototype and codebase must support:
- public notice discovery
- legal and business submission journeys
- sales-assisted print + digital workflows
- self-serve digital-only workflows
- moderation before publication
- bilingual English and Afrikaans interfaces
- WooCommerce-aligned account and checkout UX
- future WordPress implementation at `novanews.co.za/notices`

This file is the primary project governance document.
Keep this file lean. Split deeper standards into sub-files under `/guidelines/` as the project grows.

---

## 2) Core principles

1. Build for **legal clarity, structured metadata, and discoverability**.
2. Treat **search and filtering** as primary navigation.
3. Use **dynamic data files**, not hard-coded page content.
4. Use **WordPress-aligned classes and CSS variables**, not inline visual styling.
5. Keep the file system clean and predictable.
6. English and Afrikaans ship together from day one.
7. Prototype for the **maximum number of templates and flows** in v1.
8. Preserve flexibility where legal retention or access requirements are still uncertain.

---

## 3) Tech context

Current codebase assumptions:
- Vite
- React
- React Router
- Tailwind available
- shared CSS entrypoint in `/src/styles/`
- existing theme token layer in `src/styles/theme.css`

Implementation target:
- WordPress
- WooCommerce
- PayFast
- dedicated notices section on Nova News
- future consideration for Pongrass import and ERP/CRM integration

Do not build the prototype in a way that blocks WordPress implementation later.

---

## 4) Non-negotiable rules

### 4.1 No inline visual styles
Do not use inline styles for:
- colors
- font families
- font sizes
- line heights
- spacing
- radii
- borders
- shadows
- layout alignment
- background colors
- icon sizing when a class can be used instead

Forbidden examples:
- `style={{ color: '#09082f' }}`
- `style={{ fontFamily: 'Lexend' }}`
- `style={{ marginTop: '24px' }}`
- `style={{ padding: '16px' }}`
- `style={{ background: '#fff' }}`

Allowed exception:
- truly dynamic, computed values that cannot reasonably be expressed through classes or tokens
- these should be rare and documented in code comments

### 4.2 No hard-coded visual values in TSX
Never hard-code:
- hex
- rgb / rgba
- hsl / oklch
- pixel spacing
- font names
- ad hoc shadow values
- custom radii in components

Always route visual styling through:
- semantic CSS classes
- CSS custom properties
- WordPress-aligned utility classes
- approved component classes

### 4.3 No random files in project root
The root of the repo must stay clean.

Allowed root markdown files only:
- `/README.md`
- `/CHANGELOG.md`
- `/ATTRIBUTIONS.md`

All other markdown files must live in:
- `/guidelines/`
- `/docs/`
- `/reports/`
- `/tasks/`
- `/prompts/`

No stray reports, notes, drafts, exports, or one-off markdown files in `/`.

### 4.4 No one-off page data in components
No page should contain its primary copy or data inline inside page components.
Pages must read from dedicated data files.

### 4.5 No infinite scroll
Use pagination for archives and search results.
Public notices are legal content and need stable indexing and clear navigation.

---

## 5) Required root-level folders

These folders must exist in the project root:
- `/guidelines/`
- `/docs/`
- `/prompts/`
- `/reports/`
- `/tasks/`
- `/scripts/`

Purpose:
- `guidelines/` = standards and governance
- `docs/` = reference docs and implementation notes
- `prompts/` = reusable build and maintenance prompts
- `reports/` = dated work reports and audit output
- `tasks/` = task lists and master task tracking
- `scripts/` = helper scripts only (`.sh`, `.py`, or approved tooling)

---

## 6) Project structure rules

### 6.1 Root cleanliness
Nothing should be created in root unless it clearly belongs there.

Forbidden in root:
- ad hoc `.md` files
- exported reports
- temporary assets
- scratch scripts
- JSON dumps
- screenshots
- one-off notes
- task files
- prompt files

### 6.2 File placement rules
- prompts → `/prompts/`
- reports → `/reports/`
- task lists → `/tasks/`
- scripts → `/scripts/`
- documentation → `/docs/`
- guidelines → `/guidelines/`

### 6.3 Source structure
Use a predictable application structure under `/src/`:
- `/src/app/`
- `/src/app/routes/`
- `/src/app/pages/`
- `/src/app/components/`
- `/src/app/data/`
- `/src/app/lib/`
- `/src/styles/`

---

## 7) Dynamic page requirements

The following pages must be dynamic and backed by dedicated data files:

1. Homepage / Landing page
2. Search results
3. Single notice
4. Public Notice Category archive
5. Contact page
6. Register
7. Login
8. My Account
9. Checkout
10. Submit notice form
11. Sales landing page

### 7.1 Minimum data file rule
Each major page or route must have its own data file or clearly scoped data module.

Do not create a monolithic `pages.ts` file for the entire app if it grows too large.

### 7.2 Recommended data structure
Use bilingual, modular data files:

```txt
/src/app/data/
  site/
    navigation.en.ts
    navigation.af.ts
    footer.en.ts
    footer.af.ts
  home/
    home.en.ts
    home.af.ts
  sales/
    sales-page.en.ts
    sales-page.af.ts
  contact/
    contact-page.en.ts
    contact-page.af.ts
  auth/
    login.en.ts
    login.af.ts
    register.en.ts
    register.af.ts
    account.en.ts
    account.af.ts
  checkout/
    checkout.en.ts
    checkout.af.ts
  notices/
    types.ts
    categories.en.ts
    categories.af.ts
    statuses.ts
    filters.en.ts
    filters.af.ts
    notices.en.ts
    notices.af.ts
    helpers.ts
    search.ts
    archive.ts
    submissions.ts
```

### 7.3 Type safety

All data files must use TypeScript interfaces and typed helpers.

Include:

* shared types
* helper functions
* typed filters
* typed category metadata
* typed notice statuses

### 7.4 Search must be partially dynamic

Search results must be able to search notice data and return results based on:

* title
* excerpt
* body content
* reference number
* location
* category
* publication date
* selected filters

Prototype-level search can be client-side against data files.
Structure it so the logic can later map to WordPress queries.

---

## 8) Information architecture and routes

Required route coverage:

* `/`
* `/search`
* `/category/:slug`
* `/notice/:slug`
* `/contact`
* `/register`
* `/login`
* `/my-account`
* `/checkout`
* `/submit-notice`
* `/sales`

Recommended secondary states:

* `/forgot-password`
* `/order-confirmation`
* `/my-account/notices`
* `/my-account/orders`
* `/my-account/profile`
* `/my-account/submissions`
* `/submit-notice/review`
* `/submit-notice/success`

### 8.1 Access model

Prototype the following access rules:

* homepage = public
* notices/search/archive/detail = default to login-gated in prototype
* keep access control configurable because legal/compliance review may change this

Show both:

* logged-out teaser / wall
* logged-in full access state

### 8.2 Logged in vs logged out state definitions

**Critical state management rules across all pages and components.**

#### Public Access (Logged Out State)

**Public Pages (No Authentication Required):**
- Homepage (/)
- Sales/How It Works (/sales)
- Contact (/contact)
- Help & FAQ (/help, /faq)
- About (/about)
- Terms of Service (/terms)
- Privacy Policy (/privacy)
- Sitemap (/sitemap)
- Login (/login)
- Register (/register)
- Forgot Password (/forgot-password)

**Restricted Access (Login Wall):**
- Public Notice Listings (/search, /category/:slug) — Show teaser + login prompt
- Single Notice Detail (/notice/:slug) — Show excerpt + login prompt  
- Submit Notice (/submit) — Redirect to login
- My Account (/my-account/*) — Redirect to login
- Checkout (/checkout) — Redirect to login
- Order Confirmation (/order-confirmation) — Redirect to login

#### Logged In State Access

**All Pages Available:**
- All public pages (homepage, sales, contact, help, legal, etc.)
- Full public notice listings (/search, /category/:slug) — No restrictions
- Full single notice detail (/notice/:slug) — Complete access to notice body, attachments, metadata
- Submit Notice (/submit) — Full submission form access
- My Account (/my-account) — Dashboard, profile, orders, submissions
- Checkout (/checkout) — Payment and order processing
- Order Confirmation (/order-confirmation) — Success states

#### Header Navigation Differences

**Logged Out Header:**
- Top bar right: [Language Switcher] [Login Link] [Register Button]
- Main nav: Search Notices | How It Works | Contact | [Submit Notice Button]

**Logged In Header:**
- Top bar right: [Language Switcher] [My Account Link with User Icon]
- Main nav: Search Notices | How It Works | Contact | [Submit Notice Button]
- Optional: Show user name/email in top bar
- Optional: Add Sign Out button in account dropdown

#### Mobile Menu Differences

**Logged Out Mobile:**
- Top section: About | Help | Sales
- Main section: Search | How It Works | Contact
- Account section: [Login Link] [Register Button] [Language Switcher]

**Logged In Mobile:**
- Top section: About | Help | Sales
- Main section: Search | How It Works | Contact | My Account
- Account section: [Sign Out Button] [Language Switcher]
- Optional: Show user greeting at top

#### Public Notice Listing Behavior

**Logged Out:**
- Show first 3-5 notices with full metadata
- Show notice title, category, date, location, reference number
- Truncate body text to 2-3 lines with "..." ellipsis
- Display login wall overlay on 6th+ notice cards
- Prominent CTA: "Login to view all notices" or "Register to access full listings"
- No access to filters beyond basic category/location

**Logged In:**
- Show all public notice listings without restriction
- Full notice cards with complete metadata
- Access to all advanced filters (date range, category, location, reference number, etc.)
- No truncation or login walls
- Infinite scroll or pagination with no limits

#### Single Notice Page Behavior

**Logged Out:**
- Show notice metadata (title, category, date, location, reference number)
- Show first 2-3 paragraphs of notice body
- Hide attachments section or show "Login required to view attachments"
- Display prominent login wall: "Create a free account to view the full notice"
- Show related notices (truncated) below login wall

**Logged In:**
- Show complete notice body (no truncation)
- Full access to all attachments (PDFs, images, documents)
- Download buttons enabled
- Full related notices section
- Print/export functionality enabled
- Save to favorites (if feature exists)

#### Cart & Checkout State

**Cart Requirements:**
- Must be logged in to add items to cart
- Logged out users attempting to add items → Redirect to /login with return URL
- After login, auto-add item to cart and redirect to /checkout

**Checkout Requirements:**
- Must be logged in to access /checkout
- Logged out users → Redirect to /login with return URL to /checkout
- Preserve cart items in session/localStorage during auth flow

**Order Confirmation Requirements:**
- Must be logged in to view /order-confirmation
- Only show confirmation if user owns the order (security check)
- Logged out users → Redirect to /login

#### Submit Notice State

**Logged Out:**
- Redirect to /login immediately
- Show message: "Please login or register to submit a notice"
- After login, redirect to /submit with pre-filled draft (if applicable)

**Logged In:**
- Full access to submission form
- Save draft functionality
- Multi-step form progress preserved
- File upload enabled
- Access to saved organization details

#### My Account State

**Logged Out:**
- All /my-account/* routes redirect to /login
- Show message: "Please login to access your account"

**Logged In:**
- Full dashboard access
- Sidebar navigation: Dashboard | Notices | Orders | Profile | Submissions
- Show user greeting: "Welcome back, [Name]"
- Display account stats (notices submitted, orders placed, etc.)

#### Dev Toggle (Prototype Only)

**Purpose:**
- Allow rapid switching between logged in/logged out states for testing
- Show in top bar with clear visual indicator

**Display:**
- Logged Out: [User Icon Outline] "Logged Out" 
- Logged In: [User Icon Filled] "Logged In"

**Behavior:**
- Click to toggle state
- Preserve current page URL (don't redirect)
- Update all UI components immediately
- Show notice listings accordingly (truncated vs full)

**Production:**
- Remove dev toggle completely
- Use real authentication (WordPress users, JWT, session cookies, etc.)

---

## 9) Public notice content model

The prototype must cater for the full category breadth and category-specific fields.

Baseline content model includes:

* title
* slug
* excerpt
* body
* category
* reference number
* location
* publish date
* status
* language
* contact details
* attachments
* source type
* archival state

Source type must support:

* self-serve digital-only
* sales-assisted digital-only
* sales-assisted print + digital
* editorial / imported source
* future Pongrass import

### 9.1 Category coverage

Prototype for the full known notice universe, including but not limited to:

* adoptions
* business licences
* court orders
* curatorship
* demolition
* divorce / antenuptial motions
* estates
* insolvent estates
* liquor licences
* lost documents
* environmental notices
* pension / provident funds
* re-registrations
* sale of business
* sale in execution
* surrender of estate
* tenders
* town establishment
* town planning
* general notices

### 9.2 Category-specific fields

Use shared field groups plus category modules.
Do not create 25 unrelated data systems.

---

## 10) User journeys

Support and document at least these journeys:

### 10.1 General public

Primary job:

* discover notices
* filter and search
* view archived or current notices
* understand notice metadata clearly

### 10.2 Legal professional / business / municipality / government department

Primary job:

* create account
* submit a notice
* upload supporting files
* pay for digital publication
* track review status
* manage repeat submissions

### 10.3 Sales-assisted customer

Primary job:

* contact sales
* arrange print placement
* add digital upsell
* receive managed publishing support

### 10.4 Internal editorial / moderation user

Primary job:

* review submitted notice
* verify metadata completeness
* request changes
* approve / reject / archive
* preserve an auditable publication trail

---

## 11) Moderation, workflow, and notice lifecycle

### 11.1 Moderation

No self-serve notice should go live immediately after payment.
The required prototype workflow is:

draft → submitted → paid → pending review → changes requested or approved → published → archived or expired

### 11.2 Legal risk handling

The UI must clearly support:

* moderation status
* reviewer notes
* missing information flags
* attachment checks
* identity / organisation checks
* publication timestamp
* archive timestamp
* future proof-of-publication support

### 11.3 Retention and expiry

Default assumption:

* archived notices remain searchable
* some notice types may expire from primary listings
* internal retention should always outlast public display

Do not hard-code one legal rule across all categories.
Keep this configurable by notice type.

---

## 12) Bilingual content rules

English and Afrikaans are required from day one.

### 12.1 Translation standard

Afrikaans must be:

* formal
* official
* high-register
* appropriate for legal and public-sector communication

Do not use:

* slang
* casual Afrikaans
* literal machine-style phrasing

### 12.2 Data structure rule

Where data is language-specific, maintain paired EN and AF data files.
Where fields must remain identical across languages, store them once and reference them in both layers.

### 12.3 UI rule

All templates, labels, buttons, errors, helper text, filters, headings, and account strings must exist in both languages.

Include a language switcher from day one.

---

## 13) Design system and styling rules

### 13.1 WordPress-aligned styling

Use WordPress-aligned semantic classes for visual styling.

Prefer classes such as:

* `.has-primary-color`
* `.has-accent-color`
* `.has-base-color`
* `.has-primary-background-color`
* `.has-accent-background-color`
* `.has-heading-font-family`
* `.has-body-font-family`
* `.has-small-font-size`
* `.has-medium-font-size`
* `.has-large-font-size`
* `.is-layout-constrained`
* `.is-layout-flex`
* `.wp-notices-*` component classes

These may be implemented in project CSS, but naming should stay close to WordPress conventions.

### 13.2 Tailwind usage

Tailwind may be used carefully for structural implementation, but:

* do not scatter arbitrary color classes
* do not hard-code brand styling in JSX
* do not rely on one-off utility strings as the design system
* semantic component classes must remain the source of truth

### 13.3 Spacing policy

Use padding and gap.
Avoid margin as a layout crutch.

Rule:

* no margin-based layout systems
* prefer stack, cluster, grid, flex, gap, padding
* if margin is unavoidable, document why

### 13.4 Tokens

All colors, fonts, spacing, radii, borders, and shadows must come from shared tokens in `/src/styles/`.

Never bypass tokens for convenience.

### 13.5 Heading and content capitalization

**CRITICAL RULE: Always use sentence case for all headings, labels, and UI text.**

Sentence case means:
- Only the first letter of the heading is capitalized
- Proper nouns are capitalized (e.g., Nova News, WordPress)
- Everything else is lowercase

**Correct examples:**
- "Contact us"
- "Submit a notice"
- "My account dashboard"
- "Search public notices"
- "Saved searches and alerts"
- "Help and FAQ center"
- "Privacy and cookie policy"

**Incorrect examples (DO NOT USE):**
- ❌ "Contact Us"
- ❌ "Submit A Notice"
- ❌ "My Account Dashboard"
- ❌ "Search Public Notices"
- ❌ "Saved Searches And Alerts"
- ❌ "Help And FAQ Center"
- ❌ "Privacy And Cookie Policy"

**Applies to:**
- All page titles (h1, h2, h3, h4, h5, h6)
- All button labels
- All navigation links
- All form labels
- All card titles
- All section headings
- All modal titles
- All data file content

**Exceptions:**
- Acronyms and abbreviations (FAQ, ID, VAT, PDF)
- Proper nouns (Nova News, WordPress, PayFast, WooCommerce)
- Technical terms that require specific capitalization

**Rationale:**
- More modern, friendly, and approachable
- Aligns with contemporary web design best practices
- Easier to read and less formal
- Consistent with leading platforms (Google, Apple, Airbnb)
- WordPress admin interface uses sentence case

**Implementation:**
All data files, UI components, and content must follow sentence case.
Audit existing content and update to sentence case before deployment.

---

## 14) Ads

### 14.1 IAB Standards & Ad Sizes

Nova Public Notices Portal follows **Interactive Advertising Bureau (IAB)** standards for all advertising placements. All ad sizes comply with IAB specifications for compatibility across ad networks and devices.

#### Universal Ad Sizes (Most Common)

These standard sizes offer the highest inventory and performance:

| Ad Type | Size (Pixels) | Aspect Ratio | Best Use Case |
|---------|---------------|--------------|---------------|
| **Medium Rectangle (MPU)** | 300×250 | 6:5 | In-content (articles) or sidebars; works on both desktop and mobile |
| **Leaderboard** | 728×90 | 8:1 | Top or bottom of desktop pages; high visibility |
| **Wide Skyscraper** | 160×600 | 4:15 | Sidebar/right rail; stays visible while scrolling |
| **Mobile Banner** | 320×50 | 32:5 | Standard mobile placement; often sticky at top or bottom |
| **Half-Page** | 300×600 | 1:2 | High-impact vertical; excellent for branding and rich media |

#### Large & High-Impact Units (Rising Stars)

Premium placements for branding campaigns:

| Ad Type | Size (Pixels) | Aspect Ratio | Use Case |
|---------|---------------|--------------|----------|
| **Billboard** | 970×250 | 97:25 | Massive header unit for major takeovers |
| **Portrait** | 300×1050 | 2:7 | Premium vertical unit, often divided into interactive segments |
| **Super Leaderboard** | 970×90 | 97:9 | Wider leaderboard, sometimes used for pushdown ads |
| **Large Rectangle** | 336×280 | 6:5 | Slightly larger than MPU; common in desktop article feeds |

#### Additional Standard Sizes

| Ad Type | Size (Pixels) | Use Case |
|---------|---------------|----------|
| **Skyscraper** | 120×600 | Narrow sidebar placement |
| **Large Mobile Banner** | 320×100 | Mobile placement with more vertical space |
| **Mobile Leaderboard** | 320×50 | Standard mobile top/bottom banner |

#### IAB New Ad Portfolio (Flexible Sizes)

Modern aspect-ratio-based units for responsive design:

| Aspect Ratio | Replaces | Use Case |
|--------------|----------|----------|
| **1:1 (Square)** | 250×250 | Flexible square placements |
| **4:1 (Horizontal)** | 970×250 Billboard | Responsive header units |
| **8:1 (Horizontal)** | 728×90 Leaderboard | Responsive leaderboard |
| **1:2 (Vertical)** | 300×600 Half-Page | Responsive vertical units |
| **9:16, 2:3, 3:4 (Full-Page)** | Various | Mobile interstitials and immersive experiences |

#### Design & Technical Specs (LEAN Principles)

**LEAN Standards:**
- **Light:** Low file weight (150-250 KB initial load)
- **Encrypted:** HTTPS required
- **AdChoices-supported:** Privacy disclosure required
- **Non-invasive:** No auto-play audio, no pop-unders

**File Sizes:**
- Initial Load: 150-250 KB (depending on unit size)
- Subload (Host-initiated): Up to 1 MB (loads 1 second after page finishes)
- Video: MP4 format preferred, 16:9 or 4:3 aspect ratio

**Accessibility:**
- All ads must have "Advertisement" or "Sponsored" label
- Close buttons must meet 44×44 minimum touch target
- No flashing content (seizure risk)
- No auto-play audio without user interaction

### 14.1.1 News Website Ad Strategy

Nova Public Notices Portal follows a **news website ad strategy** that balances high-impact visibility with non-disruptive user experience.

#### 1. Top-of-Page (The "Hook")

First ads readers see upon landing:

**Desktop:**
- **Leaderboard (728×90)** — Above main navigation or below site logo
- **Billboard (970×250)** — Premium homepage takeovers and brand campaigns

**Mobile:**
- **Mobile Smartphone Banner (320×50)** — Standard mobile header (swaps with desktop Leaderboard)

**Implementation:**
```tsx
// Desktop
<AdSlot type="leaderboard" className="wpn-ad-slot--header" />

// Premium campaigns
<AdSlot type="billboard" className="wpn-ad-slot--takeover" />

// Mobile (auto-swaps via CSS)
<AdSlot type="mobile-leaderboard" className="wpn-ad-slot--mobile-header" />
```

#### 2. Sidebar (The "Peripheral")

Consistent visibility as readers scan content:

**Desktop Sidebar:**
- **Wide Skyscraper (160×600)** — Stays visible in peripheral vision while scrolling
- **Half-Page (300×600)** — Fast-growing branding unit with significant creative space
- **Medium Rectangle (300×250)** — The "workhorse" of digital ads; universally compatible

**Implementation:**
```tsx
// Sticky sidebar
<AdSlot type="wide-skyscraper" className="wpn-ad-slot--sidebar-sticky" />

// High-impact branding
<AdSlot type="half-page" className="wpn-ad-slot--sidebar-primary" />

// Secondary sidebar
<AdSlot type="medium-rectangle" className="wpn-ad-slot--sidebar-secondary" />
```

#### 3. In-Article (The "Engagement")

Placements within content where reader attention is highest:

**In-Content:**
- **In-Feed / In-Content (300×250)** — Inject after specific paragraph (e.g., after paragraph 2 or 5)
- **Native Ads** — Match editorial styling for seamless integration

**Implementation:**
```tsx
// After paragraph 2
<AdSlot 
  type="in-feed-native" 
  label="Sponsored" 
  className="wpn-ad-slot--in-content" 
/>

// Native editorial match
<AdSlot 
  type="in-feed-native" 
  label="Partner Content" 
  className="wpn-ad-slot--native-editorial"
/>
```

#### 4. Bottom-of-Article & Footer (The "Closure")

Capture users who finished reading:

**End-of-Content:**
- **Large Rectangle (336×280)** — High-impact placement at article end
- **Ad Grids / Multiplex Ads** — Grid of related "Recommended" or "Sponsored" content

**Implementation:**
```tsx
// End of article
<AdSlot type="large-rectangle" className="wpn-ad-slot--article-end" />

// Ad grid (use multiple slots in grid layout)
<div className="wpn-ad-grid">
  <AdSlot type="sponsored-listing" label="From our partners" />
  <AdSlot type="sponsored-listing" label="From our partners" />
  <AdSlot type="sponsored-listing" label="From our partners" />
</div>
```

#### 5. Specialty High-Performance Units

**Sticky/Anchor Ads:**
- Bottom-stuck mobile ads (high CTR format)
- Must be dismissable (user control)

**Background/Skin Ads:**
- Monetize white space on desktop (left/right of main content)
- Subtle, non-intrusive branding

**Implementation:**
```tsx
// Sticky footer (mobile)
<AdSlot 
  type="sticky-footer" 
  dismissable={true} 
  className="wpn-ad-slot--anchor"
/>

// Background skin (desktop only)
<AdSlot 
  type="wallpaper" 
  className="wpn-ad-slot--background-skin"
/>
```

### 14.2 Ad Placement Strategy

Ads must be supported on every major template **except:**

* Checkout
* Order confirmation

#### Homepage Ad Placements

**Total Ad Slots:** 4-6

1. **Leaderboard** (728×90) — Below header, above hero
2. **Medium Rectangle** (300×250) — After category grid
3. **In-Feed Native** — Between notice cards (every 6-8 notices)
4. **Half-Page** (300×600) — Right sidebar (desktop only)
5. **Sticky Footer** (320×50) — Mobile sticky bottom

**Revenue Potential:** R18,000-25,000/month

#### Search Results Ad Placements

**Total Ad Slots:** 5-7

1. **Super Leaderboard** (970×90) — Below search bar
2. **Medium Rectangle** (300×250) — Above results (fold)
3. **Sponsored Listing** — Every 5th result
4. **Half-Page** (300×600) — Right sidebar (sticky)
5. **Mobile Banner** (320×50) — Mobile sticky footer

**Revenue Potential:** R22,000-30,000/month

#### Category Archive Ad Placements

**Total Ad Slots:** 4-6

1. **Leaderboard** (728×90) — Below hero
2. **Medium Rectangle** (300×250) — After description
3. **In-Feed Native** — Every 6 notices
4. **Wide Skyscraper** (160×600) — Right sidebar
5. **Sticky Footer** (320×50) — Mobile only

**Revenue Potential:** R15,000-22,000/month

#### Single Notice Ad Placements

**Total Ad Slots:** 6-8

1. **Leaderboard** (728×90) — Below hero
2. **Medium Rectangle** (300×250) — After notice metadata
3. **Large Rectangle** (336×280) — Mid-content
4. **Half-Page** (300×600) — Right sidebar (sticky)
5. **Medium Rectangle** (300×250) — Below content
6. **Related Sponsored** — In related notices section

**Revenue Potential:** R30,000-40,000/month (highest traffic)

#### Content Pages (About, FAQ, Help)

**Total Ad Slots:** 2-3

1. **Leaderboard** (728×90) — Below hero
2. **Medium Rectangle** (300×250) — Right sidebar
3. **Mobile Banner** (320×50) — Mobile sticky footer

**Revenue Potential:** R5,000-8,000/month

#### Account Pages (Dashboard, Profile, Orders)

**Total Ad Slots:** 1-2

1. **Medium Rectangle** (300×250) — Sidebar or bottom
2. **Mobile Banner** (320×50) — Mobile only

**Revenue Potential:** R3,000-5,000/month

#### Ad-Free Pages

**No Ads Allowed:**
- Checkout
- Order confirmation
- Payment pages
- Login/Register
- Password reset
- Submit notice form (until review stage)

**Rationale:** 
- Legal compliance (no interference with transactions)
- User experience (critical conversion paths)
- Trust building (no commercial pressure during legal submissions)

### 14.3 Ad Placement Rules

**Placement Guidelines:**

1. **Above the Fold**
   - Maximum 1 ad unit above fold
   - Must not push primary content below fold
   - Leaderboard preferred over MPU for top placement

2. **Content Integration**
   - In-feed ads every 5-8 items (not every 3)
   - Native ads must match content styling
   - "Advertisement" or "Sponsored" label required
   - Clear visual separation from editorial content

3. **Sidebar Placement**
   - Maximum 2 ad units per sidebar
   - Half-page (300×600) preferred for high-impact
   - Sticky ads should have close button
   - Must not obscure primary content

4. **Mobile Placement**
   - Maximum 1 sticky ad (top or bottom, not both)
   - Sticky ads must be dismissable
   - In-feed ads every 6-8 items
   - No interstitials on first page load

5. **Content Integrity**
   - Ads must not break reading of legal content
   - Notices must be fully readable without ad interference
   - Reference numbers and legal text must remain accessible
   - Attachments/PDFs must be reachable without ad clicks

6. **Performance**
   - Lazy load below-the-fold ads
   - Reserve layout space to prevent CLS
   - Maximum 6 ad units per page (desktop)
   - Maximum 4 ad units per page (mobile)

### 14.4 Technical Implementation

**Component Usage:**

All ads must use the `AdSlot` component from `/src/app/components/AdSlot.tsx`:

```tsx
import AdSlot from '../components/AdSlot';

// Standard display ad
<AdSlot type="medium-rectangle" />

// Sticky footer (mobile)
<AdSlot type="sticky-footer" dismissable={true} />

// In-feed native ad
<AdSlot type="in-feed-native" label="Sponsored" />

// Half-page sidebar (sticky)
<AdSlot type="half-page" className="sticky-ad" />
```

**Supported Ad Types:**

**Display Ads:**
- `leaderboard` (728×90)
- `super-leaderboard` (970×90)
- `billboard` (970×250)
- `medium-rectangle` (300×250)
- `large-rectangle` (336×280)
- `half-page` (300×600)
- `wide-skyscraper` (160×600)
- `skyscraper` (120×600)

**Mobile Ads:**
- `mobile-leaderboard` (320×50)
- `large-mobile-banner` (320×100)
- `mobile-rectangle` (300×250)

**Sticky Ads:**
- `sticky-footer`
- `sticky-sidebar`
- `sticky-header`

**Advanced Ads:**
- `in-feed-native`
- `sponsored-listing`
- `expandable-banner`
- `interstitial` (use sparingly)
- `modal-overlay`
- `slide-in`

**Styling:**

All ad styling uses CSS variables from `/src/styles/ads.css`:

```css
/* Ad container */
.wpn-ad-slot {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
}

/* Ad label */
.wpn-ad-slot__label {
  font-family: var(--font-family-body);
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
}
```

**No hardcoded styling allowed:**
- ❌ `style={{ padding: '16px' }}`
- ❌ `style={{ color: '#666' }}`
- ✅ Use CSS variables and BEM classes only

### 14.5 Revenue Model

**Estimated Monthly Revenue by Page Type:**

| Page Type | Avg. Impressions/Month | CPM | Est. Revenue |
|-----------|------------------------|-----|--------------|
| Homepage | 50,000 | R40 | R20,000 |
| Single Notice | 120,000 | R35 | R42,000 |
| Search Results | 80,000 | R30 | R24,000 |
| Category Archive | 60,000 | R30 | R18,000 |
| Content Pages | 20,000 | R25 | R5,000 |
| Account Pages | 15,000 | R20 | R3,000 |
| **Total** | **345,000** | **Avg R33** | **R112,000** |

**Revenue Optimization:**

1. **High-Traffic Pages:** Single Notice (highest CPM)
2. **Premium Placements:** Half-page, Billboard (2-3x CPM)
3. **Native Ads:** 50-100% higher CTR than display
4. **Direct Sales:** Liquor industry, legal services, real estate (3-5x CPM)
5. **Seasonal Campaigns:** Tenders (Q4), Estates (Q1)

### 14.6 Bilingual Ad Labels

**English Labels:**
- "Advertisement"
- "Sponsored"
- "Promoted"
- "Partner Content"

**Afrikaans Labels:**
- "Advertensie"
- "Geborg"
- "Promoveer"
- "Vennootinhoud"

**Component Usage:**

```tsx
// English
<AdSlot type="medium-rectangle" label="Advertisement" />

// Afrikaans
<AdSlot type="medium-rectangle" label="Advertensie" />
```

### 14.7 Accessibility & Compliance

**Required:**
- ✅ "Advertisement" or "Sponsored" label on every ad
- ✅ Close button on sticky/overlay ads (44×44 minimum)
- ✅ `rel="sponsored"` on all ad links
- ✅ No auto-play audio without user interaction
- ✅ No flashing content (seizure risk)
- ✅ Keyboard accessible close buttons
- ✅ Screen reader compatible labels

**POPIA Compliance:**
- No tracking without consent
- No PII collection in ad creatives
- AdChoices icon required for behavioral targeting
- Privacy policy disclosure

**Legal:**
- No misleading ad content
- No ads mimicking editorial content without "Advertisement" label
- No ads for illegal services
- Age-restricted ads (alcohol, gambling) must comply with SA regulations

---

## 15) Page-specific rules

### 15.1 Homepage

Must explain:

* what public notices are
* how to browse
* how to submit
* how print + digital works
* how digital-only works

### 15.2 Search and archive pages

Must prioritise:

* search
* filters
* clear metadata
* result counts
* pagination
* category clarity

### 15.3 Single notice

Must show:

* title
* category
* publish date
* location
* reference number
* full notice text
* structured details sidebar
* attachments
* related notices
* archive / expiry state
* login-gated and logged-in variants

### 15.4 Contact page

Must include a form and clear sales / support routing.

### 15.5 Register / Login

Must support both individuals and organisation-led publishers.

### 15.6 My Account

Must align conceptually with WooCommerce:

* dashboard
* orders
* account details
* saved organisation details
* notice submissions
* notice statuses

### 15.7 Checkout

Must align conceptually with WooCommerce + PayFast.
No ads.
Must reinforce moderation-before-publication.

### 15.8 Submit notice form

Must support:

* category selection
* category-specific fields
* bilingual content strategy
* file uploads
* review before submission
* moderation disclaimer
* payment handoff

### 15.9 Sales landing page

Must explain the process in detail:

* print-only
* print + digital
* digital-only
* moderation
* timelines
* support expectations
* contact path

### 15.10 Dev tools pages

Development utility pages for client requirements gathering and project management.

**Required pages:**

* `/dev` — Dev tools index
* `/dev/client-questionnaire` — Client requirements capture (75 questions across 12 sections)
* `/dev/launch-checklist` — Launch readiness tracking (66 items across 11 sections)

**Client questionnaire sections:**

1. Business and brand (6 questions)
2. Visual identity (6 questions)
3. Content and messaging (6 questions)
4. Features and functionality (7 questions)
5. Search and discovery (6 questions)
6. User accounts and access (6 questions)
7. Pricing and payments (7 questions)
8. Moderation and workflow (7 questions)
9. Legal and compliance (6 questions)
10. Advertising and revenue (5 questions)
11. Contact information (7 questions)
12. Technical and integration (6 questions)

**Launch checklist sections:**

1. Content and copy (7 items) — critical
2. Branding and design (5 items) — critical
3. Contact information (7 items) — critical
4. Pricing and payments (6 items) — critical
5. Users and access (5 items) — high
6. Technical setup (7 items) — critical
7. Notice categories and data (5 items) — high
8. Moderation workflow (5 items) — high
9. Legal and compliance (6 items) — critical
10. Testing and quality assurance (7 items) — high
11. Launch preparation (6 items) — critical

**Design requirements:**

* BEM architecture (`.wpn-dev-*`)
* CSS variables only
* Hero component integration
* Progress tracking (launch checklist)
* Priority badges (critical, high, medium)
* Status indicators (complete, pending, blocked)
* Export functionality (questionnaire)
* No ads

**Purpose:**

* Capture all client requirements before finalization
* Track launch readiness and identify blockers
* Reduce back-and-forth communication
* Ensure WordPress migration readiness
* Provide clear visibility into project status

---

## 16) Accessibility and performance

Minimum requirements:

* semantic HTML
* keyboard navigation
* visible focus states
* 44x44 minimum touch targets
* strong color contrast
* reduced motion support
* stable layouts
* reserved space for images and ads

Performance rules:

* lazy load where appropriate
* split large bundles and routes
* keep data files modular
* avoid oversized TS files
* avoid oversized MD files

---

## 17) Reporting, tasks, docs, and prompts

### 17.1 Reports

All reports go in `/reports/`.
Never create report markdown in root.

### 17.2 Tasks

All task lists go in `/tasks/`.
Use a master task list to track status.

### 17.3 Prompts

All reusable prompts go in `/prompts/`.

### 17.4 Documentation

Reference docs and implementation notes go in `/docs/`.

### 17.5 Scripts

All helper scripts go in `/scripts/`.
Do not drop scripts into root.

---

## 18) Definition of done

A feature is not done unless:

* it uses dynamic data
* it follows directory rules
* it avoids inline visual styling
* it uses shared tokens / semantic classes
* it supports EN and AF where user-facing
* it respects login / access rules
* it respects ad rules
* it supports responsive states
* it is accessible
* it is implementation-ready for WordPress thinking

---

## 19) Error pages and 404 handling

### 19.1 404 Page requirements

The 404 page must be helpful and actionable, not just informative.

**Required elements:**
- Clear error code and message
- Search functionality (allows immediate recovery)
- "Go back" and "Go home" buttons
- Helpful links grid (6 key pages minimum)
- Popular category links
- Contact/support information
- No ads (error pages are service recovery, not monetization)

**Design requirements:**
- BEM architecture (`.wpn-error-*`)
- CSS variables only
- Gradient error code (primary → accent)
- Large, friendly icon
- Mobile-first responsive
- Accessible keyboard navigation

**User recovery paths:**
1. Search for what they were looking for
2. Go back to previous page
3. Go to homepage
4. Browse popular categories
5. Access help/FAQ/contact
6. Submit a notice

### 19.2 Error page CSS file

All error pages (404, 500, etc.) must use `/src/styles/error-pages.css` with the `.wpn-error-*` BEM namespace.

Do not create separate CSS files for each error code.

### 19.3 Future error pages

If creating 500, 503, or other error pages:
- Use the same BEM structure
- Adjust messaging for the specific error
- Keep the same recovery paths
- Maintain consistent design

---

## 20) BEM refactoring progress

### 20.1 Pages with complete BEM architecture

**Completed (8 pages):**
- ✅ `/help` (Help.tsx, HelpAF.tsx) — Complete with dedicated CSS
- ✅ `404` (NotFound.tsx) — Enhanced with search, categories, helpful links
- ✅ `/faq` (FAQ.tsx, FAQAF.tsx) — Complete with dedicated CSS, Hero, Phosphor icons
- ✅ `/` (Home.tsx) — home.css exists with BEM
- ✅ `/notice/:id` (SingleNotice.tsx) — single-notice.css exists with BEM
- ✅ `/dev/client-questionnaire` (ClientQuestionnaire.tsx) — Complete with dedicated CSS (75 questions)
- ✅ `/dev/launch-checklist` (LaunchChecklist.tsx) — Complete with dedicated CSS (66 items)
- ✅ Dev tools shared CSS (dev-tools.css) — 70+ BEM classes

**Pending (9 pages):**
- 🔲 `/login`
- 🔲 `/register`
- 🔲 `/sitemap`
- 🔲 `/submit`
- 🔲 `/privacy`
- 🔲 `/terms`
- 🔲 `/my-account`
- 🔲 `/my-account/notices`
- 🔲 `/search`

### 20.2 BEM compliance checklist

For each page refactor, ensure:
1. ✅ Dedicated CSS file created in `/src/styles/`
2. ✅ All classes follow BEM naming (`.wpn-[block]__[element]--[modifier]`)
3. ✅ 100% CSS variables (no hardcoded values)
4. ✅ Font faces from design system only
5. ✅ No inline styles
6. ✅ Responsive design with breakpoints
7. ✅ Hero component integrated (where applicable)
8. ✅ Sentence case for all headings
9. ✅ Bilingual support (EN + AF)
10. ✅ Accessibility baseline (WCAG 2.1 AA)

### 20.3 Font weight system

**All font weights reduced by 100 for lighter, more readable text:**

```css
--font-weight-thin: 100;
--font-weight-light: 200;
--font-weight-normal: 300;
--font-weight-regular: 300;
--font-weight-medium: 400;
--font-weight-semibold: 500;
--font-weight-bold: 500;
--font-weight-extrabold: 600;
```

**Heading defaults:**
- H1-H4: `--font-weight-semibold` (500)
- H5-H6: `--font-weight-medium` (400)

Never use hardcoded font weights. Always use CSS variables.

---

## 21) Protected files and folders

Do not delete or move without reason:

* `/README.md`
* `/CHANGELOG.md`
* `/ATTRIBUTIONS.md`
* `/guidelines/`
* `/docs/`
* `/prompts/`
* `/reports/`
* `/tasks/`
* `/scripts/`
* `/src/styles/`
* `/src/app/data/`

If a file is being moved, only delete the old file after the new location is confirmed and updated.

---

## 22) Immediate follow-on files to create after this one

Create next:

* `/prompts/cleanup.md`
* `/prompts/continue.md`
* `/prompts/prompt-triggers.md`
* `/tasks/task-list.md`
* `/guidelines/design-tokens/colors.md`
* `/guidelines/design-tokens/typography.md`
* `/guidelines/design-tokens/spacing.md`
* `/guidelines/design-tokens/forms.md`
* `/guidelines/design-tokens/navigation.md`
* `/guidelines/_templates.md`

This file remains the parent guide and should link to those sub-guides as they are added.

---

## 23) Guidelines and Prompts Structure

### Created Guidelines

* **[locale-architecture.md](./locale-architecture.md)** — Bilingual English/Afrikaans architecture standards
* **[data-model.md](./data-model.md)** — Notice data structure, taxonomies, and category-specific fields
* **[notice-fields-schema.md](./notice-fields-schema.md)** — Universal field schema for all 25 categories
* **[design-tokens/](./design-tokens/)** — Complete design token system (14 guideline files)
  * [README.md](./design-tokens/README.md) — Design tokens overview
  * [CSS Architecture](./design-tokens/css-architecture.md) — BEM, WordPress alignment
  * [Colors](./design-tokens/colors.md) — Brand and semantic colors
  * [Typography](./design-tokens/typography.md) — Fonts, scales, weights
  * [Spacing](./design-tokens/spacing.md) — Gap-first spacing system
  * [Buttons](./design-tokens/buttons.md) — Button variants and sizes
  * [Forms](./design-tokens/forms.md) — Form fields and controls
  * [Navigation](./design-tokens/navigation.md) — Nav patterns and bilingual switching
  * [Iconography](./design-tokens/iconography.md) — Phosphor Icons integration
  * [Borders](./design-tokens/borders.md) — Border tokens and patterns
  * [Radii](./design-tokens/radii.md) — Border radius scale
  * [Shadows](./design-tokens/shadows.md) — Elevation system
  * [Animations](./design-tokens/animations.md) — Motion and transitions
  * [Responsive](./design-tokens/responsive.md) — Breakpoints and layouts
  * [Light & Dark Mode](./design-tokens/light-dark-mode.md) — Color mode tokens

### Created Prompts

**Master Orchestrator:**
* **[orchestrator.md](../prompts/orchestrator.md)** — Master audit coordinator that runs all sub-audits in sequence

**Fix Prompts:**
* **[fix-orchestrator.md](../prompts/fix-orchestrator.md)** — Master fix coordinator that runs all fix prompts
* **[fix-titles.md](../prompts/fix-titles.md)** — Enforce sentence case for all titles and headings

**Architecture Audits:**
* **[audit-locale.md](../prompts/audit-locale.md)** — Bilingual architecture & route equivalence audit
* **[audit-routing.md](../prompts/audit-routing.md)** — Route integrity & bilingual navigation audit
* **[audit-data.md](../prompts/audit-data.md)** — Notice data architecture, bilingual pairs, type safety audit

**Styling & Design System Audits:**
* **[audit-styling.md](../prompts/audit-styling.md)** — CSS variables, no inline styles, semantic classes audit
* **[audit-css.md](../prompts/audit-css.md)** — CSS architecture, imports, WordPress classes audit
* **[audit-tokens.md](../prompts/audit-tokens.md)** — CSS variable compliance, font face enforcement audit
* **[audit-phosphor.md](../prompts/audit-phosphor.md)** — Phosphor Icons usage, no legacy Lucide icons audit

**Template Parts Audits:**
* **[audit-header.md](../prompts/audit-header.md)** — Header template part consistency across all pages
* **[audit-footer.md](../prompts/audit-footer.md)** — Footer template part consistency across all pages
* **[audit-hero.md](../prompts/audit-hero.md)** — Hero template part usage on ALL pages and templates (critical)

**Accessibility & Performance Audits:**
* **[audit-accessibility.md](../prompts/audit-accessibility.md)** — Comprehensive WCAG 2.1 AA audit with bilingual support
* **[audit-a11y.md](../prompts/audit-a11y.md)** — Quick accessibility check
* **[audit-performance.md](../prompts/audit-performance.md)** — Render performance, assets, bundle size audit

**Archive Prompts:**
* **[archive-prompts.md](../prompts/archive-prompts.md)** — Review and archive specific/completed prompts
* **[archive-reports.md](../prompts/archive-reports.md)** — Review and archive old audit reports
* **[archive-tasks.md](../prompts/archive-tasks.md)** — Review and archive completed task lists
* **[archive-guidelines.md](../prompts/archive-guidelines.md)** — Review and archive deprecated guidelines

**Maintenance Prompts:**
* **[migrate-icons.md](../prompts/migrate-icons.md)** — Migrate from Lucide to Phosphor Icons
* **[cleanup.md](../prompts/cleanup.md)** — Enforce project standards across codebase
* **[update-triggers.md](../prompts/update-triggers.md)** — Update trigger registry and check circular references

**Utility Prompts:**
* **[process-reports.md](../prompts/process-reports.md)** — Organize reports, create task lists from audits
* **[status.md](../prompts/status.md)** — Project health dashboard, metrics, compliance check
* **[continue.md](../prompts/continue.md)** — Continue previous work session
* **[data-expansion.md](../prompts/data-expansion.md)** — Expand notice data for categories
* **[prompt-triggers.md](../prompts/prompt-triggers.md)** — Complete trigger word registry (v2.3.0)

**Note:** All prompts use trigger words. See `/prompts/prompt-triggers.md` for complete trigger reference.