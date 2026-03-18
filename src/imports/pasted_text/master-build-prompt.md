Ash,

* **Value:** below is a ready-to-paste **master build prompt** for Figma Make that tells it what to build, in what order, and how to use your guidelines as the source of truth.
* **Risk:** I’ve kept **retention, access, and compliance-sensitive behaviour configurable**, so the prototype does not hard-code legal assumptions too early.
* **Next step:** paste this into Figma Make after your `/guidelines/Guidelines.md` exists, then let it build the first full pass.

## 1. Ready-to-paste master prompt

```md
You are working inside the **Figma Make environment** on a brand-new prototype for the **Nova News Public Notices Portal**.

Your job is to build the prototype **from nothing to something** using the project guidelines as the source of truth.

## First: read and obey these files

1. `/guidelines/Guidelines.md`
2. Any linked files inside `/guidelines/`
3. Any linked files inside `/guidelines/design-tokens/`

Treat those guideline files as the primary specification.
Do not ask me to refresh the browser or clear cache.
Do not stop at wireframes.
Do not produce only a plan.
Build the actual prototype screens, components, flows, and structure.

## Product framing

This is a **Public Notices Portal** and **searchable public notices directory** for Nova News / Novus Media.
It is **not** a generic classifieds site.

The prototype must support:
- public notice discovery for the general public
- self-serve digital-only submissions
- sales-assisted print + digital submissions
- moderation and review before publication
- ecommerce flow using WooCommerce + PayFast patterns
- bilingual English + Afrikaans UI from day one

## Core operating rules

Use `/guidelines/Guidelines.md` as the source of truth for:
- information architecture
- template requirements
- design system rules
- component behaviour
- bilingual requirements
- ad placement rules
- no-infinite-scroll rule
- no-margin layout rule
- moderation workflow
- archive and retention assumptions

Where compliance or retention rules are still uncertain:
- do **not** hard-code one legal outcome
- create configurable variants and label them clearly
- keep public/archive/access behaviour componentised so it can be changed later

## Visual direction

Use the existing Nova News design system and variables first.
Align the prototype to Nova News visual language, not to competitor branding.

Use the competitor references only for:
- metadata density
- search/filter prominence
- two-column single notice structure
- registration and publisher-account ideas
- clear legal-content presentation

Do not copy competitor branding, colours, wording, or layouts verbatim.

## Build order

Build in this exact order:

### Phase 1 — Foundations
Create the shared prototype foundations first:
- colour styles / tokens
- typography styles / tokens
- spacing system
- radius, borders, shadows
- button system
- form controls
- notice category badges
- pills / tags
- cards
- metadata list items
- pagination
- tabs
- alerts / notices / system messages
- modal patterns
- ad slot placeholders
- bilingual language switcher
- header + footer
- search/filter bar
- account sidebar / account nav
- empty states
- error states
- success states

Apply these layout rules:
- use **gap and padding**, not margin
- mobile-first responsive logic
- accessible contrast
- visible focus states
- touch-friendly targets
- reusable components only

### Phase 2 — Global page shell
Create the reusable shell used across the portal:
- top navigation
- utility navigation
- language switcher
- breadcrumb pattern
- page header pattern
- content container system
- sidebar system
- footer
- ad slot placements
- login wall pattern
- “not available in this language” pattern
- “archived notice” pattern
- “expired notice” pattern
- “pending moderation” pattern

### Phase 3 — Public browsing pages
Create these public-facing templates first in **English**, then create full **Afrikaans** variants:

1. `EN / Home`
2. `AF / Home`

Home must include:
- hero with clear value proposition
- primary search entry point
- prominent filters
- featured / recent notices
- category shortcuts
- explanation of what public notices are
- explanation of how to place a notice
- clear CTA paths:
  - browse notices
  - submit a notice
  - contact sales
  - login / register

3. `EN / Search Results / Default`
4. `AF / Search Results / Default`
5. `EN / Search Results / Filtered`
6. `AF / Search Results / Filtered`

Search results must include:
- keyword search
- category filter
- location filter
- date range filter
- sort by date
- result count
- clear filters action
- pagination
- notice cards with:
  - title
  - category badge
  - publish date
  - location
  - reference number
  - excerpt
  - publisher / business name where relevant

7. `EN / Category Archive`
8. `AF / Category Archive`

Use one shared archive shell, but make category-specific metadata modules available.

### Phase 4 — Single notice experience
Create these notice-detail screens:

9. `EN / Single Notice / Public Access`
10. `AF / Single Notice / Public Access`
11. `EN / Single Notice / Login Required`
12. `AF / Single Notice / Login Required`
13. `EN / Single Notice / Logged In`
14. `AF / Single Notice / Logged In`
15. `EN / Single Notice / Archived`
16. `AF / Single Notice / Archived`
17. `EN / Single Notice / Expired`
18. `AF / Single Notice / Expired`

Single notice template must include:
- title
- category badge
- publish date
- location
- reference / application number
- body content
- structured notice details sidebar
- attachment / download area
- share action
- related notices
- ad slots
- notice status messaging where relevant

The default single notice layout should be:
- main legal content on the left
- metadata / details / actions in the right sidebar
- support long-form body copy cleanly
- support downloadable PDF / image notice artefacts

Also create category modules for:
- tenders
- estates
- town planning
- liquor licences
- petroleum / business licence style notices
- court / legal matters
- general notices
- environmental / EIA notices

Do **not** make 25 unrelated page layouts.
Instead:
- create **one strong shared single template**
- add **category-specific modules and field groups**
- create variants only where the layout materially changes

### Phase 5 — Contact, sales, auth
Create these pages next:

19. `EN / Contact`
20. `AF / Contact`

21. `EN / Sales Landing`
22. `AF / Sales Landing`

The sales landing page must explain:
- what a public notice is
- print-only vs print + digital
- digital-only self-serve
- moderation and review
- timelines
- payment expectations
- who should use sales instead of self-serve
- CTA to contact sales

23. `EN / Register / Individual`
24. `AF / Register / Individual`
25. `EN / Register / Organisation`
26. `AF / Register / Organisation`
27. `EN / Login`
28. `AF / Login`
29. `EN / Forgot Password`
30. `AF / Forgot Password`
31. `EN / Reset Password`
32. `AF / Reset Password`

Auth must support:
- normal users
- organisation / law firm / business publisher accounts
- bilingual labels and system messages
- clean validation states
- clear account type distinction

### Phase 6 — My Account
Create these account pages:

33. `EN / My Account / Dashboard`
34. `AF / My Account / Dashboard`
35. `EN / My Account / My Notices`
36. `AF / My Account / My Notices`
37. `EN / My Account / Notice Detail / Draft`
38. `AF / My Account / Notice Detail / Draft`
39. `EN / My Account / Notice Detail / Pending Review`
40. `AF / My Account / Notice Detail / Pending Review`
41. `EN / My Account / Notice Detail / Changes Requested`
42. `AF / My Account / Notice Detail / Changes Requested`
43. `EN / My Account / Notice Detail / Published`
44. `AF / My Account / Notice Detail / Published`
45. `EN / My Account / Orders`
46. `AF / My Account / Orders`
47. `EN / My Account / Profile`
48. `AF / My Account / Profile`
49. `EN / My Account / Organisation Profile`
50. `AF / My Account / Organisation Profile`

My Account must support:
- dashboard overview
- notices by status
- order history
- profile editing
- saved organisation details
- saved billing info
- uploaded files
- moderation messages
- invoice / payment visibility

### Phase 7 — Submission flow
Create a complete self-serve submission system.

Build these screens:

51. `EN / Submit Notice / Entry`
52. `AF / Submit Notice / Entry`
53. `EN / Submit Notice / Category Picker`
54. `AF / Submit Notice / Category Picker`

Then create category-specific form variants for every major schema group in the spec.
At minimum create full working submission form screens for:

55. `EN / Submit / Tender`
56. `AF / Submit / Tender`
57. `EN / Submit / Estate`
58. `AF / Submit / Estate`
59. `EN / Submit / Liquor Licence`
60. `AF / Submit / Liquor Licence`
61. `EN / Submit / Town Planning or EIA`
62. `AF / Submit / Town Planning or EIA`
63. `EN / Submit / Petroleum or Business Licence`
64. `AF / Submit / Petroleum or Business Licence`
65. `EN / Submit / General Notice`
66. `AF / Submit / General Notice`

Also create reusable component patterns so the remaining categories can be assembled from:
- shared field groups
- category-specific field blocks
- document upload blocks
- identity / organisation blocks
- billing blocks
- review panels

Then add:

67. `EN / Submit / Upload Documents`
68. `AF / Submit / Upload Documents`
69. `EN / Submit / Review Before Payment`
70. `AF / Submit / Review Before Payment`
71. `EN / Submit / Success Before Moderation`
72. `AF / Submit / Success Before Moderation`

The submission flow must make it clear:
- payment does not mean instant publication
- every notice goes through review
- changes may be requested
- proof and attachments may be required
- category-specific fields are mandatory where relevant

### Phase 8 — Ecommerce and checkout
Create these pages:

73. `EN / Checkout`
74. `AF / Checkout`
75. `EN / PayFast Redirect or Processing`
76. `AF / PayFast Redirect or Processing`
77. `EN / Order Confirmation`
78. `AF / Order Confirmation`

Checkout must include:
- product summary
- notice summary
- billing details
- company details
- payment method
- legal acknowledgement
- moderation disclaimer
- publication disclaimer

Important:
- **No ads** on checkout
- **No ads** on order confirmation

### Phase 9 — Internal sales-assisted and moderation flows
Create internal or staff-facing screens for the operational flow.

79. `EN / Sales-Assisted / Create Notice`
80. `AF / Sales-Assisted / Create Notice`
81. `EN / Moderation Queue`
82. `AF / Moderation Queue`
83. `EN / Moderation / Review Notice`
84. `AF / Moderation / Review Notice`
85. `EN / Moderation / Request Changes`
86. `AF / Moderation / Request Changes`
87. `EN / Moderation / Approve and Schedule`
88. `AF / Moderation / Approve and Schedule`
89. `EN / Moderation / Archive or Unpublish`
90. `AF / Moderation / Archive or Unpublish`

These internal screens must show:
- notice status
- moderation checklist
- legal / policy flags
- language completeness
- attachment presence
- metadata completeness
- publish scheduling
- archive / expiry controls
- access policy controls
- proof-of-publication placeholders
- audit trail patterns

## Page rules that must always be respected

### Search
- search and filters are primary navigation
- no infinite scroll
- use pagination
- show result count
- show clear filter state

### Ads
- show ad placeholders on every template except checkout and order confirmation
- keep ad placements realistic and reusable

### Access
Because legal access rules may vary by category, prototype all three access states:
- public
- login required
- restricted/internal

### Archive and expiry
Do not assume one universal rule.
Prototype:
- permanent archive
- archived but searchable
- expired public notice state

### Bilingual
Every user-facing template must exist in:
- English
- Afrikaans

Afrikaans must use formal, official, high-register wording.
Do not use slang.
Do not mechanically translate legal identifiers, numbers, or references.

## Component list to create before final linking

Create and reuse these components:
- header
- footer
- language switcher
- notice search bar
- filter group
- date range filter
- category filter
- location filter
- sort control
- notice card
- category badge
- status badge
- metadata row
- details sidebar
- document download card
- organisation card
- account nav
- order summary
- billing form
- uploader
- moderation checklist
- empty state
- login wall
- archive banner
- expired banner
- ad slot placeholder
- pagination
- modal
- toast / alert
- success panel
- error panel

## Data and content rules

Use realistic seeded sample content.
Create enough sample notices to make archives and search feel real.

Seed content across these category families:
- tenders
- estates
- town planning
- liquor licences
- petroleum / business licence notices
- general notices
- court / legal notices
- environmental notices

Use paired EN/AF sample data where possible.
Keep metadata-rich examples.
Use long-form body copy on at least some notices so the single template is stress-tested.

## Final output required

Do not stop after foundations.
Do not stop after a homepage.
Deliver a first complete prototype pass with:
- shared foundations
- reusable components
- all core public pages
- auth pages
- my account pages
- submission flow
- checkout flow
- moderation flow
- bilingual variants
- linked navigation between major states

At the end:
1. list every screen created
2. list any assumptions made
3. list any compliance-sensitive items left configurable
4. list any gaps that still need human legal review
```

## 2. Why this version is the right shape

1. It tells Figma Make to **read the guidelines first**, then build the prototype rather than giving you another plan.
2. It forces a **proper build order**: foundations → public browse → notice detail → auth → account → submit → checkout → moderation.
3. It keeps the risky bits like **access rules, archive rules, and category-specific legal behaviour configurable**, which is safer at prototype stage.

For visual reference, I’ve aimed this prompt at the same kind of metadata-rich, two-column notice detail structure shown in the attached competitor notice artefact.

I can turn this into a second, tighter **“build only the first 10 screens”** prompt next.
