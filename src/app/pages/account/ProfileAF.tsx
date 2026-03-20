import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { useHero } from "../../hooks/useHero";
import AccountSidebar from "../../components/AccountSidebar";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { CheckCircle, AlertCircle } from "lucide-react";
import { profilePageData } from "../../data/account";
import { useState } from "react";
import "./Profile.css";

export default function ProfileAF() {
  const heroData = useHero('profile', 'af');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const data = profilePageData;
  const lang = "af";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 5000);
  };

  return (
    <Layout lang={lang} showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="af" />}

      <div className="wpn-profile">
        <div className="wpn-profile__container">
          {/* Header */}
          <div className="wpn-profile__header">
            <h1 className="wpn-profile__title">{data.title[lang]}</h1>
            <p className="wpn-profile__subtitle">{data.subtitle[lang]}</p>
          </div>

          {/* Content Grid */}
          <div className="wpn-profile__content">
            {/* Sidebar */}
            <div className="wpn-profile__sidebar">
              <AccountSidebar lang={lang} activePage="profile" />
            </div>

            {/* Main Content */}
            <div className="wpn-profile__main">
              {/* Success Alert */}
              {showSuccessAlert && (
                <div className="wpn-profile__alert wpn-profile__alert--success">
                  <CheckCircle className="wpn-profile__alert-icon" />
                  <div>
                    <strong>Profiel suksesvol opgedateer!</strong>
                    <br />
                    Jou veranderings is gestoor.
                  </div>
                </div>
              )}

              {/* Personal Information Section */}
              <section className="wpn-profile__section">
                <div className="wpn-profile__section-header">
                  <h2 className="wpn-profile__section-title">
                    {data.sections.personal[lang]}
                  </h2>
                  <p className="wpn-profile__section-description">
                    Werk jou persoonlike besonderhede en kontakinligting by.
                  </p>
                </div>

                <form className="wpn-profile__form" onSubmit={handleSubmit}>
                  <div className="wpn-profile__form-grid wpn-profile__form-grid--cols-2">
                    <div className="wpn-profile__form-group">
                      <label htmlFor="firstName" className="wpn-profile__label wpn-profile__label--required">
                        {data.fields.firstName[lang]}
                      </label>
                      <Input id="firstName" defaultValue="Jan" required />
                    </div>

                    <div className="wpn-profile__form-group">
                      <label htmlFor="lastName" className="wpn-profile__label wpn-profile__label--required">
                        {data.fields.lastName[lang]}
                      </label>
                      <Input id="lastName" defaultValue="van der Merwe" required />
                    </div>
                  </div>

                  <div className="wpn-profile__form-group">
                    <label htmlFor="email" className="wpn-profile__label wpn-profile__label--required">
                      {data.fields.email[lang]}
                    </label>
                    <Input id="email" type="email" defaultValue="jan@voorbeeld.co.za" required />
                  </div>

                  <div className="wpn-profile__form-group">
                    <label htmlFor="phone" className="wpn-profile__label">
                      {data.fields.phone[lang]}
                    </label>
                    <Input id="phone" type="tel" defaultValue="+27 12 345 6789" />
                  </div>

                  <div className="wpn-profile__form-group">
                    <label htmlFor="language" className="wpn-profile__label">
                      {data.fields.language[lang]}
                    </label>
                    <Select defaultValue="af">
                      <SelectTrigger id="language">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="af">Afrikaans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="wpn-profile__form-actions">
                    <Button type="submit" className="wpn-button wpn-button--accent">
                      {data.buttons.save[lang]}
                    </Button>
                    <Button type="button" variant="outline" className="wpn-button wpn-button--outline">
                      {data.buttons.cancel[lang]}
                    </Button>
                  </div>
                </form>
              </section>

              {/* Publisher Information Section */}
              <section className="wpn-profile__section">
                <div className="wpn-profile__section-header">
                  <h2 className="wpn-profile__section-title">
                    {data.sections.publisher[lang]}
                  </h2>
                  <p className="wpn-profile__section-description">
                    Bestuur jou uitgewer profiel vir kennisgewing indienings.
                  </p>
                </div>

                <div className="wpn-profile__alert wpn-profile__alert--info">
                  <AlertCircle className="wpn-profile__alert-icon" />
                  <div>
                    Uitgewer inligting word gebruik vir amptelike korrespondensie en verskyn op gepubliseerde kennisgewings.
                  </div>
                </div>

                <form className="wpn-profile__form" onSubmit={handleSubmit}>
                  <div className="wpn-profile__form-group">
                    <label htmlFor="companyName" className="wpn-profile__label">
                      {data.fields.companyName[lang]}
                    </label>
                    <Input id="companyName" defaultValue="Acme Regsdienste" />
                  </div>

                  <div className="wpn-profile__form-grid wpn-profile__form-grid--cols-2">
                    <div className="wpn-profile__form-group">
                      <label htmlFor="vatNumber" className="wpn-profile__label">
                        {data.fields.vatNumber[lang]}
                      </label>
                      <Input id="vatNumber" defaultValue="4170226023" />
                    </div>

                    <div className="wpn-profile__form-group">
                      <label htmlFor="address" className="wpn-profile__label">
                        {data.fields.address[lang]}
                      </label>
                      <Input id="address" defaultValue="123 Hoofstraat, Kaapstad" />
                    </div>
                  </div>

                  <div className="wpn-profile__form-actions">
                    <Button type="submit" className="wpn-button wpn-button--accent">
                      {data.buttons.save[lang]}
                    </Button>
                  </div>
                </form>
              </section>

              {/* Security Section */}
              <section className="wpn-profile__section">
                <div className="wpn-profile__section-header">
                  <h2 className="wpn-profile__section-title">
                    {data.sections.security[lang]}
                  </h2>
                  <p className="wpn-profile__section-description">
                    Werk jou wagwoord en sekuriteit instellings by.
                  </p>
                </div>

                <form className="wpn-profile__form" onSubmit={handleSubmit}>
                  <div className="wpn-profile__form-group">
                    <label htmlFor="currentPassword" className="wpn-profile__label wpn-profile__label--required">
                      {data.fields.currentPassword[lang]}
                    </label>
                    <Input id="currentPassword" type="password" required />
                  </div>

                  <div className="wpn-profile__form-grid wpn-profile__form-grid--cols-2">
                    <div className="wpn-profile__form-group">
                      <label htmlFor="newPassword" className="wpn-profile__label wpn-profile__label--required">
                        {data.fields.newPassword[lang]}
                      </label>
                      <Input id="newPassword" type="password" required />
                    </div>

                    <div className="wpn-profile__form-group">
                      <label htmlFor="confirmPassword" className="wpn-profile__label wpn-profile__label--required">
                        {data.fields.confirmPassword[lang]}
                      </label>
                      <Input id="confirmPassword" type="password" required />
                    </div>
                  </div>

                  <div className="wpn-profile__form-actions">
                    <Button type="submit" className="wpn-button wpn-button--accent">
                      {data.buttons.changePassword[lang]}
                    </Button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}