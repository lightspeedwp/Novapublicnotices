Ash,

* **Value:** I’ve turned your brief into a repo-ready `Guidelines.md` that covers dynamic pages, data files, root-folder guardrails, bilingual content, no-inline-styles, WordPress-aligned CSS classes, moderation, ads, and WooCommerce-aligned account and checkout flows.
* **Risk:** there is a hard tension between “homepage only is public” and the legal/public nature of notices, so I’ve kept that as a configurable compliance rule in the guidelines rather than pretending it is settled.
* **Next step:** paste the file below into `/guidelines/Guidelines.md`, then use it as the source of truth for the next build pass.

A few things I aligned this to before drafting:

* The repo is a Vite React app using React Router and a shared styles entrypoint, so the guidelines are written for that setup rather than a generic stack.    
* Your existing prototype already has a theme token layer in `src/styles/theme.css`, so the new rules build on CSS variables and semantic classes instead of introducing a second styling system.  
* The uploaded standards already push toward centralised data, no hard-coded values, and keeping reports out of the root, so I adapted those patterns directly for this project.     

## 1. Paste this into `/guidelines/Guidelines.md`

````md
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
````

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

---

## 14) Ads

Ads must be supported on every major template except:

* checkout
* order confirmation

Include realistic ad placeholders and reserved layout areas for:

* leaderboard
* MPU / sidebar
* inline content slots
* mobile placements where relevant

Ad placeholders must not break reading of legal content.

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

## 19) Protected files and folders

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

## 20) Immediate follow-on files to create after this one

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

```

## 2. Notes for implementation

1. Your inherited guidance already pushes toward modular, typed data files and away from inline page data, so I baked that in as a hard project rule. :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12} :contentReference[oaicite:13]{index=13}
2. I made the styling rule stricter than the inherited examples: not just “use CSS variables”, but “do not use inline visual styling at all unless it is a rare computed exception”. That is consistent with your WordPress-aligned implementation goal and the uploaded build rules that already prohibit hard-coded pixel and hex values. :contentReference[oaicite:14]{index=14} :contentReference[oaicite:15]{index=15}
3. The single-notice structure assumes a metadata-dense legal layout informed by the competitor notice artefact you attached, especially the title + legal body + detail sidebar pattern. :contentReference[oaicite:16]{index=16}

## 3. Small but important refinement

Your brief says both:
- “members of public only browse”
- and “all users will need to login to view more than the homepage”

I would keep the guidelines exactly as above for now:
- homepage public
- all deeper notice content defaulted to logged-in variants in prototype
- access policy marked as configurable pending legal review

That keeps the prototype aligned to your stated preference without locking the product into a potentially risky legal assumption.

Next, I’d write the matching `/prompts/cleanup.md`, `/prompts/continue.md`, and `/prompts/prompt-triggers.md` so the repo can run from these rules cleanly.
```
