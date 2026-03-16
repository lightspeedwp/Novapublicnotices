import { createBrowserRouter } from "react-router";

// Public pages
import Home from "./pages/Home";
import HomeAF from "./pages/HomeAF";
import SearchResults from "./pages/SearchResults";
import SearchResultsAF from "./pages/SearchResultsAF";
import CategoryArchive from "./pages/CategoryArchive";
import CategoryArchiveAF from "./pages/CategoryArchiveAF";
import SingleNotice from "./pages/SingleNotice";
import SingleNoticeAF from "./pages/SingleNoticeAF";
import Contact from "./pages/Contact";
import ContactAF from "./pages/ContactAF";
import Sales from "./pages/Sales";
import SalesAF from "./pages/SalesAF";
import About from "./pages/About";
import AboutAF from "./pages/AboutAF";
import Terms from "./pages/Terms";
import TermsAF from "./pages/TermsAF";
import Privacy from "./pages/Privacy";
import PrivacyAF from "./pages/PrivacyAF";
import FAQ from "./pages/FAQ";
import FAQAF from "./pages/FAQAF";
import Pricing from "./pages/Pricing";
import PricingAF from "./pages/PricingAF";

// Auth pages
import Register from "./pages/auth/Register";
import RegisterAF from "./pages/auth/RegisterAF";
import Login from "./pages/auth/Login";
import LoginAF from "./pages/auth/LoginAF";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ForgotPasswordAF from "./pages/auth/ForgotPasswordAF";
import ResetPassword from "./pages/auth/ResetPassword";
import ResetPasswordAF from "./pages/auth/ResetPasswordAF";

// Account pages
import AccountDashboard from "./pages/account/Dashboard";
import AccountDashboardAF from "./pages/account/DashboardAF";
import MyNotices from "./pages/account/MyNotices";
import MyNoticesAF from "./pages/account/MyNoticesAF";
import Orders from "./pages/account/Orders";
import OrdersAF from "./pages/account/OrdersAF";
import Profile from "./pages/account/Profile";
import ProfileAF from "./pages/account/ProfileAF";

// Submission pages
import SubmitEntry from "./pages/submit/Entry";
import SubmitEntryAF from "./pages/submit/EntryAF";
import SubmitTender from "./pages/submit/Tender";
import SubmitTenderAF from "./pages/submit/TenderAF";
import SubmitEstate from "./pages/submit/Estate";
import SubmitEstateAF from "./pages/submit/EstateAF";
import SubmitLiquorLicence from "./pages/submit/LiquorLicence";
import SubmitLiquorLicenceAF from "./pages/submit/LiquorLicenceAF";
import SubmitTownPlanning from "./pages/submit/TownPlanning";
import SubmitTownPlanningAF from "./pages/submit/TownPlanningAF";
import SubmitBusinessLicence from "./pages/submit/BusinessLicence";
import SubmitBusinessLicenceAF from "./pages/submit/BusinessLicenceAF";
import SubmitGeneral from "./pages/submit/General";
import SubmitGeneralAF from "./pages/submit/GeneralAF";
import SubmitReview from "./pages/submit/Review";
import SubmitReviewAF from "./pages/submit/ReviewAF";
import SubmitSuccess from "./pages/submit/Success";
import SubmitSuccessAF from "./pages/submit/SuccessAF";

// Checkout pages
import Checkout from "./pages/Checkout";
import CheckoutAF from "./pages/CheckoutAF";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderConfirmationAF from "./pages/OrderConfirmationAF";

// Moderation pages
import ModerationQueue from "./pages/moderation/Queue";
import ModerationQueueAF from "./pages/moderation/QueueAF";
import ModerationReview from "./pages/moderation/Review";
import ModerationReviewAF from "./pages/moderation/ReviewAF";

