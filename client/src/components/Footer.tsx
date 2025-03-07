
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-display font-medium tracking-tight">
            <span className="font-bold">Adebolu</span> Babatunde
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Crafting digital experiences with precision and purpose.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <nav className="flex space-x-6 mb-6 md:mb-0">
              <a href="#about" className="text-sm hover-underline">About</a>
              <a href="#skills" className="text-sm hover-underline">Skills</a>
              <a href="#projects" className="text-sm hover-underline">Projects</a>
              <a href="#contact" className="text-sm hover-underline">Contact</a>
            </nav>

            <button
              onClick={scrollToTop}
              className="bg-white dark:bg-gray-700 p-3 rounded-full hover:scale-110 transition-transform"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adebolu Babatunde. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm hover-underline">Privacy Policy</a>
            <a href="#" className="text-sm hover-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
