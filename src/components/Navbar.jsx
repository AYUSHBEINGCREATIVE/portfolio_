export default function Navbar() {
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Research",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050816]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
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
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-10">
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm uppercase tracking-wider transition-colors ${
                i === 0
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}