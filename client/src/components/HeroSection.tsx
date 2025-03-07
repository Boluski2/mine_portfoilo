
import { useEffect, useRef } from "react";
import { ArrowDownCircle, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedReveal from "@/components/AnimatedReveal";
import { Link }from "react-router-dom";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
// import Link from "next/link";



export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles setup
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(50, window.innerWidth / 20);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-20 pb-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedReveal>
            <p className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium mb-5">
              Full-Stack Developer
            </p>
          </AnimatedReveal>
          
          <AnimatedReveal delay={200}>
            <h1 className="text-balance font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Creating <span className="relative">
                digital experiences
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700"></span>
              </span> that matter
            </h1>
          </AnimatedReveal>
          
          <AnimatedReveal delay={400}>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              I design and build beautiful, functional web applications with a focus on user experience, performance, and accessibility.
            </p>
          </AnimatedReveal>
          
          <AnimatedReveal delay={600}>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              {/* <Button className="rounded-full">
                <Link href="#projects">View My Work</Link>
              </Button> */}
              <Button variant="outline" className="rounded-full">
                <Download className="mr-2" />
               <a href="/BABATUNDEADEBOLU_Cv.docx">Download Resume</a>
              </Button>
            </div>
          </AnimatedReveal>
          
          <AnimatedReveal delay={800}>
            <div className="flex justify-center gap-6 mb-14">
              <a href="https://github.com/" className="hover:scale-110 transition-transform" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/feed/" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://wa.me/2348182296188" className="hover:scale-110 transition-transform" aria-label="WhatsApp">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@boluski12?_t=ZM-8uU4J83GQ8z&_r=1" className="hover:scale-110 transition-transform" aria-label="TikTok">
                <FaTiktok className="h-6 w-6" />
              </a>
            </div>
          </AnimatedReveal>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="h-10 w-10 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
