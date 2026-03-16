import { Link } from "react-router";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { 
  Check, 
  Upload, 
  FileText, 
  DollarSign, 
  Clock, 
  Phone, 
  Users, 
  Search, 
  ShoppingCart,
  CheckCircle,
  HelpCircle,
  Shield,
  Zap,
  Mail
} from "lucide-react";

export default function Sales() {
  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#09082f] to-[#1a1849] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-raleway text-4xl md:text-5xl font-bold mb-4">
            How to Publish Public Notices
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to know about publishing legal notices in South Africa
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
              <Link to="/submit">Start Publishing</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-[#09082f] hover:bg-gray-100" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* What are Public Notices */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-6 text-center">
              What are Public Notices?
            </h2>
            <Card className="p-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Public notices are <strong>legally required announcements</strong> that must be published to inform the public about matters of legal significance. These notices serve to protect the rights of interested parties by ensuring transparency and providing an opportunity for public participation or objection.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In South Africa, many public notices must be published in <strong>official government gazettes</strong> and/or <strong>newspapers</strong> to comply with various legislative requirements. Common types include:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <span><strong>Estate Notices:</strong> Notifications to creditors and beneficiaries of deceased estates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <span><strong>Tenders:</strong> Government and municipal procurement opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <span><strong>Liquor Licence Applications:</strong> Notices for liquor licence applications, transfers, and renewals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <span><strong>Town Planning:</strong> Rezoning applications, land use changes, and development proposals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <span><strong>Environmental Notices:</strong> Environmental impact assessments and public participation processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <span><strong>Business Licences:</strong> Various commercial and professional licence applications</span>
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                <p className="text-sm text-gray-800">
                  <strong>Important:</strong> Nova News Public Notices provides a <strong>digital platform</strong> for publishing and archiving public notices, ensuring wide visibility and permanent searchability. Always verify specific legal requirements for your notice type, as some may require publication in print media or official gazettes in addition to digital platforms.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works - Step by Step */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-12 text-center">
              How It Works: 3 Simple Steps
            </h2>
            
            {/* Step 1 */}
            <div className="mb-12">
              <div className="flex items-start gap-6">
                <div className="size-16 bg-[#d70025] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">
                    Submit Your Notice
                  </h3>
                  <Card className="p-6">
                    <p className="text-gray-700 mb-4">
                      There are two ways to submit your public notice:
                    </p>
                    
                    <div className="space-y-4 mb-4">
                      <div className="border-l-4 border-[#d70025] pl-4">
                        <h4 className="font-semibold text-[#09082f] mb-2">Self-Service Submission (Online)</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                            <span>Create a free account or log in</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                            <span>Select your notice type from our comprehensive categories</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                            <span>Fill out the notice details using our guided form</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                            <span>Upload supporting documents (if required)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                            <span>Preview your notice before submission</span>
                          </li>
                        </ul>
                        <Button className="mt-4 bg-[#d70025] hover:bg-[#b5001f]" asChild>
                          <Link to="/submit">Submit Online</Link>
                        </Button>
                      </div>

                      <div className="border-l-4 border-gray-400 pl-4">
                        <h4 className="font-semibold text-[#09082f] mb-2">Sales-Assisted Submission (Full Service)</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <Phone className="size-4 text-gray-600 shrink-0 mt-0.5" />
                            <span>Contact our sales team via phone or email</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Phone className="size-4 text-gray-600 shrink-0 mt-0.5" />
                            <span>Discuss your specific requirements with an expert</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Phone className="size-4 text-gray-600 shrink-0 mt-0.5" />
                            <span>Receive guidance on legal requirements and formatting</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Phone className="size-4 text-gray-600 shrink-0 mt-0.5" />
                            <span>Send your notice content via email or document upload</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Phone className="size-4 text-gray-600 shrink-0 mt-0.5" />
                            <span>Our team handles formatting and publication for you</span>
                          </li>
                        </ul>
                        <div className="mt-4 flex gap-3">
                          <Button variant="outline" asChild>
                            <Link to="/contact">Contact Sales</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <a href="tel:+27123456789">
                              <Phone className="size-4 mr-2" />
                              012 345 6789
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <div className="flex items-start gap-6">
                <div className="size-16 bg-[#d70025] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">
                    Review & Payment
                  </h3>
                  <Card className="p-6">
                    <p className="text-gray-700 mb-4">
                      Once you've submitted your notice, here's what happens:
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                          <FileText className="size-4 text-[#d70025]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Content Review</h4>
                          <p className="text-sm text-gray-600">
                            Our editorial team reviews your notice for completeness and compliance with publishing standards. This typically takes 2-4 business hours during working days.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                          <ShoppingCart className="size-4 text-[#d70025]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Quote & Pricing</h4>
                          <p className="text-sm text-gray-600">
                            You'll receive a detailed quote based on your notice type, word count, duration, and any additional services requested. Pricing is transparent with no hidden fees.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                          <DollarSign className="size-4 text-[#d70025]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Secure Payment</h4>
                          <p className="text-sm text-gray-600">
                            Complete payment through our secure checkout powered by industry-standard payment gateways. We accept credit/debit cards, EFT, and instant EFT payments.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="size-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                          <Mail className="size-4 text-[#d70025]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Confirmation</h4>
                          <p className="text-sm text-gray-600">
                            Receive instant confirmation via email with your order details, publication schedule, and tax invoice.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <p className="text-sm text-gray-800">
                        <strong>Money-Back Guarantee:</strong> If we cannot publish your notice for any reason, you will receive a full refund within 5 business days.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex items-start gap-6">
                <div className="size-16 bg-[#d70025] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-raleway text-2xl font-bold text-[#09082f] mb-4">
                    Publication & Proof
                  </h3>
                  <Card className="p-6">
                    <p className="text-gray-700 mb-4">
                      Your notice is published and you receive comprehensive documentation:
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="size-5 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Immediate Publication</h4>
                          <p className="text-sm text-gray-600">
                            Once payment is confirmed, your notice goes live on our platform within 1-2 hours. You'll receive an email notification with the direct link to your published notice.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="size-5 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Proof of Publication</h4>
                          <p className="text-sm text-gray-600">
                            Download an official Affidavit of Publication (certified PDF) from your account dashboard. This serves as legal proof that the notice was published on the specified date.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="size-5 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Permanent Archive</h4>
                          <p className="text-sm text-gray-600">
                            Your notice remains permanently searchable in our public archive. Interested parties can find it via search engines, our search functionality, and category browsing.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="size-5 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Distribution & Visibility</h4>
                          <p className="text-sm text-gray-600">
                            Notices are distributed across the Novus Media network, indexed by search engines, and shared with relevant industry stakeholders for maximum visibility.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-sm text-[#09082f] mb-2">Publication Duration</h5>
                        <p className="text-sm text-gray-700">
                          Standard: 30 days minimum<br />
                          Extended options available<br />
                          Permanent archive access
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-sm text-[#09082f] mb-2">Reach & Analytics</h5>
                        <p className="text-sm text-gray-700">
                          Track views in real-time<br />
                          Download statistics<br />
                          Share directly from platform
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publication Options & Pricing */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-12 text-center">
              Publication Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Digital Only */}
              <Card className="p-6 border-2 border-transparent hover:border-[#d70025] transition-colors">
                <div className="text-center mb-4">
                  <Zap className="size-12 text-[#d70025] mx-auto mb-3" />
                  <h3 className="font-raleway text-xl font-bold text-[#09082f] mb-2">
                    Digital Only
                  </h3>
                  <div className="text-3xl font-bold text-[#d70025]">From R500</div>
                  <p className="text-sm text-gray-600 mt-1">Per notice</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Online publication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>30 days visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Permanent archive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>PDF proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Basic analytics</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/pricing">View Details</Link>
                </Button>
              </Card>

              {/* Digital + Print */}
              <Card className="p-6 border-2 border-[#d70025] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d70025] text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="text-center mb-4">
                  <FileText className="size-12 text-[#d70025] mx-auto mb-3" />
                  <h3 className="font-raleway text-xl font-bold text-[#09082f] mb-2">
                    Digital + Print
                  </h3>
                  <div className="text-3xl font-bold text-[#d70025]">From R1,500</div>
                  <p className="text-sm text-gray-600 mt-1">Per notice</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>All Digital features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Print publication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Regional newspaper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Certified affidavit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#d70025] hover:bg-[#b5001f]" asChild>
                  <Link to="/pricing">View Details</Link>
                </Button>
              </Card>

              {/* Premium Package */}
              <Card className="p-6 border-2 border-transparent hover:border-[#d70025] transition-colors">
                <div className="text-center mb-4">
                  <Shield className="size-12 text-[#d70025] mx-auto mb-3" />
                  <h3 className="font-raleway text-xl font-bold text-[#09082f] mb-2">
                    Premium
                  </h3>
                  <div className="text-3xl font-bold text-[#d70025]">From R3,500</div>
                  <p className="text-sm text-gray-600 mt-1">Per notice</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>All Print features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Official gazette</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>National publication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-[#d70025] shrink-0 mt-0.5" />
                    <span>Priority publishing</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/pricing">View Details</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-12 text-center">
              Why Choose Nova News Public Notices?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <Users className="size-10 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
                <p className="text-sm text-gray-600">
                  Our experienced team understands South African legal publishing requirements and is here to guide you through every step of the process.
                </p>
              </Card>

              <Card className="p-6">
                <Clock className="size-10 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Fast Turnaround</h3>
                <p className="text-sm text-gray-600">
                  Most notices are reviewed and published within 24 hours. Urgent publications can be arranged with our premium service.
                </p>
              </Card>

              <Card className="p-6">
                <Search className="size-10 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Maximum Visibility</h3>
                <p className="text-sm text-gray-600">
                  Your notice is indexed by search engines, distributed across our media network, and permanently archived for easy discovery.
                </p>
              </Card>

              <Card className="p-6">
                <Shield className="size-10 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Secure & Compliant</h3>
                <p className="text-sm text-gray-600">
                  We maintain high standards of data security and ensure all publications comply with relevant South African legislation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl font-bold text-[#09082f] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">How long does it take to publish a notice?</h3>
                    <p className="text-sm text-gray-600">
                      Digital-only notices are typically published within 24 hours after payment confirmation. Print publications require 3-5 business days lead time depending on the publication schedule.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Is digital publication legally compliant?</h3>
                    <p className="text-sm text-gray-600">
                      Digital publication is accepted for many notice types, but some legislation specifically requires print or official gazette publication. We recommend consulting with your legal advisor or contacting our team to confirm requirements for your specific notice type.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Can I edit my notice after submission?</h3>
                    <p className="text-sm text-gray-600">
                      Before publication, you can request amendments at no extra charge. After publication, amendments may require republication at an additional cost. Contact our support team for assistance.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="size-5 text-[#d70025] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                    <p className="text-sm text-gray-600">
                      We accept all major credit and debit cards, instant EFT, and standard EFT transfers. For corporate accounts, we can arrange invoicing with 30-day payment terms.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="outline" asChild>
                  <Link to="/faq">View Full FAQ</Link>
                </Button>
                <Button className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#09082f] to-[#1a1849] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl font-bold mb-4">
            Ready to Publish Your Notice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your submission now or speak with our team to discuss your requirements
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
              <Link to="/submit">Submit Notice Online</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-[#09082f] hover:bg-gray-100" asChild>
              <Link to="/contact">
                <Phone className="size-4 mr-2" />
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
