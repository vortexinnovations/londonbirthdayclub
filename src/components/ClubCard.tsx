import Image from "next/image";
import Link from "next/link";
import type { Club } from "@/lib/clubs";
import { getClubImage } from "@/lib/images";

export default function ClubCard({ club }: { club: Club }) {
  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="group block bg-bg-card hover:bg-bg-card-hover border border-border hover:border-gold/30 rounded-xl overflow-hidden transition-all"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={getClubImage(club.slug)}
          alt={`Birthday celebration at ${club.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
            {club.name}
          </h3>
          <p className="text-gold/90 text-sm font-medium">{club.tagline}</p>
        </div>
        <span className="absolute top-3 right-3 text-xs bg-black/60 text-gold font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
          From {club.minSpend}
        </span>
      </div>
      <div className="p-4">
        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
          {club.bestFor}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-xs bg-bg-primary text-text-muted px-2 py-0.5 rounded">
            {club.area}
          </span>
          <span className="text-xs bg-bg-primary text-text-muted px-2 py-0.5 rounded">
            {club.musicPolicy.split(",")[0]}
          </span>
          <span className="text-xs bg-bg-primary text-text-muted px-2 py-0.5 rounded">
            {club.openingNights}
          </span>
        </div>
        <span className="text-gold text-sm font-medium group-hover:underline">
          View birthday packages &rarr;
        </span>
      </div>
    </Link>
  );
}
