import { useState } from "react";
import { Link } from "react-router";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  X,
  Plus,
  Calendar,
  MapPin,
  FileText,
  AlertCircle,
  ArrowRight,
  Search,
} from "lucide-react";
import { expandedNotices } from "../data/expandedNotices";
import CategoryBadge from "../components/CategoryBadge";
import { Input } from "../components/ui/input";

export default function CompareNotices() {
  const [selectedNotices, setSelectedNotices] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addNotice = (id: string) => {
    if (selectedNotices.length < 3 && !selectedNotices.includes(id)) {
      setSelectedNotices([...selectedNotices, id]);
    }
  };

  const removeNotice = (id: string) => {
    setSelectedNotices(selectedNotices.filter((noticeId) => noticeId !== id));
  };

  const clearAll = () => {
    setSelectedNotices([]);
  };

  const selectedNoticeData = selectedNotices
    .map((id) => expandedNotices.find((n) => n.id === id))
    .filter(Boolean);

  const availableNotices = expandedNotices.filter(
    (notice) =>
      !selectedNotices.includes(notice.id) &&
      (searchQuery === "" ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Layout lang="en" showAds={true}>
      {/* Page Header */}
      <div className="wpn-page-header">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="wpn-page-header__title wpn-heading--white">
              Compare Public Notices
            </h1>
            <p className="text-xl text-white/80 mb-0">
              Select up to 3 notices to compare side-by-side
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Selection Summary */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="wpn-icon-badge">
                <FileText className="wpn-icon-badge__icon" />
              </div>
              <div>
                <h2 className="wpn-heading-h4 wpn-heading--primary mb-1">
                  Selected Notices
                </h2>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {selectedNotices.length} of 3 notices selected
                </p>
              </div>
            </div>
            {selectedNotices.length > 0 && (
              <Button
                variant="outline"
                onClick={clearAll}
                className="gap-2"
              >
                <X className="size-4" />
                Clear All
              </Button>
            )}
          </div>

          {/* Selected Notice Pills */}
          {selectedNotices.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
              {selectedNoticeData.map((notice) => (
                <div
                  key={notice?.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color-light)] bg-[var(--muted)]"
                >
                  <CategoryBadge category={notice?.category || ""} />
                  <span className="text-sm font-medium max-w-[200px] truncate">
                    {notice?.title}
                  </span>
                  <button
                    onClick={() => removeNotice(notice?.id || "")}
                    className="wpn-text--accent hover:opacity-70 transition-opacity"
                    aria-label="Remove notice"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Comparison View */}
        {selectedNotices.length >= 2 ? (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="wpn-heading-h3 wpn-heading--primary">
                Comparison
              </h2>
              <Link
                to={`/notice/${selectedNotices[0]}`}
                className="wpn-link--accent text-sm font-medium"
              >
                View first notice in detail →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedNoticeData.map((notice) => (
                <Card key={notice?.id} className="p-0 overflow-hidden">
                  {/* Header */}
                  <div className="wpn-bg--primary text-white p-4">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <CategoryBadge category={notice?.category || ""} />
                      <button
                        onClick={() => removeNotice(notice?.id || "")}
                        className="text-white hover:opacity-70 transition-opacity"
                        aria-label="Remove notice"
                      >
                        <X className="size-5" />
                      </button>
                    </div>
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                      {notice?.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-4">
                    {/* Reference Number */}
                    <div className="flex items-start gap-3">
                      <AlertCircle className="size-5 text-[var(--muted-foreground)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase mb-1">
                          Reference
                        </p>
                        <p className="text-sm font-medium wpn-text--primary">
                          {notice?.referenceNumber}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <MapPin className="size-5 text-[var(--muted-foreground)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase mb-1">
                          Location
                        </p>
                        <p className="text-sm wpn-text--primary">
                          {notice?.location}
                        </p>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-start gap-3">
                      <Calendar className="size-5 text-[var(--muted-foreground)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase mb-1">
                          Published
                        </p>
                        <p className="text-sm wpn-text--primary">
                          {notice?.publishDate}
                        </p>
                      </div>
                    </div>

                    {/* Organization */}
                    {notice?.organization && (
                      <div className="flex items-start gap-3">
                        <AlertCircle className="size-5 text-[var(--muted-foreground)] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase mb-1">
                            Organization
                          </p>
                          <p className="text-sm wpn-text--primary">
                            {notice.organization}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Excerpt */}
                    <div className="pt-4 border-t">
                      <p className="text-sm text-[var(--muted-foreground)] line-clamp-3">
                        {notice?.excerpt}
                      </p>
                    </div>

                    {/* View Link */}
                    <Link
                      to={`/notice/${notice?.id}`}
                      className="wpn-link--accent text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      View full notice
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </Card>
              ))}

              {/* Add More Slot */}
              {selectedNotices.length < 3 && (
                <Card className="p-6 flex items-center justify-center border-2 border-dashed border-[var(--border)] bg-[var(--muted)]">
                  <div className="text-center">
                    <Plus className="size-12 text-[var(--muted-foreground)] mx-auto mb-3" />
                    <p className="text-sm text-[var(--muted-foreground)] mb-2">
                      Add another notice to compare
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Select from the list below
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        ) : (
          <Card className="p-12 text-center mb-8">
            <FileText className="size-16 text-white/20 mx-auto mb-4" />
            <h3 className="wpn-heading-h4 wpn-heading--primary mb-2">
              Select notices to compare
            </h3>
            <p className="text-[var(--muted-foreground)]">
              Choose at least 2 notices from the list below to start comparing
            </p>
          </Card>
        )}

        {/* Available Notices */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="wpn-heading-h3 wpn-heading--primary">
              Available Notices
            </h2>
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[var(--muted-foreground)]" />
              <Input
                type="search"
                placeholder="Search notices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {selectedNotices.length >= 3 ? (
            <Card className="p-8 text-center">
              <p className="text-[var(--muted-foreground)]">
                Maximum of 3 notices selected. Remove a notice to add another.
              </p>
            </Card>
          ) : availableNotices.length === 0 ? (
            <Card className="p-8 text-center">
              <Search className="size-12 text-white/20 mx-auto mb-3" />
              <p className="text-[var(--muted-foreground)]">
                No notices found matching "{searchQuery}"
              </p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableNotices.slice(0, 12).map((notice) => (
                <Card
                  key={notice.id}
                  className="p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <CategoryBadge category={notice.category} />
                    <Button
                      size="sm"
                      onClick={() => addNotice(notice.id)}
                      className="wpn-button--accent flex-shrink-0"
                    >
                      <Plus className="size-4" />
                    </Button>
                  </div>
                  <h4 className="font-semibold wpn-text--primary mb-2 line-clamp-2">
                    {notice.title}
                  </h4>
                  <div className="space-y-1 text-xs text-[var(--muted-foreground)]">
                    <p className="flex items-center gap-1">
                      <MapPin className="size-3" />
                      {notice.location}
                    </p>
                    <p className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {notice.publishDate}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}