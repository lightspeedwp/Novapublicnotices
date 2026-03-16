import { Link } from "react-router";
import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function RegisterAF() {
  return (
    <Layout lang="af" showAds={false}>
      <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-2">
              Skep Rekening
            </h1>
            <p className="text-gray-600">Registreer om regskennisgewings in te dien en te bestuur</p>
          </div>

          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="individual">Individueel</TabsTrigger>
              <TabsTrigger value="organisation">Organisasie</TabsTrigger>
            </TabsList>

            <TabsContent value="individual">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Voornaam *
                    </label>
                    <Input id="firstName" placeholder="Jan" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Van *
                    </label>
                    <Input id="lastName" placeholder="van der Merwe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-posadres *
                  </label>
                  <Input id="email" type="email" placeholder="u@voorbeeld.co.za" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefoonnommer
                  </label>
                  <Input id="phone" type="tel" placeholder="+27 12 345 6789" />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Wagwoord *
                  </label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Bevestig Wagwoord *
                  </label>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" required />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Ek stem in tot die <Link to="/af/terms" className="text-[#d70025] hover:underline">Diensbepalings</Link> en <Link to="/af/privacy" className="text-[#d70025] hover:underline">Privaatheidsbeleid</Link>
                  </label>
                </div>

                <Button type="submit" className="w-full bg-[#d70025] hover:bg-[#b5001f]">
                  Skep Rekening
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="organisation">
              <form className="space-y-6">
                <div>
                  <label htmlFor="orgName" className="block text-sm font-medium mb-2">
                    Organisasienaam *
                  </label>
                  <Input id="orgName" placeholder="ABC Regsfirma" required />
                </div>

                <div>
                  <label htmlFor="orgReg" className="block text-sm font-medium mb-2">
                    Registrasienommer
                  </label>
                  <Input id="orgReg" placeholder="2020/123456/07" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                      Kontakpersoon *
                    </label>
                    <Input id="contactName" placeholder="Jan van der Merwe" required />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium mb-2">
                      Kontak E-pos *
                    </label>
                    <Input id="contactEmail" type="email" placeholder="kontak@voorbeeld.co.za" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium mb-2">
                    Kontak Telefoon *
                  </label>
                  <Input id="contactPhone" type="tel" placeholder="+27 12 345 6789" required />
                </div>

                <div>
                  <label htmlFor="orgPassword" className="block text-sm font-medium mb-2">
                    Wagwoord *
                  </label>
                  <Input id="orgPassword" type="password" placeholder="••••••••" required />
                </div>

                <div>
                  <label htmlFor="orgConfirmPassword" className="block text-sm font-medium mb-2">
                    Bevestig Wagwoord *
                  </label>
                  <Input id="orgConfirmPassword" type="password" placeholder="••••••••" required />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="orgTerms" className="mt-1" required />
                  <label htmlFor="orgTerms" className="text-sm text-gray-600">
                    Ek stem in tot die <Link to="/af/terms" className="text-[#d70025] hover:underline">Diensbepalings</Link> en <Link to="/af/privacy" className="text-[#d70025] hover:underline">Privaatheidsbeleid</Link>
                  </label>
                </div>

                <Button type="submit" className="w-full bg-[#d70025] hover:bg-[#b5001f]">
                  Skep Organisasie Rekening
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm text-gray-600">
            Het u reeds 'n rekening?{" "}
            <Link to="/af/aanmeld" className="text-[#d70025] hover:underline font-medium">
              Meld hier aan
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
