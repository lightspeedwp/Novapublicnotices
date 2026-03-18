# Content Style Guide — Sentence Case Rule

**Rule Type:** CRITICAL — Non-negotiable  
**Applies To:** All UI text, headings, labels, buttons, navigation  
**Last Updated:** March 16, 2026

---

## The Rule

**ALWAYS use sentence case for all headings, labels, and UI text.**

**NEVER use title case (capitalizing every word).**

---

## What is Sentence Case?

Sentence case means:
- Only the **first letter** of the text is capitalized
- **Proper nouns** are capitalized (e.g., Nova News, WordPress, South Africa)
- **Acronyms** remain uppercase (e.g., FAQ, PDF, VAT, ID)
- Everything else is **lowercase**

---

## Correct Examples ✅

### Page Titles
```
✅ "Contact us"
✅ "Submit a notice"
✅ "My account dashboard"
✅ "Search public notices"
✅ "Help and FAQ center"
✅ "Privacy and cookie policy"
✅ "Terms and conditions"
✅ "About Nova News"
```

### Section Headings
```
✅ "How it works"
✅ "Getting started"
✅ "Pricing and payment"
✅ "Frequently asked questions"
✅ "Recent notices"
✅ "Popular categories"
```

### Button Labels
```
✅ "Submit notice"
✅ "Save search"
✅ "Contact sales"
✅ "View all notices"
✅ "Download PDF"
✅ "Create account"
```

### Navigation Links
```
✅ "Home"
✅ "Search notices"
✅ "Public notices"
✅ "How it works"
✅ "Contact"
✅ "My account"
```

### Form Labels
```
✅ "Email address"
✅ "Phone number"
✅ "Company name"
✅ "Notice category"
✅ "Reference number"
✅ "Publication date"
```

### Card Titles
```
✅ "Estate notices"
✅ "Liquor licences"
✅ "Town planning"
✅ "Court orders"
✅ "Tender notices"
```

---

## Incorrect Examples ❌

### Page Titles (WRONG)
```
❌ "Contact Us"
❌ "Submit A Notice"
❌ "My Account Dashboard"
❌ "Search Public Notices"
❌ "Help And FAQ Center"
❌ "Privacy And Cookie Policy"
❌ "Terms And Conditions"
❌ "About Nova News"  (Exception: "Nova News" is a proper noun)
```

### Section Headings (WRONG)
```
❌ "How It Works"
❌ "Getting Started"
❌ "Pricing And Payment"
❌ "Frequently Asked Questions"
❌ "Recent Notices"
❌ "Popular Categories"
```

### Button Labels (WRONG)
```
❌ "Submit Notice"
❌ "Save Search"
❌ "Contact Sales"
❌ "View All Notices"
❌ "Download PDF"  (Exception: "PDF" is an acronym)
❌ "Create Account"
```

### Navigation Links (WRONG)
```
❌ "Home"  (Single word is correct)
❌ "Search Notices"
❌ "Public Notices"
❌ "How It Works"
❌ "Contact"  (Single word is correct)
❌ "My Account"
```

---

## Exceptions

### 1. Proper Nouns
Always capitalize proper nouns:

```
✅ "Contact Nova News"
✅ "About WordPress"
✅ "Submit to Nova News"
✅ "Pay with PayFast"
✅ "South Africa"
✅ "Western Cape"
```

### 2. Acronyms and Abbreviations
Keep acronyms uppercase:

```
✅ "Download PDF"
✅ "FAQ center"
✅ "VAT number"
✅ "ID number"
✅ "RSA citizens"
✅ "EFT payment"
```

### 3. Technical Terms
Maintain specific capitalization for technical terms:

```
✅ "WooCommerce integration"
✅ "WordPress migration"
✅ "PayFast checkout"
✅ "JavaScript disabled"
```

### 4. Single Words
Single-word headings capitalize the first letter:

```
✅ "Home"
✅ "Contact"
✅ "Login"
✅ "Register"
✅ "Search"
✅ "Dashboard"
```

---

## Applies To

This rule applies to **all user-facing text**:

### Page Elements
- [x] Page titles (h1)
- [x] Section headings (h2, h3, h4, h5, h6)
- [x] Card titles
- [x] Modal titles
- [x] Dialog headings
- [x] Accordion titles
- [x] Tab labels
- [x] Breadcrumb text

### Navigation
- [x] Main menu links
- [x] Footer links
- [x] Sidebar navigation
- [x] Mobile menu items
- [x] Dropdown menu items
- [x] Pagination links

### Buttons and CTAs
- [x] Primary buttons
- [x] Secondary buttons
- [x] Text links
- [x] Icon buttons (with labels)
- [x] Submit buttons
- [x] Action buttons

### Forms
- [x] Input labels
- [x] Placeholder text
- [x] Field descriptions
- [x] Error messages
- [x] Success messages
- [x] Helper text

### Data Files
- [x] Category names
- [x] Notice types
- [x] Status labels
- [x] Filter options
- [x] Dropdown options
- [x] Metadata labels

---

## Why Sentence Case?

### Modern and Approachable
- Contemporary web design standard
- Used by Google, Apple, Airbnb, Stripe, GitHub
- More conversational and friendly
- Less formal, more accessible

### Better Readability
- Easier to scan quickly
- Natural reading flow
- Less visual noise
- Reduced eye fatigue

### WordPress Alignment
- WordPress admin interface uses sentence case
- WooCommerce uses sentence case
- Aligns with target implementation

### Professional Consistency
- Matches leading SaaS platforms
- Modern design system standard
- International best practice

---

## Implementation Checklist

### Before Creating New Content

