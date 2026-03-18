# Architecture Diagrams — Nova Public Notices

Visual representations of the system architecture.

---

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Nova Public Notices                      │
│                  One Template Architecture                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │         Data-Driven Components          │
        │                                         │
        │  ┌──────────────┐  ┌─────────────────┐ │
        │  │  Categories  │  │  Design System  │ │
        │  │   (Data)     │  │  (CSS Vars)     │ │
        │  └──────────────┘  └─────────────────┘ │
        │                                         │
        │  ┌──────────────┐  ┌─────────────────┐ │
        │  │   Notices    │  │   Components    │ │
        │  │   (Data)     │  │  (Shared UI)    │ │
        │  └──────────────┘  └─────────────────┘ │
        └─────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │         Rendered Application            │
        │                                         │
        │  25 Categories × 2 Languages = 50 Pages │
        │         Using 2 Template Files          │
        └─────────────────────────────────────────┘
```

---

## Category Template Flow

```
User Request
    │
    ├── /category/tenders
    │       │
    │       ▼
    │   ┌───────────────────────────┐
    │   │  CategoryArchive.tsx      │ ◄── ONE template for all
    │   │  (English)                │
    │   └───────────────────────────┘
    │       │
    │       ├─► Get Category Config  ─────► categories.ts
    │       │                                   │
    │       │                                   ├─ slug: "tenders"
    │       │                                   ├─ name: { en, af }
    │       │                                   ├─ description: { en, af }
    │       │                                   └─ heroLayout: 'with-stats'
    │       │
    │       ├─► Filter Notices  ──────────► getNoticesByCategory()
    │       │                                   │
    │       │                                   └─► notices/tenders.en.ts
    │       │
    │       ├─► Generate Stats  ──────────► generateCategoryStatsData()
    │       │                                   │
    │       │                                   └─► Stats: {
    │       │                                         total: 1234,
    │       │                                         thisMonth: 45,
    │       │                                         thisWeek: 12
    │       │                                       }
    │       │
    │       └─► Build Hero Data  ─────────► HeroData: {
    │                                           title: "Tenders notices",
    │                                           layout: 'with-stats',
    │                                           size: 'lg'
    │                                         }
    │
    └─► Render with Shared Components
            │
            ├─► Layout (Header + Footer)
            ├─► Hero (with custom layout)
            ├─► StatsBlock
            ├─► NoticeGrid
            └─► AdSlot (Sidebar)
```

---

## Design System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   Design System Layers                      │
└─────────────────────────────────────────────────────────────┘

Layer 1: CSS Variables (theme-variables.css)
┌─────────────────────────────────────────────────────────────┐
│  :root {                                                    │
│    --nova-primary: #09082f;                                 │
│    --space-6: 1.5rem;                                       │
│    --text-lg: 24px;                                         │
│    --heading-h1-size: 60px;                                 │
│    --category-tenders-bg: #dbeafe;                          │
│  }                                                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
Layer 2: BEM Component Classes
┌─────────────────────────────────────────────────────────────┐
│  .wpn-hero {                                                │
│    padding: var(--space-6);                                 │
│    background: var(--background);                           │
│  }                                                          │
│                                                             │
│  .wpn-hero__title {                                         │
│    font-size: var(--heading-h1-size);                       │
│    color: var(--foreground);                                │
│  }                                                          │
│                                                             │
│  .wpn-hero--with-stats {                                    │
│    /* variant styling */                                    │
│  }                                                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
Layer 3: React Components
┌─────────────────────────────────────────────────────────────┐
│  <section className="wpn-hero wpn-hero--with-stats">        │
│    <h1 className="wpn-hero__title">                         │
│      {data.title}                                           │
│    </h1>                                                    │
│  </section>                                                 │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
Layer 4: Rendered UI
┌─────────────────────────────────────────────────────────────┐
│  Browser applies all CSS variables and renders final HTML   │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
App
└── Routes
    └── CategoryArchive (ONE template)
        │
        ├── Layout
        │   ├── Header
        │   │   ├── Logo
        │   │   ├── MainNav
        │   │   └── LanguageSwitcher
        │   │
        │   └── Footer
        │       ├── FooterNav
        │       ├── SocialLinks
        │       └── Copyright
        │
        ├── Hero (5 variants)
        │   ├── Breadcrumbs
        │   ├── Title
        │   ├── Description
        │   └── Actions (optional)
        │
        ├── StatsBlock
        │   └── StatItem (×3-4)
        │       ├── Icon
        │       ├── Value
        │       └── Label
        │
        ├── NoticeGrid
        │   └── NoticeCard (×12 per page)
        │       ├── Category Badge
        │       ├── Title
        │       ├── Excerpt
        │       ├── Meta (date, location)
        │       └── Link
        │
        ├── Pagination
        │   ├── Previous Button
        │   ├── Page Numbers
        │   └── Next Button
        │
        └── Sidebar
            └── AdSlot (×2)
```

