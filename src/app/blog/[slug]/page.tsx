import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getGeneralWhatsAppMessage } from "@/lib/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQSchema from "@/components/FAQSchema";

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
      "@id": `https://londonbirthdayclub.com/blog/${post.slug}`,
    },
  };

  const otherPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {post.faqs && <FAQSchema faqs={post.faqs} />}

      {/* Header */}
      <article>
        <header className="relative py-20 sm:py-28 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
          <div className="max-w-3xl mx-auto relative">
            <Link
              href="/blog"
              className="text-gold text-sm hover:underline mb-4 inline-block"
            >
              &larr; All Articles
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                {post.category}
              </span>
              <span className="text-xs text-text-muted">{post.readTime}</span>
              <span className="text-xs text-text-muted">
                Updated{" "}
                {new Date(post.updatedAt).toLocaleDateString("en-GB", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Body */}
        <div className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            {post.sections.map((section, i) => {
              const Heading = section.headingLevel === "h2" ? "h2" : "h3";
              const headingClass =
                section.headingLevel === "h2"
                  ? "text-2xl sm:text-3xl font-bold mb-5 mt-12 first:mt-0"
                  : "text-xl font-semibold mb-4 mt-8";

              return (
                <section key={i}>
                  <Heading className={headingClass}>{section.heading}</Heading>
                  {section.content.map((para, j) => (
                    <p
                      key={j}
                      className="text-text-secondary leading-relaxed mb-4"
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
          <div className="py-12 px-4 bg-bg-secondary">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="bg-bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Birthday?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Now you know the details — let us handle the rest. Message us on
            WhatsApp and we&apos;ll plan your perfect birthday night.
          </p>
          <WhatsAppCTA
            message={getGeneralWhatsAppMessage()}
            label="Plan My Birthday on WhatsApp"
            size="large"
          />
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 px-4 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            More Birthday Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-5 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                    {p.category}
                  </span>
                  <span className="text-xs text-text-muted">{p.readTime}</span>
                </div>
                <h3 className="font-semibold group-hover:text-gold transition-colors mb-2">
                  {p.title}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-2">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/blog"
              className="text-gold hover:underline text-sm"
            >
              View all articles &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
