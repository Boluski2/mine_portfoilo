import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedReveal from "@/components/AnimatedReveal";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "OEA Consults Ltd",
    description: "OEA Consults provide novel and innovative solutions using drones, GIS, and artificial intelligence in data collection, analysis, and visualization.",
    image: "./Oea_logo.png",
    tags: ["React", "Node.js", "TypeScript", "Mongodb", "Express.js"],
    liveUrl: "https://www.oeaconsults.com/",
    githubUrl: "https://github.com/Boluski2/OEA_Consults",
  },
  {
    id: 2,
    title: "Magodo Drive",
    description: "Magodo Drive presents itself as a clean, contemporary, and user-centric web application. The landing page features a sophisticated dark-themed interface, punctuated with vibrant accents that create a visually striking and professional first impression.",
    image: "/drive.png",
    tags: ["React"],
    liveUrl: "https://magododrive.vercel.app/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "TimeOffer",
    description: "TimeOff: Streamlined employee time-off management with seamless onboarding and intuitive dashboard.",
    image: "/atendance.webp",
    tags: ["React", "Node.js", "Mongodb", "Auth0", "Prisma", "Express.js"],
    liveUrl: "https://time-offer-beta.vercel.app/",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "A full-featured Real Estate platform built with React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "Mongodb", "Auth0", "Prisma", "Express.js"],
    liveUrl: "https://real-estate-fullstack-nine.vercel.app/",
    githubUrl: "https://github.com/Boluski2/Real_Estate.git",
  },
  {
    id: 5,
    title: "Forever E-commerce website",
    description: "E-commerce website with a modern design and user-friendly interface.",
    image: "/lastest.png",
    tags: ["Nextjs", "Node.js", "Monogodb", "Tailwindcss", "Express.js"],
    liveUrl: "https://e-commers-frontend-three.vercel.app/",
    githubUrl: "https://github.com/Boluski2/e-commers.git",
  },
  {
    id: 6,
    title: "Animated Burger Website",
    description: "A Burger website with animated hero section and interactive menu.",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHw4fHxidXJnZXJ8ZW58MHx8fHwxNzQxMzM1OTA5fDA&ixlib=rb-4.0.3&q=80&w=400",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://burger-website-olive.vercel.app/",
    githubUrl: "https://github.com/Boluski2/burger-website",
  },
  {
    id: 7,
    title: "Real-time Image Chat App",
    description: "A Real-time Image Chat App for seamless communication.",
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyfHxBJTIwUmVhbCUyMHRpbWUlMjBJbWFnZSUyMENoYXQlMjBBcHB8ZW58MHx8fHwxNzQxMzM1OTQ4fDA&ixlib=rb-4.0.3&q=80&w=400",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://imaga-app.vercel.app/",
    githubUrl: "https://github.com/Boluski2/ImagaApp",
  },
  {
    id: 8,
    title: "Education Website",
    description: "A client project for a personal education tutor.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyfHxlZHVjYXRpb258ZW58MHx8fHwxNzQxMzM2MDQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://www.tianateaches.com/",
    githubUrl: "https://github.com/Boluski2/TianaTeaches",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Calculate animation delay based on index
  const delay = 100 + index * 100;

  return (
    <div
      ref={cardRef}
      className={`project-card rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-500 opacity-0 ${
        isVisible ? "opacity-100 translate-y-0" : "translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <div 
          className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        ></div>
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal text-1xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge variant="outline" className="font-normal text-xs">
              +{project.tags.length - 2} more
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-ls mb-3">
          {project.description}
        </p>
        <div className="flex items-center justify-between pt-1">
          <a
            href={project.liveUrl}
            className="text-xs font-medium hover-underline inline-flex items-center space-x-1 text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <a
            href={project.githubUrl}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedReveal>
          <div className="text-center mb-12">
            <p className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium mb-2">
              My Work
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work, showcasing my skills in full-stack development,
              responsive design, and creating engaging user experiences.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          {/* <Button variant="outline" className="group">
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button> */}
        </div>
      </div>
    </section>
  );
}