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
  openGraph: { url: "https://londonbirthdayclub.com/blog" },
};

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="frame-mat img-editorial relative aspect-[3/2] overflow-hidden">
        <Image
          src={getBlogImage(post.slug)}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-[900ms] ease-[var(--ease-lux)] group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="grade" />
      </div>
      <div className="pt-5 pb-2">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="inline-flex items-center border border-hairline-strong rounded-[2px] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne">
            {post.category}
          </span>
          <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
            {post.readTime}
          </span>
        </div>
        <h2 className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300 mb-3">
          {post.title}
        </h2>
        <p className="font-sans text-[0.9375rem] leading-relaxed text-ink-soft mb-4">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-champagne text-[0.8125rem] font-semibold uppercase tracking-[0.14em]">
          Read more{" "}
          <span className="transition-transform duration-400 group-hover:translate-x-1.5">
            &rarr;
          </span>
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

      {/* Hero */}
      <section className="pt-36 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto" data-reveal>
          <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            <span className="hairline-draw block h-px w-10 bg-champagne/60" />
            The Journal
          </p>
          <h1 className="font-display font-medium text-[2.9rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem] text-ink mb-7">
            Birthday Planning{" "}
            <em className="italic text-champagne font-normal">Blog</em>
          </h1>
          <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft max-w-2xl">
            Everything you need to know about celebrating your birthday at a
            London nightclub — from costs and dress codes to surprise party
            planning and bottle service tips.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-5 px-4 sm:px-6 lg:px-8 border-y border-hairline bg-noir-soft">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-3">
          <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint mr-1">
            Filter:
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center border border-hairline-strong rounded-[2px] px-3 py-1.5 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne"
            >
              {cat} ({blogPosts.filter((p) => p.category === cat).length})
            </span>
          ))}
        </div>
      </section>

      {/* Featured post */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Featured
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              <em className="italic text-champagne font-normal">Latest</em>
            </h2>
          </div>
          <Link
            href={`/blog/${sortedPosts[0].slug}`}
            className="group block border-t border-hairline hover:border-hairline-strong pt-8 transition-colors duration-500"
            data-reveal
          >
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="inline-flex items-center border border-hairline-strong rounded-[2px] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                {sortedPosts[0].category}
              </span>
              <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                {sortedPosts[0].readTime}
              </span>
            </div>
            <h3 className="font-display font-medium text-2xl sm:text-[2rem] leading-[1.15] text-ink group-hover:text-champagne-bright transition-colors duration-300 mb-4 max-w-2xl">
              {sortedPosts[0].title}
            </h3>
            <p className="font-sans text-base leading-[1.8] text-ink-soft mb-6 max-w-2xl">
              {sortedPosts[0].excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-champagne text-[0.8125rem] font-semibold uppercase tracking-[0.14em]">
              Read the full guide{" "}
              <span className="transition-transform duration-400 group-hover:translate-x-1.5">
                &rarr;
              </span>
            </span>
          </Link>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* All posts grid */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-14" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              The Archive
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              All <em className="italic text-champagne font-normal">Articles</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14" data-reveal>
            {sortedPosts.slice(1).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gilt" />

      {/* CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-noir-deep">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            The Next Step
          </p>
          <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
            Ready to Start{" "}
            <em className="italic text-champagne font-normal">Planning?</em>
          </h2>
          <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
            All the knowledge is here — but the easiest way to plan your
            birthday is to message us directly. We&apos;ll handle everything.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Plan My Birthday on WhatsApp"
            size="large"
            microcopy="Free service · Replies in minutes"
          />
        </div>
      </section>
    </>
  );
}
