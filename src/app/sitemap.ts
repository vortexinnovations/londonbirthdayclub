import type { MetadataRoute } from "next";
import { clubs } from "@/lib/clubs";
import { getListingPosts } from "@/lib/blog";

// Rendered per request from a cached post list (marked stale on every
// content-API publish): on Vercel a prerendered sitemap is never refreshed.
//
// lastmod is only ever a real date: a post's own modified date, and for the
// blog index the newest of those. Code pages carry none (never the request
// time).
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getListingPosts();
  const baseUrl = "https://londonbirthdayclub.com";

  const clubPages = clubs.map((club) => ({
    url: `${baseUrl}/clubs/${club.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const latestPostDate = blogPosts.map((p) => p.updatedAt).sort().at(-1);

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/birthday-clubs-london`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/birthday-table-booking-london`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-birthday-clubs-london`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/group-night-out-london`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vip-birthday-tables-london`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/birthday-table-prices-london`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/18th-birthday-clubs-london`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/21st-birthday-clubs-london`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/30th-birthday-night-out-london`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/birthday-guestlist-vs-table-booking`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-clubs-for-large-groups-london`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-plan-a-birthday-night-in-mayfair`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/birthday-by-age`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/plan-birthday-london-club`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/birthday-by-night`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-birthday`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      ...(latestPostDate ? { lastModified: new Date(latestPostDate) } : {}),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...clubPages,
    ...blogPages,
  ];
}
