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
          ? "bg-white/95 backdrop-blur-md border-b shadow-lg dark:bg-gray-900/95 dark:border-gray-800"
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
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform hover:shadow-md"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 top-0 z-40 w-full h-screen bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Content */}
        <div
          className={cn(
            "fixed top-0 right-0 h-screen w-[300px] max-w-full z-50 bg-white dark:bg-gray-900 shadow-2xl md:hidden transform transition-all duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={24} />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "block py-3 px-4 rounded-lg text-lg font-medium transition-all",
                      activeSection === link.href.substring(1)
                        ? "bg-primary/10 text-primary dark:text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                    onClick={handleNavLinkClick}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA Button */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 py-6 text-base"
                onClick={() => {
                  setIsOpen(false);
                  // Smooth scroll to contact section
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </Button>
              
              {/* Theme Toggle in Mobile Menu */}
              <div className="mt-6 flex items-center justify-center">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <>
                      <Sun className="h-5 w-5" />
                      <span className="font-medium">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5" />
                      <span className="font-medium">Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}