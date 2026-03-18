# Expand Pages — AI-Driven Page Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand pages`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Analyze conversation history, user journeys, and project requirements to identify missing pages, incomplete page implementations, and opportunities for new page types that support the Nova Public Notices Portal's goals.

---

## Scope

This prompt reviews:
- Required pages per `/guidelines/Guidelines.md` Section 8
- User journey completeness
- Conversation mentions of pages
- Industry standard pages
- Error/edge case pages
- Marketing/sales pages
- Help/support pages

---

## Analysis Process

### Phase 1: Audit Required Pages

**From Guidelines.md Section 8:**

Required route coverage:
- `/` — Homepage
- `/search` — Search results
- `/category/:slug` — Category archive
- `/notice/:slug` — Single notice
- `/contact` — Contact page
- `/register` — Registration
- `/login` — Login
- `/my-account` — Account dashboard
- `/checkout` — Checkout flow
- `/submit-notice` — Notice submission
- `/sales` — Sales landing page

**Recommended secondary states:**
- `/forgot-password` — Password reset
- `/order-confirmation` — Post-checkout
- `/my-account/notices` — User's notices
- `/my-account/orders` — Order history
- `/my-account/profile` — Profile settings
- `/my-account/submissions` — Submission tracking
- `/submit-notice/review` — Preview before submit
- `/submit-notice/success` — Success state

**Check implementation status:**
```markdown
- [x] Page exists
- [x] Has data file
- [x] Bilingual EN/AF
- [ ] Incomplete/missing
```

### Phase 2: Identify Missing Page Types

**Essential Pages:**

1. **Error Pages**
   - `/404` — Page not found
   - `/403` — Access denied
   - `/500` — Server error
   - `/offline` — No connection
   - `/maintenance` — System maintenance

2. **Help & Support**
   - `/help` or `/faq` — FAQ page
   - `/help/search` — Search help
   - `/help/submit` — Submission guide
   - `/help/moderation` — Moderation explainer
   - `/help/pricing` — Pricing information

3. **Legal & Policy**
   - `/privacy` — Privacy policy
   - `/terms` — Terms of service
   - `/terms/publishers` — Publisher terms
   - `/terms/readers` — Reader terms
   - `/cookie-policy` — Cookie consent
   - `/accessibility` — Accessibility statement

4. **About & Trust**
   - `/about` — About Nova News
   - `/about/team` — Team information
   - `/about/legal-compliance` — Legal compliance
   - `/about/partners` — Partners/affiliates

5. **Marketing Pages**
   - `/for-businesses` — Business-focused landing
   - `/for-legal-professionals` — Legal professional landing
   - `/for-government` — Government landing
   - `/case-studies` — Success stories
   - `/testimonials` — User testimonials

6. **Account Management**
   - `/my-account/organizations` — Manage organizations
   - `/my-account/team` — Team member management
   - `/my-account/billing` — Billing information
   - `/my-account/notifications` — Notification settings
   - `/my-account/api` — API credentials (future)

7. **Submission Flow**
   - `/submit-notice/category-select` — Choose category
   - `/submit-notice/form` — Category-specific form
   - `/submit-notice/upload` — File uploads
   - `/submit-notice/preview` — Review submission
   - `/submit-notice/payment` — Payment (if separate from checkout)
   - `/submit-notice/pending` — Awaiting moderation
   - `/submit-notice/approved` — Approved notification

8. **Search & Browse**
   - `/browse` — Browse all categories
   - `/browse/recent` — Recently published
   - `/browse/popular` — Most viewed
   - `/browse/location/:location` — By location
   - `/saved-searches` — Saved search management
   - `/alerts` — Alert management

9. **Admin/Moderation**
   - `/moderate` — Moderation queue
   - `/moderate/pending` — Pending notices
   - `/moderate/approved` — Approved notices
   - `/moderate/rejected` — Rejected notices
   - `/admin/dashboard` — Admin overview
   - `/admin/analytics` — Analytics dashboard

### Phase 3: Analyze Conversation History

**Search for page mentions:**

