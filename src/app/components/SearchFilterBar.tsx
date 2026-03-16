import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

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
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const t = {
    en: {
      searchPlaceholder: "Search by keyword, reference number, or location...",
      category: "Category",
      allCategories: "All Categories",
      location: "Location",
      allLocations: "All Locations",
      dateFrom: "Date From",
      dateTo: "Date To",
      sortBy: "Sort By",
      newest: "Newest First",
      oldest: "Oldest First",
      searchButton: "Search",
      clearFilters: "Clear Filters",
      advancedFilters: "Advanced Filters",
      showingResults: "Showing {count} results",
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
      dateFrom: "Datum Van",
      dateTo: "Datum Tot",
      sortBy: "Sorteer Volgens",
      newest: "Nuutste Eerste",
      oldest: "Oudste Eerste",
      searchButton: "Soek",
      clearFilters: "Maak Filters Skoon",
      advancedFilters: "Gevorderde Filters",
      showingResults: "{count} resultate word gewys",
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
    { value: "tenders", label: lang === "en" ? "Tenders" : "Tenders" },
    { value: "estates", label: lang === "en" ? "Estates" : "Boedels" },
    { value: "liquor-licences", label: lang === "en" ? "Liquor Licences" : "Dranklisensies" },
    { value: "town-planning", label: lang === "en" ? "Town Planning" : "Stadsbeplanning" },
    { value: "business-licence", label: lang === "en" ? "Business Licence" : "Besigheidslisensie" },
    { value: "court-orders", label: lang === "en" ? "Court Orders" : "Hofbevele" },
    { value: "environmental", label: lang === "en" ? "Environmental" : "Omgewings" },
    { value: "general", label: lang === "en" ? "General Notice" : "Algemene Kennisgewing" },
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

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex flex-col gap-4">
        {/* Main Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input
              type="text"
              placeholder={text.searchPlaceholder}
              className="pl-10"
            />
          </div>
          <Button className="bg-[#d70025] hover:bg-[#b5001f] text-white">
            {text.searchButton}
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Select defaultValue="all">
            <SelectTrigger>
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

          <Select defaultValue="all">
            <SelectTrigger>
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

          <Select defaultValue="newest">
            <SelectTrigger>
              <SelectValue placeholder={text.sortBy} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">{text.newest}</SelectItem>
              <SelectItem value="oldest">{text.oldest}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            <SlidersHorizontal className="size-4 mr-2" />
            {text.advancedFilters}
          </Button>

          {showResults && (
            <p className="text-sm text-gray-600">
              {text.showingResults.replace("{count}", resultCount.toString())}
            </p>
          )}
        </div>

        {/* Advanced Filters */}
        {showAdvancedFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-gray-200">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                {text.dateFrom}
              </label>
              <Input type="date" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                {text.dateTo}
              </label>
              <Input type="date" />
            </div>
          </div>
        )}

        {/* Clear Filters */}
        {showResults && (
          <Button variant="outline" size="sm" className="w-fit">
            <X className="size-4 mr-2" />
            {text.clearFilters}
          </Button>
        )}
      </div>
    </div>
  );
}
