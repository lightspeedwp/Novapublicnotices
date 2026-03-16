# Nova News Public Notices Portal Deep Research and Project Guidelines

## Context and scope for the prototype

Novus Media’s requirement is a dedicated **public notices portal/directory** under a dedicated WordPress install (planned as `novanews.co.za/notices`) with **WooCommerce + PayFast**, moderation/review before publishing, and full interface coverage in the prototype (homepage, search, category archives, single notice, registration/login, my account, submit notice, checkout/order confirmation, plus a sales explainer page). The site must be **bilingual (English + Afrikaans)** from day one, including translated UI strings and templates.

A critical strategic nuance: in South Africa, “public notices” are not merely “classifieds”; for many notice types they are part of statutory or regulated public participation / transparency processes (estate administration, insolvency, licensing, land use, EIAs, tenders). That has direct UX implications: **searchability, metadata completeness, proof of publication**, and in some cases **public/free accessibility**. citeturn1search1turn5search0turn7search2turn8search1turn1search3

## Competitor and adjacent landscape

### News24 Notices as the closest functional comparator

News24’s Notices area provides a mature pattern you can mirror: an archive with a left-side filter panel (keyword search, category filtering, location search, publication date range) and a results grid with category badges, truncated titles/snippets, dates, and locations. Their category set includes items like **Tenders**, **Business License**, **Town Planning**, **Insolvent Estates**, and others (helpful validation that your existing category list is “market-normal”). citeturn0search5

On individual notice pages, News24 uses a two-column layout: the full notice content on the left, and a structured “notice details” sidebar (often including reference numbers, deadlines, and contact details), plus a **Download** action (strong precedent for “print artefact / proof / attachment” support). citeturn0search0turn0search1

News24-style notices are not only on News24: the broader **Media24 network** pattern appears on other titles too (example: Daily Sun Notices with similar “published / download / objection period” structure). That matters because your true competitor set is often “publisher groups” not single sites. citeturn0search7

![News24 notices listing pattern](sandbox:/mnt/data/news24-public-notices-landing-page.png)

### Afrikaans-first competitor patterns from the supplied screenshots

You provided screenshots for an Afrikaans-first competitor that looks like a **legal notices portal** with:
- a dedicated landing page with a strong value proposition,
- a search/filter row (keyword, location, category, date),
- notice cards with category tags, reference numbers, publisher identity, and publish date,
- a “single notice” layout with a structured sidebar for metadata (publication date, applicant/licence number, etc),
- registration that supports a “publisher account” (law firm profile fields + logo).

The tooling here couldn’t reliably fetch the live competitor pages to cite them directly, so the above is derived from the screenshots you supplied (treat as directional UX input rather than a web-verified teardown).

![Afrikaans portal listing pattern from supplied screenshots](sandbox:/mnt/data/maroelamedia-public-notices-landing-page.png)

### Other key “competitors” that behave like substitutes

Even if Novus positions this as “a notices directory”, users’ substitute behaviours often include:

Government tender publication sources (tenders are a major “public notice” category). South Africa’s **eTender Publication Portal** is positioned as a single point of access for public-sector tenders and gives free access to opportunities. The SA Government tender page also directs users to the eTender portal and references National Treasury instruction context around publishing tenders. citeturn1search3turn1search5turn1search4turn1search6

Commercial/legal publishing and aggregation services for law firms and fiduciaries. Examples include:
- platforms positioning themselves around estate and insolvency notice publishing workflows, proof of publication, and bilingual (Afrikaans + English) requirements (important, because these businesses are also your potential “publishers” / advertisers). citeturn2search0turn5search0turn5search1
- gazette-access products like Sabinet Discover marketed as streamlining access to Government Gazette-based estate notices and alerts (more of an upstream “official source” aggregator, but it competes in the “find a notice quickly” space). citeturn2search9

## South African legal and compliance signals that affect UX and scope

This section translates statutory/official requirements into **product constraints** you should bake into templates, data modelling, IA, and moderation.

