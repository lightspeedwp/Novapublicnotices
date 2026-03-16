import { useParams, Link, useNavigate } from "react-router";
import Layout from "../components/Layout";
import CategoryBadge from "../components/CategoryBadge";
import AdSlot from "../components/AdSlot";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Calendar, MapPin, FileText, Download, Share2, AlertCircle, Eye, Lock } from "lucide-react";
import { expandedNotices } from "../data/expandedNotices";
import { useState, useEffect } from "react";

export default function SingleNotice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const notice = expandedNotices.find((n) => n.id === id) || expandedNotices[0];
  
  // Mock authentication check - replace with actual auth logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [views] = useState(Math.floor(Math.random() * 10000) + 100);

  useEffect(() => {
    // Check if user is logged in (mock implementation)
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Render login required message if not authenticated
  if (!isAuthenticated) {
    return (
      <Layout lang="en" showAds={true}>
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="p-12 text-center">
                <Lock className="size-16 text-gray-400 mx-auto mb-6" />
                <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-4">
                  Login Required
                </h1>
                <p className="text-gray-600 mb-8">
                  You need to be logged in to view this public notice. Please login or create a free account to access all notices.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-[#d70025] hover:bg-[#b5001f]"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => navigate("/register")}
                  >
                    Create Account
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout lang="en" showAds={true}>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-[#09082f]">Home</Link>
            {" / "}
            <Link to="/search" className="hover:text-[#09082f]">Search</Link>
            {" / "}
            <span className="text-gray-900">{notice.referenceNumber}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <CategoryBadge category={notice.category} className="mb-4" />
                  <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-4">
                    {notice.title.en}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      Published: {notice.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      {notice.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="size-4" />
                      Ref: {notice.referenceNumber}
                    </span>
                  </div>
                </div>

                {/* Notice Body */}
                <div className="prose max-w-none mb-8">
                  <div className="whitespace-pre-line leading-relaxed text-gray-700">
                    {notice.body.en}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                  <Button variant="outline">
                    <Share2 className="size-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline">
                    <Download className="size-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </Card>

              {/* Related Notices */}
              <div className="mt-8">
                <h2 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">
                  Related Notices
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {expandedNotices.filter(n => n.category === notice.category && n.id !== notice.id).slice(0, 2).map((relatedNotice) => (
                    <Card key={relatedNotice.id} className="p-4">
                      <CategoryBadge category={relatedNotice.category} className="mb-2" />
                      <Link
                        to={`/notice/${relatedNotice.id}`}
                        className="font-semibold text-base hover:text-[#09082f] block mb-2"
                      >
                        {relatedNotice.title.en}
                      </Link>
                      <p className="text-sm text-gray-600">{relatedNotice.location}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Ad Slot */}
              <div className="mt-8">
                <AdSlot slot="ad_in_content_1" height={250} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notice Details */}
              <Card className="p-6">
                <h3 className="font-raleway font-bold text-lg mb-4 text-[#09082f]">
                  Notice Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Reference Number:</span>
                    <p className="text-gray-700">{notice.referenceNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Category:</span>
                    <div className="mt-1">
                      <CategoryBadge category={notice.category} />
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Published:</span>
                    <p className="text-gray-700">{notice.publishDate}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Location:</span>
                    <p className="text-gray-700">{notice.location}</p>
                  </div>
                  {notice.deadline && (
                    <div>
                      <span className="font-medium text-gray-900">Deadline:</span>
                      <p className="text-gray-700">{notice.deadline}</p>
                    </div>
                  )}
                  <div>
                    <span className="font-medium text-gray-900">Published By:</span>
                    <p className="text-gray-700">{notice.publisher}</p>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="font-raleway font-bold text-lg mb-4 text-[#09082f]">
                  Contact Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Contact Person:</span>
                    <p className="text-gray-700">{notice.contactName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Email:</span>
                    <p className="text-gray-700">
                      <a
                        href={`mailto:${notice.contactEmail}`}
                        className="text-[#d70025] hover:underline"
                      >
                        {notice.contactEmail}
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Phone:</span>
                    <p className="text-gray-700">
                      <a
                        href={`tel:${notice.contactPhone}`}
                        className="text-[#d70025] hover:underline"
                      >
                        {notice.contactPhone}
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Category-Specific Fields */}
              {notice.fields && Object.keys(notice.fields).length > 0 && (
                <Card className="p-6">
                  <h3 className="font-raleway font-bold text-lg mb-4 text-[#09082f]">
                    Additional Information
                  </h3>
                  <div className="space-y-3 text-sm">
                    {Object.entries(notice.fields).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-medium text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <p className="text-gray-700">{value}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Report Notice */}
              <Card className="p-6 bg-gray-50">
                <div className="flex items-start gap-3">
                  <AlertCircle className="size-5 text-gray-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700 mb-2">
                      Found an issue with this notice?
                    </p>
                    <Button variant="outline" size="sm">
                      Report Notice
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Ad Slots */}
              <AdSlot slot="ad_sidebar_1" height={250} />
              <AdSlot slot="ad_sidebar_2" height={250} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}