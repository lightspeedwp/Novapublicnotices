import { Link } from "react-router";
import Layout from "../../components/Layout";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { FileText, Package, User, Settings } from "lucide-react";

export default function DashboardAF() {
  return (
    <Layout lang="af" showAds={true}>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-8">My Rekening</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <FileText className="size-10 text-[#d70025] mb-4" />
              <h3 className="font-semibold text-lg mb-2">My Kennisgewings</h3>
              <p className="text-sm text-gray-600 mb-4">Bekyk en bestuur u ingedien kennisgewings</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/af/my-rekening/kennisgewings">Bekyk Kennisgewings</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <Package className="size-10 text-[#d70025] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Bestellings</h3>
              <p className="text-sm text-gray-600 mb-4">Volg u bestellings en betalings</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/af/my-rekening/bestellings">Bekyk Bestellings</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <User className="size-10 text-[#d70025] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Profiel</h3>
              <p className="text-sm text-gray-600 mb-4">Werk u rekening inligting by</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/af/my-rekening/profiel">Redigeer Profiel</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <Settings className="size-10 text-[#d70025] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Instellings</h3>
              <p className="text-sm text-gray-600 mb-4">Bestuur rekening instellings</p>
              <Button variant="outline" size="sm">Instellings</Button>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-raleway font-bold text-lg mb-4">Onlangse Kennisgewings</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium text-sm">Tender Kennisgewing - TEN-2026-001</p>
                  <p className="text-xs text-gray-600">Status: Gepubliseer</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium text-sm">Boedel Kennisgewing - EST-2026-002</p>
                  <p className="text-xs text-gray-600">Status: Wagter Hersien</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-raleway font-bold text-lg mb-4">Vinnige Aksies</h3>
              <div className="space-y-3">
                <Button className="w-full bg-[#d70025] hover:bg-[#b5001f]" asChild>
                  <Link to="/af/indien">Dien Nuwe Kennisgewing In</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/af/soek">Soek Kennisgewings</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
