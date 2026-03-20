/**
 * Hero Section Data — English
 * Hero content for all pages in English
 * All heroes include icons from Phosphor Icons
 */

import type { HeroDataMap } from './types';

export const heroesEN: HeroDataMap = {
  // Homepage
  home: {
    title: 'South Africa\'s trusted public notices portal',
    subtitle: 'Legal notices, tenders, and official announcements',
    description: 'Search thousands of public notices from government, courts, and businesses. Fast, compliant, and comprehensive.',
    icon: 'newspaper',
    size: 'lg',
    alignment: 'center',
    buttons: [
      {
        text: 'Search notices',
        href: '/search',
        variant: 'primary',
        icon: 'magnifying-glass',
      },
      {
        text: 'Submit a notice',
        href: '/submit-notice',
        variant: 'secondary',
        icon: 'upload',
      },
    ],
    showSearch: true,
  },

  // Search Results
  search: {
    title: 'Search public notices',
    description: 'Use filters to find specific notices by category, location, date, or keyword.',
    icon: 'magnifying-glass',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Search' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Single Notice
  notice: {
    title: 'Public notice',
    icon: 'file-text',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Search', href: '/search' },
      { label: 'Notice' },
    ],
    size: 'sm',
    alignment: 'left',
  },

  // Category Archive
  category: {
    title: 'Browse notices by category',
    icon: 'folders',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Categories' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // About
  about: {
    title: 'About Nova News',
    description: 'Your trusted partner for public notice publication in South Africa.',
    icon: 'info',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Contact
  contact: {
    title: 'Contact us',
    description: 'Get in touch with our team for support, sales enquiries, or general questions.',
    icon: 'envelope',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Contact' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Call us',
        href: 'tel:+27123456789',
        variant: 'outline',
        icon: 'phone',
      },
    ],
  },

  // Sales
  sales: {
    title: 'Print and digital notice services',
    description: 'Professional public notice placement with expert support for print, digital, or combined publication.',
    icon: 'handshake',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Sales' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Contact sales',
        href: '/contact',
        variant: 'primary',
        icon: 'phone',
      },
    ],
  },

  // Pricing
  pricing: {
    title: 'Pricing',
    description: 'Transparent pricing for public notice publication. Choose between self-serve digital or sales-assisted options.',
    icon: 'currency-circle-dollar',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Pricing' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Advertise
  advertise: {
    title: 'Advertise with us',
    description: 'Reach thousands of legal professionals, businesses, and government officials through targeted advertising.',
    icon: 'megaphone',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Advertise' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Contact us',
        href: '/contact',
        variant: 'primary',
        icon: 'phone',
      },
    ],
  },

  // FAQ
  faq: {
    title: 'Frequently asked questions',
    description: 'Find answers to common questions about public notices, submissions, and our services.',
    icon: 'question',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'FAQ' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Help
  help: {
    title: 'Help center',
    description: 'Browse guides, tutorials, and documentation to make the most of our public notices portal.',
    icon: 'lifebuoy',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Help' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Dev Tools - Index
  'dev': {
    title: 'Dev tools',
    description: 'Project finalization tools for capturing client requirements and tracking launch readiness.',
    icon: 'code',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Dev tools' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Dev Tools - Client Questionnaire
  'dev-questionnaire': {
    title: 'Client questionnaire',
    description: 'Help us finalize your public notices portal by providing these important details about your organization and requirements.',
    icon: 'clipboard-text',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Dev tools', href: '/dev' },
      { label: 'Client questionnaire' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Dev Tools - Launch Checklist
  'dev-launch': {
    title: 'Launch checklist',
    description: 'Everything we need from you to complete the prototype and prepare for launch. Track progress and see what\'s remaining.',
    icon: 'rocket',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Dev tools', href: '/dev' },
      { label: 'Launch checklist' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Privacy
  privacy: {
    title: 'Privacy policy',
    description: 'How we collect, use, and protect your personal information.',
    icon: 'shield-check',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Privacy policy' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Terms
  terms: {
    title: 'Terms and conditions',
    description: 'Terms governing the use of our public notices portal and services.',
    icon: 'file-doc',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Terms' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Sitemap
  sitemap: {
    title: 'Sitemap',
    description: 'Navigate our entire public notices portal structure.',
    icon: 'tree-structure',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Sitemap' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Compare Notices
  compareNotices: {
    title: 'Compare notices',
    description: 'Compare multiple public notices side by side to identify differences and similarities.',
    icon: 'arrows-left-right',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Compare notices' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Auth: Login
  login: {
    title: 'Sign in to your account',
    description: 'Access your dashboard, manage notices, and track submissions',
    icon: 'sign-in',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Sign in' },
    ],
    size: 'sm',
    alignment: 'center',
  },

  // Auth: Register
  register: {
    title: 'Create your account',
    description: 'Get started with submitting and managing public notices',
    icon: 'user-plus',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Register' },
    ],
    size: 'sm',
    alignment: 'center',
  },

  // Auth: Forgot Password
  forgotPassword: {
    title: 'Reset your password',
    description: 'Enter your email address and we\'ll send you a reset link',
    icon: 'lock',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Sign in', href: '/login' },
      { label: 'Reset password' },
    ],
    size: 'sm',
    alignment: 'center',
  },

  // Auth: Reset Password
  resetPassword: {
    title: 'Choose a new password',
    description: 'Enter your new password below',
    icon: 'key',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Reset password' },
    ],
    size: 'sm',
    alignment: 'center',
  },

  // My Account
  account: {
    title: 'My account',
    description: 'Manage your notices, orders, and account settings.',
    icon: 'user-circle',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'My account' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // My Notices
  myNotices: {
    title: 'My notices',
    description: 'View and manage all your submitted public notices.',
    icon: 'files',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'My account', href: '/my-account' },
      { label: 'My notices' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Submit new notice',
        href: '/submit-notice',
        variant: 'primary',
        icon: 'upload',
      },
    ],
  },

  // My Orders
  myOrders: {
    title: 'My orders',
    description: 'View your order history and download invoices.',
    icon: 'shopping-bag',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'My account', href: '/my-account' },
      { label: 'Orders' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Profile
  profile: {
    title: 'Profile settings',
    description: 'Update your personal information and account preferences.',
    icon: 'user-gear',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'My account', href: '/my-account' },
      { label: 'Profile' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Saved Searches
  savedSearches: {
    title: 'Saved searches and alerts',
    description: 'Manage your saved searches and receive email alerts when new matching notices are published.',
    icon: 'bookmark',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'My account', href: '/my-account' },
      { label: 'Saved searches' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Create new search',
        href: '/search',
        variant: 'primary',
        icon: 'magnifying-glass',
      },
    ],
  },

  // Settings
  settings: {
    title: 'Account settings',
    description: 'Manage your notification preferences, privacy settings, and account security.',
    icon: 'gear',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'My account', href: '/my-account' },
      { label: 'Settings' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Submit Notice
  submitNotice: {
    title: 'Submit a public notice',
    description: 'Publish your legal notice quickly and compliantly. All submissions are reviewed before publication.',
    icon: 'upload',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Submit notice' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Submit Notice Form
  submitNoticeForm: {
    title: 'Submit notice',
    icon: 'notebook',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Submit notice', href: '/submit-notice' },
      { label: 'Form' },
    ],
    size: 'sm',
    alignment: 'left',
  },

  // Submit Notice Entry (Landing)
  submitNoticeEntry: {
    title: 'Submit a public notice',
    description: 'Publish your legal notice quickly and compliantly. Choose between self-serve digital or sales-assisted print and digital options.',
    icon: 'upload',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Submit notice' },
    ],
    size: 'md',
    alignment: 'left',
    buttons: [
      {
        text: 'Submit digital notice',
        href: '/submit-notice/form',
        variant: 'primary',
        icon: 'upload',
      },
      {
        text: 'Sales assistance',
        href: '/sales',
        variant: 'outline',
        icon: 'phone',
      },
    ],
  },

  // Review Notice
  reviewNotice: {
    title: 'Review your notice',
    description: 'Please review all details carefully before proceeding to payment.',
    icon: 'eye',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Submit notice', href: '/submit-notice' },
      { label: 'Review' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Checkout
  checkout: {
    title: 'Checkout',
    description: 'Complete your order securely. Your notice will be reviewed before publication.',
    icon: 'credit-card',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Checkout' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Order Confirmation
  orderConfirmation: {
    title: 'Order confirmed',
    description: 'Thank you for your order. We\'ll review your notice and notify you once it\'s published.',
    icon: 'check-circle',
    size: 'md',
    alignment: 'center',
  },

  // Success
  success: {
    title: 'Success!',
    description: 'Your notice has been submitted successfully.',
    icon: 'check-circle',
    size: 'md',
    alignment: 'center',
    buttons: [
      {
        text: 'View my notices',
        href: '/my-account/my-notices',
        variant: 'primary',
        icon: 'file-text',
      },
    ],
  },

  // Moderation Dashboard
  moderationDashboard: {
    title: 'Moderation dashboard',
    description: 'Review and manage submitted notices pending approval.',
    icon: 'shield-check',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Moderation' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Style Guide
  styleGuide: {
    title: 'Style guide',
    description: 'Design system documentation and component library.',
    icon: 'palette',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Style guide' },
    ],
    size: 'md',
    alignment: 'left',
  },

  // Not Found
  notFound: {
    title: 'Page not found',
    description: 'The page you\'re looking for doesn\'t exist or has been moved.',
    icon: 'warning',
    size: 'md',
    alignment: 'center',
    buttons: [
      {
        text: 'Go to homepage',
        href: '/',
        variant: 'primary',
      },
      {
        text: 'Search notices',
        href: '/search',
        variant: 'outline',
        icon: 'magnifying-glass',
      },
    ],
  },
};