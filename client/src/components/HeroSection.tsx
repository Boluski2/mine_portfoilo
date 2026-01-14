
// import { useEffect, useRef } from "react";
// import { ArrowDownCircle, Download, Github, Linkedin, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import AnimatedReveal from "@/components/AnimatedReveal";
// import { Link }from "react-router-dom";
// import { FaTiktok, FaWhatsapp } from "react-icons/fa";
// // import Link from "next/link";



// export default function HeroSection() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Set canvas dimensions
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     // Initial resize
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     // Particles setup
//     const particlesArray: Particle[] = [];
//     const numberOfParticles = Math.min(50, window.innerWidth / 20);

//     class Particle {
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       opacity: number;

//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 3 + 1;
//         this.speedX = (Math.random() - 0.5) * 0.5;
//         this.speedY = (Math.random() - 0.5) * 0.5;
//         this.opacity = Math.random() * 0.5 + 0.1;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > canvas.width) this.x = 0;
//         if (this.x < 0) this.x = canvas.width;
//         if (this.y > canvas.height) this.y = 0;
//         if (this.y < 0) this.y = canvas.height;
//       }

//       draw() {
//         ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     // Create particles
//     for (let i = 0; i < numberOfParticles; i++) {
//       particlesArray.push(new Particle());
//     }

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       for (let i = 0; i < particlesArray.length; i++) {
//         particlesArray[i].update();
//         particlesArray[i].draw();
//       }
      
//       requestAnimationFrame(animate);
//     };

//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, []);

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Canvas background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 z-0"
//       />
      
//       {/* Content */}
//       <div className="container relative z-10 mx-auto px-4 pt-20 pb-10">
//         <div className="max-w-3xl mx-auto text-center">
//           <AnimatedReveal>
//             <p className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-medium mb-5">
//               Full-Stack Developer
//             </p>
//           </AnimatedReveal>
          
//           <AnimatedReveal delay={200}>
//             <h1 className="text-balance font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//               Creating <span className="relative">
//                 digital experiences
//                 <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700"></span>
//               </span> that matter
//             </h1>
//           </AnimatedReveal>
          
//           <AnimatedReveal delay={400}>
//             <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
//               I desiggn and build beautiful, functional web applications with a focus on user experience, performance, and accessibility.
//             </p>
//           </AnimatedReveal>
          
//           <AnimatedReveal delay={600}>
//             <div className="flex flex-wrap gap-4 justify-center mb-10">
//               {/* <Button className="rounded-full">
//                 <Link href="#projects">View My Work</Link>
//               </Button> */}
//               <Button variant="outline" className="rounded-full">
//                 <Download className="mr-2" />
//                <a href="/AdeboluBabatundeCv.pdf" target="_blank">Download Resume</a>
//               </Button>
//             </div>
//           </AnimatedReveal>
          
//           <AnimatedReveal delay={800}>
//             <div className="flex justify-center gap-6 mb-14">
//               <a href="https://github.com/" className="hover:scale-110 transition-transform" aria-label="GitHub">
//                 <Github className="h-6 w-6" />
//               </a>
//               <a href="https://www.linkedin.com/feed/" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               <a href="https://wa.me/2348182296188" className="hover:scale-110 transition-transform" aria-label="WhatsApp">
//                 <FaWhatsapp className="h-6 w-6" />
//               </a>
//               <a href="https://www.tiktok.com/@boluski12?_t=ZM-8uU4J83GQ8z&_r=1" className="hover:scale-110 transition-transform" aria-label="TikTok">
//                 <FaTiktok className="h-6 w-6" />
//               </a>
//             </div>
//           </AnimatedReveal>
//         </div>
        
//         {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <a href="#about" aria-label="Scroll down">
//             <ArrowDownCircle className="h-10 w-10 opacity-60" />
//           </a>
//         </div> */}
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef, useState } from "react";
import { ArrowDownCircle, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedReveal from "@/components/AnimatedReveal";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = `rgba(59, 130, 246, ${this.opacity})`;
      }

      update(mouseX: number, mouseY: number) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = distance < 100 ? 0.02 : 0;

        this.x += this.speedX + dx * force;
        this.y += this.speedY + dy * force;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(80, window.innerWidth / 15);

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mousePos.x, mousePos.y);
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  const stats = [
    { value: "20+", label: "Projects" },
    { value: "3+", label: "Years Exp" },
    { value: "100%", label: "Satisfaction" },
    { value: "15+", label: "Clients" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-gray-900/50 dark:via-gray-900/80 dark:to-gray-900"></div>
      
      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <AnimatedReveal>
                <div className="inline-block rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-1.5 text-sm font-medium mb-6 border border-primary/20">
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Full-Stack Developer
                  </span>
                </div>
              </AnimatedReveal>
              
              <AnimatedReveal delay={200}>
                <h1 className="text-balance font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Creating{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                      Digital Experiences
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full"></span>
                  </span>{" "}
                  That Drive Results
                </h1>
              </AnimatedReveal>
              
              <AnimatedReveal delay={400}>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
                  I design and build beautiful, functional web applications with a focus on 
                  user experience, performance, and accessibility. Let's transform your ideas 
                  into reality.
                </p>
              </AnimatedReveal>
              
              <AnimatedReveal delay={600}>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Button className="rounded-full px-8 py-6 text-base bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all">
                    <a href="#projects">View My Work</a>
                  </Button>
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base group border-2">
                    <Download className="mr-2 group-hover:translate-y-1 transition-transform" />
                    <a href="/AdeboluBabatundeCv.pdf" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </AnimatedReveal>
              
              <AnimatedReveal delay={800}>
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Follow me:</span>
                  <div className="flex gap-4">
                    <a href="https://github.com/" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all hover:scale-110 hover:shadow-md" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/feed/" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white transition-all hover:scale-110 hover:shadow-md" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:babatundebolu@gmail.com" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-500 hover:text-white transition-all hover:scale-110 hover:shadow-md" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="https://wa.me/2348182296188" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-green-500 hover:text-white transition-all hover:scale-110 hover:shadow-md" aria-label="WhatsApp">
                      <FaWhatsapp className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
            
            <div className="lg:w-1/2">
              <AnimatedReveal delay={300}>
                <div className="relative">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                    {/* Add your profile image here */}
                    <img 
                      src="/Bolex.jpg" 
                      alt="Adebolu Babatunde"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary to-blue-400 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
                </div>
              </AnimatedReveal>
              
              {/* <AnimatedReveal delay={500}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all"
                    >
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedReveal> */}
            </div>
          </div>
        </div>
        
        {/* <AnimatedReveal delay={1000}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll down" className="block p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm">
              <ArrowDownCircle className="h-8 w-8 text-gray-600 dark:text-gray-300" />
            </a>
          </div>
        </AnimatedReveal> */}
      </div>
    </section>
  );
}