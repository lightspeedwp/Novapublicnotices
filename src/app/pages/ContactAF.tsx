import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactAF() {
  return (
    <Layout lang="af" showAds={true}>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-raleway text-4xl font-bold text-[#09082f] mb-4 text-center">
              Kontak Ons
            </h1>
            <p className="text-center text-gray-600 mb-12">
              Het u vrae oor regskennisgewings? Ons span is hier om te help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <Mail className="size-8 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Stuur E-pos</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Vir algemene navrae en ondersteuning
                </p>
                <a href="mailto:notices@novanews.co.za" className="text-[#d70025] hover:underline">
                  notices@novanews.co.za
                </a>
              </Card>

              <Card className="p-6">
                <Phone className="size-8 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Bel Ons</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Maandag tot Vrydag, 8:00 VM - 5:00 NM
                </p>
                <a href="tel:+27123456789" className="text-[#d70025] hover:underline">
                  +27 12 345 6789
                </a>
              </Card>

              <Card className="p-6">
                <MapPin className="size-8 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Besoek Ons</h3>
                <p className="text-gray-600 text-sm">
                  Mediastraat 123<br />
                  Johannesburg, 2000<br />
                  Suid-Afrika
                </p>
              </Card>

              <Card className="p-6">
                <Clock className="size-8 text-[#d70025] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Kantoorure</h3>
                <p className="text-gray-600 text-sm">
                  Maandag - Vrydag: 8:00 VM - 5:00 NM<br />
                  Saterdag: 9:00 VM - 1:00 NM<br />
                  Sondag: Gesluit
                </p>
              </Card>
            </div>

            <Card className="p-8">
              <h2 className="font-raleway text-2xl font-bold text-[#09082f] mb-6">
                Stuur Ons 'n Boodskap
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Volle Naam *
                    </label>
                    <Input id="name" placeholder="Jan van der Merwe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-posadres *
                    </label>
                    <Input id="email" type="email" placeholder="jan@voorbeeld.co.za" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefoonnommer
                    </label>
                    <Input id="phone" type="tel" placeholder="+27 12 345 6789" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Onderwerp *
                    </label>
                    <Input id="subject" placeholder="Hoe kan ons help?" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Boodskap *
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Beskryf asseblief u navraag..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto bg-[#d70025] hover:bg-[#b5001f] text-white"
                >
                  Stuur Boodskap
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
