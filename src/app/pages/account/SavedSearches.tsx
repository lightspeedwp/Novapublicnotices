import { useState } from "react";
import Layout from "../../components/Layout";
import AccountSidebar from "../../components/AccountSidebar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Bell,
  BellOff,
  Search,
  Trash2,
  Edit,
  Plus,
  FileText,
  MapPin,
  Calendar,
  Tag,
} from "lucide-react";

interface SavedSearch {
  id: string;
  name: string;
  query: string;
  category?: string;
  location?: string;
  dateFrom?: string;
  dateTo?: string;
  notificationsEnabled: boolean;
  lastChecked: string;
  newResults: number;
  createdAt: string;
}

export default function SavedSearches() {
  const [savedSearches] = useState<SavedSearch[]>([
    {
      id: "1",
      name: "Tenders in Gauteng",
      query: "construction",
      category: "Tenders",
      location: "Gauteng",
      notificationsEnabled: true,
      lastChecked: "2 hours ago",
      newResults: 3,
      createdAt: "2026-03-10",
    },
    {
      id: "2",
      name: "Liquor Licences — Western Cape",
      query: "",
      category: "Liquor Licences",
      location: "Western Cape",
      notificationsEnabled: true,
      lastChecked: "5 hours ago",
      newResults: 1,
      createdAt: "2026-03-08",
    },
    {
      id: "3",
      name: "Estate Notices",
      query: "",
      category: "Estates",
      notificationsEnabled: false,
      lastChecked: "1 day ago",
      newResults: 0,
      createdAt: "2026-03-01",
    },
    {
      id: "4",
      name: "Town Planning — Johannesburg",
      query: "rezoning development",
      category: "Town Planning",
      location: "Gauteng",
      notificationsEnabled: true,
      lastChecked: "3 hours ago",
      newResults: 5,
      createdAt: "2026-02-25",
    },
  ]);

  const toggleNotifications = (id: string) => {
    console.log(`Toggle notifications for search ${id}`);
  };

  const deleteSearch = (id: string) => {
    console.log(`Delete search ${id}`);
  };

  const editSearch = (id: string) => {
    console.log(`Edit search ${id}`);
  };

  const runSearch = (search: SavedSearch) => {
    console.log(`Run search ${search.id}`);
  };

  return (
    <Layout lang="en" showAds={true}>
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
              <div className="flex items-center justify-between mb-4">
                <h1 className="wpn-heading-h1 wpn-heading--primary">
                  Saved Searches
                </h1>
                <Button className="wpn-button wpn-button--accent gap-2">
                  <Plus className="size-5" />
                  New Search
                </Button>
              </div>
              <p className="text-gray-600">
                Save your search criteria and get notified when new matching notices are published
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="wpn-icon-badge--lg wpn-bg--accent">
                    <Search className="wpn-icon-badge__icon text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold wpn-text--primary">
                      {savedSearches.length}
                    </p>
                    <p className="text-sm text-gray-600">Saved Searches</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="wpn-icon-badge--lg wpn-icon-badge--primary">
                    <Bell className="wpn-icon-badge__icon text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email alerts</h3>
                    <p className="text-sm text-muted-foreground">Get notified when new notices match your saved searches</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="wpn-icon-badge--lg wpn-icon-badge--pending">
                    <FileText className="wpn-icon-badge__icon text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold wpn-text--primary">
                      {savedSearches.reduce((sum, s) => sum + s.newResults, 0)}
                    </p>
                    <p className="text-sm text-gray-600">New Results</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Saved Searches List */}
            <div className="space-y-4">
              {savedSearches.map((search) => (
                <Card key={search.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="wpn-heading-h4 wpn-heading--primary">
                          {search.name}
                        </h3>
                        {search.newResults > 0 && (
                          <Badge className="wpn-bg--accent text-white">
                            {search.newResults} new
                          </Badge>
                        )}
                        {search.notificationsEnabled ? (
                          <Bell className="size-5 wpn-text--accent" />
                        ) : (
                          <BellOff className="size-5 text-gray-400" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-3">
                        Last checked: {search.lastChecked}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleNotifications(search.id)}
                        title={search.notificationsEnabled ? "Disable notifications" : "Enable notifications"}
                      >
                        {search.notificationsEnabled ? (
                          <Bell className="size-4" />
                        ) : (
                          <BellOff className="size-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => editSearch(search.id)}
                        title="Edit search"
                      >
                        <Edit className="size-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => deleteSearch(search.id)}
                        className="text-red-600 hover:text-red-700"
                        title="Delete search"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Search Criteria */}
                  <div className="space-y-2 mb-4 pb-4 border-b">
                    {search.query && (
                      <div className="flex items-start gap-2">
                        <Search className="size-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase mb-0.5">
                            Keywords
                          </p>
                          <p className="text-sm wpn-text--primary">"{search.query}"</p>
                        </div>
                      </div>
                    )}
                    {search.category && (
                      <div className="flex items-start gap-2">
                        <Tag className="size-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase mb-0.5">
                            Category
                          </p>
                          <p className="text-sm wpn-text--primary">{search.category}</p>
                        </div>
                      </div>
                    )}
                    {search.location && (
                      <div className="flex items-start gap-2">
                        <MapPin className="size-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase mb-0.5">
                            Location
                          </p>
                          <p className="text-sm wpn-text--primary">{search.location}</p>
                        </div>
                      </div>
                    )}
                    {(search.dateFrom || search.dateTo) && (
                      <div className="flex items-start gap-2">
                        <Calendar className="size-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase mb-0.5">
                            Date Range
                          </p>
                          <p className="text-sm wpn-text--primary">
                            {search.dateFrom || "Any"} — {search.dateTo || "Any"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Run Search Button */}
                  <Button
                    onClick={() => runSearch(search)}
                    className="w-full wpn-button--primary"
                  >
                    <Search className="size-4 mr-2" />
                    Run Search
                    {search.newResults > 0 && ` (${search.newResults} new)`}
                  </Button>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {savedSearches.length === 0 && (
              <Card className="p-12 text-center">
                <Search className="size-16 text-gray-300 mx-auto mb-4" />
                <h3 className="wpn-heading-h3 wpn-heading--primary mb-2">
                  No saved searches yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Create a saved search to get notified when new matching notices are published
                </p>
                <Button className="wpn-button wpn-button--accent gap-2">
                  <Plus className="size-5" />
                  Create Your First Search
                </Button>
              </Card>
            )}

            {/* Help Text */}
            <Card className="p-6 mt-8 border-l-4 wpn-border-left--accent bg-blue-50">
              <h4 className="font-semibold wpn-text--primary mb-2">
                💡 How saved searches work
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Searches run automatically every 6 hours</li>
                <li>• Enable notifications to receive email alerts for new results</li>
                <li>• You can save up to 10 searches on your account</li>
                <li>• Edit or delete searches at any time</li>
              </ul>
            </Card>
          </main>
        </div>
      </div>
    </Layout>
  );
}