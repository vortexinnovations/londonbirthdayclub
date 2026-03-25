export default function TrustSignals() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { stat: "Free", label: "No booking fees" },
            { stat: "13", label: "Partner venues" },
            { stat: "WhatsApp", label: "Instant response" },
            { stat: "5 min", label: "Average booking time" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center bg-bg-card border border-border rounded-xl py-4 px-3"
            >
              <div className="text-gold font-bold text-xl mb-1">{item.stat}</div>
              <div className="text-text-muted text-xs">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-text-muted text-xs mt-4">
          London Birthday Club is an independent nightlife concierge. We work directly with venue management to secure the best tables and birthday packages for our clients.
        </p>
      </div>
    </section>
  );
}