### Estates and insolvency drive “public, free, bilingual, archived” expectations

For deceased estates, the **Administration of Estates Act** requires a notice to creditors to be published in the **Gazette** and in one or more newspapers circulating in the relevant district(s), and the claim window must be **not less than 30 days and not more than three months** from the latest publication (with a lower-value estate carve-out). citeturn1search1  
This alone establishes why your portal needs: publish date, district/location, and a “deadline / last date for claims/objections” field in a structured way.

Separately, the Department of Justice site lists **Chief Master Directive 1 of 2025 – Placing of Online Estate Adverts**, effective from 13 Feb 2025 and read together with Directive 1 of 2020. citeturn5search0  
Summaries of that directive emphasise conditions that matter for product decisions, including the idea that online adverts can be acceptable where print is not feasible, provided the publication circulates in the relevant district, meets language requirements where prescribed, and is viewable online **for free** by interested parties. citeturn5search1turn5search2

For insolvency, the **Insolvency Act** contains multiple notice obligations. Two highly relevant signals for your UX/data model:
- Notice of surrender must be published in the **Gazette** and a newspaper in the relevant district, with timing constraints (“not more than 30 days and not less than 14 days” before the court date stated in the notice). citeturn7search2
- For certain creditor meeting notices, where publication occurs in a newspaper, it must take place **simultaneously in Afrikaans and English**, generally in newspapers circulating in the district and mainly in that language (with a stated exception where a bilingual newspaper exists). citeturn7search7

**Prototype implication:** a blanket rule like “users must log in to read notices” is potentially risky for categories influenced by the Chief Master Directive’s “free public viewing” expectation (even if login is free, it adds friction and could be argued to undermine public accessibility). At minimum, prototype an explicit **“access policy matrix” per notice type** (Public vs Account Required vs Restricted) and make it configurable.

### Licensing notices show “objection window + regulator contact” as core fields

Petroleum licensing is a strong exemplar of structured notice format.

The DMRE’s petroleum licensing process documentation includes an example notice pattern that explicitly states objections must be lodged within **20 working days** of publication, and that the notice includes the application number, purpose, where the application can be inspected, and where objections are lodged. citeturn0search48turn0search4  
News24’s petroleum-licence-style notices mirror this pattern with a clear “20 working days” objection period and regulator contact details. citeturn0search0turn0search2

**Prototype implication:** “objection deadline”, “inspection location”, “official body/regulator”, and “reference/application number” are not “nice-to-haves”; they are core to legal validity and user trust.

### Environmental and land use notices imply “public participation artefacts” and proof

Under South Africa’s EIA Regulations (as published on SAFLII), the public participation notice requirements include placing an advertisement in a **local newspaper** or suitable official gazette, and potentially also in broader provincial/national newspapers for wider-impact activities. citeturn8search1  
The regulation text makes it clear the notice should state the nature/location of the activity, where further information can be obtained, and how/where representations can be made. citeturn8search3

Land use/town planning requirements vary by municipality and province, but municipal by-laws are explicit that applications require public notices with objection windows. For example:
- An Ekurhuleni SPLUMA by-law extract requires publication in the **Provincial Gazette** and **two newspapers**, and objections/comments must allow **at least 28 days**. citeturn9search43
- An eThekwini Planning and Land Use Management by-law (on SAFLII) includes a 30-day objection period and describes what must be contained in notices and proof of publication requirements. citeturn9search3

**Prototype implication:** your submit flow should support attachments and proof artefacts (PDF of the final notice as published), plus a structured “public participation” metadata block for relevant categories.

### Tenders behave like public notices but have an official alternative

Government tenders must be advertised; provincial sources point to the **eTender portal** as a key publication channel and describe it as providing access to tenders across spheres of government. citeturn1search0turn1search3  
The eTender portal itself describes its mandate to support procurement principles and indicates it is managed by the Office of the Chief Procurement Officer. citeturn1search5

