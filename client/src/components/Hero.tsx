// components/Hero.tsx
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-6 pt-20 pb-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-6 px-4 py-1.5 border border-gray-200 rounded-full text-xs tracking-wide text-gray-500">
              Full-Stack Developer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-gray-900">
              Building digital
              <br />
              <span className="font-medium">products that work.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
              I'm Adebolu Babatunde a full-stack developer crafting clean, performant,
              and accessible web applications for businesses that care about quality.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm font-medium"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-gray-200 rounded-md hover:border-gray-400 transition text-sm font-medium text-gray-700"
              >
                Get in Touch
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-sm text-gray-400">
              <span>React</span>
              <span className="text-gray-300">·</span>
              <span>TypeScript</span>
              <span className="text-gray-300">·</span>
              <span>Node.js</span>
              <span className="text-gray-300">·</span>
              <span>Next.js</span>
              <span className="text-gray-300">·</span>
              <span>MongoDB</span>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/Bolex.jpg"
                alt="Adebolu Babatunde"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}