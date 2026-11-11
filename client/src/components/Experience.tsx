import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "OEA Consults Ltd",
    location: "Nigeria",
    period: "2024 – Present",
    description: [
      "Contributed to frontend development for geospatial and technology solutions.",
      "Built user interfaces for data-driven applications, including mapping and dashboard experiences.",
      "Worked on responsive interfaces and reusable components to support application usability.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2019 – Present",
    description: [
      "Designed and developed web applications for clients across different industries.",
      "Built frontend interfaces and backend functionality using technologies such as React and Node.js.",
      "Worked with clients to understand requirements and translate ideas into functional digital products.",
      "Focused on responsive design, usability, and maintainable application architecture.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50/50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Experience
          </span>

          <h2 className="mt-4 text-3xl font-light md:text-4xl">
            Where I've worked
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="relative pl-8 before:absolute before:left-0 before:top-3 before:h-full before:w-0.5 before:bg-gray-200 last:before:h-8"
            >
              <div className="absolute left-0 top-3 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-gray-900" />

              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-xl font-medium text-gray-900">
                  {exp.title}
                </h3>

                <span className="text-gray-400">·</span>

                <span className="text-gray-600">{exp.company}</span>
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {exp.period}
              </span>
              <ul className="space-y-2 leading-relaxed text-gray-500">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="select-none text-gray-300">—</span>
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