import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Users, Target, TrendingUp, Globe, Award, BarChart } from "lucide-react";

export default function Advertise() {
  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#09082f] to-[#1a1850] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-raleway text-4xl md:text-5xl font-bold mb-6">
              Advertise With Nova News Public Notices
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Reach South Africa's legal and business professionals through our trusted public notices platform
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#09082f] hover:bg-gray-100" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Advertise Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-raleway text-3xl font-bold text-center text-[#09082f] mb-12">
            Why Advertise on Nova News Public Notices?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Targeted Audience</h3>
              <p className="text-gray-600 text-sm">
                Reach legal professionals, business owners, and decision-makers actively searching for public notices and legal information.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">High Intent Traffic</h3>
              <p className="text-gray-600 text-sm">
                Our visitors are actively seeking specific legal notices, creating a highly engaged audience for your message.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Growing Platform</h3>
              <p className="text-gray-600 text-sm">
                Part of the Novus Media network, reaching thousands of readers across South Africa daily.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">National Reach</h3>
              <p className="text-gray-600 text-sm">
                Bilingual platform (English/Afrikaans) covering all provinces and major metropolitan areas.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Trusted Brand</h3>
              <p className="text-gray-600 text-sm">
                Nova News is a established media brand trusted by legal professionals and businesses nationwide.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <BarChart className="size-12 text-[#d70025] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Detailed Analytics</h3>
              <p className="text-gray-600 text-sm">
                Track your campaign performance with comprehensive analytics and reporting tools.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Advertising Options Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-raleway text-3xl font-bold text-center text-[#09082f] mb-12">
            Advertising Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">Display Advertising</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Banner ads in multiple sizes and formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Strategic placement on high-traffic pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Category-specific targeting options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Geographic targeting by province or city</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Flexible CPM or CPC pricing models</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-[#d70025] hover:bg-[#b5001f]" asChild>
                <Link to="/contact">Inquire About Display Ads</Link>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">Sponsored Content</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Featured notice placements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Priority listing in search results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Newsletter sponsorship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Category page sponsorships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d70025] mt-1">•</span>
                  <span>Exclusive positioning options</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-[#d70025] hover:bg-[#b5001f]" asChild>
                <Link to="/contact">Inquire About Sponsorships</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Novus Media Network Section */}
      <div className="py-16 bg-[#09082f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl font-bold mb-6">
              Part of the Novus Media Network
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              When you advertise with Nova News Public Notices, you gain access to the entire Novus Media network 
              of digital properties, reaching diverse audiences across South Africa's digital media landscape.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#d70025]">500K+</div>
                <div className="text-sm text-gray-300">Monthly Readers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d70025]">15+</div>
                <div className="text-sm text-gray-300">Digital Properties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d70025]">9</div>
                <div className="text-sm text-gray-300">Provinces Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d70025]">2</div>
                <div className="text-sm text-gray-300">Official Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-12 max-w-3xl mx-auto text-center bg-gradient-to-br from-gray-50 to-white">
            <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 mb-8">
              Contact our advertising team today to discuss how we can help you reach your target audience 
              through the Nova News Public Notices platform and the broader Novus Media network.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Media Kit</Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                For advertising inquiries: <a href="mailto:advertising@novanews.co.za" className="text-[#d70025] hover:underline">advertising@novanews.co.za</a>
                <br />
                Phone: <a href="tel:+27123456789" className="text-[#d70025] hover:underline">012 345 6789</a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
