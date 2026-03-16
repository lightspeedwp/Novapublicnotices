import { useParams, Link } from "react-router";
import Layout from "../components/Layout";
import CategoryBadge from "../components/CategoryBadge";
import AdSlot from "../components/AdSlot";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Calendar, MapPin, FileText, Download, Share2, AlertCircle } from "lucide-react";
import { sampleNotices } from "../data/sampleNotices";

export default function SingleNoticeAF() {
  const { id } = useParams();
  const notice = sampleNotices.find((n) => n.id === id) || sampleNotices[0];

  return (
    <Layout lang="af" showAds={true}>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/af" className="hover:text-[#09082f]">Tuis</Link>
            {" / "}
            <Link to="/af/soek" className="hover:text-[#09082f]">Soek</Link>
            {" / "}
            <span className="text-gray-900">{notice.referenceNumber}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <CategoryBadge category={notice.category} lang="af" className="mb-4" />
                  <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-4">
                    {notice.title.af}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
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
                  </div>
                </div>

                {/* Notice Body */}
                <div className="prose max-w-none mb-8">
                  <div className="whitespace-pre-line leading-relaxed text-gray-700">
                    {notice.body.af}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                  <Button variant="outline">
                    <Share2 className="size-4 mr-2" />
                    Deel
                  </Button>
                  <Button variant="outline">
                    <Download className="size-4 mr-2" />
                    Laai PDF Af
                  </Button>
                </div>
              </Card>

              {/* Related Notices */}
              <div className="mt-8">
                <h2 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">
                  Verwante Kennisgewings
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sampleNotices.slice(1, 3).map((relatedNotice) => (
                    <Card key={relatedNotice.id} className="p-4">
                      <CategoryBadge category={relatedNotice.category} lang="af" className="mb-2" />
                      <Link
                        to={`/af/kennisgewing/${relatedNotice.id}`}
                        className="font-semibold text-base hover:text-[#09082f] block mb-2"
                      >
                        {relatedNotice.title.af}
                      </Link>
                      <p className="text-sm text-gray-600">{relatedNotice.location}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Ad Slot */}
              <div className="mt-8">
                <AdSlot slot="ad_in_content_1" height={250} label="Advertensie" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notice Details */}
              <Card className="p-6">
                <h3 className="font-raleway font-bold text-lg mb-4 text-[#09082f]">
                  Kennisgewing Besonderhede
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Verwysingsnommer:</span>
                    <p className="text-gray-700">{notice.referenceNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Kategorie:</span>
                    <div className="mt-1">
                      <CategoryBadge category={notice.category} lang="af" />
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Gepubliseer:</span>
                    <p className="text-gray-700">{notice.publishDate}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Ligging:</span>
                    <p className="text-gray-700">{notice.location}</p>
                  </div>
                  {notice.deadline && (
                    <div>
                      <span className="font-medium text-gray-900">Sperdatum:</span>
                      <p className="text-gray-700">{notice.deadline}</p>
                    </div>
                  )}
                  <div>
                    <span className="font-medium text-gray-900">Gepubliseer Deur:</span>
                    <p className="text-gray-700">{notice.publisher}</p>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="font-raleway font-bold text-lg mb-4 text-[#09082f]">
                  Kontakinligting
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Kontakpersoon:</span>
                    <p className="text-gray-700">{notice.contactName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">E-pos:</span>
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
                    <span className="font-medium text-gray-900">Telefoon:</span>
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
                    Bykomende Inligting
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
                      Probleem met hierdie kennisgewing gevind?
                    </p>
                    <Button variant="outline" size="sm">
                      Rapporteer Kennisgewing
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Ad Slots */}
              <AdSlot slot="ad_sidebar_1" height={250} label="Advertensie" />
              <AdSlot slot="ad_sidebar_2" height={250} label="Advertensie" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
