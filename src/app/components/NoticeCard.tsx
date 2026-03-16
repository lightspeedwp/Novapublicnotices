import { Link } from "react-router";
import { Calendar, MapPin, FileText } from "lucide-react";
import CategoryBadge from "./CategoryBadge";
import { cn } from "./ui/utils";

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
      className={cn(
        "block bg-white border border-gray-200 rounded-lg p-4 hover:border-[#09082f] hover:shadow-md transition-all",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <CategoryBadge category={category} lang={lang} />
          <span className="text-xs text-gray-500 flex items-center gap-1 shrink-0">
            <FileText className="size-3" />
            {referenceNumber}
          </span>
        </div>

        <h3 className="font-raleway font-semibold text-base text-gray-900 line-clamp-2 hover:text-[#09082f]">
          {title}
        </h3>

        {excerpt && (
          <p className="text-sm text-gray-600 line-clamp-2">{excerpt}</p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="size-3" />
            {publishDate}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="size-3" />
            {location}
          </span>
        </div>

        {publisher && (
          <div className="text-xs text-gray-600 font-medium">
            {lang === "en" ? "Published by" : "Gepubliseer deur"}: {publisher}
          </div>
        )}
      </div>
    </Link>
  );
}
