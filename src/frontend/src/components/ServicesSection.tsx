import { BookOpen, Clock, Hand, Hash, Sparkles, Star } from "lucide-react";

const SERVICES = [
  {
    icon: Star,
    title: "Personal Consultation",
    description:
      "In-depth birth chart analysis and personalised life guidance covering all major life areas.",
    whatsappText: "I would like to book a Personal Consultation",
  },
  {
    icon: BookOpen,
    title: "Nadi Astrology Reading",
    description:
      "Precision predictions using ancient Nadi techniques for timing of life events.",
    whatsappText: "I would like to book a Nadi Astrology Reading",
  },
  {
    icon: Hash,
    title: "Numerology Reading",
    description:
      "Name and number analysis for life path clarity, career, relationships, and destiny.",
    whatsappText: "I would like to book a Numerology Reading",
  },
  {
    icon: Hand,
    title: "Palmistry Session",
    description:
      "Read your destiny through the lines, mounts, and patterns of your palm.",
    whatsappText: "I would like to book a Palmistry Session",
  },
  {
    icon: Clock,
    title: "Muhurat / Auspicious Timing",
    description:
      "Find the perfect muhurat for marriage, business launch, grah pravesh, and travel.",
    whatsappText:
      "I would like to book a Muhurat / Auspicious Timing consultation",
  },
  {
    icon: Sparkles,
    title: "Remedies & Healing",
    description:
      "Personalised Vastu corrections, Mantra, Yantra, Meditation guidance and spiritual healing.",
    whatsappText: "I would like to know about Remedies and Healing",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 relative">
      {/* Background with subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #faf7f2 0%, #f0ead8 50%, #faf7f2 100%)",
        }}
      />

      {/* Decorative corner ornaments */}
      <div
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(154,123,26,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(154,123,26,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="font-cinzel text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "rgba(154,123,26,0.7)" }}
          >
            What We Offer
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-gold-gradient mb-4">
            Our Services
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span className="text-gold text-sm">✦</span>
          </div>
          <p
            className="font-cormorant text-lg md:text-xl italic max-w-2xl mx-auto mt-4"
            style={{ color: "#6b5a3a" }}
          >
            Personalised consultations combining three ancient sciences for
            accurate, insightful guidance
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="gold-card rounded-lg p-6 flex flex-col items-start gap-4 group"
              >
                {/* Icon ring */}
                <div className="service-icon-ring">
                  <Icon size={24} style={{ color: "#9a7b1a" }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-cinzel text-base font-semibold text-gold mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p
                    className="font-jost text-sm leading-relaxed"
                    style={{ color: "#6b5a3a" }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Book Now */}
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(service.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded text-sm text-center font-cinzel font-medium transition-all duration-200"
                  style={{
                    border: "1px solid rgba(154,123,26,0.35)",
                    color: "#9a7b1a",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(154,123,26,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(154,123,26,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(154,123,26,0.35)";
                  }}
                >
                  Book Now
                </a>
              </div>
            );
          })}
        </div>

        {/* Separator ornament */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-gold/30" />
          <span className="text-gold/40 text-xs">✦</span>
          <span className="text-gold/60 text-sm">✦</span>
          <span className="text-gold/40 text-xs">✦</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-gold/30" />
        </div>
      </div>
    </section>
  );
}