```
Pattern: "create a page for..."
Pattern: "users need to see..."
Pattern: "we should have a page that..."
Pattern: "missing page for..."
Pattern: "page to explain..."
Pattern: "landing page for..."
```

**Extract:**
- Explicit page requests
- Implied page needs
- User journey gaps
- Information architecture gaps

### Phase 4: Review User Journeys

**Map user paths:**

1. **Anonymous Visitor → Reader**
   - Entry: Homepage
   - Discovery: Search/Browse
   - View: Notice detail
   - Action: Register to continue?
   - **Gap:** What's the value prop page?

2. **Reader → Publisher**
   - Entry: "Submit notice" CTA
   - Decision: Sales landing page
   - Action: Register/Login
   - Submit: Notice form
   - **Gap:** What's missing in this flow?

3. **First-Time Publisher → Repeat Publisher**
   - Entry: Submit notice
   - Experience: Form + moderation
   - Success: Published notice
   - Return: Saved templates? Quick re-submit?
   - **Gap:** What eases repeat submissions?

4. **Legal Professional → Compliance User**
   - Entry: Compliance requirements
   - Research: Legal framework page?
   - Action: Submit required notice
   - Proof: Download proof of publication?
   - **Gap:** What proves legal compliance?

---

## Recommendation Format

### For New Pages

```markdown
## Recommended Page: {Page Name}

**Route:** `/{route-path}`  
**Priority:** Critical/High/Medium/Low  
**User Type:** {Anonymous/Reader/Publisher/Moderator/Admin}  
**Purpose:** {Primary goal of page}

**Rationale:**
{Why this page is needed}

**Evidence:**
- Conversation: "{quote}"
- User journey gap: {description}
- Legal requirement: {requirement}
- Industry standard: {example}

**Content Requirements:**

1. **Hero Section:**
   - Heading: {example}
   - Subheading: {example}
   - CTA: {example}

2. **Main Content:**
   - {Section type}: {Purpose}
   - {Section type}: {Purpose}

3. **Supporting Elements:**
   - {Element}: {Purpose}

**Data Files Needed:**
- `/src/app/data/{page-name}/{page-name}.en.ts`
- `/src/app/data/{page-name}/{page-name}.af.ts`

**Route Configuration:**
```typescript
{
  path: "{route-path}",
  Component: {ComponentName},
  meta: {
    requiresAuth: true/false,
    allowedRoles: ["user", "publisher"],
    bilingual: true
  }
}
```

**Success Criteria:**
- [ ] Page created with bilingual data
- [ ] Route added to router
- [ ] Navigation links updated
- [ ] SEO metadata added
- [ ] Accessibility validated

**Dependencies:**
- Requires: {Data/component/feature}
- Blocks: {Future page}
```

### For Page Enhancements

```markdown
## Recommended Enhancement: {Existing Page}

**Current Route:** `/{route-path}`  
**Current State:** {What exists}  
**Proposed Addition:** {What to add}

**Gap Identified:**
{What's missing or incomplete}

**Evidence:**
- Conversation: "{quote}"
- User feedback: {description}

**Proposed Sections to Add:**

1. **{Section Name}**
   - Content: {Description}
   - Components: {List}
   - Data: {Data file changes}

2. **{Section Name}**
   - Content: {Description}

**Acceptance Criteria:**
- [ ] {Testable outcome}
```

---

## Page Categories

### 1. Core User Journey Pages

**Must exist for basic functionality:**
- Homepage
- Search/Browse
- Notice detail
- Login/Register
- Submit notice
- My account
- Checkout

### 2. Support & Help Pages

**Reduce support burden:**
- FAQ
- How-to guides
- Video tutorials
- Pricing calculator
- Contact options
- Live chat integration

### 3. Trust & Credibility Pages

**Build confidence:**
- About us
- Team bios
- Legal compliance
- Testimonials
- Press mentions
- Awards/recognition

### 4. Legal & Compliance Pages

**Required for operation:**
- Terms of service
- Privacy policy
- Cookie policy
- Accessibility statement
- POPIA compliance
- Refund policy