// Not Found
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      // English routes
      { index: true, Component: Home },
      { path: "search", Component: SearchResults },
      { path: "category/:slug", Component: CategoryArchive },
      { path: "notice/:id", Component: SingleNotice },
      { path: "contact", Component: Contact },
      { path: "sales", Component: Sales },
      { path: "about", Component: About },
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
      { path: "faq", Component: FAQ },
      { path: "pricing", Component: Pricing },
      
      // Auth
      { path: "register", Component: Register },
      { path: "register-organisation", Component: Register },
      { path: "login", Component: Login },
      { path: "forgot-password", Component: ForgotPassword },
      { path: "reset-password", Component: ResetPassword },
      
      // Account
      { path: "my-account", Component: AccountDashboard },
      { path: "my-account/notices", Component: MyNotices },
      { path: "my-account/orders", Component: Orders },
      { path: "my-account/profile", Component: Profile },
      
      // Submit
      { path: "submit", Component: SubmitEntry },
      { path: "submit/tender", Component: SubmitTender },
      { path: "submit/estate", Component: SubmitEstate },
      { path: "submit/liquor-licence", Component: SubmitLiquorLicence },
      { path: "submit/town-planning", Component: SubmitTownPlanning },
      { path: "submit/business-licence", Component: SubmitBusinessLicence },
      { path: "submit/general", Component: SubmitGeneral },
      { path: "submit/review", Component: SubmitReview },
      { path: "submit/success", Component: SubmitSuccess },
      
      // Checkout
      { path: "checkout", Component: Checkout },
      { path: "order-confirmation", Component: OrderConfirmation },
      
      // Moderation
      { path: "moderation", Component: ModerationQueue },
      { path: "moderation/review/:id", Component: ModerationReview },
      
      // Afrikaans routes
      { path: "af", Component: HomeAF },
      { path: "af/soek", Component: SearchResultsAF },
      { path: "af/kategorie/:slug", Component: CategoryArchiveAF },
      { path: "af/kennisgewing/:id", Component: SingleNoticeAF },
      { path: "af/kontak", Component: ContactAF },
      { path: "af/verkope", Component: SalesAF },
      { path: "af/oor-ons", Component: AboutAF },
      { path: "af/voorwaarde", Component: TermsAF },
      { path: "af/privaatsfeer", Component: PrivacyAF },
      { path: "af/vaak-gestelde-vrae", Component: FAQAF },
      { path: "af/prysstruktuur", Component: PricingAF },
      
      // Auth AF
      { path: "af/registreer", Component: RegisterAF },
      { path: "af/registreer-organisasie", Component: RegisterAF },
      { path: "af/aanmeld", Component: LoginAF },
      { path: "af/vergeet-wagwoord", Component: ForgotPasswordAF },
      { path: "af/herstel-wagwoord", Component: ResetPasswordAF },
      
      // Account AF
      { path: "af/my-rekening", Component: AccountDashboardAF },
      { path: "af/my-rekening/kennisgewings", Component: MyNoticesAF },
      { path: "af/my-rekening/bestellings", Component: OrdersAF },
      { path: "af/my-rekening/profiel", Component: ProfileAF },
      
      // Submit AF
      { path: "af/indien", Component: SubmitEntryAF },
      { path: "af/indien/tender", Component: SubmitTenderAF },
      { path: "af/indien/boedel", Component: SubmitEstateAF },
      { path: "af/indien/dranklisensie", Component: SubmitLiquorLicenceAF },
      { path: "af/indien/stadsbeplanning", Component: SubmitTownPlanningAF },
      { path: "af/indien/besigheidslisensie", Component: SubmitBusinessLicenceAF },
      { path: "af/indien/algemeen", Component: SubmitGeneralAF },
      { path: "af/indien/hersien", Component: SubmitReviewAF },
      { path: "af/indien/sukses", Component: SubmitSuccessAF },
      
      // Checkout AF
      { path: "af/betaal", Component: CheckoutAF },
      { path: "af/bestelling-bevestiging", Component: OrderConfirmationAF },
      
      // Moderation AF
      { path: "af/moderering", Component: ModerationQueueAF },
      { path: "af/moderering/hersien/:id", Component: ModerationReviewAF },
      
      // Catch all
      { path: "*", Component: NotFound },
    ],
  },
]);