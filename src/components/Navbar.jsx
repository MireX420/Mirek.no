import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#labs", label: "Labs" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__prompt">~/</span>mirek.no
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="nav-links" className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span className="nav__index">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
