import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";

export default function ResetPasswordAF() {
  return (
    <Layout lang="af" showAds={false}>
      <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-2">
              Herstel Wagwoord
            </h1>
            <p className="text-gray-600">Voer u nuwe wagwoord in</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Nuwe Wagwoord
              </label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Bevestig Wagwoord
              </label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" className="w-full bg-[#d70025] hover:bg-[#b5001f]">
              Herstel Wagwoord
            </Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
