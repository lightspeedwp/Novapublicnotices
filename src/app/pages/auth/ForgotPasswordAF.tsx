import { Link } from "react-router";
import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";

export default function ForgotPasswordAF() {
  return (
    <Layout lang="af" showAds={false}>
      <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="wpn-heading-h1 wpn-heading--primary mb-2">
              Wagwoord Vergeet?
            </h1>
            <p className="text-gray-600">Voer u e-pos in om 'n herstel skakel te ontvang</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-posadres
              </label>
              <Input id="email" type="email" placeholder="u@voorbeeld.co.za" required />
            </div>

            <Button type="submit" className="w-full wpn-button wpn-button--accent">
              Stuur Herstel Skakel
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Onthou u wagwoord?{" "}
            <Link to="/af/aanmeld" className="wpn-link--accent font-medium">
              Meld hier aan
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
}