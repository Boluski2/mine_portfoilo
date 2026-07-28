// components/Navbar.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 100;
        const height = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="text-lg font-medium tracking-tight">
          <span className="text-gray-900">Adebolu</span>
          <span className="text-gray-500"> Babatunde</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-1 transition-colors ${
                activeSection === link.href.substring(1)
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gray-900 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4 text-base">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`py-2 border-b border-gray-50 transition-colors ${
                activeSection === link.href.substring(1)
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}