import NoticeCard from "./NoticeCard";

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
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-6`}>
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
