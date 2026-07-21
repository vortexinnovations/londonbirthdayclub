import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  minHeight?: string;
}

export default function HeroImage({ src, alt, children, minHeight = "min-h-[64vh]" }: HeroImageProps) {
  return (
    <section className={`relative ${minHeight} img-editorial flex items-end overflow-hidden`}>
      <Image src={src} alt={alt} fill className="object-cover kenburns" priority sizes="100vw" />
      <div className="absolute inset-0 [background:var(--grad-hero)]" />
      <div className="grade" />
      <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_60px_rgba(8,6,3,0.55)]" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pb-20">
        <div className="max-w-3xl">{children}</div>
      </div>
    </section>
  );
}
