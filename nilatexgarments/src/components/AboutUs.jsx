/**
 * AboutUs.jsx
 *
 * About section for Nilatex Garments website.
 * Light background, consistent with Products & Infrastructure sections.
 */

const STATS = [
  { value: "2022",    label: "Established"         },
  { value: "30K+",   label: "Pieces / Month"       },
  { value: "70+",    label: "Machines Installed"   },
  { value: "3,500",  label: "Sq.ft Floor Area"     },
];

const STRENGTHS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "100% Export Quality",
    desc: "Stringent QC norms at every stage ensure international standard garments every single time.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Timely Delivery",
    desc: "Efficient workflows and dedicated scheduling mean your orders always arrive on time.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Market Leading Prices",
    desc: "Factory-direct pricing with no middlemen — premium quality at the most competitive rates.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "In-House Customisation",
    desc: "Logo embroidery, DTF, vinyl and screen printing — all handled under one roof for your brand.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Skilled Workforce",
    desc: "A highly skilled team that believes in teamwork, precision, and continuous improvement.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Quick Order Processing",
    desc: "Streamlined processes from order confirmation to dispatch, minimising lead times significantly.",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="relative w-full py-20 overflow-hidden bg-[#f8faff]">
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,143,207,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -right-16 w-[360px] h-[360px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(10,85,160,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Heading ── */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#1d8fcf] rounded-sm" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d8fcf]">Who We Are</span>
            <span className="h-0.5 w-10 bg-[#1d8fcf] rounded-sm" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#02123a]">
            About <span className="text-[#1d8fcf]">Nilatex Garments</span>
          </h2>
          <p className="mt-4 text-[#5a7090] max-w-2xl mx-auto leading-relaxed text-base">
            A renowned name in garment manufacturing — crafting stylish, durable, and comfortable
            garments with a passion for quality and a commitment to your brand's success.
          </p>
        </div>

        {/* ── Two Column: Story + Stats ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">

          {/* Story */}
          <div
            className="rounded-3xl p-8 sm:p-10"
            style={{
              background: "linear-gradient(135deg, #02123a 0%, #063476 100%)",
              border: "1px solid rgba(77,166,255,0.15)",
              boxShadow: "0 8px 40px rgba(2,18,58,0.13)",
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-5">Our Story</h3>
            <p className="text-[#93d0ff] leading-relaxed mb-5 opacity-90">
              Founded in <strong className="text-white">2022</strong>, Nilatex Garments has quickly
              established itself as a trusted garment manufacturer and supplier based in Tamil Nadu,
              India. What began as a focused vision to deliver high-quality garments has grown into
              a full-scale manufacturing operation serving schools, corporates, institutions, and
              brands across the country.
            </p>
            <p className="text-[#93d0ff] leading-relaxed opacity-90">
              We operate a <strong className="text-white">3,500 sq.ft state-of-the-art facility</strong> housing
              70+ industrial machines, capable of producing over <strong className="text-white">30,000 pieces per month</strong>.
              From precision cutting and expert stitching to in-house printing and embroidery — every
              garment that leaves our floor is a reflection of our relentless pursuit of quality.
            </p>

            {/* Vision & Mission pills */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-4"
                style={{ background: "rgba(77,166,255,0.08)", border: "1px solid rgba(77,166,255,0.15)" }}
              >
                <p className="text-[#4da6ff] text-xs font-bold uppercase tracking-widest mb-2">Our Vision</p>
                <p className="text-[#93d0ff] text-sm leading-relaxed opacity-85">
                  To be the global leader in fashion, inspiring confidence through innovative and
                  sustainable garment solutions.
                </p>
              </div>
              <div
                className="rounded-2xl p-4"
                style={{ background: "rgba(77,166,255,0.08)", border: "1px solid rgba(77,166,255,0.15)" }}
              >
                <p className="text-[#4da6ff] text-xs font-bold uppercase tracking-widest mb-2">Our Mission</p>
                <p className="text-[#93d0ff] text-sm leading-relaxed opacity-85">
                  To create high-quality garments through creativity, craftsmanship, and sustainable
                  practices — delivering exceptional value to every client.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl p-7 flex flex-col items-center justify-center text-center"
                style={{
                  border: "1px solid rgba(29,143,207,0.18)",
                  background: "rgba(255,255,255,0.9)",
                  boxShadow: "0 4px 20px rgba(10,60,130,0.07)",
                }}
              >
                <span className="text-4xl font-black text-[#02123a] mb-2">{stat.value}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1d8fcf]">{stat.label}</span>
              </div>
            ))}

            {/* NSDC certified badge */}
            <div
              className="col-span-2 rounded-3xl px-7 py-5 flex items-center gap-4"
              style={{
                border: "1px solid rgba(29,143,207,0.18)",
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 4px 20px rgba(10,60,130,0.07)",
              }}
            >
              <div
                className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-[#1d8fcf]"
                style={{ background: "rgba(29,143,207,0.1)", border: "1px solid rgba(29,143,207,0.2)" }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div>
                <p className="text-[#02123a] font-bold text-sm">NSDC & Skill India Certified</p>
                <p className="text-[#5a7090] text-xs mt-0.5">Recognised by Ministry of Skill Development &amp; Entrepreneurship, Govt. of India</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Strengths Grid ── */}
        <div>
          <div className="mb-8 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-[#02123a]">
              Why Choose <span className="text-[#1d8fcf]">Us</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STRENGTHS.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl p-6 transition-all duration-300 cursor-default"
                style={{
                  border: "1px solid rgba(29,143,207,0.14)",
                  background: "rgba(255,255,255,0.9)",
                  boxShadow: "0 2px 12px rgba(10,60,130,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(29,143,207,0.13)";
                  e.currentTarget.style.border = "1px solid rgba(29,143,207,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(10,60,130,0.06)";
                  e.currentTarget.style.border = "1px solid rgba(29,143,207,0.14)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#1d8fcf] mb-4"
                  style={{ background: "rgba(29,143,207,0.08)", border: "1px solid rgba(29,143,207,0.15)" }}
                >
                  {s.icon}
                </div>
                <h4 className="text-[#02123a] font-bold text-sm mb-2">{s.title}</h4>
                <p className="text-[#5a7090] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;