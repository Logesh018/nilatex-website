/**
 * Footer.jsx
 *
 * Dark navy footer — uses bg-[#02123a] as agreed for the bottom of the site.
 * Styled after the Praana Textiles sample layout provided by the client.
 *
 * Navigation links match exactly what exists in App.jsx.
 * To add a new section link: add an entry to NAV_LINKS below.
 */

import nilatexLogo from "../assets/nilatex_logo.png";

// ─── NAV LINKS — matches App.jsx sections only ───────────────────────────────
const NAV_LINKS = [
  { label: "Home",           href: "#"              },
  { label: "About Us",       href: "#about"         },
  { label: "Products",       href: "#products"      },
  { label: "Infrastructure", href: "#infrastructure"},
  { label: "Locations",      href: "#map"           },
  { label: "Certifications", href: "#certifications"},
  { label: "Clients",        href: "#clients"       },
  { label: "Contact Us",     href: "#contact"       },
];
// ─────────────────────────────────────────────────────────────────────────────

// ─── QUICK LINKS — product categories ────────────────────────────────────────
const QUICK_LINKS = [
  { label: "Polo T-Shirts",          href: "#products" },
  { label: "Round Neck T-Shirts",    href: "#products" },
  { label: "Hoodies & Sweatshirts",  href: "#products" },
  { label: "Sports Jerseys",         href: "#products" },
  { label: "Corporate Uniforms",     href: "#products" },
  { label: "School Sports Uniforms", href: "#products" },
  { label: "Nurse & Scrubs",         href: "#products" },
];
// ─────────────────────────────────────────────────────────────────────────────

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const ChevronIcon = () => (
  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(160deg, #011030 0%, #02123a 50%, #041e5a 100%)" }}
    >
      {/* Top glow accent */}
      <div
        className="absolute top-0 left-1/2 w-[700px] h-[2px] pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent, rgba(29,143,207,0.6), transparent)",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 left-1/2 w-[600px] h-[200px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(29,143,207,0.06) 0%, transparent 70%)",
          transform: "translate(-50%, -60%)",
        }}
      />

      {/* ── Main footer content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="lg:col-span-1">
            {/* Logo + Name */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src={nilatexLogo}
                alt="Nilatex Garments"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-white font-extrabold text-base leading-tight">NILATEX</p>
                <p className="text-[#4da6ff] text-xs font-semibold tracking-wider">GARMENTS</p>
              </div>
            </div>

            <p className="text-[#93d0ff] text-sm leading-relaxed mb-6 opacity-80">
              Nilatex Garments | Garments Manufacturer &amp; Supplier — crafting quality apparel
              for schools, corporates, and institutions since 2022.
            </p>

            {/* Contact snippets */}
            <div className="flex flex-col gap-2 mb-6">
              <a href="tel:+916383661910" className="text-[#93d0ff] text-xs hover:text-white transition-colors duration-200 opacity-75 hover:opacity-100">
                📞 +91 63836 61910
              </a>
              <a href="tel:+919487368421" className="text-[#93d0ff] text-xs hover:text-white transition-colors duration-200 opacity-75 hover:opacity-100">
                📞 +91 94873 68421
              </a>
              <a href="mailto:marketing@nilatex.in" className="text-[#93d0ff] text-xs hover:text-white transition-colors duration-200 opacity-75 hover:opacity-100">
                ✉ marketing@nilatex.in
              </a>
              <a href="https://www.nilatex.in" target="_blank" rel="noreferrer" className="text-[#93d0ff] text-xs hover:text-white transition-colors duration-200 opacity-75 hover:opacity-100">
                🌐 www.nilatex.in
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#93d0ff] transition-all duration-200 hover:text-white"
                  style={{ border: "1px solid rgba(77,166,255,0.25)", background: "rgba(77,166,255,0.07)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(29,143,207,0.25)";
                    e.currentTarget.style.border = "1px solid rgba(77,166,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(77,166,255,0.07)";
                    e.currentTarget.style.border = "1px solid rgba(77,166,255,0.25)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Company / Navigation ── */}
          <div>
            <h4 className="text-white font-bold text-base mb-2">Company</h4>
            <div className="h-0.5 w-8 bg-[#1d8fcf] mb-5 rounded-sm" />
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-[#93d0ff] text-sm opacity-75 hover:opacity-100 hover:text-white transition-all duration-200 group"
                  >
                    <ChevronIcon />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Quick Links / Products ── */}
          <div>
            <h4 className="text-white font-bold text-base mb-2">Quick Links</h4>
            <div className="h-0.5 w-8 bg-[#1d8fcf] mb-5 rounded-sm" />
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-[#93d0ff] text-sm opacity-75 hover:opacity-100 hover:text-white transition-all duration-200"
                  >
                    <ChevronIcon />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <h4 className="text-white font-bold text-base mb-2">Contact Us</h4>
            <div className="h-0.5 w-8 bg-[#1d8fcf] mb-5 rounded-sm" />

            <div className="flex flex-col gap-5">
              {/* Mail */}
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[#4da6ff]"
                  style={{ background: "rgba(77,166,255,0.1)", border: "1px solid rgba(77,166,255,0.2)" }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#4da6ff] text-[10px] font-semibold uppercase tracking-widest mb-0.5">Mail Us</p>
                  <a href="mailto:marketing@nilatex.in" className="text-[#93d0ff] text-xs hover:text-white transition-colors opacity-80">
                    marketing@nilatex.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[#4da6ff]"
                  style={{ background: "rgba(77,166,255,0.1)", border: "1px solid rgba(77,166,255,0.2)" }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#4da6ff] text-[10px] font-semibold uppercase tracking-widest mb-0.5">Visit Us</p>
                  <p className="text-[#93d0ff] text-xs leading-relaxed opacity-80">
                    31/4, Gandhi Nagar, Karamadai,<br />
                    Mettupalayam, Coimbatore,<br />
                    Tamil Nadu – 641104
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[#4da6ff]"
                  style={{ background: "rgba(77,166,255,0.1)", border: "1px solid rgba(77,166,255,0.2)" }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#4da6ff] text-[10px] font-semibold uppercase tracking-widest mb-0.5">Call Us</p>
                  <a href="tel:+916383661910" className="block text-[#93d0ff] text-xs hover:text-white transition-colors opacity-80">+91 63836 61910</a>
                  <a href="tel:+919487368421" className="block text-[#93d0ff] text-xs hover:text-white transition-colors opacity-80">+91 94873 68421</a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[#4da6ff]"
                  style={{ background: "rgba(77,166,255,0.1)", border: "1px solid rgba(77,166,255,0.2)" }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#4da6ff] text-[10px] font-semibold uppercase tracking-widest mb-0.5">Working Hours</p>
                  <p className="text-[#93d0ff] text-xs opacity-80">Monday – Friday</p>
                  <p className="text-[#93d0ff] text-xs opacity-80">09:00 AM – 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="my-10"
          style={{ borderTop: "1px solid rgba(77,166,255,0.12)" }}
        />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#93d0ff] text-xs opacity-60 text-center sm:text-left">
            © {currentYear} Nilatex Garments. All Rights Reserved.
          </p>
          <p className="text-[#93d0ff] text-xs opacity-50 text-center sm:text-right">
            Garments Manufacturer &amp; Supplier, Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;