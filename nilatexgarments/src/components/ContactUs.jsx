/**
 * ContactUs.jsx
 *
 * Contact section for Nilatex Garments website.
 * Light background, consistent with Products & Infrastructure sections.
 */

const CONTACT_ITEMS = [
  {
    id: 1,
    label: "Call Us",
    lines: ["+91 63836 61910", "+91 94873 68421"],
    href: ["tel:+916383661910", "tel:+919487368421"],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Mail Us",
    lines: ["marketing@nilatex.in"],
    href: ["mailto:marketing@nilatex.in"],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Visit Our Website",
    lines: ["www.nilatex.in"],
    href: ["https://www.nilatex.in"],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Our Location",
    lines: ["31/4, Gandhi Nagar, Karamadai,", "Mettupalayam, Coimbatore,", "Tamil Nadu – 641104"],
    href: [null],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Working Hours",
    lines: ["Monday – Friday", "09:00 AM – 06:00 PM"],
    href: [null],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const ContactUs = () => {
  return (
    <section id="contact" className="relative w-full py-20 overflow-hidden bg-[#fcfdfe]">
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute -top-20 right-0 w-[420px] h-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,143,207,0.07) 0%, transparent 70%)", transform: "translateX(30%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(10,85,160,0.06) 0%, transparent 70%)", transform: "translateX(-30%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Heading ── */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#1d8fcf] rounded-sm" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d8fcf]">Get In Touch</span>
            <span className="h-0.5 w-10 bg-[#1d8fcf] rounded-sm" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#02123a]">
            Contact <span className="text-[#1d8fcf]">Us</span>
          </h2>
          <p className="mt-4 text-[#5a7090] max-w-xl mx-auto leading-relaxed text-base">
            Have a bulk order, a custom project, or just want to know more? Reach out to us — we
            typically respond within one business day.
          </p>
        </div>

        {/* ── Main Layout: Contact Info + Form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — Contact Info Card */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(29,143,207,0.18)",
              boxShadow: "0 8px 40px rgba(2,18,58,0.12)",
              background: "linear-gradient(135deg, #02123a 0%, #063476 100%)",
            }}
          >
            {/* Top strip */}
            <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid rgba(77,166,255,0.12)" }}>
              <h3 className="text-xl font-bold text-white mb-1">Nilatex Garments</h3>
              <p className="text-[#4da6ff] text-sm opacity-80">Garments Manufacturer &amp; Supplier</p>
            </div>

            {/* Contact items */}
            <div className="px-8 py-6 flex flex-col gap-6">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#4da6ff]"
                    style={{ background: "rgba(77,166,255,0.1)", border: "1px solid rgba(77,166,255,0.2)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#4da6ff] text-xs font-semibold uppercase tracking-widest mb-1">{item.label}</p>
                    {item.lines.map((line, i) =>
                      item.href[i] ? (
                        <a
                          key={i}
                          href={item.href[i]}
                          className="block text-[#93d0ff] text-sm hover:text-white transition-colors duration-200"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-[#93d0ff] text-sm opacity-85">{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Inquiry Form */}
          <div
            className="rounded-3xl p-8 sm:p-10"
            style={{
              border: "1px solid rgba(29,143,207,0.15)",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 4px 24px rgba(10,60,130,0.08)",
            }}
          >
            <h3 className="text-xl font-bold text-[#02123a] mb-1">Send an Enquiry</h3>
            <p className="text-[#5a7090] text-sm mb-7">Fill in the details below and our team will get back to you shortly.</p>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#02123a] text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl px-4 py-3 text-sm text-[#02123a] outline-none transition-all duration-200 placeholder:text-[#aabcce]"
                    style={{
                      border: "1px solid rgba(29,143,207,0.2)",
                      background: "#f8faff",
                    }}
                    onFocus={(e) => {
                      e.target.style.border = "1px solid rgba(29,143,207,0.55)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1px solid rgba(29,143,207,0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label className="block text-[#02123a] text-xs font-bold uppercase tracking-widest mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl px-4 py-3 text-sm text-[#02123a] outline-none transition-all duration-200 placeholder:text-[#aabcce]"
                    style={{ border: "1px solid rgba(29,143,207,0.2)", background: "#f8faff" }}
                    onFocus={(e) => {
                      e.target.style.border = "1px solid rgba(29,143,207,0.55)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1px solid rgba(29,143,207,0.2)";
                      e.target.style.boxShadow = "none";
                    }}
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
                  onFocus={(e) => {
                    e.target.style.border = "1px solid rgba(29,143,207,0.55)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid rgba(29,143,207,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label className="block text-[#02123a] text-xs font-bold uppercase tracking-widest mb-2">Product / Requirement</label>
                <input
                  type="text"
                  placeholder="e.g. 500 Polo T-Shirts with logo embroidery"
                  className="w-full rounded-xl px-4 py-3 text-sm text-[#02123a] outline-none transition-all duration-200 placeholder:text-[#aabcce]"
                  style={{ border: "1px solid rgba(29,143,207,0.2)", background: "#f8faff" }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid rgba(29,143,207,0.55)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid rgba(29,143,207,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label className="block text-[#02123a] text-xs font-bold uppercase tracking-widest mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements, quantities, customisation needs..."
                  className="w-full rounded-xl px-4 py-3 text-sm text-[#02123a] outline-none resize-none transition-all duration-200 placeholder:text-[#aabcce]"
                  style={{ border: "1px solid rgba(29,143,207,0.2)", background: "#f8faff" }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid rgba(29,143,207,0.55)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(29,143,207,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid rgba(29,143,207,0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl py-3.5 text-sm font-bold text-white uppercase tracking-widest transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #1d8fcf 0%, #063476 100%)",
                  boxShadow: "0 4px 20px rgba(29,143,207,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = "0 8px 28px rgba(29,143,207,0.45)";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = "0 4px 20px rgba(29,143,207,0.3)";
                  e.target.style.transform = "translateY(0)";
                }}
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