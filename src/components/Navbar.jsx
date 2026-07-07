import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Research", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActive(id);

    const section = document.getElementById(id);

    if (section) {
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        70;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050816]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "home")}
          className="flex items-center gap-3"
        >
          <svg width="34" height="34" viewBox="0 0 100 100">
            <polygon
              points="50,3 95,25 95,75 50,97 5,75 5,25"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="3"
            />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fill="#22D3EE"
              fontSize="26"
              fontWeight="700"
            >
              AD
            </text>
          </svg>

          <span className="text-white font-semibold tracking-wide text-sm">
            AYUSH DHOTE
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const id = link.toLowerCase();

            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`uppercase text-sm tracking-wider transition-all duration-300 ${
                  active === id
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>

        {/* Desktop Button */}
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "contact")}
          className="hidden md:flex items-center gap-2 rounded-full border border-cyan-400/40 px-5 py-2 text-xs uppercase tracking-wider text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors"
        >
          Let's Connect →
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#050816]/95 border-t border-white/10 flex flex-col px-8 py-5 gap-5">
          {links.map((link) => {
            const id = link.toLowerCase();

            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`uppercase tracking-wider transition ${
                  active === id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className="mt-2 flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 px-5 py-2 text-xs uppercase tracking-wider text-cyan-400"
          >
            Let's Connect →
          </a>
        </div>
      )}
    </nav>
  );
}