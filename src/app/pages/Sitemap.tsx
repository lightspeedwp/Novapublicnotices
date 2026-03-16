import { Link } from "react-router";
import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import { categories } from "../data/categories";

export default function Sitemap() {
  return (
    <Layout lang="en" showAds={true}>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-raleway text-4xl font-bold text-[#09082f] mb-8">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <Card className="p-6">
              <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">Main Pages</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-[#d70025] hover:underline">Home</Link></li>
                <li><Link to="/search" className="text-[#d70025] hover:underline">Search Notices</Link></li>
                <li><Link to="/about" className="text-[#d70025] hover:underline">About Us</Link></li>
                <li><Link to="/contact" className="text-[#d70025] hover:underline">Contact</Link></li>
                <li><Link to="/sales" className="text-[#d70025] hover:underline">How It Works</Link></li>
                <li><Link to="/pricing" className="text-[#d70025] hover:underline">Pricing</Link></li>
                <li><Link to="/advertise" className="text-[#d70025] hover:underline">Advertise</Link></li>
                <li><Link to="/faq" className="text-[#d70025] hover:underline">FAQ</Link></li>
              </ul>
            </Card>

            {/* Notice Categories */}
            <Card className="p-6">
              <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">Notice Categories</h2>
              <ul className="space-y-2 text-sm">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link to={`/category/${cat.slug}`} className="text-[#d70025] hover:underline">
                      {cat.name.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Account & Submission */}
            <Card className="p-6">
              <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">Account & Submission</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/login" className="text-[#d70025] hover:underline">Login</Link></li>
                <li><Link to="/register" className="text-[#d70025] hover:underline">Register</Link></li>
                <li><Link to="/my-account" className="text-[#d70025] hover:underline">My Account</Link></li>
                <li><Link to="/my-account/notices" className="text-[#d70025] hover:underline">My Notices</Link></li>
                <li><Link to="/my-account/orders" className="text-[#d70025] hover:underline">Orders</Link></li>
                <li><Link to="/my-account/profile" className="text-[#d70025] hover:underline">Profile</Link></li>
                <li><Link to="/submit" className="text-[#d70025] hover:underline">Submit Notice</Link></li>
              </ul>
            </Card>

            {/* Legal Pages */}
            <Card className="p-6">
              <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">Legal</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="text-[#d70025] hover:underline">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-[#d70025] hover:underline">Privacy Policy</Link></li>
              </ul>
            </Card>

            {/* Afrikaans Pages */}
            <Card className="p-6">
              <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">Afrikaans</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/af" className="text-[#d70025] hover:underline">Tuis</Link></li>
                <li><Link to="/af/soek" className="text-[#d70025] hover:underline">Soek Kennisgewings</Link></li>
                <li><Link to="/af/oor-ons" className="text-[#d70025] hover:underline">Oor Ons</Link></li>
                <li><Link to="/af/kontak" className="text-[#d70025] hover:underline">Kontak</Link></li>
                <li><Link to="/af/verkope" className="text-[#d70025] hover:underline">Hoe Dit Werk</Link></li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
