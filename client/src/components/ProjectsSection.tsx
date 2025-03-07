
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
    title: "Real Estate Platform",
    description: "A full-featured Real Estate platform built with React, Node.js, and MongoDB. Features include product search, filtering, Book Properties, user authentication.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "Mongodb", "Auth0", "Prisma", "Express.js"],
    liveUrl: "https://real-estate-fullstack-nine.vercel.app/",
    githubUrl: "https://github.com/Boluski2/Real_Estate.git",
  },
  {
    id: 2,
    title: "Financial Expert Website",
    description: "A financial expert website with a modern design, animated hero section, and interactive menu. Built with Next.js, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyN3x8ZmluYW5jaWFsJTIwfGVufDB8fHx8MTc0MTMzNTgxN3ww&ixlib=rb-4.0.3&q=80&w=400",
    tags: ["Nextjs", "Node.js", "Monogodb", "Tailwindcss", "Express.js"],
    liveUrl: "https://bimbs.vercel.app/",
    githubUrl: "https://github.com/Boluski2/bimbs",
  },
  {
    id: 3,
    title: "Animated Burger Website",
    description: "A Burger website with a modern design, animated hero section, and interactive menu. Built with HTML",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHw4fHxidXJnZXJ8ZW58MHx8fHwxNzQxMzM1OTA5fDA&ixlib=rb-4.0.3&q=80&w=400",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://burger-website-olive.vercel.app/",
    githubUrl: "https://github.com/Boluski2/burger-website",
  },
  {
    id: 4,
    title: "A Real time Image Chat App",
    description: "A Real time Image Chat App",
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyfHxBJTIwUmVhbCUyMHRpbWUlMjBJbWFnZSUyMENoYXQlMjBBcHB8ZW58MHx8fHwxNzQxMzM1OTQ4fDA&ixlib=rb-4.0.3&q=80&w=400",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://imaga-app.vercel.app/",
    githubUrl: "https://github.com/Boluski2/ImagaApp",
  },
  {
    id: 5,
    title: "Personal Education Website",
    description: "A Client project for a personal education that give details about the tutor and the courses offered.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwyfHxlZHVjYXRpb258ZW58MHx8fHwxNzQxMzM2MDQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
    tags: ["HTML", "CSSS", "JavaScript"],
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
      className={`project-card rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-500 opacity-0 ${
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
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="font-normal text-xs">
              +{project.tags.length - 3} more
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <a
            href={project.liveUrl}
            className="text-sm font-medium hover-underline inline-flex items-center space-x-1 text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          <a
            href={project.githubUrl}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedReveal>
          <div className="text-center mb-16">
            <p className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium mb-3">
              My Work
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work, showcasing my skills in full-stack development,
              responsive design, and creating engaging user experiences.
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
