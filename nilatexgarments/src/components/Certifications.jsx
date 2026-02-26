/**
 * Certifications.jsx
 *
 * Displays company certifications in a premium corporate style.
 * Section background matches Products & Infrastructure (light theme).
 * Dark navy card interior stays consistent with Map.jsx card style.
 *
 * HOW TO UPDATE:
 * - Add/remove entries in the `certificationBodies` array below.
 * - Swap image imports with your actual asset paths.
 */

import nilatexLogo from "../assets/nilatex_logo.png";
import certificateImg from "../assets/certificates_nila.jpeg";

// ─── EDIT THIS ARRAY TO ADD / REMOVE CERTIFICATION BODIES ────────────────────
const certificationBodies = [
  {
    id: 1,
    name: "Government of India – Ministry of Skill Development & Entrepreneurship",
    logo: null,
  },
  {
    id: 2,
    name: "NSDC – National Skill Development Corporation",
    logo: null,
  },
  {
    id: 3,
    name: "Skill India",
    logo: null,
  },
];

const Certifications = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#f8faff]">
      {/* Subtle blobs — same style as Products section */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-105 h-105 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(29,143,207,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-16 w-85 h-85 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(10,85,160,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Heading — identical pattern to Products & Infrastructure ── */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="block h-0.5 w-10 rounded-sm bg-linear-to-r from-transparent to-[#38bdf8]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d8fcf]">
              Recognised &amp; Certified
            </span>
            <span className="block h-0.5 w-10 rounded-sm bg-linear-to-l from-transparent to-[#38bdf8]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#02123a]">
            Our <span className="text-[#1d8fcf]">Certifications</span>
          </h2>
          <p className="mt-4 text-[#5a7090] max-w-xl mx-auto leading-relaxed text-base">
            Nilatex Garments is officially recognised and certified by leading
            national skill development bodies, reflecting our commitment to
            quality and compliance.
          </p>
        </div>

        {/* ── Main Card — dark navy inside, consistent with Map.jsx card style ── */}
        <div
          className="rounded-3xl overflow-hidden mx-auto max-w-4xl"
          style={{
            border: "1px solid rgba(29,143,207,0.2)",
            boxShadow:
              "0 8px 40px rgba(2,18,58,0.13), 0 2px 12px rgba(10,60,130,0.08)",
            background: "linear-gradient(135deg, #02123a 0%, #063476 100%)",
          }}
        >
          {/* Top strip: Logo + Company name */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 px-8 py-10"
            style={{ borderBottom: "1px solid rgba(77,166,255,0.13)" }}
          >
            <img
              src={nilatexLogo}
              alt="Nilatex Garments Logo"
              className="w-20 h-20 object-contain drop-shadow-lg"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                NILATEXGARMENTS
              </h3>
              <p className="text-[#4da6ff] text-sm font-semibold tracking-[0.2em] uppercase mt-1 opacity-90">
                Garments Manufacturer &amp; Supplier
              </p>
            </div>
          </div>

          {/* Bottom strip: Certification banner image */}
          <div
            className="w-full px-6 py-8 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(to bottom, rgba(2,18,58,0.1), rgba(2,18,58,0.4))",
            }}
          >
            <img
              src={certificateImg}
              alt="Nilatex Certifications – Government of India, NSDC, Skill India"
              className="w-full max-w-2xl object-contain rounded-2xl"
              style={{ boxShadow: "0 4px 20px rgba(2,18,58,0.35)" }}
            />
          </div>
        </div>

        {/* Certification pill labels (auto-generated from array above) */}
        {certificationBodies.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {certificationBodies.map((cert) => (
              <span
                key={cert.id}
                className="text-[#5a7090] text-xs px-4 py-2 rounded-full"
                style={{
                  border: "1px solid rgba(29,143,207,0.2)",
                  background: "rgba(29,143,207,0.06)",
                }}
              >
                {cert.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;