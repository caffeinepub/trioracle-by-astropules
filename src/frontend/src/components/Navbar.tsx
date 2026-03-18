import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Services", href: "#services" },
  { label: "Blog & Notice", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-glass shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-start focus:outline-none group"
        >
          <span className="font-cinzel text-xl md:text-2xl font-bold text-gold-gradient leading-tight">
            TriOracle
          </span>
          <span
            className="font-jost text-[10px] md:text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(154,123,26,0.7)" }}
          >
            by Astropules
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-cinzel text-sm tracking-widest uppercase transition-colors duration-200 hover:text-gold"
              style={{ color: "#4a3820" }}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("#courses")}
            className="btn-gold px-5 py-2 rounded text-sm ml-2"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-gold p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden navbar-glass border-t border-gold-bright/10 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="mobile-menu-item w-full text-left font-cinzel text-sm tracking-widest uppercase"
              style={{ color: "#4a3820" }}
            >
              {link.label}
            </button>
          ))}
          <div className="p-4">
            <button
              type="button"
              onClick={() => handleNavClick("#courses")}
              className="btn-gold w-full py-2.5 rounded text-sm font-cinzel"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
