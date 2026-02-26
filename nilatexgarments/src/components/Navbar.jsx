import { useState, useEffect, useRef } from "react";
import logo from "../assets/nila_logo_upscaled.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
  { label: "Broucher", href: "#broucher" },
  { label: "Certificates", href: "#certifications" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const equalizeWidths = () => {
      if (!titleRef.current || !subtitleRef.current) return;

      // Reset any previous transform so we measure natural width
      subtitleRef.current.style.transform = "none";
      subtitleRef.current.style.letterSpacing = "0.2em";

      const titleW = titleRef.current.getBoundingClientRect().width;
      const subtitleW = subtitleRef.current.getBoundingClientRect().width;

      if (subtitleW === 0) return;

      const scale = titleW / subtitleW;
      subtitleRef.current.style.transform = `scaleX(${scale})`;
      subtitleRef.current.style.transformOrigin = "left center";
    };

    // Run after fonts are likely loaded
    equalizeWidths();
    document.fonts.ready.then(equalizeWidths);
    window.addEventListener("resize", equalizeWidths);
    return () => window.removeEventListener("resize", equalizeWidths);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#02123a]/98 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md py-2"
          : "bg-[#02123a] py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-11 h-11">
            <img
              src={logo}
              alt="Nila Texgarments Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(30,144,255,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(30,144,255,0.8)] transition-all duration-300 rounded-4xl"
            />
          </div>

          {/* overflow-hidden prevents subtitle from bleeding during scaleX */}
          <div className="flex flex-col leading-tight overflow-hidden">
            <span
              ref={titleRef}
              className="text-white font-black uppercase whitespace-nowrap"
              style={{
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.17em",
                fontSize: "clamp(18px, 1.1vw, 18px)",
              }}
            >
              Nila Texgarments
            </span>
            <span
              ref={subtitleRef}
              className="text-[#4da6ff] font-semibold uppercase whitespace-nowrap inline-block mt-0.5"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(9px, 0.7vw, 11px)",
                letterSpacing: "0.20em",
              }}
            >
              Garments Manufacturer &amp; Supplier
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative px-2 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 group
                  ${active === link.label ? "text-[#4da6ff]" : "text-gray-300 hover:text-white"}`}
                style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "0.05em" }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#4da6ff] rounded-full transition-all duration-300
                    ${active === link.label ? "w-4/5" : "w-0 group-hover:w-4/5"}`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.25 p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 translate-y-1.75" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-4 pt-2 gap-1 border-t border-white/10 mt-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => { setActive(link.label); setMenuOpen(false); }}
                className={`block py-2.5 text-sm font-semibold tracking-widest uppercase transition-colors ${
                  active === link.label ? "text-[#4da6ff]" : "text-gray-300 hover:text-white"
                }`}
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}