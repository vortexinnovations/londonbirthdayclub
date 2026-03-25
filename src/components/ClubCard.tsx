import Link from "next/link";
import type { Club } from "@/lib/clubs";

export default function ClubCard({ club }: { club: Club }) {
  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="group block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl p-6 transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors">
          {club.name}
        </h3>
        <span className="text-gold text-sm font-medium whitespace-nowrap ml-3">
          From {club.minSpend}
        </span>
      </div>
      <p className="text-gold/80 text-sm font-medium mb-2">{club.tagline}</p>
      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
        {club.bestFor}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs bg-bg-primary text-text-secondary px-2 py-1 rounded">
          {club.area}
        </span>
        <span className="text-xs bg-bg-primary text-text-secondary px-2 py-1 rounded">
          {club.musicPolicy.split(",")[0]}
        </span>
        <span className="text-xs bg-bg-primary text-text-secondary px-2 py-1 rounded">
          {club.openingNights}
        </span>
      </div>
      <span className="text-gold text-sm font-medium group-hover:underline">
        View birthday packages &rarr;
      </span>
    </Link>
  );
}
