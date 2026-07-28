// components/About.tsx
import { Briefcase, Code, Users, Zap } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "12+", label: "Projects Delivered" },
  { value: "8+", label: "Happy Clients" },
  { value: "100%", label: "Commitment" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
              About
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
              Developer with a
              <br />
              <span className="font-medium">craftsman's mindset.</span>
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              I write code that's maintainable, performant, and a pleasure to work with.
              With experience across the full stack, I bring a holistic approach to
              building web applications from database design to pixel-perfect interfaces.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              My work is driven by a commitment to quality, accessibility, and
              delivering real value to users and businesses alike.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-medium text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-md">
                  <Code size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Clean Code</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Readable, well-structured code that's easy to maintain and scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-md">
                  <Zap size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Performance</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Fast, optimized applications that deliver a smooth user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-100 rounded-md">
                  <Users size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Collaboration</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Clear communication and a team-first approach to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}