import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  minHeight?: string;
}

export default function HeroImage({ src, alt, children, minHeight = "min-h-[60vh]" }: HeroImageProps) {
  return (
    <section className={`relative ${minHeight} flex items-center justify-center px-4`}>
      <Image src={src} alt={alt} fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {children}
      </div>
    </section>
  );
}
