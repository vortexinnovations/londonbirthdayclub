import { safeJsonLd } from "@/lib/safe-output";
interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  /** The day the page went live (YYYY-MM-DD), kept with the page. */
  datePublished: string;
  /** The day of the page's last substantive change (YYYY-MM-DD), kept with the page; never a default. */
  dateModified: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    // Pages are credited to the team, never to a named writer (About page).
    author: {
      "@type": "Organization",
      name: "London Birthday Club",
      url: "https://londonbirthdayclub.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "London Birthday Club",
      url: "https://londonbirthdayclub.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
