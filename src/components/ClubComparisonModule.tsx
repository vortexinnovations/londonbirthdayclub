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
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat.label} className="bg-bg-card border border-border rounded-xl p-5">
            <h3 className="text-gold font-semibold text-sm mb-1">{cat.label}</h3>
            <p className="text-text-muted text-xs mb-3">{cat.description}</p>
            <div className="space-y-1.5">
              {cat.clubs.map((slug) => {
                const club = openClubs.find((c) => c.slug === slug);
                if (!club) return null;
                return (
                  <Link
                    key={slug}
                    href={`/clubs/${slug}`}
                    className="flex items-center justify-between text-sm hover:text-gold transition-colors"
                  >
                    <span>{club.shortName}</span>
                    <span className="text-text-muted text-xs">{club.minSpend}</span>
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
