import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { FileText, Package, User, LogOut, Home, ShoppingCart, Bell } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <Layout lang="en" showAds={true}>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-8">My Account</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation - WooCommerce Style */}
            <div className="lg:col-span-1">
              <Card className="p-0 overflow-hidden">
                <nav className="flex flex-col">
                  <Link 
                    to="/my-account" 
                    className="px-6 py-4 hover:bg-gray-50 border-l-4 border-[#d70025] bg-gray-50 font-medium flex items-center gap-3"
                  >
                    <Home className="size-4" />
                    Dashboard
                  </Link>
                  <Link 
                    to="/my-account/orders" 
                    className="px-6 py-4 hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300 flex items-center gap-3"
                  >
                    <Package className="size-4" />
                    Orders
                  </Link>
                  <Link 
                    to="/my-account/notices" 
                    className="px-6 py-4 hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300 flex items-center gap-3"
                  >
                    <FileText className="size-4" />
                    My Notices
                  </Link>
                  <Link 
                    to="/my-account/profile" 
                    className="px-6 py-4 hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300 flex items-center gap-3"
                  >
                    <User className="size-4" />
                    Account Details
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="px-6 py-4 hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300 flex items-center gap-3 text-left w-full"
                  >
                    <LogOut className="size-4" />
                    Logout
                  </button>
                </nav>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Welcome Message */}
              <Card className="p-6">
                <p className="text-gray-700">
                  Hello <strong>John Doe</strong> (not you?{" "}
                  <button onClick={handleLogout} className="text-[#d70025] hover:underline">
                    Log out
                  </button>
                  )
                </p>
                <p className="text-gray-600 mt-2">
                  From your account dashboard you can view your{" "}
                  <Link to="/my-account/orders" className="text-[#d70025] hover:underline">
                    recent orders
                  </Link>
                  , manage your{" "}
                  <Link to="/my-account/notices" className="text-[#d70025] hover:underline">
                    published notices
                  </Link>
                  , and edit your{" "}
                  <Link to="/my-account/profile" className="text-[#d70025] hover:underline">
                    account details
                  </Link>
                  .
                </p>
              </Card>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <div className="size-16 bg-[#d70025]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="size-8 text-[#d70025]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#09082f] mb-1">12</h3>
                  <p className="text-sm text-gray-600">Total Orders</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="size-16 bg-[#d70025]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="size-8 text-[#d70025]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#09082f] mb-1">8</h3>
                  <p className="text-sm text-gray-600">Published Notices</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="size-16 bg-[#d70025]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="size-8 text-[#d70025]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#09082f] mb-1">3</h3>
                  <p className="text-sm text-gray-600">Pending Review</p>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-raleway text-xl font-bold text-[#09082f]">Recent Orders</h2>
                  <Link to="/my-account/orders" className="text-sm text-[#d70025] hover:underline">
                    View all
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="pb-3 font-semibold">Order</th>
                        <th className="pb-3 font-semibold">Date</th>
                        <th className="pb-3 font-semibold">Status</th>
                        <th className="pb-3 font-semibold">Total</th>
                        <th className="pb-3 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3 font-medium">#12345</td>
                        <td className="py-3 text-gray-600">March 14, 2026</td>
                        <td className="py-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="py-3 font-medium">R 2,450.00</td>
                        <td className="py-3">
                          <Link to="/my-account/orders" className="text-[#d70025] hover:underline text-xs">
                            View
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">#12344</td>
                        <td className="py-3 text-gray-600">March 10, 2026</td>
                        <td className="py-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Processing
                          </span>
                        </td>
                        <td className="py-3 font-medium">R 1,850.00</td>
                        <td className="py-3">
                          <Link to="/my-account/orders" className="text-[#d70025] hover:underline text-xs">
                            View
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">#12343</td>
                        <td className="py-3 text-gray-600">March 5, 2026</td>
                        <td className="py-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="py-3 font-medium">R 3,200.00</td>
                        <td className="py-3">
                          <Link to="/my-account/orders" className="text-[#d70025] hover:underline text-xs">
                            View
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
                    <Link to="/submit">
                      <FileText className="size-4 mr-2" />
                      Submit New Notice
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/search">Browse All Notices</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