**Prototype implication:** for Tender notices, prioritise fields users actually filter by (tender number, organisation, province/area, closing date/time, briefing date, downloadable bid pack link), and consider “syndication/outbound linking” to official sources as a future enhancement.

### Data protection and “defamation moderation” are real product constraints

Public notices often include personal information (names, phone numbers, emails, ID numbers, addresses), so the portal is inherently a personal-data processing system. POPIA sets conditions for lawful processing including lawfulness, minimality, and purpose limitation. citeturn11search5turn11search0

**Prototype implication:** moderation tools are not only about defamation; they’re also about preventing accidental over-disclosure (e.g., unnecessary ID numbers) and ensuring “minimality” aligned to the purpose of publication.

## UX and prototype requirements distilled into system rules

### Search and filtering as a first-class experience

Competitors treat filtering as primary navigation, not an afterthought. Your existing plan to use faceted filtering is aligned with how WordPress ecosystems typically implement this. FacetWP explicitly supports facets built from custom fields, taxonomies, and post data, and it provides pagination/sorting options as part of its model. citeturn12search6turn12search1

In the prototype, make filters feel “structural”:
- Search by keyword (title/body)
- Category (dropdown + optional icon grid)
- Location (typeahead)
- Date of publication range
- Sorting (newest/oldest, optionally relevance)

### Payments and account model should mirror WooCommerce reality

WooCommerce’s PayFast gateway uses a redirect flow to PayFast for payment and returns the user to the site. citeturn12search2turn12search5  
If you later introduce subscription-like products (e.g., repeat publisher packages), WooCommerce’s Subscriptions renewal behaviour is well-defined (automatic vs manual renewal); PayFast guidance also notes tokenisation/recurring support patterns. citeturn12search3turn12search8

**Prototype implication:** support both “guest-to-checkout then account creation required” and “account-first”. However, your requirement says “all users must log in to view more than the homepage”. If that stays, prototype a clear sign-in wall that still doesn’t compromise the compliance-heavy categories (at minimum, show sufficient metadata publicly).

### Moderation and workflows must be explicit

Given your requirement for review to avoid defamatory content, the system should model these states clearly:
- Draft (in progress)
- Pending Review (submitted)
- Changes Requested (returned to submitter)
- Approved / Scheduled
- Published
- Archived (still accessible if required; visibility depends on category policy)

### Ads everywhere except checkout

This is straightforward to prototype as named “slots” per template. Keep the ad system aligned to *layout constraints* rather than hard-coded sizes (define min heights and responsive behaviour), but ensure the page scaffolding anticipates common leaderboard/sidebar placements.

## Guidelines.md and prompt files

The remainder of this report provides the actual **file contents** you asked for.

### File for `/guidelines/Guidelines.md`

