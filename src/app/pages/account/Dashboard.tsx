import { Link } from "react-router";
import Layout from "../../components/Layout";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { FileText, Package, User, Settings } from "lucide-react";

export default function Dashboard() {
  return (
    <Layout lang="en" showAds={true}>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-8">My Account</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <FileText className="size-10 text-[#d70025] mb-4" />
              <h3 className="font-semibold text-lg mb-2">My Notices</h3>
              <p className="text-sm text-gray-600 mb-4">View and manage your submitted notices</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/my-account/notices">View Notices</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <Package className="size-10 text-[#d70025] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Orders</h3>
              <p className="text-sm text-gray-600 mb-4">Track your orders and payments</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/my-account/orders">View Orders</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <User className="size-10 text-[#d70025] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Profile</h3>
              <p className="text-sm text-gray-600 mb-4">Update your account information</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/my-account/profile">Edit Profile</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <Settings className="size-10 text-[#d70025] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Settings</h3>
              <p className="text-sm text-gray-600 mb-4">Manage account settings</p>
              <Button variant="outline" size="sm">Settings</Button>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-raleway font-bold text-lg mb-4">Recent Notices</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium text-sm">Tender Notice - TEN-2026-001</p>
                  <p className="text-xs text-gray-600">Status: Published</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium text-sm">Estate Notice - EST-2026-002</p>
                  <p className="text-xs text-gray-600">Status: Pending Review</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-raleway font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-[#d70025] hover:bg-[#b5001f]" asChild>
                  <Link to="/submit">Submit New Notice</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/search">Search Notices</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
