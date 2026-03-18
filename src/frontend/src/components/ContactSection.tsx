import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { toast } from "sonner";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    setSubmitting(true);
    // Simulate submission (frontend-only)
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Message sent! We'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
    setSubmitting(false);
  };

  const inputStyle = {
    background: "#f5f0e8",
    border: "1px solid rgba(180,140,20,0.25)",
    color: "#2c2416",
    borderRadius: "6px",
  };

  const inputFocusStyle = "focus:outline-none focus:ring-1 focus:ring-gold/40";

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #faf7f2 0%, #f5f0e8 50%, #faf7f2 100%)",
        }}
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(154,123,26,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-cinzel text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "rgba(154,123,26,0.7)" }}
          >
            Connect With Us
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-gold-gradient mb-4">
            Get in Touch
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span className="text-gold text-sm">✦</span>
          </div>
          <p
            className="font-cormorant text-lg italic mt-4 max-w-xl mx-auto"
            style={{ color: "#6b5a3a" }}
          >
            Reach out for consultations, course enquiries, or guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-lg transition-all duration-300 group"
              style={{
                background:
                  "linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(18,140,126,0.08) 100%)",
                border: "1px solid rgba(37,211,102,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(37,211,102,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(37,211,102,0.2)";
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
              >
                <MessageCircle size={22} color="white" />
              </div>
              <div>
                <p
                  className="font-cinzel text-sm font-semibold"
                  style={{ color: "#25D366" }}
                >
                  Chat on WhatsApp
                </p>
                <p
                  className="font-jost text-sm mt-0.5"
                  style={{ color: "#4a3820" }}
                >
                  +91 99999 99999
                </p>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-4 p-5 rounded-lg gold-card">
              <div className="service-icon-ring w-12 h-12 shrink-0">
                <Phone size={20} style={{ color: "#9a7b1a" }} />
              </div>
              <div>
                <p className="font-cinzel text-sm font-medium text-gold">
                  Phone
                </p>
                <p
                  className="font-jost text-sm mt-0.5"
                  style={{ color: "#6b5a3a" }}
                >
                  +91 99999 99999
                </p>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:info@astropules.com"
              className="flex items-center gap-4 p-5 rounded-lg gold-card"
            >
              <div className="service-icon-ring w-12 h-12 shrink-0">
                <Mail size={20} style={{ color: "#9a7b1a" }} />
              </div>
              <div>
                <p className="font-cinzel text-sm font-medium text-gold">
                  Email
                </p>
                <p
                  className="font-jost text-sm mt-0.5"
                  style={{ color: "#6b5a3a" }}
                >
                  info@astropules.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-lg gold-card">
              <div className="service-icon-ring w-12 h-12 shrink-0">
                <MapPin size={20} style={{ color: "#9a7b1a" }} />
              </div>
              <div>
                <p className="font-cinzel text-sm font-medium text-gold">
                  Location
                </p>
                <p
                  className="font-jost text-sm mt-0.5"
                  style={{ color: "#6b5a3a" }}
                >
                  India — Online & In-Person Sessions Available
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p
                className="font-cinzel text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: "rgba(154,123,26,0.6)" }}
              >
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  {
                    Icon: SiFacebook,
                    label: "Facebook",
                    href: "https://facebook.com",
                  },
                  {
                    Icon: SiInstagram,
                    label: "Instagram",
                    href: "https://instagram.com",
                  },
                  {
                    Icon: SiYoutube,
                    label: "YouTube",
                    href: "https://youtube.com",
                  },
                  { Icon: SiX, label: "X / Twitter", href: "https://x.com" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      border: "1px solid rgba(154,123,26,0.3)",
                      color: "rgba(154,123,26,0.7)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(154,123,26,0.6)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#9a7b1a";
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "rgba(154,123,26,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(154,123,26,0.3)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(154,123,26,0.7)";
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "transparent";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="rounded-lg p-6 md:p-8"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(180,140,20,0.25)",
            }}
          >
            <h3 className="font-cinzel text-xl font-semibold text-gold mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-cinzel text-xs tracking-widest uppercase mb-1.5"
                  style={{ color: "rgba(154,123,26,0.7)" }}
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className={`w-full px-4 py-3 text-sm font-jost ${inputFocusStyle}`}
                  style={inputStyle}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-cinzel text-xs tracking-widest uppercase mb-1.5"
                  style={{ color: "rgba(154,123,26,0.7)" }}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={`w-full px-4 py-3 text-sm font-jost ${inputFocusStyle}`}
                  style={inputStyle}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-cinzel text-xs tracking-widest uppercase mb-1.5"
                  style={{ color: "rgba(154,123,26,0.7)" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className={`w-full px-4 py-3 text-sm font-jost resize-none ${inputFocusStyle}`}
                  style={inputStyle}
                  placeholder="How can we help you?"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-gold w-full py-3.5 rounded text-sm font-cinzel font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <span className="animate-spin">✦</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
