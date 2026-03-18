import { ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Course } from "../data/courses";

interface Props {
  course: Course | null;
  onClose: () => void;
}

export function SyllabusModal({ course, onClose }: Props) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!course) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [course]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!course) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay animate-fade-in"
    >
      {/* Backdrop click area */}
      <button
        type="button"
        className="absolute inset-0 w-full h-full cursor-default focus:outline-none"
        style={{ background: "transparent" }}
        onClick={onClose}
        aria-label="Close modal"
        tabIndex={-1}
      />
      <dialog
        open
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-lg overflow-hidden animate-fade-in-up m-0 p-0"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(180,140,20,0.3)",
          boxShadow:
            "0 20px 60px rgba(44,36,22,0.15), 0 0 40px rgba(154,123,26,0.08)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between p-6 border-b"
          style={{ borderColor: "rgba(180,140,20,0.2)" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-cinzel text-xs tracking-[0.3em] uppercase"
                style={{ color: "rgba(154,123,26,0.7)" }}
              >
                Complete Syllabus
              </span>
            </div>
            <h2 className="font-cinzel text-xl font-bold text-gold">
              {course.name}
            </h2>
            <div className="price-badge mt-2 text-sm">{course.fee}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded transition-colors hover:bg-black/5"
            style={{ color: "rgba(154,123,26,0.7)" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {course.syllabusCategories.map((cat) => {
            const isOpen = openCategory === cat.heading;
            return (
              <div
                key={cat.heading}
                className="rounded overflow-hidden"
                style={{
                  border: "1px solid rgba(180,140,20,0.18)",
                  background: "#faf7f2",
                }}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-black/5"
                  onClick={() => setOpenCategory(isOpen ? null : cat.heading)}
                >
                  <span className="font-cinzel text-sm font-medium text-gold">
                    {cat.heading}
                  </span>
                  <ChevronDown
                    size={16}
                    className="text-gold/60 transition-transform duration-200 shrink-0"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {isOpen && (
                  <ul
                    className="px-4 pb-4 space-y-2"
                    style={{ borderTop: "1px solid rgba(180,140,20,0.15)" }}
                  >
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 pt-2 font-jost text-sm"
                        style={{ color: "#6b5a3a" }}
                      >
                        <span className="text-gold/50 mt-1 text-xs shrink-0">
                          ✦
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="p-4 border-t flex flex-col sm:flex-row gap-3"
          style={{ borderColor: "rgba(180,140,20,0.2)" }}
        >
          <a
            href={`https://wa.me/919999999999?text=${encodeURIComponent(course.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-gold py-3 rounded text-sm text-center font-cinzel font-semibold"
          >
            Enroll Now — {course.fee}
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 rounded text-sm font-cinzel font-medium transition-colors"
            style={{
              border: "1px solid rgba(154,123,26,0.3)",
              color: "rgba(154,123,26,0.7)",
            }}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}
