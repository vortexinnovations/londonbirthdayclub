import { cache } from "react";
import { getDbListing, getDbPosts, type DbPost } from "@/lib/site-posts";
import { WHATSAPP_NUMBER } from "@/lib/clubs";

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  readTime: string;
  sections: BlogSection[];
  faqs?: { question: string; answer: string }[];
  // Content-API posts (Supabase site_posts) carry a Markdown body and their
  // own image; code posts render from `sections` and lib/images.ts.
  source?: "file" | "db";
  bodyMd?: string;
  image?: string;
  imageAlt?: string;
}

export interface BlogSection {
  heading: string;
  headingLevel: "h2" | "h3";
  content: string[];
}

import { blogDataPart1 } from "./blog-data-1";
import { blogDataPart2 } from "./blog-data-2";
import { blogDataPart3 } from "./blog-data-3";
import { blogDataPart4 } from "./blog-data-4";

export const blogPosts: BlogPost[] = [
  ...blogDataPart1,
  ...blogDataPart2,
  ...blogDataPart3,
  ...blogDataPart4,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

function readTime(markdown: string): string {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

// Post bodies may link WhatsApp with any number; send them to the live one.
const withLiveWhatsApp = (md: string) =>
  md.replace(/(wa\.me\/|api\.whatsapp\.com\/send\?phone=)\d+/g, `$1${WHATSAPP_NUMBER}`);

function fromDb(p: DbPost): BlogPost {
  return {
    slug: p.slug,
    title: p.title,
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
    excerpt: p.excerpt,
    publishedAt: p.publishDate,
    updatedAt: p.dateModified,
    category: p.category || "Planning",
    readTime: readTime(p.bodyMd),
    sections: [],
    faqs: p.faqs.length ? p.faqs : undefined,
    source: "db",
    bodyMd: withLiveWhatsApp(p.bodyMd),
    image: p.image || undefined,
    imageAlt: p.imageAlt || undefined,
  };
}

/** Code posts in their existing order, a database row replacing the post with the same slug; new database posts follow, oldest first. */
function merge(db: BlogPost[]): BlogPost[] {
  const bySlug = new Map(db.map((p) => [p.slug, p]));
  const merged = blogPosts.map((p) => bySlug.get(p.slug) ?? { ...p, source: "file" as const });
  const fileSlugs = new Set(blogPosts.map((p) => p.slug));
  const added = db
    .filter((p) => !fileSlugs.has(p.slug))
    .sort((a, b) => a.publishedAt.localeCompare(b.publishedAt));
  return [...merged, ...added];
}

/**
 * All posts, code and database, for pages (read at build and ISR regeneration,
 * never per visitor). Deduplicated per request with React cache().
 */
export const getMergedPosts = cache(async (): Promise<BlogPost[]> => merge((await getDbPosts()).map(fromDb)));

export async function getMergedPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return (await getMergedPosts()).find((p) => p.slug === slug);
}

/**
 * All posts without database bodies, for route handlers (the sitemap), which
 * render per request. Cached across requests and marked stale by
 * /api/revalidate. If the database is down and nothing is cached yet, the
 * code posts alone rather than a failed response.
 */
export async function getListingPosts(): Promise<BlogPost[]> {
  try {
    return merge((await getDbListing()).map(fromDb));
  } catch (err) {
    console.error("site_posts unavailable, listing code posts only", err);
    return blogPosts;
  }
}
