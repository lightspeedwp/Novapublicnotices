# Nova News Public Notices Portal - Page Inventory

## Overview
Complete list of all 90+ screens across the bilingual (EN/AF) prototype.

---

## 1. Public Browsing Pages (14 screens)

### Core Public Pages
- ✅ Home (EN) - `/`
- ✅ Home (AF) - `/af`
- ✅ Search Results (EN) - `/search`
- ✅ Search Results (AF) - `/af/soek`
- ✅ Category Archive (EN) - `/category/:slug`
- ✅ Category Archive (AF) - `/af/kategorie/:slug`
- ✅ Single Notice (EN) - `/notice/:id`
- ✅ Single Notice (AF) - `/af/kennisgewing/:id`

### Information Pages
- ✅ Contact (EN) - `/contact`
- ✅ Contact (AF) - `/af/kontak`
- ✅ Sales/How It Works (EN) - `/sales`
- ✅ Sales/How It Works (AF) - `/af/verkope`
- ✅ About (EN) - `/about`
- ✅ About (AF) - `/af/oor-ons`

---

## 2. Legal & Support Pages (8 screens)

- ✅ Terms & Conditions (EN) - `/terms`
- ✅ Terms & Conditions (AF) - `/af/voorwaarde`
- ✅ Privacy Policy (EN) - `/privacy`
- ✅ Privacy Policy (AF) - `/af/privaatsfeer`
- ✅ FAQ/Help (EN) - `/faq`
- ✅ FAQ/Help (AF) - `/af/vaak-gestelde-vrae`
- ✅ Pricing (EN) - `/pricing`
- ✅ Pricing (AF) - `/af/prysstruktuur`

---

## 3. Authentication Pages (12 screens)

### Registration
- ✅ Register Individual (EN) - `/register`
- ✅ Register Individual (AF) - `/af/registreer`
- ✅ Register Organisation (EN) - `/register-organisation`
- ✅ Register Organisation (AF) - `/af/registreer-organisasie`

### Login & Password Recovery
- ✅ Login (EN) - `/login`
- ✅ Login (AF) - `/af/aanmeld`
- ✅ Forgot Password (EN) - `/forgot-password`
- ✅ Forgot Password (AF) - `/af/vergeet-wagwoord`
- ✅ Reset Password (EN) - `/reset-password`
- ✅ Reset Password (AF) - `/af/herstel-wagwoord`

### Email Verification (Future)
- ⏳ Verify Email (EN) - `/verify-email`
- ⏳ Verify Email (AF) - `/af/verifieer-epos`

---

## 4. Account Management Pages (8 screens)

- ✅ Dashboard (EN) - `/my-account`
- ✅ Dashboard (AF) - `/af/my-rekening`
- ✅ My Notices (EN) - `/my-account/notices`
- ✅ My Notices (AF) - `/af/my-rekening/kennisgewings`
- ✅ Orders History (EN) - `/my-account/orders`
- ✅ Orders History (AF) - `/af/my-rekening/bestellings`
- ✅ Profile Settings (EN) - `/my-account/profile`
- ✅ Profile Settings (AF) - `/af/my-rekening/profiel`

---

## 5. Submission Workflow Pages (36 screens)

### Entry Point
- ✅ Submit Entry/Choose Type (EN) - `/submit`
- ✅ Submit Entry/Choose Type (AF) - `/af/indien`

### Specific Notice Type Forms (12 types × 2 languages = 24 screens)
- ✅ Tender (EN) - `/submit/tender`
- ✅ Tender (AF) - `/af/indien/tender`
- ✅ Estate (EN) - `/submit/estate`
- ✅ Estate (AF) - `/af/indien/boedel`
- ✅ Liquor Licence (EN) - `/submit/liquor-licence`
- ✅ Liquor Licence (AF) - `/af/indien/dranklisensie`
- ✅ Town Planning (EN) - `/submit/town-planning`
- ✅ Town Planning (AF) - `/af/indien/stadsbeplanning`
- ✅ Business Licence (EN) - `/submit/business-licence`
- ✅ Business Licence (AF) - `/af/indien/besigheidslisensie`
- ✅ General Notice (EN) - `/submit/general`
- ✅ General Notice (AF) - `/af/indien/algemeen`

