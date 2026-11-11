
import { useState } from "react";
import {
  ArrowUpRight, ChevronDown, ExternalLink, Github,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GeoField",
    category: "Geospatial Engineering",
    status: "In Development",
    description:
      "A mobile-first field operations platform for collecting, managing, and reviewing location-based field data.",
    longDescription:
      "Currently developing a field operations solution with project management, task tracking, GPS-tagged observations, photo capture, and a mobile mapping experience. The product direction is focused on industrial field teams.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Expo", "React Native", "Leaflet"],
    featured: true,
  },
  {
    id: 2,
    title: "Geospatial Dashboard",
    category: "Geospatial Engineering",
    status: "Professional Work",
    description:
      "Interactive geospatial dashboards for exploring spatial datasets and supporting data-driven decisions.",
    longDescription:
      "Professional experience contributing to geospatial dashboard interfaces and interactive spatial data visualisation. Project details are intentionally kept general.",
    tags: ["Next.js", "React", "deck.gl", "MapLibre", "Data Visualisation"],
    featured: true,
  },
  {
    id: 3,
    title: "WebGIS Platform",
    category: "Geospatial Engineering",
    status: "Professional Work",
    description:
      "Web-based geographic information systems for presenting and exploring spatial information.",
    longDescription:
      "Experience contributing to web mapping interfaces and geographic data platforms. Client-specific information and internal implementation details are not published.",
    tags: ["WebGIS", "React", "Mapping", "Spatial Data"],
    featured: true,
  },
  {
    id: 4,
    title: "DayMark Time Offer",
    category: "Full-Stack Applications",
    status: "Live",
    description:
      "A leave request and attendance management application for simplifying workforce administration.",
    longDescription:
      "A workforce management application designed to streamline employee leave requests and attendance tracking through a centralised digital interface.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/timeOffer.png",
    imageFit: "contain",
    liveUrl: "https://time-offer-beta.vercel.app/",
    githubUrl: "https://github.com/Boluski2/TimeOffer.git",
    featured: true,
    // year: "2026",
  },
  {
    id: 5,
    title: "Dashboard Inventory Management",
    category: "Full-Stack Applications",
    status: "Live",
    description:
      "A business management platform designed for makeup artists to manage bookings, clients, and services.",
    longDescription:
      "Building a web-based business management solution with a structured database, authentication, and a foundation for booking and client management workflows.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Better Auth"],
    image: "/dashboard.png",
    imageFit: "contain",
    liveUrl: "https://inventory-six-amber-53.vercel.app/",
    githubUrl: "https://github.com/Boluski2/adornedbyella_dashboard-.git",
    featured: true,
  },
  {
    id: 6,
    title: "Karken Company",
    category: "Web Development",
    status: "Live",
    description:
      "A responsive multilingual marketing website for a B2B food distributor.",
    longDescription:
      "Built a multilingual website using React and TypeScript, with responsive layouts and an email-based lead capture experience.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "/karken-logo.jpg",
    imageFit: "contain",
    liveUrl: "https://karkencompany.lt/",
    githubUrl: "https://github.com/Boluski2/karken-.git",
  },
  {
    id: 7,
    title: "OEA Consults",
    status: "Live",
    category: "Web Development",
    description: "GIS & drone solutions platform with AI-powered data visualization.",
    longDescription:
      "A platform integrating drone data, GIS mapping, and AI-driven analytics for surveying and environmental monitoring. Led the frontend architecture and integrated map visualizations with live telemetry.",
    tags: ["React", "Node.js", "GIS", "MongoDB"],
    image: "/Oea_logo.png",
    imageFit: "contain",
    liveUrl: "https://www.oeaconsults.com/",
    githubUrl: "https://github.com/Boluski2/OEA_Consults",
    featured: true,
  },
  {
    id: 8,
    title: "lamikawakila",
    category: "Web Development",
    status: "Live",
    description:
      "A Petroleum website PACRA-registered industrial supplier serving Zambia's mining sector with diesel fuel, PPE, and mining consumables from the heart of the Copperbelt. ",
    longDescription:
      "A responsive website for a Zambian industrial supplier, featuring product information, service offerings, and contact details. Built with modern web technologies to ensure fast load times and a user-friendly experience.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image:
      "/lamikawakila.png",
    imageFit: "contain",
    liveUrl: "https://lamikawakila.com/",
    githubUrl: "https://github.com/Boluski2/Lamikawakila-Investments-Limited.git",
  },
  {
    id: 9,
    title: "Forever E-commerce",
    category: "Web Development",
    status: "Live",
    description:
      "An e-commerce application with product browsing and online shopping workflows.",
    longDescription:
      "A full-stack e-commerce project built around a modern storefront experience, product presentation, and checkout functionality.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/lastest.png",
    imageFit: "contain",
    liveUrl: "https://e-commers-frontend-three.vercel.app/",
    githubUrl: "https://github.com/Boluski2/e-commers.git",
  },

];

const categories = [
  // "Geospatial Engineering", // Temporarily hidden.
  "Full-Stack Applications",
  "Web Development",
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="section section-paper">
      <div className="page-wrap">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="eyebrow-line" />Selected work</p><h2>Projects built with <em>purpose.</em></h2></div>
          <p className="section-summary">A selection of applications and client work. Professional projects are described at a high level where details are confidential.</p>
        </div>
        <div className="project-groups">
          {categories.map((name) => {
            const categoryProjects = projects.filter(
              (project) => project.category === name
            );

            return (
              <div key={name} className="project-group">
                <h3 className="project-category">{name}</h3>
                <div className="project-grid">
                  {categoryProjects.map((project) => {
                    const isExpanded = expanded === project.id;

                    return (
                      <article key={project.id} className="project-card">
                        {project.image ? (
                          <div className={`project-image-frame ${project.imageFit === "contain" ? "project-image-frame-contain" : ""}`}>
                            <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className={`project-image ${project.imageFit === "contain" ? "project-image-contain" : ""}`} />
                          </div>
                        ) : (
                          <div className="project-image-frame project-cover">
                            <span className="project-cover-index">PROJECT {String(project.id).padStart(2, "0")}</span>
                            <span className="project-cover-title">{project.title}</span>
                          </div>
                        )}
                        <div className="project-info">
                          <div className="project-title-line"><div><p className="project-meta">{project.status}</p><h4>{project.title}</h4></div>
                            <div className="project-links">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`Visit ${project.title}`}
                                  title="Live project"
                                  className="project-icon-link"
                                >
                                  <ExternalLink size={16} />
                                </a>
                              )}

                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${project.title} GitHub repository`}
                                  title="GitHub repository"
                                  className="project-icon-link"
                                >
                                  <Github size={16} />
                                </a>
                              )}
                            </div>
                          </div>
                          <p className="project-description">
                            {isExpanded
                              ? project.longDescription
                              : project.description}
                          </p>

                          <div className="project-tags">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="project-tag"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              setExpanded(isExpanded ? null : project.id)
                            }
                            aria-expanded={isExpanded}
                            className="project-more"
                          >
                            {isExpanded ? "Show less" : "More about this project"}
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <a href="https://github.com/Boluski2" target="_blank" rel="noopener noreferrer" className="github-note">More code and experiments on GitHub <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
