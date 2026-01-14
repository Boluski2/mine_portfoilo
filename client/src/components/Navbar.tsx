
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// interface NavLink {
//   name: string;
//   href: string;
// }

// const navLinks: NavLink[] = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll and set active section
//   useEffect(() => {
//     const handleScroll = () => {
//       // Set navbar background when scrolled
//       setScrolled(window.scrollY > 50);

//       // Find active section
//       const sections = document.querySelectorAll("section[id]");
//       const scrollPosition = window.scrollY + 72; // Offset for navbar

//       sections.forEach((section) => {
//         const sectionTop = (section as HTMLElement).offsetTop;
//         const sectionHeight = (section as HTMLElement).offsetHeight;
//         const sectionId = section.getAttribute("id") || "";

//         if (
//           scrollPosition >= sectionTop &&
//           scrollPosition < sectionTop + sectionHeight
//         ) {
//           setActiveSection(sectionId);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when clicking a link
//   const handleNavLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header
//       className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-300",
//         scrolled
//           ? "bg-white/80 backdrop-blur-md border-b shadow-sm dark:bg-gray-900/80"
//           : "bg-transparent"
//       )}
//     >
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         <a
//           href="#home"
//           className="text-xl font-display font-medium tracking-tight"
//         >
//           <span className="font-bold">Adebolu</span> Babatunde
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className={cn(
//                 "nav-link text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
//                 activeSection === link.href.substring(1)
//                   ? "text-black dark:text-white"
//                   : "text-gray-600 dark:text-gray-400"
//               )}
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>

//         {/* Mobile Navigation Toggle */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//           <span className="sr-only">Toggle menu</span>
//         </Button>

//         {/* Mobile Menu */}
//         <div
//           className={cn(
//             "fixed inset-0 top-[56px] z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm md:hidden transform transition-transform duration-300 ease-in-out",
//             isOpen ? "translate-x-0" : "translate-x-full"
//           )}
//         >
//           <nav className="flex flex-col h-full p-8 space-y-6 text-center">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={cn(
//                   "text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-800",
//                   activeSection === link.href.substring(1)
//                     ? "text-black dark:text-white"
//                     : "text-gray-600 dark:text-gray-400"
//                 )}
//                 onClick={handleNavLinkClick}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }



import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 72;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b shadow-lg dark:bg-gray-900/90 dark:border-gray-800"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-display font-medium tracking-tight group"
        >
          <span className="font-bold text-primary group-hover:text-primary/80 transition-colors">Adebolu</span>
          <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"> Babatunde</span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "nav-link text-sm font-medium transition-all relative py-1",
                  activeSection === link.href.substring(1)
                    ? "text-primary dark:text-primary font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </a>
            ))}
          </nav>
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform hover:shadow-md"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <Button className="rounded-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        <div
          className={cn(
            "fixed inset-0 top-[72px] z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg md:hidden transform transition-all duration-300 ease-in-out",
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          )}
        >
          <nav className="flex flex-col h-full p-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all",
                  activeSection === link.href.substring(1)
                    ? "bg-primary/10 text-primary dark:text-primary"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
                onClick={handleNavLinkClick}
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-4 w-full bg-primary hover:bg-primary/90">
              <a href="#contact" className="w-full text-center">Get In Touch</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}