- [ ] Is this a page title? → Use sentence case
- [ ] Is this a button label? → Use sentence case
- [ ] Is this a navigation link? → Use sentence case
- [ ] Is this a form label? → Use sentence case
- [ ] Are there proper nouns? → Capitalize them
- [ ] Are there acronyms? → Keep uppercase
- [ ] Is it a single word? → Capitalize first letter only

### When Reviewing Existing Content

- [ ] Check all h1, h2, h3, h4, h5, h6 headings
- [ ] Check all button labels
- [ ] Check all navigation links
- [ ] Check all form labels
- [ ] Check all data file content
- [ ] Check all modal/dialog titles
- [ ] Check all card titles
- [ ] Update to sentence case where needed

---

## Code Examples

### Data File (Correct)

```tsx
// ✅ CORRECT
export const categories = [
  { id: "estates", name: "Estate notices" },
  { id: "liquor", name: "Liquor licences" },
  { id: "tenders", name: "Tender notices" },
  { id: "planning", name: "Town planning" },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Search notices", href: "/search" },
  { label: "How it works", href: "/sales" },
  { label: "Contact", href: "/contact" },
];
```

### Data File (Incorrect)

```tsx
// ❌ INCORRECT
export const categories = [
  { id: "estates", name: "Estate Notices" },
  { id: "liquor", name: "Liquor Licences" },
  { id: "tenders", name: "Tender Notices" },
  { id: "planning", name: "Town Planning" },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Search Notices", href: "/search" },
  { label: "How It Works", href: "/sales" },
  { label: "Contact", href: "/contact" },
];
```

### JSX Component (Correct)

```tsx
// ✅ CORRECT
<section className="wpn-page-header">
  <h1 className="wpn-page-header__title">
    Contact us
  </h1>
  <p className="wpn-page-header__subtitle">
    Get in touch with our team for assistance
  </p>
</section>

<Button>Submit notice</Button>
<Button>Save search</Button>
<Button>Download PDF</Button>
```

### JSX Component (Incorrect)

```tsx
// ❌ INCORRECT
<section className="wpn-page-header">
  <h1 className="wpn-page-header__title">
    Contact Us
  </h1>
  <p className="wpn-page-header__subtitle">
    Get In Touch With Our Team For Assistance
  </p>
</section>

<Button>Submit Notice</Button>
<Button>Save Search</Button>
<Button>Download PDF</Button>  // PDF is OK (acronym)
```

---

## Quick Reference

| Element Type | Example (Correct) | Example (Incorrect) |
|--------------|-------------------|---------------------|
| Page title | "Contact us" | ❌ "Contact Us" |
| Section heading | "How it works" | ❌ "How It Works" |
| Button label | "Submit notice" | ❌ "Submit Notice" |
| Nav link | "Search notices" | ❌ "Search Notices" |
| Form label | "Email address" | ❌ "Email Address" |
| Card title | "Estate notices" | ❌ "Estate Notices" |
| With proper noun | "Contact Nova News" | ✅ Correct |
| With acronym | "Download PDF" | ✅ Correct |
| Single word | "Home" | ✅ Correct |

---

## Enforcement

### Code Reviews
- All pull requests must be checked for sentence case compliance
- Any title case usage must be flagged and corrected
- Data file content must follow sentence case

### Automated Checks (Future)
- Linting rules to detect title case in data files
- Pre-commit hooks to warn about capitalization
- CI/CD checks for sentence case violations

### Content Audits
- Quarterly audit of all UI text
- Update any title case to sentence case
- Document exceptions (proper nouns, acronyms)

---

## Migration Strategy

### Phase 1: New Content
- All new pages, components, and data files use sentence case
- No exceptions without documented reason
- Code reviews enforce the rule

### Phase 2: Existing Content Audit
- Review all 78 existing pages
- Update data files to sentence case
- Update component headings to sentence case
- Test all pages after updates

### Phase 3: Documentation
- Update all screenshots with sentence case examples
- Update style guides with correct examples
- Train team members on the rule

---

## Common Mistakes

### Mistake 1: Overcapitalizing Buttons
```
❌ "View All Notices"
✅ "View all notices"

❌ "Submit Your Notice"
✅ "Submit your notice"
```

### Mistake 2: Capitalizing Prepositions
```
❌ "Terms And Conditions"
✅ "Terms and conditions"

❌ "Privacy And Cookie Policy"
✅ "Privacy and cookie policy"
```

### Mistake 3: Lowercasing Proper Nouns
```
❌ "Contact nova news"
✅ "Contact Nova News"

❌ "Submit to wordpress"
✅ "Submit to WordPress"
```

### Mistake 4: Lowercasing Acronyms
```
❌ "Download pdf"
✅ "Download PDF"

❌ "Enter vat number"
✅ "Enter VAT number"
```

---

## Rationale: Why This Matters

### User Experience
- **Friendlier tone** — Less corporate, more conversational
- **Modern aesthetic** — Aligns with contemporary design
- **Better readability** — Natural reading flow

### Brand Consistency
- **Professional** — Matches leading platforms
- **Accessible** — Welcoming to all users
- **Contemporary** — Not outdated or corporate

### Implementation Alignment
- **WordPress standard** — Easier migration
- **WooCommerce pattern** — Consistent with ecommerce UX
- **Best practices** — Industry standard

---

## Summary

**The Rule:** Always use sentence case for all UI text.

**Format:** "First letter capitalized, everything else lowercase"

**Exceptions:** Proper nouns (Nova News), acronyms (PDF, FAQ, VAT)

**Enforcement:** Code reviews, content audits, automated checks

**Rationale:** Modern, friendly, readable, WordPress-aligned

---

**Last Updated:** March 16, 2026  
**Rule Status:** CRITICAL — Non-negotiable  
**Applies To:** All 78 pages, all components, all data files  
**Enforcement:** Immediate (all new content), Phased (existing content)