---

## Data Flow Diagram

```
┌──────────────────┐
│  User Visits URL │
│ /category/tenders│
└────────┬─────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│  React Router                           │
│  Route: /category/:slug                 │
└────────┬────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│  CategoryArchive Component              │
│  const { slug } = useParams()           │
│  → slug = "tenders"                     │
└────────┬────────────────────────────────┘
         │
         ├───────────────────────────────────┐
         │                                   │
         ▼                                   ▼
┌──────────────────────┐         ┌──────────────────────┐
│  Get Category Data   │         │  Filter Notices      │
│                      │         │                      │
│  getCategoryBySlug() │         │ getNoticesByCategory │
│  ↓                   │         │  ↓                   │
│  categories.ts       │         │  notices/tenders.ts  │
│  ↓                   │         │  ↓                   │
│  {                   │         │  [notice1, notice2,  │
│    slug: "tenders",  │         │   notice3, ...]      │
│    name: {...},      │         │                      │
│    heroLayout: ...,  │         │                      │
│  }                   │         │                      │
└──────────┬───────────┘         └──────────┬───────────┘
           │                                │
           │                                │
           ▼                                ▼
┌──────────────────────────────────────────────────────┐
│  Build Component Props                               │
│                                                      │
│  heroData = {                                        │
│    title: category.name.en + " notices",            │
│    description: category.heroDescription?.en || ..., │
│    layout: category.heroLayout || 'default',        │
│    size: category.heroSize || 'md',                 │
│  }                                                   │
│                                                      │
│  stats = generateCategoryStatsData(slug, lang)       │
│                                                      │
│  paginatedNotices = notices.slice(start, end)        │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│  Render Shared Components                            │
│                                                      │
│  <Layout>                                            │
│    <Hero data={heroData} />                          │
│    <StatsBlock stats={stats} />                      │
│    <NoticeGrid notices={paginatedNotices} />         │
│    <Pagination />                                    │
│    <Sidebar />                                       │
│  </Layout>                                           │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│  Rendered Category Page                              │
│                                                      │
│  - Dynamic title and description                     │
│  - Custom hero layout (if configured)                │
│  - Category-specific stats                           │
│  - Filtered and paginated notices                    │
│  - Consistent UI across all categories               │
└──────────────────────────────────────────────────────┘
```

---

## File Dependency Graph

```
CategoryArchive.tsx
    │
    ├─► Import: Layout.tsx
    │       └─► Import: Header.tsx, Footer.tsx
    │
    ├─► Import: Hero.tsx
    │       └─► Import: Breadcrumbs.tsx
    │
    ├─► Import: StatsBlock.tsx
    │       └─► Import: StatItem (inline)
    │
    ├─► Import: NoticeGrid.tsx
    │       └─► Import: NoticeCard.tsx
    │
    ├─► Import: AdSlot.tsx
    │
    ├─► Import: Button.tsx (ui)
    │
    ├─► Import: Phosphor Icons
    │       └─► CaretLeft, CaretRight
    │
    ├─► Data: getCategoryBySlug()
    │       └─► From: categories.ts
    │
    ├─► Data: getNoticesByCategory()
    │       └─► From: search.ts
    │           └─► Uses: notices/*.ts
    │
    ├─► Helper: generateCategoryStatsData()
    │       └─► From: noticeHelpers.ts
    │
    └─► Styles: category-archive.css
            └─► Uses: theme-variables.css
```

---

## CSS Architecture Layers

```
┌─────────────────────────────────────────────────────────┐
│  /src/styles/index.css (Entry Point)                    │
└─────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  fonts.css  │  │tailwind.css │  │  theme.css  │
│  (Lexend)   │  │  (v4 base)  │  │  (imports)  │
└─────────────┘  └─────────────┘  └──────┬──────┘
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    │                     │                     │
                    ▼                     ▼                     ▼
            ┌──────────────┐   ┌──────────────────┐   ┌──────────────┐
            │theme-var.css │   │utility-classes  │   │  global.css  │
            │(CSS custom   │   │    .css         │   │  (base ele-  │
            │ properties)  │   │                 │   │   ments)     │
            └──────────────┘   └──────────────────┘   └──────────────┘
                    │
                    └─► Used by all component CSS files
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│components.css│  │category-     │  │search-       │
│              │  │archive.css   │  │results.css   │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

## Bilingual Route Structure

```
English Routes                  Afrikaans Routes
─────────────────────────────────────────────────────────

