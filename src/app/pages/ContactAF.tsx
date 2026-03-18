import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Link } from "react-router";
import { Mail, Phone, Facebook, Home } from "lucide-react";
import { 
  contactPageHeader, 
  regionalContacts, 
  regionalContactsHeader,
  nationalPublications,
  contactCategories,
  helpSectionHeader,
  socialMediaInfo,
  contactFormLabels,
  contactFormPlaceholders
} from "../data/contact";
import { socialLinks } from "../data/navigation";
import "../../styles/components.css";

export default function ContactAF() {
  return (
    <Layout lang="af" showAds={true}>
      {/* Page Header - Modern Design */}
      <section className="wpn-page-header">
        <div className="wpn-page-header__container">
          {/* Breadcrumb */}
          <nav className="wpn-breadcrumb" aria-label="Broodkrummels">
            <ol className="wpn-breadcrumb__list">
              <li className="wpn-breadcrumb__item">
                <Link to="/af" className="wpn-breadcrumb__link">
                  <Home className="wpn-breadcrumb__icon" />
                  Tuis
                </Link>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__separator">/</span>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__current">Kontak ons</span>
              </li>
            </ol>
          </nav>

          <h1 className="wpn-page-header__title">
            {contactPageHeader.title.af}
          </h1>
          <p className="wpn-page-header__subtitle">
            {contactPageHeader.subtitle.af}
          </p>
        </div>
      </section>

      <div className="wpn-container wpn-py-lg">
        {/* Social Media Section */}
        <div className="wpn-social-card mb-12">
          <Facebook className="wpn-social-card__icon" />
          <h3 className="wpn-social-card__title">{socialMediaInfo.facebook.text.af}</h3>
          <div className="wpn-social-card__description">
            <span>{socialMediaInfo.general.text.af}</span>
          </div>
          <div className="wpn-social-card__links">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="wpn-social-card__link"
                aria-label={social.name}
              >
                {social.icon === "facebook" && <Facebook className="size-6" />}
                {social.icon === "instagram" && (
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
                {social.icon === "twitter" && (
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
                {social.icon === "linkedin" && (
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {social.icon === "youtube" && (
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Regional Contacts */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold wpn-text--primary mb-6">{regionalContactsHeader.title.af}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regionalContacts.map((region, idx) => (
              <div key={idx} className="wpn-contact-card">
                <h3 className="wpn-contact-card__title">{region.region.af}</h3>
                <div className="wpn-contact-card__content">
                  <div className="wpn-contact-info">
                    <Mail className="wpn-contact-info__icon" />
                    <div>
                      <p className="wpn-contact-info__label">E-pos:</p>
                      <a href={`mailto:${region.email}`} className="wpn-contact-info__link">
                        {region.email}
                      </a>
                    </div>
                  </div>
                  <div className="wpn-contact-info">
                    <Phone className="wpn-contact-info__icon" />
                    <div>
                      <p className="wpn-contact-info__label">Telefoon:</p>
                      <a href={`tel:${region.phone.replace(/\s/g, '')}`} className="wpn-contact-info__link">
                        {region.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* National Publications */}
        <div className="wpn-publications-banner mb-12">
          <h3 className="wpn-publications-banner__title">Nasionaal</h3>
          <div className="wpn-publications-banner__links">
            {nationalPublications.map((pub, idx) => (
              <a
                key={idx}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="wpn-publications-banner__link"
              >
                {pub.name}
              </a>
            ))}
          </div>
        </div>

        {/* How Can We Help Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold wpn-text--primary mb-6">{helpSectionHeader.title.af}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactCategories.map((category, idx) => (
              <div key={idx} className="wpn-help-card">
                <h4 className="wpn-help-card__title">{category.title.af}</h4>
                <p className="wpn-help-card__description">
                  {category.description.af}
                </p>
                <div className="wpn-help-card__action">
                  {category.email && (
                    <a
                      href={`mailto:${category.email}`}
                      className="wpn-contact-info__link text-sm"
                    >
                      {category.email}
                    </a>
                  )}
                  {category.action && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="wpn-button wpn-button--sm wpn-button--outline mt-3"
                      asChild
                    >
                      <a href="/af/advertise">{category.action.af}</a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="wpn-contact-form">
          <h2 className="wpn-contact-form__title">Stuur vir ons 'n boodskap</h2>
          <form className="wpn-contact-form__fields">
            <div className="wpn-contact-form__row wpn-contact-form__row--2col">
              <div className="wpn-contact-form__field">
                <label htmlFor="name" className="wpn-contact-form__label">
                  {contactFormLabels.name.af} <span className="wpn-contact-form__required">*</span>
                </label>
                <Input
                  id="name"
                  placeholder={contactFormPlaceholders.name.af}
                  required
                />
              </div>
              <div className="wpn-contact-form__field">
                <label htmlFor="email" className="wpn-contact-form__label">
                  {contactFormLabels.email.af} <span className="wpn-contact-form__required">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={contactFormPlaceholders.email.af}
                  required
                />
              </div>
            </div>

            <div className="wpn-contact-form__row wpn-contact-form__row--2col">
              <div className="wpn-contact-form__field">
                <label htmlFor="phone" className="wpn-contact-form__label">
                  {contactFormLabels.phone.af}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={contactFormPlaceholders.phone.af}
                />
              </div>
              <div className="wpn-contact-form__field">
                <label htmlFor="subject" className="wpn-contact-form__label">
                  {contactFormLabels.subject.af} <span className="wpn-contact-form__required">*</span>
                </label>
                <Input
                  id="subject"
                  placeholder={contactFormPlaceholders.subject.af}
                  required
                />
              </div>
            </div>

            <div className="wpn-contact-form__field">
              <label htmlFor="message" className="wpn-contact-form__label">
                {contactFormLabels.message.af} <span className="wpn-contact-form__required">*</span>
              </label>
              <Textarea
                id="message"
                rows={6}
                placeholder={contactFormPlaceholders.message.af}
                required
              />
            </div>

            <div className="wpn-contact-form__actions">
              <Button
                type="submit"
                className="wpn-button wpn-button--accent"
              >
                {contactFormLabels.submit.af}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}