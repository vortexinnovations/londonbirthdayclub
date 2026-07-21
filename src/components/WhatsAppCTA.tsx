import { getWhatsAppLink } from "@/lib/clubs";

interface WhatsAppCTAProps {
  message: string;
  label?: string;
  className?: string;
  size?: "default" | "large";
  variant?: "default" | "detailed";
  microcopy?: string;
}

const whatsAppIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function WhatsAppCTA({
  message,
  label = "Book on WhatsApp",
  className = "",
  size = "default",
  variant = "default",
  microcopy,
}: WhatsAppCTAProps) {
  const sizeClasses =
    size === "large"
      ? "gap-3 text-sm tracking-[0.16em] px-10 py-4"
      : "gap-2.5 text-[0.8125rem] tracking-[0.14em] px-7 py-3";

  const button = (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-wa inline-flex items-center justify-center bg-whatsapp hover:bg-whatsapp-deep text-whatsapp-ink font-sans font-bold uppercase rounded-[2px] transition-colors duration-300 ${sizeClasses} ${
        microcopy ? "" : className
      }`}
    >
      {whatsAppIcon}
      {label}
    </a>
  );

  const withMicrocopy = microcopy ? (
    <span className={`inline-flex flex-col items-center ${className}`}>
      {button}
      <span className="mt-3 font-sans text-[0.8125rem] text-ink-faint tracking-[0.02em]">
        {microcopy}
      </span>
    </span>
  ) : (
    button
  );

  if (variant === "detailed") {
    return (
      <div className="text-center">
        <div className="grid grid-cols-3 max-w-md mx-auto mb-6 divide-x divide-hairline border-y border-hairline">
          {[
            { label: "Group Size", hint: "How many guests?" },
            { label: "Date", hint: "When is the birthday?" },
            { label: "Budget", hint: "Per person or total" },
          ].map((item) => (
            <div key={item.label} className="px-3 py-4 text-center">
              <div className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-champagne mb-1">
                {item.label}
              </div>
              <div className="font-sans text-xs text-ink-faint">{item.hint}</div>
            </div>
          ))}
        </div>
        <p className="font-sans text-[0.8125rem] text-ink-faint tracking-[0.02em] mb-6">
          Have these details ready — we handle the rest
        </p>
        {withMicrocopy}
      </div>
    );
  }

  return withMicrocopy;
}
