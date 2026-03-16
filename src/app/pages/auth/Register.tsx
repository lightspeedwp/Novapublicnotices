import { Link } from "react-router";
import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function Register() {
  return (
    <Layout lang="en" showAds={false}>
      <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">Register to submit and manage public notices</p>
          </div>

          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="individual">Individual</TabsTrigger>
              <TabsTrigger value="organisation">Organisation</TabsTrigger>
            </TabsList>

            <TabsContent value="individual">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+27 12 345 6789" />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password *
                  </label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Confirm Password *
                  </label>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" required />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the <Link to="/terms" className="text-[#d70025] hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#d70025] hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                <Button type="submit" className="w-full bg-[#d70025] hover:bg-[#b5001f]">
                  Create Account
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="organisation">
              <form className="space-y-6">
                <div>
                  <label htmlFor="orgName" className="block text-sm font-medium mb-2">
                    Organisation Name *
                  </label>
                  <Input id="orgName" placeholder="ABC Law Firm" required />
                </div>

                <div>
                  <label htmlFor="orgReg" className="block text-sm font-medium mb-2">
                    Registration Number
                  </label>
                  <Input id="orgReg" placeholder="2020/123456/07" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                      Contact Person *
                    </label>
                    <Input id="contactName" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium mb-2">
                      Contact Email *
                    </label>
                    <Input id="contactEmail" type="email" placeholder="contact@example.com" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium mb-2">
                    Contact Phone *
                  </label>
                  <Input id="contactPhone" type="tel" placeholder="+27 12 345 6789" required />
                </div>

                <div>
                  <label htmlFor="orgPassword" className="block text-sm font-medium mb-2">
                    Password *
                  </label>
                  <Input id="orgPassword" type="password" placeholder="••••••••" required />
                </div>

                <div>
                  <label htmlFor="orgConfirmPassword" className="block text-sm font-medium mb-2">
                    Confirm Password *
                  </label>
                  <Input id="orgConfirmPassword" type="password" placeholder="••••••••" required />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="orgTerms" className="mt-1" required />
                  <label htmlFor="orgTerms" className="text-sm text-gray-600">
                    I agree to the <Link to="/terms" className="text-[#d70025] hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#d70025] hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                <Button type="submit" className="w-full bg-[#d70025] hover:bg-[#b5001f]">
                  Create Organisation Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#d70025] hover:underline font-medium">
              Sign in here
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
