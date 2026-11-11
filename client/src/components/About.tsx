
import {
  Compass,
  Layers3,
  Map,
  Workflow,
  Code2,
  Database,
} from "lucide-react";

const focusAreas = [
  {
    value: "Frontend Engineering",
    label: "Interfaces & user experiences",
    icon: Layers3,
  },
  {
    value: "Backend Development",
    label: "APIs & application architecture",
    icon: Workflow,
  },
  {
    value: "Geospatial Technology",
    label: "GIS, WebGIS & mapping",
    icon: Map,
  },
  {
    value: "Product Engineering",
    label: "From concept to implementation",
    icon: Compass,
  },
];

const capabilities = [
  {
    label: "Application Development",
    icon: Code2,
  },
  {
    label: "Data & Spatial Systems",
    icon: Database,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-6 py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Section introduction */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.17em] text-blue-800">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              About me
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.5rem]">
              Where software engineering meets{" "}
              <span className="text-blue-700">
                geospatial technology.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              I combine software development and spatial thinking
              to build digital products, data-driven applications,
              and technology that addresses real-world challenges.
            </p>

            {/* Academic foundation */}
            <div className="mt-9 flex items-center gap-4 border-t border-slate-200 pt-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-800">
                <Map size={21} />
              </span>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  B.Tech. Remote Sensing & GIS
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Federal University of Technology, Akure
                </p>
              </div>
            </div>

            {/* Supporting capabilities */}
            <div className="mt-7 flex flex-wrap gap-3">
              {capabilities.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600"
                >
                  <Icon size={15} className="text-blue-700" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Personal story */}
          <div className="lg:pt-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.045)] sm:p-9">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-700" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.17em] text-blue-800">
                  My journey
                </span>
              </div>

              <div className="space-y-5 text-[15px] leading-8 text-slate-600">
                <p>
                  My journey began with Remote Sensing and GIS,
                  where I developed an interest in spatial data,
                  geographic information, and how technology can
                  support better decision-making.
                </p>

                <p>
                  That interest grew into software engineering.
                  I began exploring how programming could transform
                  complex data and workflows into accessible,
                  interactive digital experiences.
                </p>

                <p>
                  Today, I work across frontend development,
                  backend engineering, database systems, and
                  geospatial technologies. I enjoy building
                  everything from full-stack applications and APIs
                  to interactive dashboards and WebGIS solutions.
                </p>

                <p>
                  My approach is simple: understand the problem,
                  design a practical solution, and build software
                  that is useful, maintainable, and ready to evolve.
                </p>
              </div>
            </div>

            {/* Areas of focus */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {focusAreas.map(({ value, label, icon: Icon }) => (
                <div
                  key={value}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md hover:shadow-blue-950/5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-800">
                    <Icon size={18} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      {value}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
