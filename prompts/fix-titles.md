# Fix Titles — Sentence Case Enforcement

**Trigger Word:** `fix titles`  
**Category:** Fix / Correction  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18

---

## Purpose

Scan all TSX files, data files, and content for incorrectly capitalized titles and headings. Enforce sentence case throughout the codebase as mandated by project guidelines.

**Sentence case rule:**
- Only the first letter of the heading is capitalized
- Proper nouns are capitalized (e.g., Nova News, WordPress, PayFast)
- Acronyms remain uppercase (e.g., FAQ, PDF, VAT, ID)
- Everything else is lowercase

---

## Scope

### Files to Scan

**Pages:**
- `/src/app/pages/**/*.tsx`

**Components:**
- `/src/app/components/**/*.tsx`

**Data Files:**
- `/src/app/data/**/*.ts`
- Hero data
- Navigation data
- Footer data
- FAQ data
- Category data
- Notice data

**Hero Data (Critical):**
- `/src/app/data/heroes/heroes.en.ts`
- `/src/app/data/heroes/heroes.af.ts`

---

## What to Fix

### Incorrect Examples (DO NOT USE)

❌ **Title Case (Wrong):**
```
"Contact Us"
"Submit A Notice"
"My Account Dashboard"
"Search Public Notices"
"Frequently Asked Questions"
"Privacy And Cookie Policy"
"Terms And Conditions"
"View All Notices"
"Browse By Category"
"How It Works"
"Get Started Today"
"Sign Up Now"
```

### Correct Examples (USE THESE)

✅ **Sentence Case (Correct):**
```
"Contact us"
"Submit a notice"
"My account dashboard"
"Search public notices"
"Frequently asked questions"
"Privacy and cookie policy"
"Terms and conditions"
"View all notices"
"Browse by category"
"How it works"
"Get started today"
"Sign up now"
```

---

## Exceptions

### DO NOT Change These

**Acronyms:**
- FAQ (not "Faq")
- PDF (not "Pdf")
- VAT (not "Vat")
- ID (not "Id")
- EFT (not "Eft")

**Proper Nouns:**
- Nova News
- WordPress
- WooCommerce
- PayFast
- Novus Media
- Afrikaans
- English

**Brand Names:**
- Keep original capitalization

---

## Execution Steps

### Step 1: Scan Hero Data

**Priority 1:** Check `/src/app/data/heroes/heroes.en.ts` and `heroes.af.ts`

Look for:
- `title:` fields with Title Case
- `description:` fields with Title Case
- Button labels
- Breadcrumb labels

**Example Fix:**
```typescript
// BEFORE (Wrong)
title: 'Browse Public Notices',
description: 'Search And Filter Public Notices',

// AFTER (Correct)
title: 'Browse public notices',
description: 'Search and filter public notices',
```

### Step 2: Scan Navigation Data

Check navigation menus for Title Case:
- `/src/app/data/site/navigation.en.ts`
- `/src/app/data/site/navigation.af.ts`

**Common issues:**
- "About Us" → "About us"
- "Contact Us" → "Contact us"
- "My Account" → "My account"
- "View All" → "View all"

### Step 3: Scan Page Components

Check all page TSX files for hardcoded titles:
- Heading text (h1, h2, h3, h4, h5, h6)
- Button labels
- Link text
- Section titles
- Card titles

### Step 4: Scan Data Files

Check FAQ, category, and notice data:
- Question text
- Category names
- Section titles
- CTA text

---

## Report Format

For each file scanned, report:

### Summary Statistics
```
Files Scanned: X
Issues Found: Y
Files Modified: Z
Changes Made: N
```

### Issues Found

List each issue with:
1. **File path**
2. **Line number**
3. **Current text** (incorrect)
4. **Suggested fix** (correct)
5. **Context** (where it appears)

**Example:**
```
❌ Issue #1
File: /src/app/data/heroes/heroes.en.ts
Line: 45
Current: "Browse Public Notices"
Fix: "Browse public notices"
Context: Home page hero title
```

### Files Modified

List each file changed:
```
✅ Modified: /src/app/data/heroes/heroes.en.ts (3 changes)
✅ Modified: /src/app/pages/Home.tsx (5 changes)
✅ Modified: /src/app/data/site/navigation.en.ts (2 changes)
```

---

## Common Patterns to Fix

### Navigation Links
```typescript
// WRONG
{ label: "My Account", href: "/my-account" }
{ label: "View All", href: "/search" }
{ label: "Sign Up", href: "/register" }

// CORRECT
{ label: "My account", href: "/my-account" }
{ label: "View all", href: "/search" }
{ label: "Sign up", href: "/register" }
```

### Button Labels
```tsx
// WRONG
<Button>View All Notices</Button>
<Button>Get Started Today</Button>
<Button>Contact Us Now</Button>

// CORRECT
<Button>View all notices</Button>
<Button>Get started today</Button>
<Button>Contact us now</Button>
```

### Heading Text
```tsx
// WRONG
<h2>How It Works</h2>
<h3>Browse By Category</h3>
<h4>Get In Touch</h4>

// CORRECT
<h2>How it works</h2>
<h3>Browse by category</h3>
<h4>Get in touch</h4>
```

### Hero Titles
```typescript
// WRONG
title: 'Submit Your Notice Today'
title: 'Find The Notice You Need'
title: 'Contact Our Team'

// CORRECT
title: 'Submit your notice today'
title: 'Find the notice you need'
title: 'Contact our team'
```

---

## Special Cases

### Mid-Sentence Proper Nouns

Keep proper nouns capitalized:
```
✅ "Submit your notice with Nova News"
✅ "Powered by WordPress and WooCommerce"
✅ "Secure payments via PayFast"
```

### Acronyms at Start

Acronyms at the beginning:
```
✅ "FAQ page" (not "Faq page")
✅ "VAT included" (not "Vat included")
✅ "PDF download" (not "Pdf download")
```

### Multiple Acronyms

Multiple acronyms:
```
✅ "FAQ and PDF resources"
✅ "VAT and EFT information"
```

---

## Bilingual Considerations

### English Files
- Standard sentence case rules
- Check for common English title case patterns

### Afrikaans Files
- Same sentence case rules apply
- Watch for translated proper nouns
- Maintain formal register

---

## Priority Order

1. **Hero data** (highest visibility)
2. **Navigation data** (site-wide)
3. **Home page** (first impression)
4. **FAQ page** (recently refactored)
5. **Other pages**
6. **Components**
7. **Data files**

---

## Automation Notes

This prompt should:
1. Scan all relevant files
2. Identify Title Case violations
3. Generate fix suggestions
4. Apply fixes automatically
5. Generate comprehensive report

**DO NOT change:**
- Code variable names
- CSS class names
- Route paths
- File names
- Comments

**ONLY change:**
- User-facing text content
- Titles and headings
- Button labels
- Link text
- Data file content

---

## Success Criteria

✅ All titles use sentence case  
✅ Proper nouns remain capitalized  
✅ Acronyms remain uppercase  
✅ No Title Case in user-facing content  
✅ Bilingual consistency (EN + AF)  
✅ Comprehensive report generated  

---

## Guidelines Reference

See `/guidelines/Guidelines.md` Section 13.5 for full sentence case requirements.

---

## Related Prompts

- `fix` — Run all fix prompts (orchestrator)
- `audit-styling` — Style compliance audit
- `cleanup` — General codebase cleanup

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-18 | Initial creation — Sentence case enforcement |
