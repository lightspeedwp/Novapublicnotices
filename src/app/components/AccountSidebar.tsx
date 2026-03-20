import { Link } from "react-router";
import { User, FileText, ShoppingCart, Gear, MagnifyingGlass } from "@phosphor-icons/react";
import { cn } from "./ui/utils";
import "./AccountSidebar.css";

interface AccountSidebarProps {
  lang?: "en" | "af";
  activePage?: "profile" | "notices" | "orders" | "settings" | "saved-searches";
}

export default function AccountSidebar({ lang = "en", activePage }: AccountSidebarProps) {
  const basePath = lang === "af" ? "/af" : "";

  const navItems = [
    {
      id: "profile",
      label: { en: "Profile", af: "Profiel" },
      href: `${basePath}/my-account/profile`,
      icon: User
    },
    {
      id: "notices",
      label: { en: "My notices", af: "My kennisgewings" },
      href: `${basePath}/my-account/notices`,
      icon: FileText
    },
    {
      id: "orders",
      label: { en: "Orders", af: "Bestellings" },
      href: `${basePath}/my-account/orders`,
      icon: ShoppingCart
    },
    {
      id: "saved-searches",
      label: { en: "Saved searches", af: "Gestoorde soektogte" },
      href: lang === "af" ? `${basePath}/my-rekening/gestoorde-soektogte` : `${basePath}/my-account/saved-searches`,
      icon: MagnifyingGlass
    },
    {
      id: "settings",
      label: { en: "Settings", af: "Instellings" },
      href: lang === "af" ? `${basePath}/my-rekening/instellings` : `${basePath}/my-account/settings`,
      icon: Gear
    }
  ];

  return (
    <nav className="wpn-account-sidebar">
      <div className="wpn-account-sidebar__nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <Link
              key={item.id}
              to={item.href}
              className={cn(
                "wpn-account-sidebar__link",
                isActive && "wpn-account-sidebar__link--active"
              )}
            >
              <Icon className="wpn-account-sidebar__icon" />
              {item.label[lang]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}