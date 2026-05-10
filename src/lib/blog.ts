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