### Review & Success
- ✅ Review Submission (EN) - `/submit/review`
- ✅ Review Submission (AF) - `/af/indien/hersien`
- ✅ Submission Success (EN) - `/submit/success`
- ✅ Submission Success (AF) - `/af/indien/sukses`

### Future: Additional Notice Types (6 more types potential)
- ⏳ Court Orders
- ⏳ Insolvency
- ⏳ Environmental (EIA)
- ⏳ Lost Documents
- ⏳ Public Auctions
- ⏳ Sale of Business

---

## 6. Checkout & Order Pages (8 screens)

### Checkout Flow
- ✅ Checkout (EN) - `/checkout` (no ads)
- ✅ Checkout (AF) - `/af/betaal` (no ads)
- ✅ Order Confirmation (EN) - `/order-confirmation` (no ads)
- ✅ Order Confirmation (AF) - `/af/bestelling-bevestiging` (no ads)

### Future: Payment Variations
- ⏳ Payment Failed (EN) - `/payment-failed`
- ⏳ Payment Failed (AF) - `/af/betaling-misluk`
- ⏳ Payment Pending (EN) - `/payment-pending`
- ⏳ Payment Pending (AF) - `/af/betaling-hangend`

---

## 7. Moderation/Admin Pages (8 screens)

### Moderator Interface
- ✅ Moderation Queue (EN) - `/moderation` (no ads)
- ✅ Moderation Queue (AF) - `/af/moderering` (no ads)
- ✅ Review Notice (EN) - `/moderation/review/:id` (no ads)
- ✅ Review Notice (AF) - `/af/moderering/hersien/:id` (no ads)

### Future: Admin Tools
- ⏳ User Management (EN) - `/admin/users`
- ⏳ User Management (AF) - `/af/admin/gebruikers`
- ⏳ Reports & Analytics (EN) - `/admin/reports`
- ⏳ Reports & Analytics (AF) - `/af/admin/verslae`

---

## 8. Error & System Pages (4 screens)

- ✅ 404 Not Found - `/*`
- ⏳ 500 Server Error
- ⏳ Maintenance Mode
- ⏳ Access Denied

---

## Page Count Summary

| Section | Completed | Future | Total |
|---------|-----------|--------|-------|
| Public Browsing | 14 | 0 | 14 |
| Legal & Support | 8 | 0 | 8 |
| Authentication | 10 | 2 | 12 |
| Account Management | 8 | 0 | 8 |
| Submission Workflow | 18 | 18 | 36 |
| Checkout & Orders | 4 | 4 | 8 |
| Moderation/Admin | 4 | 4 | 8 |
| Error & System | 1 | 3 | 4 |
| **TOTALS** | **67** | **31** | **98** |

---

## Implementation Notes

### Completed (67 screens)
All core pages have been created as either:
- **Full implementations**: Home, SearchResults, CategoryArchive, SingleNotice, Contact, Sales, Account Dashboard
- **Stub pages**: All other pages using the `PageStub` component template

### Future Enhancements (31 screens)
Additional pages that could be added for a complete production system:
- Additional notice type submission forms (6 more types)
- Email verification flow
- Payment status variations
- Advanced admin/moderation tools
- Enhanced error pages

### Design System
All pages follow Nova News branding:
- **Colors**: #09082f (primary), #d70025 (accent)
- **Typography**: Inter (body), Lexend (headings), Raleway (display)
- **Layout**: No margins (gap/padding only), ads on all pages except checkout/moderation
- **Bilingual**: Full EN/AF support for all pages

### Ad Placement Rules
- ✅ **Ads enabled**: All public pages, account pages, information pages
- ❌ **No ads**: Checkout flow, order confirmation, moderation interface

---

## Testing Routes

### Quick Navigation (English)
- Home: `/`
- Search: `/search`
- Submit: `/submit`
- Login: `/login`
- Account: `/my-account`
- Checkout: `/checkout`
- Moderation: `/moderation`

### Quick Navigation (Afrikaans)
- Home: `/af`
- Search: `/af/soek`
- Submit: `/af/indien`
- Login: `/af/aanmeld`
- Account: `/af/my-rekening`
- Checkout: `/af/betaal`
- Moderation: `/af/moderering`

---

**Last Updated**: March 16, 2026  
**Status**: Phase 1 complete (67/98 screens) - All core prototype pages implemented
