import { myNoticesPageData } from "../../data/account";
import { useState } from "react";
import { Link } from "react-router";
import "./MyNotices.css";

interface Notice {
  id: string;
  title: string;
  category: string;
  status: "published" | "pending" | "draft" | "archived";
  publishDate: string;
  location: string;
  referenceNumber: string;
}

export default function MyNoticesAF() {
  const [activeTab, setActiveTab] = useState<"all" | "published" | "pending" | "draft" | "archived">("all");
  const data = myNoticesPageData;
  const lang = "af";

  // Mock data
  const notices: Notice[] = [
    {
      id: "1",
      title: "Tender Kennisgewing - Verskaffing van Kantooruitrusting",
      category: "tenders",
      status: "published",
      publishDate: "2026-03-10",
      location: "Gauteng",
      referenceNumber: "T2026/001"
    },
    {
      id: "2",
      title: "Boedel van Wyle Jan Smith",
      category: "estates",
      status: "pending",
      publishDate: "2026-03-14",
      location: "Wes-Kaap",
      referenceNumber: "E2026/045"
    },
    {
      id: "3",
      title: "Dranklisensie Aansoek - Kaapstad Sentrum",
      category: "liquor-licences",
      status: "draft",
      publishDate: "",
      location: "Wes-Kaap",
      referenceNumber: "LL2026/123"
    }
  ];

  const filteredNotices = activeTab === "all" 
    ? notices 
    : notices.filter(n => n.status === activeTab);

  const getStatusIcon = (status: Notice["status"]) => {
    switch (status) {
      case "published":
        return FileCheck;
      case "pending":
        return Clock;
      case "draft":
        return FilePlus;
      case "archived":
        return FileText;
    }
  };

  const getStatusText = (status: Notice["status"]) => {
    const statusLabels = {
      published: "Gepubliseer",
      pending: "Wag hersien",
      draft: "Konsep",
      archived: "Geargiveer"
    };
    return statusLabels[status];
  };

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      <Hero data={heroesAF.myNotices} lang="af" />

      <div className="wpn-account-wrapper">
        <div className="wpn-my-notices">
          <div className="wpn-my-notices__container">
            {/* Content Grid */}
            <div className="wpn-my-notices__content">
              {/* Sidebar */}
              <div className="wpn-my-notices__sidebar">
                <AccountSidebar lang={lang} activePage="notices" />
              </div>

              {/* Main Content */}
              <div className="wpn-my-notices__main">
                {/* Tabs */}
                <div className="wpn-my-notices__tabs">
                  {(Object.keys(data.tabs) as Array<keyof typeof data.tabs>).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`wpn-my-notices__tab ${
                        activeTab === tab ? "wpn-my-notices__tab--active" : ""
                      }`}
                    >
                      {data.tabs[tab][lang]}
                    </button>
                  ))}
                </div>

                {/* Notice List or Empty State */}
                {filteredNotices.length === 0 ? (
                  <div className="wpn-my-notices__empty">
                    <FileText className="wpn-my-notices__empty-icon" />
                    <h2 className="wpn-my-notices__empty-title">
                      {data.empty.title[lang]}
                    </h2>
                    <p className="wpn-my-notices__empty-description">
                      {data.empty.description[lang]}
                    </p>
                    <Link to="/af/indien">
                      <Button className="wpn-button wpn-button--accent">
                        {data.empty.action[lang]}
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="wpn-my-notices__list">
                    {filteredNotices.map((notice) => {
                      const StatusIcon = getStatusIcon(notice.status);
                      return (
                        <div key={notice.id} className="wpn-my-notices__list-item">
                          <div className="wpn-my-notices__list-item-header">
                            <h3 className="wpn-my-notices__list-item-title">
                              {notice.title}
                            </h3>
                            <div className={`wpn-my-notices__status wpn-my-notices__status--${notice.status}`}>
                              <StatusIcon className="wpn-my-notices__status-icon" />
                              {getStatusText(notice.status)}
                            </div>
                          </div>

                          <div className="wpn-my-notices__list-item-meta">
                            <div className="wpn-my-notices__list-item-meta-item">
                              <CategoryBadge category={notice.category} lang={lang} />
                            </div>
                            <div className="wpn-my-notices__list-item-meta-item">
                              <FileText className="wpn-my-notices__list-item-meta-icon" />
                              {notice.referenceNumber}
                            </div>
                            {notice.publishDate && (
                              <div className="wpn-my-notices__list-item-meta-item">
                                <Calendar className="wpn-my-notices__list-item-meta-icon" />
                                {notice.publishDate}
                              </div>
                            )}
                            <div className="wpn-my-notices__list-item-meta-item">
                              <MapPin className="wpn-my-notices__list-item-meta-icon" />
                              {notice.location}
                            </div>
                          </div>

                          <div className="wpn-my-notices__list-item-actions">
                            <Link to={`/af/kennisgewing/${notice.id}`}>
                              <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--outline">
                                <Eye className="wpn-my-notices__list-item-action-icon" />
                                {data.actions.view[lang]}
                              </Button>
                            </Link>
                            {notice.status === "draft" && (
                              <Link to={`/af/indien/${notice.category}?edit=${notice.id}`}>
                                <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--outline">
                                  <Edit className="wpn-my-notices__list-item-action-icon" />
                                  {data.actions.edit[lang]}
                                </Button>
                              </Link>
                            )}
                            <Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--outline">
                              <Trash2 className="wpn-my-notices__list-item-action-icon" />
                              {data.actions.delete[lang]}
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}