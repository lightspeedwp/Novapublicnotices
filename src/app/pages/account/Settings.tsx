import { useState } from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { useHero } from "../../hooks/useHero";
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

export default function Settings() {
  const heroData = useHero('settings', 'en');
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
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <AccountSidebar lang="en" />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="wpn-heading-h1 wpn-heading--primary mb-2">
                Settings & Preferences
              </h1>
              <p className="text-gray-600">
                Manage your account settings, notifications, and privacy preferences
              </p>
            </div>

            {/* Success Alert */}
            {showSuccessAlert && (
              <Card className="p-4 mb-6 border-l-4 wpn-border-left--accent bg-green-50">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold wpn-text--primary">
                      Settings saved successfully!
                    </p>
                    <p className="text-sm text-gray-600">
                      Your preferences have been updated.
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
                      Notification Settings
                    </h2>
                    <p className="text-sm text-gray-600">
                      Choose how you want to receive notifications
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
                          Email Notifications
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Receive notifications via email
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
                          Push Notifications
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Receive browser push notifications
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
                        Saved Search Alerts
                      </h4>
                      <p className="text-sm text-gray-600">
                        Get notified when new notices match your saved searches
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
                        Submission Status Updates
                      </h4>
                      <p className="text-sm text-gray-600">
                        Receive updates on your notice submissions (approval, changes requested)
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
                        Marketing Communications
                      </h4>
                      <p className="text-sm text-gray-600">
                        Receive promotional offers and news from Nova News
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
                  Notification Frequency
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      Email Digest Frequency
                    </label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time (as they happen)</SelectItem>
                        <SelectItem value="daily">Daily Digest</SelectItem>
                        <SelectItem value="weekly">Weekly Digest</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                      Control how often you receive email notifications
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      Saved Search Check Frequency
                    </label>
                    <Select defaultValue="6hours">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1hour">Every hour</SelectItem>
                        <SelectItem value="6hours">Every 6 hours</SelectItem>
                        <SelectItem value="12hours">Twice daily</SelectItem>
                        <SelectItem value="24hours">Once daily</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                      How often to check for new notices matching your saved searches
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
                      Privacy Settings
                    </h2>
                    <p className="text-sm text-gray-600">
                      Control your privacy and data sharing preferences
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
                          Public Profile
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Make your profile visible to other users
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
                          Show Email Address
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Display your email on published notices
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
                          Show Phone Number
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Display your phone number on published notices
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
                  Language & Region
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      Preferred Language
                    </label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="af">Afrikaans</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                      Choose your preferred language for the interface
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      Date Format
                    </label>
                    <Select defaultValue="dd-mm-yyyy">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd-mm-yyyy">DD/MM/YYYY (16/03/2026)</SelectItem>
                        <SelectItem value="mm-dd-yyyy">MM/DD/YYYY (03/16/2026)</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY-MM-DD (2026-03-16)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium wpn-text--primary mb-2">
                      Timezone
                    </label>
                    <Select defaultValue="sast">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sast">South Africa Standard Time (SAST)</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>

              {/* Data & Storage */}
              <Card className="p-6">
                <h3 className="wpn-heading-h4 wpn-heading--primary mb-4">
                  Data & Storage
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-50 border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold wpn-text--primary mb-1">
                          Search History
                        </h4>
                        <p className="text-sm text-gray-600">
                          Your search history helps us provide better recommendations
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" type="button" className="wpn-button wpn-button--sm wpn-button--outline">
                      Clear Search History
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50 border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold wpn-text--primary mb-1">
                          Viewed Notices Cache
                        </h4>
                        <p className="text-sm text-gray-600">
                          Recently viewed notices are cached for faster loading
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" type="button" className="wpn-button wpn-button--sm wpn-button--outline">
                      Clear Cache
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Save Button */}
              <div className="flex items-center justify-between pt-6 border-t">
                <p className="text-sm text-gray-600">
                  Changes will take effect immediately
                </p>
                <Button type="submit" className="wpn-button wpn-button--accent gap-2">
                  <Save className="size-5" />
                  Save Settings
                </Button>
              </div>
            </form>

            {/* Danger Zone */}
            <Card className="p-6 mt-8 border-red-200 bg-red-50">
              <h3 className="wpn-heading-h4 text-red-700 mb-4">
                Danger Zone
              </h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">
                      Download Your Data
                    </h4>
                    <p className="text-sm text-red-600">
                      Export all your account data, submissions, and saved searches
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--destructive">
                    Export Data
                  </Button>
                </div>
                
                <div className="flex items-start justify-between gap-4 pt-4 border-t border-red-200">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">
                      Delete Account
                    </h4>
                    <p className="text-sm text-red-600">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--destructive">
                    Delete Account
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