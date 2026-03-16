import { Link } from "react-router";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout lang="en" showAds={false}>
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="font-raleway text-6xl font-bold text-[#09082f] mb-4">404</h1>
          <h2 className="font-raleway text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button className="bg-[#d70025] hover:bg-[#b5001f]" asChild>
            <Link to="/">
              <Home className="mr-2 size-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
