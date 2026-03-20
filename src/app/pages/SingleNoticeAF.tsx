import { useParams, Link, useNavigate } from "react-router";
import Layout from "../components/Layout";
import CategoryBadge from "../components/CategoryBadge";
import NoticeGrid from "../components/NoticeGrid";
import AdSlot from "../components/AdSlot";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Calendar, MapPin, FileText, Download, Share2, AlertCircle, Eye, Lock, Check, Home, Search } from "lucide-react";
import { expandedNotices } from "../data/expandedNotices";
import { getRelatedNotices } from "../lib/search";
import { useState, useEffect } from "react";
import "../../styles/components.css";

export default function SingleNoticeAF() {
  const { id } = useParams();
  const navigate = useNavigate();
  const notice = expandedNotices.find((n) => n.id === id) || expandedNotices[0];
  
  // Mock authentication check - replace with actual auth logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [views] = useState(Math.floor(Math.random() * 10000) + 100);

  // Get related notices
  const relatedNotices = getRelatedNotices(notice.id, notice.category, notice.location, 3, "af");

  useEffect(() => {
    // Check if user is logged in (mock implementation)
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Render login required message if not authenticated
  if (!isAuthenticated) {
    return (
      <Layout lang="af" showAds={true}>
        <div className="wpn-login-wall">
          <div className="wpn-login-wall__container">
            <div className="wpn-login-wall__card">
              <Lock className="wpn-login-wall__icon" />
              
              <h1 className="wpn-login-wall__title">
                Aanmelding vereis
              </h1>
              
              <p className="wpn-login-wall__description">
                U moet aangemeld wees om hierdie openbare kennisgewing te bekyk. Skep 'n gratis rekening of meld aan om toegang tot ons volledige databasis van regskennisgewings te verkry.
              </p>

              <div className="wpn-login-wall__benefits">
                <h2 className="wpn-login-wall__benefits-title">
                  Wat u met 'n rekening kry:
                </h2>
                <div className="wpn-login-wall__benefits-list">
                  <div className="wpn-login-wall__benefit">
                    <Check className="wpn-login-wall__benefit-icon" />
                    <span>Onbeperkte toegang tot kennisgewings</span>
                  </div>
                  <div className="wpn-login-wall__benefit">
                    <Check className="wpn-login-wall__benefit-icon" />
                    <span>Gevorderde soekgereedskap</span>
                  </div>
                  <div className="wpn-login-wall__benefit">
                    <Check className="wpn-login-wall__benefit-icon" />
                    <span>Stoor en volg kennisgewings</span>
                  </div>
                  <div className="wpn-login-wall__benefit">
                    <Check className="wpn-login-wall__benefit-icon" />
                    <span>Dien u eie kennisgewings in</span>
                  </div>
                </div>
              </div>

              <div className="wpn-login-wall__actions">
                <Button 
                  size="lg" 
                  className="wpn-button wpn-button--accent"
                  onClick={() => navigate("/af/aanmeld")}
                >
                  Meld aan
                </Button>
                <Button 
                  size="lg" 
                  className="wpn-button wpn-button--outline"
                  onClick={() => navigate("/af/registreer")}
                >
                  Skep gratis rekening
                </Button>
              </div>

              <div className="wpn-login-wall__footer">
                Gratis om 'n rekening te skep • Geen kredietkaart nodig nie
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout lang="af" showAds={true}>
      <div style={{ backgroundColor: 'var(--color-background-muted)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
        <div className="wpn-container">
          {/* Breadcrumb */}
          <nav className="wpn-breadcrumb" aria-label="Broodkrummels">
            <ol className="wpn-breadcrumb__list">
              <li className="wpn-breadcrumb__item">
                <Link to="/af" className="wpn-breadcrumb__link">
                  <Home className="wpn-breadcrumb__icon" />
                  Tuis
                </Link>
              </li>
              <li className="wpn-breadcrumb__separator" aria-hidden="true">
                /
              </li>
              <li className="wpn-breadcrumb__item">
                <Link to="/af/soek" className="wpn-breadcrumb__link">
                  <Search className="wpn-breadcrumb__icon" />
                  Soek
                </Link>
              </li>
              <li className="wpn-breadcrumb__separator" aria-hidden="true">
                /
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__current">{notice.referenceNumber}</span>
              </li>
            </ol>
          </nav>

          {/* Leaderboard Ad */}
          <div style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
            <AdSlot type="leaderboard" />
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <Card className="p-6 md:p-8 mb-8">
                {/* Header */}
                <div className="mb-6">
                  <CategoryBadge category={notice.category} lang="af" className="mb-4" />
                  <h1 className="mb-4 wp-text-primary">
                    {notice.title.af}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      Gepubliseer: {notice.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      {notice.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="size-4" />
                      Verw: {notice.referenceNumber}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="size-4" />
                      {views} weergawes
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-border">
                  <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--outline">
                    <Download className="size-4 mr-2" />
                    Laai PDF Af
                  </Button>
                  <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--outline">
                    <Share2 className="size-4 mr-2" />
                    Deel
                  </Button>
                </div>

                {/* Notice Content */}
                <div className="prose max-w-none">
                  <p className="text-muted-foreground mb-4">{notice.excerpt.af}</p>
                  <div className="text-foreground leading-relaxed">
                    {notice.body.af.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Attachments */}
                {notice.attachments && notice.attachments.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="font-semibold mb-4">Aanhegsels</h3>
                    <div className="space-y-2">
                      {notice.attachments.map((attachment, index) => (
                        <a
                          key={index}
                          href={attachment}
                          className="flex items-center gap-2 p-3 bg-muted rounded-lg hover:bg-muted/70 transition-colors wp-link"
                        >
                          <FileText className="size-4" />
                          <span className="text-sm">Dokument {index + 1}.pdf</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notice Status */}
                {notice.status && (
                  <div className="mt-6 p-4 bg-muted rounded-lg flex items-start gap-3">
                    <AlertCircle className="size-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Status: {notice.status}</p>
                      <p className="text-sm text-muted-foreground">
                        Hierdie kennisgewing is tans onder hersiening en kan opgedateer word.
                      </p>
                    </div>
                  </div>
                )}
              </Card>

              {/* Native In-Feed Ad before related notices */}
              {relatedNotices.length > 0 && (
                <div style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                  <AdSlot type="in-feed-native" label="Geborg" />
                </div>
              )}

              {/* Related Notices */}
              {relatedNotices.length > 0 && (
                <div>
                  <h2 className="mb-6 wp-text-primary">
                    Verwante Kennisgewings
                  </h2>
                  <NoticeGrid 
                    notices={relatedNotices} 
                    lang="af"
                    columns={3}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-6">
              {/* Notice Details */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 wp-text-primary">
                  Kennisgewing Besonderhede
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Verwysingsnommer</p>
                    <p className="font-medium text-foreground">{notice.referenceNumber}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Kategorie</p>
                    <CategoryBadge category={notice.category} lang="af" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Ligging</p>
                    <p className="font-medium text-foreground">{notice.location}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Gepubliseer Deur</p>
                    <p className="font-medium text-foreground">{notice.publisher}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Publikasiedatum</p>
                    <p className="font-medium text-foreground">{notice.publishDate}</p>
                  </div>
                  {notice.expiryDate && (
                    <div>
                      <p className="text-muted-foreground mb-1">Vervaldatum</p>
                      <p className="font-medium text-foreground">{notice.expiryDate}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-muted-foreground mb-1">Status</p>
                    <p className="font-medium text-foreground capitalize">{notice.status}</p>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              {(notice.contactEmail || notice.contactPhone) && (
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 wp-text-primary">
                    Kontakinligting
                  </h3>
                  <div className="space-y-3 text-sm">
                    {notice.contactEmail && (
                      <div>
                        <p className="text-muted-foreground mb-1">E-pos</p>
                        <p className="text-foreground">
                          <a
                            href={`mailto:${notice.contactEmail}`}
                            className="wp-text-accent hover:underline"
                          >
                            {notice.contactEmail}
                          </a>
                        </p>
                      </div>
                    )}
                    {notice.contactPhone && (
                      <div>
                        <p className="text-muted-foreground mb-1">Telefoon</p>
                        <p className="text-foreground">
                          <a
                            href={`tel:${notice.contactPhone}`}
                            className="wp-text-accent hover:underline"
                          >
                            {notice.contactPhone}
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              )}

              {/* Ads */}
              <AdSlot type="sticky-sidebar" />
              
              <div style={{ marginTop: 'var(--space-6)' }}>
                <AdSlot type="medium-rectangle" />
              </div>
            </aside>
          </div>
        </div>
      </div>
      
      {/* Sticky Footer Ad */}
      <AdSlot type="sticky-footer" dismissable={true} />
    </Layout>
  );
}