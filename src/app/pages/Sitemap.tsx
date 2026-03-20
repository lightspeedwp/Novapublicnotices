import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { useHero } from "../hooks/useHero";
import { categories } from "../data/categories";
import { getCategoryColor } from "../data/notices/category-colors";
import "../../styles/components.css";

export default function Sitemap() {
  const heroData = useHero('sitemap', 'en');

  return (
    <Layout lang="en" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="en" />}

      {/* Sitemap Content */}
      <section className="wpn-sitemap">
        <div className="wpn-sitemap__container">
          <div className="wpn-sitemap__grid">
            
            {/* Main Pages */}
            <div className="wpn-sitemap__section">
              <h2 className="wpn-sitemap__section-title">Main pages</h2>
              <ul className="wpn-sitemap__list">
                <li className="wpn-sitemap__list-item">
                  <Link to="/" className="wpn-sitemap__link">Home</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/search" className="wpn-sitemap__link">Search Notices</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/about" className="wpn-sitemap__link">About Us</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/contact" className="wpn-sitemap__link">Contact</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/sales" className="wpn-sitemap__link">How It Works</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/pricing" className="wpn-sitemap__link">Pricing</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/advertise" className="wpn-sitemap__link">Advertise</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/faq" className="wpn-sitemap__link">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Notice Categories */}
            <div className="wpn-sitemap__section">
              <h2 className="wpn-sitemap__section-title">Notice categories</h2>
              <ul className="wpn-sitemap__list">
                {categories.map((cat) => (
                  <li key={cat.slug} className="wpn-sitemap__list-item">
                    <Link to={`/category/${cat.slug}`} className="wpn-sitemap__link">
                      {cat.name.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account & Submission */}
            <div className="wpn-sitemap__section">
              <h2 className="wpn-sitemap__section-title">Account & submission</h2>
              <ul className="wpn-sitemap__list">
                <li className="wpn-sitemap__list-item">
                  <Link to="/login" className="wpn-sitemap__link">Login</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/register" className="wpn-sitemap__link">Register</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/my-account" className="wpn-sitemap__link">My Account</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/my-account/notices" className="wpn-sitemap__link">My Notices</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/my-account/orders" className="wpn-sitemap__link">Orders</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/my-account/profile" className="wpn-sitemap__link">Profile</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/submit" className="wpn-sitemap__link">Submit Notice</Link>
                </li>
              </ul>
            </div>

            {/* Legal Pages */}
            <div className="wpn-sitemap__section">
              <h2 className="wpn-sitemap__section-title">Legal</h2>
              <ul className="wpn-sitemap__list">
                <li className="wpn-sitemap__list-item">
                  <Link to="/terms" className="wpn-sitemap__link">Terms of Service</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/privacy" className="wpn-sitemap__link">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Afrikaans Pages */}
            <div className="wpn-sitemap__section">
              <h2 className="wpn-sitemap__section-title">Afrikaans</h2>
              <ul className="wpn-sitemap__list">
                <li className="wpn-sitemap__list-item">
                  <Link to="/af" className="wpn-sitemap__link">Tuis</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/af/soek" className="wpn-sitemap__link">Soek Kennisgewings</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/af/oor-ons" className="wpn-sitemap__link">Oor Ons</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/af/kontak" className="wpn-sitemap__link">Kontak</Link>
                </li>
                <li className="wpn-sitemap__list-item">
                  <Link to="/af/verkope" className="wpn-sitemap__link">Hoe Dit Werk</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}