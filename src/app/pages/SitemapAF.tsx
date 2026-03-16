import { Link } from "react-router";
import Layout from "../components/Layout";
import { Card } from "../components/ui/card";
import { categories } from "../data/categories";

export default function SitemapAF() {
  return (
    <Layout lang="af" showAds={true}>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-raleway text-4xl font-bold text-[#09082f] mb-8">Werfkaart</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hoofbladsye */}
            <Card className="p-6">
              <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">Hoofbladsye</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/af" className="text-[#d70025] hover:underline">Tuis</Link></li>
                <li><Link to="/af/soek" className="text-[#d70025] hover:underline">Soek Kennisgewings</Link></li>
                <li><Link to="/af/oor-ons" className="text-[#d70025] hover:underline">Oor Ons</Link></li>
                <li><Link to="/af/kontak" className="text-[#d70025] hover:underline">Kontak</Link></li>
                <li><Link to="/af/verkope" className="text-[#d70025] hover:underline">Hoe Dit Werk</Link></li>
                <li><Link to="/af/prysstruktuur" className="text-[#d70025] hover:underline">Pryse</Link></li>
                <li><Link to="/af/adverteer" className="text-[#d70025] hover:underline">Adverteer</Link></li>
                <li><Link to="/af/vaak-gestelde-vrae" className="text-[#d70025] hover:underline">Vrae</Link></li>
              </ul>
            </Card>

            {/* Kennisgewingkategorieë */}
            <Card className="p-6">
              <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">Kennisgewingkategorieë</h2>
              <ul className="space-y-2 text-sm">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link to={`/af/kategorie/${cat.slug}`} className="text-[#d70025] hover:underline">
                      {cat.name.af}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Rekening & Indiening */}
            <Card className="p-6">
              <h2 className="font-raleway text-xl font-bold text-[#09082f] mb-4">Rekening & Indiening</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/af/aanmeld" className="text-[#d70025] hover:underline">Meld Aan</Link></li>
                <li><Link to="/af/registreer" className="text-[#d70025] hover:underline">Registreer</Link></li>
                <li><Link to="/af/my-rekening" className="text-[#d70025] hover:underline">My Rekening</Link></li>
                <li><Link to="/af/my-rekening/kennisgewings" className="text-[#d70025] hover:underline">My Kennisgewings</Link></li>
                <li><Link to="/af/my-rekening/bestellings" className="text-[#d70025] hover:underline">Bestellings</Link></li>
                <li><Link to="/af/my-rekening/profiel" className="text-[#d70025] hover:underline">Profiel</Link></li>
                <li><Link to="/af/indien" className="text-[#d70025] hover:underline">Dien Kennisgewing In</Link></li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
