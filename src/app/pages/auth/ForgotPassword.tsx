import { Link } from "react-router";
import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";

export default function ForgotPassword() {
  return (
    <Layout lang="en" showAds={false}>
      <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="wpn-heading-h1 wpn-heading--primary mb-2">
              Forgot Password?
            </h1>
            <p className="text-gray-600">Enter your email to receive a reset link</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>

            <Button type="submit" className="w-full wpn-button wpn-button--accent">
              Send Reset Link
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Remember your password?{" "}
            <Link to="/login" className="wpn-link--accent font-medium">
              Sign in here
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
}