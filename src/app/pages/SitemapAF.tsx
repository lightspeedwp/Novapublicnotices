import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { useHero } from "../hooks/useHero";
import { categories } from "../data/categories";
import "../../styles/components.css";

export default function SitemapAF() {
  const heroData = useHero('sitemap', 'af');

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="af" />}

      {/* Sitemap Content */}
      <div className="bg-[var(--muted)] pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hoofbladsye */}
            <Card className="p-6">
              <h2 className="wpn-heading-h4 wpn-heading--primary mb-4">Hoofbladsye</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/af" className="wpn-link--accent hover:underline">Tuis</Link></li>
                <li><Link to="/af/soek" className="wpn-link--accent hover:underline">Soek Kennisgewings</Link></li>
                <li><Link to="/af/oor-ons" className="wpn-link--accent hover:underline">Oor Ons</Link></li>
                <li><Link to="/af/kontak" className="wpn-link--accent hover:underline">Kontak</Link></li>
                <li><Link to="/af/verkope" className="wpn-link--accent hover:underline">Hoe Dit Werk</Link></li>
                <li><Link to="/af/prysstruktuur" className="wpn-link--accent hover:underline">Pryse</Link></li>
                <li><Link to="/af/adverteer" className="wpn-link--accent hover:underline">Adverteer</Link></li>
                <li><Link to="/af/vaak-gestelde-vrae" className="wpn-link--accent hover:underline">Vrae</Link></li>
              </ul>
            </Card>

            {/* Kennisgewingkategorieë */}
            <Card className="p-6">
              <h2 className="wpn-heading-h4 wpn-heading--primary mb-4">Kennisgewingkategorieë</h2>
              <ul className="space-y-2 text-sm">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link to={`/af/kategorie/${cat.slug}`} className="wpn-link--accent hover:underline">
                      {cat.name.af}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Rekening & Indiening */}
            <Card className="p-6">
              <h2 className="wpn-heading-h4 wpn-heading--primary mb-4">Rekening & Indiening</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/af/aanmeld" className="wpn-link--accent hover:underline">Meld Aan</Link></li>
                <li><Link to="/af/registreer" className="wpn-link--accent hover:underline">Registreer</Link></li>
                <li><Link to="/af/my-rekening" className="wpn-link--accent hover:underline">My Rekening</Link></li>
                <li><Link to="/af/my-rekening/kennisgewings" className="wpn-link--accent hover:underline">My Kennisgewings</Link></li>
                <li><Link to="/af/my-rekening/bestellings" className="wpn-link--accent hover:underline">Bestellings</Link></li>
                <li><Link to="/af/my-rekening/profiel" className="wpn-link--accent hover:underline">Profiel</Link></li>
                <li><Link to="/af/indien" className="wpn-link--accent hover:underline">Dien Kennisgewing In</Link></li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}