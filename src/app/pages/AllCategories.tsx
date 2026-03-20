/**
 * All Categories Page — English
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

export default function AllCategories() {
  const allCategories = getAllCategoriesWithCounts();
  
  const heroData: HeroData = {
    title: "All notice categories",
    description: "Browse our complete collection of public notice categories. Find the specific type of legal notice you're looking for.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Categories", href: "/categories" },
    ],
    cta: {
      primary: { label: "Search Notices", href: "/search" },
    },
    variant: "simple",
  };

  return (
    <Layout lang="en" showAds={true}>
      {/* Hero */}
      <Hero data={heroData} lang="en" />

      {/* Compact Category Overview */}
      <section className="wpn-section--sm" style={{ paddingTop: 'var(--space-8)' }}>
        <div className="wpn-container">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">
              Quick category finder
            </h2>
            <p className="wpn-section-header__subtitle">
              Scan all {allCategories.length} categories at a glance
            </p>
          </div>
          
          {/* Compact Grid */}
          <CategoryGrid 
            categories={allCategories} 
            language="en"
            variant="compact"
          />
        </div>
      </section>

      {/* Detailed Category Grid */}
      <section className="wpn-section--lg wpn-section--muted">
        <div className="wpn-container">
          <div className="wpn-section-header">
            <h2 className="wpn-section-header__title">
              Explore categories in detail
            </h2>
            <p className="wpn-section-header__subtitle">
              Each category includes descriptions and current notice counts
            </p>
          </div>
          
          {/* Large Grid */}
          <CategoryGrid 
            categories={allCategories} 
            language="en"
            variant="large"
          />
        </div>
      </section>
    </Layout>
  );
}
