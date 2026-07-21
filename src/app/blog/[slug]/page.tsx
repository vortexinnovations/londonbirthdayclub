import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";
import { getBlogImage } from "@/lib/images";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://londonbirthdayclub.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://londonbirthdayclub.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Charlotte Hayes",
      jobTitle: "Events Specialist",
      url: "https://londonbirthdayclub.com/about-the-editor/",
    },
    publisher: {
      "@type": "Organization",
      name: "London Birthday Club",
      url: "https://londonbirthdayclub.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://londonbirthdayclub.com/blog/${post.slug}`,
    },
  };

  const otherPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Styling only: split the title so the final word carries the single
  // italic champagne accent — rendered copy is byte-identical.
  const titleWords = post.title.split(" ");
  const titleAccent = titleWords[titleWords.length - 1];
  const titleLead = titleWords.slice(0, -1).join(" ");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {post.faqs && <FAQSchema faqs={post.faqs} />}

      {/* Header */}
      <article>
        <div className="pt-36 sm:pt-40 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto" data-reveal>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-champagne hover:text-champagne-bright text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 mb-10"
            >
              <span className="transition-transform duration-400 group-hover:-translate-x-1.5">
                &larr;
              </span>{" "}
              All Articles
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center border border-hairline-strong rounded-[2px] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                {post.category}
              </span>
              <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                {post.readTime}
              </span>
              <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                Updated{" "}
                {new Date(post.updatedAt).toLocaleDateString("en-GB", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="font-display font-medium text-[2.5rem] leading-[1.08] tracking-[-0.015em] sm:text-5xl text-ink mb-6">
              {titleLead && <>{titleLead} </>}
              <em className="italic text-champagne font-normal">
                {titleAccent}
              </em>
            </h1>
            <p className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint mb-6">
              By{" "}
              <Link
                href="/about-the-editor"
                className="text-champagne hover:text-champagne-bright underline decoration-champagne/30 underline-offset-4 decoration-[0.5px] transition-colors duration-200"
              >
                Charlotte Hayes
              </Link>
              , Events Specialist
            </p>
            <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10">
              {post.excerpt}
            </p>
            <div className="frame-mat img-editorial relative w-full aspect-video overflow-hidden">
              <Image src={getBlogImage(post.slug)} alt={post.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
              <div className="grade" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {post.sections.map((section, i) => {
              const Heading = section.headingLevel === "h2" ? "h2" : "h3";
              const headingClass =
                section.headingLevel === "h2"
                  ? "font-display font-medium text-2xl sm:text-3xl text-ink mb-5 mt-12 first:mt-0"
                  : "font-display font-medium text-xl text-ink mb-4 mt-8";

              return (
                <section key={i}>
                  <Heading className={headingClass}>{section.heading}</Heading>
                  {section.content.map((para, j) => (
                    <p
                      key={j}
                      className="font-sans text-base leading-[1.8] text-ink-soft mb-5"
                    >
                      {para}
                    </p>
                  ))}
                </section>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        {post.faqs && post.faqs.length > 0 && (
          <>
            <div className="divider-gilt" />
            <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
              <div className="max-w-3xl mx-auto">
                <div className="mb-14" data-reveal>
                  <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
                    <span className="hairline-draw block h-px w-10 bg-champagne/60" />
                    Good to Know
                  </p>
                  <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink">
                    Frequently Asked{" "}
                    <em className="italic text-champagne font-normal">
                      Questions
                    </em>
                  </h2>
                </div>
                <div className="divide-y divide-hairline border-y border-hairline" data-reveal>
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="py-7">
                      <h3 className="font-display font-medium text-lg sm:text-xl text-ink flex gap-5">
                        <span className="font-display italic text-champagne/70 select-none">
                          Q.
                        </span>
                        {faq.question}
                      </h3>
                      <p className="mt-3 pl-[2.15rem] font-sans text-base leading-[1.8] text-ink-soft">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </article>

      <div className="divider-gilt" />

      {/* CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-6">
            The Next Step
          </p>
          <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink mb-5">
            Ready to Book Your{" "}
            <em className="italic text-champagne font-normal">Birthday?</em>
          </h2>
          <p className="font-sans text-[1.0625rem] leading-[1.8] text-ink-soft mb-10 max-w-xl mx-auto">
            Now you know the details — let us handle the rest. Message us on
            WhatsApp and we&apos;ll plan your perfect birthday night.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Plan My Birthday on WhatsApp"
            size="large"
            microcopy="Free service · Replies in minutes"
          />
        </div>
      </section>

      <div className="divider-gilt" />

      {/* Related posts */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-noir-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 sm:mb-20" data-reveal>
            <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
              <span className="hairline-draw block h-px w-10 bg-champagne/60" />
              Keep Reading
            </p>
            <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] tracking-[-0.01em] text-ink max-w-2xl">
              More Birthday{" "}
              <em className="italic text-champagne font-normal">Guides</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12" data-reveal>
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block border-t border-hairline hover:border-hairline-strong pt-6 transition-colors duration-500"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-flex items-center border border-hairline-strong rounded-[2px] px-2.5 py-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                    {p.category}
                  </span>
                  <span className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint">
                    {p.readTime}
                  </span>
                </div>
                <h3 className="font-display font-medium text-xl text-ink group-hover:text-champagne-bright transition-colors duration-300 mb-3">
                  {p.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-ink-soft line-clamp-2">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12" data-reveal>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-champagne text-[0.8125rem] font-semibold uppercase tracking-[0.14em]"
            >
              View all articles{" "}
              <span className="transition-transform duration-400 group-hover:translate-x-1.5">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
