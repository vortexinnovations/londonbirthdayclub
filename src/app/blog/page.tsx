import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/lib/blog";
import { getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { getBlogImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Birthday Planning Blog | Tips, Guides & Ideas for London Birthdays",
  description:
    "Expert advice on planning birthday celebrations at London nightclubs. Costs, dress codes, group payments, surprise parties, bottle service guides, and venue recommendations.",
  alternates: {
    canonical: "https://londonbirthdayclub.com/blog",
  },
};

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl overflow-hidden transition-all"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image src={getBlogImage(post.slug)} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-xs text-text-muted">{post.readTime}</span>
        </div>
        <h2 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
          {post.title}
        </h2>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {post.excerpt}
        </p>
        <span className="text-gold text-sm font-medium group-hover:underline">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}

export default function BlogIndexPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />
      <section className="relative py-20 sm:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Birthday Planning{" "}
            <span className="text-gold">Blog</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Everything you need to know about celebrating your birthday at a
            London nightclub — from costs and dress codes to surprise party
            planning and bottle service tips.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 px-4 bg-bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          <span className="text-sm text-text-muted py-2">Filter:</span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-sm bg-bg-card border border-border px-4 py-2 rounded-lg text-text-secondary"
            >
              {cat} ({blogPosts.filter((p) => p.category === cat).length})
            </span>
          ))}
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
              Latest
            </h2>
            <Link
              href={`/blog/${sortedPosts[0].slug}`}
              className="group block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-8 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                  {sortedPosts[0].category}
                </span>
                <span className="text-xs text-text-muted">
                  {sortedPosts[0].readTime}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-gold transition-colors">
                {sortedPosts[0].title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4 max-w-2xl">
                {sortedPosts[0].excerpt}
              </p>
              <span className="text-gold font-medium group-hover:underline">
                Read the full guide &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* All posts grid */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedPosts.slice(1).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Planning?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            All the knowledge is here — but the easiest way to plan your
            birthday is to message us directly. We&apos;ll handle everything.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Plan My Birthday on WhatsApp"
            size="large"
          />
        </div>
      </section>
    </>
  );
}
