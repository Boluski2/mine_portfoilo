// components/Experience.tsx
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "OEA Consults Ltd",
    location: "Nigeria",
    period: "2024 – Present",
    description: [
      "Built and maintained the frontend for a GIS and drone solutions platform.",
      "Integrated map visualizations, live telemetry, and AI-powered data dashboards.",
      "Led frontend architecture and improved performance by 40%.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2023 – Present",
    description: [
      "Design and develop full-stack web applications for clients across various industries.",
      "Architect scalable solutions using React, Node.js, and cloud platforms.",
      "Optimize performance, accessibility, and SEO for production-grade deployments.",
      "Collaborate with clients to translate business requirements into technical solutions.",
    ],
  },
  {
    title: "Web Developer",
    company: "Karken Company",
    location: "Lithuania / Remote",
    period: "2025 – 2026",
    description: [
      "Developed a responsive, SEO-first marketing website for a B2B food distributor.",
      "Implemented multilingual content (Lithuanian/English) and EmailJS-powered lead capture.",
      "Optimized performance with lazy loading and prioritized assets.",
      "Ensured accessibility and cross-browser compatibility.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
            Experience
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light">
            Where I've worked
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-3 before:w-0.5 before:h-full before:bg-gray-200 last:before:h-8">
              <div className="absolute left-0 top-3 w-3 h-3 -translate-x-1.5 rounded-full bg-gray-900 border-2 border-white" />

              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm mb-2">
                <h3 className="text-xl font-medium text-gray-900">{exp.title}</h3>
                <span className="text-gray-400">·</span>
                <span className="text-gray-600">{exp.company}</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 text-gray-500 leading-relaxed">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-gray-300 select-none">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}