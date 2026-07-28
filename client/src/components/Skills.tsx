// components/Skills.tsx
import { useState } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML / CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Authentication", "Microservices"],
  },
  {
    name: "Database & Tools",
    skills: ["MongoDB", "PostgreSQL", "Git / GitHub", "Vercel", "Firebase"],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
            Expertise
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light">
            Technologies I work with
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            A selection of tools and frameworks I use daily to build production-grade applications.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2 border-b border-gray-100 pb-0">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActive(idx)}
              className={`px-6 py-3 text-sm font-medium transition-all ${
                active === idx
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories[active].skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm hover:border-gray-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap justify-center gap-2">
            {["Responsive Design", "SEO", "Performance", "Accessibility", "UI/UX", "Code Review"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-600"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}