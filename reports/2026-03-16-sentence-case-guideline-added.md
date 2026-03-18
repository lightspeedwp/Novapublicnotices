# Sentence Case Guideline Added — Complete

**Date:** March 16, 2026  
**Guideline:** Sentence Case Rule (Section 13.5)  
**Status:** ✅ **COMPLETE**

---

## 🎉 Summary

Added critical content style guideline requiring **sentence case for all UI text**. This modern, user-friendly capitalization standard is now enforced across all headings, buttons, navigation, forms, and data files.

---

## ✅ The Rule

### CRITICAL RULE: Always use sentence case

**Format:**
- Only the **first letter** is capitalized
- Proper nouns are capitalized (Nova News, WordPress)
- Acronyms remain uppercase (FAQ, PDF, VAT)
- Everything else is **lowercase**

**Correct:** "Contact us"  
**Incorrect:** ❌ "Contact Us"

---

## 📝 What Changed

### 1. Updated Guidelines.md
**Location:** `/guidelines/Guidelines.md` → Section 13.5

**Added comprehensive rule covering:**
- Definition of sentence case
- Correct examples (20+)
- Incorrect examples (20+)
- Exceptions (proper nouns, acronyms, technical terms)
- Where it applies (all UI elements)
- Rationale (modern, friendly, WordPress-aligned)
- Implementation requirements

---

### 2. Created Content Style Guide
**Location:** `/guidelines/design-tokens/content-style.md`

**500+ line comprehensive reference guide:**

#### Sections:
1. **The Rule** — Clear statement and definition
2. **Correct Examples** — 50+ examples across all UI elements
3. **Incorrect Examples** — 50+ wrong examples to avoid
4. **Exceptions** — Proper nouns, acronyms, technical terms
5. **Applies To** — Complete checklist of affected elements
6. **Why Sentence Case** — Rationale and benefits
7. **Implementation Checklist** — Before/after workflows
8. **Code Examples** — TypeScript/React examples
9. **Quick Reference Table** — At-a-glance guide
10. **Enforcement** — Code reviews, audits, automation
11. **Migration Strategy** — 3-phase rollout plan
12. **Common Mistakes** — What to avoid

---

## ✅ Correct Examples

### Page Titles
```
✅ "Contact us"
✅ "Submit a notice"
✅ "My account dashboard"
✅ "Search public notices"
✅ "Help and FAQ center"
✅ "Privacy and cookie policy"
```

### Button Labels
```
✅ "Submit notice"
✅ "Save search"
✅ "Contact sales"
✅ "View all notices"
✅ "Download PDF"  (PDF is acronym)
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
```

---

## ❌ Incorrect Examples

### Page Titles (WRONG)
```
❌ "Contact Us"
❌ "Submit A Notice"
❌ "My Account Dashboard"
❌ "Search Public Notices"
❌ "Help And FAQ Center"
```

### Button Labels (WRONG)
```
❌ "Submit Notice"
❌ "Save Search"
❌ "Contact Sales"
❌ "View All Notices"
❌ "Create Account"
```

### Navigation Links (WRONG)
```
❌ "Search Notices"
❌ "Public Notices"
❌ "How It Works"
❌ "My Account"
```

---

## 🎯 Exceptions

### 1. Proper Nouns (Always Capitalize)
```
✅ "Contact Nova News"
✅ "About WordPress"
✅ "Pay with PayFast"
✅ "South Africa"
✅ "Western Cape"
```

### 2. Acronyms (Keep Uppercase)
```
✅ "Download PDF"
✅ "FAQ center"
✅ "VAT number"
✅ "ID number"
✅ "EFT payment"
```

### 3. Technical Terms
```
✅ "WooCommerce integration"
✅ "WordPress migration"
✅ "PayFast checkout"
✅ "JavaScript disabled"
```

---

## 📋 Applies To

This rule affects **all user-facing text**:

### Page Elements ✅
- [x] Page titles (h1)
- [x] Section headings (h2, h3, h4, h5, h6)
- [x] Card titles
- [x] Modal titles
- [x] Dialog headings
- [x] Accordion titles
- [x] Tab labels
- [x] Breadcrumb text

### Navigation ✅
- [x] Main menu links
- [x] Footer links
- [x] Sidebar navigation
- [x] Mobile menu items
- [x] Dropdown menu items

### Buttons & CTAs ✅
- [x] Primary buttons
- [x] Secondary buttons
- [x] Text links
- [x] Submit buttons
- [x] Action buttons

### Forms ✅
- [x] Input labels
- [x] Placeholder text
- [x] Error messages
- [x] Success messages
- [x] Helper text

### Data Files ✅
- [x] Category names
- [x] Notice types
- [x] Status labels
- [x] Filter options
- [x] Dropdown options

---

## 💡 Why Sentence Case?

### 1. Modern & Approachable ✅
- Contemporary web design standard
- Used by Google, Apple, Airbnb, Stripe, GitHub
- More conversational and friendly
- Less formal, more accessible

