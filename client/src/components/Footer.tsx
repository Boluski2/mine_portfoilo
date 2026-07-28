// components/Footer.tsx
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Boluski2", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/adebolu-babatunde/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:babatundebolu@gmail.com", label: "Email", icon: Mail },
];

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-100 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-medium tracking-tight">
              <span className="text-gray-900">Adebolu</span>
              <span className="text-gray-500"> Babatunde</span>
            </a>
            <p className="mt-1 text-sm text-gray-400">
              Full-Stack Developer · Lagos, Nigeria
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-gray-900 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-gray-900 transition"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          <p>© {year} Adebolu Babatunde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}