import { Link } from "react-router";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { House } from "@phosphor-icons/react";
import "../../styles/not-found.css";

export default function NotFound() {
  return (
    <Layout lang="en" showAds={false}>
      <div className="wpn-not-found">
        <div className="wpn-not-found__container">
          <h1 className="wpn-not-found__code">404</h1>
          <h2 className="wpn-not-found__title">
            Page not found
          </h2>
          <p className="wpn-not-found__message">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button className="wpn-button wpn-button--accent" asChild>
            <Link to="/">
              <House />
              Go home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}