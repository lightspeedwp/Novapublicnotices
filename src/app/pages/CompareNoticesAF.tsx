import { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Link } from "react-router";
import {
  Search,
  X,
  Plus,
  FileText,
  MapPin,
  Calendar,
  Hash,
  Building,
  ArrowRight,
} from "lucide-react";
import { sampleNotices } from "../data/sampleNotices";
import CategoryBadge from "../components/CategoryBadge";

export default function CompareNoticesAF() {
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
    .map((id) => sampleNotices.find((n) => n.id === id))
    .filter(Boolean);

  const availableNotices = sampleNotices.filter(
    (notice) =>
      !selectedNotices.includes(notice.id) &&
      (searchQuery === "" ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Layout lang="af" showAds={true}>
      {/* Page Header */}
      <div className="wpn-page-header">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="wpn-page-header__title wpn-heading--white">
              Vergelyk Openbare Kennisgewings
            </h1>
            <p className="text-xl text-white/80 mb-0">
              Kies tot 3 kennisgewings om kant-aan-kant te vergelyk
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
                  Geselekteerde Kennisgewings
                </h2>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {selectedNotices.length} van 3 kennisgewings gekies
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
                Maak Alles Skoon
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
                    aria-label="Verwyder kennisgewing"
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
                Vergelyking
              </h2>
              <Link
                to={`/af/kennisgewing/${selectedNotices[0]}`}
                className="wpn-link--accent text-sm font-medium"
              >
                Bekyk eerste kennisgewing in detail →
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
                        aria-label="Verwyder kennisgewing"
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
                      <Hash className="size-5 text-[var(--muted-foreground)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase mb-1">
                          Verwysing
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
                          Ligging
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
                          Gepubliseer
                        </p>
                        <p className="text-sm wpn-text--primary">
                          {notice?.publishDate}
                        </p>
                      </div>
                    </div>

                    {/* Organization */}
                    {notice?.organization && (
                      <div className="flex items-start gap-3">
                        <Building className="size-5 text-[var(--muted-foreground)] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase mb-1">
                            Organisasie
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
                      to={`/af/kennisgewing/${notice?.id}`}
                      className="wpn-link--accent text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Bekyk volledige kennisgewing
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
                      Voeg nog 'n kennisgewing by om te vergelyk
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Kies uit die lys hieronder
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
              Kies kennisgewings om te vergelyk
            </h3>
            <p className="text-[var(--muted-foreground)]">
              Kies ten minste 2 kennisgewings uit die lys hieronder om te begin vergelyk
            </p>
          </Card>
        )}

        {/* Available Notices */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="wpn-heading-h3 wpn-heading--primary">
              Beskikbare Kennisgewings
            </h2>
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[var(--muted-foreground)]" />
              <Input
                type="search"
                placeholder="Soek kennisgewings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {selectedNotices.length >= 3 ? (
            <Card className="p-8 text-center">
              <p className="text-[var(--muted-foreground)]">
                Maksimum van 3 kennisgewings gekies. Verwyder 'n kennisgewing om nog een by te voeg.
              </p>
            </Card>
          ) : availableNotices.length === 0 ? (
            <Card className="p-8 text-center">
              <Search className="size-12 text-white/20 mx-auto mb-3" />
              <p className="text-[var(--muted-foreground)]">
                Geen kennisgewings gevind wat ooreenstem met "{searchQuery}"
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