// This file documents all the pages that need to be created for the Public Notices Portal
// Each page is a functional stub that can be enhanced later

export const pageManifest = {
  auth: [
    { path: "/src/app/pages/auth/RegisterAF.tsx", lang: "af", title: "Registreer" },
    { path: "/src/app/pages/auth/ForgotPassword.tsx", lang: "en", title: "Forgot password" },
    { path: "/src/app/pages/auth/ForgotPasswordAF.tsx", lang: "af", title: "Vergeet wagwoord" },
    { path: "/src/app/pages/auth/ResetPassword.tsx", lang: "en", title: "Reset password" },
    { path: "/src/app/pages/auth/ResetPasswordAF.tsx", lang: "af", title: "Herstel wagwoord" },
  ],
  account: [
    { path: "/src/app/pages/account/Dashboard.tsx", lang: "en", title: "My account" },
    { path: "/src/app/pages/account/DashboardAF.tsx", lang: "af", title: "My rekening" },
    { path: "/src/app/pages/account/MyNotices.tsx", lang: "en", title: "My notices" },
    { path: "/src/app/pages/account/MyNoticesAF.tsx", lang: "af", title: "My kennisgewings" },
    { path: "/src/app/pages/account/Orders.tsx", lang: "en", title: "Orders" },
    { path: "/src/app/pages/account/OrdersAF.tsx", lang: "af", title: "Bestellings" },
    { path: "/src/app/pages/account/Profile.tsx", lang: "en", title: "Profile" },
    { path: "/src/app/pages/account/ProfileAF.tsx", lang: "af", title: "Profiel" },
  ],
  submit: [
    { path: "/src/app/pages/submit/Entry.tsx", lang: "en", title: "Submit notice" },
    { path: "/src/app/pages/submit/EntryAF.tsx", lang: "af", title: "Dien kennisgewing in" },
    { path: "/src/app/pages/submit/Tender.tsx", lang: "en", title: "Submit tender" },
    { path: "/src/app/pages/submit/TenderAF.tsx", lang: "af", title: "Dien tender in" },
    { path: "/src/app/pages/submit/Estate.tsx", lang: "en", title: "Submit estate notice" },
    { path: "/src/app/pages/submit/EstateAF.tsx", lang: "af", title: "Dien boedel in" },
    { path: "/src/app/pages/submit/LiquorLicence.tsx", lang: "en", title: "Submit liquor licence" },
    { path: "/src/app/pages/submit/LiquorLicenceAF.tsx", lang: "af", title: "Dien dranklisensie in" },
    { path: "/src/app/pages/submit/TownPlanning.tsx", lang: "en", title: "Submit town planning" },
    { path: "/src/app/pages/submit/TownPlanningAF.tsx", lang: "af", title: "Dien stadsbeplanning in" },
    { path: "/src/app/pages/submit/BusinessLicence.tsx", lang: "en", title: "Submit business licence" },
    { path: "/src/app/pages/submit/BusinessLicenceAF.tsx", lang: "af", title: "Dien besigheidslisensie in" },
    { path: "/src/app/pages/submit/General.tsx", lang: "en", title: "Submit general notice" },
    { path: "/src/app/pages/submit/GeneralAF.tsx", lang: "af", title: "Dien algemene kennisgewing in" },
    { path: "/src/app/pages/submit/Review.tsx", lang: "en", title: "Review submission" },
    { path: "/src/app/pages/submit/ReviewAF.tsx", lang: "af", title: "Hersien indiening" },
    { path: "/src/app/pages/submit/Success.tsx", lang: "en", title: "Submission success" },
    { path: "/src/app/pages/submit/SuccessAF.tsx", lang: "af", title: "Indiening suksesvol" },
  ],
  checkout: [
    { path: "/src/app/pages/Checkout.tsx", lang: "en", title: "Checkout" },
    { path: "/src/app/pages/CheckoutAF.tsx", lang: "af", title: "Betaal" },
    { path: "/src/app/pages/OrderConfirmation.tsx", lang: "en", title: "Order confirmation" },
    { path: "/src/app/pages/OrderConfirmationAF.tsx", lang: "af", title: "Bestelling bevestiging" },
  ],
  moderation: [
    { path: "/src/app/pages/moderation/Queue.tsx", lang: "en", title: "Moderation queue" },
    { path: "/src/app/pages/moderation/QueueAF.tsx", lang: "af", title: "Modereringswagry" },
    { path: "/src/app/pages/moderation/Review.tsx", lang: "en", title: "Review notice" },
    { path: "/src/app/pages/moderation/ReviewAF.tsx", lang: "af", title: "Hersien kennisgewing" },
  ],
};