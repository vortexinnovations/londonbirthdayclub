"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global scroll-reveal driver for [data-reveal] elements.
 *
 * JS-safe by design: elements are fully visible in static CSS; hiding
 * only applies once this component mounts and stamps `js` on <html>.
 * No-JS visitors and crawlers always see complete content.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in-view)")
    );
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