### 2. Better Readability ✅
- Easier to scan quickly
- Natural reading flow
- Less visual noise
- Reduced eye fatigue

### 3. WordPress Alignment ✅
- WordPress admin interface uses sentence case
- WooCommerce uses sentence case
- Aligns with target implementation platform

### 4. Professional Consistency ✅
- Matches leading SaaS platforms
- Modern design system standard
- International best practice

---

## 📝 Code Examples

### Data File (Correct ✅)

```tsx
// ✅ CORRECT — Sentence case
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

### Data File (Incorrect ❌)

```tsx
// ❌ INCORRECT — Title case
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

### JSX Component (Correct ✅)

```tsx
// ✅ CORRECT — Sentence case
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

### JSX Component (Incorrect ❌)

```tsx
// ❌ INCORRECT — Title case
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
```

---

## 📊 Quick Reference Table

| Element Type | Correct Example | Incorrect Example |
|--------------|-----------------|-------------------|
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

## 🔧 Implementation Checklist

### Before Creating New Content ✅

- [ ] Is this a page title? → Use sentence case
- [ ] Is this a button label? → Use sentence case
- [ ] Is this a navigation link? → Use sentence case
- [ ] Is this a form label? → Use sentence case
- [ ] Are there proper nouns? → Capitalize them
- [ ] Are there acronyms? → Keep uppercase
- [ ] Is it a single word? → Capitalize first letter only

### When Reviewing Existing Content ✅

- [ ] Check all h1, h2, h3, h4, h5, h6 headings
- [ ] Check all button labels
- [ ] Check all navigation links
- [ ] Check all form labels
- [ ] Check all data file content
- [ ] Check all modal/dialog titles
- [ ] Update to sentence case where needed

---

## 🚀 Migration Strategy

### Phase 1: New Content (Immediate)
- All new pages, components, and data files use sentence case
- No exceptions without documented reason
- Code reviews enforce the rule

### Phase 2: Existing Content Audit (Planned)
- Review all 78 existing pages
- Update data files to sentence case
- Update component headings to sentence case
- Test all pages after updates

### Phase 3: Documentation (Ongoing)
- Update all screenshots with sentence case examples
- Update style guides with correct examples
- Train team members on the rule

---

## 🎯 Enforcement

### Code Reviews ✅
- All pull requests checked for sentence case compliance
- Any title case usage flagged and corrected
- Data file content must follow sentence case

### Content Audits ✅
- Quarterly audit of all UI text
- Update any title case to sentence case
- Document exceptions (proper nouns, acronyms)

### Automated Checks (Future) 📋
- Linting rules to detect title case in data files
- Pre-commit hooks to warn about capitalization
- CI/CD checks for sentence case violations

---

## ⚠️ Common Mistakes

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

## 📁 Files Created/Modified

### New Files (1)
```
/guidelines/design-tokens/
  content-style.md             ← NEW (500+ line reference guide)
```

### Modified Files (2)
```
/guidelines/
  Guidelines.md                ← UPDATED (Added Section 13.5)

/CHANGELOG.md                  ← UPDATED (Documented change)
```

---

## 📊 Impact

### Affected Content
- **78 pages** — All need eventual sentence case audit
- **158 routes** — All route names use sentence case
- **Data files** — All category names, labels, buttons
- **Components** — All headings, buttons, navigation
- **Future content** — All new pages follow rule immediately

### Benefits
- **More modern appearance** across entire portal
- **Better user experience** (friendly, approachable)
- **WordPress alignment** (easier migration)
- **Professional consistency** (matches industry leaders)

---

## ✅ Summary

**Rule Added:** Sentence case for all UI text

**Where:** `/guidelines/Guidelines.md` Section 13.5

**Reference Guide:** `/guidelines/design-tokens/content-style.md` (500+ lines)

**Format:** "First letter capitalized, everything else lowercase"

**Exceptions:** Proper nouns, acronyms, technical terms

**Applies To:** Page titles, buttons, navigation, forms, cards, all data files

**Enforcement:** Code reviews, content audits, future automation

**Rationale:** Modern, friendly, readable, WordPress-aligned

**Status:** ✅ CRITICAL RULE — Effective immediately for all new content

---

## 🎯 Next Steps

### Immediate (New Content)
- [x] Rule documented in Guidelines.md
- [x] Reference guide created
- [x] Examples provided
- [x] CHANGELOG updated
- [ ] Team briefed on new rule

### Short-term (Existing Content)
- [ ] Audit all 78 pages
- [ ] Update data files to sentence case
- [ ] Update component headings
- [ ] Test pages after updates

### Long-term (Automation)
- [ ] Create linting rules
- [ ] Add pre-commit hooks
- [ ] Implement CI/CD checks
- [ ] Automate enforcement

---

**Report Generated:** 2026-03-16  
**Guideline:** Sentence Case Rule  
**Section:** 13.5 in Guidelines.md  
**Reference:** `/guidelines/design-tokens/content-style.md`  
**Status:** ✅ **CRITICAL RULE ACTIVE**
