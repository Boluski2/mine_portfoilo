
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Boluski2",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/adebolu-babatunde/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:babatundebolu@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          {/* Identity */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-blue-400/30 bg-blue-500/10 text-sm font-bold text-blue-400">
                AB
              </span>

              <span className="text-lg font-semibold tracking-tight">
                Adebolu Babatunde
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Full-Stack Developer & Geospatial Engineer building
              digital products, web applications, and spatial solutions.
            </p>

            <p className="mt-3 text-xs font-medium tracking-wide text-slate-500">
              Lagos, Nigeria · Open to full-time opportunities
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Explore
            </h3>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-6 border-t border-slate-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} Adebolu Babatunde. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="mr-1 text-xs text-slate-500">
              Connect
            </span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  title={social.label}
                  className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Icon size={17} />
                </a>
              );
            })}

            <a
              href="#home"
              className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-blue-400 transition hover:text-blue-300"
            >
              Back to top
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
