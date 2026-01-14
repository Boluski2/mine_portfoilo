
// import { ArrowUp } from "lucide-react";

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="py-12 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-6 md:mb-0">
//             <a href="#" className="text-xl font-display font-medium tracking-tight">
//             <span className="font-bold">Adebolu</span> Babatunde
//             </a>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Crafting digital experiences with precision and purpose.
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row items-center md:space-x-8">
//             <nav className="flex space-x-6 mb-6 md:mb-0">
//               <a href="#about" className="text-sm hover-underline">About</a>
//               <a href="#skills" className="text-sm hover-underline">Skills</a>
//               <a href="#projects" className="text-sm hover-underline">Projects</a>
//               <a href="#contact" className="text-sm hover-underline">Contact</a>
//             </nav>

//             <button
//               onClick={scrollToTop}
//               className="bg-white dark:bg-gray-700 p-3 rounded-full hover:scale-110 transition-transform"
//               aria-label="Scroll to top"
//             >
//               <ArrowUp className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()} Adebolu Babatunde. All rights reserved.
//           </p>
//           <div className="mt-4 md:mt-0 flex space-x-6">
//             <a href="#" className="text-sm hover-underline">Privacy Policy</a>
//             <a href="#" className="text-sm hover-underline">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { ArrowUp, Heart } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold tracking-tight group">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Adebolu</span>
              <span className="text-gray-800 dark:text-gray-200"> Babatunde</span>
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Crafting digital experiences with precision, purpose, and passion. 
              Let's build something amazing together.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <nav className="flex flex-wrap justify-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            <button
              onClick={scrollToTop}
              className="group bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-600 dark:text-gray-400">
                © {year} Adebolu Babatunde. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Made with <Heart className="inline h-4 w-4 text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="/privacy" 
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="/cookies" 
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}