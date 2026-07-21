import Image from "next/image";
import Link from "next/link";
import type { Club } from "@/lib/clubs";
import { getClubImage } from "@/lib/images";

export default function ClubCard({ club }: { club: Club }) {
  return (
    <Link href={`/clubs/${club.slug}`} className="group block">
      <div className="frame-mat img-editorial relative aspect-[4/5] sm:aspect-[16/10] overflow-hidden">
        <Image
          src={getClubImage(club.slug)}
          alt={`Birthday celebration at ${club.name}`}
          fill
          className="object-cover transition-transform duration-[900ms] ease-[var(--ease-lux)] group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 [background:var(--grad-card)]" />
        <div className="grade" />
        <div className="absolute top-5 right-5 z-[3] text-right">
          <span className="block font-sans text-[0.625rem] uppercase tracking-[0.26em] text-ink-soft">
            Tables from
          </span>
          <span className="font-display italic text-xl text-champagne-bright">
            {club.minSpend}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 z-[3]">
          <p className="font-sans text-[0.625rem] uppercase tracking-[0.26em] text-champagne mb-1.5">
            {club.tagline}
          </p>
          <h3 className="font-display font-semibold text-[1.375rem] leading-snug text-ink group-hover:text-champagne-bright transition-colors duration-300">
            {club.name}
          </h3>
        </div>
      </div>
      <div className="pt-4 pb-2">
        <p className="font-sans text-[0.9375rem] leading-relaxed text-ink-soft mb-3 line-clamp-2">
          {club.bestFor}
        </p>
        <p className="font-sans text-[0.75rem] uppercase tracking-[0.18em] text-ink-faint mb-3">
          {club.area} · {club.musicPolicy.split(",")[0]} · {club.openingNights}
        </p>
        <span className="inline-flex items-center gap-2 text-champagne text-[0.8125rem] font-semibold uppercase tracking-[0.14em]">
          View birthday packages{" "}
          <span className="transition-transform duration-400 group-hover:translate-x-1.5">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
