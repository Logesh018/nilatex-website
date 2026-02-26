/**
 * ContactUs.jsx
 *
 * Contact section for Nilatex Garments website.
 * Left: Two stacked Google Maps inside dark navy card. Right: Enquiry form (white).
 */

const locations = [
  {
    label: "Mfg Unit & Mkt",
    name: "Karamadai, Coimbatore",
    address: "31/4, Gandhi Nagar, Karamadai, Mettupalayam, Coimbatore, Tamil Nadu – 641104",
    mapQuery:
      "31/4+Gandhi+Nagar+Karamadai+Mettupalayam+Coimbatore+Tamil+Nadu+641104+India",
  },
  {
    label: "Sales & Mktg",
    name: "Sriperumbuthur, Kanchipuram",
    address: "781/A, Kirubhai Tower, S.V. Chathiram, Sriperumbuthur, Kanchipuram, Tamil Nadu – 602106",
    mapQuery:
      "781/A+Kirubhai+Tower+SV+Chathiram+Sriperumbuthur+Kanchipuram+Tamil+Nadu+602106+India",
  },
];

const ContactUs = () => {
  return (
    <section id="contact" className="relative w-full py-20 overflow-hidden bg-[#fcfdfe]">
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute -top-20 right-0 w-105 h-105 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,143,207,0.07) 0%, transparent 70%)", transform: "translateX(30%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-90 h-90 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(10,85,160,0.06) 0%, transparent 70%)", transform: "translateX(-30%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Heading ── */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="block h-0.5 w-10 rounded-sm bg-linear-to-r from-transparent to-[#38bdf8]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d8fcf]">Get In Touch</span>
            <span className="block h-0.5 w-10 rounded-sm bg-linear-to-l from-transparent to-[#38bdf8]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#02123a]">
            Contact <span className="text-[#1d8fcf]">Us</span>
          </h2>
          <p className="mt-4 text-[#5a7090] max-w-xl mx-auto leading-relaxed text-base">
            Have a bulk order, a custom project, or just want to know more? Reach out to us — we
            typically respond within one business day.
          </p>
        </div>

        {/* ── Main Layout: Maps + Form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* Left — Dark navy card wrapping two stacked maps */}
          <div
            className="rounded-3xl overflow-hidden flex flex-col"
            style={{
              border: "1px solid rgba(77,166,255,0.18)",
              boxShadow: "0 8px 40px rgba(2,18,58,0.18), 0 0 0 1px rgba(77,166,255,0.06) inset",
              background: "linear-gradient(135deg, #02123a 0%, #063476 100%)",
            }}
          >
            {/* Card header — matches old contact info card top strip */}
            <div
              className="px-8 pt-7 pb-1 shrink-0"
              // style={{ borderBottom: "1px solid rgba(77,166,255,0.12)" }}
            >
              <h3 className="text-xl font-bold text-white text-center mb-1">Our Locations</h3>
              <p className="text-[#4da6ff] text-sm opacity-80 text-center">Visit us at our manufacturing &amp; sales offices</p>
            </div>

            {/* Two maps stacked, each in its own mini card */}
            <div className="flex flex-col flex-1 px-6 py-5 gap-5">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col rounded-2xl overflow-hidden min-h-0"
                  style={{
                    border: "1px solid rgba(77,166,255,0.18)",
                    boxShadow: "0 2px 16px rgba(2,18,58,0.4)",
                  }}
                >
                  {/* Map iframe — fills all available height */}
                  <div className="relative flex-1 min-h-40">
                    <iframe
                      title={loc.name}
                      src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
                      width="100%"
                      height="100%"
                      className="absolute inset-0 w-full h-full"
                      style={{
                        border: "none",
                        display: "block",
                        filter: "brightness(0.88) saturate(1.1) contrast(1.05)",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Location label strip */}
                  <div
                    className="px-5 py-3 flex items-center gap-3 shrink-0"
                    style={{
                      background: "rgba(2,18,58,0.75)",
                      borderTop: "1px solid rgba(77,166,255,0.15)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="#4da6ff"
                      />
                    </svg>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[#4da6ff] text-[10px] font-bold uppercase tracking-[0.18em]">
                        {loc.label}
                      </span>
                      <span className="text-white text-xs font-semibold opacity-80 mt-0.5">
                        {loc.name}
                      </span>
                    </div>
                    <a
                      href={`https://www.google.com/maps?q=${loc.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-[10px] font-semibold text-[#4da6ff] hover:text-white transition-colors duration-200 uppercase tracking-widest whitespace-nowrap"
                    >
                      Open Maps ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Enquiry Form (white) */}
          <div
            className="rounded-3xl p-8 sm:p-10 h-full"
            style={{
              border: "1px solid rgba(29,143,207,0.15)",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 4px 24px rgba(10,60,130,0.08)",
            }}
          >
            <h3 className="text-xl font-bold text-[#02123a] mb-1 text-center">Send an Enquiry</h3>
            <p className="text-[#5a7090] text-sm mb-7 text-center">Fill in the details below and our team will get back to you shortly.</p>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#02123a] text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl px-4 py-3 text-sm text-[#02123a] outline-none transition-all duration-200 placeholder:text-[#aabcce]"
                    style={{ border: "1px solid rgba(29,143,207,0.2)", background: "#f8faff" }}
                    onFocus={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.55)"; e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)"; }}
                    onBlur={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.2)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label className="block text-[#02123a] text-xs font-bold uppercase tracking-widest mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl px-4 py-3 text-sm text-[#02123a] outline-none transition-all duration-200 placeholder:text-[#aabcce]"
                    style={{ border: "1px solid rgba(29,143,207,0.2)", background: "#f8faff" }}
                    onFocus={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.55)"; e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)"; }}
                    onBlur={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.2)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#02123a] text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl px-4 py-3 text-sm text-[#02123a] outline-none transition-all duration-200 placeholder:text-[#aabcce]"
                  style={{ border: "1px solid rgba(29,143,207,0.2)", background: "#f8faff" }}
                  onFocus={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.55)"; e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)"; }}
                  onBlur={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.2)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <div>
                <label className="block text-[#02123a] text-xs font-bold uppercase tracking-widest mb-2">Product / Requirement</label>
                <input
                  type="text"
                  placeholder="e.g. 500 Polo T-Shirts with logo embroidery"
                  className="w-full rounded-xl px-4 py-3 text-sm text-[#02123a] outline-none transition-all duration-200 placeholder:text-[#aabcce]"
                  style={{ border: "1px solid rgba(29,143,207,0.2)", background: "#f8faff" }}
                  onFocus={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.55)"; e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)"; }}
                  onBlur={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.2)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <div>
                <label className="block text-[#02123a] text-xs font-bold uppercase tracking-widest mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements, quantities, customisation needs..."
                  className="w-full rounded-xl px-4 py-3 text-sm text-[#02123a] outline-none resize-none transition-all duration-200 placeholder:text-[#aabcce]"
                  style={{ border: "1px solid rgba(29,143,207,0.2)", background: "#f8faff" }}
                  onFocus={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.55)"; e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)"; }}
                  onBlur={(e) => { e.target.style.border = "1px solid rgba(29,143,207,0.2)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl py-3.5 text-sm font-bold text-white uppercase tracking-widest transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #1d8fcf 0%, #063476 100%)", boxShadow: "0 4px 20px rgba(29,143,207,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(29,143,207,0.45)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(29,143,207,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Send Enquiry →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;