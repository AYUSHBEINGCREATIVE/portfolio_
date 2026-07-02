import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Research", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
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
            AYUSH OS
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;

            return (
              <a
                key={link}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>

        {/* Mobile Button */}
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
        <div className="md:hidden flex flex-col bg-[#050816]/95 border-t border-white/5 px-8 py-4 gap-4">
          {links.map((link) => {
            const id = link.toLowerCase();

            return (
              <a
                key={link}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="text-sm uppercase tracking-wider text-gray-300 hover:text-cyan-400"
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}