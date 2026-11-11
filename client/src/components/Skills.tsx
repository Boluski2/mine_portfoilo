
import {
  Code2,
  Database,
  MapPinned,
  Smartphone,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    number: "01",
    name: "Frontend Development",
    description: "Building modern web interfaces",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },
  {
    number: "02",
    name: "Backend Development",
    description: "Application logic and APIs",
    icon: Terminal,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "Authentication",
      "JWT",
    ],
  },
  {
    number: "03",
    name: "Database & Infrastructure",
    description: "Data management and deployment",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Neon",
      "Drizzle ORM",
      "Prisma",
      "Git",
      "GitHub",
      "Vercel",
      "Render",
    ],
  },
  {
    number: "04",
    name: "Geospatial Technology",
    description: "Spatial data and interactive mapping",
    icon: MapPinned,
    skills: [
      "QGIS",
      "PostGIS",
      "GeoServer",
      "Leaflet",
      "MapLibre",
      "deck.gl",
      "GeoJSON",
      "Remote Sensing",
    ],
  },
  {
    number: "05",
    name: "Mobile Development",
    description: "Cross-platform mobile applications",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "AsyncStorage",
      "React Native WebView",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Technical expertise
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              The technologies behind{" "}
              <span className="text-blue-700">
                my work.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 md:text-base">
            A growing technical toolkit spanning full-stack
            development, databases, geospatial engineering,
            and mobile application development.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map(
            ({ number, name, description, icon: Icon, skills }, index) => (
              <article
                key={name}
                className={`group rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/[0.04] ${
                  index < 3
                    ? "lg:col-span-2"
                    : "lg:col-span-3"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-800 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>

                  <span className="font-mono text-xs tracking-widest text-slate-400">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">
                  {name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          )}
        </div>

        {/* Supporting statement */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Always learning. Always building.
          </p>

          <p className="text-xs font-medium text-blue-700">
            Development · Data · Geospatial · Mobile
          </p>
        </div>
      </div>
    </section>
  );
}
