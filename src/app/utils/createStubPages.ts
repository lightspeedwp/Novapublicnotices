// This file documents all the pages that need to be created for the Public Notices Portal
// Each page is a functional stub that can be enhanced later

export const pageManifest = {
  auth: [
    { path: "/src/app/pages/auth/RegisterAF.tsx", lang: "af", title: "Registreer" },
    { path: "/src/app/pages/auth/ForgotPassword.tsx", lang: "en", title: "Forgot Password" },
    { path: "/src/app/pages/auth/ForgotPasswordAF.tsx", lang: "af", title: "Vergeet Wagwoord" },
    { path: "/src/app/pages/auth/ResetPassword.tsx", lang: "en", title: "Reset Password" },
    { path: "/src/app/pages/auth/ResetPasswordAF.tsx", lang: "af", title: "Herstel Wagwoord" },
  ],
  account: [
    { path: "/src/app/pages/account/Dashboard.tsx", lang: "en", title: "My Account" },
    { path: "/src/app/pages/account/DashboardAF.tsx", lang: "af", title: "My Rekening" },
    { path: "/src/app/pages/account/MyNotices.tsx", lang: "en", title: "My Notices" },
    { path: "/src/app/pages/account/MyNoticesAF.tsx", lang: "af", title: "My Kennisgewings" },
    { path: "/src/app/pages/account/Orders.tsx", lang: "en", title: "Orders" },
    { path: "/src/app/pages/account/OrdersAF.tsx", lang: "af", title: "Bestellings" },
    { path: "/src/app/pages/account/Profile.tsx", lang: "en", title: "Profile" },
    { path: "/src/app/pages/account/ProfileAF.tsx", lang: "af", title: "Profiel" },
  ],
  submit: [
    { path: "/src/app/pages/submit/Entry.tsx", lang: "en", title: "Submit Notice" },
    { path: "/src/app/pages/submit/EntryAF.tsx", lang: "af", title: "Dien Kennisgewing In" },
    { path: "/src/app/pages/submit/Tender.tsx", lang: "en", title: "Submit Tender" },
    { path: "/src/app/pages/submit/TenderAF.tsx", lang: "af", title: "Dien Tender In" },
    { path: "/src/app/pages/submit/Estate.tsx", lang: "en", title: "Submit Estate Notice" },
    { path: "/src/app/pages/submit/EstateAF.tsx", lang: "af", title: "Dien Boedel In" },
    { path: "/src/app/pages/submit/LiquorLicence.tsx", lang: "en", title: "Submit Liquor Licence" },
    { path: "/src/app/pages/submit/LiquorLicenceAF.tsx", lang: "af", title: "Dien Dranklisensie In" },
    { path: "/src/app/pages/submit/TownPlanning.tsx", lang: "en", title: "Submit Town Planning" },
    { path: "/src/app/pages/submit/TownPlanningAF.tsx", lang: "af", title: "Dien Stadsbeplanning In" },
    { path: "/src/app/pages/submit/BusinessLicence.tsx", lang: "en", title: "Submit Business Licence" },
    { path: "/src/app/pages/submit/BusinessLicenceAF.tsx", lang: "af", title: "Dien Besigheidslisensie In" },
    { path: "/src/app/pages/submit/General.tsx", lang: "en", title: "Submit General Notice" },
    { path: "/src/app/pages/submit/GeneralAF.tsx", lang: "af", title: "Dien Algemene Kennisgewing In" },
    { path: "/src/app/pages/submit/Review.tsx", lang: "en", title: "Review Submission" },
    { path: "/src/app/pages/submit/ReviewAF.tsx", lang: "af", title: "Hersien Indiening" },
    { path: "/src/app/pages/submit/Success.tsx", lang: "en", title: "Submission Success" },
    { path: "/src/app/pages/submit/SuccessAF.tsx", lang: "af", title: "Indiening Suksesvol" },
  ],
  checkout: [
    { path: "/src/app/pages/Checkout.tsx", lang: "en", title: "Checkout" },
    { path: "/src/app/pages/CheckoutAF.tsx", lang: "af", title: "Betaal" },
    { path: "/src/app/pages/OrderConfirmation.tsx", lang: "en", title: "Order Confirmation" },
    { path: "/src/app/pages/OrderConfirmationAF.tsx", lang: "af", title: "Bestelling Bevestiging" },
  ],
  moderation: [
    { path: "/src/app/pages/moderation/Queue.tsx", lang: "en", title: "Moderation Queue" },
    { path: "/src/app/pages/moderation/QueueAF.tsx", lang: "af", title: "Modereringswagry" },
    { path: "/src/app/pages/moderation/Review.tsx", lang: "en", title: "Review Notice" },
    { path: "/src/app/pages/moderation/ReviewAF.tsx", lang: "af", title: "Hersien Kennisgewing" },
  ],
};
