import { useParams, Link, useNavigate } from "react-router";
import Layout from "../components/Layout";
import CategoryBadge from "../components/CategoryBadge";
import NoticeGrid from "../components/NoticeGrid";
import AdSlot from "../components/AdSlot";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { 
  CalendarBlank, 
  MapPin, 
  FileText, 
  DownloadSimple, 
  ShareNetwork, 
  Warning, 
  Eye, 
  LockKey, 
  Check, 
  House, 
  MagnifyingGlass 
} from "@phosphor-icons/react";
import { expandedNotices } from "../data/expandedNotices";
import { getRelatedNotices } from "../lib/search";
import { useState, useEffect } from "react";
import "../../styles/single-notice.css";

export default function SingleNotice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const notice = expandedNotices.find((n) => n.id === id) || expandedNotices[0];
  
  // Mock authentication check - replace with actual auth logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [views] = useState(Math.floor(Math.random() * 10000) + 100);

  // Get related notices
  const relatedNotices = getRelatedNotices(notice.id, notice.category, notice.location, 3, "en");

  useEffect(() => {
    // Check if user is logged in (mock implementation)
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Render login required message if not authenticated
  if (!isAuthenticated) {
    return (
      <Layout lang="en" showAds={true}>
        <div className="wpn-login-wall">
          <div className="wpn-login-wall__container">
            <div className="wpn-login-wall__card">
              <LockKey className="wpn-login-wall__icon" />
              
              <h1 className="wpn-login-wall__title">
                Login required
              </h1>
              
              <p className="wpn-login-wall__description">
                You need to be logged in to view this public notice. Create a free account or sign in to access our complete database of legal notices.
              </p>

              <div className="wpn-login-wall__benefits">
                <h2 className="wpn-login-wall__benefits-title">
                  What you get with an account:
                </h2>
                <div className="wpn-login-wall__benefits-list">
                  <div className="wpn-login-wall__benefit">
                    <Check className="wpn-login-wall__benefit-icon" />
                    <span>Unlimited notice access</span>
                  </div>
                  <div className="wpn-login-wall__benefit">
                    <Check className="wpn-login-wall__benefit-icon" />
                    <span>Advanced search tools</span>
                  </div>
                  <div className="wpn-login-wall__benefit">
                    <Check className="wpn-login-wall__benefit-icon" />
                    <span>Save and track notices</span>
                  </div>
                  <div className="wpn-login-wall__benefit">
                    <Check className="wpn-login-wall__benefit-icon" />
                    <span>Submit your own notices</span>
                  </div>
                </div>
              </div>

              <div className="wpn-login-wall__actions">
                <Button 
                  size="lg" 
                  className="wpn-button wpn-button--accent"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>
                <Button 
                  size="lg" 
                  className="wpn-button wpn-button--outline"
                  onClick={() => navigate("/register")}
                >
                  Create free account
                </Button>
              </div>

              <div className="wpn-login-wall__footer">
                Free to create an account • No credit card required
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout lang="en" showAds={true}>
      <div className="wpn-notice-wrapper">
        <div className="wpn-container">
          {/* Breadcrumb */}
          <nav className="wpn-breadcrumb" aria-label="Breadcrumb">
            <ol className="wpn-breadcrumb__list">
              <li className="wpn-breadcrumb__item">
                <Link to="/" className="wpn-breadcrumb__link">
                  <House className="wpn-breadcrumb__icon" />
                  Home
                </Link>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__separator">/</span>
              </li>
              <li className="wpn-breadcrumb__item">
                <Link to="/search" className="wpn-breadcrumb__link">
                  <MagnifyingGlass className="wpn-breadcrumb__icon" />
                  Search
                </Link>
              </li>
              <li className="wpn-breadcrumb__item">
                <span className="wpn-breadcrumb__separator">/</span>
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

          <div className="wpn-notice-layout">
            {/* Main Content */}
            <div className="wpn-notice-layout__main">
              <div className="wpn-notice-card">
                {/* Header */}
                <div className="wpn-notice-header">
                  <CategoryBadge category={notice.category} className="wpn-mb-4" />
                  <h1 className="wpn-notice-header__title">
                    {notice.title.en}
                  </h1>
                  <div className="wpn-notice-header__meta">
                    <span className="wpn-notice-header__meta-item">
                      <CalendarBlank className="wpn-notice-header__meta-icon" />
                      Published: {notice.publishDate}
                    </span>
                    <span className="wpn-notice-header__meta-item">
                      <MapPin className="wpn-notice-header__meta-icon" />
                      {notice.location}
                    </span>
                    <span className="wpn-notice-header__meta-item">
                      <FileText className="wpn-notice-header__meta-icon" />
                      Ref: {notice.referenceNumber}
                    </span>
                    <span className="wpn-notice-header__meta-item">
                      <Eye className="wpn-notice-header__meta-icon" />
                      {views} views
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="wpn-notice-actions">
                  <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--outline">
                    <DownloadSimple className="wpn-notice-actions__icon" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--outline">
                    <ShareNetwork className="wpn-notice-actions__icon" />
                    Share
                  </Button>
                </div>

                {/* Notice Content */}
                <div className="wpn-notice-body">
                  <p className="wpn-notice-body__excerpt">{notice.excerpt.en}</p>
                  <div>
                    {notice.body.en.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="wpn-notice-body__paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Attachments */}
                {notice.attachments && notice.attachments.length > 0 && (
                  <div className="wpn-notice-attachments">
                    <h3 className="wpn-notice-attachments__title">Attachments</h3>
                    <div className="wpn-notice-attachments__list">
                      {notice.attachments.map((attachment, index) => (
                        <a
                          key={index}
                          href={attachment}
                          className="wpn-notice-attachments__item"
                        >
                          <FileText className="wpn-notice-attachments__item-icon" />
                          <span className="wpn-notice-attachments__item-text">Document {index + 1}.pdf</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notice Status */}
                {notice.status && (
                  <div className="wpn-notice-status">
                    <Warning className="wpn-notice-status__icon" />
                    <div>
                      <p className="wpn-notice-status__title">Status: {notice.status}</p>
                      <p className="wpn-notice-status__description">
                        This notice is currently under review and may be updated.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Native In-Feed Ad before related notices */}
              {relatedNotices.length > 0 && (
                <div style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                  <AdSlot type="in-feed-native" label="Sponsored" />
                </div>
              )}

              {/* Related Notices */}
              {relatedNotices.length > 0 && (
                <div className="wpn-related-notices">
                  <h2 className="wpn-related-notices__title">
                    Related Notices
                  </h2>
                  <NoticeGrid 
                    notices={relatedNotices} 
                    lang="en"
                    columns={3}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="wpn-notice-layout__sidebar">
              <div className="wpn-notice-layout__sidebar-inner">
                {/* Notice Details */}
                <div className="wpn-notice-details">
                  <h3 className="wpn-notice-details__title">
                    Notice Details
                  </h3>
                  <div className="wpn-notice-details__list">
                    <div>
                      <p className="wpn-notice-details__item-label">Reference Number</p>
                      <p className="wpn-notice-details__item-value">{notice.referenceNumber}</p>
                    </div>
                    <div>
                      <p className="wpn-notice-details__item-label">Category</p>
                      <CategoryBadge category={notice.category} />
                    </div>
                    <div>
                      <p className="wpn-notice-details__item-label">Location</p>
                      <p className="wpn-notice-details__item-value">{notice.location}</p>
                    </div>
                    <div>
                      <p className="wpn-notice-details__item-label">Published By</p>
                      <p className="wpn-notice-details__item-value">{notice.publisher}</p>
                    </div>
                    <div>
                      <p className="wpn-notice-details__item-label">Publication Date</p>
                      <p className="wpn-notice-details__item-value">{notice.publishDate}</p>
                    </div>
                    {notice.expiryDate && (
                      <div>
                        <p className="wpn-notice-details__item-label">Expiry Date</p>
                        <p className="wpn-notice-details__item-value">{notice.expiryDate}</p>
                      </div>
                    )}
                    <div>
                      <p className="wpn-notice-details__item-label">Status</p>
                      <p className="wpn-notice-details__item-value">{notice.status}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                {(notice.contactEmail || notice.contactPhone) && (
                  <div className="wpn-notice-details">
                    <h3 className="wpn-notice-details__title">
                      Contact Information
                    </h3>
                    <div className="wpn-notice-details__list">
                      {notice.contactEmail && (
                        <div>
                          <p className="wpn-notice-details__item-label">Email</p>
                          <p className="wpn-notice-details__item-value">
                            <a
                              href={`mailto:${notice.contactEmail}`}
                              className="wpn-link--accent"
                            >
                              {notice.contactEmail}
                            </a>
                          </p>
                        </div>
                      )}
                      {notice.contactPhone && (
                        <div>
                          <p className="wpn-notice-details__item-label">Phone</p>
                          <p className="wpn-notice-details__item-value">
                            <a
                              href={`tel:${notice.contactPhone}`}
                              className="wpn-link--accent"
                            >
                              {notice.contactPhone}
                            </a>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Ads */}
                <AdSlot type="sticky-sidebar" />
                
                <div style={{ marginTop: 'var(--space-6)' }}>
                  <AdSlot type="medium-rectangle" />
                </div>
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