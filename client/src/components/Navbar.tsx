import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Selected work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const update = () => {
      let active = "";
      document.querySelectorAll<HTMLElement>("section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150 && window.scrollY < section.offsetTop + section.offsetHeight - 150) active = section.id;
      });
      setActiveSection(active);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return <header className="site-header">
    <div className="page-wrap header-inner">
      <a href="#home" className="wordmark" onClick={() => setIsOpen(false)} aria-label="Adebolu Babatunde, home"><span className="wordmark-monogram">AB</span><span>Adebolu Babatunde<small>Software engineer</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navLinks.map((link) => <a key={link.href} className={activeSection === link.href.slice(1) ? "active" : ""} href={link.href}>{link.name}</a>)}</nav>
      <a className="header-availability" href="#contact"><span />Available for work</a>
      <button className="mobile-menu-toggle" type="button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
    <div id="mobile-navigation" className={`mobile-navigation ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
      <nav className="page-wrap" aria-label="Mobile navigation">{navLinks.map((link) => <a key={link.href} href={link.href} tabIndex={isOpen ? 0 : -1} onClick={() => setIsOpen(false)}>{link.name}</a>)}</nav>
    </div>
  </header>;
}
