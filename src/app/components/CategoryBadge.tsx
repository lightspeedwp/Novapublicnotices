import { 
  Scroll, Wine, Briefcase, MapTrifold, Storefront, Gavel, FileX, Leaf,
  Hammer, Heart, Bell, Buildings, ShieldCheck, Warning, UsersThree,
  TrendDown, Vault, ArrowsClockwise, Handshake, HandPalm, Megaphone
} from "@phosphor-icons/react";
import { getCategoryColor } from "../data/notices/category-colors";
import { cn } from "./ui/utils";
import "./CategoryBadge.css";

interface CategoryBadgeProps {
  category: string;
  className?: string;
  lang?: "en" | "af";
  showIcon?: boolean;
}

const categoryLabels = {
  en: {
    tenders: "Tenders",
    estates: "Estates",
    "estates-creditors-debtors": "Estates",
    "estates-liquidation-distribution": "Estates",
    "liquor-licences": "Liquor Licences",
    "town-planning": "Town Planning",
    "town-establishment": "Town Establishment",
    "business-licence": "Business Licences",
    "court-orders": "Court Orders",
    "ois-environmental": "Environmental",
    "general-notices": "General",
    "general": "General",
    "lost-documents": "Lost Documents",
    "sale-of-business": "Sale of Business",
    "sale-in-execution": "Sale in Execution",
    "public-auction": "Public Auction",
    "insolvent-estates": "Insolvent Estates",
    "surrender-of-estate": "Surrender of Estate",
    "rehabilitation": "Rehabilitation",
    "adoptions": "Adoptions",
    "curatorship": "Curatorship",
    "divorce-antenuptial": "Divorce",
    "divorce": "Divorce",
    "demolition": "Demolition",
    "pension-provident": "Pension Funds",
    "advertising-billboards": "Advertising",
    "agm-meetings": "AGM Meetings",
    "re-registrations": "Re-Registrations",
  },
  af: {
    tenders: "Tenders",
    estates: "Boedels",
    "estates-creditors-debtors": "Boedels",
    "estates-liquidation-distribution": "Boedels",
    "liquor-licences": "Dranklisensies",
    "town-planning": "Stadsbeplanning",
    "town-establishment": "Dorpstigting",
    "business-licence": "Besigheidslisensies",
    "court-orders": "Hofbevele",
    "ois-environmental": "Omgewings",
    "general-notices": "Algemene",
    "general": "Algemene",
    "lost-documents": "Verlore Dokumente",
    "sale-of-business": "Verkoop van Besigheid",
    "sale-in-execution": "Verkoping in Eksekusie",
    "public-auction": "Openbare Veiling",
    "insolvent-estates": "Insolvente Boedels",
    "surrender-of-estate": "Oorgawe van Boedel",
    "rehabilitation": "Rehabilitasie",
    "adoptions": "Aannemings",
    "curatorship": "Kuratorskap",
    "divorce-antenuptial": "Egskeiding",
    "divorce": "Egskeiding",
    "demolition": "Sloping",
    "pension-provident": "Pensioenfondse",
    "advertising-billboards": "Advertensies",
    "agm-meetings": "AVV-Vergaderings",
    "re-registrations": "Her-registrasies",
  },
};

// Icon map for all 21 categories - using Phosphor icons
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "estates": Scroll,
  "estates-creditors-debtors": Scroll,
  "estates-liquidation-distribution": Scroll,
  "liquor-licences": Wine,
  "tenders": Briefcase,
  "town-planning": MapTrifold,
  "business-licence": Storefront,
  "court-orders": Gavel,
  "lost-documents": FileX,
  "ois-environmental": Leaf,
  "sale-in-execution": Hammer,
  "adoptions": Heart,
  "general-notices": Bell,
  "general": Bell,
  "town-establishment": Buildings,
  "curatorship": ShieldCheck,
  "demolition": Warning,
  "divorce-antenuptial": UsersThree,
  "divorce": UsersThree,
  "insolvent-estates": TrendDown,
  "pension-provident": Vault,
  "re-registrations": ArrowsClockwise,
  "sale-of-business": Handshake,
  "surrender-of-estate": HandPalm,
  "public-auction": Megaphone,
  "rehabilitation": HandPalm, // Same as surrender
  "advertising-billboards": Bell, // Same as general
  "agm-meetings": Bell, // Same as general
};

export default function CategoryBadge({ 
  category, 
  className, 
  lang = "en",
  showIcon = true 
}: CategoryBadgeProps) {
  const label = categoryLabels[lang][category as keyof typeof categoryLabels.en] || category;
  const Icon = categoryIcons[category] || Bell;
  const categoryColor = getCategoryColor(category);

  return (
    <span
      className={cn(
        "wpn-category-badge",
        className
      )}
      style={{
        backgroundColor: categoryColor.colorLight,
        color: categoryColor.colorDark,
        borderColor: categoryColor.color,
      }}
    >
      {showIcon && <Icon className="wpn-category-badge__icon" weight="regular" />}
      {label}
    </span>
  );
}