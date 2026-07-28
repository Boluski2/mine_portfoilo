// components/Projects.tsx
import { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Time Offer",
    description: "Leave request and attendance management SaaS for small businesses.",
    longDescription:
      "A cloud-based solution designed to streamline leave requests and attendance tracking. Built the frontend interface and integrated real-time analytics for improved workforce management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/TimeOffer_logo.png",
    liveUrl: "https://time-offer-beta.vercel.app/",
    githubUrl: "https://github.com/Boluski2/TimeOffer.git",
    featured: true,
    year: "2026",
  },
  {
    id: 2,
    title: "OEA Consults",
    description: "GIS & drone solutions platform with AI-powered data visualization.",
    longDescription:
      "A platform integrating drone data, GIS mapping, and AI-driven analytics for surveying and environmental monitoring. Led the frontend architecture and integrated map visualizations with live telemetry.",
    tags: ["React", "Node.js", "GIS", "MongoDB"],
    image: "/Oea_logo.png",
    liveUrl: "https://www.oeaconsults.com/",
    githubUrl: "https://github.com/Boluski2/OEA_Consults",
    featured: true,
    year: "2025",
  },
  {
    id: 3,
    title: "Karken Company",
    description: "Responsive, SEO-first marketing site for a B2B food distributor.",
    longDescription:
      "A multilingual marketing site for a B2B distributor of authentic African food products in the Baltics. Built with React + TypeScript, Vite, and Tailwind, with EmailJS-powered lead capture.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    image: "/karken-logo.jpg",
    liveUrl: "https://karkencompany.lt/",
    githubUrl: "https://github.com/Boluski2/karken-.git",
    featured: false,
    year: "2025",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Complete property management and agent portal solution.",
    longDescription:
      "A full-featured property management system with listings, agent dashboards, and payment workflows. Implemented server-side filtering, role-based access, and an optimization layer for large media uploads.",
    tags: ["React", "Node.js", "MongoDB", "Prisma"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=entropy&auto=format",
    liveUrl: "https://real-estate-fullstack-nine.vercel.app/",
    githubUrl: "https://github.com/Boluski2/Real_Estate.git",
    featured: false,
    year: "2025",
  },
  {
    id: 5,
    title: "Forever E-commerce",
    description: "High-performance e-commerce platform with real-time inventory.",
    longDescription:
      "A high-throughput storefront with real-time inventory sync, checkout optimizations, and server-rendered pages for SEO. Integrated Stripe and built a robust webhook processing pipeline.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/lastest.png",
    liveUrl: "https://e-commers-frontend-three.vercel.app/",
    githubUrl: "https://github.com/Boluski2/e-commers.git",
    featured: false,
    year: "2024",
  },
  {
    id: 6,
    title: "Burger Website",
    description: "Interactive restaurant platform with 3D animations.",
    longDescription:
      "A playful restaurant site demonstrating 3D graphics and immersive UI using Three.js and GSAP. Focused on creating memorable micro-interactions and responsive 3D content.",
    tags: ["GSAP", "Three.js", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&h=600&fit=crop&crop=entropy&auto=format",
    liveUrl: "https://burger-website-olive.vercel.app/",
    githubUrl: "https://github.com/Boluski2/burger-website",
    featured: false,
    year: "2023",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light">
            Selected projects
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            A selection of recent work, built with modern tools and a focus on quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isExpanded = expanded === project.id;
            return (
              <div
                key={project.id}
                className={`group bg-white border border-gray-100 rounded-lg overflow-hidden transition-all ${
                  isExpanded ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-gray-900/80 text-white text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">{project.year}</div>
                      <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-gray-900 transition"
                        aria-label="Live preview"
                      >
                        <ExternalLink size={18} />
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-gray-900 transition"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {isExpanded ? project.longDescription : project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded text-xs text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition flex items-center gap-1"
                  >
                    {isExpanded ? "Show less" : "Read more"}
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}