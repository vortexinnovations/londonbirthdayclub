export default function TrustSignals() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          data-reveal
        >
          {[
            { stat: "Free", label: "No booking fees" },
            { stat: "13", label: "Partner venues" },
            { stat: "WhatsApp", label: "Instant response" },
            { stat: "5 min", label: "Average booking time" },
          ].map((item) => (
            <div key={item.label} className="border-l border-hairline pl-6 py-2">
              <div className="font-display italic font-medium text-4xl sm:text-5xl text-champagne leading-none">
                {item.stat}
              </div>
              <div className="mt-3 font-sans text-[0.6875rem] uppercase tracking-[0.24em] text-ink-faint">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <p className="font-sans text-[0.8125rem] leading-relaxed tracking-[0.02em] text-ink-faint mt-10 max-w-2xl">
          London Birthday Club is an independent nightlife concierge. We work
          directly with venue management to secure the best tables and birthday
          packages for our clients.
        </p>
      </div>
    </section>
  );
}