/                           →   /af
/category/:slug             →   /af/categorie/:slug
/notice/:slug               →   /af/kennisgewing/:slug
/search                     →   /af/soek
/contact                    →   /af/kontak
/about                      →   /af/oor
/sales                      →   /af/verkope
/submit-notice              →   /af/dien-kennisgewing-in

Components Used (Same for Both):
├── Layout
├── Hero
├── StatsBlock
├── NoticeGrid
└── Footer

Data Files:
EN: *.en.ts                     AF: *.af.ts
├── tenders.en.ts          →    ├── tenders.af.ts
├── estates.en.ts          →    ├── estates.af.ts
└── ...                         └── ...
```

---

## State Management Flow

```
┌────────────────────────────────────────────────────┐
│  URL State (React Router)                          │
│  /category/tenders?page=2                          │
└───────────────────┬────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────┐
│  Component State (useState)                        │
│  const [currentPage, setCurrentPage] = useState(1) │
└───────────────────┬────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────┐
│  Derived State (useMemo-like logic)                │
│  const totalPages = Math.ceil(total / perPage)     │
│  const paginatedNotices = notices.slice(...)       │
└───────────────────┬────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────┐
│  Render                                            │
│  <NoticeGrid notices={paginatedNotices} />         │
│  <Pagination current={page} total={totalPages} />  │
└────────────────────────────────────────────────────┘
```

---

## Component Communication

```
┌─────────────────────────────────────────────────────────┐
│  CategoryArchive (Parent)                               │
│                                                         │
│  Data:                                                  │
│  - category (from getCategoryBySlug)                    │
│  - notices (from getNoticesByCategory)                  │
│  - stats (from generateCategoryStatsData)               │
│  - heroData (computed)                                  │
│                                                         │
│  State:                                                 │
│  - currentPage                                          │
│  - paginatedNotices (derived)                           │
└───────────────┬─────────────────────────────────────────┘
                │
                ├─────────────────┐
                │                 │
                ▼                 ▼
        ┌───────────────┐  ┌──────────────┐
        │ Hero          │  │ StatsBlock   │
        │               │  │              │
        │ Props:        │  │ Props:       │
        │ - data        │  │ - stats      │
        │ - lang        │  │ - showIcons  │
        └───────────────┘  └──────────────┘
                │
                ▼
        ┌───────────────┐
        │ NoticeGrid    │
        │               │
        │ Props:        │
        │ - notices     │
        │ - lang        │
        │ - columns     │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ NoticeCard    │ (×12)
        │               │
        │ Props:        │
        │ - notice      │
        │ - lang        │
        └───────────────┘
```

---

## Adding a Category — Visual Flow

```
Step 1: Add to categories.ts
┌────────────────────────────────┐
│ {                              │
│   slug: "new-category",        │
│   name: { en: "...", af: "..."│
│   description: {...},          │
│   heroLayout: 'default',       │
│ }                              │
└────────────────────────────────┘
              ↓
Step 2: Add CSS colors (optional)
┌────────────────────────────────┐
│ --category-new-category-bg     │
│ --category-new-category-fg     │
│ --category-new-category-border │
└────────────────────────────────┘
              ↓
Step 3: Add notice data
┌────────────────────────────────┐
│ /data/notices/                 │
│   new-category.en.ts           │
│   new-category.af.ts           │
└────────────────────────────────┘
              ↓
✅ Done! Category works at /category/new-category
┌────────────────────────────────┐
│  Automatic rendering:          │
│  - Hero with title & desc      │
│  - Stats block                 │
│  - Notice grid                 │
│  - Pagination                  │
│  - Sidebar ads                 │
│  - Breadcrumbs                 │
└────────────────────────────────┘
```

---

## Legend

```
┌────────────────┐
│  Box           │  = Component, file, or system
└────────────────┘

      │
      ▼              = Data flow direction

─────►              = Alternative or additional flow

├──►                = Branch in decision tree

(×N)                = Multiple instances
```

---

**Last Updated:** 2026-03-17  
**Visual Guide Version:** 1.0
