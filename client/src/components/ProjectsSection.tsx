import { useState, useEffect, useRef } from "react";
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight,
  Eye,
  Zap,
  Sparkles,
  ChevronRight,
  Layout,
  Smartphone,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedReveal from "@/components/AnimatedReveal";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: number;
  type: 'web' |  'fullstack'; 
  // 'mobile'
}

const projects: Project[] = [
  {
    id: 1,
    title: "OEA Consults",
    description: "GIS & drone solutions platform with AI-powered data visualization",
    image: "./Oea_logo.png",
    tags: ["React", "Node.js", "GIS", "MongoDB"],
    liveUrl: "https://www.oeaconsults.com/",
    githubUrl: "https://github.com/Boluski2/OEA_Consults",
    featured: true,
    year: 2025,
    type: 'fullstack'
  },
  {
    id: 2,
    title: "Real Estate Platform",
    description: "Complete property management & agent portal solution",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=entropy&auto=format",
    tags: ["React", "Node.js", "MongoDB", "Prisma"],
    liveUrl: "https://real-estate-fullstack-nine.vercel.app/",
    githubUrl: "https://github.com/Boluski2/Real_Estate.git",
    featured: false,
    year: 2025,
    type: 'fullstack'
  },
   {
    id: 3,
    title: "Forever E-commerce",
    description: "High-performance e-commerce platform with real-time inventory",
    image: "/lastest.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://e-commers-frontend-three.vercel.app/",
    githubUrl: "https://github.com/Boluski2/e-commers.git",
    featured: false,
    year: 2024,
    type: 'web'
  },
    {
    id: 4,
    title: "TimeOffer",
    description: "Employee management SaaS with time tracking & analytics",
    image: "/atendance.webp",
    tags: ["React", "Node.js", "MongoDB", "Auth0"],
    liveUrl: "https://time-offer-beta.vercel.app/",
    githubUrl: "",
    featured: true,
    year: 2025,
    type: 'fullstack'
  },
    {
    id: 5,
    title: "Magodo Drive",
    description: "Modern real estate platform with immersive property tours",
    image: "/drive.png",
    tags: ["React", "Tailwind", "Framer Motion", "Mapbox"],
    liveUrl: "https://magododrive.vercel.app/",
    githubUrl: "",
    featured: true,
    year: 2024,
    type: 'web'
  },
  {
    id: 6,
    title: "Burger Website",
    description: "Interactive restaurant platform with 3D animations",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&h=600&fit=crop&crop=entropy&auto=format",
    tags: ["GSAP", "Three.js", "JavaScript", "CSS"],
    liveUrl: "https://burger-website-olive.vercel.app/",
    githubUrl: "https://github.com/Boluski2/burger-website",
    featured: false,
    year: 2023,
    type: 'web'
  },
  {
    id: 7,
    title: "Image Chat App",
    description: "Real-time messaging with image sharing & notifications",
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&h=600&fit=crop&crop=entropy&auto=format",
    tags: ["Socket.io", "Express", "MongoDB", "Cloudinary"],
    liveUrl: "https://imaga-app.vercel.app/",
    githubUrl: "https://github.com/Boluski2/ImagaApp",
    featured: false,
    year: 2023,
    type: 'fullstack'
  },
  // {
  //   id: 8,
  //   title: "Education Platform",
  //   description: "Online learning platform with course management",
  //   image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&crop=entropy&auto=format",
  //   tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  //   liveUrl: "https://www.tianateaches.com/",
  //   githubUrl: "https://github.com/Boluski2/TianaTeaches",
  //   featured: false,
  //   year: 2023,
  //   type: 'web'
  // }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const getTypeIcon = (type: Project['type']) => {
    switch(type) {
      case 'web': return <Globe className="h-4 w-4" />;
      // case 'mobile': return <Smartphone className="h-4 w-4" />;
      case 'fullstack': return <Layout className="h-4 w-4" />;
    }
  };

  return (
    <div 
      ref={cardRef}
      className="relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse">
            <div className="h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"></div>
          </div>
        )}
        
        {/* Main Image */}
        <img
          src={project.image}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary to-blue-600 rounded-full text-white text-xs font-medium">
              <Sparkles className="h-3 w-3" />
              <span>Featured</span>
            </div>
          </div>
        )}
        
        {/* Type Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 text-xs font-medium">
            {getTypeIcon(project.type)}
            <span className="capitalize">{project.type}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className={`absolute bottom-4 right-4 flex gap-2 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-lg hover:scale-110 transition-transform shadow-lg"
            aria-label="Live preview"
          >
            <Eye className="h-4 w-4 text-gray-700" />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-lg hover:scale-110 transition-transform shadow-lg"
              aria-label="GitHub repository"
            >
              <Github className="h-4 w-4 text-gray-700" />
            </a>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Year */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {project.year}
          </div>
          <div className="flex items-center gap-1 text-sm text-primary">
            <Zap className="h-3 w-3" />
            <span>Live</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs text-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs text-gray-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        {/* View Project Link */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
        >
          <span>View Project</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);
    
  const visibleProjectsList = filteredProjects.slice(0, visibleProjects);
  
  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.type === 'web').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.type === 'fullstack').length },
    // { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.type === 'mobile').length },
  ];

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <AnimatedReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Featured Work
              </span>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Selected <span className="text-primary">Projects</span>
            </h2>
          </AnimatedReveal>
          
          <AnimatedReveal delay={200}>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A curated collection of my recent work, built with modern technologies 
              and focused on delivering exceptional user experiences.
            </p>
          </AnimatedReveal>
        </div>

        {/* Filters */}
        <AnimatedReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setVisibleProjects(6);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  {filter.label}
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    activeFilter === filter.id
                      ? 'bg-white/20'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}>
                    {filter.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </AnimatedReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleProjectsList.map((project, index) => (
            <AnimatedReveal 
              key={project.id} 
              delay={Math.min(index * 100, 600)}
            >
              <ProjectCard project={project} />
            </AnimatedReveal>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <AnimatedReveal>
            <div className="text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                className="rounded-full px-8 py-6 group"
              >
                <span className="flex items-center gap-2">
                  Load More Projects
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </AnimatedReveal>
        )}

        {/* Stats */}
        {/* <AnimatedReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {projects.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Featured Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Client Satisfaction
              </div>
            </div>
          </div>
        </AnimatedReveal> */}

        {/* CTA */}
        <AnimatedReveal delay={400}>
          <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with clean code and beautiful design.
            </p>
            <Button 
              asChild
              className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90"
            >
              <a href="#contact">
                Start a Conversation
              </a>
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}