### 5. Marketing & Conversion Pages

**Drive user acquisition:**
- For businesses
- For legal professionals
- For government
- Case studies
- Pricing comparison
- ROI calculator

### 6. Error & Edge Case Pages

**Handle exceptions gracefully:**
- 404 Not found
- 403 Forbidden
- 500 Server error
- Session expired
- Account suspended
- Payment failed

---

## Report Format

Generate: `/reports/YYYY-MM-DD-page-recommendations.md`

```markdown
# Page Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Current Page Count:** {number}  
**Recommended New Pages:** {number}

---

## Executive Summary

Analyzed site architecture against user journeys, legal requirements, and industry standards. Identified {N} critical missing pages, {N} high-priority pages, and {N} medium-priority enhancements.

**Highest Impact:**
1. {Page} — Fills {gap}
2. {Page} — Enables {workflow}
3. {Page} — Satisfies {requirement}

---

## Current Page Inventory

### Implemented (Complete)
- [x] `/` — Homepage (EN/AF, data-driven)
- [x] `/search` — Search (EN/AF, data-driven)
- {List all complete pages}

### Implemented (Incomplete)
- [ ] `/contact` — Missing AF translation
- [ ] `/about` — Hardcoded content
- {List incomplete pages}

### Missing (Required by Guidelines)
- [ ] `/forgot-password` — Not implemented
- [ ] `/my-account/notifications` — Not implemented
- {List missing required pages}

---

## Critical Pages to Create

### {Page Name}

[Full recommendation]

**Impact if not created:** {Consequences}

---

## High-Priority Pages

### {Page Name}

[Full recommendation]

---

## Medium-Priority Pages

### {Page Name}

[Full recommendation]

---

## User Journey Map

```
Anonymous Visitor
  ├─ Homepage ✅
  ├─ Search ✅
  ├─ Notice Detail ✅
  ├─ About ⚠️ (incomplete)
  └─ Contact ✅

Reader (Logged In)
  ├─ My Account ✅
  ├─ Saved Searches ❌ (missing)
  ├─ Notifications ❌ (missing)
  └─ Profile Settings ✅

Publisher
  ├─ Submit Notice ✅
  ├─ Submission Preview ❌ (missing)
  ├─ Order History ✅
  └─ Draft Management ❌ (missing)
```

---

## Implementation Priority Matrix

| Page | User Impact | Business Impact | Complexity | Priority |
|------|-------------|-----------------|------------|----------|
| `/404` | High | Medium | Low | Critical |
| `/saved-searches` | High | High | Medium | High |
| `/help/faq` | High | High | Low | High |
| `/for-businesses` | Medium | High | Medium | High |
| `/api-docs` | Low | Low | High | Low |

---

## Roadmap

### Sprint 1 (Critical)
- [ ] Error pages (404, 403, 500)
- [ ] Forgot password
- [ ] Privacy policy

### Sprint 2 (High Priority)
- [ ] FAQ/Help center
- [ ] Saved searches
- [ ] Notification preferences

### Sprint 3 (Medium Priority)
- [ ] Marketing landing pages
- [ ] Case studies
- [ ] Team page

---

## Next Steps

1. Review recommendations with stakeholders
2. Prioritize based on business goals
3. Create page data files (EN/AF pairs)
4. Update route configuration
5. Update navigation menus
6. Create task tickets

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 8 (Routes and IA)
- **[update-routes.md](./update-routes.md)** — Route synchronization
```

---

## Success Criteria

✅ All current pages inventoried  
✅ Required pages from guidelines checked  
✅ Conversation history analyzed  
✅ User journeys mapped  
✅ Gaps identified  
✅ Recommendations prioritized  
✅ Implementation roadmap created  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[expand-functionality.md](./expand-functionality.md)** — Feature expansion
- **[Guidelines.md](../guidelines/Guidelines.md)** — Section 8 (IA and routes)
- **[update-routes.md](./update-routes.md)** — Route updates
- **[update-sitemap.md](./update-sitemap.md)** — Sitemap generation

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial page expansion analysis prompt |
