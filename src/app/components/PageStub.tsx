import Layout from "./Layout";
import { Card } from "./ui/card";
import { Construction } from "lucide-react";

interface PageStubProps {
  lang?: "en" | "af";
  title: string;
  description?: string;
  showAds?: boolean;
}

export default function PageStub({ lang = "en", title, description, showAds = true }: PageStubProps) {
  return (
    <Layout lang={lang} showAds={showAds}>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center max-w-2xl mx-auto">
            <Construction className="size-16 text-[#d70025] mx-auto mb-6" />
            <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-gray-600 mb-6">{description}</p>
            )}
            <p className="text-sm text-gray-500">
              {lang === "en" 
                ? "This page is part of the Nova News Public Notices Portal prototype." 
                : "Hierdie bladsy is deel van die Nova News Regskennisgewings Portaal prototipe."}
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
