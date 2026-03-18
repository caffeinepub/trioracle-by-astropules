import { Heart } from "lucide-react";

const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Services", href: "#services" },
  { label: "Blog & Notice", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

interface FooterProps {
  onAdminToggle: () => void;
}

export function Footer({ onAdminToggle }: FooterProps) {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      className="relative py-16 px-4"
      style={{
        background: "linear-gradient(to top, #f0ead8 0%, #f5f0e8 100%)",
        borderTop: "1px solid rgba(180,140,20,0.2)",
      }}
    >
      {/* Top gold line */}
      <div className="gold-divider mb-12" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="font-cinzel-deco text-2xl font-bold text-gold-gradient">
                TriOracle
              </h3>
              <p
                className="font-jost text-xs tracking-[0.3em] uppercase mt-1"
                style={{ color: "rgba(154,123,26,0.6)" }}
              >
                by Astropules
              </p>
            </div>
            <p
              className="font-cormorant text-base italic leading-relaxed"
              style={{ color: "#8a7660" }}
            >
              Ancient wisdom meets modern guidance. Discover your destiny
              through Nadi Astrology, Numerology, Palmistry, and Vedic Cards.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "rgba(154,123,26,0.7)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="font-jost text-sm transition-colors duration-200 hover:text-gold"
                    style={{ color: "#6b5a3a" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-cinzel text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "rgba(154,123,26,0.7)" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <p className="font-jost text-sm" style={{ color: "#6b5a3a" }}>
                📞 +91 99999 99999
              </p>
              <p className="font-jost text-sm" style={{ color: "#6b5a3a" }}>
                ✉️ info@astropules.com
              </p>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-jost text-sm transition-colors duration-200"
                style={{ color: "rgba(37,211,102,0.75)" }}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(180,140,20,0.2)" }}
        >
          <p
            className="font-jost text-xs text-center sm:text-left"
            style={{ color: "#8a7660" }}
          >
            © 2026 TriOracle by Astropules. All rights reserved.
          </p>

          <p
            className="font-jost text-xs flex items-center gap-1.5 text-center"
            style={{ color: "#8a7660" }}
          >
            Built with <Heart size={11} className="text-gold/50" /> using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-gold/70 transition-colors"
              style={{ color: "rgba(154,123,26,0.6)" }}
            >
              caffeine.ai
            </a>
          </p>

          {/* Admin toggle — small & unobtrusive */}
          <button
            type="button"
            onClick={onAdminToggle}
            className="font-jost text-xs transition-colors hover:text-gold/50"
            style={{ color: "rgba(154,123,26,0.25)" }}
          >
            Admin
          </button>
        </div>
      </div>
    </footer>
  );
}
