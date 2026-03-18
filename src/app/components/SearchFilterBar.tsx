import { MagnifyingGlass, Sliders, X, Funnel, CaretDown } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import "../../styles/search-filter.css";

interface SearchFilterBarProps {
  lang?: "en" | "af";
  showResults?: boolean;
  resultCount?: number;
}

export default function SearchFilterBar({
  lang = "en",
  showResults = false,
  resultCount = 0,
}: SearchFilterBarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  
  // Form state
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [location, setLocation] = useState(searchParams.get("location") || "all");
  const [status, setStatus] = useState(searchParams.get("status") || "all");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "newest");
  const [dateFrom, setDateFrom] = useState(searchParams.get("dateFrom") || "");
  const [dateTo, setDateTo] = useState(searchParams.get("dateTo") || "");
  const [publisher, setPublisher] = useState(searchParams.get("publisher") || "");
  const [referenceNumber, setReferenceNumber] = useState(searchParams.get("ref") || "");

  const t = {
    en: {
      searchPlaceholder: "Search by keyword, reference number, or location...",
      category: "Category",
      allCategories: "All Categories",
      location: "Location",
      allLocations: "All Locations",
      status: "Status",
      allStatuses: "All Statuses",
      dateFrom: "Date From",
      dateTo: "Date To",
      sortBy: "Sort By",
      newest: "Newest First",
      oldest: "Oldest First",
      relevance: "Most Relevant",
      searchButton: "Search",
      clearFilters: "Clear Filters",
      advancedFilters: "Advanced Filters",
      showingResults: "Showing {count} results",
      publisher: "Publisher",
      publisherPlaceholder: "Filter by publisher name...",
      referenceNumber: "Reference Number",
      referenceNumberPlaceholder: "e.g., NOT-2024-001",
      activeFilters: "Active filters:",
      published: "Published",
      pending: "Pending Review",
      archived: "Archived",
      expired: "Expired",
      // Categories
      tenders: "Tenders",
      estates: "Estates",
      liquorLicences: "Liquor Licences",
      townPlanning: "Town Planning",
      businessLicence: "Business Licence",
      courtOrders: "Court Orders",
      environmental: "Environmental",
      general: "General Notice",
      adoptions: "Adoptions",
      curatorship: "Curatorship",
      demolition: "Demolition",
      divorce: "Divorce / Antenuptial",
      insolventEstates: "Insolvent Estates",
      lostDocuments: "Lost Documents",
      pensionFunds: "Pension / Provident Funds",
      reRegistrations: "Re-registrations",
      saleOfBusiness: "Sale of Business",
      saleInExecution: "Sale in Execution",
      surrenderOfEstate: "Surrender of Estate",
      townEstablishment: "Town Establishment",
      // Locations
      gauteng: "Gauteng",
      westernCape: "Western Cape",
      easternCape: "Eastern Cape",
      kwazuluNatal: "KwaZulu-Natal",
      freeState: "Free State",
      northWest: "North West",
      limpopo: "Limpopo",
      mpumalanga: "Mpumalanga",
      northernCape: "Northern Cape",
    },
    af: {
      searchPlaceholder: "Soek volgens sleutelwoord, verwysingsnommer, of ligging...",
      category: "Kategorie",
      allCategories: "Alle Kategorieë",
      location: "Ligging",
      allLocations: "Alle Liggings",
      status: "Status",
      allStatuses: "Alle Statusse",
      dateFrom: "Datum Van",
      dateTo: "Datum Tot",
      sortBy: "Sorteer Volgens",
      newest: "Nuutste Eerste",
      oldest: "Oudste Eerste",
      relevance: "Mees Relevant",
      searchButton: "Soek",
      clearFilters: "Maak Filters Skoon",
      advancedFilters: "Gevorderde Filters",
      showingResults: "{count} resultate word gewys",
      publisher: "Uitgewer",
      publisherPlaceholder: "Filtreer volgens uitgewernaam...",
      referenceNumber: "Verwysingsnommer",
      referenceNumberPlaceholder: "bv., NOT-2024-001",
      activeFilters: "Aktiewe filters:",
      published: "Gepubliseer",
      pending: "Hangende Hersiening",
      archived: "Geargiveer",
      expired: "Verval",
      // Categories
      tenders: "Tenders",
      estates: "Boedels",
      liquorLicences: "Dranklisensies",
      townPlanning: "Stadsbeplanning",
      businessLicence: "Besigheidslisensie",
      courtOrders: "Hofbevele",
      environmental: "Omgewings",
      general: "Algemene Kennisgewing",
      adoptions: "Aannemings",
      curatorship: "Kuratorskap",
      demolition: "Sloping",
      divorce: "Egskeiding / Huweliksvoorwaardes",
      insolventEstates: "Insolvente Boedels",
      lostDocuments: "Verlore Dokumente",
      pensionFunds: "Pensioenfondse",
      reRegistrations: "Herregistrasies",
      saleOfBusiness: "Verkoop van Besigheid",
      saleInExecution: "Verkoop in Eksekusie",
      surrenderOfEstate: "Oorgawe van Boedel",
      townEstablishment: "Dorpstigting",
      // Locations
      gauteng: "Gauteng",
      westernCape: "Wes-Kaap",
      easternCape: "Oos-Kaap",
      kwazuluNatal: "KwaZulu-Natal",
      freeState: "Vrystaat",
      northWest: "Noordwes",
      limpopo: "Limpopo",
      mpumalanga: "Mpumalanga",
      northernCape: "Noord-Kaap",
    },
  };

  const text = t[lang];

  const categories = [
    { value: "all", label: text.allCategories },
    { value: "tenders", label: text.tenders },
    { value: "estates", label: text.estates },
    { value: "liquor-licences", label: text.liquorLicences },
    { value: "town-planning", label: text.townPlanning },
    { value: "business-licence", label: text.businessLicence },
    { value: "court-orders", label: text.courtOrders },
    { value: "environmental", label: text.environmental },
    { value: "general", label: text.general },
    { value: "adoptions", label: text.adoptions },
    { value: "curatorship", label: text.curatorship },
    { value: "demolition", label: text.demolition },
    { value: "divorce", label: text.divorce },
    { value: "insolvent-estates", label: text.insolventEstates },
    { value: "lost-documents", label: text.lostDocuments },
    { value: "pension-funds", label: text.pensionFunds },
    { value: "re-registrations", label: text.reRegistrations },
    { value: "sale-of-business", label: text.saleOfBusiness },
    { value: "sale-in-execution", label: text.saleInExecution },
    { value: "surrender-of-estate", label: text.surrenderOfEstate },
    { value: "town-establishment", label: text.townEstablishment },
  ];

  const locations = [
    { value: "all", label: text.allLocations },
    { value: "gauteng", label: text.gauteng },
    { value: "western-cape", label: text.westernCape },
    { value: "eastern-cape", label: text.easternCape },
    { value: "kwazulu-natal", label: text.kwazuluNatal },
    { value: "free-state", label: text.freeState },
    { value: "north-west", label: text.northWest },
    { value: "limpopo", label: text.limpopo },
    { value: "mpumalanga", label: text.mpumalanga },
    { value: "northern-cape", label: text.northernCape },
  ];

  const statuses = [
    { value: "all", label: text.allStatuses },
    { value: "published", label: text.published },
    { value: "pending", label: text.pending },
    { value: "archived", label: text.archived },
    { value: "expired", label: text.expired },
  ];

  const sortOptions = [
    { value: "newest", label: text.newest },
    { value: "oldest", label: text.oldest },
    { value: "relevance", label: text.relevance },
  ];

  // Handle search submit
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const params: Record<string, string> = {};
    
    if (searchQuery) params.q = searchQuery;
    if (category !== "all") params.category = category;
    if (location !== "all") params.location = location;
    if (status !== "all") params.status = status;
    if (sortBy !== "newest") params.sort = sortBy;
    if (dateFrom) params.dateFrom = dateFrom;
    if (dateTo) params.dateTo = dateTo;
    if (publisher) params.publisher = publisher;
    if (referenceNumber) params.ref = referenceNumber;

    setSearchParams(params);
  };

  // Handle clear filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setCategory("all");
    setLocation("all");
    setStatus("all");
    setSortBy("newest");
    setDateFrom("");
    setDateTo("");
    setPublisher("");
    setReferenceNumber("");
    setSearchParams({});
  };

  // Get active filters for display
  const getActiveFilters = () => {
    const filters: Array<{ label: string; value: string; key: string }> = [];
    
    if (searchQuery) filters.push({ label: `"${searchQuery}"`, value: searchQuery, key: "q" });
    if (category !== "all") {
      const cat = categories.find(c => c.value === category);
      if (cat) filters.push({ label: cat.label, value: category, key: "category" });
    }
    if (location !== "all") {
      const loc = locations.find(l => l.value === location);
      if (loc) filters.push({ label: loc.label, value: location, key: "location" });
    }
    if (status !== "all") {
      const stat = statuses.find(s => s.value === status);
      if (stat) filters.push({ label: stat.label, value: status, key: "status" });
    }
    if (dateFrom) filters.push({ label: `${text.dateFrom}: ${dateFrom}`, value: dateFrom, key: "dateFrom" });
    if (dateTo) filters.push({ label: `${text.dateTo}: ${dateTo}`, value: dateTo, key: "dateTo" });
    if (publisher) filters.push({ label: `${text.publisher}: ${publisher}`, value: publisher, key: "publisher" });
    if (referenceNumber) filters.push({ label: `${text.referenceNumber}: ${referenceNumber}`, value: referenceNumber, key: "ref" });
    
    return filters;
  };

  const activeFilters = getActiveFilters();

  // Remove individual filter
  const removeFilter = (key: string) => {
    switch (key) {
      case "q": setSearchQuery(""); break;
      case "category": setCategory("all"); break;
      case "location": setLocation("all"); break;
      case "status": setStatus("all"); break;
      case "dateFrom": setDateFrom(""); break;
      case "dateTo": setDateTo(""); break;
      case "publisher": setPublisher(""); break;
      case "ref": setReferenceNumber(""); break;
    }
    
    // Update URL
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    setSearchParams(newParams);
  };

  return (
    <div className="wpn-search-filter-bar">
      <form onSubmit={handleSearch} className="wpn-search-filter-bar__content">
        {/* Main Search */}
        <div className="wpn-search-filter-bar__search-row">
          <div className="wpn-search-filter-bar__search-wrapper">
            <MagnifyingGlass className="wpn-search-filter-bar__search-icon" />
            <Input
              type="text"
              placeholder={text.searchPlaceholder}
              className="wpn-search-filter-bar__search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={lang === "en" ? "Search notices" : "Soek kennisgewings"}
            />
          </div>
          <Button type="submit" className="wpn-button wpn-button--accent">
            <MagnifyingGlass className="wpn-search-filter-bar__button-icon" />
            {text.searchButton}
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="wpn-search-filter-bar__filters">
          <div className="wpn-search-filter-bar__field">
            <label className="wpn-search-filter-bar__label" htmlFor="category-select">
              {text.category}
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="wpn-search-filter-bar__filter-select" id="category-select">
                <SelectValue placeholder={text.category} />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="wpn-search-filter-bar__field">
            <label className="wpn-search-filter-bar__label" htmlFor="location-select">
              {text.location}
            </label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="wpn-search-filter-bar__filter-select" id="location-select">
                <SelectValue placeholder={text.location} />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.value} value={loc.value}>
                    {loc.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="wpn-search-filter-bar__field">
            <label className="wpn-search-filter-bar__label" htmlFor="sort-select">
              {text.sortBy}
            </label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="wpn-search-filter-bar__filter-select" id="sort-select">
                <SelectValue placeholder={text.sortBy} />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="wpn-search-filter-bar__actions">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="wpn-search-filter-bar__toggle-btn"
          >
            <Sliders className="wpn-search-filter-bar__button-icon" />
            {text.advancedFilters}
            <CaretDown 
              className={`wpn-search-filter-bar__toggle-icon ${
                showAdvancedFilters ? 'wpn-search-filter-bar__toggle-icon--rotate' : ''
              }`} 
            />
          </Button>

          {showResults && resultCount > 0 && (
            <div className="wpn-search-filter-bar__results-badge">
              <Funnel className="wpn-search-filter-bar__results-icon" />
              <span>{text.showingResults.replace("{count}", resultCount.toString())}</span>
            </div>
          )}
        </div>

        {/* Advanced Filters */}
        {showAdvancedFilters && (
          <div className="wpn-search-filter-bar__advanced">
            <div className="wpn-search-filter-bar__field">
              <label className="wpn-search-filter-bar__label" htmlFor="status-select">
                {text.status}
              </label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="wpn-search-filter-bar__filter-select" id="status-select">
                  <SelectValue placeholder={text.status} />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((stat) => (
                    <SelectItem key={stat.value} value={stat.value}>
                      {stat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="wpn-search-filter-bar__field">
              <label className="wpn-search-filter-bar__label" htmlFor="date-from">
                {text.dateFrom}
              </label>
              <Input 
                type="date" 
                className="wpn-search-filter-bar__input" 
                id="date-from"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>

            <div className="wpn-search-filter-bar__field">
              <label className="wpn-search-filter-bar__label" htmlFor="date-to">
                {text.dateTo}
              </label>
              <Input 
                type="date" 
                className="wpn-search-filter-bar__input" 
                id="date-to"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>

            <div className="wpn-search-filter-bar__field">
              <label className="wpn-search-filter-bar__label" htmlFor="publisher">
                {text.publisher}
              </label>
              <Input 
                type="text" 
                placeholder={text.publisherPlaceholder}
                className="wpn-search-filter-bar__input" 
                id="publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>

            <div className="wpn-search-filter-bar__field">
              <label className="wpn-search-filter-bar__label" htmlFor="reference-number">
                {text.referenceNumber}
              </label>
              <Input 
                type="text" 
                placeholder={text.referenceNumberPlaceholder}
                className="wpn-search-filter-bar__input" 
                id="reference-number"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Active Filters Pills */}
        {activeFilters.length > 0 && (
          <div className="wpn-search-filter-bar__active-filters">
            <span className="wpn-search-filter-bar__active-filters-label">
              {text.activeFilters}
            </span>
            {activeFilters.map((filter, index) => (
              <button
                key={index}
                type="button"
                className="wpn-search-filter-bar__filter-pill"
                onClick={() => removeFilter(filter.key)}
                aria-label={`Remove ${filter.label} filter`}
              >
                <span>{filter.label}</span>
                <X className="wpn-search-filter-bar__filter-pill-remove" />
              </button>
            ))}
          </div>
        )}

        {/* Clear All Filters */}
        {(showResults || activeFilters.length > 0) && (
          <Button 
            type="button"
            variant="outline" 
            size="sm" 
            className="wpn-search-filter-bar__clear"
            onClick={handleClearFilters}
          >
            <X className="wpn-search-filter-bar__clear-icon" />
            {text.clearFilters}
          </Button>
        )}
      </form>
    </div>
  );
}