/**
 * All Categories Page — Afrikaans
 * 
 * Browse all public notice categories with compact grid at top
 * and large grid below for detailed exploration.
 */

import { Link } from "react-router";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { CategoryGrid } from "../components/CategoryCard";
import { getAllCategoriesWithCounts } from "../data/categories/categories-data";
import { HeroData } from "../hooks/useHero";
import { House, MagnifyingGlass } from "@phosphor-icons/react";

export default function AllCategoriesAF() {
  const allCategories = getAllCategoriesWithCounts();
  
  const heroData: HeroData = {
    title: "Alle kennisgewingkategorieë",
    description: "Blaai deur ons volledige versameling van openbare kennisgewingkategorieë. Vind die spesifieke tipe regskennisgewing wat u soek.",
    breadcrumbs: [
      { label: "Tuis", href: "/af" },
      { label: "Kategorieë", href: "/af/kategorieë" },
    ],
    cta: {
      primary: { label: "Soek kennisgewings", href: "/af/soek" },
    },
    variant: "simple",
  };

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero */}
      <Hero data={heroData} lang="af" />

      {/* Compact Category Overview */}
      <section className="wpn-section--sm" style={{ paddingTop: 'var(--space-8)' }}>
        <div className="wpn-container">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">
              Vinnige kategorie soeker
            </h2>
            <p className="wpn-section-header__subtitle">
              Skandeer alle {allCategories.length} kategorieë in een oogopslag
            </p>
          </div>
          
          {/* Compact Grid */}
          <CategoryGrid 
            categories={allCategories} 
            language="af"
            variant="compact"
          />
        </div>
      </section>

      {/* Detailed Category Grid */}
      <section className="wpn-section--lg wpn-section--muted">
        <div className="wpn-container">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">
              Verken kategorieë in detail
            </h2>
            <p className="wpn-section-header__subtitle">
              Elke kategorie sluit beskrywings en huidige kennisgewingtellings in
            </p>
          </div>
          
          {/* Large Grid */}
          <CategoryGrid 
            categories={allCategories} 
            language="af"
            variant="large"
          />
        </div>
      </section>
    </Layout>
  );
}
