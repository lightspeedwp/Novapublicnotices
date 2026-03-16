import { Link } from "react-router";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Check, Upload, FileText, DollarSign, Clock, Phone } from "lucide-react";

export default function Sales() {
  return (
    <Layout lang="en" showAds={true}>
      <div className="bg-gradient-to-br from-[#09082f] to-[#1a1849] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-raleway text-4xl md:text-5xl font-bold mb-4">
            How Public Notices Work
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about publishing legal public notices in South Africa
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* What are Public Notices */}
            <section className="mb-16">
              <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-6 text-center">
                What are Public Notices?
              </h2>
              <Card className="p-8">
                <p className="text-gray-700 mb-4">
                  Public notices are legally required announcements that must be published to inform the public about matters of legal significance. These include estate notices, tenders, liquor licence applications, town planning proposals, and other statutory requirements.
                </p>
                <p className="text-gray-700">
                  In South Africa, many public notices must be published in official gazettes and newspapers to comply with legal requirements. Our platform provides a digital complement to traditional print publication, ensuring wide visibility and permanent searchability.
                </p>
              </Card>
            </section>

            {/* Publication Options */}
            <section className="mb-16">
              <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-6 text-center">
                Publication Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-raleway text-xl font-semibold text-[#09082f] mb-4">
                    Digital-Only
                  </h3>
                  <div className="text-3xl font-bold text-[#d70025] mb-4">From R500</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Online publication on Nova News Public Notices portal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Searchable and indexed by category and location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Bilingual publication (EN/AF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Downloadable proof of publication</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#d70025] hover:bg-[#b5001f]" asChild>
                    <Link to="/submit">Submit Digital-Only Notice</Link>
                  </Button>
                </Card>

                <Card className="p-6 border-2 border-[#09082f]">
                  <div className="bg-[#09082f] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    RECOMMENDED
                  </div>
                  <h3 className="font-raleway text-xl font-semibold text-[#09082f] mb-4">
                    Print + Digital Package
                  </h3>
                  <div className="text-3xl font-bold text-[#d70025] mb-4">Custom Quote</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Print publication in Nova News newspaper</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Digital publication on the portal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Greater legal compliance and reach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">Dedicated account manager support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#09082f] hover:bg-[#09082f]/90" asChild>
                    <Link to="/contact">Contact Sales Team</Link>
                  </Button>
                </Card>
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-6 text-center">
                Publication Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-6 text-center">
                  <div className="size-12 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    1
                  </div>
                  <Upload className="size-8 text-[#d70025] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Submit</h4>
                  <p className="text-sm text-gray-600">Complete the online form or contact sales for assistance</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="size-12 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    2
                  </div>
                  <DollarSign className="size-8 text-[#d70025] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Pay</h4>
                  <p className="text-sm text-gray-600">Secure online payment via PayFast or invoice for corporate clients</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="size-12 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    3
                  </div>
                  <FileText className="size-8 text-[#d70025] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Review</h4>
                  <p className="text-sm text-gray-600">Our team reviews for compliance and accuracy before publication</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="size-12 rounded-full bg-[#09082f] text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    4
                  </div>
                  <Clock className="size-8 text-[#d70025] mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Publish</h4>
                  <p className="text-sm text-gray-600">Your notice goes live within 48 hours and remains searchable</p>
                </Card>
              </div>
            </section>

            {/* Need Help */}
            <section>
              <Card className="p-8 bg-[#09082f] text-white text-center">
                <Phone className="size-12 mx-auto mb-4" />
                <h2 className="font-raleway text-2xl font-bold mb-4">
                  Need Help with Your Notice?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our sales team can assist with complex notices, bulk submissions, and print + digital packages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="outline" className="bg-white text-[#09082f] hover:bg-gray-100" asChild>
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                  <Button size="lg" className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
                    <Link to="/submit">Submit Online</Link>
                  </Button>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
