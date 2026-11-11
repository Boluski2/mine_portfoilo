import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Boluski2", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adebolu-babatunde/", icon: Linkedin },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="page-wrap hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />Software engineer · Lagos, Nigeria</p>
          <h1>I build useful software for <em>real-world problems.</em></h1>
          <p className="hero-intro">I’m Adebolu Babatunde, a full-stack developer and geospatial engineer. I bring thoughtful interfaces, dependable systems, and spatial data together to make complex work easier.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-dark">Selected work <ArrowDownRight size={17} /></a>
            <a href="#contact" className="text-link">Get in touch <ArrowUpRight size={15} /></a>
            <a href="/AdeboluBabatunde.pdf" download="Adebolu-Babatunde-CV.pdf" className="text-link">Download CV</a>
          </div>
          <div className="hero-meta">
            <div className="availability"><span />Open to full-time opportunities</div>
            <div className="hero-socials">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={17} /></a>)}</div>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <img className="hero-portrait" src="/Bolex.jpg" alt="Adebolu Babatunde" fetchPriority="high" />
          <div className="portrait-caption"><MapPin size={15} /><span>Lagos, Nigeria</span><span className="caption-rule" />Full-stack · Geospatial</div>
          <span className="portrait-index">01 / 06</span>
        </div>
      </div>
      <div className="hero-bottom page-wrap"><span>Independent developer, collaborative by nature.</span><a href="#about">A little about me <ArrowDownRight size={15} /></a></div>
    </section>
  );
}