```md
# Nova News Public Notices Portal — Project Guidelines (Figma Make)

This repo powers the Figma Make prototype for the Nova News Public Notices portal.

## Product definition

**Public notices** are legally significant announcements that must be publicly available and searchable. They are **not** “general classifieds”.
The product is a dedicated portal/directory that:
- lets the public find notices quickly (search + filters + archives)
- lets verified publishers / businesses / professionals submit notices
- supports sales-assisted “print + digital upsell” notices
- preserves a searchable archive (with category-based retention rules)

## Non-negotiables for the prototype

- **No infinite scroll.** Always use pagination on listings.
- **Search + filters are primary navigation** on archive and results templates.
- **Bilingual from day one**: every template and string has EN + AF.
- **Ads on every template** except: checkout, order confirmation.
- **Moderation required**: submitted notices never auto-publish without review.
- **Accessibility**: keyboard-first navigation, visible focus, AA contrast targets.
- Treat notice metadata as “legal data”: do not hide the core fields.

## Key IA routes (prototype must cover all)

### Public
- `/notices` (homepage / landing page)
- `/notices/search` (search results; filterable)
- `/notices/category/:slug` (category archive)
- `/notices/notice/:id/:category` (single notice; access policy applies)
- `/notices/contact`
- `/notices/sales` (sales explainer / “how it works”)

### Authentication
- `/notices/register`
- `/notices/login`
- `/notices/forgot-password`
- `/notices/reset-password`

### Account + commerce
- `/notices/my-account`
- `/notices/my-account/orders`
- `/notices/my-account/notices` (my submissions)
- `/notices/my-account/profile`
- `/notices/checkout`
- `/notices/order-confirmation`

### Submissions
- `/notices/submit` (entry point / choose journey)
- `/notices/submit/:category` (category-specific form)

## User roles and permissions

- **Public reader (guest)**: can see the homepage + browse teaser lists. May be required to sign in to read full notices depending on category policy.
- **Registered reader**: can view full notices (subject to policy), save searches, download attachments.
- **Publisher (self-serve)**: can submit notices, pay online, track status, respond to “changes requested”.
- **Sales rep**: can create notices on behalf of customers; can generate payment links or mark “paid offline”.
- **Moderator/Editor**: reviews, edits for compliance, approves/schedules/publishes, manages takedowns.
- **Admin**: config (categories, retention, access policies, ad slots, products).

## Access policy matrix (must exist in prototype)

Because some notice types must be publicly viewable, each category has an **Access Policy**:
- `public`: full notice viewable without login
- `account_required`: login required but free once registered
- `restricted`: internal-only / admin view

Prototype requirement:
- Implement the matrix UI in admin/moderation screens (even if it’s mock).
- Single notice template must render policy messaging consistently.

## Content model rules

Use the existing data model spec as the baseline (News24-aligned categories + fields).
Enhance where needed, but do not remove fields.

### Base fields (all categories)
- `title`
- `category`
- `body` (formatted legal text)
- `publish_date`
- `location` (city/town/province; store structured if possible)
- `reference_number` (or `application_number` where relevant)
- `publisher_name` (person/firm/organisation)
- `publisher_logo` (optional)
- `contact_name`, `contact_email`, `contact_phone` (policy-controlled visibility)
- `attachment` (PDF/JPG) + download action
- `language`: `en` or `af` with a linked translation record

### Category-specific fields
Each category must render:
- a validated form schema
- a “Notice Details” sidebar block (single template) showing the category-specific fields

Keep the master category schema in `/docs/data-model/public-notices.md`.

## Submission journeys (prototype must include both)

### Sales-assisted (print + digital upsell)
1. Sales rep creates notice (or uploads the supplied print artwork/PDF)
2. Notice is stored as `pending_review`
3. Editor reviews and publishes/schedules
4. Payment recorded as:
   - `paid_offline` (invoice/EFT/cash) OR
   - “payment link sent” -> paid online

### Self-serve (digital-only)
1. User selects category
2. Completes guided form + uploads attachment (optional)
3. Pays via WooCommerce + PayFast
4. Status becomes `pending_review` (never auto-publish)
5. Editor:
   - approves -> publish/schedule
   - requests changes -> user edits and resubmits

## Moderation and compliance rules

- Always capture an “editorial audit trail”:
  - who approved
  - when published
  - what changed (high level)
- Add a “Report this notice” action on single notices (routes to contact form with prefilled notice ID).
- Provide takedown capability:
  - `unpublish` -> `archived` with reason
  - retain internal record for audit

## Search and filtering requirements

- Filters must be available on:
  - `/notices` (homepage listing)
  - `/notices/search`
  - `/notices/category/:slug`
- Filters:
  - keyword (title + body)
  - category
  - location
  - publication date range
  - sort by date (newest/oldest)
- Pagination always visible; show result count + “clear filters”.

## Bilingual requirements (English + Afrikaans)

- Store EN and AF as **paired records** (linked by a shared `notice_group_id`).
- UI strings must be in i18n files:
  - `/src/i18n/en.json`
  - `/src/i18n/af.json`
- Afrikaans tone: formal/official (government-adjacent register). Avoid slang/colloquialisms.

Translation guardrails:
- Never translate:
  - reference/application numbers
  - case numbers
  - identity/registration numbers
  - legal citations and act numbers
- Keep address formatting consistent across languages
- If only one language is supplied, mark the other as `missing_translation` and surface that in moderation.

## Design system alignment

Use the Novus Media design system variables first.
Key anchors (from Figma variables):
- Primary colour: `#09082f`
- Accent colour: `#d70025`
- Body font: Inter
- Primary/brand font: Lexend
- Heading font: Raleway
- Base radius: 8

