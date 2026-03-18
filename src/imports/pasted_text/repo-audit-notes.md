Ash,

* **Value:** I audited the key routing, layout, page, search, button, and data files, and there are a few structural issues that explain the mixed-language behaviour and weak search.
* **Risk:** the biggest problems are **locale switching**, **hard-coded styling**, and a **thin data model**. Those three will keep causing drift until they are fixed at system level.
* **Next step:** use the prompt below as the next repo-refinement prompt for the coding AI, not as a design brief.

## 1. Audit summary

1. **Locale architecture exists, but locale switching is wrong.**
   The repo has separate English and Afrikaans routes in `src/app/routes.tsx`, including `/search` vs `/af/soek`, `/sales` vs `/af/verkope`, `/contact` vs `/af/kontak`, `/submit` vs `/af/indien`, `/login` vs `/af/aanmeld`, and `/my-account` vs `/af/my-rekening` .
   But `Layout.tsx` builds Afrikaans nav links with `basePath + "/search"`, `"/sales"`, `"/contact"`, `"/submit"`, `"/login"`, `"/register"`, and `"/my-account"`, and the language switcher only flips to `/af` or `/` rather than the equivalent current page .
   That is the main reason the language experience is inconsistent.

2. **The sitemap already mixes languages on the same page.**
   The English sitemap explicitly contains an “Afrikaans” section linking to Afrikaans pages, so the English page is not language-pure .
   The Afrikaans sitemap is cleaner, but the system should not render mixed-language public pages at all .

3. **Search UI is mostly visual, not truly dynamic yet.**
   `SearchResults.tsx` renders `sampleNotices` directly, with fixed `currentPage`, fixed `totalPages`, and no real query or filter pipeline .
   `SearchFilterBar.tsx` keeps UI state locally, but the search box, category, location, sort, and date filters are not wired into a reusable locale-aware search engine or route query state .

4. **The data model is still too shallow for a legal notices product.**
   `sampleNotices.ts` is better than flat mock content because it has bilingual title/body/excerpt fields, but it still uses a generic `fields?: Record<string, string>` rather than typed per-category field definitions .
   `categories.ts` currently covers only a subset of notice categories and does not define field schemas, archive rules, template mapping, or taxonomy-level behaviour .

5. **Styling is not aligned to your implementation rules yet.**
   Key pages and layout use Tailwind utilities with arbitrary hex values like `bg-[#09082f]`, `bg-[#d70025]`, `text-[#09082f]`, and similar patterns in page code rather than semantic classes and page/component CSS   .
   The shared button component defines only a fairly light size system, and pages then override button appearance ad hoc with extra class strings, which weakens presets and consistency .

6. **Single notice behaviour is still prototype-level, not system-level.**
   `SingleNotice.tsx` uses mock auth from `localStorage`, falls back to the first notice if no ID matches, and renders generic “additional information” from arbitrary field keys instead of a typed notice-template system .

## 2. Repo refinement prompt

Paste this into the coding AI working on the repo:

