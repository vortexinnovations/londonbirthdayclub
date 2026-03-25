interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished = "2025-03-01",
  dateModified = "2026-03-25",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "London Birthday Club",
      url: "https://londonbirthdayclub.com",
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
