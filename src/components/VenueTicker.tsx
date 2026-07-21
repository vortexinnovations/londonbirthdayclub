import { openClubs } from "@/lib/clubs";

/**
 * The guest list scrolling past the rope — a slow marquee of real
 * partner venue names between the hero and the first section.
 * Pure CSS animation; the duplicate run is aria-hidden.
 */
export default function VenueTicker() {
  const names = openClubs.map((c) => c.name);

  const run = (ariaHidden: boolean) => (
    <div
      className="flex items-center shrink-0"
      aria-hidden={ariaHidden || undefined}
    >
      {names.map((name) => (
        <span key={name} className="flex items-center">
          <span className="whitespace-nowrap px-7 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-ink-faint">
            {name}
          </span>
          <span className="h-1 w-1 rotate-45 bg-champagne/50 shrink-0" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="border-y border-hairline bg-noir-deep/60 py-4">
      <div className="ticker">
        <div className="ticker-track">
          {run(false)}
          {run(true)}
        </div>
      </div>
    </div>
  );
}
