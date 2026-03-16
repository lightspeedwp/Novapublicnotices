import { cn } from "./ui/utils";

interface CategoryBadgeProps {
  category: string;
  className?: string;
  lang?: "en" | "af";
}

const categoryColors: Record<string, string> = {
  tenders: "bg-blue-100 text-blue-800 border-blue-300",
  estates: "bg-purple-100 text-purple-800 border-purple-300",
  "liquor-licences": "bg-orange-100 text-orange-800 border-orange-300",
  "town-planning": "bg-green-100 text-green-800 border-green-300",
  "business-licence": "bg-yellow-100 text-yellow-800 border-yellow-300",
  "court-orders": "bg-red-100 text-red-800 border-red-300",
  "environmental": "bg-emerald-100 text-emerald-800 border-emerald-300",
  "general": "bg-gray-100 text-gray-800 border-gray-300",
  "lost-documents": "bg-amber-100 text-amber-800 border-amber-300",
  "sale-of-business": "bg-indigo-100 text-indigo-800 border-indigo-300",
};

const categoryLabels = {
  en: {
    tenders: "Tenders",
    estates: "Estates",
    "liquor-licences": "Liquor Licences",
    "town-planning": "Town Planning",
    "business-licence": "Business Licence",
    "court-orders": "Court Orders",
    "environmental": "Environmental",
    "general": "General Notice",
    "lost-documents": "Lost Documents",
    "sale-of-business": "Sale of Business",
  },
  af: {
    tenders: "Tenders",
    estates: "Boedels",
    "liquor-licences": "Dranklisensies",
    "town-planning": "Stadsbeplanning",
    "business-licence": "Besigheidslisensie",
    "court-orders": "Hofbevele",
    "environmental": "Omgewings",
    "general": "Algemene Kennisgewing",
    "lost-documents": "Verlore Dokumente",
    "sale-of-business": "Verkoop van Besigheid",
  },
};

export default function CategoryBadge({ category, className, lang = "en" }: CategoryBadgeProps) {
  const colorClass = categoryColors[category] || categoryColors.general;
  const label = categoryLabels[lang][category as keyof typeof categoryLabels.en] || category;

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-150",
        colorClass,
        className
      )}
    >
      {label}
    </span>
  );
}