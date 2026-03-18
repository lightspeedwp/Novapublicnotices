import { useState } from "react";
import Layout from "../../components/Layout";
import AccountSidebar from "../../components/AccountSidebar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Switch } from "../../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Bell,
  Mail,
  Shield,
  Globe,
  Eye,
  CheckCircle,
  Save,
} from "lucide-react";

export default function SettingsAF() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [searchAlerts, setSearchAlerts] = useState(true);
  const [submissionUpdates, setSubmissionUpdates] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [publicProfile, setPublicProfile] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 5000);
  };

  return (
    <Layout lang="af" showAds={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <AccountSidebar lang="af" />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="wpn-heading-h1 wpn-heading--primary mb-2">
                Instellings & Voorkeure
              </h1>
              <p className="text-gray-600">
                Bestuur u rekeninginstellings, kennisgewings en privaatheidvoorkeure
              </p>
            </div>

            {/* Success Alert */}
            {showSuccessAlert && (
              <Card className="p-4 mb-6 border-l-4 wpn-border-left--accent bg-green-50">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold wpn-text--primary">
                      Instellings suksesvol gestoor!
                    </p>
                    <p className="text-sm text-gray-600">
                      U voorkeure is opgedateer.
                    </p>
                  </div>
                </div>
              </Card>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-6">
              {/* Notification Settings */}
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="wpn-icon-badge wpn-bg--accent">
                    <Bell className="wpn-icon-badge__icon text-white" />
                  </div>
                  <div>
                    <h2 className="wpn-heading-h3 wpn-heading--primary mb-1">
                      Kennisgewinginstellings
                    </h2>
                    <p className="text-sm text-gray-600">
                      Kies hoe u kennisgewings wil ontvang
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Email Notifications */}
                  <div className="flex items-start justify-between gap-4 py-3 border-b">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="size-5 wpn-text--accent" />
                        <h4 className="font-semibold wpn-text--primary">
                          E-poskennisgewings
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Ontvang kennisgewings via e-pos
                      </p>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>

                  {/* Push Notifications */}
                  <div className="flex items-start justify-between gap-4 py-3 border-b">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Bell className="size-5 wpn-text--accent" />
                        <h4 className="font-semibold wpn-text--primary">
                          Stootkennisgewings
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Ontvang blaaier stootkennisgewings
                      </p>
                    </div>
                    <Switch
                      checked={pushNotifications}
                      onCheckedChange={setPushNotifications}
                    />
                  </div>

                  {/* Search Alerts */}
                  <div className="flex items-start justify-between gap-4 py-3 border-b">
                    <div className="flex-1">
                      <h4 className="font-semibold wpn-text--primary mb-1">
                        Gestoorde Soektogwaarskuwings
                      </h4>
                      <p className="text-sm text-gray-600">
                        Ontvang kennisgewings wanneer nuwe kennisgewings by u gestoorde soektogte pas
                      </p>
                    </div>
                    <Switch
                      checked={searchAlerts}
                      onCheckedChange={setSearchAlerts}
                    />
                  </div>

                  {/* Submission Updates */}
                  <div className="flex items-start justify-between gap-4 py-3 border-b">
                    <div className="flex-1">
                      <h4 className="font-semibold wpn-text--primary mb-1">
                        Indieningstatusopdaterings
                      </h4>
                      <p className="text-sm text-gray-600">
                        Ontvang opdaterings oor u kennisgewingindiening (goedkeuring, veranderinge versoek)
                      </p>
                    </div>
                    <Switch
                      checked={submissionUpdates}
                      onCheckedChange={setSubmissionUpdates}
                    />
                  </div>

                  {/* Marketing Emails */}
                  <div className="flex items-start justify-between gap-4 py-3">
                    <div className="flex-1">
                      <h4 className="font-semibold wpn-text--primary mb-1">
                        Bemarkingskommunikasie
                      </h4>
                      <p className="text-sm text-gray-600">
                        Ontvang promosieaanbiedinge en nuus van Nova News
                      </p>
                    </div>
                    <Switch
                      checked={marketingEmails}
                      onCheckedChange={setMarketingEmails}
                    />
                  </div>
                </div>
              </Card>

              {/* Notification Frequency */}
              <Card className="p-6">
                <h3 className="wpn-heading-h4 wpn-heading--primary mb-4">
                  Kennisgewingfrekwensie
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      E-pos Opsommingfrekwensie
                    </label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Reële tyd (soos dit gebeur)</SelectItem>
                        <SelectItem value="daily">Daaglikse Opsomming</SelectItem>
                        <SelectItem value="weekly">Weeklikse Opsomming</SelectItem>
                        <SelectItem value="never">Nooit</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                      Beheer hoe gereeld u e-poskennisgewings ontvang
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      Gestoorde Soektog Kontrolefrekwensie
                    </label>
                    <Select defaultValue="6hours">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1hour">Elke uur</SelectItem>
                        <SelectItem value="6hours">Elke 6 uur</SelectItem>
                        <SelectItem value="12hours">Twee keer per dag</SelectItem>
                        <SelectItem value="24hours">Een keer per dag</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                      Hoe gereeld om te kontroleer vir nuwe kennisgewings wat by u gestoorde soektogte pas
                    </p>
                  </div>
                </div>
              </Card>

              {/* Privacy Settings */}
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="wpn-icon-badge wpn-icon-badge--primary">
                    <Shield className="wpn-icon-badge__icon text-white" />
                  </div>
                  <div>
                    <h2 className="wpn-heading-h3 wpn-heading--primary mb-1">
                      Privaatheidinstellings
                    </h2>
                    <p className="text-sm text-gray-600">
                      Beheer u privaatheid en datadelingsvoorkeure
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Public Profile */}
                  <div className="flex items-start justify-between gap-4 py-3 border-b">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Globe className="size-5 wpn-text--accent" />
                        <h4 className="font-semibold wpn-text--primary">
                          Openbare Profiel
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Maak u profiel sigbaar vir ander gebruikers
                      </p>
                    </div>
                    <Switch
                      checked={publicProfile}
                      onCheckedChange={setPublicProfile}
                    />
                  </div>

                  {/* Show Email */}
                  <div className="flex items-start justify-between gap-4 py-3 border-b">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Eye className="size-5 wpn-text--accent" />
                        <h4 className="font-semibold wpn-text--primary">
                          Wys E-posadres
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Vertoon u e-posadres op gepubliseerde kennisgewings
                      </p>
                    </div>
                    <Switch
                      checked={showEmail}
                      onCheckedChange={setShowEmail}
                    />
                  </div>

                  {/* Show Phone */}
                  <div className="flex items-start justify-between gap-4 py-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Eye className="size-5 wpn-text--accent" />
                        <h4 className="font-semibold wpn-text--primary">
                          Wys Telefoonnommer
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Vertoon u telefoonnommer op gepubliseerde kennisgewings
                      </p>
                    </div>
                    <Switch
                      checked={showPhone}
                      onCheckedChange={setShowPhone}
                    />
                  </div>
                </div>
              </Card>

              {/* Language & Region */}
              <Card className="p-6">
                <h3 className="wpn-heading-h4 wpn-heading--primary mb-4">
                  Taal & Streek
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      Voorkeur Taal
                    </label>
                    <Select defaultValue="af">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">Engels</SelectItem>
                        <SelectItem value="af">Afrikaans</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                      Kies u voorkeur taal vir die koppelvlak
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      Datumformaat
                    </label>
                    <Select defaultValue="dd-mm-yyyy">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd-mm-yyyy">DD/MM/JJJJ (16/03/2026)</SelectItem>
                        <SelectItem value="mm-dd-yyyy">MM/DD/JJJJ (03/16/2026)</SelectItem>
                        <SelectItem value="yyyy-mm-dd">JJJJ-MM-DD (2026-03-16)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      Tydsone
                    </label>
                    <Select defaultValue="sast">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sast">Suid-Afrika Standaardtyd (SAST)</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="cat">Sentraal-Afrika Tyd (CAT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>

              {/* Data & Storage */}
              <Card className="p-6">
                <h3 className="wpn-heading-h4 wpn-heading--primary mb-4">
                  Data & Berging
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-50 border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold wpn-text--primary mb-1">
                          Soekgeskiedenis
                        </h4>
                        <p className="text-sm text-gray-600">
                          U soekgeskiedenis help ons om beter aanbevelings te verskaf
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" type="button" className="wpn-button wpn-button--sm wpn-button--outline">
                      Maak Soekgeskiedenis Skoon
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50 border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold wpn-text--primary mb-1">
                          Bekykte Kennisgewings Kas
                        </h4>
                        <p className="text-sm text-gray-600">
                          Onlangs bekykte kennisgewings word gekaseer vir vinniger laai
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" type="button" className="wpn-button wpn-button--sm wpn-button--outline">
                      Maak Kas Skoon
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Save Button */}
              <div className="flex items-center justify-between pt-6 border-t">
                <p className="text-sm text-gray-600">
                  Veranderinge sal onmiddellik van krag word
                </p>
                <Button type="submit" className="wpn-button wpn-button--accent gap-2">
                  <Save className="size-5" />
                  Stoor Instellings
                </Button>
              </div>
            </form>

            {/* Danger Zone */}
            <Card className="p-6 mt-8 border-red-200 bg-red-50">
              <h3 className="wpn-heading-h4 text-red-700 mb-4">
                Gevaarsone
              </h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">
                      Laai U Data Af
                    </h4>
                    <p className="text-sm text-red-600">
                      Voer al u rekeningdata, indiening en gestoorde soektogte uit
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--destructive">
                    Voer Data Uit
                  </Button>
                </div>
                
                <div className="flex items-start justify-between gap-4 pt-4 border-t border-red-200">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">
                      Skrap Rekening
                    </h4>
                    <p className="text-sm text-red-600">
                      Skrap u rekening en alle geassosieerde data permanent
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--destructive">
                    Skrap Rekening
                  </Button>
                </div>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </Layout>
  );
}