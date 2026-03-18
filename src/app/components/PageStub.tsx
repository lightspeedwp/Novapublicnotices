import Layout from "./Layout";
import { Wrench } from "@phosphor-icons/react";
import "../../styles/page-stub.css";

interface PageStubProps {
  lang?: "en" | "af";
  title: string;
  description?: string;
  showAds?: boolean;
}

export default function PageStub({ lang = "en", title, description, showAds = true }: PageStubProps) {
  return (
    <Layout lang={lang} showAds={showAds}>
      <div className="wpn-page-stub">
        <div className="wpn-page-stub__container">
          <div className="wpn-page-stub__card">
            <Wrench className="wpn-page-stub__icon" />
            <h1 className="wpn-page-stub__title">
              {title}
            </h1>
            {description && (
              <p className="wpn-page-stub__description">{description}</p>
            )}
            <p className="wpn-page-stub__note">
              {lang === "en" 
                ? "This page is part of the Nova News Public Notices Portal prototype." 
                : "Hierdie bladsy is deel van die Nova News Regskennisgewings Portaal prototipe."}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
