import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { CoursesSection } from "./components/CoursesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";

// Section divider component
function SectionDivider() {
  return (
    <div className="relative py-2 px-4">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-gold/40" />
        <div className="flex gap-2 items-center">
          <span style={{ color: "rgba(154,123,26,0.25)", fontSize: "10px" }}>
            ✦
          </span>
          <span style={{ color: "rgba(154,123,26,0.4)", fontSize: "12px" }}>
            ✦
          </span>
          <span style={{ color: "rgba(154,123,26,0.25)", fontSize: "10px" }}>
            ✦
          </span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/20 to-gold/40" />
      </div>
    </div>
  );
}

// Scroll-reveal wrapper
function RevealSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  const handleAdminToggle = () => {
    setShowAdmin((prev) => !prev);
    // Scroll to blog section when admin is toggled
    setTimeout(() => {
      const el = document.getElementById("blog");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div
      className="starfield min-h-screen"
      style={{ backgroundColor: "#faf7f2" }}
    >
      <Toaster
        theme="light"
        toastOptions={{
          style: {
            background: "#fffdf8",
            border: "1px solid rgba(180,140,20,0.3)",
            color: "#2c2416",
            fontFamily: "Jost, sans-serif",
          },
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero – no reveal animation, it IS the entrance */}
        <HeroSection />

        <SectionDivider />

        {/* Courses */}
        <RevealSection>
          <CoursesSection />
        </RevealSection>

        <SectionDivider />

        {/* Services */}
        <RevealSection delay={100}>
          <ServicesSection />
        </RevealSection>

        <SectionDivider />

        {/* Blog & Notice */}
        <RevealSection delay={50}>
          <BlogSection showAdmin={showAdmin} setShowAdmin={setShowAdmin} />
        </RevealSection>

        <SectionDivider />

        {/* Contact */}
        <RevealSection delay={100}>
          <ContactSection />
        </RevealSection>
      </main>

      {/* Footer */}
      <Footer onAdminToggle={handleAdminToggle} />
    </div>
  );
}
