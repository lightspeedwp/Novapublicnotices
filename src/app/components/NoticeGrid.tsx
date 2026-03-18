import NoticeCard from "./NoticeCard";
import "./NoticeGrid.css";

interface Notice {
  id: string;
  title: { en: string; af: string };
  category: string;
  publishDate: string;
  location: string;
  referenceNumber: string;
  excerpt: { en: string; af: string };
  publisher: string;
}

interface NoticeGridProps {
  notices: Notice[];
  lang?: "en" | "af";
  columns?: 1 | 2 | 3;
}

export default function NoticeGrid({ 
  notices, 
  lang = "en",
  columns = 3
}: NoticeGridProps) {
  const gridClass = `wpn-notice-grid--cols-${columns}`;

  return (
    <div className={`wpn-notice-grid ${gridClass}`}>
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          id={notice.id}
          title={notice.title[lang]}
          category={notice.category}
          publishDate={notice.publishDate}
          location={notice.location}
          referenceNumber={notice.referenceNumber}
          excerpt={notice.excerpt[lang]}
          publisher={notice.publisher}
          lang={lang}
        />
      ))}
    </div>
  );
}