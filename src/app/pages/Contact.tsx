import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout lang="en" showAds={true}>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-raleway text-4xl font-bold text-[#09082f] mb-4 text-center">
              Contact Us
            </h1>
            <p className="text-center text-gray-600 mb-12">
              Have questions about public notices? Our team is here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <Mail className="size-8 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-2">
                  For general inquiries and support
                </p>
                <a href="mailto:notices@novanews.co.za" className="text-[#d70025] hover:underline">
                  notices@novanews.co.za
                </a>
              </Card>

              <Card className="p-6">
                <Phone className="size-8 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Monday to Friday, 8:00 AM - 5:00 PM
                </p>
                <a href="tel:+27123456789" className="text-[#d70025] hover:underline">
                  +27 12 345 6789
                </a>
              </Card>

              <Card className="p-6">
                <MapPin className="size-8 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  123 Media Street<br />
                  Johannesburg, 2000<br />
                  South Africa
                </p>
              </Card>

              <Card className="p-6">
                <Clock className="size-8 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </Card>
            </div>

            <Card className="p-8">
              <h2 className="font-raleway text-2xl font-bold text-[#09082f] mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+27 12 345 6789" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Please describe your inquiry..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto bg-[#d70025] hover:bg-[#b5001f] text-white"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
