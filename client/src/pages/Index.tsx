
// import { useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
// import SkillsSection from "@/components/SkillsSection";
// import ProjectsSection from "@/components/ProjectsSection";
// import ContactSection from "@/components/ContactSection";
// import Footer from "@/components/Footer";
// import TestimonialsSection from "@/components/TestimonialsSection";

// const Index = () => {
//   useEffect(() => {
//     // Set document title
//     document.title = "Adebolu Babatunde | Full-Stack Developer";
    
//     // Smooth scroll for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         const href = this.getAttribute('href') || '';
//         const targetEl = document.querySelector(href);
        
//         if (targetEl) {
//           targetEl.scrollIntoView({
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
    
//     return () => {
//       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.removeEventListener('click', function (e) {
//           e.preventDefault();
//         });
//       });
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <SkillsSection />
//         <ProjectsSection />
//         {/* <TestimonialsSection /> */}
//         <ContactSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;


import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Adebolu Babatunde | Full-Stack Developer & UI/UX Designer";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === "#" || !href) return;
        
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(href);
          
          if (targetEl) {
            targetEl.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-blue-600 z-50 transition-all duration-200';
    progressBar.id = 'progress-bar';
    document.body.appendChild(progressBar);
    
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) progressBar.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;