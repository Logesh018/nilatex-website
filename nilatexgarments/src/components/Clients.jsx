import client1 from "../assets/clients/nila-client1.png"
import client2 from "../assets/clients/nila-client2.png"
import client3 from "../assets/clients/nila-client3.jpg"
import client4 from "../assets/clients/nila-client4.png"
import client5 from "../assets/clients/nila-client5.webp"
import client6 from "../assets/clients/nila-client6.jpg"

/**
 * Clients.jsx
 *
 * Displays trusted client logos in an infinite horizontal scrolling marquee.
 * Section background matches Products & Infrastructure (light theme).
 * No external libraries — pure CSS keyframe animation.
 *
 * HOW TO UPDATE:
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. Import your logo at the top:
 *      import newClient from "../assets/clients/new_client.png";
 *
 * 2. Add to the `clients` array:
 *      { id: 11, name: "New Client", logo: newClient }
 *
 * The marquee automatically adapts — no other changes needed.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Replace placeholder path strings below with actual imported variables once
 * you have the logo files in /src/assets/clients/.
 *
 * Example:
 *   import prakasam from "../assets/clients/prakasam.png";
 *   ...
 *   { id: 1, name: "Prakasam", logo: prakasam }
 */

// ─── IMPORT CLIENT LOGOS HERE ─────────────────────────────────────────────────
// import prakasam      from "../assets/clients/prakasam.png";
// import marudhham     from "../assets/clients/marudhham.png";
// import prestige      from "../assets/clients/prestige.png";
// import aesthetix     from "../assets/clients/aesthetix.png";
// import sangeetha     from "../assets/clients/sangeetha.png";
// import skilledAnswers from "../assets/clients/skilled_answers.png";
// ─────────────────────────────────────────────────────────────────────────────

// ─── EDIT THIS ARRAY TO ADD / REMOVE CLIENTS ─────────────────────────────────
const clients = [
  { id: 1, name: "Prakasam", logo: client1 },
  { id: 2, name: "Marudhham School", logo: client2 },
  { id: 3, name: "Prestige", logo: client3 },
  { id: 4, name: "Aesthetix", logo: client4 },
  { id: 5, name: "Sangeetha", logo: client5 },
  { id: 6, name: "Skilled Answers", logo: client6 },
  // ── ADD MORE CLIENTS BELOW ──
  // { id: 7, name: "New Client", logo: newClient },
];
// ─────────────────────────────────────────────────────────────────────────────

/**
 * MarqueeTrack
 * Renders logos duplicated side-by-side for a seamless infinite loop.
 * `direction`: "left" | "right"
 * `speed`: animation duration in seconds (higher = slower scroll)
 */
const MarqueeTrack = ({ items, direction = "left", speed = 32 }) => {
  const animName = direction === "right" ? "marquee-right" : "marquee-left";

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className="flex gap-5 w-max"
        style={{ animation: `${animName} ${speed}s linear infinite` }}
      >
        {/* Duplicate for seamless loop */}
        {[...items, ...items].map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="group flex items-center justify-center shrink-0 rounded-2xl px-6 py-4 transition-all duration-300 cursor-default"
            style={{
              minWidth: "148px",
              height: "82px",
              border: "1px solid rgba(29,143,207,0.15)",
              background: "rgba(255,255,255,0.85)",
              boxShadow: "0 2px 12px rgba(10,60,130,0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "1px solid rgba(29,143,207,0.4)";
              e.currentTarget.style.boxShadow =
                "0 6px 24px rgba(29,143,207,0.15)";
              e.currentTarget.style.background = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(29,143,207,0.15)";
              e.currentTarget.style.boxShadow =
                "0 2px 12px rgba(10,60,130,0.07)";
              e.currentTarget.style.background = "rgba(255,255,255,0.85)";
            }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-11 max-w-30 object-contain transition-all duration-300 group-hover:scale-105"
              title={client.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients = () => {
  return (
    <>
      {/* Keyframe definitions */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section className="relative w-full py-20 overflow-hidden bg-[#fcfdfe]">
        {/* Subtle blobs — same palette as Infrastructure section */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-95 h-95 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(29,143,207,0.06) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(10,85,160,0.05) 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Heading — identical pattern to Products & Infrastructure ── */}
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="block h-0.5 w-10 rounded-sm bg-linear-to-r from-transparent to-[#38bdf8]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d8fcf]">
                Trusted By
              </span>
              <span className="block h-0.5 w-10 rounded-sm bg-linear-to-l from-transparent to-[#38bdf8]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#02123a]">
              Our Trusted <span className="text-[#1d8fcf]">Clients</span>
            </h2>
            <p className="mt-4 text-[#5a7090] max-w-xl mx-auto leading-relaxed text-base">
              We are proud to serve a growing family of clients across schools,
              corporates, and institutions — delivering quality garments they
              trust.
            </p>
          </div>

          {/* ── Marquee ── */}
          <MarqueeTrack items={clients} direction="left" speed={30} />

          {/* Client count badge */}
          <div className="mt-10 flex justify-center">
            <span
              className="text-[#5a7090] text-xs px-5 py-2 rounded-full"
              style={{
                border: "1px solid rgba(29,143,207,0.2)",
                background: "rgba(29,143,207,0.05)",
              }}
            >
              {clients.length}+ Happy Clients &amp; Growing
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;