## Layout and CSS rules

- Prefer Tailwind utilities, but expose final values via CSS variables for WordPress alignment.
- Enforce a **no-margin policy**: use `gap` and padding.
- Support dark mode and light mode; both must be accessible.

## Ads and slots

- Every template except checkout/order confirmation includes ad slots.
- Standardise slot naming:
  - `ad_top_leaderboard`
  - `ad_sidebar_1`
  - `ad_sidebar_2`
  - `ad_in_content_1`
  - `ad_footer`
- Prototype must show placeholders with min-height + responsive behaviour.

## Repo structure and guardrails

### Authoritative folders
- `/guidelines/` → rules and standards (this file is the entry point)
- `/docs/` → product specs and reference docs
- `/prompts/` → reusable AI prompts (see trigger words)
- `/tasks/` → task lists and master task list
- `/reports/` → audit reports and QA outputs
- `/scripts/` → automation scripts only (.js/.ts/.py/.sh)
- `/src/` → implementation

### Deletion guardrails
- Never delete files unless:
  1) the content has been migrated/merged successfully AND
  2) references/routes/imports have been updated AND
  3) changelog updated with the deletion summary

Protected files (never delete):
- `/routes.ts`
- `/guidelines/Guidelines.md`
- `/tasks/task-list.md`
- `/prompts/cleanup.md`
- `/prompts/continue.md`
- `/prompts/prompt-triggers.md`

## Trigger words

See `/prompts/prompt-triggers.md`.
Typing `cleanup` runs the cleanup prompt (and then `continue`).
Typing `continue` runs the continue prompt on its own.

## Figma Make environment reminders

- Always behave as if you are operating inside Figma Make.
- Do not suggest “refresh the browser” or “clear cache”.
- Make changes by editing files and components in-repo.
```

### File for `/prompts/prompt-triggers.md`

```md
# Prompt triggers

These triggers map short commands to prompt files.

## Triggers

- `cleanup` → `/prompts/cleanup.md` (must be followed by `continue`)
- `continue` → `/prompts/continue.md` (can run alone)

## How to use

When the user types only the trigger word:
1) Open and follow the linked prompt file exactly.
2) Do not ask for multi-session approvals; complete the prompt in one pass.
3) Apply deletion guardrails from `/guidelines/Guidelines.md`.

## Safety guardrails

- Never delete protected files.
- Never delete reports older than 7 days unless you have read them and confirmed the issues are resolved.
- Never delete a task list unless all tasks are marked done AND the master task list is updated.
```

### File for `/prompts/cleanup.md`

```md
# Cleanup prompt (single-session)

You are working in the **Figma Make environment**. Do NOT suggest refreshing the browser or clearing cache.

Goal: run a complete repo audit + cleanup in ONE session, then close out with a concise summary.

## Pre-flight
1) Read `/guidelines/Guidelines.md` and follow all guardrails.
2) Identify the repo’s routing entry points and build system configuration.

## Audit and fix (in this order)

### Routes audit
1) Open `/routes.ts`.
2) Verify every route listed in `/guidelines/Guidelines.md` exists.
3) Add any missing routes; ensure names/slugs match.
4) Confirm route components/pages exist and are imported correctly.

### Import + asset audit
1) Scan `/src/` for broken imports (CSS/JS/components).
2) Fix or remove unused imports.
3) Ensure stylesheet imports are consistent and build-safe.

