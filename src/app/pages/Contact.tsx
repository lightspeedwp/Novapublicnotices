import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Link } from "react-router";
import {
  Envelope,
  Phone,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  YoutubeLogo,
  House,
} from "@phosphor-icons/react";
import {
  contactPageHeader,
  socialMediaInfo,
  regionalContactsHeader,
  regionalContacts,
  nationalPublications,
  helpSectionHeader,
  contactCategories,
  contactFormLabels,
  contactFormPlaceholders,
} from "../data/contact";
import { socialLinks } from "../data/navigation";
import { useHero } from "../hooks/useHero";
import "../../styles/components.css";
import "../../styles/contact.css";

export default function Contact() {
  const heroData = useHero('contact', 'en');
  
  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      <div className="wpn-container wpn-py-lg">
        {/* Social Media Section */}
        <div className="wpn-social-card wpn-mb-12">
          <FacebookLogo className="wpn-social-card__icon" />
          <h3 className="wpn-social-card__title">{socialMediaInfo.facebook.text.en}</h3>
          <div className="wpn-social-card__description">
            <span>{socialMediaInfo.general.text.en}</span>
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
                {social.icon === "facebook" && <FacebookLogo />}
                {social.icon === "instagram" && <InstagramLogo />}
                {social.icon === "twitter" && <TwitterLogo />}
                {social.icon === "linkedin" && <LinkedinLogo />}
                {social.icon === "youtube" && <YoutubeLogo />}
              </a>
            ))}
          </div>
        </div>

        {/* Regional Contacts */}
        <div className="wpn-mb-12">
          <h2 className="wpn-heading-h2 wpn-mb-6">{regionalContactsHeader.title.en}</h2>
          <div className="wpn-grid wpn-grid--2col wpn-gap-lg">
            {regionalContacts.map((region, idx) => (
              <div key={idx} className="wpn-contact-card">
                <h3 className="wpn-contact-card__title">{region.region.en}</h3>
                <div className="wpn-contact-card__content">
                  <div className="wpn-contact-info">
                    <Envelope className="wpn-contact-info__icon" />
                    <div>
                      <p className="wpn-contact-info__label">Email:</p>
                      <a href={`mailto:${region.email}`} className="wpn-contact-info__link">
                        {region.email}
                      </a>
                    </div>
                  </div>
                  <div className="wpn-contact-info">
                    <Phone className="wpn-contact-info__icon" />
                    <div>
                      <p className="wpn-contact-info__label">Phone:</p>
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
        <div className="wpn-publications-banner wpn-mb-12">
          <h3 className="wpn-publications-banner__title">National</h3>
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
        <div className="wpn-mb-12">
          <h2 className="wpn-heading-h2 wpn-mb-6">{helpSectionHeader.title.en}</h2>
          <div className="wpn-grid wpn-grid--2col wpn-gap-lg">
            {contactCategories.map((category, idx) => (
              <div key={idx} className="wpn-help-card">
                <h4 className="wpn-help-card__title">{category.title.en}</h4>
                <p className="wpn-help-card__description">
                  {category.description.en}
                </p>
                <div className="wpn-help-card__action">
                  {category.email && (
                    <a
                      href={`mailto:${category.email}`}
                      className="wpn-contact-info__link"
                    >
                      {category.email}
                    </a>
                  )}
                  {category.action && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="wpn-button wpn-button--sm wpn-button--outline"
                      asChild
                    >
                      <a href="/advertise">{category.action.en}</a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="wpn-contact-form">
          <h2 className="wpn-contact-form__title">Send us a message</h2>
          <form className="wpn-contact-form__fields">
            <div className="wpn-contact-form__row wpn-contact-form__row--2col">
              <div className="wpn-contact-form__field">
                <label htmlFor="name" className="wpn-contact-form__label">
                  {contactFormLabels.name.en} <span className="wpn-contact-form__required">*</span>
                </label>
                <Input
                  id="name"
                  placeholder={contactFormPlaceholders.name.en}
                  required
                />
              </div>
              <div className="wpn-contact-form__field">
                <label htmlFor="email" className="wpn-contact-form__label">
                  {contactFormLabels.email.en} <span className="wpn-contact-form__required">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={contactFormPlaceholders.email.en}
                  required
                />
              </div>
            </div>

            <div className="wpn-contact-form__row wpn-contact-form__row--2col">
              <div className="wpn-contact-form__field">
                <label htmlFor="phone" className="wpn-contact-form__label">
                  {contactFormLabels.phone.en}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={contactFormPlaceholders.phone.en}
                />
              </div>
              <div className="wpn-contact-form__field">
                <label htmlFor="subject" className="wpn-contact-form__label">
                  {contactFormLabels.subject.en} <span className="wpn-contact-form__required">*</span>
                </label>
                <Input
                  id="subject"
                  placeholder={contactFormPlaceholders.subject.en}
                  required
                />
              </div>
            </div>

            <div className="wpn-contact-form__field">
              <label htmlFor="message" className="wpn-contact-form__label">
                {contactFormLabels.message.en} <span className="wpn-contact-form__required">*</span>
              </label>
              <Textarea
                id="message"
                rows={6}
                placeholder={contactFormPlaceholders.message.en}
                required
              />
            </div>

            <div className="wpn-contact-form__actions">
              <Button
                type="submit"
                className="wpn-button wpn-button--accent"
              >
                {contactFormLabels.submit.en}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
