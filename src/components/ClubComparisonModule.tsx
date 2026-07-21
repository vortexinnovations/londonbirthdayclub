import Link from "next/link";
import { openClubs } from "@/lib/clubs";

type ComparisonCategory = {
  label: string;
  description: string;
  clubs: string[]; // slugs
};

interface ClubComparisonModuleProps {
  title: string;
  categories: ComparisonCategory[];
}

export default function ClubComparisonModule({ title, categories }: ClubComparisonModuleProps) {
  return (
    <div>
      <div className="mb-12" data-reveal>
        <p className="flex items-center gap-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-champagne mb-5">
          <span className="hairline-draw block h-px w-10 bg-champagne/60" />
          Quick Match
        </p>
        <h2 className="font-display font-medium text-[2rem] leading-[1.12] sm:text-4xl tracking-[-0.01em] text-ink max-w-2xl">
          {title}
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {categories.map((cat) => (
          <div key={cat.label} className="border-t border-hairline pt-5" data-reveal>
            <h3 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-champagne mb-1">
              {cat.label}
            </h3>
            <p className="font-sans text-[0.8125rem] text-ink-faint mb-4">{cat.description}</p>
            <div className="space-y-2.5">
              {cat.clubs.map((slug) => {
                const club = openClubs.find((c) => c.slug === slug);
                if (!club) return null;
                return (
                  <Link
                    key={slug}
                    href={`/clubs/${slug}`}
                    className="flex items-baseline justify-between gap-3 font-sans text-[0.9375rem] text-ink-soft hover:text-champagne-bright transition-colors duration-200"
                  >
                    <span>{club.shortName}</span>
                    <span className="font-display italic text-sm text-champagne/80 whitespace-nowrap">
                      {club.minSpend}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
