export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative celestial rings */}
      <div
        className="celestial-ring"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderColor: "rgba(154,123,26,0.15)",
        }}
      />
      <div
        className="celestial-ring"
        style={{
          width: "800px",
          height: "800px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderColor: "rgba(154,123,26,0.10)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Top ornament */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in-up animate-delay-100">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-lg">✦</span>
          <span
            className="font-cinzel text-xs tracking-[0.4em] uppercase"
            style={{ color: "rgba(154,123,26,0.8)" }}
          >
            Ancient Wisdom
          </span>
          <span className="text-gold text-lg">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Main heading */}
        <h1 className="opacity-0 animate-fade-in-up animate-delay-200">
          <span className="block font-cinzel-deco text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-shimmer leading-tight mb-3">
            TriOracle
          </span>
          <span
            className="block font-cinzel text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase font-light mt-2"
            style={{ color: "rgba(154,123,26,0.8)" }}
          >
            by Astropules
          </span>
        </h1>

        {/* Ornament divider */}
        <div className="flex items-center justify-center gap-3 my-6 opacity-0 animate-fade-in-up animate-delay-300">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-gold/60 text-xs">✦</span>
          <div className="h-px w-4 bg-gold/40" />
          <span className="text-gold text-base">✦</span>
          <div className="h-px w-4 bg-gold/40" />
          <span className="text-gold/60 text-xs">✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Subtitle */}
        <p
          className="font-cormorant text-xl sm:text-2xl md:text-3xl italic font-light mb-10 opacity-0 animate-fade-in-up animate-delay-400"
          style={{ color: "#5a4520" }}
        >
          Ancient Wisdom. Modern Guidance. Predictive Mastery.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-500">
          <button
            type="button"
            onClick={() => handleScroll("#courses")}
            className="btn-gold px-8 py-3.5 rounded text-sm font-semibold w-full sm:w-auto"
          >
            Explore Courses
          </button>
          <a
            href="https://wa.me/919999999999?text=I would like to Book a Consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline px-8 py-3.5 rounded text-sm font-semibold w-full sm:w-auto text-center"
          >
            Book Consultation
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-14 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { num: "4", label: "Expert Courses" },
            { num: "6", label: "Services Offered" },
            { num: "3", label: "Ancient Sciences" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cinzel text-3xl font-bold text-gold">
                {stat.num}
              </div>
              <div
                className="font-jost text-xs tracking-widest uppercase mt-1"
                style={{ color: "rgba(154,123,26,0.7)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => handleScroll("#courses")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity focus:outline-none"
        style={{ color: "rgba(154,123,26,0.9)" }}
      >
        <span className="font-cinzel text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </button>
    </section>
  );
}