### Root folder cleanup
1) Identify clutter in repo root (temporary files, duplicates, outdated notes).
2) Move documentation into the correct folder (`/docs`, `/guidelines`, `/reports`, `/tasks`, `/prompts`).
3) Delete only when deletion guardrails are satisfied.

### Changelog
1) Update `/CHANGELOG.md` (or create it if missing).
2) Add an entry for:
   - routes fixed/added
   - files moved
   - files deleted (with reason)
   - key bugs resolved

## Reports and tasks hygiene

### Reports cleanup (strict rules)
1) Review `/reports/`.
2) Identify reports older than 7 days.
3) For each candidate report:
   - read it
   - verify whether each issue is resolved in the current codebase
   - if resolved, archive summary into the changelog and delete the report
   - if unresolved, keep the report and create/update tasks

### Tasks cleanup
1) Review `/tasks/` and `/tasks/task-list.md` (master list).
2) Delete completed task list files ONLY if:
   - all tasks are completed
   - task-list.md reflects completion
   - any learnings are copied into guidelines/docs
3) Ensure the master task list accurately reflects “done / in progress / blocked”.

## Orchestrator capability
If `/prompts/orchestrator.md` does not exist, create it.

Orchestrator responsibilities:
- process every report in `/reports/`
- convert findings into tasks (new task lists or updates to existing ones)
- ensure `/tasks/task-list.md` is the single source of truth

Then run the orchestrator logic once during this cleanup session:
- update task lists
- tick off completed tasks
- add new tasks for unresolved issues

## Site map + devtools
1) Update the site map page (if it exists) to reflect current `/routes.ts`.
2) Update any devtools pages with latest values from the codebase (routes, env flags, feature toggles, ad slots).

## Close out (required output)
Produce:
1) A short “What changed” summary
2) A list of deleted files (and why each was safe to delete)
3) A list of remaining open tasks (with pointers to task files)
4) A confirmation that protected files were not deleted
```

### File for `/prompts/continue.md`

```md
# Continue prompt

You are working in the **Figma Make environment**. Do NOT suggest refreshing the browser or clearing cache.

Goal: resume work on the next highest-value incomplete task without needing extra context.

## Steps
1) Open `/tasks/task-list.md` and identify:
   - the highest-priority task list with incomplete tasks
   - the next incomplete task inside it
2) Open the referenced task list file and execute the next task end-to-end.
3) As you complete tasks:
   - mark them done in the task file
   - update `/tasks/task-list.md`
   - update `/CHANGELOG.md` when changes are meaningful
4) If you hit ambiguity:
   - choose the safest default that preserves compliance, accessibility, bilingual support, and the no-infinite-scroll rule
   - document the decision in the task file and changelog

## Guardrails
- Do not delete files unless all deletion guardrails are satisfied.
- Do not create new folders unless they match the repo structure rules in `/guidelines/Guidelines.md`.
- Keep changes small and reversible; generate follow-up tasks rather than large refactors.
```

## Why these guidelines and prompts are aligned with the research

The guidelines intentionally elevate “accessibility + archival + structured metadata” because South African notice regimes commonly require publication in official channels (Gazette + newspaper), defined objection/claim windows, and, in some contexts, bilingual publication (Afrikaans + English). citeturn1search1turn7search2turn7search7turn0search48turn8search1

They also deliberately include an **access policy matrix** as a first-class concept because the Justice Department’s Chief Master Directives indicate that online estate adverts can be acceptable and are framed around public accessibility (commonly summarised as “viewable online for free” and district relevance). citeturn5search0turn5search1turn5search2

Finally, the prompts are shaped to preserve operational stability: WordPress/WooCommerce implementations tend to sprawl without strict folder/location rules, and the cleanup/continue loop is designed to prevent silently accumulating broken routes/imports and stale reports/tasks. The faceted-filter assumption is grounded in common WordPress practice and in FacetWP’s documented model (facets from custom fields/taxonomies + templates + pagination/sorting). citeturn12search6turn12search1