import { Link } from "react-router";
import { CalendarBlank, MapPin, FileText } from "@phosphor-icons/react";
import CategoryBadge from "./CategoryBadge";
import { cn } from "./ui/utils";
import "./NoticeCard.css";

interface NoticeCardProps {
  id: string;
  title: string;
  category: string;
  publishDate: string;
  location: string;
  referenceNumber: string;
  excerpt?: string;
  publisher?: string;
  lang?: "en" | "af";
  className?: string;
}

export default function NoticeCard({
  id,
  title,
  category,
  publishDate,
  location,
  referenceNumber,
  excerpt,
  publisher,
  lang = "en",
  className,
}: NoticeCardProps) {
  const basePath = lang === "af" ? "/af" : "";
  const noticePath = lang === "af" ? "kennisgewing" : "notice";

  return (
    <Link
      to={`${basePath}/${noticePath}/${id}`}
      className={cn("wpn-notice-card", className)}
    >
      <div className="wpn-notice-card__content">
        <h3 className="wpn-notice-card__title">
          {title}
        </h3>

        <CategoryBadge category={category} lang={lang} />

        <span className="wpn-notice-card__reference">
          <FileText className="wpn-notice-card__reference-icon" />
          {referenceNumber}
        </span>

        {excerpt && (
          <p className="wpn-notice-card__excerpt">{excerpt}</p>
        )}

        <div className="wpn-notice-card__meta">
          <span className="wpn-notice-card__meta-item">
            <CalendarBlank className="wpn-notice-card__meta-icon" />
            {publishDate}
          </span>
          <span className="wpn-notice-card__meta-item">
            <MapPin className="wpn-notice-card__meta-icon" />
            {location}
          </span>
        </div>

        {publisher && (
          <div className="wpn-notice-card__publisher">
            {lang === "en" ? "Published by" : "Gepubliseer deur"}: {publisher}
          </div>
        )}
      </div>
    </Link>
  );
}