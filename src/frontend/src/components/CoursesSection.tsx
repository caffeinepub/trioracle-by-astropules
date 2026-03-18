import { BookOpen, Eye } from "lucide-react";
import { useState } from "react";
import { COURSES, type Course } from "../data/courses";
import { SyllabusModal } from "./SyllabusModal";

const COURSE_ICONS = ["⭐", "🔢", "✋", "🃏"];

const COURSE_COLORS = [
  "from-amber-50 to-yellow-50",
  "from-purple-50 to-indigo-50",
  "from-rose-50 to-red-50",
  "from-emerald-50 to-teal-50",
];

export function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-24 px-4 relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #faf7f2 0%, #f5f0e8 50%, #faf7f2 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="font-cinzel text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "rgba(154,123,26,0.7)" }}
          >
            Begin Your Journey
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl text-gold-gradient mb-4">
            Our Courses
          </h2>
          <div className="section-divider max-w-xs mx-auto">
            <span className="text-gold text-sm">✦</span>
          </div>
          <p
            className="font-cormorant text-lg md:text-xl italic max-w-2xl mx-auto mt-4"
            style={{ color: "#6b5a3a" }}
          >
            Master the ancient sciences of prediction — Astrology, Numerology,
            Palmistry, and Vedic Cards
          </p>
        </div>

        {/* Course cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES.map((course, idx) => (
            <div
              key={course.id}
              className={`gold-card rounded-lg overflow-hidden flex flex-col bg-gradient-to-br ${COURSE_COLORS[idx]}`}
            >
              {/* Card header */}
              <div
                className="p-6 border-b"
                style={{ borderColor: "rgba(180,140,20,0.2)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{COURSE_ICONS[idx]}</span>
                    <div>
                      <h3 className="font-cinzel text-lg font-bold text-gold leading-tight">
                        {course.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="price-badge text-base">
                          {course.fee}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col">
                <p
                  className="font-jost text-sm leading-relaxed mb-6"
                  style={{ color: "#6b5a3a" }}
                >
                  {course.brief}
                </p>

                {/* Topics preview */}
                <div className="mb-6 flex-1">
                  <p
                    className="font-cinzel text-xs tracking-widest uppercase mb-3"
                    style={{ color: "rgba(154,123,26,0.6)" }}
                  >
                    Topics Covered
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.syllabusCategories.slice(0, 4).map((cat) => (
                      <span
                        key={cat.heading}
                        className="text-xs px-2.5 py-1 rounded font-jost"
                        style={{
                          background: "rgba(180,140,20,0.1)",
                          border: "1px solid rgba(180,140,20,0.3)",
                          color: "#9a7b1a",
                        }}
                      >
                        {cat.heading}
                      </span>
                    ))}
                    {course.syllabusCategories.length > 4 && (
                      <span
                        className="text-xs px-2.5 py-1 rounded font-jost"
                        style={{
                          background: "rgba(180,140,20,0.06)",
                          border: "1px solid rgba(180,140,20,0.2)",
                          color: "rgba(154,123,26,0.7)",
                        }}
                      >
                        +{course.syllabusCategories.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded text-sm transition-colors font-cinzel"
                    style={{
                      border: "1px solid rgba(154,123,26,0.4)",
                      color: "#9a7b1a",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(154,123,26,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                    }}
                  >
                    <Eye size={15} />
                    View Syllabus
                  </button>
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(course.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-gold flex items-center justify-center gap-2 py-2.5 rounded text-sm font-cinzel"
                  >
                    <BookOpen size={15} />
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p
            className="font-cormorant text-lg italic mb-6"
            style={{ color: "#8a7660" }}
          >
            Not sure which course is right for you?
          </p>
          <a
            href="https://wa.me/919999999999?text=I need guidance on which course to choose"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline inline-flex items-center gap-2 px-8 py-3 rounded text-sm"
          >
            Get Free Guidance
          </a>
        </div>
      </div>

      {/* Syllabus modal */}
      <SyllabusModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
}
