/**
 * Account Page Data
 * Bilingual content for user account pages
 */

export interface BilingualText {
  en: string;
  af: string;
}

// Profile Page Data
export const profilePageData = {
  title: {
    en: "Profile",
    af: "Profiel"
  },
  subtitle: {
    en: "Manage your account profile and personal information",
    af: "Bestuur jou rekeningprofiel en persoonlike inligting"
  },
  sections: {
    personal: {
      en: "Personal Information",
      af: "Persoonlike Inligting"
    },
    account: {
      en: "Account Settings",
      af: "Rekening Instellings"
    },
    security: {
      en: "Security",
      af: "Sekuriteit"
    },
    publisher: {
      en: "Publisher Information",
      af: "Uitgewer Inligting"
    }
  },
  fields: {
    firstName: { en: "First Name", af: "Voornaam" },
    lastName: { en: "Last Name", af: "Van" },
    email: { en: "Email Address", af: "E-posadres" },
    phone: { en: "Phone Number", af: "Telefoonnommer" },
    language: { en: "Preferred Language", af: "Voorkeur Taal" },
    companyName: { en: "Company Name", af: "Maatskappy Naam" },
    vatNumber: { en: "VAT Number", af: "BTW Nommer" },
    address: { en: "Address", af: "Adres" },
    currentPassword: { en: "Current Password", af: "Huidige Wagwoord" },
    newPassword: { en: "New Password", af: "Nuwe Wagwoord" },
    confirmPassword: { en: "Confirm Password", af: "Bevestig Wagwoord" }
  },
  buttons: {
    save: { en: "Save Changes", af: "Stoor Veranderings" },
    cancel: { en: "Cancel", af: "Kanselleer" },
    changePassword: { en: "Change Password", af: "Verander Wagwoord" }
  }
};

// My Notices Page Data
export const myNoticesPageData = {
  title: {
    en: "My Notices",
    af: "My Kennisgewings"
  },
  subtitle: {
    en: "View and manage all your submitted notices",
    af: "Bekyk en bestuur al u ingedien kennisgewings"
  },
  tabs: {
    all: { en: "All Notices", af: "Alle Kennisgewings" },
    published: { en: "Published", af: "Gepubliseer" },
    pending: { en: "Pending Review", af: "Hangende Hersien" },
    draft: { en: "Drafts", af: "Konsepte" },
    archived: { en: "Archived", af: "Geargiveer" }
  },
  actions: {
    view: { en: "View", af: "Besigtig" },
    edit: { en: "Edit", af: "Wysig" },
    delete: { en: "Delete", af: "Verwyder" }
  },
  empty: {
    title: { en: "No notices yet", af: "Nog geen kennisgewings nie" },
    description: { en: "You haven't submitted any notices yet.", af: "Jy het nog geen kennisgewings ingedien nie." },
    action: { en: "Submit Your First Notice", af: "Dien Jou Eerste Kennisgewing In" }
  },
  labels: {
    status: { en: "Status", af: "Status" },
    category: { en: "Category", af: "Kategorie" },
    publishDate: { en: "Publish Date", af: "Publikasie Datum" },
    reference: { en: "Reference", af: "Verwysing" }
  }
};

// Orders Page Data
export const ordersPageData = {
  title: {
    en: "My Orders",
    af: "My Bestellings"
  },
  subtitle: {
    en: "View your order history and payment status",
    af: "Bekyk u bestelling geskiedenis en betalings status"
  },
  tabs: {
    all: { en: "All Orders", af: "Alle Bestellings" },
    completed: { en: "Completed", af: "Voltooi" },
    pending: { en: "Pending", af: "Hangende" },
    failed: { en: "Failed", af: "Misluk" }
  },
  labels: {
    orderNumber: { en: "Order Number", af: "Bestelnommer" },
    date: { en: "Date", af: "Datum" },
    amount: { en: "Amount", af: "Bedrag" },
    status: { en: "Status", af: "Status" },
    notice: { en: "Notice", af: "Kennisgewing" },
    paymentMethod: { en: "Payment Method", af: "Betaalmetode" }
  },
  actions: {
    viewInvoice: { en: "View Invoice", af: "Besigtig Faktuur" },
    download: { en: "Download", af: "Laai Af" },
    retry: { en: "Retry Payment", af: "Probeer Betaling Weer" }
  },
  empty: {
    title: { en: "No orders yet", af: "Nog geen bestellings nie" },
    description: { en: "You haven't placed any orders yet.", af: "Jy het nog geen bestellings geplaas nie." }
  }
};