```md
You are working in the `lightspeedwp/Novapublicnotices` repository.

Your task is to refine the current prototype into a stronger multilingual, data-driven public notices product prototype.

## Context and priorities

This is a **multilingual public notices portal**, not a generic classifieds site.

The most important fixes are:

1. clean multilingual architecture
2. stronger data model for notices, taxonomies, templates, and fields
3. dynamic locale-aware search
4. preset button styles with better padding
5. removal of ad hoc Tailwind/arbitrary visual styling in page files
6. clearer separation of page-level CSS using BEM naming conventions

## Non-negotiable rules

- Do not mix English and Afrikaans on the same public-facing page.
- If English is active, only English UI and English content should render.
- If Afrikaans is active, only Afrikaans UI and Afrikaans content should render.
- The language switcher must switch to the equivalent page in the other locale, not to the homepage.
- No inline visual styling.
- No arbitrary hex colours in TSX.
- No font values in TSX.
- No page-level styling via utility sprawl where reusable CSS classes are more appropriate.
- All custom CSS must use BEM naming.
- Prefer separate CSS files per page and per major component where it improves maintainability.
- Continue using shared tokens / CSS variables, but expose them through semantic classes.
- Search must only return content from the active locale.
- Search must cover all searchable fields in the data files.
- Do not leave mixed-language sitemap or mixed-language content states in public pages.

## Audit and fix these existing issues first

### 1) Locale routing and switching
Refactor locale handling so the site has a single locale-aware route map.

Create a route-locale mapping layer that:
- maps English routes to Afrikaans equivalents
- maps Afrikaans routes back to English equivalents
- supports current-page locale switching

Examples:
- `/search` ↔ `/af/soek`
- `/sales` ↔ `/af/verkope`
- `/contact` ↔ `/af/kontak`
- `/submit` ↔ `/af/indien`
- `/login` ↔ `/af/aanmeld`
- `/register` ↔ `/af/registreer`
- `/my-account` ↔ `/af/my-rekening`
- `/notice/:id` ↔ `/af/kennisgewing/:id`
- `/category/:slug` ↔ `/af/kategorie/:slug`

Fix all navigation, footer links, CTAs, breadcrumbs, sitemap links, and the language switcher to use this mapping.

### 2) Remove mixed-language rendering
Audit all public pages and remove any mixed-language content.

Specific rule:
- English pages must not contain Afrikaans sections
- Afrikaans pages must not contain English sections

Refactor the sitemap so:
- English sitemap contains only English content and English routes
- Afrikaans sitemap contains only Afrikaans content and Afrikaans routes

### 3) Move page copy into locale data files
Refactor page content so pages do not hard-code user-facing copy where it should live in data files.

Create or expand a structure like:

- `src/app/data/site/`
- `src/app/data/pages/`
- `src/app/data/notices/`
- `src/app/data/locales/`
- `src/app/data/taxonomies/`
- `src/app/data/templates/`

Use paired locale files where appropriate, for example:
- `home.en.ts`
- `home.af.ts`
- `sales.en.ts`
- `sales.af.ts`
- `contact.en.ts`
- `contact.af.ts`

### 4) Define a proper notices data model
Create a clear typed data model for:

#### Notice core
- id
- slug
- categorySlug
- templateKey
- status
- accessPolicy
- publishDate
- archiveDate
- expiryDate
- language
- location
- province
- municipality
- publisher
- referenceNumber
- attachments
- sourceType

#### Locale content
- title
- excerpt
- body
- seoTitle
- seoDescription
- CTA labels where relevant

#### Category / taxonomy
- slug
- labels by locale
- descriptions by locale
- archive title by locale
- archive intro by locale
- icon
- template key
- archive config
- search facet config
- default sort
- retention rule
- access rule

#### Field definitions
Create typed field definitions for category-specific metadata such as:
- tender number
- deadline
- case number
- court name
- estate number
- municipality
- licence number
- property description
- application number
- applicant name
- company name
- ID number
- contact details
- objection deadline

Each field definition should support:
- key
- label.en
- label.af
- type
- required
- searchable
- filterable
- archive visibility
- single template visibility
- formatter
- validation hints

### 5) Define template mapping
Create explicit mapping for:
- single notice templates
- category archive templates

At minimum define template families such as:
- tender
- estate
- liquor licence
- town planning
- business / petroleum licence
- environmental
- court / legal
- general notice

Do not keep category-specific rendering as a loose `Record<string, string>` dump.

### 6) Rebuild search as a locale-aware data search layer
Implement a reusable search module that:
- searches the active locale only
- searches title
- searches excerpt
- searches body
- searches reference number
- searches location
- searches publisher
- searches category labels
- searches searchable field values

Support:
- keyword
- category
- location
- province
- date range
- sort order
- access policy
- status where needed

Search results should:
- read from route query params
- update route query params on filter changes
- produce stable results
- support pagination
- never mix EN and AF results

### 7) Refactor styling system
Move custom page styling away from Tailwind-heavy visual styling in TSX.

Requirements:
- keep design tokens / CSS variables in shared styles
- use BEM naming for custom CSS
- use page-level CSS files where appropriate
- use component-level CSS files where appropriate
- remove arbitrary hex classes from TSX
- replace font and colour styling in TSX with semantic classes
- create WordPress-aligned semantic classes for colours, fonts, spacing, and buttons

Examples:
- `.has-primary-color`
- `.has-accent-color`
- `.has-base-color`
- `.has-primary-background-color`
- `.has-body-font-family`
- `.has-heading-font-family`
- `.wpn-button`
- `.wpn-button--primary`
- `.wpn-button--secondary`
- `.wpn-button--outline`
- `.wpn-button--large`
- `.wpn-button--small`

### 8) Strengthen button presets
Refactor the button system so it has stronger presets and more generous padding.

Create a preset button system covering:
- primary
- secondary
- tertiary
- outline
- ghost
- destructive
- link

And sizes:
- xs
- sm
- md
- lg
- xl

Requirements:
- larger horizontal padding than current implementation
- consistent icon spacing
- consistent focus states
- consistent disabled states
- semantic class hooks
- no page-level button restyling with arbitrary colours unless documented

### 9) Improve single notice and archive UX
Refactor single notice and category archive pages to use the new data model.

For single notice:
- render typed field groups
- render category-specific metadata blocks
- render locale-specific content only
- keep login gating configurable
- support archive and expiry states cleanly

For category archive:
- render category-level intro content from locale data
- render cards from locale-specific notice content
- show only matching locale content

### 10) Authentication states
Keep auth prototype-friendly, but isolate it properly.
Do not leave scattered mock auth checks inside page components if they can be moved into a clearer guard/pattern.

## Deliverables

1. Refactor the codebase toward the structure above.
2. Preserve existing working routes where possible while fixing locale correctness.
3. Create the missing locale-aware data files.
4. Create the typed data model files.
5. Refactor search into a reusable locale-aware search utility.
6. Refactor the styling system toward BEM and semantic classes.
7. Refactor buttons into stronger presets.
8. Fix the sitemap and language switcher behaviour.
9. Output a concise report containing:
   - files created
   - files updated
   - files deleted
   - remaining gaps
   - any content that still needs Afrikaans translation
   - any route or data-model decisions that need human review

## Important implementation guardrails

- Do not create stray markdown files in the repo root.
- Do not remove important files unless their replacement is already in place.
- Do not leave any public page with mixed English and Afrikaans.
- Do not use inline styles.
- Do not use arbitrary hex colour utilities in TSX for new or refactored work.
- Do not hard-code page copy when it belongs in a locale data file.
```

## 3. Target data model to anchor the refactor

Use this as the target shape:

1. **Taxonomies**

   * `NoticeCategory`
   * `Province`
   * `Municipality`
   * `NoticeStatus`
   * `AccessPolicy`
   * `SourceType`
   * `TemplateKey`

2. **Notice core record**

   * stable shared fields, no locale text baked in

3. **Notice locale record**

   * `title`, `excerpt`, `body`, SEO, translated field labels where needed

4. **Field schema registry**

   * per category/template, with required/searchable/filterable/display flags

5. **Template registry**

   * maps category → archive template + single template + visible field groups

6. **Search index adapter**

   * generates locale-specific searchable text for EN or AF only

That gets you out of the current “good mock data, weak production structure” state.

## 4. One extra recommendation

The cleanest fix for the language problem is to stop thinking in terms of separate page components first, and think in terms of:

* locale-aware route map
* locale-aware data files
* shared templates
* only split page components where layout truly differs

Right now the repo has both duplicated pages and incorrect locale navigation, which is giving you the worst of both worlds.
